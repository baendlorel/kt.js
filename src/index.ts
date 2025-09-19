import { NotProvided } from './consts/sym.js';
import { h } from './core/h/index.js';

import { $getElementById } from './lib/dom.js';
import { $is, $isObject } from './lib/whether.js';

/**
 * __PKG_INFO__
 *
 * ## Usage
 * Mount root element to `#app`(`body` if not found) or to the given element.
 * @param rootElement an instance of `HTMLKEnhancedElement`, created by `h` function.
 * @param mountTo any `HTMLElement` to mount to, if omitted, will mount to `#app` or `body`.
 */
function createApp(
  rootElement: HTMLKEnhancedElement,
  mountTo: HTMLElement = NotProvided as any
): void {
  if (!rootElement.isKT) {
    throw new TypeError('Root element must be a KText element.');
  }

  const appDiv = $getElementById('app') ?? document.body;
  if ($is(mountTo, NotProvided)) {
    rootElement.kmount(appDiv);
    return;
  }

  if (!$isObject(mountTo)) {
    throw new TypeError('mountTo must be an HTMLElement or omitted.');
  }
}

export { h, createApp };
