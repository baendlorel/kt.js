// @ts-check
import pkg from './package.json' with { type: 'json' };
import path from 'node:path';

// plugins
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import dts from 'rollup-plugin-dts';
import funcMacro from 'rollup-plugin-func-macro';
import constEnum from 'rollup-plugin-const-enum';

// custom plugins
import { replaceOpts } from './.scripts/replace.mjs';

// # common options

/**
 * build config
 */
const tsconfig = './tsconfig.build.json';
const tsconfigLegacy = './tsconfig.build.legacy.json';

/**
 * @type {import('@rollup/plugin-alias').RollupAliasOptions}
 */
const aliasOpts = {
  entries: [{ find: /^@\//, replacement: path.resolve(import.meta.dirname, 'src') + '/' }],
};

// # main options

/**
 * @type {import('rollup').RollupOptions[]}
 */
const options = [
  // Modern builds (ESM + IIFE)
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.mjs',
        format: 'esm',
        sourcemap: false,
      },
      {
        file: 'dist/index.iife.js',
        format: 'iife',
        name: 'kt',
        sourcemap: false,
      },
    ],

    plugins: [
      alias(aliasOpts),
      replace(replaceOpts),
      resolve(),
      typescript({ tsconfig }),
      funcMacro(),
      constEnum(),
      terser({
        format: {
          comments: false,
        },
        compress: {
          reduce_vars: true,
          drop_console: true,
          dead_code: true,
          evaluate: true,
        },
        mangle: {
          properties: {
            regex: /^_/,
          },
        },
      }),
    ].filter(Boolean),
    external: [],
  },
  // Legacy IIFE build (ES5 for old browsers)
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.legacy.js',
        format: 'iife',
        name: 'kt',
        sourcemap: false,
      },
    ],

    plugins: [
      alias(aliasOpts),
      replace(replaceOpts),
      resolve(),
      typescript({ tsconfig: tsconfigLegacy }),
      funcMacro(),
      constEnum(),
      terser({
        format: {
          comments: false,
        },
        compress: {
          reduce_vars: true,
          drop_console: true,
          dead_code: true,
          evaluate: true,
        },
        mangle: {
          properties: {
            regex: /^_/,
          },
        },
      }),
    ].filter(Boolean),
    external: [],
  },
];

/**
 * @type {import('rollup').RollupOptions}
 */
const declaration = {
  input: 'src/index.ts',
  output: [{ file: 'dist/index.d.ts', format: 'es' }],
  plugins: [alias(aliasOpts), replace(replaceOpts), dts({ tsconfig })],
};

/**
 * @type {'npm'|'rollup-plugin'|'vscode-extension'|'server'|'web'|'app'}
 */
switch (pkg.purpose) {
  case 'npm':
  case 'rollup-plugin':
    options.push(declaration);
    break;
}

export default options;
