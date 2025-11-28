// @ts-check
import path from 'node:path';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import dts from 'rollup-plugin-dts';
import { replaceOpts } from '../../.scripts/replace.mjs';

const src = path.resolve(import.meta.dirname, 'src');
const dist = path.resolve(import.meta.dirname, 'dist');
const tsconfig = path.resolve(import.meta.dirname, 'tsconfig.build.json');

/**
 * @type {import('@rollup/plugin-alias').RollupAliasOptions}
 */
const aliasOpts = {
  entries: [
    { find: /^@\//, replacement: src + '/' },
    { find: '@ktjs/core', replacement: path.resolve(import.meta.dirname, '../core/src/index.ts') },
  ],
};

/**
 * @type {import('@rollup/plugin-terser').Options}
 */
const terserOpts = {
  format: { comments: false },
  compress: { reduce_vars: true, drop_console: true, dead_code: true, evaluate: true },
  mangle: { properties: { regex: /^_/ } },
};

const external = ['@ktjs/core'];

export default [
  // Main index bundle (ESM + CJS)
  {
    input: path.resolve(src, 'index.ts'),
    output: [
      { file: path.resolve(dist, 'index.mjs'), format: 'esm', sourcemap: false },
      { file: path.resolve(dist, 'index.cjs'), format: 'cjs', sourcemap: false },
    ],
    plugins: [
      alias(aliasOpts),
      replace(replaceOpts),
      resolve(),
      typescript({ tsconfig, outputToFilesystem: true }),
      terser(terserOpts),
    ],
    external,
  },

  // JSX runtime bundle (ESM + CJS)
  {
    input: path.resolve(src, 'jsx-runtime.ts'),
    output: [
      { file: path.resolve(dist, 'jsx-runtime.mjs'), format: 'esm', sourcemap: false },
      { file: path.resolve(dist, 'jsx-runtime.cjs'), format: 'cjs', sourcemap: false },
    ],
    plugins: [
      alias(aliasOpts),
      replace(replaceOpts),
      resolve(),
      typescript({ tsconfig, outputToFilesystem: true }),
      terser(terserOpts),
    ],
    external,
  },

  // Type declarations for index
  {
    input: path.resolve(src, 'index.ts'),
    output: [{ file: path.resolve(dist, 'index.d.ts'), format: 'es' }],
    plugins: [alias(aliasOpts), replace(replaceOpts), dts({ tsconfig })],
    external,
  },

  // Type declarations for jsx-runtime
  {
    input: path.resolve(src, 'jsx-runtime.ts'),
    output: [{ file: path.resolve(dist, 'jsx-runtime.d.ts'), format: 'es' }],
    plugins: [alias(aliasOpts), replace(replaceOpts), dts({ tsconfig })],
    external,
  },
];
