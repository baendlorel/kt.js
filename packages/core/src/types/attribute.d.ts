import type { otherstring } from '@ktjs/shared';
import type { KTPrefixedEventAttribute } from './h.js';
import type { KTMaybeReactive, KTMaybeReactiveProps, KTReactify } from './reactive.js';

// Base events available to all HTML elements
type BaseAttr = KTPrefixedEventAttribute & {
  [k: string]: KTMaybeReactive<any>;
  [k: `on:${string}`]: ((...args: any[]) => any) | undefined;
} & KTMaybeReactiveProps<{
    // # base attributes
    id?: string;
    name?: string;
    class?: string;
    className?: string;
  }> & {
    style?: string | Partial<CSSStyleDeclaration> | KTReactify<string> | KTReactify<Partial<CSSStyleDeclaration>>;
  };

export interface AttributesMap {
  // Anchor element
  a: BaseAttr &
    KTMaybeReactiveProps<{
      download?: string;
      href?: string;
      hreflang?: string;
      ping?: string;
      referrerpolicy?:
        | 'no-referrer'
        | 'no-referrer-when-downgrade'
        | 'origin'
        | 'origin-when-cross-origin'
        | 'same-origin'
        | 'strict-origin'
        | 'strict-origin-when-cross-origin'
        | 'unsafe-url';
      rel?: string;
      target?: '_self' | '_blank' | '_parent' | '_top' | string;
      type?: string;
    }>;

  // Area element
  area: BaseAttr &
    KTMaybeReactiveProps<{
      alt?: string;
      coords?: string;
      download?: string;
      href?: string;
      ping?: string;
      referrerpolicy?:
        | 'no-referrer'
        | 'no-referrer-when-downgrade'
        | 'origin'
        | 'origin-when-cross-origin'
        | 'same-origin'
        | 'strict-origin'
        | 'strict-origin-when-cross-origin'
        | 'unsafe-url';
      rel?: string;
      shape?: 'rect' | 'circle' | 'poly' | 'default';
      target?: '_self' | '_blank' | '_parent' | '_top' | string;
    }>;

  // Audio element
  audio: BaseAttr &
    KTMaybeReactiveProps<{
      autoplay?: boolean;
      controls?: boolean;
      crossorigin?: 'anonymous' | 'use-credentials' | '';
      loop?: boolean;
      muted?: boolean;
      preload?: 'none' | 'metadata' | 'auto' | '';
      src?: string;
    }>;

  // Base element
  base: BaseAttr &
    KTMaybeReactiveProps<{
      href?: string;
      target?: '_self' | '_blank' | '_parent' | '_top' | string;
    }>;

  // Body element
  body: BaseAttr & KTMaybeReactiveProps<{}>;

  // BR element
  br: BaseAttr & KTMaybeReactiveProps<{}>;

  // Button element
  button: BaseAttr &
    KTMaybeReactiveProps<{
      disabled?: boolean;
      form?: string;
      formaction?: string;
      formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
      formmethod?: 'get' | 'post' | 'dialog';
      formnovalidate?: boolean;
      formtarget?: '_self' | '_blank' | '_parent' | '_top' | string;
      name?: string;
      type?: 'submit' | 'reset' | 'button';
      value?: string;
    }>;

  // Canvas element
  canvas: BaseAttr &
    KTMaybeReactiveProps<{
      height?: number | string;
      width?: number | string;
    }>;

  // Table caption element
  caption: BaseAttr & KTMaybeReactiveProps<{}>;

  // Col element
  col: BaseAttr &
    KTMaybeReactiveProps<{
      span?: number | string;
    }>;

  // Colgroup element
  colgroup: BaseAttr &
    KTMaybeReactiveProps<{
      span?: number | string;
    }>;

  // Data element
  data: BaseAttr &
    KTMaybeReactiveProps<{
      value?: string;
    }>;

  // Datalist element
  datalist: BaseAttr & KTMaybeReactiveProps<{}>;

