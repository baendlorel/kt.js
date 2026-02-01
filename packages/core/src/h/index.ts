import { $throw } from '@ktjs/shared';
import type { HTMLTag, MathMLTag, otherstring, SVGTag } from '../types/global.js';
import type { KTRawAttr, KTRawContent } from '../types/h.js';

import { applyAttr } from './attr.js';
import { applyContent } from './content.js';

type HTML<T extends (HTMLTag | SVGTag | MathMLTag) & otherstring> = T extends SVGTag
  ? SVGElementTagNameMap[T]
  : T extends HTMLTag
    ? HTMLElementTagNameMap[T]
    : T extends MathMLTag
      ? MathMLElementTagNameMap[T]
      : HTMLElement;

const tempWrapper = document.createElement('div');
const htmlCreator = (tag: string) => document.createElement(tag);
const svgCreator = (tag: string) => document.createElementNS('http://www.w3.org/2000/svg', tag);
const mathMLCreator = (tag: string) => document.createElementNS('http://www.w3.org/1998/Math/MathML', tag);
let creator: (tag: string) => any = htmlCreator;

// # consts
const SVG_ATTR_FLAG = '__kt_svg__';
const MATHML_ATTR_FLAG = '__kt_mathml__';

/**
 * Create an enhanced HTMLElement.
 * - Only supports HTMLElements, **NOT** SVGElements or other Elements.
 * @param tag tag of an `HTMLElement`
 * @param attr attribute object or className
 * @param content a string or an array of HTMLEnhancedElement as child nodes
 *
 * __PKG_INFO__
 */
export const h = <T extends HTMLTag | SVGTag | MathMLTag>(
  tag: T,
  attr?: KTRawAttr,
  content?: KTRawContent,
): HTML<T> => {
  if (typeof tag !== 'string') {
    $throw('tagName must be a string.');
  }

  if (attr) {
    if (SVG_ATTR_FLAG in attr) {
      delete attr[SVG_ATTR_FLAG];
      creator = svgCreator;
    } else if (MATHML_ATTR_FLAG in attr) {
      delete attr[MATHML_ATTR_FLAG];
      creator = mathMLCreator;
    } else {
      creator = htmlCreator;
    }
  }

  // * start creating the element
  const element = creator(tag) as HTML<T>;

  // * Handle content
  applyAttr(element, attr);
  applyContent(element, content);

  if (tag === 'svg') {
    tempWrapper.innerHTML = element.outerHTML;
    return tempWrapper.firstChild as HTML<T>;
  }

  if (tag === 'math') {
    tempWrapper.innerHTML = element.outerHTML;
    return tempWrapper.firstChild as HTML<T>;
  }

  return element;
};
