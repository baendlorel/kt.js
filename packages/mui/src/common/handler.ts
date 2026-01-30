import { KTRef } from '@ktjs/core';

export type ChangeHandler<T = string> = (value: T, event: Event) => void;

export const emptyFn = () => {};

export const generateHandler = (props: any, key: string): ChangeHandler => {
  const handler = props[key] as ChangeHandler | KTRef<string>;
  if (typeof handler === 'function') {
    return handler;
  } else if (handler && typeof handler === 'object' && handler.isKT) {
    return (value) => (handler.value = value);
  }
  return emptyFn;
};
