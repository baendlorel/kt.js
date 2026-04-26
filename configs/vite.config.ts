import path from 'node:path';
import fs from 'node:fs';
import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import replace, { type RollupReplaceOptions } from '@rollup/plugin-replace';
import dts from 'vite-plugin-dts';
import hidePrivate from 'rollup-plugin-hide-private';

import { getTSConfig, loadJson, Packages } from './utils.js';

// 导出类型定义构建配置供单独使用
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
      // 第一个 terser: 移除死代码，不混淆
      terser({
        compress: {
          dead_code: true,
        },
        mangle: false,
        output: {
          beautify: true,
        },
      }),
      // 第二个 terser: 混淆私有属性
      terser({
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

// #region utils

export const getAliases = () => {
  const aliasMap: Record<string, string> = {};
  for (const packageDir of Packages) {
    const json = loadJson(path.join(packageDir, 'package.json'));
    const src = path.join(packageDir, 'src');

    aliasMap[json.name] = path.join(src, 'index.ts');
    if (json.name === '@ktjs/core') {
      aliasMap[json.name + '/jsx'] = path.join(src, 'index.ts');
      aliasMap[json.name + '/jsx-runtime'] = path.join(src, 'jsx-runtime.ts');
      aliasMap[json.name + '/jsx-dev-runtime'] = path.join(src, 'jsx-runtime.ts');
    } else if (json.name === 'kt.js') {
      aliasMap[json.name + '/jsx'] = path.join(src, 'jsx.ts');
      aliasMap[json.name + '/jsx-runtime'] = path.join(src, 'jsx-runtime.ts');
      aliasMap[json.name + '/jsx-dev-runtime'] = path.join(src, 'jsx-runtime.ts');
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
    return { values: globalDefines, preventAssignment: true };
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
