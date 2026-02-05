import { KTComputed } from './computed.js';
import { KTRef } from './ref.js';
export type KTReactive<T> = KTRef<T> | KTComputed<T>;

export * from './ref.js';
export * from './computed.js';
export * from './core.js';
