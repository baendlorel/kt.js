import type { JSXTag } from '@ktjs/shared';
import type { KTAttribute } from '../types/h.js';
import type { KTReactiveLike } from '../reactable/reactive.js';

import { isKT } from '../reactable/index.js';
import { $addNodeCleanup, $removeNodeCleanup, $replaceNode } from './anchor.js';
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
    const cleanup = () => condition.removeOnChange(onChange);
    const onChange = (newValue: any) => {
      const old = current;
      current = newValue ? jsxh(tagIf, propsIf) : jsxh(tagElse!, propsElse!);
      $removeNodeCleanup(old, cleanup);
      $addNodeCleanup(current, cleanup);
      $replaceNode(old, current);
    };
    condition.addOnChange(onChange, onChange);
    $addNodeCleanup(current, cleanup);
    return current;
  } else {
    const dummy = placeholder('kt-conditional') as HTMLElement;
    let current = condition.value ? jsxh(tagIf, propsIf) : dummy;
    const cleanup = () => condition.removeOnChange(onChange);
    const onChange = (newValue: any) => {
      const old = current;
      current = newValue ? jsxh(tagIf, propsIf) : dummy;
      $removeNodeCleanup(old, cleanup);
      $addNodeCleanup(current, cleanup);
      $replaceNode(old, current);
    };
    condition.addOnChange(onChange, onChange);
    $addNodeCleanup(current, cleanup);
    return current;
  }
}
