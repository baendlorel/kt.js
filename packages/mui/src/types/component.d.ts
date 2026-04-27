import type { KTRawContent, KTReactive } from '@ktjs/core';

export interface KTMuiProps {
  class?: string | KTReactive<string>;
  style?: string | Partial<CSSStyleDeclaration> | KTReactive<string> | KTReactive<Partial<CSSStyleDeclaration>>;
  children?: KTRawContent;
}

export type KTMaybeReactive<T> = T | KTReactive<T>;
export type KTMaybeReactiveProps<T> = {
  [K in keyof T]?: K extends 'children' ? T[K] : T[K] extends (...args: any[]) => any ? T[K] : KTMaybeReactive<T[K]>;
};
