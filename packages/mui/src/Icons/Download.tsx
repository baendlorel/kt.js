import type { KTAttribute } from '@ktjs/core';
import { createMuiIcon } from './createMuiIcon.js';

export function DownloadIcon(props: KTAttribute) {
  return createMuiIcon('M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z', props);
}
