import * as rp from '@rollup/plugin-replace';
import { loadTemplate } from './load-template.js';
import { loadJson } from './utils.js';

const globalDefines = {
  'process.env.BASE_URL': JSON.stringify('/'),
  'process.env.IS_DEV': JSON.stringify('false'),
};

export function replace(pkg?: string): ReturnType<typeof rp.default> {
  if (!pkg) {
    return rp.default({ values: globalDefines, preventAssignment: true });
  }

  const json = loadJson(pkg.join('package.json'));

  const __KEBAB_NAME__ = json.name.replace('rollup-plugin-', '');
  const __VERSION__ = json.version;
  const __NAME__ = __KEBAB_NAME__.replace(/(^|-)(\w)/g, (_0, _1, c) => c.toUpperCase());
  const __PKG_INFO__ = loadTemplate(json);

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
