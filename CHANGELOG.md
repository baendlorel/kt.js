# Change Log 🕒

## 0.1.0 2025-10-20 00:25

- Minify the runtime

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
