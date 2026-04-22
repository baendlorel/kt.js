import { $isArray, $isNode, $isThenable } from '@ktjs/shared';
import type { KTAvailableContent, KTRawContent, PrimaryContent } from '../types/h.js';
import type { KTFragmentAnchor } from '../jsx/fragment.js';

import { AType, KTAnchor } from '../common/anchor.js';
import { isKT } from '../reactable/common.js';

// EPIC 将所有可以terser混淆的名字都以下划线开头命名
const _isNull = (c: unknown): c is undefined | null | false => c === undefined || c === null || c === false;
class KTContentAnchor extends KTAnchor {
  _current: Node | KTAnchor;
  constructor(current: Node | undefined | null | false) {
    super(AType.Content);
    this._current = _isNull(current) ? this : current;
  }
  _switchTo(newNode: Node) {
    (this._current as ChildNode).replaceWith(newNode);
    this._current = _isNull(newNode) ? this : newNode;
  }
}

// TODO 不需要assureNode，因为append不需要，IE是用不了所以polyfill
const assureNode = (o: any) => ($isNode(o) ? o : document.createTextNode(o));

const apd = (element: Element, c: PrimaryContent) => {
  if (_isNull(c)) {
    return;
  }

  if (isKT(c)) {
    const anchor = new KTContentAnchor(c.value);
    anchor._appendTo(element);
    c.addOnChange((v) => anchor._switchTo(v));
  } else {
    element.append(c as Node); // & append can handle everything
  }
};

function apdSingle(element: HTMLElement | DocumentFragment | SVGElement | MathMLElement, c: KTAvailableContent) {
  // & Ignores falsy values, consistent with React's behavior
  if (c === undefined || c === null || c === false) {
    return;
  }

  if (isKT(c)) {
    let node = assureNode(c.value);
    element.append(node);
    const onChange = (newValue: KTAvailableContent) => {
      const newNode = assureNode(newValue);
      const oldNode = node;
      node = newNode;
      oldNode.replaceWith(newNode); // $mountFragmentAnchors(newNode);
    };
    c.addOnChange(onChange);
  } else {
    const node = assureNode(c);
    element.append(c);
    const anchor = node as KTFragmentAnchor;
    if (anchor.atype === AType.For) {
      append(element, anchor.nodes);
    }
  }
}

function append(element: HTMLElement | DocumentFragment | SVGElement | MathMLElement, c: KTAvailableContent) {
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
