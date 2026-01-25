import type { HTMLTag, otherstring, SVGTag } from '@/types/global.js';
import type { KTRawAttr, KTRawContent } from '@/types/h.js';

import { $throw } from '@/lib/error.js';
import { applyAttr } from './attr.js';
import { applyContent } from './content.js';

type HTML<T extends (HTMLTag | SVGTag) & otherstring> = T extends SVGTag
  ? SVGElementTagNameMap[T]
  : T extends HTMLTag
    ? HTMLElementTagNameMap[T]
    : HTMLElement;

const defaultCreator = (tag: string) => document.createElement(tag);
const svgCreator = (tag: string) => document.createElementNS('http://www.w3.org/2000/svg', tag);
let creator: typeof defaultCreator | typeof svgCreator = defaultCreator;

/**
 * Create an enhanced HTMLElement.
 * - Only supports HTMLElements, **NOT** SVGElements or other Elements.
 * @param tag tag of an `HTMLElement`
 * @param attr attribute object or className
 * @param content a string or an array of HTMLEnhancedElement as child nodes
 *
 * __PKG_INFO__
 */
export const h = <T extends HTMLTag | SVGTag>(tag: T, attr?: KTRawAttr, content?: KTRawContent): HTML<T> => {
  if (typeof tag !== 'string') {
    $throw('tagName must be a string.');
  }

  // * start creating the element
  const element = creator(tag) as HTML<T>;

  // * Handle content
  applyAttr(element, attr);
  applyContent(element, content);

  if (tag === 'svg') {
    const div = document.createElement('div');
    div.innerHTML = element.outerHTML;
    return div.firstChild as HTML<T>;
  }

  return element;
};
