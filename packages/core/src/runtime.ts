import { $throw } from './lib/error.js';
import { $defines, $mark } from './lib/native.js';

export interface KTRuntime {
  throws: (message: string) => never;
  defines: <T>(o: T, properties: PropertyDescriptorMap & ThisType<any>) => T;
  mark: (func: (...args: any[]) => any, tag: string) => void;
}

type KTRuntimeDescriptor = {
  [K in keyof KTRuntime]: PropertyDescriptor & { value: KTRuntime[K] };
};

declare global {
  interface Window {
    readonly __ktjs__: KTRuntime;
  }
}

(() => {
  const __ktjs__: KTRuntime = Object.create(null);

  // & We can add new functions when we need more
  const descriptor: KTRuntimeDescriptor = {
    throws: { value: $throw, enumerable: true },
    defines: { value: $defines, enumerable: true },
    mark: { value: $mark, enumerable: true },
  };
  $defines(__ktjs__, descriptor);

  $defines(window, { __ktjs__: { value: __ktjs__, enumerable: true } });
})();
