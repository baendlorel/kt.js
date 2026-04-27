// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import { replaceOpts } from '../../configs/rollup.config.base.js';
import replace from '@rollup/plugin-replace';

const pkgDir = import.meta.dirname;
const srcEntry = path.join(pkgDir, 'src', 'index.ts');
const distDir = path.join(pkgDir, 'dist');

export default async () => {
  fs.rmSync(distDir, { recursive: true, force: true });
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
        replace(replaceOpts(pkgDir)),
        typescript({
          tsconfig: path.join(pkgDir, 'tsconfig.build.json'),
          declaration: false,
          declarationMap: false,
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
