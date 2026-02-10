import type { KTReactiveType } from '../reactive/core.ts';

export type ReactiveChangeHandler<T> = (newValue: T, oldValue: T) => void;

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
  notify(): void;

  /**
   * Mutate current value in-place and notify listeners once.
   *
   * @example
   * const items = ref<number[]>([1, 2]);
   * items.mutate((list) => list.push(3));
   */
  mutate<R = void>(mutator: (currentValue: T) => R): R;
  /**
   * Register a callback when the value changes
   * @param callback (newValue, oldValue) => xxx
   */
  addOnChange(callback: ReactiveChangeHandler<T>): void;
  removeOnChange(callback: ReactiveChangeHandler<T>): void;
}
