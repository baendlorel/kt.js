# babel-plugin-ktjsx

`@ktjs/babel-plugin-ktjsx` is a Babel plugin that enhances compiled JSX output to better support SVG and namespace-aware element creation.

Basic usage (Babel):

```js
// babel.config.js
module.exports = {
  plugins: [['@ktjs/babel-plugin-ktjsx', { svgTags: ['svg', 'g', 'path'] }]],
};
```

This plugin will transform calls like `createElement('svg', ...)` (or `h('svg', ...)`) into `createElementNS('http://www.w3.org/2000/svg', 'svg', ...)` so that SVG elements are created in the correct namespace.

Options:

- `svgTags` - array of tag names to treat as SVG (default includes common SVG tags)
- `namespaceURI` - SVG namespace (default `http://www.w3.org/2000/svg`)
- `createElementNames` - functions to consider as element factories (default `['createElement','h']`)

Notes:

- The plugin is intended to run after JSX has been transformed to `createElement`/`h` calls. If you use a custom JSX pragma, include that name in `createElementNames`.
- A Rollup wrapper can be created to run this plugin during bundling; prefer using Babel for precise AST-level transforms.
