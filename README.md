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
- **[@ktjs/mui](./packages/mui)**: Material UI components built on top of KT.js (not included in kt.js package)

You can install the full package or individual packages as needed:

```bash
pnpm add kt.js

# Or install individual packages
pnpm add @ktjs/router     # Client-side router (requires @ktjs/core)
pnpm add @ktjs/mui        # Material UI components (requires @ktjs/core)
```

## Philosophy

As a web framework, repeatedly creating a large number of variables and objects is unacceptable. So I created KT.js.

KT.js follows one rule: **full control of DOM and avoid unnecessary repainting**.

## Core Features (@ktjs/core)

### JSX/TSX Support

KT.js provides first-class JSX/TSX support with zero virtual DOM overhead. JSX compiles directly to `h()` function calls.

```tsx
import { h } from '@ktjs/core';

// Function components
const Button = ({ onClick, children }) => (
  <button on:click={onClick} class="btn">
    {children}
  </button>
);

// Conditional rendering with k-if
const UserCard = ({ user, showDetails }) => (
  <div class="card">
    <h3>{user.name}</h3>
    <div k-if={showDetails}>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  </div>
);

// List rendering with KTFor
const UserList = ({ users }) => <KTFor list={users} key={(user) => user.id} map={(user) => <UserCard user={user} />} />;

// Async components
const AsyncContent = async () => {
  const data = await fetchData();
  return <div>{data}</div>;
};
```

### Reactive References

Create reactive values with `ref()` and listen to changes.

```typescript
import { ref } from '@ktjs/core';

const count = ref(0);
count.addOnChange((newVal, oldVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`);
});

// Update triggers change listeners
count.value = 1;
```

### Redraw Mechanism

Update elements in-place with `redraw()` for minimal DOM updates.

```typescript
const element = <div class="counter">{count}</div>;
element.redraw({ class: 'counter updated' }, [count.value + 1]);
```

## Router (@ktjs/router)

Client-side hash-based routing with async navigation guards.

### Basic Routing

```typescript
import { createRouter } from '@ktjs/router';

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => <HomePage />
    },
    {
      path: '/user/:id',
      name: 'user',
      component: (to) => <UserPage id={to.params.id} />
    }
  ],
  beforeEach: async (to, from) => {
    // Auth check
    if (to.path === '/admin' && !isAdmin()) {
      return '/login';
    }
  }
});
```

### Navigation

```typescript
// Programmatic navigation
router.push('/user/123');
router.push({ name: 'user', params: { id: '456' } });

// Access current route
console.log(router.current?.path, router.current?.params);
```

## Installation

```bash
# Full package (includes core)
pnpm add kt.js

# Individual packages
pnpm add @ktjs/core @ktjs/router
```

## TypeScript Configuration

For JSX/TSX support, configure your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@ktjs/core"
  }
}
```

## Philosophy

- **Direct DOM Manipulation**: No virtual DOM, minimal abstraction
- **Zero Re-renders**: Update only what changes, avoid full component re-renders
- **Type Safety**: Full TypeScript support with accurate type inference
- **Lightweight**: Small bundle size, no unnecessary dependencies

## License

MIT
