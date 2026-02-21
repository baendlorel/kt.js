import type { KTRef } from '../reactive/ref.ts';
import type { AttributesMap, SVGAttributesMap } from './attribute.js';
import type { KTRawContent } from './h.js';

export namespace JSX {
    type Element = HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

    interface IntrinsicElements {
      [k: string]: AttributesMap['div']; // Allow any element with div attributes as fallback

      // Document-level & metadata
      html: AttributesMap['html'];
      head: AttributesMap['head'];
      title: AttributesMap['title'];
      base: AttributesMap['base'];
      link: AttributesMap['link'];
      meta: AttributesMap['meta'];

      // Sectioning
      body: AttributesMap['body'];
      header: AttributesMap['header'];
      footer: AttributesMap['footer'];
      nav: AttributesMap['nav'];
      main: AttributesMap['main'];
      section: AttributesMap['section'];
      article: AttributesMap['article'];
      aside: AttributesMap['aside'];

      // Headings
      h1: AttributesMap['h1'];
      h2: AttributesMap['h2'];
      h3: AttributesMap['h3'];
      h4: AttributesMap['h4'];
      h5: AttributesMap['h5'];
      h6: AttributesMap['h6'];

      // Text content
      p: AttributesMap['p'];
      pre: AttributesMap['pre'];
      code: AttributesMap['code'];
      strong: AttributesMap['strong'];
      small: AttributesMap['small'];
      em: AttributesMap['em'];
      br: AttributesMap['br'];
      i: AttributesMap['i'];

      // Lists
      ul: AttributesMap['ul'];
      ol: AttributesMap['ol'];
      li: AttributesMap['li'];

      // Tables
      table: AttributesMap['table'];
      thead: AttributesMap['thead'];
      tbody: AttributesMap['tbody'];
      tfoot: AttributesMap['tfoot'];
      tr: AttributesMap['tr'];
      th: AttributesMap['th'];
      td: AttributesMap['td'];

      // Forms
      form: AttributesMap['form'];
      label: AttributesMap['label'];
      input: AttributesMap['input'];
      textarea: AttributesMap['textarea'];
      select: AttributesMap['select'];
      option: AttributesMap['option'];
      optgroup: AttributesMap['optgroup'];
      button: AttributesMap['button'];
      fieldset: AttributesMap['fieldset'];
      legend: AttributesMap['legend'];
      datalist: AttributesMap['datalist'];
      output: AttributesMap['output'];

      // Media & embedded
      img: AttributesMap['img'];
      picture: AttributesMap['picture'];
      source: AttributesMap['source'];
      audio: AttributesMap['audio'];
      video: AttributesMap['video'];
      track: AttributesMap['track'];
      iframe: AttributesMap['iframe'];
      embed: AttributesMap['embed'];
      object: AttributesMap['object'];
      canvas: AttributesMap['canvas'];

      // Interactive & misc
      a: AttributesMap['a'] & SVGAttributesMap['a'];
      area: AttributesMap['area'];
      map: AttributesMap['map'];
      details: AttributesMap['details'];
      dialog: AttributesMap['dialog'];
      summary: AttributesMap['summary'];
      slot: AttributesMap['slot'];

      // Scripting & styles
      script: AttributesMap['script'];
      style: AttributesMap['style'];

      // Semantic & phrasing
      figure: AttributesMap['figure'];
      figcaption: AttributesMap['figcaption'];
      blockquote: AttributesMap['blockquote'];
      q: AttributesMap['q'];

      // Generic elements
      div: AttributesMap['div'];
      span: AttributesMap['span'];
      address: AttributesMap['address'];
      abbr: AttributesMap['abbr'];
      b: AttributesMap['b'];
      cite: AttributesMap['cite'];
      dl: AttributesMap['dl'];
      dt: AttributesMap['dt'];
      dd: AttributesMap['dd'];
      hr: AttributesMap['hr'];

