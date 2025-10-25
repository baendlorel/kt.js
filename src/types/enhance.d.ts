import { KTextSymbol } from '@/consts/sym.ts';
import { HTMLTag, NonSpecialTags, InputElementTag } from '@/global.js';

export type KChildren = HTMLKElement | Text;

export interface KOnOptions extends AddEventListenerOptions {
  /**
   * This option's priority is higher than `once`.
   * - when this is `1`, go with `once: true`.
   */
  triggerLimit?: number;
}

export type KListener<E extends HTMLElement, K extends keyof HTMLElementEventMap> = (
  this: E,
  ev: HTMLElementEventMap[K]
) => void;

export interface KEnhanced {
  /**
   * The element's text content as maintained by KT.js.
   * - it is not recommended to use `textContent` any more
   */
  ktext: string;
  /**
   * @internal
   */
  [KTextSymbol]: Text;
}

/**
 * This is the core feature of KT.js - enhanced HTML elements.
 *
 * It combines the standard HTMLElement properties and methods
 * with KT.js enhancements defined in KEnhanced.
 */
export type HTMLKElement<T extends HTMLTag = NonSpecialTags> = (HTMLElement extends HTMLElementTagNameMap[T]
  ? HTMLElement
  : HTMLElementTagNameMap[T]) &
  KEnhanced;

export type HTMLKEnhancedInputElement<T extends InputElementTag = InputElementTag> = HTMLKElement<T>;
