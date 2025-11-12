# KT.js Router Design

## Design Philosophy

- **Minimalist**: Achieve 70-80% functionality with minimal code
- **Synchronous**: All operations are synchronous (async version will be derived later)
- **Direct**: Simple, predictable API with no magic
- **Type-safe**: Full TypeScript support

## Core API

### 1. Router Creation

```ts
interface RouterConfig {
  routes: RouteConfig[];
  onNotFound?: (path: string) => void | false;
  onError?: (error: Error, route?: RouteConfig) => void;
  beforeEach?: (to: RouteContext, from: RouteContext | null) => boolean | void;
  afterEach?: (to: RouteContext, from: RouteContext | null) => void;
}

interface RouteConfig {
  path: string;
  name?: string;
  meta?: Record<string, any>;
  before?: (context: RouteContext) => boolean | void;
  after?: (context: RouteContext) => void;
  children?: RouteConfig[];
}

const router = createRouter(config: RouterConfig);
```

### 2. Navigation Methods

```ts
// Full navigation with guards
router.push(location: string | NavigateOptions): boolean;

// Silent navigation (bypasses beforeEach guards)
router.silentPush(location: string | NavigateOptions): boolean;

// Navigate back
router.back(): void;

// Navigate forward
router.forward(): void;

// Replace current entry (no new history)
router.replace(location: string | NavigateOptions): boolean;

interface NavigateOptions {
  path?: string;
  name?: string;
  params?: Record<string, string>;
  query?: Record<string, string>;
}
```

### 3. Router Instance Properties

```ts
router.current: RouteContext | null;
router.history: RouteContext[];  // Navigation history
```

## Route Matching

### Path Format

```ts
// Static path
{ path: '/home' }

// Dynamic params
{ path: '/user/:id' }
{ path: '/post/:category/:id' }

// Nested routes
{
  path: '/admin',
  children: [
    { path: 'users' },      // matches /admin/users
    { path: 'settings' }    // matches /admin/settings
  ]
}
```

### URL Building

```ts
// params -> path segments
push({ path: '/user/:id', params: { id: '123' } });
// Result: /user/123

// query -> query string
push({ path: '/search', query: { q: 'test', page: '2' } });
// Result: /search?q=test&page=2

// Combined
push({
  path: '/user/:id/posts',
  params: { id: '123' },
  query: { sort: 'date' },
});
// Result: /user/123/posts?sort=date
```

## Guard System

### Guard Execution Order

```ts
beforeEach (global)
  -> before (route-level)
    -> [Navigate & Update DOM]
      -> after (route-level)
        -> afterEach (global)
```

### Guard Control Flow

**Return Values:**

- `false`: Block navigation, stay on current route
- `true` or `undefined`: Allow navigation to proceed

```ts
// Example: Authentication guard
beforeEach: (to, from) => {
  if (to.meta?.requiresAuth && !isLoggedIn()) {
    return false; // Block navigation
  }
  // Allow navigation
};
```

### Silent Navigation

`silentPush()` bypasses **only** the global `beforeEach` guard, but still executes:

- Route-level `before` guard
- Route-level `after` hook
- Global `afterEach` hook

## Route Context

```ts
interface RouteContext {
  path: string; // Full matched path
  name?: string; // Route name if defined
  params: Record<string, string>; // Dynamic params from path
  query: Record<string, string>; // Query parameters
  meta: Record<string, any>; // Route meta data
  matched: RouteConfig[]; // Array of matched routes (for nested)
}
```

## Error Handling

### Not Found (404)

```ts
onNotFound: (path) => {
  console.log(`Route not found: ${path}`);
  // Return false to prevent default behavior
  return false;
};
```

### General Errors

```ts
onError: (error, route) => {
  console.error('Router error:', error);
  if (route) {
    console.log('Failed route:', route.path);
  }
};
```

## Browser History Integration

- Uses `history.pushState()` for `push()`
- Uses `history.replaceState()` for `replace()`
- Listens to `popstate` event for back/forward buttons
- Updates `window.location` automatically

## Implementation Details

### Internal Structure

```ts
class Router {
  private config: RouterConfig;
  private routes: Map<string, RouteConfig>; // name -> route
  private pathRoutes: RouteConfig[]; // for path matching

  current: RouteContext | null;
  history: RouteContext[];

  private navigate(options: NavigateOptions, silent: boolean): boolean;
  private matchRoute(path: string): RouteMatch | null;
  private buildPath(route: RouteConfig, params?: Record<string, string>): string;
  private parseQuery(queryString: string): Record<string, string>;
  private buildQuery(query: Record<string, string>): string;
  private executeGuards(to: RouteContext, from: RouteContext | null, silent: boolean): boolean;
}
```

### Route Matching Algorithm

1. Normalize input path (remove trailing slashes, etc.)
2. Try exact match first
3. Try dynamic routes with params extraction
4. Try nested routes recursively
5. Return null if no match (triggers `onNotFound`)

### Params Extraction

```ts
// Pattern: /user/:id/post/:postId
// Path:    /user/123/post/456
// Result:  { id: '123', postId: '456' }
```

### Query String Handling

```ts
// Build: { q: 'hello world', page: '2' }
// Result: ?q=hello%20world&page=2

// Parse: ?q=hello%20world&page=2
// Result: { q: 'hello world', page: '2' }
```

## Usage Example

```ts
const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      before: () => {
        console.log('Entering home');
      },
    },
    {
      path: '/user/:id',
      name: 'user',
      meta: { requiresAuth: true },
      children: [
        { path: 'profile', name: 'userProfile' },
        { path: 'settings', name: 'userSettings' },
      ],
    },
  ],

  beforeEach: (to, from) => {
    if (to.meta?.requiresAuth && !isAuthenticated()) {
      router.push({ name: 'home' });
      return false;
    }
  },

  afterEach: (to, from) => {
    document.title = to.name || 'App';
  },

  onNotFound: (path) => {
    console.warn(`404: ${path}`);
    router.push({ name: 'home' });
  },
});

// Navigate by path
router.push('/user/123');

// Navigate by name
router.push({ name: 'user', params: { id: '123' } });

// Navigate with query
router.push({ path: '/search', query: { q: 'test' } });

// Silent navigation (no beforeEach)
router.silentPush({ name: 'home' });

// Browser back/forward
router.back();
router.forward();
```

## Type Definitions

```ts
// src/types/router.d.ts
export interface RouterConfig {
  /* ... */
}
export interface RouteConfig {
  /* ... */
}
export interface RouteContext {
  /* ... */
}
export interface NavigateOptions {
  /* ... */
}
export interface Router {
  /* ... */
}
```

## File Structure

```
src/core/router/
├── index.ts           # Main router implementation
├── matcher.ts         # Route matching logic
├── utils.ts           # URL/query string helpers
```

## Limitations (By Design)

1. **No async operations** - Guards are synchronous only
2. **No lazy loading** - All routes defined upfront
3. **No route transitions** - Direct navigation only
4. **No scroll behavior** - Manual control required
5. **Basic nested routes** - No advanced composition patterns

## Migration Path to Async

The synchronous design allows clean transformation to async:

```ts
// Sync version
beforeEach: (to, from) => {
  return checkAuth();
};

// Future async version
beforeEach: async (to, from) => {
  return await checkAuthAsync();
};
```

All boolean returns and control flow remain identical.
