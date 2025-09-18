import { Indexer } from '@/utils/indexer.js';
import { koff, kon, kmount } from './enhance.js';
import {
  createElement,
  createTextNode,
  ReflectDefineProperty,
  IsArray,
  IsObject,
  ObjectAssign,
  ObjectKeys,
} from './native.js';

/**
 * Create an enhanced HTMLElement.
 * @param tag tag of an `HTMLElement`
 * @param attr attribute object or className
 * @param content a string or an array of HTMLEnhancedElement as child nodes
 */
export function h<Tag extends HTMLElementTag>(
  tag: Tag,
  attr: KTAttribute | string = '',
  content: (HTMLEnhancedElement | string)[] | string = ''
): HTMLEnhancedElement<Tag> {
  if (typeof tag !== 'string') {
    throw new TypeError('[__NAME__:h] tagName must be a string.');
  }
  if (typeof attr !== 'string' && !IsObject<KTAttribute>(attr)) {
    throw new TypeError('[__NAME__:h] attr must be an object.');
  }
  if (typeof content !== 'string' && !IsArray(content)) {
    throw new TypeError('[__NAME__:h] content must be a string or an array of html elements.');
  }

  const element = createElement<Tag>(tag) as HTMLEnhancedElement<Tag>;

  // * Define enhancing properties
  ReflectDefineProperty(element, 'kid' satisfies keyof KTEnhanced, {
    value: Indexer.nextKid(),
    enumerable: true,
  });
  ReflectDefineProperty(element, 'isKT' satisfies keyof KTEnhanced, { value: true });
  element.kon = kon;
  element.koff = koff;
  element.kmount = kmount;

  // * Handle content
  if (typeof content === 'string') {
    const textNode = createTextNode(content);
    element.appendChild(textNode);
  } else {
    const len = content.length;
    for (let i = 0; i < len; i++) {
      const c = content[i];
      if (typeof c === 'string') {
        element.appendChild(createTextNode(c));
        continue;
      }
      if (c.isKT) {
        element.appendChild(c);
        continue;
      }
      throw new TypeError(
        '[__NAME__:h] content must be a string or an array of HTMLEnhancedElement.'
      );
    }
  }

  if (!attr) {
    return element;
  }

  if (typeof attr === 'string') {
    element.className = attr;
    return element;
  }

  if (attr.class) {
    if (IsArray(attr.class)) {
      element.classList.add(...attr.class);
    } else {
      element.className = attr.class;
    }
    delete attr.class;
  }

  if (attr.style) {
    if (typeof attr.style === 'string') {
      element.setAttribute('style', attr.style);
    } else {
      ObjectAssign(element.style, attr.style);
    }
    delete attr.style;
  }

  const keys = ObjectKeys(attr);
  const keysLen = keys.length;
  for (let i = 0; i < keysLen; i++) {
    const key = keys[i];
    const o = attr[key];

    if (typeof o === 'function') {
      console.warn(
        `[__NAME__:h] It is recommended that using kon/koff to register events. Functions will not be handled here.`
      );
      continue;
    }

    // * Boolean attributes that should be set as properties
    if (key === 'checked') {
      if (element instanceof HTMLInputElement) {
        element.checked = Boolean(o);
      } else {
        element.setAttribute(key, o);
      }
      continue;
    }

    // * Handle value property for form elements
    if (key === 'value') {
      if (
        element instanceof HTMLInputElement ||
        element instanceof HTMLTextAreaElement ||
        element instanceof HTMLSelectElement
      ) {
        element.value = String(o);
      } else {
        element.setAttribute(key, o);
      }
      continue;
    }

    if (key === 'selected') {
      if (element instanceof HTMLOptionElement) {
        element.selected = Boolean(o);
      } else {
        element.setAttribute(key, o);
      }
      continue;
    }

    // * Handle defaultValue for form elements
    if (key === 'defaultValue') {
      if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        element.defaultValue = String(o);
      } else {
        element.setAttribute(key, o);
      }
      continue;
    }

    // * Handle defaultChecked for checkboxes and radios
    if (key === 'defaultChecked') {
      if (element instanceof HTMLInputElement) {
        element.defaultChecked = Boolean(o);
      } else {
        element.setAttribute(key, o);
      }
      continue;
    }

    // * Handle defaultSelected for options
    if (key === 'defaultSelected') {
      if (element instanceof HTMLOptionElement) {
        element.defaultSelected = Boolean(o);
      } else {
        element.setAttribute(key, o);
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
        element.setAttribute(key, o);
      }
      continue;
    }

    if (key === 'readOnly') {
      if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        element.readOnly = Boolean(o);
      } else {
        element.setAttribute(key, o);
      }
      continue;
    }

    if (key === 'multiple') {
      if (element instanceof HTMLSelectElement) {
        element.multiple = Boolean(o);
      } else {
        element.setAttribute(key, o);
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
        element.setAttribute(key, o);
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
        element.setAttribute(key, o);
      }
      continue;
    }

    if (key === 'hidden') {
      (element as any).hidden = Boolean(o);
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
    element.setAttribute(key, o);
  }

  return element;
}

export function scopedH(scopeName: string): typeof h {
  return function (...args: Parameters<typeof h>) {
    const element = h(...args);
    element.setAttribute(scopeName, '');
    return element;
  } as typeof h;
}
