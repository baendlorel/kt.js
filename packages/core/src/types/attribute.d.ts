import { otherstring } from './global.js';

// Base events available to all HTML elements
type BaseAttr = {
  [k: string]: any;

  // # base attributes
  class?: string;
  className?: string;
  style?: string;

  // # Events
  // Mouse events
  'on:click'?: (ev: MouseEvent) => void;
  'on:dblclick'?: (ev: MouseEvent) => void;
  'on:mousedown'?: (ev: MouseEvent) => void;
  'on:mouseup'?: (ev: MouseEvent) => void;
  'on:mousemove'?: (ev: MouseEvent) => void;
  'on:mouseenter'?: (ev: MouseEvent) => void;
  'on:mouseleave'?: (ev: MouseEvent) => void;
  'on:mouseover'?: (ev: MouseEvent) => void;
  'on:mouseout'?: (ev: MouseEvent) => void;
  'on:contextmenu'?: (ev: MouseEvent) => void;

  // Keyboard events
  'on:keydown'?: (ev: KeyboardEvent) => void;
  'on:keyup'?: (ev: KeyboardEvent) => void;
  'on:keypress'?: (ev: KeyboardEvent) => void;

  // Focus events
  'on:focus'?: (ev: FocusEvent) => void;
  'on:blur'?: (ev: FocusEvent) => void;
  'on:focusin'?: (ev: FocusEvent) => void;
  'on:focusout'?: (ev: FocusEvent) => void;

  // Input events
  'on:input'?: (ev: Event) => void;
  'on:change'?: (ev: Event) => void;
  'on:beforeinput'?: (ev: InputEvent) => void;

  // Drag events
  'on:drag'?: (ev: DragEvent) => void;
  'on:dragstart'?: (ev: DragEvent) => void;
  'on:dragend'?: (ev: DragEvent) => void;
  'on:dragenter'?: (ev: DragEvent) => void;
  'on:dragleave'?: (ev: DragEvent) => void;
  'on:dragover'?: (ev: DragEvent) => void;
  'on:drop'?: (ev: DragEvent) => void;

  // Clipboard events
  'on:copy'?: (ev: ClipboardEvent) => void;
  'on:cut'?: (ev: ClipboardEvent) => void;
  'on:paste'?: (ev: ClipboardEvent) => void;

  // Touch events
  'on:touchstart'?: (ev: TouchEvent) => void;
  'on:touchmove'?: (ev: TouchEvent) => void;
  'on:touchend'?: (ev: TouchEvent) => void;
  'on:touchcancel'?: (ev: TouchEvent) => void;

  // Wheel event
  'on:wheel'?: (ev: WheelEvent) => void;

  // Animation events
  'on:animationstart'?: (ev: AnimationEvent) => void;
  'on:animationend'?: (ev: AnimationEvent) => void;
  'on:animationiteration'?: (ev: AnimationEvent) => void;

  // Transition events
  'on:transitionstart'?: (ev: TransitionEvent) => void;
  'on:transitionend'?: (ev: TransitionEvent) => void;
  'on:transitionrun'?: (ev: TransitionEvent) => void;
  'on:transitioncancel'?: (ev: TransitionEvent) => void;

  // Pointer events
  'on:pointerdown'?: (ev: PointerEvent) => void;
  'on:pointerup'?: (ev: PointerEvent) => void;
  'on:pointermove'?: (ev: PointerEvent) => void;
  'on:pointerenter'?: (ev: PointerEvent) => void;
  'on:pointerleave'?: (ev: PointerEvent) => void;
  'on:pointerover'?: (ev: PointerEvent) => void;
  'on:pointerout'?: (ev: PointerEvent) => void;
  'on:pointercancel'?: (ev: PointerEvent) => void;
  'on:gotpointercapture'?: (ev: PointerEvent) => void;
  'on:lostpointercapture'?: (ev: PointerEvent) => void;

  // Selection events
  'on:select'?: (ev: Event) => void;
  'on:selectstart'?: (ev: Event) => void;

  // Scroll event
  'on:scroll'?: (ev: Event) => void;

  // Resize event
  'on:resize'?: (ev: UIEvent) => void;
};

// Form-specific events
interface FormElementEvents {
  'on:submit'?: (ev: SubmitEvent) => void;
  'on:reset'?: (ev: Event) => void;
  'on:invalid'?: (ev: Event) => void;
}

