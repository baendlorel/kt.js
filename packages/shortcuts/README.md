# @ktjs/shortcuts

Convenient shortcut functions for common DOM operations in KT.js.

## Features

- **Element shortcuts**: Quick creation of common HTML elements
- **Form helpers**: Shortcuts for form elements
- **Layout helpers**: Common layout patterns

## Installation

```bash
pnpm add @ktjs/shortcuts @ktjs/core
```

## Usage

```typescript
import { div, span, button, input } from '@ktjs/shortcuts';

// Instead of h('div', ...)
const container = div('container', [span('Hello'), button({ click: () => alert('Hi') }, 'Click me')]);
```

## License

MIT
