declare const __IS_DEV__: boolean;

type Constructor<T> = new (...args: unknown[]) => T;

type Factory<T> = (...args: unknown[]) => T;

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
