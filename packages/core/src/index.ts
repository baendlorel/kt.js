import '@ktjs/shared';

export * from './h/index.js';

// Export JSX functionality
export * from './jsx/index.js';

export * from './reactive/index.js';

// # special JSX Components
export { KTAsync } from './jsx/async.js';
export { KTFor } from './jsx/for.js';
export type { KTForProps, KTForElement } from './jsx/for.js';

// # types
export type { HTMLTag, SVGTag, MathMLTag, InputElementTag } from '@ktjs/shared';
export type {
  KTRawContent,
  KTRawContents,
  KTRawAttr,
  EventHandler,
  KTAttribute,
  KTPrefixedEventAttribute,
} from './types/h.js';
export type * from './types/jsx.js';
export type * from './types/reactive.js';

// todo 可以考虑加入SSR服务端渲染
