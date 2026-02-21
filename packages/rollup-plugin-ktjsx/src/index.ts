import type { Plugin } from 'rollup';
import { transformWithKTjsx, type KTjsxTransformOptions } from '@ktjs/transformer';

type Filter = RegExp | ((id: string) => boolean);

export interface RollupKTjsxOptions {
  include?: Filter;
  exclude?: Filter;
  babelConfig?: Record<string, unknown>;
}

const DEFAULT_INCLUDE_RE = /\.[cm]?[jt]sx$/;
const NODE_MODULES_RE = /\/node_modules\//;
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
  if (id.startsWith('\0') || NODE_MODULES_RE.test(id)) {
    return false;
  }

  if (exclude && matchFilter(exclude, id)) {
    return false;
  }

  if (include) {
    return matchFilter(include, id);
  }

  return DEFAULT_INCLUDE_RE.test(id);
};

export function rollupKTjsx(options: RollupKTjsxOptions = {}): Plugin {
  return {
    name: 'ktjs:rollup-plugin-ktjsx',
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

export default rollupKTjsx;
