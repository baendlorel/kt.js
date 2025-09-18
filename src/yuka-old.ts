const uidSymbol = Symbol('uid');
const textNodeSymbol = Symbol('textNode');

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
