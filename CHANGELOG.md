# Change Log 🕒

## 0.6.6 2025-12-24

### Major Features

- **JSX/TSX Support**: Added full JSX syntax support with the new `@ktjs/jsx` package
  - JSX now compiles directly to `h()` function calls - zero virtual DOM overhead
  - Full TypeScript integration with proper HTML element type inference
  - Support for `on:click` event handler syntax
  - Included in the main `kt.js` package as a required dependency
  - No Fragment support - KT.js doesn't have a Fragment concept

### Changes

- **Dependency Updates**: `@ktjs/jsx` is now a required dependency of the main `kt.js` package
- **TypeScript Configuration**: Updated shared tsconfig to include `@ktjs/jsx` path mapping
- **Build Configuration**: Updated Rollup config to handle `@ktjs/jsx` as external dependency
- **Documentation**: Updated README with comprehensive JSX usage examples and configuration

## 0.5.1-x 2025-11-28

- fix the documentation that gives wrong function names for button shortcut.
- fix the runtime module's key is wrongly mangled.
- fix the verion sync procedure.

## 0.5.0 2025-11-08 ~ 2025-11-22

### Major Features

- **Monorepo Architecture**: Restructured the project into a monorepo using pnpm workspaces with multiple packages:
  - `@ktjs/core`: Core DOM manipulation utilities
  - `@ktjs/router`: Client-side routing
  - `@ktjs/shortcuts`: Convenient shortcut functions
  - `kt.js`: Main entry package that re-exports all functionality

- **Router Rewrite**: Completely rewrote the router with improved architecture
  - Function-style matcher implementation
  - Async/await support with automatic fallback to sync mode
  - Improved navigation guards with `GuardLevel` enum (using bitwise operations)
  - Distinguished `RawRouteConfig` and `RouteConfig` for better type safety
  - Optimized route matching and parameter substitution (`emplaceParams`)
  - Enhanced path normalization and route flattening
  - Reduced code duplication by extracting `navigatePrepare` logic

- **Runtime Mechanism**: Introduced a shared runtime system (`@ktjs/runtime`)
  - Enables sharing of common functions like `throws` across packages
  - Smart module resolution through path aliases
  - No import statements in build output for cleaner bundles

- **Enhanced Shortcuts Package**:
  - Added `withDefaults` function for wrapping `h` or alias functions with default properties
  - Added `aliasH` to simplify creating h function aliases
  - Supports `$defines` property for defining default values
  - Proper type inference for both `h` and alias variants

- **Build System Improvements**:
  - Created unified Rollup configuration factory
  - Removed unnecessary `external` and `cjs` configurations
  - Simplified IIFE naming and globals mapping
  - Added `clean` command to remove all build artifacts and caches
  - Proper handling of `runtime.ts` in build process

- **Attribute Enhancements**:
  - Added `kt` prefix to all special attributes (`ktattr`, `ktcontent`)
  - `on:<eventName>` syntax for event handlers (e.g., `on:click`) to avoid conflicts with existing attributes
  - Function values in attributes are automatically treated as event handlers
  - Improved type hints for input element `type` property while preserving string compatibility
  - Complete event type annotations for better IDE autocomplete

- **Content System**:
  - Enhanced `ktnull` implementation - returns empty string for toString methods to avoid DOM node creation overhead
  - Better handling of content arrays with mixed types
  - Improved append operations with native DOM methods

### Bug Fixes

- Fixed `attr.class` not being properly restored in some cases
- Fixed `attr.style` with object type causing invalid keys being set on `element.style`
- Fixed global runtime `kt` not found in router's `index.ts`
- Fixed tests and build configuration errors and warnings
- Fixed type resolution issues in `tests/` folders - non-repo types were incorrectly typed as `any`
- Fixed route matcher import issues after shared module refactoring
- Fixed `normalizeParams` regex errors
- Fixed `ktnull` element filtering in append operations

### Development Experience

- **Testing Infrastructure**:
  - Proper monorepo test configuration with Vitest
  - Each package has its own `vitest.config.ts`
  - Global test files now properly included in root `tsconfig.json`
  - `@ktjs/runtime` alias resolution in test environment
  - All existing tests passing

