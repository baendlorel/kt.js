// todo 这里如果带有import会导致无法正确生成声明文件

type HTMLElementTag = keyof HTMLElementTagNameMap;

interface KEnhanced {
  /**
   * Unique id of the KT.js enhanced html element;
   */
  kid: number;

  isKT: true;

  kon: <El extends HTMLElement, K extends keyof HTMLElementEventMap>(
    this: El,
    type: K,
    listener: KListener<HTMLElement, K>,
    options?: KOnOptions
  ) => KListener<El, K>;

  koff: <El extends HTMLElement, K extends keyof HTMLElementEventMap>(
    this: El,
    type: K,
    listener: KListener<HTMLElement, K>,
    options?: KOnOptions
  ) => void;

  kmount: <El extends HTMLKEnhancedElement>(this: El, element: HTMLElement) => El;
}

/**
 * Get the tags that makes HTMLElementTagNameMap[tag] = HTMLElement
 */
type NonSpecialTags = {
  [K in keyof HTMLElementTagNameMap]: HTMLElement extends HTMLElementTagNameMap[K] ? K : never;
}[keyof HTMLElementTagNameMap];

type HTMLKEnhancedElement<T extends HTMLElementTag = NonSpecialTags> =
  (HTMLElement extends HTMLElementTagNameMap[T] ? HTMLElement : HTMLElementTagNameMap[T]) &
    KEnhanced;
