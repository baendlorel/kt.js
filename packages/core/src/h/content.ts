import { $isArray, $isNode, $isThenable } from '@ktjs/shared';
import type { KTAvailableContent, KTRawContent, PrimaryContent } from '../types/h.js';
import type { KTFragmentAnchor } from '../jsx/fragment.js';

import { isKT } from '../reactable/common.js';
import { AType } from '../jsx/anchor.js';

// TODO 不需要assureNode，因为append不需要，IE是用不了所以polyfill
const assureNode = (o: any) => ($isNode(o) ? o : document.createTextNode(o));

`
1、首先要写普通的apd函数，不需要考虑promise因为promise的需要ktasync完成
  apd函数满足：
  1、跳过undefined、null和false三个值
  2、使用append而非appendChild以避免转化的麻烦
  3、先不要管是不是anchor
`;

const apd = (element: Element, c: PrimaryContent) => {
  const fn = (c: PrimaryContent)
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
