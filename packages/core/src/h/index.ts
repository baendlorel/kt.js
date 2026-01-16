import type { HTMLTag, otherstring } from '@/types/global.js';
import type { KTRawAttr, KTRawContent } from '@/types/h.js';

import { $throw } from '@/lib/error.js';
import { applyAttr } from './attr.js';
import { applyContent } from './content.js';

type HTML<T extends HTMLTag & otherstring> = T extends HTMLTag ? HTMLElementTagNameMap[T] : HTMLElement;

type H = (<T extends HTMLTag>(tag: T, attr?: KTRawAttr, content?: KTRawContent) => HTML<T>) & {
  kDepth: number;
  kUpdater: (() => void)[];
};

/**
 * Create an enhanced HTMLElement.
 * - Only supports HTMLElements, **NOT** SVGElements or other Elements.
 * @param tag tag of an `HTMLElement`
 * @param attr attribute object or className
 * @param content a string or an array of HTMLEnhancedElement as child nodes
 *
 * __PKG_INFO__
 */
export const h: H = ((tag, attr = '', content = '') => {
  if (typeof tag !== 'string') {
    $throw('tagName must be a string.');
  }

  // * start creating the element
  const element = document.createElement(tag) as any;

  // * Handle content
  const kif = applyAttr(element, attr);
  if (!kif) {
    return document.createComment('k-if') as any;
  }

  applyContent(element, content);

  return element;
}) as H;
