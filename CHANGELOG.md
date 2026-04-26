# Changelog

## 0.40.x - 2026-04-26

### Breaking Changes

- `KTConditional` renamed to `KTIf`
- `KTSubRef` is now a subclass of `KTRef` (previously independent)
- *`addOnChange` methods renamed to `listener`*
- Anchor classes refactored with unified `_appendTo` method pattern

### Refactor

- Unified `KTAnchor` implementation across all anchor types (`KTIfAnchor`, `KTForAnchor`, `KTFragmentAnchor`, `KTAsyncAnchor`)
- Simplified `Fragment` implementation for plain array children
- Removed `handlerKeys`, `handlers` changed to `Set`
- Merged `KTRawContent` and `MultiContent` types
- Removed internal markers and added `hidePrivate` rollup plugin
- `subref` no longer supports `get` method

### Fixes

- Fixed `k-for` not inserting updated list items to DOM
- Fixed `KTIf` infinitely appending itself
- Fixed `KTSubRef<string>` assigned to `KTRef<any>` type error

### Features

- `style` and `class` props now fully reactive
- `KTAsync` updated to handle reactive values as component

### Other

- Reduced icon bundle size by 32.7%
- Removed sourcemaps from `@ktjs/mui`
- Added husky and lint-staged

## 0.39.x - 2026-04-20

### Breaking Changes

- Removed the sub-computed / sub-reactive layer from `@ktjs/core`. `reactive.get(...)`, `reactive.is(...)`, and `reactive.match(...)` now return regular `KTComputed` values built on the same dependency model as `map(...)`.
- Removed related sub-reactive exports and flags such as `KTSubComputed`, `SubComputed`, `SubReactive`, and `isSubComputed`. `subref(...)` remains the supported lightweight nested write API.

### API

- Simplified `reactive.is(...)` and `reactive.match(...)` into computed sugar built on top of the regular reactive-like dependency path.
- Aligned `reactive.get(...)` with the rest of the computed helpers so nested reads now behave like a standard computed projection.
- Hardened `ref.subref(...)` so deriving or writing a sub-ref from a non-object-like source fails fast instead of producing invalid nested access.

### Fixes

- Fixed fragment child conversion so `Fragment` can preserve `Comment` anchors produced by conditional rendering, keeping nested fragment / `k-if` placeholder flows working.

### Styling

- Removed built-in font-family declarations across `@ktjs/mui` components so typography inherits from the host application instead of being forced by the component library.

### Releases

- Published `@ktjs/core@0.39.0`, `kt.js@0.39.0`, `@ktjs/mui@0.39.0`, and `create-kt.js@0.5.2`.

## 0.38.x - 2026-04-06 ~ 2026-04-20

### API

- Added **`reactive.is(target)`** to create boolean computed values based on `Object.is` comparison.
- Added **`reactive.match(pattern)`** to create boolean computed values via deep object/array pattern matching.
- Updated **`reactive.is(target)`** and **`reactive.match(pattern)`** to accept reactive targets/matchers (such as `ref` / `computed`) and keep results synced with both sides.
- Updated **`computed(() => ..., dependencies)`** to accept `KTReactiveLike` dependencies and support sub-reactive inputs.

### Fixes

- Fixed an update bug where `reactive.match(reactivePattern)` could stop reacting after the matcher changed.
- Fixed a stale-value issue in sub-reactive handlers so `is` / `match` recomputation always reads from the source reactive.
- Fixed duplicated listener registration when multiple sub-reactive dependencies share the same source in one computed.
- Fixed `k-if` narrowing when the guarded value could still be `null`.
- Fixed fragment child conversion for conditional placeholder anchors so fragment-based trees keep rendering correctly.

### Refactor

- Unified internal reactive handler key generation (`nextHandlerId`) to avoid function-key collisions and simplify listener lifecycle management.

## 0.37.x - 2026-03-31

- Fixed an issue where schedulers would not clear properly if a handler threw an error, which could lead to unexpected behavior in subsequent updates.
- Refactored the `Fragment` implementation to address memory leak issues and improve robustness. The new implementation ensures that fragments are properly cleaned up and that their lifecycle is more predictable, especially in complex reactive scenarios.

## 0.36.x - 2026-03-27

- Refactored reactive objects. Now we have a new base class `KTReactiveLike`, and `ref` / `computed` both implement this interface. This allows for more consistent APIs and better type inference across reactive values.
- @ktjs/mui now fully supports the new reactive contract, and we updated the Popover component to use `ensureRefLike` for the `open` prop, which provides better error handling and type safety.

## 0.35.x - 2026-03-24

### API

- **`reactive.get('a','b')`** is a shortcut for `reactive.map((v) => v.a.b)`. By default it has 5 levels of type annotations and it's convienient for common use cases.
- **`ref.subref('a','b')`** creates a writable lightweight ref to a nested field. Reading and writing the subref will stay in sync with the parent ref and trigger parent listeners.

### Documentation

- Updated the example reactive page to demonstrate both `get(...)` and `subref(...)`.