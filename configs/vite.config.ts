import path from 'node:path';
import fs from 'node:fs';
import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import replace, { type RollupReplaceOptions } from '@rollup/plugin-replace';
import dts from 'vite-plugin-dts';
import hidePrivate from 'rollup-plugin-hide-private';

import { getTSConfig, loadJson } from './utils.js';
import { loadTemplate } from './load-template.js';

export const createDtsConfig = (libPath: string) => {
  return {
    input: path.join(libPath, 'src', 'index.ts'),
    output: {
      entryFileNames: 'index.d.ts',
      dir: path.join(libPath, 'dist'),
    },
    external: [/^@ktjs/],
    plugins: [
      replace(replaceOpts(libPath)),
      hidePrivate({
        allNames: [/^_/],
      }),
      dts({
        tsconfigPath: getTSConfig(libPath),
        compilerOptions: {
          composite: false,
          incremental: false,
          stripInternal: true,
        },
        rollupTypes: true,
      }),
    ],
  };
};

export default defineConfig(() => {
  const libPath = process.env.CURRENT_PKG_PATH;
  if (!libPath) {
    throw new Error('CURRENT_PKG_PATH environment variable is not set.');
  }

  console.log('Building:', libPath);

  const tsconfig = getTSConfig(libPath);
  fs.rmSync(path.join(libPath, 'dist'), { recursive: true, force: true });

  return {
    build: {
      lib: {
        entry: path.join(libPath, 'src', 'index.ts'),
        name: 'index',
        fileName: 'index',
        formats: ['es' as const],
      },
      outDir: path.join(libPath, 'dist'),
      sourcemap: !libPath.includes('mui-icon'),
      rollupOptions: {
        external: [/^@ktjs\//, /^@babel\//],
        output: {
          entryFileNames: 'index.mjs',
        },
      },
    },
    plugins: [
      replace(replaceOpts(libPath)),
      typescript({
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
    ],
  };
});

// # utils

// # replace options

const globalDefines = {
  'process.env.BASE_URL': JSON.stringify('/'),
  'process.env.IS_DEV': JSON.stringify('false'),
};

export function replaceOpts(pkg?: string): RollupReplaceOptions {
  if (!pkg) {
    return { values: globalDefines, preventAssignment: true };
  }

  const json = loadJson(pkg.join('package.json'));

  const __KEBAB_NAME__ = json.name.replace('rollup-plugin-', '');
  const __VERSION__ = json.version;
  const __NAME__ = __KEBAB_NAME__.replace(/(^|-)(\w)/g, (_0, _1, c) => c.toUpperCase());
  const __PKG_INFO__ = loadTemplate(json);

  return {
    preventAssignment: true,
    delimiters: ['', ''],
    values: {
      __IS_DEV__: 'false',
      __NAME__,
      __KEBAB_NAME__,
      __PKG_INFO__,
      __VERSION__,

      // global flags
      ...globalDefines,
      "$throw('": `throw new Error('[kt.js error] `,
      '$throw(`': `throw new Error(\`[kt.js error] `,
      '$throw("': `throw new Error("[kt.js error] `,
      '$warn(': `console.warn('[kt.js warn]',`,
      '$error(': `console.error('[kt.js error]',`,
      '$debug(': `console.debug('[kt.js debug]',`,
    },
  };
}
