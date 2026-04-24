import type { JSX } from '../types/jsx.js';
import type { SingleContent } from '../types/h.js';
import type { KTRef } from '../reactable/ref.js';

import { $refToSelf } from '../reactable/ref.js';
import { _node, AType, KTAnchor } from '../common/anchor.js';
import { append } from '../h/content.js';
import { Satisfied } from '../types/type-utils.js';

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
  return $refToSelf(props, new KTFragmentAnchor(props.children) as Satisfied);
}
