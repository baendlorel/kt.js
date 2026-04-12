import type { KTReactiveType } from './reactive.js';

export type ChangeHandler<T> = (newValue: T, oldValue: T) => void;

export abstract class KTReactiveLike<T> {
  /**
   * An identifier for the reactive instance, used for debugging and generating handler keys.
   */
  abstract readonly kid: number;

  /**
   * The type of the reactive instance, used for type guards.
   */
  abstract readonly ktype: KTReactiveType;

  abstract get value(): T;

  abstract addOnChange(handler: ChangeHandler<T>, key?: any): this;
  abstract removeOnChange(key: any): this;

  abstract dispose(): void;
}

/**
 * Makes `KTReactify<'a' | 'b'> to be KTReactiveLike<'a'> | KTReactiveLike<'b'>`
 */
export type KTReactifySplit<T> = T extends boolean
  ? KTReactiveLike<boolean>
  : T extends any
    ? KTReactiveLike<T>
    : never;

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
