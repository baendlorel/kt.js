import { otherstring } from './global.js';

export interface HTMLAttributes {
  a: {
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

  area: {
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

  audio: {
    autoplay?: boolean;
    controls?: boolean;
    crossorigin?: 'anonymous' | 'use-credentials' | '';
    loop?: boolean;
    muted?: boolean;
    preload?: 'none' | 'metadata' | 'auto' | '';
    src?: string;
  };

  base: {
    href?: string;
    target?: '_self' | '_blank' | '_parent' | '_top' | string;
  };

  body: {};

  br: {};

  button: {
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

  canvas: {
    height?: number | string;
    width?: number | string;
  };

  caption: {};

  col: {
    span?: number | string;
  };

  colgroup: {
    span?: number | string;
  };

  data: {
    value?: string;
  };

  datalist: {};

  del: {
    cite?: string;
    datetime?: string;
  };

  details: {
    open?: boolean;
  };

  dialog: {
    open?: boolean;
  };

  embed: {
    height?: number | string;
    src?: string;
    type?: string;
    width?: number | string;
  };

  fieldset: {
    disabled?: boolean;
    form?: string;
    name?: string;
  };

  form: {
    'accept-charset'?: string;
    action?: string;
    autocomplete?: 'on' | 'off';
    enctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
    method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE' | otherstring;

    name?: string;
    novalidate?: boolean;
    target?: '_self' | '_blank' | '_parent' | '_top' | string;
  };

  head: {};

  hr: {};

  html: {};

  iframe: {
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

  img: {
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

  input: {
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

  ins: {
    cite?: string;
    datetime?: string;
  };

  label: {
    for?: string;
  };

  legend: {};

  li: {
    value?: number | string;
  };

  link: {
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

  map: {
    name?: string;
  };

  menu: {};

  meta: {
    charset?: string;
    content?: string;
    'http-equiv'?: 'content-security-policy' | 'content-type' | 'default-style' | 'refresh' | string;
    name?: string;
  };

  meter: {
    form?: string;
    high?: number | string;
    low?: number | string;
    max?: number | string;
    min?: number | string;
    optimum?: number | string;
    value?: number | string;
  };

  object: {
    data?: string;
    form?: string;
    height?: number | string;
    name?: string;
    type?: string;
    usemap?: string;
    width?: number | string;
  };

  ol: {
    reversed?: boolean;
    start?: number | string;
    type?: '1' | 'a' | 'A' | 'i' | 'I';
  };

  optgroup: {
    disabled?: boolean;
    label?: string;
  };

  option: {
    disabled?: boolean;
    label?: string;
    selected?: boolean;
    value?: string;
  };

  output: {
    for?: string;
    form?: string;
    name?: string;
  };

  picture: {};

  pre: {};

  progress: {
    max?: number | string;
    value?: number | string;
  };

  q: {
    cite?: string;
  };

  blockquote: {
    cite?: string;
  };

  script: {
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

  select: {
    autocomplete?: string;
    disabled?: boolean;
    form?: string;
    multiple?: boolean;
    name?: string;
    required?: boolean;
    size?: number | string;
  };

  slot: {
    name?: string;
  };

  source: {
    height?: number | string;
    media?: string;
    sizes?: string;
    src?: string;
    srcset?: string;
    type?: string;
    width?: number | string;
  };

  style: {
    media?: string;
  };

  table: {};

  tbody: {};

  tfoot: {};

  thead: {};

  td: {
    colspan?: number | string;
    headers?: string;
    rowspan?: number | string;
  };

  th: {
    abbr?: string;
    colspan?: number | string;
    headers?: string;
    rowspan?: number | string;
    scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
  };

  template: {};

  textarea: {
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

  time: {
    datetime?: string;
  };

  title: {};

  tr: {};

  track: {
    default?: boolean;
    kind?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
    label?: string;
    src?: string;
    srclang?: string;
  };

  ul: {};

  video: {
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

  abbr: {};
  address: {};
  article: {};
  aside: {};
  b: {};
  bdi: {};
  bdo: {};
  cite: {};
  code: {};
  dd: {};
  dfn: {};
  div: {};
  dl: {};
  dt: {};
  em: {};
  figcaption: {};
  figure: {};
  footer: {};
  h1: {};
  h2: {};
  h3: {};
  h4: {};
  h5: {};
  h6: {};
  header: {};
  hgroup: {};
  i: {};
  kbd: {};
  main: {};
  mark: {};
  nav: {};
  noscript: {};
  p: {};
  rp: {};
  rt: {};
  ruby: {};
  s: {};
  samp: {};
  search: {};
  section: {};
  small: {};
  span: {};
  strong: {};
  sub: {};
  summary: {};
  sup: {};
  u: {};
  var: {};
  wbr: {};
}
