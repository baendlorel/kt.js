# Change Log 🕒

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
