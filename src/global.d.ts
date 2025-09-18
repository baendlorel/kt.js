export {};

declare global {
  const __IS_DEV__: boolean;

  interface KAttribute {
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
  }

  interface KOnOptions extends AddEventListenerOptions {
    /**
     * This option's priority is higher than `once`.
     * - when this is `1`, go with `once: true`.
     */
    triggerLimit?: number;
  }

  type KListener<E extends HTMLElement, K extends keyof HTMLElementEventMap> = (
    this: E,
    ev: HTMLElementEventMap[K]
  ) => unknown;
}
