// declare function $throw(message: string): never;
// declare const $warn: typeof console.warn;
// declare const $error: typeof console.error;
// declare const $debug: typeof console.debug;
declare global {
  const $throw: (message?: string) => never;
  const $warn: typeof console.warn;
  const $log: typeof console.log;
  const $error: typeof console.error;
  const $debug: typeof console.debug;
}

export {};
