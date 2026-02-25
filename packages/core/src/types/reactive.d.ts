import type { KTComputed } from '../reactive/computed.js';
import type { KTReactiveType } from '../reactive/core.ts';

export type ReactiveChangeHandler<T> = (newValue: T, oldValue: T) => void;
export type ReactiveChangeKey = string | number;

export class KTReactive<T> {
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
   * Force all listeners to run even when reference identity has not changed.
   * Useful for in-place array/object mutations.
   */
  notify(handlerKeys?: ReactiveChangeKey[]): void;

  /**
   * Mutate current value in-place and notify listeners once.
   *
   * @example
   * const items = ref<number[]>([1, 2]);
   * items.mutate((list) => list.push(3));
   */
  mutate<R = void>(mutator: (currentValue: T) => R, handlerKeys?: ReactiveChangeKey[]): R;

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
  addOnChange<K extends ReactiveChangeKey | undefined>(
    callback: ReactiveChangeHandler<T>,
    key?: K,
  ): K extends undefined ? number : K;
  removeOnChange(key: ReactiveChangeKey): ReactiveChangeHandler<T> | undefined;
}

// & Shockingly, If T is boolean, KTReactify<T> becomes KTReactive<true> | KTReactive<false>. It causes @ktjs/mui that disabledRefs not assignable.
export type KTReactify<T> = T extends boolean ? KTReactive<boolean> : T extends any ? KTReactive<T> : never;

export type KTReactifyObject<T extends object> = {
  [K in keyof T]: KTReactify<T[K]>;
};

export type KTReactifyProps<T extends object> = {
  [K in keyof T]: KTReactify<Exclude<T[K], undefined>> | T[K];
};
