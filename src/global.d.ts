import { Yuka } from './yuka-old.ts';

declare global {
  const __IS_DEV__: boolean;

  type YukaCreator = (...args: any[]) => Yuka<HTMLElementTypes>;

  interface YukaAttribute {
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

    // onabort?: (event: UIEvent) => void;
    // onanimationcancel?: (event: AnimationEvent) => void;
    // onanimationend?: (event: AnimationEvent) => void;
    // onanimationiteration?: (event: AnimationEvent) => void;
    // onanimationstart?: (event: AnimationEvent) => void;
    // onauxclick?: (event: MouseEvent) => void;
    // onbeforeinput?: (event: InputEvent) => void;
    // onbeforetoggle?: (event: Event) => void;
    // onblur?: (event: FocusEvent) => void;
    // oncancel?: (event: Event) => void;
    // oncanplay?: (event: Event) => void;
    // oncanplaythrough?: (event: Event) => void;
    // onchange?: (event: Event) => void;
    // onclick?: (event: MouseEvent) => void;
    // onclose?: (event: Event) => void;
    // oncontextlost?: (event: Event) => void;
    // oncontextmenu?: (event: MouseEvent) => void;
    // oncontextrestored?: (event: Event) => void;
    // oncopy?: (event: ClipboardEvent) => void;
    // oncuechange?: (event: Event) => void;
    // oncut?: (event: ClipboardEvent) => void;
    // ondblclick?: (event: MouseEvent) => void;
    // ondrag?: (event: DragEvent) => void;
    // ondragend?: (event: DragEvent) => void;
    // ondragenter?: (event: DragEvent) => void;
    // ondragleave?: (event: DragEvent) => void;
    // ondragover?: (event: DragEvent) => void;
    // ondragstart?: (event: DragEvent) => void;
    // ondrop?: (event: DragEvent) => void;
    // ondurationchange?: (event: Event) => void;
    // onemptied?: (event: Event) => void;
    // onended?: (event: Event) => void;
    // onerror?: (event: ErrorEvent) => void;
    // onfocus?: (event: FocusEvent) => void;
    // onformdata?: (event: FormDataEvent) => void;
    // ongotpointercapture?: (event: PointerEvent) => void;
    // oninput?: (event: Event) => void;
    // oninvalid?: (event: Event) => void;
    // onkeydown?: (event: KeyboardEvent) => void;
    // onkeypress?: (event: KeyboardEvent) => void;
    // onkeyup?: (event: KeyboardEvent) => void;
    // onload?: (event: Event) => void;
    // onloadeddata?: (event: Event) => void;
    // onloadedmetadata?: (event: Event) => void;
    // onloadstart?: (event: Event) => void;
    // onlostpointercapture?: (event: PointerEvent) => void;
    // onmousedown?: (event: MouseEvent) => void;
    // onmouseenter?: (event: MouseEvent) => void;
    // onmouseleave?: (event: MouseEvent) => void;
    // onmousemove?: (event: MouseEvent) => void;
    // onmouseout?: (event: MouseEvent) => void;
    // onmouseover?: (event: MouseEvent) => void;
    // onmouseup?: (event: MouseEvent) => void;
    // onpaste?: (event: ClipboardEvent) => void;
    // onpause?: (event: Event) => void;
    // onplay?: (event: Event) => void;
    // onplaying?: (event: Event) => void;
    // onpointercancel?: (event: PointerEvent) => void;
    // onpointerdown?: (event: PointerEvent) => void;
    // onpointerenter?: (event: PointerEvent) => void;
    // onpointerleave?: (event: PointerEvent) => void;
    // onpointermove?: (event: PointerEvent) => void;
    // onpointerout?: (event: PointerEvent) => void;
    // onpointerover?: (event: PointerEvent) => void;
    // onpointerup?: (event: PointerEvent) => void;
    // onprogress?: (event: ProgressEvent) => void;
    // onratechange?: (event: Event) => void;
    // onreset?: (event: Event) => void;
    // onresize?: (event: UIEvent) => void;
    // onscroll?: (event: Event) => void;
    // onscrollend?: (event: Event) => void;
    // onsecuritypolicyviolation?: (event: SecurityPolicyViolationEvent) => void;
    // onseeked?: (event: Event) => void;
    // onseeking?: (event: Event) => void;
    // onselect?: (event: Event) => void;
    // onselectionchange?: (event: Event) => void;
    // onselectstart?: (event: Event) => void;
    // onslotchange?: (event: Event) => void;
    // onstalled?: (event: Event) => void;
    // onsubmit?: (event: SubmitEvent) => void;
    // onsuspend?: (event: Event) => void;
    // ontimeupdate?: (event: Event) => void;
    // ontoggle?: (event: Event) => void;
    // ontouchcancel?: (event: TouchEvent) => void;
    // ontouchend?: (event: TouchEvent) => void;
    // ontouchmove?: (event: TouchEvent) => void;
    // ontouchstart?: (event: TouchEvent) => void;
    // ontransitioncancel?: (event: TransitionEvent) => void;
    // ontransitionend?: (event: TransitionEvent) => void;
    // ontransitionrun?: (event: TransitionEvent) => void;
    // ontransitionstart?: (event: TransitionEvent) => void;
    // onvolumechange?: (event: Event) => void;
    // onwaiting?: (event: Event) => void;
    // onwheel?: (event: WheelEvent) => void;
  }

  interface YOnOptions extends AddEventListenerOptions {
    /**
     * This option's priority is higher than `once`.
     * - when this is `1`, go with `once: true`.
     */
    triggerLimit?: number;
  }

  type YukaListener<E extends HTMLElement, K extends keyof HTMLElementEventMap> = (
    this: E,
    ev: HTMLElementEventMap[K]
  ) => unknown;
}
