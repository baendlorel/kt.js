import { $isArray } from '@ktjs/shared';
import type { Satisfied } from '../types/type-utils.js';
import type { KTRawContent, PrimaryContent, SingleContent } from '../types/h.js';
import type { KTReactive } from '../reactable/reactive.js';

import { _isAnchor, AType, KTAnchor } from '../common/anchor.js';
import { isKT } from '../reactable/common.js';
import { static_cast } from 'type-narrow';

// EPIC 将所有可以terser混淆的名字都以下划线开头命名
const _isNull = (c: unknown): c is undefined | null | false => c === undefined || c === null || c === false;

const _node = (c: PrimaryContent): Node =>
  typeof (c as any)?.nodeType === 'number' ? (c as Node) : document.createTextNode(c as Satisfied);

// TODO 改成无论是否为数组都能准确处理的情况。可能为Fragment、For带来空前效果
class KTContentAnchor extends KTAnchor {
  /**
   * When it is `Node[]`, it is created by `.map`.
   * So `newValue !== _current` is definite.
   */
  _current!: this | Node | Node[];
  _insert!: (parent: Node) => void;
  _remove!: () => void;

  // ?? 这里也许可以做ref事件清理
  private _load(value: PrimaryContent | PrimaryContent[]) {
    if (_isNull(value)) {
      this._current = this;
      this._insert = this._insertOne;
      this._remove = this._removeOne;
    } else if ($isArray(value)) {
      this._current = value.map(_node);
      this._insert = this._insertArray;
      this._remove = this._removeArray;
    } else {
      this._current = _node(value);
      this._insert = this._insertOne;
      this._remove = this._removeOne;
    }
  }

  constructor(r: KTReactive<PrimaryContent>) {
    super(AType.Content);

    this._load(r.value);

    r.addOnChange((v) => {
      this._remove.call(this);
      this._load(v);
      if (this.parentNode) {
        this._insert.call(this, this.parentNode);
      }
    });
  }

  _insertOne(parent: Node): void {
    if (this._current === this) {
      return;
    }
    static_cast<Node>(this._current);
    parent.insertBefore(this, this._current);
  }

  _insertArray(parent: Node): void {
    if (this._current === this) {
      return;
    }
    static_cast<Node[]>(this._current);
    for (let i = 0; i < this._current.length; i++) {
      parent.insertBefore(this, this._current[i]);
    }
  }

  _removeOne(): void {
    if (this._current !== this) {
      static_cast<ChildNode>(this._current);
      this._current.remove();
    }
  }

  _removeArray(): void {
    static_cast<ChildNode[]>(this._current);
    for (let i = 0; i < this._current.length; i++) {
      this._current[i].remove();
    }
  }

  _appendTo(parent: Node): void {
    parent.appendChild(this);
  }
}

const appendOne = (element: Element, c: SingleContent) => {
  if (_isNull(c)) {
    return;
  }

  if (isKT(c)) {
    new KTContentAnchor(c)._appendTo(element);
  } else if (_isAnchor(c)) {
    c._appendTo(element);
  } else {
    element.append(c as Satisfied); // & append can handle everything
  }
};

function append(element: Element, c: KTRawContent) {
  if ($isArray(c)) {
    for (let i = 0; i < c.length; i++) {
      append(element, c[i]);
    }
  } else {
    appendOne(element, c);
  }
}

export const applyContent = append;
