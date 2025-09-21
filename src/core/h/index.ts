import { Indexer } from '@/utils/indexer.js';
import { $createElement, $createTextNode, $appendChild } from '@/lib/index.js';

import { enhance } from '../enhance/index.js';
import { setPrivate } from '../privates.js';
import { attrBranch } from './attr.js';
import { contentBranch } from './content.js';

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
): HTMLKEnhancedElement<T> {
  if (typeof tag !== 'string') {
    throw new TypeError('[__NAME__:h] tagName must be a string.');
  }
  attrBranch.predicate(null, attr);
  contentBranch.predicate(null, content);

  // * start creating the element
  const element = $createElement(tag) as HTMLKEnhancedElement<T>;
  const textNode = $createTextNode('');
  $appendChild.call(element, textNode);
  setPrivate(element, {
    id: Indexer.nextKid(),
    text: textNode,
  });

  // * define enhancing properties
  enhance(element);

  // * Handle content
  attrBranch.run(element, attr);
  contentBranch.run(element, content);

  return element;
}

true satisfies IsSameType<typeof h, HFunction>;
