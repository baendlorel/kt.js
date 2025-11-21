# @ktjs/router

Client-side router with navigation guards for KT.js.

## Overview

`@ktjs/router` is a lightweight, hash-based client-side router with powerful navigation guards and async/sync auto-adaptation. It provides all the essential routing features you need without the bloat.

## Features

- **Hash-Based Routing**: Uses URL hash for client-side navigation (`#/path`)
- **Path Matching**: Static and dynamic route matching with parameter extraction
  - Dynamic segments: `/user/:id`
  - Wildcard matching support
  - Optimized matching algorithm with pre-flattened routes
- **Navigation Guards**: Control navigation flow with powerful guard system
  - `beforeEach`: Global guard before every navigation
  - `beforeEnter`: Per-route guard for specific routes
  - `afterEach`: Global hook after successful navigation
  - Guard-level control with bitwise operations for fine-grained execution
- **Async/Sync Support**: Automatically adapts to environment
  - Uses async guards when `Promise` is available
  - Falls back to synchronous mode in older browsers
  - No configuration needed - it just works
- **Named Routes**: Navigate using route names instead of paths
- **Query Parameters**: Built-in query string parsing and handling
- **Route Context**: Access route information in handlers
  - Current route path and name
  - Dynamic parameters (`params`)
  - Query string parameters (`query`)
- **Error Handling**: Comprehensive error handling with `onError` callback
- **Type-Safe**: Full TypeScript support with intelligent type inference
- **Zero Dependencies**: Fully self-contained implementation (does **not** require `@ktjs/core`)
- **ES5 Compatible**: Works in IE9+ and all modern browsers

## Installation

```bash
pnpm add @ktjs/router @ktjs/core
```

## Basic Usage

```typescript
import { createRouter } from '@ktjs/router';
import { div, h1 } from '@ktjs/core';

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      handler: () => div({}, [h1({}, 'Home Page')]),
    },
    {
      path: '/about',
      name: 'about',
      handler: () => div({}, [h1({}, 'About Page')]),
    },
    {
      path: '/user/:id',
      name: 'user',
      handler: (ctx) =>
        div({}, [
          h1({}, `User Profile`),
          div({}, `User ID: ${ctx.params.id}`),
          div({}, `Query: ${JSON.stringify(ctx.query)}`),
        ]),
    },
  ],
  container: document.getElementById('app'),
});

// Start the router
router.start();

// Navigate programmatically
router.push('/user/123?tab=profile');
```

## Advanced Usage

### Navigation Guards

```typescript
import { createRouter, GuardLevel } from '@ktjs/router';

const router = createRouter({
  routes: [
    {
      path: '/admin',
      name: 'admin',
      handler: () => div({}, 'Admin Panel'),
      beforeEnter: (to, from) => {
        // Route-specific guard
        if (!isAuthenticated()) {
          console.log('Access denied');
          return false; // Block navigation
        }
        return true;
      },
    },
  ],
  beforeEach: async (to, from) => {
    // Global guard - can be async
    console.log(`Navigating from ${from?.path} to ${to.path}`);

    // You can return false to block navigation
    if (to.path.includes('forbidden')) {
      return false;
    }

    // Or return true to allow
    return true;
  },
  afterEach: (to) => {
    // Called after successful navigation
    document.title = to.name || to.path;

    // Track page views
    analytics.track('pageview', { path: to.path });
  },
  onError: (error) => {
    console.error('Navigation error:', error);
  },
  container: document.getElementById('app'),
});
```

### Named Route Navigation

```typescript
// Navigate by route name with parameters
router.push({
  name: 'user',
  params: { id: '456' },
  query: { tab: 'settings' },
});

// Equivalent to: router.push('/user/456?tab=settings');
```

### Accessing Current Route

```typescript
const current = router.current();

if (current) {
  console.log('Path:', current.path); // e.g., '/user/123'
  console.log('Name:', current.name); // e.g., 'user'
  console.log('Params:', current.params); // e.g., { id: '123' }
  console.log('Query:', current.query); // e.g., { tab: 'profile' }
}
```

## API Reference

### `createRouter(config)`

Creates and returns a router instance.

**Config Options:**

- `routes` (Array): Array of route configurations
  - `path` (string): Route path with optional dynamic segments (`:param`)
  - `name` (string, optional): Route name for named navigation
  - `handler` (function): Function that returns the element to render
  - `beforeEnter` (function, optional): Route-specific navigation guard
- `container` (HTMLElement): DOM element to render route content
- `beforeEach` (function, optional): Global guard before every navigation
- `afterEach` (function, optional): Global hook after successful navigation
- `onError` (function, optional): Error handler for navigation failures

**Router Instance Methods:**

- `start()`: Initialize the router and handle the current URL
- `push(location)`: Navigate to a new location (string path or route object)
- `current()`: Get current route information

### Route Handler Context

Route handlers receive a context object with:

- `params`: Object containing dynamic route parameters
- `query`: Object containing query string parameters
- `path`: Current route path
- `name`: Current route name (if defined)

## Performance Optimizations

The router includes several performance optimizations:

- **Pre-flattened Routes**: Nested routes are flattened during initialization
- **Efficient Matching**: Optimized regex-based path matching
- **Cached Methods**: Native DOM methods are cached
- **Minimal Re-renders**: Only updates DOM when route actually changes
- **Guard Level Control**: Fine-grained control over guard execution using bitwise operations

## Browser Compatibility

Works in all modern browsers and IE9+ with ES5 transpilation. In environments without `Promise` support, navigation guards run synchronously.

## License

MIT
