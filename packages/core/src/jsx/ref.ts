type RefChangeHandler<T> = (newValue: T, oldValue: T) => void;

export class KTRef<T> {
  /**
   * Indicates that this is a KTRef instance
   */
  isKT = true;

  private _value: T;
  private _onChanges: Array<RefChangeHandler<T>>;

  constructor(_value: T, _onChanges: Array<RefChangeHandler<T>>) {
    this._value = _value;
    this._onChanges = _onChanges;
  }

  /**
   * If new value and old value are both nodes, the old one will be replaced in the DOM
   */
  get value() {
    return this._value;
  }

  set value(newValue: T) {
    if (newValue === this._value) {
      return;
    }

    // replace the old node with the new one in the DOM if both are nodes
    if (this._value instanceof Node && newValue instanceof Node) {
      if (newValue.contains(this._value)) {
        (this._value as unknown as ChildNode).remove();
      }
      (this._value as unknown as ChildNode).replaceWith(newValue);
    }
    const oldValue = this._value;
    this._value = newValue;
    for (let i = 0; i < this._onChanges.length; i++) {
      this._onChanges[i](newValue, oldValue);
    }
  }

  addOnChange(callback: RefChangeHandler<T>) {
    this._onChanges.push(callback);
  }

  removeOnChange(callback: RefChangeHandler<T>) {
    for (let i = this._onChanges.length - 1; i >= 0; i--) {
      if (this._onChanges[i] === callback) {
        this._onChanges.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}

/**
 * Reference to the created HTML element.
 * - can alse be used to store normal values, but it is not reactive.
 * @param value mostly an HTMLElement
 */
export function ref<T = JSX.Element>(value?: T, onChange?: RefChangeHandler<T>): KTRef<T> {
  return new KTRef<T>(value as any, onChange ? [onChange] : []);
}
