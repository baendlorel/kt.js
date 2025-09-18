import { NotProvided } from '@/consts/sym.js';
import { ReflectApply, IsObject, IsSafeInt, ObjectIs } from './native.js';

export function kon<El extends HTMLElement, T extends keyof HTMLElementEventMap>(
  this: El,
  type: T,
  listener: KListener<HTMLElement, T>,
  options: KOnOptions = NotProvided as any
): KListener<El, T> {
  // * in case of no options provided, which is the most common usage
  if (ObjectIs(options, NotProvided)) {
    ReflectApply(addEventListener, this, [type, listener]);
    return listener;
  }

  if (!IsObject<KOnOptions>(options) || !('triggerLimit' in options)) {
    ReflectApply(addEventListener, this, [type, listener, options]);
    return listener;
  }

  const triggerLimit = options.triggerLimit;
  delete options.triggerLimit;
  if (!IsSafeInt(triggerLimit) || triggerLimit <= 0) {
    throw new TypeError('[__NAME__:kon] options.triggerLimit must be a positive safe integer.');
  }

  // * Handle the enhancing part
  if (triggerLimit === 1) {
    options.once = true;
    ReflectApply(addEventListener, this, [type, listener, options]);
    return listener;
  }

  let count = triggerLimit;
  const newHandler = function (this: El, ev: HTMLElementEventMap[T]) {
    const result = ReflectApply(listener, this, [ev]);
    count--;
    if (count <= 0) {
      ReflectApply(removeEventListener, this, [type, newHandler, options]);
    }
    return result;
  };
  ReflectApply(addEventListener, this, [type, newHandler, options]);
  return newHandler;
}

export function koff<El extends HTMLElement, K extends keyof HTMLElementEventMap>(
  this: El,
  type: K,
  listener: KListener<HTMLElement, K>,
  options: KOnOptions = NotProvided as any
): void {
  if (ObjectIs(NotProvided, options)) {
    ReflectApply(removeEventListener, this, [type, listener]);
    return;
  }

  ReflectApply(removeEventListener, this, [type, listener, options]);
}

/**
 * Equivalent to `element.appendChild(this)`.
 * @param element
 * @returns itself
 */
export function kmount<El extends HTMLKEnhancedElement>(this: El, element: HTMLElement): El {
  return element.appendChild(this);
}

kon satisfies KEnhanced['kon'];
koff satisfies KEnhanced['koff'];
kmount satisfies KEnhanced['kmount'];
