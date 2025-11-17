// @ts-check
import path from 'node:path';
import { existsSync } from 'node:fs';

// plugins
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import dts from 'rollup-plugin-dts';

import { replaceOpts } from './replace.mjs';

const getTSConfigDir = (/** @type {string} */ packageDir) => {
  const a = path.resolve(import.meta.dirname, '..', packageDir, 'tsconfig.json');
  const b = path.resolve(import.meta.dirname, '..', packageDir, 'tsconfig.build.json');
  return existsSync(b) ? b : a;
};

/**
 * Create rollup config for a package
 * @param {Object} options
 * @param {string} options.packageName - Package name (for iife global name)
 * @param {string} options.packageDir - Package directory relative to workspace root
 * @param {string} [options.entry='index.ts'] - Entry file name
 * @param {Record<string, string>} [options.external] - External dependencies
 * @param {boolean} [options.withIIFE=true] - Generate IIFE bundle
 * @param {boolean} [options.withLegacy=false] - Generate legacy version (ES5 IIFE only)
 * @returns {import('rollup').RollupOptions[]}
 */
export function createPackageConfig({
  packageName,
  packageDir,
  entry = 'index.ts',
  external = {},
  withIIFE = true,
  withLegacy = false,
}) {
  const srcDir = path.resolve(import.meta.dirname, '..', packageDir, 'src');
  const distDir = path.resolve(import.meta.dirname, '..', packageDir, 'dist');

  const tsconfigDir = getTSConfigDir(packageDir);

  /**
   * @type {import('@rollup/plugin-alias').RollupAliasOptions}
   */
  const aliasOpts = {
    entries: [
      { find: /^@\//, replacement: srcDir + '/' },
      { find: '@ktjs/shared', replacement: path.resolve(import.meta.dirname, '..', 'packages/shared/index.ts') },
      { find: '@ktjs/core', replacement: path.resolve(import.meta.dirname, '..', 'packages/core/src/index.ts') },
      { find: '@ktjs/router', replacement: path.resolve(import.meta.dirname, '..', 'packages/router/src/main.ts') },
      {
        find: '@ktjs/shortcuts',
        replacement: path.resolve(import.meta.dirname, '..', 'packages/shortcuts/src/index.ts'),
      },
    ],
  };

  const externals = Object.keys(external);

  const globalName = packageName.replace(/^@ktjs\//, 'kt');

  const configs = [];

  // Modern builds (ESM + IIFE)
  /** @type {import('rollup').OutputOptions[]} */
  const outputs = [
    {
      file: path.resolve(distDir, 'index.mjs'),
      format: 'esm',
      sourcemap: false,
    },
  ];

  if (withIIFE) {
    outputs.push({
      file: path.resolve(distDir, 'index.iife.js'),
      format: 'iife',
      name: globalName,
      sourcemap: false,
    });
  }

  configs.push({
    input: path.resolve(srcDir, entry),
    output: outputs,
    plugins: [
      alias(aliasOpts),
      replace(replaceOpts),
      resolve(),
      typescript({
        tsconfig: tsconfigDir,
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
  });

  console.log('configs[0].plugins', configs[0].plugins);
  // Legacy IIFE build (ES5)
  if (withLegacy) {
    configs.push({
      input: path.resolve(srcDir, entry),
      output: [
        {
          file: path.resolve(distDir, 'index.legacy.js'),
          format: 'iife',
          name: globalName,
          sourcemap: false,
        },
      ],
      plugins: [
        alias(aliasOpts),
        replace(replaceOpts),
        resolve(),
        typescript({
          tsconfig: tsconfigDir,
          compilerOptions: {
            target: 'es5',
          },
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
          mangle: {
            properties: {
              regex: /^_/,
            },
          },
        }),
      ],
      external: externals,
    });
  }

  // Type declarations
  configs.push({
    input: path.resolve(srcDir, entry),
    output: [{ file: path.resolve(distDir, 'index.d.ts'), format: 'es' }],
    plugins: [
      alias({
        entries: [
          { find: /^@\//, replacement: srcDir + '/' },
          // Note: @ktjs/shared is internal and should be bundled, not aliased
          { find: '@ktjs/core', replacement: path.resolve(import.meta.dirname, '..', 'packages/core/src/index.ts') },
          { find: '@ktjs/router', replacement: path.resolve(import.meta.dirname, '..', 'packages/router/src/main.ts') },
          {
            find: '@ktjs/shortcuts',
            replacement: path.resolve(import.meta.dirname, '..', 'packages/shortcuts/src/index.ts'),
          },
          // Resolve shared package internal @/ alias for type declarations
          {
            find: /^@\/global\.js$/,
            replacement: path.resolve(import.meta.dirname, '..', 'packages/shared/types/global.d.ts'),
          },
        ],
      }),
      replace(replaceOpts),
      dts({
        tsconfig: tsconfigDir,
        compilerOptions: {
          composite: false,
        },
      }),
    ],
    external: externals,
  });

  return /** @type {import('rollup').RollupOptions[]} */ (configs);
}
