declare const $throw: (message?: string) => never;
declare const $warn: typeof console.warn;
declare const $log: typeof console.log;
declare const $error: typeof console.error;
declare const $debug: typeof console.debug;

declare namespace flags {
  /**
   * Mark the attribute as SVG to handle special cases during rendering.
   */

  const svg: string;
  /**
   * Mark the attribute as MathML to handle special cases during rendering.
   */
  const mathml: string;
}
