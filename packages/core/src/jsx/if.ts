import { $replaceNode, JSXTag } from '@ktjs/shared';
import type { KTAttribute } from '../types/h.js';
import type { KIfElement } from '../types/directives.js';
import type { KTReactive } from '../types/reactive.js';

import { isKT, $initRef } from '../reactive/index.js';
import { jsxh, kifPlaceholder } from './common.js';

// # Deal with k-if/k-else

// todo 只需要支持if+else即可，elseif不支持
export function kif(tag: JSXTag, props: KTAttribute): KIfElement {
  const kif = props['k-if'];

  const el = create(tag, props, kif);
  if (isKT(kif)) {
    const setter = $initRef(props, el);
    kif.addOnChange((newValue, oldValue) => {
      if (newValue === oldValue) {
        return;
      }
      const oldEl = el;
      setter(props, newValue ? jsxh(tag, props) : kifPlaceholder());
      $replaceNode(oldEl, el);
    });

    return el;
  }

  // todo 要在children里搜索k-else并处理它
  $initRef(props, el);
  return el;
}

function create(tag: JSXTag, props: KTAttribute, ifValue: boolean | KTReactive<boolean>): KIfElement {
  let el: KIfElement;
  if (ifValue) {
    el = jsxh(tag, props) as KIfElement;
  } else {
    el = kifPlaceholder();
  }

  if (isKT(ifValue)) {
    el.__kIf = ifValue;
  }

  return el;
}
