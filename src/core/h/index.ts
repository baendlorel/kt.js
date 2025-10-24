import { HTMLTag } from '@/global.js';
import { HTMLKElement } from '@/types/enhance.js';
import { RawAttribute, RawContent } from '@/types/h.js';
import { KTextSymbol } from '@/consts/sym.js';
import { $h, $textNode, $appendChild, $defineProperties } from '@/lib/index.js';

import { enhance } from '../enhance/index.js';
import { needKText } from '../enhance/specialize.js';
import { applyAttr } from './attr.js';
import { applyContent } from './content.js';

const dummyTextNode = {} as Text;
$defineProperties(dummyTextNode, { textContent: { value: '' } });

/**
 * Create an enhanced HTMLElement.
 * - Only supports HTMLElements, **NOT** SVGElements or other Elements.
 * @param tag tag of an `HTMLElement`
 * @param attr attribute object or className
 * @param content a string or an array of HTMLEnhancedElement as child nodes
 */
export function h<T extends HTMLTag>(tag: T, attr: RawAttribute = '', content: RawContent = ''): HTMLKElement<T> {
  if (typeof tag !== 'string') {
    throw new TypeError('[__NAME__:h] tagName must be a string.');
  }

  // * start creating the element
  const element = $h(tag) as HTMLKElement<T>;

  if (needKText(tag)) {
    $appendChild.call(element, (element[KTextSymbol] = $textNode()));
  } else {
    element[KTextSymbol] = dummyTextNode;
  }

  // * define enhancing properties
  enhance(element);

  // * Handle content
  applyAttr(element, attr);
  applyContent(element, content);

  return element;
}
