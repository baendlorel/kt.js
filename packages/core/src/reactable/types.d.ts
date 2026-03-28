import type { KTReactiveLike } from './reactive.js';

/**
 * Makes `KTReactify<'a' | 'b'> to be KTReactiveLike<'a'> | KTReactiveLike<'b'>`
 */
export type KTReactifySplit<T> = T extends boolean ? KTReactiveLike<boolean> : T extends any ? KTReactiveLike<T> : never;

export type KTReactifyObject<T extends object> = {
  [K in keyof T]: KTReactifySplit<T[K]>;
};

export type KTReactifyProps<T extends object> = {
  [K in keyof T]: KTReactifySplit<Exclude<T[K], undefined>> | T[K];
};

/**
 * Makes `KTReactify<'a' | 'b'>` to be `KTReactiveLike<'a' | 'b'>`
 */
export type KTReactify<T> = [T] extends [KTReactiveLike<infer U>] ? KTReactiveLike<U> : KTReactiveLike<T>;
export type KTMaybeReactive<T> = T | KTReactify<T>;
export type KTMaybeReactiveProps<T extends object> = {
  [K in keyof T]: K extends `on:${string}` ? T[K] : KTMaybeReactive<Exclude<T[K], undefined>> | T[K];
};
