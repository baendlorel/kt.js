import type { KTReactive } from '../types/reactive.js';
import type { KTComputed, KTRef } from './index.js';

export const enum KTReactiveType {
  Ref = 1,
  ArrayRef,
  Computed,
}

export const isKT = <T = any>(obj: any): obj is KTReactive<T> => obj?.isKT;
export const isRef = <T = any>(obj: any): obj is KTRef<T> =>
  obj?.ktType === KTReactiveType.Ref || obj?.ktType === KTReactiveType.ArrayRef;
export const isArrayRef = <T = any>(obj: any): obj is KTRef<T[]> => obj?.ktType === KTReactiveType.ArrayRef;
export const isComputed = <T = any>(obj: any): obj is KTComputed<T> => obj?.ktType === KTReactiveType.Computed;
