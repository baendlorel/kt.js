import type { JSX } from '../types/jsx.js';
import type { KTReactive } from '../reactable/reactive.js';
import type { SingleContent } from '../types/h.js';
import type { Satisfied } from '../types/type-utils.js';

import { $identity, $isNull } from '@ktjs/shared';
import { AType, KTAnchor } from '../common/anchor.js';
import { _toAppendable } from '../h/content.js';
import { isKT } from '../reactable/common.js';

type KTForList<TList extends readonly unknown[]> = TList | KTReactive<TList>;

export class KTForAnchor<TList extends readonly unknown[]> extends KTAnchor {
  // TODO 删除所有internal标记因为有了hidePrivate了
  /* @internal */
  _current!: Node[];

  // EPIC key用于未来的优化
  /* @internal */
  private _load(list: TList, key: Required<KTForProps<TList>>['key'], map: Required<KTForProps<TList>>['map']) {
    const result: Node[] = [];
    for (let i = 0; i < list.length; i++) {
      if (!$isNull(list[i])) {
        result.push(_toAppendable(map(list[i], i, list)));
      }
    }
    this._current = result;
  }

  constructor(
    list: KTForList<TList>,
    key: Required<KTForProps<TList>>['key'],
    map: Required<KTForProps<TList>>['map'],
  ) {
    super(AType.For);
    if (isKT(list)) {
      this._load(list.value, key, map);
      list.listen((v) => {
        this._remove();
        this._load(v, key, map);
        if (this.parentNode) {
          this._insertTo(this.parentNode as Element);
        }
      });
    } else {
      this._load(list, key, map);
    }
  }

  _insertTo(parent: Element): void {
    for (let i = 0; i < this._current.length; i++) {
      this._current[i]._appendTo(parent);
    }
  }

  _appendTo(parent: Element): this {
    this._insertTo(parent);
    return parent.appendChild(this);
  }

  _remove(): void {
    for (let i = 0; i < this._current.length; i++) {
      (this._current[i] as ChildNode).remove();
    }
  }
}

export interface KTForProps<TList extends readonly unknown[]> {
  list: KTForList<TList>;
  key?: (item: TList[number], index: number, array: TList) => any;
  map?: (item: TList[number], index: number, array: TList) => SingleContent;
}

export type KTForElement<TList extends readonly unknown[] = readonly unknown[]> = JSX.Element & KTForAnchor<TList>;

/**
 * KTFor - List rendering component with key-based optimization
 * Returns a Comment anchor node with rendered elements in anchor.list
 */
export function KTFor<TList extends readonly unknown[] = readonly unknown[]>(
  props: KTForProps<TList>,
): KTForElement<TList> {
  return new KTForAnchor(props.list, props.key ?? $identity, props.map ?? ($identity as Satisfied)) as Satisfied;
}
