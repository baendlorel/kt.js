import { $define, $keys } from '@ktjs/shared';
import { ReactiveChangeHandler } from '../../types/reactive';
import { KTReactiveType } from '../core.js';
import { KTRef } from './ref.js';

export class KTObjectRef<T extends object> extends KTRef<T> {
  constructor(value: T, onChange?: ReactiveChangeHandler<T>) {
    super(value, onChange);
    this.ktType = KTReactiveType.ObjectRef;
  }

  set(o: T = this._value): T {
    const keys = $keys(o);
    const watched = {} as any;
    for (const key of keys) {
      $define(watched, key, {
        get: () => o[key],
        set: (v) => {
          o[key] = v;
          this._onChanges.forEach((handler) => handler(o, o));
        },
      });
    }

    return watched;
  }
}

export const objectRef = (value: unknown, onChange?: ReactiveChangeHandler<any>) =>
  new KTObjectRef(value as any, onChange);
