# KT.js

[![npm version](https://img.shields.io/npm/v/kt.js.svg)](https://www.npmjs.com/package/kt.js)
[![npm downloads](https://img.shields.io/npm/dm/kt.js.svg)](https://www.npmjs.com/package/kt.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="center">
  <a href="https://baendlorel.github.io/kt.js/">
    <img src="https://raw.githubusercontent.com/baendlorel/kt.js/refs/heads/main/assets/ktjs-0.0.1.svg" width="240px" alt="KT.js logo" />
  </a>
</p>

<p align="center"><strong>Visit KT.js: <a href="https://baendlorel.github.io/kt.js/">https://baendlorel.github.io/kt.js/</a></strong></p>

> kt.js is still under development, so there might be some breaking changes. Note the Update Log below

## Recent Updates

1. `refObject.value` is now split into read-only `refObject.state` and writable `refObject.mutable`.
2. `mutable` is a transient write view: do not cache it, destructure it, return it, or carry it across `await`.
3. `addOnChange((newValue, oldValue) => ...)` keeps `oldValue` as the previous reference, not a deep snapshot.
4. KT.js expects the transformer and TypeScript rules to reject ambiguous patterns at compile time; runtime hot paths intentionally avoid defensive guards for performance.

## Community

- QQ Group: `1070434849`
- Telegram: https://t.me/kt_js

## Introduction

kt.js is a simple framework with a tiny runtime that renders real DOM directly (no virtual DOM), uses explicit reactivity variables and gives you manual control over refs, bindings, and redraw timing.

KT.js focuses on one principle: keep direct control of the DOM and avoid unnecessary repainting.

## Reactive Contract

```ts
const user = ref({ profile: { name: 'John' } });

console.log(user.state.profile.name); // read
user.mutable.profile.name = 'Jane'; // write
```

Rules:

- Read with `.state`, write with `.mutable`.
- Do not cache `const x = ref.mutable`, destructure it, return it, or carry it across `await`.
- `oldValue` in change listeners is the previous reference only, not a deep-cloned snapshot.
- Correctness is expected to come from the transformer and TypeScript checks; runtime hot paths stay minimal on purpose.

This is an explicit contract, closer to a Rust-style model than permissive runtime magic: unclear code should fail early.

## Quick Start

```bash
pnpm create kt.js my-app
cd my-app
pnpm install
pnpm dev
```
