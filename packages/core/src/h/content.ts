import type { KTAvailableContent, KTRawContent } from '@/types/h.js';
import { $append, $isArray, $isThenable } from '@/lib/index.js';
import { KTRef } from '../jsx/ref.js';

function apdSingle(element: HTMLElement | DocumentFragment, c: KTAvailableContent) {
  if (typeof c === 'object' && c !== null && 'isKT' in c) {
    $append.call(element, c.value as Node);
  } else {
    $append.call(element, c as Node);
  }
}

function apd(element: HTMLElement | DocumentFragment, c: KTAvailableContent[] | KTAvailableContent) {
  console.log('apd', c);

  if ($isThenable(c)) {
    c.then((r) => {
      console.log('append awaited', r, element);
      apd(element, r);
    });
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

export function applyContent(element: HTMLElement, content: KTRawContent): void {
  if ($isArray(content)) {
    for (let i = 0; i < content.length; i++) {
      apd(element, content[i]);
    }
  } else {
    apd(element, content as KTAvailableContent);
  }
}
