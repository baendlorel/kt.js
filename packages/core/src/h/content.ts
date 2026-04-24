import { $isArray } from '@ktjs/shared';
import type { Satisfied } from '../types/type-utils.js';
import type { KTRawContent, PrimaryContent, SingleContent } from '../types/h.js';
import type { KTReactive } from '../reactable/reactive.js';

import { $isNull } from '@ktjs/shared';
import { isAnchor, _node, AType, KTAnchor } from '../common/anchor.js';
import { isKT } from '../reactable/common.js';
import { static_cast } from 'type-narrow';

// EPIC 将所有可以terser混淆的名字都以下划线开头命名
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
        const v = value[i];
        if (!$isNull(v)) {
          this._current.push(isKT(v) ? new KTContentAnchor(v) : _node(v));
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
  _appendTo(parent: Node): void {
    parent.appendChild(this);
    this._insertTo.call(this, parent);
  }
}

const appendOne = (element: Element, c: SingleContent | KTReactive<SingleContent[]>) => {
  if ($isNull(c)) {
    return;
  }

  if (isKT(c)) {
    new KTContentAnchor(c)._appendTo(element);
  } else if (isAnchor(c)) {
    c._appendTo(element); // TODO 这里就有说法了，要_appendTo的多态
  } else {
    element.append(c as Satisfied);
  }
};

export function append(element: Element, c: KTRawContent) {
  if ($isArray(c)) {
    for (let i = 0; i < c.length; i++) {
      append(element, c[i]);
    }
  } else {
    appendOne(element, c);
  }
}
