import path from 'node:path';
import { existsSync } from 'node:fs';

import { rimraf } from 'rimraf';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';
import dts from 'rollup-plugin-dts';
import { defineGlobals } from './replace-options.js';

const getTSConfig = (libPath) => {
  const tsconfigBuildPath = path.join(libPath, 'tsconfig.build.json');
  const tsconfigPath = path.join(libPath, 'tsconfig.json');
  return existsSync(tsconfigBuildPath) ? tsconfigBuildPath : tsconfigPath;
};

/**
 * Basic Rollup config for KT.js packages
 * @type {(commandLineArgs:Record<string,string[]>) => import('rollup').RollupOptions[]}
 */
export default async (commandLineArgs) => {
  const libPath = process.env.CURRENT_PKG_PATH;
  if (!libPath) {
    console.error('Error: CURRENT_PKG_PATH environment variable is not set.');
    process.exit(1);
  }

  const tsconfig = getTSConfig(libPath);
  await rimraf(path.join(libPath, 'dist'));
  return [
    {
      input: path.join(libPath, 'src', 'index.ts'),
      output: [
        {
          file: path.join(libPath, 'dist', 'index.mjs'),
          format: 'esm', // ES module output
          sourcemap: true,
        },
      ],
      plugins: [
        resolve(),
        json(),
        commonjs(),
        replace({
          delimiters: ['', ''],
          preventAssignment: true,
          values: defineGlobals,
        }),
        typescript({
          tsconfig,
          compilerOptions: {
            composite: false,
            incremental: false,
            stripInternal: true,
          },
        }),
        void terser(),
      ].filter(Boolean),
      external: [/^@ktjs/],
    },
    {
      input: path.join(libPath, 'src', 'index.ts'),
      output: [{ file: path.join(libPath, 'dist', 'index.d.ts'), format: 'es' }],
      plugins: [
        dts({
          tsconfig,
          compilerOptions: {
            composite: false,
            incremental: false,
            stripInternal: true,
          },
        }),
      ],
      external: [/^@ktjs/],
    },
  ];
};
