const booleanHandler = (element: HTMLElement | SVGElement | MathMLElement, key: string, value: any) => {
  if (key in element) {
    (element as any)[key] = !!value;
  } else {
    element.setAttribute(key, value);
  }
};

const valueHandler = (element: HTMLElement | SVGElement | MathMLElement, key: string, value: any) => {
  if (key in element) {
    (element as any)[key] = value;
  } else {
    element.setAttribute(key, value);
  }
};

// Attribute handlers map for optimized lookup
export const handlers: Record<
  string,
  (element: HTMLElement | SVGElement | MathMLElement, key: string, value: any) => void
> = {
  checked: booleanHandler,
  selected: booleanHandler,
  value: valueHandler,
  valueAsDate: valueHandler,
  valueAsNumber: valueHandler,
  defaultValue: valueHandler,
  defaultChecked: booleanHandler,
  defaultSelected: booleanHandler,
  disabled: booleanHandler,
  readOnly: booleanHandler,
  multiple: booleanHandler,
  required: booleanHandler,
  autofocus: booleanHandler,
  open: booleanHandler,
  controls: booleanHandler,
  autoplay: booleanHandler,
  loop: booleanHandler,
  muted: booleanHandler,
  defer: booleanHandler,
  async: booleanHandler,
  hidden: (element, _key, value) => ((element as HTMLElement).hidden = !!value),
};

type InputElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

type StringEventHandler = (element: InputElement, handler: (value: string) => void) => void;
type NumberEventHandler = (element: InputElement, handler: (value: number) => void) => void;

export const ktEventHandlers: Record<string, StringEventHandler | NumberEventHandler> = {
  'on:ktchange': (element: InputElement, handler: (value: string) => void) =>
    element.addEventListener('change', () => handler(element.value)),
  'ontrim:ktchange': (element: InputElement, handler: (value: string) => void) =>
    element.addEventListener('change', () => handler(element.value.trim())),
  'on:ktchangenumber': (element: InputElement, handler: (value: number) => void) =>
    element.addEventListener('change', () => handler(Number(element.value))),
  'on:ktinput': (element: InputElement, handler: (value: string) => void) =>
    element.addEventListener('input', () => handler(element.value)),
  'ontrim:ktinput': (element: InputElement, handler: (value: string) => void) =>
    element.addEventListener('input', () => handler(element.value.trim())),
  'on:ktinputnumber': (element: InputElement, handler: (value: number) => void) =>
    element.addEventListener('input', () => handler(Number(element.value))),
};
