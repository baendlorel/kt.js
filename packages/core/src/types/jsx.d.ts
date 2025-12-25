import type { KTAttribute, KTRawContent } from './h.js';

declare global {
  namespace JSX {
    type Element = HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

    interface IntrinsicElements {
      [tag: string]: KTAttribute & { children?: KTRawContent };
    }

    interface IntrinsicAttributes {
      key?: string | number;
    }

    interface ElementChildrenAttribute {
      children: {};
    }
  }
}

export {};
