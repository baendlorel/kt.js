import { KTComponent, KTRawContent } from '@/types/h.js';
import { KTRef } from './ref.js';
import { $isThenable } from '@/lib/native.js';

export function Suspense(props: { ref: KTRef<HTMLElement>; component: KTComponent; children: KTRawContent }) {
  const raw = props.component(props);
  let comp: HTMLElement = document.createComment('ktjs-suspense-placeholder') as unknown as HTMLElement;
  if ($isThenable(raw)) {
    raw.then((resolved) => comp.replaceWith(resolved));
  } else {
    comp = raw as HTMLElement;
  }

  return comp;
}
