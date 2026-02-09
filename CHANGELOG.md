# Changelog

## 0.27.1 - 2026-02-10

### Core (@ktjs/core 0.27.1)

- **Fragment is available in JSX runtime**:
  - `Fragment` no longer throws and now returns a comment anchor with managed children.
  - Supports reactive child arrays and redraws when children refs change.
- **KTFor list reactivity**:
  - `KTFor` now accepts `list: T[] | KTReactive<T[]>`.
  - Reactive list changes trigger redraw without manually re-passing props.
- **k-model wiring update**:
  - Core now uses `$applyModel` from shared in `applyKModel`.

### Shared (@ktjs/shared 0.23.10)

- **Utility additions**:
  - Added `$forEach` and `$forEachAsync`.
  - Added shared constants `$emptyArray` and `$emptyObject`.
- **Comment prototype support for Fragment**:
  - Added `misc/comment.ts` and exported it from shared.
  - `Comment` now carries fragment-related metadata used by core runtime.
- **Renamed DOM helpers**:
  - `parseStyle` -> `$parseStyle`
  - `applyModel` -> `$applyModel`

### Breaking/Compatibility Notes

- If you consume `@ktjs/shared` directly, migrate to `$parseStyle` and `$applyModel`.
- Fragment behavior changed from "unsupported" to active runtime support.

## 0.24.0 - 2026-02-04

### Features

- **Unified Reactive Type**: Introduced `KTReactive` type that works for both `ref` and `computed` values.
- **Improved Type Safety**: Added `KTType` enum for more precise reactive type checking.
- **Simplified Model Registration**: Streamlined `k-model` directive implementation.
- **Better Component Integration**: Enhanced MUI components with the reactive system.

### Changes

- **Refined Type Definitions**: Moved reactive type declarations to the core package to avoid circular references.
- **Element Reference Restrictions**: Element `ref` property no longer accepts computed values.
- **Event Binding**: Simplified event handling in MUI components.

### Fixes

- **Select Component**: Resolved issues with `legend` and `fieldset` elements in select components.
- **Type Consistency**: Ensured `ref()` always returns `KTRef` instances.

### Documentation

- Updated documentation for version 0.24.0.
- Streamlined sub‑package documentation.

## 0.23.x - 2026-02-04

### Features

- **Download Statistics**: Added npm download badges to README.
- **Type System Improvements**: Enhanced reactive type system architecture.

## 0.22.x - 2026-01-31

### Features

- **Select Component**: Completed MUI Select component implementation.
- **Reactive Optimization**: Leveraged computed values for more efficient select component logic.
- **Component Simplification**: Reduced complexity in KTMuiSelect object structure.

### Fixes

- **Styling**: Removed output‑text styles and improved component styling.
- **CheckboxGroup**: Enhanced JSX usage for CheckboxGroup components.

## 0.21.0 - 2026-02-02

### Core Features (@ktjs/core)

- **Reactive k‑if**: Added reactive support for `k‑if` attribute with `ref` integration.
  - `k‑if` now accepts `ref` values and automatically updates DOM when ref changes.
  - Example: `<div k‑if={showRef}>Content</div>` where `showRef` is a `ref<boolean>`.
- **surfaceRef Utilities**: Added convenient `surfaceRef` series for common reactive patterns.
  - `surfaceRef` creates refs with automatic DOM updates for simple use cases.
- **replaceWith Export**: Added `$replaceWith` utility to shared package for DOM replacement.
- **Type Improvements**: Enhanced HTML type definitions and moved type locations for better organization.
- **Shared Package Enhancements**: Added new utility exports and separate publishing commands.

### Router (@ktjs/router)

- **Version Bump**: Updated to 0.20.0 with dependency alignment.
- **Build Configuration**: Improved exports configuration for better module resolution.

### Build System

- **Plugin Configuration**: Updated babel‑plugin‑ktjsx exports configuration.
- **Version Synchronization**: Prepared for two‑way binding feature development.

## 0.19.0 - 2026-01-31

### Highlights

- Prepared and published the `0.19.0` release: packaging and build improvements, and consolidated `tsconfig` at repo root to simplify builds.
- MUI package fixes and improvements:
  - Fixed JSX handling for MUI builds and set `jsxImportSource` to `@ktjs/core` for compatibility.
  - Various component fixes: radio `checked` setter fix, checkbox ref binding, TextField enhancements and event typing improvements.
  - Updated event prefix handling and attribute/type improvements to reduce runtime and typing issues.
