import { Sym } from '@/consts/sym.js';
import { apply, isObject, isSafeInt, ObjectIs } from './native.js';

export function yon<E extends HTMLElement, K extends keyof HTMLElementEventMap>(
  this: E,
  type: K,
  listener: YukaListener<HTMLElement, K>,
  options: YOnOptions = Sym.NotProvided as any
): YukaListener<E, K> {
  // * in case of no options provided, which is the most common usage
  if (ObjectIs(Sym.NotProvided, options)) {
    apply(addEventListener, this, [type, listener]);
    return listener;
  }

  if (!isObject<YOnOptions>(options) || !('triggerLimit' in options)) {
    apply(addEventListener, this, [type, listener, options]);
    return listener;
  }

  const triggerLimit = options.triggerLimit;
  delete options.triggerLimit;
  if (!isSafeInt(triggerLimit) || triggerLimit <= 0) {
    throw new TypeError('[__NAME__:yon] options.triggerLimit must be a positive safe integer.');
  }

  // * Handle the enhancing part
  if (triggerLimit === 1) {
    options.once = true;
    apply(addEventListener, this, [type, listener, options]);
    return listener;
  }

  let count = triggerLimit;
  const newHandler = function (this: E, ev: HTMLElementEventMap[K]) {
    const result = apply(listener, this, [ev]);
    count--;
    if (count <= 0) {
      apply(removeEventListener, this, [type, newHandler, options]);
    }
    return result;
  };
  apply(addEventListener, this, [type, newHandler, options]);
  return newHandler;
}

export function yoff<E extends HTMLElement, K extends keyof HTMLElementEventMap>(
  this: E,
  type: K,
  listener: YukaListener<HTMLElement, K>,
  options: YOnOptions = Sym.NotProvided as any
): void {
  if (ObjectIs(Sym.NotProvided, options)) {
    apply(removeEventListener, this, [type, listener]);
    return;
  }

  apply(removeEventListener, this, [type, listener, options]);
}
