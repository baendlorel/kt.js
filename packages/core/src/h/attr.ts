import type { KTRawAttr, KTAttribute } from '@/types/h.js';
import { handlers, ktEventHandlers } from './attr-helpers.js';

const defaultHandler = (element: HTMLElement, key: string, value: any) => element.setAttribute(key, value);

function attrIsObject(element: HTMLElement, attr: KTAttribute): boolean {
  // & deal k-if first
  if ('k-if' in attr) {
    if (!attr['k-if']) {
      return false;
    }
  }

  const classValue = attr.class;
  const style = attr.style;
  if (classValue !== undefined) {
    element.className = classValue;
  }

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
    if (key === 'class' || key === 'style' || key === 'k-if') {
      continue;
    }

    const o = attr[key];

    // force register on:xxx as an event handler
    // !if o is not valid, the throwing job will be done by `on`, not kt.js

    // # special handling for kt.js specific events
    const ktEvent = ktEventHandlers[key];
    if (ktEvent) {
      ktEvent(element as HTMLInputElement, o);
      continue;
    }

    // # normal event handler
    if (key.startsWith('on:')) {
      element.addEventListener(key.slice(3), o); // chop off the `@`
      continue;
    }

    if (typeof o === 'function') {
      (handlers[key] || defaultHandler)(element, key, o());
    } else {
      (handlers[key] || defaultHandler)(element, key, o);
    }
  }

  return true;
}

export function applyAttr(element: HTMLElement, attr: KTRawAttr): boolean {
  if (typeof attr === 'string') {
    element.className = attr;
    return true;
  } else if (typeof attr === 'object' && attr !== null) {
    return attrIsObject(element, attr as KTAttribute);
  } else {
    throw new Error('kt.js: attr must be an object/string.');
  }
}
