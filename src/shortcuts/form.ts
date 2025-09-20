import { bindParams } from 'bind-params';
import { h } from '@/core/h/index.js';

/** Alias for h('input', ...) - Input field */
export const input: HAlias<'input'> = bindParams(h<'input'>, 'input');

/** Alias for h('select', ...) - Select */
export const select: HAlias<'select'> = bindParams(h<'select'>, 'select');

/** Alias for h('option', ...) - Options */
export const option: HAlias<'option'> = bindParams(h<'option'>, 'option');

/** Alias for h('optgroup', ...) - Option Groups */
export const optgroup: HAlias<'optgroup'> = bindParams(h<'optgroup'>, 'optgroup');

/** Alias for h('textarea', ...) - Textarea */
export const textarea: HAlias<'textarea'> = bindParams(h<'textarea'>, 'textarea');

/** Alias for h('form', ...) - Form */
export const form: HAlias<'form'> = bindParams(h<'form'>, 'form');

/** Alias for h('label', ...) - Label */
export const label: HAlias<'label'> = bindParams(h<'label'>, 'label');
