# @ktjs/ts-plugin

TypeScript language service plugin for KT.js `k-for` scope variables in TSX.

This plugin is intentionally minimal:

- It only affects editor diagnostics (tsserver).
- It suppresses `Cannot find name 'item'/'index'` (TS2304) inside JSX elements that have `k-for`.
- It does **not** transform runtime code.

## Install / workspace usage

In this monorepo it is already a workspace package. Build once:

```bash
pnpm --filter @ktjs/ts-plugin build
```

## tsconfig example

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

Optional plugin config:

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
        "indexName": "index"
      }
    ]
  }
}
```

## Example

```tsx
const list = [{ name: 'A' }];

const view = (
  <div k-for={list} k-for-item="user" k-for-index="i">
    {i} - {user.name}
  </div>
);
```

Without this plugin, `user` / `i` are usually reported as undefined in TSX.
