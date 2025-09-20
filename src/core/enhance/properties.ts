import { KTextSymbol } from '@/consts/sym.js';
import { Indexer } from '@/utils/indexer.js';

// lib
import { $get, $arrayFrom } from '@/lib/native.js';
import { $appendChild, $createTextNode } from '@/lib/dom.js';
import { getTextNode } from '../privates.js';

const nextKid = () => ({
  value: Indexer.nextKid(),
  enumerable: true,
});

const isKT = { value: true };

const ktext = {
  get(this: HTMLKEnhancedElement): string {
    return getTextNode(this).textContent;
  },
  set(this: HTMLKEnhancedElement, newText: string): void {
    getTextNode(this).textContent = newText;
  },
};

const kchildren = {
  get<El extends HTMLKEnhancedElement>(this: El): KChildren[] {
    return $arrayFrom(this.children) as KChildren[];
  },
  set<El extends HTMLKEnhancedElement>(this: El, elements: (KChildren | string)[]): void {
    this.textContent = '';
    $appendChild.call(this, getTextNode(this)); // keep text node always available

    const elementsLen = elements.length;
    for (let i = 0; i < elementsLen; i++) {
      const el = elements[i];
      if (typeof el === 'string') {
        $appendChild.call(this, $createTextNode(el));
        continue;
      }

      if (el instanceof Text || el.isKT) {
        $appendChild.call(this, el);
        continue;
      }

      throw new TypeError(
        `[__NAME__:kchildren] Invalid child element at index ${i}. Only string, Text nodes or KT.js enhanced elements are allowed.`
      );
    }
  },
};

type KEnhancedDescriptorMap = Record<keyof PickProperty<KEnhanced>, PropertyDescriptor>;

export function getDescriptorMap(): KEnhancedDescriptorMap {
  return { ktext, isKT, kid: nextKid(), kchildren };
}
