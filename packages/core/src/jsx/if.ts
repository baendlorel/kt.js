import type { JSXTag } from '@ktjs/shared';
import type { KTAttribute } from '../types/h.js';

import { isKT, type KTReactive } from '../reactable/index.js';
import { $mountFragmentAnchors } from './anchor.js';
import { jsxh, placeholder } from './common.js';

export function KTIf(
  condition: any | KTReactive<any>,
  tagIf: JSXTag,
  propsIf: () => KTAttribute,
  tagElse?: JSXTag,
  propsElse?: () => KTAttribute,
) {
  const dummy = placeholder('kt-conditional') as HTMLElement;
  const renderIf = () => jsxh(tagIf, propsIf());
  const renderElse = tagElse && propsElse ? () => jsxh(tagElse, propsElse()) : () => dummy;

  if (!isKT(condition)) {
    return condition ? renderIf() : renderElse();
  }

  let current = condition.value ? renderIf() : renderElse();
  const onChange = (newValue: any) => {
    const old = current;
    current = newValue ? renderIf() : renderElse();
    old.replaceWith(current);
    $mountFragmentAnchors(current);
  };
  condition.addOnChange(onChange);
  return current;
}
