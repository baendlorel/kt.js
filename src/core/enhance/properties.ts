import { KIdSymbol, KTextSymbol } from '@/consts/sym.js';
import { $arrayFrom, $appendChild, $createTextNode } from '@/lib/index.js';

export const descriptors: Record<keyof PickProperty<KEnhanced>, PropertyDescriptor> = {
  ktext: {
    get(this: HTMLKEnhancedElement): string {
      return this[KTextSymbol]?.textContent ?? '';
    },
    set(this: HTMLKEnhancedElement, newText: string): void {
      const textNode = this[KTextSymbol];
      if (textNode) {
        textNode.textContent = newText;
      }
    },
  },
  kchildren: {
    get<E extends HTMLKEnhancedElement>(this: E): KChildren[] {
      return $arrayFrom(this.children) as KChildren[];
    },
    set<E extends HTMLKEnhancedElement>(this: E, elements: (KChildren | string)[]): void {
      this.textContent = '';
      const textNode = this[KTextSymbol];
      if (textNode) {
        $appendChild.call(this, textNode); // keep text node always available
      }

      const elementsLen = elements.length;
      for (let i = 0; i < elementsLen; i++) {
        const el = elements[i];
        if (typeof el === 'string') {
          $appendChild.call(this, $createTextNode(el));
          continue;
        }

        if (el instanceof Text || KIdSymbol in el) {
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
