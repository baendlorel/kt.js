import type { JSXTag } from '@ktjs/shared';
import type { JSX } from '../types/jsx.js';
import type { KTAttribute } from '../types/h.js';
import type { Satisfied } from '../types/type-utils.js';

import { h } from '../h/index.js';
import { isKT, type KTReactive } from '../reactable/index.js';
import { jsxh } from './common.js';
import { AType, KTAnchor } from '../common/anchor.js';

type PropGetter = () => KTAttribute;

export class KTIfAnchor extends KTAnchor {
  private _condition: KTReactive<any>;
  private _current: Node | this;
  private _if: () => Node;
  private _else: () => Node;

  private _createRenderer(tag: JSXTag, props: PropGetter): () => Node {
    if (typeof tag === 'function') {
      return () => tag(props());
    } else {
      return () => {
        const p = props();
        return h(tag, p, p.children);
      };
    }
  }

  constructor(cond: KTReactive<any>, a: JSXTag, pa: PropGetter, b?: JSXTag, pb?: PropGetter) {
    super(AType.If);
    this._condition = cond;
    this._current = this;
    this._if = this._createRenderer(a, pa);
    this._else = b === undefined ? () => this : this._createRenderer(b, pb!);

    cond.listen((v) => {
      const old = this._current;
      this._current = v ? this._if() : this._else();
      (old as ChildNode).replaceWith(this._current);
    });
  }

  _appendTo(parent: Element): this {
    this._current = this._condition.value ? this._if() : this._else();
    return parent.appendChild(this);
  }

  _remove(): void {
    this.remove();
  }
}

/**
 * @param cond Can be reactive or static.
 */
export function KTIf(cond: any, tagIf: JSXTag, pIf: PropGetter, tagElse?: JSXTag, pElse?: PropGetter): JSX.Element {
  if (isKT(cond)) {
    return new KTIfAnchor(cond, tagIf, pIf, tagElse, pElse) as JSX.Element & KTIfAnchor;
  } else if (cond) {
    return jsxh(tagIf, pIf());
  } else {
    return tagElse === undefined ? (null as Satisfied) : jsxh(tagElse, pElse!());
  }
}
