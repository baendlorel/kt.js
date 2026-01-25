import type { KTRawAttr, KTAttribute } from '@/types/h.js';
import { handlers, ktEventHandlers } from './attr-helpers.js';

const defaultHandler = (element: HTMLElement, key: string, value: any) => element.setAttribute(key, value);

function attrIsObject(element: HTMLElement, attr: KTAttribute) {
  const classValue = attr.class;
  if (classValue !== undefined) {
    element.className = classValue;
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
    if (key === 'class' || key === 'style' || key === 'children' || key === 'k-if' || key === 'ref') {
      continue;
    }

    const o = attr[key];

    // # special handling for kt.js specific events
    const ktEvent = ktEventHandlers[key];
    if (ktEvent) {
      ktEvent(element as HTMLInputElement, o);
    }
    // normal event handler
    else if (key.startsWith('on:')) {
      element.addEventListener(key.slice(3), o); // chop off the `@`
    }
    // normal attributes
    else {
      (handlers[key] || defaultHandler)(element, key, o);
    }
  }
}

export function applyAttr(element: HTMLElement, attr?: KTRawAttr) {
  if (typeof attr === 'object' && attr !== null) {
    attrIsObject(element, attr as KTAttribute);
  } else if (typeof attr === 'string') {
    element.className = attr;
  } else {
    throw new Error('kt.js: attr must be an object/string.');
  }
}
