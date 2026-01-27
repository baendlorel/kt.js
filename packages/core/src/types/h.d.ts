import { KTRef } from '../jsx/ref.js';
import type { HTMLTag, otherstring } from './global.js';
import { KTHTMLElement } from './jsx.js';

export type KTH = <T extends HTMLTag>(tag: T, attr?: KTRawAttr, content?: KTRawContent) => HTMLElementTagNameMap[T];

type SingleContent = KTRef<any> | HTMLElement | Element | string | number | boolean | null | undefined;
type KTAvailableContent = SingleContent | KTAvailableContent[];
export type KTRawContent = KTAvailableContent | Promise<KTAvailableContent>;
export type KTRawAttr = KTAttribute | string;
export type KTRawContents = KTAvailableContent;

/**
 * Event handler type for DOM events
 */
export type EventHandler<T extends Event = Event> = (this: HTMLElement, ev: T) => any;

/**
 * Used to create enhanced HTML elements
 */
interface KTBaseAttribute {
  [k: string]: any;

  ref?: KTRef<HTMLElement>;
  'k-if'?: any;

  id?: string;
  class?: string;
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
  value?: string;
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

type KTPrefixedEventHandlers = {
  [EventName in keyof HTMLElementEventMap as `on:${EventName}`]?: (ev: HTMLElementEventMap[EventName]) => void;
};

type KTSpecialEventHandlers = {
  /**
   * Directly extract `value` from the input element
   */
  'on:ktchange'?: (value: string) => void;
  /**
   * Directly extract `value` and trim it
   */
  'ontrim:ktchange'?: (value: string) => void;
  /**
   * Directly extract `value` and parse it to number
   */
  'on:ktchangenumber'?: (value: number) => void;

  /**
   * Directly extract `value` from the input element
   */
  'on:ktinput'?: (value: string) => void;
  /**
   * Directly extract `value` and trim it
   */
  'ontrim:ktinput'?: (value: string) => void;
  /**
   * Directly extract `value` and parse it to number
   */
  'on:ktinputnumber'?: (value: number) => void;
};

export type KTAttribute = KTBaseAttribute & KTPrefixedEventHandlers & KTSpecialEventHandlers;

export type KTComponent = (
  props: {
    ref?: KTRef<KTHTMLElement>;
    children?: KTRawContent;
  } & KTAttribute &
    any,
) => KTHTMLElement | Promise<KTHTMLElement> | any;
