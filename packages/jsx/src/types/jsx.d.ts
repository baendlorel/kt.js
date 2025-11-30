import type { HTMLTag } from '@ktjs/core';
import type { KTAttribute, KTRawContent } from '@ktjs/core';

declare global {
  function createElement<K extends HTMLTag>(
    tag: K,
    props?: KTAttribute & { children?: KTRawContent },
    ...children: any[]
  ): HTMLBodyElement; //K extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[K] : HTMLElement;

  namespace JSX {
    type Element = HTMLDivElement;

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
