<img src="https://raw.githubusercontent.com/baendlorel/kt.js/dev/.assets/ktjs-0.0.1.svg" alt="KT.js Logo" width="150"/>

[![npm version](https://img.shields.io/npm/v/kt.js.svg)](https://www.npmjs.com/package/kt.js) [![license](https://img.shields.io/github/license/baendlorel/kt.js.svg)](https://github.com/baendlorel/kt.js/blob/main/LICENSE)

[CHANGLOG✨](CHANGELOG.md)

> Note: This framework is still under development. APIs, type declarations, and other parts **may change frequently**. If you use it, please watch for updates in the near future. Feel free to mail me if you have any questions!

KT.js is a tiny DOM utility focused on direct DOM manipulation. It favors not forcing re-renders and aims to keep DOM updates to the absolute minimum for maximum performance.

For more awesome packages, check out [my homepage💛](https://baendlorel.github.io/?repoType=npm)

## Architecture

KT.js is now a **monorepo** containing multiple packages:

- **[kt.js](./packages/kt.js)**: Main entry package that re-exports all functionality
- **[@ktjs/core](./packages/core)**: Core DOM manipulation utilities and the `h` function. SX/TSX support with full TypeScript integration (included in kt.js package)
- **[@ktjs/router](./packages/router)**: Client-side routing with navigation guards (not included in kt.js package)
- **[@ktjs/mui](./packages/mui)**: Material UI components built on top of KT.js (not included in kt.js package)

You can install the full package or individual packages as needed:

```bash
pnpm add kt.js

# Or install individual packages
pnpm add @ktjs/router     # Client-side router (requires @ktjs/core)
pnpm add @ktjs/mui        # Material UI components (requires @ktjs/core)
```

## Philosophy

As a web framework, repeatedly creating a large number of variables and objects is unacceptable. So I created KT.js.

KT.js follows one rule: **full control of DOM and avoid unnecessary repainting**.
