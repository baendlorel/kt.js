import type { KTReactive } from '../types/reactive.js';
import type { KTComputed } from './index.js';
import type { KTRef } from './refs/ref.js';

export const enum KTReactiveType {
  Computed = 1,
  Ref,
  ObjectRef,
  ArrayRef,
  MapRef,
  SetRef,
  WeakMapRef,
  WeakSetRef,
  DateRef,
}

export const isKT = <T = any>(obj: any): obj is KTReactive<T> => obj?.isKT;
export const isRef = <T = any>(obj: any): obj is KTRef<T> => {
  // & This is tested to be the fastest way.
  // faster than includes, arrayindex, if or.
  if (obj.ktType === undefined) {
    return false;
  }
  return obj.ktType >= KTReactiveType.Ref && obj.ktType <= KTReactiveType.DateRef;
};

export const isArrayRef = <T = any>(obj: any): obj is KTRef<T[]> => obj?.ktType === KTReactiveType.ArrayRef;

export const isMapRef = <K = any, V = any>(obj: any): obj is KTRef<Map<K, V>> => obj?.ktType === KTReactiveType.MapRef;
export const isSetRef = <T = any>(obj: any): obj is KTRef<Set<T>> => obj?.ktType === KTReactiveType.SetRef;
export const isWeakMapRef = <K extends WeakKey = WeakKey, V = any>(obj: any): obj is KTRef<WeakMap<K, V>> =>
  obj?.ktType === KTReactiveType.WeakMapRef;
export const isWeakSetRef = <T extends WeakKey = WeakKey>(obj: any): obj is KTRef<WeakSet<T>> =>
  obj?.ktType === KTReactiveType.WeakSetRef;
export const isDateRef = (obj: any): obj is KTRef<Date> => obj?.ktType === KTReactiveType.DateRef;
export const isComputed = <T = any>(obj: any): obj is KTComputed<T> => obj?.ktType === KTReactiveType.Computed;
