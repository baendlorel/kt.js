# KT.js - AI Assistant Usage Guide

## What is KT.js?

KT.js is a lightweight, direct DOM manipulation framework that **never re-renders**. Unlike React or Vue which use virtual DOM and automatic re-rendering, KT.js gives you fine-grained control over when and how DOM updates happen. It compiles JSX directly to DOM operations without any virtual DOM overhead.

**Core Philosophy**: Create DOM elements once, then update them manually when needed using the `redraw()` method. No automatic reactivity, no hidden magic - just direct control.

## Package Structure

```
@ktjs/core     - Core JSX/DOM utilities (h function, JSX runtime, redraw mechanism)
@ktjs/router   - Client-side hash-based router with navigation guards
@ktjs/kt.js    - Meta package that exports all the above
```

## Setup

### Installation

```bash
pnpm add kt.js
pnpm add @ktjs/router
```

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "kt.js"
  }
}
```

## JSX Usage

### Basic JSX Syntax

KT.js supports standard JSX syntax. Elements are created as **real DOM nodes** immediately:

```tsx
// Simple element
const button = <button class="btn">Click me</button>;
// button is HTMLButtonElement

// Nested elements
const card = (
  <div class="card">
    <h2>Title</h2>
    <p>Description text</p>
  </div>
);
// card is HTMLDivElement
```

**Key Points:**

- JSX creates real HTMLElement instances, not virtual DOM
- Use `class` (not `className`) for CSS classes

### Event Handlers

Use `on:<eventName>` syntax for event listeners:

```tsx
const button = <button on:click={() => console.log('clicked')}>Click me</button>;

const input = (
  <input type="text" on:input={(e) => console.log(e.target.value)} on:blur={() => console.log('blurred')} />
);
```

### Function Components

Function components are just functions that return HTMLElement:

```tsx
// Simple component
function Greeting({ name }: { name: string }) {
  return <div>Hello, {name}!</div>;
}

const element = <Greeting name="World" />;
```

## The Redraw Mechanism (Most Important!)

This is the **core feature** that makes KT.js unique. Since there's no automatic re-rendering, you manually control updates using the `redraw()` method.

### Redraw on Native Elements

```tsx
import { KTHTMLElement } from 'kt.js';

// Create element with type assertion
const div = (<div>Initial content</div>) as KTHTMLElement;

// Update content manually
div.redraw(undefined, 'New content');
// The div now shows "New content"

// Update attributes
const button = (<button class="btn">Click</button>) as KTHTMLElement;
button.redraw({ class: 'btn active' }, 'Clicked!');
```

### Redraw on Function Components

```tsx
// Counter component with state
function Counter({ count = 0 }: { count?: number }) {
  return (
    <div class="counter">
      <span>Count: {count}</span>
      <button on:click={() => element.redraw({ count: count + 1 })}>Increment</button>
    </div>
  );
}

// Create component instance
const element = (<Counter />) as KTHTMLElement;

// The button click calls element.redraw() which:
// 1. Calls Counter({ count: 1 }) to create new DOM
// 2. Replaces old element with new one in the DOM
// 3. Preserves the redraw method on the new element

// You can also trigger updates externally
element.redraw({ count: 10 });
```

### Signature

```typescript
element.redraw(newProps?: object, newChildren?: string | HTMLElement | Array)
```

- **For function components**: Only `newProps` is used. The component is called again with merged props.
- **For native elements**: Both `newProps` and `newChildren` can be updated.

### Important Notes

1. **`redraw()` replaces the element**: The old element is replaced with a new one using `replaceWith()`
2. **Redraw method is preserved**: The new element automatically gets the same `redraw` method
3. **Props are merged**: New props merge with existing ones (shallow merge)
4. **Type assertion required**: Cast to `KTHTMLElement` to access the `redraw` method

## Ref System

Use `ref()` to get references to created elements:

```tsx
import { ref } from 'kt.js';

const buttonRef = ref<HTMLButtonElement>();

const button = <button ref={buttonRef}>Click me</button>;

// Access the element
buttonRef.value.disabled = true;
buttonRef.value.textContent = 'Disabled';
```

**Note**: `ref()` is NOT reactive like Vue refs - it's just a container to store element references.

## Async Components

Handle async components with `KTAsync`:

```tsx
import { KTAsync } from 'kt.js';

// Async component that loads data
async function UserProfile({ userId }: { userId: string }) {
  const data = await fetch(`/api/users/${userId}`).then((r) => r.json());

  return (
    <div class="profile">
      <h2>{data.name}</h2>
      <p>{data.bio}</p>
    </div>
  );
}

// Use with KTAsync
const app = (
  <div>
    <h1>User Profile</h1>
    <KTAsync component={() => UserProfile({ userId: '123' })} skeleton={<div class="loading">Loading...</div>} />
  </div>
);
```

**How it works:**

- Creates a placeholder (skeleton or comment node) immediately
- When Promise resolves, replaces placeholder with actual element
- No manual DOM manipulation needed

## Router (@ktjs/router)

Hash-based client-side router with navigation guards.

### Basic Setup

```tsx
import { createRouter } from '@ktjs/router';

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: (to) => {
        // Render home page
        const app = document.getElementById('app')!;
        app.innerHTML = '';
        app.appendChild(<div>Home Page</div>);
      },
    },
    {
      path: '/user/:id',
      name: 'user',
      beforeEnter: (to) => {
        // Access route params
        const userId = to.params.id;
        const app = document.getElementById('app')!;
        app.innerHTML = '';
        app.appendChild(<div>User ID: {userId}</div>);
      },
    },
  ],

  // Global guard
  beforeEach: (to, from) => {
    console.log(`Navigating from ${from?.path} to ${to.path}`);
    // Return false to cancel navigation
    // Return string or NavOptions to redirect
  },

  // After navigation
  afterEach: () => {
    console.log('Navigation complete');
  },
});

