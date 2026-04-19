import type { Plugin } from 'vite';
import { transformWithKTjsx, type KTjsxTransformOptions } from '../../transformer/src/transform.js';

type Filter = RegExp | ((id: string) => boolean);

export interface ViteKTjsxOptions {
  include?: Filter;
  exclude?: Filter;
  babelConfig?: Record<string, unknown>;
}

const DEFAULT_INCLUDE_RE = /\.[cm]?[jt]sx$/;
const NODE_MODULES_RE = /\/node_modules\//;
const KT_NODE_MODULES_RE = /\/node_modules\/(?:\.pnpm\/[^/]+\/node_modules\/)?@ktjs\//;
const QUERY_RE = /\?.*$/;
type InternalTransformOptions = Omit<KTjsxTransformOptions, 'filename' | 'sourceFileName'>;

const stripQuery = (id: string) => id.replace(QUERY_RE, '');

const matchFilter = (filter: Filter | undefined, id: string): boolean => {
  if (!filter) {
    return false;
  }

  if (typeof filter === 'function') {
    return filter(id);
  }

  filter.lastIndex = 0;
  return filter.test(id);
};

const shouldTransform = (id: string, include?: Filter, exclude?: Filter): boolean => {
  if (id.startsWith('\0')) {
    return false;
  }

  if (exclude && matchFilter(exclude, id)) {
    return false;
  }

  if (include && matchFilter(include, id)) {
    return true;
  }

  // & compiles modules only in @ktjs packages by default.
  if (NODE_MODULES_RE.test(id)) {
    return KT_NODE_MODULES_RE.test(id);
  }

  return DEFAULT_INCLUDE_RE.test(id) && !include;
};

export function viteKTjsx(options: ViteKTjsxOptions = {}): Plugin {
  return {
    name: 'ktjs:vite-plugin-ktjsx',
    enforce: 'pre',
    async transform(code, id) {
      const cleanId = stripQuery(id);
      if (!shouldTransform(cleanId, options.include, options.exclude)) {
        return null;
      }

      const result = await transformWithKTjsx(code, {
        filename: cleanId,
        sourceFileName: cleanId,
        ...(options.babelConfig as InternalTransformOptions),
      });

      if (!result?.code) {
        return null;
      }

      return {
        code: result.code,
        map: result.map ?? null,
      };
    },
  };
}

export default viteKTjsx;
