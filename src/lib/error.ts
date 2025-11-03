export const throws = (message: string): never => {
  throw new Error('__NAME__:'.concat(message));
};
