import { $throw } from './lib/error.js';
import { $defines } from './lib/native.js';

export interface KTRuntime {
  throws: (message: string) => never;
  defines: <T>(o: T, properties: PropertyDescriptorMap & ThisType<any>) => T;
}

declare global {
  interface Window {
    readonly __ktjs__: KTRuntime;
  }
}

(() => {
  const __ktjs__: KTRuntime = Object.create(null);

  // & We can add new functions when we need more
  $defines(__ktjs__, {
    throws: { value: $throw, enumerable: true },
    defines: { value: $defines, enumerable: true },
  });

  $defines(window, { __ktjs__: { value: __ktjs__, enumerable: true } });
})();
