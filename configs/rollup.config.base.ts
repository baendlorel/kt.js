import path from 'node:path';
import fs, { rmSync } from 'node:fs';
import type { RollupOptions } from 'rollup';

import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import replace, { type RollupReplaceOptions } from '@rollup/plugin-replace';
import dts from 'rollup-plugin-dts';
import hidePrivate from 'rollup-plugin-hide-private';

export default (_commandLineArgs: Record<string, string[]>): RollupOptions[] => {
  const libPath = process.env.CURRENT_PKG_PATH;
  if (!libPath) {
    console.error('Error: CURRENT_PKG_PATH environment variable is not set.');
    process.exit(1);
  }

  console.log(libPath, libPath.includes('mui-icon'));

  const tsconfig = getTSConfig(libPath);
  rmSync(path.join(libPath, 'dist'), { recursive: true, force: true });
  return [
    {
      input: path.join(libPath, 'src', 'index.ts'),
      output: [
        {
          file: path.join(libPath, 'dist', 'index.mjs'),
          format: 'esm', // ES module output
          sourcemap: !libPath.includes('mui-icon'),
        },
      ],
      plugins: [
        resolve(),
        json(),
        commonjs(),
        replace(replaceOpts(libPath)),
        typescript({
          tsconfig,
          compilerOptions: {
            composite: false,
            incremental: false,
            stripInternal: true,
          },
        }),
        terser({
          compress: {
            dead_code: true,
          },
          mangle: false,
          output: {
            beautify: true,
          },
        }),
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
      ].filter(Boolean),
      external: [/^@ktjs\//, /^@babel\//],
    },
    {
      input: path.join(libPath, 'src', 'index.ts'),
      output: [
        { file: path.join(libPath, 'dist', 'index.d.ts'), format: 'es', sourcemap: !libPath.includes('mui-icon') },
      ],
      plugins: [
        replace(replaceOpts(libPath)),
        hidePrivate({
          allNames: [/^_/],
        }),
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

const getTSConfig = (libPath: string) => {
  const tsconfigBuildPath = path.join(libPath, 'tsconfig.build.json');
  const tsconfigPath = path.join(libPath, 'tsconfig.json');
  return fs.existsSync(tsconfigBuildPath) ? tsconfigBuildPath : tsconfigPath;
};

export const getAliases = () => {
  const packagesDir = path.join(import.meta.dirname, '..', 'packages');
  const pluginDir = path.join(import.meta.dirname, '..', 'plugins');
  const packageDirs = [packagesDir, pluginDir];
  const aliasMap: Record<string, string> = {};
  for (const baseDir of packageDirs) {
    for (const dir of fs.readdirSync(baseDir)) {
      const jsonPath = path.join(baseDir, dir, 'package.json');
      if (!fs.existsSync(jsonPath)) {
        continue;
      }
      const json = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
      aliasMap[json.name] = path.join(baseDir, dir, 'src', 'index.ts');
      if (json.name === '@ktjs/core') {
        aliasMap[json.name + '/jsx'] = path.join(baseDir, dir, 'src', 'index.ts');
        aliasMap[json.name + '/jsx-runtime'] = path.join(baseDir, dir, 'src', 'jsx-runtime.ts');
        aliasMap[json.name + '/jsx-dev-runtime'] = path.join(baseDir, dir, 'src', 'jsx-runtime.ts');
      } else if (json.name === 'kt.js') {
        aliasMap[json.name + '/jsx'] = path.join(baseDir, dir, 'src', 'jsx.ts');
        aliasMap[json.name + '/jsx-runtime'] = path.join(baseDir, dir, 'src', 'jsx-runtime.ts');
        aliasMap[json.name + '/jsx-dev-runtime'] = path.join(baseDir, dir, 'src', 'jsx-runtime.ts');
      }
    }
  }

  return Object.entries(aliasMap)
    .sort(([a], [b]) => b.length - a.length)
    .map(([find, replacement]) => ({ find, replacement }));
};

// #region replace options

interface CommonPackageJson {
  name: string;
  version: string;
  description: string;
  description_zh: string;
  author: {
    name: string;
    email: string;
  };
  license: string;
  repository: {
    type: string;
    url: string;
  };
}

export const globalDefines = {
  'process.env.BASE_URL': JSON.stringify('/'),
  'process.env.IS_DEV': JSON.stringify('false'),
};

export function replaceOpts(packagePath?: string): RollupReplaceOptions {
  if (!packagePath) {
    return globalDefines;
  }

  const pkg = JSON.parse(fs.readFileSync(path.join(packagePath, 'package.json'), 'utf-8')) as CommonPackageJson;
  function formatDateFull(dt = new Date()) {
    const y = dt.getFullYear();
    const m = String(dt.getMonth() + 1).padStart(2, '0');
    const d = String(dt.getDate()).padStart(2, '0');
    const hh = String(dt.getHours()).padStart(2, '0');
    const mm = String(dt.getMinutes()).padStart(2, '0');
    const ss = String(dt.getSeconds()).padStart(2, '0');
    const ms = String(dt.getMilliseconds()).padStart(3, '0');
    return `${y}.${m}.${d} ${hh}:${mm}:${ss}.${ms}`;
  }

  const __KEBAB_NAME__ = pkg.name.replace('rollup-plugin-', '');
  const __VERSION__ = pkg.version;
  const __NAME__ = __KEBAB_NAME__.replace(/(^|-)(\w)/g, (_, __, c) => c.toUpperCase());

  const __PKG_INFO__ = `## About
 * @package ${__NAME__}
 * @author ${pkg.author.name} <${pkg.author.email}>
 * @version ${pkg.version} (Last Update: ${formatDateFull()})
 * @license ${pkg.license}
 * @link ${pkg.repository.url}
 * @link https://baendlorel.github.io/ Welcome to my site!
 * @description ${pkg.description.replace(/\n/g, '\n * \n * ')}
 * @copyright Copyright (c) ${new Date().getFullYear()} ${pkg.author.name}. All rights reserved.`;

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
// #endregion
