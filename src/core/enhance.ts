import { Sym } from '@/consts/sym.js';
import { apply, IsObject, IsSafeInt, ObjectIs } from './native.js';

const a = {} as HTMLDivElement;

function yon<E extends HTMLElement, K extends keyof HTMLElementEventMap>(
  this: E,
  type: K,
  listener: YukaListener<E, K>,
  options: YOnOptions = Sym.NotProvided as any
): YukaListener<E, K> {
  type GenericListener = YukaListener<HTMLElement, K>;

  // & in case of no options provided, which is the most common usage
  if (ObjectIs(Sym.NotProvided, options)) {
    this.addEventListener(type, listener as GenericListener);
    return listener;
  }

  // options is not an object, let it pass as is
  if (!IsObject<YOnOptions>(options)) {
    this.addEventListener(type, listener as GenericListener, options);
    return listener;
  }

  // trigger limit is not provided
  if (!('triggerLimit' in options)) {
    this.addEventListener(type, listener as GenericListener, options);
    return listener;
  }

  const triggerLimit = options.triggerLimit;
  delete options.triggerLimit;
  if (!IsSafeInt(triggerLimit) || triggerLimit <= 0) {
    throw new TypeError('[__NAME__:yon] options.triggerLimit must be a positive safe integer.');
  }

  // & type definition of add/removeEventListener has no restriction on E.

  if (triggerLimit === 1) {
    options.once = true;
    this.addEventListener(type, listener as GenericListener, options);
    return listener;
  }

  let count = triggerLimit;
  const newHandler = function (this: E, ev: HTMLElementEventMap[K]) {
    const result = apply(listener, this, [ev]);
    count--;
    if (count <= 0) {
      this.removeEventListener(type, newHandler as GenericListener, options);
    }
    return result;
  };
  this.addEventListener(type, newHandler as GenericListener, options);
  return newHandler;
}
