import { $isArray, $isNode, $isThenable } from '@ktjs/shared';
import type { Satisfied } from '../types/type-utils.js';
import type { KTAvailableContent, KTRawContent, PrimaryContent, SingleContent } from '../types/h.js';

import { _isAnchor, AType, KTAnchor } from '../common/anchor.js';
import { isKT } from '../reactable/common.js';
import { KTReactive } from '../reactable/reactive.js';

// EPIC 将所有可以terser混淆的名字都以下划线开头命名
const _isNull = (c: unknown): c is undefined | null | false => c === undefined || c === null || c === false;

const _node = (c: PrimaryContent): Node =>
  typeof (c as any)?.nodeType === 'number' ? (c as Node) : document.createTextNode(c as Satisfied);

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
  if ($isThenable(c)) {
    c.then((r) => append(element, r));
  } else if ($isArray(c)) {
    for (let i = 0; i < c.length; i++) {
      // & might be thenable here too
      const ci = c[i];
      if ($isThenable(ci)) {
        const comment = document.createComment('ktjs-promise-placeholder');
        element.appendChild(comment);
        ci.then((awaited) => {
          if ($isNode(awaited)) {
            // ?? 难道不能都在observer回调里做吗
            comment.replaceWith(awaited); // $mountFragmentAnchors(awaited);
          } else {
            const awaitedNode = assureNode(awaited);
            comment.replaceWith(awaitedNode); // $mountFragmentAnchors(awaitedNode);
          }
        });
      } else {
        apdSingle(element, ci);
      }
    }
  } else {
    // & here is thened, so must be a simple element
    apdSingle(element, c);
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
