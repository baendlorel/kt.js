import { $append, $isArray, $isNode, $isThenable } from '@ktjs/shared';
import type { KTAvailableContent, KTRawContent } from '../types/h.js';
import { isKTRef } from '../jsx/ref.js';

const assureNode = (o: any) => ($isNode(o) ? o : document.createTextNode(o));

function apdSingle(element: HTMLElement | DocumentFragment | SVGElement | MathMLElement, c: KTAvailableContent) {
  // & JSX should ignore false, undefined, and null
  if (c === false || c === undefined || c === null) {
    return;
  }

  if (isKTRef(c)) {
    let node = assureNode(c.value);
    $append.call(element, node);
    c.addOnChange((newValue, oldValue) => {
      if ($isNode(newValue) && $isNode(oldValue)) {
        // & this case is handled automically in `class KTRef`
        // todo 2 cases might be able to merge into 1
        return;
      }

      const oldNode = node;
      node = assureNode(newValue);
      oldNode.replaceWith(node);
    });
  } else {
    $append.call(element, c as Node);

    // Handle KTFor anchor
    const list = (c as any).__kt_for_list__ as any[];
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
        $append.call(element, comment);
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
