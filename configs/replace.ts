import * as rp from '@rollup/plugin-replace';
import { dtm, loadJson } from '../common/utils.js';

const TEMPLATE = `## About
 * @package __NAME__
 * @author __AUTHOR__ <__EMAIL__>
 * @version __VERSION__ (Last Update: __LAST_UPDATE__)
 * @license __LICENSE__
 * @link __REPOSITORY_URL__
 * @link https://baendlorel.github.io/ Welcome to my site!
 * @description __DESCRIPTION__
 * @copyright Copyright (c)  __YEAR__ __AUTHOR__. All rights reserved.`;

const globalDefines = {
  'process.env.BASE_URL': JSON.stringify('/'),
  'process.env.IS_DEV': JSON.stringify('false'),
};

export function replace(pkg?: string) {
  if (!pkg) {
    return rp.default({ values: globalDefines, preventAssignment: true, delimiters: ['', ''] });
  }

  const json = loadJson(pkg.join('package.json'));

  const __YEAR__ = new Date().getFullYear();
  const __AUTHOR__ = json.author.name;
  const __EMAIL__ = json.author.email;
  const __VERSION__ = json.version;
  const __LICENSE__ = json.license;
  const __REPOSITORY_URL__ = json.repository.url;
  const __DESCRIPTION__ = json.description.replace(/\n/g, '\n * \n * ');
  const __LAST_UPDATE__ = dtm();

  const __KEBAB_NAME__ = json.name.replace('rollup-plugin-', '');
  const __NAME__ = __KEBAB_NAME__.replace(/(^|-)(\w)/g, (_0, _1, c) => c.toUpperCase());
  const __PKG_INFO__ = TEMPLATE.replace(/__YEAR__/g, String(__YEAR__))
    .replace(/__NAME__/g, __NAME__)
    .replace(/__AUTHOR__/g, __AUTHOR__)
    .replace(/__EMAIL__/g, __EMAIL__)
    .replace(/__VERSION__/g, __VERSION__)
    .replace(/__LICENSE__/g, __LICENSE__)
    .replace(/__REPOSITORY_URL__/g, __REPOSITORY_URL__)
    .replace(/__DESCRIPTION__/g, __DESCRIPTION__)
    .replace(/__LAST_UPDATE__/g, __LAST_UPDATE__);

  return rp.default({
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
  });
}
