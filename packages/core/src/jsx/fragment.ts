import type { JSX } from '../types/jsx.js';
import type { KTRawContent } from '../types/h.js';
import type { KTReactive } from '../reactable/reactive.js';
import type { KTRef } from '../reactable/ref.js';

import { $forEach, $isArray } from '@ktjs/shared';
import { isKT, toReactive } from '../reactable/index.js';
import { $initRef } from '../reactable/ref.js';
import { AType, KTAnchor } from './anchor.js';

export class KTFragmentAnchor extends KTAnchor {
  constructor() {
    super(AType.Fragment);
  }

  /**
   * Remove elements in the list
   */
  removeElements() {
    const list = this.list.splice(0);
    for (let i = 0; i < list.length; i++) {
      const node = list[i] as ChildNode;
      if (node.parentNode) {
        node.remove();
      }
    }
  }
}

export interface FragmentProps<T extends Node = Node> {
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
export function Fragment<T extends Node = Node>(props: FragmentProps<T>): JSX.Element & KTFragmentAnchor {
  const anchor = new KTFragmentAnchor();
  const elements = anchor.list;
  const childrenRef = toReactive(props.children);

  const redraw = () => {
    const newElements = childrenRef.value;
    const parent = anchor.parentNode;

    if (!parent) {
      elements.length = 0;
      for (let i = 0; i < newElements.length; i++) {
        elements.push(newElements[i]);
      }
      return;
    }

    anchor.removeElements();
    elements.length = 0;

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < newElements.length; i++) {
      const element = newElements[i];
      elements.push(element);
      fragment.appendChild(element);
    }

    parent.insertBefore(fragment, anchor.nextSibling);
  };

  childrenRef.addOnChange(redraw);
  anchor.mountCallback = redraw;
  redraw();

  $initRef(props as { ref?: KTRef<Node> }, anchor);

  return anchor as unknown as JSX.Element & KTFragmentAnchor;
}

/**
 * Convert KTRawContent to HTMLElement array
 */
export function convertChildrenToElements(children: KTRawContent): Element[] {
  const elements: Element[] = [];

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

    if (child instanceof Element) {
      elements.push(child);
      return;
    }

    // TODO 也许可以让k-if也使用KTAnchor以统一
    // & Allows KTAnchor(Comment), this is pretty natural.
    // & If not allowed, Fragments won't be nestable
    if (child instanceof Comment) {
      elements.push(child as any);
      return;
    }

    if (isKT(child)) {
      processChild(child.value);
      return;
    }

    $warn('Fragment: unsupported child type', child);
    if (process.env.IS_DEV) {
      throw new Error(`Fragment: unsupported child type`);
    }
  };

  processChild(children);
  return elements;
}
