// @ts-check
import path from 'node:path';

// plugins
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import dts from 'rollup-plugin-dts';

import { replaceOpts } from './replace.mjs';

/**
 * Create rollup config for a package
 * @param {Object} options
 * @param {string} options.packageName - Package name
 * @param {string} options.packageDir - Package directory relative to workspace root
 * @param {string} [options.entry='index.ts'] - Entry file name
 * @param {Record<string, string>} [options.external] - External dependencies
 * @returns {import('rollup').RollupOptions[]}
 */
export function createPackageConfig({ packageDir, entry = 'index.ts', external = {} }) {
  const srcDir = path.resolve(import.meta.dirname, '..', packageDir, 'src');
  const distDir = path.resolve(import.meta.dirname, '..', packageDir, 'dist');

  /**
   * @type {import('@rollup/plugin-alias').RollupAliasOptions}
   */
  const aliasOpts = {
    entries: [
      { find: /^@\//, replacement: srcDir + '/' },
      { find: '@ktjs/core', replacement: path.resolve(import.meta.dirname, '..', 'packages/core/src/index.ts') },
      { find: '@ktjs/router', replacement: path.resolve(import.meta.dirname, '..', 'packages/router/src/main.ts') },
      {
        find: '@ktjs/shortcuts',
        replacement: path.resolve(import.meta.dirname, '..', 'packages/shortcuts/src/index.ts'),
      },
    ],
  };

  const externals = Object.keys(external);

  return [
    // ESM and CJS builds
    {
      input: path.resolve(srcDir, entry),
      output: [
        {
          file: path.resolve(distDir, 'index.mjs'),
          format: 'esm',
          sourcemap: false,
        },
      ],
      plugins: [
        alias(aliasOpts),
        replace(replaceOpts),
        resolve(),
        typescript({
          tsconfig: path.resolve(import.meta.dirname, '..', packageDir, 'tsconfig.json'),
          declaration: false,
        }),
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
        }),
      ],
      external: externals,
    },
    // Type declarations
    {
      input: path.resolve(srcDir, entry),
      output: [{ file: path.resolve(distDir, 'index.d.ts'), format: 'es' }],
      plugins: [
        alias(aliasOpts),
        replace(replaceOpts),
        dts({
          tsconfig: path.resolve(import.meta.dirname, '..', packageDir, 'tsconfig.json'),
        }),
      ],
      external: externals,
    },
  ];
}
