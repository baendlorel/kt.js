# @ktjs/ts-plugin

TypeScript language service plugin for KT.js `k-for` scope variables in TSX.

## What it does

- Editor-only enhancement (tsserver), no runtime transform.
- Suppresses TS2304 (`Cannot find name ...`) for aliases declared by `k-for`.
- Supports Vue-like syntax:
  - `k-for="item in list"`
  - `k-for="(item, i) in list"`
  - `k-for="(value, key, i) in mapLike"`
- Keeps legacy fallback mode:
  - `k-for={list}` with `k-for-item` / `k-for-index` (or configured defaults).

## Install

```bash
pnpm add -D @ktjs/ts-plugin typescript
```

## Where to install it

Install it in the same project/workspace that owns the `tsconfig.json` where you enable the plugin.

- Single-package app: install in that app.
- Monorepo: install in each package that has its own TSX `tsconfig` and needs this behavior, or install at repo root if your package manager hoists and the editor can resolve it.

If VS Code still does not load the plugin, make sure it uses your workspace TypeScript version.

## tsconfig usage

```json
{
  "compilerOptions": {
    "plugins": [
      {
        "name": "@ktjs/ts-plugin"
      }
    ]
  }
}
```

## Optional config

```json
{
  "compilerOptions": {
    "plugins": [
      {
        "name": "@ktjs/ts-plugin",
        "forAttr": "k-for",
        "itemAttr": "k-for-item",
        "indexAttr": "k-for-index",
        "itemName": "item",
        "indexName": "index",
        "allowOfKeyword": true
      }
    ]
  }
}
```

## Example

```tsx
const users = [{ id: 1, name: 'A' }];

const view = (
  <li k-for="(user, i) in users" k-key="user.id">
    {i + 1}. {user.name}
  </li>
);
```

Without this plugin, `user` / `i` are often reported as undefined by the TypeScript language service in TSX.

## Official docs

This package itself currently has no standalone official website doc page. The canonical usage guide is this README.

For TypeScript plugin mechanics, see official docs:

- TSConfig `plugins`: https://www.typescriptlang.org/tsconfig/#plugins
- Writing a language service plugin: https://github.com/microsoft/TypeScript/wiki/Writing-a-Language-Service-Plugin
