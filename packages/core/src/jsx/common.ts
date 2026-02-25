import type { JSXTag } from '@ktjs/shared';
import type { KTAttribute } from '../types/h.js';
import type { JSX } from '../types/jsx.js';
import { h } from '../h/index';

export const jsxh = (tag: JSXTag, props: KTAttribute): HTMLElement =>
  (typeof tag === 'function' ? tag(props) : h(tag, props, props.children)) as JSX.Element;

export const placeholder = (data: string): JSX.Element => document.createComment(data) as unknown as JSX.Element;
