import { i18n } from '.';
import { I18NConfig } from './types';

const _i18n = Symbol('i18n');
const _textNode = Symbol('textNode');
const _listeners = Symbol('listeners');

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
    [_listeners]: ListenerConfigMap<keyof HTMLElementEventMap>;

    /**
     * 用于获取或设置元素的文本内容。
     * 修改它实际上修改了其内部的文本节点的内容
     */
    $text: string;

    /**
     * 获取用$on函数绑定的事件Map
     */
    readonly $listeners: ListenerConfigMap<keyof HTMLElementEventMap>;

    /**
     * 用于向元素追加子元素
     * @param child 可以是元素、节点、返回元素的函数、返回节点的函数
     * @returns
     */
    $append: (...child: (HTMLElement | Node | (() => HTMLElement) | (() => Node))[]) => HTMLElement;

    /**
     * 用于向元素追加异步子元素
     * @param child 除了直接是元素外，还可以是Promise化的元素、节点、返回元素的函数、返回节点的函数
     * @returns
     */
    $asyncAppend: (
      ...child: (
        | HTMLElement
        | Node
        | (() => HTMLElement)
        | (() => Node)
        | Promise<HTMLElement>
        | Promise<Node>
        | (() => Promise<HTMLElement>)
        | (() => Promise<Node>)
      )[]
    ) => HTMLElement;

    /**
     * 绑定事件
     * @param eventName 事件名称
     * @param listenerConfig 事件回调函数或ListenerConfig对象
     * @returns
     */
    $on: <T extends keyof HTMLElementEventMap>(
      eventName: T,
      listenerConfig: (event: HTMLElementEventMap[T]) => void | ListenerConfig<T>
    ) => void;

    /**
     * 应用i18n配置，将会根据现在所选的语言修改元素的文本内容
     * @returns
     */
    $applyLocale: () => void;
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
    get(this: HTMLElement) {
      const m = new Map() as ListenerConfigMap<keyof HTMLElementEventMap>;
      this[_listeners].forEach((v, k) => {
        m.set(k, v.slice());
      });
      return m;
    },
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
      ) as ListenerConfig<keyof HTMLElementEventMap>;

      if (typeof config.callback !== 'function') {
        throw new TypeError('[Yuka:HTMLElement $on] listenerConfig.callback must be a function.');
      }

      let listeners = this[_listeners].get(eventName);
      if (listeners === undefined) {
        listeners = [] as ListenerConfig<keyof HTMLElementEventMap>[];
        this[_listeners].set(eventName, listeners);
        this.addEventListener(eventName, (event: Event) => {
          const ls = this[_listeners].get(eventName);
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
  $applyLocale: {
    value: function (this: HTMLElement) {
      if (!this[_i18n]) {
        return;
      }
      this[_textNode].textContent = i18n.get(this[_i18n]);
    },
    writable: false,
  },
});
