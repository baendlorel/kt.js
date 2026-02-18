import { $replaceNode, JSXTag } from '@ktjs/shared';
import type { KTAttribute } from '../types/h.js';
import type { KElseElement, KIfElement } from '../types/directives.js';
import type { KTReactive } from '../types/reactive.js';

import { $initRef, toReactive } from '../reactive/index.js';
import { jsxh, placeholder } from './common.js';

// # Only supports k-if/k-else, not k-else-if
export function kif(tag: JSXTag, props: KTAttribute): KIfElement {
  const kif = toReactive(props['k-if']);

  // todo 这里的逻辑有点混乱，应该重构一下
  // 先创建元素出来；
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

  // todo 要在children里搜索k-else并处理它
  // todo kfor的编译方式：在插件帮助下，将k-for编译为 k-for接收一个list，如果可以定义一个item变量和index，那么将children编译为()=>children的函数，用以创建
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