- **Linting & Code Quality**:
  - Stricter ESLint rules with upgraded oxlint
  - Consistent code formatting (if statements now require braces)
  - Removed unnecessary `any` types in favor of proper type annotations
  - Added type imports with `import type` for better tree-shaking
  - Converted to arrow functions for consistency

- **Developer Tools**:
  - Added example HTML file for quick testing
  - Better error messages with `$throw` utility
  - Cached commonly used native methods for performance
  - Symbol-based private properties to avoid naming conflicts

### Performance Optimizations

- Cached `document` and native DOM methods
- Reduced repeated branch evaluations
- Optimized route matching with pre-flattened routes
- Used `push` + `reverse` instead of `unshift` for better performance
- Minimized object creation in hot paths
- Terser minification enabled for smaller bundles

### Breaking Changes

- Removed `shared` package, merged into `@ktjs/core`
- Package naming changed from `@ktjs` to individual package names under `@ktjs/` scope
- `throws` renamed to `$throw` for consistency with other shared utilities
- `substituteParams` renamed to `emplaceParams`
- `silentLevel` renamed to `GuardLevel` with new enum-based approach
- Router configuration field changes for better clarity

## 0.4.x 2025-11-04

- Fix the style attribute handling may cause setting invalid keys on element.style when the given style is an object instead of a string
- Added `ktnull`: a special value representing "null", used for filtering. Since native DOM APIs do not ignore `undefined` or `null`, this feature is provided to maintain native behavior while enhancing usability.

## 0.3.x 2025-11-04

- Fix README.md examples for global usage (kt instead of KT)
- Fix `Promise` would be not valid for caching `Promise.resolve` and `Promise.reject` in older environments

### New Features

- Added IIFE build output format for direct browser usage via `<script>` tag
- Router now automatically switches to synchronous mode in environments without Promise support
- Separate minimal Promise polyfill output for environments that need it

### Compatibility Improvements

- Complete ES5 compatibility: code is now transpiled to ES5 using TypeScript target configuration
- Removed async/await syntax, replaced with Promise chains for better compatibility
- Removed destructuring assignments for IE compatibility
- Removed arrow functions, forEach, and startsWith to support older browsers
- Added polyfills for `append` and `navigate` methods
- Router refactored to work in IE with minimal polyfills (Promise only)

### Optimizations

- Applied const enum for Promise states to reduce bundle size
- Enabled Terser minification for smaller output
- Removed Babel dependency (transpilation now handled by TypeScript)

## 0.2.x 2025-10-28 22:08:19

- new feature: Router
- fix the problem that Router is not exported
- add key features to the document

## 0.1.x 2025-10-28 21:50:18

- Fix the problem of still using `ktext`
- Minify the runtime
- **Cancel all enhancement and return to the primary HTMLElement**

## 0.0.8 2025-09-20 14:59

### Feature changes

- Merged lib imports and removed usages of NotProvided and other any types; removed memoize and merge temporarily.
- Merged lib exports and replaced bind with wrapper for better repeated-call performance.
- Use of private properties to store text nodes and other internal state; refined descriptors and removed isKT variable.
- Improved typing for h function aliases and moved type declarations to a dedicated file.
- Split alias files and renamed shortcuts; replaced bind-args approach with direct dependency installation.

### Optimizations

- Cleared the changelog and bumped the version to 0.0.8; added a changelog link.

### Fixes

- None

## 0.0.7 2025-09-19 21:54

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
- Resolved mount-return issue that caused an exception during mounting.

## 0.0.5 2025-09-19 20:13

### Feature changes

- Implemented core APIs: useScope, css, h, and createApp; cssList will self-clear.
  - But suddenly remove css related code. Only h and createApp remained.
- Implemented ktext attribute which ensures a dedicated text node attached to h-created elements.
- Added multiple tests for the h function.

### Optimizations

- Introduced a jsdom test environment and improved iteration safety (avoided forEach in non-standard arrays); added css test suite.

### Fixes

- Fixed event registration test issue caused by a global addeventlistener name collision by refining cached native function names.

## 0.0.4 2025-09-19 19:09

### Feature changes

- Added @emotion/css for testing and rebuilt the example using Vite; prepared a trial publish for 0.0.4.
- Decided to rely on @emotion/css for css processing; method now accepts arbitrary strings.

### Optimizations

- For single-class CSS blocks, generate a cssId and insert a dedicated style element into the page.

### Fixes

- None
