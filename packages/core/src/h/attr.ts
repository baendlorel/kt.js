import { $throw } from '@ktjs/shared';
import type { KTReactify } from '../reactive/index.js';
import type { KTRawAttr, KTAttribute } from '../types/h.js';
import { isKT } from '../reactive/core.js';
import { handlers } from './attr-helpers.js';

const defaultHandler = (element: HTMLElement | SVGElement | MathMLElement, key: string, value: any) =>
  element.setAttribute(key, value);

function attrIsObject(element: HTMLElement | SVGElement | MathMLElement, attr: KTReactify<KTAttribute>) {
  const classValue = attr.class || attr.className;
  if (classValue !== undefined) {
    element.setAttribute('class', classValue);
  }
  // todo 这里加入reactive支持
  // todo 类型定义也要支持reactive响应式

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

  if ('k-html' in attr) {
    const html = attr['k-html'];
    if (isKT(html)) {
      element.innerHTML = html.value;
      html.addOnChange((v) => (element.innerHTML = v));
    } else {
      element.innerHTML = html;
    }
  }

  for (const key in attr) {
    if (
      key === 'k-if' ||
      key === 'k-model' ||
      key === 'ref' ||
      key === 'class' ||
      key === 'className' ||
      key === 'style' ||
      key === 'children' ||
      key === 'k-html'
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
      const handler = handlers[key] || defaultHandler;
      if (isKT(o)) {
        handler(element as any, key, o.value);
        o.addOnChange((v) => handler(element as any, key, v));
      } else {
        handler(element as any, key, o);
      }
    }
  }
}

export function applyAttr(element: HTMLElement | SVGElement | MathMLElement, attr: KTRawAttr) {
  if (!attr) {
    return;
  }
  if (typeof attr === 'object' && attr !== null) {
    attrIsObject(element, attr as KTAttribute);
  } else {
    $throw('attr must be an object.');
  }
}
