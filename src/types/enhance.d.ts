import { kon, koff, kmount } from '@/core/enhance.js';

declare global {
  type HTMLElementTag = keyof HTMLElementTagNameMap;

  interface KTEnhanced {
    /**
     * Unique id of the KT.js enhanced html element;
     */
    kid: number;

    isKT: true;

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

  type HTMLEnhancedElement<T extends HTMLElementTag = NonSpecialTags> =
    (HTMLElement extends HTMLElementTagNameMap[T] ? HTMLElement : HTMLElementTagNameMap[T]) &
      KTEnhanced;
}
