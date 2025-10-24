import { KEnhanced, HTMLKElement } from '@/types/enhance.js';
import { KTextSymbol } from '@/consts/sym.js';

export const descriptors: Record<keyof PickProperty<KEnhanced>, PropertyDescriptor> = {
  ktext: {
    get(this: HTMLKElement): string {
      return this[KTextSymbol].textContent;
    },
    set(this: HTMLKElement, newText: string): void {
      this[KTextSymbol].textContent = newText;
    },
  },
};
