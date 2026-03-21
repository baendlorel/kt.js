# @ktjs/kt-tsc

`kt-tsc` is a small CLI checker for KT.js projects.

Current scope:

- reads a `tsconfig.json`
- runs TypeScript diagnostics through the compiler API
- suppresses `k-for` alias false positives such as `Cannot find name 'item'`

It is intentionally simple:

- project mode only
- check only, no emit
- does not try to provide full template type inference

## Usage

```bash
pnpm exec tsx plugins/kt-tsc/src/index.ts -p packages/example/tsconfig.json
```

After building:

```bash
pnpm --filter @ktjs/kt-tsc build
pnpm exec kt-tsc -p packages/example/tsconfig.json
```