      // SVG
      svg: AttributesMap['svg'];
      // a: SVGAttributesMap['a'];
      animate: SVGAttributesMap['animate'];
      animateMotion: SVGAttributesMap['animateMotion'];
      animateTransform: SVGAttributesMap['animateTransform'];
      circle: SVGAttributesMap['circle'];
      clipPath: SVGAttributesMap['clipPath'];
      defs: SVGAttributesMap['defs'];
      desc: SVGAttributesMap['desc'];
      ellipse: SVGAttributesMap['ellipse'];
      feBlend: SVGAttributesMap['feBlend'];
      feColorMatrix: SVGAttributesMap['feColorMatrix'];
      feComponentTransfer: SVGAttributesMap['feComponentTransfer'];
      feComposite: SVGAttributesMap['feComposite'];
      feConvolveMatrix: SVGAttributesMap['feConvolveMatrix'];
      feDiffuseLighting: SVGAttributesMap['feDiffuseLighting'];
      feDisplacementMap: SVGAttributesMap['feDisplacementMap'];
      feDistantLight: SVGAttributesMap['feDistantLight'];
      feDropShadow: SVGAttributesMap['feDropShadow'];
      feFlood: SVGAttributesMap['feFlood'];
      feFuncA: SVGAttributesMap['feFuncA'];
      feFuncB: SVGAttributesMap['feFuncB'];
      feFuncG: SVGAttributesMap['feFuncG'];
      feFuncR: SVGAttributesMap['feFuncR'];
      feGaussianBlur: SVGAttributesMap['feGaussianBlur'];
      feImage: SVGAttributesMap['feImage'];
      feMerge: SVGAttributesMap['feMerge'];
      feMergeNode: SVGAttributesMap['feMergeNode'];
      feMorphology: SVGAttributesMap['feMorphology'];
      feOffset: SVGAttributesMap['feOffset'];
      fePointLight: SVGAttributesMap['fePointLight'];
      feSpecularLighting: SVGAttributesMap['feSpecularLighting'];
      feSpotLight: SVGAttributesMap['feSpotLight'];
      feTile: SVGAttributesMap['feTile'];
      feTurbulence: SVGAttributesMap['feTurbulence'];
      filter: SVGAttributesMap['filter'];
      foreignObject: SVGAttributesMap['foreignObject'];
      g: SVGAttributesMap['g'];
      image: SVGAttributesMap['image'];
      line: SVGAttributesMap['line'];
      linearGradient: SVGAttributesMap['linearGradient'];
      marker: SVGAttributesMap['marker'];
      mask: SVGAttributesMap['mask'];
      metadata: SVGAttributesMap['metadata'];
      mpath: SVGAttributesMap['mpath'];
      path: SVGAttributesMap['path'];
      pattern: SVGAttributesMap['pattern'];
      polygon: SVGAttributesMap['polygon'];
      polyline: SVGAttributesMap['polyline'];
      radialGradient: SVGAttributesMap['radialGradient'];
      rect: SVGAttributesMap['rect'];
      set: SVGAttributesMap['set'];
      stop: SVGAttributesMap['stop'];
      switch: SVGAttributesMap['switch'];
      symbol: SVGAttributesMap['symbol'];
      text: SVGAttributesMap['text'];
      textPath: SVGAttributesMap['textPath'];
      tspan: SVGAttributesMap['tspan'];
      use: SVGAttributesMap['use'];
      view: SVGAttributesMap['view'];
    }

    interface IntrinsicAttributes {
      /**
       * Make a reference to the created element
       */
      ref?: KTRef<any>;

      /**
       * Conditional rendering
       * - Provide a `KTRef` to make it reactive
       */
      'k-if'?: any;

      /**
       * 2-way binding
       * - Provide a `KTRef` to make it reactive
       */
      'k-model'?: KTRef<any>;

      /**
       * Raw html binding
       * - Provide a `KTRef` to make it reactive
       */
      'k-html'?: any;
      children?: KTRawContent;
    }

    interface ElementChildrenAttribute {
      children: {};
    }
}
