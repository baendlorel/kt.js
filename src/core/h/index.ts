import { Indexer } from '@/utils/indexer.js';
import { koff, kon, kmount } from '../enhance.js';
import { createElement, ReflectDefineProperty } from '../native.js';
import { createAttrBranch } from './attr.js';

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
  const contentBranch = createAttrBranch(content);

  const element = createElement<Tag>(tag) as HTMLKEnhancedElement<Tag>;

  // * Define enhancing properties
  ReflectDefineProperty(element, 'kid' satisfies keyof KEnhanced, {
    value: Indexer.nextKid(),
    enumerable: true,
  });
  ReflectDefineProperty(element, 'isKT' satisfies keyof KEnhanced, { value: true });
  element.kon = kon;
  element.koff = koff;
  element.kmount = kmount;

  // * Handle content
  contentBranch.run(element, content);
  attrBranch.run(element, attr);

  return element;
}

export function scopedH(scopeName: string): typeof h {
  return function (...args: Parameters<typeof h>) {
    const element = h(...args);
    element.setAttribute(scopeName, '');
    return element;
  } as typeof h;
}
