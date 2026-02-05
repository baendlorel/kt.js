import type { KTComputed, KTReactive, KTRef } from './index.js';

export const isKT = <T = any>(obj: any): obj is KTReactive<T> => obj?.isKT === true;
export const isRef = <T = any>(obj: any): obj is KTRef<T> => obj?.isRef === true;
export const isComputed = <T = any>(obj: any): obj is KTComputed<T> => obj?.isComputed === true;

export type ReactiveChangeHandler<T> = (newValue: T, oldValue: T) => void;
