// Error handling utilities

/**
 * * Actually, these functions will be replaced as they are by @rollup/plugin-replace
 * @see ./.scripts/replace.mjs
 */
export const $throw: (message: string) => never = (message) => {
  throw new Error('[__FRAMEWORK_NAME__ error]' + message);
};

export const $warn: typeof console.warn = (...args: any[]) => {
  console.warn('[__FRAMEWORK_NAME__ warn]', ...args);
};

export const $error: typeof console.error = (...args: any[]) => {
  console.error('[__FRAMEWORK_NAME__ error]', ...args);
};

export const $debug: typeof console.debug = (...args: any[]) => {
  console.debug('[__FRAMEWORK_NAME__ debug]', ...args);
};
