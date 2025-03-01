import { I18NConfig } from './types';

const _i18n = Symbol('i18n');
const _textNode = Symbol('textNode');

type ListenerConfig<T extends keyof HTMLElementEventMap> = {
  callback: (event: HTMLElementEventMap[T]) => void;
  triggerLimit: number;
  alias: string;
  order: number;
};

type ListenerConfigMap<T extends keyof HTMLElementEventMap> = Map<T, ListenerConfig<T>[]>;

declare global {
  interface HTMLElement {
    [_i18n]: I18NConfig | undefined;
    [_textNode]: Text;
    $text: string;
    $listeners: ListenerConfigMap<keyof HTMLElementEventMap>;
    $on: <T extends keyof HTMLElementEventMap>(
      eventName: T,
      listenerConfig: (event: HTMLElementEventMap[T]) => void | ListenerConfig<T>
    ) => void;
  }
}

Object.defineProperties(HTMLElement.prototype, {
  [_i18n]: {
    value: undefined,
    writable: true,
  },
  [_textNode]: {
    value: undefined,
    writable: true,
  },
  $text: {
    get() {
      return this[_textNode].textContent;
    },
    set(value) {
      this[_textNode].textContent = value;
    },
  },
  $listeners: {
    value: new Map(),
    writable: false,
  },
  $on: {
    value: function <T extends keyof HTMLElementEventMap>(
      this: HTMLElement,
      eventName: T,
      listenerConfig: Function | ListenerConfig<T>
    ) {
      if (typeof eventName !== 'string') {
        throw new TypeError('[Yuka:HTMLElement $on] eventName must be a string.');
      }
      if (
        !listenerConfig ||
        (typeof listenerConfig !== 'function' && typeof listenerConfig !== 'object')
      ) {
        throw new TypeError(
          '[Yuka:HTMLElement $on] listenerConfig must be a function or ListenerConfig object.'
        );
      }

      // 此时归一化一下参数
      const config = Object.assign(
        {
          triggerLimit: Infinity,
          alias: '',
          order: 1000,
        },
        typeof listenerConfig === 'function' ? { callback: listenerConfig } : listenerConfig
      ) as ListenerConfig<T>;

      if (typeof config.callback !== 'function') {
        throw new TypeError('[Yuka:HTMLElement $on] listenerConfig.callback must be a function.');
      }

      let listeners = this.$listeners.get(eventName);
      if (listeners === undefined) {
        listeners = [] as ListenerConfig<T>[];
        this.$listeners.set(eventName, listeners);
        this.addEventListener(eventName, (event: Event) => {
          const ls = this.$listeners.get(eventName);
          if (!Array.isArray(ls)) {
            throw new TypeError('[Yuka:HTMLElement $on] listeners must be an array.');
          }
          ls.forEach((listener) => {
            if (listener.triggerLimit > 0) {
              listener.callback.call(this, event);
              listener.triggerLimit--;
            }
          });
        });
      }
      listeners.push(config);
      listeners.sort((a, b) => a.order - b.order);
    },
    writable: false,
  },
});
