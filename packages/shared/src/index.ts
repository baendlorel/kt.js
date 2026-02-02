// Shared utilities and cached native methods for kt.js framework

// import './misc/symbol-polyfill.js';

// Re-export all utilities
export * from './utils/native.js';
export * from './utils/error.js';
export * from './utils/dom.js';
export * from './utils/misc.js';
export * from './utils/url.js';
export * from './consts/index.js';
export type * from './types/global.js';

Object.defineProperty(window, '__ktjs__', { value: '__VERSION__' });