// Media-specific events
interface MediaElementEvents {
  'on:play'?: (ev: Event) => void;
  'on:pause'?: (ev: Event) => void;
  'on:playing'?: (ev: Event) => void;
  'on:ended'?: (ev: Event) => void;
  'on:canplay'?: (ev: Event) => void;
  'on:canplaythrough'?: (ev: Event) => void;
  'on:durationchange'?: (ev: Event) => void;
  'on:emptied'?: (ev: Event) => void;
  'on:loadeddata'?: (ev: Event) => void;
  'on:loadedmetadata'?: (ev: Event) => void;
  'on:loadstart'?: (ev: Event) => void;
  'on:progress'?: (ev: ProgressEvent) => void;
  'on:ratechange'?: (ev: Event) => void;
  'on:seeked'?: (ev: Event) => void;
  'on:seeking'?: (ev: Event) => void;
  'on:stalled'?: (ev: Event) => void;
  'on:suspend'?: (ev: Event) => void;
  'on:timeupdate'?: (ev: Event) => void;
  'on:volumechange'?: (ev: Event) => void;
  'on:waiting'?: (ev: Event) => void;
  'on:abort'?: (ev: UIEvent) => void;
  'on:error'?: (ev: ErrorEvent) => void;
}

// Details-specific events
interface DetailsElementEvents {
  'on:toggle'?: (ev: Event) => void;
}

// Dialog-specific events
interface DialogElementEvents {
  'on:cancel'?: (ev: Event) => void;
  'on:close'?: (ev: Event) => void;
}

// Image-specific events
interface ImageElementEvents {
  'on:load'?: (ev: Event) => void;
  'on:error'?: (ev: ErrorEvent) => void;
}

export interface AttributesMap {
  // Anchor element
  a: BaseAttr & {
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
  };

  // Area element
  area: BaseAttr & {
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
  };

  // Audio element
  audio: BaseAttr &
    MediaElementEvents & {
      autoplay?: boolean;
      controls?: boolean;
      crossorigin?: 'anonymous' | 'use-credentials' | '';
      loop?: boolean;
      muted?: boolean;
      preload?: 'none' | 'metadata' | 'auto' | '';
      src?: string;
    };

  // Base element
  base: BaseAttr & {
    href?: string;
    target?: '_self' | '_blank' | '_parent' | '_top' | string;
  };

  // Body element
  body: BaseAttr & {};

  // BR element
  br: BaseAttr & {};

  // Button element
  button: BaseAttr & {
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
  };

  // Canvas element
  canvas: BaseAttr & {
    height?: number | string;
    width?: number | string;
  };

  // Table caption element
  caption: BaseAttr & {};

  // Col element
  col: BaseAttr & {
    span?: number | string;
  };

  // Colgroup element
  colgroup: BaseAttr & {
    span?: number | string;
  };

  // Data element
  data: BaseAttr & {
    value?: string;
  };

  // Datalist element
  datalist: BaseAttr & {};

  // Del element
  del: BaseAttr & {
    cite?: string;
    datetime?: string;
  };

  // Details element
  details: BaseAttr &
    DetailsElementEvents & {
      open?: boolean;
    };

  // Dialog element
  dialog: BaseAttr &
    DialogElementEvents & {
      open?: boolean;
    };

  // Embed element
  embed: BaseAttr & {
    height?: number | string;
    src?: string;
    type?: string;
    width?: number | string;
  };

  // Fieldset element
  fieldset: BaseAttr & {
    disabled?: boolean;
    form?: string;
    name?: string;
  };

  // Form element
  form: BaseAttr &
    FormElementEvents & {
      'accept-charset'?: string;
      action?: string;
      autocomplete?: 'on' | 'off';
      enctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
      method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE' | otherstring;

      name?: string;
      novalidate?: boolean;
      target?: '_self' | '_blank' | '_parent' | '_top' | string;
    };

  // Head element
  head: BaseAttr & {};

  // HR element
  hr: BaseAttr & {};

  // HTML element
  html: BaseAttr & {};

  // IFrame element
  iframe: BaseAttr &
    ImageElementEvents & {
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
    };

  // Image element
  img: BaseAttr &
    ImageElementEvents & {
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
    };

  // Input element
  input: BaseAttr & {
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
  };

  // Ins element
  ins: BaseAttr & {
    cite?: string;
    datetime?: string;
  };

  // Label element
  label: BaseAttr & {
    for?: string;
  };

  // Legend element
  legend: BaseAttr & {};

  // LI element
  li: BaseAttr & {
    value?: number | string;
  };

  // Link element
  link: BaseAttr &
    ImageElementEvents & {
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
    };

  // Map element
  map: BaseAttr & {
    name?: string;
  };

  // Menu element
  menu: BaseAttr & {};

  // Meta element
  meta: BaseAttr & {
    charset?: string;
    content?: string;
    'http-equiv'?: 'content-security-policy' | 'content-type' | 'default-style' | 'refresh' | string;
    name?: string;
  };

  // Meter element
  meter: BaseAttr & {
    form?: string;
    high?: number | string;
    low?: number | string;
    max?: number | string;
    min?: number | string;
    optimum?: number | string;
    value?: number | string;
  };

