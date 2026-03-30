import type { KTReactiveLike } from '../reactable/reactive.js';
import type { KTRawContent } from '../types/h.js';
import type { JSX } from '../types/jsx.js';
import { $initRef, type KTRefLike } from '../reactable/ref.js';

import { $forEach, $isArray } from '@ktjs/shared';
import { isKT, toReactive } from '../reactable/index.js';
import { AnchorType } from './common.js';

const FRAGMENT_MOUNT_PATCHED = '__kt_fragment_mount_patched__';

const CANNOT_OBSERVE = typeof MutationObserver === 'undefined' || typeof document === 'undefined';

const collectAnchors = (node: Node): FragmentAnchor[] => {
  if (typeof document === 'undefined') {
    return [];
  }

  const anchors: FragmentAnchor[] = [];
  if (node instanceof FragmentAnchor) {
    anchors.push(node);
    return anchors;
  }

  if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_COMMENT);
    let current = walker.nextNode();
    while (current) {
      if (current instanceof FragmentAnchor) {
        anchors.push(current);
      }
      current = walker.nextNode();
    }
  }
  return anchors;
};

const pendingAnchors = new Set<FragmentAnchor>();
let pendingAnchorObserver: MutationObserver | undefined;

const flushPendingAnchors = () => {
  if (pendingAnchors.size === 0) {
    pendingAnchorObserver?.disconnect();
    pendingAnchorObserver = undefined;
    return;
  }

  pendingAnchors.forEach((anchor) => anchor.mount());

  if (pendingAnchors.size === 0) {
    pendingAnchorObserver?.disconnect();
    pendingAnchorObserver = undefined;
  }
};

if (typeof Node !== 'undefined' && !(globalThis as any)[FRAGMENT_MOUNT_PATCHED]) {
  (globalThis as any)[FRAGMENT_MOUNT_PATCHED] = true;

  const originAppendChild = Node.prototype.appendChild;
  Node.prototype.appendChild = function (node) {
    const anchors = collectAnchors(node);
    const result = originAppendChild.call(this, node);
    for (let i = 0; i < anchors.length; i++) {
      anchors[i].mount();
    }
    return result as any;
  };

  const originInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function (node: Node, child: Node | null) {
    const anchors = collectAnchors(node);
    const result = originInsertBefore.call(this, node, child);
    for (let i = 0; i < anchors.length; i++) {
      anchors[i].mount();
    }
    return result as any;
  };
}

export class FragmentAnchor extends Comment {
  readonly isKTAnchor: true = true;
  readonly type = AnchorType.Fragment;
  readonly list: Node[] = [];
  mountCallback?: () => void;

  constructor() {
    super('kt-fragment');
  }

  mount() {
    if (this.parentNode) {
      this.mountCallback?.();
    }
  }

  queueMount() {
    pendingAnchors.add(this);

    if (pendingAnchorObserver || CANNOT_OBSERVE || !document.body) {
      return;
    }

    pendingAnchorObserver = new MutationObserver(flushPendingAnchors);
    pendingAnchorObserver.observe(document.body, { childList: true, subtree: true });
  }

  unqueueMount() {
    pendingAnchors.delete(this);
    if (pendingAnchors.size === 0) {
      pendingAnchorObserver?.disconnect();
      pendingAnchorObserver = undefined;
    }
  }

  /**
   * Remove elements in the list
   */
  removeElements() {
    for (let i = 0; i < this.list.length; i++) {
      (this.list[i] as ChildNode).remove();
    }
  }
}

export interface FragmentProps<T extends Node = Node> {
  /** Array of child elements, supports reactive arrays */
  children: T[] | KTReactiveLike<T[]>;

  /** element key function for optimization (future enhancement) */
  key?: (element: T, index: number, array: T[]) => any;

  /** ref to get the anchor node */
  ref?: KTRefLike<JSX.Element>;
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
export function Fragment<T extends Node = Node>(props: FragmentProps<T>): JSX.Element & FragmentAnchor {
  const anchor = new FragmentAnchor();
  const elements = anchor.list as T[];
  let inserted = false;

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

    const fragment = document.createDocumentFragment();
    elements.length = 0;

    for (let i = 0; i < newElements.length; i++) {
      const element = newElements[i];
      elements.push(element);
      fragment.appendChild(element);
    }

    parent.insertBefore(fragment, anchor.nextSibling);
    inserted = true;
    anchor.mountCallback = undefined;
    anchor.unqueueMount();
  };

  const childrenRef = toReactive(props.children).addOnChange(redraw);

  const renderInitial = () => {
    const current = childrenRef.value;
    elements.length = 0;

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < current.length; i++) {
      const element = current[i];
      elements.push(element);
      fragment.appendChild(element);
    }

    const parent = anchor.parentNode;
    if (parent && !inserted) {
      parent.insertBefore(fragment, anchor.nextSibling);
      inserted = true;
      anchor.unqueueMount();
    }
  };

  renderInitial();

  anchor.mountCallback = () => {
    if (!inserted && anchor.parentNode) {
      redraw();
    }
  };

  if (!inserted) {
    anchor.queueMount();
  }

  $initRef(props as { ref?: KTRefLike<Node> }, anchor);

  return anchor as unknown as JSX.Element & FragmentAnchor;
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
