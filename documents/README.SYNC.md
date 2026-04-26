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

## 0.40.x Breaking Changes ✨

1. `ref.addOnChange` is renamed to `ref.listen`. 
2. Value listeners are now stored in a `Set` instead of `Map`.
3. `KTFor`, `KTIf`,`KTAsync`,`Fragment` are completely refactored by using `KTAnchor`. More reliable, efficient and safe. (Lifecycle mechanism is under design)

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