  // Object element
  object: BaseAttr &
    ImageElementEvents & {
      data?: string;
      form?: string;
      height?: number | string;
      name?: string;
      type?: string;
      usemap?: string;
      width?: number | string;
    };

  // OL element
  ol: BaseAttr & {
    reversed?: boolean;
    start?: number | string;
    type?: '1' | 'a' | 'A' | 'i' | 'I';
  };

  // Optgroup element
  optgroup: BaseAttr & {
    disabled?: boolean;
    label?: string;
  };

  // Option element
  option: BaseAttr & {
    disabled?: boolean;
    label?: string;
    selected?: boolean;
    value?: string;
  };

  // Output element
  output: BaseAttr & {
    for?: string;
    form?: string;
    name?: string;
  };

  // Picture element
  picture: BaseAttr & {};

  // Pre element
  pre: BaseAttr & {};

  // Progress element
  progress: BaseAttr & {
    max?: number | string;
    value?: number | string;
  };

  // Quote element (q and blockquote)
  q: BaseAttr & {
    cite?: string;
  };

  blockquote: BaseAttr & {
    cite?: string;
  };

  // Script element
  script: BaseAttr &
    ImageElementEvents & {
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
    };

  // Select element
  select: BaseAttr & {
    autocomplete?: string;
    disabled?: boolean;
    form?: string;
    multiple?: boolean;
    name?: string;
    required?: boolean;
    size?: number | string;
  };

  // Slot element
  slot: BaseAttr & {
    name?: string;
  };

  // Source element
  source: BaseAttr & {
    height?: number | string;
    media?: string;
    sizes?: string;
    src?: string;
    srcset?: string;
    type?: string;
    width?: number | string;
  };

  // Style element
  style: BaseAttr &
    ImageElementEvents & {
      media?: string;
    };

  // Table element
  table: BaseAttr & {};

  // Table body/footer/header elements
  tbody: BaseAttr & {};

  tfoot: BaseAttr & {};

  thead: BaseAttr & {};

  // Table cell elements
  td: BaseAttr & {
    colspan?: number | string;
    headers?: string;
    rowspan?: number | string;
  };

  th: BaseAttr & {
    abbr?: string;
    colspan?: number | string;
    headers?: string;
    rowspan?: number | string;
    scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
  };

  // Template element
  template: BaseAttr & {};

  // Textarea element
  textarea: BaseAttr & {
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
  };

  // Time element
  time: BaseAttr & {
    datetime?: string;
  };

  // Title element
  title: BaseAttr & {};

  // TR element
  tr: BaseAttr & {};

  // Track element
  track: BaseAttr & {
    default?: boolean;
    kind?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
    label?: string;
    src?: string;
    srclang?: string;
  };

  // UL element
  ul: BaseAttr & {};

  // Video element
  video: BaseAttr &
    MediaElementEvents & {
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
    };

  // Generic HTMLElement (no specific attributes beyond BaseEvent)
  abbr: BaseAttr & {};
  address: BaseAttr & {};
  article: BaseAttr & {};
  aside: BaseAttr & {};
  b: BaseAttr & {};
  bdi: BaseAttr & {};
  bdo: BaseAttr & {};
  cite: BaseAttr & {};
  code: BaseAttr & {};
  dd: BaseAttr & {};
  dfn: BaseAttr & {};
  div: BaseAttr & {};
  dl: BaseAttr & {};
  dt: BaseAttr & {};
  em: BaseAttr & {};
  figcaption: BaseAttr & {};
  figure: BaseAttr & {};
  footer: BaseAttr & {};
  h1: BaseAttr & {};
  h2: BaseAttr & {};
  h3: BaseAttr & {};
  h4: BaseAttr & {};
  h5: BaseAttr & {};
  h6: BaseAttr & {};
  header: BaseAttr & {};
  hgroup: BaseAttr & {};
  i: BaseAttr & {};
  kbd: BaseAttr & {};
  main: BaseAttr & {};
  mark: BaseAttr & {};
  nav: BaseAttr & {};
  noscript: BaseAttr & {};
  p: BaseAttr & {};
  rp: BaseAttr & {};
  rt: BaseAttr & {};
  ruby: BaseAttr & {};
  s: BaseAttr & {};
  samp: BaseAttr & {};
  search: BaseAttr & {};
  section: BaseAttr & {};
  small: BaseAttr & {};
  span: BaseAttr & {};
  strong: BaseAttr & {};
  sub: BaseAttr & {};
  summary: BaseAttr & {};
  sup: BaseAttr & {};
  u: BaseAttr & {};
  var: BaseAttr & {};
  wbr: BaseAttr & {};

  svg: BaseAttr & {
    class?: string;
    style?: string;
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
