import type { JSX } from '../types/jsx.js';
import type { PrimaryContent } from '../types/h.js';
import type { Satisfied } from '../types/type-utils.js';

export const enum AType {
  Null = 'kt-null',
  Content = 'kt-content',
  Fragment = 'kt-fragment',
  For = 'kt-for',
  If = 'kt-if',
  Async = 'kt-async',
}

// # Main Anchor class
const rm = Comment.prototype.remove;
export abstract class KTAnchor extends Comment {
  readonly atype: AType;

  constructor(atype: AType) {
    super();
    this.atype = atype;
  }

  // TASK 对于此函数，需要让parentAppend的时候也能触发它，能做到吗？
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

// # NullAnchor

class NullAnchor extends KTAnchor {
  constructor() {
    super(AType.Null);
  }

  _appendTo(_parent: Element): this {
    return this;
  }

  _remove(): void {}
}

/**
 * A special anchor that renders nothing. Used for `KTIf` when the condition is false.
 * - There'is only one instance of `NullAnchor` in the whole app.
 */
export const NULL_ANCHOR = new NullAnchor() as JSX.Element & NullAnchor;

// # Utils

export const isAnchor = (o: any): o is KTAnchor => typeof o?.atype === 'string';

/**
 * @alias isAppendable Can be appended to DOM, has `_appendTo` method. Not necessarily a KTAnchor.
 */
export const isAppendable = (o: any): o is KTAnchor => typeof o?._appendTo === 'function';

export const _node = (c: PrimaryContent): Node =>
  typeof (c as any)?.nodeType === 'number' ? (c as Node) : document.createTextNode(c as Satisfied);
