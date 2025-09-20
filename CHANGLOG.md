# CHANGELOG

## v0.0.7 — 2025-09-19T21:54:18+08:00 (provisional)

### Chore

- Updated README to document that the API may change frequently and is not yet stable.
- Removed unnecessary replace entries and cleaned duplicate newlines.

---

## v0.0.6 — 2025-09-19T21:41:57+08:00 (provisional)

### Chore

- Upgraded dts-merger and replaced the `/*__EXPORT_FLAG__*/` placeholder with real exports to enable proper type exports; synchronized script configuration with the ts-template.

---

## v0.0.5 — 2025-09-19T20:13:09+08:00

### Added

- kmount now applies only to KEnhanced elements; `createApp` uses appendChild for mounting.
- Improvements to alias/bind tooling: alias split to multiple files; bind-args tooling for creating `h` aliases.

### Fixed

- Fixed a mount-related error where mounting didn't return properly, causing downstream errors.
- Fixed `setAttr` when value was not a string.

### Optimized

- Merged lib exports and removed/avoided unnecessary `any` usages; removed memoize and merge where unused.
- Changed some bind implementations to wrapper-based calls after performance comparisons (wrapper proved faster in repeated calls).

---

## v0.0.4 (provisional) — 2025-09-19T19:02:54+08:00 → 2025-09-19T19:22:29+08:00

### Added

- Switched CSS approach to use `@emotion/css` for example/testing and added CSS helpers that automatically generate CSS IDs and style elements.
- Added CSS processing helpers using Adobe `@adobe/css-tools` for comment removal and minification.

### Fixed

- Adjusted `setAttr` handling to avoid non-string value issues.

### Optimized

- Prepared example and package.json changes for a publication trial (attempt for 0.0.4). Example and README rewritten to support the change.

---

## v0.0.1 — 2025-09-19T12:43:56+08:00 (initial release note)

### Added

- Initial public README update and first release note. Basic functions like `useScope`, `css`, `h`, and `createApp` were present.

---

Other notable changes (aggregated across branches, 2025-09-17 → 2025-09-20)

### Added

- ktext property: elements created by `h` always attach a TextNode which `ktext` updates.
- New `enhance` splitting and type-limited reuse; descriptors reused to reduce overhead.
- Several improvements to native DOM helpers and caching of methods on prototypes; introduced `yon` and `yoff` event helpers.
- Introduced Indexer utility, improved content array handling to allow strings and elements; added `useYuka` / scope helpers and CSS templating groundwork.

### Fixed

- Fixed event registration tests caused by global name collisions with `addEventListener`; refined cached native names to avoid conflicts.
- Tests and jsdom environment added to support DOM-based testing.

### Optimized / Chore

- Reworked type declarations: removed usage of `declare global` imports and replaced them with explicit `satisfies` patterns to ensure types bundle correctly.
- Renamed project identifiers from `yukajs` to `kt.js` across the codebase; simplified types and moved type files to `types/`.
- Reorganized plugins and project template updates; added example app and test infra. Numerous churn-style cleanups (deleted unused files, removed i18n, disabled CJS support).
