import { $isArray } from '@ktjs/shared';
import type { Satisfied } from '../types/type-utils.js';
import type { KTAvailableContent, KTRawContent, PrimaryContent, SingleContent } from '../types/h.js';

import { _isAnchor, AType, KTAnchor } from '../common/anchor.js';
import { isKT } from '../reactable/common.js';
import { KTReactive } from '../reactable/reactive.js';
import { static_cast } from 'type-narrow';

// EPIC 将所有可以terser混淆的名字都以下划线开头命名
const _isNull = (c: unknown): c is undefined | null | false => c === undefined || c === null || c === false;

const _node = (c: PrimaryContent): Node =>
  typeof (c as any)?.nodeType === 'number' ? (c as Node) : document.createTextNode(c as Satisfied);

const _remove = (nodes: ChildNode[]) => {
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].remove();
  }
};

class KTContentAnchor extends KTAnchor {
  _current: Node | KTAnchor;

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
    parent.appendChild(this._current);
  }
}

class KTContentsAnchor extends KTAnchor {
  _current: Node[] | this;

  // TODO 也许这里可以加一个首尾anchor来简化插入流程，或者让anchor总是在页面上，方便定位

  constructor(r: KTReactive<PrimaryContent[]>) {
    super(AType.Content);

    this._current = r.value.length === 0 ? this : r.value.map(_node);

    r.addOnChange((v) => {
      if (_isNull(v)) {
        if (this._current === this) {
          return; // Empty -> Empty, do nothing
        }
        static_cast<ChildNode[]>(this._current);

        // !The order these 3 lines cannot be changed
        this._current[0].parentNode?.insertBefore(this, this._current[0]);
        _remove(this._current);
        this._current = this;
        return;
      }
      static_cast<ChildNode[]>(this._current);

      v = v.map(_node);
      static_cast<Node[]>(v);

      const parent = this._current[0].parentNode;

      // ?? 这里的parent是否一般都会存在？
      if (parent) {
        parent.insertBefore(this, v[v.length - 1]);
        for (let i = v.length - 1; i >= 0; i--) {
          parent.insertBefore(v[i], v[i - 1]); // reversely
        }
      }
      this._current = v;
    });
  }

  _appendTo(parent: Element): void {
    if (this._current === this) {
      parent.append(this);
    } else {
      parent.append.apply(parent, this._current as Node[]);
    }
  }
}

const apd = (element: Element, c: SingleContent) => {
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

function append(element: Element, c: KTAvailableContent) {
  if ($isArray(c)) {
    for (let i = 0; i < c.length; i++) {
      apd(element, c[i]);
    }
  } else {
    apd(element, c);
  }
}

export function applyContent(element: HTMLElement | SVGElement | MathMLElement, content: KTRawContent): void {
  if ($isArray(content)) {
    for (let i = 0; i < content.length; i++) {
      append(element, content[i]);
    }
  } else {
    append(element, content as KTAvailableContent);
  }
}
