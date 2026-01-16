export const $throw: (message: string) => never = (message) => {
  throw new Error('kt.js: ' + message);
};
export const $mustHaveValue: (element: HTMLElement) => asserts element is HTMLInputElement = (element) => {
  if (!('value' in element)) {
    throw new Error('kt.js: Element does not have a value property.');
  }
};
