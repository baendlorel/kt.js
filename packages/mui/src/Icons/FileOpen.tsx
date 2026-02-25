import type { KTAttribute } from '@ktjs/core';
import { createMuiIcon } from './createMuiIcon.js';

export function FileOpenIcon(props: KTAttribute) {
  return createMuiIcon('M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H15l6-6V4c0-1.1-.9-2-2-2zm-1 7V3.5L18.5 9H13z', props);
}
