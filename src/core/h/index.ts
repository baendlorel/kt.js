import { $createElement, $createTextNode, $appendChild } from '@/lib/dom.js';

import { enhance } from '../enhance/index.js';
import { createAttrBranch } from './attr.js';
import { createContentBranch } from './content.js';
import { setTextNode } from '../privates.js';

/**
 * Create an enhanced HTMLElement.
 * @param tag tag of an `HTMLElement`
 * @param attr attribute object or className
 * @param content a string or an array of HTMLEnhancedElement as child nodes
 */
export function h<T extends HTMLTag>(
  tag: T,
  attr: KAttribute | string = '',
  content: (HTMLKEnhancedElement | string)[] | HTMLKEnhancedElement | string = ''
): HTMLKEnhancedElement<T> {
  if (typeof tag !== 'string') {
    throw new TypeError('[__NAME__:h] tagName must be a string.');
  }
  const attrBranch = createAttrBranch(attr);
  const contentBranch = createContentBranch(content);

  // * start creating the element
  const element = $createElement<T>(tag) as HTMLKEnhancedElement<T>;
  const textNode = $createTextNode('');
  $appendChild.call(element, textNode);
  setTextNode(element, textNode);

  // * define enhancing properties
  enhance(element);

  // * Handle content
  contentBranch.run(element, content);
  attrBranch.run(element, attr);

  return element;
}

true satisfies IsSameType<typeof h, HFunction>;
