import { $isArray } from '@ktjs/shared';
import type { KTRawContent, PrimaryContent, SingleContent } from '../types/h.js';
import type { KTReactive } from '../reactable/reactive.js';

import { $isNull } from '@ktjs/shared';
import { isAppendable, _node, AType, KTAnchor } from '../common/anchor.js';
import { isKT } from '../reactable/common.js';
import { static_cast } from 'type-narrow';

class KTContentAnchor extends KTAnchor {
  /**
   * When it is `Node[]`, it is created by `.map`.
   * So `newValue !== _current` is definite.
   * @internal
   */
  _current!: this | Node | Node[];

  /* @internal */
  _insertTo!: (parent: any) => void;

  /* @internal */
  _remove!: () => void;

  /* @internal */
  private _load(value: PrimaryContent | SingleContent[]) {
    if ($isNull(value)) {
      this._current = this;
      this._insertTo = this._insertOneTo;
      this._remove = this._removeOne;
    } else if ($isArray(value)) {
      this._current = [];
      for (let i = 0; i < value.length; i++) {
        if (!$isNull(value[i])) {
          this._current.push(_toAppendable(value[i]));
        }
      }
      this._insertTo = this._insertArrayTo;
      this._remove = this._removeArray;
    } else {
      this._current = _node(value);
      this._insertTo = this._insertOneTo;
      this._remove = this._removeOne;
    }
  }

  constructor(r: KTReactive<PrimaryContent> | KTReactive<SingleContent[]>) {
    super(AType.Content);

    this._load(r.value);

    r.listen((v) => {
      this._remove.call(this);
      this._load(v);
      if (this.parentNode) {
        this._insertTo.call(this, this.parentNode);
      }
    });
  }

  /* @internal */
  _insertOneTo(parent: Node): void {
    if (this._current !== this) {
      parent.insertBefore(this._current as Node, this);
    }
  }

  /* @internal */
  _insertArrayTo(parent: Node): void {
    if (this._current !== this) {
      static_cast<Node[]>(this._current);
      for (let i = 0; i < this._current.length; i++) {
        parent.insertBefore(this._current[i], this);
      }
    }
  }

  /* @internal */
  _removeOne(): void {
    if (this._current !== this) {
      (this._current as ChildNode).remove();
    }
  }

  /* @internal */
  _removeArray(): void {
    static_cast<ChildNode[]>(this._current);
    for (let i = 0; i < this._current.length; i++) {
      this._current[i].remove();
    }
  }

  /* @internal */
  _appendTo(parent: Node): this {
    parent.appendChild(this);
    this._insertTo.call(this, parent);
    return this;
  }
}

export const _toAppendable = (c: SingleContent | KTReactive<SingleContent[]>): Node => {
  if (isKT(c)) {
    return new KTContentAnchor(c);
  } else if (isAppendable(c)) {
    return c;
  } else {
    return _node(c);
  }
};

export function append(element: Element, c: KTRawContent): void {
  if ($isNull(c)) {
    return;
  } else if ($isArray(c)) {
    for (let i = 0; i < c.length; i++) {
      append(element, c[i]);
    }
  } else {
    _toAppendable(c)._appendTo(element);
  }
}
