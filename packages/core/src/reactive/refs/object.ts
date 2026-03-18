import { KTReactiveType } from '../core.js';
import { KTRef, registerRefFactory } from './base.js';

export class KTObjectRef<T extends object> extends KTRef<T> {
  constructor(value: T) {
    super(value);
    this.ktType = KTReactiveType.ObjectRef;
  }

  /**
   * Same as assigning a property on the object, but emits change after calling it
   */
  set<K extends keyof T>(key: K, value: T[K]): this {
    this._applyMutation((currentValue) => {
      currentValue[key] = value;
    });
    return this;
  }

  /**
   * Same as deleting a property on the object, but emits change after calling it
   */
  delete(key: keyof T): boolean {
    return this._applyMutation((currentValue) => delete (currentValue as Partial<T>)[key]);
  }

  /**
   * Same as `Object.assign`, but emits change after calling it
   */
  assign(...sources: Array<Partial<T>>): this {
    this._applyMutation((currentValue) => Object.assign(currentValue, ...sources));
    return this;
  }

  /**
   * Same as clearing all own keys on the object, but emits change after calling it
   */
  clear(): this {
    this._applyMutation((currentValue) => {
      const keys = Reflect.ownKeys(currentValue);
      for (let i = 0; i < keys.length; i++) {
        delete (currentValue as Record<PropertyKey, unknown>)[keys[i]];
      }
    });
    return this;
  }
}

const isPlainObject = (value: unknown): value is object => {
  if (!value || typeof value !== 'object') {
    return false;
  }
  if (Array.isArray(value)) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
};

registerRefFactory(isPlainObject, (value, onChange) => {
  const objectRef = new KTObjectRef(value as object);
  if (onChange) {
    objectRef.addOnChange(onChange);
  }
  return objectRef;
});
