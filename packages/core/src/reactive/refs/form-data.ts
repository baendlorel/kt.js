import { KTReactiveType } from '../core.js';
import { KTRef, registerRefFactory } from './base.js';

export class KTFormDataRef extends KTRef<FormData> {
  constructor(value: FormData) {
    super(value);
    this.ktType = KTReactiveType.FormDataRef;
  }

  /**
   * Same as `FormData.prototype.append`, but emits change after calling it
   */
  append(name: string, value: string | Blob, fileName?: string): this {
    this._applyMutation((currentValue) => {
      if (typeof value === 'string') {
        currentValue.append(name, value);
      } else if (fileName === undefined) {
        currentValue.append(name, value);
      } else {
        currentValue.append(name, value, fileName);
      }
    });
    return this;
  }

  /**
   * Same as `FormData.prototype.set`, but emits change after calling it
   */
  set(name: string, value: string | Blob, fileName?: string): this {
    this._applyMutation((currentValue) => {
      if (typeof value === 'string') {
        currentValue.set(name, value);
      } else if (fileName === undefined) {
        currentValue.set(name, value);
      } else {
        currentValue.set(name, value, fileName);
      }
    });
    return this;
  }

  /**
   * Same as `FormData.prototype.delete`, but emits change after calling it
   */
  delete(name: string): this {
    this._applyMutation((currentValue) => currentValue.delete(name));
    return this;
  }
}

registerRefFactory(
  (value): value is FormData => typeof FormData !== 'undefined' && value instanceof FormData,
  (value, onChange) => {
    const formDataRef = new KTFormDataRef(value as FormData);
    if (onChange) {
      formDataRef.addOnChange(onChange);
    }
    return formDataRef;
  },
);
