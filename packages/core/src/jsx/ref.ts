type ChangeHandler<T> = (newValue: T, oldValue: T) => void;

export interface KTRef<T> {
  /**
   * If new value and old value are both nodes, the old one will be replaced in the DOM
   */
  value: T;

  isKT: true;

  addOnChange: (callback: ChangeHandler<T>) => void;

  removeOnChange: (callback: ChangeHandler<T>) => void;
}

/**
 * Reference to the created HTML element.
 * - can alse be used to store normal values, but it is not reactive.
 * @param value mostly an HTMLElement
 */
export function ref<T = HTMLElement>(value?: T): KTRef<T> {
  let _value: T = value as any;
  let _onChanges: Array<ChangeHandler<T>> = [];

  return {
    isKT: true,
    get value() {
      return _value;
    },
    set value(newValue: T) {
      if (newValue === _value) {
        return;
      }

      // replace the old node with the new one in the DOM if both are nodes
      if (_value instanceof Node && newValue instanceof Node) {
        if (newValue.contains(_value)) {
          (_value as unknown as ChildNode).remove();
        }
        (_value as unknown as ChildNode).replaceWith(newValue);
      }
      const oldValue = _value;
      _value = newValue;
      for (let i = 0; i < _onChanges.length; i++) {
        _onChanges[i](newValue, oldValue);
      }
    },
    addOnChange: (callback: ChangeHandler<T>) => _onChanges.push(callback),
    removeOnChange: (callback: ChangeHandler<T>): boolean => {
      for (let i = _onChanges.length - 1; i >= 0; i--) {
        if (_onChanges[i] === callback) {
          _onChanges.splice(i, 1);
          return true;
        }
      }
      return false;
    },
  };
}
