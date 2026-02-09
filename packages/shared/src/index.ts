// incase that symbol is not supported
import './misc/symbol-polyfill.js';

export * from './misc/comment.js';
export * from './consts/index.js';
export * from './utils/native.js';
export * from './utils/dom.js';
export * from './utils/misc.js';
export * from './utils/url.js';
export * from './consts/index.js';
export type * from './types/global.js';
export type * from './types/macros.js';

Object.defineProperty(window, '__ktjs__', { value: '__VERSION__' });
