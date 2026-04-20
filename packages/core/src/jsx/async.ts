import { $isThenable } from '@ktjs/shared';
import type { KTComponent } from '../types/h.js';
import type { JSX } from '../types/jsx.js';
import type { KTRef } from '../reactable/ref.js';
import { $mountFragmentAnchors, AType, KTAnchor } from './anchor.js';

/**
 * Extract component props type (excluding ref and children)
 */
type ExtractComponentProps<T> = T extends (props: infer P) => any ? Omit<P, 'ref' | 'children'> : {};

class KTAsyncAnchor extends KTAnchor {
  constructor() {
    super(AType.Async);
  }
}

export function KTAsync<T extends KTComponent>(props: {
  ref?: KTRef<JSX.Element>;
  skeleton?: JSX.Element;
  component: T;
  props: ExtractComponentProps<T>;
}): JSX.Element {
  const raw = props.component(props.props);
  let temp = props.skeleton ?? new KTAsyncAnchor();

  if ($isThenable(raw)) {
    raw.then((resolved) => {
      temp.replaceWith(resolved);
      $mountFragmentAnchors(resolved);
    });
  } else {
    temp = raw;
  }

  return temp as JSX.Element;
}
