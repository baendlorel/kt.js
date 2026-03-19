import type { KTComputed } from '../reactive/computed.js';
import type { KTReactiveType } from '../reactive/core.ts';

export type ChangeHandler<T> = (newValue: T, oldValue: T) => void;
export type Key = string | number;

export interface KTReactive<T> {
  /**
   * Indicates that this is a KTRef instance
   */
  isKT: boolean;

  ktType: KTReactiveType;

  /**
   * If new value and old value are both nodes, the old one will be replaced in the DOM
   */
  get value();
  set value(newValue: T);

  /**
   * Force all listeners to run even when reference has not changed.
   * Useful for in-place array/object mutations.
   */
  notify(oldValue?: T, newValue?: T, handlerKeys?: Key[]): void;

  /**
   * Ccreate a computed value based on this `KTReactive` instance.
   * @param calculator A function that calculates the computed value based on the current value of this `KTReactive` instance.
   * @param dependencies Optional additional dependencies that the computed value relies on.
   * @returns A `KTComputed` instance
   */
  toComputed<R>(calculator: (currentValue: T) => R, dependencies?: KTReactive<any>[]): KTComputed<R>;

  /**
   * Register a callback when the value changes
   * - Value setter will check `Object.is(newValue, oldValue)`.
   * @param callback (newValue, oldValue) => xxx
   * @param key Optional key to identify this change handler. If not provided, a numeric id will be generated and returned.
   */
  addOnChange<K extends Key | undefined>(callback: ChangeHandler<T>, key?: K): this;
  removeOnChange(key: Key): ChangeHandler<any> | undefined;
}

// & Shockingly, If T is boolean, KTReactify<T> becomes KTReactive<true> | KTReactive<false>. It causes @ktjs/mui that disabledRefs not assignable.
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
