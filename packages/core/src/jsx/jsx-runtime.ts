import type { JSXCreator, MathMLCreator, SVGCreator } from '../types/jsx.js';

import { h, mathml as _mathml, svg as _svg } from '../h/index.js';
import { $refToSelf } from '../reactable/ref.js';

import { createFragment } from './fragment.js';
import { jsxh } from './common.js';

export const jsx: JSXCreator = (tag, props) => $refToSelf(props, jsxh(tag, props));
export const svg: SVGCreator = (tag, props) => $refToSelf(props, _svg(tag, props, props.children));
export const mathml: MathMLCreator = (tag, props) => $refToSelf(props, _mathml(tag, props, props.children));

export { svg as svgRuntime, mathml as mathmlRuntime };

/**
 * Fragment support - returns an array of children
 * Enhanced Fragment component that manages arrays of elements
 */
export const Fragment = createFragment;

/**
 * JSX Development runtime - same as jsx but with additional dev checks
 */
export const jsxDEV: typeof jsx = (...args) => {
  // console.log('JSX DEV called:', args[0], Array.isArray(args[1]?.children));
  // console.log('children', (args[1] as any)?.children);
  return jsx(...args);
};

/**
 * JSX runtime for React 17+ automatic runtime
 * This is called when using jsx: "react-jsx" or "react-jsxdev"
 */
// export const jsxs: typeof jsx = (...args) => {
//   console.log('JSXS:', args[1]?.children?.length);
//   return jsx(...args);
// };
export const jsxs = jsx;

// Export h as the classic JSX factory for backward compatibility
export { h, h as createElement };
