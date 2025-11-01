import { HTMLTag } from '@/global.js';
import { RawAttr, RawContent } from '@/types/h.js';
import { $h } from '@/lib/index.js';
import { throws } from '@/lib/error.js';

import { applyAttr } from './attr.js';
import { applyContent } from './content.js';

/**
 * Create an enhanced HTMLElement.
 * - Only supports HTMLElements, **NOT** SVGElements or other Elements.
 * @param tag tag of an `HTMLElement`
 * @param attr attribute object or className
 * @param content a string or an array of HTMLEnhancedElement as child nodes
 */
export function h<T extends HTMLTag>(tag: T, attr?: RawAttr, content?: RawContent): HTMLElementTagNameMap[T] {
  attr = attr || '';
  content = content || '';

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
