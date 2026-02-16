# vite-plugin-ktjsx

`@ktjs/vite-plugin-ktjsx` applies KT.js JSX transforms in Vite.

It reuses `@ktjs/babel-plugin-ktjsx` internally, so behavior is the same:

- transform `k-if` / `k-else-if` / `k-else` chains
- mark SVG / MathML subtrees with KT.js namespace flags

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
