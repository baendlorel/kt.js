import { KTReactiveType } from '../core.js';
import { KTRef, registerRefFactory } from './base.js';

export class KTURLSearchParamsRef extends KTRef<URLSearchParams> {
  constructor(value: URLSearchParams) {
    super(value);
    this.ktType = KTReactiveType.URLSearchParamsRef;
  }

  /**
   * Same as `URLSearchParams.prototype.append`, but emits change after calling it
   */
  append(name: string, value: string): this {
    this._applyMutation((currentValue) => currentValue.append(name, value));
    return this;
  }

  /**
   * Same as `URLSearchParams.prototype.set`, but emits change after calling it
   */
  set(name: string, value: string): this {
    this._applyMutation((currentValue) => currentValue.set(name, value));
    return this;
  }

  /**
   * Same as `URLSearchParams.prototype.delete`, but emits change after calling it
   */
  delete(name: string, value?: string): void {
    this._applyMutation((currentValue) => currentValue.delete(name, value));
  }

  /**
   * Same as `URLSearchParams.prototype.sort`, but emits change after calling it
   */
  sort(): this {
    this._applyMutation((currentValue) => currentValue.sort());
    return this;
  }
}

registerRefFactory(
  (value): value is URLSearchParams => typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams,
  (value, onChange) => {
    const paramsRef = new KTURLSearchParamsRef(value as URLSearchParams);
    if (onChange) {
      paramsRef.addOnChange(onChange);
    }
    return paramsRef;
  },
);
