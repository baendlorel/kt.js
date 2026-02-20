// @ts-check
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { RollupReplaceOptions } from '@rollup/plugin-replace';

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

export function replaceOpts(packagePath: string | undefined) {
  if (!packagePath) {
    console.error('Error: KT_PKG_PATH environment variable is not set.');
    process.exit(1);
  }

  const pkg = JSON.parse(readFileSync(join(packagePath, 'package.json'), 'utf-8')) as CommonPackageJson;

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

  const replaceOpts: RollupReplaceOptions = {
    preventAssignment: true,
    delimiters: ['', ''],
    values: {
      __IS_DEV__: 'false',
      __NAME__,
      __KEBAB_NAME__,
      __PKG_INFO__,
      __VERSION__,

      // global flags
      'flags.svg': JSON.stringify('__svg'),
      'flags.mathml': JSON.stringify('__mathml'),

      // global error/warn/debug
      "$throw('": `throw new Error('[${__NAME__} error] `,
      '$throw(`': `throw new Error(\`[${__NAME__} error] `,
      '$throw("': `throw new Error("[${__NAME__} error] `,
      '$warn(': `console.warn('[${__NAME__} warn]',`,
      '$error(': `console.error('[${__NAME__} error]',`,
      '$debug(': `console.debug('[${__NAME__} debug]',`,
    },
  };

  return replaceOpts;
}

export const defineGlobals = {
  'flags.svg': JSON.stringify('__svg'),
  'flags.mathml': JSON.stringify('__mathml'),
};
