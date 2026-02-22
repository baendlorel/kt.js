# @ktjs/babel-plugin-ktjsx

`@ktjs/babel-plugin-ktjsx` is the Babel entry for KT.js JSX transforms, re-exported from `@ktjs/transformer`.

Current behavior:

- add KT.js internal SVG / MathML flags on JSX elements in SVG / MathML context
- validate directive combinations (`k-if` + `k-else`, and `k-for` mixed with conditional directives)
- transform `k-for` into `source.map(...)` and remove `k-for` / `k-key` attributes
- compile adjacent `k-if` + `k-else` siblings into `KTConditional(...)`
- warn and leave `k-else-if` unchanged (currently unsupported)

## Install

```bash
pnpm add -D @ktjs/babel-plugin-ktjsx @babel/core
```

## Usage (ESM Babel config)

```js
// babel.config.mjs
import ktjsx from '@ktjs/babel-plugin-ktjsx';

export default {
  plugins: [ktjsx],
};
```

## Usage (CommonJS Babel config)

```js
// babel.config.cjs
const { default: ktjsx } = require('@ktjs/babel-plugin-ktjsx');

module.exports = {
  plugins: [ktjsx],
};
```

## Named exports

```ts
import { transformerKTjsx, transformWithKTjsx } from '@ktjs/babel-plugin-ktjsx';
```

- `transformerKTjsx`: Babel plugin factory (same as default export)
- `transformWithKTjsx`: programmatic transform helper

## Notes

- This plugin works on JSX AST directly (not on `createElement(...)` output).
- There are no custom plugin options yet.
