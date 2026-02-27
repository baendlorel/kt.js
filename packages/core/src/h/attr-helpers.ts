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
