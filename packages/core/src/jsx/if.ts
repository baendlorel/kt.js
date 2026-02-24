import type { JSXTag } from '@ktjs/shared';
import type { KTAttribute } from '../types/h.js';
import type { KTReactive } from '../types/reactive.js';

import { isKT } from '../reactive/index.js';
import { jsxh, placeholder } from './common.js';

export function KTConditional(
  condition: boolean | KTReactive<boolean>,
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
      old.replaceWith(current);
    });
    return current;
  } else {
    const dummy = placeholder('kt-conditional') as HTMLElement;
    let current = condition.value ? jsxh(tagIf, propsIf) : dummy;
    condition.addOnChange((newValue) => {
      const old = current;
      current = newValue ? jsxh(tagIf, propsIf) : dummy;
      old.replaceWith(current);
    });
    return current;
  }
}
