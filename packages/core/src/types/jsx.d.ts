import { HTMLAttributes } from './attribute.js';
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
      div: HTMLAttributes['div'] & { children?: KTRawContent };
      span: HTMLAttributes['span'] & { children?: KTRawContent };
      input: HTMLAttributes['input'] & { children?: KTRawContent };
      button: HTMLAttributes['button'] & { children?: KTRawContent };
      ul: HTMLAttributes['ul'] & { children?: KTRawContent };
      li: HTMLAttributes['li'] & { children?: KTRawContent };
      p: HTMLAttributes['p'] & { children?: KTRawContent };
      a: HTMLAttributes['a'] & { children?: KTRawContent };
      img: HTMLAttributes['img'] & { children?: KTRawContent };
      form: HTMLAttributes['form'] & { children?: KTRawContent };
      h1: HTMLAttributes['h1'] & { children?: KTRawContent };
      h2: HTMLAttributes['h2'] & { children?: KTRawContent };
      h3: HTMLAttributes['h3'] & { children?: KTRawContent };
      h4: HTMLAttributes['h4'] & { children?: KTRawContent };
      h5: HTMLAttributes['h5'] & { children?: KTRawContent };
      h6: HTMLAttributes['h6'] & { children?: KTRawContent };
      table: HTMLAttributes['table'] & { children?: KTRawContent };
      thead: HTMLAttributes['thead'] & { children?: KTRawContent };
      tbody: HTMLAttributes['tbody'] & { children?: KTRawContent };
      tr: HTMLAttributes['tr'] & { children?: KTRawContent };
      th: HTMLAttributes['th'] & { children?: KTRawContent };
      td: HTMLAttributes['td'] & { children?: KTRawContent };
      label: HTMLAttributes['label'] & { children?: KTRawContent };
      select: HTMLAttributes['select'] & { children?: KTRawContent };
      option: HTMLAttributes['option'] & { children?: KTRawContent };
      textarea: HTMLAttributes['textarea'] & { children?: KTRawContent };
      section: HTMLAttributes['section'] & { children?: KTRawContent };
      header: HTMLAttributes['header'] & { children?: KTRawContent };
      footer: HTMLAttributes['footer'] & { children?: KTRawContent };
      nav: HTMLAttributes['nav'] & { children?: KTRawContent };
      article: HTMLAttributes['article'] & { children?: KTRawContent };
      aside: HTMLAttributes['aside'] & { children?: KTRawContent };
      main: HTMLAttributes['main'] & { children?: KTRawContent };
      figure: HTMLAttributes['figure'] & { children?: KTRawContent };
      figcaption: HTMLAttributes['figcaption'] & { children?: KTRawContent };
      video: HTMLAttributes['video'] & { children?: KTRawContent };
      audio: HTMLAttributes['audio'] & { children?: KTRawContent };
      canvas: HTMLAttributes['canvas'] & { children?: KTRawContent };
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
