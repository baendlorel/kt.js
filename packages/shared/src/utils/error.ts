// Error handling utilities

/**
 * * Actually, these functions will be replaced as they are by @rollup/plugin-replace
 * @see ./.scripts/replace.mjs
 */
export const $throw: (message: string) => never = (message) => {
  throw new Error('[__FRAMEWORK_NAME__ error]' + message);
};

export const $warn: (message: string) => void = (message) => {
  console.warn('[__FRAMEWORK_NAME__ warn] ' + message);
};
