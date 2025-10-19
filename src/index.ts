export * from './shortcuts/index.js';
import { h } from './core/h/index.js';
import { isKEnhanced } from './core/privates.js';

import { $appendChild, $id, $is, $isObject } from './lib/index.js';

/**
 * __PKG_INFO__
 *
 * ## Usage
 * Mount root element to `#app`(`body` if not found) or to the given element.
 * @param rootElement an instance of `HTMLKEnhancedElement`, created by `h` function.
 * @param mountTo any `HTMLElement` to mount to, if omitted, will mount to `#app` or `body`.
 */
function createApp(rootElement: HTMLKEnhancedElement, mountTo?: HTMLElement): void {
  if (!isKEnhanced(rootElement)) {
    throw new TypeError('Root element must be a KText element.');
  }

  const appDiv = $id('app') ?? document.body;
  if (mountTo === undefined) {
    $appendChild.call(appDiv, rootElement);
    return;
  }

  if (!$isObject(mountTo)) {
    throw new TypeError('mountTo must be an HTMLElement or omitted.');
  }
}

export { h, createApp };
