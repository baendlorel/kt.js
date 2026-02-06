import { KTReactive } from '@ktjs/core';

export interface KTMuiProps {
  class?: string | KTReactive<string>;
  style?: string | Partial<CSSStyleDeclaration> | KTReactive<string> | KTReactive<Partial<CSSStyleDeclaration>>;
  children?: JSX.Element | JSX.Element[];
}
