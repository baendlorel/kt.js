import { KTextSymbol } from '@/consts/sym.js';
import { $set } from '@/lib/native.js';
import { $createElement, $createTextNode, $appendChild } from '@/lib/dom.js';

import { enhance } from '../enhance/index.js';
import { createAttrBranch } from './attr.js';
import { createContentBranch } from './content.js';

/**
 * Create an enhanced HTMLElement.
 * @param tag tag of an `HTMLElement`
 * @param attr attribute object or className
 * @param content a string or an array of HTMLEnhancedElement as child nodes
 */
export function h<T extends TagName>(
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
  $set(element, KTextSymbol, textNode);

  // * define enhancing properties
  enhance(element);

  // * Handle content
  contentBranch.run(element, content);
  attrBranch.run(element, attr);

  return element;
}

// todo 根据各个元素的使用情况，创建alias，比如div(attr,content)。并且input还可以直接写checkbox,radio什么什么的
