import type { HTMLTag } from '@/types/global.js';
import type { KTAttribute, KTRawContent, KTRawContents } from '@/types/h.js';
import type { KTHTMLElement } from '@/types/jsx.js';

import { h } from '@/h/index.js';
import { KTRef } from './ref.js';

type JSXTag =
  | HTMLTag
  | ((props?: any) => HTMLElement)
  | ((props?: any) => Promise<HTMLElement>)
  | ((props?: any) => KTHTMLElement)
  | ((props?: any) => Promise<KTHTMLElement>);

const dummyRef = { value: null } as unknown as KTRef<KTHTMLElement>;

/**
 * @param tag html tag or function component
 * @param props properties/attributes
 */
// todo 加入对k-if的全面支持
export function jsx(tag: JSXTag, props: KTAttribute = {}): KTHTMLElement {
  let ref = dummyRef;
  if (props.ref?.isKT) {
    ref = props.ref as KTRef<KTHTMLElement>;
    delete props.ref;
  }

  let el: KTHTMLElement;
  const redraw = (newProps?: KTAttribute) => {
    props = newProps ? { ...props, ...newProps } : props;
    props.ref = ref; // inherit the ref

    const old = el;
    el = jsx(tag, props);
    old.replaceWith(el);
    return el;
  };

  if ('k-if' in props && !props['k-if']) {
    el = document.createComment('k-if') as unknown as KTHTMLElement;
    ref.value = el as KTHTMLElement;
    el.redraw = redraw;
    return el;
  }

  // Handle function components
  if (typeof tag === 'function') {
    el = tag(props) as KTHTMLElement;
    el.redraw = el.redraw ?? redraw;
    ref.value = el;
    return el;
  } else {
    // & deal children here
    let children = props.children as KTRawContents & { ref?: any };
    delete props.children;

    el = h(tag, props, children) as KTHTMLElement;
    el.redraw = redraw;
    ref.value = el;
    return el;
  }
}

/**
 * Fragment support - returns an array of children
 * Note: kt.js doesn't have a real Fragment concept,
 */
export function Fragment(props: { children?: KTRawContent }): HTMLElement {
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
 * @param creator
 * @returns created element
 */
export function createRedrawable(creator: () => KTHTMLElement): KTHTMLElement {
  let element = creator();
  const redraw = () => {
    const old = element;
    element = creator();
    old.replaceWith(element);
    element.redraw = redraw;
    return element;
  };
  element.redraw = redraw;
  return element;
}
