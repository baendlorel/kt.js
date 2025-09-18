import { yon, yoff, ymount } from './enhance.js';

declare global {
  type HTMLElementTag = keyof HTMLElementTagNameMap;

  interface YukaEnhanced {
    /**
     * Unique id of the Yuka.js enhanced html element;
     */
    yid: number;

    isYuka: true;

    yon: typeof yon;

    yoff: typeof yoff;

    ymount: typeof ymount;
  }

  /**
   * Get the tags that makes HTMLElementTagNameMap[tag] = HTMLElement
   */
  type NonSpecialTags = {
    [K in keyof HTMLElementTagNameMap]: HTMLElement extends HTMLElementTagNameMap[K] ? K : never;
  }[keyof HTMLElementTagNameMap];

  type HTMLEnhancedElement<T extends HTMLElementTag = NonSpecialTags> =
    (HTMLElement extends HTMLElementTagNameMap[T] ? HTMLElement : HTMLElementTagNameMap[T]) &
      YukaEnhanced;
}
