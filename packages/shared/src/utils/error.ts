// Error handling utilities

export const $throw: (message: string) => never = (message) => {
  throw new Error('__NAME__: ' + message);
};
