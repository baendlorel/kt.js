import { KTComponent, KTRawContent } from '@/types/h.js';
import { KTRef } from './ref.js';
import { $isThenable } from '@/lib/native.js';

/**
 * Extract component props type (excluding ref and children)
 */
type ExtractComponentProps<T> = T extends (props: infer P) => any ? Omit<P, 'ref' | 'children'> : {};

export function KTAsync<T extends KTComponent>(
  props: {
    ref?: KTRef<HTMLElement>;
    component: T;
    children?: KTRawContent;
  } & ExtractComponentProps<T>
) {
  const raw = props.component(props);
  let comp: HTMLElement = document.createComment('ktjs-suspense-placeholder') as unknown as HTMLElement;
  if ($isThenable(raw)) {
    raw.then((resolved) => comp.replaceWith(resolved));
  } else {
    comp = raw as HTMLElement;
  }

  return comp;
}
