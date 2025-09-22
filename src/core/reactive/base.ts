export class KBaseRef<T extends any> {
  protected _value: T;

  constructor(value: T) {
    this._value = value;
  }

  set value(newValue: T) {
    this._value = newValue;
  }

  get value() {
    return this._value;
  }
}
