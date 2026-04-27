import './path-join.js';
import path from 'node:path';
import fs from 'node:fs';
import { defineConfig } from 'vite';
import terser from '@rollup/plugin-terser';
import dts from 'vite-plugin-dts';
import { stripHiddenDeclarations } from 'rollup-plugin-hide-private';

import { getTSBuildConfig, Root } from './utils.js';
import { replace } from './replace.js';

const needSourceMap = (libPath: string) => !libPath.includes('mui-icon');

export default defineConfig(() => {
  const lib = process.env.CURRENT_PKG_PATH;
  if (!lib) {
    throw new Error('CURRENT_PKG_PATH environment variable is not set.');
  }

  console.log('Building:', lib);

  const tsBuildConfig = getTSBuildConfig(lib);
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
      replace(lib), // only works for js, not for dts.
      dts({
        tsconfigPath: tsBuildConfig.build ?? tsBuildConfig.local,
        compilerOptions: {
          // ! Shockingly this is inherited as a relative path
          // types: ['node', '../types/macros'],
          // Or you can write like this, which is more robust
          types: ['node', Root.join('packages', 'types', 'macros')],
        },
        beforeWriteFile: (filePath: string, content: string) => {
          return { content: stripHiddenDeclarations(content, { allNames: [/^_/] }).code, filePath };
        },
        copyDtsFiles: true,
        insertTypesEntry: true,
        rollupTypes: true,
      }),
      terser({
        compress: {
          dead_code: true,
        },
        mangle: void {
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
