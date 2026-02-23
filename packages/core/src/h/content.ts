import { $isArray, $isNode, $isThenable } from '@ktjs/shared';
import type { KTAvailableContent, KTRawContent } from '../types/h.js';
import { isKT } from '../reactive/core.js';

const assureNode = (o: any) => ($isNode(o) ? o : document.createTextNode(o));

function apdSingle(element: HTMLElement | DocumentFragment | SVGElement | MathMLElement, c: KTAvailableContent) {
  // & Ignores falsy values, consistent with React's behavior
  if (c === undefined || c === null || c === false) {
    return;
  }

  if (isKT(c)) {
    let node = assureNode(c.value);
    element.append(node);
    c.addOnChange((newValue, oldValue) => {
      // todo 感觉这里的replace应该直接在这里处理，而不是在ktref里处理
      if ($isNode(newValue) && $isNode(oldValue)) {
        // & this case is handled automically in `class KTRef`
        return;
      }

      const oldNode = node;
      node = assureNode(newValue);
      oldNode.replaceWith(node);
    });
  } else {
    const node = assureNode(c);
    element.append(node);
    // Handle KTFor anchor
    const list = (node as any).__kt_for_list__ as any[];
    if ($isArray(list)) {
      apd(element, list);
    }
  }
}

function apd(element: HTMLElement | DocumentFragment | SVGElement | MathMLElement, c: KTAvailableContent) {
  if ($isThenable(c)) {
    c.then((r) => apd(element, r));
  } else if ($isArray(c)) {
    for (let i = 0; i < c.length; i++) {
      // & might be thenable here too
      const ci = c[i];
      if ($isThenable(ci)) {
        const comment = document.createComment('ktjs-promise-placeholder');
        element.append(comment);
        ci.then((awaited) => comment.replaceWith(awaited));
      } else {
        apdSingle(element, ci);
      }
    }
  } else {
    // & here is thened, so must be a simple elementj
    apdSingle(element, c);
  }
}

export function applyContent(element: HTMLElement | SVGElement | MathMLElement, content: KTRawContent): void {
  if ($isArray(content)) {
    for (let i = 0; i < content.length; i++) {
      apd(element, content[i]);
    }
  } else {
    apd(element, content as KTAvailableContent);
  }
}
