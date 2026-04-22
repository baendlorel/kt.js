import { $isArray } from '@ktjs/shared';
import type { Satisfied } from '../types/type-utils.js';
import type { KTRawContent, PrimaryContent, SingleContent } from '../types/h.js';
import type { KTReactive } from '../reactable/reactive.js';

import { _isAnchor, AType, KTAnchor } from '../common/anchor.js';
import { isKT } from '../reactable/common.js';

// EPIC 将所有可以terser混淆的名字都以下划线开头命名
const _isNull = (c: unknown): c is undefined | null | false => c === undefined || c === null || c === false;

const _node = (c: PrimaryContent): Node =>
  typeof (c as any)?.nodeType === 'number' ? (c as Node) : document.createTextNode(c as Satisfied);

// TODO 改成无论是否为数组都能准确处理的情况。可能为Fragment、For带来空前效果
class KTContentAnchor extends KTAnchor {
  _current: this | Node | Node[];

  constructor(r: KTReactive<PrimaryContent>) {
    super(AType.Content);

    this._current = _isNull(r.value) ? this : _node(r.value);

    r.addOnChange((v) => {
      // ?? 这里也许可以做ref事件清理
      if (_isNull(v)) {
        (this._current as ChildNode).remove();
        this._current = this;
        return;
      }

      v = _node(v);
      this._current = this._current.parentNode?.insertBefore(v, this._current) ?? v;
    });
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
