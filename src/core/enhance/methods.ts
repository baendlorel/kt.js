import { KIdSymbol } from '@/consts/sym.js';
import { $appendChild, $on, $off, $isObject, $isSafeInt } from '@/lib/index.js';

export const methods: PickMethod<KEnhanced> = {
  kon<E extends HTMLElement, T extends keyof HTMLElementEventMap>(
    this: E,
    type: T,
    listener: KListener<HTMLElement, T>,
    options?: KOnOptions
  ): KListener<E, T> {
    // * in case of no options provided, which is the most common usage
    if (options === undefined) {
      $on.call(this, type, listener as EventListener);
      return listener;
    }

    if (!$isObject<KOnOptions>(options) || !('triggerLimit' in options)) {
      $on.call(this, type, listener as EventListener, options);
      return listener;
    }

    const triggerLimit = options.triggerLimit;
    delete options.triggerLimit;
    if (!$isSafeInt(triggerLimit) || triggerLimit <= 0) {
      throw new TypeError('[__NAME__:kon] options.triggerLimit must be a positive safe integer.');
    }

    // * Handle the enhancing part
    if (triggerLimit === 1) {
      options.once = true;
      $on.call(this, type, listener as EventListener, options);
      return listener;
    }

    let count = triggerLimit;
    const newHandler = function (this: E, ev: HTMLElementEventMap[T]) {
      const result = listener.call(this, ev);
      count--;
      if (count <= 0) {
        $off.call(this, type, newHandler as EventListener, options);
      }
      return result;
    };
    $on.call(this, type, newHandler as EventListener, options);
    return newHandler;
  },
  koff<E extends HTMLElement, K extends keyof HTMLElementEventMap>(
    this: E,
    type: K,
    listener: KListener<HTMLElement, K>,
    options?: KOnOptions
  ): void {
    if (options === undefined) {
      $off.call(this, type, listener as EventListener);
      return;
    }

    $off.call(this, type, listener as EventListener, options);
  },
  kmount<E extends HTMLKElement>(this: E, target: HTMLKElement): E {
    if (!(KIdSymbol in target)) {
      throw new TypeError('[__NAME__:kmount] target must be a KText element.');
    }

    return $appendChild.call(target, this) as E;
  },
};
