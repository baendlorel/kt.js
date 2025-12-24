export const $throw: (message: string) => never = (message) => {
  throw new Error('kt.js: ' + message);
};
