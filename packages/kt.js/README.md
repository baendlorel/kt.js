# kt.js

<img src="https://raw.githubusercontent.com/baendlorel/kt.js/dev/.assets/ktjs-0.0.1.svg" alt="KT.js Logo" width="150"/>

> 📦 Main entry package - For full documentation, see [KT.js](https://raw.githubusercontent.com/baendlorel/kt.js/dev/README.md).

Main entry package for KT.js framework - a simple and easy-to-use web framework that never re-renders.

## Overview

`kt.js` is the all-in-one package that re-exports everything from the KT.js ecosystem. Install this single package to get access to all features including core DOM utilities, routing, and shortcuts.

## Installation

```bash
pnpm add kt.js
```

## What's Included

This package re-exports everything from:

- **`@ktjs/core`** - Core DOM manipulation utilities
  - `h` function for creating elements
  - `ktnull` for conditional rendering
  - Runtime utilities and helpers
- **`@ktjs/shortcuts`** - Convenient shortcuts
  - Element creation shortcuts (div, span, button, etc.)
  - `withDefaults` for creating element factories
  - Form helpers and layout utilities

**Note:** The router (`@ktjs/router`) is a separate package and needs to be installed independently.

## Quick Start

```typescript
import { h, div, btn, withDefaults } from 'kt.js';

// Create elements
const app = div('app', [h('h1', {}, 'Welcome to KT.js'), btn({ '@click': () => alert('Hello!') }, 'Click me')]);

// Use shortcuts with defaults
const card = withDefaults(div, { class: 'card' });
const myCard = card('card-body', 'Card content');

document.body.appendChild(app);
```

### Using with Router

If you need routing, install `@ktjs/router` separately:

```bash
pnpm add @ktjs/router
```

```typescript
import { div } from 'kt.js';
import { createRouter } from '@ktjs/router';

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: (to) => {
        const app = document.getElementById('app')!;
        app.innerHTML = '';
        app.appendChild(div({}, 'Home Page'));
      },
    },
    {
      path: '/about',
      name: 'about',
      beforeEnter: (to) => {
        const app = document.getElementById('app')!;
        app.innerHTML = '';
        app.appendChild(div({}, 'About Page'));
      },
    },
  ],
});

router.push('/');
```

## Why Use the Main Package?

- **Convenience**: Single import for all KT.js functionality
- **Simplicity**: No need to manage multiple package versions
- **Complete**: Get all features out of the box
- **Optimized**: Proper tree-shaking ensures you only bundle what you use

## When to Use Individual Packages

If you only need specific functionality, you can install individual packages:

- Need only DOM utilities? → `pnpm add @ktjs/core`
- Need only routing? → `pnpm add @ktjs/router`
- Need only shortcuts? → `pnpm add @ktjs/shortcuts @ktjs/core`
- Need everything except router? → `pnpm add kt.js` (this package)
- Need everything including router? → `pnpm add kt.js @ktjs/router`

This can result in slightly smaller dependency trees in your `node_modules`.

## Documentation

For complete documentation, examples, and guides, see:

- [Main Documentation](../../README.md) - Complete framework guide
- [Core Package](../core/README.md) - Core DOM utilities
- [Router Package](../router/README.md) - Routing documentation
- [Shortcuts Package](../shortcuts/README.md) - Shortcuts and utilities
- [Changelog](../../CHANGELOG.md) - Version history and updates

## Features

- ✅ Direct DOM manipulation with zero virtual DOM overhead
- ✅ Full TypeScript support with intelligent type inference
- ✅ ES5 compatible (works in IE9+)
- ✅ Zero dependencies (self-contained)
- ✅ Tiny bundle size with excellent tree-shaking
- ✅ Conditional rendering with `ktnull`
- ✅ Event handler shortcuts with `@<eventName>` syntax
- ✅ Element factories with `withDefaults`
- ✅ Router available as separate package (`@ktjs/router`)

## Browser Compatibility

KT.js works in all modern browsers and legacy browsers including IE9+. For older browsers without Promise support, navigation guards will run synchronously.

## License

MIT
