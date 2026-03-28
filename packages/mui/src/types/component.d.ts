import type { KTRawContent, KTReactiveLike } from '@ktjs/core';

export interface KTMuiProps {
  class?: string | KTReactiveLike<string>;
  style?: string | Partial<CSSStyleDeclaration> | KTReactiveLike<string> | KTReactiveLike<Partial<CSSStyleDeclaration>>;
  children?: KTRawContent;
}

export type KTMaybeReactive<T> = T | KTReactiveLike<T>;
export type KTMaybeReactiveProps<T> = {
  [K in keyof T]?: K extends 'children' ? T[K] : T[K] extends (...args: any[]) => any ? T[K] : KTMaybeReactive<T[K]>;
};
