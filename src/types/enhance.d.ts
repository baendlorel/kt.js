//__EXPORT__FLAG__
type KChildren = HTMLKEnhancedElement | Text;

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

interface KEnhancedPrivates {
  /**
   * Unique numeric identifier for a KT.js enhanced element instance.
   * Used internally to track and distinguish enhanced elements.
   */
  id: number;

  text: Text;
}

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
   * - `triggerLimit` option is the max trigger time of a listner.
   *   - its priority is higher than `once` option.
   *   - if it is `1`, will fallback to `once` behavior.
   *
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
   *
   * Note: the original inline comment said "Equivalent to `element.appendChild(this)`"
   * which does not apply to event removal — keep this method focused on
   * removing listeners according to the project's implementation.
   *
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
   *
   * @param element the DOM element to mount into
   * @returns the mounted enhanced element (this)
   */
  kmount: <E extends HTMLKEnhancedElement>(this: E, element: HTMLKEnhancedElement) => E;
}

/**
 * This is the core feature of KT.js - enhanced HTML elements.
 *
 * It combines the standard HTMLElement properties and methods
 * with KT.js enhancements defined in KEnhanced.
 */
//__EXPORT__FLAG__
type HTMLKEnhancedElement<T extends HTMLTag = NonSpecialTags> =
  (HTMLElement extends HTMLElementTagNameMap[T] ? HTMLElement : HTMLElementTagNameMap[T]) &
    KEnhanced;

//__EXPORT__FLAG__
type HTMLKEnhancedInputElement<T extends InputElementTag = InputElementTag> =
  (HTMLElement extends HTMLElementTagNameMap[T] ? HTMLElement : HTMLElementTagNameMap[T]) &
    KEnhanced;
