import type { HTMLTag, MathMLTag, SVGTag } from '@ktjs/shared';
import type { KTRawAttr, KTRawContent, HTML } from '../types/h.js';

import { applyAttr } from './attr.js';
import { applyContent } from './content.js';
import { applyKModel } from './model.js';

const htmlCreator = (tag: string) => document.createElement(tag);
const svgCreator = (tag: string) => document.createElementNS('http://www.w3.org/2000/svg', tag);
const mathMLCreator = (tag: string) => document.createElementNS('http://www.w3.org/1998/Math/MathML', tag);
let creator: (tag: string) => any = htmlCreator;

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
    if (SVG_FLAG in attr) {
      delete attr[SVG_FLAG];
      creator = svgCreator;
    } else if (MATHML_FLAG in attr) {
      delete attr[MATHML_FLAG];
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

  if (typeof attr === 'object' && attr !== null && 'k-model' in attr) {
    applyKModel(element as any, attr['k-model'] as any);
  }

  return element;
};
