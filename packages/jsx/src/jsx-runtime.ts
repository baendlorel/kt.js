import type { HTMLTag, KTRawAttr, KTRawContent, KTRawContents } from '@ktjs/core';
import { h, ktnull } from '@ktjs/core';

/**
 * @param tag html tag
 * @param props properties/attributes
 * @param _metadata metadata is ignored
 */
export function jsx<T extends HTMLTag>(tag: T, props: KTRawAttr, ..._metadata: any[]): HTMLElementTagNameMap[T] {
  const propObj = typeof props === 'string' ? { class: props } : props;
  if (propObj === undefined || propObj === null) {
    return h(tag) as HTMLElementTagNameMap[T];
  }

  const children = propObj.children as KTRawContents;
  delete propObj.children;

  // deal with ref attribute
  const hasRef = 'ref' in propObj && typeof propObj.ref === 'object' && propObj.ref !== null;
  const ref = hasRef ? propObj.ref : null;
  if (hasRef) {
    delete propObj.ref;
  }

  const el = h(tag, propObj, children) as HTMLElementTagNameMap[T];
  if (hasRef) {
    ref.value = el;
    ref.update = () => {
      const old = ref.value as HTMLElement;
      ref.value = h(tag, propObj, children) as HTMLElementTagNameMap[T];
      old.replaceWith(ref.value);
      return ref.value;
    };
  }
  return el;
}

/**
 * Fragment support - returns an array of children
 * Note: kt.js doesn't have a real Fragment concept,
 * so we return ktnull for empty fragments or flatten children
 */
export function Fragment(props: { children?: KTRawContent }): HTMLElement | typeof ktnull {
  window.__ktjs__.throws("kt.js doesn't have a Fragment concept");

  // const { children } = props || {};

  // if (!children) {
  //   return ktnull;
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
  //   if (child && child !== ktnull) {
  //     if (typeof child === 'string') {
  //       wrapper.appendChild(document.createTextNode(child));
  //     } else if (child instanceof HTMLElement) {
  //       wrapper.appendChild(child);
  //     }
  //   }
  // });

  // return wrapper;
}

/**
 * JSX Development runtime - same as jsx but with additional dev checks
 */
export const jsxDEV: typeof jsx = (...args) => {
  console.log('JSX DEV called:', ...args);
  console.log('chilren', (args[1] as any)?.children);
  return jsx(...args);
};

/**
 * JSX runtime for React 17+ automatic runtime
 * This is called when using jsx: "react-jsx" or "react-jsxdev"
 */
export const jsxs = jsx;

// Export h as the classic JSX factory for backward compatibility
export { h, h as createElement };
