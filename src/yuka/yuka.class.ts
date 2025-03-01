import { yukaEvent } from './event-bus';
import { i18n } from './i18n';
import {
  HTMLElementType,
  HTMLTags,
  I18NConfig,
  LanguageTypes,
  Tag2HTMLElementClass,
} from './types';

const uidSymbol = Symbol('uid');
const i18nSymbol = Symbol('i18n');
const textNodeSymbol = Symbol('textNode');

yukaEvent.onI18NUpdated(() => Yuka.reverseMap.forEach((yukaEl) => yukaEl.applyLocale()));

type YukaCreator = (...args: any[]) => Yuka<HTMLElementType>;

export class Yuka<T extends HTMLElementType> {
  /**
   * 所有的element到Yuka的映射
   */
  static readonly reverseMap: Map<HTMLElementType, Yuka<HTMLElementType>> = new Map();

  /**
   * 以函数创建的yuka，可以通过再次执行函数重新创建并挂载在原来的位置
   */
  static readonly recreatableMap: WeakMap<YukaCreator, Node> = new Map();

  static [uidSymbol]: number = 0;

  readonly uid: number;
  readonly el: T;
  readonly [textNodeSymbol]: Node;
  [i18nSymbol]?: I18NConfig;

  constructor(el: T, textNode: Node, i18nConfig?: I18NConfig) {
    if (el instanceof HTMLElement === false) {
      throw new Error('[Yuka:Yuka.constructor] el is not an HTMLElement');
    }
    if (textNode instanceof Node === false || textNode.nodeType !== Node.TEXT_NODE) {
      throw new Error('[Yuka:Yuka.constructor] textNode is not an Node or TEXT_NODE');
    }
    if (textNode.parentElement !== el) {
      throw new Error('[Yuka:Yuka.constructor] textNode must be a child of el');
    }
    if (i18nConfig !== undefined && !i18n.valid(i18nConfig)) {
      throw new Error('[Yuka:Yuka.constructor] i18nConfig not valid');
    }

    this.uid = ++Yuka[uidSymbol];
    this.el = el;
    this[textNodeSymbol] = textNode;
    this[i18nSymbol] = i18nConfig;

    this.applyLocale();
    Yuka.reverseMap.set(this.el, this);
  }

  get isYuka() {
    return true;
  }

  set i18n(i18nConfig: I18NConfig) {
    if (!i18n.valid(i18nConfig)) {
      throw new Error('[Yuka:Yuka.i18n] The given i18nConfig is not a valid config object.');
    }
    this[i18nSymbol] = i18nConfig;
    this.applyLocale();
  }

  get i18n(): I18NConfig | undefined {
    if (this[i18nSymbol] === undefined) {
      return undefined;
    }

    const i18nConfig = {} as I18NConfig;
    const thisArg = this;
    const currentI18NConfig = this[i18nSymbol];
    for (const key of LanguageTypes) {
      Object.defineProperty(i18nConfig, key, {
        get() {
          return currentI18NConfig[key];
        },
        set(newValue) {
          if (typeof newValue !== 'string') {
            throw new Error('[Yuka:Yuka.i18n] The given i18nConfig is not a valid config object.');
          }
          currentI18NConfig[key] = newValue;
          thisArg.applyLocale();
        },
      });
    }
    return i18nConfig;
  }

  //#region 模拟HTML元素的函数和变量

  set value(v: string) {
    if (typeof v !== 'string') {
      throw new Error('[Yuka:Yuka.set value] Value must be a string');
    }
    (this.el as HTMLInputElement).value = v;
  }

  get value() {
    return (this.el as HTMLInputElement).value;
  }

  set checked(v: boolean) {
    (this.el as HTMLInputElement).checked = Boolean(v);
  }

  get checked() {
    return (this.el as HTMLInputElement).checked;
  }

  get files(): FileList | null {
    if (!(this.el instanceof HTMLInputElement)) {
      return null;
    }

    if (this.el.files === null || this.el.files.length === 0) {
      return null;
    }

    return this.el.files;
  }

  get text(): string | null {
    return this[textNodeSymbol].textContent;
  }

  set text(text: string) {
    this[textNodeSymbol].textContent = text;
  }

  set disabled(d: boolean) {
    (this.el as HTMLInputElement).disabled = d;
  }

  get disabled() {
    return (this.el as HTMLInputElement).disabled;
  }

