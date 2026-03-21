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

1. `ref.value` remains the standard read API, and it can also replace the whole outer value with `ref.value = nextValue`.
2. `ref.draft` is the deep-mutation entry for nested objects, arrays, `Map` / `Set`, and custom mutable objects.
3. `ref.draft` itself is not assignable; mutate nested fields or call mutating methods on the returned object instead.
4. `addOnChange((newValue, oldValue) => ...)` keeps `oldValue` as the previous reference, not a deep snapshot.

## Community

- QQ Group: `1070434849`
- Telegram: https://t.me/kt_js

## Introduction

kt.js is a simple framework with a tiny runtime that renders real DOM directly (no virtual DOM), uses explicit reactivity variables and gives you manual control over refs, bindings, and redraw timing.

KT.js focuses on one principle: keep direct control of the DOM and avoid unnecessary repainting.

## Reactive Contract

```ts
const user = ref({ profile: { name: 'John' }, tags: ['new'] });

console.log(user.value.profile.name); // read

user.value = {
  ...user.value,
  profile: { ...user.value.profile, name: 'Jane' },
  tags: [...user.value.tags],
}; // replace the whole outer value

user.draft.profile.name = 'Jane'; // deep write
user.draft.tags.push('active'); // array / map / set / custom-object style mutation
```

Rules:

- Read with `.value`.
- Replace the whole outer value with `.value = nextValue`.
- Use `.draft` for deep mutations on nested objects, arrays, `Map` / `Set`, or other mutable instances.
- Do not assign to `.draft` itself; mutate inside it.
- `computed` stays read-only and is consumed through `.value`.
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
