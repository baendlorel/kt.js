export const enum KTType {
  Reative = 1,
  Computed,
  Ref,
  SubRef,
}
type ChangeHandler<T> = (newValue: T, oldValue: T) => void;

interface KTReactable<T> {
  readonly isKT: true;

  readonly type: KTType;

  readonly value: T; // & Reactive objects must at least be readable
}

interface KTWritable<T> {
  set value(newValue: T);
  readonly draft: T; // ! Getter only
}

// & KTRef and KTComputed are mappable, but KTSubRef and KTSubComputed are not.
interface KTMappable<T> {
  map<U>(calculator: (value: T) => U): KTComputed<U>;
}

// todo 给sub系列也加上addonchange，它会实际上给source去添加事件。那么事件要加上触发条件？还是说无所谓直接触发所有事件（这个也许更符合语义）
interface KTListenable<T> {
  // /**
  //  * & Here we trust developers using addOnChange properly. `ChangeHandler<any>` is aimed to mute some unnecessary type errors.
  //  * @internal
  //  */
  // readonly _changeHandlers: Map<string | number, ChangeHandler<any>>;

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

type Derived<O, Type extends KTType.Computed | KTType.Ref> = Type extends KTType.Computed
  ? KTSubComputed<O>
  : KTSubRef<O>;

interface KTDerivable<T, Type extends KTType.Computed | KTType.Ref> {
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

type KTComputed<T> = KTReactable<T> & KTListenable<T> & KTMappable<T> & KTDerivable<T, KTType.Computed>;
type KTRef<T> = KTReactable<T> & KTListenable<T> & KTMappable<T> & KTWritable<T> & KTDerivable<T, KTType.Ref>;
type KTSubRef<T> = KTReactable<T> & KTWritable<T>;
type KTSubComputed<T> = KTReactable<T>;

type KTReactive<T> = KTComputed<T> | KTSubComputed<T> | KTRef<T> | KTSubRef<T>;

const a = {} as KTRef<{ a: { b: number }; c: string }>;
const b = a.get('a', 'b');
b.draft;
b.value;

const aa = {} as KTComputed<{ a: { b: number }; c: string }>;
const bb = aa.get('a', 'b');
bb.value;
