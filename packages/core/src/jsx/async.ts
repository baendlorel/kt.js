import { $isThenable } from '@ktjs/shared';
import type { KTComponent, KTRawContent } from '../types/h.js';
import type { JSX } from '../types/jsx.js';
import type { KTRef } from '../reactable/ref.js';

/**
 * Extract component props type (excluding ref and children)
 */
type ExtractComponentProps<T> = T extends (props: infer P) => any ? Omit<P, 'ref' | 'children'> : {};

export function KTAsync<T extends KTComponent>(
  props: {
    ref?: KTRef<JSX.Element>;
    skeleton?: JSX.Element;
    component: T;
    children?: KTRawContent;
  } & ExtractComponentProps<T>,
): JSX.Element {
  const raw = props.component(props);
  let comp: JSX.Element =
    props.skeleton ?? (document.createComment('ktjs-suspense-placeholder') as unknown as JSX.Element);

  if ($isThenable(raw)) {
    // TODO(fragment-mount): replaceWith 后显式触发 FragmentAnchor mount（替代全局 Node.prototype patch）
    raw.then((resolved) => comp.replaceWith(resolved));
  } else {
    comp = raw as JSX.Element;
  }

  return comp;
}
