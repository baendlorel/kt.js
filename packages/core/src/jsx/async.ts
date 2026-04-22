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
  private _currentNode: Node;

  constructor(props: KTAsyncProps) {
    super(AType.Async);
    this._skeleton = props.skeleton ?? this;
    this._component = props.component;

    // first render, the current node is the skeleton
    this._currentNode = this._skeleton;

    if (isKT(this._component)) {
      const resolver = (v: JSX.Element) => {
        static_cast<KTReactive<Thenable<Element>>>(this._component);
        if (this._component.value._version === resolver._version && this._currentNode === this._skeleton) {
          this._skeleton.replaceWith(v);
          this._currentNode = v;
        }
      };
      static_cast<typeof resolver & Versioned>(resolver);
      this._component.value._version = resolver._version = 1;
      this._component.value.then(resolver);

      // When component.value is assigned a new promise, then it again
      this._component.addOnChange((v) => {
        (this._currentNode as ChildNode).replaceWith(this._skeleton);
        this._currentNode = this._skeleton;
        resolver._version++;
        v._version = resolver._version;
        v.then(resolver);
      });
    } else {
      this._component.then((v) => {
        this._skeleton.replaceWith(v);
        this._currentNode = v;
      });
    }
  }
}

export function KTAsync(props: KTAsyncProps): JSX.Element {
  return $refToSelf(props, new KTAsyncAnchor(props) as any).skeleton;
}
