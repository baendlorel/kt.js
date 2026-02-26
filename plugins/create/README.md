# create-kt.js

`create-kt.js` 用于初始化 `KT.js + Vite + TypeScript` 项目。

## Usage

```bash
npm create kt.js@latest my-app
pnpm create kt.js my-app
```

## Options

- `--no-install`：仅生成文件，不自动安装依赖。
- `--pm <npm|pnpm|yarn|bun>`：指定安装依赖时使用的包管理器。

## Interactive Prompts

- `projectName`：写入 `package.json` 的 `name` 字段。
- `Use @ktjs/mui`：是否额外加入 `@ktjs/mui` 依赖。
- `Support IE11`：默认 `No`。若选择 `Yes`，会额外生成 `vite.ie11.config.ts`，并添加脚本 `build:ie11`。
