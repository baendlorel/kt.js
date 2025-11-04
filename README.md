# KT.js

[![npm version](https://img.shields.io/npm/v/kt.js.svg)](https://www.npmjs.com/package/kt.js)
[![license](https://img.shields.io/github/license/baendlorel/kt.js.svg)](https://github.com/baendlorel/kt.js/blob/main/LICENSE)

[CHANGLOG✨](CHANGELOG.md)

> Note: This framework is still under development. APIs, type declarations, and other parts **may change frequently**. If you use it, please watch for updates in the near future. Feel free to mail me if you have any questions!

KT.js is a tiny DOM utility focused on direct DOM manipulation. It favors not forcing re-renders and aims to keep DOM updates to the absolute minimum for maximum performance.

For more awesome packages, check out [my homepage💛](https://baendlorel.github.io/?repoType=npm)

## Philosophy

As a web framework, repeatedly creating a large number of variables and objects is unacceptable. So I created KT.js.

KT.js follows one rule: full controll of dom and avoid unless repainting.

## Current Core Features

- `h` function and its aliases
- Router
  - Automatically adapts to environment: uses async navigation guards when `Promise` is available, falls back to synchronous mode otherwise
- **Full ES5 compatibility** - works in IE9+ and other legacy browsers
  - Transpiled to ES5 with no modern syntax
  - Optional minimal Promise polyfill included for older environments

## Getting started

### Using IIFE (direct browser usage)

KT.js provides an IIFE build that can be included directly in HTML:

```html
<script src="https://unpkg.com/kt.js@0.3.0/dist/index.iife.js"></script>
<script>
  // KT is available globally
  const { h, div } = KT;
  const app = div('container', 'Hello World');
  document.body.appendChild(app);
</script>
```

### Using ES Modules

Install via package managers:

```bash
npm install kt.js
# or
pnpm add kt.js
```

```ts
import { h, div } from 'kt.js';

const container = div('container', [div('header'), div('body', 'something'), div('footer')]);
const app = h('section', { id: 'app' }, container);
```

This will create the following DOM structure:

```html
<section id="app">
  <div class="container">
    <div class="header"></div>
    <div class="body">something</div>
    <div class="footer"></div>
  </div>
</section>
```

If you give a function in the attributes, it will be treated as an event listener, and the key will be considered as the event name:

```ts
const button = btn({ click: () => alert('Clicked!') }, 'Click me');
// this equals
const button = btn(undefined, 'Click me');
button.addEventListener('click', () => alert('Clicked!'));
```

Work with `@emotion/css`

```ts
import { css } from '@emotion/css';

const className = css`
  color: red;
  font-size: 20px;
`;

h('div', { class: className }, 'Styled text');
```

## Router

KT.js includes a lightweight client-side router (hash-based):

```ts
import { createRouter, div, h1 } from 'kt.js';

const router = createRouter({
  routes: [
    {
      path: '/',
      handler: () => div({}, [h1({}, 'Home Page')]),
    },
    {
      path: '/user/:id',
      handler: (ctx) => div({}, [h1({}, `User ${ctx.params.id}`)]),
    },
  ],
  container: document.getElementById('app'),
  beforeEach: async (to, from) => {
    // Navigation guard - return false to block navigation
    console.log('navigating to:', to.path);
    return true;
  },
  afterEach: (to) => {
    // Called after successful navigation
    document.title = to.path;
  },
  onError: (error) => {
    console.error('Router error:', error);
  },
});

router.start();

// Navigate programmatically
router.push('/user/123');
router.push('/user/456?page=2');

// Get current route
const current = router.current();
console.log(current?.path, current?.params, current?.query);
```

**Features:**

- Hash-based routing (`#/path`)
- Dynamic route parameters (`/user/:id`)
- Query string parsing (`?key=value`)
- Async navigation guards (`beforeEach`) - automatically disabled in non-Promise environments
- Lifecycle hooks (`afterEach`)
- Error handling (`onError`)
- Minimal footprint

## Browser Compatibility

KT.js is transpiled to ES5 and works in all modern browsers as well as legacy browsers including IE9+.

### Promise Polyfill

For environments without native `Promise` support (like IE11 and below), KT.js provides a minimal Promise polyfill:

```html
<!-- Load the Promise polyfill before KT.js -->
<script src="https://unpkg.com/kt.js@0.3.0/dist/promise-polyfill.js"></script>
<script src="https://unpkg.com/kt.js@0.3.0/dist/index.iife.js"></script>
```

Or when using module bundlers:

```js
import 'kt.js/dist/promise-polyfill';
import { h, div, createRouter } from 'kt.js';
```

**Note:** The Router will work without Promise support, but navigation guards (`beforeEach`) will run synchronously and cannot use async/await patterns.

## Notes

- `call`, `apply` on `Function.prototype` is trusted.

## License

MIT
