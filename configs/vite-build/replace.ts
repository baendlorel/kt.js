import * as rp from '@rollup/plugin-replace';
import { loadTemplate } from './load-template.js';
import { loadJson } from '../../common/utils.js';

const globalDefines = {
  'process.env.BASE_URL': JSON.stringify('/'),
  'process.env.IS_DEV': JSON.stringify('false'),
};

/**
 * @param pkg absolute path to the package, e.g. /path/to/kt.js/packages/core
 */
function getOptions(pkg?: string): {
  preventAssignment: boolean;
  delimiters: [string, string];
  values: Record<string, string>;
} {
  if (!pkg) {
    return { values: globalDefines, preventAssignment: true, delimiters: ['', ''] };
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

/**
 * @param pkg absolute path to the package, e.g. /path/to/kt.js/packages/core
 */
export function replace(pkg?: string): ReturnType<typeof rp.default> {
  return rp.default(getOptions(pkg));
}

/**
 * @param pkg absolute path to the package, e.g. /path/to/kt.js/packages/core
 * @param code the content of the dts file to be processed
 */
export function replaceForViteDts(pkg: string, code: string) {
  const options = Object.entries(getOptions(pkg).values)
    .map(([form, to]) => ({ form, to }))
    .sort((a, b) => b.form.length - a.form.length);

  for (const { form, to } of options) {
    code = code.replaceAll(form, to);
  }
  return code;
}
