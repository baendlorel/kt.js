import type { HTMLTag, KTRawAttr, KTRawContent } from '@ktjs/core';
import { h, ktnull } from '@ktjs/core';

/**
 * JSX Factory function - called by JSX transpiler for each JSX element
 * This is for classic JSX transform (jsx: "react")
 * @param tag HTML tag name or component
 * @param props Element attributes/props
 * @param children Child elements
 */
export function jsx<T extends HTMLTag>(
  tag: T,
  props: KTRawAttr & { children?: KTRawContent },
  ...children: KTRawContent[]
): HTMLElement {
  const { children: propsChildren, ...attrs } = props || {};

  // Combine children from props and varargs
  let allChildren: KTRawContent = propsChildren;

  if (children.length > 0) {
    if (propsChildren) {
      allChildren = Array.isArray(propsChildren) ? [...propsChildren, ...children] : [propsChildren, ...children];
    } else {
      allChildren = children.length === 1 ? children[0] : children;
    }
  }

  return h(tag, attrs, allChildren);
}

/**
 * Fragment support - returns an array of children
 * Note: kt.js doesn't have a real Fragment concept,
 * so we return ktnull for empty fragments or flatten children
 */
export function Fragment(props: { children?: KTRawContent }): HTMLElement | typeof ktnull {
  const { children } = props || {};

  if (!children) {
    return ktnull;
  }

  // If single child, return it directly
  if (!Array.isArray(children)) {
    return children as HTMLElement;
  }

  // For multiple children, create a document fragment wrapper
  // This is a limitation - JSX fragments must be wrapped in kt.js
  const wrapper = document.createElement('div');
  wrapper.setAttribute('data-kt-fragment', 'true');

  children.forEach((child) => {
    if (child && child !== ktnull) {
      if (typeof child === 'string') {
        wrapper.appendChild(document.createTextNode(child));
      } else if (child instanceof HTMLElement) {
        wrapper.appendChild(child);
      }
    }
  });

  return wrapper;
}

/**
 * JSX Development runtime - same as jsx but with additional dev checks
 */
export const jsxDEV = jsx;

/**
 * JSX runtime for React 17+ automatic runtime
 * This is called when using jsx: "react-jsx" or "react-jsxdev"
 */
export const jsxs = jsx;

// Export h as the classic JSX factory for backward compatibility
export { h, h as createElement };
