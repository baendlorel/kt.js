export const throws: (message: string) => never = (message) => {
  throw new Error('kt.js:'.concat(message));
};
