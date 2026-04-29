export * from './utils/native.js';
export * from './utils/dom.js';
export * from './utils/misc.js';
export * from './utils/url.js';

export type * from './types/global.js';
export type * from './types/misc.js';

Reflect.set(window, '__ktjs__', '__VERSION__');
