import { $forEach, $isArray } from '@ktjs/shared';
import type { KTRef } from '../reactive/ref.js';
import type { KTReactive } from '../types/reactive.js';
import type { KTRawContent } from '../types/h.js';

import { $setRef, isKT, toReactive } from '../reactive/index.js';

export interface FragmentProps<T extends HTMLElement = HTMLElement> {
  /** Array of child elements, supports reactive arrays */
  children: T[] | KTReactive<T[]>;

  /** element key function for optimization (future enhancement) */
  key?: (element: T, index: number, array: T[]) => any;

  /** ref to get the anchor node */
  ref?: KTRef<JSX.Element>;
}

/**
 * Fragment - Container component for managing arrays of child elements
 *
 * Features:
 * 1. Returns a comment anchor node, child elements are inserted after the anchor
 * 2. Supports reactive arrays, automatically updates DOM when array changes
 * 3. Basic version uses simple replacement algorithm (remove all old elements, insert all new elements)
 * 4. Future enhancement: key-based optimization
 *
 * Usage example:
 * ```tsx
 * const children = ref([<div>A</div>, <div>B</div>]);
 * const fragment = <Fragment children={children} />;
 * document.body.appendChild(fragment);
 *
 * // Automatic update
 * children.value = [<div>C</div>, <div>D</div>];
 * ```
 */
export function Fragment<T extends HTMLElement = HTMLElement>(props: FragmentProps<T>): JSX.Element {
  // key parameter reserved for future enhancement, currently unused
  // const { key: _key } = props;
  const redraw = () => {
    const newElements = childrenRef.value;
    const parent = anchor.parentNode;

    if (!parent) {
      // If anchor is not in DOM, only update internal state
      elements.length = 0;
      for (let i = 0; i < newElements.length; i++) {
        elements.push(newElements[i]);
      }
      return;
    }

    // Simple replacement algorithm: remove all old elements, insert all new elements
    // todo Future enhancement: key-based optimization

    // 1. Remove all old elements
    for (let i = 0; i < elements.length; i++) {
      (elements[i] as ChildNode).remove();
    }

    // 2. Insert all new elements
    const fragment = document.createDocumentFragment();
    elements.length = 0;

    for (let i = 0; i < newElements.length; i++) {
      const element = newElements[i];
      elements.push(element);
      fragment.appendChild(element);
    }

    // Insert after anchor
    parent.insertBefore(fragment, anchor.nextSibling);
  };

  let initialized = false;
  const childrenRef = toReactive(props.children, redraw);
  const elements: JSX.Element[] = [];
  const anchor = document.createComment('kt-fragment');

  // Observe DOM insertion
  const observer = new MutationObserver(() => {
    if (anchor.isConnected && !initialized) {
      initialized = true;
      redraw();
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Set ref reference
  $setRef(props, anchor);

  return anchor as unknown as JSX.Element;
}

/**
 * Convert KTRawContent to HTMLElement array
 */
export function convertChildrenToElements(children: KTRawContent): HTMLElement[] {
  const elements: HTMLElement[] = [];

  const processChild = (child: any): void => {
    if (child == null || child === false || child === true) {
      // Ignore null, undefined, false, true
      return;
    }

    if ($isArray(child)) {
      // Recursively process array
      $forEach(child, processChild);
      return;
    }

    if (typeof child === 'string' || typeof child === 'number') {
      // & Wrap text in span element? No! use text node instead
      const textNode = document.createTextNode(String(child));
      elements.push(textNode as unknown as HTMLElement);
      return;
    }

    if (child instanceof HTMLElement) {
      elements.push(child);
      return;
    }

    if (isKT(child)) {
      processChild(child.value);
      return;
    }

    // Other types ignored or converted to string
    $warn('Fragment: unsupported child type', child);
  };

  processChild(children);
  return elements;
}
