import { KIdSymbol, KTextSymbol } from '@/consts/sym.js';
import { $arrayFrom, $appendChild, $textNode } from '@/lib/index.js';

export const descriptors: Record<keyof PickProperty<KEnhanced>, PropertyDescriptor> = {
  ktext: {
    get(this: HTMLKElement): string {
      return this[KTextSymbol].textContent;
    },
    set(this: HTMLKElement, newText: string): void {
      this[KTextSymbol].textContent = newText;
    },
  },
  kchildren: {
    get<E extends HTMLKElement>(this: E): KChildren[] {
      return $arrayFrom(this.children) as KChildren[];
    },
    set<E extends HTMLKElement>(this: E, elements: (KChildren | string)[]): void {
      this.textContent = '';
      const textNode = this[KTextSymbol];
      if (textNode instanceof Text) {
        $appendChild.call(this, textNode); // keep text node always available
      }

      const elementsLen = elements.length;
      for (let i = 0; i < elementsLen; i++) {
        const el = elements[i];
        if (typeof el === 'string') {
          $appendChild.call(this, $textNode(el));
          continue;
        }

        if (el instanceof Text || KIdSymbol in el) {
          $appendChild.call(this, el);
          continue;
        }

        throw new TypeError(
          `[__NAME__:kchildren] Invalid child element at index ${i}. Only string, Text nodes or KEnhancedElements are allowed.`
        );
      }
    },
  },
};
