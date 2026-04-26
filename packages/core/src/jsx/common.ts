import type { JSXTag } from '@ktjs/shared';
import type { KTAttribute } from '../types/h.js';
import type { JSX } from '../types/jsx.js';
import { h } from '../h/index.js';

export const jsxh = (tag: JSXTag, props: KTAttribute): JSX.Element =>
  (typeof tag === 'function' ? tag(props) : h(tag, props, props.children)) as JSX.Element;
