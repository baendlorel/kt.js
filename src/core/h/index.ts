import { KTextSymbol } from '@/consts/sym.js';
import { $set } from '@/lib/native.js';
import { $createElement, $createTextNode, $appendChild, $setAttr } from '@/lib/dom.js';

import { enhance } from '../enhance.js';
import { createAttrBranch } from './attr.js';
import { createContentBranch } from './content.js';

/**
 * Create an enhanced HTMLElement.
 * @param tag tag of an `HTMLElement`
 * @param attr attribute object or className
 * @param content a string or an array of HTMLEnhancedElement as child nodes
 */
export function h<Tag extends HTMLElementTag>(
  tag: Tag,
  attr: KAttribute | string = '',
  content: (HTMLKEnhancedElement | string)[] | HTMLKEnhancedElement | string = ''
): HTMLKEnhancedElement<Tag> {
  if (typeof tag !== 'string') {
    throw new TypeError('[__NAME__:h] tagName must be a string.');
  }
  const attrBranch = createAttrBranch(attr);
  const contentBranch = createContentBranch(content);

  // * start creating the element
  const element = $createElement<Tag>(tag) as HTMLKEnhancedElement<Tag>;
  const textNode = $createTextNode('');
  $appendChild.call(element, textNode);
  $set(element, KTextSymbol, textNode);

  // * define enhancing properties
  enhance(element);

  // * Handle content
  contentBranch.run(element, content);
  attrBranch.run(element, attr);

  return element;
}

export function scopedH(scopeName: string): typeof h {
  return function (...args: Parameters<typeof h>) {
    const element = h(...args);
    $setAttr.call(element, scopeName, '');
    return element;
  } as typeof h;
}
