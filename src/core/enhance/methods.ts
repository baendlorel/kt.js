import { NotProvided } from '@/consts/sym.js';
import { $appendChild, $on, $off, $is, $isObject, $isSafeInteger } from '@/lib/index.js';

import { isKEnhanced } from '../privates.js';

export const methods: PickMethod<KEnhanced> = {
  kon<El extends HTMLElement, T extends keyof HTMLElementEventMap>(
    this: El,
    type: T,
    listener: KListener<HTMLElement, T>,
    options: KOnOptions = NotProvided as any
  ): KListener<El, T> {
    // * in case of no options provided, which is the most common usage
    if ($is(options, NotProvided)) {
      $on.call(this, type, listener as EventListener);
      return listener;
    }

    if (!$isObject<KOnOptions>(options) || !('triggerLimit' in options)) {
      $on.call(this, type, listener as EventListener, options);
      return listener;
    }

    const triggerLimit = options.triggerLimit;
    delete options.triggerLimit;
    if (!$isSafeInteger(triggerLimit) || triggerLimit <= 0) {
      throw new TypeError('[__NAME__:kon] options.triggerLimit must be a positive safe integer.');
    }

    // * Handle the enhancing part
    if (triggerLimit === 1) {
      options.once = true;
      $on.call(this, type, listener as EventListener, options);
      return listener;
    }

    let count = triggerLimit;
    const newHandler = function (this: El, ev: HTMLElementEventMap[T]) {
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
  koff<El extends HTMLElement, K extends keyof HTMLElementEventMap>(
    this: El,
    type: K,
    listener: KListener<HTMLElement, K>,
    options: KOnOptions = NotProvided as any
  ): void {
    if ($is(NotProvided, options)) {
      $off.call(this, type, listener as EventListener);
      return;
    }

    $off.call(this, type, listener as EventListener, options);
  },
  kmount<El extends HTMLKEnhancedElement>(this: El, target: HTMLKEnhancedElement): El {
    if (!isKEnhanced(target)) {
      throw new TypeError('[__NAME__:kmount] target must be a KText element.');
    }

    return $appendChild.call(target, this) as El;
  },
};
