import type { KTComputed, KTReactive, KTRef } from './index.js';

export const enum KTReactiveType {
  REF = 1,
  COMPUTED = 2,
}

export const isKT = <T = any>(obj: any): obj is KTReactive<T> => obj?.isKT;
export const isRef = <T = any>(obj: any): obj is KTRef<T> => obj?.ktType === KTReactiveType.REF;
export const isComputed = <T = any>(obj: any): obj is KTComputed<T> => obj?.ktType === KTReactiveType.COMPUTED;

export type ReactiveChangeHandler<T> = (newValue: T, oldValue: T) => void;
