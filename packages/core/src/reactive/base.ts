import { $is } from '@ktjs/shared';
import { IdGenerator } from 'src/common';

export const enum KTReactiveType {
  Reative = 1,
  Computed,
  Ref,
  SubRef,
  SubComputed,
}
type ChangeHandler<T> = (newValue: T, oldValue: T) => void;

interface ValueStore {
  /**
   * @internal
   */
  _value: any;
}

interface Emittable<T> {
  /**
   * @internal
   */
  _emit(newValue: T, oldValue: T): void;
}

interface KTReactable<T, Type extends KTReactiveType> extends ValueStore {
  readonly isKT: true;
  readonly type: Type;
  readonly value: T; // & Reactive objects must at least be readable
}

interface KTWritable<T> extends KTListenable<T> {
  set value(newValue: T);
  readonly draft: T; // ! Getter only
}

// & KTRef and KTComputed are mappable, but KTSubRef and KTSubComputed are not.
interface KTMappable<T> extends ValueStore {
  map<U>(calculator: (value: T) => U): KTComputed<U>;
}

// todo 给sub系列也加上addonchange，它会实际上给source去添加事件。那么事件要加上触发条件？还是说无所谓直接触发所有事件（这个也许更符合语义）
interface KTListenable<T> extends ValueStore {
  /**
   * & Here we trust developers using addOnChange properly. `ChangeHandler<any>` is aimed to mute some unnecessary type errors.
   * @internal
   */
  readonly _changeHandlers: Map<string | number, ChangeHandler<any>>;

  /**
   * @internal
   */
  _emit(newValue: T, oldValue: T): this;

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

type Derived<O, Type extends KTReactiveType.Computed | KTReactiveType.Ref> = Type extends KTReactiveType.Computed
  ? KTSubComputed<O>
  : KTSubRef<O>;

interface KTDerivable<T, Type extends KTReactiveType.Computed | KTReactiveType.Ref> {
  readonly type: Type;

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

type KTBaseReactable<T, Type extends KTReactiveType> = KTReactable<T, Type> & KTListenable<T> & KTMappable<T>;
export type KTComputed<T> = KTBaseReactable<T, KTReactiveType.Computed> & KTDerivable<T, KTReactiveType.Computed>;
export type KTRef<T> = KTBaseReactable<T, KTReactiveType.Ref> & KTWritable<T> & KTDerivable<T, KTReactiveType.Ref>;
export type KTSubRef<T> = KTReactable<T, KTReactiveType.SubRef> & KTWritable<T>;
export type KTSubComputed<T> = KTReactable<T, KTReactiveType.SubComputed>;
export type KTReactive<T> = KTComputed<T> | KTSubComputed<T> | KTRef<T> | KTSubRef<T>;

const _ValueStore: ValueStore = {} as any;
const _KTReactable: KTReactable<any, any> = {
  ..._ValueStore,
  isKT: true,
  type: KTReactiveType.Reative,
  get value() {
    return this._value;
  },
  set value(_newValue) {
    // & Only works for KTRef and KTSubRef
  },
};

const _KTListenable: KTListenable<any> = {
  ..._ValueStore,
  _changeHandlers: new Map(),
  _emit(newValue: any, oldValue: any) {
    this._changeHandlers.forEach((handler) => handler(newValue, oldValue));
    return this;
  },
  addOnChange(handler, key) {
    this._changeHandlers.set(key ?? IdGenerator.kid, handler);
    return this;
  },
  removeOnChange(key: string) {
    this._changeHandlers.delete(key);
    return this;
  },
  notify() {
    this._changeHandlers.forEach((handler) => handler(this._value, this._value));
    return this;
  },
};

const _KTWritable: KTWritable<any> = {
  ...(_KTListenable as any),
  get value() {
    return this._value;
  },
  set value(newValue: any) {
    if ($is(newValue, this._value)) {
      return;
    }
    const oldValue = this._value;
    this._value = newValue;
    this._emit(newValue, oldValue);
  },
  get draft() {
    // & Only works for KTRef and KTSubRef
    return this._value;
  },
};

const _KTMappable: KTMappable<any> = {
  ..._ValueStore,
  map(calculator) {
    return computed(calculator(this._value));
  },
};

const _KTDerivableForRef: KTDerivable<any, KTReactiveType.Ref> = {
  type: KTReactiveType.Ref,
  get(...keys: string[]) {
    return subRef(keys);
  },
};

const _KTDerivableForComputed: KTDerivable<any, KTReactiveType.Computed> = {
  type: KTReactiveType.Computed,
  get(...keys: string[]) {
    return subComputed(keys);
  },
};

// # type annotions for testing
const a = {} as KTRef<{ a: { b: number }; c: string }>;
const b = a.get('a', 'b');
b.draft;
b.value;

const aa = {} as KTComputed<{ a: { b: number }; c: string }>;
const bb = aa.get('a', 'b');
bb.value;

const aaa = {} as KTReactive<{ a: { b: number }; c: string }>;
aaa.type;
