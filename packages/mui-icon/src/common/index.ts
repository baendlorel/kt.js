export function svg(svgElements: SVGElement[], title?: string): SVGElement;
export function svg(svgElement: SVGElement, title?: string): SVGElement;
export function svg(props: { children: SVGElement[] }, title?: string): SVGElement;
export function svg(tag: string, attrs: Record<string, string | SVGElement[] | SVGElement>, title?: string): SVGElement;
export function svg(...args: any[]) {
  const [a0, a1, a2] = args;
  if (typeof a0 === 'object' && a0 !== null && a0.children) {
    return svg(a0.children, a1);
  }

  if (typeof a0 === 'string') {
    const s = a0 === 'svg' ? create() : document.createElementNS('http://www.w3.org/2000/svg', a0);

    if (a1) {
      Object.entries(a1).forEach(([k, v]) => {
        if (k !== 'children') {
          s.setAttribute(k, v as string);
          return;
        }
        if (Array.isArray(v)) {
          v.forEach((e) => s.appendChild(e));
        } else if (v instanceof SVGElement) {
          s.appendChild(v);
        }
      });
    }
    if (typeof a2 === 'string') {
      s.setAttribute('title', a2);
    }
    return s;
  }

  if (Array.isArray(a0)) {
    const s = create();

    a0.forEach((e) => s.appendChild(e));
    if (typeof a1 === 'string') {
      s.setAttribute('title', a1);
    }
    return s;
  }

  if (a0 instanceof SVGElement) {
    const s = create();

    s.appendChild(a0);
    if (typeof a1 === 'string') {
      s.setAttribute('title', a1);
    }
    return s;
  }

  console.warn('Invalid arguments for svg function:', args);
  return document.createElementNS('http://www.w3.org/2000/svg', 'svg');
}

const commonAttr = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': 'true',
};
const create = () => {
  const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  Object.entries(commonAttr).forEach(([k, v]) => s.setAttribute(k, v));
  return s;
};

// todo 应该吧不同的创建函数分开处理
