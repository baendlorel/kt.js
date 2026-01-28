# @ktjs/core

<img src="https://raw.githubusercontent.com/baendlorel/kt.js/dev/.assets/ktjs-0.0.1.svg" alt="KT.js Logo" width="150"/>

[![npm version](https://img.shields.io/npm/v/@ktjs/core.svg)](https://www.npmjs.com/package/@ktjs/core)

> 📦 Part of [KT.js](https://github.com/baendlorel/kt.js) - A simple and easy-to-use web framework that never re-renders.

Core DOM manipulation utilities for KT.js framework with built-in JSX/TSX support.

## Overview

`@ktjs/core` is the foundation of KT.js, providing the essential `h` function and DOM utilities for building web applications with direct DOM manipulation. It emphasizes performance, type safety, and minimal abstraction over native DOM APIs.

**Current Version:** 0.16.0

## Features

- **`h` Function**: Create HTMLElements with a simple, flexible API
  - Support for attributes, content, and event handlers
  - `on:<eventName>` syntax for event handlers (e.g., `on:click`)
  - Function attributes automatically treated as event listeners
  - Full TypeScript support with intelligent type inference
- **JSX/TSX Support**: Built-in JSX runtime (no separate package needed)
  - Zero virtual DOM - JSX compiles directly to `h()` function calls
  - Full HTML element type inference (`<button>` returns `HTMLButtonElement`)
  - Support for function components
  - `redraw()` method for controlled re-rendering
  - **k-if directive**: Conditional element creation with `k-if` attribute
  - Array children support for seamless list rendering
- **KTFor Component**: Efficient list rendering with key-based optimization (v0.16.0)
  - Returns Comment anchor with `__kt_for_list__` array storing rendered elements
  - Auto-appends list items when anchor is added via `applyContent`
  - Key-based DOM reuse with customizable key function (default: identity)
  - Type-safe with full TypeScript generics support
- **KTAsync Component**: Handle async components with ease
  - Automatic handling of Promise-based components
  - Seamless integration with JSX/TSX
  - Fallback placeholder during async loading
  - Type-safe async component support
- **Redraw Mechanism**: Fine-grained control over component updates
  - Update props and children selectively
  - Efficient replacement strategy
  - Works with both native elements and function components
- **DOM Utilities**: Helper functions for common DOM operations
  - Native method caching for performance
  - Symbol-based private properties for internal state
- **Type-Safe**: Complete TypeScript definitions
  - Accurate HTMLElement type inference
  - Event handler type hints with proper event types
  - Support for custom attributes and properties
- **ES5 Compatible**: Transpiled to ES5 for maximum browser compatibility
- **Zero Dependencies**: Fully self-contained implementation

## Installation

```bash
pnpm add @ktjs/core
```

## Usage

### Basic Element Creation

```typescript
import { h } from '@ktjs/core';

// Simple element
const div = h('div', { class: 'container' }, 'Hello World');

// With multiple attributes
const input = h('input', {
  type: 'text',
  placeholder: 'Enter text',
  value: 'initial',
});

// Nested elements
const card = h('div', { class: 'card' }, [
  h('h2', {}, 'Title'),
  h('p', {}, 'Description'),
  h('button', {}, 'Click me'),
]);
```

### Event Handlers

```typescript
import { h } from '@ktjs/core';

// on: prefixed attribute (event handler)
const button1 = h(
  'button',
  {
    'on:click': () => alert('Clicked!'),
  },
  'Button 1',
);

// Function attribute (also treated as event listener)
const button2 = h(
  'button',
  {
    click: (e) => console.log('Event:', e),
    'data-id': '123', // Regular attribute
  },
  'Button 2',
);

// Both regular and event handler for same name
const input = h('input', {
  value: 'initial', // Regular attribute
  'on:change': (e) => console.log('Changed'), // Event listener
});
```

### JSX/TSX Support

```tsx
import { h } from '@ktjs/core';

// Configure tsconfig.json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@ktjs/core"
  }
}

// Use JSX syntax
const App = () => (
  <div class="app">
    <h1>Hello KT.js</h1>
    <button on:click={() => alert('Hi')}>Click me</button>
  </div>
);

// Function components
const Greeting = ({ name }: { name: string }) => (
  <div class="greeting">Hello, {name}!</div>
);

const app = <Greeting name="World" />;
```

### Conditional Rendering with k-if (v0.14.6+)

The `k-if` directive allows conditional element creation:

```tsx
import { h } from '@ktjs/core';

// Element will only be created if condition is true
const isVisible = true;
const element = <div k-if={isVisible}>This will be rendered</div>;

// Element will not be created if condition is false
const isHidden = false;
const hidden = <div k-if={isHidden}>This will NOT be rendered</div>;
// hidden will be undefined/null

// Practical example
const UserProfile = ({ user, isLoggedIn }: { user: any; isLoggedIn: boolean }) => (
  <div>
    <h1>User Profile</h1>
    <div k-if={isLoggedIn}>
      <p>Welcome, {user.name}!</p>
      <button>Logout</button>
    </div>
    <div k-if={!isLoggedIn}>
      <p>Please log in to continue</p>
      <button>Login</button>
    </div>
  </div>
);
```

**Note**: `k-if` is evaluated **once** at element creation time. It's not reactive - if you need dynamic visibility, use CSS or manually recreate the element.

### Redraw Mechanism (v0.11+)

The `redraw()` method allows you to update components efficiently:

```tsx
import { h, KTHTMLElement } from '@ktjs/core';

// With JSX - get element with redraw method
const counter = (<button on:click={() => counter.redraw({ count: count + 1 })}>Count: {0}</button>) as KTHTMLElement;

// Function component with redraw
const Counter = ({ count = 0 }: { count?: number }) => (
  <div>
    <div>Count: {count}</div>
    <button on:click={() => element.redraw({ count: count + 1 })}>Increment</button>
  </div>
);

const element = (<Counter />) as KTHTMLElement;

// Update props manually
element.redraw({ count: 10 });

// Update children (for native elements)
const div = (<div>Old content</div>) as KTHTMLElement;
div.redraw(undefined, 'New content');
```

### List Rendering with KTFor (v0.16.0)

The `KTFor` component provides efficient list rendering with key-based DOM reuse:

```tsx
import { KTFor } from '@ktjs/core';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

let todos: Todo[] = [
  { id: 1, text: 'Buy milk', done: false },
  { id: 2, text: 'Write code', done: true },
];

// Create optimized list with key-based reuse
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

// Add to DOM - anchor comment + __kt_for_list__ items are appended
document.body.appendChild(todoList);

// Update the list - only changed items are updated
todos = [...todos, { id: 3, text: 'New task', done: false }];
todoList.redraw({ list: todos });
```

**How it works:**

- Returns Comment anchor (`<!-- kt-for -->`) with `__kt_for_list__` array property
- When appended via `applyContent`, anchor and all list items are added to DOM
- Uses key-based diff to reuse DOM nodes on `redraw()`
- Only adds/removes/moves nodes that changed

````

### Array Children Support (v0.14.1+)

Children can now be arrays for easier list rendering:

```tsx
import { h } from '@ktjs/core';

// Map arrays directly as children
const items = ['Apple', 'Banana', 'Orange'];
const list = (
  <ul>
    {items.map((item) => (
      <li>{item}</li>
    ))}
  </ul>
);

// Mix mapped elements with other elements
const TodoList = ({ todos }: { todos: string[] }) => (
  <div>
    <h2>Todo List</h2>
    <ul>
      {todos.map((todo) => (
        <li>{todo}</li>
      ))}
      <li>
        <button>Add More</button>
      </li>
    </ul>
  </div>
);
````

### Async Components

```typescript
import { KTAsync, h } from '@ktjs/core';

// Define an async component that returns a Promise
const AsyncComponent = () => {
  return new Promise<HTMLElement>((resolve) => {
    setTimeout(() => {
      const element = h('div', { class: 'loaded' }, 'Content loaded!');
      resolve(element);
    }, 1000);
  });
};

// Use KTAsync to handle the async component
const container = h('div', {}, [
  h('h1', {}, 'Loading...'),
  KTAsync({ component: AsyncComponent }),
]);

// With JSX/TSX
const App = () => (
  <div>
    <h1>Loading...</h1>
    <KTAsync component={AsyncComponent} />
  </div>
);

// With custom placeholder
const AppWithSkeleton = () => (
  <div>
    <KTAsync
      component={AsyncComponent}
      skeleton={<div class="skeleton">Loading...</div>}
    />
  </div>
);
```

**How it works:**

- `KTAsync` creates a placeholder (comment node or custom skeleton) immediately
- When the Promise resolves, it automatically replaces the placeholder with the actual element
- If the component returns a non-Promise value, it's used directly
- No manual DOM manipulation needed - just return a Promise from your component

## API Reference

### `h(tag, attributes?, content?)`

Creates an HTMLElement with the specified tag, attributes, and content.

**Parameters:**

- `tag` (string): HTML tag name (e.g., 'div', 'span', 'button')
- `attributes` (object, optional): Element attributes and event handlers
- `content` (string | HTMLElement | Array, optional): Element content

**Returns:** HTMLElement

## Type System

The package includes comprehensive TypeScript definitions:

- `HTMLTag`: Union type of all valid HTML tag names
- `KAttribute`: Attribute object type with string or function values
- `KContent`: Valid content types (string, Element, Array, etc.)
- Event handler types with proper event object types

## Performance Considerations

- Native DOM methods are cached for repeated use
- Symbol-based properties avoid prototype pollution
- Minimal object creation in hot paths
- Tree-shakeable - only import what you use

## License

MIT
