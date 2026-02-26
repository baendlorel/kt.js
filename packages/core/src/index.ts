import '@ktjs/shared';

export * from './h/index.js';

export { applyAttr } from './h/attr.js';

// Export JSX functionality
export * from './jsx/index.js';
export { svg, mathml, svg as svgRuntime, mathml as mathmlRuntime } from './jsx/jsx-runtime.js';
export { svg as createSVGElement, mathml as createMathMLElement } from './h/index.js';

export * from './reactive/index.js';

// # special JSX Components
export { KTAsync } from './jsx/async.js';
export { KTFor } from './jsx/for.js';
export type { KTForProps, KTForElement } from './jsx/for.js';
export { KTConditional } from './jsx/if.js';

// # types
export type { HTMLTag, SVGTag, MathMLTag, InputElementTag } from '@ktjs/shared';
export type {
  KTRawContent,
  KTRawContents,
  KTRawAttr,
  EventHandler,
  KTAttribute,
  KTPrefixedEventAttribute,
  HTML,
} from './types/h.js';
export type * from './types/jsx.js';
export type * from './types/reactive.js';

// todo 可以考虑加入SSR服务端渲染
