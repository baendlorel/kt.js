import { HTMLElementType } from './types';
import { Yuka } from '.';

export class TQueryResult extends Array {
  on<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ) {
    this.forEach((yukaEl) => {
      yukaEl.on(type, listener, options);
    });
  }
}

export type TQuery = {
  (selectors: keyof HTMLElementTagNameMap | string): Yuka<HTMLElementType>[];
};
