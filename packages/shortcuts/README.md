# KT.js

<p align="center">
  <a href="https://baendlorel.github.io/kt.js/">
    <img src="https://raw.githubusercontent.com/baendlorel/kt.js/refs/heads/main/assets/ktjs-0.0.1.svg" width="200px" alt="KT.js logo" />
  </a>
</p>
<p align="center">
  <img src="https://img.shields.io/npm/v/kt.js.svg"/>
  <img src="https://img.shields.io/npm/dm/kt.js.svg"/>
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg"/>
</p>

<h4 align="center">Doc → <a href="https://baendlorel.github.io/kt.js/">https://baendlorel.github.io/kt.js/</a></h4>

> kt.js is still under development, there might be some breaking api changes.

## Community

- QQ Group: `1070434849`
- Telegram: https://t.me/kt_js

## Recent Updates

1. Plugins:
   1. `k-for` now supports `Ctrl + Click` to navigate to the source of the iterable variable and rename by `F2`.
   2. `kt-tsc` is now available for type checking. (Mainly check whether the `k-for` statement is valid)
2. Framework: <= 0.38.x - reactive helper additions
   1. `reactive.is(target)`: create a boolean computed based on `Object.is` comparison.
   2. `reactive.match(pattern)`: create a boolean computed using deep object/array pattern matching.
   3. `get(...keys)`: create a `KTSubComputed` object. It is a light version of computed, used to bind values
   4. `subref(...keys)`: create a `KTSubRef` object. It is a light version of ref, used to bind values and also support two-way binding with `k-model`.
   5. `ref.value` remains the standard read API, and it can also replace the whole outer value with `ref.value = nextValue`.
   6. 0.33.x - `ref.draft` is the deep-mutation entry for literally any objects. Just use `someRef.draft.a = someValue`, and kt.js will add it to microqueue and redraw it on the next tick. Works for `Map`, `Set`, `Array`, `Date` and your custom objects.`ref.draft` itself is **not assignable**.
   7. `addOnChange((newValue, oldValue) => ...)` keeps `oldValue` as the previous reference, not a deep snapshot.

## Introduction

kt.js is a web framework with a tiny runtime that renders real DOM directly (no virtual DOM), uses explicit reactivity variables and gives you manual control over refs, bindings, and redraw timing.

KT.js focuses on one principle: keep direct control of the DOM and avoid unnecessary repainting.

## Quick Start

```bash
pnpm create kt.js my-app
cd my-app
pnpm install
pnpm dev
```

## Security model

kt.js intentionally trusts application code and keeps DOM operations explicit.

- Text children are inserted as text nodes by default.
- `k-html` is a raw HTML escape hatch that writes to `innerHTML` without sanitization.
- Prefer `on:*` event bindings. Do not pass raw `onclick` / `onerror` style strings.
- Attributes such as `href`, `src`, `srcdoc`, `action`, and SVG URL attributes are forwarded as-is.
- If you bind untrusted input, sanitization and validation must be handled by your application.

## License

MIT License.
