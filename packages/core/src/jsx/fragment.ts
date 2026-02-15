import { $forEach, $isArray } from '@ktjs/shared';
import type { KTRef } from '../reactive/ref.js';
import type { KTReactive } from '../types/reactive.js';
import type { KTRawContent } from '../types/h.js';

import { $setRef, isKT, toReactive } from '../reactive/index.js';

const FRAGMENT_MOUNT_PATCHED = '__kt_fragment_mount_patched__';
const FRAGMENT_MOUNT = '__kt_fragment_mount__';

if (typeof Node !== 'undefined' && !(globalThis as any)[FRAGMENT_MOUNT_PATCHED]) {
  (globalThis as any)[FRAGMENT_MOUNT_PATCHED] = true;

  const originAppendChild = Node.prototype.appendChild;
  Node.prototype.appendChild = function (node: Node) {
    const result = originAppendChild.call(this, node);
    const mount = (node as any)[FRAGMENT_MOUNT];
    if (typeof mount === 'function') {
      mount();
    }
    return result;
  };

  const originInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function (node: Node, child: Node | null) {
    const result = originInsertBefore.call(this, node, child);
    const mount = (node as any)[FRAGMENT_MOUNT];
    if (typeof mount === 'function') {
      mount();
    }
    return result;
  };
}

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
  const elements: T[] = [];
  const anchor = document.createComment('kt-fragment');
  let inserted = false;
  let observer: MutationObserver | undefined;

  const redraw = () => {
    const newElements = childrenRef.value;
    const parent = anchor.parentNode;

    if (!parent) {
      elements.length = 0;
      for (let i = 0; i < newElements.length; i++) {
        elements.push(newElements[i]);
      }
      (anchor as any).__kt_fragment_list__ = elements;
      return;
    }

    for (let i = 0; i < elements.length; i++) {
      elements[i].remove();
    }

    const fragment = document.createDocumentFragment();
    elements.length = 0;

    for (let i = 0; i < newElements.length; i++) {
      const element = newElements[i];
      elements.push(element);
      fragment.appendChild(element);
    }

    parent.insertBefore(fragment, anchor.nextSibling);
    inserted = true;
    delete (anchor as any)[FRAGMENT_MOUNT];
    observer?.disconnect();
    observer = undefined;
    (anchor as any).__kt_fragment_list__ = elements;
  };

  const childrenRef = toReactive(props.children, redraw);

  const renderInitial = () => {
    const current = childrenRef.value;
    elements.length = 0;

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < current.length; i++) {
      const element = current[i];
      elements.push(element);
      fragment.appendChild(element);
    }

    (anchor as any).__kt_fragment_list__ = elements;

    const parent = anchor.parentNode;
    if (parent && !inserted) {
      parent.insertBefore(fragment, anchor.nextSibling);
      inserted = true;
    }
  };

  renderInitial();

  (anchor as any)[FRAGMENT_MOUNT] = () => {
    if (!inserted && anchor.parentNode) {
      redraw();
    }
  };

  observer = new MutationObserver(() => {
    if (anchor.parentNode && !inserted) {
      redraw();
      observer?.disconnect();
      observer = undefined;
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  $setRef(props, anchor);

  return anchor as unknown as JSX.Element;
}

/**
 * Convert KTRawContent to HTMLElement array
 */
export function convertChildrenToElements(children: KTRawContent): HTMLElement[] {
  const elements: HTMLElement[] = [];

  const processChild = (child: any): void => {
    if (child === undefined || child === null || child === false || child === true) {
      // Ignore null, undefined, false, true
      return;
    }

    if ($isArray(child)) {
      // Recursively process array
      $forEach(child, processChild);
      return;
    }

    if (typeof child === 'string' || typeof child === 'number') {
      const span = document.createElement('span');
      span.textContent = String(child);
      elements.push(span);
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

    console.warn('Fragment: unsupported child type', child);
  };

  processChild(children);
  return elements;
}
