import type { JSXTag } from '@ktjs/shared';
import type { KTAttribute } from '../types/h.js';
import type { KTReactiveLike } from '../reactable/reactive.js';

import { isKT } from '../reactable/index.js';
import { jsxh, placeholder } from './common.js';

export function KTConditional(
  condition: any | KTReactiveLike<any>,
  tagIf: JSXTag,
  propsIf: KTAttribute,
  tagElse?: JSXTag,
  propsElse?: KTAttribute,
) {
  if (!isKT(condition)) {
    return condition ? jsxh(tagIf, propsIf) : tagElse ? jsxh(tagElse, propsElse!) : placeholder('kt-conditional');
  }

  if (tagElse) {
    let current = condition.value ? jsxh(tagIf, propsIf) : jsxh(tagElse!, propsElse!);
    condition.addOnChange((newValue) => {
      const old = current;
      current = newValue ? jsxh(tagIf, propsIf) : jsxh(tagElse!, propsElse!);
      // TODO(fragment-mount): replaceWith 后显式触发 FragmentAnchor mount（替代全局 Node.prototype patch）
      old.replaceWith(current);
    });
    return current;
  } else {
    const dummy = placeholder('kt-conditional') as HTMLElement;
    let current = condition.value ? jsxh(tagIf, propsIf) : dummy;
    condition.addOnChange((newValue) => {
      const old = current;
      current = newValue ? jsxh(tagIf, propsIf) : dummy;
      // TODO(fragment-mount): replaceWith 后显式触发 FragmentAnchor mount（替代全局 Node.prototype patch）
      old.replaceWith(current);
    });
    return current;
  }
}
