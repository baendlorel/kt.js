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
```bash
pnpm build                    # Build all packages
pnpm build:core              # Build only @ktjs/core
pnpm build:router            # Build only @ktjs/router
pnpm build:mui               # Build only @ktjs/mui
pnpm build:shortcuts         # Build only @ktjs/shortcuts
pnpm build:shared            # Build only @ktjs/shared
pnpm build:plugin            # Build only @ktjs/babel-plugin-ktjsx
pnpm build:kt.js             # Build only main kt.js package
pnpm build:example           # Build example application
```

### Development
```bash
pnpm exp                     # Run example development server (pnpm --filter @ktjs/example dev)
pnpm dev                     # Not defined at root; each package has its own `dev` script
```

### Testing
```bash
pnpm test                    # Run all tests with Vitest
pnpm cover                   # Run tests with coverage report
```

### Code Quality
```bash
pnpm check                   # Type check without emitting (tsc --noEmit)
pnpm lint                    # Lint with Oxlint (config in .oxlintrc.json)
```

### Maintenance
```bash
pnpm clean                   # Remove build artifacts and caches
pnpm lines                   # Count lines of code across packages
pnpm sync                    # Sync versions across packages (tsx .scripts/sync-version.ts)
```

### Publishing
```bash
pnpm pub                    # Publish all packages (pnpm -r publish --access public)
pnpm pubjsx                 # Build and publish core + kt.js packages
pnpm pub:router             # Build and publish router package
pnpm pub:mui                # Build and publish MUI package
pnpm pub:plugin             # Build and publish babel plugin
pnpm pub:shared             # Build and publish shared package
```

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

### JSX Configuration
For projects using KT.js with JSX/TSX:
```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "kt.js"  // or "@ktjs/core" for direct usage
  }
}
```

### Important Files
- `configs/tsconfig.build.json` - Build-specific TypeScript config
- `configs/tsconfig.build.legacy.json` - Legacy build config
- `.scripts/vitest.base.config.ts` - Base Vitest resolver configuration
- Each package's `rollup.config.mjs` - Individual Rollup configuration

## Framework Philosophy

KT.js follows one rule: **full control of DOM and avoid unnecessary repainting**. The framework aims to minimize abstraction overhead while providing type-safe, performant DOM manipulation. APIs are designed to be minimal and direct, favoring explicit updates over implicit reactivity.

Note: The framework is still under development. APIs, type declarations, and other parts may change frequently.