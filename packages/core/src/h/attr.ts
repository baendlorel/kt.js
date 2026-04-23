import type { JSX } from '../types/jsx.js';
import type { KTReactifyProps } from '../reactable/types.js';
import type { KTAttribute } from '../types/h.js';

import { $assign, $isArray } from '@ktjs/shared';
import { static_cast } from 'type-narrow';
import { isKT } from '../reactable/common.js';
import { handlers } from './attr-helpers.js';

const defaultHandler = (element: JSX.Element, key: string, value: any) => element.setAttribute(key, value);

const setAttr = (value: any, setter: (value: any, oldValue: any) => void) => {
  if (isKT(value)) {
    setter(value.value, value.value);
    value.listen(setter);
  } else {
    setter(value, value);
  }
};
const setNonNullableAttr = (value: any, setter: (value: any, oldValue: any) => void) => {
  if (value !== undefined) {
    setAttr(value, setter);
  }
};

export function applyAttr(element: JSX.Element, attr: KTReactifyProps<KTAttribute>) {
  // & Since JSX.Element is Element, Element has only 3 sub-classes.
  static_cast<HTMLElement | SVGElement | MathMLElement>(element);
  setNonNullableAttr(attr.class ?? attr.className, (v) => (element.classList = $isArray(v) ? v.join(' ') : v));
  setNonNullableAttr(attr.style, (v: Partial<CSSStyleDeclaration> | string) => {
    if (typeof v === 'string') {
      element.style.cssText = v;
    } else if (typeof v === 'object') {
      $assign(element.style, v);
    }
  });
  setNonNullableAttr(attr['k-html'], (v) => (element.innerHTML = v));

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
      key === 'k-html' ||
      // & Clearly indicate that we do nothing when its undefined
      attr[key] === undefined
    ) {
      continue;
    }

    // normal event handler
    if (key.startsWith('on:')) {
      const eventName = key.slice(3);
      // & It is weird but we can make listeners reactable
      setAttr(attr[key], (v, old) => {
        element.removeEventListener(eventName, old);
        element.addEventListener(eventName, v);
      });
      continue;
    }

    const handler = handlers[key] ?? defaultHandler;
    setAttr(attr[key], (v) => handler(element, key, v));
  }
}
