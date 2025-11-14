# @ktjs/core

Core DOM manipulation utilities for KT.js framework.

## Features

- **`h` function**: Create HTMLElements with attributes and content
- **DOM utilities**: Helper functions for common DOM operations
- **Type-safe**: Full TypeScript support
- **ktnull**: Special value for filtering null/undefined in DOM operations

## Installation

```bash
pnpm add @ktjs/core
```

## Usage

```typescript
import { h, $h, ktnull } from '@ktjs/core';

// Create elements with h function
const div = h('div', { class: 'container' }, 'Hello World');

// Use native-like helpers
const el = $h('span');
el.textContent = 'text';
```

## License

MIT
