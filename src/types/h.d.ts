type HFunction = <T extends HTMLTag>(
  tag: T,
  attr?: KAttribute | string,
  content?: (HTMLKElement | string)[] | HTMLKElement | string
) => HTMLKElement<T>;

type HAlias<T extends HTMLTag> = (
  attr?: KAttribute | string,
  content?: (HTMLKElement | string)[] | HTMLKElement | string
) => HTMLKElement<T>;

type RawContent = (HTMLKElement | string)[] | HTMLKElement | string;
type RawAttribute = KAttribute | string;

/**
 * Used to create enhanced HTML elements
 */
//__EXPORT__FLAG__
interface KAttribute {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    | otherstring;
}
