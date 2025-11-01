import { RawAttr, KAttribute } from '@/types/h.js';
import { $setAttr, $keys, $on } from '@/lib/index.js';
import { throws } from '@/lib/error.js';

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
  const className = attr.class;
  const style = attr.style;
  if (className !== undefined) {
    element.className = className;
    delete attr.class;
  }

  if (style !== undefined) {
    if (typeof style === 'string') {
      $setAttr.call(element, 'style', style);
    } else {
      for (const key in element.style) {
        element.style[key as any] = (style as any)[key];
      }
    }
    delete attr.style;
  }

  const keys = $keys(attr) as (keyof KAttribute & string)[];
  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i];
    const o = attr[key];

    if (typeof o !== 'function') {
      (handlers[key] || defaultHandler)(element, key, o);
    } else {
      $on.call(element, key, o);
    }
  }

  if (className !== undefined) {
    attr.style = className;
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
    throws('__func__ attr must be an object.');
  }
}
