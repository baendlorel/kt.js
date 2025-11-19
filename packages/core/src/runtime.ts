import { KTRuntime } from './types/runtime.js';

import { $throw } from './lib/error.js';
import { $defineProperties } from './lib/native.js';

(() => {
  const __ktjs__: KTRuntime = Object.create(null);

  // & We can add new functions when we need more
  $defineProperties(__ktjs__, {
    throws: { value: $throw, enumerable: true },
  });

  $defineProperties(window, { __ktjs__: { value: __ktjs__, enumerable: true } });
})();
