import { $replaceNode, JSXTag } from '@ktjs/shared';
import type { KTAttribute } from '../types/h.js';
import type { KElseElement, KIfElement } from '../types/directives.js';
import type { KTReactive } from '../types/reactive.js';

import { $initRef, isKT, toReactive } from '../reactive/index.js';
import { jsxh, placeholder } from './common.js';

// # Only supports k-if/k-else, not k-else-if
export function kif(tag: JSXTag, props: KTAttribute): KIfElement {
  const kif = toReactive(props['k-if']);

  let el = (kif.value ? jsxh(tag, props) : placeholder('k-if')) as KIfElement;
  el.__kif__ = kif;
  const setter = $initRef(props, el);

  kif.addOnChange((newValue) => {
    const old = el;
    el = (newValue ? jsxh(tag, props) : placeholder('k-if')) as KIfElement;
    el.__kif__ = kif;
    setter(props, el);
    $replaceNode(old, el);
  });

  return el;
}

export function kelse(tag: JSXTag, props: KTAttribute): KElseElement {
  // k-else is not rendered by default
  // until its corresponding k-if is true, then it will be rendered
  // this will be detected when dealing with `children`
  let el = placeholder('k-else') as KElseElement;
  const setter = $initRef(props, el);
  el.__kelse__ = (newValue: boolean) => {
    const old = el;
    // reverse logic of `if`
    el = (newValue ? placeholder('k-else') : jsxh(tag, props)) as KElseElement;
    el.__kelse__ = old.__kelse__; // inherit
    setter(props, el);
    $replaceNode(old, el);
  };

  return el;
}

/**
 * Deal with `k-if` and `k-else`, checking syntax and applying listeners
 * @param el parent element
 */
export function kifelseApply(el: HTMLElement) {
  const childNodes = el.childNodes;

  // & We only need to check for k-else
  if (childNodes.length === 0) {
    return;
  }
  if ((childNodes[0] as KElseElement).__kelse__) {
    $throw('k-else cannot be the first child of its parent element.');
  }
  for (let i = 1; i < childNodes.length; i++) {
    const child = childNodes[i] as KElseElement;
    if (!child.__kelse__) {
      continue;
    }
    const last = childNodes[i - 1] as KIfElement;
    if (!('__kif__' in last)) {
      $throw('k-else must be immediately preceded by a k-if element.');
    }

    // falsy __kif__, not rendering
    const kif = last.__kif__;
    if (!kif) {
      continue;
    }

    if (!isKT(kif)) {
      continue;
    }
    kif.addOnChange(child.__kelse__);
    if (!kif.value) {
      child.__kelse__(false);
    }
  }
}