  // Del element
  del: BaseAttr &
    KTMaybeReactiveProps<{
      cite?: string;
      datetime?: string;
    }>;

  // Details element
  details: BaseAttr &
    KTMaybeReactiveProps<{
      open?: boolean;
    }>;

  // Dialog element
  dialog: BaseAttr &
    KTMaybeReactiveProps<{
      open?: boolean;
    }>;

  // Embed element
  embed: BaseAttr &
    KTMaybeReactiveProps<{
      height?: number | string;
      src?: string;
      type?: string;
      width?: number | string;
    }>;

  // Fieldset element
  fieldset: BaseAttr &
    KTMaybeReactiveProps<{
      disabled?: boolean;
      form?: string;
      name?: string;
    }>;

  // Form element
  form: BaseAttr &
    KTMaybeReactiveProps<{
      'accept-charset'?: string;
      action?: string;
      autocomplete?: 'on' | 'off';
      enctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
      method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE' | otherstring;

      name?: string;
      novalidate?: boolean;
      target?: '_self' | '_blank' | '_parent' | '_top' | string;
    }>;

  // Head element
  head: BaseAttr & KTMaybeReactiveProps<{}>;

  // HR element
  hr: BaseAttr & KTMaybeReactiveProps<{}>;

  // HTML element
  html: BaseAttr & KTMaybeReactiveProps<{}>;

  // IFrame element
  iframe: BaseAttr &
    KTMaybeReactiveProps<{
      allow?: string;
      allowfullscreen?: boolean;
      allowpaymentrequest?: boolean;
      height?: number | string;
      loading?: 'eager' | 'lazy';
      name?: string;
      referrerpolicy?:
        | 'no-referrer'
        | 'no-referrer-when-downgrade'
        | 'origin'
        | 'origin-when-cross-origin'
        | 'same-origin'
        | 'strict-origin'
        | 'strict-origin-when-cross-origin'
        | 'unsafe-url';
      sandbox?: string;
      src?: string;
      srcdoc?: string;
      width?: number | string;
    }>;

  // Image element
  img: BaseAttr &
    KTMaybeReactiveProps<{
      alt?: string;
      crossorigin?: 'anonymous' | 'use-credentials' | '';
      decoding?: 'sync' | 'async' | 'auto';
      height?: number | string;
      ismap?: boolean;
      loading?: 'eager' | 'lazy';
      referrerpolicy?:
        | 'no-referrer'
        | 'no-referrer-when-downgrade'
        | 'origin'
        | 'origin-when-cross-origin'
        | 'same-origin'
        | 'strict-origin'
        | 'strict-origin-when-cross-origin'
        | 'unsafe-url';
      sizes?: string;
      src?: string;
      srcset?: string;
      usemap?: string;
      width?: number | string;
    }>;

  // Input element
  input: BaseAttr &
    KTMaybeReactiveProps<{
      accept?: string;
      alt?: string;
      autocomplete?: string;
      checked?: boolean;
      dirname?: string;
      disabled?: boolean;
      form?: string;
      formaction?: string;
      formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
      formmethod?: 'get' | 'post';
      formnovalidate?: boolean;
      formtarget?: '_self' | '_blank' | '_parent' | '_top' | string;
      height?: number | string;
      list?: string;
      max?: number | string;
      maxlength?: number | string;
      min?: number | string;
      minlength?: number | string;
      multiple?: boolean;
      name?: string;
      pattern?: string;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean;
      size?: number | string;
      src?: string;
      step?: number | string;
      type?:
        | 'button'
        | 'checkbox'
        | 'color'
        | 'date'
        | 'datetime-local'
        | 'email'
        | 'file'
        | 'hidden'
        | 'image'
        | 'month'
        | 'number'
        | 'password'
        | 'radio'
        | 'range'
        | 'reset'
        | 'search'
        | 'submit'
        | 'tel'
        | 'text'
        | 'time'
        | 'url'
        | 'week';
      value?: string;
      width?: number | string;
    }>;

