export function svg(svgElements: SVGElement[], title?: string): SVGElement;
export function svg(svgElement: SVGElement, title?: string): SVGElement;
export function svg(tag: string, attrs: Record<string, string>, title?: string): SVGElement;
export function svg(...args: any[]) {
  const [a0, a1, a2] = args;
  if (typeof a0 === 'string') {
    const s = document.createElementNS('http://www.w3.org/2000/svg', a0);
    if (a1) {
      Object.entries(a1).forEach(([k, v]) => s.setAttribute(k, v as string));
    }
    if (typeof a2 === 'string') {
      s.setAttribute('title', a2);
    }
    return s;
  }

  if (Array.isArray(a0)) {
    const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    a0.forEach((e) => s.appendChild(e));
    if (typeof a1 === 'string') {
      s.setAttribute('title', a1);
    }
    return s;
  }

  if (a0 instanceof SVGElement) {
    const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.appendChild(a0);
    if (typeof a1 === 'string') {
      s.setAttribute('title', a1);
    }
    return s;
  }

  console.warn('Invalid arguments for svg function:', args);
  return document.createElementNS('http://www.w3.org/2000/svg', 'svg');
}
