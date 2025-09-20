// 所有响应式都要基于这个

export class KRef<T> {
  private _value: T;
  constructor(value: T) {
    this._value = value;
  }

  set value(newValue: T) {}
}