- Code cleanup and repository hygiene:
  - Removed alias detection and eliminated `@/` path usages.
  - Moved shared utilities into `shared` for clearer package boundaries; fixed incorrect core/shared imports.
  - Removed unused `router` lib artifacts.
- Type and lint improvements: many TypeScript typing fixes, lint cleanups, and improved `createRedrawable` typings.
- Documentation improvements: README and package docs adjusted and draft docs reorganized.

## 0.18.x - 2026-01-30

### Major Features

- **Ref Enhancement**: Added change‑event binding support to `ref` (v0.18.1)
  - New methods `addOnChange` and `removeOnChange` for listening to value changes.
  - Automatically calls registered callbacks when `ref.value` is updated.
  - When both old and new values are DOM nodes, automatically replaces old node with new one in the DOM.
  - Example: `ref.addOnChange((newVal, oldVal) => console.log('Value changed:', newVal))`.
- **Alert Component Update**: Changed `onclose` event to `mui:close` in MUI Alert component.
  - Better alignment with MUI naming conventions.
  - Example: `<Alert mui:close={() => console.log('closed')}>Message</Alert>`.

## 0.16.x - 2026-01-28

### Major Features

- **KTFor Component**: Efficient list rendering with key‑based optimization (v0.16.0)
  - Returns a Comment anchor node (`<!-- kt‑for -->`) with a `__kt_for_list__` property.
  - Elements stored in `__kt_for_list__` array attached to the anchor.
  - Auto‑appends list items when anchor is appended to parent via `applyContent`.
  - Key‑based DOM reuse for minimal updates (default key: identity function).
  - `redraw()` method for controlled list updates.
  - Props: `list`, `map`, `key` (optional).
  - Example: `<KTFor list={items} key={(item) => item.id} map={(item) => <div>{item.name}</div>} />`.

### Type Improvements

- **KTForAnchor Type**: Extended Comment node interface with `redraw` capability.
  - Type‑safe access to redraw method on list anchor nodes.
  - Better TypeScript integration for list components.
- **Event Handler Type Flexibility**: Event handlers now accept custom function signatures.
  - `KTPrefixedEventHandlers` uses `Function & {}` pattern like `otherstring`.
  - Allows both standard event handlers and custom callback signatures.
  - Resolves type conflicts in custom components (e.g., MUI components).
  - No more type errors when defining custom event props.

### Breaking Changes

- **h function**: Removed support for `attr` parameter as string (className shorthand).
  - `h('div', 'my‑class')` is no longer supported.
  - Use object syntax instead: `h('div', { class: 'my‑class' })`.
  - `KTRawAttr` type no longer includes `string`.
  - Simplifies type system and enforces consistent API usage.

## 0.15.x - 2026-01-25

- **Added Functions**: `createRedrawable`, `createRedrawableNonref`.

## 0.14.x - 2026-01-16 ~ 2026-01-23

### Major Features

- **k‑if Directive**: Added `k‑if` attribute for conditional element creation (v0.14.6).
  - Elements with `k‑if={false}` will not be created in the DOM.
  - One‑time evaluation (not reactive).
  - Simple and lightweight conditional rendering without virtual DOM overhead.
  - Example: `<div k‑if={isVisible}>Content</div>`.
- **Router Simplification**: Major router architecture improvements (v0.14.7‑0.14.9).
  - Now **hash‑mode only** – removed history mode for simpler implementation.
  - Removed sync guards – now **async‑only** with Promise‑based guards.
  - Removed separate hooks – consolidated into guard system.
  - Router initialization simplified – automatic setup on `createRouter()`.
  - Cleaner API surface with bitwise guard levels for fine control.
  - Added `RouterView` concept for better component integration.
  - Added `baseUrl` support for path prefixing (v0.14.3).
- **Enhanced Array Support**: Children can now be arrays for easier `.map()` integration (v0.14.1).
  - `KTAvailableContent` extended to support arrays.
  - Simplifies rendering lists without wrapping elements.
  - Example: `<div>{items.map(item => <span>{item}</span>)}</div>`.

### Improvements

- **Redraw API Enhancement**: `redraw()` now returns the new element (v0.14.2).
  - Easier to chain operations and maintain references.
  - Better integration with component lifecycle.
- **Type Improvements**: Deeper recursive type definitions for better type inference.
  - More accurate type checking for nested structures.
  - Enhanced TypeScript experience.
- **Code Quality**: Refactored router to use destructuring for cleaner parameter handling.
  - Improved code readability.
  - Better maintainability.

### Breaking Changes

