import type { JSXTag } from '@ktjs/shared';
import type { JSX } from '../types/jsx.js';
import type { KTAttribute } from '../types/h.js';

import { h } from '../h/index.js';
import { isKT, type KTReactive } from '../reactable/index.js';
import { jsxh } from './common.js';
import { AType, KTAnchor } from '../common/anchor.js';
import { Satisfied } from '../types/type-utils.js';

export class KTIfAnchor extends KTAnchor {
  private _condition: KTReactive<any>;
  private _current: Node | this;
  private _if: () => Node;
  private _else: () => Node;

  constructor(
    condition: KTReactive<any>,
    tagIf: JSXTag,
    propsIf: () => KTAttribute,
    tagElse?: JSXTag,
    propsElse?: () => KTAttribute,
  ) {
    super(AType.If);
    this._condition = condition;
    this._current = this;

    if (typeof tagIf === 'function') {
      this._if = () => tagIf(propsIf());
    } else {
      this._if = () => {
        const p = propsIf();
        return h(tagIf, p, p.children);
      };
    }

    if (tagElse === undefined) {
      this._else = () => this;
    } else {
      if (typeof tagElse === 'function') {
        this._else = () => tagElse(propsElse!());
      } else {
        this._else = () => {
          const p = propsElse!();
          return h(tagElse, p, p.children);
        };
      }
    }

    condition.listen((v) => {
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

// TODO 逻辑放到 KTIfAnchor 内部
export function KTIf(
  condition: any | KTReactive<any>,
  tagIf: JSXTag,
  propsIf: () => KTAttribute,
  tagElse?: JSXTag,
  propsElse?: () => KTAttribute,
): JSX.Element {
  if (isKT(condition)) {
    return new KTIfAnchor(condition, tagIf, propsIf, tagElse, propsElse) as JSX.Element & KTIfAnchor;
  } else {
    if (condition) {
      return jsxh(tagIf, propsIf());
    } else {
      if (tagElse) {
        return jsxh(tagElse, propsElse!());
      } else {
        return null as Satisfied; // !This should be filtered by `append` and `_appendTo`
      }
    }
  }
}
