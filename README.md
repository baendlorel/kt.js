# kt.js

<img src="https://raw.githubusercontent.com/baendlorel/kt.js/dev/.assets/ktjs-0.0.1.svg" alt="KT.js Logo" width="150"/>

[![npm version](https://img.shields.io/npm/v/kt.js.svg)](https://www.npmjs.com/package/kt.js) [![license](https://img.shields.io/github/license/baendlorel/kt.js.svg)](https://github.com/baendlorel/kt.js/blob/main/LICENSE)

[CHANGLOG✨](CHANGELOG.md)

> Note: This framework is still under development. APIs, type declarations, and other parts **may change frequently**. If you use it, please watch for updates in the near future. Feel free to mail me if you have any questions!

KT.js is a tiny DOM utility focused on direct DOM manipulation. It favors not forcing re-renders and aims to keep DOM updates to the absolute minimum for maximum performance.

For more awesome packages, check out [my homepage💛](https://baendlorel.github.io/?repoType=npm)

## Architecture

KT.js is now a **monorepo** containing multiple packages:

- **[kt.js](./packages/kt.js)**: Main entry package that re-exports all functionality
- **[@ktjs/core](./packages/core)**: Core DOM manipulation utilities and the `h` function. SX/TSX support with full TypeScript integration (included in kt.js package)
- **[@ktjs/router](./packages/router)**: Client-side routing with navigation guards (not included in kt.js package)
- **[@ktjs/shortcuts](./packages/shortcuts)**: Convenient shortcut functions for common operations

You can install the full package or individual packages as needed:

```bash
# Install the main package (includes core + jsx + shortcuts)
pnpm add kt.js

# Or install individual packages
pnpm add @ktjs/core       # Core DOM utilities (independent)
pnpm add @ktjs/router     # Client-side router (independent)
pnpm add @ktjs/shortcuts  # Shortcuts (requires @ktjs/core)
```

## Philosophy

As a web framework, repeatedly creating a large number of variables and objects is unacceptable. So I created KT.js.

KT.js follows one rule: **full control of DOM and avoid unnecessary repainting**.

## Key Features

- **Monorepo Architecture**: Modular packages that can be installed independently or together
- **Tiny Bundle Size**: Minimal runtime overhead with aggressive tree-shaking
- **`h` function**: Create DOM elements with a simple, flexible API
  - Shortcut functions for all HTML elements (`div`, `span`, `button`, etc.)
  - Event handlers with `on:<eventName>` syntax or function attributes
  - Full TypeScript support with intelligent type inference
- **JSX/TSX Support**: Full JSX syntax support with TypeScript integration
  - Zero virtual DOM - JSX compiles directly to `h()` function calls
  - Full HTML element type inference (`<button>` returns `HTMLButtonElement`)
  - Support for `on:click` event handler syntax
  - `redraw()` method for controlled component updates (v0.11+)
  - `k-if` directive for conditional rendering (v0.14.6+)
  - Array children support for seamless `.map()` integration (v0.14.1+)
- **List Rendering**: Efficient list rendering with `KTFor` component (v0.16.0+)
  - Key-based DOM reuse similar to Svelte's `{#each}` blocks
  - Minimal DOM operations for optimal performance
  - Comment anchor node for flexible positioning
  - `KTForStatic` for simple lists without key optimization
- **Async Components**: Built-in support for Promise-based components
  - `KTAsync` component for handling async operations
  - Automatic placeholder management during loading
  - Seamless integration with JSX/TSX syntax
- **Client-Side Router** (separate package):
  - Hash-based routing only (simplified from v0.14.7+)
  - Async navigation guards with Promise support
  - Dynamic route parameters and query string parsing
  - RouterView component for declarative routing
  - Pure routing logic - no rendering, no dependencies
- **Shortcuts & Utilities**:
  - `withDefaults`: Wrap element creation functions with default properties
  - Convenient shorthand functions for common operations
  - Form helpers and layout utilities
- **Full ES5 Compatibility**: Works in IE9+ and all modern browsers
  - Transpiled to ES5 with no modern syntax
  - Optional minimal Promise polyfill for older environments
- **Shared Runtime**: Efficient code sharing across packages with zero overhead

## Getting started

Install via package managers:

```bash
npm install kt.js
# or
pnpm add kt.js
```

```ts
import { h, div } from 'kt.js';

const container = div('container', [div('header'), div('body', 'something'), div('footer')]);
const app = h('section', { id: 'app' }, container);
```

This will create the following DOM structure:

```html
<section id="app">
  <div class="container">
    <div class="header"></div>
    <div class="body">something</div>
    <div class="footer"></div>
  </div>
</section>
```

### Using JSX/TSX

KT.js now has full JSX support! With the `@ktjs/jsx` package (included in the main `kt.js` package), you can write components using familiar JSX syntax:

**TypeScript Configuration** (`tsconfig.json`):

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "kt.js"
  }
}
```

**Basic JSX Example**:

```tsx
import { jsx } from 'kt.js';

function Counter() {
  const count = 0;

  return (
    <div class="counter">
      <h1>Counter: {count}</h1>
      <button on:click={() => console.log('Clicked!')}>Increment</button>
    </div>
  );
}

// JSX compiles to direct h() function calls - no virtual DOM!
const counterElement = <Counter />;
```

**Event Handling with @ Syntax**:

```tsx
function App() {
  const handleClick = () => alert('Button clicked!');

  return (
    <div>
      <button on:click={handleClick}>Click me</button>
    </div>
  );
}
```

**Type Safety**:

```tsx
// TypeScript knows this is an HTMLButtonElement
const button: HTMLButtonElement = <button>Click</button>;

// TypeScript knows this is an HTMLInputElement
const input: HTMLInputElement = <input type="text" value="hello" />;

// TypeScript provides autocomplete for HTML attributes
const div: HTMLDivElement = <div className="container" id="main" />;
```

**Important Notes**:

- KT.js JSX has **no Fragment support** - we don't have a Fragment concept
- JSX compiles directly to `h()` function calls - **zero virtual DOM overhead**
- Use `on:click` syntax for event handlers to avoid conflicts with existing attributes
- All JSX elements have proper HTML element type inference in TypeScript
- Use `k-if` attribute for conditional rendering (v0.14.6+)
- Children can be arrays for easy `.map()` integration (v0.14.1+)

**Conditional Rendering with k-if** (v0.14.6+):

```tsx
import { jsx } from 'kt.js';

function UserProfile({ user, isLoggedIn }: { user: any; isLoggedIn: boolean }) {
  return (
    <div>
      <h1>Profile</h1>
      {/* Element only created if condition is true */}
      <div k-if={isLoggedIn}>
        <p>Welcome, {user.name}!</p>
        <button>Logout</button>
      </div>
      {/* Element only created if condition is true */}
      <div k-if={!isLoggedIn}>
        <p>Please log in</p>
        <button>Login</button>
      </div>
    </div>
  );
}
```

**Array Children Support** (v0.14.1+):

```tsx
import { jsx } from 'kt.js';

function TodoList({ todos }: { todos: string[] }) {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {/* Map arrays directly as children */}
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

// Mix mapped elements with other elements
function MixedList({ items }: { items: string[] }) {
  return (
    <ul>
      <li>Header Item</li>
      {items.map((item) => (
        <li>{item}</li>
      ))}
      <li>Footer Item</li>
    </ul>
  );
}
```

### Async Components with KTAsync

KT.js provides built-in support for async components through the `KTAsync` component:

```tsx
import { KTAsync, ref } from 'kt.js';

// Define an async component that returns a Promise<HTMLElement>
const AsyncUserCard = function () {
  return fetch('/api/user')
    .then((res) => res.json())
    .then((user) => (
      <div class="user-card">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    ));
};

// Use KTAsync to handle the async component
function App() {
  return (
    <div class="app">
      <h1>User Profile</h1>
      <KTAsync component={AsyncUserCard} />
    </div>
  );
}

// The component starts with a placeholder comment node
// When the Promise resolves, it automatically replaces with the actual element
```

**How KTAsync works:**

1. Creates a placeholder comment node (`ktjs-suspense-placeholder`) immediately
2. Calls your component function (which should return a `Promise<HTMLElement>` or `HTMLElement`)
3. When the Promise resolves, automatically replaces the placeholder with the resolved element
4. If your component returns a non-Promise value, it's used directly without async handling

**Example with dynamic updates:**

```tsx
const DynamicContent = function () {
  const count = ref(0);
  const container = (
    <div>
      <p>Count: {count}</p>
      <button on:click={() => count.value++}>Increment</button>
    </div>
  );

  // Simulate async data loading
  return new Promise<HTMLElement>((resolve) => {
    setTimeout(() => resolve(container), 500);
  });
};

// Usage
const app = (
  <div>
    <h1>Loading async content...</h1>
    <KTAsync component={DynamicContent} />
  </div>
);
```

If you give a function in attributes, it will be treated as an event listener, and the key will be considered as the event name. `@<eventName>` will also be considered as the handler to avoid conflicts with existing attributes:

```ts
const button = btn(
  {
    dblclick: '22',
    'on:dblclick': function trueHandler() {
      /* ... */
    },
  },
  'Click me',
);

// This is equivalent to:
const button = btn(undefined, 'Click me');
button.setAttribute('dblclick', '22');
button.addEventListener('click', () => alert('Clicked!'));
button.addEventListener('dblclick', function trueHandler() {
  /* ... */
});
```

### Working with CSS-in-JS Libraries

KT.js works seamlessly with CSS-in-JS libraries like `@emotion/css`:

```ts
import { css } from '@emotion/css';
import { h, div } from 'kt.js';

const className = css`
  color: red;
  font-size: 20px;
`;

// Pass class name as attribute
h('div', { class: className }, 'Styled text');

// Or as the first string argument
div(className, 'Styled text');
```

### Using Shortcuts with Default Values

The `withDefaults` function allows you to create element factories with predefined properties:

```ts
import { withDefaults, div, button } from 'kt.js';

// Create a styled div factory
const card = withDefaults(div, { class: 'card' });
const blueCard = withDefaults(card, { style: 'background: blue' });

// Use them
const myCard = card('card-body', 'Content'); // <div class="card"><div class="card-body">Content</div></div>
const myBlueCard = blueCard('title', 'Blue!'); // <div class="card" style="background: blue"><div class="title">Blue!</div></div>
```

## Router

The router is available as a separate package `@ktjs/router`:

```ts
import { createRouter } from '@ktjs/router';
import { div, h1 } from 'kt.js';

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: (to) => {
        // Render your page here
        document.getElementById('app')!.innerHTML = '';
        document.getElementById('app')!.appendChild(div({}, [h1({}, 'Home Page')]));
      },
    },
    {
      path: '/user/:id',
      name: 'user',
      beforeEnter: (to) => {
        // Route-specific guard and rendering
        console.log('Entering user page');
        document.getElementById('app')!.innerHTML = '';
        document.getElementById('app')!.appendChild(div({}, [h1({}, `User ${to.params.id}`)]));
        return true;
      },
    },
  ],
  beforeEach: async (to, from) => {
    // Global navigation guard - return false to block navigation
    console.log('Navigating to:', to.path);
    return true;
  },
  afterEach: (to) => {
    // Called after successful navigation
    document.title = to.name || to.path;
  },
  onError: (error) => {
    console.error('Router error:', error);
  },
});

