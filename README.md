# KT.js

A lightweight, manual‑control web framework that creates real DOM elements with built‑in reactive state management.

[![npm version](https://img.shields.io/npm/v/kt.js.svg)](https://www.npmjs.com/package/kt.js)
[![npm downloads](https://img.shields.io/npm/dm/kt.js.svg)](https://www.npmjs.com/package/kt.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Changelog](./CHANGELOG.md)

## Features

- **Real DOM** – JSX compiles directly to `HTMLElement` creation, with zero virtual‑DOM overhead.
- **Manual Updates** – You decide when the DOM updates; no automatic re‑renders.
- **Reactive State** – Built‑in `ref()` and `computed()` for reactive values with change listeners.
- **Zero Forced Re‑renders** – Update only what changes; avoid full‑component repaints.
- **Full TypeScript Support** – Accurate type inference and JSX/TSX integration.
- **Lightweight** – Small bundle size, no unnecessary dependencies.

## Quick Start

### Installation

```bash
# Full package (includes core)
pnpm add kt.js

# Individual packages
pnpm add @ktjs/core @ktjs/router
```

### Basic Usage

```tsx
import { ref } from 'kt.js';

function Counter() {
  const count = ref(0);

  const button = <button on:click={() => count.value++}>Count: {count.value}</button>;

  return button;
}

// Mount to DOM
document.body.appendChild(Counter());
```

### TypeScript Configuration

For JSX/TSX support, set your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "kt.js"
  }
}
```

## Core Features

### Reactive System

```tsx
import { ref, computed } from 'kt.js';

// Reactive references
const count = ref(0);
const double = computed(() => count.value * 2, [count]);

// Listen to changes
count.addOnChange((newVal, oldVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`);
});

// Update triggers change listeners
count.value = 10;
```

### Conditional Rendering

```tsx
const show = ref(true);

const element = <div k-if={show}>This content is conditionally rendered</div>;

// Toggle visibility
show.value = false; // Element becomes a comment placeholder
```

### List Rendering

```tsx
import { KTFor, ref } from 'kt.js';

const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
]);

const list = <KTFor list={items.value} key={(item) => item.id} map={(item) => <div>{item.name}</div>} />;

// Update list
items.value = [...items.value, { id: 3, name: 'Item 3' }];
```

### Two‑way Data Binding

```tsx
function InputComponent() {
  const text = ref('');

  return <input k-model={text} />;
}
```

### Redrawable Components

```tsx
import { createRedrawable, ref } from 'kt.js';

function DynamicCounter() {
  const count = ref(0);

  const counter = createRedrawable(() => (
    <div>
      Count: {count.value}
      <button on:click={() => count.value++}>+</button>
    </div>
  ));

  // Redraw when count changes
  count.addOnChange(() => counter.redraw());

  return counter;
}
```

## Package Structure

- **[@ktjs/core](./packages/core)** – Core framework with JSX, reactivity, and DOM utilities.
- **[@ktjs/router](./packages/router)** – Client‑side router with navigation guards.
- **[@ktjs/mui](./packages/mui)** – Material UI components built on top of KT.js.

## Philosophy

KT.js follows one rule: **full control of the DOM and avoid unnecessary repainting**.

As a web framework, repeatedly creating a large number of variables and objects is unacceptable. That’s why KT.js was built.

## Advanced Usage

### Surface References

```tsx
import { surfaceRef } from 'kt.js';

const user = surfaceRef({
  name: 'John',
  age: 30,
});

// Access reactive properties
user.name.value = 'Jane';

// Get the original object
const original = user.kcollect();
```

### Event Handling

```tsx
const handleClick = (event) => {
  console.log('Clicked!', event);
};

const button = <button on:click={handleClick}>Click me</button>;
```

## Performance Benefits

- **No Virtual DOM** – Direct DOM manipulation eliminates reconciliation overhead.
- **Manual Updates** – Only update what you need, when you need it.
- **Minimal Abstraction** – Close to native DOM APIs for maximum performance.
- **Small Bundle** – Minimal runtime overhead.

## Browser Support

KT.js supports all modern browsers and IE11+ with appropriate polyfills.

## License

MIT