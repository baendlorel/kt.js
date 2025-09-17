import { i18n } from './i18n';
import { I18NConfig } from './types';

const _uid = Symbol('uid');
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
    [_uid]: number;
    [_i18n]: I18NConfig | undefined;
    [_textNode]: Text;
    [_listeners]: ListenerConfigMap<keyof HTMLElementEventMap>;

    readonly uid: number;

    readonly isYuka: boolean;

    /**
     * 用于获取或设置元素的文本内容。
     * 修改它实际上修改了其内部的文本节点的内容
     */
    $text: string;

    $i18n: I18NConfig | undefined;

    /**
     * 获取用$on函数绑定的事件Map
     */
    readonly $listeners: ListenerConfigMap<keyof HTMLElementEventMap>;

    /**
     * 设置元素的文本节点，此函数只能执行一次
     * @param textNode
     * @returns
     */
    $setTextNode: (textNode: Text) => void;

    /**
     * 用于向元素追加子元素
     * @param children 可以是元素、节点、返回元素的函数、返回节点的函数
     * @returns
     */
    $append: (...children: (HTMLElement | Node | (() => HTMLElement) | (() => Node))[]) => this;

    /**
     * 用于向元素追加异步子元素
     * @param children 除了直接是元素外，还可以是Promise化的元素、节点、返回元素的函数、返回节点的函数
     * @returns
     */
    $asyncAppend: (
      ...children: (
        | HTMLElement
        | Node
        | (() => HTMLElement)
        | (() => Node)
        | Promise<HTMLElement>
        | Promise<Node>
        | (() => Promise<HTMLElement>)
        | (() => Promise<Node>)
      )[]
    ) => this;

    /**
     * 绑定事件
     * @param eventName 事件名称
     * @param listenerConfig 事件回调函数或ListenerConfig对象
     * @returns
     */
    $on: <T extends keyof HTMLElementEventMap>(
      eventName: T,
      listenerConfig: (event: HTMLElementEventMap[T]) => void | ListenerConfig<T>
    ) => this;

    /**
     * 应用i18n配置，将会根据现在所选的语言修改元素的文本内容
     * @returns
     */
    $applyLocale: () => this;
  }
}

let uid = 0;
Object.defineProperties(HTMLElement.prototype, {
  [_uid]: {
    value: undefined,
    writable: true,
  },
  [_i18n]: {
    value: undefined,
    writable: true,
  },
  [_textNode]: {
    value: undefined,
    writable: true,
  },
  [_listeners]: {
    value: new Map(),
  },
  uid: {
    get(this: HTMLElement) {
      if (this[_uid] === undefined) {
        this[_uid] = uid++;
      }
      return this[_uid];
    },
  },
  isYuka: {
    value: true,
  },
  $text: {
    get(this: HTMLElement) {
      return this[_textNode].textContent;
    },
    set(this: HTMLElement, value) {
      this[_textNode].textContent = value;
    },
  },
  $i18n: {
    get(this: HTMLElement) {
      return this[_i18n];
    },
    set(this: HTMLElement, value) {
      if (!i18n.valid(value)) {
        throw new Error('[Yuka:HTMLElement $i18n] i18n config is invalid.');
      }
      this[_i18n] = value;
      this.$applyLocale();
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
  $setTextNode: {
    value: function (this: HTMLElement, textNode: Text) {
      if (this[_textNode] !== undefined) {
        throw new Error('[Yuka:HTMLElement $setTextNode] textNode can only be set once.');
      }
      this[_textNode] = textNode;
    },
  },
  $append: {
    value: function (
      this: HTMLElement,
      ...children: (HTMLElement | Node | (() => HTMLElement) | (() => Node))[]
    ) {
      for (let i = 0; i < children.length; i++) {
        let c = children[i];

        if (typeof c === 'function') {
          c = c();
        }

        if (c instanceof Promise) {
          throw new TypeError(
            '[Yuka:HTMLElement $append] async objects are not supported by $append, use $asyncAppend instead.'
          );
        }

        // 这里只需要判定node就行了，因为HTMLElement继承自Node
        if (!(c instanceof Node)) {
          throw new TypeError(
            '[Yuka:HTMLElement $append] child must be an HTMLElement, Node or a function that returns them.'
          );
        }
        this.appendChild(c);
      }
      return this;
    },
  },
  $asyncAppend: {
    value: async function (
      this: HTMLElement,
      ...children: (
        | HTMLElement
        | Node
        | (() => HTMLElement)
        | (() => Node)
        | Promise<HTMLElement>
        | Promise<Node>
        | (() => Promise<HTMLElement>)
        | (() => Promise<Node>)
      )[]
    ) {
      for (let i = 0; i < children.length; i++) {
        let c = children[i];
        if (typeof c === 'function') {
          c = c();
        }

        if (c instanceof Promise) {
          c = await c;
        }

        // 这里只需要判定node就行了，因为HTMLElement继承自Node
        if (!(c instanceof Node)) {
          throw new TypeError(
            '[Yuka:HTMLElement $asyncAppend] child must be an HTMLElement, Node, Promise<HTMLElement>, Promise<Node> or a function that returns them.'
          );
        }

        this.appendChild(c);
      }
      return this;
    },
  },
  $on: {
    value: function <T extends keyof HTMLElementEventMap>(
      this: HTMLElement,
      eventName: T,
      listenerConfig: Function | Partial<ListenerConfig<T>>
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
      return this;
    },
  },
  $applyLocale: {
    value: function (this: HTMLElement) {
      if (!this[_i18n]) {
        console.warn('[Yuka:HTMLElement $applyLocale] i18n config is not set.');
        return this;
      }
      this[_textNode].textContent = i18n.get(this[_i18n]);
      return this;
    },
  },
});
