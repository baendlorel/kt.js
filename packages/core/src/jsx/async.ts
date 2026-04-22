import type { JSX } from '../types/jsx.js';
import type { Thenable } from '../types/type-utils.js';
import type { KTRef } from '../reactable/ref.js';
import type { KTMaybeReactive } from '../reactable/types.js';
import type { KTReactive } from '../reactable/reactive.js';

import { static_cast } from 'type-narrow';
import { $refToSelf } from '../reactable/ref.js';
import { AType, KTAnchor } from '../common/anchor.js';
import { isKT } from '../reactable/common.js';

interface KTAsyncProps {
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
  component: KTMaybeReactive<Thenable<JSX.Element>>;
}

class KTAsyncAnchor extends KTAnchor {
  /* @internal */
  _skeleton: JSX.Element | this;

  /* @internal */
  _component: KTMaybeReactive<Thenable<JSX.Element>>;

  /* @internal */
  _version: number = NaN;

  /* @internal */
  private _current: Node;

  constructor(props: KTAsyncProps) {
    super(AType.Async);
    this._skeleton = props.skeleton ?? this;
    this._component = props.component;

    // first render, the current node is the skeleton
    this._current = this._skeleton;

    if (isKT(this._component)) {
      const resolver = (v: JSX.Element) => {
        if (this._version === resolver._version && this._current === this._skeleton) {
          this._skeleton.replaceWith(v);
          this._current = v;
        }
      };
      static_cast<typeof resolver & Versioned>(resolver);
      this._version = resolver._version = 1;
      this._component.value.then(resolver);

      this._component.listen((v) => {
        (this._current as ChildNode).replaceWith(this._skeleton);
        this._current = this._skeleton;
        this._version = ++resolver._version;
        v.then(resolver);
      });
    } else {
      this._component.then((v) => {
        this._skeleton.replaceWith(v);
        this._current = v;
      });
    }
  }
}

export function KTAsync(props: KTAsyncProps): JSX.Element {
  return $refToSelf(props, new KTAsyncAnchor(props))._skeleton as JSX.Element;
}
