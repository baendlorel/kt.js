import type { KTRawContent } from '@/types/h.js';
import { $append, $isArray } from '@/lib/index.js';
import { KTRef } from '../jsx/ref.js';

function apd(element: HTMLElement, content: KTRawContent) {
  // Handle Promise content
  if (content instanceof Promise) {
    // Create a placeholder comment node
    const placeholder = document.createComment('kt-async');
    $append.call(element, placeholder);

    // When promise resolves, replace placeholder with actual content
    content
      .then((resolved) => {
        const fragment = document.createDocumentFragment();

        if ($isArray(resolved)) {
          for (let i = 0; i < resolved.length; i++) {
            apd(fragment as any, resolved[i]);
          }
        } else {
          apd(fragment as any, resolved);
        }

        // Replace placeholder with resolved content
        placeholder.parentNode?.replaceChild(fragment, placeholder);
      })
      .catch((err) => {
        console.error('KT.js: Promise content failed to resolve:', err);
        placeholder.parentNode?.removeChild(placeholder);
      });

    return;
  }

  if (content && (content as KTRef<any>).isKT) {
    $append.call(element, (content as KTRef<any>).value);
  } else {
    $append.call(element, content as string);
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
