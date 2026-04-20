import type { JSXTag } from '@ktjs/shared';
import type { KTAttribute } from '../types/h.js';
import type { KTReactiveLike } from '../reactable/types.js';

import { isKT } from '../reactable/index.js';
import { $addNodeCleanup, $mountFragmentAnchors, $removeNodeCleanup } from './anchor.js';
import { jsxh, placeholder } from './common.js';

export function KTIf(
  condition: any | KTReactiveLike<any>,
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
  const cleanup = () => condition.removeOnChange(onChange);
  const onChange = (newValue: any) => {
    const old = current;
    current = newValue ? renderIf() : renderElse();
    $removeNodeCleanup(old, cleanup);
    $addNodeCleanup(current, cleanup);
    old.replaceWith(current);
    $mountFragmentAnchors(current);
  };
  condition.addOnChange(onChange, onChange);
  $addNodeCleanup(current, cleanup);
  return current;
}
