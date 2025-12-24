// @ts-check
import { createPackageConfig } from '../../.scripts/rollup-factory.mjs';
import path from 'node:path';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import { replaceOpts } from '../../.scripts/replace.mjs';

// Use the standard factory to generate base configs for index.ts
const baseConfigs = createPackageConfig({
  packageName: '@ktjs/jsx',
  packageDir: 'packages/jsx',
  external: ['@ktjs/core'],
  iifeName: '', // No IIFE needed for jsx package
  withLegacy: false,
  withCjs: true,
});

// Custom config for jsx-runtime.ts
const jsxRuntimeConfigs = (() => {
  const packageDir = path.resolve(import.meta.dirname);
  const src = path.resolve(packageDir, 'src');
  const dist = path.resolve(packageDir, 'dist');
  const tsconfig = path.resolve(packageDir, 'tsconfig.build.json');

  return [
    // JSX runtime bundle
    {
      input: path.resolve(src, 'jsx-runtime.ts'),
      output: [
        {
          file: path.resolve(dist, 'jsx-runtime.mjs'),
          format: 'esm',
          sourcemap: false,
        },
        {
          file: path.resolve(dist, 'jsx-runtime.cjs'),
          format: 'cjs',
          sourcemap: false,
        },
      ],
      plugins: [
        alias({
          entries: [{ find: /^@\//, replacement: path.resolve(packageDir, '..', 'core', 'src') + '/' }],
        }),
        replace(replaceOpts),
        resolve(),
        typescript({ tsconfig, outputToFilesystem: true }),
        terser({
          format: { comments: false },
          compress: {
            reduce_vars: true,
            drop_console: true,
            dead_code: true,
            evaluate: true,
          },
          mangle: {
            properties: { regex: /^_/ },
          },
        }),
      ],
      external: ['@ktjs/core'],
    },
    // JSX runtime type definitions
    {
      input: path.resolve(src, 'jsx-runtime.ts'),
      output: {
        file: path.resolve(dist, 'jsx-runtime.d.ts'),
        format: 'es',
      },
      plugins: [
        dts({
          tsconfig,
          respectExternal: true,
        }),
      ],
      external: ['@ktjs/core'],
    },
  ];
})();

// Export: base configs + jsx-runtime configs
export default [...baseConfigs, ...jsxRuntimeConfigs];
