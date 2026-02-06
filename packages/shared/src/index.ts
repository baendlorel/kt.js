// Shared utilities and cached native methods for kt.js framework

export * from './consts/index.js';
export * from './utils/native.js';
export * from './utils/dom.js';
export * from './utils/misc.js';
export * from './utils/url.js';
export * from './consts/index.js';
export type * from './types/global.js';
export type * from './types/macros.js';

// incase that symbol is not supported
import './misc/symbol-polyfill.js';

Object.defineProperty(window, '__ktjs__', { value: '__VERSION__' });
