# rollup-plugin-ktjsx

A small Rollup plugin to post-process compiled JSX output to better support.

Usage:

```js
import ktjsx from '@ktjs/rollup-plugin-ktjsx';

export default {
  plugins: [ktjsx()],
};
```

Options:

- `svgTags` - array of tag names to treat as SVG (default includes common SVG tags)
- `namespaceURI` - SVG namespace (default `http://www.w3.org/2000/svg`)

## Features

SVG elements by converting `createElement('svg')` style calls into namespace-aware `createElementNS('http://www.w3.org/2000/svg', 'svg')`
