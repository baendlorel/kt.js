import type { KTReactifyProps } from '../reactable/types.js';
import type { KTRawAttr, KTAttribute } from '../types/h.js';
import { isKT } from '../reactable/common.js';
import { $addNodeCleanup, $removeNode } from '../jsx/anchor.js';
import { handlers } from './attr-helpers.js';

const defaultHandler = (element: HTMLElement | SVGElement | MathMLElement, key: string, value: any) =>
  element.setAttribute(key, value);

const setElementStyle = (
  element: HTMLElement | SVGElement | MathMLElement,
  style: Partial<CSSStyleDeclaration> | string,
) => {
  if (typeof style === 'string') {
    (element as HTMLElement).style.cssText = style;
    return;
  }

  for (const key in style) {
    (element as any).style[key as any] = style[key];
  }
};

const addReactiveCleanup = (
  element: HTMLElement | SVGElement | MathMLElement,
  reactive: {
    addOnChange: (handler: (value: any) => void, key?: any) => unknown;
    removeOnChange: (key: any) => unknown;
  },
  handler: (value: any) => void,
) => {
  reactive.addOnChange(handler, handler);
  $addNodeCleanup(element, () => reactive.removeOnChange(handler));
};

function attrIsObject(element: HTMLElement | SVGElement | MathMLElement, attr: KTReactifyProps<KTAttribute>) {
  const classValue = attr.class || attr.className;
  if (classValue !== undefined) {
    if (isKT<string>(classValue)) {
      element.setAttribute('class', classValue.value);
      addReactiveCleanup(element, classValue, (v) => element.setAttribute('class', v));
    } else {
      element.setAttribute('class', classValue);
    }
  }

  const style = attr.style;
  if (style) {
    if (typeof style === 'string') {
      element.setAttribute('style', style);
    } else if (typeof style === 'object') {
      if (isKT(style)) {
        setElementStyle(element, style.value);
        addReactiveCleanup(element, style, (v: Partial<CSSStyleDeclaration> | string) => setElementStyle(element, v));
      } else {
        setElementStyle(element, style as Partial<CSSStyleDeclaration>);
      }
    }
  }

  // ! Security: `k-html` is an explicit raw HTML escape hatch. kt.js intentionally does not sanitize here; callers must pass only trusted HTML.
  if ('k-html' in attr) {
    const html = attr['k-html'];
    const setHTML = (value: any) => {
      while (element.firstChild) {
        $removeNode(element.firstChild);
      }
      element.innerHTML = value;
    };
    if (isKT(html)) {
      setHTML(html.value);
      addReactiveCleanup(element, html, (v) => setHTML(v));
    } else {
      setHTML(html);
    }
  }

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
      key === 'k-html'
    ) {
      continue;
    }

    const o = attr[key];

    // normal event handler
    if (key.startsWith('on:')) {
      if (o) {
        const eventName = key.slice(3);
        element.addEventListener(eventName, o); // chop off the `on:`
        $addNodeCleanup(element, () => element.removeEventListener(eventName, o));
      }
      continue;
    }

    // normal attributes
    // Security: all non-`on:` attributes are forwarded as-is.
    // Dangerous values such as raw `on*`, `href`, `src`, `srcdoc`, SVG href, etc.
    // remain the caller's responsibility.
    const handler = handlers[key] || defaultHandler;
    if (isKT(o)) {
      handler(element, key, o.value);
      addReactiveCleanup(element, o, (v) => handler(element, key, v));
    } else {
      handler(element, key, o);
    }
  }
}

export function applyAttr(element: HTMLElement | SVGElement | MathMLElement, attr: KTRawAttr) {
  if (!attr) {
    return;
  }
  if (typeof attr === 'object' && attr !== null) {
    attrIsObject(element, attr as KTAttribute);
  } else {
    $throw('attr must be an object.');
  }
}
