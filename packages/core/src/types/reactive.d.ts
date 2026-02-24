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
  notify(changeKeys?: ReactiveChangeKey[]): void;

  /**
   * Mutate current value in-place and notify listeners once.
   *
   * @example
   * const items = ref<number[]>([1, 2]);
   * items.mutate((list) => list.push(3));
   */
  mutate<R = void>(mutator: (currentValue: T) => R, changeKeys?: ReactiveChangeKey[]): R;

  /**
   * Register a callback when the value changes
   * - Value setter will check `Object.is(newValue, oldValue)`.
   * @param callback (newValue, oldValue) => xxx
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
