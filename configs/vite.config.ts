import './path-join.js';
import path from 'node:path';
import fs from 'node:fs';
import ts from 'typescript';
import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'vite-plugin-dts';
import hidePrivate from 'rollup-plugin-hide-private';

import { getTSConfig } from './utils.js';
import { replace } from './replace.js';

export const declaration = defineConfig(() => {
  const lib = process.env.CURRENT_PKG_PATH;
  if (!lib) {
    throw new Error('CURRENT_PKG_PATH environment variable is not set.');
  }

  return {
    input: lib.join('src', 'index.ts'),
    output: {
      entryFileNames: 'index.d.ts',
      dir: lib.join('dist'),
    },
    build: {
      sourcemap: needSourceMap(lib),
    },
    external: [/^@ktjs/],
    plugins: [
      replace(lib),
      hidePrivate({
        allNames: [/^_/],
      }),
      dts({
        tsconfigPath: getTSConfig(lib),
        compilerOptions: {
          composite: false,
          incremental: false,
          stripInternal: true,
        },
        rollupTypes: true,
      }),
    ],
  };
});

const needSourceMap = (libPath: string) => !libPath.includes('mui-icon');

export const main = defineConfig(() => {
  const lib = process.env.CURRENT_PKG_PATH;
  if (!lib) {
    throw new Error('CURRENT_PKG_PATH environment variable is not set.');
  }

  console.log('Building:', lib);

  const tsconfig = getTSConfig(lib);
  fs.rmSync(path.join(lib, 'dist'), { recursive: true, force: true });

  return {
    build: {
      lib: {
        entry: path.join(lib, 'src', 'index.ts'),
        name: 'index',
        fileName: 'index',
        formats: ['es' as const],
      },
      outDir: path.join(lib, 'dist'),
      sourcemap: needSourceMap(lib),
      rollupOptions: {
        external: [/^@ktjs\//, /^@babel\//],
        output: {
          entryFileNames: 'index.mjs',
        },
      },
    },
    plugins: [
      dts({
        tsconfigPath: getTSConfig(lib),
        compilerOptions: {
          target: ts.ScriptTarget.ESNext,
          module: ts.ModuleKind.NodeNext,
          moduleResolution: ts.ModuleResolutionKind.NodeNext,
          composite: false,
          incremental: false,
          stripInternal: true,
          types: ['node', '../types/macros'],
        },
        include: ['./src/**/*.ts', './src/**/*.tsx'],
        rollupTypes: true,
      }),
      replace(lib),
      void typescript({
        tsconfig,
        compilerOptions: {
          composite: false,
          incremental: false,
          stripInternal: true,
        },
      }),
      // terser: removes dead code
      terser({
        compress: {
          dead_code: true,
        },
        mangle: false,
        output: {
          beautify: true,
        },
      }),
      //  terser: mangles private members
      void terser({
        compress: {
          dead_code: true,
        },
        mangle: {
          toplevel: true,
          properties: {
            regex: /^_/,
          },
          keep_classnames: /^([^_].*)?$/,
          keep_fnames: /^([^_].*)?$/,
        },
        output: {
          beautify: true,
        },
      }),
    ].filter((t) => t !== undefined),
  };
});
