import type { otherstring } from '@ktjs/shared';
import { KTPrefixedEventAttribute } from './h.js';
import { KTReactify } from '../reactive/index.ts';

type a = HTMLElementEventMap;

// Base events available to all HTML elements
type BaseAttr = KTPrefixedEventAttribute &
  KTReactify<{
    [k: string]: any;

    // # base attributes
    class?: string;
    className?: string;
    style?: string | Partial<CSSStyleDeclaration>;
  }>;

export interface AttributesMap {
  // Anchor element
  a: BaseAttr &
    KTReactify<{
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
    KTReactify<{
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
    KTReactify<{
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
    KTReactify<{
      href?: string;
      target?: '_self' | '_blank' | '_parent' | '_top' | string;
    }>;

  // Body element
  body: BaseAttr & KTReactify<{}>;

  // BR element
  br: BaseAttr & KTReactify<{}>;

  // Button element
  button: BaseAttr &
    KTReactify<{
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
    KTReactify<{
      height?: number | string;
      width?: number | string;
    }>;

  // Table caption element
  caption: BaseAttr & KTReactify<{}>;

  // Col element
  col: BaseAttr &
    KTReactify<{
      span?: number | string;
    }>;

  // Colgroup element
  colgroup: BaseAttr &
    KTReactify<{
      span?: number | string;
    }>;

  // Data element
  data: BaseAttr &
    KTReactify<{
      value?: string;
    }>;

  // Datalist element
  datalist: BaseAttr & KTReactify<{}>;

  // Del element
  del: BaseAttr &
    KTReactify<{
      cite?: string;
      datetime?: string;
    }>;

  // Details element
  details: BaseAttr &
    KTReactify<{
      open?: boolean;
    }>;

  // Dialog element
  dialog: BaseAttr &
    KTReactify<{
      open?: boolean;
    }>;

  // Embed element
  embed: BaseAttr &
    KTReactify<{
      height?: number | string;
      src?: string;
      type?: string;
      width?: number | string;
    }>;

  // Fieldset element
  fieldset: BaseAttr &
    KTReactify<{
      disabled?: boolean;
      form?: string;
      name?: string;
    }>;

  // Form element
  form: BaseAttr &
    KTReactify<{
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
  head: BaseAttr & KTReactify<{}>;

  // HR element
  hr: BaseAttr & KTReactify<{}>;

  // HTML element
  html: BaseAttr & KTReactify<{}>;

  // IFrame element
  iframe: BaseAttr &
    KTReactify<{
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
    KTReactify<{
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
    KTReactify<{
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
    KTReactify<{
      cite?: string;
      datetime?: string;
    }>;

  // Label element
  label: BaseAttr &
    KTReactify<{
      for?: string;
    }>;

  // Legend element
  legend: BaseAttr & KTReactify<{}>;

  // LI element
  li: BaseAttr &
    KTReactify<{
      value?: number | string;
    }>;

  // Link element
  link: BaseAttr &
    KTReactify<{
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
    KTReactify<{
      name?: string;
    }>;

  // Menu element
  menu: BaseAttr & KTReactify<{}>;

  // Meta element
  meta: BaseAttr &
    KTReactify<{
      charset?: string;
      content?: string;
      'http-equiv'?: 'content-security-policy' | 'content-type' | 'default-style' | 'refresh' | string;
      name?: string;
    }>;

  // Meter element
  meter: BaseAttr &
    KTReactify<{
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
    KTReactify<{
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
    KTReactify<{
      reversed?: boolean;
      start?: number | string;
      type?: '1' | 'a' | 'A' | 'i' | 'I';
    }>;

  // Optgroup element
  optgroup: BaseAttr &
    KTReactify<{
      disabled?: boolean;
      label?: string;
    }>;

  // Option element
  option: BaseAttr &
    KTReactify<{
      disabled?: boolean;
      label?: string;
      selected?: boolean;
      value?: string;
    }>;

  // Output element
  output: BaseAttr &
    KTReactify<{
      for?: string;
      form?: string;
      name?: string;
    }>;

  // Picture element
  picture: BaseAttr & KTReactify<{}>;

  // Pre element
  pre: BaseAttr & KTReactify<{}>;

  // Progress element
  progress: BaseAttr &
    KTReactify<{
      max?: number | string;
      value?: number | string;
    }>;

  // Quote element (q and blockquote)
  q: BaseAttr &
    KTReactify<{
      cite?: string;
    }>;

  blockquote: BaseAttr &
    KTReactify<{
      cite?: string;
    }>;

  // Script element
  script: BaseAttr &
    KTReactify<{
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
    KTReactify<{
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
    KTReactify<{
      name?: string;
    }>;

  // Source element
  source: BaseAttr &
    KTReactify<{
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
    KTReactify<{
      media?: string;
    }>;

  // Table element
  table: BaseAttr & KTReactify<{}>;

  // Table body/footer/header elements
  tbody: BaseAttr & KTReactify<{}>;

  tfoot: BaseAttr & KTReactify<{}>;

  thead: BaseAttr & KTReactify<{}>;

  // Table cell elements
  td: BaseAttr &
    KTReactify<{
      colspan?: number | string;
      headers?: string;
      rowspan?: number | string;
    }>;

  th: BaseAttr &
    KTReactify<{
      abbr?: string;
      colspan?: number | string;
      headers?: string;
      rowspan?: number | string;
      scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
    }>;

  // Template element
  template: BaseAttr & KTReactify<{}>;

  // Textarea element
  textarea: BaseAttr &
    KTReactify<{
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
    KTReactify<{
      datetime?: string;
    }>;

  // Title element
  title: BaseAttr & KTReactify<{}>;

  // TR element
  tr: BaseAttr & KTReactify<{}>;

  // Track element
  track: BaseAttr &
    KTReactify<{
      default?: boolean;
      kind?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
      label?: string;
      src?: string;
      srclang?: string;
    }>;

  // UL element
  ul: BaseAttr & KTReactify<{}>;

  // Video element
  video: BaseAttr &
    KTReactify<{
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
  abbr: BaseAttr & KTReactify<{}>;
  address: BaseAttr & KTReactify<{}>;
  article: BaseAttr & KTReactify<{}>;
  aside: BaseAttr & KTReactify<{}>;
  b: BaseAttr & KTReactify<{}>;
  bdi: BaseAttr & KTReactify<{}>;
  bdo: BaseAttr & KTReactify<{}>;
  cite: BaseAttr & KTReactify<{}>;
  code: BaseAttr & KTReactify<{}>;
  dd: BaseAttr & KTReactify<{}>;
  dfn: BaseAttr & KTReactify<{}>;
  div: BaseAttr & KTReactify<{}>;
  dl: BaseAttr & KTReactify<{}>;
  dt: BaseAttr & KTReactify<{}>;
  em: BaseAttr & KTReactify<{}>;
  figcaption: BaseAttr & KTReactify<{}>;
  figure: BaseAttr & KTReactify<{}>;
  footer: BaseAttr & KTReactify<{}>;
  h1: BaseAttr & KTReactify<{}>;
  h2: BaseAttr & KTReactify<{}>;
  h3: BaseAttr & KTReactify<{}>;
  h4: BaseAttr & KTReactify<{}>;
  h5: BaseAttr & KTReactify<{}>;
  h6: BaseAttr & KTReactify<{}>;
  header: BaseAttr & KTReactify<{}>;
  hgroup: BaseAttr & KTReactify<{}>;
  i: BaseAttr & KTReactify<{}>;
  kbd: BaseAttr & KTReactify<{}>;
  main: BaseAttr & KTReactify<{}>;
  mark: BaseAttr & KTReactify<{}>;
  nav: BaseAttr & KTReactify<{}>;
  noscript: BaseAttr & KTReactify<{}>;
  p: BaseAttr & KTReactify<{}>;
  rp: BaseAttr & KTReactify<{}>;
  rt: BaseAttr & KTReactify<{}>;
  ruby: BaseAttr & KTReactify<{}>;
  s: BaseAttr & KTReactify<{}>;
  samp: BaseAttr & KTReactify<{}>;
  search: BaseAttr & KTReactify<{}>;
  section: BaseAttr & KTReactify<{}>;
  small: BaseAttr & KTReactify<{}>;
  span: BaseAttr & KTReactify<{}>;
  strong: BaseAttr & KTReactify<{}>;
  sub: BaseAttr & KTReactify<{}>;
  summary: BaseAttr & KTReactify<{}>;
  sup: BaseAttr & KTReactify<{}>;
  u: BaseAttr & KTReactify<{}>;
  var: BaseAttr & KTReactify<{}>;
  wbr: BaseAttr & KTReactify<{}>;

  svg: BaseAttr & {
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
  };
}

export interface SVGAttributesMap {
  a: AttributesMap['svg'] & { href?: string; x?: number | string; y?: number | string };
  animate: AttributesMap['svg'] & {
    attributeName?: string;
    from?: string | number;
    to?: string | number;
    dur?: string;
    repeatCount?: string | number;
  };
  animateMotion: AttributesMap['svg'] & { path?: string; dur?: string; rotate?: string };
  animateTransform: AttributesMap['svg'] & { type?: string; from?: string; to?: string; dur?: string };
  circle: AttributesMap['svg'] & { cx?: number | string; cy?: number | string; r?: number | string };
  clipPath: AttributesMap['svg'] & { clipPathUnits?: 'userSpaceOnUse' | 'objectBoundingBox' };
  defs: AttributesMap['svg'];
  desc: AttributesMap['svg'];
  ellipse: AttributesMap['svg'] & {
    cx?: number | string;
    cy?: number | string;
    rx?: number | string;
    ry?: number | string;
  };

  // Filter primitives (provide common props)
  feBlend: AttributesMap['svg'] & { in?: string; in2?: string; mode?: string };
  feColorMatrix: AttributesMap['svg'] & {
    type?: 'matrix' | 'saturate' | 'hueRotate' | 'luminanceToAlpha';
    values?: string;
  };
  feComponentTransfer: AttributesMap['svg'] & {};
  feComposite: AttributesMap['svg'] & {
    in?: string;
    in2?: string;
    operator?: string;
    k1?: number | string;
    k2?: number | string;
    k3?: number | string;
    k4?: number | string;
  };
  feConvolveMatrix: AttributesMap['svg'] & {
    order?: string | number;
    kernelMatrix?: string;
    divisor?: string | number;
    bias?: string | number;
  };
  feDiffuseLighting: AttributesMap['svg'] & {};
  feDisplacementMap: AttributesMap['svg'] & {
    in?: string;
    in2?: string;
    scale?: number | string;
    xChannelSelector?: string;
    yChannelSelector?: string;
  };
  feDistantLight: AttributesMap['svg'] & { azimuth?: number | string; elevation?: number | string };
  feDropShadow: AttributesMap['svg'] & {
    dx?: number | string;
    dy?: number | string;
    stdDeviation?: number | string;
    floodColor?: string;
    floodOpacity?: number | string;
  };
  feFlood: AttributesMap['svg'] & { floodColor?: string; floodOpacity?: number | string };
  feFuncA: AttributesMap['svg'] & {};
  feFuncB: AttributesMap['svg'] & {};
  feFuncG: AttributesMap['svg'] & {};
  feFuncR: AttributesMap['svg'] & {};
  feGaussianBlur: AttributesMap['svg'] & { stdDeviation?: number | string; edgeMode?: string };
  feImage: AttributesMap['svg'] & { href?: string };
  feMerge: AttributesMap['svg'] & {};
  feMergeNode: AttributesMap['svg'] & { in?: string };
  feMorphology: AttributesMap['svg'] & { operator?: 'erode' | 'dilate'; radius?: number | string };
  feOffset: AttributesMap['svg'] & { dx?: number | string; dy?: number | string };
  fePointLight: AttributesMap['svg'] & { x?: number | string; y?: number | string; z?: number | string };
  feSpecularLighting: AttributesMap['svg'] & {
    specularConstant?: number | string;
    specularExponent?: number | string;
    surfaceScale?: number | string;
  };
  feSpotLight: AttributesMap['svg'] & {
    x?: number | string;
    y?: number | string;
    z?: number | string;
    pointsAtX?: number | string;
    pointsAtY?: number | string;
    pointsAtZ?: number | string;
    specularExponent?: number | string;
    limitingConeAngle?: number | string;
  };
  feTile: AttributesMap['svg'] & {};
  feTurbulence: AttributesMap['svg'] & {
    baseFrequency?: number | string;
    numOctaves?: number | string;
    seed?: number | string;
    stitchTiles?: string;
    type?: 'fractalNoise' | 'turbulence';
  };

  filter: AttributesMap['svg'] & {
    x?: number | string;
    y?: number | string;
    width?: number | string;
    height?: number | string;
    filterUnits?: string;
    primitiveUnits?: string;
  };
  foreignObject: AttributesMap['svg'] & {
    x?: number | string;
    y?: number | string;
    width?: number | string;
    height?: number | string;
  };
  g: AttributesMap['svg'];
  image: AttributesMap['svg'] & {
    href?: string;
    x?: number | string;
    y?: number | string;
    width?: number | string;
    height?: number | string;
  };
  line: AttributesMap['svg'] & {
    x1?: number | string;
    y1?: number | string;
    x2?: number | string;
    y2?: number | string;
  };
  linearGradient: AttributesMap['svg'] & {
    x1?: number | string;
    y1?: number | string;
    x2?: number | string;
    y2?: number | string;
    gradientUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
    gradientTransform?: string;
  };
  marker: AttributesMap['svg'] & {
    markerUnits?: string;
    markerWidth?: number | string;
    markerHeight?: number | string;
    refX?: number | string;
    refY?: number | string;
    orient?: string;
  };
  mask: AttributesMap['svg'] & {
    maskUnits?: string;
    maskContentUnits?: string;
    x?: number | string;
    y?: number | string;
    width?: number | string;
    height?: number | string;
  };
  metadata: AttributesMap['svg'];
  mpath: AttributesMap['svg'] & { href?: string };
  path: AttributesMap['svg'] & { d?: string; pathLength?: number | string };
  pattern: AttributesMap['svg'] & {
    patternUnits?: string;
    patternContentUnits?: string;
    width?: number | string;
    height?: number | string;
    x?: number | string;
    y?: number | string;
  };
  polygon: AttributesMap['svg'] & { points?: string };
  polyline: AttributesMap['svg'] & { points?: string };
  radialGradient: AttributesMap['svg'] & {
    cx?: number | string;
    cy?: number | string;
    r?: number | string;
    fx?: number | string;
    fy?: number | string;
    gradientUnits?: 'userSpaceOnUse' | 'objectBoundingBox';
    gradientTransform?: string;
  };
  rect: AttributesMap['svg'] & {
    x?: number | string;
    y?: number | string;
    width?: number | string;
    height?: number | string;
    rx?: number | string;
    ry?: number | string;
  };
  script: AttributesMap['svg'] & { href?: string; type?: string };
  set: AttributesMap['svg'] & { attributeName?: string; to?: string | number; begin?: string; dur?: string };
  stop: AttributesMap['svg'] & { offset?: number | string; stopColor?: string; stopOpacity?: number | string };
  style: AttributesMap['svg'] & { media?: string };
  svg: AttributesMap['svg'];
  switch: AttributesMap['svg'];
  symbol: AttributesMap['svg'] & { viewBox?: string; preserveAspectRatio?: string };
  text: AttributesMap['svg'] & {
    x?: number | string;
    y?: number | string;
    dx?: number | string;
    dy?: number | string;
    textLength?: number | string;
  };
  textPath: AttributesMap['svg'] & { href?: string; startOffset?: number | string };
  title: AttributesMap['svg'];
  tspan: AttributesMap['svg'] & {
    x?: number | string;
    y?: number | string;
    dx?: number | string;
    dy?: number | string;
  };
  use: AttributesMap['svg'] & {
    href?: string;
    x?: number | string;
    y?: number | string;
    width?: number | string;
    height?: number | string;
  };
  view: AttributesMap['svg'] & { viewBox?: string; preserveAspectRatio?: string };
}
