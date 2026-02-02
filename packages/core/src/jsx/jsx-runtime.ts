import type { HTMLTag } from '@ktjs/shared';
import type { KTAttribute, KTRawContent } from '../types/h.js';

import { h } from '../h/index.js';
import { isKTRef, type KTRef, ref } from './ref.js';

type JSXTag = HTMLTag | ((props?: any) => HTMLElement) | ((props?: any) => Promise<HTMLElement>);

const dummyRef = { value: null } as unknown as KTRef<JSX.Element>;

const create = (tag: JSXTag, props: KTAttribute): HTMLElement => {
  if (typeof tag === 'function') {
    return tag(props) as HTMLElement;
  } else {
    return h(tag, props, props.children) as HTMLElement;
  }
};

const placeholder = () => document.createComment('k-if') as unknown as JSX.Element;

/**
 * @param tag html tag or function component
 * @param props properties/attributes
 */
export function jsx(tag: JSXTag, props: KTAttribute): JSX.Element {
  const maybeDummyRef = isKTRef<JSX.Element>(props.ref) ? props.ref : dummyRef;

  let el: JSX.Element;
  if ('k-if' in props) {
    const kif = props['k-if'];
    let condition = kif; // assume boolean by default

    // Handle reactive k-if
    if (isKTRef(kif)) {
      kif.addOnChange((newValue, oldValue) => {
        if (newValue === oldValue) {
          return;
        }
        const oldEl = el;
        el = newValue ? create(tag, props) : placeholder();
        (oldEl as ChildNode).replaceWith(el);
        maybeDummyRef.value = el;
      });
      condition = kif.value;
    }

    if (!condition) {
      // & make comment placeholder in case that ref might be redrawn later
      el = placeholder();
      maybeDummyRef.value = el;
      return el;
    }
  }

  el = create(tag, props);
  maybeDummyRef.value = el;
  return el;
}

/**
 * Fragment support - returns an array of children
 * Note: kt.js doesn't have a real Fragment concept,
 */
export function Fragment(_props: { children?: KTRawContent }): HTMLElement {
  throw new Error("kt.js doesn't have a Fragment concept");

  // const { children } = props ?? {};

  // if (!children) {
  //   return ;
  // }

  // // If single child, return it directly
  // if (!Array.isArray(children)) {
  //   return children as HTMLElement;
  // }

  // // For multiple children, create a document fragment wrapper
  // // This is a limitation - JSX fragments must be wrapped in kt.js
  // const wrapper = document.createElement('div');
  // wrapper.setAttribute('data-kt-fragment', 'true');

  // children.forEach((child) => {
  //     if (typeof child === 'string') {
  //       wrapper.appendChild(document.createTextNode(child));
  //     } else if (child instanceof HTMLElement) {
  //       wrapper.appendChild(child);
  //     }
  // });

  // return wrapper;
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
