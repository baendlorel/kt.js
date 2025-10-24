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

/** Alias for h('h1', ...) - Heading level 1 */
export const h1: HAlias<'h1'> = bindParams(h<'h1'>, 'h1');

/** Alias for h('h2', ...) - Heading level 2 */
export const h2: HAlias<'h2'> = bindParams(h<'h2'>, 'h2');

/** Alias for h('h3', ...) - Heading level 3 */
export const h3: HAlias<'h3'> = bindParams(h<'h3'>, 'h3');

/** Alias for h('h4', ...) - Heading level 4 */
export const h4: HAlias<'h4'> = bindParams(h<'h4'>, 'h4');

/** Alias for h('h5', ...) - Heading level 5 */
export const h5: HAlias<'h5'> = bindParams(h<'h5'>, 'h5');

/** Alias for h('h6', ...) - Heading level 6 */
export const h6: HAlias<'h6'> = bindParams(h<'h6'>, 'h6');

/** Alias for h('ul', ...) - Unordered list */
export const ul: HAlias<'ul'> = bindParams(h<'ul'>, 'ul');

/** Alias for h('ol', ...) - Ordered list */
export const ol: HAlias<'ol'> = bindParams(h<'ol'>, 'ol');

/** Alias for h('li', ...) - List item */
export const li: HAlias<'li'> = bindParams(h<'li'>, 'li');

/** Alias for h('form', ...) - Form container */
export const form: HAlias<'form'> = bindParams(h<'form'>, 'form');

/** Alias for h('input', ...) - Input field */
export const input: HAlias<'input'> = bindParams(h<'input'>, 'input');

/** Alias for h('button', ...) - Button element */
export const button: HAlias<'button'> = bindParams(h<'button'>, 'button');
