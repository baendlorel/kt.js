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

/**
 * @param tag html tag or function component
 * @param props properties/attributes
 */
export function jsx(tag: JSXTag, props: KTAttribute = {}): KTHTMLElement {
  const ref = props.ref?.isKT ? (props.ref as KTRef<KTHTMLElement>) : null;
  if (ref) {
    delete props.ref;
  }

  // Handle function components
  if (typeof tag === 'function') {
    let el = tag(props) as KTHTMLElement;
    if (!el.redraw) {
      el.redraw = (newProps?: KTAttribute) => {
        props = newProps ? { ...props, ...newProps } : props;

        // $ same as below
        const old = el;
        el = tag(props) as KTHTMLElement;
        el.redraw = old.redraw; // inherit redraw
        if (ref) {
          ref.value = el;
        }
        old.replaceWith(el);
      };
    }

    if (ref) {
      ref.value = el;
    }
    return el;
  } else {
    // & deal children here
    let children = props.children as KTRawContents & { ref?: any };
    delete props.children;

    let el = h(tag, props, children) as KTHTMLElement;
    if (ref) {
      ref.value = el;
    }

    el.redraw = (newProps?: KTAttribute, newChildren?: KTRawContent) => {
      props = newProps ? { ...props, ...newProps } : props;
      children = (newChildren ?? children) as KTRawContents & { ref?: any };

      // $ same as above
      const old = el;
      el = h(tag, props, children) as KTHTMLElement;
      el.redraw = old.redraw; // inherit redraw
      if (ref) {
        ref.value = el;
      }
      old.replaceWith(el);
    };

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
