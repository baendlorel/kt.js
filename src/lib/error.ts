export const throws = function(message: string): never {
  throw new Error('__NAME__:'.concat(message));
};