- **Router**: Hash‑mode only – history mode removed.
- **Router**: Synchronous guards removed – all guards must be async or return immediately.
- **Router**: Separate `after` hooks consolidated into guard system.

### Bug Fixes

- Fixed `k‑if` being incorrectly added as DOM attribute.
- Improved router initialization timing.
- Fixed route matching edge cases.

## 0.11‑0.13.x - 2026-01-15

### Major Features

- **Redraw Mechanism**: Added `redraw()` function to JSX components for controlled re‑rendering.
  - Elements returned by JSX now include a `redraw()` method.
  - Supports updating props and children dynamically.
  - Efficient replacement strategy that inherits redraw method.
  - Compatible with both function components and native elements.
  - Enables fine‑grained control over when and what gets updated.

### Improvements

- **JSX Runtime Enhancements**:
  - Function components now support the redraw pattern.
  - Better handling of ref during component updates.
  - Consistent API between native elements and function components.
  - Improved type definitions for JSX elements.
- **Type System**:
  - Added `KTHTMLElement` type with redraw support.
  - Better type inference for function components.
  - Enhanced JSX type exports.

### Breaking Changes

- **Fragment Removal**: Removed Fragment support.
  - `Fragment` now throws an error when used.
  - KT.js philosophy: direct DOM manipulation without virtual DOM abstraction.
  - Use arrays or container elements instead.

### Bug Fixes

- Fixed ref not being properly reassigned during redraw.
- Improved component replacement logic to maintain consistency.

## 0.7‑0.10.x - 2025-12-24 ~ 2025-12-29

### Major Features

- **JSX Package Consolidation**: Merged `@ktjs/jsx` package into `@ktjs/core`.
  - JSX functionality is now built into the core package.
  - Simplified package structure by removing standalone JSX package.
  - Removed `@ktjs/jsx` dependency from `kt.js` package.
- **Function Component Support**: Added support for functional components (v0.9.0).
  - Functions can now be used as JSX elements.
  - Automatic component invocation in JSX runtime.
  - Better component composition patterns.
- **Promise Component Support**: Enhanced async component handling (v0.10.0).
  - Components can now return Promises.
  - Native support for async rendering.
  - Improved handling of promise‑based content.
- **Function‑based Attributes and Children**: Functions can be used as attribute values and children (v0.7.1).
  - Dynamic content generation through function invocation.
  - Enhanced reactive‑like behavior without adding a full reactive system.
  - Functions are automatically executed to retrieve their return values.

### Breaking Changes

- **Removed `ktnull`**: The special `ktnull` value has been removed.
  - Simplifies the API surface.
  - Native `null` and `undefined` handling improved.
- **Update Mechanism Removed**: Cancelled the update mechanism to ensure lightweight design.
  - Maintains KT.js's philosophy of minimal overhead.
  - Focus on direct DOM manipulation.
- **Ref Type Restrictions**: JSX `ref` is now limited to HTML elements only.
  - More strict typing for better type safety.
  - Prevents misuse of ref on non‑HTML elements.
- **Deleted `@ktjs/enhance`**: Removed enhancement features.
  - Streamlined codebase for better maintainability.

### Improvements

- **Type System Enhancements**:
  - More refined type names.
  - Better JSX type inference.
  - Improved type exports from core package.
  - Fixed type errors in example package.
- **Ref Improvements**:
  - Ref no longer requires default values (v0.8.2).
  - Changed ref detection mechanism (v0.8.3).
  - Ref now properly removed from attributes to prevent DOM pollution (v0.6.10).
- **Event Handler Syntax**: Confirmed `on:click` syntax for event handlers instead of `@click` or `onclick`.
  - Consistent event binding pattern.
  - Avoids conflicts with native attributes.
- **Build Configuration**:
  - Added convenient packaging commands.
  - Improved example package configuration.
  - Vite and tsconfig alignment for better development experience.
  - Fixed build scripts issues.
- **Testing**: Added tests for function‑as‑tag usage.
- **Documentation**:
  - Synchronized README between root and `kt.js` sub‑package.
  - Added SSR TODO notes.
  - Updated changelogs.

### Development Experience

- Example application is now fully runnable with proper configuration.
- Better IDE support with improved type definitions.
- Development workflow optimizations.

## 0.6.6 - 2025-12-24

### Major Features

- **JSX/TSX Support**: Added full JSX syntax support with the new `@ktjs/jsx` package.
  - JSX now compiles directly to `h()` function calls – zero virtual DOM overhead.
  - Full TypeScript integration with proper HTML element type inference.
  - Support for `on:click` event handler syntax.
  - Included in the main `kt.js` package as a required dependency.
  - No Fragment support – KT.js doesn't have a Fragment concept.

