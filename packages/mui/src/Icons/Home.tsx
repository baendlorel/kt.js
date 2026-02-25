import type { KTAttribute } from '@ktjs/core';
import { createMuiIcon } from './createMuiIcon.js';

export function HomeIcon(props: KTAttribute) {
  return createMuiIcon('M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z', props);
}
