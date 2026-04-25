import type { JSX } from '../types/jsx.js';
import type { Satisfied, Thenable } from '../types/type-utils.js';
import type { KTRef } from '../reactable/ref.js';

import { $refToSelf } from '../reactable/ref.js';
import { AType, KTAnchor } from '../common/anchor.js';

interface KTAsyncProps<P> {
  /**
   * Will be assigned as this Anchor
   */
  ref?: KTRef<JSX.Element>;

  /**
   * Display this when loading the async component.
   */
  skeleton?: JSX.Element;

  /**
   * Async Component(a promise holds an component)
   */
  component: (props: P) => Thenable<JSX.Element>;

  props?: P;
}

class KTAsyncAnchor<P> extends KTAnchor {
  /* @internal */
  _skeleton: JSX.Element | this;

  /* @internal */
  _promise: Thenable<JSX.Element>;

  /* @internal */
  _version: number = NaN;

  /* @internal */
  private _current: Node;

  constructor(props: KTAsyncProps<P>) {
    super(AType.Async);
    this._skeleton = props.skeleton ?? this;
    this._promise = props.component(props.props ?? ({} as P));

    // first render, the current node is the skeleton
    this._current = this._skeleton;

    this._promise.then((v) => {
      this._skeleton.replaceWith(v);
      this._current = v;
    });
  }

  _remove(): void {
    if (this._current !== this) {
      (this._current as ChildNode).remove();
    }
  }

  _appendTo(parent: Element): this {
    parent.append(this, this._skeleton);
    return this;
  }
}

export function KTAsync<P>(props: KTAsyncProps<P>): JSX.Element {
  return $refToSelf(props, new KTAsyncAnchor<P>(props)) as Satisfied;
}
