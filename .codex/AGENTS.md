# Repository Guidelines

## 项目结构与模块组织
- 本仓库是 `pnpm` monorepo，核心代码分为 `packages/`（运行时与组件库）和 `plugins/`（编译/工具插件）。
- `packages/core` 是框架核心；`packages/kt.js` 是对外主包；`packages/shared` 提供共享工具；`packages/router`、`packages/shortcuts`、`packages/mui` 提供扩展能力；`packages/example` 是演示与 GitHub Pages 构建入口。
- `plugins/babel`、`plugins/vite` 依赖 `plugins/transformer` 提供 JSX 指令转换；`plugins/ts` 是 TS 语言服务插件。
- `configs/rollup.config.base.ts` 是统一构建配置源；`configs/vitest.config.ts` 是统一测试配置（`jsdom` + alias）。
- `scripts/index.ts` 统一调度 `--build/--test/--publish`；`scripts/common/package-info.ts` 负责按目录名解析目标包。
- `packages/types/macros/index.d.ts` 提供全局类型入口；`draft/` 为草稿文档，不作为发布级事实来源。

## 构建、测试与开发命令
- 先安装依赖：`pnpm install`（CI 当前使用 Node 22，建议本地保持一致）。
- 本地启动示例站：`pnpm exp`（等价于 `pnpm --filter @ktjs/example dev`）。
- 构建单个目标：`pnpm build <target>`，例如 `pnpm build core`、`pnpm build example`、`pnpm build vite`。
- 运行单个目标测试：`pnpm test <target>`，例如 `pnpm test router`、`pnpm test babel`。
- 根级测试与检查：`pnpm test:root`、`pnpm lint`。
- 辅助脚本：`pnpm repolist`（刷新 `repo-list.json`）、`pnpm lines [pkg]`（统计行数）。
- 建议始终显式传入 `<target>`，避免依赖默认分组行为。

## 代码风格与命名规范
- 语言以 TypeScript/TSX 为主，默认 ESM（`type: module`）；`plugins/ts` 为 CommonJS 输出，修改时保持现状。
- Prettier 规则来自 `.prettierrc`：2 空格缩进、单引号、`trailingComma: all`、`printWidth: 120`。
- Lint 使用 `oxlint`（见 `.oxlintrc.json`）：禁止 `var`，优先 `const`，强制 `===`，类型导入优先 `import type`，对象类型优先 `interface`。
- 现有源码普遍使用带扩展名的 ESM 导入（如 `./foo.js`）；新增文件请保持一致。
- 命名约定：测试文件使用 `*.test.ts(x)`；`mui` 组件目录通常用 `PascalCase`，入口常为 `Index.tsx`，样式文件与组件同名。

## 测试指引
- 测试框架是 Vitest，默认环境为 `jsdom`，配置在 `configs/vitest.config.ts`。
- 测试主要位于 `packages/*/tests` 与 `plugins/*/tests`；命名可用 `.test/.spec/.e2e-spec`。
- 新功能至少补充同目录回归测试；修复 bug 时优先先写失败用例再修复。
- 涉及 JSX 指令编译行为时，至少覆盖 `plugins/transformer` 的调用链，并同步检查 `plugins/babel` 与 `plugins/vite` 对外行为测试。

## 提交与合并请求指南
- 提交信息遵循现有前缀风格：`feat:`、`fix:`、`chore:`、`doc:`、`release:`（描述可中文，要求简洁明确）。
- 每次提交聚焦单一改动主题；跨包改动请在描述中列出受影响包名（如 `core/router/vite`）。
- PR 需包含：变更动机、影响范围、执行过的命令（构建/测试/lint）、必要截图或日志（UI/构建行为变更时）。
- 发布相关改动请同步更新 `CHANGELOG.md`，并确认版本号与包间依赖一致。

## 发布与配置注意事项
- `pnpm pub <target>` 会触发构建、发布、打 tag 与自动提交，仅限具备发布权限的维护者执行。
- 构建产物与临时文件（如 `dist/`、`coverage/`、`node_modules/`、`*.tsbuildinfo`）不要手动编辑或提交（除非该包明确要求发布产物入库）。
- 若调整 alias、宏类型或包导出，请同步检查 `tsconfig.json`、`configs/rollup.config.base.ts`、对应包 `package.json` 的 `exports/types` 字段。
