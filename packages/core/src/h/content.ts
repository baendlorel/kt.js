import type { KTRawContent, PrimaryContent, SingleContent } from '../types/h.js';
import type { KTReactive } from '../reactable/reactive.js';

import { $isNull, $isArray } from '@ktjs/shared';
import { isAppendable, _node, AType, KTAnchor } from '../common/anchor.js';
import { disposeOwnedSubtree, markOwnerMounted } from '../common/owner.js';
import { isKT } from '../reactable/common.js';
import { static_cast } from 'type-narrow';

class KTContentAnchor extends KTAnchor {
  /**
   * When it is `Node[]`, it is created by `.map`.
   * So `newValue !== _current` is definite.
   */
  _current!: this | Node | Node[];

  _insertTo!: (parent: any) => void;

  _remove!: () => void;

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
      this._current = _node(value); // & _node is enough because this anchor only used for reactive...
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
    }, { owner: this });
  }

  _insertOneTo(parent: Node): void {
    if (this._current !== this) {
      parent.insertBefore(this._current as Node, this);
      markOwnerMounted(this._current as Node);
    }
  }

  _insertArrayTo(parent: Node): void {
    if (this._current !== this) {
      static_cast<Node[]>(this._current);
      for (let i = 0; i < this._current.length; i++) {
        parent.insertBefore(this._current[i], this);
        markOwnerMounted(this._current[i]);
      }
    }
  }

  _removeOne(): void {
    if (this._current !== this) {
      disposeOwnedSubtree(this._current as Node);
      (this._current as ChildNode).remove();
    }
  }

  _removeArray(): void {
    static_cast<ChildNode[]>(this._current);
    for (let i = 0; i < this._current.length; i++) {
      disposeOwnedSubtree(this._current[i]);
      this._current[i].remove();
    }
  }

  _appendTo(parent: Node): this {
    parent.appendChild(this);
    markOwnerMounted(this);
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
