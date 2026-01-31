import type { KTRawAttr, KTAttribute } from '@/types/h.js';
import { handlers } from './attr-helpers.js';

const defaultHandler = (element: HTMLElement | SVGElement, key: string, value: any) => element.setAttribute(key, value);

function attrIsObject(element: HTMLElement | SVGElement, attr: KTAttribute) {
  const classValue = attr.class || attr.className;
  if (classValue !== undefined) {
    element.setAttribute('class', classValue);
  }

  const style = attr.style;
  if (style) {
    if (typeof style === 'string') {
      element.setAttribute('style', style);
    } else if (typeof style === 'object') {
      for (const key in style) {
        element.style[key as any] = (style as any)[key];
      }
    }
  }

  for (const key in attr) {
    if (
      key === 'class' ||
      key === 'className' ||
      key === 'style' ||
      key === 'children' ||
      key === 'k-if' ||
      key === 'ref'
    ) {
      continue;
    }

    const o = attr[key];

    // normal event handler
    if (key.startsWith('on:')) {
      element.addEventListener(key.slice(3), o); // chop off the `on:`
    }
    // normal attributes
    else {
      (handlers[key] || defaultHandler)(element as any, key, o);
    }
  }
}

export function applyAttr(element: HTMLElement | SVGElement, attr: KTRawAttr) {
  if (!attr) {
    return;
  }
  if (typeof attr === 'object' && attr !== null) {
    attrIsObject(element, attr as KTAttribute);
  } else {
    throw new Error('kt.js: attr must be an object.');
  }
}
