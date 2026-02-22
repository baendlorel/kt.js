import type { HTMLTag, MathMLTag, SVGTag } from '@ktjs/shared';
import type { KTRawAttr, KTRawContent, HTML } from '../types/h.js';

import { applyAttr } from './attr.js';
import { applyContent } from './content.js';
import { applyKModel } from './model.js';

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

  // * start creating the element
  const element = document.createElement(tag) as HTML<T>;

  // * Handle content
  applyAttr(element, attr);
  applyContent(element, content);

  if (typeof attr === 'object' && attr !== null && 'k-model' in attr) {
    applyKModel(element as any, attr['k-model'] as any);
  }

  return element;
};

export const svg = <T extends SVGTag>(tag: T, attr?: KTRawAttr, content?: KTRawContent): HTML<T> => {
  if (typeof tag !== 'string') {
    $throw('tagName must be a string.');
  }

  // * start creating the element
  const element = document.createElementNS('http://www.w3.org/2000/svg', tag) as HTML<T>;

  // * Handle content
  applyAttr(element, attr);
  applyContent(element, content);

  if (typeof attr === 'object' && attr !== null && 'k-model' in attr) {
    applyKModel(element as any, attr['k-model'] as any);
  }

  return element;
};

export const mathml = <T extends MathMLTag>(tag: T, attr?: KTRawAttr, content?: KTRawContent): HTML<T> => {
  if (typeof tag !== 'string') {
    $throw('tagName must be a string.');
  }

  // * start creating the element
  const element = document.createElementNS('http://www.w3.org/1998/Math/MathML', tag) as HTML<T>;

  // * Handle content
  applyAttr(element, attr);
  applyContent(element, content);

  if (typeof attr === 'object' && attr !== null && 'k-model' in attr) {
    applyKModel(element as any, attr['k-model'] as any);
  }

  return element;
};
