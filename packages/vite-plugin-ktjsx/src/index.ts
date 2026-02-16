import { transformAsync, type TransformOptions } from '@babel/core';
import type { Plugin } from 'vite';

import babelKTjsx from '@ktjs/babel-plugin-ktjsx';

type Filter = RegExp | ((id: string) => boolean);

export interface ViteKTjsxOptions {
  include?: Filter;
  exclude?: Filter;
  babelConfig?: Omit<
    TransformOptions,
    'ast' | 'babelrc' | 'configFile' | 'filename' | 'parserOpts' | 'plugins' | 'sourceFileName' | 'sourceMaps'
  >;
}

const DEFAULT_INCLUDE_RE = /\.[cm]?[jt]sx$/;
const NODE_MODULES_RE = /\/node_modules\//;
const QUERY_RE = /\?.*$/;
const DEFAULT_PARSER_PLUGINS: NonNullable<TransformOptions['parserOpts']>['plugins'] = ['jsx', 'typescript'];

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

export function viteKTjsx(options: ViteKTjsxOptions = {}): Plugin {
  return {
    name: 'ktjs:vite-plugin-ktjsx',
    enforce: 'pre',
    async transform(code, id) {
      const cleanId = stripQuery(id);
      if (!shouldTransform(cleanId, options.include, options.exclude)) {
        return null;
      }

      const result = await transformAsync(code, {
        filename: cleanId,
        sourceFileName: cleanId,
        ast: false,
        babelrc: false,
        configFile: false,
        sourceMaps: true,
        parserOpts: {
          sourceType: 'module',
          plugins: DEFAULT_PARSER_PLUGINS,
        },
        plugins: [babelKTjsx()],
        ...options.babelConfig,
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
