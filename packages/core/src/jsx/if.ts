import type { JSXTag } from '@ktjs/shared';
import type { JSX } from '../types/jsx.js';
import type { KTAttribute } from '../types/h.js';

import { isKT, type KTReactive } from '../reactable/index.js';
import { jsxh } from './common.js';
import { AType, KTAnchor } from '../common/anchor.js';

export class KTIfAnchor extends KTAnchor {
  constructor() {
    super(AType.If);
  }
}

// TODO 逻辑放到 KTIfAnchor 内部
export function KTIf(
  condition: any | KTReactive<any>,
  tagIf: JSXTag,
  propsIf: () => KTAttribute,
  tagElse?: JSXTag,
  propsElse?: () => KTAttribute,
): JSX.Element {
  const dummy = new KTIfAnchor() as unknown as JSX.Element;
  const renderIf = () => jsxh(tagIf, propsIf());
  const renderElse = tagElse && propsElse ? () => jsxh(tagElse, propsElse()) : () => dummy;

  if (!isKT(condition)) {
    return condition ? renderIf() : renderElse();
  }

  let current = condition.value ? renderIf() : renderElse();
  const onChange = (newValue: any) => {
    const old = current;
    current = newValue ? renderIf() : renderElse();
    old.replaceWith(current); // $mountFragmentAnchors(current);
  };
  condition.listen(onChange);
  return current;
}
