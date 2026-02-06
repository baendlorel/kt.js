// @ts-check
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
/**
 * @type {import('../package.json')}
 */
const pkg = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf-8'));

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

/**
 * @type {import('@rollup/plugin-replace').RollupReplaceOptions}
 */
export const replaceOpts = {
  preventAssignment: true,
  delimiters: ['', ''],
  values: {
    __IS_DEV__: 'false',
    __NAME__,
    __KEBAB_NAME__,
    __PKG_INFO__,
    __VERSION__,
    __FRAMEWORK_NAME__: 'kt.js',
    "$throw('": `throw new Error('[kt.js error] `,
    '$throw(`': `throw new Error(\`[kt.js error] `,
    '$throw("': `throw new Error("[kt.js error] `,
    '$warn(': `console.warn('[kt.js warn]',`,
    '$error(': `console.error('[kt.js error]',`,
    '$debug(': `console.debug('[kt.js debug]',`,
  },
};
