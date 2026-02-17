import type { JSXTag } from '@ktjs/shared';
import type { KTAttribute } from '../types/h.js';
import { h } from '../h/index';

export const createJSXElement = (tag: JSXTag, props: KTAttribute): HTMLElement => {
  if (typeof tag === 'function') {
    return tag(props) as HTMLElement;
  } else {
    return h(tag, props, props.children) as HTMLElement;
  }
};

export const placeholder = (data: string): JSX.Element => document.createComment(data) as unknown as JSX.Element;
