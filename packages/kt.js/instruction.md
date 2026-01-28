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

JSX creates **real DOM nodes** immediately (not virtual DOM):

```tsx
const button = <button class="btn">Click me</button>; // HTMLButtonElement
const card = (
  <div class="card">
    <h2>Title</h2>
  </div>
); // HTMLDivElement
```

- Use `class` (not `className`)
- Use `on:<eventName>` for event handlers

### Event Handlers

```tsx
<button on:click={() => console.log('clicked')}>Click</button>
<input on:input={(e) => console.log(e.target.value)} />
```

### Function Components

```tsx
function Greeting({ name }: { name: string }) {
  return <div>Hello, {name}!</div>;
}
const element = <Greeting name="World" />;
```

### Conditional Rendering with k-if

```tsx
const message = <div k-if={isVisible}>Hello!</div>; // Creates comment node if false

<span k-if={isLoggedIn}>Welcome!</span>
<button k-if={!isLoggedIn}>Login</button>
```

- One-time evaluation (not reactive)
- Returns comment node (`<!-- k-if -->`) when false

## The Redraw Mechanism (Core Feature)

Manually control updates with `redraw()` - no automatic re-rendering.

```tsx
import { KTHTMLElement } from 'kt.js';

// Native elements
const div = (<div>Initial</div>) as KTHTMLElement;
div.redraw(undefined, 'New content');
div.redraw({ class: 'active' }, 'Updated');

// Function components
function Counter({ count = 0 }: { count?: number }) {
  return (
    <div>
      <span>Count: {count}</span>
      <button on:click={() => element.redraw({ count: count + 1 })}>+</button>
    </div>
  );
}
const element = (<Counter />) as KTHTMLElement;
element.redraw({ count: 10 }); // Re-executes Counter with new props
```

**Signature:** `element.redraw(newProps?, newChildren?)`

**Key points:**

- Replaces element using `replaceWith()`
- Props are merged (shallow)
- Redraw method is preserved
- Cast to `KTHTMLElement` to access

## Ref System

```tsx
import { ref } from 'kt.js';

const inputRef = ref<HTMLInputElement>();
const input = <input ref={inputRef} />;
inputRef.value.focus(); // Direct DOM access
```

Note: Not reactive, just a container for element references.

## Async Components

```tsx
import { KTAsync } from 'kt.js';

async function UserProfile({ userId }: { userId: string }) {
  const data = await fetch(`/api/users/${userId}`).then((r) => r.json());
  return (
    <div>
      <h2>{data.name}</h2>
    </div>
  );
}

<KTAsync component={() => UserProfile({ userId: '123' })} skeleton={<div>Loading...</div>} />;
```

Creates placeholder, replaces with resolved element.

## List Rendering with KTFor

Efficient list rendering with key-based DOM reuse:

```tsx
import { KTFor } from 'kt.js';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

let todos: Todo[] = [
  { id: 1, text: 'Learn KT.js', done: true },
  { id: 2, text: 'Build app', done: false },
];

// Create optimized list
const todoList = (
  <KTFor
    list={todos}
    key={(item) => item.id} // Optional, defaults to identity function
    map={(item, index) => (
      <div class={`todo ${item.done ? 'done' : ''}`}>
        <input type="checkbox" checked={item.done} />
        <span>{item.text}</span>
        <button on:click={() => deleteTodo(item.id)}>Delete</button>
      </div>
    )}
  />
);

// Add to DOM
document.body.appendChild(todoList);

// Update list - only changed items are updated
todos = [...todos, { id: 3, text: 'New task', done: false }];
todoList.redraw({ list: todos });
```

**How it works:**

- Returns a Comment anchor node (`<!-- kt-for -->`) with `__kt_for_list__` property
- Stores rendered elements in `__kt_for_list__` array
- When appended via `applyContent`, anchor and all list items are added to DOM
- Uses key-based diff algorithm to reuse DOM nodes on updates
- Only adds/removes/moves nodes that actually changed

**Props:**

- `list`: Array of items to render
- `map`: Function that maps each item to an HTMLElement `(item, index, array) => HTMLElement`
- `key`: Optional key function for DOM reuse `(item, index, array) => any` (default: identity function)

**Key Points:**

- Key function determines which DOM nodes can be reused
- Default key (identity) works for primitive arrays
- Use stable keys (like IDs) for optimal performance with objects
- `redraw()` method accepts partial props: `{ list?, map?, key? }`

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
  if (!isAuthenticated()) return '/login'; // Redirect
}

// Per-route guard
{ path: '/admin', beforeEnter: (to) => !isAdmin() ? false : undefined }
```

## Common Patterns - TodoApp Example

```tsx
import { KTFor } from 'kt.js';

function TodoApp() {
  let todos: Array<{ id: number; text: string }> = [];
  let nextId = 1;

  const input = (<input type="text" />) as HTMLInputElement;
  const todoList = (
    <KTFor
      list={todos}
      key={(item) => item.id}
      map={(item) => (
        <div>
          <span>{item.text}</span>
          <button
            on:click={() => {
              todos = todos.filter((t) => t.id !== item.id);
              todoList.redraw({ list: todos });
            }}
          >
            Delete
          </button>
        </div>
      )}
    />
  );

  return (
    <div>
      <h1>Todos</h1>
      {input}
      <button
        on:click={() => {
          if (input.value.trim()) {
            todos = [...todos, { id: nextId++, text: input.value.trim() }];
            todoList.redraw({ list: todos });
            input.value = '';
          }
        }}
      >
        Add
      </button>
      {todoList}
    </div>
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

1. **Cast to KTHTMLElement for redraw**: `const el = (<Component />) as KTHTMLElement;`
2. **Store references for updates**: Save element variable to call `redraw()` later
3. **Use KTFor for dynamic lists**: Key-based reuse is more efficient than `.map()`
4. **Use k-if for conditionals**: Cleaner than ternary for simple conditions
5. **Keep state external**: Use closures or stores, not component-local variables

## Common Mistakes

❌ **No automatic updates**: Changing variables won't update DOM

```tsx
let count = 0;
const div = <div>Count: {count}</div>;
count++; // DOM unchanged!
```

✅ **Use redraw**: `element.redraw(undefined, 'New content')`

## Summary

- **KT.js is about manual control**: You decide when to update the DOM
- **JSX creates real DOM**: No virtual DOM, no reconciliation
- **`redraw()` is the update mechanism**: Call it when you want to update a component
- **`k-if` for conditional rendering**: One-time evaluation, creates comment node when false
- **`KTFor` for efficient lists**: Key-based DOM reuse with minimal updates
- **Router handles page navigation**: Use it for SPA routing with guards
- **Simple and direct**: No magic, no hidden reactivity, just JavaScript and DOM APIs
