# vite-plugin-ktjsx

light, manual‑control web framework that creates real DOM elements with built‑in reactive state management.

[![npm version](https://img.shields.io/npm/v/vite-plugin-ktjsx.svg)](https://www.npmjs.com/package/vite-plugin-ktjsx)
[![npm downloads](https://img.shields.io/npm/dm/vite-plugin-ktjsx.svg)](https://www.npmjs.com/package/vite-plugin-ktjsx)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`@ktjs/vite-plugin-ktjsx` applies KT.js JSX transforms in Vite.

It reuses the shared `@ktjs/transformer` core (also used by `@ktjs/babel-plugin-ktjsx`), so behavior is the same:

- mark SVG / MathML subtrees with KT.js namespace flags
- compile adjacent `k-if` + `k-else` siblings into `KTConditional(...)`
- warn and leave `k-else-if` unchanged (currently unsupported)

Basic usage:

```ts
import { defineConfig } from 'vite';
import ktjsx from '@ktjs/vite-plugin-ktjsx';

export default defineConfig({
  plugins: [ktjsx()],
});
```

Options:

- `include` - custom file matcher (`RegExp` or predicate function)
- `exclude` - files to skip (`RegExp` or predicate function)
- `babelConfig` - additional Babel transform options
