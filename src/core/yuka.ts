import { yoff, yon } from './enhance.js';
import { defineProperty, isArray, isObject, set } from './native.js';

let yid = 0;

/**
 * Create an enhanced HTMLElement.
 * @param tagName tag of an HTMLElement
 * @param attr attribute or className
 * @param content a string or an array of HTMLElements as child nodes
 */
function h<Tag extends keyof HTMLElementTagNameMap>(
  tagName: Tag,
  attr: YukaAttribute | string = '',
  content: HTMLElement[] | string = ''
): HTMLElementEnhanced<Tag> {
  if (typeof tagName !== 'string') {
    throw new TypeError('[__NAME__:h] tagName must be a string.');
  }
  if (typeof attr !== 'string' && !isObject<YukaAttribute>(attr)) {
    throw new TypeError('[__NAME__:h] attr must be an object.');
  }
  if (typeof content !== 'string' && !isArray(content)) {
    throw new TypeError('[__NAME__:h] content must be a string or an array of html elements.');
  }

  const element = document.createElement<Tag>(tagName) as HTMLElementEnhanced<Tag>;

  // * Add enhancing methods

  defineProperty(element, 'yid', { value: ++yid, enumerable: true });
  element.yon = yon;
  element.yoff = yoff;

  const textNode: Node = document.createTextNode('');

  element.appendChild(textNode);

  if (typeof content === 'string') {
    textNode.textContent = content;
  }

  if (!attr) {
    return element;
  }

  if (typeof attr === 'string') {
    element.className = attr;
    return element;
  }

  if (attr.class) {
    if (Array.isArray(attr.class)) {
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
      for (const [prop, s] of Object.entries(attr.style)) {
        set(element.style, prop, s);
      }
    }
    delete attr.style;
  }

  const keys = Object.keys(attr);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const o = attr[key];

    if (typeof o === 'function') {
      console.warn(
        `[__NAME__:h] It is recommended that using yon/yoff to register events. Functions will not be handled here.`
      );
    }

    // * Handle innerHTML/textContent
    if (key === 'innerHTML') {
      element.innerHTML = String(o);
      continue;
    }
    if (key === 'textContent') {
      textNode.textContent = String(o);
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

    if (key === 'selected') {
      if (element instanceof HTMLOptionElement) {
        element.selected = Boolean(o);
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
