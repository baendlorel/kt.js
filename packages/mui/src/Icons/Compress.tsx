import type { KTAttribute } from '@ktjs/core';
export default function CompressIcon(props: KTAttribute) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
      <path d="M4 9h16v2H4zm0 4h16v2H4zm8-9 4 4H8zm0 14 4-4H8z" />
    </svg>
  );
}
