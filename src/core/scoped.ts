import { Indexer } from '@/utils/indexer.js';
import { scopedH } from './h/index.js';
import { scopeCss } from './css.js';

export function useScope(scopeName: string = Indexer.genScopeName()) {
  return {
    h: scopedH(scopeName),
    css: scopeCss(scopeName),
  };
}
