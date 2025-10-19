import { KIdSymbol, KTextSymbol } from '@/consts/sym.ts';

declare global {
  //__EXPORT__FLAG__
  type KChildren = HTMLKElement | Text;

  interface KOnOptions extends AddEventListenerOptions {
    /**
     * This option's priority is higher than `once`.
     * - when this is `1`, go with `once: true`.
     */
    triggerLimit?: number;
  }

  type KListener<E extends HTMLElement, K extends keyof HTMLElementEventMap> = (
    this: E,
    ev: HTMLElementEventMap[K]
  ) => any;

  interface KEnhanced {
    /**
     * The element's text content as maintained by KT.js.
     * - it is not recommended to use `textContent` any more
     */
    ktext: string;

    /**
     * Array of children for this enhanced element.
     * - read as `Array`, not `HTMLCollection`.
     * - can be set to replace all child nodes.
     */
    kchildren: KChildren[];

    /**
     * Attach an event listener to the element and return a typed listener
     * function. The generic parameters ensure the listener and returned
     * function are correctly typed for the element and event.
     * @param type event type (e.g., 'click')
     * @param listener event listener callback
     * @param options listener options or capture flag
     * @returns the listener function typed for the specific element and event
     */
    kon: <E extends HTMLElement, K extends keyof HTMLElementEventMap>(
      this: E,
      type: K,
      listener: KListener<HTMLElement, K>,
      options?: KOnOptions
    ) => KListener<E, K>;

    /**
     * Remove or detach an event listener from the element. Semantically this
     * is the counterpart to `kon` and accepts the same arguments. Returns
     * nothing.
     * @param type event type
     * @param listener event listener to remove
     * @param options listener options
     */
    koff: <E extends HTMLElement, K extends keyof HTMLElementEventMap>(
      this: E,
      type: K,
      listener: KListener<HTMLElement, K>,
      options?: KOnOptions
    ) => void;

    /**
     * Mount this enhanced element onto a host DOM element. This typically
     * appends the enhanced element to the supplied `element` and performs any
     * needed setup. Returns the mounted enhanced element.
     * @param element the DOM element to mount into
     * @returns this
     */
    kmount: <E extends HTMLKElement>(this: E, element: HTMLKElement) => E;
  }

  interface KEnhancedPrivates {
    /**
     * @internal
     */
    [KIdSymbol]: number;

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
  //__EXPORT__FLAG__
  type HTMLKElement<T extends HTMLTag = NonSpecialTags> =
    (HTMLElement extends HTMLElementTagNameMap[T] ? HTMLElement : HTMLElementTagNameMap[T]) &
      KEnhanced &
      KEnhancedPrivates;

  //__EXPORT__FLAG__
  type HTMLKEnhancedInputElement<T extends InputElementTag = InputElementTag> = HTMLKElement<T>;
}
