import type { KTAvailableContent, KTRawContent } from '@/types/h.js';
import { $append, $isArray, $isThenable } from '@/lib/index.js';
import { KTRef } from '../jsx/ref.js';

function apd(element: HTMLElement | DocumentFragment, content: KTRawContent) {
  if ($isThenable(content)) {
    const placeholder = document.createComment('kt-async');
    $append.call(element, placeholder);
    content
      .then((resolved) => {
        const fragment = document.createDocumentFragment();
        apdSync(fragment, resolved);
        placeholder.replaceWith(fragment);
      })
      .catch((err) => {
        console.error('KT.js: ', err);
        placeholder.remove();
      });
  } else if (content && (content as KTRef<any>).isKT) {
    $append.call(element, (content as KTRef<any>).value);
  } else {
    console.log('appending content:', content);
    $append.call(element, content as string);
  }
}

function apdSync(element: HTMLElement | DocumentFragment, resolved: KTAvailableContent[] | KTAvailableContent) {
  if ($isArray(resolved)) {
    for (let i = 0; i < resolved.length; i++) {
      const r = resolved[i];
      if ($isThenable(r)) {
        apd(element, r);
      } else {
        $append.call(element, r as Node);
      }
    }
  } else {
    $append.call(element, resolved as Node);
  }
}

export function applyContent(element: HTMLElement, content: KTRawContent): void {
  if ($isArray(content)) {
    for (let i = 0; i < content.length; i++) {
      apd(element, content[i]);
    }
  } else {
    apd(element, content);
  }
}