// Navigate programmatically
router.push('/user/123');
router.push('/user/456?page=2');

// Navigate by route name
router.push({ name: 'user', params: { id: '789' } });

// Get current route
console.log(router.current?.path, router.current?.params, router.current?.query);
```

### Router Features

- **Hash-based Routing Only** (v0.14.7+): Uses URL hash for client-side navigation (`#/path`)
- **Dynamic Parameters**: Support for dynamic route segments (`/user/:id`)
- **Query Strings**: Automatic parsing of query parameters (`?key=value`)
- **Named Routes**: Navigate using route names instead of paths
- **Async Navigation Guards**:
  - `beforeEach`: Global guard before navigation (async)
  - `beforeEnter`: Per-route guard (can also be used for rendering, async)
  - `afterEach`: Global hook after navigation
  - All guards support Promise-based async operations
  - Guards can return `false` to cancel, string/object to redirect
  - `GuardLevel` for fine-grained control over guard execution
- **Error Handling**: `onError` and `onNotFound` callbacks
- **Optimized Performance**: Pre-flattened routes and efficient matching algorithm
- **Zero Dependencies**: Fully self-contained router implementation (does not require `@ktjs/core` for runtime, only for TypeScript types)
- **Pure Routing**: No rendering logic - you control the DOM
- **Automatic Initialization**: Router auto-initializes on creation (v0.14.7+)

## Browser Compatibility

KT.js is transpiled to ES5 and works in all modern browsers as well as legacy browsers including IE9+.

### Promise Polyfill

For environments without native `Promise` support (like IE).

```js
import 'some promise polyfill'; // Will fallback to sync version if Promise is not available
import { h, div, createRouter } from 'kt.js';
```

## License

MIT
