# KT.js

A lightweight, manual-control web framework that creates real DOM elements with built-in reactive state management.

[![npm version](https://img.shields.io/npm/v/kt.js.svg)](https://www.npmjs.com/package/kt.js)
[![npm downloads](https://img.shields.io/npm/dm/kt.js.svg)](https://www.npmjs.com/package/kt.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Changelog](./CHANGELOG.md)

## Latest Highlights

- `k-if` and `k-else` now work as a sibling conditional chain in core JSX runtime.
- Runtime syntax checks are now enforced for invalid `k-else` placement.
- `k-if` / `k-else` now has dedicated tests for rendering, reactivity, and syntax errors.
- Reactive ergonomics keep improving with `KTReactive`-aligned `ref` / `computed` behavior and in-place update helpers.
- Optional Vite transform support is available via `@ktjs/vite-plugin-ktjsx`.

## Quick Start

### Installation

```bash
# Full package
pnpm add kt.js

# Or install sub-packages
pnpm add @ktjs/core @ktjs/router
```

### TypeScript Setup

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "kt.js"
  }
}
```

### Basic Example

```tsx
import { ref } from 'kt.js';

function Counter() {
  const count = ref(0);
  return <button on:click={() => count.value++}>Count: {count}</button>;
}

document.body.appendChild(Counter());
```

## Conditional Rendering: k-if and k-else

```tsx
import { ref } from 'kt.js';

const show = ref(true);

const view = (
  <div>
    <p k-if={show}>Visible branch</p>
    <p k-else>Fallback branch</p>
  </div>
);

document.body.appendChild(view);
show.value = false; // switch to k-else branch
```

### Syntax Rules

- `k-else` cannot be the first child of a parent.
- `k-else` must be immediately preceded by a `k-if` sibling.
- `k-else-if` is not supported in runtime yet.

```tsx
// Invalid: k-else as the first child
<div>
  <p k-else>invalid</p>
</div>

// Invalid: non-k-if node between k-if and k-else
<div>
  <p k-if={ok}>A</p>
  <span>gap</span>
  <p k-else>B</p>
</div>
```

## Reactive Helpers

```tsx
import { ref, computed } from 'kt.js';

const items = ref([1, 2]);
const total = computed(() => items.value.reduce((sum, n) => sum + n, 0), [items]);

items.mutate((list) => {
  list.push(3);
});

items.value.push(4);
items.notify();

console.log(total.value);
```

## List Rendering

```tsx
import { KTFor, ref } from 'kt.js';

const items = ref([
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
]);

const list = <KTFor list={items} key={(item) => item.id} map={(item) => <div>{item.name}</div>} />;
```

## Fragment

```tsx
import { ref } from 'kt.js';

const children = ref([<span>A</span>, <span>B</span>]);
const fragment = <>{children}</>;
```

## Package Overview

- [@ktjs/core](./packages/core): JSX runtime, reactivity, DOM helpers.
- [@ktjs/router](./packages/router): client-side router.
- [@ktjs/mui](./packages/mui): UI components built on KT.js.
- [@ktjs/vite-plugin-ktjsx](./packages/vite-plugin-ktjsx): Vite JSX transform plugin.
- [@ktjs/babel-plugin-ktjsx](./packages/babel-plugin-ktjsx): Babel JSX transform plugin.

## Philosophy

KT.js focuses on one principle: keep direct control of the DOM and avoid unnecessary repainting.

## License

MIT
