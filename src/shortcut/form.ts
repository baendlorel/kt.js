import { bindParams } from 'bind-params';
import { h } from '@/core/h/index.js';

/** Alias for h('input', ...) - Input field */
export const input = bindParams(h, 'input');

/** Alias for h('select', ...) - Select */
export const select = bindParams(h, 'select');

/** Alias for h('option', ...) - Options */
export const option = bindParams(h, 'option');

/** Alias for h('optgroup', ...) - Option Groups */
export const optgroup = bindParams(h, 'optgroup');

/** Alias for h('textarea', ...) - Textarea */
export const textarea = bindParams(h, 'textarea');

/** Alias for h('form', ...) - Form */
export const form = bindParams(h, 'form');

/** Alias for h('label', ...) - Label */
export const label = bindParams(h, 'label');
