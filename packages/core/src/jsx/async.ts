import type { JSX } from '../types/jsx.js';
import type { Thenable } from '../types/type-utils.js';
import type { KTRef } from '../reactable/ref.js';
import type { KTMaybeReactive } from '../reactable/types.js';

import { $refToSelf } from '../reactable/ref.js';
import { AType, KTAnchor } from './anchor.js';
import { isReactive } from '../reactable/common.js';
import { $indom } from '@ktjs/shared';

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
  skeleton: JSX.Element | this;
  component: KTMaybeReactive<Thenable<JSX.Element>>;
  private _currentNode: Node;

  constructor(props: KTAsyncProps) {
    super(AType.Async);
    this.skeleton = props.skeleton ?? this;
    this.component = props.component;

    // first render, the current node is the skeleton
    this._currentNode = this.skeleton;

    if (isReactive(this.component)) {
      const resolver = (v: JSX.Element) => {
        if (this._currentNode !== this.skeleton) {
          return; // & Prevents multiple resolutions
        }
        this.skeleton.replaceWith(v);
        this._currentNode = v;
      };

      this.component.value.then(resolver);

      // FIXME 如果这里的component被频繁切换，能够取消上一次的侦听吗？
      // When component.value is assigned a new promise, then it again
      this.component.addOnChange((v) => {
        (this._currentNode as ChildNode).replaceWith(this.skeleton);
        this._currentNode = this.skeleton;
        v.then(resolver);
      });
    } else {
      this.component.then((v) => {
        this.skeleton.replaceWith(v);
        this._currentNode = v;
      });
    }
  }
}

export function KTAsync(props: KTAsyncProps): JSX.Element {
  return $refToSelf(props, new KTAsyncAnchor(props) as any).skeleton;
}
