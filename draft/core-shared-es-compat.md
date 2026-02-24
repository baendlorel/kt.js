# core/shared ES 兼容性检测报告

日期：2026-02-24

## 检测范围与方法

1. 检查构建配置是否做了语法降级。
2. 重新构建 `@ktjs/shared`、`@ktjs/core` 后，直接分析 `dist/index.mjs` 的实际语法与运行时 API 使用。
3. 额外用 TypeScript 以 `--target ES2015` 做可编译性验证，判断“语法层面是否可降级到 ES6”。

执行过的关键命令：

```bash
pnpm build shared
pnpm build core
pnpm tsc -p packages/shared/tsconfig.build.json --target ES2015 --noEmit --pretty false
pnpm tsc -p packages/core/tsconfig.build.json --target ES2015 --noEmit --pretty false
```

## 构建配置结论

- 根配置 `tsconfig.json` 为 `target: "ESNext"`（`tsconfig.json:3`）。
- `packages/core/tsconfig.build.json` 与 `packages/shared/tsconfig.build.json` 未覆盖 `target`（分别见 `packages/core/tsconfig.build.json:1`、`packages/shared/tsconfig.build.json:1`）。
- Rollup 的 TypeScript 插件也未覆盖 `target`（`configs/rollup.config.base.ts:38`）。

结论：当前发布产物默认保留较新的 JS 语法，不会自动降到 ES6。

## 最低 ES 语法支持判断

### `@ktjs/shared`

关键证据（来自 `packages/shared/dist/index.mjs`）：

- 可选链：`o?.then`、`x?.nodeType`（`packages/shared/dist/index.mjs:13`、`packages/shared/dist/index.mjs:23`）=> ES2020
- `async/await`（`packages/shared/dist/index.mjs:92`）=> ES2017
- `Array.prototype.flat`（`packages/shared/dist/index.mjs:105`）=> ES2019

结论：`shared` 当前产物最低语法要求为 **ES2020**。

### `@ktjs/core`

关键证据（来自 `packages/core/dist/index.mjs`）：

- 类字段（`isKT = true`）在 class 体内直接声明（`packages/core/dist/index.mjs:204`、`packages/core/dist/index.mjs:374`）=> ES2022
- 可选链与空值合并（`obj?.isKT`、`props ?? {}` 等，见 `packages/core/dist/index.mjs:3`、`packages/core/dist/index.mjs:815`）=> ES2020
- `globalThis`（`packages/core/dist/index.mjs:631`）=> ES2020

结论：`core` 当前产物最低语法要求为 **ES2022**。

### 整体（core + shared）

`core` 依赖 `shared`，按“取最高要求”原则，整体最低语法支持为 **ES2022**。

## 能否“完美降级”到 ES6

### 1) 语法层面

- 可降级：`tsc --target ES2015` 对两包均可通过（无编译错误），说明语法可被 downlevel。

### 2) 运行时层面

即使语法降级到 ES6，仍存在大量高于 ES6 的运行时能力依赖（需 polyfill / shim）：

- `shared`：`Object.entries`、`Array.prototype.flat`、`Node.remove`、`Node.replaceWith`（见 `packages/shared/dist/index.mjs:11`、`packages/shared/dist/index.mjs:105`、`packages/shared/dist/index.mjs:31`、`packages/shared/dist/index.mjs:33`）。
- `core`：`globalThis`、`Array.prototype.includes`、`MutationObserver`、`Node.remove/replaceWith/append`（见 `packages/core/src/jsx/fragment.ts:12`、`packages/core/src/jsx/for.ts:127`、`packages/core/src/jsx/fragment.ts:136`、`packages/core/src/h/content.ts:19`）。

## 最终结论

- 当前发布产物最低支持：
  - `@ktjs/shared`: **ES2020**
  - `@ktjs/core`: **ES2022**
  - 整体：**ES2022**
- **不能“完美”降级到 ES6**（如果“完美”定义为：不加 polyfill、运行时行为完全一致）。
- 可以“工程化降级”到 ES6：调整构建 target + 补齐 polyfill/shim，但这不属于“零成本、零差异”的完美降级。