  // Ins element
  ins: BaseAttr &
    KTMaybeReactiveProps<{
      cite?: string;
      datetime?: string;
    }>;

  // Label element
  label: BaseAttr &
    KTMaybeReactiveProps<{
      for?: string;
    }>;

  // Legend element
  legend: BaseAttr & KTMaybeReactiveProps<{}>;

  // LI element
  li: BaseAttr &
    KTMaybeReactiveProps<{
      value?: number | string;
    }>;

  // Link element
  link: BaseAttr &
    KTMaybeReactiveProps<{
      as?: string;
      crossorigin?: 'anonymous' | 'use-credentials' | '';
      disabled?: boolean;
      href?: string;
      hreflang?: string;
      imagesizes?: string;
      imagesrcset?: string;
      integrity?: string;
      media?: string;
      referrerpolicy?:
        | 'no-referrer'
        | 'no-referrer-when-downgrade'
        | 'origin'
        | 'origin-when-cross-origin'
        | 'same-origin'
        | 'strict-origin'
        | 'strict-origin-when-cross-origin'
        | 'unsafe-url';
      rel?: string;
      sizes?: string;
      type?: string;
    }>;

  // Map element
  map: BaseAttr &
    KTMaybeReactiveProps<{
      name?: string;
    }>;

  // Menu element
  menu: BaseAttr & KTMaybeReactiveProps<{}>;

  // Meta element
  meta: BaseAttr &
    KTMaybeReactiveProps<{
      charset?: string;
      content?: string;
      'http-equiv'?: 'content-security-policy' | 'content-type' | 'default-style' | 'refresh' | string;
      name?: string;
    }>;

  // Meter element
  meter: BaseAttr &
    KTMaybeReactiveProps<{
      form?: string;
      high?: number | string;
      low?: number | string;
      max?: number | string;
      min?: number | string;
      optimum?: number | string;
      value?: number | string;
    }>;

  // Object element
  object: BaseAttr &
    KTMaybeReactiveProps<{
      data?: string;
      form?: string;
      height?: number | string;
      name?: string;
      type?: string;
      usemap?: string;
      width?: number | string;
    }>;

  // OL element
  ol: BaseAttr &
    KTMaybeReactiveProps<{
      reversed?: boolean;
      start?: number | string;
      type?: '1' | 'a' | 'A' | 'i' | 'I';
    }>;

  // Optgroup element
  optgroup: BaseAttr &
    KTMaybeReactiveProps<{
      disabled?: boolean;
      label?: string;
    }>;

  // Option element
  option: BaseAttr &
    KTMaybeReactiveProps<{
      disabled?: boolean;
      label?: string;
      selected?: boolean;
      value?: string;
    }>;

  // Output element
  output: BaseAttr &
    KTMaybeReactiveProps<{
      for?: string;
      form?: string;
      name?: string;
    }>;

  // Picture element
  picture: BaseAttr & KTMaybeReactiveProps<{}>;

  // Pre element
  pre: BaseAttr & KTMaybeReactiveProps<{}>;

  // Progress element
  progress: BaseAttr &
    KTMaybeReactiveProps<{
      max?: number | string;
      value?: number | string;
    }>;

  // Quote element (q and blockquote)
  q: BaseAttr &
    KTMaybeReactiveProps<{
      cite?: string;
    }>;

  blockquote: BaseAttr &
    KTMaybeReactiveProps<{
      cite?: string;
    }>;

  // Script element
  script: BaseAttr &
    KTMaybeReactiveProps<{
      async?: boolean;
      crossorigin?: 'anonymous' | 'use-credentials' | '';
      defer?: boolean;
      integrity?: string;
      nomodule?: boolean;
      referrerpolicy?:
        | 'no-referrer'
        | 'no-referrer-when-downgrade'
        | 'origin'
        | 'origin-when-cross-origin'
        | 'same-origin'
        | 'strict-origin'
        | 'strict-origin-when-cross-origin'
        | 'unsafe-url';
      src?: string;
      type?: string;
    }>;

