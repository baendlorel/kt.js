export * from './shortcuts/index.js';
import { KIdSymbol } from './consts/sym.js';
import { h } from './core/h/index.js';

import { $appendChild, $id, $is, $isObject } from './lib/index.js';

/**
 * __PKG_INFO__
 *
 * ## Usage
 * Mount root element to `#app`(`body` if not found) or to the given element.
 * @param rootElement an instance of `HTMLKElement`, created by `h` function.
 * @param mountTo any `HTMLElement` to mount to, if omitted, will mount to `#app` or `body`.
 */
function createApp(rootElement: HTMLKElement, mountTo?: HTMLElement): void {
  if (!(KIdSymbol in rootElement)) {
    throw new TypeError('Root element must be HTMLKElement.');
  }

  const appDiv = $id('app') ?? document.body;
  if (mountTo === undefined) {
    $appendChild.call(appDiv, rootElement);
    return;
  }

  if (!$isObject(mountTo)) {
    throw new TypeError('mountTo must be an HTMLElement or omitted.');
  }

  $appendChild.call(mountTo, rootElement);
}

export { h, createApp };
