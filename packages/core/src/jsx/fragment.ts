import type { JSX } from '../types/jsx.js';
import type { KTRawContent, PrimaryContent, SingleContent } from '../types/h.js';
import type { KTRef } from '../reactable/ref.js';

import { $forEach, $isArray } from '@ktjs/shared';
import { isKT } from '../reactable/index.js';
import { $refToSelf } from '../reactable/ref.js';
import { _node, AType, KTAnchor } from '../common/anchor.js';
import { append } from '../h/content.js';

export class KTFragmentAnchor extends KTAnchor {
  _current: SingleContent[] = [];

  constructor(children: SingleContent[]) {
    super(AType.Fragment);
    this._current = children;
  }

  _remove(): void {
    for (let i = 0; i < this._current.length; i++) {
      (this._current[i] as ChildNode).remove();
    }
    this._current.length = 0;
    this.remove();
  }

  _appendTo(parent: Element): void {
    append(parent, this._current);
  }
}

export interface FragmentProps {
  ref?: KTRef<JSX.Element>;
  children: SingleContent[];
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
export function createFragment(props: FragmentProps): JSX.Element & KTFragmentAnchor {
  const anchor = new KTFragmentAnchor(props.children);

  return $refToSelf(props, anchor as unknown as JSX.Element) as JSX.Element & KTFragmentAnchor;
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
