import type { JSX } from '../types/jsx.js';
import type { KTReactive } from '../reactable/reactive.js';

import { $identity } from '@ktjs/shared';
import { AType, KTAnchor } from '../common/anchor.js';
import { append } from '../h/content.js';
import { Satisfied } from '../types/type-utils.js';
import { isKT } from '../reactable/common.js';

export class KTForAnchor<T> extends KTAnchor {
  /* @internal */
  _current: Node[];

  constructor(
    list: T[] | KTReactive<T[]>,
    key: KTForProps<T>['key'] = $identity,
    map: KTForProps<T>['map'] = $identity as Satisfied,
  ) {
    super(AType.For);
    if (isKT(list)) {
      this._current = list.value.map(map);
      list.listen((v)=>{
        const 
        this._current = v.map(map);
      })

    } else {
      this._current = list.map(map);
    }
  }

  _appendTo(parent: Element): void {
    parent.appendChild(this);
    append(parent, this._current);
    // TODO 其他appendTo也要用append做吗？
  }

  _remove(): void {
    for (let i = 0; i < this._current.length; i++) {
      (this._current[i] as ChildNode).remove();
    }
    this.remove();
  }
}

export interface KTForProps<T> {
  list: T[];
  key?: (item: T, index: number, array: T[]) => any;
  map?: (item: T, index: number, array: T[]) => JSX.Element;
}
export interface KTForPropsReactive<T> {
  list: KTReactive<T[]>;
  key?: (item: T, index: number, array: T[]) => any;
  map?: (item: T, index: number, array: T[]) => JSX.Element;
}

/**
 * KTFor - List rendering component with key-based optimization
 * Returns a Comment anchor node with rendered elements in anchor.list
 */
export function KTFor<T>(props: KTForProps<T> | KTForPropsReactive<T>): JSX.Element & KTForAnchor<T> {
  const { list, key = $identity, map = $identity } = props;

  return anchor;
}
