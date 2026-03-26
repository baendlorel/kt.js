import type { KTReactiveType } from './base.js';

export type ChangeHandler<T> = (newValue: T, oldValue: T) => void;

export interface KTReactable<T, Type extends KTReactiveType> {
  readonly isKT: true;
  readonly type: Type;
  readonly value: T; // & Reactive objects must at least be readable
}

export interface KTWritable<T> extends KTListenable<T> {
  set value(newValue: T);
  readonly draft: T; // ! Getter only
}

// & KTRef and KTComputed are mappable, but KTSubRef and KTSubComputed are not.
export interface KTMappable<T> {
  map<U>(calculator: (value: T) => U): KTComputed<U>;
}

// todo 给sub系列也加上addonchange，它会实际上给source去添加事件。那么事件要加上触发条件？还是说无所谓直接触发所有事件（这个也许更符合语义）
export interface KTEmittable<T> {
  /**
   * & Here we trust developers using addOnChange properly. `ChangeHandler<any>` is aimed to mute some unnecessary type errors.
   * @internal
   */
  readonly _changeHandlers: Map<string | number, ChangeHandler<any>>;

  /**
   * @internal
   */
  _emit(newValue: T, oldValue: T): this;
}

export interface KTListenable<T> {
  /**
   * Register a callback when the value changes
   * @param callback newValue and oldValue are references. You can use `a.draft` to make in-place mutations since `a.value` will not trigger `onChange` handers.
   * @param key Optional key to identify the callback, allowing multiple listeners on the same ref and individual removal. If not provided, a unique ID will be generated.
   */
  addOnChange(handler: ChangeHandler<T>, key?: string): this;

  /**
   * Remove a handler by its key(if provided when adding).
   */
  removeOnChange(key: string): this;

  /**
   * Force all listeners to run.
   * - Directly calling the handlers without checking for value changes.
   * - Useful for rerendering.
   */
  notify(): this;
}

export type Derived<O, Type extends KTReactiveType.Computed | KTReactiveType.Ref> = Type extends KTReactiveType.Computed
  ? KTSubComputed<O>
  : KTSubRef<O>;

export interface KTDerivable<T, Type extends KTReactiveType.Computed | KTReactiveType.Ref> extends KTReactable<
  T,
  Type
> {
  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   * - `ref.get('a', 'b')` is equivalent to `ref.map((v) => v.a.b)`, but simpler to write.
   * @throws when `a.b.c` throws error(e.g. `a.b` is undefined, then it throws when calling `undefined.c`).
   */
  get<
    K0 extends keyof T,
    K1 extends keyof T[K0],
    K2 extends keyof T[K0][K1],
    K3 extends keyof T[K0][K1][K2],
    K4 extends keyof T[K0][K1][K2][K3],
  >(
    key0: K0,
    key1: K1,
    key2: K2,
    key3: K3,
    key4: K4,
  ): Derived<T[K0][K1][K2][K3][K4], Type>;
  // this['type'] extends KTReactiveType.Computed
  //   ? KTSubComputed<T[K0][K1][K2][K3][K4]>
  //   : KTSubRef<T[K0][K1][K2][K3][K4]>;
  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   * - `ref.get('a', 'b')` is equivalent to `ref.map((v) => v.a.b)`, but simpler to write.
   * @throws when `a.b.c` throws error(e.g. `a.b` is undefined, then it throws when calling `undefined.c`).
   */
  get<K0 extends keyof T, K1 extends keyof T[K0], K2 extends keyof T[K0][K1], K3 extends keyof T[K0][K1][K2]>(
    key0: K0,
    key1: K1,
    key2: K2,
    key3: K3,
  ): Derived<T[K0][K1][K2][K3], Type>;
  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   * - `ref.get('a', 'b')` is equivalent to `ref.map((v) => v.a.b)`, but simpler to write.
   * @throws when `a.b.c` throws error(e.g. `a.b` is undefined, then it throws when calling `undefined.c`).
   */
  get<K0 extends keyof T, K1 extends keyof T[K0], K2 extends keyof T[K0][K1]>(
    key0: K0,
    key1: K1,
    key2: K2,
  ): Derived<T[K0][K1][K2], Type>;
  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   * - `ref.get('a', 'b')` is equivalent to `ref.map((v) => v.a.b)`, but simpler to write.
   * @throws when `a.b.c` throws error(e.g. `a.b` is undefined, then it throws when calling `undefined.c`).
   */
  get<K0 extends keyof T, K1 extends keyof T[K0]>(key0: K0, key1: K1): Derived<T[K0][K1], Type>;
  /**
   * Generate a computed value based on this ref, using keys to access nested properties.
   * - `ref.get('a', 'b')` is equivalent to `ref.map((v) => v.a.b)`, but simpler to write.
   * @throws when `a.b.c` throws error(e.g. `a.b` is undefined, then it throws when calling `undefined.c`).
   */
  get<K0 extends keyof T>(key0: K0): Derived<T[K0], Type>;
}

export interface KTDerived<T, Type extends KTReactiveType.Computed | KTReactiveType.Ref> extends KTReactable<T, Type> {
  readonly source: KTReactable<T, Type>;
  readonly value: T;
}
