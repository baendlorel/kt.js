import type { HTMLTag, MathMLTag, SVGTag, otherstring } from '@ktjs/shared';
import type { KTReactive } from '../reactable/reactive.js';
import type { KTRef } from '../reactable/ref.js';
import type { JSX } from './jsx.js';

export type HTML<T extends (HTMLTag | SVGTag | MathMLTag) & otherstring> = T extends SVGTag
  ? SVGElementTagNameMap[T]
  : T extends HTMLTag
    ? HTMLElementTagNameMap[T]
    : T extends MathMLTag
      ? MathMLElementTagNameMap[T]
      : HTMLElement;

type SingleContent = KTReactive<any> | HTMLElement | Element | Node | string | number | boolean | null | undefined;
type KTAvailableContent = SingleContent | KTAvailableContent[];
export type KTRawContent = KTAvailableContent | Promise<KTAvailableContent>;
export type KTRawAttr = KTAttribute | null | undefined | '' | false;
export type KTRawContents = KTAvailableContent;

/**
 * Event handler type for DOM events
 */
export type EventHandler<T extends Event = Event> = (this: HTMLElement, ev: T) => any;

/**
 * Used to create enhanced HTML elements
 */
interface KTBaseAttribute {
  /**
   * Additional attributes are forwarded to the DOM as-is.
   * kt.js does not sanitize raw HTML, URLs, `srcdoc`, or native `on*` attribute values.
   * If you bind untrusted input here, sanitization is the application's responsibility.
   */
  [k: string]: any;

  // # kt-specific attributes
  ref?: KTRef<any>;

  /**
   * If a `KTRef` is bound, it will be reactive; otherwise, it will be static.
   */
  'k-if'?: any;

  /**
   * Register two-way data binding between an input element and a KTRef.
   * - Default to regist `input` event and `value` property(`checked` for checkboxes and radios).
   */
  'k-model'?: KTRef<any>;

  /**
   * Raw HTML escape hatch. Directly assigns to `innerHTML`.
   * - Provide a `KTRef` to make it reactive.
   * - No sanitization is performed by kt.js.
   * - Only pass trusted HTML.
   * - Never bind user-controlled strings here without application-level sanitization.
   */
  'k-html'?: any;

  // # normal HTML attributes
  id?: string;
  class?: string;
  className?: string;
  style?: string | Partial<CSSStyleDeclaration>;

  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'tel'
    | 'url'
    | 'search'
    | 'date'
    | 'datetime-local'
    | 'time'
    | 'month'
    | 'week'
    | 'color'
    | 'range'
    | 'file'
    | 'checkbox'
    | 'radio'
    | 'hidden'
    | 'submit'
    | 'reset'
    | 'button'
    | 'image'
    | otherstring;
  for?: string;

  name?: string;
  title?: string;
  placeholder?: string;
  contenteditable?: boolean;
  value?: any;
  valueAsDate?: Date;
  valueAsNumber?: number;
  label?: string;
  disabled?: boolean;

  min?: string | number;
  max?: string | number;
  step?: string | number;

  selected?: boolean;
  checked?: boolean;

  action?: string;
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE' | otherstring;
}

export type KTPrefixedEventAttribute = {
  /**
   * Preferred event binding form.
   * Use `on:click`, `on:input`, etc. instead of raw `onclick`/`onerror` attributes.
   */
  [EventName in keyof HTMLElementEventMap as `on:${EventName}`]?: (ev: HTMLElementEventMap[EventName]) => void;
};

export type KTAttribute = KTBaseAttribute & KTPrefixedEventAttribute;

export type KTComponent = (
  props: {
    ref?: KTRef<JSX.Element>;
    children?: KTRawContent;
  } & KTAttribute &
    any,
) => JSX.Element | Promise<JSX.Element> | any;
