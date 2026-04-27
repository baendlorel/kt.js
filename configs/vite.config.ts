//  Only this file needs it because others are not used independently.
import '../common/path-join.js';

import path from 'node:path';
import fs from 'node:fs';
import { defineConfig } from 'vite';
import terser from '@rollup/plugin-terser';
import dts from 'vite-plugin-dts';
import { stripHiddenDeclarations } from 'rollup-plugin-hide-private';

import { replaceForViteDts } from './vite-build/replace.js';

const needSourceMap = (libPath: string) => !libPath.includes('mui-icon');
const externals = () => [/^@ktjs\//, /^node:/, /^@babel\//];

export default defineConfig(() => {
  const lib = process.env.CURRENT_PKG_PATH;
  if (!lib) {
    throw new Error('CURRENT_PKG_PATH environment variable is not set.');
  }

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
        external: externals(),
        output: {
          entryFileNames: 'index.mjs',
        },
      },
    },
    plugins: [
      dts({
        // ! Must have tsconfig.json in the package root for building
        tsconfigPath: lib.tryJoin('tsconfig.build.json') ?? lib.join('tsconfig.json'),
        compilerOptions: {
          // ! Shockingly this is inherited as a relative path
          // ! Used to write "types: ['node', '../types/macros']"
          // types: ['node', dirs.packages.join('types', 'macros')],
          esModuleInterop: true,
          sourcemap: needSourceMap(lib),
        },

        // This is required to prevent @ktjs/xxx to be treated as outer dependencies.
        aliasesExclude: externals(),

        // In our case, `emittedFiles` will only contain one index.d.ts file.
        afterBuild: (emittedFiles) => {
          emittedFiles.forEach((content, filePath) => {
            content = stripHiddenDeclarations(content, { allNames: [/^_/] }).code;
            content = replaceForViteDts(lib, content);
            fs.writeFileSync(filePath, content, 'utf-8');
          });
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
    ],
  };
});
