import type { KTReactive } from './index.js';

export const isKT = <T = any>(obj: any): obj is KTReactive<T> => obj?.isKT === true;

export type ReactiveChangeHandler<T> = (newValue: T, oldValue: T) => void;
