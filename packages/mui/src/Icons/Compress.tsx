import type { KTAttribute } from '@ktjs/core';
import { createMuiIcon } from './createMuiIcon.js';

export function CompressIcon(props: KTAttribute) {
  return createMuiIcon('M4 9h16v2H4zm0 4h16v2H4zm8-9 4 4H8zm0 14 4-4H8z', props);
}
