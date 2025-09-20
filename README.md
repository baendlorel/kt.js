# KT.js

[![license](https://img.shields.io/github/license/baendlorel/kt.js.svg)](https://github.com/baendlorel/kt.js/blob/main/LICENSE)

[中文](README.zh.md) | [English](README.md) | [CHANGLOG](CHANGELOG.md)

> Note: This framework is still under development. APIs, type declarations, and other parts **may change frequently**. If you use it, please watch for updates in the near future. Feel free to mail me if you have any questions!

KT.js is a tiny, high-performance DOM utility focused on minimal re-rendering and direct DOM manipulation. It favors not forcing re-renders and aims to keep DOM updates to the absolute minimum for maximum performance.

For more awesome packages, check out [my homepage💛](https://baendlorel.github.io/?repoType=npm)

## Philosophy

As a web framework, repeatedly creating a large number of variables and objects is unacceptable. This is a provocation against browsers and the V8 engine(or SpiderMonkey, or JSC). So I created KT.js.

KT.js follows one rule: avoid repainting unless necessary. It updates the DOM directly and only where needed — no virtual DOM, no automatic diffing. That keeps the UI predictable and fast, while leaving control to the developer.

- **Direct DOM**: update only what changes.
- **Minimal updates**: avoid unnecessary reflows and repaints.
- **Predictable and fast**: stable UI with high performance.
- **Developer control**: you decide when to update.

## Getting started

Install via npm but pnpm is recommended:

```bash
npm install kt.js
# or
pnpm add kt.js
```

Import KT.js into your project.

```ts
import { h, createApp } from 'kt.js';

const app = h('div', { id: 'app' }, 'Hello, KT.js!');

createApp(app);
```

## Api

_`Function.prototype.call` is trusted._

- `h` — hyperscript helper
  - Creates a KT-enhanced DOM element representation.
  - Typical usage:` h('div', { id: 'root' }, 'Hello')`.
  - Returns an `HTMLKEnhancedElement` (an HTMLElement with extra `enhance` properties described below).
  - Rich aliases like `div`, `span`, `ul`, etc. are available for convenience.
    - `div(attr, content)` is equivalent to `h('div', attr, content)`.

- `createApp` — mount helper
  - Mounts a root `HTMLKEnhancedElement` to the document.
  - Signature: `createApp(rootElement: HTMLKEnhancedElement, mountTo?: HTMLElement)`
  - If `mountTo` is omitted, it tries `#app` and falls back to `document.body`.

** Work with `@emotion/css`**

_Once I wrote my own css handler, but it turned out to be unnecessary._

```ts
import { css } from '@emotion/css';

const className = css`
  color: red;
  font-size: 20px;
`;

h('div', { class: className }, 'Styled text');
```

## Enhance-added properties and methods

After calling `enhance(element)` (done internally by `h` when appropriate), an HTMLElement becomes an `HTMLKEnhancedElement` with the following additions:

- Properties
  - `ktext` (string): getter/setter that proxies to an internal Text node stored on the element (reads/writes element text content).
    - the text node is stored by a WeakMap, so normally it is not possible to stop it from showing up unless you set ktext to `''`.
  - `kchildren` (array): getter/setter that exposes the element's children as an array of strings / enhanced elements. Setting `kchildren` replaces the element's content and accepts strings, Text nodes or other KT.js enhanced elements.

- Methods
  - `kon(type, listener, options?)` — enhanced addEventListener
    - Normalizes options. Supports a `triggerLimit` option which will remove the listener after N triggers (if `triggerLimit === 1` it becomes `once`).
    - Returns the listener (or a wrapped listener used for limited triggers).
  - `koff(type, listener, options?)` — enhanced removeEventListener
    - Removes event listeners respecting provided options.
  - `kmount(element)` — append/mount helper
    - Equivalent to `element.appendChild(this)` and returns `this` for chaining.

## Notes

- This library manipulates the DOM directly and intentionally keeps re-rendering minimal.
- The API is small and low-level by design — it's intended as a performance-focused building block rather than a full component framework.
- `Function.prototype.call` is trusted.

## Contributing

PRs and issues are welcome. If you add features that affect the public API, update README and tests accordingly.

## License

MIT
