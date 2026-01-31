import { $isThenable } from '@ktjs/shared';
import type { KTHTMLElement } from '../types/jsx.js';
import type { KTComponent, KTRawContent } from '../types/h.js';
import type { KTRef } from './ref.js';

/**
 * Extract component props type (excluding ref and children)
 */
type ExtractComponentProps<T> = T extends (props: infer P) => any ? Omit<P, 'ref' | 'children'> : {};

export function KTAsync<T extends KTComponent>(
  props: {
    ref?: KTRef<KTHTMLElement>;
    skeleton?: KTHTMLElement;
    component: T;
    children?: KTRawContent;
  } & ExtractComponentProps<T>,
): KTHTMLElement {
  const raw = props.component(props);
  let comp: KTHTMLElement =
    props.skeleton ?? (document.createComment('ktjs-suspense-placeholder') as unknown as KTHTMLElement);

  if ($isThenable(raw)) {
    raw.then((resolved) => comp.replaceWith(resolved));
  } else {
    comp = raw as KTHTMLElement;
  }

  return comp;
}
