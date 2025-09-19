import { KTextSymbol, NotProvided } from '@/consts/sym.js';
import { Indexer } from '@/utils/indexer.js';
import {
  IsObject,
  IsSafeInt,
  ObjectIs,
  _get,
  _defineProperty,
  _removeEventListener,
  _addEventListener,
  ArrayFrom,
  _createTextNode,
  _appendChild,
} from './native.js';

// #region properties

const ktextDescriptor = {
  get: function (this: HTMLKEnhancedElement): string {
    const textNode = _get(this, KTextSymbol) as Text;
    return textNode.textContent;
  },
  set: function (this: HTMLKEnhancedElement, newText: string): void {
    const textNode = _get(this, KTextSymbol) as Text;
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
    return ArrayFrom(this.children) as KChildren[];
  },
  set<El extends HTMLKEnhancedElement>(this: El, elements: (KChildren | string)[]): void {
    this.innerHTML = '';

    const elementsLen = elements.length;
    for (let i = 0; i < elementsLen; i++) {
      const el = elements[i];
      if (typeof el === 'string') {
        _appendChild.call(this, _createTextNode(el));
        continue;
      }

      if (el instanceof Text || el.isKT) {
        _appendChild.call(this, el);
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
  if (ObjectIs(options, NotProvided)) {
    _addEventListener.call(this, type, listener as EventListener);
    return listener;
  }

  if (!IsObject<KOnOptions>(options) || !('triggerLimit' in options)) {
    _addEventListener.call(this, type, listener as EventListener, options);
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
    _addEventListener.call(this, type, listener as EventListener, options);
    return listener;
  }

  let count = triggerLimit;
  const newHandler = function (this: El, ev: HTMLElementEventMap[T]) {
    const result = listener.call(this, ev);
    count--;
    if (count <= 0) {
      _removeEventListener.call(this, type, newHandler as EventListener, options);
    }
    return result;
  };
  _addEventListener.call(this, type, newHandler as EventListener, options);
  return newHandler;
}

function koff<El extends HTMLElement, K extends keyof HTMLElementEventMap>(
  this: El,
  type: K,
  listener: KListener<HTMLElement, K>,
  options: KOnOptions = NotProvided as any
): void {
  if (ObjectIs(NotProvided, options)) {
    _removeEventListener.call(this, type, listener as EventListener);
    return;
  }

  _removeEventListener.call(this, type, listener as EventListener, options);
}

function kmount<El extends HTMLKEnhancedElement>(this: El, element: HTMLElement): El {
  return element.appendChild(this);
}

kon satisfies KEnhanced['kon'];
koff satisfies KEnhanced['koff'];
kmount satisfies KEnhanced['kmount'];

// #endregion

const kid: keyof KEnhanced = 'kid';
const isKT: keyof KEnhanced = 'isKT';
const ktext: keyof KEnhanced = 'ktext';

// & main
export function enhance(element: HTMLKEnhancedElement): void {
  _defineProperty(element, kid, nextKidDescriptor());
  _defineProperty(element, isKT, isKTDescriptor);
  _defineProperty(element, ktext, ktextDescriptor);
  element.kon = kon;
  element.koff = koff;
  element.kmount = kmount;
}
