# @ktjs/core

<img src="https://raw.githubusercontent.com/baendlorel/kt.js/dev/.assets/ktjs-0.0.1.svg" alt="KT.js Logo" width="150"/>

> 📦 Part of [KT.js](https://raw.githubusercontent.com/baendlorel/kt.js/dev/README.md) - A simple and easy-to-use web framework that never re-renders.

Core DOM manipulation utilities for KT.js framework.

## Overview

`@ktjs/core` is the foundation of KT.js, providing the essential `h` function and DOM utilities for building web applications with direct DOM manipulation. It emphasizes performance, type safety, and minimal abstraction over native DOM APIs.

## Features

- **`h` Function**: Create HTMLElements with a simple, flexible API
  - Support for attributes, content, and event handlers
  - Special `@<eventName>` syntax for event handlers
  - Function attributes automatically treated as event listeners
  - Full TypeScript support with intelligent type inference
- **DOM Utilities**: Helper functions for common DOM operations
  - Native method caching for performance
  - Symbol-based private properties for internal state
- **Type-Safe**: Complete TypeScript definitions
  - Accurate HTMLElement type inference
  - Event handler type hints with proper event types
  - Support for custom attributes and properties
- **`ktnull`**: Special value for filtering null/undefined in DOM operations
  - Works as a placeholder that won't create DOM nodes
  - Can be used in attribute or content positions
  - Preserves native DOM behavior while enabling conditional rendering
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

// Function attribute (treated as event listener)
const button1 = h(
  'button',
  {
    click: () => alert('Clicked!'),
  },
  'Button 1'
);

// @-prefixed attribute (explicitly an event handler)
const button2 = h(
  'button',
  {
    '@click': (e) => console.log('Event:', e),
    'data-id': '123', // Regular attribute
  },
  'Button 2'
);

// Both regular and event handler for same name
const input = h('input', {
  change: 'change-value', // Regular attribute
  '@change': (e) => console.log('Changed'), // Event listener
});
```

### Using ktnull for Conditional Rendering

```typescript
import { h, ktnull } from '@ktjs/core';

const items = [1, 2, 3, 4, 5];

const list = h(
  'ul',
  {},
  items.map(
    (item) => (item % 2 === 0 ? h('li', {}, `Even: ${item}`) : ktnull) // Won't create a DOM node
  )
);
// Results in: <ul><li>Even: 2</li><li>Even: 4</li></ul>
```

## API Reference

### `h(tag, attributes?, content?)`

Creates an HTMLElement with the specified tag, attributes, and content.

**Parameters:**

- `tag` (string): HTML tag name (e.g., 'div', 'span', 'button')
- `attributes` (object, optional): Element attributes and event handlers
- `content` (string | HTMLElement | Array, optional): Element content

**Returns:** HTMLElement

### `ktnull`

A special frozen empty object used to represent "no element" in content arrays. When used in place of an element, it won't create any DOM node.

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
