import { KIdSymbol, KTextSymbol } from '@/consts/sym.js';
import { $h, $textNode, $appendChild, $define } from '@/lib/index.js';
import { Indexer } from '@/utils/indexer.js';

import { enhance } from '../enhance/index.js';
import { needKText } from '../enhance/specialize.js';
import { attrBranch } from './attr.js';
import { contentBranch } from './content.js';

const dummyTextNode = {} as Text;
$define(dummyTextNode, 'textContent', { value: '' });

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
): HTMLKElement<T> {
  if (typeof tag !== 'string') {
    throw new TypeError('[__NAME__:h] tagName must be a string.');
  }
  attrBranch.predicate(null, attr);
  contentBranch.predicate(null, content);

  // * start creating the element
  const element = $h(tag) as HTMLKElement<T>;

  element[KIdSymbol] = Indexer.nextKid();
  const tn = needKText(tag) ? $textNode() : dummyTextNode;
  element[KTextSymbol] = tn;
  $appendChild.call(element, tn);

  // * define enhancing properties
  enhance(element);

  // * Handle content
  attrBranch.run(element, attr);
  contentBranch.run(element, content);

  return element;
}

true satisfies IsSameType<typeof h, HFunction>;