### Changes

- **Dependency Updates**: `@ktjs/jsx` is now a required dependency of the main `kt.js` package.
- **TypeScript Configuration**: Updated shared tsconfig to include `@ktjs/jsx` path mapping.
- **Build Configuration**: Updated Rollup config to handle `@ktjs/jsx` as external dependency.
- **Documentation**: Updated README with comprehensive JSX usage examples and configuration.

## 0.5.1‑x - 2025-11-28

- Fixed documentation that gave wrong function names for button shortcut.
- Fixed runtime module's key being wrongly mangled.
- Fixed version sync procedure.

## 0.5.0 - 2025-11-08 ~ 2025-11-22

### Major Features

- **Monorepo Architecture**: Restructured the project into a monorepo using pnpm workspaces with multiple packages:
  - `@ktjs/core`: Core DOM manipulation utilities.
  - `@ktjs/router`: Client‑side routing.
  - `@ktjs/shortcuts`: Convenient shortcut functions.
  - `kt.js`: Main entry package that re‑exports all functionality.
- **Router Rewrite**: Completely rewrote the router with improved architecture.
  - Function‑style matcher implementation.
  - Async/await support with automatic fallback to sync mode.
  - Improved navigation guards with `GuardLevel` enum (using bitwise operations).
  - Distinguished `RawRouteConfig` and `RouteConfig` for better type safety.
  - Optimized route matching and parameter substitution (`emplaceParams`).
  - Enhanced path normalization and route flattening.
  - Reduced code duplication by extracting `navigatePrepare` logic.
- **Runtime Mechanism**: Introduced a shared runtime system (`@ktjs/runtime`).
  - Enables sharing of common functions like `throws` across packages.
  - Smart module resolution through path aliases.
  - No import statements in build output for cleaner bundles.
- **Enhanced Shortcuts Package**:
  - Added `withDefaults` function for wrapping `h` or alias functions with default properties.
  - Added `aliasH` to simplify creating h function aliases.
  - Supports `$defines` property for defining default values.
  - Proper type inference for both `h` and alias variants.
- **Build System Improvements**:
  - Created unified Rollup configuration factory.
  - Removed unnecessary `external` and `cjs` configurations.
  - Simplified IIFE naming and globals mapping.
  - Added `clean` command to remove all build artifacts and caches.
  - Proper handling of `runtime.ts` in build process.
- **Attribute Enhancements**:
  - Added `kt` prefix to all special attributes (`ktattr`, `ktcontent`).
  - `on:<eventName>` syntax for event handlers (e.g., `on:click`) to avoid conflicts with existing attributes.
  - Function values in attributes are automatically treated as event handlers.
  - Improved type hints for input element `type` property while preserving string compatibility.
  - Complete event type annotations for better IDE autocomplete.
- **Content System**:
  - Enhanced `ktnull` implementation – returns empty string for toString methods to avoid DOM node creation overhead.
  - Better handling of content arrays with mixed types.
  - Improved append operations with native DOM methods.

### Bug Fixes

- Fixed `attr.class` not being properly restored in some cases.
- Fixed `attr.style` with object type causing invalid keys being set on `element.style`.
- Fixed global runtime `kt` not found in router's `index.ts`.
- Fixed tests and build configuration errors and warnings.
- Fixed type resolution issues in `tests/` folders – non‑repo types were incorrectly typed as `any`.
- Fixed route matcher import issues after shared module refactoring.
- Fixed `normalizeParams` regex errors.
- Fixed `ktnull` element filtering in append operations.

### Development Experience

- **Testing Infrastructure**:
  - Proper monorepo test configuration with Vitest.
  - Each package has its own `vitest.config.ts`.
  - Global test files now properly included in root `tsconfig.json`.
  - `@ktjs/runtime` alias resolution in test environment.
  - All existing tests passing.
- **Linting & Code Quality**:
  - Stricter ESLint rules with upgraded oxlint.
  - Consistent code formatting (if statements now require braces).
  - Removed unnecessary `any` types in favor of proper type annotations.
  - Added type imports with `import type` for better tree‑shaking.
  - Converted to arrow functions for consistency.
- **Developer Tools**:
  - Added example HTML file for quick testing.
  - Better error messages with `$throw` utility.
  - Cached commonly used native methods for performance.
  - Symbol‑based private properties to avoid naming conflicts.

### Performance Optimizations

