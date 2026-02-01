// @ts-check
import path from 'node:path';
import { existsSync } from 'node:fs';

// plugins
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import dts from 'rollup-plugin-dts';

import { replaceOpts } from './replace.mjs';

const underRoot = (/** @type {string[]} */ ...args) => {
  return path.resolve(import.meta.dirname, '..', ...args);
};

const getTSConfigDir = (/** @type {string} */ packageDir) => {
  const a = underRoot(packageDir, 'tsconfig.json');
  const b = underRoot(packageDir, 'tsconfig.build.json');
  return existsSync(b) ? b : a;
};

/**
 * Create rollup config for a package
 * @param {Object} options
 * @param {string} options.packageName - Package name (for iife global name)
 * @param {string} options.packageDir - Package directory relative to workspace root
 * @param {string} [options.entry='index.ts'] - Entry file name
 * @param {string[]} [options.external] - External dependencies
 * @param {string} [options.iifeName=''] - Generate IIFE bundle
 * @param {boolean} [options.withLegacy=false] - Generate legacy version (ES5 IIFE only)
 * @param {boolean} [options.withCjs=false] - Generate CommonJS bundle
 * @returns {import('rollup').RollupOptions[]}
 */
export function createPackageConfig({
  packageDir,
  entry = 'index.ts',
  external = [],
  iifeName = '',
  withLegacy = false,
  withCjs = false,
}) {
  const withIIFE = Boolean(iifeName);
  const src = underRoot(packageDir, 'src');
  const dist = underRoot(packageDir, 'dist');

  const tsconfig = getTSConfigDir(packageDir);
  console.log('load tsconfig :', tsconfig, ' ');
  /**
   * @type {import('@rollup/plugin-alias').RollupAliasOptions}
   */
  const aliasOpts = {
    entries: [{ find: /^@\//, replacement: underRoot('packages/core', 'src') + '/' }],
  };

  /**
   * @type {import('@rollup/plugin-terser').Options}
   */
  const terserOpts = {
    format: {
      comments: false,
    },
    compress: {
      reduce_vars: true,
      drop_console: false,
      dead_code: true,
      evaluate: true,
    },
    mangle: {
      properties: {
        regex: /^_/,
      },
    },
  };

  // Create globals mapping for IIFE format
  /**
   * @type {Record<string, string>}
   */
  const globals = {
    '@ktjs/core': '__ktjs_core__',
    '@ktjs/router': '__ktjs_router__',
    '@ktjs/shortcuts': '__ktjs_shortcuts__',
  };

  const configs = [];

  // Modern builds (ESM + IIFE)
  /** @type {import('rollup').OutputOptions[]} */
  const outputs = [
    {
      file: path.resolve(dist, 'index.mjs'),
      format: 'esm',
      sourcemap: false,
    },
  ];

  if (withCjs) {
    outputs.push({
      file: path.resolve(dist, 'index.cjs'),
      format: 'cjs',
      sourcemap: false,
    });
  }

  if (withIIFE) {
    outputs.push({
      file: path.resolve(dist, 'index.iife.js'),
      format: 'iife',
      name: iifeName,
      globals,
      sourcemap: false,
    });
  }

  configs.push({
    input: path.resolve(src, entry),
    output: outputs,
    plugins: [
      alias(aliasOpts),
      replace(replaceOpts),
      resolve(),
      commonjs(),
      typescript({ tsconfig, outputToFilesystem: true }),
      void terser(terserOpts),
    ].filter(Boolean),
    external,
  });

  // Legacy IIFE build (ES5)
  if (withLegacy) {
    configs.push({
      input: path.resolve(src, entry),
      output: [
        {
          file: path.resolve(dist, 'index.legacy.js'),
          format: 'iife',
          name: iifeName,
          globals,
          sourcemap: false,
        },
      ],
      plugins: [
        alias(aliasOpts),
        replace(replaceOpts),
        resolve(),
        typescript({
          tsconfig,
          outputToFilesystem: true,
          compilerOptions: {
            target: 'es5',
          },
        }),
        void terser(terserOpts),
      ].filter(Boolean),
      external,
    });
  }

  // Type declarations
  configs.push({
    input: path.resolve(src, entry),
    output: [{ file: path.resolve(dist, 'index.d.ts'), format: 'es' }],
    plugins: [alias(aliasOpts), replace(replaceOpts), dts({ tsconfig })],
    external,
  });

  return /** @type {import('rollup').RollupOptions[]} */ (configs);
}
