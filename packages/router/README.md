# @ktjs/router

<img src="https://raw.githubusercontent.com/baendlorel/kt.js/dev/.assets/ktjs-0.0.1.svg" alt="KT.js Logo" width="150"/>

[![npm version](https://img.shields.io/npm/v/@ktjs/router.svg)](https://www.npmjs.com/package/@ktjs/router)

> 📦 Part of [KT.js](https://github.com/baendlorel/kt.js) - A simple and easy-to-use web framework that never re-renders.

Client-side router with navigation guards for KT.js.

**Current Version:** 0.14.9

## Overview

`@ktjs/router` is a lightweight, hash-based client-side router with powerful async navigation guards. It provides all the essential routing features you need without the bloat. Simplified in v0.14.7+ to focus exclusively on hash-based routing for better performance and maintainability.

## Features

- **Hash-Based Routing**: Uses URL hash for client-side navigation (`#/path`) - **hash-mode only** since v0.14.7
- **Path Matching**: Static and dynamic route matching with parameter extraction
  - Dynamic segments: `/user/:id`
  - Wildcard matching support
  - Optimized matching algorithm with pre-flattened routes
- **Async Navigation Guards**: Control navigation flow with Promise-based guard system
  - `beforeEach`: Global guard before every navigation
  - `beforeEnter`: Per-route guard for specific routes
  - `afterEach`: Global hook after successful navigation
  - Guard-level control with bitwise operations for fine-grained execution
  - All guards are async - return `Promise` or immediate values
- **Named Routes**: Navigate using route names instead of paths
- **Query Parameters**: Built-in query string parsing and handling
- **Route Context**: Access route information in handlers
  - Current route path and name
  - Dynamic parameters (`params`)
  - Query string parameters (`query`)
- **Error Handling**: Comprehensive error handling with `onError` callback
- **Type-Safe**: Full TypeScript support with intelligent type inference
- **Zero Dependencies**: Fully self-contained implementation (does **not** require `@ktjs/core` for runtime, only for TypeScript types)
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
      beforeEnter: (to) => {
        // Render your home page
        const app = document.getElementById('app')!;
        app.innerHTML = '';
        app.appendChild(div({}, [h1({}, 'Home Page')]));
      },
    },
    {
      path: '/about',
      name: 'about',
      beforeEnter: (to) => {
        // Render your about page
        const app = document.getElementById('app')!;
        app.innerHTML = '';
        app.appendChild(div({}, [h1({}, 'About Page')]));
      },
    },
    {
      path: '/user/:id',
      name: 'user',
      beforeEnter: (to) => {
        // Render user profile with params
        const app = document.getElementById('app')!;
        app.innerHTML = '';
        app.appendChild(
          div({}, [
            h1({}, `User Profile`),
            div({}, `User ID: ${to.params.id}`),
            div({}, `Query: ${JSON.stringify(to.query)}`),
          ]),
        );
      },
    },
  ],
});

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
      beforeEnter: (to) => {
        // Route-specific guard and rendering
        if (!isAuthenticated()) {
          console.log('Access denied');
          return false; // Block navigation
        }

        // Render admin panel
        const app = document.getElementById('app')!;
        app.innerHTML = '';
        app.appendChild(div({}, 'Admin Panel'));
        return true;
      },
      after: (to) => {
        // Called after this route is successfully entered
        console.log('Admin page rendered');
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
  afterEach: (to, from) => {
    // Called after successful navigation
    document.title = to.name || to.path;

    // Track page views
    analytics.track('pageview', { path: to.path });
  },
  onError: (error) => {
    console.error('Navigation error:', error);
  },
  onNotFound: (path) => {
    console.log('404:', path);
    // You can render a 404 page here
  },
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
const current = router.current;

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
  - `meta` (object, optional): Metadata attached to the route
  - `component` (function): Function that returns HTMLElement or Promise<HTMLElement>
  - `beforeEnter` (function, optional): Route-specific guard, receives `(to: RouteContext) => boolean | string | NavOptions | void | Promise<...>`
  - `after` (function, optional): Route-specific hook after navigation
  - `children` (array, optional): Nested child routes
- `beforeEach` (function, optional): Global guard before every navigation, receives `(to: RouteContext, from: RouteContext | null) => boolean | string | NavOptions | void | Promise<...>`
- `afterEach` (function, optional): Global hook after successful navigation, receives `(to: RouteContext, from: RouteContext | null) => void | Promise<void>`
- `onNotFound` (function, optional): Handler for 404 errors, receives `(path: string) => void`
- `onError` (function, optional): Error handler for navigation failures, receives `(error: Error) => void`
- `prefix` (string, optional): URL prefix for all routes (default: `''`)

**Router Instance Properties:**

- `current` (property): Current active route context (or `null`)
- `history` (property): Array of navigation history
- `routes` (property): Normalized route configurations

**Router Instance Methods:**

- `push(location)`: Navigate to a new location (string path or route object with `name`/`params`)
- `replace(location)`: Replace current history entry
- `back()`: Navigate back in history
- `listen()`: Start listening to hash changes (auto-called on router creation since v0.14.7)
- `init(routes)`: Initialize router with route configurations

### Navigation Guards (v0.14.7+)

All guards are **async** and can return:

- `false`: Cancel navigation
- `string`: Redirect to the given path
- `NavOptions` object: Redirect with options `{ name, params, query }`
- `void` or `undefined`: Continue navigation

```typescript
// Global guard
beforeEach: (async (to, from) => {
  // Check authentication
  const isAuthenticated = await checkAuth();
  if (!isAuthenticated && to.path !== '/login') {
    return '/login'; // Redirect to login
  }
  // Return nothing to continue
},
  // Route guard
  {
    path: '/admin',
    component: () => AdminPage(),
    beforeEnter: async (to) => {
      const hasPermission = await checkAdminPermission();
      if (!hasPermission) {
        return false; // Cancel navigation
      }
    },
  });
```

### Route Context

Guards and hooks receive a `RouteContext` object with:

- `params`: Object containing dynamic route parameters
- `query`: Object containing query string parameters
- `path`: Current route path
- `name`: Current route name (if defined)

## Performance Optimizations

The router includes several performance optimizations:

- **Hash-Mode Only**: Simplified implementation focusing on hash-based routing (v0.14.7+)
- **Pre-flattened Routes**: Nested routes are flattened during initialization for faster lookups
- **Efficient Matching**: Optimized regex-based path matching with caching
- **Async Guards**: All guards use Promise-based architecture for consistent async handling
- **Guard Level Control**: Fine-grained control over guard execution using bitwise operations
- **Automatic Initialization**: Router auto-initializes on creation, no manual setup needed

## Browser Compatibility

Works in all modern browsers that support:

- Hash-based navigation
- ES5 (with transpilation)
- Promise API (required for async guards)

For older browsers without Promise support, include a Promise polyfill.

## License

MIT
