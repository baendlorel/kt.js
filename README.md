# KT.js

[![npm version](https://img.shields.io/npm/v/kt.js.svg)](https://www.npmjs.com/package/kt.js)
[![license](https://img.shields.io/github/license/baendlorel/kt.js.svg)](https://github.com/baendlorel/kt.js/blob/main/LICENSE)

[CHANGLOG✨](CHANGELOG.md)

> Note: This framework is still under development. APIs, type declarations, and other parts **may change frequently**. If you use it, please watch for updates in the near future. Feel free to mail me if you have any questions!

KT.js is a tiny DOM utility focused on direct DOM manipulation. It favors not forcing re-renders and aims to keep DOM updates to the absolute minimum for maximum performance.

For more awesome packages, check out [my homepage💛](https://baendlorel.github.io/?repoType=npm)

## Architecture

KT.js is now a **monorepo** containing multiple packages:

- **[@ktjs/core](./packages/core)**: Core DOM manipulation utilities and the `h` function
- **[@ktjs/router](./packages/router)**: Client-side routing with navigation guards
- **[@ktjs/shortcuts](./packages/shortcuts)**: Convenient shortcut functions for common operations
- **[kt.js](./packages/kt.js)**: Main entry package that re-exports all functionality

You can install the full package or individual packages as needed:

```bash
# Install the full package
pnpm add kt.js

# Or install individual packages
pnpm add @ktjs/core
pnpm add @ktjs/router
pnpm add @ktjs/shortcuts
```

## Philosophy

As a web framework, repeatedly creating a large number of variables and objects is unacceptable. So I created KT.js.

KT.js follows one rule: full controll of dom and avoid unless repainting.

## Current Core Features

- **`h` function**: and its aliases
- **Router**:
  - Auto-adapt to environment: uses async navigation guards when `Promise` is available, falls back to synchronous mode otherwise
- **Full ES5 compatibility**: works in IE9+ and other legacy browsers
  - Transpiled to ES5 with no modern syntax
  - Optional minimal Promise polyfill included for older environments
- **ktnull**: a special value representing "null", used for filtering. Since native DOM APIs do not ignore `undefined` or `null`, this feature is provided to maintain native behavior while enhancing usability.

## Getting started

### Using IIFE (direct browser usage)

KT.js provides an IIFE build that can be included directly in HTML:

```html
<script src="https://unpkg.com/kt.js@0.3.0/dist/index.iife.js"></script>
<script>
  // kt is available globally
  const { h, div } = kt;
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

If you give a function in attributes, it will be treated as an event listener, and the key will be considered as the event name. `@<eventName>` will also be considered as the handler to avoid conflicts with existing attributes:

```ts
const button = btn(
  {
    click: () => alert('Clicked!'),
    dblclick:'22',
    '@dblclick': function trueHandler(){...}
  },
  'Click me');

// this equals
const button = btn(undefined, 'Click me');
button.setAttribute('dblclick', '22');
button.addEventListener('click', () => alert('Clicked!'));
button.addEventListener('dblclick', function trueHandler(){...});
```

Work with `@emotion/css`

```ts
import { css } from '@emotion/css';

const className = css`
  color: red;
  font-size: 20px;
`;

h('div', { class: className }, 'Styled text');
h('div', className, 'Styled text');
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

## `ktnull`

`ktnull` is an internal falsy value. It is assigned by `Object.freeze(Object.create(null))`.
It is used for filtering, you can do like this:

> Since `ktnull` is an empty object, it can be used on the 2nd argument position of `h` or the 1st position of `div`, representing attributes.

```ts
import { div, ktnull } from 'kt.js';
const list = div(ktnull, [
  div(ktnull, 'Item 1'),
  someCondition ? div(ktnull, 'item 1.5') : ktnull,
  div(ktnull, 'Item 2'),
  undefined,
]);
```

Then it will create:

```html
<div>
  <div>Item 1</div>
  <div>Item 2</div>
  undefined
</div>
```

## Browser Compatibility

KT.js is transpiled to ES5 and works in all modern browsers as well as legacy browsers including IE9+.

### Promise Polyfill

For environments without native `Promise` support (like IE11 and below), KT.js provides a minimal Promise polyfill:

```html
<script src="https://unpkg.com/kt.js@0.3.0/dist/index.iife.js"></script>
```

Or when using module bundlers:

```js
import 'some promise polyfill'; // Will fallback to sync version if Promise is not available
import { h, div, createRouter } from 'kt.js';
```

**Note:** The Router will work without Promise support, but navigation guards (`beforeEach`) will run synchronously and cannot use async/await patterns.

## Notes

- `call`, `apply` on `Function.prototype` is trusted.

## License

MIT
