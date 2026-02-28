import path from 'node:path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import { rimraf } from 'rimraf';

import { aggregateCss, ignoreCssImports } from './aggregate-css.mjs';

const pkgDir = path.resolve(import.meta.dirname);
const srcEntry = path.join(pkgDir, 'src', 'index.ts');
const distDir = path.join(pkgDir, 'dist');

export default async () => {
  await rimraf(distDir);
  await aggregateCss();
  return [
    {
      input: srcEntry,
      output: {
        file: path.join(distDir, 'index.mjs'),
        format: 'esm',
        sourcemap: true,
      },
      plugins: [
        resolve(),
        commonjs(),
        json(),
        typescript({
          tsconfig: path.join(pkgDir, 'tsconfig.build.json'),
          declaration: false,
          declarationMap: false,
          sourceMap: true,
        }),
        ignoreCssImports(),
        terser(),
      ],
      external: [/^@ktjs\//],
    },
    {
      input: srcEntry,
      output: {
        file: path.join(distDir, 'index.d.ts'),
        format: 'es',
      },
      plugins: [ignoreCssImports(), dts()],
      external: [/^@ktjs\//],
    },
  ];
};