// Start listening to hash changes
router.listen();
```

### Navigation

```typescript
// By path
router.push('/user/123');
router.push('/search?q=test');

// By name
router.push({ name: 'user', params: { id: '123' } });

// Replace (no history entry)
router.replace('/about');

// Go back
router.back();
```

### Route Context

```typescript
interface RouteContext {
  path: string; // Current path: "/user/123"
  name: string; // Route name: "user"
  params: Record<string, string>; // { id: "123" }
  query: Record<string, string>; // { tab: "profile" }
  matched: RouteConfig[]; // Array of matched routes
}
```

### Navigation Guards

```typescript
// Global guard
beforeEach: async (to, from) => {
  // Check authentication
  if (!isAuthenticated()) {
    return '/login';  // Redirect
  }
  // Return nothing to continue
}

// Per-route guard
{
  path: '/admin',
  beforeEnter: (to) => {
    if (!isAdmin()) {
      return false;  // Cancel navigation
    }
  }
}
```

### Nested Routes

```typescript
const router = createRouter({
  routes: [
    {
      path: '/user',
      beforeEnter: (to) => {
        // Render user layout
      },
      children: [
        {
          path: '/user/profile',
          beforeEnter: (to) => {
            // Render profile page inside user layout
          },
        },
        {
          path: '/user/settings',
          beforeEnter: (to) => {
            // Render settings page inside user layout
          },
        },
      ],
    },
  ],
});
```

## Common Patterns

### Building Interactive UIs

```tsx
import { KTHTMLElement } from 'kt.js';

function TodoApp() {
  const todos: string[] = [];

  function TodoList({ items }: { items: string[] }) {
    return (
      <ul>
        {items.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    );
  }

  const input = (<input type="text" />) as HTMLInputElement;
  const list = (<TodoList items={todos} />) as KTHTMLElement;

  const addButton = (
    <button
      on:click={() => {
        todos.push(input.value);
        input.value = '';
        list.redraw({ items: [...todos] });
      }}
    >
      Add Todo
    </button>
  );

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        {input}
        {addButton}
      </div>
      {list}
    </div>
  );
}
```

### Form Handling

```tsx
function LoginForm() {
  const emailInput = (<input type="email" placeholder="Email" />) as HTMLInputElement;
  const passwordInput = (<input type="password" placeholder="Password" />) as HTMLInputElement;
  const errorMsg = (<div class="error"></div>) as KTHTMLElement;

  const handleSubmit = async () => {
    try {
      await login(emailInput.value, passwordInput.value);
      router.push('/dashboard');
    } catch (error) {
      errorMsg.redraw(undefined, 'Login failed!');
    }
  };

  return (
    <form
      on:submit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {emailInput}
      {passwordInput}
      <button type="submit">Login</button>
      {errorMsg}
    </form>
  );
}
```

## Key Differences from Other Frameworks

| Feature    | React/Vue                    | KT.js                         |
| ---------- | ---------------------------- | ----------------------------- |
| Rendering  | Virtual DOM + Auto re-render | Direct DOM + Manual redraw    |
| State      | Reactive state system        | Plain JavaScript variables    |
| Updates    | Automatic on state change    | Manual via `redraw()`         |
| Components | Always re-execute            | Re-execute only on `redraw()` |
| JSX output | Virtual nodes                | Real HTMLElement              |

## Best Practices

1. **Cast to KTHTMLElement when you need redraw**:

   ```tsx
   const element = (<Component />) as KTHTMLElement;
   ```

2. **Store element references for updates**:

   ```tsx
   const counter = (<Counter count={0} />) as KTHTMLElement;
   // Later: counter.redraw({ count: 5 });
   ```

3. **Use refs for direct DOM access**:

   ```tsx
   const inputRef = ref<HTMLInputElement>();
   const input = <input ref={inputRef} />;
   inputRef.value.focus();
   ```

4. **Keep state in closures or external stores**:

   ```tsx
   function Component() {
     let count = 0; // This persists across redraws if needed elsewhere
     return <div>Count: {count}</div>;
   }
   ```

5. **Router handles page-level rendering**:
   - Use router's `beforeEnter` to render entire pages
   - Use `redraw()` for component-level updates within a page

## Common Mistakes to Avoid

❌ **Don't expect automatic updates**:

```tsx
let count = 0;
const div = <div>Count: {count}</div>;
count++; // This won't update the DOM!
```

✅ **Use redraw instead**:

```tsx
let count = 0;
const element = (<div>Count: {count}</div>) as KTHTMLElement;
count++;
element.redraw(undefined, `Count: ${count}`);
```

```tsx
const element = (<Component />) as KTHTMLElement;
element.redraw(); // Works!
```

## Summary

- **KT.js is about manual control**: You decide when to update the DOM
- **JSX creates real DOM**: No virtual DOM, no reconciliation
- **`redraw()` is the update mechanism**: Call it when you want to update a component
- **Router handles page navigation**: Use it for SPA routing with guards
- **Simple and direct**: No magic, no hidden reactivity, just JavaScript and DOM APIs
