import type { HTMLTag } from '@common/types/global.js';
import type { RawAttr, RawContent } from '@/types/h.js';

import { $h, throws } from '@common/lib/index.js';

import { applyAttr } from './attr.js';
import { applyContent } from './content.js';

/**
 * Create an enhanced HTMLElement.
 * - Only supports HTMLElements, **NOT** SVGElements or other Elements.
 * @param tag tag of an `HTMLElement`
 * @param attr attribute object or className
 * @param content a string or an array of HTMLEnhancedElement as child nodes
 */
export function h<T extends HTMLTag>(tag: T, attr: RawAttr = '', content: RawContent = ''): HTMLElementTagNameMap[T] {
  if (typeof tag !== 'string') {
    throws('__func__ tagName must be a string.');
  }

  // * start creating the element
  const element = $h(tag) as HTMLElementTagNameMap[T];

  // * Handle content
  applyAttr(element, attr);
  applyContent(element, content);

  return element;
}
