import { KTextSymbol, NotProvided } from '@/consts/sym.js';
import { Indexer } from '@/utils/indexer.js';

// lib
import { $get, $define, $arrayFrom } from '@/lib/native.js';
import { $appendChild, $createTextNode, $on, $off } from '@/lib/dom.js';
import { $is, $isObject, $isSafeInteger } from '@/lib/whether.js';

// #region properties

const ktextDescriptor = {
  get: function (this: HTMLKEnhancedElement): string {
    const textNode = $get(this, KTextSymbol) as Text;
    return textNode.textContent;
  },
  set: function (this: HTMLKEnhancedElement, newText: string): void {
    const textNode = $get(this, KTextSymbol) as Text;
    textNode.textContent = newText;
  },
};

const isKTDescriptor = { value: true };

const nextKidDescriptor = () => ({
  value: Indexer.nextKid(),
  enumerable: true,
});

const kchildrenDescriptor = {
  get<El extends HTMLKEnhancedElement>(this: El): KChildren[] {
    return $arrayFrom(this.children) as KChildren[];
  },
  set<El extends HTMLKEnhancedElement>(this: El, elements: (KChildren | string)[]): void {
    this.innerHTML = '';

    const elementsLen = elements.length;
    for (let i = 0; i < elementsLen; i++) {
      const el = elements[i];
      if (typeof el === 'string') {
        $appendChild.call(this, $createTextNode(el));
        continue;
      }

      if (el instanceof Text || el.isKT) {
        $appendChild.call(this, el);
        continue;
      }

      throw new TypeError(
        `[__NAME__:kchildren] Invalid child element at index ${i}. Only string, Text nodes or KT.js enhanced elements are allowed.`
      );
    }
  },
};

// #endregion

// #region methods

function kon<El extends HTMLElement, T extends keyof HTMLElementEventMap>(
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
}

function koff<El extends HTMLElement, K extends keyof HTMLElementEventMap>(
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
}

function kmount<El extends HTMLKEnhancedElement>(this: El, element: HTMLElement): El {
  return $appendChild.call(element, this) as El;
}

kon satisfies KEnhanced['kon'];
koff satisfies KEnhanced['koff'];
kmount satisfies KEnhanced['kmount'];

// #endregion

// & main
const kid: keyof KEnhanced = 'kid';
const isKT: keyof KEnhanced = 'isKT';
const ktext: keyof KEnhanced = 'ktext';
const kchildren: keyof KEnhanced = 'kchildren';

export function enhance(element: HTMLKEnhancedElement): void {
  $define(element, kid, nextKidDescriptor());
  $define(element, isKT, isKTDescriptor);
  $define(element, ktext, ktextDescriptor);
  $define(element, kchildren, kchildrenDescriptor);
  element.kon = kon;
  element.koff = koff;
  element.kmount = kmount;
}
