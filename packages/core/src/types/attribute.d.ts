import type { otherstring } from '@ktjs/shared';
import { KTPrefixedEventAttribute } from './h.js';
import { KTReactifyObject } from '../reactive/index.ts';

type a = HTMLElementEventMap;

// Base events available to all HTML elements
type BaseAttr = KTPrefixedEventAttribute &
  KTReactifyObject<{
    [k: string]: any;

    // # base attributes
    class?: string;
    className?: string;
    style?: string | Partial<CSSStyleDeclaration>;
  }>;

export interface AttributesMap {
  // Anchor element
  a: BaseAttr &
    KTReactifyObject<{
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
    KTReactifyObject<{
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
    KTReactifyObject<{
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
    KTReactifyObject<{
      href?: string;
      target?: '_self' | '_blank' | '_parent' | '_top' | string;
    }>;

  // Body element
  body: BaseAttr & KTReactifyObject<{}>;

  // BR element
  br: BaseAttr & KTReactifyObject<{}>;

  // Button element
  button: BaseAttr &
    KTReactifyObject<{
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
    KTReactifyObject<{
      height?: number | string;
      width?: number | string;
    }>;

  // Table caption element
  caption: BaseAttr & KTReactifyObject<{}>;

  // Col element
  col: BaseAttr &
    KTReactifyObject<{
      span?: number | string;
    }>;

  // Colgroup element
  colgroup: BaseAttr &
    KTReactifyObject<{
      span?: number | string;
    }>;

  // Data element
  data: BaseAttr &
    KTReactifyObject<{
      value?: string;
    }>;

  // Datalist element
  datalist: BaseAttr & KTReactifyObject<{}>;

  // Del element
  del: BaseAttr &
    KTReactifyObject<{
      cite?: string;
      datetime?: string;
    }>;

  // Details element
  details: BaseAttr &
    KTReactifyObject<{
      open?: boolean;
    }>;

  // Dialog element
  dialog: BaseAttr &
    KTReactifyObject<{
      open?: boolean;
    }>;

  // Embed element
  embed: BaseAttr &
    KTReactifyObject<{
      height?: number | string;
      src?: string;
      type?: string;
      width?: number | string;
    }>;

  // Fieldset element
  fieldset: BaseAttr &
    KTReactifyObject<{
      disabled?: boolean;
      form?: string;
      name?: string;
    }>;

  // Form element
  form: BaseAttr &
    KTReactifyObject<{
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
  head: BaseAttr & KTReactifyObject<{}>;

  // HR element
  hr: BaseAttr & KTReactifyObject<{}>;

  // HTML element
  html: BaseAttr & KTReactifyObject<{}>;

  // IFrame element
  iframe: BaseAttr &
    KTReactifyObject<{
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
    KTReactifyObject<{
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
    KTReactifyObject<{
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
    KTReactifyObject<{
      cite?: string;
      datetime?: string;
    }>;

  // Label element
  label: BaseAttr &
    KTReactifyObject<{
      for?: string;
    }>;

  // Legend element
  legend: BaseAttr & KTReactifyObject<{}>;

  // LI element
  li: BaseAttr &
    KTReactifyObject<{
      value?: number | string;
    }>;

  // Link element
  link: BaseAttr &
    KTReactifyObject<{
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
    KTReactifyObject<{
      name?: string;
    }>;

  // Menu element
  menu: BaseAttr & KTReactifyObject<{}>;

  // Meta element
  meta: BaseAttr &
    KTReactifyObject<{
      charset?: string;
      content?: string;
      'http-equiv'?: 'content-security-policy' | 'content-type' | 'default-style' | 'refresh' | string;
      name?: string;
    }>;

  // Meter element
  meter: BaseAttr &
    KTReactifyObject<{
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
    KTReactifyObject<{
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
    KTReactifyObject<{
      reversed?: boolean;
      start?: number | string;
      type?: '1' | 'a' | 'A' | 'i' | 'I';
    }>;

  // Optgroup element
  optgroup: BaseAttr &
    KTReactifyObject<{
      disabled?: boolean;
      label?: string;
    }>;

  // Option element
  option: BaseAttr &
    KTReactifyObject<{
      disabled?: boolean;
      label?: string;
      selected?: boolean;
      value?: string;
    }>;

  // Output element
  output: BaseAttr &
    KTReactifyObject<{
      for?: string;
      form?: string;
      name?: string;
    }>;

  // Picture element
  picture: BaseAttr & KTReactifyObject<{}>;

  // Pre element
  pre: BaseAttr & KTReactifyObject<{}>;

  // Progress element
  progress: BaseAttr &
    KTReactifyObject<{
      max?: number | string;
      value?: number | string;
    }>;

  // Quote element (q and blockquote)
  q: BaseAttr &
    KTReactifyObject<{
      cite?: string;
    }>;

  blockquote: BaseAttr &
    KTReactifyObject<{
      cite?: string;
    }>;

  // Script element
  script: BaseAttr &
    KTReactifyObject<{
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
    KTReactifyObject<{
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
    KTReactifyObject<{
      name?: string;
    }>;

  // Source element
  source: BaseAttr &
    KTReactifyObject<{
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
    KTReactifyObject<{
      media?: string;
    }>;

  // Table element
  table: BaseAttr & KTReactifyObject<{}>;

  // Table body/footer/header elements
  tbody: BaseAttr & KTReactifyObject<{}>;

  tfoot: BaseAttr & KTReactifyObject<{}>;

  thead: BaseAttr & KTReactifyObject<{}>;

  // Table cell elements
  td: BaseAttr &
    KTReactifyObject<{
      colspan?: number | string;
      headers?: string;
      rowspan?: number | string;
    }>;

  th: BaseAttr &
    KTReactifyObject<{
      abbr?: string;
      colspan?: number | string;
      headers?: string;
      rowspan?: number | string;
      scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
    }>;

  // Template element
  template: BaseAttr & KTReactifyObject<{}>;

  // Textarea element
  textarea: BaseAttr &
    KTReactifyObject<{
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
    KTReactifyObject<{
      datetime?: string;
    }>;

  // Title element
  title: BaseAttr & KTReactifyObject<{}>;

  // TR element
  tr: BaseAttr & KTReactifyObject<{}>;

  // Track element
  track: BaseAttr &
    KTReactifyObject<{
      default?: boolean;
      kind?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
      label?: string;
      src?: string;
      srclang?: string;
    }>;

  // UL element
  ul: BaseAttr & KTReactifyObject<{}>;

  // Video element
  video: BaseAttr &
    KTReactifyObject<{
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
  abbr: BaseAttr & KTReactifyObject<{}>;
  address: BaseAttr & KTReactifyObject<{}>;
  article: BaseAttr & KTReactifyObject<{}>;
  aside: BaseAttr & KTReactifyObject<{}>;
  b: BaseAttr & KTReactifyObject<{}>;
  bdi: BaseAttr & KTReactifyObject<{}>;
  bdo: BaseAttr & KTReactifyObject<{}>;
  cite: BaseAttr & KTReactifyObject<{}>;
  code: BaseAttr & KTReactifyObject<{}>;
  dd: BaseAttr & KTReactifyObject<{}>;
  dfn: BaseAttr & KTReactifyObject<{}>;
  div: BaseAttr & KTReactifyObject<{}>;
  dl: BaseAttr & KTReactifyObject<{}>;
  dt: BaseAttr & KTReactifyObject<{}>;
  em: BaseAttr & KTReactifyObject<{}>;
  figcaption: BaseAttr & KTReactifyObject<{}>;
  figure: BaseAttr & KTReactifyObject<{}>;
  footer: BaseAttr & KTReactifyObject<{}>;
  h1: BaseAttr & KTReactifyObject<{}>;
  h2: BaseAttr & KTReactifyObject<{}>;
  h3: BaseAttr & KTReactifyObject<{}>;
  h4: BaseAttr & KTReactifyObject<{}>;
  h5: BaseAttr & KTReactifyObject<{}>;
  h6: BaseAttr & KTReactifyObject<{}>;
  header: BaseAttr & KTReactifyObject<{}>;
  hgroup: BaseAttr & KTReactifyObject<{}>;
  i: BaseAttr & KTReactifyObject<{}>;
  kbd: BaseAttr & KTReactifyObject<{}>;
  main: BaseAttr & KTReactifyObject<{}>;
  mark: BaseAttr & KTReactifyObject<{}>;
  nav: BaseAttr & KTReactifyObject<{}>;
  noscript: BaseAttr & KTReactifyObject<{}>;
  p: BaseAttr & KTReactifyObject<{}>;
  rp: BaseAttr & KTReactifyObject<{}>;
  rt: BaseAttr & KTReactifyObject<{}>;
  ruby: BaseAttr & KTReactifyObject<{}>;
  s: BaseAttr & KTReactifyObject<{}>;
  samp: BaseAttr & KTReactifyObject<{}>;
  search: BaseAttr & KTReactifyObject<{}>;
  section: BaseAttr & KTReactifyObject<{}>;
  small: BaseAttr & KTReactifyObject<{}>;
  span: BaseAttr & KTReactifyObject<{}>;
  strong: BaseAttr & KTReactifyObject<{}>;
  sub: BaseAttr & KTReactifyObject<{}>;
  summary: BaseAttr & KTReactifyObject<{}>;
  sup: BaseAttr & KTReactifyObject<{}>;
  u: BaseAttr & KTReactifyObject<{}>;
  var: BaseAttr & KTReactifyObject<{}>;
  wbr: BaseAttr & KTReactifyObject<{}>;

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
