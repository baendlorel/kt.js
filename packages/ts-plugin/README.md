# @ktjs/ts-plugin

TypeScript language service plugin for KT.js `k-for` scope variables in TSX.

## What it does

- Editor-only enhancement (tsserver), no runtime transform.
- Suppresses TS2304 (`Cannot find name ...`) for aliases declared by `k-for`.
- Infers alias types from iterable/indexed sources (for example `k-for="item in users"` makes `item` resolve to `users[number]`).
- Provides hover type info and member completions for inferred aliases.
- Supports hover type info inside `k-for` expression strings (`item in users`) for alias/source identifiers.
- Adds `k-for` inline semantic highlighting in string expressions (for example alias/keyword/source in `k-for="item in list"`).
- Highlights directive attribute names (`k-for`, `k-if`, `k-else`, `k-else-if`, `k-model`, `k-html`) with semantic token colors.
- Supports Vue-like syntax:
  - `k-for="item in list"`
  - `k-for="(item, i) in list"`

## Install

```bash
pnpm add -D @ktjs/ts-plugin typescript
```

Then open a `.tsx` or `.ts` file in your editor, press `Ctrl+Shift+P` and select "TypeScript: Select TypeScript Version", then choose "Use workspace version" to make sure your editor uses the version of TypeScript where the plugin is installed.

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
        "ifAttr": "k-if",
        "elseAttr": "k-else",
        "elseIfAttr": "k-else-if",
        "modelAttr": "k-model",
        "htmlAttr": "k-html",
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
