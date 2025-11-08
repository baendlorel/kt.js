import { otherstring } from '@/global.js';

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
  min?: string;
  max?: string;
  selected?: boolean;
  checked?: boolean;
  class?: string;
  style?: string | Partial<CSSStyleDeclaration>;
  action?: string;
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE' | otherstring;
}

type KEventHandlersOrAttribute = {
  [EventName in keyof HTMLElementEventMap]?: ((ev: HTMLElementEventMap[EventName]) => void) | string;
};

// todo 如果键名是@开头，则一定注册为事件
type KEventHandlers = {
  [EventName in keyof HTMLElementEventMap]?: (ev: HTMLElementEventMap[EventName]) => void;
};

export type KAttribute = KBaseAttribute & KEventHandlersOrAttribute & KEventHandlers;
