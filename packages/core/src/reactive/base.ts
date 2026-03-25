export const enum KTReactiveType {
  Reative = 1,
  Computed,
  Ref,
  SubRef,
}
type ChangeHandler<T> = (newValue: T, oldValue: T) => void;

interface KTReactiveBase<T> {
  readonly isKT: true;
  readonly type: KTReactiveType;
  get value(): T;
}

// & KTRef and KTComputed are mappable, but KTSubRef and KTSubComputed are not.
interface KTMappable<T> {
  map<U>(calculator: (value: T) => U): KTComputed<U>;
}

// todo 也许我们可以给sub系列也加上addonchange，但是它们会实际上给source去添加事件
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

type KTComputed<T> = KTReactiveBase<T>;
type KTRef<T> = KTReactiveBase<T>;
