import { bindParams } from 'bind-params';
import { h } from '@/core/h/index.js';

/** Alias for h('div', ...) - Block-level container */
export const div = bindParams(h, 'div');

/** Alias for h('span', ...) - Inline container */
export const span = bindParams(h, 'span');

/** Alias for h('a', ...) - Hyperlink */
export const a = bindParams(h, 'a');

/** Alias for h('img', ...) - Image */
export const img = bindParams(h, 'img');

/** Alias for h('p', ...) - Paragraph */
export const p = bindParams(h, 'p');

/** Alias for h('ul', ...) - Unordered list */
export const ul = bindParams(h, 'ul');

/** Alias for h('li', ...) - List item */
export const li = bindParams(h, 'li');

/** Alias for h('mark', ...) - Marked/highlighted text */
export const mark = bindParams(h, 'mark');

/** Alias for h('time', ...) - Time/date */
export const time = bindParams(h, 'time');

/** Alias for h('code', ...) - Inline code */
export const code = bindParams(h, 'code');

/** Alias for h('pre', ...) - Preformatted text */
export const pre = bindParams(h, 'pre');
