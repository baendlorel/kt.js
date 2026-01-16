import type { KTAttribute, KTRawContent } from './h.js';

export type KTHTMLElement = HTMLElement & {
  /**
   * Automically generate a redraw function if it is not provided
   * @param props
   */
  redraw: (props?: KTAttribute, children?: KTRawContent) => KTHTMLElement;
};

declare global {
  namespace JSX {
    type Element = KTHTMLElement;

    interface IntrinsicElements {
      [tag: string]: KTAttribute & { children?: KTRawContent };
    }

    // interface IntrinsicAttributes {
    //   key?: string | number;
    // }
    type IntrinsicAttributes = KTAttribute;

    interface ElementChildrenAttribute {
      children: {};
    }
  }
}
