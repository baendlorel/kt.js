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
export function needKText(tag: HTMLTag): boolean {
  return !(INVALID_TAGS as Set<string>).has(tag);
}

const INVALID_TAGS = new Set([
  'area',
  'audio',
  'base',
  'basefont',
  'br',
  'canvas',
  'datalist',
  'details',
  'dialog',
  'frameset',
  'head',
  'iframe',
  'img',
  'input',
  'link',
  'meta',
  'meter',
  'noembed',
  'noframes',
  'noscript',
  'optgroup',
  'param',
  'progress',
  'rp',
  'select',
  'style',
  'template',
  'textarea',
  'title',
  'video',
  'wbr',
  'embed',
  'frame',
  'keygen',
  'option',
] as const);
