const uidSymbol = Symbol('uid');
const textNodeSymbol = Symbol('textNode');

// todo 使用逻辑创建逻辑要全部重新设计
// todo 参数校验不要放在构造函数里，而是工厂函数里

export class Yuka<T extends HTMLElementTypes> {
  static readonly reverseMap: Map<HTMLElementTypes, Yuka<HTMLElementTypes>> = new Map();
  static readonly recreatableMap: WeakMap<YukaCreator, Node> = new Map();

  static [uidSymbol]: number = 0;

  readonly uid: number;
  readonly el: T;
  readonly [textNodeSymbol]: Node;

  constructor(el: T, textNode: Node) {
    if (el instanceof HTMLElement === false) {
      throw new Error('[Yuka:Yuka.constructor] el is not an HTMLElement');
    }
    if (textNode instanceof Node === false || textNode.nodeType !== Node.TEXT_NODE) {
      throw new Error('[Yuka:Yuka.constructor] textNode is not an Node or TEXT_NODE');
    }
    if (textNode.parentElement !== el) {
      throw new Error('[Yuka:Yuka.constructor] textNode must be a child of el');
    }
    this.uid = ++Yuka[uidSymbol];
    this.el = el;
    this[textNodeSymbol] = textNode;

    Yuka.reverseMap.set(this.el, this);
  }

  get isYuka() {
    return true;
  }

  // #region mimic getters and functions of HTMLElement version

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

  append(...yukas: (Yuka<HTMLElementTypes> | YukaCreator)[]): Yuka<T> {
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

  mount(element: Yuka<HTMLElementTypes>): void;
  mount(yukaElement: HTMLElement): void;
  mount(element: Yuka<HTMLElementTypes> | HTMLElement) {
    if (element instanceof Yuka) {
      element.append(this);
    } else {
      element.appendChild(this.el);
    }
  }
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
