import type { PrimaryContent, SingleContent } from '../types/h.js';
import type { Satisfied } from '../types/type-utils.js';

export const enum AType {
  Content = 'kt-content',
  Fragment = 'kt-fragment',
  For = 'kt-for',
  If = 'kt-if',
  Async = 'kt-async',
}

const rm = Comment.prototype.remove;
export abstract class KTAnchor extends Comment {
  readonly atype: AType;

  constructor(atype: AType) {
    super();
    this.atype = atype;
  }

  abstract _appendTo(parent: Element): this; // parent.appendChild(this);

  /**
   * Remove the elements related but **not itself**.
   * - Will be called when the anchor is removed.
   */
  abstract _remove(): void;

  /**
   * [WARN] Different from `_remove`, removes the elements **and itself**.
   */
  remove(): void {
    this._remove.call(this);
    rm.call(this);
  }
}

export const isAnchor = (o: any): o is KTAnchor => typeof o?.atype === 'string';

/**
 * @alias isAppendable Can be appended to DOM, has `_appendTo` method. Not necessarily a KTAnchor.
 */
export const isAppendable = (o: any): o is KTAnchor => typeof o?._appendTo === 'function';

export const _node = (c: PrimaryContent): Node =>
  typeof (c as any)?.nodeType === 'number' ? (c as Node) : document.createTextNode(c as Satisfied);
