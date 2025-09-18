import { KSymbol } from '@/consts/sym.ts';
import { kon, koff, kmount } from '@/core/enhance.js';

declare global {
  type HTMLElementTag = keyof HTMLElementTagNameMap;

  interface KEnhanced {
    /**
     * Unique id of the KT.js enhanced html element;
     */
    kid: number;

    [KSymbol]: true;

    kon: typeof kon;

    koff: typeof koff;

    kmount: typeof kmount;
  }

  /**
   * Get the tags that makes HTMLElementTagNameMap[tag] = HTMLElement
   */
  type NonSpecialTags = {
    [K in keyof HTMLElementTagNameMap]: HTMLElement extends HTMLElementTagNameMap[K] ? K : never;
  }[keyof HTMLElementTagNameMap];

  type HTMLKEnhancedElement<T extends HTMLElementTag = NonSpecialTags> =
    (HTMLElement extends HTMLElementTagNameMap[T] ? HTMLElement : HTMLElementTagNameMap[T]) &
      KEnhanced;
}
