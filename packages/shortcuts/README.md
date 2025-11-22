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

### Available Element Shortcuts

The following shortcuts are exported from `common.ts`:

**Basic**: `div`, `span`, `label`, `a`, `img`

**Text**: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`

**Forms**: `form`, `input`, `button`, `select`, `option`

**Lists**: `ul`, `ol`, `li`

**Tables**: `table`, `thead`, `tbody`, `tr`, `th`, `td`

Each function has the signature:

```typescript
function element(attributes?: KAttribute, content?: KContent): HTMLElement;
function element(className: string, content?: KContent): HTMLElement;
function element(content: KContent): HTMLElement;
```

## API Reference

## Common Patterns

### Component Composition

```typescript
import { div, button, input } from '@ktjs/shortcuts';

// Create reusable components
const createCard = (title: string, content: string) => {
  return div('card', [div('card-title', title), div('card-content', content)]);
};

// Use throughout your app
const ui = div('app', [createCard('Profile', 'User profile'), createCard('Settings', 'Settings')]);
```

### Form Builders

```typescript
import { input, button, div } from '@ktjs/shortcuts';

const createTextInput = (placeholder: string, name: string) => {
  return input({ type: 'text', class: 'form-control', placeholder, name });
};

const createSubmitButton = (text: string) => {
  return button({ type: 'submit', class: 'btn-primary' }, text);
};

const loginForm = div('login-form', [
  createTextInput('Username', 'username'),
  createTextInput('Password', 'password'),
  createSubmitButton('Login'),
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
