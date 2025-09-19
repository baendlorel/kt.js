type HTMLElementTag = keyof HTMLElementTagNameMap;

type KChildren = HTMLKEnhancedElement | Text;

interface KEnhanced {
  /**
   * Unique numeric identifier for a KT.js enhanced element instance.
   * Used internally to track and distinguish enhanced elements.
   */
  kid: number;

  /**
   * Marker property that is always true for enhanced elements.
   */
  isKT: true;

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
  kon: <El extends HTMLElement, K extends keyof HTMLElementEventMap>(
    this: El,
    type: K,
    listener: KListener<HTMLElement, K>,
    options?: KOnOptions
  ) => KListener<El, K>;

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
  koff: <El extends HTMLElement, K extends keyof HTMLElementEventMap>(
    this: El,
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
  kmount: <El extends HTMLKEnhancedElement>(this: El, element: HTMLKEnhancedElement) => El;
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
