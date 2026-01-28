export * from './h/index.js';

// Export JSX functionality
export * from './jsx/index.js';

export { KTAsync } from './jsx/async.js';
export { KTFor, KTForConst } from './jsx/for.js';
export type { KTForProps, KTForAnchor } from './jsx/for.js';

export type { HTMLTag } from './types/global.js';
export type { KTRawContent, KTRawContents, KTRawAttr, EventHandler, KTAttribute } from './types/h.js';
export type * from './types/jsx.js';

// todo 可以考虑加入SSR服务端渲染
