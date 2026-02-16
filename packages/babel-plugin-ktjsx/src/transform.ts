import { transformAsync, type TransformOptions } from '@babel/core';
import babelKTjsx from './index.js';

const DEFAULT_PARSER_PLUGINS: NonNullable<TransformOptions['parserOpts']>['plugins'] = ['jsx', 'typescript'];

type ReservedTransformOptions =
  | 'ast'
  | 'babelrc'
  | 'configFile'
  | 'parserOpts'
  | 'plugins'
  | 'sourceMaps';

export type KTjsxTransformOptions = Omit<TransformOptions, ReservedTransformOptions> & {
  parserPlugins?: NonNullable<TransformOptions['parserOpts']>['plugins'];
};

export async function transformWithKTjsx(code: string, options: KTjsxTransformOptions = {}) {
  const { parserPlugins = DEFAULT_PARSER_PLUGINS, ...babelConfig } = options;

  return transformAsync(code, {
    ast: false,
    babelrc: false,
    configFile: false,
    sourceMaps: true,
    parserOpts: {
      sourceType: 'module',
      plugins: parserPlugins,
    },
    plugins: [babelKTjsx()],
    ...babelConfig,
  });
}
