import type { KTRef } from '@ktjs/core';

export type ChangeHandler<T = string> = (value: T, ...args: any[]) => void;

export const emptyFn = () => {};

export const generateHandler = <T = string>(props: any, key: string): ChangeHandler<T> => {
  const handler = props[key] as ChangeHandler<T> | KTRef<T>;
  if (typeof handler === 'function') {
    return handler;
  } else if (handler && typeof handler === 'object' && handler.isKT) {
    return (value) => (handler.value = value);
  }
  return emptyFn;
};
