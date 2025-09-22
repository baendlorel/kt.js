declare const __IS_DEV__: boolean;
// declare function TErr(message?: string, options?: ErrorOptions): never;

type otherstring = string & {};

type Constructor<T> = new (...args: any[]) => T;

type Factory<T> = (...args: any[]) => T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFn = (...args: any[]) => any;

/**
 * Normal HTML tags like `div`, `span`, `a`, etc.
 */
type HTMLTag = keyof HTMLElementTagNameMap;

/**
 * Get the tags that makes HTMLElementTagNameMap[tag] = HTMLElement
 */
type NonSpecialTags = {
  [K in keyof HTMLElementTagNameMap]: HTMLElement extends HTMLElementTagNameMap[K] ? K : never;
}[keyof HTMLElementTagNameMap];

/**
 * This is tested on 15 browsers (most popular ones)
 * - appending a text node to these tags takes no effect.
 *   - No effect means `innerText` does not include the text in the text node.
 * @see {@link src/core/h/no-text-node.ts}
 */
type NoTextNodeTag =
  | 'area'
  | 'audio'
  | 'base'
  | 'basefont'
  | 'br'
  | 'canvas'
  | 'datalist'
  | 'details'
  | 'dialog'
  | 'frameset'
  | 'head'
  | 'iframe'
  | 'img'
  | 'input'
  | 'link'
  | 'meta'
  | 'meter'
  | 'noembed'
  | 'noframes'
  | 'noscript'
  | 'optgroup'
  | 'param'
  | 'progress'
  | 'rp'
  | 'select'
  | 'style'
  | 'template'
  | 'textarea'
  | 'title'
  | 'video'
  | 'wbr'
  | 'embed'
  | 'frame'
  | 'keygen'
  | 'option';

/**
 * These fields of HTMLElement can trigger `change`.
 */
type ChangeTriggerField = 'value' | 'checked' | 'selected' | 'valueAsDate' | 'valueAsNumber';
