import type { KTAttribute, KTRawContent } from './h.js';

type Redraw = (props?: KTAttribute, ...args: any[]) => KTHTMLElement;
export type KTHTMLElement<El extends HTMLElement = HTMLElement, R extends Function = Redraw> = El & {
  /**
   * Automically generate a redraw function if it is not provided
   * @param props
   */
  redraw: R;
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
