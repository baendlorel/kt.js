import type { RawAttr, KAttribute } from '@/types/h.js';
import { $throw, $keys, $setAttr, $on } from '@ktjs/shared';

function booleanHandler(element: HTMLElement, key: string, value: any) {
  if (key in element) {
    (element as any)[key] = !!value;
  } else {
    $setAttr.call(element, key, value);
  }
}

function valueHandler(element: HTMLElement, key: string, value: any) {
  if (key in element) {
    (element as any)[key] = value;
  } else {
    $setAttr.call(element, key, value);
  }
}

// Attribute handlers map for optimized lookup
const handlers: Record<string, (element: HTMLElement, key: string, value: any) => void> = {
  checked: booleanHandler,
  selected: booleanHandler,
  value: valueHandler,
  valueAsDate: valueHandler,
  valueAsNumber: valueHandler,
  defaultValue: valueHandler,
  defaultChecked: booleanHandler,
  defaultSelected: booleanHandler,
  disabled: booleanHandler,
  readOnly: booleanHandler,
  multiple: booleanHandler,
  required: booleanHandler,
  autofocus: booleanHandler,
  open: booleanHandler,
  controls: booleanHandler,
  autoplay: booleanHandler,
  loop: booleanHandler,
  muted: booleanHandler,
  defer: booleanHandler,
  async: booleanHandler,
  hidden: function (element, _key, value) {
    element.hidden = !!value;
  },
};

const defaultHandler = function (element: HTMLElement, key: string, value: any) {
  return $setAttr.call(element, key, value);
};

function attrIsObject(element: HTMLElement, attr: KAttribute) {
  const classValue = attr.class;
  const style = attr.style;
  if (classValue !== undefined) {
    element.className = classValue;
    delete attr.class;
  }

  if (style) {
    if (typeof style === 'string') {
      $setAttr.call(element, 'style', style);
    } else if (typeof style === 'object') {
      for (const key in style) {
        element.style[key as any] = (style as any)[key];
      }
    }
    delete attr.style;
  }

  const keys = $keys(attr) as Array<keyof KAttribute & string>;
  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i];
    const o = attr[key];

    // force register @xxx as an event handler
    // !if o is not valid, the throwing job will be done by $on, not kt.js
    if (key.startsWith('@')) {
      $on.call(element, key.slice(1), o); // chop off the `@`
      continue;
    }

    if (typeof o !== 'function') {
      (handlers[key] || defaultHandler)(element, key, o);
    } else {
      $on.call(element, key, o);
    }
  }

  if (classValue !== undefined) {
    attr.class = classValue;
  }
  if (style !== undefined) {
    attr.style = style;
  }
}

export function applyAttr(element: HTMLElement, attr: RawAttr) {
  if (typeof attr === 'string') {
    element.className = attr;
  } else if (typeof attr === 'object' && attr !== null) {
    attrIsObject(element, attr as KAttribute);
  } else {
    $throw('__func__ attr must be an object.');
  }
}
