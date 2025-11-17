import type { HTMLTag, otherstring } from '@/types/global.js';
import type { RawAttr, RawContent } from '@/types/h.js';

import { $h } from '@/lib/dom.js';
import { $throw } from '@/lib/error.js';
import { applyAttr } from './attr.js';
import { applyContent } from './content.js';

type HTML<T extends HTMLTag & otherstring> = T extends HTMLTag ? HTMLElementTagNameMap[T] : HTMLElement;

/**
 * Create an enhanced HTMLElement.
 * - Only supports HTMLElements, **NOT** SVGElements or other Elements.
 * @param tag tag of an `HTMLElement`
 * @param attr attribute object or className
 * @param content a string or an array of HTMLEnhancedElement as child nodes
 */
export const h = <T extends HTMLTag>(tag: T, attr: RawAttr = '', content: RawContent = ''): HTML<T> => {
  if (typeof tag !== 'string') {
    $throw('__func__ tagName must be a string.');
  }

  // * start creating the element
  const element = $h(tag) as HTML<T>;

  // * Handle content
  applyAttr(element, attr);
  applyContent(element, content);

  return element;
};
