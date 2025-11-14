import type { HTMLTag, otherstring } from '@ktjs/shared';

export type HFunction = <T extends HTMLTag>(tag: T, attr?: RawAttr, content?: RawContent) => HTMLElementTagNameMap[T];
export type RawContent = (HTMLElement | string | undefined)[] | HTMLElement | string;
export type RawAttr = KAttribute | string;

/**
 * Event handler type for DOM events
 */
export type EventHandler<T extends Event = Event> = (this: HTMLElement, ev: T) => any;

/**
 * Used to create enhanced HTML elements
 */
interface KBaseAttribute {
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
  disabled?: string;

  min?: string | number;
  max?: string | number;
  step?: string | number;

  selected?: boolean;
  checked?: boolean;

  action?: string;
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE' | otherstring;
}

type KEventHandlersOrAttribute = {
  [EventName in keyof HTMLElementEventMap]?: ((ev: HTMLElementEventMap[EventName]) => void) | string;
};

/**
 * Event handlers with @ prefix (e.g., @click, @input)
 * When key starts with @, it's always registered as an event handler
 */
type KPrefixedEventHandlers = {
  [EventName in keyof HTMLElementEventMap as `@${EventName}`]?: (ev: HTMLElementEventMap[EventName]) => void;
};

export type KAttribute = KBaseAttribute & KEventHandlersOrAttribute & KPrefixedEventHandlers;
