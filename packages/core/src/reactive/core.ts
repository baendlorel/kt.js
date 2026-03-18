import type { KTReactive } from '../types/reactive.js';
import type { KTComputed, KTRef } from './index.js';

export const enum KTReactiveType {
  Ref = 1,
  ArrayRef,
  ObjectRef,
  MapRef,
  SetRef,
  WeakMapRef,
  WeakSetRef,
  DateRef,
  FormDataRef,
  HeadersRef,
  URLSearchParamsRef,
  Computed,
}

export const isKT = <T = any>(obj: any): obj is KTReactive<T> => obj?.isKT;
export const isRef = <T = any>(obj: any): obj is KTRef<T> =>
  obj?.isKT === true && obj?.ktType !== undefined && obj?.ktType !== KTReactiveType.Computed;
export const isArrayRef = <T = any>(obj: any): obj is KTRef<T[]> => obj?.ktType === KTReactiveType.ArrayRef;
export const isObjectRef = <T extends object = object>(obj: any): obj is KTRef<T> =>
  obj?.ktType === KTReactiveType.ObjectRef;
export const isMapRef = <K = any, V = any>(obj: any): obj is KTRef<Map<K, V>> => obj?.ktType === KTReactiveType.MapRef;
export const isSetRef = <T = any>(obj: any): obj is KTRef<Set<T>> => obj?.ktType === KTReactiveType.SetRef;
export const isWeakMapRef = <K extends WeakKey = WeakKey, V = any>(obj: any): obj is KTRef<WeakMap<K, V>> =>
  obj?.ktType === KTReactiveType.WeakMapRef;
export const isWeakSetRef = <T extends WeakKey = WeakKey>(obj: any): obj is KTRef<WeakSet<T>> =>
  obj?.ktType === KTReactiveType.WeakSetRef;
export const isDateRef = (obj: any): obj is KTRef<Date> => obj?.ktType === KTReactiveType.DateRef;
export const isFormDataRef = (obj: any): obj is KTRef<FormData> => obj?.ktType === KTReactiveType.FormDataRef;
export const isHeadersRef = (obj: any): obj is KTRef<Headers> => obj?.ktType === KTReactiveType.HeadersRef;
export const isURLSearchParamsRef = (obj: any): obj is KTRef<URLSearchParams> =>
  obj?.ktType === KTReactiveType.URLSearchParamsRef;
export const isComputed = <T = any>(obj: any): obj is KTComputed<T> => obj?.ktType === KTReactiveType.Computed;
