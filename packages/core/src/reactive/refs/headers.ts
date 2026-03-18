import { KTReactiveType } from '../core.js';
import { KTRef, registerRefFactory } from './base.js';

export class KTHeadersRef extends KTRef<Headers> {
  constructor(value: Headers) {
    super(value);
    this.ktType = KTReactiveType.HeadersRef;
  }

  /**
   * Same as `Headers.prototype.append`, but emits change after calling it
   */
  append(name: string, value: string): this {
    this._applyMutation((currentValue) => currentValue.append(name, value));
    return this;
  }

  /**
   * Same as `Headers.prototype.set`, but emits change after calling it
   */
  set(name: string, value: string): this {
    this._applyMutation((currentValue) => currentValue.set(name, value));
    return this;
  }

  /**
   * Same as `Headers.prototype.delete`, but emits change after calling it
   */
  delete(name: string): boolean {
    return this._applyMutation((currentValue) => currentValue.delete(name));
  }
}

registerRefFactory(
  (value): value is Headers => typeof Headers !== 'undefined' && value instanceof Headers,
  (value, onChange) => {
    const headersRef = new KTHeadersRef(value as Headers);
    if (onChange) {
      headersRef.addOnChange(onChange);
    }
    return headersRef;
  },
);