  // Select element
  select: BaseAttr &
    KTMaybeReactiveProps<{
      autocomplete?: string;
      disabled?: boolean;
      form?: string;
      multiple?: boolean;
      name?: string;
      required?: boolean;
      size?: number | string;
    }>;

  // Slot element
  slot: BaseAttr &
    KTMaybeReactiveProps<{
      name?: string;
    }>;

  // Source element
  source: BaseAttr &
    KTMaybeReactiveProps<{
      height?: number | string;
      media?: string;
      sizes?: string;
      src?: string;
      srcset?: string;
      type?: string;
      width?: number | string;
    }>;

  // Style element
  style: BaseAttr &
    KTMaybeReactiveProps<{
      media?: string;
    }>;

  // Table element
  table: BaseAttr & KTMaybeReactiveProps<{}>;

  // Table body/footer/header elements
  tbody: BaseAttr & KTMaybeReactiveProps<{}>;

  tfoot: BaseAttr & KTMaybeReactiveProps<{}>;

  thead: BaseAttr & KTMaybeReactiveProps<{}>;

  // Table cell elements
  td: BaseAttr &
    KTMaybeReactiveProps<{
      colspan?: number | string;
      headers?: string;
      rowspan?: number | string;
    }>;

  th: BaseAttr &
    KTMaybeReactiveProps<{
      abbr?: string;
      colspan?: number | string;
      headers?: string;
      rowspan?: number | string;
      scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
    }>;

  // Template element
  template: BaseAttr & KTMaybeReactiveProps<{}>;

  // Textarea element
  textarea: BaseAttr &
    KTMaybeReactiveProps<{
      autocomplete?: string;
      cols?: number | string;
      dirname?: string;
      disabled?: boolean;
      form?: string;
      maxlength?: number | string;
      minlength?: number | string;
      name?: string;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean;
      rows?: number | string;
      wrap?: 'hard' | 'soft' | 'off';
    }>;

  // Time element
  time: BaseAttr &
    KTMaybeReactiveProps<{
      datetime?: string;
    }>;

  // Title element
  title: BaseAttr & KTMaybeReactiveProps<{}>;

  // TR element
  tr: BaseAttr & KTMaybeReactiveProps<{}>;

  // Track element
  track: BaseAttr &
    KTMaybeReactiveProps<{
      default?: boolean;
      kind?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
      label?: string;
      src?: string;
      srclang?: string;
    }>;

  // UL element
  ul: BaseAttr & KTMaybeReactiveProps<{}>;

  // Video element
  video: BaseAttr &
    KTMaybeReactiveProps<{
      autoplay?: boolean;
      controls?: boolean;
      crossorigin?: 'anonymous' | 'use-credentials' | '';
      height?: number | string;
      loop?: boolean;
      muted?: boolean;
      playsinline?: boolean;
      poster?: string;
      preload?: 'none' | 'metadata' | 'auto' | '';
      src?: string;
      width?: number | string;
    }>;

