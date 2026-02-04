import { KTReactive } from '../types/reactive.js';

export const isKT = <T = any>(obj: any): obj is KTReactive<T> => obj?.isKT === true;
