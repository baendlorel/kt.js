import { HTMLKElement } from '@/types/enhance.js';
import { RawContent } from '@/types/h.js';

import { KIdSymbol, KTextSymbol } from '@/consts/sym.js';
import { $isArray, $appendChild, $textNode } from '@/lib/index.js';

function contentIsString(element: HTMLKElement, content: string) {
  // Only set ktext if the element supports it (has a text node)
  if (element[KTextSymbol]) {
    element.ktext = content;
  }
}

function contentIsArray(element: HTMLKElement, content: (HTMLKElement | string | undefined)[]) {
  const len = content.length;
  for (let i = 0; i < len; i++) {
    const c = content[i];
    if (c === undefined) {
      continue;
    }

    if (typeof c === 'string') {
      $appendChild.call(element, $textNode(c));
      continue;
    }

    if (KIdSymbol in c) {
      $appendChild.call(element, c);
      continue;
    }

    throw new TypeError('[__NAME__: __func__] content must be a string, HTMLEnhancedElement or HTMLEnhancedElement[].');
  }
}

function contentIsObject(element: HTMLKElement, content: HTMLKElement) {
  $appendChild.call(element, content);
}

export function applyContent(element: HTMLKElement, content: RawContent): void {
  if (typeof content === 'string') {
    contentIsString(element, content);
  } else if ($isArray(content)) {
    contentIsArray(element, content);
  } else if (content instanceof HTMLElement) {
    contentIsObject(element, content);
  } else {
    throw new TypeError('[__NAME__: __func__] content must be a string, HTMLEnhancedElement or HTMLEnhancedElement[].');
  }
}
