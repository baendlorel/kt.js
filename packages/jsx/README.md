# @ktjs/jsx

<img src="https://raw.githubusercontent.com/baendlorel/kt.js/dev/.assets/ktjs-0.0.1.svg" alt="KT.js Logo" width="150"/>

[![npm version](https://img.shields.io/npm/v/@ktjs/jsx.svg)](https://www.npmjs.com/package/@ktjs/jsx)

> 📦 Part of [KT.js](https://github.com/baendlorel/kt.js) - JSX/TSX support for the KT.js framework

Write UI code with JSX syntax while maintaining KT.js's philosophy of direct DOM manipulation and zero unnecessary re-renders.

## Features

- ✨ **JSX/TSX Support**: Write declarative UI code with familiar JSX syntax
- 🎯 **Direct DOM Manipulation**: JSX compiles to direct `h()` calls, no virtual DOM
- 🔧 **Full TypeScript Support**: Complete type safety with IntelliSense
- ⚡ **Zero Runtime Overhead**: JSX is pure syntax sugar over KT.js's `h` function
- 🎨 **Event Handler Syntax**: Support for both function props and `@eventName` syntax
- 📦 **Multiple Runtime Modes**: Support both automatic and classic JSX transforms
- 🔌 **Easy Integration**: Works with Babel, TypeScript, and modern build tools

## Installation

```bash
pnpm add @ktjs/jsx @ktjs/core
# or
npm install @ktjs/jsx @ktjs/core
```

## Quick Start

### TypeScript Configuration

For **automatic runtime** (recommended, React 17+ style):

```json
// tsconfig.json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@ktjs/jsx"
  }
}
```

For **classic runtime** (React 16 style):

```json
// tsconfig.json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "h",
    "jsxFragmentFactory": "Fragment"
  }
}
```

### Basic Usage

```tsx
import { h } from '@ktjs/jsx';

// Simple element
const greeting = <div class="greeting">Hello, KT.js!</div>;

// With attributes and event handlers
const button = (
  <button
    class="btn primary"
    @click={() => alert('Clicked!')}
  >
    Click me
  </button>
);

// Nested elements
const app = (
  <div id="app">
    <header class="header">
      <h1>My App</h1>
    </header>
    <main class="content">
      <p>Welcome to KT.js with JSX!</p>
      {button}
    </main>
  </div>
);

document.body.appendChild(app);
```

### Event Handlers

You can use event handlers in two ways:

```tsx
// 1. Function props (automatically converted to event listeners)
<button click={() => console.log('clicked')}>Button 1</button>

// 2. @-prefixed attributes (explicit event handlers)
<button @click={(e) => console.log('clicked', e)}>Button 2</button>

// 3. Mix both (regular attribute + event listener)
<input
  change="change-value"          // Regular attribute
  @change={(e) => console.log(e)} // Event listener
/>
```

### Conditional Rendering

Use JavaScript expressions for conditional rendering:

```tsx
import { ktnull } from '@ktjs/jsx';

const isLoggedIn = true;

const app = (
  <div>
    {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}

    {/* Use ktnull to render nothing */}
    {isLoggedIn ? <button>Logout</button> : ktnull}
  </div>
);
```

### Lists

Map arrays to JSX elements:

```tsx
const items = ['Apple', 'Banana', 'Orange'];

const list = (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```

### Dynamic Attributes

```tsx
const className = 'card primary';
const isDisabled = false;

const element = (
  <div class={className} style="padding: 20px; background: #f0f0f0" data-disabled={isDisabled ? 'true' : 'false'}>
    Dynamic attributes
  </div>
);
```

## Advanced Usage

### Using with Babel

If you're using Babel instead of TypeScript:

```bash
pnpm add -D @babel/plugin-transform-react-jsx
```

```javascript
// babel.config.js
module.exports = {
  presets: [
    [
      '@ktjs/jsx/babel-preset',
      {
        runtime: 'automatic', // or 'classic'
      },
    ],
  ],
};
```

### Classic Runtime (Manual Import)

If you prefer the classic JSX transform:

```tsx
// You need to import h in every file using JSX
import { h, Fragment } from '@ktjs/jsx';

const app = (
  <div>
    <h1>Classic Runtime</h1>
  </div>
);
```

### Fragments

**Note**: KT.js doesn't have a native Fragment concept. Fragments are wrapped in a `div` with `data-kt-fragment="true"`:

```tsx
import { Fragment } from '@ktjs/jsx';

const list = (
  <>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </>
);
// Results in: <div data-kt-fragment="true"><li>Item 1</li>...</div>
```

If you want truly unwrapped children, use arrays instead:

```tsx
const items = [<li key="1">Item 1</li>, <li key="2">Item 2</li>, <li key="3">Item 3</li>];

const list = <ul>{items}</ul>;
```

### Integration with CSS-in-JS

Works seamlessly with CSS-in-JS libraries:

```tsx
import { css } from '@emotion/css';

const buttonStyle = css`
  background: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: darkblue;
  }
`;

const button = (
  <button class={buttonStyle} @click={() => alert('Styled!')}>
    Styled Button
  </button>
);
```

### Creating Reusable Components

While KT.js doesn't have a component system, you can create factory functions:

```tsx
interface CardProps {
  title: string;
  content: string;
  onClose?: () => void;
}

function Card({ title, content, onClose }: CardProps) {
  return (
    <div class="card">
      <div class="card-header">
        <h3>{title}</h3>
        {onClose && (
          <button class="close" @click={onClose}>×</button>
        )}
      </div>
      <div class="card-body">
        {content}
      </div>
    </div>
  );
}

// Usage
const myCard = Card({
  title: 'Hello',
  content: 'This is a card',
  onClose: () => console.log('Closing...')
});

document.body.appendChild(myCard);
```

## API Reference

### JSX Runtime Functions

#### `jsx(tag, props, ...children)`

The main JSX transformation function. Called automatically by the JSX compiler.

**Parameters:**

- `tag` (string): HTML tag name
- `props` (object): Element attributes and event handlers
- `children` (...): Child elements

**Returns:** `HTMLElement`

#### `Fragment(props)`

Fragment component for grouping elements without a wrapper (wraps in a div with `data-kt-fragment`).

#### `h(tag, props, children)`

Classic JSX factory function, equivalent to `jsx`.

### Re-exported from @ktjs/core

- `ktnull`: Special value for conditional rendering (renders nothing)

## Type Definitions

Full TypeScript support with comprehensive JSX type definitions:

```typescript
declare global {
  namespace JSX {
    type Element = HTMLElement;

    interface IntrinsicElements {
      div: KTAttribute & { children?: KTRawContent };
      span: KTAttribute & { children?: KTRawContent };
      // ... all HTML elements
    }
  }
}
```

## Comparison: JSX vs Function Calls

```tsx
// JSX syntax
const app = (
  <div class="container">
    <h1>Hello</h1>
    <button @click={() => alert('Hi')}>Click</button>
  </div>
);

// Equivalent function calls
import { h, div, button } from '@ktjs/core';

const app = div({ class: 'container' }, [
  h('h1', {}, 'Hello'),
  button({ '@click': () => alert('Hi') }, 'Click')
]);
```

Both produce **exactly the same DOM** with **zero performance difference**. Choose the style you prefer!

## Build Tool Integration

### Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsxImportSource: '@ktjs/jsx',
    jsx: 'automatic',
  },
});
```

### Webpack

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@ktjs/jsx/babel-preset'],
          },
        },
      },
    ],
  },
};
```

### esbuild

```javascript
// build.js
import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  jsxImportSource: '@ktjs/jsx',
  jsx: 'automatic',
  outfile: 'dist/bundle.js',
});
```

## Browser Compatibility

Same as @ktjs/core - works in all modern browsers and IE9+ (with transpilation).

## Why Use JSX with KT.js?

✅ **Familiar Syntax**: If you're coming from React, JSX feels natural  
✅ **Better IDE Support**: Enhanced autocomplete and error checking  
✅ **Readability**: Complex nested structures are easier to read  
✅ **Zero Cost**: Pure compile-time transformation, no runtime overhead  
✅ **Optional**: You can mix JSX with regular function calls

## Philosophy

`@ktjs/jsx` is purely syntactic sugar. It transforms JSX to direct `h()` function calls at compile time:

```
<div>Hello</div>  →  h('div', {}, 'Hello')
```

This means:

- **No virtual DOM** - direct DOM manipulation
- **No reconciliation** - you control when and what updates
- **No framework magic** - just JavaScript and the DOM API

## License

MIT

## Links

- [KT.js Main Repository](https://github.com/baendlorel/kt.js)
- [@ktjs/core](../core)
- [@ktjs/router](../router)
- [@ktjs/shortcuts](../shortcuts)
