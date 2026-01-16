import type { KTRawAttr, KTAttribute } from '@/types/h.js';
import { $throw, $keys } from '@/lib/index.js';
import { handlers, ktEventHandlers } from './attr-helpers.js';

const defaultHandler = (element: HTMLElement, key: string, value: any) => element.setAttribute(key, value);

function attrIsObject(element: HTMLElement, attr: KTAttribute) {
  const classValue = attr.class;
  const style = attr.style;
  if (classValue !== undefined) {
    element.className = classValue;
    delete attr.class;
  }

  if (style) {
    if (typeof style === 'string') {
      element.setAttribute('style', style);
    } else if (typeof style === 'object') {
      for (const key in style) {
        element.style[key as any] = (style as any)[key];
      }
    }
    delete attr.style;
  }

  const keys = $keys(attr) as Array<keyof KTAttribute & string>;
  // todo 这里的处理每次遍历都要if所有的情况，能否用map或者对象来优化？
  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i];
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

  if (classValue !== undefined) {
    attr.class = classValue;
  }
  if (style !== undefined) {
    attr.style = style;
  }
}

export function applyAttr(element: HTMLElement, attr: KTRawAttr) {
  if (typeof attr === 'string') {
    element.className = attr;
  } else if (typeof attr === 'object' && attr !== null) {
    attrIsObject(element, attr as KTAttribute);
  } else {
    $throw('attr must be an object/string.');
  }
}
