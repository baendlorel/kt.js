import { $isArray, $isNode, $isThenable } from '@ktjs/shared';
import type { KTAvailableContent, KTRawContent } from '../types/h.js';
import { isKT } from '../reactable/common.js';
import { $addNodeCleanup, $mountFragmentAnchors, $replaceNode } from '../jsx/anchor.js';
import { AnchorType } from '../jsx/anchor.js';

const assureNode = (o: any) => ($isNode(o) ? o : document.createTextNode(o));

function apdSingle(element: HTMLElement | DocumentFragment | SVGElement | MathMLElement, c: KTAvailableContent) {
  // & Ignores falsy values, consistent with React's behavior
  if (c === undefined || c === null || c === false) {
    return;
  }

  if (isKT(c)) {
    let node = assureNode(c.value);
    element.appendChild(node);
    $mountFragmentAnchors(node); // ^ Explicitly deal with FragmentAnchors
    const onChange = (newValue: KTAvailableContent) => {
      const newNode = assureNode(newValue);
      const oldNode = node;
      node = newNode;
      $replaceNode(oldNode, newNode);
    };
    c.addOnChange(onChange, onChange);
    $addNodeCleanup(element, () => c.removeOnChange(onChange));
  } else {
    const node = assureNode(c);
    element.appendChild(node);
    $mountFragmentAnchors(node); // ^ Explicitly deal with FragmentAnchors
    const anchor = node as { type?: AnchorType; list?: any[] };
    if (anchor.type === AnchorType.For) {
      apd(element, anchor.list);
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
        element.appendChild(comment);
        $mountFragmentAnchors(comment); // ^ Explicitly deal with FragmentAnchors
        ci.then((awaited) => {
          if ($isNode(awaited)) {
            $replaceNode(comment, awaited);
          } else {
            const awaitedNode = assureNode(awaited);
            $replaceNode(comment, awaitedNode);
          }
        });
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
