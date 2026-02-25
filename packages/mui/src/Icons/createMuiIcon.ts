import { createSVGElement } from '@ktjs/core';
import type { KTAttribute } from '@ktjs/core';

export function createMuiIcon(path: string, props: KTAttribute) {
  return createSVGElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      width: '1em',
      height: '1em',
      ...props,
    },
    createSVGElement('path', { d: path }),
  );
}
