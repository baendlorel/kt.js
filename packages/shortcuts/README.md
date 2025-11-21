# @ktjs/shortcuts

Convenient shortcut functions for common DOM operations in KT.js.

## Overview

`@ktjs/shortcuts` provides convenient shorthand functions and utilities to make working with KT.js even more productive. It includes shortcuts for all HTML elements, form helpers, layout utilities, and the powerful `withDefaults` function for creating element factories with predefined properties.

## Features

- **Element Shortcuts**: Quick creation functions for all HTML elements
  - `div`, `span`, `button`, `input`, `a`, etc.
  - Same signature as `h` function but without the tag name
  - Full TypeScript support with proper return types
- **Form Helpers**: Shortcuts for form elements with better ergonomics
  - Pre-configured form controls
  - Input type helpers
- **Layout Helpers**: Common layout patterns and containers
- **`withDefaults`**: Create element factories with default properties
  - Works with both `h` function and shortcut functions
  - Supports nested defaults (defaults on top of defaults)
  - Full type inference for all properties
  - Special `$defines` property for programmatic default definition
- **Alias Creation**: `aliasH` utility for creating custom `h` function aliases
  - Preserves the special `__ktjs_h__` marker for proper type detection
  - Enables `withDefaults` to distinguish between `h` and alias functions

## Installation

```bash
pnpm add @ktjs/shortcuts @ktjs/core
```

## Basic Usage

### Element Shortcuts

```typescript
import { div, span, button, input, h1, p } from '@ktjs/shortcuts';

// Instead of h('div', ...)
const container = div({ class: 'container' }, [
  h1({}, 'Title'),
  p({}, 'Description'),
  button({ '@click': () => alert('Hi') }, 'Click me'),
]);

// Form elements
const form = div('form-wrapper', [
  input({ type: 'text', placeholder: 'Name' }),
  input({ type: 'email', placeholder: 'Email' }),
  button({ type: 'submit' }, 'Submit'),
]);

// Quick elements with just content
const title = h1('Welcome');
const text = span('Hello World');
```

### Using `withDefaults`

The `withDefaults` function allows you to create element factory functions with predefined properties:

```typescript
import { withDefaults, div, button } from '@ktjs/shortcuts';

// Create a card factory with default class
const card = withDefaults(div, { class: 'card' });

// Use the factory
const myCard = card('card-body', [div('card-title', 'Title'), div('card-content', 'Content')]);
// Result: <div class="card"><div class="card-body">...</div></div>

// Create nested defaults
const blueCard = withDefaults(card, { style: 'background: blue' });
const myBlueCard = blueCard('card-body', 'Blue card!');
// Result: <div class="card" style="background: blue"><div class="card-body">Blue card!</div></div>

// Button factory with default event handler
const primaryButton = withDefaults(button, {
  class: 'btn btn-primary',
  '@click': () => console.log('Button clicked'),
});

const submitBtn = primaryButton('Submit');
// Result: <button class="btn btn-primary" @click="...">Submit</button>
```

### Programmatic Defaults with `$defines`

For more complex scenarios, use the `$defines` property:

```typescript
import { withDefaults, div } from '@ktjs/shortcuts';

const responsiveImage = withDefaults(div, {
  $defines: {
    class: 'img-container',
    style: 'max-width: 100%',
  },
});

const img = responsiveImage('image-content', [
  // ... content
]);
```

### Creating Custom Aliases

```typescript
import { aliasH } from '@ktjs/shortcuts';
import { h } from '@ktjs/core';

// Create a custom h alias with different behavior
const myH = aliasH((tag, attr, content) => {
  // Custom logic here
  return h(tag, attr, content);
});

// Now you can use withDefaults on your custom alias
const myDiv = withDefaults(myH.bind(null, 'div'), { class: 'custom' });
```

## API Reference

### Element Shortcuts

All HTML elements have corresponding shortcut functions:

**Structure**: `div`, `span`, `section`, `article`, `header`, `footer`, `main`, `nav`, `aside`

**Text**: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `strong`, `em`, `code`, `pre`

**Forms**: `form`, `input`, `button`, `select`, `option`, `textarea`, `label`

**Lists**: `ul`, `ol`, `li`, `dl`, `dt`, `dd`

**Tables**: `table`, `thead`, `tbody`, `tfoot`, `tr`, `th`, `td`

**Media**: `img`, `video`, `audio`, `canvas`, `svg`

**Interactive**: `a`, `button`, `details`, `summary`, `dialog`

**Metadata**: `meta`, `link`, `script`, `style`

Each function has the signature:

```typescript
function element(attributes?: KAttribute, content?: KContent): HTMLElement;
function element(className: string, content?: KContent): HTMLElement;
function element(content: KContent): HTMLElement;
```

### `withDefaults(fn, defaults)`

Creates a new element factory function with predefined default properties.

**Parameters:**

- `fn`: The base element creation function (from shortcuts or `h` bound to a tag)
- `defaults`: Object containing default properties
  - Regular properties: merged with call-time properties
  - `$defines`: Special property for programmatic defaults

**Returns:** A new function with the same signature but with defaults applied

**Type Safety:** Full type inference for all properties and return types

### `aliasH(implementation)`

Creates a properly marked `h` function alias that works with `withDefaults`.

**Parameters:**

- `implementation`: Your custom `h` function implementation

**Returns:** The implementation with the special `__ktjs_h__` marker

## Common Patterns

### Themed Components

```typescript
import { withDefaults, div, button } from '@ktjs/shortcuts';

// Theme defaults
const themedCard = withDefaults(div, {
  class: 'card theme-dark',
  style: 'border-radius: 8px; padding: 16px;',
});

const themedButton = withDefaults(button, {
  class: 'btn theme-dark',
});

// Use throughout your app
const ui = div('app', [
  themedCard('profile', 'User profile'),
  themedCard('settings', 'Settings'),
  themedButton('Save'),
]);
```

### Form Builders

```typescript
import { withDefaults, input, button, div } from '@ktjs/shortcuts';

const textInput = withDefaults(input, { type: 'text', class: 'form-control' });
const submitButton = withDefaults(button, { type: 'submit', class: 'btn-primary' });

const loginForm = div('login-form', [
  textInput({ placeholder: 'Username', name: 'username' }),
  textInput({ placeholder: 'Password', name: 'password', type: 'password' }),
  submitButton('Login'),
]);
```

## Type System

The package includes comprehensive TypeScript definitions with:

- Proper element type inference for all shortcuts
- Attribute and content type checking
- Event handler type hints
- Support for conditional types in `withDefaults`

## Performance

- All shortcut functions are thin wrappers around the `h` function
- Zero runtime overhead after bundling with tree-shaking
- `withDefaults` creates minimal closure overhead
- Native method caching inherited from `@ktjs/core`

## License

MIT
