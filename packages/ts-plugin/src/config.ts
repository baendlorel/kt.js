import path from 'node:path';
import type { KForPluginConfig, ResolvedConfig } from './types';

export function resolveConfig(config?: KForPluginConfig): ResolvedConfig {
  return {
    forAttr: config?.forAttr || 'k-for',
    itemAttr: config?.itemAttr || 'k-for-item',
    indexAttr: config?.indexAttr || 'k-for-index',
    itemName: config?.itemName || 'item',
    indexName: config?.indexName || 'index',
    allowOfKeyword: config?.allowOfKeyword !== false,
  };
}

export function isJsxLikeFile(fileName: string): boolean {
  const ext = path.extname(fileName).toLowerCase();
  return ext === '.tsx' || ext === '.jsx';
}