  get style() {
    return this.el.style;
  }

  append(...yukas: (Yuka<HTMLElementType> | YukaCreator)[]): Yuka<T> {
    for (const r of yukas) {
      // 直接是yuka对象
      if (r instanceof Yuka) {
        this.el.appendChild(r.el);
        continue;
      }
      // 用函数创建的yuka对象
      if (typeof r === 'function') {
        const yuka = r();
        if (yuka instanceof Promise) {
          yuka.then((asyncYuka) => {
            if (asyncYuka instanceof Yuka) {
              this.el.appendChild(yuka.el);
              Yuka.recreatableMap.set(r, this.el);
            } else {
              throw new Error(
                '[Yuka:Yuka.append] The given function must return a Yuka/Promise<Yuka> instance'
              );
            }
          });
        }
        if (yuka instanceof Yuka) {
          this.el.appendChild(yuka.el);
          Yuka.recreatableMap.set(r, this.el);
        } else {
          throw new Error(
            '[Yuka:Yuka.append] The given function must return a Yuka/Promise<Yuka> instance'
          );
        }
        continue;
      }
      throw new Error(
        '[Yuka:Yuka.append] The given argument must be a Yuka instance or a function that returns a Yuka/Promise<Yuka> instance'
      );
    }
    return this;
  }

  remove() {
    // 此处的remove已经重写过了，会递归调用并删除reverseMap里的内容
    this.el.remove();
  }

  //#endregion

  on<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ) {
    this.el.addEventListener(type, listener, options);
    return this;
  }

  mount(element: Yuka<HTMLElementType>): void;
  mount(yukaElement: HTMLElement): void;
  mount(element: Yuka<HTMLElementType> | HTMLElement) {
    if (element instanceof Yuka) {
      element.append(this);
    } else {
      element.appendChild(this.el);
    }
  }

  applyLocale() {
    if (!this[i18nSymbol]) {
      return;
    }
    this[textNodeSymbol].textContent = i18n.get(this[i18nSymbol]);
  }

  // duplicate() {
  //   const newYuka = new Yuka(
  //     this.el.cloneNode() as T,
  //     this[textNodeSymbol].cloneNode(),
  //     this[i18nSymbol]
  //   );

  //   for (let i = 0; i < this.el.childNodes.length; i++) {
  //     const node = this.el.childNodes[i];
  //     if (node === newYuka[textNodeSymbol]) {
  //       newYuka.el.appendChild(node);
  //       continue;
  //     }

  //     const yukaNode = Yuka.reverseMap.get(node as HTMLElement);
  //     if (yukaNode) {
  //       yukaNode.duplicate().mount(newYuka);
  //     } else {
  //       newYuka.el.appendChild(node.cloneNode());
  //     }
  //   }

  //   return newYuka;
  // }
}

