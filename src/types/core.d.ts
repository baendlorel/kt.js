type HFunction = <T extends HTMLTag>(
  tag: T,
  attr?: KAttribute | string,
  content?: (HTMLKEnhancedElement | string)[] | HTMLKEnhancedElement | string
) => HTMLKEnhancedElement<T>;

type HAlias<T extends HTMLTag> = (
  attr?: KAttribute | string,
  content?: (HTMLKEnhancedElement | string)[] | HTMLKEnhancedElement | string
) => HTMLKEnhancedElement<T>;

/**
 * Used to create enhanced HTML elements
 */
//__EXPORT__FLAG__
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
  method?:
    | 'POST'
    | 'GET'
    | 'PUT'
    | 'DELETE'
    | 'PATCH'
    | 'HEAD'
    | 'OPTIONS'
    | 'CONNECT'
    | 'TRACE'
    | (string & {});
}
