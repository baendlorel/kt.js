import { HTMLTag } from '@ktjs/shared/types';

/**
 * # Specialized Ehancement
 *
 * Different elements should be enhanced in different ways. For example, we should have `kvalue` to handle `<input>` values.
 * While we have no need to have `ktext` for `<br>` tags.
 *
 * ## Tags where appending a text node has no effect
 *
 * There are some HTML elements that appending a text node as their child takes no effect.
 * They are mostly void elements, but some non-void elements are also included.
 *
 * ## What means no effect
 * 1. appending a text node to these tags takes no effect.
 * 2. No effect means `innerText` does not include the text in the text node.
 *
 * After testing 15 browsers testing, I found that these elements are:
 *
 * - FireFox(as base):
 *   - script -- this is skipped due to some bugs in The World 7
 *   - area, audio, base, basefont, br, canvas, datalist, details, dialog, frameset, head, iframe, img, input, link, meta, meter, noembed, noframes, noscript, optgroup, param, progress, rp, select, style, template, textarea, title, video, wbr
 * - 360: embed
 * - 2345: embed
 * - maxthon: embed
 * - quark: embed
 * - uc: embed
 * - chrome: embed,frame
 * - qq: embed
 * - sogou: embed
 * - cent: embed
 * - world: embed,frame,keygen,option
 * - opera: embed
 * - edge: embed
 * - liebao: embed
 * - 360turbo: embed,frame
 *
 * Since `Set.prototype.has` is about 80 times faster than `Array.prototype.includes`,
 * We put these tags into a `Set` object.
 */
const INVALID_TAGS = {
  area: true,
  audio: true,
  base: true,
  basefont: true,
  br: true,
  canvas: true,
  datalist: true,
  details: true,
  dialog: true,
  frameset: true,
  head: true,
  iframe: true,
  img: true,
  input: true,
  link: true,
  meta: true,
  meter: true,
  noembed: true,
  noframes: true,
  noscript: true,
  optgroup: true,
  param: true,
  progress: true,
  rp: true,
  select: true,
  style: true,
  template: true,
  textarea: true,
  title: true,
  video: true,
  wbr: true,
  embed: true,
  frame: true,
  keygen: true,
  option: true,
};

export function notSupportTextNode(tag: HTMLTag): boolean {
  return (INVALID_TAGS as any)[tag];
}