export type YukaAttribute = {
  [k: string]: any;

  id?: string;
  type?: string;
  for?: string;
  name?: string;
  value?: string;
  label?: string;
  disabled?: string;
  min?: string;
  max?: string;
  selected?: boolean;
  checked?: boolean;
  class?: string | string[];
  style?: string | Partial<CSSStyleDeclaration>;
  action?: string;
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE';

  onabort?: (event: UIEvent) => void;
  onanimationcancel?: (event: AnimationEvent) => void;
  onanimationend?: (event: AnimationEvent) => void;
  onanimationiteration?: (event: AnimationEvent) => void;
  onanimationstart?: (event: AnimationEvent) => void;
  onauxclick?: (event: MouseEvent) => void;
  onbeforeinput?: (event: InputEvent) => void;
  onbeforetoggle?: (event: Event) => void;
  onblur?: (event: FocusEvent) => void;
  oncancel?: (event: Event) => void;
  oncanplay?: (event: Event) => void;
  oncanplaythrough?: (event: Event) => void;
  onchange?: (event: Event) => void;
  onclick?: (event: MouseEvent) => void;
  onclose?: (event: Event) => void;
  oncontextlost?: (event: Event) => void;
  oncontextmenu?: (event: MouseEvent) => void;
  oncontextrestored?: (event: Event) => void;
  oncopy?: (event: ClipboardEvent) => void;
  oncuechange?: (event: Event) => void;
  oncut?: (event: ClipboardEvent) => void;
  ondblclick?: (event: MouseEvent) => void;
  ondrag?: (event: DragEvent) => void;
  ondragend?: (event: DragEvent) => void;
  ondragenter?: (event: DragEvent) => void;
  ondragleave?: (event: DragEvent) => void;
  ondragover?: (event: DragEvent) => void;
  ondragstart?: (event: DragEvent) => void;
  ondrop?: (event: DragEvent) => void;
  ondurationchange?: (event: Event) => void;
  onemptied?: (event: Event) => void;
  onended?: (event: Event) => void;
  onerror?: (event: ErrorEvent) => void;
  onfocus?: (event: FocusEvent) => void;
  onformdata?: (event: FormDataEvent) => void;
  ongotpointercapture?: (event: PointerEvent) => void;
  oninput?: (event: Event) => void;
  oninvalid?: (event: Event) => void;
  onkeydown?: (event: KeyboardEvent) => void;
  onkeypress?: (event: KeyboardEvent) => void;
  onkeyup?: (event: KeyboardEvent) => void;
  onload?: (event: Event) => void;
  onloadeddata?: (event: Event) => void;
  onloadedmetadata?: (event: Event) => void;
  onloadstart?: (event: Event) => void;
  onlostpointercapture?: (event: PointerEvent) => void;
  onmousedown?: (event: MouseEvent) => void;
  onmouseenter?: (event: MouseEvent) => void;
  onmouseleave?: (event: MouseEvent) => void;
  onmousemove?: (event: MouseEvent) => void;
  onmouseout?: (event: MouseEvent) => void;
  onmouseover?: (event: MouseEvent) => void;
  onmouseup?: (event: MouseEvent) => void;
  onpaste?: (event: ClipboardEvent) => void;
  onpause?: (event: Event) => void;
  onplay?: (event: Event) => void;
  onplaying?: (event: Event) => void;
  onpointercancel?: (event: PointerEvent) => void;
  onpointerdown?: (event: PointerEvent) => void;
  onpointerenter?: (event: PointerEvent) => void;
  onpointerleave?: (event: PointerEvent) => void;
  onpointermove?: (event: PointerEvent) => void;
  onpointerout?: (event: PointerEvent) => void;
  onpointerover?: (event: PointerEvent) => void;
  onpointerup?: (event: PointerEvent) => void;
  onprogress?: (event: ProgressEvent) => void;
  onratechange?: (event: Event) => void;
  onreset?: (event: Event) => void;
  onresize?: (event: UIEvent) => void;
  onscroll?: (event: Event) => void;
  onscrollend?: (event: Event) => void;
  onsecuritypolicyviolation?: (event: SecurityPolicyViolationEvent) => void;
  onseeked?: (event: Event) => void;
  onseeking?: (event: Event) => void;
  onselect?: (event: Event) => void;
  onselectionchange?: (event: Event) => void;
  onselectstart?: (event: Event) => void;
  onslotchange?: (event: Event) => void;
  onstalled?: (event: Event) => void;
  onsubmit?: (event: SubmitEvent) => void;
  onsuspend?: (event: Event) => void;
  ontimeupdate?: (event: Event) => void;
  ontoggle?: (event: Event) => void;
  ontouchcancel?: (event: TouchEvent) => void;
  ontouchend?: (event: TouchEvent) => void;
  ontouchmove?: (event: TouchEvent) => void;
  ontouchstart?: (event: TouchEvent) => void;
  ontransitioncancel?: (event: TransitionEvent) => void;
  ontransitionend?: (event: TransitionEvent) => void;
  ontransitionrun?: (event: TransitionEvent) => void;
  ontransitionstart?: (event: TransitionEvent) => void;
  onvolumechange?: (event: Event) => void;
  onwaiting?: (event: Event) => void;
  onwheel?: (event: WheelEvent) => void;
};

const YukaClassMap = (() => {
  const m = new Map<keyof HTMLElementTagNameMap, HTMLElementType>();
  for (const [tagName, HTMLClass] of Object.entries(Tag2HTMLElementClass)) {
    const c = class extends HTMLClass {
      constructor(...args: any[]) {
        super(...args);
      }
    };

    m.set(tagName as keyof HTMLElementTagNameMap, c as any);
  }
})();

function createElement(tagName: keyof HTMLElementTagNameMap, attributes: YukaAttribute) {
  // 创建元素
  const father = Tag2HTMLElementClass[tagName];

  HTMLDialogElement.prototype;

  // 继承它对应的HTML某某Element，以达到使用其变量函数的效果
}
