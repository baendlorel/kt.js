import { KTReactiveType } from './base.js';

abstract class KTReactiveBase<T> {
  readonly isKT = true;
  readonly type: KTReactiveType = KTReactiveType.Reative;
  readonly value: T = undefined as any;
}

abstract class KTReactive<T> extends KTReactiveBase<T> {}

abstract class KTSubReactive<T> extends KTReactiveBase<T> {}
