import { RawAttribute, KAttribute } from '@/types/h.js';
import { $isObject, $setAttr, $assign, $keys, $isInput } from '@/lib/index.js';

function attrIsString(element: HTMLElement, attr: string) {
  element.className = attr;
}

const isOptionalBooleanKey = (key: string) =>
  key === 'disabled' || key === 'readOnly' || key === 'multiple' || key === 'required' || key === 'autofocus';

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
  const keysLen = keys.length;
  for (let i = 0; i < keysLen; i++) {
    const key = keys[i];
    const o = attr[key];

    if (typeof o === 'function') {
      element.addEventListener(key, o);
    } else if (key === 'checked') {
      // * Boolean attributes that should be set as properties
      if (element instanceof HTMLInputElement) {
        element.checked = Boolean(o);
      } else {
        $setAttr.call(element, key, o);
      }
    } else if (key === 'value') {
      // * Handle value property for form elements
      if ($isInput(element)) {
        element.value = o;
      } else {
        $setAttr.call(element, key, o);
      }
    } else if (key === 'selected') {
      if (element instanceof HTMLOptionElement) {
        element.selected = Boolean(o);
      } else {
        $setAttr.call(element, key, o);
      }
    } else if (key === 'defaultValue') {
      // * Handle defaultValue for form elements
      if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        element.defaultValue = String(o);
      } else {
        $setAttr.call(element, key, o);
      }
    } else if (key === 'defaultChecked') {
      // * Handle defaultChecked for checkboxes and radios
      if (element instanceof HTMLInputElement) {
        element.defaultChecked = Boolean(o);
      } else {
        $setAttr.call(element, key, o);
      }
    } else if (key === 'defaultSelected') {
      // * Handle defaultSelected for options
      if (element instanceof HTMLOptionElement) {
        element.defaultSelected = Boolean(o);
      } else {
        $setAttr.call(element, key, o);
      }
    } else if (isOptionalBooleanKey(key)) {
      if (key in element) {
        (element as any)[key] = Boolean(o);
      } else {
        $setAttr.call(element, key, o);
      }
    } else if (key === 'hidden') {
      element.hidden = Boolean(o);
    } else if (key === 'open' && element instanceof HTMLDetailsElement) {
      // * Handle other boolean attributes that should be properties
      element.open = Boolean(o);
    } else if (key === 'controls' && element instanceof HTMLMediaElement) {
      element.controls = Boolean(o);
    } else if (key === 'autoplay' && element instanceof HTMLMediaElement) {
      element.autoplay = Boolean(o);
    } else if (key === 'loop' && element instanceof HTMLMediaElement) {
      element.loop = Boolean(o);
    } else if (key === 'muted' && element instanceof HTMLMediaElement) {
      element.muted = Boolean(o);
    } else if (key === 'defer' && element instanceof HTMLScriptElement) {
      element.defer = Boolean(o);
    } else if (key === 'async' && element instanceof HTMLScriptElement) {
      element.async = Boolean(o);
    } else {
      // * Consider as a custom attribute
      $setAttr.call(element, String(key), o);
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
