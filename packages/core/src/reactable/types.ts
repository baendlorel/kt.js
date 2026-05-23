import type { KTReactive } from './reactive.js';

export type ChangeListener<T> = (newValue: T, oldValue: T) => void;
export interface KTListenOptions {
  owner?: Node;
}

export type Dereactive<T> = T extends KTReactive<infer U> ? U : T;

/**
 * Makes `KTReactify<'a' | 'b'> to be KTReactive<'a'> | KTReactive<'b'>`
 */
export type KTReactifySplit<T> = T extends boolean ? KTReactive<boolean> : T extends any ? KTReactive<T> : never;

export type KTReactifyObject<T extends object> = {
  [K in keyof T]: KTReactifySplit<T[K]>;
};

export type KTReactifyProps<T extends object> = {
  [K in keyof T]: KTReactifySplit<Exclude<T[K], undefined>> | T[K];
};

/**
 * Makes `KTReactify<'a' | 'b'>` to be `KTReactive<'a' | 'b'>`
 */
export type KTReactify<T> = [T] extends [KTReactive<infer U>] ? KTReactive<U> : KTReactive<T>;
export type KTMaybeReactive<T> = T | KTReactify<T>;
export type KTMaybeReactiveProps<T extends object> = {
  [K in keyof T]: K extends `on:${string}` ? T[K] : KTMaybeReactive<Exclude<T[K], undefined>> | T[K];
};
