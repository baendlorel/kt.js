# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

KT.js is a minimalist web framework focused on direct DOM manipulation with zero forced re-renders. It's a monorepo built with PNPM workspaces, TypeScript, Rollup, and Vitest. The framework emphasizes maximum performance by minimizing DOM updates and avoiding unnecessary re-renders.

## Monorepo Structure

- **Root**: Workspace configuration with shared dependencies and build scripts
- **Packages**: Each package lives in `packages/` and has its own `package.json`, `src/`, `tests/`, and `dist/`
- **Shared configs**: `configs/` contains shared TypeScript, Vitest, and build configurations
- **Path mappings**: Root `tsconfig.json` defines path aliases for all packages (e.g., `@ktjs/core`, `@ktjs/router`)

Key packages:

- `@ktjs/core` - Core DOM utilities, JSX runtime, reactive system
- `kt.js` - Main entry package that re-exports `@ktjs/core`
- `@ktjs/router` - Client-side hash-based routing
- `@ktjs/mui` - Material UI components
- `@ktjs/shortcuts` - DOM shortcut utilities
- `@ktjs/shared` - Shared utilities and cached native methods
- `@ktjs/babel-plugin-ktjsx` - Babel plugin for SVG namespace handling
- `@ktjs/example` - Example application

## Common Commands

All commands are run from the root directory using PNPM workspace filters.

### Building

The `build` script accepts a package group parameter (e.g., `pnpm build core`). Available groups: `core`, `router`, `mui`, `shortcuts`, `shared`, `plugin`, `exp` (example), `all`.

```bash
pnpm build                    # Build core and kt.js (main packages)
pnpm build all               # Build all packages
pnpm build core              # Build only @ktjs/core
pnpm build router            # Build only @ktjs/router
pnpm build mui               # Build only @ktjs/mui
pnpm build shortcuts         # Build only @ktjs/shortcuts
pnpm build shared            # Build only @ktjs/shared
pnpm build plugin            # Build only @ktjs/babel-plugin-ktjsx
pnpm build exp               # Build example application
```

Alternatively, use `pnpm --filter <package> build` for finer control.

### Development

```bash
pnpm exp                     # Run example development server (pnpm --filter @ktjs/example dev)
pnpm dev                     # Not defined at root; each package has its own `dev` script
```

### Testing

The `test` script works similarly to `build`, accepting a package group parameter. Use `pnpm test` to run tests for core and kt.js, or `pnpm test all` for all packages.

```bash
pnpm test                    # Run tests for core and kt.js
pnpm test all               # Run all tests across all packages
pnpm test core              # Run tests for @ktjs/core only
pnpm test router            # Run tests for @ktjs/router only
# ... similarly for other package groups
pnpm cover                   # Run tests with coverage report
pnpm test2                  # Run vitest directly (alternative)
```

Alternatively, use `pnpm --filter <package> test` for finer control.

### Code Quality

```bash
pnpm check                   # Type check without emitting (tsc --noEmit)
pnpm lint                    # Lint with Oxlint (config in .oxlintrc.json)
```

### Maintenance

```bash
pnpm clean                   # Remove build artifacts and caches
pnpm lines                   # Count lines of code across packages
pnpm sync                    # Sync versions across packages (tsx scripts/sync-version.ts)
```

### Publishing

The `pub` script accepts a package group parameter (same groups as `build`). It updates versions, creates git tag, builds, and publishes.

```bash
pnpm pub                    # Publish core and kt.js (main packages)
pnpm pub all               # Publish all packages
pnpm pub core              # Publish @ktjs/core only
pnpm pub router            # Publish @ktjs/router only
pnpm pub mui               # Publish @ktjs/mui only
pnpm pub shortcuts         # Publish @ktjs/shortcuts only
pnpm pub shared            # Publish @ktjs/shared only
pnpm pub plugin            # Publish @ktjs/babel-plugin-ktjsx only
pnpm pub exp               # Publish example application (rare)
```

Note: Publishing requires proper npm authentication and git tag permissions.

## Architecture

### Core Principles

