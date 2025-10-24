import { RawAttribute, KAttribute } from '@/types/h.js';
import { $isObject, $setAttr, $assign, $keys, $isInput } from '@/lib/index.js';

function attrIsString(element: HTMLElement, attr: string) {
  element.className = attr;
}

// Attribute handlers map for optimized lookup
const handlers: Record<string, (element: HTMLElement, key: string, value: any) => void> = {
  checked: (element, key, value) => {
    if (element instanceof HTMLInputElement) {
      element.checked = Boolean(value);
    } else {
      $setAttr.call(element, key, value);
    }
  },
  value: (element, key, value) => {
    if ($isInput(element)) {
      element.value = value;
    } else {
      $setAttr.call(element, key, value);
    }
  },
  selected: (element, key, value) => {
    if (element instanceof HTMLOptionElement) {
      element.selected = Boolean(value);
    } else {
      $setAttr.call(element, key, value);
    }
  },
  defaultValue: (element, key, value) => {
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      element.defaultValue = String(value);
    } else {
      $setAttr.call(element, key, value);
    }
  },
  defaultChecked: (element, key, value) => {
    if (element instanceof HTMLInputElement) {
      element.defaultChecked = Boolean(value);
    } else {
      $setAttr.call(element, key, value);
    }
  },
  defaultSelected: (element, key, value) => {
    if (element instanceof HTMLOptionElement) {
      element.defaultSelected = Boolean(value);
    } else {
      $setAttr.call(element, key, value);
    }
  },
  disabled: (element, key, value) => {
    if (key in element) {
      (element as any)[key] = Boolean(value);
    } else {
      $setAttr.call(element, key, value);
    }
  },
  readOnly: (element, key, value) => {
    if (key in element) {
      (element as any)[key] = Boolean(value);
    } else {
      $setAttr.call(element, key, value);
    }
  },
  multiple: (element, key, value) => {
    if (key in element) {
      (element as any)[key] = Boolean(value);
    } else {
      $setAttr.call(element, key, value);
    }
  },
  required: (element, key, value) => {
    if (key in element) {
      (element as any)[key] = Boolean(value);
    } else {
      $setAttr.call(element, key, value);
    }
  },
  autofocus: (element, key, value) => {
    if (key in element) {
      (element as any)[key] = Boolean(value);
    } else {
      $setAttr.call(element, key, value);
    }
  },
  hidden: (element, _key, value) => {
    element.hidden = Boolean(value);
  },
  open: (element, key, value) => {
    if (element instanceof HTMLDetailsElement) {
      element.open = Boolean(value);
    } else {
      $setAttr.call(element, key, value);
    }
  },
  controls: (element, key, value) => {
    if (element instanceof HTMLMediaElement) {
      element.controls = Boolean(value);
    } else {
      $setAttr.call(element, key, value);
    }
  },
  autoplay: (element, key, value) => {
    if (element instanceof HTMLMediaElement) {
      element.autoplay = Boolean(value);
    } else {
      $setAttr.call(element, key, value);
    }
  },
  loop: (element, key, value) => {
    if (element instanceof HTMLMediaElement) {
      element.loop = Boolean(value);
    } else {
      $setAttr.call(element, key, value);
    }
  },
  muted: (element, key, value) => {
    if (element instanceof HTMLMediaElement) {
      element.muted = Boolean(value);
    } else {
      $setAttr.call(element, key, value);
    }
  },
  defer: (element, key, value) => {
    if (element instanceof HTMLScriptElement) {
      element.defer = Boolean(value);
    } else {
      $setAttr.call(element, key, value);
    }
  },
  async: (element, key, value) => {
    if (element instanceof HTMLScriptElement) {
      element.async = Boolean(value);
    } else {
      $setAttr.call(element, key, value);
    }
  },
};

const defaultHandler = (element: HTMLElement, key: string, value: any) => $setAttr.call(element, key, value);

function attrIsObject(element: HTMLElement, attr: KAttribute) {
  if (attr.class) {
    element.className = attr.class;
  }

  if (attr.style) {
    if (typeof attr.style === 'string') {
      element.setAttribute('style', attr.style);
    } else {
      $assign(element.style, attr.style);
    }
  }

  const keys = $keys(attr).filter((k) => k !== 'class' && k !== 'style') as (keyof KAttribute & string)[];
  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i];
    const o = attr[key];

    if (typeof o !== 'function') {
      (handlers[key] || defaultHandler)(element, key, o);
    } else {
      element.addEventListener(key, o);
    }
  }
}

export function applyAttr(element: HTMLElement, attr: RawAttribute) {
  if (typeof attr === 'string') {
    attrIsString(element, attr);
  } else if ($isObject<KAttribute>(attr)) {
    attrIsObject(element, attr);
  } else {
    throw new TypeError('[__NAME__: __func__] attr must be an object.');
  }
}
