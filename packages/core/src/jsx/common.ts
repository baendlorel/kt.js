import type { JSXTag } from '@ktjs/shared';
import type { KTAttribute } from '../types/h.js';
import type { JSX } from '../types/jsx.js';
import { h } from '../h/index';

export const enum AnchorType {
  Fragment = 'kt-fragment',
  For = 'kt-for',
}

export abstract class KTAnchor<T extends Node = Node> extends Comment {
  readonly isKTAnchor: true = true;
  readonly list: T[] = [];
  abstract readonly type: AnchorType;

  constructor(data: AnchorType) {
    super(data);
  }
}

export const jsxh = (tag: JSXTag, props: KTAttribute): JSX.Element =>
  (typeof tag === 'function' ? tag(props) : h(tag, props, props.children)) as JSX.Element;

export const placeholder = (data: string): JSX.Element => document.createComment(data) as unknown as JSX.Element;
