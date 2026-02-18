import { $replaceNode, JSXTag } from '@ktjs/shared';
import type { KTAttribute } from '../types/h.js';
import type { KElseElement, KIfElement } from '../types/directives.js';
import type { KTReactive } from '../types/reactive.js';

import { isKT, $initRef, toReactive } from '../reactive/index.js';
import { jsxh, kifPlaceholder } from './common.js';

// # Only supports k-if/k-else, not k-else-if
export function kif(tag: JSXTag, props: KTAttribute): KIfElement {
  const kif = toReactive(props['k-if']);

  // todo 这里的逻辑有点混乱，应该重构一下
  // 先创建元素出来；
  let el = kif.value ? (jsxh(tag, props) as KIfElement) : kifPlaceholder();
  // 给el加上一个__kIf属性，指向这个kif的reactive；
  el.__kif = kif;

  const setter = $initRef(props, el);
  kif.addOnChange((newValue) => {
    const old = el;
    el = createIf(tag, props, newValue);
    setter(props, el);
    $replaceNode(old, el);
  });

  return el;

  // todo 要在children里搜索k-else并处理它
  // todo kfor的编译方式：在插件帮助下，将k-for编译为 k-for接收一个list，如果可以定义一个item变量和index，那么将children编译为()=>children的函数，用以创建
}

export function kelse(tag: JSXTag, props: KTAttribute): KElseElement {
  let el = createIf(tag, props, false) as KElseElement;
  const setter = $initRef(props, el);
  el.__kElse = (newValue: boolean) => {
    const old = el;
    el = createIf(tag, props, !newValue);
    setter(props, el);
    $replaceNode(old, el);
  };
  $initRef(props, el);
  return el;
}

function createIf(tag: JSXTag, props: KTAttribute, ifValue: boolean | KTReactive<boolean>): KIfElement {
  const ifValueRef = toReactive(ifValue);
  const el = ifValueRef.value ? (jsxh(tag, props) as KIfElement) : kifPlaceholder();
  el.__kif = ifValueRef;
  return el;
}
