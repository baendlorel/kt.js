export const throws: (message: string) => never = (message) => {
  throw new Error('__NAME__:'.concat(message));
};
