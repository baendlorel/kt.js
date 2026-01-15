import type { HTMLTag } from '../types/global.js';
import type { KTAttribute, KTRawContent, KTRawContents } from '../types/h.js';
import { h } from '../h/index.js';
import { KTRef } from './ref.js';

/**
 * @param tag html tag or function component
 * @param props properties/attributes
 * @param _metadata metadata is ignored
 */
export function jsx<T extends HTMLTag>(
  tag: T | Function,
  props: KTAttribute = {},
  ..._metadata: any[]
): (HTMLElementTagNameMap[T] | HTMLElement) & { redraw: (props: KTAttribute) => void } {
  // todo 新增重绘api
  // Handle function components
  if (typeof tag === 'function') {
    const propObj = typeof props === 'string' ? { class: props } : props || {};
    const children = propObj.children;

    return tag({ ...propObj, children });
  }

  const children = props.children as KTRawContents & { ref?: any };
  delete props.children;

  // deal with ref attribute
  // todo 可以支持ref是一个同步的初始化函数的情况?
  const ref = props.ref?.isKT ? (props.ref as KTRef<HTMLElementTagNameMap[T]>) : null;
  if (ref) {
    delete props.ref;
  }

  const el = h(tag as T, props, children) as HTMLElementTagNameMap[T];
  if (ref) {
    ref.value = el;
  }
  return el;
}

/**
 * Fragment support - returns an array of children
 * Note: kt.js doesn't have a real Fragment concept,
 */
export function Fragment(props: { children?: KTRawContent }): HTMLElement {
  window.__ktjs__.throws("kt.js doesn't have a Fragment concept");

  // const { children } = props || {};

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
