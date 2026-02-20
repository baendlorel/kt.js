import path from 'node:path';
import type { KForPluginConfig, ResolvedConfig } from './types';

export function resolveConfig(config?: KForPluginConfig): ResolvedConfig {
  return {
    forAttr: config?.forAttr || 'k-for',
    ifAttr: config?.ifAttr || 'k-if',
    elseAttr: config?.elseAttr || 'k-else',
    elseIfAttr: config?.elseIfAttr || 'k-else-if',
    modelAttr: config?.modelAttr || 'k-model',
    htmlAttr: config?.htmlAttr || 'k-html',
    allowOfKeyword: config?.allowOfKeyword !== false,
  };
}

export function isJsxLikeFile(fileName: string): boolean {
  const ext = path.extname(fileName).toLowerCase();
  return ext === '.tsx' || ext === '.jsx';
}