- **Direct DOM manipulation**: No virtual DOM; JSX compiles directly to `h()` function calls
- **Zero forced re-renders**: Updates only what changes, avoiding full component re-renders
- **Reactive programming**: `ref()`, `computed()`, `surfaceRef()` for state management
- **First-class JSX/TSX**: Full TypeScript integration with proper JSX runtime

### Key Architectural Components

1. **DOM Creation (`h()`)** - Located in `packages/core/src/h/`. Creates DOM elements with attributes, events, and children.

2. **JSX Runtime** - Located in `packages/core/src/jsx/`. Provides JSX transform support with:
   - `jsx-runtime.ts` - React-compatible JSX runtime
   - `async.js` - `KTAsync` component for async rendering
   - `for.js` - `KTFor` component for list rendering with `redraw()` method

3. **Reactive System** - Located in `packages/core/src/reactive/`:
   - `ref()` - Reactive reference with change listeners
   - `computed()` - Computed reactive values
   - `surfaceRef()` - Depth-1 reactive objects (each property wrapped in `ref()`)

4. **Directives** - Built into JSX transformation:
   - `k-if` - Conditional rendering
   - `k-model` - Two-way data binding for form elements (must bind to `ref`)

5. **Component System**:
   - Function components return JSX
   - `createRedrawable()` creates components that can be manually redrawn
   - `KTFor` elements support in-place `redraw()` for minimal DOM updates

6. **Routing** (`@ktjs/router`):
   - Hash-based client-side routing
   - Async navigation guards (`beforeEach`)
   - Programmatic navigation (`router.push()`)

### Build System

- **Bundler**: Rollup with TypeScript plugin
- **Output formats**: ESM (`.mjs`), IIFE (`.js`), TypeScript declarations (`.d.ts`)
- **Package exports**: Each package defines explicit exports in `package.json`

### Testing

- **Framework**: Vitest with configuration in `configs/vitest.config.ts`
- **Coverage**: `@vitest/coverage-v8` for coverage reports
- **Test locations**: Each package has its own `tests/` directory

## Development Notes

### TypeScript Configuration

- Root `tsconfig.json` configures path mappings for all packages
- JSX mode: `"react-jsx"` with `jsxImportSource: "kt.js"` (or `"@ktjs/core"`)
- Composite projects enabled for monorepo support

### Linting

- Oxlint with TypeScript and Prettier plugins
- Configuration in `.oxlintrc.json`
- Test files are ignored from linting

### Workspace Management

- PNPM workspace with `link-workspace-packages: true`
- Shared lockfile (`pnpm-lock.yaml`)
- Internal dependencies use `"workspace:*"` version specifier

### Package Interdependencies

- `@ktjs/core` depends on `@ktjs/shared`
- `@ktjs/router`, `@ktjs/mui`, `@ktjs/shortcuts` depend on `@ktjs/core`
- `kt.js` re-exports `@ktjs/core` functionality

### Scripts and Automation

- Root scripts (`build`, `test`, `pub`) delegate to package-specific scripts via `pnpm --filter`
- Package groups are defined in `scripts/common/consts.ts` (core, router, mui, shortcuts, shared, plugin, exp, all)
- The `scripts/index.ts` handles version synchronization, building, testing, and publishing
- Individual package build configurations are in each package's `rollup.config.mjs`

### JSX Configuration

For projects using KT.js with JSX/TSX:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "kt.js" // or "@ktjs/core" for direct usage
  }
}
```

### Important Files

- `configs/tsconfig.build.json` - Build-specific TypeScript config
- `configs/tsconfig.build.legacy.json` - Legacy build config
- `scripts/vitest.base.config.ts` - Base Vitest resolver configuration
- `scripts/index.ts` - Main build/test/publish automation script
- Each package's `rollup.config.mjs` - Individual Rollup configuration

## Framework Philosophy

KT.js follows one rule: **full control of DOM and avoid unnecessary repainting**. The framework aims to minimize abstraction overhead while providing type-safe, performant DOM manipulation. APIs are designed to be minimal and direct, favoring explicit updates over implicit reactivity.

Note: The framework is still under development. APIs, type declarations, and other parts may change frequently.
