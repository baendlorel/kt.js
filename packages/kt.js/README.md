# kt.js

Main entry package for KT.js framework - a simple and easy-to-use web framework that never re-renders.

## Installation

```bash
pnpm add kt.js
```

## What's Included

This package re-exports everything from:

- `@ktjs/core` - Core DOM manipulation utilities
- `@ktjs/router` - Client-side routing
- `@ktjs/shortcuts` - Convenient shortcuts

## Usage

```typescript
import { h, div, button, createRouter } from 'kt.js';

// Use core functionality
const app = div('app', 'Hello World');

// Use router
const router = createRouter({
  routes: [{ path: '/', name: 'home' }],
});
```

For more details, see the [main README](../../README.md).

## License

MIT
