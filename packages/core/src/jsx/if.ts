import { $replaceNode, JSXTag } from '@ktjs/shared';
import type { KTAttribute } from '../types/h.js';
import { isKT, $initElementRef } from '../reactive/index.js';
import { placeholder, createJSXElement } from './common.js';

// # Deal with k-if/k-else
// todo 只需要支持if+else即可，elseif不支持
export function kif(tag: JSXTag, props: KTAttribute): JSX.Element {
  const kif = props['k-if'];

  let el: JSX.Element;
  if (isKT(kif)) {
    kif.addOnChange((newValue, oldValue) => {
      if (newValue === oldValue) {
        return;
      }
      const oldEl = el;
      // todo 用得着每次都判定props.ref吗？难道不是第一次设定好了就不变了
      $initElementRef(props, (el = newValue ? createJSXElement(tag, props) : placeholder('k-if')));
      $replaceNode(oldEl, el);
    });

    el = kif.value ? createJSXElement(tag, props) : placeholder('k-if');
    return $initElementRef(props, (el = createJSXElement(tag, props)));
  }

  el = kif ? createJSXElement(tag, props) : placeholder('k-if');
  return $initElementRef(props, el);
}
