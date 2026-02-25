import type { JSXTag, MathMLTag, SVGTag } from '@ktjs/shared';
import type { KTAttribute, KTRawContent } from '../types/h.js';
import type { JSX } from '../types/jsx.js';

import { h, mathml as _mathml, svg as _svg } from '../h/index.js';
import { $initRef, isComputed, type KTRef, ref } from '../reactive/index.js';
import { convertChildrenToElements, Fragment as FragmentArray } from './fragment.js';
import { jsxh, placeholder } from './common.js';

function create(creator: (tag: any, props: KTAttribute) => JSX.Element, tag: any, props: KTAttribute) {
  if (props.ref && isComputed(props.ref)) {
    $throw('Cannot assign a computed value to an element.');
  }
  const el = creator(tag, props);
  $initRef(props, el);
  return el;
}

export const jsx = (tag: JSXTag, props: KTAttribute): JSX.Element => create(jsxh, tag, props);
export const svg = (tag: SVGTag, props: KTAttribute): JSX.Element => create(_svg, tag, props);
export const mathml = (tag: MathMLTag, props: KTAttribute): JSX.Element => create(_mathml, tag, props);
export { svg as svgRuntime, mathml as mathmlRuntime };

/**
 * Fragment support - returns an array of children
 * Enhanced Fragment component that manages arrays of elements
 */
export function Fragment(props: { children?: KTRawContent }): JSX.Element {
  const { children } = props ?? {};

  if (!children) {
    return placeholder('kt-fragment-empty');
  }

  const elements = convertChildrenToElements(children);

  return FragmentArray({ children: elements });
}

/**
 * JSX Development runtime - same as jsx but with additional dev checks
 */
export const jsxDEV: typeof jsx = (...args) => {
  // console.log('JSX DEV called:', ...args);
  // console.log('children', (args[1] as any)?.children);
  return jsx(...args);
};

/**
 * JSX runtime for React 17+ automatic runtime
 * This is called when using jsx: "react-jsx" or "react-jsxdev"
 */
export const jsxs = jsx;

// Export h as the classic JSX factory for backward compatibility
export { h, h as createElement };
