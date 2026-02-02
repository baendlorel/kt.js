import { $entries } from '@ktjs/shared';

type RefChangeHandler<T> = (newValue: T, oldValue: T) => void;

export class KTRef<T> {
  /**
   * Indicates that this is a KTRef instance
   */
  isKT = true;

  /**
   * @internal
   */
  private _value: T;

  /**
   * @internal
   */
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

export const isKTRef = <T = any>(obj: any): obj is KTRef<T> => {
  return typeof obj === 'object' && obj !== null && obj.isKT === true;
};

/**
 * Reference to the created HTML element.
 * - **Only** respond to `ref.value` changes, not reactive to internal changes of the element.
 * - can alse be used to store normal values, but it is not reactive.
 * @param value mostly an HTMLElement
 */
export function ref<T = JSX.Element>(value?: T, onChange?: RefChangeHandler<T>): KTRef<T> {
  return new KTRef<T>(value as any, onChange ? [onChange] : []);
}

export type KTSurfaceRef<T extends Object> = {
  [K in keyof T]: KTRef<T[K]>;
} & {
  /**
   * Get the dereferenced object like the original one
   */
  kcollect: () => T;
};

function kcollect<T extends Object>(this: KTSurfaceRef<T>): T {
  const newObj: any = {};
  const entries = $entries(this);
  for (let i = 0; i < entries.length; i++) {
    const key = entries[i][0];
    if (key === 'kcollect') {
      continue;
    }
    newObj[key] = entries[i][1].value;
  }
  return newObj;
}

/**
 * A ref that respond to `obj.depth1prop`
 * - `obj.a.b` is not reactive
 */
export const surfaceRef = <T extends Object>(obj: T): KTSurfaceRef<T> => {
  const entries = $entries(obj);
  const newObj = { kcollect } as KTSurfaceRef<T>;
  for (let i = 0; i < entries.length; i++) {
    (newObj[entries[i][0]] as KTRef<any>) = ref(entries[i][1]);
  }
  return newObj;
};
