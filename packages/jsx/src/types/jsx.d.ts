import type { KTAttribute, KTRawContent } from '@ktjs/core';

declare global {
  namespace JSX {
    type Element = HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

    // 为常用元素提供更精确的类型
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
