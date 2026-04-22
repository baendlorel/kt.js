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

## Introduction

kt.js is a web framework with a tiny runtime that renders real DOM directly (no virtual DOM), uses explicit reactivity variables and gives you manual control over refs, bindings, and redraw timing.

KT.js focuses on one principle: keep direct control of the DOM and avoid unnecessary repainting.

## Coding Instructions

### Prerequisites

- **Node.js**: >= 22.0.0
- **TypeScript**: 6.0.2
- **Package Manager**: pnpm

### Setup

Install dependencies:
```bash
pnpm install
```

### Available Scripts

> `<name>` can be the dirname in packages/plugins folder. Can also be group name given in `scripts/common/package-info.ts`

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `pnpm exp`          | Start the example development server     |
| `pnpm build <name>` | Build all packages in the monorepo       |
| `pnpm check <name>` | Run type checking across all packages    |
| `pnpm test <name>`  | Run the test suite                       |
| `pnpm cover`        | Generate test coverage reports           |
| `pnpm lint`         | Run linter (oxlint) on the codebase      |
| `pnpm sync-readme`  | Synchronize README files across packages |
| `pnpm pub <name>`   | Publish packages to npm                  |
| `pnpm lines <name>` | Count lines of code                      |
| `pnpm repolist`     | Generate repository list                 |

## Variable Naming

- Private methods in a package should be named with prefix `_`. 
- Shared private methods should be named with prefix `$`.
- Specific classes should be named with prefix `KT`