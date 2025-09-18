import { Indexer } from '@/utils/indexer.js';
import { h } from './h.js';

export function useKT(scopeName: string = Indexer.genScopeName()) {
  const _h = function <Tag extends HTMLElementTag>(
    tag: Tag,
    attr: KTAttribute | string,
    content: (HTMLEnhancedElement | string)[] | string
  ) {
    const element = h(tag, attr, content);
    element.setAttribute(scopeName, '');
    return element;
  };

  return {
    h: _h,
  };
}
