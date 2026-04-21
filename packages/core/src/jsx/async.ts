import type { JSX } from '../types/jsx.js';
import type { Thenable } from '../types/type-utils.js';
import type { KTRef } from '../reactable/ref.js';

import { $initRef } from '../reactable/ref.js';
import { AType, KTAnchor } from './anchor.js';

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
  component: Thenable<JSX.Element>;
}

class KTAsyncAnchor extends KTAnchor {
  constructor() {
    super(AType.Async);
  }
}

export function KTAsync(props: KTAsyncProps): JSX.Element {
  let temp = props.skeleton ?? new KTAsyncAnchor();
  props.component.then((resolved) => temp.replaceWith(resolved));

  $initRef(props, temp as JSX.Element);

  return temp as JSX.Element;
}
