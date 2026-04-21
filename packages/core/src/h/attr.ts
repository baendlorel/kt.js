import type { JSX } from '../types/jsx.js';
import type { KTReactifyProps } from '../reactable/types.js';
import type { KTRawAttr, KTAttribute } from '../types/h.js';

import { $assign, $isArray } from '@ktjs/shared';
import { static_cast } from 'type-narrow';
import { isKT } from '../reactable/common.js';
import { handlers } from './attr-helpers.js';

const defaultHandler = (element: JSX.Element, key: string, value: any) => element.setAttribute(key, value);

const setAttr = (value: any, setter: (value: any, oldValue: any) => void) => {
  if (isKT(value)) {
    setter(value.value, value.value);
    value.addOnChange(setter);
  } else {
    setter(value, value);
  }
};
const setNonNullableAttr = (value: any, setter: (value: any, oldValue: any) => void) => {
  if (value === undefined) {
    return;
  }
  if (isKT(value)) {
    setter(value.value, value.value);
    value.addOnChange(setter);
  } else {
    setter(value, value);
  }
};

function attrIsObject(element: JSX.Element, attr: KTReactifyProps<KTAttribute>) {
  setNonNullableAttr(attr.class ?? attr.className, (v) => (element.classList = $isArray(v) ? v.join(' ') : v));
  if ('style' in element) {
    static_cast<HTMLElement>(element);
    setNonNullableAttr(attr.style, (v: Partial<CSSStyleDeclaration> | string) => {
      if (typeof v === 'string') {
        element.style.cssText = v;
      } else if (typeof v === 'object') {
        $assign(element.style, v);
      }
    });
  }

  // ?? 如何在元素消失后自动消除html的onChangeHandler呢
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

export function applyAttr(element: JSX.Element, attr: KTRawAttr) {
  if (attr) {
    if (typeof attr === 'object') {
      attrIsObject(element, attr as KTAttribute);
    } else {
      $throw('attr must be an object.');
    }
  }
}
