import { Yuka, YukaAttribute } from './yuka.js';

export function _h<TN extends keyof HTMLElementTagNameMap>(
  tagName: TN,
  attr?: YukaAttribute | string,
  content?: string,
  scopeName?: string
): Yuka<HTMLElementTagNameMap[TN]> {
  if (typeof tagName !== 'string') {
    throw new Error('[Yuka:h] tagName must be a string');
  }
  if (attr !== undefined && typeof attr !== 'string' && typeof attr !== 'object') {
    throw new Error('[Yuka:h] attributes must be a string or attribute object');
  }
  if (content !== undefined && typeof content !== 'string' && typeof content !== 'object') {
    throw new Error('[Yuka:h] content must be a string or I18NConfig object');
  }
  if (scopeName !== undefined && typeof scopeName !== 'string') {
    throw new Error('[Yuka:h] content must be a string or I18NConfig object');
  }

  const element: HTMLElementTagNameMap[TN] = document.createElement<typeof tagName>(tagName);

  const textNode: Node = document.createTextNode('');

  element.appendChild(textNode);

  if (typeof content === 'string') {
    textNode.textContent = content;
    content = undefined;
  }

  // 注册CSS类
  if (attr) {
    if (typeof attr === 'string' || Array.isArray(attr)) {
      attr = { class: attr };
    }

    if (attr.class) {
      if (Array.isArray(attr.class)) {
        element.classList.add(...attr.class);
      } else {
        element.className = attr.class;
      }
      delete attr.class;
    }

    // 注册样式
    if (attr.style) {
      if (typeof attr.style === 'string') {
        element.setAttribute('style', attr.style);
      } else {
        for (const [prop, style] of Object.entries(attr.style)) {
          (element.style as any)[prop] = style;
        }
      }
      delete attr.style;
    }

    for (const key of Object.keys(attr)) {
      const o = attr[key];

      // * 一些特殊的情况的处理
      // checked用于checkbox和radio
      if (key === 'checked') {
        // HTMLInputElement一定拥有checked属性
        if (element instanceof HTMLInputElement) {
          element.checked = Boolean(o);
        } else {
          element.setAttribute(key, o);
        }
        continue;
      }

      // selected用于option
      if (key === 'selected') {
        // HTMLInputElement一定拥有selected属性
        if (element instanceof HTMLOptionElement && attr.type === 'option') {
          element.selected = Boolean(o);
        } else {
          element.setAttribute(key, o);
        }
        continue;
      }

      // disabled用于button, input, select, textarea, optgroup, option, fieldset
      if (key === 'disabled') {
        // HTMLInputElement一定拥有disabled属性
        if (element instanceof HTMLInputElement || element instanceof HTMLButtonElement) {
          element.disabled = Boolean(o);
        } else {
          element.setAttribute(key, o);
        }
        continue;
      }

      // * 如果属性是on开头，就说明要注册事件
      if (key.match(/^on/g) && typeof o === 'function') {
        element.addEventListener(key.replace(/^on/g, ''), o);
        continue;
      }

      // * 其余情况都当作一半的属性设置，如果属性是undefined则不设置
      if (o !== undefined) {
        element.setAttribute(key, o);
      }
    }
  }

  if (scopeName !== undefined) {
    element.setAttribute(scopeName, '');
  }

  // 准备dom元素完成，剩下的处理在Yuka中完成，包括i18n的应用
  return new Yuka<HTMLElementTagNameMap[TN]>(element, textNode, content);
}
