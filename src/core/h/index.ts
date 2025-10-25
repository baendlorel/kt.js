import { HTMLTag, NoTextNodeTag } from '@/global.js';
import { KEnhanced } from '@/types/enhance.js';
import { RawAttribute, RawContent } from '@/types/h.js';
import { KTextSymbol } from '@/consts/sym.js';
import { $h, $textNode, $appendChild } from '@/lib/index.js';
import { throws } from '@/lib/error.js';

import { enhance } from '../enhance/index.js';
import { needKText } from '../enhance/specialize.js';
import { applyAttr } from './attr.js';
import { applyContent } from './content.js';

// todo 这里要改成，如果是不支持textnode的元素，返回值就没有强化的样子
/**
 * Create an enhanced HTMLElement.
 * - Only supports HTMLElements, **NOT** SVGElements or other Elements.
 * @param tag tag of an `HTMLElement`
 * @param attr attribute object or className
 * @param content a string or an array of HTMLEnhancedElement as child nodes
 */
export function h<T extends HTMLTag>(
  tag: T,
  attr: RawAttribute = '',
  content: RawContent = ''
): T extends NoTextNodeTag ? HTMLElementTagNameMap[T] : HTMLElementTagNameMap[T] & KEnhanced {
  if (typeof tag !== 'string') {
    throws('__func__ tagName must be a string.');
  }

  type R = T extends NoTextNodeTag ? HTMLElementTagNameMap[T] : HTMLElementTagNameMap[T] & KEnhanced;

  type Enhanced = HTMLElementTagNameMap[T] & KEnhanced;

  // * start creating the element
  const element = $h(tag) as R;
  if (needKText(tag)) {
    $appendChild.call(element, ((element as Enhanced)[KTextSymbol] = $textNode()));
  }

  // * define enhancing properties
  enhance(element);

  // * Handle content
  applyAttr(element, attr);
  applyContent(element, content);

  return element;
}
