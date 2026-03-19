import { ReactiveChangeHandler } from '../../types/reactive';
import { KTReactiveType } from '../core.js';
import { KTRef } from './ref.js';

export class KTObjectRef<T extends object> extends KTRef<T> {
  constructor(value: T, onChange?: ReactiveChangeHandler<T>) {
    super(value, onChange);
    this.ktType = KTReactiveType.ObjectRef;
  }
}

export const objectRef = (value: unknown, onChange?: ReactiveChangeHandler<any>) =>
  new KTObjectRef(value as any, onChange);
