import { deferedBranchDynamic } from 'defered-branch';
import { RawAttribute, KAttribute } from '@/types/h.js';
import { $isObject, $setAttr, $isArray, $assign, $keys, $domTokenListAdd } from '@/lib/index.js';

const attrIsString = (element: HTMLElement, attr: RawAttribute) => {
  attr = attr as string;

  element.className = attr;
};

const attrIsObject = (element: HTMLElement, attr: RawAttribute) => {
  attr = attr as KAttribute;

  if (attr.class) {
    if ($isArray(attr.class)) {
      $domTokenListAdd.apply(element.classList, attr.class);
    } else {
      element.className = attr.class;
    }
    delete attr.class;
  }

  if (attr.style) {
    if (typeof attr.style === 'string') {
      element.setAttribute('style', attr.style);
    } else {
      $assign(element.style, attr.style);
    }
    delete attr.style;
  }

  const keys = $keys(attr);
  const keysLen = keys.length;
  for (let i = 0; i < keysLen; i++) {
    const key = keys[i];
    const o = attr[key];

    if (typeof o === 'function') {
      throw new TypeError(`[__NAME__:h] Must use kon/koff to register events.`);
    }

    // * Boolean attributes that should be set as properties
    if (key === 'checked') {
      if (element instanceof HTMLInputElement) {
        element.checked = Boolean(o);
      } else {
        $setAttr.call(element, key, o);
      }
      continue;
    }

    // * Handle value property for form elements
    if (key === 'value') {
      if (
        element instanceof HTMLInputElement ||
        element instanceof HTMLSelectElement ||
        element instanceof HTMLTextAreaElement
      ) {
        element.value = o;
      } else {
        $setAttr.call(element, key, o);
      }
      continue;
    }

    if (key === 'selected') {
      if (element instanceof HTMLOptionElement) {
        element.selected = Boolean(o);
      } else {
        $setAttr.call(element, key, o);
      }
      continue;
    }

    // * Handle defaultValue for form elements
    if (key === 'defaultValue') {
      if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        element.defaultValue = String(o);
      } else {
        $setAttr.call(element, key, o);
      }
      continue;
    }

    // * Handle defaultChecked for checkboxes and radios
    if (key === 'defaultChecked') {
      if (element instanceof HTMLInputElement) {
        element.defaultChecked = Boolean(o);
      } else {
        $setAttr.call(element, key, o);
      }
      continue;
    }

    // * Handle defaultSelected for options
    if (key === 'defaultSelected') {
      if (element instanceof HTMLOptionElement) {
        element.defaultSelected = Boolean(o);
      } else {
        $setAttr.call(element, key, o);
      }
      continue;
    }

    if (key === 'disabled') {
      if (
        element instanceof HTMLInputElement ||
        element instanceof HTMLButtonElement ||
        element instanceof HTMLSelectElement ||
        element instanceof HTMLOptGroupElement ||
        element instanceof HTMLOptionElement ||
        element instanceof HTMLFieldSetElement ||
        element instanceof HTMLTextAreaElement
      ) {
        element.disabled = Boolean(o);
      } else {
        $setAttr.call(element, key, o);
      }
      continue;
    }

    if (key === 'readOnly') {
      if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        element.readOnly = Boolean(o);
      } else {
        $setAttr.call(element, key, o);
      }
      continue;
    }

    if (key === 'multiple') {
      if (element instanceof HTMLSelectElement) {
        element.multiple = Boolean(o);
      } else {
        $setAttr.call(element, key, o);
      }
      continue;
    }

    if (key === 'autofocus') {
      if (
        element instanceof HTMLInputElement ||
        element instanceof HTMLButtonElement ||
        element instanceof HTMLSelectElement ||
        element instanceof HTMLTextAreaElement
      ) {
        element.autofocus = Boolean(o);
      } else {
        $setAttr.call(element, key, o);
      }
      continue;
    }

    if (key === 'required') {
      if (
        element instanceof HTMLInputElement ||
        element instanceof HTMLSelectElement ||
        element instanceof HTMLTextAreaElement
      ) {
        element.required = Boolean(o);
      } else {
        $setAttr.call(element, key, o);
      }
      continue;
    }

    if (key === 'hidden') {
      element.hidden = Boolean(o);
      continue;
    }

    // * Handle other boolean attributes that should be properties
    if (key === 'open' && element instanceof HTMLDetailsElement) {
      element.open = Boolean(o);
      continue;
    }

    if (key === 'controls' && element instanceof HTMLMediaElement) {
      element.controls = Boolean(o);
      continue;
    }

    if (key === 'autoplay' && element instanceof HTMLMediaElement) {
      element.autoplay = Boolean(o);
      continue;
    }

    if (key === 'loop' && element instanceof HTMLMediaElement) {
      element.loop = Boolean(o);
      continue;
    }

    if (key === 'muted' && element instanceof HTMLMediaElement) {
      element.muted = Boolean(o);
      continue;
    }

    if (key === 'defer' && element instanceof HTMLScriptElement) {
      element.defer = Boolean(o);
      continue;
    }

    if (key === 'async' && element instanceof HTMLScriptElement) {
      element.async = Boolean(o);
      continue;
    }

    // * Consider as a custom attribute
    $setAttr.call(element, String(key), o);
  }
};

const invalid = (): never => {
  throw new TypeError('[__NAME__:h] attr must be an object.');
};

type BranchFn = (element: HTMLElement, attr: RawAttribute) => void;
type NoMatchFn = typeof invalid;
type PredicateFn = (_: null, attr: RawAttribute) => boolean;

export const attrBranch = deferedBranchDynamic<BranchFn, NoMatchFn, PredicateFn>()
  .add((_, attr) => typeof attr === 'string', attrIsString)
  .add((_, attr) => $isObject(attr), attrIsObject)
  .nomatch(invalid);
