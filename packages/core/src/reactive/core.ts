import { KTReactive } from '../types/reactive.js';
import type { KTComputed, KTRef } from './index.js';

export const enum KTReactiveType {
  REF = 1,
  COMPUTED = 2,
}

export const isKT = <T = any>(obj: any): obj is KTReactive<T> => obj?.isKT;
export const isRef = <T = any>(obj: any): obj is KTRef<T> => obj?.ktType === KTReactiveType.REF;
export const isComputed = <T = any>(obj: any): obj is KTComputed<T> => obj?.ktType === KTReactiveType.COMPUTED;
