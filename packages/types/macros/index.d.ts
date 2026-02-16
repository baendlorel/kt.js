declare const $throw: (message?: string) => never;
declare const $warn: typeof console.warn;
declare const $log: typeof console.log;
declare const $error: typeof console.error;
declare const $debug: typeof console.debug;

/**
 * Mark the attribute as MathML to handle special cases during rendering.
 */
declare const MATHML_FLAG: string;

/**
 * Mark the attribute as SVG to handle special cases during rendering.
 */
declare const SVG_FLAG: string;