  // Generic HTMLElement (no specific attributes beyond BaseEvent)
  abbr: BaseAttr & KTMaybeReactiveProps<{}>;
  address: BaseAttr & KTMaybeReactiveProps<{}>;
  article: BaseAttr & KTMaybeReactiveProps<{}>;
  aside: BaseAttr & KTMaybeReactiveProps<{}>;
  b: BaseAttr & KTMaybeReactiveProps<{}>;
  bdi: BaseAttr & KTMaybeReactiveProps<{}>;
  bdo: BaseAttr & KTMaybeReactiveProps<{}>;
  cite: BaseAttr & KTMaybeReactiveProps<{}>;
  code: BaseAttr & KTMaybeReactiveProps<{}>;
  dd: BaseAttr & KTMaybeReactiveProps<{}>;
  dfn: BaseAttr & KTMaybeReactiveProps<{}>;
  div: BaseAttr & KTMaybeReactiveProps<{}>;
  dl: BaseAttr & KTMaybeReactiveProps<{}>;
  dt: BaseAttr & KTMaybeReactiveProps<{}>;
  em: BaseAttr & KTMaybeReactiveProps<{}>;
  figcaption: BaseAttr & KTMaybeReactiveProps<{}>;
  figure: BaseAttr & KTMaybeReactiveProps<{}>;
  footer: BaseAttr & KTMaybeReactiveProps<{}>;
  h1: BaseAttr & KTMaybeReactiveProps<{}>;
  h2: BaseAttr & KTMaybeReactiveProps<{}>;
  h3: BaseAttr & KTMaybeReactiveProps<{}>;
  h4: BaseAttr & KTMaybeReactiveProps<{}>;
  h5: BaseAttr & KTMaybeReactiveProps<{}>;
  h6: BaseAttr & KTMaybeReactiveProps<{}>;
  header: BaseAttr & KTMaybeReactiveProps<{}>;
  hgroup: BaseAttr & KTMaybeReactiveProps<{}>;
  i: BaseAttr & KTMaybeReactiveProps<{}>;
  kbd: BaseAttr & KTMaybeReactiveProps<{}>;
  main: BaseAttr & KTMaybeReactiveProps<{}>;
  mark: BaseAttr & KTMaybeReactiveProps<{}>;
  nav: BaseAttr & KTMaybeReactiveProps<{}>;
  noscript: BaseAttr & KTMaybeReactiveProps<{}>;
  p: BaseAttr & KTMaybeReactiveProps<{}>;
  rp: BaseAttr & KTMaybeReactiveProps<{}>;
  rt: BaseAttr & KTMaybeReactiveProps<{}>;
  ruby: BaseAttr & KTMaybeReactiveProps<{}>;
  s: BaseAttr & KTMaybeReactiveProps<{}>;
  samp: BaseAttr & KTMaybeReactiveProps<{}>;
  search: BaseAttr & KTMaybeReactiveProps<{}>;
  section: BaseAttr & KTMaybeReactiveProps<{}>;
  small: BaseAttr & KTMaybeReactiveProps<{}>;
  span: BaseAttr & KTMaybeReactiveProps<{}>;
  strong: BaseAttr & KTMaybeReactiveProps<{}>;
  sub: BaseAttr & KTMaybeReactiveProps<{}>;
  summary: BaseAttr & KTMaybeReactiveProps<{}>;
  sup: BaseAttr & KTMaybeReactiveProps<{}>;
  u: BaseAttr & KTMaybeReactiveProps<{}>;
  var: BaseAttr & KTMaybeReactiveProps<{}>;
  wbr: BaseAttr & KTMaybeReactiveProps<{}>;

  svg: BaseAttr &
    KTMaybeReactiveProps<{
      class?: string;
      style?: string | Partial<CSSStyleDeclaration>;
      width?: number | string;
      height?: number | string;
      viewBox?: string;
      xmlns?: string;
      fill?: string;
      stroke?: string;
      strokeWidth?: number | string;
      strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit';
      strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit';
      strokeDasharray?: string;
      strokeDashoffset?: number | string;
      opacity?: number | string;
      preserveAspectRatio?: string;
      transform?: string;
      x?: number | string;
      y?: number | string;
      rx?: number | string;
      ry?: number | string;
      r?: number | string;
      cx?: number | string;
      cy?: number | string;
      d?: string;
      points?: string;
      pathLength?: number | string;
      viewbox?: string;
      role?: string;
      focusable?: boolean | 'true' | 'false';
      xlinkHref?: string; // legacy xlink:href
    }>;
}

