import { bindParams } from 'bind-params';
import { h } from '@/core/h/index.js';
import { HAlias } from '@/types/h.js';

/** Alias for h('div', ...) - Block-level container */
export const div: HAlias<'div'> = bindParams(h<'div'>, 'div');

/** Alias for h('span', ...) - Inline container */
export const span: HAlias<'span'> = bindParams(h<'span'>, 'span');

/** Alias for h('a', ...) - Hyperlink */
export const a: HAlias<'a'> = bindParams(h<'a'>, 'a');

/** Alias for h('img', ...) - Image */
export const img: HAlias<'img'> = bindParams(h<'img'>, 'img');

/** Alias for h('p', ...) - Paragraph */
export const p: HAlias<'p'> = bindParams(h<'p'>, 'p');

/** Alias for h('ul', ...) - Unordered list */
export const ul: HAlias<'ul'> = bindParams(h<'ul'>, 'ul');

/** Alias for h('li', ...) - List item */
export const li: HAlias<'li'> = bindParams(h<'li'>, 'li');

/** Alias for h('mark', ...) - Marked/highlighted text */
export const mark: HAlias<'mark'> = bindParams(h<'mark'>, 'mark');

/** Alias for h('time', ...) - Time/date */
export const time: HAlias<'time'> = bindParams(h<'time'>, 'time');

/** Alias for h('code', ...) - Inline code */
export const code: HAlias<'code'> = bindParams(h<'code'>, 'code');

/** Alias for h('pre', ...) - Preformatted text */
export const pre: HAlias<'pre'> = bindParams(h<'pre'>, 'pre');
