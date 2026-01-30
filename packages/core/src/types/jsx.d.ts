import { KTRef } from '@/jsx/ref.ts';
import { AttributesMap } from './attribute.js';
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
      div: AttributesMap['div'];
      span: AttributesMap['span'];
      input: AttributesMap['input'];
      button: AttributesMap['button'];
      ul: AttributesMap['ul'];
      li: AttributesMap['li'];
      p: AttributesMap['p'];
      a: AttributesMap['a'];
      img: AttributesMap['img'];
      form: AttributesMap['form'];
      h1: AttributesMap['h1'];
      h2: AttributesMap['h2'];
      h3: AttributesMap['h3'];
      h4: AttributesMap['h4'];
      h5: AttributesMap['h5'];
      h6: AttributesMap['h6'];
      table: AttributesMap['table'];
      thead: AttributesMap['thead'];
      tbody: AttributesMap['tbody'];
      tr: AttributesMap['tr'];
      th: AttributesMap['th'];
      td: AttributesMap['td'];
      label: AttributesMap['label'];
      select: AttributesMap['select'];
      option: AttributesMap['option'];
      textarea: AttributesMap['textarea'];
      section: AttributesMap['section'];
      header: AttributesMap['header'];
      footer: AttributesMap['footer'];
      nav: AttributesMap['nav'];
      article: AttributesMap['article'];
      aside: AttributesMap['aside'];
      main: AttributesMap['main'];
      figure: AttributesMap['figure'];
      figcaption: AttributesMap['figcaption'];
      video: AttributesMap['video'];
      audio: AttributesMap['audio'];
      canvas: AttributesMap['canvas'];
      svg: AttributesMap['svg'];
      code: AttributesMap['code'];
      strong: AttributesMap['strong'];
      small: AttributesMap['small'];
      pre: AttributesMap['pre'];
      fieldset: AttributesMap['fieldset'];
      legend: AttributesMap['legend'];
    }

    interface IntrinsicAttributes {
      ref?: KTRef<HTMLElement>;
      'k-if'?: any;
      children?: KTRawContent;
    }

    interface ElementChildrenAttribute {
      children: {};
    }
  }
}
