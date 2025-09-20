import { $arrayFrom, $appendChild, $createTextNode } from '@/lib/index.js';

import { getPrivate, isKEnhanced } from '../privates.js';

export const descriptors: Record<keyof PickProperty<KEnhanced>, PropertyDescriptor> = {
  ktext: {
    get(this: HTMLKEnhancedElement): string {
      return getPrivate(this).text.textContent;
    },
    set(this: HTMLKEnhancedElement, newText: string): void {
      getPrivate(this).text.textContent = newText;
    },
  },
  kchildren: {
    get<El extends HTMLKEnhancedElement>(this: El): KChildren[] {
      return $arrayFrom(this.children) as KChildren[];
    },
    set<El extends HTMLKEnhancedElement>(this: El, elements: (KChildren | string)[]): void {
      this.textContent = '';
      $appendChild.call(this, getPrivate(this).text); // keep text node always available

      const elementsLen = elements.length;
      for (let i = 0; i < elementsLen; i++) {
        const el = elements[i];
        if (typeof el === 'string') {
          $appendChild.call(this, $createTextNode(el));
          continue;
        }

        if (el instanceof Text || isKEnhanced(el)) {
          $appendChild.call(this, el);
          continue;
        }

        throw new TypeError(
          `[__NAME__:kchildren] Invalid child element at index ${i}. Only string, Text nodes or KT.js enhanced elements are allowed.`
        );
      }
    },
  },
};
