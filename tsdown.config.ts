import { defineConfig } from 'tsdown';
import { replace } from './configs/replace.js';
import path from 'node:path';
import { existsSync } from 'node:fs';

const isDev = process.env.NODE_ENV === 'development';
const lib = process.env.LIB_DIR!;
const tsconfig = existsSync(path.join(lib, 'tsconfig.build.json'))
  ? path.join(lib, 'tsconfig.json')
  : path.join(lib, 'tsconfig.build.json');

export default defineConfig([
  {
    entry: [{ index: 'src/index.ts' }],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    sourcemap: !lib.endsWith('mui-icon'),
    minify: !isDev,
    target: 'node24',
    treeshake: !isDev,
    tsconfig,
    plugins: [replace(lib)],
    deps: {
      neverBundle: [/^@ktjs\//, /^kt.js/, /^node:/, /^@babel\//],
    },
  },
]);