export interface SVGAttributesMap {
  a: AttributesMap['svg'] & KTMaybeReactiveProps<{ href?: string; x?: number | string; y?: number | string }>;
  animate: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      attributeName?: string;
      from?: string | number;
      to?: string | number;
      dur?: string;
      repeatCount?: string | number;
    }>;
  animateMotion: AttributesMap['svg'] & KTMaybeReactiveProps<{ path?: string; dur?: string; rotate?: string }>;
  animateTransform: AttributesMap['svg'] &
    KTMaybeReactiveProps<{ type?: string; from?: string; to?: string; dur?: string }>;
  circle: AttributesMap['svg'] &
    KTMaybeReactiveProps<{ cx?: number | string; cy?: number | string; r?: number | string }>;
  clipPath: AttributesMap['svg'] & KTMaybeReactiveProps<{ clipPathUnits?: 'userSpaceOnUse' | 'objectBoundingBox' }>;
  defs: AttributesMap['svg'];
  desc: AttributesMap['svg'];
  ellipse: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      cx?: number | string;
      cy?: number | string;
      rx?: number | string;
      ry?: number | string;
    }>;

  // Filter primitives (provide common props)
  feBlend: AttributesMap['svg'] & KTMaybeReactiveProps<{ in?: string; in2?: string; mode?: string }>;
  feColorMatrix: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      type?: 'matrix' | 'saturate' | 'hueRotate' | 'luminanceToAlpha';
      values?: string;
    }>;
  feComponentTransfer: AttributesMap['svg'] & KTMaybeReactiveProps<{}>;
  feComposite: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      in?: string;
      in2?: string;
      operator?: string;
      k1?: number | string;
      k2?: number | string;
      k3?: number | string;
      k4?: number | string;
    }>;
  feConvolveMatrix: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      order?: string | number;
      kernelMatrix?: string;
      divisor?: string | number;
      bias?: string | number;
    }>;
  feDiffuseLighting: AttributesMap['svg'] & KTMaybeReactiveProps<{}>;
  feDisplacementMap: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      in?: string;
      in2?: string;
      scale?: number | string;
      xChannelSelector?: string;
      yChannelSelector?: string;
    }>;
  feDistantLight: AttributesMap['svg'] &
    KTMaybeReactiveProps<{ azimuth?: number | string; elevation?: number | string }>;
  feDropShadow: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      dx?: number | string;
      dy?: number | string;
      stdDeviation?: number | string;
      floodColor?: string;
      floodOpacity?: number | string;
    }>;
  feFlood: AttributesMap['svg'] & KTMaybeReactiveProps<{ floodColor?: string; floodOpacity?: number | string }>;
  feFuncA: AttributesMap['svg'] & KTMaybeReactiveProps<{}>;
  feFuncB: AttributesMap['svg'] & KTMaybeReactiveProps<{}>;
  feFuncG: AttributesMap['svg'] & KTMaybeReactiveProps<{}>;
  feFuncR: AttributesMap['svg'] & KTMaybeReactiveProps<{}>;
  feGaussianBlur: AttributesMap['svg'] & KTMaybeReactiveProps<{ stdDeviation?: number | string; edgeMode?: string }>;
  feImage: AttributesMap['svg'] & KTMaybeReactiveProps<{ href?: string }>;
  feMerge: AttributesMap['svg'] & KTMaybeReactiveProps<{}>;
  feMergeNode: AttributesMap['svg'] & KTMaybeReactiveProps<{ in?: string }>;
  feMorphology: AttributesMap['svg'] &
    KTMaybeReactiveProps<{ operator?: 'erode' | 'dilate'; radius?: number | string }>;
  feOffset: AttributesMap['svg'] & KTMaybeReactiveProps<{ dx?: number | string; dy?: number | string }>;
  fePointLight: AttributesMap['svg'] &
    KTMaybeReactiveProps<{ x?: number | string; y?: number | string; z?: number | string }>;
  feSpecularLighting: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      specularConstant?: number | string;
      specularExponent?: number | string;
      surfaceScale?: number | string;
    }>;
  feSpotLight: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      x?: number | string;
      y?: number | string;
      z?: number | string;
      pointsAtX?: number | string;
      pointsAtY?: number | string;
      pointsAtZ?: number | string;
      specularExponent?: number | string;
      limitingConeAngle?: number | string;
    }>;
  feTile: AttributesMap['svg'] & KTMaybeReactiveProps<{}>;
  feTurbulence: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      baseFrequency?: number | string;
      numOctaves?: number | string;
      seed?: number | string;
      stitchTiles?: string;
      type?: 'fractalNoise' | 'turbulence';
    }>;

  filter: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      x?: number | string;
      y?: number | string;
      width?: number | string;
      height?: number | string;
      filterUnits?: string;
      primitiveUnits?: string;
    }>;
  foreignObject: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      x?: number | string;
      y?: number | string;
      width?: number | string;
      height?: number | string;
    }>;
  g: AttributesMap['svg'];
  image: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      href?: string;
      x?: number | string;
      y?: number | string;
      width?: number | string;
      height?: number | string;
    }>;
  line: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      x1?: number | string;
      y1?: number | string;
      x2?: number | string;
      y2?: number | string;
    }>;
  linearGradient: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      x1?: number | string;
      y1?: number | string;
      x2?: number | string;
      y2?: number | string;
      gradientUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
      gradientTransform?: string;
    }>;
  marker: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      markerUnits?: string;
      markerWidth?: number | string;
      markerHeight?: number | string;
      refX?: number | string;
      refY?: number | string;
      orient?: string;
    }>;
  mask: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      maskUnits?: string;
      maskContentUnits?: string;
      x?: number | string;
      y?: number | string;
      width?: number | string;
      height?: number | string;
    }>;
  metadata: AttributesMap['svg'];
  mpath: AttributesMap['svg'] & KTMaybeReactiveProps<{ href?: string }>;
  path: AttributesMap['svg'] & KTMaybeReactiveProps<{ d?: string; pathLength?: number | string }>;
  pattern: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      patternUnits?: string;
      patternContentUnits?: string;
      width?: number | string;
      height?: number | string;
      x?: number | string;
      y?: number | string;
    }>;
  polygon: AttributesMap['svg'] & KTMaybeReactiveProps<{ points?: string }>;
  polyline: AttributesMap['svg'] & KTMaybeReactiveProps<{ points?: string }>;
  radialGradient: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      cx?: number | string;
      cy?: number | string;
      r?: number | string;
      fx?: number | string;
      fy?: number | string;
      gradientUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
      gradientTransform?: string;
    }>;
  rect: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      x?: number | string;
      y?: number | string;
      width?: number | string;
      height?: number | string;
      rx?: number | string;
      ry?: number | string;
    }>;
  script: AttributesMap['svg'] & KTMaybeReactiveProps<{ href?: string; type?: string }>;
  set: AttributesMap['svg'] &
    KTMaybeReactiveProps<{ attributeName?: string; to?: string | number; begin?: string; dur?: string }>;
  stop: AttributesMap['svg'] &
    KTMaybeReactiveProps<{ offset?: number | string; stopColor?: string; stopOpacity?: number | string }>;
  style: AttributesMap['svg'] & KTMaybeReactiveProps<{ media?: string }>;
  svg: AttributesMap['svg'];
  switch: AttributesMap['svg'];
  symbol: AttributesMap['svg'] & KTMaybeReactiveProps<{ viewBox?: string; preserveAspectRatio?: string }>;
  text: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      x?: number | string;
      y?: number | string;
      dx?: number | string;
      dy?: number | string;
      textLength?: number | string;
    }>;
  textPath: AttributesMap['svg'] & KTMaybeReactiveProps<{ href?: string; startOffset?: number | string }>;
  title: AttributesMap['svg'];
  tspan: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      x?: number | string;
      y?: number | string;
      dx?: number | string;
      dy?: number | string;
    }>;
  use: AttributesMap['svg'] &
    KTMaybeReactiveProps<{
      href?: string;
      x?: number | string;
      y?: number | string;
      width?: number | string;
      height?: number | string;
    }>;
  view: AttributesMap['svg'] & KTMaybeReactiveProps<{ viewBox?: string; preserveAspectRatio?: string }>;
}
