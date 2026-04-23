import type { JSX } from '../types/jsx.js';
import type { HTMLTag, MathMLTag, SVGTag } from '@ktjs/shared';
import type { KTRawAttr, KTRawContent, HTML } from '../types/h.js';

import { applyAttr } from './attr.js';
import { append } from './content.js';
import { applyKModel } from './model.js';

const apply = <T extends JSX.Element>(element: T, attr: KTRawAttr, content: KTRawContent): T => {
  if (attr !== null && typeof attr === 'object') {
    applyKModel(element, attr);
    applyAttr(element, attr);
  }
  return (append(element, content), element);
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
export const h = <T extends HTMLTag | SVGTag | MathMLTag>(tag: T, attr?: KTRawAttr, content?: KTRawContent): HTML<T> =>
  apply(document.createElement(tag), attr, content) as HTML<T>;

export const svg = <T extends SVGTag>(tag: T, attr?: KTRawAttr, content?: KTRawContent): HTML<T> =>
  apply(document.createElementNS('http://www.w3.org/2000/svg', tag), attr, content) as HTML<T>;

export const mathml = <T extends MathMLTag>(tag: T, attr?: KTRawAttr, content?: KTRawContent): HTML<T> =>
  apply(document.createElementNS('http://www.w3.org/1998/Math/MathML', tag), attr, content) as HTML<T>;