- Cached `document` and native DOM methods.
- Reduced repeated branch evaluations.
- Optimized route matching with pre‑flattened routes.
- Used `push` + `reverse` instead of `unshift` for better performance.
- Minimized object creation in hot paths.
- Terser minification enabled for smaller bundles.

### Breaking Changes

- Removed `shared` package, merged into `@ktjs/core`.
- Package naming changed from `@ktjs` to individual package names under `@ktjs/` scope.
- `throws` renamed to `$throw` for consistency with other shared utilities.
- `substituteParams` renamed to `emplaceParams`.
- `silentLevel` renamed to `GuardLevel` with new enum‑based approach.
- Router configuration field changes for better clarity.

## 0.4.x - 2025-11-04

- Fixed style attribute handling that could cause setting invalid keys on `element.style` when the given style is an object instead of a string.
- Added `ktnull`: a special value representing "null", used for filtering. Since native DOM APIs do not ignore `undefined` or `null`, this feature is provided to maintain native behavior while enhancing usability.

## 0.3.x - 2025-11-04

- Fixed README.md examples for global usage (`kt` instead of `KT`).
- Fixed `Promise` would be not valid for caching `Promise.resolve` and `Promise.reject` in older environments.

### New Features

- Added IIFE build output format for direct browser usage via `<script>` tag.
- Router now automatically switches to synchronous mode in environments without Promise support.
- Separate minimal Promise polyfill output for environments that need it.

### Compatibility Improvements

- Complete ES5 compatibility: code is now transpiled to ES5 using TypeScript target configuration.
- Removed async/await syntax, replaced with Promise chains for better compatibility.
- Removed destructuring assignments for IE compatibility.
- Removed arrow functions, forEach, and startsWith to support older browsers.
- Added polyfills for `append` and `navigate` methods.
- Router refactored to work in IE with minimal polyfills (Promise only).

### Optimizations

- Applied const enum for Promise states to reduce bundle size.
- Enabled Terser minification for smaller output.
- Removed Babel dependency (transpilation now handled by TypeScript).

## 0.2.x - 2025-10-28 22:08:19

- New feature: Router.
- Fixed the problem that Router is not exported.
- Added key features to the document.

## 0.1.x - 2025-10-28 21:50:18

- Fixed the problem of still using `ktext`.
- Minified the runtime.
- **Cancel all enhancement and return to the primary HTMLElement**.

## 0.0.8 - 2025-09-20 14:59

### Feature changes

- Merged lib imports and removed usages of NotProvided and other any types; removed memoize and merge temporarily.
- Merged lib exports and replaced bind with wrapper for better repeated‑call performance.
- Use of private properties to store text nodes and other internal state; refined descriptors and removed isKT variable.
- Improved typing for h function aliases and moved type declarations to a dedicated file.
- Split alias files and renamed shortcuts; replaced bind‑args approach with direct dependency installation.

### Optimizations

- Cleared the changelog and bumped the version to 0.0.8; added a changelog link.

### Fixes

- None.

## 0.0.7 - 2025-09-19 21:54

### Feature changes

- Split enhance implementation into multiple files and improved reuse and type narrowing.
- kmount now targets only KEnhanced elements; createApp uses appendChild.
- Local development flow improved and the example app became runnable.
- README and documentation updates.

### Optimizations

- Readme cleanup and removal of unnecessary replace entries; trimmed duplicate newlines.
- Upgraded tooling to ensure proper type export handling and synced script configuration.

### Fixes

- Corrected setAttr when the value was not a string.
- Resolved mount‑return issue that caused an exception during mounting.

## 0.0.5 - 2025-09-19 20:13

### Feature changes

- Implemented core APIs: useScope, css, h, and createApp; cssList will self‑clear.
  - But suddenly removed css related code. Only h and createApp remained.
- Implemented ktext attribute which ensures a dedicated text node attached to h‑created elements.
- Added multiple tests for the h function.

### Optimizations

- Introduced a jsdom test environment and improved iteration safety (avoided forEach in non‑standard arrays); added css test suite.

### Fixes

- Fixed event registration test issue caused by a global addeventlistener name collision by refining cached native function names.

## 0.0.4 - 2025-09-19 19:09

### Feature changes

- Added @emotion/css for testing and rebuilt the example using Vite; prepared a trial publish for 0.0.4.
- Decided to rely on @emotion/css for css processing; method now accepts arbitrary strings.

### Optimizations

- For single‑class CSS blocks, generate a cssId and insert a dedicated style element into the page.

### Fixes

- None.
