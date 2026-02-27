import path from 'node:path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import { terser } from '@rollup/plugin-terser';
import { rimraf } from 'rimraf';

const pkgDir = path.resolve(import.meta.dirname);
const srcEntry = path.join(pkgDir, 'src', 'index.ts');
// const cssEntry = path.join(pkgDir, 'src', 'main.css');
const distDir = path.join(pkgDir, 'dist');

export default async () => {
  await rimraf(distDir);
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
        postcss({
          extract: path.join(distDir, 'index.css'),
          minimize: false,
          sourceMap: true,
        }),
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
      plugins: [dts()],
      external: [/^@ktjs\//],
    },
  ];
};
