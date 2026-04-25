import type { JSX } from '../types/jsx.js';
import type { KTReactive } from '../reactable/reactive.js';

import { $identity, $isNull } from '@ktjs/shared';
import { Satisfied } from '../types/type-utils.js';
import { SingleContent } from '../types/h.js';
import { _node, AType, KTAnchor } from '../common/anchor.js';
import { _toAppendable } from '../h/content.js';
import { isKT } from '../reactable/common.js';

export class KTForAnchor<T extends SingleContent> extends KTAnchor {
  /* @internal */
  _current!: Node[];

  // TODO key用于未来的优化
  /* @internal */
  private _load(list: T[], key: Required<KTForProps<T>>['key'], map: Required<KTForProps<T>>['map']) {
    const result: Node[] = [];
    for (let i = 0; i < list.length; i++) {
      if (!$isNull(list[i])) {
        result.push(_toAppendable(map(list[i], i, list)));
      }
    }
    this._current = result;
  }

  constructor(list: T[] | KTReactive<T[]>, key: Required<KTForProps<T>>['key'], map: Required<KTForProps<T>>['map']) {
    super(AType.For);
    if (isKT(list)) {
      this._load(list.value, key, map);
      list.listen((v) => {
        this._remove();
        this._load(v, key, map);
      });
    } else {
      this._load(list, key, map);
    }
  }

  _appendTo(parent: Element): this {
    parent.appendChild(this);
    for (let i = 0; i < this._current.length; i++) {
      this._current[i]._appendTo(parent);
    }
    return this;
  }

  _remove(): void {
    for (let i = 0; i < this._current.length; i++) {
      (this._current[i] as ChildNode).remove();
    }
  }
}

export interface KTForProps<T extends SingleContent> {
  list: T[] | KTReactive<T[]>;
  key?: (item: T, index: number, array: T[]) => any;
  map?: (item: T, index: number, array: T[]) => SingleContent;
}

/**
 * KTFor - List rendering component with key-based optimization
 * Returns a Comment anchor node with rendered elements in anchor.list
 */
export function KTFor<T extends SingleContent>(props: KTForProps<T>): JSX.Element & KTForAnchor<T> {
  return new KTForAnchor(props.list, props.key ?? $identity, props.map ?? $identity) as Satisfied;
}
