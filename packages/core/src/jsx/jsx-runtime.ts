import type { JSXTag } from '@ktjs/shared';
import type { KTAttribute, KTRawContent } from '../types/h.js';
import type { JSX } from '../types/jsx.js';

import { h } from '../h/index.js';
import { $initRef, isComputed, type KTRef, ref } from '../reactive/index.js';
import { convertChildrenToElements, Fragment as FragmentArray } from './fragment.js';
import { kelse, kif, kifelseApply } from './if.js';
import { jsxh, placeholder } from './common.js';

/**
 * @param tag html tag or function component
 * @param props properties/attributes
 */
export function jsx(tag: JSXTag, props: KTAttribute): JSX.Element {
  if (isComputed(props.ref)) {
    $throw('Cannot assign a computed value to an element.');
  }

  if ('k-if' in props) {
    return kif(tag, props);
  }
  if ('k-else' in props) {
    return kelse(tag, props);
  }

  const el = jsxh(tag, props);
  $initRef(props, el);
  kifelseApply(el);
  return el;
}

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

/**
 * A helper to create redrawable elements
 * ```tsx
 * export function MyComponent() {
 *    let aa = 10;
 *    // ...
 *    // aa might be changed
 *    return createRedrawable(() => <div>{aa}</div>);
 * }
 * ```
 * Then the returned element has a `redraw` method to redraw itself with new values.
 * @param creator a simple creator function that returns an element
 * @returns created element's ref
 */
export function createRedrawable<T>(creator: () => T): KTRef<T> & { redraw: () => T } {
  const elRef = ref<T>() as KTRef<T> & { redraw: () => T };

  const redraw = () => {
    elRef.value = creator(); // ref setter automatically calls replaceWith
    elRef.redraw = redraw;
    return elRef.value;
  };

  redraw();
  return elRef;
}
