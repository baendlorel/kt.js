// declare function $throw(message: string): never;
// declare const $warn: typeof console.warn;
// declare const $error: typeof console.error;
// declare const $debug: typeof console.debug;

declare const $throw: (message?: string) => never;
declare const $warn: (message?: string) => void;
declare const $log: (message?: string) => void;
declare const $error: (message?: string) => void;
declare const $debug: (message?: string) => void;
