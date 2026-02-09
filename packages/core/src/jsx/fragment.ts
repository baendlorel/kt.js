import type { KTRef } from '../reactive/ref.js';
import type { KTReactive } from '../reactive/index.js';
import { $setRef, isRef, toReactive } from '../reactive/index.js';
import type { KTRawContent } from '../types/h.js';

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
  /** Initial rendering */
  const renderInitial = () => {
    const elements = childrenRef.value;
    currentElements.length = 0;

    // Create document fragment
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      currentElements.push(element);
      fragment.appendChild(element);
    }

    // Store reference
    (anchor as any).__kt_fragment_list__ = currentElements;

    // Insert if anchor already has parent
    const parent = anchor.parentNode;
    if (parent && !initialInserted) {
      parent.insertBefore(fragment, anchor.nextSibling);
      initialInserted = true;
    }
  };

  // Called when children change
  const redraw = () => {
    const newElements = childrenRef.value;
    const parent = anchor.parentNode;

    if (!parent) {
      // If anchor is not in DOM, only update internal state
      currentElements.length = 0;
      for (let i = 0; i < newElements.length; i++) {
        currentElements.push(newElements[i]);
      }
      (anchor as any).__kt_fragment_list__ = currentElements;
      return;
    }

    const oldElements = currentElements;

    // Simple replacement algorithm: remove all old elements, insert all new elements
    // Future enhancement: key-based optimization

    // 1. Remove all old elements
    for (let i = 0; i < oldElements.length; i++) {
      const element = oldElements[i];
      element.remove();
    }

    // 2. Insert all new elements
    const fragment = document.createDocumentFragment();
    currentElements.length = 0;

    for (let i = 0; i < newElements.length; i++) {
      const element = newElements[i];
      currentElements.push(element);
      fragment.appendChild(element);
    }

    // Insert after anchor
    parent.insertBefore(fragment, anchor.nextSibling);
    initialInserted = true;

    // Update stored reference
    (anchor as any).__kt_fragment_list__ = currentElements;
  };

  // key parameter reserved for future enhancement, currently unused
  const { key: _key } = props;

  const childrenRef = toReactive(props.children, redraw);
  const anchor = document.createComment('kt-fragment') as unknown as JSX.Element;

  // Store reference to current element array
  const currentElements: T[] = [];
  let initialInserted = false;

  // Initial rendering
  renderInitial();

  // Observe DOM insertion
  const observer = new MutationObserver(() => {
    if (anchor.parentNode && !initialInserted) {
      redraw();
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Clean up observer when anchor is removed (optional)
  // For now, observer will disconnect after first insertion

  // Set ref reference
  $setRef(props, anchor);

  return anchor;
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

    if (Array.isArray(child)) {
      // Recursively process array
      child.forEach(processChild);
      return;
    }

    if (typeof child === 'string' || typeof child === 'number') {
      // Wrap text in span element
      const span = document.createElement('span');
      span.textContent = String(child);
      elements.push(span);
      return;
    }

    if (child instanceof HTMLElement) {
      elements.push(child);
      return;
    }

    if (child && typeof child === 'object' && 'isKT' in child) {
      // Handle KTRef or KTComputed - need to unwrap
      const value = child.value;
      processChild(value);
      return;
    }

    // Other types ignored or converted to string
    console.warn('Fragment: unsupported child type', child);
  };

  processChild(children);
  return elements;
}
