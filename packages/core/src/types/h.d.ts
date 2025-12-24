import type { HTMLTag, otherstring } from './global.d.ts';

export type KTH = <T extends HTMLTag>(tag: T, attr?: KTRawAttr, content?: KTRawContent) => HTMLElementTagNameMap[T];
export type KTRawContent = (HTMLElement | string | undefined | number)[] | HTMLElement | string | number;
export type KTRawAttr = KTAttribute | string;
export type KTRawContents = (HTMLElement | string | undefined)[];

/**
 * Event handler type for DOM events
 */
export type EventHandler<T extends Event = Event> = (this: HTMLElement, ev: T) => any;

/**
 * Used to create enhanced HTML elements
 */
interface KTBaseAttribute {
  [k: string]: any;

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

type KTEventHandlersOrAttribute = {
  [EventName in keyof HTMLElementEventMap]?: ((ev: HTMLElementEventMap[EventName]) => void) | string;
};

type KTPrefixedEventHandlers = {
  [EventName in keyof HTMLElementEventMap as `on:${EventName}`]?: (ev: HTMLElementEventMap[EventName]) => void;
};

export type KTAttribute = KTBaseAttribute & KTEventHandlersOrAttribute & KTPrefixedEventHandlers;
