import type { KTMaybeReactive, KTReactifyProps } from '../reactable/types.js';
import type { JSX } from '../types/jsx.js';
import type { KTRawAttr, KTAttribute } from '../types/h.js';

import { $assign, $isArray } from '@ktjs/shared';
import { isKT } from '../reactable/common.js';
import { nextHandlerId } from '../reactable/reactive.js';
import { handlers } from './attr-helpers.js';

const defaultHandler = (element: JSX.Element, key: string, value: any) => element.setAttribute(key, value);

const setStyle = (
  element: JSX.Element,
  style: KTMaybeReactive<Partial<CSSStyleDeclaration>> | KTMaybeReactive<string> | undefined,
) => {
  if (!style || !(element instanceof HTMLElement)) {
    return;
  }

  const setter = (v: Partial<CSSStyleDeclaration> | string) => {
    if (typeof v === 'string') {
      element.style.cssText = v;
    } else if (typeof v === 'object') {
      $assign(element.style, v);
    }
  };

  if (isKT(style)) {
    setter(style.value);
    style.addOnChange(setter);
  } else {
    setter(style);
  }
};

const setClass = (
  element: JSX.Element,
  classValue: KTMaybeReactive<string> | KTMaybeReactive<string[]> | undefined,
) => {
  if (!classValue) {
    return;
  }

  const setter = (v: string | string[]) => (element.classList = $isArray(v) ? v.join(' ') : v);
  if (isKT(classValue)) {
    setter(classValue.value);
    classValue.addOnChange(setter);
  } else {
    setter(classValue);
  }
};

function attrIsObject(element: HTMLElement | SVGElement | MathMLElement, attr: KTReactifyProps<KTAttribute>) {
  setClass(element, attr.class ?? attr.className);
  setStyle(element, attr.style);

  if ('k-html' in attr) {
    const html = attr['k-html'];
    // ?? 如何在元素消失后自动消除html的onChangeHandler呢
    if (isKT(html)) {
      element.innerHTML = html.value;
      html.addOnChange((v) => (element.innerHTML = v));
    } else {
      element.innerHTML = html;
    }
  }

  for (const key in attr) {
    // & Arranged in order of usage frequency
    if (
      // key === 'k-if' ||
      // key === 'k-else' ||
      key === 'k-model' ||
      key === 'k-for' ||
      key === 'k-key' ||
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
      if (o) {
        const eventName = key.slice(3);
        element.addEventListener(eventName, o); // chop off the `on:`
      }
      continue;
    }

    // normal attributes
    // Security: all non-`on:` attributes are forwarded as-is.
    // Dangerous values such as raw `on*`, `href`, `src`, `srcdoc`, SVG href, etc.
    // remain the caller's responsibility.
    const handler = handlers[key] || defaultHandler;
    if (isKT(o)) {
      handler(element, key, o.value);
    } else {
      handler(element, key, o);
    }
  }
}

export function applyAttr(element: HTMLElement | SVGElement | MathMLElement, attr: KTRawAttr) {
  if (!attr) {
    return;
  }
  if (typeof attr === 'object') {
    attrIsObject(element, attr as KTAttribute);
  } else {
    $throw('attr must be an object.');
  }
}
