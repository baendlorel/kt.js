import { applyAttr, type KTRawAttr } from '@ktjs/core';
import { svg } from '../common/index.js';

export const PaddingIcon = (props?: KTRawAttr) => {
  const s = _PaddingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaddingIcon = svg(
  svg('path', { d: 'M3 3v18h18V3zm16 16H5V5h14zM11 7h2v2h-2zM7 7h2v2H7zm8 0h2v2h-2z' }),
  'Padding',
);
export const PaddingOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PaddingOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaddingOutlinedIcon = svg(
  svg('path', {
    d: 'M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m16 14H5V5h14zM11 7h2v2h-2zM7 7h2v2H7zm8 0h2v2h-2z',
  }),
  'PaddingOutlined',
);
export const PaddingRoundedIcon = (props?: KTRawAttr) => {
  const s = _PaddingRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaddingRoundedIcon = svg(
  svg('path', {
    d: 'M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m6 3c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1m4 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1m4 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1',
  }),
  'PaddingRounded',
);
export const PaddingSharpIcon = (props?: KTRawAttr) => {
  const s = _PaddingSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaddingSharpIcon = svg(
  svg('path', { d: 'M3 3v18h18V3zm6 6H7V7h2zm4 0h-2V7h2zm4 0h-2V7h2z' }),
  'PaddingSharp',
);
export const PaddingTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PaddingTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaddingTwoToneIcon = svg(
  [
    svg('path', { d: 'M5 19h14V5H5zM15 7h2v2h-2zm-4 0h2v2h-2zM7 7h2v2H7z', opacity: '.3' }, '0'),
    svg('path', { d: 'M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m16 14H5V5h14z' }, '1'),
    svg('path', { d: 'M15 7h2v2h-2zM7 7h2v2H7zm4 0h2v2h-2z' }, '2'),
  ],
  'PaddingTwoTone',
);
export const PagesIcon = (props?: KTRawAttr) => {
  const s = _PagesIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PagesIcon = svg(
  svg('path', {
    d: 'M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2m5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1zm9 4-4-1v5h6c1.1 0 2-.9 2-2v-6h-5zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2',
  }),
  'Pages',
);
export const PagesOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PagesOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PagesOutlinedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6 2h6v6h-3l1-4-4 1zM5 5h6v3L7 7l1 4H5zm6 14H5v-6h3l-1 4 4-1zm8 0h-6v-3l4 1-1-4h3zm-4.37-4.37L12 13.72l-2.63.91.91-2.63-.91-2.63 2.63.91 2.63-.91-.91 2.63z',
  }),
  'PagesOutlined',
);
export const PagesRoundedIcon = (props?: KTRawAttr) => {
  const s = _PagesRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PagesRoundedIcon = svg(
  svg('path', {
    d: 'M3 5v6h5l-.6-2.38c-.18-.74.48-1.4 1.22-1.22L11 8V3H5c-1.1 0-2 .9-2 2m5 8H3v6c0 1.1.9 2 2 2h6v-5l-2.38.6c-.73.18-1.4-.48-1.21-1.21zm7.38 3.6L13 16v5h6c1.1 0 2-.9 2-2v-6h-5l.6 2.38c.18.74-.48 1.4-1.22 1.22M19 3h-6v5l2.38-.6c.73-.18 1.4.48 1.21 1.21L16 11h5V5c0-1.1-.9-2-2-2',
  }),
  'PagesRounded',
);
export const PagesSharpIcon = (props?: KTRawAttr) => {
  const s = _PagesSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PagesSharpIcon = svg(
  svg('path', { d: 'M3 3v8h5L7 7l4 1V3zm5 10H3v8h8v-5l-4 1zm9 4-4-1v5h8v-8h-5zm4-14h-8v5l4-1-1 4h5z' }),
  'PagesSharp',
);
export const PagesTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PagesTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PagesTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'm7 7 4 1V5H5v6h3zm1 6H5v6h6v-3l-4 1zm9 4-4-1v3h6v-6h-3zm-4-9 4-1-1 4h3V5h-6z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 5h6v3L7 7l1 4H5zm6 14H5v-6h3l-1 4 4-1zm-1.63-4.37.91-2.63-.91-2.63 2.63.91 2.63-.91-.91 2.63.91 2.63-2.63-.91zM19 19h-6v-3l4 1-1-4h3zm0-8h-3l1-4-4 1V5h6z',
      },
      '1',
    ),
  ],
  'PagesTwoTone',
);
export const PageviewIcon = (props?: KTRawAttr) => {
  const s = _PageviewIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PageviewIcon = svg(
  svg('path', {
    d: 'M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-3.21 14.21-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9z',
  }),
  'Pageview',
);
export const PageviewOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PageviewOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PageviewOutlinedIcon = svg(
  svg('path', {
    d: 'M11.49 16c.88 0 1.7-.26 2.39-.7l2.44 2.44 1.42-1.42-2.44-2.43c.44-.7.7-1.51.7-2.39C16 9.01 13.99 7 11.5 7S7 9.01 7 11.5 9.01 16 11.49 16m.01-7c1.38 0 2.5 1.12 2.5 2.5S12.88 14 11.5 14 9 12.88 9 11.5 10.12 9 11.5 9M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z',
  }),
  'PageviewOutlined',
);
export const PageviewRoundedIcon = (props?: KTRawAttr) => {
  const s = _PageviewRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PageviewRoundedIcon = svg(
  svg('path', {
    d: 'M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-3.92 13.5-2.2-2.2c-.9.58-2.03.84-3.22.62-1.88-.35-3.38-1.93-3.62-3.83-.38-3.01 2.18-5.52 5.21-5.04 1.88.3 3.39 1.84 3.7 3.71.19 1.16-.08 2.23-.64 3.12l2.2 2.19c.39.39.39 1.03 0 1.42-.4.4-1.04.4-1.43.01',
  }),
  'PageviewRounded',
);
export const PageviewSharpIcon = (props?: KTRawAttr) => {
  const s = _PageviewSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PageviewSharpIcon = svg(
  svg('path', {
    d: 'M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9M22 4H2v16h20zm-5.21 14.21-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9z',
  }),
  'PageviewSharp',
);
export const PageviewTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PageviewTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PageviewTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M4 18h16V6H4zm7.5-11c2.49 0 4.5 2.01 4.5 4.5 0 .88-.26 1.69-.7 2.39l2.44 2.43-1.42 1.42-2.44-2.44c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M11.49 16c.88 0 1.7-.26 2.39-.7l2.44 2.44 1.42-1.42-2.44-2.43c.44-.7.7-1.51.7-2.39C16 9.01 13.99 7 11.5 7S7 9.01 7 11.5 9.01 16 11.49 16m.01-7c1.38 0 2.5 1.12 2.5 2.5S12.88 14 11.5 14 9 12.88 9 11.5 10.12 9 11.5 9M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z',
      },
      '1',
    ),
  ],
  'PageviewTwoTone',
);
export const PaidIcon = (props?: KTRawAttr) => {
  const s = _PaidIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaidIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m.88 15.76V19h-1.75v-1.29c-.74-.18-2.39-.77-3.02-2.96l1.65-.67c.06.22.58 2.09 2.4 2.09.93 0 1.98-.48 1.98-1.61 0-.96-.7-1.46-2.28-2.03-1.1-.39-3.35-1.03-3.35-3.31 0-.1.01-2.4 2.62-2.96V5h1.75v1.24c1.84.32 2.51 1.79 2.66 2.23l-1.58.67c-.11-.35-.59-1.34-1.9-1.34-.7 0-1.81.37-1.81 1.39 0 .95.86 1.31 2.64 1.9 2.4.83 3.01 2.05 3.01 3.45 0 2.63-2.5 3.13-3.02 3.22',
  }),
  'Paid',
);
export const PaidOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PaidOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaidOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m.89-8.9c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.44-.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6.56-2.62 2.85-2.62 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 3.02 2.96V19h1.75v-1.24c.52-.09 3.02-.59 3.02-3.22.01-1.39-.6-2.61-3-3.44',
  }),
  'PaidOutlined',
);
export const PaidRoundedIcon = (props?: KTRawAttr) => {
  const s = _PaidRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaidRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m.88 15.76v.36c0 .48-.39.88-.88.88-.48 0-.88-.39-.88-.88v-.42c-.63-.15-1.93-.61-2.69-2.1-.23-.44-.01-.99.45-1.18l.07-.03c.41-.17.87 0 1.08.39.32.61.95 1.37 2.12 1.37.93 0 1.98-.48 1.98-1.61 0-.96-.7-1.46-2.28-2.03-1.1-.39-3.35-1.03-3.35-3.31 0-.1.01-2.4 2.62-2.96v-.36c0-.49.4-.88.88-.88s.88.39.88.88v.37c1.07.19 1.75.76 2.16 1.3.34.44.16 1.08-.36 1.3-.36.15-.78.03-1.02-.28-.28-.38-.78-.77-1.6-.77-.7 0-1.81.37-1.81 1.39 0 .95.86 1.31 2.64 1.9 2.4.83 3.01 2.05 3.01 3.45 0 2.63-2.5 3.13-3.02 3.22',
  }),
  'PaidRounded',
);
export const PaidSharpIcon = (props?: KTRawAttr) => {
  const s = _PaidSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaidSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m.88 15.76V19h-1.75v-1.29c-.74-.18-2.39-.77-3.02-2.96l1.65-.67c.06.22.58 2.09 2.4 2.09.93 0 1.98-.48 1.98-1.61 0-.96-.7-1.46-2.28-2.03-1.1-.39-3.35-1.03-3.35-3.31 0-.1.01-2.4 2.62-2.96V5h1.75v1.24c1.84.32 2.51 1.79 2.66 2.23l-1.58.67c-.11-.35-.59-1.34-1.9-1.34-.7 0-1.81.37-1.81 1.39 0 .95.86 1.31 2.64 1.9 2.4.83 3.01 2.05 3.01 3.45 0 2.63-2.5 3.13-3.02 3.22',
  }),
  'PaidSharp',
);
export const PaidTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PaidTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaidTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m.88 13.76V19h-1.75v-1.29c-.74-.18-2.39-.77-3.02-2.96l1.65-.67c.06.22.58 2.09 2.4 2.09.93 0 1.98-.48 1.98-1.61 0-.96-.7-1.46-2.28-2.03-1.1-.39-3.35-1.03-3.35-3.31 0-.1.01-2.4 2.62-2.96V5h1.75v1.24c1.84.32 2.51 1.79 2.66 2.23l-1.58.67c-.11-.35-.59-1.34-1.9-1.34-.7 0-1.81.37-1.81 1.39 0 .95.86 1.31 2.64 1.9 2.4.83 3.01 2.05 3.01 3.45 0 2.63-2.5 3.13-3.02 3.22',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12.89 11.1c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.44-.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6.56-2.62 2.85-2.62 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 3.02 2.96V19h1.75v-1.24c.52-.09 3.02-.59 3.02-3.22.01-1.39-.6-2.61-3-3.44',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
      },
      '2',
    ),
  ],
  'PaidTwoTone',
);
export const PaletteIcon = (props?: KTRawAttr) => {
  const s = _PaletteIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaletteIcon = svg(
  svg('path', {
    d: 'M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9m5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9M5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5m6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5',
  }),
  'Palette',
);
export const PaletteOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PaletteOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaletteOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5m0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7',
      },
      '0',
    ),
    svg('circle', { cx: '6.5', cy: '11.5', r: '1.5' }, '1'),
    svg('circle', { cx: '9.5', cy: '7.5', r: '1.5' }, '2'),
    svg('circle', { cx: '14.5', cy: '7.5', r: '1.5' }, '3'),
    svg('circle', { cx: '17.5', cy: '11.5', r: '1.5' }, '4'),
  ],
  'PaletteOutlined',
);
export const PaletteRoundedIcon = (props?: KTRawAttr) => {
  const s = _PaletteRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaletteRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9m5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9M5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5m6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5',
  }),
  'PaletteRounded',
);
export const PaletteSharpIcon = (props?: KTRawAttr) => {
  const s = _PaletteSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaletteSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9m5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9M5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5m6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5',
  }),
  'PaletteSharp',
);
export const PaletteTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PaletteTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaletteTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7m-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13m3-4C8.67 9 8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9m5 0c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9m4.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.08-.09-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9m4 13h-1.77c-1.38 0-2.5 1.12-2.5 2.5 0 .61.22 1.19.63 1.65.06.07.14.19.14.35 0 .28-.22.5-.5.5-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.14 8 7c0 2.21-1.79 4-4 4',
      },
      '1',
    ),
    svg('circle', { cx: '6.5', cy: '11.5', r: '1.5' }, '2'),
    svg('circle', { cx: '9.5', cy: '7.5', r: '1.5' }, '3'),
    svg('circle', { cx: '14.5', cy: '7.5', r: '1.5' }, '4'),
    svg('circle', { cx: '17.5', cy: '11.5', r: '1.5' }, '5'),
  ],
  'PaletteTwoTone',
);
export const PalletIcon = (props?: KTRawAttr) => {
  const s = _PalletIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PalletIcon = svg(
  svg('path', {
    d: 'M2 18v4h3v-2h5.5v2h3v-2H19v2h3v-4zM18 2H6c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1m-3 6H9V6h6z',
  }),
  'Pallet',
);
export const PanToolIcon = (props?: KTRawAttr) => {
  const s = _PanToolIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanToolIcon = svg(
  svg('path', {
    d: 'M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5',
  }),
  'PanTool',
);
export const PanToolAltIcon = (props?: KTRawAttr) => {
  const s = _PanToolAltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanToolAltIcon = svg(
  svg('path', {
    d: 'm19.98 14.82-.63 4.46c-.14.99-.99 1.72-1.98 1.72h-6.16c-.53 0-1.29-.21-1.66-.59L5 15.62l.83-.84c.24-.24.58-.35.92-.28l3.25.74V4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h.91c.31 0 .62.07.89.21l4.09 2.04c.77.39 1.21 1.22 1.09 2.07',
  }),
  'PanToolAlt',
);
export const PanToolAltOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PanToolAltOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanToolAltOutlinedIcon = svg(
  svg('path', {
    d: 'm18.89 11.77-3.8-1.67c-.13-.06-.28-.1-.44-.1H14V5.5C14 4.12 12.88 3 11.5 3S9 4.12 9 5.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L4 15.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44c.15-.86-.29-1.72-1.08-2.12M17.08 19h-6.55l-3.7-3.78 4.17.89V5.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 13.56z',
  }),
  'PanToolAltOutlined',
);
export const PanToolAltRoundedIcon = (props?: KTRawAttr) => {
  const s = _PanToolAltRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanToolAltRoundedIcon = svg(
  svg('path', {
    d: 'M5.2 15.43c0-.65.6-1.13 1.24-.99l3.56.8V4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h.91c.31 0 .62.07.89.21l4.09 2.04c.77.38 1.21 1.22 1.09 2.07l-.63 4.46c-.14.99-.99 1.72-1.98 1.72h-6.16c-.53 0-1.29-.21-1.66-.59l-4.07-4.29c-.18-.18-.28-.43-.28-.69',
  }),
  'PanToolAltRounded',
);
export const PanToolAltSharpIcon = (props?: KTRawAttr) => {
  const s = _PanToolAltSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanToolAltSharpIcon = svg(
  svg('path', {
    d: 'M20.18 13.4 19.1 21h-9L5 15.62l1.22-1.23 3.78.85V4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h1.38z',
  }),
  'PanToolAltSharp',
);
export const PanToolAltTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PanToolAltTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanToolAltTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M17.08 19h-6.55l-3.7-3.78 4.17.89V5.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 13.56z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm18.89 11.77-3.8-1.67c-.13-.06-.28-.1-.44-.1H14V5.5C14 4.12 12.88 3 11.5 3S9 4.12 9 5.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L4 15.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44c.15-.86-.29-1.72-1.08-2.12M17.08 19h-6.55l-3.7-3.78 4.17.89V5.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 13.56z',
      },
      '1',
    ),
  ],
  'PanToolAltTwoTone',
);
export const PanToolOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PanToolOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanToolOutlinedIcon = svg(
  svg('path', {
    d: 'M18 24h-6.55c-1.08 0-2.14-.45-2.89-1.23l-7.3-7.61 2.07-1.83c.62-.55 1.53-.66 2.26-.27L8 14.34V4.79c0-1.38 1.12-2.5 2.5-2.5.17 0 .34.02.51.05.09-1.3 1.17-2.33 2.49-2.33.86 0 1.61.43 2.06 1.09.29-.12.61-.18.94-.18 1.38 0 2.5 1.12 2.5 2.5v.28c.16-.03.33-.05.5-.05 1.38 0 2.5 1.12 2.5 2.5V20c0 2.21-1.79 4-4 4M4.14 15.28l5.86 6.1c.38.39.9.62 1.44.62H18c1.1 0 2-.9 2-2V6.15c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V3.42c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V2.51c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V4.79c0-.28-.22-.5-.5-.5s-.5.23-.5.5v12.87l-5.35-2.83z',
  }),
  'PanToolOutlined',
);
export const PanToolRoundedIcon = (props?: KTRawAttr) => {
  const s = _PanToolRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanToolRoundedIcon = svg(
  svg('path', {
    d: 'M21.5 4c-.83 0-1.5.67-1.5 1.5v5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-8c0-.83-.67-1.5-1.5-1.5S16 1.67 16 2.5v8c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-9c0-.83-.67-1.5-1.5-1.5S12 .67 12 1.5v8.99c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.5c0-.83-.67-1.5-1.5-1.5S8 3.67 8 4.5v11.41l-4.12-2.35c-.58-.33-1.3-.24-1.78.22-.6.58-.62 1.54-.03 2.13l6.78 6.89c.75.77 1.77 1.2 2.85 1.2H19c2.21 0 4-1.79 4-4V5.5c0-.83-.67-1.5-1.5-1.5',
  }),
  'PanToolRounded',
);
export const PanToolSharpIcon = (props?: KTRawAttr) => {
  const s = _PanToolSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanToolSharpIcon = svg(
  svg('path', { d: 'M23 4v20H10.02L1 14.83 2.9 13 8 15.91V3h3v8h1V0h3v11h1V1h3v10h1V4z' }),
  'PanToolSharp',
);
export const PanToolTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PanToolTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanToolTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19.5 5.65c-.28 0-.5.22-.5.5V12h-2V3.42c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V2.51c0-.28-.22-.5-.5-.5s-.5.22-.5.5V12h-2V4.79c0-.28-.22-.5-.5-.5s-.5.23-.5.5v12.87l-5.35-2.83-.51.45 5.86 6.1c.38.39.9.62 1.44.62H18c1.1 0 2-.9 2-2V6.15c0-.28-.22-.5-.5-.5',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19.5 3.65c-.17 0-.34.02-.5.05v-.28c0-1.38-1.12-2.5-2.5-2.5-.33 0-.65.06-.94.18C15.11.44 14.35.01 13.5.01c-1.32 0-2.41 1.03-2.49 2.33-.16-.03-.33-.05-.51-.05-1.38 0-2.5 1.12-2.5 2.5v9.55l-2.41-1.28c-.73-.39-1.64-.28-2.26.27l-2.07 1.83 7.3 7.61c.75.78 1.8 1.23 2.89 1.23H18c2.21 0 4-1.79 4-4V6.15c0-1.38-1.12-2.5-2.5-2.5M20 20c0 1.1-.9 2-2 2h-6.55c-.54 0-1.07-.22-1.44-.62l-5.86-6.11.51-.45L10 17.66V4.79c0-.28.22-.5.5-.5s.5.23.5.5V12h2V2.51c0-.28.22-.5.5-.5s.5.22.5.5V12h2V3.42c0-.28.22-.5.5-.5s.5.22.5.5V12h2V6.15c0-.28.22-.5.5-.5s.5.22.5.5z',
      },
      '1',
    ),
  ],
  'PanToolTwoTone',
);
export const PanoramaIcon = (props?: KTRawAttr) => {
  const s = _PanoramaIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaIcon = svg(
  svg('path', {
    d: 'M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2M8.5 12.5l2.5 3.01L14.5 11l4.5 6H5z',
  }),
  'Panorama',
);
export const PanoramaFishEyeIcon = (props?: KTRawAttr) => {
  const s = _PanoramaFishEyeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaFishEyeIcon = svg(
  svg('path', {
    d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
  }),
  'PanoramaFishEye',
);
export const PanoramaFishEyeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaFishEyeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaFishEyeOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
  }),
  'PanoramaFishEyeOutlined',
);
export const PanoramaFishEyeRoundedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaFishEyeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaFishEyeRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
  }),
  'PanoramaFishEyeRounded',
);
export const PanoramaFishEyeSharpIcon = (props?: KTRawAttr) => {
  const s = _PanoramaFishEyeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaFishEyeSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
  }),
  'PanoramaFishEyeSharp',
);
export const PanoramaFishEyeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PanoramaFishEyeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaFishEyeTwoToneIcon = svg(
  [
    svg('path', { d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
      },
      '1',
    ),
  ],
  'PanoramaFishEyeTwoTone',
);
export const PanoramaHorizontalIcon = (props?: KTRawAttr) => {
  const s = _PanoramaHorizontalIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaHorizontalIcon = svg(
  svg('path', {
    d: 'M20 6.54v10.91c-2.6-.77-5.28-1.16-8-1.16s-5.4.39-8 1.16V6.54c2.6.77 5.28 1.16 8 1.16 2.72.01 5.4-.38 8-1.16M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7s-6.18-.55-9.12-1.64C2.77 4.02 2.66 4 2.57 4c-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62.1 0 .2-.02.31-.06 2.94-1.1 6.03-1.64 9.12-1.64s6.18.55 9.12 1.64c.11.04.21.06.31.06.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63',
  }),
  'PanoramaHorizontal',
);
export const PanoramaHorizontalOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaHorizontalOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaHorizontalOutlinedIcon = svg(
  svg('path', {
    d: 'M20 6.54v10.91c-2.6-.77-5.28-1.16-8-1.16s-5.4.39-8 1.16V6.54c2.6.77 5.28 1.16 8 1.16 2.72.01 5.4-.38 8-1.16M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7s-6.18-.55-9.12-1.64C2.77 4.02 2.66 4 2.57 4c-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62.1 0 .2-.02.31-.06 2.94-1.1 6.03-1.64 9.12-1.64s6.18.55 9.12 1.64c.11.04.21.06.31.06.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63',
  }),
  'PanoramaHorizontalOutlined',
);
export const PanoramaHorizontalRoundedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaHorizontalRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaHorizontalRoundedIcon = svg(
  svg('path', {
    d: 'M20 6.54v10.91c-2.6-.77-5.28-1.16-8-1.16s-5.4.39-8 1.16V6.54c2.6.77 5.28 1.16 8 1.16 2.72.01 5.4-.38 8-1.16M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7s-6.18-.55-9.12-1.64C2.77 4.02 2.66 4 2.57 4c-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62.1 0 .2-.02.31-.06 2.94-1.1 6.03-1.64 9.12-1.64s6.18.55 9.12 1.64c.11.04.21.06.31.06.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63',
  }),
  'PanoramaHorizontalRounded',
);
export const PanoramaHorizontalSelectIcon = (props?: KTRawAttr) => {
  const s = _PanoramaHorizontalSelectIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaHorizontalSelectIcon = svg(
  svg('path', {
    d: 'M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7s-6.18-.55-9.12-1.64C2.77 4.02 2.66 4 2.57 4c-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62.1 0 .2-.02.31-.06 2.94-1.1 6.03-1.64 9.12-1.64s6.18.55 9.12 1.64c.11.04.21.06.31.06.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63',
  }),
  'PanoramaHorizontalSelect',
);
export const PanoramaHorizontalSelectOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaHorizontalSelectOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaHorizontalSelectOutlinedIcon = svg(
  svg('path', {
    d: 'M12 5.5c-3.89 0-6.95-.84-8.69-1.43-.64-.22-1.31.26-1.31.95V19c0 .68.66 1.17 1.31.95C5.36 19.26 8.1 18.5 12 18.5c3.87 0 6.66.76 8.69 1.45.65.21 1.31-.27 1.31-.95V5c0-.68-.66-1.17-1.31-.95-2.03.68-4.83 1.45-8.69 1.45',
  }),
  'PanoramaHorizontalSelectOutlined',
);
export const PanoramaHorizontalSelectRoundedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaHorizontalSelectRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaHorizontalSelectRoundedIcon = svg(
  svg('path', {
    d: 'M12 5.5c-3.89 0-6.95-.84-8.69-1.43-.64-.22-1.31.26-1.31.95V19c0 .68.66 1.17 1.31.95C5.36 19.26 8.1 18.5 12 18.5c3.87 0 6.66.76 8.69 1.45.65.21 1.31-.27 1.31-.95V5c0-.68-.66-1.17-1.31-.95-2.03.68-4.83 1.45-8.69 1.45',
  }),
  'PanoramaHorizontalSelectRounded',
);
export const PanoramaHorizontalSelectSharpIcon = (props?: KTRawAttr) => {
  const s = _PanoramaHorizontalSelectSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaHorizontalSelectSharpIcon = svg(
  svg('path', {
    d: 'M12 5.5c-5.25 0-9.01-1.54-10-1.92V20.4c2.16-.76 5.21-1.9 10-1.9 4.78 0 7.91 1.17 10 1.9V3.6c-2.09.73-5.23 1.9-10 1.9',
  }),
  'PanoramaHorizontalSelectSharp',
);
export const PanoramaHorizontalSelectTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PanoramaHorizontalSelectTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaHorizontalSelectTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M4 6.38v11.25c2.01-.59 4.61-1.13 8-1.13 3.38 0 5.99.54 8 1.13V6.37c-2.01.59-4.62 1.13-8 1.13-2.68 0-5.42-.39-8-1.12',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M21.01 4C20.45 4 17.4 5.5 12 5.5c-5.31 0-8.49-1.49-9.01-1.49-.53 0-.99.44-.99 1.01V19c0 .57.46 1 .99 1 .57 0 3.55-1.5 9.01-1.5 5.42 0 8.44 1.5 9.01 1.5.53 0 .99-.43.99-1V5c0-.57-.46-1-.99-1M20 17.63c-2.01-.59-4.62-1.13-8-1.13-3.39 0-5.99.54-8 1.13V6.38c2.58.73 5.32 1.12 8 1.12 3.38 0 5.99-.54 8-1.13z',
      },
      '1',
    ),
  ],
  'PanoramaHorizontalSelectTwoTone',
);
export const PanoramaHorizontalSharpIcon = (props?: KTRawAttr) => {
  const s = _PanoramaHorizontalSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaHorizontalSharpIcon = svg(
  svg('path', {
    d: 'M4 6.55c2.6.77 5.28 1.16 8 1.16s5.41-.39 8-1.16v10.91c-2.6-.77-5.28-1.16-8-1.16s-5.41.39-8 1.16zM2 3.77v16.47s.77-.26.88-.3C5.82 18.85 8.91 18.3 12 18.3s6.18.55 9.12 1.64c.11.04.88.3.88.3V3.77s-.77.26-.88.3C18.18 5.15 15.09 5.71 12 5.71s-6.18-.56-9.12-1.64c-.11-.05-.88-.3-.88-.3',
  }),
  'PanoramaHorizontalSharp',
);
export const PanoramaHorizontalTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PanoramaHorizontalTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaHorizontalTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M4 6.54v10.91c2.6-.77 5.28-1.16 8-1.16s5.4.39 8 1.16V6.54c-2.6.78-5.28 1.17-8 1.16-2.72 0-5.4-.39-8-1.16',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7s-6.18-.55-9.12-1.64C2.77 4.02 2.66 4 2.57 4c-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62.1 0 .2-.02.31-.06 2.94-1.1 6.03-1.64 9.12-1.64s6.18.55 9.12 1.64c.11.04.21.06.31.06.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63M20 17.45c-2.6-.77-5.28-1.16-8-1.16s-5.4.39-8 1.16V6.54c2.6.77 5.28 1.16 8 1.16 2.72.01 5.4-.38 8-1.16z',
      },
      '1',
    ),
  ],
  'PanoramaHorizontalTwoTone',
);
export const PanoramaOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaOutlinedIcon = svg(
  svg('path', {
    d: 'M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H3V6h18zm-6.5-7L11 15.51 8.5 12.5 5 17h14z',
  }),
  'PanoramaOutlined',
);
export const PanoramaPhotosphereIcon = (props?: KTRawAttr) => {
  const s = _PanoramaPhotosphereIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaPhotosphereIcon = svg(
  svg('path', {
    d: 'M21.4 11.32v2.93c-.1.05-2.17.85-3.33 1.17-.94.26-3.84.73-6.07.73-3.7 0-7-.7-9.16-1.8-.08-.04-.16-.06-.24-.1V9.76c6.02-2.84 12.6-2.92 18.8 0zm-9.39 8.88c-2.5 0-4.87-1.15-6.41-3.12 4.19 1.22 8.57 1.23 12.82-.01-1.54 1.97-3.9 3.13-6.41 3.13M12 3.8c2.6 0 4.91 1.23 6.41 3.12-4.1-1.19-8.48-1.26-12.83.01C7.08 5.03 9.4 3.8 12 3.8m10.49 4.71c-.47-.23-.93-.44-1.4-.64C19.52 4.41 16.05 2 12 2S4.47 4.41 2.9 7.88c-.47.2-.93.41-1.4.63-.31.15-.5.48-.5.83v5.32c0 .35.19.68.51.83.47.23.93.44 1.39.64 3.55 7.83 14.65 7.82 18.2 0 .47-.2.93-.41 1.39-.63.31-.17.51-.49.51-.84V9.34c0-.35-.19-.68-.51-.83',
  }),
  'PanoramaPhotosphere',
);
export const PanoramaPhotosphereOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaPhotosphereOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaPhotosphereOutlinedIcon = svg(
  svg('path', {
    d: 'M21.95 8.15c-.29-.16-.61-.31-.93-.46C19.4 4.33 15.98 2 12 2S4.6 4.33 2.99 7.68c-.33.15-.64.3-.93.46C1.41 8.5 1 9.17 1 9.91v4.18c0 .74.41 1.41 1.05 1.77.29.16.61.31.93.46C4.6 19.67 8.02 22 12 22s7.4-2.33 9.01-5.68c.33-.15.64-.3.93-.46.65-.36 1.06-1.03 1.06-1.77V9.91c0-.74-.41-1.41-1.05-1.76M21 9.91v4.19c-2.19 1.21-5.47 1.9-9 1.9s-6.81-.7-9-1.91V9.91C5.2 8.69 8.47 8 12 8s6.81.7 9 1.91M12 4c2.37 0 4.49 1.04 5.95 2.68C16.17 6.25 14.15 6 12 6s-4.17.25-5.95.68C7.51 5.04 9.63 4 12 4m0 16c-2.37 0-4.49-1.04-5.95-2.68 1.78.43 3.8.68 5.95.68s4.17-.25 5.95-.68C16.49 18.96 14.37 20 12 20',
  }),
  'PanoramaPhotosphereOutlined',
);
export const PanoramaPhotosphereRoundedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaPhotosphereRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaPhotosphereRoundedIcon = svg(
  svg('path', {
    d: 'M21.95 8.15c-.29-.16-.61-.31-.93-.46C19.4 4.33 15.98 2 12 2S4.6 4.33 2.99 7.68c-.33.15-.64.3-.93.46C1.41 8.5 1 9.17 1 9.91v4.18c0 .74.41 1.41 1.05 1.77.29.16.61.31.93.46C4.6 19.67 8.02 22 12 22s7.4-2.33 9.01-5.68c.33-.15.64-.3.93-.46.65-.36 1.06-1.03 1.06-1.77V9.91c0-.74-.41-1.41-1.05-1.76M12 4c2.37 0 4.49 1.04 5.95 2.68C16.17 6.25 14.15 6 12 6s-4.17.25-5.95.68C7.51 5.04 9.63 4 12 4m0 16c-2.37 0-4.49-1.04-5.95-2.68 1.78.43 3.8.68 5.95.68s4.17-.25 5.95-.68C16.49 18.96 14.37 20 12 20',
  }),
  'PanoramaPhotosphereRounded',
);
export const PanoramaPhotosphereSelectIcon = (props?: KTRawAttr) => {
  const s = _PanoramaPhotosphereSelectIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaPhotosphereSelectIcon = svg(
  svg('path', {
    d: 'M22.49 8.51c-.47-.23-.93-.44-1.4-.64C19.52 4.41 16.05 2 12 2S4.47 4.41 2.9 7.88c-.47.2-.93.41-1.4.63-.31.15-.5.48-.5.83v5.32c0 .35.19.68.51.83.47.23.93.44 1.39.64 3.55 7.83 14.65 7.82 18.2 0 .47-.2.93-.41 1.39-.63.31-.17.51-.49.51-.84V9.34c0-.35-.19-.68-.51-.83M12 3.8c2.6 0 4.91 1.23 6.41 3.12-4.1-1.19-8.48-1.26-12.83.01C7.08 5.03 9.4 3.8 12 3.8M5.6 17.08c4.19 1.22 8.57 1.23 12.82-.01-1.54 1.97-3.9 3.13-6.41 3.13-2.5 0-4.87-1.15-6.41-3.12',
  }),
  'PanoramaPhotosphereSelect',
);
export const PanoramaPhotosphereSelectOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaPhotosphereSelectOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaPhotosphereSelectOutlinedIcon = svg(
  svg('path', {
    d: 'M21.95 8.15c-.29-.16-.61-.31-.93-.46C19.4 4.33 15.98 2 12 2S4.6 4.33 2.99 7.68c-.33.15-.64.3-.93.46C1.41 8.5 1 9.17 1 9.91v4.18c0 .74.41 1.41 1.05 1.77.29.16.61.31.93.46C4.6 19.67 8.02 22 12 22s7.4-2.33 9.01-5.68c.33-.15.64-.3.93-.46.65-.36 1.06-1.03 1.06-1.77V9.91c0-.74-.41-1.41-1.05-1.76M12 4c2.37 0 4.49 1.04 5.95 2.68C16.17 6.25 14.15 6 12 6s-4.17.25-5.95.68C7.51 5.04 9.63 4 12 4m0 16c-2.37 0-4.49-1.04-5.95-2.68 1.78.43 3.8.68 5.95.68s4.17-.25 5.95-.68C16.49 18.96 14.37 20 12 20',
  }),
  'PanoramaPhotosphereSelectOutlined',
);
export const PanoramaPhotosphereSelectRoundedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaPhotosphereSelectRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaPhotosphereSelectRoundedIcon = svg(
  svg('path', {
    d: 'M21.95 8.15c-.29-.16-.61-.31-.93-.46C19.4 4.33 15.98 2 12 2S4.6 4.33 2.99 7.68c-.33.15-.64.3-.93.46C1.41 8.5 1 9.17 1 9.91v4.18c0 .74.41 1.41 1.05 1.77.29.16.61.31.93.46C4.6 19.67 8.02 22 12 22s7.4-2.33 9.01-5.68c.33-.15.64-.3.93-.46.65-.36 1.06-1.03 1.06-1.77V9.91c0-.74-.41-1.41-1.05-1.76M12 4c2.37 0 4.49 1.04 5.95 2.68C16.17 6.25 14.15 6 12 6s-4.17.25-5.95.68C7.51 5.04 9.63 4 12 4m0 16c-2.37 0-4.49-1.04-5.95-2.68 1.78.43 3.8.68 5.95.68s4.17-.25 5.95-.68C16.49 18.96 14.37 20 12 20',
  }),
  'PanoramaPhotosphereSelectRounded',
);
export const PanoramaPhotosphereSelectSharpIcon = (props?: KTRawAttr) => {
  const s = _PanoramaPhotosphereSelectSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaPhotosphereSelectSharpIcon = svg(
  svg('path', {
    d: 'M23 8.84c-.54-.43-1.23-.81-1.99-1.15C19.4 4.33 15.98 2 12 2S4.6 4.33 2.99 7.68c-.76.35-1.45.72-1.99 1.16v6.33c.54.43 1.23.81 1.99 1.15C4.6 19.67 8.02 22 12 22s7.4-2.33 9.01-5.68c.76-.34 1.45-.72 1.99-1.15zM12 4c2.37 0 4.49 1.04 5.95 2.68C16.17 6.25 14.15 6 12 6s-4.17.25-5.95.68C7.51 5.04 9.63 4 12 4m0 16c-2.37 0-4.49-1.04-5.95-2.68 1.78.43 3.8.68 5.95.68s4.17-.25 5.95-.68C16.49 18.96 14.37 20 12 20',
  }),
  'PanoramaPhotosphereSelectSharp',
);
export const PanoramaPhotosphereSelectTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PanoramaPhotosphereSelectTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaPhotosphereSelectTwoToneIcon = svg(
  svg('path', {
    d: 'M21.95 8.15c-.29-.16-.61-.31-.93-.46C19.4 4.33 15.98 2 12 2S4.6 4.33 2.99 7.68c-.33.15-.64.3-.93.46C1.41 8.5 1 9.17 1 9.91v4.18c0 .74.41 1.41 1.05 1.77.29.16.61.31.93.46C4.6 19.67 8.02 22 12 22s7.4-2.33 9.01-5.68c.33-.15.64-.3.93-.46.65-.36 1.06-1.03 1.06-1.77V9.91c0-.74-.41-1.41-1.05-1.76M12 4c2.37 0 4.49 1.04 5.95 2.68C16.17 6.25 14.15 6 12 6s-4.17.25-5.95.68C7.51 5.04 9.63 4 12 4m0 16c-2.37 0-4.49-1.04-5.95-2.68 1.78.43 3.8.68 5.95.68s4.17-.25 5.95-.68C16.49 18.96 14.37 20 12 20',
  }),
  'PanoramaPhotosphereSelectTwoTone',
);
export const PanoramaPhotosphereSharpIcon = (props?: KTRawAttr) => {
  const s = _PanoramaPhotosphereSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaPhotosphereSharpIcon = svg(
  svg('path', {
    d: 'M23 8.84c-.54-.43-1.23-.81-1.99-1.15C19.4 4.33 15.98 2 12 2S4.6 4.33 2.99 7.68c-.76.35-1.45.72-1.99 1.16v6.33c.54.43 1.23.81 1.99 1.15C4.6 19.67 8.02 22 12 22s7.4-2.33 9.01-5.68c.76-.34 1.45-.72 1.99-1.15zM12 4c2.37 0 4.49 1.04 5.95 2.68C16.17 6.25 14.15 6 12 6s-4.17.25-5.95.68C7.51 5.04 9.63 4 12 4m0 16c-2.37 0-4.49-1.04-5.95-2.68 1.78.43 3.8.68 5.95.68s4.17-.25 5.95-.68C16.49 18.96 14.37 20 12 20',
  }),
  'PanoramaPhotosphereSharp',
);
export const PanoramaPhotosphereTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PanoramaPhotosphereTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaPhotosphereTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M3 9.91v4.18C5.19 15.3 8.47 16 12 16s6.81-.69 9-1.91V9.91C18.81 8.7 15.53 8 12 8s-6.8.69-9 1.91',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M21.95 8.15c-.29-.16-.61-.31-.93-.46C19.4 4.33 15.98 2 12 2S4.6 4.33 2.99 7.68c-.33.15-.64.3-.93.46C1.41 8.5 1 9.17 1 9.91v4.18c0 .74.41 1.41 1.05 1.77.29.16.61.31.93.46C4.6 19.67 8.02 22 12 22s7.4-2.33 9.01-5.68c.33-.15.64-.3.93-.46.65-.36 1.06-1.03 1.06-1.77V9.91c0-.74-.41-1.41-1.05-1.76M12 4c2.37 0 4.49 1.04 5.95 2.68C16.17 6.25 14.15 6 12 6s-4.17.25-5.95.68C7.51 5.04 9.63 4 12 4m0 16c-2.37 0-4.49-1.04-5.95-2.68 1.78.43 3.8.68 5.95.68s4.17-.25 5.95-.68C16.49 18.96 14.37 20 12 20m9-10.09v4.18C18.81 15.31 15.53 16 12 16s-6.81-.7-9-1.91V9.91C5.2 8.69 8.47 8 12 8s6.81.7 9 1.91',
      },
      '1',
    ),
  ],
  'PanoramaPhotosphereTwoTone',
);
export const PanoramaRoundedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaRoundedIcon = svg(
  svg('path', {
    d: 'M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2M8.9 12.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 13c.19-.26.57-.27.78-.02',
  }),
  'PanoramaRounded',
);
export const PanoramaSharpIcon = (props?: KTRawAttr) => {
  const s = _PanoramaSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaSharpIcon = svg(
  svg('path', { d: 'M23 20V4H1v16zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5z' }),
  'PanoramaSharp',
);
export const PanoramaTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PanoramaTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaTwoToneIcon = svg(
  [
    svg('path', { d: 'M3 18h18V6H3zm5.5-5.5 2.5 3.01L14.5 11l4.5 6H5z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H3V6h18zm-6.5-7L11 15.51 8.5 12.5 5 17h14z',
      },
      '1',
    ),
  ],
  'PanoramaTwoTone',
);
export const PanoramaVerticalIcon = (props?: KTRawAttr) => {
  const s = _PanoramaVerticalIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaVerticalIcon = svg(
  svg('path', {
    d: 'M19.94 21.12c-1.1-2.94-1.64-6.03-1.64-9.12s.55-6.18 1.64-9.12c.04-.11.06-.22.06-.31 0-.34-.23-.57-.63-.57H4.63c-.4 0-.63.23-.63.57 0 .1.02.2.06.31C5.16 5.82 5.71 8.91 5.71 12s-.55 6.18-1.64 9.12c-.05.11-.07.22-.07.31 0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57-.01-.1-.03-.2-.07-.31M6.54 20c.77-2.6 1.16-5.28 1.16-8s-.39-5.4-1.16-8h10.91c-.77 2.6-1.16 5.28-1.16 8s.39 5.4 1.16 8z',
  }),
  'PanoramaVertical',
);
export const PanoramaVerticalOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaVerticalOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaVerticalOutlinedIcon = svg(
  svg('path', {
    d: 'M19.94 21.12c-1.1-2.94-1.64-6.03-1.64-9.12s.55-6.18 1.64-9.12c.04-.11.06-.22.06-.31 0-.34-.23-.57-.63-.57H4.63c-.4 0-.63.23-.63.57 0 .1.02.2.06.31C5.16 5.82 5.71 8.91 5.71 12s-.55 6.18-1.64 9.12c-.05.11-.07.22-.07.31 0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57-.01-.1-.03-.2-.07-.31M6.54 20c.77-2.6 1.16-5.28 1.16-8s-.39-5.4-1.16-8h10.91c-.77 2.6-1.16 5.28-1.16 8s.39 5.4 1.16 8z',
  }),
  'PanoramaVerticalOutlined',
);
export const PanoramaVerticalRoundedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaVerticalRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaVerticalRoundedIcon = svg(
  svg('path', {
    d: 'M19.94 21.12c-1.1-2.94-1.64-6.03-1.64-9.12s.55-6.18 1.64-9.12c.04-.11.06-.22.06-.31 0-.34-.23-.57-.63-.57H4.63c-.4 0-.63.23-.63.57 0 .1.02.2.06.31C5.16 5.82 5.71 8.91 5.71 12s-.55 6.18-1.64 9.12c-.05.11-.07.22-.07.31 0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57-.01-.1-.03-.2-.07-.31M6.54 20c.77-2.6 1.16-5.28 1.16-8s-.39-5.4-1.16-8h10.91c-.77 2.6-1.16 5.28-1.16 8s.39 5.4 1.16 8z',
  }),
  'PanoramaVerticalRounded',
);
export const PanoramaVerticalSelectIcon = (props?: KTRawAttr) => {
  const s = _PanoramaVerticalSelectIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaVerticalSelectIcon = svg(
  svg('path', {
    d: 'M19.93 21.12c-1.1-2.94-1.64-6.03-1.64-9.12s.55-6.18 1.64-9.12c.05-.11.07-.22.07-.31 0-.34-.24-.57-.64-.57H4.62c-.4 0-.63.23-.63.57 0 .1.02.2.06.31C5.16 5.82 5.7 8.91 5.7 12s-.55 6.18-1.64 9.12c-.05.11-.07.22-.07.31 0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57 0-.1-.02-.2-.07-.31',
  }),
  'PanoramaVerticalSelect',
);
export const PanoramaVerticalSelectOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaVerticalSelectOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaVerticalSelectOutlinedIcon = svg(
  svg('path', {
    d: 'M18.5 12c0-3.89.84-6.95 1.43-8.69.22-.64-.26-1.31-.95-1.31H5c-.68 0-1.16.66-.95 1.31C4.74 5.36 5.5 8.1 5.5 12c0 3.87-.76 6.66-1.45 8.69-.21.65.27 1.31.95 1.31h14c.68 0 1.17-.66.95-1.31-.68-2.03-1.45-4.83-1.45-8.69',
  }),
  'PanoramaVerticalSelectOutlined',
);
export const PanoramaVerticalSelectRoundedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaVerticalSelectRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaVerticalSelectRoundedIcon = svg(
  svg('path', {
    d: 'M18.5 12c0-3.89.84-6.95 1.43-8.69.22-.64-.26-1.31-.95-1.31H5c-.68 0-1.16.66-.95 1.31C4.74 5.36 5.5 8.1 5.5 12c0 3.87-.76 6.66-1.45 8.69-.21.65.27 1.31.95 1.31h14c.68 0 1.17-.66.95-1.31-.68-2.03-1.45-4.83-1.45-8.69',
  }),
  'PanoramaVerticalSelectRounded',
);
export const PanoramaVerticalSelectSharpIcon = (props?: KTRawAttr) => {
  const s = _PanoramaVerticalSelectSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaVerticalSelectSharpIcon = svg(
  svg('path', {
    d: 'M18.49 11.99c0-5.25 1.54-9.01 1.92-10H3.59c.76 2.16 1.9 5.21 1.9 10 0 4.78-1.17 7.91-1.9 10H20.4c-.74-2.08-1.91-5.23-1.91-10',
  }),
  'PanoramaVerticalSelectSharp',
);
export const PanoramaVerticalSelectTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PanoramaVerticalSelectTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaVerticalSelectTwoToneIcon = svg(
  svg('path', {
    d: 'M18.5 12c0-3.89.84-6.95 1.43-8.69.22-.64-.26-1.31-.95-1.31H5c-.68 0-1.16.66-.95 1.31C4.74 5.36 5.5 8.1 5.5 12c0 3.87-.76 6.66-1.45 8.69-.21.65.27 1.31.95 1.31h14c.68 0 1.17-.66.95-1.31-.68-2.03-1.45-4.83-1.45-8.69',
  }),
  'PanoramaVerticalSelectTwoTone',
);
export const PanoramaVerticalSharpIcon = (props?: KTRawAttr) => {
  const s = _PanoramaVerticalSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaVerticalSharpIcon = svg(
  svg('path', {
    d: 'M17.46 4c-.77 2.6-1.16 5.28-1.16 8s.39 5.41 1.16 8H6.55c.77-2.6 1.16-5.28 1.16-8s-.39-5.41-1.16-8zm2.78-2H3.77s.26.77.3.88C5.16 5.82 5.71 8.91 5.71 12s-.55 6.18-1.64 9.12c-.04.11-.3.88-.3.88h16.47s-.26-.77-.3-.88c-1.09-2.94-1.64-6.03-1.64-9.12s.55-6.18 1.64-9.12c.04-.11.3-.88.3-.88',
  }),
  'PanoramaVerticalSharp',
);
export const PanoramaVerticalTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PanoramaVerticalTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaVerticalTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M6.54 4c.77 2.6 1.16 5.28 1.16 8s-.39 5.4-1.16 8h10.91c-.77-2.6-1.16-5.28-1.16-8s.39-5.4 1.16-8z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19.94 21.12c-1.1-2.94-1.64-6.03-1.64-9.12s.55-6.18 1.64-9.12c.04-.11.06-.22.06-.31 0-.34-.23-.57-.63-.57H4.63c-.4 0-.63.23-.63.57 0 .1.02.2.06.31C5.16 5.82 5.71 8.91 5.71 12s-.55 6.18-1.64 9.12c-.05.11-.07.22-.07.31 0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57-.01-.1-.03-.2-.07-.31M17.45 20H6.54c.77-2.6 1.16-5.28 1.16-8s-.39-5.4-1.16-8h10.91c-.77 2.6-1.16 5.28-1.16 8s.39 5.4 1.16 8',
      },
      '1',
    ),
  ],
  'PanoramaVerticalTwoTone',
);
export const PanoramaWideAngleIcon = (props?: KTRawAttr) => {
  const s = _PanoramaWideAngleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaWideAngleIcon = svg(
  svg('path', {
    d: 'M12 6c2.45 0 4.71.2 7.29.64.47 1.78.71 3.58.71 5.36s-.24 3.58-.71 5.36c-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64C4.24 15.58 4 13.78 4 12s.24-3.58.71-5.36C7.29 6.2 9.55 6 12 6m0-2c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4',
  }),
  'PanoramaWideAngle',
);
export const PanoramaWideAngleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaWideAngleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaWideAngleOutlinedIcon = svg(
  svg('path', {
    d: 'M12 6c2.45 0 4.71.2 7.29.64.47 1.78.71 3.58.71 5.36s-.24 3.58-.71 5.36c-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64C4.24 15.58 4 13.78 4 12s.24-3.58.71-5.36C7.29 6.2 9.55 6 12 6m0-2c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4',
  }),
  'PanoramaWideAngleOutlined',
);
export const PanoramaWideAngleRoundedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaWideAngleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaWideAngleRoundedIcon = svg(
  svg('path', {
    d: 'M12 6c2.45 0 4.71.2 7.29.64.47 1.78.71 3.58.71 5.36s-.24 3.58-.71 5.36c-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64C4.24 15.58 4 13.78 4 12s.24-3.58.71-5.36C7.29 6.2 9.55 6 12 6m0-2c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4',
  }),
  'PanoramaWideAngleRounded',
);
export const PanoramaWideAngleSelectIcon = (props?: KTRawAttr) => {
  const s = _PanoramaWideAngleSelectIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaWideAngleSelectIcon = svg(
  svg('path', {
    d: 'M12 4c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4',
  }),
  'PanoramaWideAngleSelect',
);
export const PanoramaWideAngleSelectOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaWideAngleSelectOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaWideAngleSelectOutlinedIcon = svg(
  svg('path', {
    d: 'M12 4c-3.97 0-6.85.63-9 1-.55 1.97-1 3.92-1 7 0 3.03.45 5.05 1 7 2.15.37 4.98 1 9 1 3.97 0 6.85-.63 9-1 .57-2.02 1-3.99 1-7 0-3.03-.45-5.05-1-7-2.15-.37-4.98-1-9-1',
  }),
  'PanoramaWideAngleSelectOutlined',
);
export const PanoramaWideAngleSelectRoundedIcon = (props?: KTRawAttr) => {
  const s = _PanoramaWideAngleSelectRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaWideAngleSelectRoundedIcon = svg(
  svg('path', {
    d: 'M12 4c-3.97 0-6.85.63-9 1-.55 1.97-1 3.92-1 7 0 3.03.45 5.06 1 7 2.15.37 4.98 1 9 1 3.97 0 6.85-.63 9-1 .57-2.02 1-3.99 1-7 0-3.03-.45-5.06-1-7-2.15-.37-4.98-1-9-1',
  }),
  'PanoramaWideAngleSelectRounded',
);
export const PanoramaWideAngleSelectSharpIcon = (props?: KTRawAttr) => {
  const s = _PanoramaWideAngleSelectSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaWideAngleSelectSharpIcon = svg(
  svg('path', {
    d: 'M12 4c-3.97 0-6.85.63-9 1-.55 1.97-1 3.92-1 7 0 3.03.45 5.05 1 7 2.15.37 4.98 1 9 1 3.97 0 6.85-.63 9-1 .57-2.02 1-3.99 1-7 0-3.03-.45-5.05-1-7-2.15-.37-4.98-1-9-1',
  }),
  'PanoramaWideAngleSelectSharp',
);
export const PanoramaWideAngleSelectTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PanoramaWideAngleSelectTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaWideAngleSelectTwoToneIcon = svg(
  svg('path', {
    d: 'M12 4c-3.97 0-6.85.63-9 1-.55 1.97-1 3.92-1 7 0 3.03.45 5.05 1 7 2.15.37 4.98 1 9 1 3.97 0 6.85-.63 9-1 .57-2.02 1-3.99 1-7 0-3.03-.45-5.05-1-7-2.15-.37-4.98-1-9-1',
  }),
  'PanoramaWideAngleSelectTwoTone',
);
export const PanoramaWideAngleSharpIcon = (props?: KTRawAttr) => {
  const s = _PanoramaWideAngleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaWideAngleSharpIcon = svg(
  svg('path', {
    d: 'M12 6c2.45 0 4.71.2 7.29.64.47 1.78.71 3.58.71 5.36s-.24 3.58-.71 5.36c-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64C4.24 15.58 4 13.78 4 12s.24-3.58.71-5.36C7.29 6.2 9.55 6 12 6m0-2c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4',
  }),
  'PanoramaWideAngleSharp',
);
export const PanoramaWideAngleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PanoramaWideAngleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PanoramaWideAngleTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 6c-2.45 0-4.71.2-7.29.64C4.24 8.42 4 10.22 4 12s.24 3.58.71 5.36c2.58.44 4.84.64 7.29.64s4.71-.2 7.29-.64c.47-1.78.71-3.58.71-5.36s-.24-3.58-.71-5.36C16.71 6.2 14.45 6 12 6',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm21.13 5.78-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4s-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22m-1.84 11.58c-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64C4.24 15.58 4 13.78 4 12s.24-3.58.71-5.36C7.29 6.2 9.55 6 12 6s4.71.2 7.29.64c.47 1.78.71 3.58.71 5.36s-.24 3.58-.71 5.36',
      },
      '1',
    ),
  ],
  'PanoramaWideAngleTwoTone',
);
export const ParaglidingIcon = (props?: KTRawAttr) => {
  const s = _ParaglidingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ParaglidingIcon = svg(
  svg('path', {
    d: 'M12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m-3.48.94C8.04 17.55 7 16.76 7 14H5c0 2.7.93 4.41 2.3 5.5.5.4 1.1.7 1.7.9V24h6v-3.6c.6-.2 1.2-.5 1.7-.9 1.37-1.09 2.3-2.8 2.3-5.5h-2c0 2.76-1.04 3.55-1.52 3.94C14.68 18.54 14 19 12 19s-2.68-.46-3.48-1.06M12 0C5.92 0 1 1.9 1 4.25v3.49c0 .81.88 1.26 1.56.83.14-.09.28-.18.44-.26L5 13h2l1.5-6.28c1.1-.14 2.28-.22 3.5-.22s2.4.08 3.5.22L17 13h2l2-4.69c.16.09.3.17.44.26.68.43 1.56-.02 1.56-.83V4.25C23 1.9 18.08 0 12 0M5.88 11.24 4.37 7.69c.75-.28 1.6-.52 2.53-.71zm12.24 0L17.1 6.98c.93.19 1.78.43 2.53.71z',
  }),
  'Paragliding',
);
export const ParaglidingOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ParaglidingOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ParaglidingOutlinedIcon = svg(
  svg('path', {
    d: 'M12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.48.94C14.68 18.54 14 19 12 19s-2.68-.46-3.48-1.06C8.04 17.55 7 16.76 7 14H5c0 2.7.93 4.41 2.3 5.5.5.4 1.1.7 1.7.9V24h6v-3.6c.6-.2 1.2-.5 1.7-.9 1.37-1.09 2.3-2.8 2.3-5.5h-2c0 2.76-1.04 3.55-1.52 3.94M23 4.25v3.49c0 .8-.88 1.26-1.56.83-.14-.09-.28-.18-.44-.26L19 13h-2l-1.5-6.28c-1.1-.14-2.28-.22-3.5-.22s-2.4.08-3.5.22L7 13H5L3 8.31c-.16.08-.3.17-.44.26C1.88 9 1 8.55 1 7.74V4.25C1 1.9 5.92 0 12 0s11 1.9 11 4.25M6.9 6.98c-.93.19-1.78.43-2.53.71l1.51 3.55zm12.73.71c-.75-.28-1.6-.52-2.53-.71l1.02 4.25zM21 4.31C20.65 3.63 17.57 2 12 2S3.35 3.63 3 4.31v1.77C5.34 5.07 8.56 4.5 12 4.5s6.66.57 9 1.58z',
  }),
  'ParaglidingOutlined',
);
export const ParaglidingRoundedIcon = (props?: KTRawAttr) => {
  const s = _ParaglidingRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ParaglidingRoundedIcon = svg(
  svg('path', {
    d: 'M12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m5.95-3c-.52 0-.94.4-.99.92-.2 2.03-1.05 2.68-1.48 3.02C14.68 18.54 14 19 12 19s-2.68-.46-3.48-1.06c-.43-.34-1.28-.99-1.48-3.02-.05-.52-.47-.92-.99-.92-.59 0-1.06.51-1 1.09.22 2.08 1.07 3.47 2.24 4.41.5.4 1.1.7 1.7.9L9 24h6v-3.6c.6-.2 1.2-.5 1.7-.9 1.17-.94 2.03-2.32 2.24-4.41.07-.58-.41-1.09-.99-1.09M12 0C5.92 0 1 1.9 1 4.25v3.49c0 .81.88 1.26 1.56.83.14-.09.28-.18.44-.26L5 13h2l1.5-6.28c1.1-.14 2.28-.22 3.5-.22s2.4.08 3.5.22L17 13h2l2-4.69c.16.09.3.17.44.26.68.43 1.56-.02 1.56-.83V4.25C23 1.9 18.08 0 12 0M5.88 11.24 4.37 7.69c.75-.28 1.6-.52 2.53-.71zm12.24 0L17.1 6.98c.93.19 1.78.43 2.53.71z',
  }),
  'ParaglidingRounded',
);
export const ParaglidingSharpIcon = (props?: KTRawAttr) => {
  const s = _ParaglidingSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ParaglidingSharpIcon = svg(
  svg('path', {
    d: 'M12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m-3.48.94C8.04 17.55 7 16.76 7 14H5c0 2.7.93 4.41 2.3 5.5.5.4 1.1.7 1.7.9V24h6v-3.6c.6-.2 1.2-.5 1.7-.9 1.37-1.09 2.3-2.8 2.3-5.5h-2c0 2.76-1.04 3.55-1.52 3.94C14.68 18.54 14 19 12 19s-2.68-.46-3.48-1.06M12 0C5.92 0 1 1.9 1 4.25v3.49c0 .81.88 1.26 1.56.83.14-.09.28-.18.44-.26L5 13h2l1.5-6.28c1.1-.14 2.28-.22 3.5-.22s2.4.08 3.5.22L17 13h2l2-4.69c.16.09.3.17.44.26.68.43 1.56-.02 1.56-.83V4.25C23 1.9 18.08 0 12 0M5.88 11.24 4.37 7.69c.75-.28 1.6-.52 2.53-.71zm12.24 0L17.1 6.98c.93.19 1.78.43 2.53.71z',
  }),
  'ParaglidingSharp',
);
export const ParaglidingTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ParaglidingTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ParaglidingTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21 4.31C20.65 3.63 17.57 2 12 2S3.35 3.63 3 4.31v1.77C5.34 5.07 8.56 4.5 12 4.5s6.66.57 9 1.58z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.48.94C14.68 18.54 14 19 12 19s-2.68-.46-3.48-1.06C8.04 17.55 7 16.76 7 14H5c0 2.7.93 4.41 2.3 5.5.5.4 1.1.7 1.7.9V24h6v-3.6c.6-.2 1.2-.5 1.7-.9 1.37-1.09 2.3-2.8 2.3-5.5h-2c0 2.76-1.04 3.55-1.52 3.94M23 4.25v3.49c0 .8-.88 1.26-1.56.83-.14-.09-.28-.18-.44-.26L19 13h-2l-1.5-6.28c-1.1-.14-2.28-.22-3.5-.22s-2.4.08-3.5.22L7 13H5L3 8.31c-.16.08-.3.17-.44.26C1.88 9 1 8.55 1 7.74V4.25C1 1.9 5.92 0 12 0s11 1.9 11 4.25M6.9 6.98c-.93.19-1.78.43-2.53.71l1.51 3.55zm12.73.71c-.75-.28-1.6-.52-2.53-.71l1.02 4.25zM21 4.31C20.65 3.63 17.57 2 12 2S3.35 3.63 3 4.31v1.77C5.34 5.07 8.56 4.5 12 4.5s6.66.57 9 1.58z',
      },
      '1',
    ),
  ],
  'ParaglidingTwoTone',
);
export const ParkIcon = (props?: KTRawAttr) => {
  const s = _ParkIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ParkIcon = svg(svg('path', { d: 'M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.96v-4H21z' }), 'Park');
export const ParkOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ParkOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ParkOutlinedIcon = svg(
  svg('path', {
    d: 'M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.95v-4H21zM6.79 16l3.9-6H8.88l3.13-4.5 3.15 4.5h-1.9l4 6z',
  }),
  'ParkOutlined',
);
export const ParkRoundedIcon = (props?: KTRawAttr) => {
  const s = _ParkRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ParkRoundedIcon = svg(
  svg('path', {
    d: 'M16.96 12h.08c.81 0 1.28-.91.82-1.57l-5.08-7.25c-.4-.57-1.24-.57-1.64 0L6.1 10.43c-.46.66.02 1.57.83 1.57h.04l-2.9 4.46c-.44.66.04 1.54.84 1.54h5.08v2.02c0 1.09.89 1.98 1.98 1.98s1.98-.89 1.98-1.98V18h5.15c.8 0 1.28-.89.83-1.55z',
  }),
  'ParkRounded',
);
export const ParkSharpIcon = (props?: KTRawAttr) => {
  const s = _ParkSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ParkSharpIcon = svg(svg('path', { d: 'M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.96v-4H21z' }), 'ParkSharp');
export const ParkTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ParkTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ParkTwoToneIcon = svg(
  [
    svg('path', { d: 'M13.26 10h1.9l-3.15-4.5L8.88 10h1.81l-3.9 6h10.47z', opacity: '.3' }, '0'),
    svg(
      'path',
      { d: 'M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.95v-4H21zM6.79 16l3.9-6H8.88l3.13-4.5 3.15 4.5h-1.9l4 6z' },
      '1',
    ),
  ],
  'ParkTwoTone',
);
export const PartyModeIcon = (props?: KTRawAttr) => {
  const s = _PartyModeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PartyModeIcon = svg(
  svg('path', {
    d: 'M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8 3c1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1c-.06-.32-.1-.66-.1-1 0-2.76 2.24-5 5-5m0 10c-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08c.07.32.1.66.1 1 0 2.76-2.24 5-5 5',
  }),
  'PartyMode',
);
export const PartyModeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PartyModeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PartyModeOutlinedIcon = svg(
  svg('path', {
    d: 'M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h4.05l.59-.65L9.88 4h4.24l1.24 1.35.59.65H20zM9 12c0-1.66 1.34-3 3-3h3.98c-.92-1.21-2.35-2-3.98-2-2.76 0-5 2.24-5 5 0 .34.04.68.1 1h2.08c-.11-.31-.18-.65-.18-1m6 0c0 1.66-1.34 3-3 3H8.02c.92 1.21 2.35 2 3.98 2 2.76 0 5-2.24 5-5 0-.34-.03-.68-.1-1h-2.08c.11.31.18.65.18 1',
  }),
  'PartyModeOutlined',
);
export const PartyModeRoundedIcon = (props?: KTRawAttr) => {
  const s = _PartyModeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PartyModeRoundedIcon = svg(
  svg('path', {
    d: 'M20 4h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65H9.88c-.56 0-1.1.24-1.48.65L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8 3c1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1c-.06-.32-.1-.66-.1-1 0-2.76 2.24-5 5-5m0 10c-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08c.07.32.1.66.1 1 0 2.76-2.24 5-5 5',
  }),
  'PartyModeRounded',
);
export const PartyModeSharpIcon = (props?: KTRawAttr) => {
  const s = _PartyModeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PartyModeSharpIcon = svg(
  svg('path', {
    d: 'M22 4h-5.17L15 2H9L7.17 4H2v16h20zM12 7c1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1c-.06-.32-.1-.66-.1-1 0-2.76 2.24-5 5-5m0 10c-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08c.07.32.1.66.1 1 0 2.76-2.24 5-5 5',
  }),
  'PartyModeSharp',
);
export const PartyModeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PartyModeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PartyModeTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm15.95 6-.59-.65L14.12 4H9.88L8.65 5.35l-.6.65H4v12h16V6zM7 12c0-2.76 2.24-5 5-5 1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1c-.06-.32-.1-.66-.1-1m10 0c0 2.76-2.24 5-5 5-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08c.07.32.1.66.1 1',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h4.05l.59-.65L9.88 4h4.24l1.24 1.35.59.65H20zM9 12c0-1.66 1.34-3 3-3h3.98c-.92-1.21-2.35-2-3.98-2-2.76 0-5 2.24-5 5 0 .34.04.68.1 1h2.08c-.11-.31-.18-.65-.18-1m6 0c0 1.66-1.34 3-3 3H8.02c.92 1.21 2.35 2 3.98 2 2.76 0 5-2.24 5-5 0-.34-.03-.68-.1-1h-2.08c.11.31.18.65.18 1',
      },
      '1',
    ),
  ],
  'PartyModeTwoTone',
);
export const PasswordIcon = (props?: KTRawAttr) => {
  const s = _PasswordIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PasswordIcon = svg(
  svg('path', {
    d: 'M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23z',
  }),
  'Password',
);
export const PasswordOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PasswordOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PasswordOutlinedIcon = svg(
  svg('path', {
    d: 'M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23z',
  }),
  'PasswordOutlined',
);
export const PasswordRoundedIcon = (props?: KTRawAttr) => {
  const s = _PasswordRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PasswordRoundedIcon = svg(
  svg('path', {
    d: 'M3 17h18c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1m-.5-4.43c.36.21.82.08 1.03-.28l.47-.82.48.83c.21.36.67.48 1.03.28.36-.21.48-.66.28-1.02l-.49-.84h.95c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H5.3l.47-.82c.21-.36.09-.82-.27-1.03-.36-.2-.82-.08-1.03.28L4 8.47l-.47-.82c-.21-.36-.67-.48-1.03-.28-.36.21-.48.67-.27 1.03l.47.82h-.95c-.41 0-.75.34-.75.75s.34.75.75.75h.95l-.48.83c-.2.36-.08.82.28 1.02m8 0c.36.21.82.08 1.03-.28l.47-.82.48.83c.21.36.67.48 1.03.28.36-.21.48-.66.28-1.02l-.48-.83h.95c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.96l.47-.82c.21-.36.08-.82-.27-1.03-.36-.21-.82-.08-1.02.27l-.48.82-.47-.82c-.21-.36-.67-.48-1.02-.27-.36.21-.48.67-.27 1.03l.47.82h-.96c-.41-.01-.75.33-.75.74s.34.75.75.75h.95l-.48.83c-.2.36-.08.82.28 1.02M23 9.97c0-.41-.34-.75-.75-.75h-.95l.47-.82c.21-.36.08-.82-.27-1.03-.36-.21-.82-.08-1.02.27l-.48.83-.47-.82c-.21-.36-.67-.48-1.02-.27-.36.21-.48.67-.27 1.03l.47.82h-.95c-.42-.01-.76.33-.76.74s.34.75.75.75h.95l-.48.83c-.21.36-.08.82.28 1.02.36.21.82.08 1.03-.28l.47-.82.48.83c.21.36.67.48 1.03.28.36-.21.48-.66.28-1.02l-.48-.83h.95c.4-.01.74-.35.74-.76',
  }),
  'PasswordRounded',
);
export const PasswordSharpIcon = (props?: KTRawAttr) => {
  const s = _PasswordSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PasswordSharpIcon = svg(
  svg('path', {
    d: 'M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23z',
  }),
  'PasswordSharp',
);
export const PasswordTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PasswordTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PasswordTwoToneIcon = svg(
  svg('path', {
    d: 'M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23z',
  }),
  'PasswordTwoTone',
);
export const PatternIcon = (props?: KTRawAttr) => {
  const s = _PatternIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PatternIcon = svg(
  svg('path', {
    d: 'M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m2 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-.02 6c-.74 0-1.37.4-1.72 1h-2.54c-.34-.6-.98-1-1.72-1s-1.37.4-1.72 1H8.41l3.07-3.07c.17.04.34.07.52.07 1.1 0 2-.9 2-2 0-.18-.03-.35-.07-.51l3.56-3.56c.16.04.33.07.51.07 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .18.03.35.07.51l-3.56 3.56c-.16-.04-.33-.07-.51-.07-1.1 0-2 .9-2 2 0 .18.03.35.07.51l-3.56 3.56C6.35 16.03 6.18 16 6 16c-1.1 0-2 .9-2 2s.9 2 2 2c.74 0 1.37-.4 1.72-1h2.57c.34.6.98 1 1.72 1s1.37-.4 1.72-1h2.55c.34.6.98 1 1.72 1 1.1 0 2-.9 2-2-.02-1.1-.92-2-2.02-2',
  }),
  'Pattern',
);
export const PatternOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PatternOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PatternOutlinedIcon = svg(
  svg('path', {
    d: 'M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m2 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-.02 6c-.74 0-1.37.4-1.72 1h-2.54c-.34-.6-.98-1-1.72-1s-1.37.4-1.72 1H8.41l3.07-3.07c.17.04.34.07.52.07 1.1 0 2-.9 2-2 0-.18-.03-.35-.07-.51l3.56-3.56c.16.04.33.07.51.07 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .18.03.35.07.51l-3.56 3.56c-.16-.04-.33-.07-.51-.07-1.1 0-2 .9-2 2 0 .18.03.35.07.51l-3.56 3.56C6.35 16.03 6.18 16 6 16c-1.1 0-2 .9-2 2s.9 2 2 2c.74 0 1.37-.4 1.72-1h2.57c.34.6.98 1 1.72 1s1.37-.4 1.72-1h2.55c.34.6.98 1 1.72 1 1.1 0 2-.9 2-2-.02-1.1-.92-2-2.02-2',
  }),
  'PatternOutlined',
);
export const PatternRoundedIcon = (props?: KTRawAttr) => {
  const s = _PatternRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PatternRoundedIcon = svg(
  svg('path', {
    d: 'M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m2 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-.02 6c-.74 0-1.37.4-1.72 1h-2.54c-.34-.6-.98-1-1.72-1s-1.37.4-1.72 1H8.41l3.07-3.07c.17.04.34.07.52.07 1.1 0 2-.9 2-2 0-.18-.03-.35-.07-.51l3.56-3.56c.16.04.33.07.51.07 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .18.03.35.07.51l-3.56 3.56c-.16-.04-.33-.07-.51-.07-1.1 0-2 .9-2 2 0 .18.03.35.07.51l-3.56 3.56C6.35 16.03 6.18 16 6 16c-1.1 0-2 .9-2 2s.9 2 2 2c.74 0 1.37-.4 1.72-1h2.57c.34.6.98 1 1.72 1s1.37-.4 1.72-1h2.55c.34.6.98 1 1.72 1 1.1 0 2-.9 2-2-.02-1.1-.92-2-2.02-2',
  }),
  'PatternRounded',
);
export const PatternSharpIcon = (props?: KTRawAttr) => {
  const s = _PatternSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PatternSharpIcon = svg(
  svg('path', {
    d: 'M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m2 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-.02 6c-.74 0-1.37.4-1.72 1h-2.54c-.34-.6-.98-1-1.72-1s-1.37.4-1.72 1H8.41l3.07-3.07c.17.04.34.07.52.07 1.1 0 2-.9 2-2 0-.18-.03-.35-.07-.51l3.56-3.56c.16.04.33.07.51.07 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .18.03.35.07.51l-3.56 3.56c-.16-.04-.33-.07-.51-.07-1.1 0-2 .9-2 2 0 .18.03.35.07.51l-3.56 3.56C6.35 16.03 6.18 16 6 16c-1.1 0-2 .9-2 2s.9 2 2 2c.74 0 1.37-.4 1.72-1h2.57c.34.6.98 1 1.72 1s1.37-.4 1.72-1h2.55c.34.6.98 1 1.72 1 1.1 0 2-.9 2-2-.02-1.1-.92-2-2.02-2',
  }),
  'PatternSharp',
);
export const PatternTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PatternTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PatternTwoToneIcon = svg(
  svg('path', {
    d: 'M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m2 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-.02 6c-.74 0-1.37.4-1.72 1h-2.54c-.34-.6-.98-1-1.72-1s-1.37.4-1.72 1H8.41l3.07-3.07c.17.04.34.07.52.07 1.1 0 2-.9 2-2 0-.18-.03-.35-.07-.51l3.56-3.56c.16.04.33.07.51.07 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .18.03.35.07.51l-3.56 3.56c-.16-.04-.33-.07-.51-.07-1.1 0-2 .9-2 2 0 .18.03.35.07.51l-3.56 3.56C6.35 16.03 6.18 16 6 16c-1.1 0-2 .9-2 2s.9 2 2 2c.74 0 1.37-.4 1.72-1h2.57c.34.6.98 1 1.72 1s1.37-.4 1.72-1h2.55c.34.6.98 1 1.72 1 1.1 0 2-.9 2-2-.02-1.1-.92-2-2.02-2',
  }),
  'PatternTwoTone',
);
export const PauseIcon = (props?: KTRawAttr) => {
  const s = _PauseIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseIcon = svg(svg('path', { d: 'M6 19h4V5H6zm8-14v14h4V5z' }), 'Pause');
export const PauseCircleIcon = (props?: KTRawAttr) => {
  const s = _PauseCircleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseCircleIcon = svg(
  svg('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1 14H9V8h2zm4 0h-2V8h2z' }),
  'PauseCircle',
);
export const PauseCircleFilledIcon = (props?: KTRawAttr) => {
  const s = _PauseCircleFilledIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseCircleFilledIcon = svg(
  svg('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1 14H9V8h2zm4 0h-2V8h2z' }),
  'PauseCircleFilled',
);
export const PauseCircleFilledOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PauseCircleFilledOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseCircleFilledOutlinedIcon = svg(
  svg('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1 14H9V8h2zm4 0h-2V8h2z' }),
  'PauseCircleFilledOutlined',
);
export const PauseCircleFilledRoundedIcon = (props?: KTRawAttr) => {
  const s = _PauseCircleFilledRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseCircleFilledRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 14c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1m4 0c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1',
  }),
  'PauseCircleFilledRounded',
);
export const PauseCircleFilledSharpIcon = (props?: KTRawAttr) => {
  const s = _PauseCircleFilledSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseCircleFilledSharpIcon = svg(
  svg('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1 14H9V8h2zm4 0h-2V8h2z' }),
  'PauseCircleFilledSharp',
);
export const PauseCircleFilledTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PauseCircleFilledTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseCircleFilledTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m-1 12H9V8h2zm4 0h-2V8h2z', opacity: '.3' },
      '0',
    ),
    svg('path', { d: 'M13 8h2v8h-2zM9 8h2v8H9z' }, '1'),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
      },
      '2',
    ),
  ],
  'PauseCircleFilledTwoTone',
);
export const PauseCircleOutlineIcon = (props?: KTRawAttr) => {
  const s = _PauseCircleOutlineIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseCircleOutlineIcon = svg(
  svg('path', {
    d: 'M9 16h2V8H9zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m1-4h2V8h-2z',
  }),
  'PauseCircleOutline',
);
export const PauseCircleOutlineOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PauseCircleOutlineOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseCircleOutlineOutlinedIcon = svg(
  svg('path', {
    d: 'M9 16h2V8H9zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m1-4h2V8h-2z',
  }),
  'PauseCircleOutlineOutlined',
);
export const PauseCircleOutlineRoundedIcon = (props?: KTRawAttr) => {
  const s = _PauseCircleOutlineRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseCircleOutlineRoundedIcon = svg(
  svg('path', {
    d: 'M10 16c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1m2-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m2-4c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1',
  }),
  'PauseCircleOutlineRounded',
);
export const PauseCircleOutlineSharpIcon = (props?: KTRawAttr) => {
  const s = _PauseCircleOutlineSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseCircleOutlineSharpIcon = svg(
  svg('path', {
    d: 'M9 16h2V8H9zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m1-4h2V8h-2z',
  }),
  'PauseCircleOutlineSharp',
);
export const PauseCircleOutlineTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PauseCircleOutlineTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseCircleOutlineTwoToneIcon = svg(
  svg('path', {
    d: 'M13 8h2v8h-2zM9 8h2v8H9zm3 14c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10m0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8',
  }),
  'PauseCircleOutlineTwoTone',
);
export const PauseCircleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PauseCircleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseCircleOutlinedIcon = svg(
  svg('path', {
    d: 'M9 16h2V8H9zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m1-4h2V8h-2z',
  }),
  'PauseCircleOutlined',
);
export const PauseCircleRoundedIcon = (props?: KTRawAttr) => {
  const s = _PauseCircleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseCircleRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 14c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1m4 0c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1',
  }),
  'PauseCircleRounded',
);
export const PauseCircleSharpIcon = (props?: KTRawAttr) => {
  const s = _PauseCircleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseCircleSharpIcon = svg(
  svg('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1 14H9V8h2zm4 0h-2V8h2z' }),
  'PauseCircleSharp',
);
export const PauseCircleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PauseCircleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseCircleTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m-1 12H9V8h2zm4 0h-2V8h2z', opacity: '.3' },
      '0',
    ),
    svg('path', { d: 'M13 8h2v8h-2zM9 8h2v8H9z' }, '1'),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
      },
      '2',
    ),
  ],
  'PauseCircleTwoTone',
);
export const PauseOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PauseOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseOutlinedIcon = svg(svg('path', { d: 'M6 19h4V5H6zm8-14v14h4V5z' }), 'PauseOutlined');
export const PausePresentationIcon = (props?: KTRawAttr) => {
  const s = _PausePresentationIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PausePresentationIcon = svg(
  [
    svg(
      'path',
      { d: 'M21 19.1H3V5h18zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2' },
      '0',
    ),
    svg('path', { d: 'M9 8h2v8H9zm4 0h2v8h-2z' }, '1'),
  ],
  'PausePresentation',
);
export const PausePresentationOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PausePresentationOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PausePresentationOutlinedIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.1 0-2 .85-2 1.95v14c0 1.1.9 2.05 2 2.05h18c1.1 0 2-.95 2-2.05v-14C23 3.85 22.1 3 21 3m0 16H3V5h18zM9 8h2v8H9zm4 0h2v8h-2z',
  }),
  'PausePresentationOutlined',
);
export const PausePresentationRoundedIcon = (props?: KTRawAttr) => {
  const s = _PausePresentationRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PausePresentationRoundedIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 15c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1zM10 8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1V9c0-.55-.45-1-1-1m4 0c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1V9c0-.55-.45-1-1-1',
  }),
  'PausePresentationRounded',
);
export const PausePresentationSharpIcon = (props?: KTRawAttr) => {
  const s = _PausePresentationSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PausePresentationSharpIcon = svg(
  svg('path', { d: 'M1 3v18h22V3zm20 16H3V5h18zM9 8h2v8H9zm4 0h2v8h-2z' }),
  'PausePresentationSharp',
);
export const PausePresentationTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PausePresentationTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PausePresentationTwoToneIcon = svg(
  [
    svg('path', { d: 'M3 19h18V5H3zM13 8h2v8h-2zM9 8h2v8H9z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18zM9 8h2v8H9zm4 0h2v8h-2z',
      },
      '1',
    ),
  ],
  'PausePresentationTwoTone',
);
export const PauseRoundedIcon = (props?: KTRawAttr) => {
  const s = _PauseRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseRoundedIcon = svg(
  svg('path', {
    d: 'M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2m6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2',
  }),
  'PauseRounded',
);
export const PauseSharpIcon = (props?: KTRawAttr) => {
  const s = _PauseSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseSharpIcon = svg(svg('path', { d: 'M6 19h4V5H6zm8-14v14h4V5z' }), 'PauseSharp');
export const PauseTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PauseTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PauseTwoToneIcon = svg(svg('path', { d: 'M6 5h4v14H6zm8 0h4v14h-4z' }), 'PauseTwoTone');
export const PaymentIcon = (props?: KTRawAttr) => {
  const s = _PaymentIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaymentIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z',
  }),
  'Payment',
);
export const PaymentOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PaymentOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaymentOutlinedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z',
  }),
  'PaymentOutlined',
);
export const PaymentRoundedIcon = (props?: KTRawAttr) => {
  const s = _PaymentRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaymentRoundedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m-1 14H5c-.55 0-1-.45-1-1v-5h16v5c0 .55-.45 1-1 1m1-10H4V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1z',
  }),
  'PaymentRounded',
);
export const PaymentSharpIcon = (props?: KTRawAttr) => {
  const s = _PaymentSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaymentSharpIcon = svg(svg('path', { d: 'M22 4H2v16h20zm-2 14H4v-6h16zm0-10H4V6h16z' }), 'PaymentSharp');
export const PaymentTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PaymentTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaymentTwoToneIcon = svg(
  [
    svg('path', { d: 'M4 6h16v2H4zm0 6h16v6H4z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z',
      },
      '1',
    ),
  ],
  'PaymentTwoTone',
);
export const PaymentsIcon = (props?: KTRawAttr) => {
  const s = _PaymentsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaymentsIcon = svg(
  svg('path', {
    d: 'M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2m-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m13-6v11c0 1.1-.9 2-2 2H4v-2h17V7z',
  }),
  'Payments',
);
export const PaymentsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PaymentsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaymentsOutlinedIcon = svg(
  svg('path', {
    d: 'M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2m-2 0H3V6h14zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m13 0v11c0 1.1-.9 2-2 2H4v-2h17V7z',
  }),
  'PaymentsOutlined',
);
export const PaymentsRoundedIcon = (props?: KTRawAttr) => {
  const s = _PaymentsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaymentsRoundedIcon = svg(
  svg('path', {
    d: 'M23 8v10c0 1.1-.9 2-2 2H5c-.55 0-1-.45-1-1s.45-1 1-1h16V8c0-.55.45-1 1-1s1 .45 1 1M4 16c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h12c1.66 0 3 1.34 3 3v7c0 1.1-.9 2-2 2zm3-6c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3',
  }),
  'PaymentsRounded',
);
export const PaymentsSharpIcon = (props?: KTRawAttr) => {
  const s = _PaymentsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaymentsSharpIcon = svg(
  svg('path', { d: 'M23 7v13H4v-2h17V7zm-4 9H1V4h18zm-6-6c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3' }),
  'PaymentsSharp',
);
export const PaymentsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PaymentsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PaymentsTwoToneIcon = svg(
  [
    svg('path', { d: 'M17 6H3v8h14zm-7 7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3', opacity: '.3' }, '0'),
    svg('path', { d: 'M17 4H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M3 14V6h14v8z' }, '1'),
    svg(
      'path',
      { d: 'M10 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m13 0v11c0 1.1-.9 2-2 2H4v-2h17V7z' },
      '2',
    ),
  ],
  'PaymentsTwoTone',
);
export const PedalBikeIcon = (props?: KTRawAttr) => {
  const s = _PedalBikeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PedalBikeIcon = svg(
  svg('path', {
    d: 'm18.18 10-1.7-4.68C16.19 4.53 15.44 4 14.6 4H12v2h2.6l1.46 4h-4.81l-.36-1H12V7H7v2h1.75l1.82 5H9.9c-.44-2.23-2.31-3.88-4.65-3.99C2.45 9.87 0 12.2 0 15s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h4.2c.44 2.23 2.31 3.88 4.65 3.99 2.8.13 5.25-2.19 5.25-5 0-2.8-2.2-5-5-5h-.82zM7.82 16c-.4 1.17-1.49 2-2.82 2-1.68 0-3-1.32-3-3s1.32-3 3-3c1.33 0 2.42.83 2.82 2H5v2zm6.28-2h-1.4l-.73-2H15c-.44.58-.76 1.25-.9 2m4.9 4c-1.68 0-3-1.32-3-3 0-.93.41-1.73 1.05-2.28l.96 2.64 1.88-.68-.97-2.67c.03 0 .06-.01.09-.01 1.68 0 3 1.32 3 3s-1.33 3-3.01 3',
  }),
  'PedalBike',
);
export const PedalBikeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PedalBikeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PedalBikeOutlinedIcon = svg(
  svg('path', {
    d: 'm18.18 10-1.7-4.68C16.19 4.53 15.44 4 14.6 4H12v2h2.6l1.46 4h-4.81l-.36-1H12V7H7v2h1.75l1.82 5H9.9c-.44-2.23-2.31-3.88-4.65-3.99C2.45 9.87 0 12.2 0 15s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h4.2c.44 2.23 2.31 3.88 4.65 3.99 2.8.13 5.25-2.19 5.25-5 0-2.8-2.2-5-5-5h-.82zM7.82 16c-.4 1.17-1.49 2-2.82 2-1.68 0-3-1.32-3-3s1.32-3 3-3c1.33 0 2.42.83 2.82 2H5v2zm6.28-2h-1.4l-.73-2H15c-.44.58-.76 1.25-.9 2m4.9 4c-1.68 0-3-1.32-3-3 0-.93.41-1.73 1.05-2.28l.96 2.64 1.88-.68-.97-2.67c.03 0 .06-.01.09-.01 1.68 0 3 1.32 3 3s-1.33 3-3.01 3',
  }),
  'PedalBikeOutlined',
);
export const PedalBikeRoundedIcon = (props?: KTRawAttr) => {
  const s = _PedalBikeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PedalBikeRoundedIcon = svg(
  svg('path', {
    d: 'm18.18 10-1.7-4.68C16.19 4.53 15.44 4 14.6 4H13c-.55 0-1 .45-1 1s.45 1 1 1h1.6l1.46 4h-4.81l-.36-1h.09c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1h.75l1.82 5H9.9c-.44-2.23-2.31-3.88-4.65-3.99C2.45 9.87 0 12.2 0 15s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h4.2c.44 2.23 2.31 3.88 4.65 3.99 2.8.13 5.25-2.19 5.25-5 0-2.8-2.2-5-5-5h-.82zM7.82 16c-.42 1.23-1.6 2.08-3.02 1.99-1.49-.09-2.73-1.35-2.8-2.85C1.93 13.39 3.27 12 5 12c1.33 0 2.42.83 2.82 2H6c-.55 0-1 .45-1 1s.45 1 1 1zm6.28-2h-1.4l-.73-2H15c-.44.58-.76 1.25-.9 2m4.78 4c-1.54-.06-2.84-1.37-2.88-2.92-.02-.96.39-1.8 1.05-2.36l.62 1.7c.19.52.76.79 1.28.6s.79-.76.6-1.28l-.63-1.73.01-.01c1.72-.04 3.08 1.29 3.08 3-.01 1.72-1.39 3.06-3.13 3',
  }),
  'PedalBikeRounded',
);
export const PedalBikeSharpIcon = (props?: KTRawAttr) => {
  const s = _PedalBikeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PedalBikeSharpIcon = svg(
  svg('path', {
    d: 'M18.18 10 16 4h-4v2h2.6l1.46 4h-4.81l-.36-1H12V7H7v2h1.75l1.82 5H9.9c-.44-2.23-2.31-3.88-4.65-3.99C2.45 9.87 0 12.2 0 15s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h4.2c.44 2.23 2.31 3.88 4.65 3.99 2.8.13 5.25-2.19 5.25-5 0-2.8-2.2-5-5-5h-.82zM7.82 16c-.4 1.17-1.49 2-2.82 2-1.68 0-3-1.32-3-3s1.32-3 3-3c1.33 0 2.42.83 2.82 2H5v2zm6.28-2h-1.4l-.73-2H15c-.44.58-.76 1.25-.9 2m4.9 4c-1.68 0-3-1.32-3-3 0-.93.41-1.73 1.05-2.28l.96 2.64 1.88-.68-.97-2.67c.03 0 .06-.01.09-.01 1.68 0 3 1.32 3 3s-1.33 3-3.01 3',
  }),
  'PedalBikeSharp',
);
export const PedalBikeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PedalBikeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PedalBikeTwoToneIcon = svg(
  svg('path', {
    d: 'm18.18 10-1.7-4.68C16.19 4.53 15.44 4 14.6 4H12v2h2.6l1.46 4h-4.81l-.36-1H12V7H7v2h1.75l1.82 5H9.9c-.44-2.23-2.31-3.88-4.65-3.99C2.45 9.87 0 12.2 0 15s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h4.2c.44 2.23 2.31 3.88 4.65 3.99 2.8.13 5.25-2.19 5.25-5 0-2.8-2.2-5-5-5h-.82zM7.82 16c-.4 1.17-1.49 2-2.82 2-1.68 0-3-1.32-3-3s1.32-3 3-3c1.33 0 2.42.83 2.82 2H5v2zm6.28-2h-1.4l-.73-2H15c-.44.58-.76 1.25-.9 2m4.9 4c-1.68 0-3-1.32-3-3 0-.93.41-1.73 1.05-2.28l.96 2.64 1.88-.68-.97-2.67c.03 0 .06-.01.09-.01 1.68 0 3 1.32 3 3s-1.33 3-3.01 3',
  }),
  'PedalBikeTwoTone',
);
export const PendingIcon = (props?: KTRawAttr) => {
  const s = _PendingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PendingIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'Pending',
);
export const PendingActionsIcon = (props?: KTRawAttr) => {
  const s = _PendingActionsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PendingActionsIcon = svg(
  svg('path', {
    d: 'M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85zM18 3h-3.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H6c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h6.11c-.59-.57-1.07-1.25-1.42-2H6V5h2v3h8V5h2v5.08c.71.1 1.38.31 2 .6V5c0-1.1-.9-2-2-2m-6 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'PendingActions',
);
export const PendingActionsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PendingActionsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PendingActionsOutlinedIcon = svg(
  svg('path', {
    d: 'M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85zM18 3h-3.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H6c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h6.11c-.59-.57-1.07-1.25-1.42-2H6V5h2v3h8V5h2v5.08c.71.1 1.38.31 2 .6V5c0-1.1-.9-2-2-2m-6 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'PendingActionsOutlined',
);
export const PendingActionsRoundedIcon = (props?: KTRawAttr) => {
  const s = _PendingActionsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PendingActionsRoundedIcon = svg(
  svg('path', {
    d: 'M18 3h-3.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H6c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h6.11c-.59-.57-1.07-1.25-1.42-2H6V5h2v1c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V5h2v5.08c.71.1 1.38.31 2 .6V5c0-1.1-.9-2-2-2m-6 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m5 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.29 7-1.65-1.65c-.09-.09-.15-.22-.15-.35v-2.49c0-.28.22-.5.5-.5s.5.22.5.5v2.29l1.5 1.5c.2.2.2.51 0 .71-.19.19-.5.19-.7-.01',
  }),
  'PendingActionsRounded',
);
export const PendingActionsSharpIcon = (props?: KTRawAttr) => {
  const s = _PendingActionsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PendingActionsSharpIcon = svg(
  svg('path', {
    d: 'M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85zM20 3h-5.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H4v19h8.11c-.59-.57-1.07-1.25-1.42-2H6V5h2v3h8V5h2v5.08c.71.1 1.38.31 2 .6zm-8 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'PendingActionsSharp',
);
export const PendingActionsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PendingActionsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PendingActionsTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M18.65 19.35 16.5 17.2V14h1v2.79l1.85 1.85zM17 10c.34 0 .67.03 1 .08V5h-2v3H8V5H6v15h4.68c-.43-.91-.68-1.92-.68-3 0-3.87 3.13-7 7-7m-5-5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85zM18 3h-3.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H6c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h6.11c-.59-.57-1.07-1.25-1.42-2H6V5h2v3h8V5h2v5.08c.71.1 1.38.31 2 .6V5c0-1.1-.9-2-2-2m-6 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
      },
      '1',
    ),
  ],
  'PendingActionsTwoTone',
);
export const PendingOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PendingOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PendingOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
      },
      '0',
    ),
    svg('circle', { cx: '7', cy: '12', r: '1.5' }, '1'),
    svg('circle', { cx: '12', cy: '12', r: '1.5' }, '2'),
    svg('circle', { cx: '17', cy: '12', r: '1.5' }, '3'),
  ],
  'PendingOutlined',
);
export const PendingRoundedIcon = (props?: KTRawAttr) => {
  const s = _PendingRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PendingRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'PendingRounded',
);
export const PendingSharpIcon = (props?: KTRawAttr) => {
  const s = _PendingSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PendingSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'PendingSharp',
);
export const PendingTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PendingTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PendingTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m-5 9.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
      },
      '1',
    ),
    svg('circle', { cx: '7', cy: '12', r: '1.5' }, '2'),
    svg('circle', { cx: '12', cy: '12', r: '1.5' }, '3'),
    svg('circle', { cx: '17', cy: '12', r: '1.5' }, '4'),
  ],
  'PendingTwoTone',
);
export const PentagonIcon = (props?: KTRawAttr) => {
  const s = _PentagonIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PentagonIcon = svg(svg('path', { d: 'm2 9 4 12h12l4-12-10-7z' }), 'Pentagon');
export const PentagonOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PentagonOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PentagonOutlinedIcon = svg(
  svg('path', { d: 'M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44zM2 9l4 12h12l4-12-10-7z' }),
  'PentagonOutlined',
);
export const PentagonRoundedIcon = (props?: KTRawAttr) => {
  const s = _PentagonRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PentagonRoundedIcon = svg(
  svg('path', {
    d: 'm2.47 10.42 3.07 9.22c.28.81 1.04 1.36 1.9 1.36h9.12c.86 0 1.63-.55 1.9-1.37l3.07-9.22c.28-.84-.03-1.76-.75-2.27L13.15 2.8c-.69-.48-1.61-.48-2.29 0L3.22 8.14c-.72.51-1.03 1.44-.75 2.28',
  }),
  'PentagonRounded',
);
export const PentagonSharpIcon = (props?: KTRawAttr) => {
  const s = _PentagonSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PentagonSharpIcon = svg(svg('path', { d: 'm2 9 4 12h12l4-12-10-7z' }), 'PentagonSharp');
export const PentagonTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PentagonTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PentagonTwoToneIcon = svg(
  [
    svg('path', { d: 'M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44z', opacity: '.3' }, '0'),
    svg('path', { d: 'M19.63 9.78 16.56 19H7.44L4.37 9.78 12 4.44zM2 9l4 12h12l4-12-10-7z' }, '1'),
  ],
  'PentagonTwoTone',
);
export const PeopleIcon = (props?: KTRawAttr) => {
  const s = _PeopleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PeopleIcon = svg(
  svg('path', {
    d: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5',
  }),
  'People',
);
export const PeopleAltIcon = (props?: KTRawAttr) => {
  const s = _PeopleAltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PeopleAltIcon = svg(
  [
    svg(
      'path',
      { fillRule: 'evenodd', d: 'M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87' },
      '0',
    ),
    svg('circle', { cx: '9', cy: '8', r: '4', fillRule: 'evenodd' }, '1'),
    svg(
      'path',
      {
        fillRule: 'evenodd',
        d: 'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24m-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4',
      },
      '2',
    ),
  ],
  'PeopleAlt',
);
export const PeopleAltOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PeopleAltOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PeopleAltOutlinedIcon = svg(
  svg('path', {
    d: 'M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24m-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2z',
  }),
  'PeopleAltOutlined',
);
export const PeopleAltRoundedIcon = (props?: KTRawAttr) => {
  const s = _PeopleAltRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PeopleAltRoundedIcon = svg(
  [
    svg(
      'path',
      {
        fillRule: 'evenodd',
        d: 'M16.67 13.13C18.04 14.06 19 15.32 19 17v3h3c.55 0 1-.45 1-1v-2c0-2.18-3.57-3.47-6.33-3.87',
      },
      '0',
    ),
    svg('circle', { cx: '9', cy: '8', r: '4', fillRule: 'evenodd' }, '1'),
    svg(
      'path',
      {
        fillRule: 'evenodd',
        d: 'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24m-6 1c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4',
      },
      '2',
    ),
  ],
  'PeopleAltRounded',
);
export const PeopleAltSharpIcon = (props?: KTRawAttr) => {
  const s = _PeopleAltSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PeopleAltSharpIcon = svg(
  [
    svg(
      'path',
      { fillRule: 'evenodd', d: 'M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87' },
      '0',
    ),
    svg('circle', { cx: '9', cy: '8', r: '4', fillRule: 'evenodd' }, '1'),
    svg(
      'path',
      {
        fillRule: 'evenodd',
        d: 'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24m-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4',
      },
      '2',
    ),
  ],
  'PeopleAltSharp',
);
export const PeopleAltTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PeopleAltTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PeopleAltTwoToneIcon = svg(
  [
    svg('circle', { cx: '9', cy: '8', r: '2', opacity: '.3' }, '0'),
    svg('path', { d: 'M9 15c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24m-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2z',
      },
      '2',
    ),
  ],
  'PeopleAltTwoTone',
);
export const PeopleOutlineIcon = (props?: KTRawAttr) => {
  const s = _PeopleOutlineIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PeopleOutlineIcon = svg(
  svg('path', {
    d: 'M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25m-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12m0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5m0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2',
  }),
  'PeopleOutline',
);
export const PeopleOutlineOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PeopleOutlineOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PeopleOutlineOutlinedIcon = svg(
  svg('path', {
    d: 'M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5M4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12m0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7m7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44M15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35',
  }),
  'PeopleOutlineOutlined',
);
export const PeopleOutlineRoundedIcon = (props?: KTRawAttr) => {
  const s = _PeopleOutlineRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PeopleOutlineRoundedIcon = svg(
  svg('path', {
    d: 'M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12m0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7m0 6.75c-2.34 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-.75c0-2.33-4.66-3.5-7-3.5M4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25zm11.7-3.19c1.16.84 1.96 1.96 1.96 3.44V19h3c.55 0 1-.45 1-1v-.75c0-2.02-3.5-3.17-5.96-3.44M15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35',
  }),
  'PeopleOutlineRounded',
);
export const PeopleOutlineSharpIcon = (props?: KTRawAttr) => {
  const s = _PeopleOutlineSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PeopleOutlineSharpIcon = svg(
  svg('path', {
    d: 'M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12m0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7m0 6.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5M4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25zm11.7-3.19c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44M15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35',
  }),
  'PeopleOutlineSharp',
);
export const PeopleOutlineTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PeopleOutlineTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PeopleOutlineTwoToneIcon = svg(
  [
    svg('circle', { cx: '9', cy: '8.5', r: '1.5', opacity: '.3' }, '0'),
    svg('path', { d: 'M4.34 17h9.32c-.84-.58-2.87-1.25-4.66-1.25s-3.82.67-4.66 1.25', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12m0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7m0 6.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5M4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25zm11.7-3.19c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44M15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35',
      },
      '2',
    ),
  ],
  'PeopleOutlineTwoTone',
);
export const PeopleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PeopleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PeopleOutlinedIcon = svg(
  svg('path', {
    d: 'M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5M4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12m0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7m7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44M15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35',
  }),
  'PeopleOutlined',
);
export const PeopleRoundedIcon = (props?: KTRawAttr) => {
  const s = _PeopleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PeopleRoundedIcon = svg(
  svg('path', {
    d: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5',
  }),
  'PeopleRounded',
);
export const PeopleSharpIcon = (props?: KTRawAttr) => {
  const s = _PeopleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PeopleSharpIcon = svg(
  svg('path', {
    d: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5',
  }),
  'PeopleSharp',
);
export const PeopleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PeopleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PeopleTwoToneIcon = svg(
  [
    svg('circle', { cx: '9', cy: '8.5', r: '1.5', opacity: '.3' }, '0'),
    svg('path', { d: 'M4.34 17h9.32c-.84-.58-2.87-1.25-4.66-1.25s-3.82.67-4.66 1.25', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12m0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7m0 6.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5M4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25zm11.7-3.19c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44M15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35',
      },
      '2',
    ),
  ],
  'PeopleTwoTone',
);
export const PercentIcon = (props?: KTRawAttr) => {
  const s = _PercentIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PercentIcon = svg(
  svg('path', {
    d: 'M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4 4 5.57 4 7.5 5.57 11 7.5 11m0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6M4.0025 18.5832 18.59 3.9955l1.4142 1.4143L5.4167 19.9974zM16.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'Percent',
);
export const PercentOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PercentOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PercentOutlinedIcon = svg(
  svg('path', {
    d: 'M7.5 4C5.57 4 4 5.57 4 7.5S5.57 11 7.5 11 11 9.43 11 7.5 9.43 4 7.5 4m0 5C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9m9 4c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5M5.41 20 4 18.59 18.59 4 20 5.41z',
  }),
  'PercentOutlined',
);
export const PercentRoundedIcon = (props?: KTRawAttr) => {
  const s = _PercentRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PercentRoundedIcon = svg(
  svg('path', {
    d: 'M7.5 4C5.57 4 4 5.57 4 7.5S5.57 11 7.5 11 11 9.43 11 7.5 9.43 4 7.5 4m0 5C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9m9 4c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m2.79-13.29c.39.39.39 1.02 0 1.41L6.12 19.29c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41L17.88 4.71c.39-.39 1.02-.39 1.41 0',
  }),
  'PercentRounded',
);
export const PercentSharpIcon = (props?: KTRawAttr) => {
  const s = _PercentSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PercentSharpIcon = svg(
  svg('path', {
    d: 'M7.5 4C5.57 4 4 5.57 4 7.5S5.57 11 7.5 11 11 9.43 11 7.5 9.43 4 7.5 4m0 5C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9m9 4c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5M5.41 20 4 18.59 18.59 4 20 5.41z',
  }),
  'PercentSharp',
);
export const PercentTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PercentTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PercentTwoToneIcon = svg(
  svg('path', {
    d: 'M7.5 4C5.57 4 4 5.57 4 7.5S5.57 11 7.5 11 11 9.43 11 7.5 9.43 4 7.5 4m0 5C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9m9 4c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5M5.41 20 4 18.59 18.59 4 20 5.41z',
  }),
  'PercentTwoTone',
);
export const PermCameraMicIcon = (props?: KTRawAttr) => {
  const s = _PermCameraMicIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermCameraMicIcon = svg(
  svg('path', {
    d: 'M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2z',
  }),
  'PermCameraMic',
);
export const PermCameraMicOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PermCameraMicOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermCameraMicOutlinedIcon = svg(
  svg('path', {
    d: 'M12 6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2V8c0-1.1-.9-2-2-2m8-1h-3.17l-1.86-2H8.96L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 14h-7v-1.09c2.83-.48 5-2.94 5-5.91h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6c0 2.97 2.17 5.43 5 5.91V19H4V7h4.21l.59-.65L10.04 5h4.24l1.24 1.35.59.65H20z',
  }),
  'PermCameraMicOutlined',
);
export const PermCameraMicRoundedIcon = (props?: KTRawAttr) => {
  const s = _PermCameraMicRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermCameraMicRoundedIcon = svg(
  svg('path', {
    d: 'M20 5h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65H9.88c-.56 0-1.1.24-1.48.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.45-.42-4.41-2.32-4.89-4.75-.12-.61.38-1.16.99-1.16.49 0 .88.35.98.83C8.47 15.64 10.07 17 12 17s3.53-1.36 3.91-3.17c.1-.48.5-.83.98-.83.61 0 1.11.55.99 1.16-.48 2.43-2.44 4.34-4.89 4.75V21h7c1.1 0 2-.9 2-2V7C22 5.9 21.1 5 20 5m-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2z',
  }),
  'PermCameraMicRounded',
);
export const PermCameraMicSharpIcon = (props?: KTRawAttr) => {
  const s = _PermCameraMicSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermCameraMicSharpIcon = svg(
  svg('path', {
    d: 'M22 5h-5.17L15 3H9L7.17 5H2v16h9v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h9zm-8 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2z',
  }),
  'PermCameraMicSharp',
);
export const PermCameraMicTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PermCameraMicTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermCameraMicTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm16.11 7-.59-.65L14.28 5h-4.24L8.81 6.35l-.6.65H4v12h7v-1.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V19h7V7zM14 12c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-1.1.9-2 2-2s2 .9 2 2z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2V8c0-1.1-.9-2-2-2m8-1h-3.17l-1.86-2H8.96L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 14h-7v-1.09c2.83-.48 5-2.94 5-5.91h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6c0 2.97 2.17 5.43 5 5.91V19H4V7h4.21l.59-.65L10.04 5h4.24l1.24 1.35.59.65H20z',
      },
      '1',
    ),
  ],
  'PermCameraMicTwoTone',
);
export const PermContactCalendarIcon = (props?: KTRawAttr) => {
  const s = _PermContactCalendarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermContactCalendarIcon = svg(
  svg('path', {
    d: 'M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1z',
  }),
  'PermContactCalendar',
);
export const PermContactCalendarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PermContactCalendarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermContactCalendarOutlinedIcon = svg(
  svg('path', {
    d: 'M20.84 4.22c-.05-.12-.11-.23-.18-.34-.14-.21-.33-.4-.54-.54-.11-.07-.22-.13-.34-.18-.24-.1-.5-.16-.78-.16h-1V1h-2v2H8V1H6v2H5c-.42 0-.8.13-1.12.34-.21.14-.4.33-.54.54-.07.11-.13.22-.18.34-.1.24-.16.5-.16.78v14c0 1.1.89 2 2 2h14c.28 0 .54-.06.78-.16.12-.05.23-.11.34-.18.21-.14.4-.33.54-.54.21-.32.34-.71.34-1.12V5c0-.28-.06-.54-.16-.78M5 19V5h14v14zm7-6.12c-2.03 0-6 1.08-6 3.58V18h12v-1.53c0-2.51-3.97-3.59-6-3.59M8.31 16c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12zM12 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
  }),
  'PermContactCalendarOutlined',
);
export const PermContactCalendarRoundedIcon = (props?: KTRawAttr) => {
  const s = _PermContactCalendarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermContactCalendarRoundedIcon = svg(
  svg('path', {
    d: 'M19 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H8V2c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1z',
  }),
  'PermContactCalendarRounded',
);
export const PermContactCalendarSharpIcon = (props?: KTRawAttr) => {
  const s = _PermContactCalendarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermContactCalendarSharpIcon = svg(
  svg('path', {
    d: 'M21 3h-3V1h-2v2H8V1H6v2H3v18h18zm-9 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1z',
  }),
  'PermContactCalendarSharp',
);
export const PermContactCalendarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PermContactCalendarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermContactCalendarTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M16 5H5v14h14V5zm-4 1c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m6 12H6v-1.53c0-2.5 3.97-3.58 6-3.58s6 1.08 6 3.58z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20.84 4.22c-.05-.12-.11-.23-.18-.34-.14-.21-.33-.4-.54-.54-.11-.07-.22-.13-.34-.18-.24-.1-.5-.16-.78-.16h-1V1h-2v2H8V1H6v2H5c-.42 0-.8.13-1.12.34-.21.14-.4.33-.54.54-.07.11-.13.22-.18.34-.1.24-.16.5-.16.78v14c0 1.1.89 2 2 2h14c.28 0 .54-.06.78-.16.12-.05.23-.11.34-.18.21-.14.4-.33.54-.54.21-.32.34-.71.34-1.12V5c0-.28-.06-.54-.16-.78M19 19H5V5h14zm-7-6.12c-2.03 0-6 1.08-6 3.58V18h12v-1.53c0-2.51-3.97-3.59-6-3.59M8.31 16c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12zM12 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
      },
      '1',
    ),
  ],
  'PermContactCalendarTwoTone',
);
export const PermDataSettingIcon = (props?: KTRawAttr) => {
  const s = _PermDataSettingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermDataSettingIcon = svg(
  svg('path', {
    d: 'M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5m3.71 7.99c.02-.16.04-.32.04-.49s-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49s.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'PermDataSetting',
);
export const PermDataSettingOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PermDataSettingOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermDataSettingOutlinedIcon = svg(
  svg('path', {
    d: 'M17.99 11.57H20V0L0 20h11.56v-2H4.83L17.99 4.83zm5.78 8.75-1.07-.83c.02-.16.04-.32.04-.49s-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49s.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32m-4.78.18c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'PermDataSettingOutlined',
);
export const PermDataSettingRoundedIcon = (props?: KTRawAttr) => {
  const s = _PermDataSettingRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermDataSettingRoundedIcon = svg(
  svg('path', {
    d: 'M18.99 11.5c.34 0 .68.03 1.01.07V2.42c0-.89-1.08-1.34-1.71-.71L1.71 18.29c-.63.63-.19 1.71.7 1.71h9.15c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5m3.71 7.99c.02-.16.04-.32.04-.49s-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49s.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'PermDataSettingRounded',
);
export const PermDataSettingSharpIcon = (props?: KTRawAttr) => {
  const s = _PermDataSettingSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermDataSettingSharpIcon = svg(
  svg('path', {
    d: 'M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5m3.71 7.99c.02-.16.04-.32.04-.49s-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49s.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'PermDataSettingSharp',
);
export const PermDataSettingTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PermDataSettingTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermDataSettingTwoToneIcon = svg(
  svg('path', {
    d: 'M17.99 11.57H20V0L0 20h11.56v-2H4.83L17.99 4.83zm5.78 8.75-1.07-.83c.02-.16.04-.32.04-.49s-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49s.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32m-4.78.18c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'PermDataSettingTwoTone',
);
export const PermDeviceInformationIcon = (props?: KTRawAttr) => {
  const s = _PermDeviceInformationIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermDeviceInformationIcon = svg(
  svg('path', {
    d: 'M13 7h-2v2h2zm0 4h-2v6h2zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z',
  }),
  'PermDeviceInformation',
);
export const PermDeviceInformationOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PermDeviceInformationOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermDeviceInformationOutlinedIcon = svg(
  svg('path', {
    d: 'M11 7h2v2h-2zm0 4h2v6h-2zm6-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zM7 4V3h10v1z',
  }),
  'PermDeviceInformationOutlined',
);
export const PermDeviceInformationRoundedIcon = (props?: KTRawAttr) => {
  const s = _PermDeviceInformationRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermDeviceInformationRoundedIcon = svg(
  svg('path', {
    d: 'M13 7h-2v2h2zm-1 4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1m5-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z',
  }),
  'PermDeviceInformationRounded',
);
export const PermDeviceInformationSharpIcon = (props?: KTRawAttr) => {
  const s = _PermDeviceInformationSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermDeviceInformationSharpIcon = svg(
  svg('path', { d: 'M13 7h-2v2h2zm0 4h-2v6h2zM5 1v22h14V1zm12 18H7V5h10z' }),
  'PermDeviceInformationSharp',
);
export const PermDeviceInformationTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PermDeviceInformationTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermDeviceInformationTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 20h10v1H7zM7 3h10v1H7z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M11 7h2v2h-2zm0 4h2v6h-2zm6-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10z',
      },
      '1',
    ),
  ],
  'PermDeviceInformationTwoTone',
);
export const PermIdentityIcon = (props?: KTRawAttr) => {
  const s = _PermIdentityIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermIdentityIcon = svg(
  svg('path', {
    d: 'M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4',
  }),
  'PermIdentity',
);
export const PermIdentityOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PermIdentityOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermIdentityOutlinedIcon = svg(
  svg('path', {
    d: 'M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4',
  }),
  'PermIdentityOutlined',
);
export const PermIdentityRoundedIcon = (props?: KTRawAttr) => {
  const s = _PermIdentityRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermIdentityRoundedIcon = svg(
  svg('path', {
    d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 7c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4m6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2z',
  }),
  'PermIdentityRounded',
);
export const PermIdentitySharpIcon = (props?: KTRawAttr) => {
  const s = _PermIdentitySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermIdentitySharpIcon = svg(
  svg('path', {
    d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2z',
  }),
  'PermIdentitySharp',
);
export const PermIdentityTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PermIdentityTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermIdentityTwoToneIcon = svg(
  [
    svg('circle', { cx: '12', cy: '8', r: '2', opacity: '.3' }, '0'),
    svg('path', { d: 'M12 15c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2z',
      },
      '2',
    ),
  ],
  'PermIdentityTwoTone',
);
export const PermMediaIcon = (props?: KTRawAttr) => {
  const s = _PermMediaIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermMediaIcon = svg(
  svg('path', {
    d: 'M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M7 15l4.5-6 3.5 4.51 2.5-3.01L21 15z',
  }),
  'PermMedia',
);
export const PermMediaOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PermMediaOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermMediaOutlinedIcon = svg(
  svg('path', {
    d: 'M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2zm5 9h14l-3.5-4.5-2.5 3.01L11.5 9zM22 4h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 12H6V4h5.17l1.41 1.41.59.59H22z',
  }),
  'PermMediaOutlined',
);
export const PermMediaRoundedIcon = (props?: KTRawAttr) => {
  const s = _PermMediaRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermMediaRoundedIcon = svg(
  [
    svg('path', { d: 'M19 19H3V7c0-.55-.45-1-1-1s-1 .45-1 1v12c0 1.1.9 2 2 2h16c.55 0 1-.45 1-1s-.45-1-1-1' }, '0'),
    svg(
      'path',
      {
        d: 'M21 4h-7l-1.41-1.41c-.38-.38-.89-.59-1.42-.59H7c-1.1 0-1.99.9-1.99 2L5 15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-3 9h-8c-.41 0-.65-.47-.4-.8l1.38-1.83c.2-.27.6-.27.8 0L13 12l2.22-2.97c.2-.27.6-.27.8 0l2.38 3.17c.25.33.01.8-.4.8',
      },
      '1',
    ),
  ],
  'PermMediaRounded',
);
export const PermMediaSharpIcon = (props?: KTRawAttr) => {
  const s = _PermMediaSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermMediaSharpIcon = svg(
  svg('path', { d: 'M2 6H0v16h20v-2H2zm22-2H14l-2-2H4v16h20zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15z' }),
  'PermMediaSharp',
);
export const PermMediaTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PermMediaTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermMediaTwoToneIcon = svg(
  [
    svg('path', { d: 'm13.17 6-.59-.59L11.17 4H6v12h16V6zm4.33 4.5L21 15H7l4.5-6 3.5 4.51z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2zm5 9h14l-3.5-4.5-2.5 3.01L11.5 9zM22 4h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 12H6V4h5.17l1.41 1.41.59.59H22z',
      },
      '1',
    ),
  ],
  'PermMediaTwoTone',
);
export const PermPhoneMsgIcon = (props?: KTRawAttr) => {
  const s = _PermPhoneMsgIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermPhoneMsgIcon = svg(
  svg('path', {
    d: 'M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M12 3v10l3-3h6V3z',
  }),
  'PermPhoneMsg',
);
export const PermPhoneMsgOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PermPhoneMsgOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermPhoneMsgOutlinedIcon = svg(
  svg('path', {
    d: 'M20 15.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M5.03 5h1.5c.07.88.22 1.75.46 2.59L5.79 8.8c-.41-1.21-.67-2.48-.76-3.8M19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45zM12 3v10l3-3h6V3zm7 5h-5V5h5z',
  }),
  'PermPhoneMsgOutlined',
);
export const PermPhoneMsgRoundedIcon = (props?: KTRawAttr) => {
  const s = _PermPhoneMsgRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermPhoneMsgRoundedIcon = svg(
  svg('path', {
    d: 'M20 3h-7c-.55 0-1 .45-1 1v9l3-3h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m-.77 12.26-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98',
  }),
  'PermPhoneMsgRounded',
);
export const PermPhoneMsgSharpIcon = (props?: KTRawAttr) => {
  const s = _PermPhoneMsgSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermPhoneMsgSharpIcon = svg(
  svg('path', {
    d: 'M12 3v10l3-3h6V3zm1.21 14.37c-2.83-1.44-5.15-3.75-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61z',
  }),
  'PermPhoneMsgSharp',
);
export const PermPhoneMsgTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PermPhoneMsgTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermPhoneMsgTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M15.2 18.21c1.21.41 2.48.67 3.8.76v-1.5c-.88-.07-1.75-.22-2.6-.45zM6.54 5h-1.5c.09 1.32.35 2.59.75 3.79l1.2-1.21c-.24-.83-.39-1.7-.45-2.58M14 8h5V5h-5z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 15.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M5.03 5h1.5c.07.88.22 1.75.46 2.59L5.79 8.8c-.41-1.21-.67-2.48-.76-3.8M19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45zM12 3v10l3-3h6V3zm7 5h-5V5h5z',
      },
      '1',
    ),
  ],
  'PermPhoneMsgTwoTone',
);
export const PermScanWifiIcon = (props?: KTRawAttr) => {
  const s = _PermScanWifiIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermScanWifiIcon = svg(
  svg('path', { d: 'M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3m1 13h-2v-6h2zm-2-8V6h2v2z' }),
  'PermScanWifi',
);
export const PermScanWifiOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PermScanWifiOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermScanWifiOutlinedIcon = svg(
  svg('path', {
    d: 'M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3M2.92 7.65C5.8 5.85 8.74 5 12 5c3.25 0 6.18.85 9.08 2.67L12 18.83zM11 10h2v6h-2zm0-4h2v2h-2z',
  }),
  'PermScanWifiOutlined',
);
export const PermScanWifiRoundedIcon = (props?: KTRawAttr) => {
  const s = _PermScanWifiRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermScanWifiRoundedIcon = svg(
  svg('path', {
    d: 'M12 3C7.41 3 3.86 4.53.89 6.59c-.49.33-.59 1-.22 1.46l9.78 12.04c.8.98 2.3.99 3.1 0l9.78-12.02c.37-.46.27-1.13-.22-1.46C20.14 4.54 16.59 3 12 3m0 13c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m-1-8V6h2v2z',
  }),
  'PermScanWifiRounded',
);
export const PermScanWifiSharpIcon = (props?: KTRawAttr) => {
  const s = _PermScanWifiSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermScanWifiSharpIcon = svg(
  svg('path', { d: 'M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3m1 13h-2v-6h2zm-2-8V6h2v2z' }),
  'PermScanWifiSharp',
);
export const PermScanWifiTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PermScanWifiTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PermScanWifiTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 5c-3.26 0-6.2.85-9.08 2.65L12 18.83l9.08-11.16C18.18 5.85 15.25 5 12 5m1 11h-2v-6h2zm-2-8V6h2v2z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3M2.92 7.65C5.8 5.85 8.74 5 12 5c3.25 0 6.18.85 9.08 2.67L12 18.83zM11 10h2v6h-2zm0-4h2v2h-2z',
      },
      '1',
    ),
  ],
  'PermScanWifiTwoTone',
);
export const PersonIcon = (props?: KTRawAttr) => {
  const s = _PersonIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonIcon = svg(
  svg('path', {
    d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4',
  }),
  'Person',
);
export const Person2Icon = (props?: KTRawAttr) => {
  const s = _Person2Icon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Person2Icon = svg(
  svg('path', {
    d: 'M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M9.78 12h4.44c1.21 0 2.14-1.06 1.98-2.26l-.32-2.45C15.57 5.39 13.92 4 12 4S8.43 5.39 8.12 7.29L7.8 9.74c-.16 1.2.77 2.26 1.98 2.26',
  }),
  'Person2',
);
export const Person2OutlinedIcon = (props?: KTRawAttr) => {
  const s = _Person2OutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Person2OutlinedIcon = svg(
  svg('path', {
    d: 'M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M18 18H6v-.78c0-.38.2-.72.52-.88C7.71 15.73 9.63 15 12 15s4.29.73 5.48 1.34c.32.16.52.5.52.88zm-8.22-6h4.44c1.21 0 2.14-1.06 1.98-2.26l-.32-2.45C15.57 5.39 13.92 4 12 4S8.43 5.39 8.12 7.29L7.8 9.74c-.16 1.2.77 2.26 1.98 2.26m.32-4.41C10.26 6.67 11.06 6 12 6s1.74.67 1.9 1.59l.32 2.41H9.78z',
  }),
  'Person2Outlined',
);
export const Person2RoundedIcon = (props?: KTRawAttr) => {
  const s = _Person2RoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Person2RoundedIcon = svg(
  svg('path', {
    d: 'M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V18c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-.78c0-1.12-.61-2.15-1.61-2.66M9.78 12h4.44c1.21 0 2.14-1.06 1.98-2.26l-.32-2.45C15.57 5.39 13.92 4 12 4S8.43 5.39 8.12 7.29L7.8 9.74c-.16 1.2.77 2.26 1.98 2.26',
  }),
  'Person2Rounded',
);
export const Person2SharpIcon = (props?: KTRawAttr) => {
  const s = _Person2SharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Person2SharpIcon = svg(
  svg('path', {
    d: 'M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M9.78 12h4.44c1.21 0 2.14-1.06 1.98-2.26l-.32-2.45C15.57 5.39 13.92 4 12 4S8.43 5.39 8.12 7.29L7.8 9.74c-.16 1.2.77 2.26 1.98 2.26',
  }),
  'Person2Sharp',
);
export const Person2TwoToneIcon = (props?: KTRawAttr) => {
  const s = _Person2TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Person2TwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M13.9 7.59C13.74 6.67 12.94 6 12 6s-1.74.67-1.9 1.59L9.78 10h4.44zm3.58 8.75C16.29 15.73 14.37 15 12 15s-4.29.73-5.48 1.34c-.32.16-.52.5-.52.88V18h12v-.78c0-.38-.2-.72-.52-.88',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M18 18H6v-.78c0-.38.2-.72.52-.88C7.71 15.73 9.63 15 12 15s4.29.73 5.48 1.34c.32.16.52.5.52.88zm-8.22-6h4.44c1.21 0 2.14-1.06 1.98-2.26l-.32-2.45C15.57 5.39 13.92 4 12 4S8.43 5.39 8.12 7.29L7.8 9.74c-.16 1.2.77 2.26 1.98 2.26m.32-4.41C10.26 6.67 11.06 6 12 6s1.74.67 1.9 1.59l.32 2.41H9.78z',
      },
      '1',
    ),
  ],
  'Person2TwoTone',
);
export const Person3Icon = (props?: KTRawAttr) => {
  const s = _Person3Icon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Person3Icon = svg(
  svg('path', {
    d: 'M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M10 12h4c1.66 0 3-1.34 3-3 0-.73-.27-1.4-.71-1.92.13-.33.21-.7.21-1.08 0-1.25-.77-2.32-1.86-2.77C14 2.48 13.06 2 12 2s-2 .48-2.64 1.23C8.27 3.68 7.5 4.75 7.5 6c0 .38.08.75.21 1.08C7.27 7.6 7 8.27 7 9c0 1.66 1.34 3 3 3',
  }),
  'Person3',
);
export const Person3OutlinedIcon = (props?: KTRawAttr) => {
  const s = _Person3OutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Person3OutlinedIcon = svg(
  svg('path', {
    d: 'M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M18 18H6v-.78c0-.38.2-.72.52-.88C7.71 15.73 9.63 15 12 15s4.29.73 5.48 1.34c.32.16.52.5.52.88zm-8-6h4c1.66 0 3-1.34 3-3 0-.73-.27-1.4-.71-1.92.13-.33.21-.7.21-1.08 0-1.25-.77-2.32-1.86-2.77C14 2.48 13.06 2 12 2s-2 .48-2.64 1.23C8.27 3.68 7.5 4.75 7.5 6c0 .38.08.75.21 1.08C7.27 7.6 7 8.27 7 9c0 1.66 1.34 3 3 3m-.76-3.63c.87-1.04.26-2 .26-2.37 0-.41.24-.77.62-.92.29-.12.55-.31.75-.54.17-.21.55-.54 1.13-.54s.96.33 1.13.53c.2.24.46.42.75.54.38.16.62.52.62.93 0 .37-.61 1.33.26 2.37.58.69.04 1.63-.76 1.63h-4c-.8 0-1.34-.94-.76-1.63',
  }),
  'Person3Outlined',
);
export const Person3RoundedIcon = (props?: KTRawAttr) => {
  const s = _Person3RoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Person3RoundedIcon = svg(
  svg('path', {
    d: 'M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V18c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-.78c0-1.12-.61-2.15-1.61-2.66M10 12h4c1.66 0 3-1.34 3-3 0-.73-.27-1.4-.71-1.92.13-.33.21-.7.21-1.08 0-1.25-.77-2.32-1.86-2.77C14 2.48 13.06 2 12 2s-2 .48-2.64 1.23C8.27 3.68 7.5 4.75 7.5 6c0 .38.08.75.21 1.08C7.27 7.6 7 8.27 7 9c0 1.66 1.34 3 3 3',
  }),
  'Person3Rounded',
);
export const Person3SharpIcon = (props?: KTRawAttr) => {
  const s = _Person3SharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Person3SharpIcon = svg(
  svg('path', {
    d: 'M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M10 12h4c1.66 0 3-1.34 3-3 0-.73-.27-1.4-.71-1.92.13-.33.21-.7.21-1.08 0-1.25-.77-2.32-1.86-2.77C14 2.48 13.06 2 12 2s-2 .48-2.64 1.23C8.27 3.68 7.5 4.75 7.5 6c0 .38.08.75.21 1.08C7.27 7.6 7 8.27 7 9c0 1.66 1.34 3 3 3',
  }),
  'Person3Sharp',
);
export const Person3TwoToneIcon = (props?: KTRawAttr) => {
  const s = _Person3TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Person3TwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M10 10h4c.8 0 1.34-.94.76-1.63-.87-1.04-.26-2-.26-2.37 0-.41-.24-.77-.62-.92-.29-.12-.55-.31-.75-.54C12.96 4.33 12.58 4 12 4s-.96.33-1.13.53c-.2.24-.46.42-.75.54-.38.16-.62.52-.62.93 0 .37.61 1.33-.26 2.37C8.66 9.06 9.2 10 10 10m7.48 6.34C16.29 15.73 14.37 15 12 15s-4.29.73-5.48 1.34c-.32.16-.52.5-.52.88V18h12v-.78c0-.38-.2-.72-.52-.88',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M18 18H6v-.78c0-.38.2-.72.52-.88C7.71 15.73 9.63 15 12 15s4.29.73 5.48 1.34c.32.16.52.5.52.88zm-8-6h4c1.66 0 3-1.34 3-3 0-.73-.27-1.4-.71-1.92.13-.33.21-.7.21-1.08 0-1.25-.77-2.32-1.86-2.77C14 2.48 13.06 2 12 2s-2 .48-2.64 1.23C8.27 3.68 7.5 4.75 7.5 6c0 .38.08.75.21 1.08C7.27 7.6 7 8.27 7 9c0 1.66 1.34 3 3 3m-.76-3.63c.87-1.04.26-2 .26-2.37 0-.41.24-.77.62-.92.29-.12.55-.31.75-.54.17-.21.55-.54 1.13-.54s.96.33 1.13.53c.2.24.46.42.75.54.38.16.62.52.62.93 0 .37-.61 1.33.26 2.37.58.69.04 1.63-.76 1.63h-4c-.8 0-1.34-.94-.76-1.63',
      },
      '1',
    ),
  ],
  'Person3TwoTone',
);
export const Person4Icon = (props?: KTRawAttr) => {
  const s = _Person4Icon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Person4Icon = svg(
  svg('path', {
    d: 'M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M12 12c2.21 0 4-1.79 4-4V4.5c0-.83-.67-1.5-1.5-1.5-.52 0-.98.27-1.25.67-.27-.4-.73-.67-1.25-.67s-.98.27-1.25.67c-.27-.4-.73-.67-1.25-.67C8.67 3 8 3.67 8 4.5V8c0 2.21 1.79 4 4 4',
  }),
  'Person4',
);
export const Person4OutlinedIcon = (props?: KTRawAttr) => {
  const s = _Person4OutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Person4OutlinedIcon = svg(
  svg('path', {
    d: 'M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M18 18H6v-.78c0-.38.2-.72.52-.88C7.71 15.73 9.63 15 12 15s4.29.73 5.48 1.34c.32.16.52.5.52.88zm-6-6c2.21 0 4-1.79 4-4V4.5c0-.83-.67-1.5-1.5-1.5-.52 0-.98.27-1.25.67-.27-.4-.73-.67-1.25-.67s-.98.27-1.25.67c-.27-.4-.73-.67-1.25-.67C8.67 3 8 3.67 8 4.5V8c0 2.21 1.79 4 4 4m-2-6.5h4V8c0 1.1-.9 2-2 2s-2-.9-2-2z',
  }),
  'Person4Outlined',
);
export const Person4RoundedIcon = (props?: KTRawAttr) => {
  const s = _Person4RoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Person4RoundedIcon = svg(
  svg('path', {
    d: 'M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V18c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-.78c0-1.12-.61-2.15-1.61-2.66M12 12c2.21 0 4-1.79 4-4V4.5c0-.83-.67-1.5-1.5-1.5-.52 0-.98.27-1.25.67-.27-.4-.73-.67-1.25-.67s-.98.27-1.25.67c-.27-.4-.73-.67-1.25-.67C8.67 3 8 3.67 8 4.5V8c0 2.21 1.79 4 4 4',
  }),
  'Person4Rounded',
);
export const Person4SharpIcon = (props?: KTRawAttr) => {
  const s = _Person4SharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Person4SharpIcon = svg(
  svg('path', {
    d: 'M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M12 12c2.21 0 4-1.79 4-4V4.5c0-.83-.67-1.5-1.5-1.5-.52 0-.98.27-1.25.67-.27-.4-.73-.67-1.25-.67s-.98.27-1.25.67c-.27-.4-.73-.67-1.25-.67C8.67 3 8 3.67 8 4.5V8c0 2.21 1.79 4 4 4',
  }),
  'Person4Sharp',
);
export const Person4TwoToneIcon = (props?: KTRawAttr) => {
  const s = _Person4TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Person4TwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 10c1.1 0 2-.9 2-2V5.5h-4V8c0 1.1.9 2 2 2m5.48 6.34C16.29 15.73 14.37 15 12 15s-4.29.73-5.48 1.34c-.32.16-.52.5-.52.88V18h12v-.78c0-.38-.2-.72-.52-.88',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M18 18H6v-.78c0-.38.2-.72.52-.88C7.71 15.73 9.63 15 12 15s4.29.73 5.48 1.34c.32.16.52.5.52.88zm-6-6c2.21 0 4-1.79 4-4V4.5c0-.83-.67-1.5-1.5-1.5-.52 0-.98.27-1.25.67-.27-.4-.73-.67-1.25-.67s-.98.27-1.25.67c-.27-.4-.73-.67-1.25-.67C8.67 3 8 3.67 8 4.5V8c0 2.21 1.79 4 4 4m-2-6.5h4V8c0 1.1-.9 2-2 2s-2-.9-2-2z',
      },
      '1',
    ),
  ],
  'Person4TwoTone',
);
export const PersonAddIcon = (props?: KTRawAttr) => {
  const s = _PersonAddIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddIcon = svg(
  svg('path', {
    d: 'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m-9-2V7H4v3H1v2h3v3h2v-3h3v-2zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4',
  }),
  'PersonAdd',
);
export const PersonAddAltIcon = (props?: KTRawAttr) => {
  const s = _PersonAddAltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddAltIcon = svg(
  svg('path', {
    d: 'M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4m-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4m2 0c.2-.71 3.3-2 6-2 2.69 0 5.78 1.28 6 2zm17-3v-3h3v-2h-3V7h-2v3h-3v2h3v3z',
  }),
  'PersonAddAlt',
);
export const PersonAddAlt1Icon = (props?: KTRawAttr) => {
  const s = _PersonAddAlt1Icon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddAlt1Icon = svg(
  svg('path', {
    d: 'M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4m2 2v2h3v3h2v-3h3v-2h-3V7h-2v3zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4',
  }),
  'PersonAddAlt1',
);
export const PersonAddAlt1OutlinedIcon = (props?: KTRawAttr) => {
  const s = _PersonAddAlt1OutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddAlt1OutlinedIcon = svg(
  svg('path', {
    d: 'M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4m-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4m2 0c.2-.71 3.3-2 6-2 2.69 0 5.78 1.28 6 2zm17-3v-3h3v-2h-3V7h-2v3h-3v2h3v3z',
  }),
  'PersonAddAlt1Outlined',
);
export const PersonAddAlt1RoundedIcon = (props?: KTRawAttr) => {
  const s = _PersonAddAlt1RoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddAlt1RoundedIcon = svg(
  [
    svg('circle', { cx: '9', cy: '8', r: '4' }, '0'),
    svg(
      'path',
      {
        d: 'M9 14c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4m11-4V7h-2v3h-3v2h3v3h2v-3h3v-2z',
      },
      '1',
    ),
  ],
  'PersonAddAlt1Rounded',
);
export const PersonAddAlt1SharpIcon = (props?: KTRawAttr) => {
  const s = _PersonAddAlt1SharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddAlt1SharpIcon = svg(
  svg('path', {
    d: 'M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4m2 2v2h3v3h2v-3h3v-2h-3V7h-2v3zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4',
  }),
  'PersonAddAlt1Sharp',
);
export const PersonAddAlt1TwoToneIcon = (props?: KTRawAttr) => {
  const s = _PersonAddAlt1TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddAlt1TwoToneIcon = svg(
  [
    svg('circle', { cx: '9', cy: '8', r: '2', opacity: '.3' }, '0'),
    svg('path', { d: 'M9 16c-2.7 0-5.8 1.29-6 2h12c-.22-.72-3.31-2-6-2', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M9 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m-6 4c.2-.71 3.3-2 6-2 2.69 0 5.78 1.28 6 2zm17-8V7h-2v3h-3v2h3v3h2v-3h3v-2zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2',
      },
      '2',
    ),
  ],
  'PersonAddAlt1TwoTone',
);
export const PersonAddAltOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PersonAddAltOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddAltOutlinedIcon = svg(
  svg('path', {
    d: 'M20 9V6h-2v3h-3v2h3v3h2v-3h3V9zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m6.39 8.56C13.71 13.7 11.53 13 9 13s-4.71.7-6.39 1.56C1.61 15.07 1 16.1 1 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M15 18H3v-.78c0-.38.2-.72.52-.88C4.71 15.73 6.63 15 9 15s4.29.73 5.48 1.34c.32.16.52.5.52.88z',
  }),
  'PersonAddAltOutlined',
);
export const PersonAddAltRoundedIcon = (props?: KTRawAttr) => {
  const s = _PersonAddAltRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddAltRoundedIcon = svg(
  svg('path', {
    d: 'M15.39 14.56C13.71 13.7 11.53 13 9 13s-4.71.7-6.39 1.56C1.61 15.07 1 16.1 1 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m11-3V7c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1z',
  }),
  'PersonAddAltRounded',
);
export const PersonAddAltSharpIcon = (props?: KTRawAttr) => {
  const s = _PersonAddAltSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddAltSharpIcon = svg(
  svg('path', {
    d: 'M15.39 14.56C13.71 13.7 11.53 13 9 13s-4.71.7-6.39 1.56C1.61 15.07 1 16.1 1 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m11-3V6h-2v3h-3v2h3v3h2v-3h3V9z',
  }),
  'PersonAddAltSharp',
);
export const PersonAddAltTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PersonAddAltTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddAltTwoToneIcon = svg(
  [
    svg('circle', { cx: '9', cy: '8', r: '2', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M14.48 16.34C13.29 15.73 11.37 15 9 15s-4.29.73-5.48 1.34c-.32.16-.52.5-.52.88V18h12v-.78c0-.38-.2-.72-.52-.88',
        opacity: '.3',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m11 3V6h-2v3h-3v2h3v3h2v-3h3V9zm-4.61 5.56C13.71 13.7 11.53 13 9 13s-4.71.7-6.39 1.56C1.61 15.07 1 16.1 1 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M15 18H3v-.78c0-.38.2-.72.52-.88C4.71 15.73 6.63 15 9 15s4.29.73 5.48 1.34c.32.16.52.5.52.88z',
      },
      '2',
    ),
  ],
  'PersonAddAltTwoTone',
);
export const PersonAddDisabledIcon = (props?: KTRawAttr) => {
  const s = _PersonAddDisabledIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddDisabledIcon = svg(
  [
    svg('circle', { cx: '15', cy: '8', r: '4' }, '0'),
    svg(
      'path',
      {
        d: 'M23 20v-2c0-2.3-4.1-3.7-6.9-3.9l6 5.9zm-11.6-5.5C9.2 15.1 7 16.3 7 18v2h9.9l4 4 1.3-1.3-21-20.9L0 3.1l4 4V10H1v2h3v3h2v-3h2.9zM6 10v-.9l.9.9z',
      },
      '1',
    ),
  ],
  'PersonAddDisabled',
);
export const PersonAddDisabledOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PersonAddDisabledOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddDisabledOutlinedIcon = svg(
  svg('path', {
    d: 'M15 6c1.1 0 2 .9 2 2 0 .99-.73 1.82-1.67 1.97l-2.31-2.31C13.19 6.72 14.01 6 15 6m0-2c-2.21 0-4 1.79-4 4 0 .18.03.35.05.52l3.43 3.43c.17.02.34.05.52.05 2.21 0 4-1.79 4-4s-1.79-4-4-4m1.69 10.16L22.53 20H23v-2c0-2.14-3.56-3.5-6.31-3.84m-3.68 1.97L14.88 18H9c.08-.24.88-1.01 2.91-1.57zM1.41 1.71 0 3.12l4 4V10H1v2h3v3h2v-3h2.88l2.51 2.51C9.19 15.11 7 16.3 7 18v2h9.88l4 4 1.41-1.41zM6 10v-.88l.88.88z',
  }),
  'PersonAddDisabledOutlined',
);
export const PersonAddDisabledRoundedIcon = (props?: KTRawAttr) => {
  const s = _PersonAddDisabledRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddDisabledRoundedIcon = svg(
  svg('path', {
    d: 'M14.48 11.95c.17.02.34.05.52.05 2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4c0 .18.03.35.05.52zm2.21 2.21 5.74 5.74c.33-.17.57-.5.57-.9v-1c0-2.14-3.56-3.5-6.31-3.84M2.12 2.42a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L4 7.12V10H2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2.88l2.51 2.51C9.19 15.11 7 16.3 7 18v1c0 .55.45 1 1 1h8.88l3.29 3.29c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41zM6 10v-.88l.88.88z',
  }),
  'PersonAddDisabledRounded',
);
export const PersonAddDisabledSharpIcon = (props?: KTRawAttr) => {
  const s = _PersonAddDisabledSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddDisabledSharpIcon = svg(
  svg('path', {
    d: 'M14.48 11.95c.17.02.34.05.52.05 2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4c0 .18.03.35.05.52zm2.21 2.21L22.53 20H23v-2c0-2.14-3.56-3.5-6.31-3.84M0 3.12l4 4V10H1v2h3v3h2v-3h2.88l2.51 2.51C9.19 15.11 7 16.3 7 18v2h9.88l4 4 1.41-1.41L1.41 1.71zM6.88 10H6v-.88z',
  }),
  'PersonAddDisabledSharp',
);
export const PersonAddDisabledTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PersonAddDisabledTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddDisabledTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M9 18h5.87L13 16.13l-1.1.3C9.89 16.99 9.08 17.76 9 18m8-10c0-1.1-.9-2-2-2-.99 0-1.81.72-1.97 1.67l2.31 2.31C16.27 9.82 17 8.99 17 8',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M14.48 11.95c.17.02.34.05.52.05 2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4c0 .18.03.35.05.52zM15 6c1.1 0 2 .9 2 2 0 .99-.73 1.82-1.67 1.97l-2.31-2.31C13.19 6.72 14.01 6 15 6m1.69 8.16L22.53 20H23v-2c0-2.14-3.56-3.5-6.31-3.84M0 3.12l4 4V10H1v2h3v3h2v-3h2.88l2.51 2.51C9.19 15.11 7 16.3 7 18v2h9.88l4 4 1.41-1.41L1.41 1.71zm13.01 13.01L14.88 18H9c.08-.24.88-1.01 2.91-1.57zM6 9.12l.88.88H6z',
      },
      '1',
    ),
  ],
  'PersonAddDisabledTwoTone',
);
export const PersonAddOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PersonAddOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddOutlinedIcon = svg(
  svg('path', {
    d: 'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z',
  }),
  'PersonAddOutlined',
);
export const PersonAddRoundedIcon = (props?: KTRawAttr) => {
  const s = _PersonAddRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddRoundedIcon = svg(
  svg('path', {
    d: 'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m-9-2V8c0-.55-.45-1-1-1s-1 .45-1 1v2H2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1zm9 4c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4',
  }),
  'PersonAddRounded',
);
export const PersonAddSharpIcon = (props?: KTRawAttr) => {
  const s = _PersonAddSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddSharpIcon = svg(
  svg('path', {
    d: 'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m-9-2V7H4v3H1v2h3v3h2v-3h3v-2zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4',
  }),
  'PersonAddSharp',
);
export const PersonAddTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PersonAddTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonAddTwoToneIcon = svg(
  [
    svg('path', { d: 'M15 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2', opacity: '.3' }, '0'),
    svg('circle', { cx: '15', cy: '8', r: '2', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z',
      },
      '2',
    ),
  ],
  'PersonAddTwoTone',
);
export const PersonOffIcon = (props?: KTRawAttr) => {
  const s = _PersonOffIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonOffIcon = svg(
  svg('path', {
    d: 'M8.65 5.82C9.36 4.72 10.6 4 12 4c2.21 0 4 1.79 4 4 0 1.4-.72 2.64-1.82 3.35zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76zm1.19 4.02L2.81 2.81 1.39 4.22l8.89 8.89c-1.81.23-3.39.79-4.67 1.45-1 .51-1.61 1.54-1.61 2.66V20h13.17l2.61 2.61z',
  }),
  'PersonOff',
);
export const PersonOffOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PersonOffOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonOffOutlinedIcon = svg(
  svg('path', {
    d: 'm20 17.17-3.37-3.38c.64.22 1.23.48 1.77.76.97.51 1.58 1.52 1.6 2.62m1.19 4.02-1.41 1.41-2.61-2.6H4v-2.78c0-1.12.61-2.15 1.61-2.66 1.29-.66 2.87-1.22 4.67-1.45L1.39 4.22 2.8 2.81zM15.17 18l-3-3H12c-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V18zM12 6c1.1 0 2 .9 2 2 0 .86-.54 1.59-1.3 1.87l1.48 1.48C15.28 10.64 16 9.4 16 8c0-2.21-1.79-4-4-4-1.4 0-2.64.72-3.35 1.82l1.48 1.48C10.41 6.54 11.14 6 12 6',
  }),
  'PersonOffOutlined',
);
export const PersonOffRoundedIcon = (props?: KTRawAttr) => {
  const s = _PersonOffRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonOffRoundedIcon = svg(
  svg('path', {
    d: 'M8.65 5.82C9.36 4.72 10.6 4 12 4c2.21 0 4 1.79 4 4 0 1.4-.72 2.64-1.82 3.35zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76zm.49 3.32L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l8.18 8.18c-1.82.23-3.41.8-4.7 1.46C4.6 15.08 4 16.11 4 17.22V20h13.17l1.9 1.9c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41',
  }),
  'PersonOffRounded',
);
export const PersonOffSharpIcon = (props?: KTRawAttr) => {
  const s = _PersonOffSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonOffSharpIcon = svg(
  svg('path', {
    d: 'M8.65 5.82C9.36 4.72 10.6 4 12 4c2.21 0 4 1.79 4 4 0 1.4-.72 2.64-1.82 3.35zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76zm1.19 4.02L2.81 2.81 1.39 4.22l8.89 8.89c-1.81.23-3.39.79-4.67 1.45-1 .51-1.61 1.54-1.61 2.66V20h13.17l2.61 2.61z',
  }),
  'PersonOffSharp',
);
export const PersonOffTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PersonOffTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonOffTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm15.17 18-3-3H12c-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V18zM10.13 7.3C10.41 6.54 11.14 6 12 6c1.1 0 2 .9 2 2 0 .86-.54 1.59-1.3 1.87',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm20 17.17-3.37-3.38c.64.22 1.23.48 1.77.76.97.51 1.58 1.52 1.6 2.62m1.19 4.02-1.41 1.41-2.61-2.6H4v-2.78c0-1.12.61-2.15 1.61-2.66 1.29-.66 2.87-1.22 4.67-1.45L1.39 4.22 2.8 2.81zM15.17 18l-3-3H12c-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V18zM12 6c1.1 0 2 .9 2 2 0 .86-.54 1.59-1.3 1.87l1.48 1.48C15.28 10.64 16 9.4 16 8c0-2.21-1.79-4-4-4-1.4 0-2.64.72-3.35 1.82l1.48 1.48C10.41 6.54 11.14 6 12 6',
      },
      '1',
    ),
  ],
  'PersonOffTwoTone',
);
export const PersonOutlineIcon = (props?: KTRawAttr) => {
  const s = _PersonOutlineIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonOutlineIcon = svg(
  svg('path', {
    d: 'M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4',
  }),
  'PersonOutline',
);
export const PersonOutlineOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PersonOutlineOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonOutlineOutlinedIcon = svg(
  svg('path', {
    d: 'M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4',
  }),
  'PersonOutlineOutlined',
);
export const PersonOutlineRoundedIcon = (props?: KTRawAttr) => {
  const s = _PersonOutlineRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonOutlineRoundedIcon = svg(
  svg('path', {
    d: 'M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4',
  }),
  'PersonOutlineRounded',
);
export const PersonOutlineSharpIcon = (props?: KTRawAttr) => {
  const s = _PersonOutlineSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonOutlineSharpIcon = svg(
  svg('path', {
    d: 'M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4',
  }),
  'PersonOutlineSharp',
);
export const PersonOutlineTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PersonOutlineTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonOutlineTwoToneIcon = svg(
  [
    svg('circle', { cx: '12', cy: '8', r: '2.1', opacity: '.3' }, '0'),
    svg('path', { d: 'M12 14.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M12 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m6.1 5.1H5.9V17c0-.64 3.13-2.1 6.1-2.1s6.1 1.46 6.1 2.1zM12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6.1c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1',
      },
      '2',
    ),
  ],
  'PersonOutlineTwoTone',
);
export const PersonOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PersonOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonOutlinedIcon = svg(
  svg('path', {
    d: 'M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4',
  }),
  'PersonOutlined',
);
export const PersonPinIcon = (props?: KTRawAttr) => {
  const s = _PersonPinIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonPinIcon = svg(
  svg('path', {
    d: 'M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9m0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22',
  }),
  'PersonPin',
);
export const PersonPinCircleIcon = (props?: KTRawAttr) => {
  const s = _PersonPinCircleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonPinCircleIcon = svg(
  svg('path', {
    d: 'M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7m0 2c1.1 0 2 .9 2 2 0 1.11-.9 2-2 2s-2-.89-2-2c0-1.1.9-2 2-2m0 10c-1.67 0-3.14-.85-4-2.15.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05c-.86 1.3-2.33 2.15-4 2.15',
  }),
  'PersonPinCircle',
);
export const PersonPinCircleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PersonPinCircleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonPinCircleOutlinedIcon = svg(
  svg('path', {
    d: 'M12 11c1.33 0 4 .67 4 2v.16c-.97 1.12-2.4 1.84-4 1.84s-3.03-.72-4-1.84V13c0-1.33 2.67-2 4-2m0-1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m6 .2C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14M12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2',
  }),
  'PersonPinCircleOutlined',
);
export const PersonPinCircleRoundedIcon = (props?: KTRawAttr) => {
  const s = _PersonPinCircleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonPinCircleRoundedIcon = svg(
  svg('path', {
    d: 'M12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.22.36.32.97.32 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2M7.69 12.49C8.88 11.56 10.37 11 12 11s3.12.56 4.31 1.49C15.45 13.98 13.85 15 12 15s-3.45-1.02-4.31-2.51M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2',
  }),
  'PersonPinCircleRounded',
);
export const PersonPinCircleSharpIcon = (props?: KTRawAttr) => {
  const s = _PersonPinCircleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonPinCircleSharpIcon = svg(
  svg('path', {
    d: 'M12 11c-1.33 0-4 .67-4 2v.16c.97 1.12 2.4 1.84 4 1.84s3.03-.72 4-1.84V13c0-1.33-2.67-2-4-2m0-1c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0-8c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2',
  }),
  'PersonPinCircleSharp',
);
export const PersonPinCircleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PersonPinCircleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonPinCircleTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        fillOpacity: '.3',
        d: 'M18.5 10.2c0 2.57-2.1 5.79-6.16 9.51l-.34.3-.34-.31C7.6 15.99 5.5 12.77 5.5 10.2c0-3.84 2.82-6.7 6.5-6.7s6.5 2.85 6.5 6.7',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 11c1.33 0 4 .67 4 2v.16c-.97 1.12-2.4 1.84-4 1.84s-3.03-.72-4-1.84V13c0-1.33 2.67-2 4-2m0-1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m6 .2C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14M12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2',
      },
      '1',
    ),
  ],
  'PersonPinCircleTwoTone',
);
export const PersonPinOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PersonPinOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonPinOutlinedIcon = svg(
  svg('path', {
    d: 'M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14zm-7-7c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m6 8.58c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V17h12zM8.48 15c.74-.51 2.23-1 3.52-1s2.78.49 3.52 1z',
  }),
  'PersonPinOutlined',
);
export const PersonPinRoundedIcon = (props?: KTRawAttr) => {
  const s = _PersonPinRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonPinRoundedIcon = svg(
  svg('path', {
    d: 'M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l2.29 2.29c.39.39 1.02.39 1.41 0L15 20h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 3.3c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7S9.3 9.49 9.3 8s1.21-2.7 2.7-2.7M18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1z',
  }),
  'PersonPinRounded',
);
export const PersonPinSharpIcon = (props?: KTRawAttr) => {
  const s = _PersonPinSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonPinSharpIcon = svg(
  svg('path', {
    d: 'M21 2H3v18h6l3 3 3-3h6zm-9 3.3c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7S9.3 9.49 9.3 8s1.21-2.7 2.7-2.7M18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1z',
  }),
  'PersonPinSharp',
);
export const PersonPinTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PersonPinTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonPinTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm9.83 18 .59.59L12 20.17l1.59-1.59.58-.58H19V4H5v14zM12 5c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M6 15.58C6 13.08 9.97 12 12 12s6 1.08 6 3.58V17H6z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm9 20 3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2zM5 4h14v14h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5zm7 7c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m6 8.58c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V17h12zM8.48 15c.74-.51 2.23-1 3.52-1s2.78.49 3.52 1z',
      },
      '1',
    ),
  ],
  'PersonPinTwoTone',
);
export const PersonRemoveIcon = (props?: KTRawAttr) => {
  const s = _PersonRemoveIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonRemoveIcon = svg(
  svg('path', {
    d: 'M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4m3 2v2h6v-2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4',
  }),
  'PersonRemove',
);
export const PersonRemoveAlt1Icon = (props?: KTRawAttr) => {
  const s = _PersonRemoveAlt1Icon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonRemoveAlt1Icon = svg(
  svg('path', {
    d: 'M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4m3 2v2h6v-2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4',
  }),
  'PersonRemoveAlt1',
);
export const PersonRemoveAlt1OutlinedIcon = (props?: KTRawAttr) => {
  const s = _PersonRemoveAlt1OutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonRemoveAlt1OutlinedIcon = svg(
  svg('path', {
    d: 'M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4m-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4m2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2zm13-8h6v2h-6z',
  }),
  'PersonRemoveAlt1Outlined',
);
export const PersonRemoveAlt1RoundedIcon = (props?: KTRawAttr) => {
  const s = _PersonRemoveAlt1RoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonRemoveAlt1RoundedIcon = svg(
  svg('path', {
    d: 'M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4M2 18v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4s-8 1.34-8 4m16-8h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1',
  }),
  'PersonRemoveAlt1Rounded',
);
export const PersonRemoveAlt1SharpIcon = (props?: KTRawAttr) => {
  const s = _PersonRemoveAlt1SharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonRemoveAlt1SharpIcon = svg(
  svg('path', {
    d: 'M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4m3 2v2h6v-2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4',
  }),
  'PersonRemoveAlt1Sharp',
);
export const PersonRemoveAlt1TwoToneIcon = (props?: KTRawAttr) => {
  const s = _PersonRemoveAlt1TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonRemoveAlt1TwoToneIcon = svg(
  [
    svg('path', { d: 'M10 16c2.69 0 5.77 1.28 6 2H4c.2-.71 3.3-2 6-2', opacity: '.3' }, '0'),
    svg('circle', { cx: '10', cy: '8', r: '2', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4m-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4m2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2zm13-8h6v2h-6z',
      },
      '2',
    ),
  ],
  'PersonRemoveAlt1TwoTone',
);
export const PersonRemoveOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PersonRemoveOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonRemoveOutlinedIcon = svg(
  svg('path', {
    d: 'M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4m-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4m2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2zm13-8h6v2h-6z',
  }),
  'PersonRemoveOutlined',
);
export const PersonRemoveRoundedIcon = (props?: KTRawAttr) => {
  const s = _PersonRemoveRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonRemoveRoundedIcon = svg(
  svg('path', {
    d: 'M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4M2 18v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4s-8 1.34-8 4m16-8h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1',
  }),
  'PersonRemoveRounded',
);
export const PersonRemoveSharpIcon = (props?: KTRawAttr) => {
  const s = _PersonRemoveSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonRemoveSharpIcon = svg(
  svg('path', {
    d: 'M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4m3 2v2h6v-2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4',
  }),
  'PersonRemoveSharp',
);
export const PersonRemoveTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PersonRemoveTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonRemoveTwoToneIcon = svg(
  [
    svg('path', { d: 'M10 16c2.69 0 5.77 1.28 6 2H4c.2-.71 3.3-2 6-2', opacity: '.3' }, '0'),
    svg('circle', { cx: '10', cy: '8', r: '2', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4m-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4m2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2zm13-8h6v2h-6z',
      },
      '2',
    ),
  ],
  'PersonRemoveTwoTone',
);
export const PersonRoundedIcon = (props?: KTRawAttr) => {
  const s = _PersonRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonRoundedIcon = svg(
  svg('path', {
    d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4',
  }),
  'PersonRounded',
);
export const PersonSearchIcon = (props?: KTRawAttr) => {
  const s = _PersonSearchIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonSearchIcon = svg(
  [
    svg('circle', { cx: '10', cy: '8', r: '4' }, '0'),
    svg(
      'path',
      {
        d: 'M10.35 14.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99m9.08 4.01c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
      },
      '1',
    ),
  ],
  'PersonSearch',
);
export const PersonSearchOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PersonSearchOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonSearchOutlinedIcon = svg(
  svg('path', {
    d: 'M10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M4 18c.22-.72 3.31-2 6-2 0-.7.13-1.37.35-1.99C7.62 13.91 2 15.27 2 18v2h9.54c-.52-.58-.93-1.25-1.19-2zm15.43.02c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59c-1.5-1.5-.79-.8-2.57-2.57M16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
  }),
  'PersonSearchOutlined',
);
export const PersonSearchRoundedIcon = (props?: KTRawAttr) => {
  const s = _PersonSearchRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonSearchRoundedIcon = svg(
  [
    svg('circle', { cx: '10', cy: '8', r: '4' }, '0'),
    svg(
      'path',
      {
        d: 'M10.35 14.01C7.62 13.91 2 15.27 2 18v1c0 .55.45 1 1 1h8.54c-2.47-2.76-1.23-5.89-1.19-5.99m9.08 4.01c.47-.8.7-1.77.48-2.82-.34-1.64-1.72-2.95-3.38-3.16-2.63-.34-4.85 1.87-4.5 4.5.22 1.66 1.52 3.04 3.16 3.38 1.05.22 2.02-.01 2.82-.48l1.86 1.86c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
      },
      '1',
    ),
  ],
  'PersonSearchRounded',
);
export const PersonSearchSharpIcon = (props?: KTRawAttr) => {
  const s = _PersonSearchSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonSearchSharpIcon = svg(
  [
    svg('circle', { cx: '10', cy: '8', r: '4' }, '0'),
    svg(
      'path',
      {
        d: 'M10.35 14.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99m9.08 4.01c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
      },
      '1',
    ),
  ],
  'PersonSearchSharp',
);
export const PersonSearchTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PersonSearchTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonSearchTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M4 18c.22-.72 3.31-2 6-2 0-.7.13-1.37.35-1.99C7.62 13.91 2 15.27 2 18v2h9.54c-.52-.58-.93-1.25-1.19-2zm6-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .89 2 2 0 1.1-.9 2-2 2s-2-.9-2-2c0-1.11.9-2 2-2',
      },
      '0',
    ),
    svg('path', { d: 'M10.35 18s-.35-.79-.35-2c-2.69 0-5.77 1.28-6 2z', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M19.43 18.02c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59c-1.5-1.5-.79-.8-2.57-2.57M16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
      },
      '2',
    ),
    svg('circle', { cx: '10', cy: '9', r: '2', opacity: '.3' }, '3'),
  ],
  'PersonSearchTwoTone',
);
export const PersonSharpIcon = (props?: KTRawAttr) => {
  const s = _PersonSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonSharpIcon = svg(
  svg('path', {
    d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4',
  }),
  'PersonSharp',
);
export const PersonTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PersonTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonTwoToneIcon = svg(
  [
    svg('path', { d: 'M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2', opacity: '.3' }, '0'),
    svg('circle', { cx: '12', cy: '8', r: '2', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2',
      },
      '2',
    ),
  ],
  'PersonTwoTone',
);
export const PersonalInjuryIcon = (props?: KTRawAttr) => {
  const s = _PersonalInjuryIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonalInjuryIcon = svg(
  svg('path', {
    d: 'M8 6c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4m9 16h1c1.1 0 2-.9 2-2v-4.78c0-1.12-.61-2.15-1.61-2.66-.43-.22-.9-.43-1.39-.62zm-4.66-5L15 11.33c-.93-.21-1.93-.33-3-.33-2.53 0-4.71.7-6.39 1.56-1 .51-1.61 1.54-1.61 2.66V22h2.34c-.22-.45-.34-.96-.34-1.5C6 18.57 7.57 17 9.5 17zM10 22l1.41-3H9.5c-.83 0-1.5.67-1.5 1.5S8.67 22 9.5 22z',
  }),
  'PersonalInjury',
);
export const PersonalInjuryOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PersonalInjuryOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonalInjuryOutlinedIcon = svg(
  svg('path', {
    d: 'M12 10c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m6.39 8.56C16.71 11.7 14.53 11 12 11s-4.71.7-6.39 1.56C4.61 13.07 4 14.1 4 15.22V22h2v-6.78c0-.38.2-.72.52-.88C7.71 13.73 9.63 13 12 13c.76 0 1.47.07 2.13.2l-1.55 3.3H9.75C8.23 16.5 7 17.73 7 19.25S8.23 22 9.75 22H18c1.1 0 2-.9 2-2v-4.78c0-1.12-.61-2.15-1.61-2.66M10.94 20H9.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.89zM18 20h-4.85l2.94-6.27c.54.2 1.01.41 1.4.61.31.16.51.5.51.88z',
  }),
  'PersonalInjuryOutlined',
);
export const PersonalInjuryRoundedIcon = (props?: KTRawAttr) => {
  const s = _PersonalInjuryRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonalInjuryRoundedIcon = svg(
  svg('path', {
    d: 'M8 6c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4m9 16h1c1.1 0 2-.9 2-2v-4.78c0-1.12-.61-2.15-1.61-2.66-.43-.22-.9-.43-1.39-.62zm-4.66-5L15 11.33c-.93-.21-1.93-.33-3-.33-2.53 0-4.71.7-6.39 1.56-1 .51-1.61 1.54-1.61 2.66V22h2.34c-.22-.45-.34-.96-.34-1.5C6 18.57 7.57 17 9.5 17zM10 22l1.41-3H9.5c-.83 0-1.5.67-1.5 1.5S8.67 22 9.5 22z',
  }),
  'PersonalInjuryRounded',
);
export const PersonalInjurySharpIcon = (props?: KTRawAttr) => {
  const s = _PersonalInjurySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonalInjurySharpIcon = svg(
  svg('path', {
    d: 'M8 6c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4m9 16h1c1.1 0 2-.9 2-2v-4.78c0-1.12-.61-2.15-1.61-2.66-.43-.22-.9-.43-1.39-.62zm-4.66-5L15 11.33c-.93-.21-1.93-.33-3-.33-2.53 0-4.71.7-6.39 1.56-1 .51-1.61 1.54-1.61 2.66V22h2.34c-.22-.45-.34-.96-.34-1.5C6 18.57 7.57 17 9.5 17zM10 22l1.41-3H9.5c-.83 0-1.5.67-1.5 1.5S8.67 22 9.5 22z',
  }),
  'PersonalInjurySharp',
);
export const PersonalInjuryTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PersonalInjuryTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonalInjuryTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m-1.06 16H9.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.89zM18 20h-4.85l2.94-6.27c.54.2 1.01.41 1.4.61.31.16.51.5.51.88zm-8.25 2C8.23 22 7 20.77 7 19.25s1.23-2.75 2.75-2.75h2.83l1.55-3.3c-.66-.13-1.37-.2-2.13-.2-2.37 0-4.29.73-5.48 1.34-.32.16-.52.5-.52.88V22z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 10c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m6.39 8.56C16.71 11.7 14.53 11 12 11s-4.71.7-6.39 1.56C4.61 13.07 4 14.1 4 15.22V22h2v-6.78c0-.38.2-.72.52-.88C7.71 13.73 9.63 13 12 13c.76 0 1.47.07 2.13.2l-1.55 3.3H9.75C8.23 16.5 7 17.73 7 19.25S8.23 22 9.75 22H18c1.1 0 2-.9 2-2v-4.78c0-1.12-.61-2.15-1.61-2.66M10.94 20H9.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.89zM18 20h-4.85l2.94-6.27c.54.2 1.01.41 1.4.61.31.16.51.5.51.88z',
      },
      '1',
    ),
  ],
  'PersonalInjuryTwoTone',
);
export const PersonalVideoIcon = (props?: KTRawAttr) => {
  const s = _PersonalVideoIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonalVideoIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2m0 14H3V5h18z',
  }),
  'PersonalVideo',
);
export const PersonalVideoOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PersonalVideoOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonalVideoOutlinedIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2m0 14H3V5h18z',
  }),
  'PersonalVideoOutlined',
);
export const PersonalVideoRoundedIcon = (props?: KTRawAttr) => {
  const s = _PersonalVideoRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonalVideoRoundedIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2m-1 14H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1',
  }),
  'PersonalVideoRounded',
);
export const PersonalVideoSharpIcon = (props?: KTRawAttr) => {
  const s = _PersonalVideoSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonalVideoSharpIcon = svg(
  svg('path', { d: 'M23 3H1v16h7v2h8v-2h6.99zm-2 14H3V5h18z' }),
  'PersonalVideoSharp',
);
export const PersonalVideoTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PersonalVideoTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PersonalVideoTwoToneIcon = svg(
  [
    svg('path', { d: 'M3 5h18v12H3z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2m0 14H3V5h18z',
      },
      '1',
    ),
  ],
  'PersonalVideoTwoTone',
);
export const PestControlIcon = (props?: KTRawAttr) => {
  const s = _PestControlIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PestControlIcon = svg(
  svg('path', {
    d: 'M21 15v-2h-3.07c-.05-.39-.12-.77-.22-1.14l2.58-1.49-1-1.73L16.92 10c-.28-.48-.62-.91-.99-1.29.04-.23.07-.46.07-.71 0-.8-.24-1.55-.65-2.18L17 4.17l-1.41-1.41-1.72 1.72c-1.68-.89-3.1-.33-3.73 0L8.41 2.76 7 4.17l1.65 1.65C8.24 6.45 8 7.2 8 8c0 .25.03.48.07.72-.37.38-.71.81-.99 1.28L4.71 8.63l-1 1.73 2.58 1.49c-.1.37-.17.75-.22 1.14H3v2h3.07c.05.39.12.77.22 1.14l-2.58 1.49 1 1.73L7.08 18c1.08 1.81 2.88 3 4.92 3s3.84-1.19 4.92-3l2.37 1.37 1-1.73-2.58-1.49c.1-.37.17-.75.22-1.14H21zm-8 2h-2v-6h2z',
  }),
  'PestControl',
);
export const PestControlOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PestControlOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PestControlOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21 15v-2h-3.07c-.05-.39-.12-.77-.22-1.14l2.58-1.49-1-1.73L16.92 10c-.28-.48-.62-.91-.99-1.29.1-.56.2-1.69-.58-2.89L17 4.17l-1.41-1.41-1.72 1.72c-1.68-.89-3.1-.33-3.73 0L8.41 2.76 7 4.17l1.65 1.65c-.78 1.2-.68 2.34-.58 2.89-.37.39-.71.82-.99 1.29L4.71 8.63l-1 1.73 2.58 1.49c-.1.37-.17.75-.22 1.14H3v2h3.07c.05.39.12.77.22 1.14l-2.58 1.49 1 1.73L7.08 18c1.08 1.81 2.88 3 4.92 3s3.84-1.19 4.92-3l2.37 1.37 1-1.73-2.58-1.49c.1-.37.17-.75.22-1.14H21zm-9-9c.88 0 1.62.57 1.88 1.36C13.29 7.13 12.66 7 12 7s-1.29.13-1.88.36C10.38 6.57 11.12 6 12 6m0 13c-2.21 0-4-2.24-4-5s1.79-5 4-5 4 2.24 4 5-1.79 5-4 5',
      },
      '0',
    ),
    svg('path', { d: 'M11 11h2v6h-2z' }, '1'),
  ],
  'PestControlOutlined',
);
export const PestControlRodentIcon = (props?: KTRawAttr) => {
  const s = _PestControlRodentIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PestControlRodentIcon = svg(
  svg('path', {
    d: 'm21.31 17.38-2.39-2.13c.52-2.36-1.36-4.25-3.42-4.25-1.16 0-3.5.9-3.5 3.5 0 .97.39 1.84 1.03 2.47l-.71.71C11.5 16.87 11 15.74 11 14.5c0-1.7.96-3.17 2.35-3.93-.7-.36-1.48-.57-2.28-.57-2.38 0-4.37 1.65-4.91 3.87C4.91 13.5 4 12.36 4 11c0-1.66 1.34-3 3-3h2.5C10.88 8 12 6.88 12 5.5S10.88 3 9.5 3H8c-.55 0-1 .45-1 1s.45 1 1 1h1.5c.28 0 .5.22.5.5s-.22.5-.5.5H7c-2.76 0-5 2.24-5 5 0 2.42 1.72 4.44 4 4.9v.03C6 18.73 8.27 21 11.07 21h8.86c1.87 0 2.81-2.34 1.38-3.62M18 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'PestControlRodent',
);
export const PestControlRodentOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PestControlRodentOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PestControlRodentOutlinedIcon = svg(
  [
    svg('circle', { cx: '17', cy: '17', r: '1' }, '0'),
    svg(
      'path',
      {
        d: 'm20.86 14.97-.93-.84c.48-3.45-2.87-6.04-6.05-4.82C13.3 9.11 12.66 9 12 9c-4.26 0-5.65 3.58-5.89 4.85C4.89 13.47 4 12.35 4 11c0-1.66 1.34-3 3-3h2.5C10.88 8 12 6.88 12 5.5S10.88 3 9.5 3H8c-.55 0-1 .45-1 1s.45 1 1 1h1.5c.28 0 .5.22.5.5s-.22.5-.5.5H7c-2.76 0-5 2.24-5 5 0 2.44 1.76 4.47 4.07 4.91C6.51 18.79 8.99 21 12 21h6.53c3.11 0 4.7-3.89 2.33-6.03M18.53 19H12c-1.21 0-2.34-.54-3.11-1.48-.78-.95-1.06-2.16-.8-3.41.31-1.48 1.51-2.69 2.99-3.01.22-.05.45-.06.67-.07-.47.71-.75 1.55-.75 2.47 0 1.24.5 2.37 1.32 3.18l1.41-1.41c-.45-.45-.73-1.08-.73-1.77 0-1.42 1.2-2.5 2.5-2.5 1.38 0 2.5 1.12 2.5 2.5 0 .46-.13.88-.35 1.25l1.87 1.7c.31.28.48.67.48 1.09 0 .8-.66 1.46-1.47 1.46',
      },
      '1',
    ),
  ],
  'PestControlRodentOutlined',
);
export const PestControlRodentRoundedIcon = (props?: KTRawAttr) => {
  const s = _PestControlRodentRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PestControlRodentRoundedIcon = svg(
  svg('path', {
    d: 'm21.31 17.38-2.39-2.13c.52-2.36-1.36-4.25-3.42-4.25-1.16 0-3.5.9-3.5 3.5 0 .81.27 1.55.74 2.15.15.2.14.48-.04.66-.21.21-.56.19-.75-.04-.6-.77-.95-1.73-.95-2.77 0-1.7.96-3.17 2.35-3.93-.7-.36-1.48-.57-2.28-.57-2.38 0-4.37 1.65-4.91 3.87-1.33-.39-2.28-1.66-2.15-3.14C4.15 9.16 5.54 8 7.11 8h2c1.58 0 2.75-.95 2.87-2.25C12.13 4.25 10.96 3 9.5 3H8.05c-.5 0-.96.34-1.04.83C6.91 4.46 7.39 5 8 5h1.5c.28 0 .5.22.5.5s-.22.5-.5.5H7.16c-2.67 0-4.99 2.03-5.15 4.7-.15 2.55 1.61 4.72 3.99 5.2v.03C6 18.73 8.27 21 11.07 21h8.86c1.87 0 2.81-2.34 1.38-3.62M18 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'PestControlRodentRounded',
);
export const PestControlRodentSharpIcon = (props?: KTRawAttr) => {
  const s = _PestControlRodentSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PestControlRodentSharpIcon = svg(
  svg('path', {
    d: 'm21.31 17.38-2.39-2.13c.52-2.36-1.36-4.25-3.42-4.25-1.16 0-3.5.9-3.5 3.5 0 .97.39 1.84 1.03 2.47l-.71.71C11.5 16.87 11 15.74 11 14.5c0-1.7.96-3.17 2.35-3.93-.7-.36-1.48-.57-2.28-.57-2.38 0-4.37 1.65-4.91 3.87C4.91 13.5 4 12.36 4 11c0-1.66 1.34-3 3-3h2.5C10.88 8 12 6.88 12 5.5S10.88 3 9.5 3H7v2h2.5c.28 0 .5.22.5.5s-.22.5-.5.5H7c-2.76 0-5 2.24-5 5 0 2.42 1.72 4.44 4 4.9v.03C6 18.73 8.27 21 11.07 21h8.86c1.87 0 2.81-2.34 1.38-3.62M18 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'PestControlRodentSharp',
);
export const PestControlRodentTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PestControlRodentTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PestControlRodentTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M17.65 14.75c.22-.37.35-.79.35-1.25 0-1.38-1.12-2.5-2.5-2.5-1.3 0-2.5 1.08-2.5 2.5 0 .69.28 1.32.73 1.77l-1.41 1.41C11.5 15.87 11 14.74 11 13.5c0-.92.28-1.76.75-2.47-.22.01-.44.02-.67.07-1.48.32-2.68 1.53-2.99 3.01-.26 1.24.02 2.45.8 3.41.77.94 1.9 1.48 3.11 1.48h6.53c.81 0 1.47-.66 1.47-1.47 0-.41-.17-.81-.48-1.09zM17 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
        opacity: '.3',
      },
      '0',
    ),
    svg('circle', { cx: '17', cy: '17', r: '1' }, '1'),
    svg(
      'path',
      {
        d: 'm20.86 14.97-.93-.84c.48-3.45-2.87-6.04-6.05-4.82C13.3 9.11 12.66 9 12 9c-4.26 0-5.65 3.58-5.89 4.85C4.89 13.47 4 12.35 4 11c0-1.66 1.34-3 3-3h2.5C10.88 8 12 6.88 12 5.5S10.88 3 9.5 3H8c-.55 0-1 .45-1 1s.45 1 1 1h1.5c.28 0 .5.22.5.5s-.22.5-.5.5H7c-2.76 0-5 2.24-5 5 0 2.44 1.76 4.47 4.07 4.91C6.51 18.79 8.99 21 12 21h6.53c3.11 0 4.7-3.89 2.33-6.03M18.53 19H12c-1.21 0-2.34-.54-3.11-1.48-.78-.95-1.06-2.16-.8-3.41.31-1.48 1.51-2.69 2.99-3.01.22-.05.45-.06.67-.07-.47.71-.75 1.55-.75 2.47 0 1.24.5 2.37 1.32 3.18l1.41-1.41c-.45-.45-.73-1.08-.73-1.77 0-1.42 1.2-2.5 2.5-2.5 1.38 0 2.5 1.12 2.5 2.5 0 .46-.13.88-.35 1.25l1.87 1.7c.31.28.48.67.48 1.09 0 .8-.66 1.46-1.47 1.46',
      },
      '2',
    ),
  ],
  'PestControlRodentTwoTone',
);
export const PestControlRoundedIcon = (props?: KTRawAttr) => {
  const s = _PestControlRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PestControlRoundedIcon = svg(
  svg('path', {
    d: 'M21 14c0-.55-.45-1-1-1h-2.07c-.05-.39-.12-.77-.22-1.14l1.72-.99c.48-.28.64-.89.37-1.37-.28-.48-.89-.64-1.37-.37l-1.51.87c-.28-.48-.62-.91-.99-1.29.04-.23.07-.46.07-.71 0-.8-.24-1.55-.65-2.18l.94-.94c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0l-1.02 1.02c-1.68-.89-3.1-.33-3.73 0L9.12 3.46a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l.94.94C8.24 6.45 8 7.2 8 8c0 .25.03.48.07.72-.37.38-.71.81-.99 1.28l-1.51-.87c-.48-.27-1.09-.11-1.36.37-.28.48-.11 1.09.37 1.37l1.72.99c-.1.37-.17.75-.22 1.14H4c-.55 0-1 .45-1 1s.45 1 1 1h2.07c.05.39.12.77.22 1.14l-1.72.99c-.48.28-.64.89-.37 1.37.28.48.89.64 1.37.37L7.08 18c1.08 1.81 2.88 3 4.92 3s3.84-1.19 4.92-3l1.51.87c.48.28 1.09.11 1.37-.37s.11-1.09-.37-1.37l-1.72-.99c.1-.37.17-.75.22-1.14H20c.55 0 1-.45 1-1m-9 3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1',
  }),
  'PestControlRounded',
);
export const PestControlSharpIcon = (props?: KTRawAttr) => {
  const s = _PestControlSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PestControlSharpIcon = svg(
  svg('path', {
    d: 'M21 15v-2h-3.07c-.05-.39-.12-.77-.22-1.14l2.58-1.49-1-1.73L16.92 10c-.28-.48-.62-.91-.99-1.29.04-.23.07-.46.07-.71 0-.8-.24-1.55-.65-2.18L17 4.17l-1.41-1.41-1.72 1.72c-1.68-.89-3.1-.33-3.73 0L8.41 2.76 7 4.17l1.65 1.65C8.24 6.45 8 7.2 8 8c0 .25.03.48.07.72-.37.38-.71.81-.99 1.28L4.71 8.63l-1 1.73 2.58 1.49c-.1.37-.17.75-.22 1.14H3v2h3.07c.05.39.12.77.22 1.14l-2.58 1.49 1 1.73L7.08 18c1.08 1.81 2.88 3 4.92 3s3.84-1.19 4.92-3l2.37 1.37 1-1.73-2.58-1.49c.1-.37.17-.75.22-1.14H21zm-8 2h-2v-6h2z',
  }),
  'PestControlSharp',
);
export const PestControlTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PestControlTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PestControlTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 9c-2.21 0-4 2.24-4 5s1.79 5 4 5 4-2.24 4-5-1.79-5-4-5m1 8h-2v-6h2zm.88-9.64C13.62 6.57 12.88 6 12 6s-1.62.57-1.88 1.36C10.71 7.13 11.34 7 12 7s1.29.13 1.88.36',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M21 15v-2h-3.07c-.05-.39-.12-.77-.22-1.14l2.58-1.49-1-1.73L16.92 10c-.28-.48-.62-.91-.99-1.29.1-.56.2-1.69-.58-2.89L17 4.17l-1.41-1.41-1.72 1.72c-1.68-.89-3.1-.33-3.73 0L8.41 2.76 7 4.17l1.65 1.65c-.78 1.2-.68 2.34-.58 2.89-.37.39-.71.82-.99 1.29L4.71 8.63l-1 1.73 2.58 1.49c-.1.37-.17.75-.22 1.14H3v2h3.07c.05.39.12.77.22 1.14l-2.58 1.49 1 1.73L7.08 18c1.08 1.81 2.88 3 4.92 3s3.84-1.19 4.92-3l2.37 1.37 1-1.73-2.58-1.49c.1-.37.17-.75.22-1.14H21zm-9-9c.88 0 1.62.57 1.88 1.36C13.29 7.13 12.66 7 12 7s-1.29.13-1.88.36C10.38 6.57 11.12 6 12 6m0 13c-2.21 0-4-2.24-4-5s1.79-5 4-5 4 2.24 4 5-1.79 5-4 5',
      },
      '1',
    ),
    svg('path', { d: 'M11 11h2v6h-2z' }, '2'),
  ],
  'PestControlTwoTone',
);
export const PetsIcon = (props?: KTRawAttr) => {
  const s = _PetsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PetsIcon = svg(
  [
    svg('circle', { cx: '4.5', cy: '9.5', r: '2.5' }, '0'),
    svg('circle', { cx: '9', cy: '5.5', r: '2.5' }, '1'),
    svg('circle', { cx: '15', cy: '5.5', r: '2.5' }, '2'),
    svg('circle', { cx: '19.5', cy: '9.5', r: '2.5' }, '3'),
    svg(
      'path',
      {
        d: 'M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32q-.165-.06-.33-.09c-.25-.04-.52-.04-.78-.04s-.53 0-.79.05q-.165.03-.33.09c-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8',
      },
      '4',
    ),
  ],
  'Pets',
);
export const PetsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PetsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PetsOutlinedIcon = svg(
  [
    svg('circle', { cx: '4.5', cy: '9.5', r: '2.5' }, '0'),
    svg('circle', { cx: '9', cy: '5.5', r: '2.5' }, '1'),
    svg('circle', { cx: '15', cy: '5.5', r: '2.5' }, '2'),
    svg('circle', { cx: '19.5', cy: '9.5', r: '2.5' }, '3'),
    svg(
      'path',
      {
        d: 'M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32q-.165-.06-.33-.09c-.25-.04-.52-.04-.78-.04s-.53 0-.79.05q-.165.03-.33.09c-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8',
      },
      '4',
    ),
  ],
  'PetsOutlined',
);
export const PetsRoundedIcon = (props?: KTRawAttr) => {
  const s = _PetsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PetsRoundedIcon = svg(
  [
    svg('circle', { cx: '4.5', cy: '9.5', r: '2.5' }, '0'),
    svg('circle', { cx: '9', cy: '5.5', r: '2.5' }, '1'),
    svg('circle', { cx: '15', cy: '5.5', r: '2.5' }, '2'),
    svg('circle', { cx: '19.5', cy: '9.5', r: '2.5' }, '3'),
    svg(
      'path',
      {
        d: 'M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32q-.165-.06-.33-.09c-.25-.04-.52-.04-.78-.04s-.53 0-.79.05q-.165.03-.33.09c-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8',
      },
      '4',
    ),
  ],
  'PetsRounded',
);
export const PetsSharpIcon = (props?: KTRawAttr) => {
  const s = _PetsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PetsSharpIcon = svg(
  [
    svg('circle', { cx: '4.5', cy: '9.5', r: '2.5' }, '0'),
    svg('circle', { cx: '9', cy: '5.5', r: '2.5' }, '1'),
    svg('circle', { cx: '15', cy: '5.5', r: '2.5' }, '2'),
    svg('circle', { cx: '19.5', cy: '9.5', r: '2.5' }, '3'),
    svg(
      'path',
      {
        d: 'M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32q-.165-.06-.33-.09c-.25-.04-.52-.04-.78-.04s-.53 0-.79.05q-.165.03-.33.09c-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8',
      },
      '4',
    ),
  ],
  'PetsSharp',
);
export const PetsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PetsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PetsTwoToneIcon = svg(
  [
    svg('circle', { cx: '4.5', cy: '9.5', r: '2.5' }, '0'),
    svg('circle', { cx: '9', cy: '5.5', r: '2.5' }, '1'),
    svg('circle', { cx: '15', cy: '5.5', r: '2.5' }, '2'),
    svg('circle', { cx: '19.5', cy: '9.5', r: '2.5' }, '3'),
    svg(
      'path',
      {
        d: 'M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32q-.165-.06-.33-.09c-.25-.04-.52-.04-.78-.04s-.53 0-.79.05q-.165.03-.33.09c-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8',
      },
      '4',
    ),
  ],
  'PetsTwoTone',
);
export const PhishingIcon = (props?: KTRawAttr) => {
  const s = _PhishingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhishingIcon = svg(
  svg('path', {
    d: 'M19 9c0-1.3-.84-2.4-2-2.82V2h-2v4.18C13.84 6.6 13 7.7 13 9s.84 2.4 2 2.82V15c0 2.21-1.79 4-4 4s-4-1.79-4-4v-1h3L5 9v6c0 3.31 2.69 6 6 6s6-2.69 6-6v-3.18c1.16-.42 2-1.52 2-2.82m-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'Phishing',
);
export const PhishingOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhishingOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhishingOutlinedIcon = svg(
  svg('path', {
    d: 'M17 6.18V2h-2v4.18C13.84 6.6 13 7.7 13 9s.84 2.4 2 2.82V15c0 2.21-1.79 4-4 4s-4-1.79-4-4v-1.17l1.59 1.59L10 14 5 9v6c0 3.31 2.69 6 6 6s6-2.69 6-6v-3.18c1.16-.41 2-1.51 2-2.82s-.84-2.4-2-2.82M16 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'PhishingOutlined',
);
export const PhishingRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhishingRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhishingRoundedIcon = svg(
  svg('path', {
    d: 'M19 9c0-1.3-.84-2.4-2-2.82V3c0-.55-.45-1-1-1s-1 .45-1 1v3.18C13.84 6.6 13 7.7 13 9s.84 2.4 2 2.82v3.01c0 2.09-1.52 3.96-3.6 4.16C9.02 19.21 7 17.34 7 15v-1h1.79c.45 0 .67-.54.35-.85l-3.29-3.3c-.31-.31-.85-.09-.85.36v4.58c0 3.05 2.19 5.77 5.21 6.16C13.87 21.42 17 18.57 17 15v-3.18c1.16-.42 2-1.52 2-2.82m-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'PhishingRounded',
);
export const PhishingSharpIcon = (props?: KTRawAttr) => {
  const s = _PhishingSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhishingSharpIcon = svg(
  svg('path', {
    d: 'M19 9c0-1.3-.84-2.4-2-2.82V2h-2v4.18C13.84 6.6 13 7.7 13 9s.84 2.4 2 2.82V15c0 2.21-1.79 4-4 4s-4-1.79-4-4v-1h3L5 9v6c0 3.31 2.69 6 6 6s6-2.69 6-6v-3.18c1.16-.42 2-1.52 2-2.82m-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'PhishingSharp',
);
export const PhishingTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhishingTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhishingTwoToneIcon = svg(
  svg('path', {
    d: 'M19 9c0-1.3-.84-2.4-2-2.82V2h-2v4.18C13.84 6.6 13 7.7 13 9s.84 2.4 2 2.82V15c0 2.21-1.79 4-4 4s-4-1.79-4-4v-1h3L5 9v6c0 3.31 2.69 6 6 6s6-2.69 6-6v-3.18c1.16-.42 2-1.52 2-2.82m-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'PhishingTwoTone',
);
export const PhoneIcon = (props?: KTRawAttr) => {
  const s = _PhoneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneIcon = svg(
  svg('path', {
    d: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z',
  }),
  'Phone',
);
export const PhoneAndroidIcon = (props?: KTRawAttr) => {
  const s = _PhoneAndroidIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneAndroidIcon = svg(
  svg('path', {
    d: 'M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3m-2 20h-4v-1h4zm3.25-3H6.75V4h10.5z',
  }),
  'PhoneAndroid',
);
export const PhoneAndroidOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhoneAndroidOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneAndroidOutlinedIcon = svg(
  svg('path', {
    d: 'M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3m1 17H7V4h10zm-3 3h-4v-1h4z',
  }),
  'PhoneAndroidOutlined',
);
export const PhoneAndroidRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhoneAndroidRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneAndroidRoundedIcon = svg(
  svg('path', {
    d: 'M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3m-2.5 20h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5m3.5-3H7V4h10z',
  }),
  'PhoneAndroidRounded',
);
export const PhoneAndroidSharpIcon = (props?: KTRawAttr) => {
  const s = _PhoneAndroidSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneAndroidSharpIcon = svg(
  svg('path', { d: 'M19 1H5v22h14zm-5 20h-4v-1h4zm3-3H7V4h10z' }),
  'PhoneAndroidSharp',
);
export const PhoneAndroidTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhoneAndroidTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneAndroidTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 4h10v14H7z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3m-2 20h-4v-1h4zm3-3H7V4h10z',
      },
      '1',
    ),
  ],
  'PhoneAndroidTwoTone',
);
export const PhoneBluetoothSpeakerIcon = (props?: KTRawAttr) => {
  const s = _PhoneBluetoothSpeakerIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneBluetoothSpeakerIcon = svg(
  svg('path', {
    d: 'M14.71 9.5 17 7.21V11h.5l2.85-2.85L18.21 6l2.15-2.15L17.5 1H17v3.79L14.71 2.5l-.71.71L16.79 6 14 8.79zM18 2.91l.94.94-.94.94zm0 4.3.94.94-.94.94zm2 8.29c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1',
  }),
  'PhoneBluetoothSpeaker',
);
export const PhoneBluetoothSpeakerOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhoneBluetoothSpeakerOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneBluetoothSpeakerOutlinedIcon = svg(
  svg('path', {
    d: 'M20 15.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79M19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45zM14.71 9.5 17 7.21V11h.5l2.85-2.85L18.21 6l2.15-2.15L17.5 1H17v3.79L14.71 2.5l-.71.71L16.79 6 14 8.79zM18 2.91l.94.94-.94.94zm0 4.3.94.94-.94.94z',
  }),
  'PhoneBluetoothSpeakerOutlined',
);
export const PhoneBluetoothSpeakerRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhoneBluetoothSpeakerRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneBluetoothSpeakerRoundedIcon = svg(
  svg('path', {
    d: 'm19.23 15.26-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98m-2.44-9.25-2.45 2.45c-.2.2-.2.52 0 .71.2.2.52.2.71 0L17 7.23v3.15c0 .2.12.39.31.47.06.03.13.04.19.04.13 0 .26-.05.36-.15l2.18-2.18c.2-.2.2-.52 0-.71l-1.83-1.83 1.83-1.83c.09-.09.15-.22.15-.36s-.05-.26-.15-.36l-2.18-2.18c-.14-.14-.36-.19-.55-.11s-.31.26-.31.46v3.15l-1.95-1.95c-.2-.2-.52-.2-.71 0-.2.2-.2.52 0 .71zm1.22-3.15.96.96-.96.96zm0 4.37.96.96-.96.96z',
  }),
  'PhoneBluetoothSpeakerRounded',
);
export const PhoneBluetoothSpeakerSharpIcon = (props?: KTRawAttr) => {
  const s = _PhoneBluetoothSpeakerSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneBluetoothSpeakerSharpIcon = svg(
  svg('path', {
    d: 'M14.71 9.5 17 7.21V11h.5l2.85-2.85L18.21 6l2.15-2.15L17.5 1H17v3.79L14.71 2.5l-.71.71L16.79 6 14 8.79zM18 2.91l.94.94-.94.94zm0 4.3.94.94-.94.94zm3 8.25-5.27-.61-2.52 2.52c-2.83-1.44-5.15-3.75-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z',
  }),
  'PhoneBluetoothSpeakerSharp',
);
export const PhoneBluetoothSpeakerTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhoneBluetoothSpeakerTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneBluetoothSpeakerTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M15.2 18.21c1.21.41 2.48.67 3.8.76v-1.5c-.88-.07-1.75-.22-2.6-.45zM6.54 5h-1.5c.09 1.32.34 2.58.75 3.79l1.2-1.21c-.24-.83-.39-1.7-.45-2.58',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 15.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79M19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45zM14.71 9.5 17 7.21V11h.5l2.85-2.85L18.21 6l2.15-2.15L17.5 1H17v3.79L14.71 2.5l-.71.71L16.79 6 14 8.79zM18 2.91l.94.94-.94.94zm0 4.3.94.94-.94.94z',
      },
      '1',
    ),
  ],
  'PhoneBluetoothSpeakerTwoTone',
);
export const PhoneCallbackIcon = (props?: KTRawAttr) => {
  const s = _PhoneCallbackIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneCallbackIcon = svg(
  svg('path', {
    d: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02zm13.54-7.1-.71-.7L13 9.29V5h-1v6h6v-1h-4.15z',
  }),
  'PhoneCallback',
);
export const PhoneCallbackOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhoneCallbackOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneCallbackOutlinedIcon = svg(
  svg('path', {
    d: 'M20 15.51c-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1M5.03 5h1.5c.07.89.22 1.76.46 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79M19 18.97c-1.32-.09-2.59-.35-3.8-.75l1.19-1.19c.85.24 1.72.39 2.6.45v1.49zM18 9h-2.59l5.02-5.02-1.41-1.41L14 7.59V5h-2v6h6z',
  }),
  'PhoneCallbackOutlined',
);
export const PhoneCallbackRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhoneCallbackRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneCallbackRoundedIcon = svg(
  svg('path', {
    d: 'm19.23 15.26-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98M13 11h4c.55 0 1-.45 1-1s-.45-1-1-1h-1.59l4.31-4.31c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0L14 7.59V6c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1',
  }),
  'PhoneCallbackRounded',
);
export const PhoneCallbackSharpIcon = (props?: KTRawAttr) => {
  const s = _PhoneCallbackSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneCallbackSharpIcon = svg(
  svg('path', {
    d: 'm15.73 14.85-2.52 2.52c-2.83-1.44-5.15-3.75-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51zM18 9h-2.59l5.02-5.02-1.41-1.41L14 7.59V5h-2v6h6z',
  }),
  'PhoneCallbackSharp',
);
export const PhoneCallbackTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhoneCallbackTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneCallbackTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M6.54 5h-1.5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.24-.84-.39-1.71-.45-2.6m8.66 13.21c1.2.41 2.48.67 3.8.75v-1.49c-.88-.07-1.75-.22-2.6-.45z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 15.51c-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1M5.03 5h1.5c.07.89.22 1.76.46 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79M19 18.97c-1.32-.09-2.59-.35-3.8-.75l1.19-1.19c.85.24 1.72.39 2.6.45v1.49zM18 9h-2.59l5.02-5.02-1.41-1.41L14 7.59V5h-2v6h6z',
      },
      '1',
    ),
  ],
  'PhoneCallbackTwoTone',
);
export const PhoneDisabledIcon = (props?: KTRawAttr) => {
  const s = _PhoneDisabledIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneDisabledIcon = svg(
  svg('path', {
    d: 'm17.34 14.54-1.43-1.43c.56-.73 1.05-1.5 1.47-2.32l-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1H20c.55 0 1 .45 1 1 0 3.98-1.37 7.64-3.66 10.54m-2.82 2.81C11.63 19.64 7.97 21 4 21c-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.35-.12.75-.03 1.02.24l2.2 2.2c.81-.42 1.58-.9 2.3-1.46L1.39 4.22l1.42-1.41L21.19 21.2l-1.41 1.41z',
  }),
  'PhoneDisabled',
);
export const PhoneDisabledOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhoneDisabledOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneDisabledOutlinedIcon = svg(
  svg('path', {
    d: 'm17.34 14.54-1.43-1.43c.56-.73 1.05-1.5 1.47-2.32l-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1H20c.55 0 1 .45 1 1 0 3.98-1.37 7.64-3.66 10.54m-2.82 2.81C11.63 19.64 7.97 21 4 21c-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.1-.04.21-.05.31-.05.26 0 .51.1.71.29l2.2 2.2c.81-.42 1.58-.9 2.3-1.46L1.39 4.22l1.42-1.41L21.19 21.2l-1.41 1.41zm-6.92-.33c-.85.24-1.72.39-2.6.45v1.49c1.32-.09 2.59-.35 3.8-.75zM17.46 5c-.06.89-.21 1.76-.45 2.59l1.2 1.2c.41-1.2.67-2.47.76-3.79z',
  }),
  'PhoneDisabledOutlined',
);
export const PhoneDisabledRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhoneDisabledRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneDisabledRoundedIcon = svg(
  svg('path', {
    d: 'M14.54 17.37c-2.63 2.08-5.89 3.39-9.45 3.61-1.13.07-2.07-.87-2.07-2v-1.73c-.01-1.01.75-1.86 1.76-1.98l2.54-.29c.61-.07 1.21.14 1.64.57l1.84 1.84c.81-.41 1.59-.9 2.31-1.45L2.1 4.93a.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0L20.49 20.5c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0zm2.85-6.57-1.85-1.85c-.43-.43-.64-1.03-.57-1.64l.29-2.52c.12-1.01.97-1.77 1.99-1.77h1.73c1.13 0 2.07.94 2 2.07-.22 3.57-1.54 6.83-3.62 9.47l-1.43-1.43c.55-.73 1.04-1.51 1.46-2.33',
  }),
  'PhoneDisabledRounded',
);
export const PhoneDisabledSharpIcon = (props?: KTRawAttr) => {
  const s = _PhoneDisabledSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneDisabledSharpIcon = svg(
  svg('path', {
    d: 'M14.52 17.35C11.39 19.83 7.36 21.22 3 20.97v-5.51l5.27-.61 2.52 2.52c.81-.41 1.58-.9 2.3-1.45L1.39 4.22l1.42-1.41L21.19 21.2l-1.41 1.41zm1.39-4.24c.56-.73 1.05-1.51 1.47-2.33l-2.53-2.53.61-5.25h5.51c.25 4.37-1.15 8.4-3.63 11.54z',
  }),
  'PhoneDisabledSharp',
);
export const PhoneDisabledTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhoneDisabledTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneDisabledTwoToneIcon = svg(
  svg('path', {
    d: 'm17.34 14.54-1.43-1.43c.56-.73 1.05-1.5 1.47-2.32l-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1H20c.55 0 1 .45 1 1 0 3.98-1.37 7.64-3.66 10.54m-2.82 2.81C11.63 19.64 7.97 21 4 21c-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.1-.04.21-.05.31-.05.26 0 .51.1.71.29l2.2 2.2c.81-.42 1.58-.9 2.3-1.46L1.39 4.22l1.42-1.41L21.19 21.2l-1.41 1.41zM17.46 5c-.06.89-.21 1.76-.45 2.59l1.2 1.2c.41-1.2.67-2.47.76-3.79zM7.6 17.02c-.85.24-1.72.39-2.6.45v1.49c1.32-.09 2.59-.35 3.8-.75z',
  }),
  'PhoneDisabledTwoTone',
);
export const PhoneEnabledIcon = (props?: KTRawAttr) => {
  const s = _PhoneEnabledIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneEnabledIcon = svg(
  svg('path', {
    d: 'm17.38 10.79-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1H20c.55 0 1 .45 1 1 0 9.39-7.61 17-17 17-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.35-.12.75-.03 1.02.24l2.2 2.2c2.83-1.45 5.15-3.76 6.59-6.59',
  }),
  'PhoneEnabled',
);
export const PhoneEnabledOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhoneEnabledOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneEnabledOutlinedIcon = svg(
  svg('path', {
    d: 'M17.46 5c-.06.89-.21 1.76-.45 2.59l1.2 1.2c.41-1.2.67-2.47.76-3.79zM7.6 17.02c-.85.24-1.72.39-2.6.45v1.49c1.32-.09 2.59-.35 3.8-.75zM16.5 3H20c.55 0 1 .45 1 1 0 9.39-7.61 17-17 17-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.1-.04.21-.05.31-.05.26 0 .51.1.71.29l2.2 2.2c2.83-1.45 5.15-3.76 6.59-6.59l-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1',
  }),
  'PhoneEnabledOutlined',
);
export const PhoneEnabledRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhoneEnabledRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneEnabledRoundedIcon = svg(
  svg('path', {
    d: 'm4.78 15.27 2.54-.29c.61-.07 1.21.14 1.64.57l1.84 1.84c2.83-1.44 5.15-3.75 6.59-6.59l-1.85-1.85c-.43-.43-.64-1.03-.57-1.64l.29-2.52c.12-1.01.97-1.77 1.99-1.77h1.73c1.13 0 2.07.94 2 2.07-.53 8.54-7.36 15.36-15.89 15.89-1.13.07-2.07-.87-2.07-2v-1.73c-.01-1.01.75-1.86 1.76-1.98',
  }),
  'PhoneEnabledRounded',
);
export const PhoneEnabledSharpIcon = (props?: KTRawAttr) => {
  const s = _PhoneEnabledSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneEnabledSharpIcon = svg(
  svg('path', {
    d: 'm3 15.46 5.27-.61 2.52 2.52c2.83-1.44 5.15-3.75 6.59-6.59l-2.53-2.53.61-5.25h5.51C21.55 13.18 13.18 21.55 3 20.97z',
  }),
  'PhoneEnabledSharp',
);
export const PhoneEnabledTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhoneEnabledTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneEnabledTwoToneIcon = svg(
  svg('path', {
    d: 'M21 4c0 9.39-7.61 17-17 17-.55 0-1-.45-1-1v-3.49c0-.55.45-1 1-1 1.24 0 2.45-.2 3.57-.57.1-.04.21-.05.31-.05.26 0 .51.1.71.29l2.2 2.2c2.83-1.45 5.15-3.76 6.59-6.59l-2.2-2.2c-.28-.28-.36-.67-.25-1.02.37-1.12.57-2.32.57-3.57 0-.55.45-1 1-1H20c.55 0 1 .45 1 1M7.6 17.02c-.85.24-1.72.39-2.6.45v1.49c1.32-.09 2.59-.35 3.8-.75zM17.46 5c-.06.89-.21 1.76-.45 2.59l1.2 1.2c.41-1.2.67-2.47.76-3.79z',
  }),
  'PhoneEnabledTwoTone',
);
export const PhoneForwardedIcon = (props?: KTRawAttr) => {
  const s = _PhoneForwardedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneForwardedIcon = svg(
  svg('path', {
    d: 'm18 11 5-5-5-5v3h-4v4h4zm2 4.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1',
  }),
  'PhoneForwarded',
);
export const PhoneForwardedOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhoneForwardedOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneForwardedOutlinedIcon = svg(
  svg('path', {
    d: 'M20 15.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79M19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45zM18 11l5-5-5-5v3h-4v4h4z',
  }),
  'PhoneForwardedOutlined',
);
export const PhoneForwardedRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhoneForwardedRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneForwardedRoundedIcon = svg(
  svg('path', {
    d: 'm22.65 5.65-3.79-3.79c-.32-.32-.86-.1-.86.35V4h-3.5c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5H18v1.79c0 .45.54.67.85.35l3.79-3.79c.2-.19.2-.51.01-.7m-3.42 9.61-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98',
  }),
  'PhoneForwardedRounded',
);
export const PhoneForwardedSharpIcon = (props?: KTRawAttr) => {
  const s = _PhoneForwardedSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneForwardedSharpIcon = svg(
  svg('path', {
    d: 'm18 11 5-5-5-5v3h-4v4h4zm-4.79 6.37c-2.83-1.44-5.15-3.75-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61z',
  }),
  'PhoneForwardedSharp',
);
export const PhoneForwardedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhoneForwardedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneForwardedTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M15.2 18.21c1.21.41 2.48.67 3.8.76v-1.5c-.88-.07-1.75-.22-2.6-.45zM6.54 5h-1.5c.09 1.32.34 2.58.75 3.79l1.2-1.21c-.24-.83-.39-1.7-.45-2.58',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 15.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79M19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45zM18 11l5-5-5-5v3h-4v4h4z',
      },
      '1',
    ),
  ],
  'PhoneForwardedTwoTone',
);
export const PhoneInTalkIcon = (props?: KTRawAttr) => {
  const s = _PhoneInTalkIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneInTalkIcon = svg(
  svg('path', {
    d: 'M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z',
  }),
  'PhoneInTalk',
);
export const PhoneInTalkOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhoneInTalkOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneInTalkOutlinedIcon = svg(
  svg('path', {
    d: 'M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm4 0h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm1 3.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51z',
  }),
  'PhoneInTalkOutlined',
);
export const PhoneInTalkRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhoneInTalkRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneInTalkRoundedIcon = svg(
  svg('path', {
    d: 'M12.88 5.05c3.18.4 5.67 2.89 6.07 6.07.06.51.49.88.99.88.04 0 .08 0 .12-.01.55-.07.94-.57.87-1.12-.51-4.09-3.72-7.3-7.81-7.81-.55-.06-1.05.33-1.11.88-.07.55.32 1.05.87 1.11zm.38 2.11c-.53-.14-1.08.18-1.22.72s.18 1.08.72 1.22c1.05.27 1.87 1.09 2.15 2.15.12.45.52.75.97.75.08 0 .17-.01.25-.03.53-.14.85-.69.72-1.22-.47-1.77-1.84-3.14-3.59-3.59zm5.97 8.1-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z',
  }),
  'PhoneInTalkRounded',
);
export const PhoneInTalkSharpIcon = (props?: KTRawAttr) => {
  const s = _PhoneInTalkSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneInTalkSharpIcon = svg(
  svg('path', {
    d: 'M19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm-1.79 5.37c-2.83-1.44-5.15-3.75-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61-2.52 2.52z',
  }),
  'PhoneInTalkSharp',
);
export const PhoneInTalkTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhoneInTalkTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneInTalkTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M6.54 5h-1.5c.09 1.32.34 2.58.75 3.79l1.2-1.21c-.24-.83-.39-1.7-.45-2.58zm8.66 13.21c1.21.41 2.48.67 3.8.76v-1.5c-.88-.07-1.75-.22-2.6-.45l-1.2 1.19z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm4 0h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm1 3.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51z',
      },
      '1',
    ),
  ],
  'PhoneInTalkTwoTone',
);
export const PhoneIphoneIcon = (props?: KTRawAttr) => {
  const s = _PhoneIphoneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneIphoneIcon = svg(
  svg('path', {
    d: 'M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1m-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5-4H7V4h9z',
  }),
  'PhoneIphone',
);
export const PhoneIphoneOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhoneIphoneOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneIphoneOutlinedIcon = svg(
  svg('path', {
    d: 'M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1m-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5-4H7V4h9z',
  }),
  'PhoneIphoneOutlined',
);
export const PhoneIphoneRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhoneIphoneRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneIphoneRoundedIcon = svg(
  svg('path', {
    d: 'M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1m-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5-4H7V4h9z',
  }),
  'PhoneIphoneRounded',
);
export const PhoneIphoneSharpIcon = (props?: KTRawAttr) => {
  const s = _PhoneIphoneSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneIphoneSharpIcon = svg(
  svg('path', {
    d: 'M18 1H5v22h13zm-6.5 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5-4H7V4h9z',
  }),
  'PhoneIphoneSharp',
);
export const PhoneIphoneTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhoneIphoneTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneIphoneTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 4h9v14H7z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1m-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5-4H7V4h9z',
      },
      '1',
    ),
  ],
  'PhoneIphoneTwoTone',
);
export const PhoneLockedIcon = (props?: KTRawAttr) => {
  const s = _PhoneLockedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneLockedIcon = svg(
  [
    svg('path', { d: 'M20 5V4c0-1.1-.9-2-2-2s-2 .9-2 2v1h-1v5h6V5zm-1 0h-2V4c0-.55.45-1 1-1s1 .45 1 1z' }, '0'),
    svg(
      'path',
      {
        d: 'm15.63 14.4-2.52 2.5c-2.5-1.43-4.57-3.5-6-6l2.5-2.52c.23-.24.33-.57.27-.9L9.13 3.8c-.09-.46-.5-.8-.98-.8H4c-.56 0-1.03.47-1 1.03.17 2.89 1.05 5.6 2.43 7.97 1.58 2.73 3.85 4.99 6.57 6.57 2.37 1.37 5.08 2.26 7.97 2.43.56.03 1.03-.44 1.03-1v-4.15c0-.48-.34-.89-.8-.98l-3.67-.73c-.33-.07-.67.03-.9.26',
      },
      '1',
    ),
  ],
  'PhoneLocked',
);
export const PhoneLockedOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhoneLockedOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneLockedOutlinedIcon = svg(
  [
    svg('path', { d: 'M20 5V4c0-1.1-.9-2-2-2s-2 .9-2 2v1h-1v5h6V5zm-1 0h-2V4c0-.55.45-1 1-1s1 .45 1 1z' }, '0'),
    svg(
      'path',
      {
        d: 'm20.2 14.87-3.67-.73c-.5-.1-.83.2-.9.27l-2.52 2.5c-2.5-1.43-4.57-3.5-6-6l2.5-2.52c.23-.24.33-.57.27-.9L9.13 3.8c-.09-.46-.5-.8-.98-.8H4c-.56 0-1.03.47-1 1.03.17 2.89 1.05 5.6 2.43 7.97 1.58 2.73 3.85 4.99 6.57 6.57 2.37 1.37 5.08 2.26 7.97 2.43.55.03 1.03-.43 1.03-1v-4.15c0-.48-.34-.89-.8-.98M5.1 5h2.23l.47 2.35L6.17 9c-.54-1.3-.9-2.63-1.07-4M19 18.9c-1.37-.18-2.7-.53-4-1.07l1.65-1.63 2.35.47z',
      },
      '1',
    ),
  ],
  'PhoneLockedOutlined',
);
export const PhoneLockedRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhoneLockedRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneLockedRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20 5v-.89c0-1-.68-1.92-1.66-2.08C17.08 1.82 16 2.79 16 4v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1m-1 0h-2V4c0-.55.45-1 1-1s1 .45 1 1z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm15.63 14.4-2.52 2.5c-2.5-1.43-4.57-3.5-6-6l2.5-2.52c.23-.24.33-.57.27-.9L9.13 3.8c-.09-.46-.5-.8-.98-.8H4c-.56 0-1.03.47-1 1.03.17 2.89 1.05 5.6 2.43 7.97 1.58 2.73 3.85 4.99 6.57 6.57 2.37 1.37 5.08 2.26 7.97 2.43.56.03 1.03-.44 1.03-1v-4.15c0-.48-.34-.89-.8-.98l-3.67-.73c-.33-.07-.67.03-.9.26',
      },
      '1',
    ),
  ],
  'PhoneLockedRounded',
);
export const PhoneLockedSharpIcon = (props?: KTRawAttr) => {
  const s = _PhoneLockedSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneLockedSharpIcon = svg(
  [
    svg('path', { d: 'M20 5V4c0-1.1-.9-2-2-2s-2 .9-2 2v1h-1v5h6V5zm-1 0h-2V4c0-.55.45-1 1-1s1 .45 1 1z' }, '0'),
    svg(
      'path',
      {
        d: 'm21 15-5-1-2.9 2.9c-2.5-1.43-4.57-3.5-6-6L10 8 9 3H3c0 3.28.89 6.35 2.43 9 1.58 2.73 3.85 4.99 6.57 6.57C14.65 20.1 17.72 21 21 21z',
      },
      '1',
    ),
  ],
  'PhoneLockedSharp',
);
export const PhoneLockedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhoneLockedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneLockedTwoToneIcon = svg(
  [
    svg('path', { d: 'M20 5V4c0-1.1-.9-2-2-2s-2 .9-2 2v1h-1v5h6V5zm-1 0h-2V4c0-.55.45-1 1-1s1 .45 1 1z' }, '0'),
    svg(
      'path',
      {
        d: 'M15 17.83c1.29.54 2.63.89 4 1.07v-2.23l-2.35-.47zM7.33 5H5.1c.18 1.37.53 2.7 1.07 4L7.8 7.35z',
        opacity: '.3',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'm20.2 14.87-3.67-.73c-.5-.1-.83.2-.9.27l-2.52 2.5c-2.5-1.43-4.57-3.5-6-6l2.5-2.52c.23-.24.33-.57.27-.9L9.13 3.8c-.09-.46-.5-.8-.98-.8H4c-.56 0-1.03.47-1 1.03.17 2.89 1.05 5.6 2.43 7.97 1.58 2.73 3.85 4.99 6.57 6.57 2.37 1.37 5.08 2.26 7.97 2.43.55.03 1.03-.43 1.03-1v-4.15c0-.48-.34-.89-.8-.98M5.1 5h2.23l.47 2.35L6.17 9c-.54-1.3-.9-2.63-1.07-4M19 18.9c-1.37-.18-2.7-.53-4-1.07l1.65-1.63 2.35.47z',
      },
      '2',
    ),
  ],
  'PhoneLockedTwoTone',
);
export const PhoneMissedIcon = (props?: KTRawAttr) => {
  const s = _PhoneMissedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneMissedIcon = svg(
  svg('path', {
    d: 'M6.5 5.5 12 11l7-7-1-1-6 6-4.5-4.5H11V3H5v6h1.5zm17.21 11.17C20.66 13.78 16.54 12 12 12S3.34 13.78.29 16.67c-.18.18-.29.43-.29.71s.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.67 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.12-.52-.3-.7',
  }),
  'PhoneMissed',
);
export const PhoneMissedOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhoneMissedOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneMissedOutlinedIcon = svg(
  svg('path', {
    d: 'M23.71 16.67C20.66 13.78 16.54 12 12 12S3.34 13.78.29 16.67c-.18.18-.29.43-.29.71s.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.67 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.12-.52-.3-.7m-18.31.56c-.66.37-1.29.8-1.87 1.27l-1.07-1.07c.91-.75 1.9-1.39 2.95-1.9v1.7zm15.08 1.26c-.6-.48-1.22-.9-1.88-1.27v-1.7c1.05.51 2.03 1.15 2.95 1.9zM7 6.43l4.94 4.94 7.07-7.07-1.41-1.42-5.66 5.66L8.4 5H11V3H5v6h2z',
  }),
  'PhoneMissedOutlined',
);
export const PhoneMissedRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhoneMissedRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneMissedRoundedIcon = svg(
  svg('path', {
    d: 'M23.09 16.2c-6.33-5.59-15.86-5.59-22.18 0-.84.74-.84 2.05-.05 2.84l1.2 1.2c.71.71 1.84.77 2.62.15l1.97-1.57c.47-.37.75-.94.75-1.55V14.7c2.98-.97 6.21-.98 9.2 0v2.58c0 .6.28 1.17.75 1.55l1.96 1.56c.79.62 1.91.56 2.62-.15l1.2-1.2c.8-.79.79-2.1-.04-2.84M6 9c.55 0 1-.45 1-1V6.43l4.24 4.24c.39.39 1.02.39 1.41 0l5.66-5.66c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0l-4.95 4.95L8.4 5H10c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1',
  }),
  'PhoneMissedRounded',
);
export const PhoneMissedSharpIcon = (props?: KTRawAttr) => {
  const s = _PhoneMissedSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneMissedSharpIcon = svg(
  svg('path', {
    d: 'M23.32 16.67c-2.95-2.79-6.93-4.51-11.31-4.51-4.39 0-8.37 1.72-11.31 4.51l-.69.69L3.65 21l3.93-2.72-.01-3.49c1.4-.45 2.9-.7 4.44-.7 1.55 0 3.04.24 4.44.7l-.01 3.49L20.37 21l3.64-3.64c0-.01-.52-.52-.69-.69M7 6.43l4.94 4.94 7.07-7.07-1.41-1.42-5.66 5.66L8.4 5H11V3H5v6h2z',
  }),
  'PhoneMissedSharp',
);
export const PhoneMissedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhoneMissedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneMissedTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M18.6 17.22c.66.37 1.28.79 1.88 1.27l1.07-1.07c-.91-.75-1.9-1.39-2.95-1.9zM3.53 18.5c.58-.47 1.21-.89 1.87-1.27v-1.71c-1.05.51-2.03 1.15-2.95 1.9z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M23.71 16.67C20.66 13.78 16.54 12 12 12S3.34 13.78.29 16.67c-.18.18-.29.43-.29.71s.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.67 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.12-.52-.3-.7m-18.31.56c-.66.37-1.29.8-1.87 1.27l-1.07-1.07c.91-.75 1.9-1.39 2.95-1.9v1.7zm15.08 1.26c-.6-.48-1.22-.9-1.88-1.27v-1.7c1.05.51 2.03 1.15 2.95 1.9zM7 6.43l4.94 4.94 7.07-7.07-1.41-1.42-5.66 5.66L8.4 5H11V3H5v6h2z',
      },
      '1',
    ),
  ],
  'PhoneMissedTwoTone',
);
export const PhoneOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhoneOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneOutlinedIcon = svg(
  svg('path', {
    d: 'M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1',
  }),
  'PhoneOutlined',
);
export const PhonePausedIcon = (props?: KTRawAttr) => {
  const s = _PhonePausedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonePausedIcon = svg(
  svg('path', {
    d: 'M17 3h-2v7h2zm3 12.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M19 3v7h2V3z',
  }),
  'PhonePaused',
);
export const PhonePausedOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhonePausedOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonePausedOutlinedIcon = svg(
  svg('path', {
    d: 'M6.54 5c.06.88.21 1.75.44 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zm9.86 12.01c.85.24 1.72.39 2.6.45v1.5c-1.32-.09-2.6-.35-3.8-.76zM7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1M15 3h2v7h-2zm4 0h2v7h-2z',
  }),
  'PhonePausedOutlined',
);
export const PhonePausedRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhonePausedRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonePausedRoundedIcon = svg(
  svg('path', {
    d: 'M16 3c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1m3 1v5c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1m.23 11.26-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98',
  }),
  'PhonePausedRounded',
);
export const PhonePausedSharpIcon = (props?: KTRawAttr) => {
  const s = _PhonePausedSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonePausedSharpIcon = svg(
  svg('path', {
    d: 'M15 3h2v7h-2zm4 0h2v7h-2zm-5.79 14.37c-2.83-1.44-5.15-3.75-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61z',
  }),
  'PhonePausedSharp',
);
export const PhonePausedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhonePausedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonePausedTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M6.54 5h-1.5c.09 1.32.34 2.58.75 3.79l1.2-1.21c-.24-.83-.39-1.7-.45-2.58m8.66 13.21c1.21.41 2.48.67 3.8.76v-1.5c-.88-.07-1.75-.22-2.6-.45z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 15.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79M19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45zM15 3h2v7h-2zm4 0h2v7h-2z',
      },
      '1',
    ),
  ],
  'PhonePausedTwoTone',
);
export const PhoneRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhoneRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneRoundedIcon = svg(
  svg('path', {
    d: 'm19.23 15.26-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98',
  }),
  'PhoneRounded',
);
export const PhoneSharpIcon = (props?: KTRawAttr) => {
  const s = _PhoneSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneSharpIcon = svg(
  svg('path', {
    d: 'm21 15.46-5.27-.61-2.52 2.52c-2.83-1.44-5.15-3.75-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z',
  }),
  'PhoneSharp',
);
export const PhoneTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhoneTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhoneTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19 17.47c-.88-.07-1.75-.22-2.6-.45l-1.19 1.19c1.2.41 2.48.67 3.8.75v-1.49zM5.03 5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.23-.84-.38-1.71-.44-2.6z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M9.07 7.57C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02m7.33 9.45c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM5.79 8.8c-.41-1.21-.67-2.48-.76-3.8h1.5c.07.89.22 1.76.46 2.59z',
      },
      '1',
    ),
  ],
  'PhoneTwoTone',
);
export const PhonelinkIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkIcon = svg(
  svg('path', {
    d: 'M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 9h-4v-7h4z',
  }),
  'Phonelink',
);
export const PhonelinkEraseIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkEraseIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkEraseIcon = svg(
  svg('path', {
    d: 'm13 8.2-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2',
  }),
  'PhonelinkErase',
);
export const PhonelinkEraseOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkEraseOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkEraseOutlinedIcon = svg(
  svg('path', {
    d: 'm13 8.2-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2',
  }),
  'PhonelinkEraseOutlined',
);
export const PhonelinkEraseRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkEraseRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkEraseRoundedIcon = svg(
  svg('path', {
    d: 'M12.5 7.7c-.28-.28-.72-.28-1 0L8 11.2 4.5 7.7c-.28-.28-.72-.28-1 0s-.28.72 0 1L7 12.2l-3.5 3.5c-.28.28-.28.72 0 1s.72.28 1 0L8 13.2l3.5 3.5c.28.28.72.28 1 0s.28-.72 0-1L9 12.2l3.5-3.5c.28-.28.28-.72 0-1M19 1H9c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1V4h10v16H9v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2',
  }),
  'PhonelinkEraseRounded',
);
export const PhonelinkEraseSharpIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkEraseSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkEraseSharpIcon = svg(
  svg('path', { d: 'm13 8.2-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4zM21 1H7v5h2V4h10v16H9v-2H7v5h14z' }),
  'PhonelinkEraseSharp',
);
export const PhonelinkEraseTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkEraseTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkEraseTwoToneIcon = svg(
  svg('path', {
    d: 'm4 17.2 4-4 4 4 1-1-4-4 4-4-1-1-4 4-4-4-1 1 4 4-4 4zM9 23h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2',
  }),
  'PhonelinkEraseTwoTone',
);
export const PhonelinkLockIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkLockIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkLockIcon = svg(
  svg('path', {
    d: 'M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-8.2 10V9.5C10.8 8.1 9.4 7 8 7S5.2 8.1 5.2 9.5V11c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3z',
  }),
  'PhonelinkLock',
);
export const PhonelinkLockOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkLockOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkLockOutlinedIcon = svg(
  svg('path', {
    d: 'M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-8.2 10V9.5C10.8 8.1 9.4 7 8 7S5.2 8.1 5.2 9.5V11c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3z',
  }),
  'PhonelinkLockOutlined',
);
export const PhonelinkLockRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkLockRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkLockRoundedIcon = svg(
  [
    svg(
      'path',
      { d: 'M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2L7 1.01C5.9 1.01 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2z' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 11v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1z',
      },
      '1',
    ),
  ],
  'PhonelinkLockRounded',
);
export const PhonelinkLockSharpIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkLockSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkLockSharpIcon = svg(
  svg('path', {
    d: 'M21 1H7v5h2V4h10v16H9v-2H7v5h14zM10.8 11V9.5C10.8 8.1 9.4 7 8 7S5.2 8.1 5.2 9.5V11H4v6h8v-6zm-1.3 0h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3z',
  }),
  'PhonelinkLockSharp',
);
export const PhonelinkLockTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkLockTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkLockTwoToneIcon = svg(
  svg('path', {
    d: 'M8 7C6.6 7 5.2 8.1 5.2 9.5V11c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3V9.5C10.8 8.1 9.4 7 8 7m1.5 4h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3zM21 21V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2',
  }),
  'PhonelinkLockTwoTone',
);
export const PhonelinkOffIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkOffIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkOffIcon = svg(
  svg('path', {
    d: 'M22 6V4H6.82l2 2zM1.92 1.65.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.27-1.27L3.89 3.62zM4 6.27 14.73 17H4zM23 8h-6c-.55 0-1 .45-1 1v4.18l2 2V10h4v7h-2.18l3 3H23c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1',
  }),
  'PhonelinkOff',
);
export const PhonelinkOffOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkOffOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkOffOutlinedIcon = svg(
  svg('path', {
    d: 'M22 6V4H7.39l2 2zm2 13V9c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v3.61l2 2V10h4v7h-1.61l2.93 2.93c.39-.13.68-.49.68-.93M2.06 1.51.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.41-1.41zM4 17V6.27L14.73 17z',
  }),
  'PhonelinkOffOutlined',
);
export const PhonelinkOffRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkOffRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkOffRoundedIcon = svg(
  svg('path', {
    d: 'M24 19V9c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v3.61l2 2V10h4v7h-1.61l2.93 2.93c.39-.13.68-.49.68-.93M21 6c.55 0 1-.45 1-1s-.45-1-1-1H7.39l2 2zM1.36 2.21c-.39.39-.39 1.02 0 1.41l1.11 1.11C2.18 5.08 2 5.52 2 6v11h-.5c-.83 0-1.5.67-1.5 1.5S.67 20 1.5 20h16.23l1.64 1.64c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L2.77 2.21a.996.996 0 0 0-1.41 0M4 17V6.27L14.73 17z',
  }),
  'PhonelinkOffRounded',
);
export const PhonelinkOffSharpIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkOffSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkOffSharpIcon = svg(
  svg('path', {
    d: 'm4.56 4-2.5-2.49zM24 8h-8v4.61l2 2V10h4v7h-1.61l3 3H24zm-2-2V4H7.39l2 2zM2.06 1.51.65 2.92 2 4.27V17H0v3h17.73l2.35 2.35 1.41-1.41zM4 17V6.27L14.73 17z',
  }),
  'PhonelinkOffSharp',
);
export const PhonelinkOffTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkOffTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkOffTwoToneIcon = svg(
  [
    svg('path', { d: 'M22 17v-7h-4v4.61L20.39 17z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M23 8h-6c-.55 0-1 .45-1 1v3.61l2 2V10h4v7h-1.61l2.93 2.93c.39-.13.68-.49.68-.93V9c0-.55-.45-1-1-1m-1-2V4H7.39l2 2zM.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.41-1.41L2.06 1.51zM4 6.27 14.73 17H4z',
      },
      '1',
    ),
  ],
  'PhonelinkOffTwoTone',
);
export const PhonelinkOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkOutlinedIcon = svg(
  svg('path', {
    d: 'M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 9h-4v-7h4z',
  }),
  'PhonelinkOutlined',
);
export const PhonelinkRingIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkRingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkRingIcon = svg(
  svg('path', {
    d: 'm20.1 7.7-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5M18 9.8l-1 1c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3M14 1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 19H4V4h10z',
  }),
  'PhonelinkRing',
);
export const PhonelinkRingOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkRingOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkRingOutlinedIcon = svg(
  svg('path', {
    d: 'm20.1 7.7-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5M18 9.8l-1 1c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3M14 1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 19H4V4h10z',
  }),
  'PhonelinkRingOutlined',
);
export const PhonelinkRingRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkRingRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkRingRoundedIcon = svg(
  svg('path', {
    d: 'M14 1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 19H4V4h10zm6.63-11.74c-.26-.32-.74-.36-1.04-.06l-.03.03c-.25.25-.26.65-.05.93 1.26 1.64 1.25 3.87-.02 5.57-.21.28-.19.67.05.92l.05.05c.29.29.76.26 1.03-.05 1.8-2.13 1.8-5.19.01-7.39m-3.21 2.11-.06.06c-.2.2-.26.5-.15.76.21.49.21 1.03 0 1.52-.11.26-.05.56.15.76l.08.08c.32.32.87.25 1.09-.15.49-.89.49-1.94-.01-2.86a.687.687 0 0 0-1.1-.17',
  }),
  'PhonelinkRingRounded',
);
export const PhonelinkRingSharpIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkRingSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkRingSharpIcon = svg(
  svg('path', {
    d: 'm20.1 7.7-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5M18 9.8l-1 1c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3M16 1H2v22h14zm-2 19H4V4h10z',
  }),
  'PhonelinkRingSharp',
);
export const PhonelinkRingTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkRingTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkRingTwoToneIcon = svg(
  [
    svg('path', { d: 'M4 4h10v16H4z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M14 1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 19H4V4h10zm6.1-12.3-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5M17 10.8c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3z',
      },
      '1',
    ),
  ],
  'PhonelinkRingTwoTone',
);
export const PhonelinkRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkRoundedIcon = svg(
  svg('path', {
    d: 'M4 7c0-.55.45-1 1-1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v11h-.5c-.83 0-1.5.67-1.5 1.5S.67 20 1.5 20h11c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H4zm19 1h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 9h-4v-7h4z',
  }),
  'PhonelinkRounded',
);
export const PhonelinkSetupIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkSetupIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkSetupIcon = svg(
  svg('path', {
    d: 'M10.82 12.49c.02-.16.04-.32.04-.49s-.02-.33-.04-.49l1.08-.82c.1-.07.12-.21.06-.32l-1.03-1.73c-.06-.11-.2-.15-.31-.11l-1.28.5c-.27-.2-.56-.36-.87-.49l-.2-1.33c0-.12-.11-.21-.24-.21H5.98c-.13 0-.24.09-.26.21l-.2 1.32c-.31.12-.6.3-.87.49l-1.28-.5c-.12-.05-.25 0-.31.11l-1.03 1.73c-.06.12-.03.25.07.33l1.08.82c-.02.16-.03.33-.03.49 0 .17.02.33.04.49l-1.09.83c-.1.07-.12.21-.06.32l1.03 1.73c.06.11.2.15.31.11l1.28-.5c.27.2.56.36.87.49l.2 1.32c.01.12.12.21.25.21h2.06c.13 0 .24-.09.25-.21l.2-1.32c.31-.12.6-.3.87-.49l1.28.5c.12.05.25 0 .31-.11l1.03-1.73c.06-.11.04-.24-.06-.32zM7 13.75c-.99 0-1.8-.78-1.8-1.75s.81-1.75 1.8-1.75 1.8.78 1.8 1.75S8 13.75 7 13.75M18 1.01 8 1c-1.1 0-2 .9-2 2v3h2V5h10v14H8v-1H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99',
  }),
  'PhonelinkSetup',
);
export const PhonelinkSetupOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkSetupOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkSetupOutlinedIcon = svg(
  svg('path', {
    d: 'M7 3v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2m2.5 12.5c.29-.12.55-.29.8-.48l-.02.03 1.01.39c.23.09.49 0 .61-.22l.84-1.46c.12-.21.07-.49-.12-.64l-.85-.68-.02.03c.02-.16.05-.32.05-.48s-.03-.32-.05-.48l.02.03.85-.68c.19-.15.24-.43.12-.64l-.84-1.46c-.12-.21-.38-.31-.61-.22l-1.01.39.02.03c-.25-.17-.51-.34-.8-.46l-.17-1.08C9.3 7.18 9.09 7 8.84 7H7.16c-.25 0-.46.18-.49.42L6.5 8.5c-.29.12-.55.29-.8.48l.02-.03-1.02-.39c-.23-.09-.49 0-.61.22l-.84 1.46c-.12.21-.07.49.12.64l.85.68.02-.03c-.02.15-.05.31-.05.47s.03.32.05.48l-.02-.03-.85.68c-.19.15-.24.43-.12.64l.84 1.46c.12.21.38.31.61.22l1.01-.39-.01-.04c.25.19.51.36.8.48l.17 1.07c.03.25.24.43.49.43h1.68c.25 0 .46-.18.49-.42zM6 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2',
  }),
  'PhonelinkSetupOutlined',
);
export const PhonelinkSetupRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkSetupRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkSetupRoundedIcon = svg(
  svg('path', {
    d: 'M7 3v2c0 .55.45 1 1 1s1-.45 1-1V4h10v16H9v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2m2.5 12.5c.29-.12.55-.29.8-.48l-.02.03 1.01.39c.23.09.49 0 .61-.22l.84-1.46c.12-.21.07-.49-.12-.64l-.85-.68-.02.03c.02-.16.05-.32.05-.48s-.03-.32-.05-.48l.02.03.85-.68c.19-.15.24-.43.12-.64l-.84-1.46c-.12-.21-.38-.31-.61-.22l-1.01.39.02.03c-.25-.17-.51-.34-.8-.46l-.17-1.08C9.3 7.18 9.09 7 8.84 7H7.16c-.25 0-.46.18-.49.42L6.5 8.5c-.29.12-.55.29-.8.48l.02-.03-1.02-.39c-.23-.09-.49 0-.61.22l-.84 1.46c-.12.21-.07.49.12.64l.85.68.02-.03c-.02.15-.05.31-.05.47s.03.32.05.48l-.02-.03-.85.68c-.19.15-.24.43-.12.64l.84 1.46c.12.21.38.31.61.22l1.01-.39-.01-.04c.25.19.51.36.8.48l.17 1.07c.03.25.24.43.49.43h1.68c.25 0 .46-.18.49-.42zM6 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2',
  }),
  'PhonelinkSetupRounded',
);
export const PhonelinkSetupSharpIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkSetupSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkSetupSharpIcon = svg(
  svg('path', {
    d: 'M7 1v5h2V4h10v16H9v-2H7v5h14V1zm2.5 14.5c.29-.12.55-.29.8-.48l-.02.03 1.41.55 1.27-2.2-1.18-.95-.02.03c.02-.16.05-.32.05-.48s-.03-.32-.05-.48l.02.03 1.18-.95-1.26-2.2-1.41.55.02.03c-.26-.19-.52-.36-.81-.48L9.27 7H6.73L6.5 8.5c-.29.12-.55.29-.8.48l.02-.03L4.3 8.4l-1.27 2.2 1.18.95.02-.03c-.01.16-.04.32-.04.48s.03.32.05.48l-.02-.03-1.18.95 1.27 2.2 1.41-.55-.02-.03c.25.19.51.36.8.48l.23 1.5h2.54zM6 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2',
  }),
  'PhonelinkSetupSharp',
);
export const PhonelinkSetupTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkSetupTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkSetupTwoToneIcon = svg(
  svg('path', {
    d: 'M7 3v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2m2.5 12.5c.29-.12.55-.29.8-.48l-.02.03 1.01.39c.23.09.49 0 .61-.22l.84-1.46c.12-.21.07-.49-.12-.64l-.85-.68-.02.03c.02-.16.05-.32.05-.48s-.03-.32-.05-.48l.02.03.85-.68c.19-.15.24-.43.12-.64l-.84-1.46c-.12-.21-.38-.31-.61-.22l-1.01.39.02.03c-.25-.17-.51-.34-.8-.46l-.17-1.08C9.3 7.18 9.09 7 8.84 7H7.16c-.25 0-.46.18-.49.42L6.5 8.5c-.29.12-.55.29-.8.48l.02-.03-1.02-.39c-.23-.09-.49 0-.61.22l-.84 1.46c-.12.21-.07.49.12.64l.85.68.02-.03c-.02.15-.05.31-.05.47s.03.32.05.48l-.02-.03-.85.68c-.19.15-.24.43-.12.64l.84 1.46c.12.21.38.31.61.22l1.01-.39-.01-.04c.25.19.51.36.8.48l.17 1.07c.03.25.24.43.49.43h1.68c.25 0 .46-.18.49-.42zM6 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2',
  }),
  'PhonelinkSetupTwoTone',
);
export const PhonelinkSharpIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkSharpIcon = svg(
  svg('path', { d: 'M4 6h18V4H2v13H0v3h14v-3H4zm20 2h-8v12h8zm-2 9h-4v-7h4z' }),
  'PhonelinkSharp',
);
export const PhonelinkTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhonelinkTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhonelinkTwoToneIcon = svg(
  [
    svg('path', { d: 'M18 10h4v7h-4z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 9h-4v-7h4z',
      },
      '1',
    ),
  ],
  'PhonelinkTwoTone',
);
export const PhotoIcon = (props?: KTRawAttr) => {
  const s = _PhotoIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoIcon = svg(
  svg('path', {
    d: 'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z',
  }),
  'Photo',
);
export const PhotoAlbumIcon = (props?: KTRawAttr) => {
  const s = _PhotoAlbumIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoAlbumIcon = svg(
  svg('path', {
    d: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 2h5v7l-2.5-1.5L11 11zM7 18l2.38-3.17L11 17l2.62-3.5L17 18z',
  }),
  'PhotoAlbum',
);
export const PhotoAlbumOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhotoAlbumOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoAlbumOutlinedIcon = svg(
  svg('path', {
    d: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V4h5v7l2.5-1.5L16 11V4h2zm-4.38-6.5L17 18H7l2.38-3.17L11 17z',
  }),
  'PhotoAlbumOutlined',
);
export const PhotoAlbumRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhotoAlbumRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoAlbumRoundedIcon = svg(
  svg('path', {
    d: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2.76 8.55L13.5 9.5l-1.74 1.05c-.33.2-.76-.04-.76-.43V4h5v6.12c0 .39-.42.63-.76.43M7.6 17.2l1.38-1.83c.2-.27.6-.27.8 0L11 17l2.23-2.97c.2-.27.6-.27.8 0l2.38 3.17c.25.33.01.8-.4.8H8c-.41 0-.65-.47-.4-.8',
  }),
  'PhotoAlbumRounded',
);
export const PhotoAlbumSharpIcon = (props?: KTRawAttr) => {
  const s = _PhotoAlbumSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoAlbumSharpIcon = svg(
  svg('path', { d: 'M20 2H4v20h16zm-9 2h5v7l-2.5-1.5L11 11zM7 18l2.38-3.17L11 17l2.62-3.5L17 18z' }),
  'PhotoAlbumSharp',
);
export const PhotoAlbumTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhotoAlbumTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoAlbumTwoToneIcon = svg(
  [
    svg('path', { d: 'M16 4v7l-2.5-1.5L11 11V4H6v16h12V4zM7 18l2.38-3.17L11 17l2.62-3.5L17 18z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V4h5v7l2.5-1.5L16 11V4h2zm-4.38-6.5L17 18H7l2.38-3.17L11 17z',
      },
      '1',
    ),
  ],
  'PhotoAlbumTwoTone',
);
export const PhotoCameraIcon = (props?: KTRawAttr) => {
  const s = _PhotoCameraIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoCameraIcon = svg(
  [
    svg('circle', { cx: '12', cy: '12', r: '3.2' }, '0'),
    svg(
      'path',
      {
        d: 'M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5',
      },
      '1',
    ),
  ],
  'PhotoCamera',
);
export const PhotoCameraBackIcon = (props?: KTRawAttr) => {
  const s = _PhotoCameraBackIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoCameraBackIcon = svg(
  svg('path', {
    d: 'M20 5c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3.17L9 3h6l1.83 2zm0 14V7H4v12zm-6-7-3 3.72L9 13l-3 4h12z',
  }),
  'PhotoCameraBack',
);
export const PhotoCameraBackOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhotoCameraBackOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoCameraBackOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 14H4V7h4.05l1.83-2h4.24l1.83 2H20z',
      },
      '0',
    ),
    svg('path', { d: 'M11.25 16 9 13l-3 4h12l-3.75-5z' }, '1'),
  ],
  'PhotoCameraBackOutlined',
);
export const PhotoCameraBackRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhotoCameraBackRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoCameraBackRoundedIcon = svg(
  svg('path', {
    d: 'M20 5h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65H9.88c-.56 0-1.1.24-1.47.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-3 12H7c-.41 0-.65-.47-.4-.8l2-2.67c.2-.27.6-.27.8 0L11.25 16l2.6-3.47c.2-.27.6-.27.8 0l2.75 3.67c.25.33.01.8-.4.8',
  }),
  'PhotoCameraBackRounded',
);
export const PhotoCameraBackSharpIcon = (props?: KTRawAttr) => {
  const s = _PhotoCameraBackSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoCameraBackSharpIcon = svg(
  svg('path', { d: 'M16.83 5 15 3H9L7.17 5H2v16h20V5zM6 17l3-4 2.25 3 3-4L18 17z' }),
  'PhotoCameraBackSharp',
);
export const PhotoCameraBackTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhotoCameraBackTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoCameraBackTwoToneIcon = svg(
  [
    svg('path', { d: 'm15.95 7-1.83-2H9.88L8.05 7H4v12h16V7zM6 17l3-4 2.25 3 3-4L18 17z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 14H4V7h4.05l1.83-2h4.24l1.83 2H20zm-8.75-3L9 13l-3 4h12l-3.75-5z',
      },
      '1',
    ),
  ],
  'PhotoCameraBackTwoTone',
);
export const PhotoCameraFrontIcon = (props?: KTRawAttr) => {
  const s = _PhotoCameraFrontIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoCameraFrontIcon = svg(
  svg('path', {
    d: 'm18 10.48 4-3.98v11l-4-3.98V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2zm-2-.79V6H4v12h12zM10 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0 1c1.34 0 4 .67 4 2v1H6v-1c0-1.33 2.66-2 4-2',
  }),
  'PhotoCameraFront',
);
export const PhotoCameraFrontOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhotoCameraFrontOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoCameraFrontOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 14H4V7h4.05l1.83-2h4.24l1.83 2H20z',
      },
      '0',
    ),
    svg('circle', { cx: '12', cy: '11', r: '2' }, '1'),
    svg(
      'path',
      {
        d: 'M14.78 14.58c-.85-.37-1.79-.58-2.78-.58s-1.93.21-2.78.58C8.48 14.9 8 15.62 8 16.43V17h8v-.57c0-.81-.48-1.53-1.22-1.85',
      },
      '2',
    ),
  ],
  'PhotoCameraFrontOutlined',
);
export const PhotoCameraFrontRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhotoCameraFrontRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoCameraFrontRoundedIcon = svg(
  svg('path', {
    d: 'M20 5h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65H9.88c-.56 0-1.1.24-1.47.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-8 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m4 8H8v-.57c0-.81.48-1.53 1.22-1.85.85-.37 1.79-.58 2.78-.58s1.93.21 2.78.58c.74.32 1.22 1.04 1.22 1.85z',
  }),
  'PhotoCameraFrontRounded',
);
export const PhotoCameraFrontSharpIcon = (props?: KTRawAttr) => {
  const s = _PhotoCameraFrontSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoCameraFrontSharpIcon = svg(
  svg('path', {
    d: 'M16.83 5 15 3H9L7.17 5H2v16h20V5zM12 9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m4 8H8v-.57c0-.81.48-1.53 1.22-1.85.85-.37 1.79-.58 2.78-.58s1.93.21 2.78.58c.74.32 1.22 1.04 1.22 1.85z',
  }),
  'PhotoCameraFrontSharp',
);
export const PhotoCameraFrontTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhotoCameraFrontTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoCameraFrontTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm15.95 7-1.83-2H9.88L8.05 7H4v12h16V7zM12 9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m4 8H8v-.57c0-.81.48-1.53 1.22-1.85.85-.37 1.79-.58 2.78-.58s1.93.21 2.78.58c.74.32 1.22 1.04 1.22 1.85z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 14H4V7h4.05l1.83-2h4.24l1.83 2H20zm-8-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58c-.85-.37-1.79-.58-2.78-.58s-1.93.21-2.78.58C8.48 14.9 8 15.62 8 16.43V17h8v-.57c0-.81-.48-1.53-1.22-1.85',
      },
      '1',
    ),
  ],
  'PhotoCameraFrontTwoTone',
);
export const PhotoCameraOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhotoCameraOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoCameraOutlinedIcon = svg(
  svg('path', {
    d: 'm14.12 4 1.83 2H20v12H4V6h4.05l1.83-2zM15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5',
  }),
  'PhotoCameraOutlined',
);
export const PhotoCameraRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhotoCameraRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoCameraRoundedIcon = svg(
  [
    svg('circle', { cx: '12', cy: '12', r: '3' }, '0'),
    svg(
      'path',
      {
        d: 'M20 4h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65H9.88c-.56 0-1.1.24-1.48.65L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5',
      },
      '1',
    ),
  ],
  'PhotoCameraRounded',
);
export const PhotoCameraSharpIcon = (props?: KTRawAttr) => {
  const s = _PhotoCameraSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoCameraSharpIcon = svg(
  [
    svg('circle', { cx: '12', cy: '12', r: '3' }, '0'),
    svg(
      'path',
      { d: 'M9 2 7.17 4H2v16h20V4h-5.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5' },
      '1',
    ),
  ],
  'PhotoCameraSharp',
);
export const PhotoCameraTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhotoCameraTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoCameraTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20 6h-4.05l-1.83-2H9.88L8.05 6H4v12h16zm-8 11c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M4 6h4.05l1.83-2h4.24l1.83 2H20v12H4zm8 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3',
      },
      '1',
    ),
  ],
  'PhotoCameraTwoTone',
);
export const PhotoFilterIcon = (props?: KTRawAttr) => {
  const s = _PhotoFilterIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoFilterIcon = svg(
  svg('path', {
    d: 'M19.02 10v9H5V5h9V3H5.02c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9zM17 10l.94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7l2.06.94zm-3.75.75L12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12z',
  }),
  'PhotoFilter',
);
export const PhotoFilterOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhotoFilterOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoFilterOutlinedIcon = svg(
  svg('path', {
    d: 'M19 10v9H4.98V5h9V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9zm-2.94-2.06L17 10l.94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7zM12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12l-2.75-1.25z',
  }),
  'PhotoFilterOutlined',
);
export const PhotoFilterRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhotoFilterRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoFilterRoundedIcon = svg(
  svg('path', {
    d: 'M19.02 10.99V18c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h7c.55 0 1-.45 1-1s-.45-1-1-1H5.02c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2H19c1.1 0 2-.89 2-2v-8.01c0-.55-.44-.99-.99-.99s-.99.44-.99.99m-5.77-.24L12.46 9c-.18-.39-.73-.39-.91 0l-.79 1.75-1.76.79c-.39.18-.39.73 0 .91l1.75.79.79 1.76c.18.39.73.39.91 0l.79-1.75 1.76-.79c.39-.18.39-.73 0-.91zm4.69-4.69-.6-1.32c-.13-.29-.55-.29-.69 0l-.6 1.32-1.32.6c-.29.13-.29.55 0 .69l1.32.6.6 1.32c.13.29.55.29.69 0l.6-1.32 1.32-.6c.29-.13.29-.55 0-.69z',
  }),
  'PhotoFilterRounded',
);
export const PhotoFilterSharpIcon = (props?: KTRawAttr) => {
  const s = _PhotoFilterSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoFilterSharpIcon = svg(
  svg('path', {
    d: 'M19 10v9H4.98V5h9V3H3v18h18V10zm-2 0 .94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7l2.06.94zm-3.75.75L12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12z',
  }),
  'PhotoFilterSharp',
);
export const PhotoFilterTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhotoFilterTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoFilterTwoToneIcon = svg(
  svg('path', {
    d: 'M19 10v9H4.98V5h9V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9zm-2.94-2.06L17 10l.94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7zM12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12l-2.75-1.25z',
  }),
  'PhotoFilterTwoTone',
);
export const PhotoLibraryIcon = (props?: KTRawAttr) => {
  const s = _PhotoLibraryIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoLibraryIcon = svg(
  svg('path', {
    d: 'M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2m-11-4 2.03 2.71L16 11l4 5H8zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6z',
  }),
  'PhotoLibrary',
);
export const PhotoLibraryOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhotoLibraryOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoLibraryOutlinedIcon = svg(
  svg('path', {
    d: 'M20 4v12H8V4zm0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8.5 9.67 1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6z',
  }),
  'PhotoLibraryOutlined',
);
export const PhotoLibraryRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhotoLibraryRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoLibraryRoundedIcon = svg(
  svg('path', {
    d: 'M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2m-10.6-3.47 1.63 2.18 2.58-3.22c.2-.25.58-.25.78 0l2.96 3.7c.26.33.03.81-.39.81H9c-.41 0-.65-.47-.4-.8l2-2.67c.2-.26.6-.26.8 0M2 7v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1s-1 .45-1 1',
  }),
  'PhotoLibraryRounded',
);
export const PhotoLibrarySharpIcon = (props?: KTRawAttr) => {
  const s = _PhotoLibrarySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoLibrarySharpIcon = svg(
  svg('path', { d: 'M22 18V2H6v16zm-11-6 2.03 2.71L16 11l4 5H8zM2 6v16h16v-2H4V6z' }),
  'PhotoLibrarySharp',
);
export const PhotoLibraryTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhotoLibraryTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoLibraryTwoToneIcon = svg(
  [
    svg('path', { d: 'M8 16h12V4H8zm3.5-4.33 1.69 2.26 2.48-3.09L19 15H9z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2m-2 0H8V4h12zm-4.33-5.17-2.48 3.09-1.69-2.25L9 15h10zM4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2',
      },
      '1',
    ),
  ],
  'PhotoLibraryTwoTone',
);
export const PhotoOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhotoOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoOutlinedIcon = svg(
  svg('path', {
    d: 'M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4.86 8.86-3 3.87L9 13.14 6 17h12z',
  }),
  'PhotoOutlined',
);
export const PhotoRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhotoRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoRoundedIcon = svg(
  svg('path', {
    d: 'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.9 13.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02',
  }),
  'PhotoRounded',
);
export const PhotoSharpIcon = (props?: KTRawAttr) => {
  const s = _PhotoSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoSharpIcon = svg(
  svg('path', { d: 'M21 21V3H3v18zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z' }),
  'PhotoSharp',
);
export const PhotoSizeSelectActualIcon = (props?: KTRawAttr) => {
  const s = _PhotoSizeSelectActualIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoSizeSelectActualIcon = svg(
  svg('path', {
    d: 'M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2M5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6z',
  }),
  'PhotoSizeSelectActual',
);
export const PhotoSizeSelectActualOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhotoSizeSelectActualOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoSizeSelectActualOutlinedIcon = svg(
  svg('path', {
    d: 'M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2m0 15.92c-.02.03-.06.06-.08.08H3V5.08L3.08 5h17.83c.03.02.06.06.08.08v13.84zm-10-3.41L8.5 12.5 5 17h14l-4.5-6z',
  }),
  'PhotoSizeSelectActualOutlined',
);
export const PhotoSizeSelectActualRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhotoSizeSelectActualRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoSizeSelectActualRoundedIcon = svg(
  svg('path', {
    d: 'M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2M5.63 16.19l2.49-3.2c.2-.25.58-.26.78-.01l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.41-.01-.65-.49-.39-.82',
  }),
  'PhotoSizeSelectActualRounded',
);
export const PhotoSizeSelectActualSharpIcon = (props?: KTRawAttr) => {
  const s = _PhotoSizeSelectActualSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoSizeSelectActualSharpIcon = svg(
  svg('path', { d: 'M23 3H1v18h22zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6z' }),
  'PhotoSizeSelectActualSharp',
);
export const PhotoSizeSelectActualTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhotoSizeSelectActualTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoSizeSelectActualTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M3.08 5 3 5.08V19h17.92c.03-.02.06-.06.08-.08V5.08L20.92 5zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2m0 15.92c-.02.03-.06.06-.08.08H3V5.08L3.08 5h17.83c.03.02.06.06.08.08v13.84zm-10-3.41L8.5 12.5 5 17h14l-4.5-6z',
      },
      '1',
    ),
  ],
  'PhotoSizeSelectActualTwoTone',
);
export const PhotoSizeSelectLargeIcon = (props?: KTRawAttr) => {
  const s = _PhotoSizeSelectLargeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoSizeSelectLargeIcon = svg(
  svg('path', {
    d: 'M21 15h2v2h-2zm0-4h2v2h-2zm2 8h-2v2c1 0 2-1 2-2M13 3h2v2h-2zm8 4h2v2h-2zm0-4v2h2c0-1-1-2-2-2M1 7h2v2H1zm16-4h2v2h-2zm0 16h2v2h-2zM3 3C2 3 1 4 1 5h2zm6 0h2v2H9zM5 3h2v2H5zm-4 8v8c0 1.1.9 2 2 2h12V11zm2 8 2.5-3.21 1.79 2.15 2.5-3.22L13 19z',
  }),
  'PhotoSizeSelectLarge',
);
export const PhotoSizeSelectLargeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhotoSizeSelectLargeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoSizeSelectLargeOutlinedIcon = svg(
  svg('path', {
    d: 'M21 15h2v2h-2zm0-4h2v2h-2zm2 8h-2v2c1 0 2-1 2-2M13 3h2v2h-2zm8 4h2v2h-2zm0-4v2h2c0-1-1-2-2-2M1 7h2v2H1zm16-4h2v2h-2zm0 16h2v2h-2zM3 3C2 3 1 4 1 5h2zm6 0h2v2H9zM5 3h2v2H5zm-4 8v8c0 1.1.9 2 2 2h12V11zm2 8 2.5-3.21 1.79 2.15 2.5-3.22L13 19z',
  }),
  'PhotoSizeSelectLargeOutlined',
);
export const PhotoSizeSelectLargeRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhotoSizeSelectLargeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoSizeSelectLargeRoundedIcon = svg(
  svg('path', {
    d: 'M21 15h2v2h-2zm0-4h2v2h-2zm2 8h-2v2c1 0 2-1 2-2M13 3h2v2h-2zm8 4h2v2h-2zm0-4v2h2c0-1-1-2-2-2M1 7h2v2H1zm16-4h2v2h-2zm0 16h2v2h-2zM3 3C2 3 1 4 1 5h2zm6 0h2v2H9zM5 3h2v2H5zm-4 8v8c0 1.1.9 2 2 2h12v-8c0-1.1-.9-2-2-2zm2.63 7.19 1.49-1.91c.2-.25.57-.26.78-.01l1.39 1.67 2.1-2.7c.2-.26.6-.26.79.01l2.22 2.96c.25.33.01.8-.4.8H4.02c-.41-.01-.65-.49-.39-.82',
  }),
  'PhotoSizeSelectLargeRounded',
);
export const PhotoSizeSelectLargeSharpIcon = (props?: KTRawAttr) => {
  const s = _PhotoSizeSelectLargeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoSizeSelectLargeSharpIcon = svg(
  svg('path', {
    d: 'M21 15h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm-8-8h2v2h-2zm8 4h2v2h-2zM1 7h2v2H1zm16-4h2v2h-2zm0 16h2v2h-2zM3 3H1v2h2zm20 0h-2v2h2zM9 3h2v2H9zM5 3h2v2H5zm-4 8v10h14V11zm2 8 2.5-3.21 1.79 2.15 2.5-3.22L13 19z',
  }),
  'PhotoSizeSelectLargeSharp',
);
export const PhotoSizeSelectLargeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhotoSizeSelectLargeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoSizeSelectLargeTwoToneIcon = svg(
  svg('path', {
    d: 'M17 19h2v2h-2zM1 19c0 1.1.9 2 2 2h12V11H1zm4.5-3.21 1.79 2.15 2.5-3.22L13 19H3zM17 3h2v2h-2zm4 8h2v2h-2zm0 4h2v2h-2zM3 3C2 3 1 4 1 5h2zm18 4h2v2h-2zm-8-4h2v2h-2zm8 18c1 0 2-1 2-2h-2zM1 7h2v2H1zm8-4h2v2H9zM5 3h2v2H5zm16 0v2h2c0-1-1-2-2-2',
  }),
  'PhotoSizeSelectLargeTwoTone',
);
export const PhotoSizeSelectSmallIcon = (props?: KTRawAttr) => {
  const s = _PhotoSizeSelectSmallIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoSizeSelectSmallIcon = svg(
  svg('path', {
    d: 'M23 15h-2v2h2zm0-4h-2v2h2zm0 8h-2v2c1 0 2-1 2-2M15 3h-2v2h2zm8 4h-2v2h2zm-2-4v2h2c0-1-1-2-2-2M3 21h8v-6H1v4c0 1.1.9 2 2 2M3 7H1v2h2zm12 12h-2v2h2zm4-16h-2v2h2zm0 16h-2v2h2zM3 3C2 3 1 4 1 5h2zm0 8H1v2h2zm8-8H9v2h2zM7 3H5v2h2z',
  }),
  'PhotoSizeSelectSmall',
);
export const PhotoSizeSelectSmallOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhotoSizeSelectSmallOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoSizeSelectSmallOutlinedIcon = svg(
  svg('path', {
    d: 'M23 15h-2v2h2zm0-4h-2v2h2zm0 8h-2v2c1 0 2-1 2-2M15 3h-2v2h2zm8 4h-2v2h2zm-2-4v2h2c0-1-1-2-2-2M3 21h8v-6H1v4c0 1.1.9 2 2 2M3 7H1v2h2zm12 12h-2v2h2zm4-16h-2v2h2zm0 16h-2v2h2zM3 3C2 3 1 4 1 5h2zm0 8H1v2h2zm8-8H9v2h2zM7 3H5v2h2z',
  }),
  'PhotoSizeSelectSmallOutlined',
);
export const PhotoSizeSelectSmallRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhotoSizeSelectSmallRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoSizeSelectSmallRoundedIcon = svg(
  svg('path', {
    d: 'M23 15h-2v2h2zm0-4h-2v2h2zm0 8h-2v2c1 0 2-1 2-2M15 3h-2v2h2zm8 4h-2v2h2zm-2-4v2h2c0-1-1-2-2-2M3 21h8v-4c0-1.1-.9-2-2-2H1v4c0 1.1.9 2 2 2M3 7H1v2h2zm12 12h-2v2h2zm4-16h-2v2h2zm0 16h-2v2h2zM3 3C2 3 1 4 1 5h2zm0 8H1v2h2zm8-8H9v2h2zM7 3H5v2h2z',
  }),
  'PhotoSizeSelectSmallRounded',
);
export const PhotoSizeSelectSmallSharpIcon = (props?: KTRawAttr) => {
  const s = _PhotoSizeSelectSmallSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoSizeSelectSmallSharpIcon = svg(
  svg('path', {
    d: 'M23 15h-2v2h2zm0 4h-2v2h2zm0-8h-2v2h2zm-8-8h-2v2h2zm8 4h-2v2h2zM1 21h10v-6H1zM3 7H1v2h2zm12 12h-2v2h2zm4-16h-2v2h2zm4 0h-2v2h2zm-4 16h-2v2h2zM3 11H1v2h2zm8-8H9v2h2zM7 3H5v2h2zM3 3H1v2h2z',
  }),
  'PhotoSizeSelectSmallSharp',
);
export const PhotoSizeSelectSmallTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhotoSizeSelectSmallTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoSizeSelectSmallTwoToneIcon = svg(
  svg('path', {
    d: 'M17 19h2v2h-2zm-4 0h2v2h-2zM1 19c0 1.1.9 2 2 2h8v-6H1zM9 3h2v2H9zM5 3h2v2H5zm12 0h2v2h-2zM1 11h2v2H1zm0-4h2v2H1zm2-4C2 3 1 4 1 5h2zm10 0h2v2h-2zm8 18c1 0 2-1 2-2h-2zm0-10h2v2h-2zm0-8v2h2c0-1-1-2-2-2m0 12h2v2h-2zm0-8h2v2h-2z',
  }),
  'PhotoSizeSelectSmallTwoTone',
);
export const PhotoTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhotoTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhotoTwoToneIcon = svg(
  [
    svg('path', { d: 'M19 5H5v14h14zM6 17l3-3.86 2.14 2.58 3-3.87L18 17z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2M5 5h14v14H5zm6.14 10.72L9 13.14 6 17h12l-3.86-5.14z',
      },
      '1',
    ),
  ],
  'PhotoTwoTone',
);
export const PhpIcon = (props?: KTRawAttr) => {
  const s = _PhpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhpIcon = svg(
  svg('path', {
    d: 'M13 9h1.5v6H13v-2.5h-2V15H9.5V9H11v2h2zm-5 1.5v1c0 .8-.7 1.5-1.5 1.5h-2v2H3V9h3.5c.8 0 1.5.7 1.5 1.5m-1.5 0h-2v1h2zm15 0v1c0 .8-.7 1.5-1.5 1.5h-2v2h-1.5V9H20c.8 0 1.5.7 1.5 1.5m-1.5 0h-2v1h2z',
  }),
  'Php',
);
export const PhpOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PhpOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhpOutlinedIcon = svg(
  svg('path', {
    d: 'M13 9h1.5v6H13v-2.5h-2V15H9.5V9H11v2h2zm-5 1.5v1c0 .8-.7 1.5-1.5 1.5h-2v2H3V9h3.5c.8 0 1.5.7 1.5 1.5m-1.5 0h-2v1h2zm15 0v1c0 .8-.7 1.5-1.5 1.5h-2v2h-1.5V9H20c.8 0 1.5.7 1.5 1.5m-1.5 0h-2v1h2z',
  }),
  'PhpOutlined',
);
export const PhpRoundedIcon = (props?: KTRawAttr) => {
  const s = _PhpRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhpRoundedIcon = svg(
  svg('path', {
    d: 'M6.5 10.5h-2v1h2zm13.5 0h-2v1h2zm-7 2h-2v1.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.5c0-.41.34-.75.75-.75s.75.34.75.75V11h2V9.75c0-.41.34-.75.75-.75s.75.34.75.75v4.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75zm5 1.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V10c0-.55.45-1 1-1H20c.83 0 1.5.68 1.5 1.5v1c0 .82-.67 1.5-1.5 1.5h-2zM3 10c0-.55.45-1 1-1h2.5c.83 0 1.5.68 1.5 1.5v1c0 .82-.67 1.5-1.5 1.5h-2v1.25c0 .41-.34.75-.75.75S3 14.66 3 14.25z',
  }),
  'PhpRounded',
);
export const PhpSharpIcon = (props?: KTRawAttr) => {
  const s = _PhpSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhpSharpIcon = svg(
  svg('path', {
    d: 'M13 9h1.5v6H13v-2.5h-2V15H9.5V9H11v2h2zM8 9v4H4.5v2H3V9zm-1.5 1.5h-2v1h2zm15-1.5v4H18v2h-1.5V9zM20 10.5h-2v1h2z',
  }),
  'PhpSharp',
);
export const PhpTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PhpTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PhpTwoToneIcon = svg(
  svg('path', {
    d: 'M13 9h1.5v6H13v-2.5h-2V15H9.5V9H11v2h2zm-5 1.5v1c0 .8-.7 1.5-1.5 1.5h-2v2H3V9h3.5c.8 0 1.5.7 1.5 1.5m-1.5 0h-2v1h2zm15 0v1c0 .8-.7 1.5-1.5 1.5h-2v2h-1.5V9H20c.8 0 1.5.7 1.5 1.5m-1.5 0h-2v1h2z',
  }),
  'PhpTwoTone',
);
export const PianoIcon = (props?: KTRawAttr) => {
  const s = _PianoIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PianoIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 11.5h.25V19h-4.5v-4.5H10c.55 0 1-.45 1-1V5h2v8.5c0 .55.45 1 1 1M5 5h2v8.5c0 .55.45 1 1 1h.25V19H5zm14 14h-3.25v-4.5H16c.55 0 1-.45 1-1V5h2z',
  }),
  'Piano',
);
export const PianoOffIcon = (props?: KTRawAttr) => {
  const s = _PianoOffIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PianoOffIcon = svg(
  svg('path', {
    d: 'M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61zM8.25 19H5V7.83l2 2v3.67c0 .55.45 1 1 1h.25zm1.5 0v-4.5H10c.46 0 .82-.31.94-.73l3.31 3.31V19zM11 8.17 5.83 3H19c1.1 0 2 .9 2 2v13.17l-2-2V5h-2v8.5c0 .19-.07.36-.16.51L13 10.17V5h-2z',
  }),
  'PianoOff',
);
export const PianoOffOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PianoOffOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PianoOffOutlinedIcon = svg(
  svg('path', {
    d: 'M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61zM8.25 19H5V7.83l2 2v3.67c0 .55.45 1 1 1h.25zm1.5 0v-4.5H10c.46 0 .82-.31.94-.73l3.31 3.31V19zM11 8.17 5.83 3H19c1.1 0 2 .9 2 2v13.17l-2-2V5h-2v8.5c0 .19-.07.36-.16.51L13 10.17V5h-2z',
  }),
  'PianoOffOutlined',
);
export const PianoOffRoundedIcon = (props?: KTRawAttr) => {
  const s = _PianoOffRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PianoOffRoundedIcon = svg(
  svg('path', {
    d: 'M20.49 21.9c.39-.39.39-1.02 0-1.41L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l.9.91V19c0 1.1.9 2 2 2h13.17l.9.9c.39.39 1.02.39 1.42 0M8.25 19H5V7.83l2 2v3.67c0 .55.45 1 1 1h.25zm1.5 0v-4.5H10c.46 0 .82-.31.94-.73l3.31 3.31V19zM11 8.17 5.83 3H19c1.1 0 2 .9 2 2v13.17l-2-2V5h-2v8.5c0 .19-.07.36-.16.51L13 10.17V5h-2z',
  }),
  'PianoOffRounded',
);
export const PianoOffSharpIcon = (props?: KTRawAttr) => {
  const s = _PianoOffSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PianoOffSharpIcon = svg(
  svg('path', {
    d: 'M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V21h15.17l1.61 1.61zM8.25 19H5V7.83l2 2v4.67h1.25zm1.5 0v-4.5H11v-.67l3.25 3.25V19zM5.83 3H21v15.17l-2-2V5h-2v9.17l-4-4V5h-2v3.17z',
  }),
  'PianoOffSharp',
);
export const PianoOffTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PianoOffTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PianoOffTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M8.25 19H5V7.83l2 2v3.67c0 .55.45 1 1 1h.25zm1.5 0v-4.5H10c.46 0 .82-.31.94-.73l3.31 3.31V19zM13 10.17V5h-2v3.17zm6 6V5h-2v8.5c0 .19-.07.36-.16.51z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61zM8.25 19H5V7.83l2 2v3.67c0 .55.45 1 1 1h.25zm1.5 0v-4.5H10c.46 0 .82-.31.94-.73l3.31 3.31V19zM11 8.17 5.83 3H19c1.1 0 2 .9 2 2v13.17l-2-2V5h-2v8.5c0 .19-.07.36-.16.51L13 10.17V5h-2z',
      },
      '1',
    ),
  ],
  'PianoOffTwoTone',
);
export const PianoOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PianoOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PianoOutlinedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 11.5h.25V19h-4.5v-4.5H10c.55 0 1-.45 1-1V5h2v8.5c0 .55.45 1 1 1M5 5h2v8.5c0 .55.45 1 1 1h.25V19H5zm14 14h-3.25v-4.5H16c.55 0 1-.45 1-1V5h2z',
  }),
  'PianoOutlined',
);
export const PianoRoundedIcon = (props?: KTRawAttr) => {
  const s = _PianoRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PianoRoundedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 11.5h.25V19h-4.5v-4.5H10c.55 0 1-.45 1-1V5h2v8.5c0 .55.45 1 1 1M5 5h2v8.5c0 .55.45 1 1 1h.25V19H5zm14 14h-3.25v-4.5H16c.55 0 1-.45 1-1V5h2z',
  }),
  'PianoRounded',
);
export const PianoSharpIcon = (props?: KTRawAttr) => {
  const s = _PianoSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PianoSharpIcon = svg(
  svg('path', { d: 'M21 3H3v18h18zm-8 11.5h1.25V19h-4.5v-4.5H11V5h2zM5 5h2v9.5h1.25V19H5zm14 14h-3.25v-4.5H17V5h2z' }),
  'PianoSharp',
);
export const PianoTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PianoTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PianoTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M14 14.5h.25V19h-4.5v-4.5H10c.55 0 1-.45 1-1V5h2v8.5c0 .55.45 1 1 1M5 5h2v8.5c0 .55.45 1 1 1h.25V19H5zm14 14h-3.25v-4.5H16c.55 0 1-.45 1-1V5h2z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 11.5h.25V19h-4.5v-4.5H10c.55 0 1-.45 1-1V5h2v8.5c0 .55.45 1 1 1M5 5h2v8.5c0 .55.45 1 1 1h.25V19H5zm14 14h-3.25v-4.5H16c.55 0 1-.45 1-1V5h2z',
      },
      '1',
    ),
  ],
  'PianoTwoTone',
);
export const PictureAsPdfIcon = (props?: KTRawAttr) => {
  const s = _PictureAsPdfIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PictureAsPdfIcon = svg(
  svg('path', {
    d: 'M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5zm4-3H19v1h1.5V11H19v2h-1.5V7h3zM9 9.5h1v-1H9zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm10 5.5h1v-3h-1z',
  }),
  'PictureAsPdf',
);
export const PictureAsPdfOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PictureAsPdfOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PictureAsPdfOutlinedIcon = svg(
  svg('path', {
    d: 'M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H8V4h12zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm12 6V9c0-.55-.45-1-1-1h-2v5h2c.55 0 1-.45 1-1m-2-3h1v3h-1zm4 2h1v-1h-1V9h1V8h-2v5h1zm-8 0h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H9v5h1zm0-2h1v1h-1z',
  }),
  'PictureAsPdfOutlined',
);
export const PictureAsPdfRoundedIcon = (props?: KTRawAttr) => {
  const s = _PictureAsPdfRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PictureAsPdfRoundedIcon = svg(
  svg('path', {
    d: 'M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-.55.45-1 1-1H10c.83 0 1.5.67 1.5 1.5zm5 2c0 .83-.67 1.5-1.5 1.5h-2c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h2c.83 0 1.5.67 1.5 1.5zm4-3.75c0 .41-.34.75-.75.75H19v1h.75c.41 0 .75.34.75.75s-.34.75-.75.75H19v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-.55.45-1 1-1h1.25c.41 0 .75.34.75.75M9 9.5h1v-1H9zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1m11 5.5h1v-3h-1z',
  }),
  'PictureAsPdfRounded',
);
export const PictureAsPdfSharpIcon = (props?: KTRawAttr) => {
  const s = _PictureAsPdfSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PictureAsPdfSharpIcon = svg(
  svg('path', {
    d: 'M22 2H6v16h16zm-10.5 9H9v2H7.5V7h4zm5 .5c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5zm4-3H19v1h1.5V11H19v2h-1.5V7h3zM9 9.5h1v-1H9zM4 6H2v16h16v-2H4zm10 5.5h1v-3h-1z',
  }),
  'PictureAsPdfSharp',
);
export const PictureAsPdfTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PictureAsPdfTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PictureAsPdfTwoToneIcon = svg(
  [
    svg('path', { d: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4z' }, '0'),
    svg(
      'path',
      {
        d: 'M10 9h1v1h-1zm4 0h1v3h-1zm-6 7h12V4H8zm9-8h2v1h-1v1h1v1h-1v2h-1zm-4 0h2c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-2zM9 8h2c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1v2H9z',
        opacity: '.3',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H8V4h12zm-4-4V9c0-.55-.45-1-1-1h-2v5h2c.55 0 1-.45 1-1m-2-3h1v3h-1zm4 2h1v-1h-1V9h1V8h-2v5h1zm-8 0h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H9v5h1zm0-2h1v1h-1z',
      },
      '2',
    ),
  ],
  'PictureAsPdfTwoTone',
);
export const PictureInPictureIcon = (props?: KTRawAttr) => {
  const s = _PictureInPictureIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PictureInPictureIcon = svg(
  svg('path', {
    d: 'M19 7h-8v6h8zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2m0 16.01H3V4.98h18z',
  }),
  'PictureInPicture',
);
export const PictureInPictureAltIcon = (props?: KTRawAttr) => {
  const s = _PictureInPictureAltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PictureInPictureAltIcon = svg(
  svg('path', {
    d: 'M19 11h-8v6h8zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2m-2 .02H3V4.97h18z',
  }),
  'PictureInPictureAlt',
);
export const PictureInPictureAltOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PictureInPictureAltOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PictureInPictureAltOutlinedIcon = svg(
  svg('path', {
    d: 'M19 11h-8v6h8zm-2 4h-4v-2h4zm4-12H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4.98C23 3.88 22.1 3 21 3m0 16.02H3V4.97h18z',
  }),
  'PictureInPictureAltOutlined',
);
export const PictureInPictureAltRoundedIcon = (props?: KTRawAttr) => {
  const s = _PictureInPictureAltRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PictureInPictureAltRoundedIcon = svg(
  svg('path', {
    d: 'M18 11h-6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m5 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2m-3 .02H4c-.55 0-1-.45-1-1V5.97c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.05c0 .55-.45 1-1 1',
  }),
  'PictureInPictureAltRounded',
);
export const PictureInPictureAltSharpIcon = (props?: KTRawAttr) => {
  const s = _PictureInPictureAltSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PictureInPictureAltSharpIcon = svg(
  svg('path', { d: 'M19 11h-8v6h8zm4 10V3H1v18zm-2-1.98H3V4.97h18z' }),
  'PictureInPictureAltSharp',
);
export const PictureInPictureAltTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PictureInPictureAltTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PictureInPictureAltTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19 11h-8v6h8zm-2 4h-4v-2h4zm4-12H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4.98C23 3.88 22.1 3 21 3m0 16.02H3V4.97h18z',
      },
      '0',
    ),
    svg('path', { d: 'M13 13h4v2h-4z', opacity: '.3' }, '1'),
  ],
  'PictureInPictureAltTwoTone',
);
export const PictureInPictureOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PictureInPictureOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PictureInPictureOutlinedIcon = svg(
  svg('path', {
    d: 'M19 7h-8v6h8zm-2 4h-4V9h4zm4-8H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2m0 16.01H3V4.98h18z',
  }),
  'PictureInPictureOutlined',
);
export const PictureInPictureRoundedIcon = (props?: KTRawAttr) => {
  const s = _PictureInPictureRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PictureInPictureRoundedIcon = svg(
  svg('path', {
    d: 'M18 7h-6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1m3-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2m-1 16.01H4c-.55 0-1-.45-1-1V5.98c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.03c0 .55-.45 1-1 1',
  }),
  'PictureInPictureRounded',
);
export const PictureInPictureSharpIcon = (props?: KTRawAttr) => {
  const s = _PictureInPictureSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PictureInPictureSharpIcon = svg(
  svg('path', { d: 'M19 7h-8v6h8zm4-4H1v17.98h22zm-2 16.01H3V4.98h18z' }),
  'PictureInPictureSharp',
);
export const PictureInPictureTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PictureInPictureTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PictureInPictureTwoToneIcon = svg(
  [
    svg('path', { d: 'M19 7h-8v6h8zm-2 4h-4V9h4z' }, '0'),
    svg('path', { d: 'M13 9h4v2h-4z', opacity: '.3' }, '1'),
    svg(
      'path',
      { d: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2m0 16.01H3V4.98h18z' },
      '2',
    ),
  ],
  'PictureInPictureTwoTone',
);
export const PieChartIcon = (props?: KTRawAttr) => {
  const s = _PieChartIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PieChartIcon = svg(
  svg('path', {
    d: 'M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10m2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99m0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99z',
  }),
  'PieChart',
);
export const PieChartOutlineIcon = (props?: KTRawAttr) => {
  const s = _PieChartOutlineIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PieChartOutlineIcon = svg(
  svg('path', {
    d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m1 2.07c3.61.45 6.48 3.33 6.93 6.93H13zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94m9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93',
  }),
  'PieChartOutline',
);
export const PieChartOutlineOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PieChartOutlineOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PieChartOutlineOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m1 2.07c3.61.45 6.48 3.33 6.93 6.93H13zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94m9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93',
  }),
  'PieChartOutlineOutlined',
);
export const PieChartOutlineRoundedIcon = (props?: KTRawAttr) => {
  const s = _PieChartOutlineRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PieChartOutlineRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m1 2.07c3.61.45 6.48 3.33 6.93 6.93H14c-.55 0-1-.45-1-1zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94m9 7.93V14c0-.55.45-1 1-1h5.93c-.45 3.61-3.32 6.48-6.93 6.93',
  }),
  'PieChartOutlineRounded',
);
export const PieChartOutlineSharpIcon = (props?: KTRawAttr) => {
  const s = _PieChartOutlineSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PieChartOutlineSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m1 2.07c3.61.45 6.48 3.33 6.93 6.93H13zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94m9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93',
  }),
  'PieChartOutlineSharp',
);
export const PieChartOutlineTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PieChartOutlineTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PieChartOutlineTwoToneIcon = svg(
  svg('path', {
    d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-1 17.94c-3.93-.5-7-3.88-7-7.94s3.07-7.44 7-7.93zm2-.01V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93M13 11V4.07c3.61.45 6.48 3.33 6.93 6.93z',
  }),
  'PieChartOutlineTwoTone',
);
export const PieChartOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PieChartOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PieChartOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m1 2.07c3.61.45 6.48 3.33 6.93 6.93H13zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94m9 7.93V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93',
  }),
  'PieChartOutlined',
);
export const PieChartRoundedIcon = (props?: KTRawAttr) => {
  const s = _PieChartRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PieChartRoundedIcon = svg(
  svg('path', {
    d: 'M11 3.18v17.64c0 .64-.59 1.12-1.21.98C5.32 20.8 2 16.79 2 12s3.32-8.8 7.79-9.8c.62-.14 1.21.34 1.21.98m2.03 0v6.81c0 .55.45 1 1 1h6.79c.64 0 1.12-.59.98-1.22-.85-3.76-3.8-6.72-7.55-7.57-.63-.14-1.22.34-1.22.98m0 10.83v6.81c0 .64.59 1.12 1.22.98 3.76-.85 6.71-3.82 7.56-7.58.14-.62-.35-1.22-.98-1.22h-6.79c-.56.01-1.01.46-1.01 1.01',
  }),
  'PieChartRounded',
);
export const PieChartSharpIcon = (props?: KTRawAttr) => {
  const s = _PieChartSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PieChartSharpIcon = svg(
  svg('path', {
    d: 'M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10m2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99m0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99z',
  }),
  'PieChartSharp',
);
export const PieChartTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PieChartTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PieChartTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M4 12c0 4.07 3.06 7.44 7 7.93V4.07C7.06 4.56 4 7.93 4 12m9 7.93c3.61-.45 6.48-3.32 6.93-6.93H13zm0-15.86V11h6.93c-.45-3.61-3.32-6.48-6.93-6.93',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.94-.49-7-3.86-7-7.93s3.06-7.44 7-7.93zm2 0V13h6.93c-.45 3.61-3.32 6.48-6.93 6.93M13 11V4.07c3.61.45 6.48 3.32 6.93 6.93z',
      },
      '1',
    ),
  ],
  'PieChartTwoTone',
);
export const PinIcon = (props?: KTRawAttr) => {
  const s = _PinIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M7.64 15H6.49v-4.5l-.9.66-.58-.89L6.77 9h.87zm5.86 0H9.61v-1.02c1.07-1.07 1.77-1.77 2.13-2.15.4-.42.54-.69.54-1.06 0-.4-.31-.72-.81-.72-.52 0-.8.39-.9.72l-1.01-.42c.01-.02.18-.76 1-1.15.69-.33 1.48-.2 1.95.03.86.44.91 1.24.91 1.48 0 .64-.31 1.26-.92 1.86-.25.25-.72.71-1.4 1.39l.03.05h2.37zm5.25-.85c-.08.13-.56.85-1.76.85-.04 0-1.6.08-2.05-1.51l1.03-.41c.03.1.19.86 1.02.86.41 0 .89-.28.89-.77 0-.55-.48-.79-1.04-.79h-.5v-1h.46c.33 0 .88-.14.88-.72 0-.39-.31-.65-.75-.65-.5 0-.74.32-.85.64l-.99-.41C15.2 9.9 15.68 9 16.94 9c1.09 0 1.54.64 1.62.75.33.5.28 1.16.02 1.57-.15.22-.32.38-.52.48v.07c.28.11.51.28.68.52.37.52.33 1.27.01 1.76',
  }),
  'Pin',
);
export const PinDropIcon = (props?: KTRawAttr) => {
  const s = _PinDropIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinDropIcon = svg(
  svg('path', {
    d: 'M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11m-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2M5 20v2h14v-2z',
  }),
  'PinDrop',
);
export const PinDropOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PinDropOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinDropOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c1.93 0 5 1.4 5 5.15 0 2.16-1.72 4.67-5 7.32-3.28-2.65-5-5.17-5-7.32C7 5.4 10.07 4 12 4m0-2C8.73 2 5 4.46 5 9.15c0 3.12 2.33 6.41 7 9.85 4.67-3.44 7-6.73 7-9.85C19 4.46 15.27 2 12 2',
      },
      '0',
    ),
    svg('path', { d: 'M12 7c-1.1 0-2 .9-2 2s.9 2 2 2a2 2 0 1 0 0-4M5 20h14v2H5z' }, '1'),
  ],
  'PinDropOutlined',
);
export const PinDropRoundedIcon = (props?: KTRawAttr) => {
  const s = _PinDropRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinDropRoundedIcon = svg(
  svg('path', {
    d: 'M6 20h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1m6-13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-5c3.27 0 7 2.46 7 7.15 0 2.98-2.13 6.12-6.39 9.39-.36.28-.86.28-1.22 0Q5 13.62 5 9.15C5 4.46 8.73 2 12 2',
  }),
  'PinDropRounded',
);
export const PinDropSharpIcon = (props?: KTRawAttr) => {
  const s = _PinDropSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinDropSharpIcon = svg(
  svg('path', {
    fillRule: 'evenodd',
    d: 'M5 20h14v2H5zm7-13c-1.1 0-2 .9-2 2s.9 2 2 2a2 2 0 1 0 0-4m0-5c3.27 0 7 2.46 7 7.15 0 3.12-2.33 6.41-7 9.85-4.67-3.44-7-6.73-7-9.85C5 4.46 8.73 2 12 2',
  }),
  'PinDropSharp',
);
export const PinDropTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PinDropTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinDropTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        fillOpacity: '.3',
        d: 'M12 3C9.19 3 6 5.11 6 9.13c0 2.68 2 5.49 6 8.44 4-2.95 6-5.77 6-8.44C18 5.11 14.81 3 12 3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 4c1.93 0 5 1.4 5 5.15 0 2.16-1.72 4.67-5 7.32-3.28-2.65-5-5.17-5-7.32C7 5.4 10.07 4 12 4m0-2C8.73 2 5 4.46 5 9.15c0 3.12 2.33 6.41 7 9.85 4.67-3.44 7-6.73 7-9.85C19 4.46 15.27 2 12 2',
      },
      '1',
    ),
    svg('path', { d: 'M12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M5 20h14v2H5z' }, '2'),
  ],
  'PinDropTwoTone',
);
export const PinEndIcon = (props?: KTRawAttr) => {
  const s = _PinEndIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinEndIcon = svg(
  svg('path', {
    d: 'M20 12V6H4v12h10v2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6zm-1 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m-4.34-6H9v5.66l2.12-2.12 2.83 2.83 1.41-1.41-2.83-2.83z',
  }),
  'PinEnd',
);
export const PinEndOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PinEndOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinEndOutlinedIcon = svg(
  svg('path', {
    d: 'M20 12V6H4v12h10v2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6zm-1 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m-4.34-6H9v5.66h2v-2.24l2.95 2.95 1.41-1.41L12.41 10h2.24V8z',
  }),
  'PinEndOutlined',
);
export const PinEndRoundedIcon = (props?: KTRawAttr) => {
  const s = _PinEndRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinEndRoundedIcon = svg(
  svg('path', {
    d: 'M20 12V6H4v12h10v2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6zm-1 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m-4.34-.34c.39-.39.39-1.02 0-1.41l-2.12-2.12 1.27-1.27c.31-.32.09-.86-.36-.86H9.5c-.28 0-.5.22-.5.5v3.95c0 .45.54.67.85.35l1.27-1.27 2.12 2.12c.39.4 1.03.4 1.42.01',
  }),
  'PinEndRounded',
);
export const PinEndSharpIcon = (props?: KTRawAttr) => {
  const s = _PinEndSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinEndSharpIcon = svg(
  svg('path', {
    d: 'M20 12V6H4v12h10v2H2V4h20v8zm-1 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m-4.34-6H9v5.66l2.12-2.12 2.83 2.83 1.41-1.41-2.83-2.83z',
  }),
  'PinEndSharp',
);
export const PinEndTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PinEndTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinEndTwoToneIcon = svg(
  svg('path', {
    d: 'M20 12V6H4v12h10v2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6zm-1 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m-4.34-6H9v5.66l2.12-2.12 2.83 2.83 1.41-1.41-2.83-2.83z',
  }),
  'PinEndTwoTone',
);
export const PinInvokeIcon = (props?: KTRawAttr) => {
  const s = _PinInvokeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinInvokeIcon = svg(
  svg('path', {
    d: 'M22 12v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10v2H4v12h16v-6zm0-5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3m-10.53 5.12-2.83 2.83 1.41 1.41 2.83-2.83L15 15.66V10H9.34z',
  }),
  'PinInvoke',
);
export const PinInvokeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PinInvokeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinInvokeOutlinedIcon = svg(
  svg('path', {
    d: 'M22 12v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10v2H4v12h16v-6zm0-5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3M9.34 12h2.24l-2.95 2.95 1.41 1.41L13 13.42v2.24h2V10H9.34z',
  }),
  'PinInvokeOutlined',
);
export const PinInvokeRoundedIcon = (props?: KTRawAttr) => {
  const s = _PinInvokeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinInvokeRoundedIcon = svg(
  svg('path', {
    d: 'M22 12v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10v2H4v12h16v-6zm0-5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3M9.34 15.66c.39.39 1.02.39 1.41 0l2.12-2.12 1.27 1.27c.32.31.86.09.86-.36V10.5c0-.28-.22-.5-.5-.5h-3.95c-.45 0-.67.54-.35.85l1.27 1.27-2.12 2.12c-.4.39-.4 1.03-.01 1.42',
  }),
  'PinInvokeRounded',
);
export const PinInvokeSharpIcon = (props?: KTRawAttr) => {
  const s = _PinInvokeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinInvokeSharpIcon = svg(
  svg('path', {
    d: 'M22 12v8H2V4h12v2H4v12h16v-6zm0-5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3m-10.53 5.12-2.83 2.83 1.41 1.41 2.83-2.83L15 15.66V10H9.34z',
  }),
  'PinInvokeSharp',
);
export const PinInvokeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PinInvokeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinInvokeTwoToneIcon = svg(
  svg('path', {
    d: 'M22 12v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10v2H4v12h16v-6zm0-5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3m-10.53 5.12-2.83 2.83 1.41 1.41 2.83-2.83L15 15.66V10H9.34z',
  }),
  'PinInvokeTwoTone',
);
export const PinOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PinOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinOutlinedIcon = svg(
  [
    svg('path', { d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z' }, '0'),
    svg(
      'path',
      {
        d: 'M6.49 10.5V15h1.15V9h-.87l-1.76 1.27.58.89zm4.98-.45c.5 0 .81.32.81.72 0 .37-.14.64-.54 1.06-.36.38-1.06 1.08-2.13 2.15V15h3.89v-.99h-2.37l-.03-.05c.68-.68 1.15-1.14 1.4-1.39.61-.6.92-1.22.92-1.86 0-.24-.05-1.04-.91-1.48-.47-.23-1.26-.36-1.95-.03-.82.39-.99 1.13-1 1.15l1.01.42c.1-.33.38-.72.9-.72m5.52 3.89c-.83 0-.99-.76-1.02-.86l-1.03.41c.45 1.59 2.01 1.51 2.05 1.51 1.2 0 1.68-.72 1.76-.85.32-.49.36-1.24-.01-1.76-.17-.24-.4-.41-.68-.52v-.07c.2-.1.37-.26.52-.48.26-.41.31-1.07-.02-1.57-.08-.11-.53-.75-1.62-.75-1.26 0-1.74.9-1.85 1.24l.99.41c.11-.32.35-.64.85-.64.44 0 .75.26.75.65 0 .58-.55.72-.88.72h-.46v1h.5c.56 0 1.04.24 1.04.79 0 .49-.48.77-.89.77',
      },
      '1',
    ),
  ],
  'PinOutlined',
);
export const PinRoundedIcon = (props?: KTRawAttr) => {
  const s = _PinRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinRoundedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M7.64 14.47c0 .29-.24.53-.53.53h-.09c-.29 0-.53-.24-.53-.53V10.5l-.45.33c-.24.18-.59.12-.76-.14-.15-.24-.1-.55.13-.72l1.19-.85c.11-.08.24-.12.38-.12.36 0 .66.29.66.66zm5.37.53h-2.67c-.4 0-.72-.32-.72-.72 0-.19.08-.38.21-.51.95-.95 1.58-1.58 1.92-1.94.4-.42.54-.69.54-1.06 0-.4-.31-.72-.81-.72-.34 0-.57.16-.72.37-.15.2-.41.26-.64.16-.34-.14-.45-.57-.22-.85.15-.19.37-.38.67-.53.69-.33 1.48-.2 1.95.03.86.44.91 1.24.91 1.48 0 .64-.31 1.26-.92 1.86-.25.25-.72.71-1.4 1.39l.03.05h1.88c.27 0 .49.22.49.49s-.23.5-.5.5m5.74-.85c-.08.13-.56.85-1.76.85-.03 0-1.23.06-1.83-.98-.15-.26-.04-.6.24-.71l.12-.05c.22-.09.47-.01.59.19.14.24.39.49.88.49.41 0 .89-.28.89-.77 0-.55-.48-.79-1.04-.79-.27 0-.49-.23-.49-.5 0-.26.2-.47.45-.49v-.01c.33 0 .88-.14.88-.72 0-.39-.31-.65-.75-.65-.32 0-.53.13-.67.3-.14.18-.37.26-.58.17l-.08-.03c-.3-.12-.4-.5-.2-.75.27-.35.76-.7 1.54-.7 1.09 0 1.54.64 1.62.75.33.5.28 1.16.02 1.57-.15.22-.32.38-.52.48v.07c.28.11.51.28.68.52.37.52.33 1.27.01 1.76',
  }),
  'PinRounded',
);
export const PinSharpIcon = (props?: KTRawAttr) => {
  const s = _PinSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinSharpIcon = svg(
  svg('path', {
    d: 'M22 4H2v16h20zM7.64 15H6.49v-4.5l-.9.66-.58-.89L6.77 9h.87zm5.86 0H9.61v-1.02c1.07-1.07 1.77-1.77 2.13-2.15.4-.42.54-.69.54-1.06 0-.4-.31-.72-.81-.72-.52 0-.8.39-.9.72l-1.01-.42c.01-.02.18-.76 1-1.15.69-.33 1.48-.2 1.95.03.86.44.91 1.24.91 1.48 0 .64-.31 1.26-.92 1.86-.25.25-.72.71-1.4 1.39l.03.05h2.37zm5.25-.85c-.08.13-.56.85-1.76.85-.04 0-1.6.08-2.05-1.51l1.03-.41c.03.1.19.86 1.02.86.41 0 .89-.28.89-.77 0-.55-.48-.79-1.04-.79h-.5v-1h.46c.33 0 .88-.14.88-.72 0-.39-.31-.65-.75-.65-.5 0-.74.32-.85.64l-.99-.41C15.2 9.9 15.68 9 16.94 9c1.09 0 1.54.64 1.62.75.33.5.28 1.16.02 1.57-.15.22-.32.38-.52.48v.07c.28.11.51.28.68.52.37.52.33 1.27.01 1.76',
  }),
  'PinSharp',
);
export const PinTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PinTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M4 18h16V6H4zm12.84-5.62h-.5v-1h.46c.33 0 .88-.14.88-.72 0-.39-.31-.65-.75-.65-.5 0-.74.32-.85.64l-.99-.41C15.2 9.9 15.68 9 16.94 9c1.09 0 1.54.64 1.62.75.33.5.28 1.16.02 1.57-.15.22-.32.38-.52.48v.07c.28.11.51.28.68.52.37.52.33 1.27.01 1.76-.08.13-.56.85-1.76.85-.04 0-1.6.08-2.05-1.51l1.03-.41c.02.1.19.86 1.02.86.41 0 .89-.28.89-.77 0-.55-.48-.79-1.04-.79M10.56 9.2c.69-.33 1.48-.2 1.95.03.86.44.91 1.24.91 1.48 0 .64-.31 1.26-.92 1.86-.25.25-.72.71-1.4 1.39l.03.05h2.37V15H9.61v-1.02c1.07-1.07 1.77-1.77 2.13-2.15.4-.42.54-.69.54-1.06 0-.4-.31-.72-.81-.72-.52 0-.8.39-.9.72l-1.01-.42c.01-.02.18-.76 1-1.15M6.77 9h.87v6H6.49v-4.5l-.9.66-.58-.89z',
        opacity: '.3',
      },
      '0',
    ),
    svg('path', { d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z' }, '1'),
    svg(
      'path',
      {
        d: 'M6.49 10.5V15h1.15V9h-.87l-1.76 1.27.58.89zm4.98-.45c.5 0 .81.32.81.72 0 .37-.14.64-.54 1.06-.36.38-1.06 1.08-2.13 2.15V15h3.89v-.99h-2.37l-.03-.05c.68-.68 1.15-1.14 1.4-1.39.61-.6.92-1.22.92-1.86 0-.24-.05-1.04-.91-1.48-.47-.23-1.26-.36-1.95-.03-.82.39-.99 1.13-1 1.15l1.01.42c.1-.33.38-.72.9-.72m5.52 3.89c-.83 0-.99-.76-1.02-.86l-1.03.41c.45 1.59 2.01 1.51 2.05 1.51 1.2 0 1.68-.72 1.76-.85.32-.49.36-1.24-.01-1.76-.17-.24-.4-.41-.68-.52v-.07c.2-.1.37-.26.52-.48.26-.41.31-1.07-.02-1.57-.08-.11-.53-.75-1.62-.75-1.26 0-1.74.9-1.85 1.24l.99.41c.11-.32.35-.64.85-.64.44 0 .75.26.75.65 0 .58-.55.72-.88.72h-.46v1h.5c.56 0 1.04.24 1.04.79 0 .49-.48.77-.89.77',
      },
      '2',
    ),
  ],
  'PinTwoTone',
);
export const PinchIcon = (props?: KTRawAttr) => {
  const s = _PinchIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinchIcon = svg(
  svg('path', {
    d: 'M6 2.5V1h5v5H9.5V3.56L3.56 9.5H6V11H1V6h1.5v2.44L8.44 2.5zm16.98 14.32-.63 4.46c-.14.99-.99 1.72-1.98 1.72h-6.16c-.53 0-1.29-.21-1.66-.59L8 17.62l.83-.84c.24-.24.58-.35.92-.28l3.25.74V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h.91c.31 0 .62.07.89.21l4.09 2.04c.77.39 1.21 1.22 1.09 2.07',
  }),
  'Pinch',
);
export const PinchOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PinchOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinchOutlinedIcon = svg(
  svg('path', {
    d: 'M6 2.5V1h5v5H9.5V3.56L3.56 9.5H6V11H1V6h1.5v2.44L8.44 2.5zm15.89 11.27-3.8-1.67c-.13-.06-.28-.1-.44-.1H17V7.5C17 6.12 15.88 5 14.5 5S12 6.12 12 7.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L7 17.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44c.15-.86-.29-1.72-1.08-2.12M20.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L21 15.56z',
  }),
  'PinchOutlined',
);
export const PinchRoundedIcon = (props?: KTRawAttr) => {
  const s = _PinchRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinchRoundedIcon = svg(
  svg('path', {
    d: 'M8.2 17.43c0-.65.6-1.13 1.24-.99l3.56.8V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h.91c.31 0 .62.07.89.21l4.09 2.04c.77.38 1.21 1.22 1.09 2.07l-.63 4.46c-.14.99-.99 1.72-1.98 1.72h-6.16c-.53 0-1.29-.21-1.66-.59l-4.07-4.29c-.18-.18-.28-.43-.28-.69M9.5 5.25c0 .41.34.75.75.75s.75-.34.75-.75V2c0-.55-.45-1-1-1H6.75c-.41 0-.75.34-.75.75s.34.75.75.75h1.69L2.5 8.44V6.75c0-.41-.34-.75-.75-.75S1 6.34 1 6.75V10c0 .55.45 1 1 1h3.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H3.56L9.5 3.56z',
  }),
  'PinchRounded',
);
export const PinchSharpIcon = (props?: KTRawAttr) => {
  const s = _PinchSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinchSharpIcon = svg(
  svg('path', {
    d: 'M23.18 15.4 22.1 23h-9L8 17.62l1.22-1.23 3.78.85V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h1.38zM6 2.5V1h5v5H9.5V3.56L3.56 9.5H6V11H1V6h1.5v2.44L8.44 2.5z',
  }),
  'PinchSharp',
);
export const PinchTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PinchTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinchTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'm21 15.56-4.24-1.89H15V7.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v10.61l-4.17-.89 3.7 3.78h6.55z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M6 2.5V1h5v5H9.5V3.56L3.56 9.5H6V11H1V6h1.5v2.44L8.44 2.5zm15.89 11.27-3.8-1.67c-.13-.06-.28-.1-.44-.1H17V7.5C17 6.12 15.88 5 14.5 5S12 6.12 12 7.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L7 17.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44c.15-.86-.29-1.72-1.08-2.12M20.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L21 15.56z',
      },
      '1',
    ),
  ],
  'PinchTwoTone',
);
export const PinterestIcon = (props?: KTRawAttr) => {
  const s = _PinterestIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PinterestIcon = svg(
  svg('path', {
    d: 'M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2 10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41.86 0 1.26.63 1.26 1.44 0 .86-.57 2.09-.86 3.27-.17.98.52 1.84 1.52 1.84 1.78 0 3.16-1.9 3.16-4.58 0-2.4-1.72-4.04-4.19-4.04-2.82 0-4.48 2.1-4.48 4.31 0 .86.28 1.73.74 2.3.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11-1.28-.56-2.02-2.38-2.02-3.85 0-3.16 2.24-6.03 6.56-6.03 3.44 0 6.12 2.47 6.12 5.75 0 3.44-2.13 6.2-5.18 6.2-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7v-.03z',
  }),
  'Pinterest',
);
export const PivotTableChartIcon = (props?: KTRawAttr) => {
  const s = _PivotTableChartIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PivotTableChartIcon = svg(
  svg('path', {
    d: 'M10 8h11V5c0-1.1-.9-2-2-2h-9zM3 8h5V3H5c-1.1 0-2 .9-2 2zm2 13h3V10H3v9c0 1.1.9 2 2 2m8 1-4-4 4-4zm1-9 4-4 4 4zm.58 6H13v-2h1.58c1.33 0 2.42-1.08 2.42-2.42V13h2v1.58c0 2.44-1.98 4.42-4.42 4.42',
  }),
  'PivotTableChart',
);
export const PivotTableChartOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PivotTableChartOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PivotTableChartOutlinedIcon = svg(
  svg('path', {
    d: 'M21 5c0-1.1-.9-2-2-2h-9v5h11zM3 19c0 1.1.9 2 2 2h3V10H3zM3 5v3h5V3H5c-1.1 0-2 .9-2 2m15 3.99L14 13l1.41 1.41 1.59-1.6V15c0 1.1-.9 2-2 2h-2.17l1.59-1.59L13 14l-4 4 4 4 1.41-1.41L12.83 19H15c2.21 0 4-1.79 4-4v-2.18l1.59 1.6L22 13z',
  }),
  'PivotTableChartOutlined',
);
export const PivotTableChartRoundedIcon = (props?: KTRawAttr) => {
  const s = _PivotTableChartRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PivotTableChartRoundedIcon = svg(
  svg('path', {
    d: 'M21 5c0-1.1-.9-2-2-2h-9v5h11zM3 19c0 1.1.9 2 2 2h3V10H3zM3 5v3h5V3H5c-1.1 0-2 .9-2 2m14.65 4.35-2.79 2.79c-.32.32-.1.86.35.86H17v2c0 1.1-.9 2-2 2h-2v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79c.31.31.85.09.85-.35V19h2c2.21 0 4-1.79 4-4v-2h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.19-.2-.51-.2-.7-.01',
  }),
  'PivotTableChartRounded',
);
export const PivotTableChartSharpIcon = (props?: KTRawAttr) => {
  const s = _PivotTableChartSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PivotTableChartSharpIcon = svg(
  svg('path', { d: 'M10 3h11v5H10zm-7 7h5v11H3zm0-7h5v5H3zm15 6-4 4h3v4h-4v-3l-4 4 4 4v-3h6v-6h3z' }),
  'PivotTableChartSharp',
);
export const PivotTableChartTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PivotTableChartTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PivotTableChartTwoToneIcon = svg(
  svg('path', {
    d: 'M21 5c0-1.1-.9-2-2-2h-9v5h11zM3 19c0 1.1.9 2 2 2h3V10H3zM3 5v3h5V3H5c-1.1 0-2 .9-2 2m15 4-4 4h3v2c0 1.1-.9 2-2 2h-2v-3l-4 4 4 4v-3h2c2.21 0 4-1.79 4-4v-2h3z',
  }),
  'PivotTableChartTwoTone',
);
export const PixIcon = (props?: KTRawAttr) => {
  const s = _PixIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PixIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm15.45 16.52-3.01-3.01c-.11-.11-.24-.13-.31-.13s-.2.02-.31.13L8.8 16.53c-.34.34-.87.89-2.64.89l3.71 3.7c1.17 1.17 3.07 1.17 4.24 0l3.72-3.71c-.91 0-1.67-.18-2.38-.89M8.8 7.47l3.02 3.02c.08.08.2.13.31.13s.23-.05.31-.13l2.99-2.99c.71-.74 1.52-.91 2.43-.91l-3.72-3.71c-1.17-1.17-3.07-1.17-4.24 0l-3.71 3.7c1.76 0 2.3.58 2.61.89',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm21.11 9.85-2.25-2.26H17.6c-.54 0-1.08.22-1.45.61l-3 3c-.28.28-.65.42-1.02.42-.36 0-.74-.15-1.02-.42L8.09 8.17c-.38-.38-.9-.6-1.45-.6H5.17l-2.29 2.3c-1.17 1.17-1.17 3.07 0 4.24l2.29 2.3h1.48c.54 0 1.06-.22 1.45-.6l3.02-3.02c.28-.28.65-.42 1.02-.42s.74.14 1.02.42l3.01 3.01c.38.38.9.6 1.45.6h1.26l2.25-2.26c1.17-1.18 1.17-3.1-.02-4.29',
      },
      '1',
    ),
  ],
  'Pix',
);
export const PixOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PixOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PixOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm15.45 16.52-3.01-3.01c-.11-.11-.24-.13-.31-.13s-.2.02-.31.13L8.8 16.53c-.34.34-.87.89-2.64.89l3.71 3.7c1.17 1.17 3.07 1.17 4.24 0l3.72-3.71c-.91 0-1.67-.18-2.38-.89M8.8 7.47l3.02 3.02c.08.08.2.13.31.13s.23-.05.31-.13l2.99-2.99c.71-.74 1.52-.91 2.43-.91l-3.72-3.71c-1.17-1.17-3.07-1.17-4.24 0l-3.71 3.7c1.76 0 2.3.58 2.61.89',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm21.11 9.85-2.25-2.26H17.6c-.54 0-1.08.22-1.45.61l-3 3c-.28.28-.65.42-1.02.42-.36 0-.74-.15-1.02-.42L8.09 8.17c-.38-.38-.9-.6-1.45-.6H5.17l-2.29 2.3c-1.17 1.17-1.17 3.07 0 4.24l2.29 2.3h1.48c.54 0 1.06-.22 1.45-.6l3.02-3.02c.28-.28.65-.42 1.02-.42s.74.14 1.02.42l3.01 3.01c.38.38.9.6 1.45.6h1.26l2.25-2.26c1.17-1.18 1.17-3.1-.02-4.29',
      },
      '1',
    ),
  ],
  'PixOutlined',
);
export const PixRoundedIcon = (props?: KTRawAttr) => {
  const s = _PixRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PixRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm15.45 16.52-3.01-3.01c-.11-.11-.24-.13-.31-.13s-.2.02-.31.13L8.8 16.53c-.34.34-.87.89-2.64.89l3.71 3.7c1.17 1.17 3.07 1.17 4.24 0l3.72-3.71c-.91 0-1.67-.18-2.38-.89M8.8 7.47l3.02 3.02c.08.08.2.13.31.13s.23-.05.31-.13l2.99-2.99c.71-.74 1.52-.91 2.43-.91l-3.72-3.71c-1.17-1.17-3.07-1.17-4.24 0l-3.71 3.7c1.76 0 2.3.58 2.61.89',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm21.11 9.85-2.25-2.26H17.6c-.54 0-1.08.22-1.45.61l-3 3c-.28.28-.65.42-1.02.42-.36 0-.74-.15-1.02-.42L8.09 8.17c-.38-.38-.9-.6-1.45-.6H5.17l-2.29 2.3c-1.17 1.17-1.17 3.07 0 4.24l2.29 2.3h1.48c.54 0 1.06-.22 1.45-.6l3.02-3.02c.28-.28.65-.42 1.02-.42s.74.14 1.02.42l3.01 3.01c.38.38.9.6 1.45.6h1.26l2.25-2.26c1.17-1.18 1.17-3.1-.02-4.29',
      },
      '1',
    ),
  ],
  'PixRounded',
);
export const PixSharpIcon = (props?: KTRawAttr) => {
  const s = _PixSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PixSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm15.45 16.52-3.01-3.01c-.11-.11-.24-.13-.31-.13s-.2.02-.31.13L8.8 16.53c-.34.34-.87.89-2.64.89l3.71 3.7c1.17 1.17 3.07 1.17 4.24 0l3.72-3.71c-.91 0-1.67-.18-2.38-.89M8.8 7.47l3.02 3.02c.08.08.2.13.31.13s.23-.05.31-.13l2.99-2.99c.71-.74 1.52-.91 2.43-.91l-3.72-3.71c-1.17-1.17-3.07-1.17-4.24 0l-3.71 3.7c1.76 0 2.3.58 2.61.89',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm21.11 9.85-2.25-2.26H17.6c-.54 0-1.08.22-1.45.61l-3 3c-.28.28-.65.42-1.02.42-.36 0-.74-.15-1.02-.42L8.09 8.17c-.38-.38-.9-.6-1.45-.6H5.17l-2.29 2.3c-1.17 1.17-1.17 3.07 0 4.24l2.29 2.3h1.48c.54 0 1.06-.22 1.45-.6l3.02-3.02c.28-.28.65-.42 1.02-.42s.74.14 1.02.42l3.01 3.01c.38.38.9.6 1.45.6h1.26l2.25-2.26c1.17-1.18 1.17-3.1-.02-4.29',
      },
      '1',
    ),
  ],
  'PixSharp',
);
export const PixTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PixTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PixTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm15.45 16.52-3.01-3.01c-.11-.11-.24-.13-.31-.13s-.2.02-.31.13L8.8 16.53c-.34.34-.87.89-2.64.89l3.71 3.7c1.17 1.17 3.07 1.17 4.24 0l3.72-3.71c-.91 0-1.67-.18-2.38-.89M8.8 7.47l3.02 3.02c.08.08.2.13.31.13s.23-.05.31-.13l2.99-2.99c.71-.74 1.52-.91 2.43-.91l-3.72-3.71c-1.17-1.17-3.07-1.17-4.24 0l-3.71 3.7c1.76 0 2.3.58 2.61.89',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm21.11 9.85-2.25-2.26H17.6c-.54 0-1.08.22-1.45.61l-3 3c-.28.28-.65.42-1.02.42-.36 0-.74-.15-1.02-.42L8.09 8.17c-.38-.38-.9-.6-1.45-.6H5.17l-2.29 2.3c-1.17 1.17-1.17 3.07 0 4.24l2.29 2.3h1.48c.54 0 1.06-.22 1.45-.6l3.02-3.02c.28-.28.65-.42 1.02-.42s.74.14 1.02.42l3.01 3.01c.38.38.9.6 1.45.6h1.26l2.25-2.26c1.17-1.18 1.17-3.1-.02-4.29',
      },
      '1',
    ),
  ],
  'PixTwoTone',
);
export const PlaceIcon = (props?: KTRawAttr) => {
  const s = _PlaceIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaceIcon = svg(
  svg('path', {
    d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5',
  }),
  'Place',
);
export const PlaceOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PlaceOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaceOutlinedIcon = svg(
  svg('path', {
    d: 'M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14M12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2',
  }),
  'PlaceOutlined',
);
export const PlaceRoundedIcon = (props?: KTRawAttr) => {
  const s = _PlaceRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaceRoundedIcon = svg(
  svg('path', {
    d: 'M12 2c-4.2 0-8 3.22-8 8.2 0 3.18 2.45 6.92 7.34 11.23.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2 20 5.22 16.2 2 12 2m0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
  }),
  'PlaceRounded',
);
export const PlaceSharpIcon = (props?: KTRawAttr) => {
  const s = _PlaceSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaceSharpIcon = svg(
  svg('path', {
    d: 'M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-10c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2',
  }),
  'PlaceSharp',
);
export const PlaceTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PlaceTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaceTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        fillOpacity: '.3',
        d: 'M18.5 10.2c0 2.57-2.1 5.79-6.16 9.51l-.34.3-.34-.31C7.6 15.99 5.5 12.77 5.5 10.2c0-3.84 2.82-6.7 6.5-6.7s6.5 2.85 6.5 6.7',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2m6 8.2C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
      },
      '1',
    ),
  ],
  'PlaceTwoTone',
);
export const PlagiarismIcon = (props?: KTRawAttr) => {
  const s = _PlagiarismIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlagiarismIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm1.04 17.45-1.88-1.88c-1.33.71-3.01.53-4.13-.59-1.37-1.37-1.37-3.58 0-4.95s3.58-1.37 4.95 0c1.12 1.12 1.31 2.8.59 4.13l1.88 1.88zM13 9V3.5L18.5 9z',
      },
      '0',
    ),
    svg('circle', { cx: '11.5', cy: '14.5', r: '1.5' }, '1'),
  ],
  'Plagiarism',
);
export const PlagiarismOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PlagiarismOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlagiarismOutlinedIcon = svg(
  [
    svg('path', { d: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z' }, '0'),
    svg(
      'path',
      {
        d: 'M9.03 11.03c-1.37 1.37-1.37 3.58 0 4.95 1.12 1.12 2.8 1.31 4.13.59l1.88 1.88 1.41-1.41-1.88-1.88c.71-1.33.53-3.01-.59-4.13-1.37-1.37-3.59-1.37-4.95 0m3.53 3.53c-.59.59-1.54.59-2.12 0-.59-.59-.59-1.54 0-2.12.59-.59 1.54-.59 2.12 0 .59.59.59 1.53 0 2.12',
      },
      '1',
    ),
  ],
  'PlagiarismOutlined',
);
export const PlagiarismRoundedIcon = (props?: KTRawAttr) => {
  const s = _PlagiarismRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlagiarismRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm19.41 7.41-4.83-4.83c-.37-.37-.88-.58-1.41-.58H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.42m-3.67 11.33c-.39.39-1.02.39-1.41 0l-1.18-1.18c-1.33.71-3.01.53-4.13-.59-1.52-1.52-1.35-4.08.5-5.37 1.16-.81 2.78-.81 3.95 0 1.55 1.08 1.9 3.04 1.09 4.55l1.18 1.18c.39.39.39 1.02 0 1.41M14 9c-.55 0-1-.45-1-1V3.5L18.5 9z',
      },
      '0',
    ),
    svg('circle', { cx: '11.5', cy: '14.5', r: '1.5' }, '1'),
  ],
  'PlagiarismRounded',
);
export const PlagiarismSharpIcon = (props?: KTRawAttr) => {
  const s = _PlagiarismSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlagiarismSharpIcon = svg(
  [
    svg('circle', { cx: '11.5', cy: '14.5', r: '1.5' }, '0'),
    svg(
      'path',
      {
        d: 'M14 2H4v20h16V8zm1.04 17.45-1.88-1.88c-1.33.71-3.01.53-4.13-.59-1.37-1.37-1.37-3.58 0-4.95s3.58-1.37 4.95 0c1.12 1.12 1.31 2.8.59 4.13l1.88 1.88zM13 9V3.5L18.5 9z',
      },
      '1',
    ),
  ],
  'PlagiarismSharp',
);
export const PlagiarismTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PlagiarismTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlagiarismTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M13 4H6v16h12V9h-5zm.97 7.03c1.12 1.12 1.31 2.8.59 4.13l1.88 1.88-1.41 1.41-1.88-1.88c-1.33.71-3.01.53-4.13-.59-1.37-1.37-1.37-3.58 0-4.95s3.59-1.37 4.95 0',
        opacity: '.3',
      },
      '0',
    ),
    svg('circle', { cx: '11.5', cy: '13.5', r: '1.5', opacity: '.3' }, '1'),
    svg('path', { d: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z' }, '2'),
    svg(
      'path',
      {
        d: 'M9.03 11.03c-1.37 1.37-1.37 3.58 0 4.95 1.12 1.12 2.8 1.31 4.13.59l1.88 1.88 1.41-1.41-1.88-1.88c.71-1.33.53-3.01-.59-4.13-1.37-1.37-3.59-1.37-4.95 0m3.53 3.53c-.59.59-1.54.59-2.12 0-.59-.59-.59-1.54 0-2.12.59-.59 1.54-.59 2.12 0 .59.59.59 1.53 0 2.12',
      },
      '3',
    ),
  ],
  'PlagiarismTwoTone',
);
export const PlayArrowIcon = (props?: KTRawAttr) => {
  const s = _PlayArrowIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayArrowIcon = svg(svg('path', { d: 'M8 5v14l11-7z' }), 'PlayArrow');
export const PlayArrowOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PlayArrowOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayArrowOutlinedIcon = svg(
  svg('path', { d: 'M10 8.64 15.27 12 10 15.36zM8 5v14l11-7z' }),
  'PlayArrowOutlined',
);
export const PlayArrowRoundedIcon = (props?: KTRawAttr) => {
  const s = _PlayArrowRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayArrowRoundedIcon = svg(
  svg('path', {
    d: 'M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82',
  }),
  'PlayArrowRounded',
);
export const PlayArrowSharpIcon = (props?: KTRawAttr) => {
  const s = _PlayArrowSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayArrowSharpIcon = svg(svg('path', { d: 'M8 5v14l11-7z' }), 'PlayArrowSharp');
export const PlayArrowTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PlayArrowTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayArrowTwoToneIcon = svg(
  [
    svg('path', { d: 'M10 8.64v6.72L15.27 12z', opacity: '.3' }, '0'),
    svg('path', { d: 'm8 19 11-7L8 5zm2-10.36L15.27 12 10 15.36z' }, '1'),
  ],
  'PlayArrowTwoTone',
);
export const PlayCircleIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleIcon = svg(
  svg('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M9.5 16.5v-9l7 4.5z' }),
  'PlayCircle',
);
export const PlayCircleFilledIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleFilledIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleFilledIcon = svg(
  svg('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 14.5v-9l6 4.5z' }),
  'PlayCircleFilled',
);
export const PlayCircleFilledOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleFilledOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleFilledOutlinedIcon = svg(
  svg('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 14.5v-9l6 4.5z' }),
  'PlayCircleFilledOutlined',
);
export const PlayCircleFilledRoundedIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleFilledRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleFilledRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 13.5v-7c0-.41.47-.65.8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5c-.33.25-.8.01-.8-.4',
  }),
  'PlayCircleFilledRounded',
);
export const PlayCircleFilledSharpIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleFilledSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleFilledSharpIcon = svg(
  svg('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 14.5v-9l6 4.5z' }),
  'PlayCircleFilledSharp',
);
export const PlayCircleFilledTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleFilledTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleFilledTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8M10 7.5l6 4.5-6 4.5z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10m0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m-2 3.5v9l6-4.5z',
      },
      '1',
    ),
  ],
  'PlayCircleFilledTwoTone',
);
export const PlayCircleFilledWhiteIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleFilledWhiteIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleFilledWhiteIcon = svg(
  svg('path', {
    transform: 'scale(0.5, 0.5)',
    d: 'M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z',
  }),
  'PlayCircleFilledWhite',
);
export const PlayCircleFilledWhiteOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleFilledWhiteOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleFilledWhiteOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5z',
  }),
  'PlayCircleFilledWhiteOutlined',
);
export const PlayCircleFilledWhiteRoundedIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleFilledWhiteRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleFilledWhiteRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 13.5v-7c0-.41.47-.65.8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5c-.33.25-.8.01-.8-.4z',
  }),
  'PlayCircleFilledWhiteRounded',
);
export const PlayCircleFilledWhiteSharpIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleFilledWhiteSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleFilledWhiteSharpIcon = svg(
  svg('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z' }),
  'PlayCircleFilledWhiteSharp',
);
export const PlayCircleFilledWhiteTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleFilledWhiteTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleFilledWhiteTwoToneIcon = svg(
  svg({
    children: [
      svg('path', {
        d: 'M12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zM10 7.5l6 4.5-6 4.5v-9z',
        opacity: '.3',
      }),
      svg('path', {
        d: 'M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm-2 3.5v9l6-4.5z',
      }),
    ],
  }),
  'PlayCircleFilledWhiteTwoTone',
);
export const PlayCircleOutlineIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleOutlineIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleOutlineIcon = svg(
  svg('path', {
    d: 'm10 16.5 6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
  }),
  'PlayCircleOutline',
);
export const PlayCircleOutlineOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleOutlineOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleOutlineOutlinedIcon = svg(
  svg('path', {
    d: 'm10 16.5 6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
  }),
  'PlayCircleOutlineOutlined',
);
export const PlayCircleOutlineRoundedIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleOutlineRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleOutlineRoundedIcon = svg(
  svg('path', {
    d: 'm10.8 15.9 4.67-3.5c.27-.2.27-.6 0-.8L10.8 8.1c-.33-.25-.8-.01-.8.4v7c0 .41.47.65.8.4M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
  }),
  'PlayCircleOutlineRounded',
);
export const PlayCircleOutlineSharpIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleOutlineSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleOutlineSharpIcon = svg(
  svg('path', {
    d: 'm10 16.5 6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
  }),
  'PlayCircleOutlineSharp',
);
export const PlayCircleOutlineTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleOutlineTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleOutlineTwoToneIcon = svg(
  svg('path', {
    d: 'm10 16.5 6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
  }),
  'PlayCircleOutlineTwoTone',
);
export const PlayCircleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-2.5-3.5 7-4.5-7-4.5z',
  }),
  'PlayCircleOutlined',
);
export const PlayCircleRoundedIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M9.5 14.67V9.33c0-.79.88-1.27 1.54-.84l4.15 2.67c.61.39.61 1.29 0 1.68l-4.15 2.67c-.66.43-1.54-.05-1.54-.84',
  }),
  'PlayCircleRounded',
);
export const PlayCircleSharpIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleSharpIcon = svg(
  svg('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M9.5 16.5v-9l7 4.5z' }),
  'PlayCircleSharp',
);
export const PlayCircleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PlayCircleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayCircleTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8M9.5 16.5v-9l7 4.5z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
      },
      '1',
    ),
    svg('path', { d: 'm9.5 16.5 7-4.5-7-4.5z' }, '2'),
  ],
  'PlayCircleTwoTone',
);
export const PlayDisabledIcon = (props?: KTRawAttr) => {
  const s = _PlayDisabledIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayDisabledIcon = svg(
  svg('path', { d: 'M8 5.19V5l11 7-2.55 1.63zm12 14.54-5.11-5.11L8 7.73 4.27 4 3 5.27l5 5V19l5.33-3.4 5.4 5.4z' }),
  'PlayDisabled',
);
export const PlayDisabledOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PlayDisabledOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayDisabledOutlinedIcon = svg(
  svg('path', {
    d: 'M16.45 13.62 19 12 8 5v.17zM2.81 2.81 1.39 4.22 8 10.83V19l4.99-3.18 6.78 6.78 1.41-1.41zM10 15.36v-2.53l1.55 1.55z',
  }),
  'PlayDisabledOutlined',
);
export const PlayDisabledRoundedIcon = (props?: KTRawAttr) => {
  const s = _PlayDisabledRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayDisabledRoundedIcon = svg(
  svg('path', {
    d: 'M2.1 3.51c-.39.39-.39 1.02 0 1.41l5.9 5.9v6.35c0 .79.87 1.27 1.54.84l3.45-2.2 6.08 6.08c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L3.51 3.51a.996.996 0 0 0-1.41 0m15.58 9.33c.62-.39.62-1.29 0-1.69L9.54 5.98c-.27-.17-.57-.19-.84-.11l7.75 7.75z',
  }),
  'PlayDisabledRounded',
);
export const PlayDisabledSharpIcon = (props?: KTRawAttr) => {
  const s = _PlayDisabledSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayDisabledSharpIcon = svg(
  svg('path', { d: 'M16.45 13.62 19 12 8 5v.17zM2.81 2.81 1.39 4.22 8 10.83V19l4.99-3.18 6.79 6.79 1.41-1.42z' }),
  'PlayDisabledSharp',
);
export const PlayDisabledTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PlayDisabledTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayDisabledTwoToneIcon = svg(
  [
    svg('path', { d: 'M10 12.83v2.53l1.55-.99z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M2.81 2.81 1.39 4.22 8 10.83V19l4.99-3.18 6.78 6.78 1.41-1.41zM10 15.36v-2.53l1.55 1.55zM19 12 8 5v.17l8.45 8.45z',
      },
      '1',
    ),
  ],
  'PlayDisabledTwoTone',
);
export const PlayForWorkIcon = (props?: KTRawAttr) => {
  const s = _PlayForWorkIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayForWorkIcon = svg(
  svg('path', {
    d: 'M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4z',
  }),
  'PlayForWork',
);
export const PlayForWorkOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PlayForWorkOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayForWorkOutlinedIcon = svg(
  svg('path', {
    d: 'M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4z',
  }),
  'PlayForWorkOutlined',
);
export const PlayForWorkRoundedIcon = (props?: KTRawAttr) => {
  const s = _PlayForWorkRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayForWorkRoundedIcon = svg(
  svg('path', {
    d: 'M11 6v4.59H8.71c-.45 0-.67.54-.35.85l3.29 3.29c.2.2.51.2.71 0l3.29-3.29c.31-.31.09-.85-.35-.85H13V6c0-.55-.45-1-1-1s-1 .45-1 1m-3.9 8c-.61 0-1.11.55-.99 1.15C6.65 17.91 9.08 20 12 20s5.35-2.09 5.89-4.85c.12-.6-.38-1.15-.99-1.15-.49 0-.88.35-.98.83C15.53 16.64 13.93 18 12 18s-3.53-1.36-3.91-3.17c-.1-.48-.5-.83-.99-.83',
  }),
  'PlayForWorkRounded',
);
export const PlayForWorkSharpIcon = (props?: KTRawAttr) => {
  const s = _PlayForWorkSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayForWorkSharpIcon = svg(
  svg('path', {
    d: 'M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4z',
  }),
  'PlayForWorkSharp',
);
export const PlayForWorkTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PlayForWorkTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayForWorkTwoToneIcon = svg(
  svg('path', {
    d: 'M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4z',
  }),
  'PlayForWorkTwoTone',
);
export const PlayLessonIcon = (props?: KTRawAttr) => {
  const s = _PlayLessonIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayLessonIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M18 11c.34 0 .67.03 1 .08V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.26c-.79-1.13-1.26-2.51-1.26-4 0-3.87 3.13-7 7-7M7 11V4h5v7L9.5 9.5z',
      },
      '0',
    ),
    svg('path', { d: 'M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m-1.25 7.5v-5l4 2.5z' }, '1'),
  ],
  'PlayLesson',
);
export const PlayLessonOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PlayLessonOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayLessonOutlinedIcon = svg(
  svg('path', {
    d: 'M5 20V4h2v7l2.5-1.5L12 11V4h5v7.08c.33-.05.66-.08 1-.08s.67.03 1 .08V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.26c-.42-.6-.75-1.28-.97-2zm13-7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m-1.25 7.5v-5l4 2.5z',
  }),
  'PlayLessonOutlined',
);
export const PlayLessonRoundedIcon = (props?: KTRawAttr) => {
  const s = _PlayLessonRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayLessonRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M18 11c.34 0 .67.03 1 .08V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.26c-.79-1.13-1.26-2.51-1.26-4 0-3.87 3.13-7 7-7m-10.24-.45c-.34.2-.76-.04-.76-.43V4h5v6.12c0 .39-.42.63-.76.43L9.5 9.5z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m-1.25 6.6v-3.2c0-.39.43-.63.76-.42l2.56 1.6c.31.2.31.65 0 .85l-2.56 1.6c-.33.2-.76-.04-.76-.43',
      },
      '1',
    ),
  ],
  'PlayLessonRounded',
);
export const PlayLessonSharpIcon = (props?: KTRawAttr) => {
  const s = _PlayLessonSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayLessonSharpIcon = svg(
  [
    svg(
      'path',
      { d: 'M18 11c.34 0 .67.03 1 .08V2H3v20h9.26c-.79-1.13-1.26-2.51-1.26-4 0-3.87 3.13-7 7-7M7 11V4h5v7L9.5 9.5z' },
      '0',
    ),
    svg('path', { d: 'M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m-1.25 7.5v-5l4 2.5z' }, '1'),
  ],
  'PlayLessonSharp',
);
export const PlayLessonTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PlayLessonTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlayLessonTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M12 4v7L9.5 9.5 7 11V4H5v16h6.29c-.19-.63-.29-1.3-.29-2 0-3.53 2.61-6.43 6-6.92V4z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M5 20V4h2v7l2.5-1.5L12 11V4h5v7.08c.33-.05.66-.08 1-.08s.67.03 1 .08V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.26c-.42-.6-.75-1.28-.97-2z',
      },
      '1',
    ),
    svg('path', { d: 'M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m-1.25 7.5v-5l4 2.5z' }, '2'),
  ],
  'PlayLessonTwoTone',
);
export const PlaylistAddIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddIcon = svg(
  svg('path', { d: 'M14 10H3v2h11zm0-4H3v2h11zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2zM3 16h7v-2H3z' }),
  'PlaylistAdd',
);
export const PlaylistAddCheckIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddCheckIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddCheckIcon = svg(
  svg('path', {
    d: 'M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm17.59-2.07-4.25 4.24-2.12-2.12-1.41 1.41L16.34 19 22 13.34z',
  }),
  'PlaylistAddCheck',
);
export const PlaylistAddCheckCircleIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddCheckCircleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddCheckCircleIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7 7h7v2H7zm0 3h7v2H7zm3 5H7v-2h3zm4.05 3.36-2.83-2.83 1.41-1.41 1.41 1.41L17.59 12 19 13.41z',
  }),
  'PlaylistAddCheckCircle',
);
export const PlaylistAddCheckCircleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddCheckCircleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddCheckCircleOutlinedIcon = svg(
  svg('path', {
    d: 'M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m2 8H7v2h7zm0-3H7v2h7zm-7 8h3v-2H7zm12-1.59L17.59 12l-3.54 3.54-1.41-1.41-1.41 1.41 2.83 2.83z',
  }),
  'PlaylistAddCheckCircleOutlined',
);
export const PlaylistAddCheckCircleRoundedIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddCheckCircleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddCheckCircleRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7 8c0-.55.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1m0 3c0-.55.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1m3 3c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1h1c.55 0 1 .45 1 1m8.29.12-3.54 3.54c-.39.39-1.02.39-1.41 0l-1.41-1.41a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l.71.71 2.83-2.83c.39-.39 1.02-.39 1.41 0 .39.38.39 1.01 0 1.4',
  }),
  'PlaylistAddCheckCircleRounded',
);
export const PlaylistAddCheckCircleSharpIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddCheckCircleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddCheckCircleSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7 7h7v2H7zm0 3h7v2H7zm3 5H7v-2h3zm4.05 3.36-2.83-2.83 1.41-1.41 1.41 1.41L17.59 12 19 13.41z',
  }),
  'PlaylistAddCheckCircleSharp',
);
export const PlaylistAddCheckCircleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddCheckCircleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddCheckCircleTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8M7 7h7v2H7zm0 3h7v2H7zm3 5H7v-2h3zm4.05 3.36-2.83-2.83 1.41-1.41 1.41 1.41L17.59 12 19 13.41z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m2 8H7v2h7zm0-3H7v2h7zm-7 8h3v-2H7zm12-1.59L17.59 12l-3.54 3.54-1.41-1.41-1.41 1.41 2.83 2.83z',
      },
      '1',
    ),
  ],
  'PlaylistAddCheckCircleTwoTone',
);
export const PlaylistAddCheckOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddCheckOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddCheckOutlinedIcon = svg(
  svg('path', {
    d: 'M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm17.59-2.07-4.25 4.24-2.12-2.12-1.41 1.41L16.34 19 22 13.34z',
  }),
  'PlaylistAddCheckOutlined',
);
export const PlaylistAddCheckRoundedIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddCheckRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddCheckRoundedIcon = svg(
  svg('path', {
    d: 'M13 10H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1m0-4H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1M3 16h6c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1m19.21-3.79.09.09c.39.39.39 1.02 0 1.41l-5.58 5.59c-.39.39-1.02.39-1.41 0l-3.09-3.09a.996.996 0 0 1 0-1.41l.09-.09c.39-.39 1.02-.39 1.41 0l2.3 2.3 4.78-4.79c.38-.4 1.02-.4 1.41-.01',
  }),
  'PlaylistAddCheckRounded',
);
export const PlaylistAddCheckSharpIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddCheckSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddCheckSharpIcon = svg(
  svg('path', {
    d: 'M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm17.59-2.07-4.25 4.24-2.12-2.12-1.41 1.41L16.34 19 22 13.34z',
  }),
  'PlaylistAddCheckSharp',
);
export const PlaylistAddCheckTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddCheckTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddCheckTwoToneIcon = svg(
  svg('path', {
    d: 'M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm17.59-2.07-4.25 4.24-2.12-2.12-1.41 1.41L16.34 19 22 13.34z',
  }),
  'PlaylistAddCheckTwoTone',
);
export const PlaylistAddCircleIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddCircleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddCircleIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7 7h7v2H7zm3 8H7v-2h3zm-3-3v-2h7v2zm12 3h-2v2h-2v-2h-2v-2h2v-2h2v2h2z',
  }),
  'PlaylistAddCircle',
);
export const PlaylistAddCircleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddCircleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddCircleOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m2-10H7v2h7zm0-3H7v2h7zm-7 8h3v-2H7zm12-2v2h-2v2h-2v-2h-2v-2h2v-2h2v2z',
  }),
  'PlaylistAddCircleOutlined',
);
export const PlaylistAddCircleRoundedIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddCircleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddCircleRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7 8c0-.55.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1m3 6c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1h1c.55 0 1 .45 1 1m-2-2c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1zm10 3h-1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1h-1c-.55 0-1-.45-1-1s.45-1 1-1h1v-1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1',
  }),
  'PlaylistAddCircleRounded',
);
export const PlaylistAddCircleSharpIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddCircleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddCircleSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7 7h7v2H7zm3 8H7v-2h3zm-3-3v-2h7v2zm12 3h-2v2h-2v-2h-2v-2h2v-2h2v2h2z',
  }),
  'PlaylistAddCircleSharp',
);
export const PlaylistAddCircleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddCircleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddCircleTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8M7 7h7v2H7zm3 8H7v-2h3zm-3-3v-2h7v2zm10 3v2h-2v-2h-2v-2h2v-2h2v2h2v2z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m2-10H7v2h7zm0-3H7v2h7zm-7 8h3v-2H7zm12-2v2h-2v2h-2v-2h-2v-2h2v-2h2v2z',
      },
      '1',
    ),
  ],
  'PlaylistAddCircleTwoTone',
);
export const PlaylistAddOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddOutlinedIcon = svg(
  svg('path', { d: 'M14 10H3v2h11zm0-4H3v2h11zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2zM3 16h7v-2H3z' }),
  'PlaylistAddOutlined',
);
export const PlaylistAddRoundedIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddRoundedIcon = svg(
  svg('path', {
    d: 'M13 10H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1m0-4H3c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1m5 8v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1zM3 16h6c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1',
  }),
  'PlaylistAddRounded',
);
export const PlaylistAddSharpIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddSharpIcon = svg(
  svg('path', { d: 'M14 10H3v2h11zm0-4H3v2h11zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2zM3 16h7v-2H3z' }),
  'PlaylistAddSharp',
);
export const PlaylistAddTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PlaylistAddTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistAddTwoToneIcon = svg(
  svg('path', { d: 'M14 10H3v2h11zm0-4H3v2h11zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2zM3 16h7v-2H3z' }),
  'PlaylistAddTwoTone',
);
export const PlaylistPlayIcon = (props?: KTRawAttr) => {
  const s = _PlaylistPlayIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistPlayIcon = svg(
  svg('path', { d: 'M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z' }),
  'PlaylistPlay',
);
export const PlaylistPlayOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PlaylistPlayOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistPlayOutlinedIcon = svg(
  svg('path', { d: 'M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z' }),
  'PlaylistPlayOutlined',
);
export const PlaylistPlayRoundedIcon = (props?: KTRawAttr) => {
  const s = _PlaylistPlayRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistPlayRoundedIcon = svg(
  svg('path', {
    d: 'M5 10h10c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1m0-4h10c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1m0 8h6c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1m9 .88v4.23c0 .39.42.63.76.43l3.53-2.12c.32-.19.32-.66 0-.86l-3.53-2.12c-.34-.19-.76.05-.76.44',
  }),
  'PlaylistPlayRounded',
);
export const PlaylistPlaySharpIcon = (props?: KTRawAttr) => {
  const s = _PlaylistPlaySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistPlaySharpIcon = svg(
  svg('path', { d: 'M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z' }),
  'PlaylistPlaySharp',
);
export const PlaylistPlayTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PlaylistPlayTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistPlayTwoToneIcon = svg(
  svg('path', { d: 'M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z' }),
  'PlaylistPlayTwoTone',
);
export const PlaylistRemoveIcon = (props?: KTRawAttr) => {
  const s = _PlaylistRemoveIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistRemoveIcon = svg(
  svg('path', {
    d: 'M14 10H3v2h11zm0-4H3v2h11zM3 16h7v-2H3zm11.41 6L17 19.41 19.59 22 21 20.59 18.41 18 21 15.41 19.59 14 17 16.59 14.41 14 13 15.41 15.59 18 13 20.59z',
  }),
  'PlaylistRemove',
);
export const PlaylistRemoveOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PlaylistRemoveOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistRemoveOutlinedIcon = svg(
  svg('path', {
    d: 'M14 10H3v2h11zm0-4H3v2h11zM3 16h7v-2H3zm11.41 6L17 19.41 19.59 22 21 20.59 18.41 18 21 15.41 19.59 14 17 16.59 14.41 14 13 15.41 15.59 18 13 20.59z',
  }),
  'PlaylistRemoveOutlined',
);
export const PlaylistRemoveRoundedIcon = (props?: KTRawAttr) => {
  const s = _PlaylistRemoveRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistRemoveRoundedIcon = svg(
  svg('path', {
    d: 'M13.71 21.3c.39.39 1.02.39 1.41 0L17 19.41l1.89 1.89c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L18.41 18l1.89-1.89c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0L17 16.59l-1.89-1.89c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41L15.59 18l-1.89 1.89c-.38.38-.38 1.02.01 1.41M14 11c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1m0-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1M3 15c0 .55.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1',
  }),
  'PlaylistRemoveRounded',
);
export const PlaylistRemoveSharpIcon = (props?: KTRawAttr) => {
  const s = _PlaylistRemoveSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistRemoveSharpIcon = svg(
  svg('path', {
    d: 'M14 10H3v2h11zm0-4H3v2h11zM3 16h7v-2H3zm11.41 6L17 19.41 19.59 22 21 20.59 18.41 18 21 15.41 19.59 14 17 16.59 14.41 14 13 15.41 15.59 18 13 20.59z',
  }),
  'PlaylistRemoveSharp',
);
export const PlaylistRemoveTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PlaylistRemoveTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlaylistRemoveTwoToneIcon = svg(
  svg('path', {
    d: 'M14 10H3v2h11zm0-4H3v2h11zM3 16h7v-2H3zm11.41 6L17 19.41 19.59 22 21 20.59 18.41 18 21 15.41 19.59 14 17 16.59 14.41 14 13 15.41 15.59 18 13 20.59z',
  }),
  'PlaylistRemoveTwoTone',
);
export const PlumbingIcon = (props?: KTRawAttr) => {
  const s = _PlumbingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlumbingIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm19.28 4.93-2.12-2.12c-.78-.78-2.05-.78-2.83 0L11.5 5.64l2.12 2.12 2.12-2.12 3.54 3.54c1.17-1.18 1.17-3.08 0-4.25M5.49 13.77c.59.59 1.54.59 2.12 0l2.47-2.47-2.12-2.13-2.47 2.47c-.59.59-.59 1.54 0 2.13',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm15.04 7.76-.71.71-.71.71L10.44 6c-.59-.6-1.54-.6-2.12-.01-.59.59-.59 1.54 0 2.12l3.18 3.18-.71.71-6.36 6.36c-.78.78-.78 2.05 0 2.83s2.05.78 2.83 0L16.45 12c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41z',
      },
      '1',
    ),
  ],
  'Plumbing',
);
export const PlumbingOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PlumbingOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlumbingOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm19.28 4.93-2.12-2.12c-.78-.78-2.05-.78-2.83 0L11.5 5.64l2.12 2.12 2.12-2.12 3.54 3.54c1.17-1.18 1.17-3.08 0-4.25M5.49 13.77c.59.59 1.54.59 2.12 0l2.47-2.47-2.12-2.13-2.47 2.47c-.59.59-.59 1.54 0 2.13',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm15.04 7.76-.71.71-.71.71L10.44 6c-.59-.6-1.54-.6-2.12-.01-.59.59-.59 1.54 0 2.12l3.18 3.18-.71.71-6.36 6.36c-.78.78-.78 2.05 0 2.83s2.05.78 2.83 0L16.45 12c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41z',
      },
      '1',
    ),
  ],
  'PlumbingOutlined',
);
export const PlumbingRoundedIcon = (props?: KTRawAttr) => {
  const s = _PlumbingRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlumbingRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm19.28 4.93-2.12-2.12c-.78-.78-2.05-.78-2.83 0L11.5 5.64l2.12 2.12 2.12-2.12 3.54 3.54c1.17-1.18 1.17-3.08 0-4.25M5.49 13.77c.59.59 1.54.59 2.12 0l2.47-2.47-2.12-2.13-2.47 2.47c-.59.59-.59 1.54 0 2.13',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm14.33 8.46-.71.71-3.18-3.18c-.59-.59-1.54-.59-2.12 0-.59.59-.59 1.54 0 2.12l3.18 3.18-7 7c-.7.7-.88 1.84-.29 2.65.74 1.03 2.19 1.12 3.05.26l9.19-9.2c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-2.12-2.12a.987.987 0 0 0-1.41-.01',
      },
      '1',
    ),
  ],
  'PlumbingRounded',
);
export const PlumbingSharpIcon = (props?: KTRawAttr) => {
  const s = _PlumbingSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlumbingSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm16.16 5.64 3.54 3.54c1.17-1.17 1.17-3.07 0-4.24L16.16 1.4l-4.24 4.24 2.12 2.12zM4.842 12.7081l3.5355-3.5355 2.1213 2.1213-3.5355 3.5355z',
      },
      '0',
    ),
    svg(
      'path',
      { d: 'm15.45 7.76-1.41 1.41-4.25-4.24-2.12 2.12 4.24 4.24-8.49 8.49 2.83 2.83L16.86 12l.71.71 1.41-1.41z' },
      '1',
    ),
  ],
  'PlumbingSharp',
);
export const PlumbingTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PlumbingTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlumbingTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm19.28 4.93-2.12-2.12c-.78-.78-2.05-.78-2.83 0L11.5 5.64l2.12 2.12 2.12-2.12 3.54 3.54c1.17-1.18 1.17-3.08 0-4.25M5.49 13.77c.59.59 1.54.59 2.12 0l2.47-2.47-2.12-2.13-2.47 2.47c-.59.59-.59 1.54 0 2.13',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm15.04 7.76-.71.71-.71.71L10.44 6c-.59-.6-1.54-.6-2.12-.01-.59.59-.59 1.54 0 2.12l3.18 3.18-.71.71-6.36 6.36c-.78.78-.78 2.05 0 2.83s2.05.78 2.83 0L16.45 12c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41z',
      },
      '1',
    ),
  ],
  'PlumbingTwoTone',
);
export const PlusOneIcon = (props?: KTRawAttr) => {
  const s = _PlusOneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlusOneIcon = svg(
  svg('path', { d: 'M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z' }),
  'PlusOne',
);
export const PlusOneOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PlusOneOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlusOneOutlinedIcon = svg(
  svg('path', { d: 'M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z' }),
  'PlusOneOutlined',
);
export const PlusOneRoundedIcon = (props?: KTRawAttr) => {
  const s = _PlusOneRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlusOneRoundedIcon = svg(
  svg('path', {
    d: 'M9 8c-.55 0-1 .45-1 1v3H5c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V9c0-.55-.45-1-1-1m5.5-1.21c0 .57.52 1 1.08.89L17 7.4V17c0 .55.45 1 1 1s1-.45 1-1V6.27c0-.65-.6-1.12-1.23-.97l-2.57.62c-.41.09-.7.46-.7.87',
  }),
  'PlusOneRounded',
);
export const PlusOneSharpIcon = (props?: KTRawAttr) => {
  const s = _PlusOneSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlusOneSharpIcon = svg(
  svg('path', { d: 'M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z' }),
  'PlusOneSharp',
);
export const PlusOneTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PlusOneTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PlusOneTwoToneIcon = svg(
  svg('path', { d: 'M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z' }),
  'PlusOneTwoTone',
);
export const PodcastsIcon = (props?: KTRawAttr) => {
  const s = _PodcastsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PodcastsIcon = svg(
  svg('path', {
    d: 'M14 12c0 .74-.4 1.38-1 1.72V22h-2v-8.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2s2 .9 2 2m-2-6c-3.31 0-6 2.69-6 6 0 1.74.75 3.31 1.94 4.4l1.42-1.42C8.53 14.25 8 13.19 8 12c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.19-.53 2.25-1.36 2.98l1.42 1.42C17.25 15.31 18 13.74 18 12c0-3.31-2.69-6-6-6m0-4C6.48 2 2 6.48 2 12c0 2.85 1.2 5.41 3.11 7.24l1.42-1.42C4.98 16.36 4 14.29 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.29-.98 4.36-2.53 5.82l1.42 1.42C20.8 17.41 22 14.85 22 12c0-5.52-4.48-10-10-10',
  }),
  'Podcasts',
);
export const PodcastsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PodcastsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PodcastsOutlinedIcon = svg(
  svg('path', {
    d: 'M14 12c0 .74-.4 1.38-1 1.72V22h-2v-8.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2s2 .9 2 2m-2-6c-3.31 0-6 2.69-6 6 0 1.74.75 3.31 1.94 4.4l1.42-1.42C8.53 14.25 8 13.19 8 12c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.19-.53 2.25-1.36 2.98l1.42 1.42C17.25 15.31 18 13.74 18 12c0-3.31-2.69-6-6-6m0-4C6.48 2 2 6.48 2 12c0 2.85 1.2 5.41 3.11 7.24l1.42-1.42C4.98 16.36 4 14.29 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.29-.98 4.36-2.53 5.82l1.42 1.42C20.8 17.41 22 14.85 22 12c0-5.52-4.48-10-10-10',
  }),
  'PodcastsOutlined',
);
export const PodcastsRoundedIcon = (props?: KTRawAttr) => {
  const s = _PodcastsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PodcastsRoundedIcon = svg(
  svg('path', {
    d: 'M14 12c0 .74-.4 1.38-1 1.72V21c0 .55-.45 1-1 1s-1-.45-1-1v-7.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2s2 .9 2 2m-3.25-5.87c-2.27.46-4.12 2.28-4.61 4.55-.4 1.86.07 3.62 1.08 4.94.35.45 1.03.47 1.43.07l.07-.07c.34-.34.34-.87.06-1.25-.68-.9-.98-2.1-.66-3.37.35-1.42 1.52-2.57 2.95-2.88C13.69 7.52 16 9.49 16 12c0 .87-.28 1.67-.76 2.32-.3.41-.29.97.07 1.33.44.44 1.17.37 1.54-.14.72-.98 1.15-2.2 1.15-3.51 0-3.72-3.39-6.65-7.25-5.87m.08-4.06c-4.53.51-8.22 4.18-8.76 8.71-.35 2.95.59 5.67 2.32 7.7.37.43 1.03.46 1.43.06l.05-.05c.35-.35.38-.92.05-1.3-1.56-1.83-2.33-4.37-1.7-7.06.7-3.01 3.18-5.39 6.22-5.97C15.53 3.18 20 7.08 20 12c0 1.96-.72 3.76-1.9 5.16-.34.4-.31.98.05 1.35.42.42 1.11.39 1.49-.07C21.11 16.7 22 14.46 22 12c0-5.91-5.13-10.62-11.17-9.93',
  }),
  'PodcastsRounded',
);
export const PodcastsSharpIcon = (props?: KTRawAttr) => {
  const s = _PodcastsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PodcastsSharpIcon = svg(
  svg('path', {
    d: 'M14 12c0 .74-.4 1.38-1 1.72V22h-2v-8.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2s2 .9 2 2m-2-6c-3.31 0-6 2.69-6 6 0 1.74.75 3.31 1.94 4.4l1.42-1.42C8.53 14.25 8 13.19 8 12c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.19-.53 2.25-1.36 2.98l1.42 1.42C17.25 15.31 18 13.74 18 12c0-3.31-2.69-6-6-6m0-4C6.48 2 2 6.48 2 12c0 2.85 1.2 5.41 3.11 7.24l1.42-1.42C4.98 16.36 4 14.29 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.29-.98 4.36-2.53 5.82l1.42 1.42C20.8 17.41 22 14.85 22 12c0-5.52-4.48-10-10-10',
  }),
  'PodcastsSharp',
);
export const PodcastsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PodcastsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PodcastsTwoToneIcon = svg(
  svg('path', {
    d: 'M14 12c0 .74-.4 1.38-1 1.72V22h-2v-8.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2s2 .9 2 2m-2-6c-3.31 0-6 2.69-6 6 0 1.74.75 3.31 1.94 4.4l1.42-1.42C8.53 14.25 8 13.19 8 12c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.19-.53 2.25-1.36 2.98l1.42 1.42C17.25 15.31 18 13.74 18 12c0-3.31-2.69-6-6-6m0-4C6.48 2 2 6.48 2 12c0 2.85 1.2 5.41 3.11 7.24l1.42-1.42C4.98 16.36 4 14.29 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.29-.98 4.36-2.53 5.82l1.42 1.42C20.8 17.41 22 14.85 22 12c0-5.52-4.48-10-10-10',
  }),
  'PodcastsTwoTone',
);
export const PointOfSaleIcon = (props?: KTRawAttr) => {
  const s = _PointOfSaleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PointOfSaleIcon = svg(
  svg('path', {
    d: 'M17 2H7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 4H7V4h10zm3 16H4c-1.1 0-2-.9-2-2v-1h20v1c0 1.1-.9 2-2 2m-1.47-11.81C18.21 9.47 17.49 9 16.7 9H7.3c-.79 0-1.51.47-1.83 1.19L2 18h20zM9.5 16h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m3 4h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m3 4h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5',
  }),
  'PointOfSale',
);
export const PointOfSaleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PointOfSaleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PointOfSaleOutlinedIcon = svg(
  svg('path', {
    d: 'M17 2H7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 4H7V4h10zm3 16H4c-1.1 0-2-.9-2-2v-1h20v1c0 1.1-.9 2-2 2m-1.47-11.81C18.21 9.47 17.49 9 16.7 9H7.3c-.79 0-1.51.47-1.83 1.19L2 18h20zM9.5 16h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m3 4h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m3 4h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5',
  }),
  'PointOfSaleOutlined',
);
export const PointOfSaleRoundedIcon = (props?: KTRawAttr) => {
  const s = _PointOfSaleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PointOfSaleRoundedIcon = svg(
  svg('path', {
    d: 'M17 2H7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-.5 4h-9c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5M20 22H4c-1.1 0-2-.9-2-2v-1h20v1c0 1.1-.9 2-2 2m-1.47-11.81C18.21 9.47 17.49 9 16.7 9H7.3c-.79 0-1.51.47-1.83 1.19L2 18h20zM9.5 16h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m3 4h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m3 4h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5',
  }),
  'PointOfSaleRounded',
);
export const PointOfSaleSharpIcon = (props?: KTRawAttr) => {
  const s = _PointOfSaleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PointOfSaleSharpIcon = svg(
  svg('path', {
    d: 'M19 2H5v6h14zm-2 4H7V4h10zm5 16H2v-3h20zM18 9H6l-4 9h20zm-8 7H8v-1h2zm0-2H8v-1h2zm0-2H8v-1h2zm3 4h-2v-1h2zm0-2h-2v-1h2zm0-2h-2v-1h2zm3 4h-2v-1h2zm0-2h-2v-1h2zm0-2h-2v-1h2z',
  }),
  'PointOfSaleSharp',
);
export const PointOfSaleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PointOfSaleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PointOfSaleTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M9.5 16h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m.5-2.5c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5h1c.28 0 .5-.22.5-.5m0-2c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5h1c.28 0 .5-.22.5-.5m3 4c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5h1c.28 0 .5-.22.5-.5m0-2c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5h1c.28 0 .5-.22.5-.5m0-2c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5h1c.28 0 .5-.22.5-.5m3 4c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5h1c.28 0 .5-.22.5-.5m0-2c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5h1c.28 0 .5-.22.5-.5m0-2c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5h1c.28 0 .5-.22.5-.5M17 4H7v2h10z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M17 2H7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 4H7V4h10zm3 16H4c-1.1 0-2-.9-2-2v-1h20v1c0 1.1-.9 2-2 2m-1.47-11.81C18.21 9.47 17.49 9 16.7 9H7.3c-.79 0-1.51.47-1.83 1.19L2 18h20zM9.5 16h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m3 4h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m3 4h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1c.28 0 .5.22.5.5s-.22.5-.5.5',
      },
      '1',
    ),
  ],
  'PointOfSaleTwoTone',
);
export const PolicyIcon = (props?: KTRawAttr) => {
  const s = _PolicyIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PolicyIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm21 5-9-4-9 4v6c0 5.55 3.84 10.74 9 12 2.3-.56 4.33-1.9 5.88-3.71l-3.12-3.12c-1.94 1.29-4.58 1.07-6.29-.64-1.95-1.95-1.95-5.12 0-7.07s5.12-1.95 7.07 0c1.71 1.71 1.92 4.35.64 6.29l2.9 2.9C20.29 15.69 21 13.38 21 11z',
      },
      '0',
    ),
    svg('circle', { cx: '12', cy: '12', r: '3' }, '1'),
  ],
  'Policy',
);
export const PolicyOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PolicyOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PolicyOutlinedIcon = svg(
  svg('path', {
    d: 'M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm7 10c0 1.85-.51 3.65-1.38 5.21l-1.45-1.45c1.29-1.94 1.07-4.58-.64-6.29-1.95-1.95-5.12-1.95-7.07 0s-1.95 5.12 0 7.07c1.71 1.71 4.35 1.92 6.29.64l1.72 1.72c-1.19 1.42-2.73 2.51-4.47 3.04-4.02-1.25-7-5.42-7-9.94V6.3l7-3.11 7 3.11zm-7 4c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3',
  }),
  'PolicyOutlined',
);
export const PolicyRoundedIcon = (props?: KTRawAttr) => {
  const s = _PolicyRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PolicyRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21 6.3c0-.79-.47-1.51-1.19-1.83l-7-3.11c-.52-.23-1.11-.23-1.62 0l-7 3.11C3.47 4.79 3 5.51 3 6.3V11c0 5.55 3.84 10.74 9 12 2.3-.56 4.33-1.9 5.88-3.71l-3.12-3.12c-1.94 1.29-4.58 1.07-6.29-.64-1.95-1.95-1.95-5.12 0-7.07s5.12-1.95 7.07 0c1.71 1.71 1.92 4.35.64 6.29l2.9 2.9C20.29 15.69 21 13.38 21 11z',
      },
      '0',
    ),
    svg('circle', { cx: '12', cy: '12', r: '3' }, '1'),
  ],
  'PolicyRounded',
);
export const PolicySharpIcon = (props?: KTRawAttr) => {
  const s = _PolicySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PolicySharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm21 5-9-4-9 4v6c0 5.55 3.84 10.74 9 12 2.3-.56 4.33-1.9 5.88-3.71l-3.12-3.12c-1.94 1.29-4.58 1.07-6.29-.64-1.95-1.95-1.95-5.12 0-7.07s5.12-1.95 7.07 0c1.71 1.71 1.92 4.35.64 6.29l2.9 2.9C20.29 15.69 21 13.38 21 11z',
      },
      '0',
    ),
    svg('circle', { cx: '12', cy: '12', r: '3' }, '1'),
  ],
  'PolicySharp',
);
export const PolicyTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PolicyTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PolicyTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 6.3V11c0 4.52 2.98 8.69 7 9.93 1.74-.53 3.28-1.62 4.47-3.04l-1.72-1.72c-1.94 1.29-4.58 1.07-6.29-.64-1.95-1.95-1.95-5.12 0-7.07s5.12-1.95 7.07 0c1.71 1.71 1.92 4.35.64 6.29l1.45 1.45C18.49 14.65 19 12.85 19 11V6.3l-7-3.11z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 1 3 5v6c0 5.55 3.84 10.74 9 12 .65-.16 1.27-.38 1.87-.65 1.8-.82 3.36-2.13 4.57-3.74C20.04 16.46 21 13.77 21 11V5zm7 10c0 1.85-.51 3.65-1.38 5.21l-1.45-1.45c1.29-1.94 1.07-4.58-.64-6.29-1.95-1.95-5.12-1.95-7.07 0s-1.95 5.12 0 7.07c1.71 1.71 4.35 1.92 6.29.64l1.72 1.72c-1.19 1.42-2.73 2.51-4.47 3.04-4.02-1.25-7-5.42-7-9.94V6.3l7-3.11 7 3.11zm-4 1c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3',
      },
      '1',
    ),
  ],
  'PolicyTwoTone',
);
export const PollIcon = (props?: KTRawAttr) => {
  const s = _PollIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PollIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z',
  }),
  'Poll',
);
export const PollOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PollOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PollOutlinedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z',
  }),
  'PollOutlined',
);
export const PollRoundedIcon = (props?: KTRawAttr) => {
  const s = _PollRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PollRoundedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M8 17c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5c0 .55-.45 1-1 1m4 0c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1m4 0c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1',
  }),
  'PollRounded',
);
export const PollSharpIcon = (props?: KTRawAttr) => {
  const s = _PollSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PollSharpIcon = svg(
  svg('path', { d: 'M3 3v18h18V3zm6 14H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z' }),
  'PollSharp',
);
export const PollTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PollTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PollTwoToneIcon = svg(
  [
    svg('path', { d: 'M5 19h14V5H5zm10-6h2v4h-2zm-4-6h2v10h-2zm-4 3h2v7H7z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z',
      },
      '1',
    ),
  ],
  'PollTwoTone',
);
export const PolylineIcon = (props?: KTRawAttr) => {
  const s = _PolylineIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PolylineIcon = svg(
  svg('path', { d: 'M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6z' }),
  'Polyline',
);
export const PolylineOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PolylineOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PolylineOutlinedIcon = svg(
  svg('path', {
    d: 'M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6zM12 4h2v2h-2zM7 14H5v-2h2zm12 6h-2v-2h2z',
  }),
  'PolylineOutlined',
);
export const PolylineRoundedIcon = (props?: KTRawAttr) => {
  const s = _PolylineRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PolylineRoundedIcon = svg(
  svg('path', {
    d: 'M10.04 6.85 7.3 10H4.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h3c.14 0 .27-.02.39-.05L15 19.5v1c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3c-.75 0-1.37.55-1.48 1.27L9 14.26V11.5c0-.12-.01-.24-.04-.36L11.7 8h2.8c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5v3c0 .12.01.24.04.35',
  }),
  'PolylineRounded',
);
export const PolylineSharpIcon = (props?: KTRawAttr) => {
  const s = _PolylineSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PolylineSharpIcon = svg(
  svg('path', { d: 'M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6z' }),
  'PolylineSharp',
);
export const PolylineTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PolylineTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PolylineTwoToneIcon = svg(
  [
    svg('path', { d: 'M12 4h2v2h-2zM7 14H5v-2h2zm12 6h-2v-2h2z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6zM12 4h2v2h-2zM7 14H5v-2h2zm12 6h-2v-2h2z',
      },
      '1',
    ),
  ],
  'PolylineTwoTone',
);
export const PoolIcon = (props?: KTRawAttr) => {
  const s = _PoolIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PoolIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64s-1.73-.37-2.18-.64c-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36s.78-.13 1.15-.36c.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36',
      },
      '0',
    ),
    svg('circle', { cx: '16.5', cy: '5.5', r: '2.5' }, '1'),
  ],
  'Pool',
);
export const PoolOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PoolOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PoolOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm10 8-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36s.78-.13 1.15-.36c.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5zm12 8.5h-.02zm-16.65-1c.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.06.63 2.16.64v-2c-.55 0-.78-.14-1.15-.36-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.6.36-1.15.36s-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36-.55 0-.78-.14-1.15-.36-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36v2c1.11 0 1.73-.37 2.2-.64.37-.23.6-.36 1.15-.36M18.67 18c-1.11 0-1.73.37-2.18.64-.37.23-.6.36-1.15.36s-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.19.64c-.37.23-.59.36-1.15.36s-.78-.13-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.19.64c-.37.23-.59.36-1.15.36v2c1.11 0 1.73-.37 2.19-.64.37-.23.6-.36 1.15-.36s.78.13 1.15.36c.45.27 1.07.64 2.18.64s1.73-.37 2.19-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.72-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64v-2c-.56 0-.78-.13-1.15-.36-.45-.27-1.07-.64-2.18-.64',
      },
      '0',
    ),
    svg('circle', { cx: '16.5', cy: '5.5', r: '2.5' }, '1'),
  ],
  'PoolOutlined',
);
export const PoolRoundedIcon = (props?: KTRawAttr) => {
  const s = _PoolRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PoolRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M6.11 5.56C7.3 5.7 8.14 6.14 9 7l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36s.78-.13 1.15-.36c.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C9.22 3.74 8.04 3.2 6.3 3.05 5.6 2.99 5 3.56 5 4.26v.09c0 .63.49 1.13 1.11 1.21m15.24 13.35c-.17-.06-.32-.15-.5-.27-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.6.36-1.15.36s-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.19.64c-.37.23-.59.36-1.15.36s-.78-.13-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.19.64c-.18.11-.33.2-.5.27-.38.13-.65.45-.65.85v.12c0 .67.66 1.13 1.3.91.37-.13.65-.3.89-.44.37-.22.6-.35 1.15-.35s.78.13 1.15.36c.45.27 1.07.64 2.18.64s1.73-.37 2.19-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.72-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.23.14.51.31.88.44.63.22 1.3-.24 1.3-.91v-.12c0-.41-.27-.73-.65-.86M3.11 16.35c.47-.13.81-.33 1.09-.49.37-.23.6-.36 1.15-.36s.78.14 1.15.36c.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.23.14.5.3.85.43.63.23 1.31-.24 1.31-.91v-.12c0-.4-.27-.72-.64-.86-.17-.06-.32-.15-.51-.26-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.6.36-1.15.36s-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36-.55 0-.78-.14-1.15-.36-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.18.11-.33.2-.5.27-.38.13-.65.45-.65.85v.23c0 .58.55 1.02 1.11.86',
      },
      '0',
    ),
    svg('circle', { cx: '16.5', cy: '5.5', r: '2.5' }, '1'),
  ],
  'PoolRounded',
);
export const PoolSharpIcon = (props?: KTRawAttr) => {
  const s = _PoolSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PoolSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm10 8-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36s.78-.13 1.15-.36c.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5 5 3v2.5L9 7zm12 8.5h-.02zm-16.65-1c.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.06.63 2.16.64v-2c-.55 0-.78-.14-1.15-.36-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.6.36-1.15.36s-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36-.55 0-.78-.14-1.15-.36-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36v2c1.11 0 1.73-.37 2.2-.64.37-.23.6-.36 1.15-.36M18.67 18c-1.11 0-1.73.37-2.18.64-.37.23-.6.36-1.15.36s-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.19.64c-.37.23-.59.36-1.15.36s-.78-.13-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.19.64c-.37.23-.59.36-1.15.36v2c1.11 0 1.73-.37 2.19-.64.37-.23.6-.36 1.15-.36s.78.13 1.15.36c.45.27 1.07.64 2.18.64s1.73-.37 2.19-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.72-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64v-2c-.56 0-.78-.13-1.15-.36-.45-.27-1.07-.64-2.18-.64',
      },
      '0',
    ),
    svg('circle', { cx: '16.5', cy: '5.5', r: '2.5' }, '1'),
  ],
  'PoolSharp',
);
export const PoolTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PoolTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PoolTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M22 21c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.46.27-1.08.64-2.19.64s-1.73-.37-2.18-.64c-.37-.23-.6-.36-1.15-.36s-.78.13-1.15.36c-.46.27-1.08.64-2.19.64v-2c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36s.78-.13 1.15-.36c.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.23.59.36 1.15.36zm0-4.5c-1.11 0-1.73-.37-2.18-.64-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36-.56 0-.78.13-1.15.36-.45.27-1.07.64-2.18.64s-1.73-.37-2.18-.64c-.37-.22-.6-.36-1.15-.36s-.78.13-1.15.36c-.47.27-1.09.64-2.2.64v-2c.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.56 0 .78-.13 1.15-.36.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.45-.27 1.07-.64 2.18-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36v2zM8.67 12c.56 0 .78-.13 1.15-.36.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36',
        opacity: '.3',
      },
      '0',
    ),
    svg('circle', { cx: '16.5', cy: '5.5', r: '2.5', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M22 16.5h-.02zM10 8l-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36s.78-.13 1.15-.36c.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36s.78-.13 1.15-.36c.12-.07.26-.15.41-.23L10.48 5C8.93 3.45 7.5 2.99 5 3v2.5c1.82-.01 2.89.39 4 1.5zm-4.65 7.5c.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.06.63 2.16.64v-2c-.55 0-.78-.14-1.15-.36-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.6.36-1.15.36s-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36-.55 0-.78-.14-1.15-.36-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36v2c1.11 0 1.73-.37 2.2-.64.37-.23.6-.36 1.15-.36M18.67 18c-1.11 0-1.73.37-2.18.64-.37.23-.6.36-1.15.36s-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.19.64c-.37.23-.59.36-1.15.36s-.78-.13-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.19.64c-.37.23-.59.36-1.15.36v2c1.11 0 1.73-.37 2.19-.64.37-.23.6-.36 1.15-.36s.78.13 1.15.36c.45.27 1.07.64 2.18.64s1.73-.37 2.19-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.72-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64v-2c-.56 0-.78-.13-1.15-.36-.45-.27-1.07-.64-2.18-.64',
      },
      '2',
    ),
    svg('circle', { cx: '16.5', cy: '5.5', r: '2.5' }, '3'),
  ],
  'PoolTwoTone',
);
export const PortableWifiOffIcon = (props?: KTRawAttr) => {
  const s = _PortableWifiOffIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PortableWifiOffIcon = svg(
  svg('path', {
    d: 'M17.56 14.24c.28-.69.44-1.45.44-2.24 0-3.31-2.69-6-6-6-.79 0-1.55.16-2.24.44l1.62 1.62c.2-.03.41-.06.62-.06 2.21 0 4 1.79 4 4 0 .21-.02.42-.05.63zM12 4c4.42 0 8 3.58 8 8 0 1.35-.35 2.62-.95 3.74l1.47 1.47C21.46 15.69 22 13.91 22 12c0-5.52-4.48-10-10-10-1.91 0-3.69.55-5.21 1.47l1.46 1.46C9.37 4.34 10.65 4 12 4M3.27 2.5 2 3.77l2.1 2.1C2.79 7.57 2 9.69 2 12c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 17.53 4 14.96 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44C6.36 9.68 6 10.8 6 12c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02.01.01 7.51 7.51L21 20.23 4.27 3.5z',
  }),
  'PortableWifiOff',
);
export const PortableWifiOffOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PortableWifiOffOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PortableWifiOffOutlinedIcon = svg(
  svg('path', {
    d: 'M3.42 2.36 2.01 3.78 4.1 5.87C2.79 7.57 2 9.69 2 12c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 17.53 4 14.96 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44C6.36 9.68 6 10.8 6 12c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02 7.52 7.52 1.41-1.41zm14.29 11.46c.18-.57.29-1.19.29-1.82 0-3.31-2.69-6-6-6-.63 0-1.25.11-1.82.29l1.72 1.72c.03 0 .06-.01.1-.01 2.21 0 4 1.79 4 4 0 .04-.01.07-.01.11zM12 4c4.42 0 8 3.58 8 8 0 1.2-.29 2.32-.77 3.35l1.49 1.49C21.53 15.4 22 13.76 22 12c0-5.52-4.48-10-10-10-1.76 0-3.4.48-4.84 1.28l1.48 1.48C9.66 4.28 10.8 4 12 4',
  }),
  'PortableWifiOffOutlined',
);
export const PortableWifiOffRoundedIcon = (props?: KTRawAttr) => {
  const s = _PortableWifiOffRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PortableWifiOffRoundedIcon = svg(
  svg('path', {
    d: 'M2.71 3.07c-.39.39-.39 1.02 0 1.41L4.1 5.87C2.79 7.57 2 9.69 2 12c0 3.3 1.6 6.22 4.06 8.04.48.35 1.16.21 1.46-.31.25-.43.14-.99-.26-1.29C5.29 16.98 4 14.65 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44C6.36 9.68 6 10.8 6 12c0 1.8.8 3.41 2.06 4.51.46.4 1.19.25 1.5-.28l.01-.01c.24-.42.13-.94-.23-1.26C8.52 14.23 8 13.18 8 12c0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02 6.81 6.81c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L4.13 3.07c-.39-.39-1.03-.39-1.42 0m15 10.75c.18-.57.29-1.19.29-1.82 0-3.31-2.69-6-6-6-.63 0-1.25.11-1.82.29l1.72 1.72c.03 0 .06-.01.1-.01 2.21 0 4 1.79 4 4 0 .04-.01.07-.01.11zM12 4c4.42 0 8 3.58 8 8 0 1.2-.29 2.32-.77 3.35l1.49 1.49C21.53 15.4 22 13.76 22 12c0-5.52-4.48-10-10-10-1.76 0-3.4.48-4.84 1.28l1.48 1.48C9.66 4.28 10.8 4 12 4',
  }),
  'PortableWifiOffRounded',
);
export const PortableWifiOffSharpIcon = (props?: KTRawAttr) => {
  const s = _PortableWifiOffSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PortableWifiOffSharpIcon = svg(
  svg('path', {
    d: 'M3.42 2.36 2.01 3.78 4.1 5.87C2.79 7.57 2 9.69 2 12c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 17.53 4 14.96 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44C6.36 9.68 6 10.8 6 12c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02 7.52 7.52 1.41-1.41zm14.29 11.46c.18-.57.29-1.19.29-1.82 0-3.31-2.69-6-6-6-.63 0-1.25.11-1.82.29l1.72 1.72c.03 0 .06-.01.1-.01 2.21 0 4 1.79 4 4 0 .04-.01.07-.01.11zM12 4c4.42 0 8 3.58 8 8 0 1.2-.29 2.32-.77 3.35l1.49 1.49C21.53 15.4 22 13.76 22 12c0-5.52-4.48-10-10-10-1.76 0-3.4.48-4.84 1.28l1.48 1.48C9.66 4.28 10.8 4 12 4',
  }),
  'PortableWifiOffSharp',
);
export const PortableWifiOffTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PortableWifiOffTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PortableWifiOffTwoToneIcon = svg(
  svg('path', {
    d: 'M3.42 2.36 2.01 3.78 4.1 5.87C2.79 7.57 2 9.69 2 12c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 17.53 4 14.96 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44C6.36 9.68 6 10.8 6 12c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02 7.52 7.52 1.41-1.41zm14.29 11.46c.18-.57.29-1.19.29-1.82 0-3.31-2.69-6-6-6-.63 0-1.25.11-1.82.29l1.72 1.72c.03 0 .06-.01.1-.01 2.21 0 4 1.79 4 4 0 .04-.01.07-.01.11zM12 4c4.42 0 8 3.58 8 8 0 1.2-.29 2.32-.77 3.35l1.49 1.49C21.53 15.4 22 13.76 22 12c0-5.52-4.48-10-10-10-1.76 0-3.4.48-4.84 1.28l1.48 1.48C9.66 4.28 10.8 4 12 4',
  }),
  'PortableWifiOffTwoTone',
);
export const PortraitIcon = (props?: KTRawAttr) => {
  const s = _PortraitIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PortraitIcon = svg(
  svg('path', {
    d: 'M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25m4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z',
  }),
  'Portrait',
);
export const PortraitOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PortraitOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PortraitOutlinedIcon = svg(
  svg('path', {
    d: 'M12 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m6 8.58c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12zM8.48 16c.74-.51 2.23-1 3.52-1s2.78.49 3.52 1zM19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z',
  }),
  'PortraitOutlined',
);
export const PortraitRoundedIcon = (props?: KTRawAttr) => {
  const s = _PortraitRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PortraitRoundedIcon = svg(
  svg('path', {
    d: 'M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25m4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1',
  }),
  'PortraitRounded',
);
export const PortraitSharpIcon = (props?: KTRawAttr) => {
  const s = _PortraitSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PortraitSharpIcon = svg(
  svg('path', {
    d: 'M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25m4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9zM21 3H3v18h18zm-2 16H5V5h14z',
  }),
  'PortraitSharp',
);
export const PortraitTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PortraitTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PortraitTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 19h14V5H5zm7-13c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M6 16.58C6 14.08 9.97 13 12 13s6 1.08 6 3.58V18H6z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m6 8.58c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12zM8.48 16c.74-.51 2.23-1 3.52-1s2.78.49 3.52 1zM19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z',
      },
      '1',
    ),
  ],
  'PortraitTwoTone',
);
export const PostAddIcon = (props?: KTRawAttr) => {
  const s = _PostAddIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PostAddIcon = svg(
  [
    svg('path', { d: 'M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2z' }, '0'),
    svg(
      'path',
      { d: 'M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3zM7 9h8v2H7zm0 3v2h8v-2h-3zm0 3h8v2H7z' },
      '1',
    ),
  ],
  'PostAdd',
);
export const PostAddOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PostAddOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PostAddOutlinedIcon = svg(
  [
    svg('path', { d: 'M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2z' }, '0'),
    svg(
      'path',
      { d: 'M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3zM7 9h8v2H7zm0 3v2h8v-2h-3zm0 3h8v2H7z' },
      '1',
    ),
  ],
  'PostAddOutlined',
);
export const PostAddRoundedIcon = (props?: KTRawAttr) => {
  const s = _PostAddRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PostAddRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M18 12c-.55 0-1 .45-1 1v5.22c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1m3.02-7H19V2.98c0-.54-.44-.98-.98-.98h-.03c-.55 0-.99.44-.99.98V5h-2.01c-.54 0-.98.44-.99.98v.03c0 .55.44.99.99.99H17v2.01c0 .54.44.99.99.98h.03c.54 0 .98-.44.98-.98V7h2.02c.54 0 .98-.44.98-.98v-.04c0-.54-.44-.98-.98-.98',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M14 9H8c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1m0 3H8c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1m0 3H8c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1',
      },
      '1',
    ),
  ],
  'PostAddRounded',
);
export const PostAddSharpIcon = (props?: KTRawAttr) => {
  const s = _PostAddSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PostAddSharpIcon = svg(
  [
    svg('path', { d: 'M17 19.22H5V7h7V5H3v16h16v-9h-2z' }, '0'),
    svg(
      'path',
      { d: 'M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3zM7 9h8v2H7zm0 3v2h8v-2h-3zm0 3h8v2H7z' },
      '1',
    ),
  ],
  'PostAddSharp',
);
export const PostAddTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PostAddTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PostAddTwoToneIcon = svg(
  [
    svg('path', { d: 'M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2z' }, '0'),
    svg(
      'path',
      { d: 'M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3zM7 9h8v2H7zm0 3v2h8v-2h-3zm0 3h8v2H7z' },
      '1',
    ),
  ],
  'PostAddTwoTone',
);
export const PowerIcon = (props?: KTRawAttr) => {
  const s = _PowerIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerIcon = svg(
  svg('path', {
    d: 'M16.01 7 16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99',
  }),
  'Power',
);
export const PowerInputIcon = (props?: KTRawAttr) => {
  const s = _PowerInputIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerInputIcon = svg(
  svg('path', { d: 'M2 9v2h19V9zm0 6h5v-2H2zm7 0h5v-2H9zm7 0h5v-2h-5z' }),
  'PowerInput',
);
export const PowerInputOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PowerInputOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerInputOutlinedIcon = svg(
  svg('path', { d: 'M2 9v2h19V9zm0 6h5v-2H2zm7 0h5v-2H9zm7 0h5v-2h-5z' }),
  'PowerInputOutlined',
);
export const PowerInputRoundedIcon = (props?: KTRawAttr) => {
  const s = _PowerInputRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerInputRoundedIcon = svg(
  svg('path', {
    d: 'M2 10c0 .55.45 1 1 1h17c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1m1 5h3c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1m7 0h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1m7 0h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1',
  }),
  'PowerInputRounded',
);
export const PowerInputSharpIcon = (props?: KTRawAttr) => {
  const s = _PowerInputSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerInputSharpIcon = svg(
  svg('path', { d: 'M2 9v2h19V9zm0 6h5v-2H2zm7 0h5v-2H9zm7 0h5v-2h-5z' }),
  'PowerInputSharp',
);
export const PowerInputTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PowerInputTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerInputTwoToneIcon = svg(
  svg('path', { d: 'M2 9v2h19V9zm0 6h5v-2H2zm7 0h5v-2H9zm7 0h5v-2h-5z' }),
  'PowerInputTwoTone',
);
export const PowerOffIcon = (props?: KTRawAttr) => {
  const s = _PowerOffIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerOffIcon = svg(
  svg('path', {
    d: 'M18 14.49V9c0-1-1.01-2.01-2-2V3h-2v4h-4V3H8v2.48l9.51 9.5zm-1.76 1.77L7.2 7.2l-.01.01L3.98 4 2.71 5.25l3.36 3.36C6.04 8.74 6 8.87 6 9v5.48L9.5 18v3h5v-3l.48-.48L19.45 22l1.26-1.28z',
  }),
  'PowerOff',
);
export const PowerOffOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PowerOffOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerOffOutlinedIcon = svg(
  svg('path', {
    d: 'M10 3H8v1.88l2 2zm6 6v3.88l1.8 1.8.2-.2V9c0-1.1-.9-2-2-2V3h-2v4h-3.88l2 2zM4.12 3.84 2.71 5.25 6 8.54v5.96L9.5 18v3h5v-3l.48-.48 4.47 4.47 1.41-1.41zm8.38 13.33V19h-1v-1.83L8 13.65v-3.11l5.57 5.57z',
  }),
  'PowerOffOutlined',
);
export const PowerOffRoundedIcon = (props?: KTRawAttr) => {
  const s = _PowerOffRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerOffRoundedIcon = svg(
  svg('path', {
    d: 'M18 13.66V8.99c0-1-1.01-2-2-1.99V4c0-.55-.45-1-1-1s-1 .45-1 1v3h-3.88l7.63 7.63c.15-.3.25-.63.25-.97M10 4c0-.55-.45-1-1-1s-1 .45-1 1v.88l2 2zm10.15 15.86-7.66-7.66-5.1-5.1-2.56-2.56a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.63 2.63c-.03.13-.05.27-.05.41v4.66c0 .53.21 1.04.58 1.41L9.5 18v2c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-2l.48-.48 3.76 3.76c.39.39 1.02.39 1.41 0s.39-1.03 0-1.42',
  }),
  'PowerOffRounded',
);
export const PowerOffSharpIcon = (props?: KTRawAttr) => {
  const s = _PowerOffSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerOffSharpIcon = svg(
  svg('path', {
    d: 'M18 14.49V9c0-1.1-.9-2-2-2V3h-2v4h-3.88l7.69 7.69zM10 3H8v1.88l2 2zm-5.88.84L2.71 5.25l3.34 3.34c-.03.13-.05.27-.05.4v5.51L9.5 18v3h5v-3l.48-.48 4.47 4.47 1.41-1.41z',
  }),
  'PowerOffSharp',
);
export const PowerOffTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PowerOffTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerOffTwoToneIcon = svg(
  [
    svg('path', { d: 'M12.12 9 16 12.88V9zm-.62 8.17V19h1v-1.83l1.07-1.06L8 10.54v3.11z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M10 3H8v1.88l2 2zm6 6v3.88l1.8 1.8.2-.2V9c0-1.1-.9-2-2-2V3h-2v4h-3.88l2 2zM4.12 3.84 2.71 5.25 6 8.54v5.96L9.5 18v3h5v-3l.48-.48 4.47 4.47 1.41-1.41zm8.38 13.33V19h-1v-1.83L8 13.65v-3.11l5.57 5.57z',
      },
      '1',
    ),
  ],
  'PowerOffTwoTone',
);
export const PowerOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PowerOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerOutlinedIcon = svg(
  svg('path', {
    d: 'M16 9v4.66l-3.5 3.51V19h-1v-1.83L8 13.65V9zm0-6h-2v4h-4V3H8v4h-.01C6.9 6.99 6 7.89 6 8.98v5.52L9.5 18v3h5v-3l3.5-3.51V9c0-1.1-.9-2-2-2z',
  }),
  'PowerOutlined',
);
export const PowerRoundedIcon = (props?: KTRawAttr) => {
  const s = _PowerRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerRoundedIcon = svg(
  svg('path', {
    d: 'M16.01 7 16 4c0-.55-.45-1-1-1s-1 .45-1 1v3h-4V4c0-.55-.45-1-1-1s-1 .45-1 1v3h-.01C6.9 7 6 7.9 6 8.99v4.66c0 .53.21 1.04.58 1.41L9.5 18v2c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-2l2.92-2.92c.37-.38.58-.89.58-1.42V8.99C18 7.89 17.11 7 16.01 7',
  }),
  'PowerRounded',
);
export const PowerSettingsNewIcon = (props?: KTRawAttr) => {
  const s = _PowerSettingsNewIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerSettingsNewIcon = svg(
  svg('path', {
    d: 'M13 3h-2v10h2zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83',
  }),
  'PowerSettingsNew',
);
export const PowerSettingsNewOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PowerSettingsNewOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerSettingsNewOutlinedIcon = svg(
  svg('path', {
    d: 'M13 3h-2v10h2zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83',
  }),
  'PowerSettingsNewOutlined',
);
export const PowerSettingsNewRoundedIcon = (props?: KTRawAttr) => {
  const s = _PowerSettingsNewRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerSettingsNewRoundedIcon = svg(
  svg('path', {
    d: 'M12 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1m5.14 2.86c-.39.39-.38 1-.01 1.39 1.13 1.2 1.83 2.8 1.87 4.57.09 3.83-3.08 7.13-6.91 7.17C8.18 19.05 5 15.9 5 12c0-1.84.71-3.51 1.87-4.76.37-.39.37-1-.01-1.38-.4-.4-1.05-.39-1.43.02C3.98 7.42 3.07 9.47 3 11.74c-.14 4.88 3.83 9.1 8.71 9.25 5.1.16 9.29-3.93 9.29-9 0-2.37-.92-4.51-2.42-6.11-.38-.41-1.04-.42-1.44-.02',
  }),
  'PowerSettingsNewRounded',
);
export const PowerSettingsNewSharpIcon = (props?: KTRawAttr) => {
  const s = _PowerSettingsNewSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerSettingsNewSharpIcon = svg(
  svg('path', {
    d: 'M13 3h-2v10h2zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83',
  }),
  'PowerSettingsNewSharp',
);
export const PowerSettingsNewTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PowerSettingsNewTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerSettingsNewTwoToneIcon = svg(
  svg('path', {
    d: 'M13 3h-2v10h2zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83',
  }),
  'PowerSettingsNewTwoTone',
);
export const PowerSharpIcon = (props?: KTRawAttr) => {
  const s = _PowerSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerSharpIcon = svg(
  svg('path', { d: 'M16 7V3h-2v4h-4V3H8v4H6v7.5L9.5 18v3h5v-3l3.5-3.51V7z' }),
  'PowerSharp',
);
export const PowerTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PowerTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PowerTwoToneIcon = svg(
  [
    svg('path', { d: 'm8 13.65 3.5 3.52V19h1v-1.83l3.5-3.51V9H8z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M16 7V3h-2v4h-4V3H8v4h-.01C6.89 7 6 7.89 6 8.98v5.52L9.5 18v3h5v-3l3.5-3.5V9c0-1.1-.9-2-2-2m0 6.66-3.5 3.51V19h-1v-1.83L8 13.65V9h8z',
      },
      '1',
    ),
  ],
  'PowerTwoTone',
);
export const PrecisionManufacturingIcon = (props?: KTRawAttr) => {
  const s = _PrecisionManufacturingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrecisionManufacturingIcon = svg(
  svg('path', {
    d: 'm19.93 8.21-3.6 1.68L14 7.7V6.3l2.33-2.19 3.6 1.68c.38.18.82.01 1-.36.18-.38.01-.82-.36-1L16.65 2.6c-.38-.18-.83-.1-1.13.2l-1.74 1.6c-.18-.24-.46-.4-.78-.4-.55 0-1 .45-1 1v1H8.82C8.34 4.65 6.98 3.73 5.4 4.07c-1.16.25-2.15 1.25-2.36 2.43-.22 1.32.46 2.47 1.48 3.08L7.08 18H4v3h13v-3h-3.62L8.41 8.77c.17-.24.31-.49.41-.77H12v1c0 .55.45 1 1 1 .32 0 .6-.16.78-.4l1.74 1.6c.3.3.75.38 1.13.2l3.92-1.83c.38-.18.54-.62.36-1-.18-.37-.62-.54-1-.36M6 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'PrecisionManufacturing',
);
export const PrecisionManufacturingOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PrecisionManufacturingOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrecisionManufacturingOutlinedIcon = svg(
  svg('path', {
    d: 'm19.93 8.35-3.6 1.68L14 7.7V6.3l2.33-2.33 3.6 1.68c.38.18.82.01 1-.36.18-.38.01-.82-.36-1l-3.92-1.83c-.38-.18-.83-.1-1.13.2L13.78 4.4c-.18-.24-.46-.4-.78-.4-.55 0-1 .45-1 1v1H8.82C8.4 4.84 7.3 4 6 4 4.34 4 3 5.34 3 7c0 1.1.6 2.05 1.48 2.58L7.08 18H6c-1.1 0-2 .9-2 2v1h13v-1c0-1.1-.9-2-2-2h-1.62L8.41 8.77c.17-.24.31-.49.41-.77H12v1c0 .55.45 1 1 1 .32 0 .6-.16.78-.4l1.74 1.74c.3.3.75.38 1.13.2l3.92-1.83c.38-.18.54-.62.36-1-.18-.37-.62-.54-1-.36M6 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m5.11 10H9.17l-2.46-8h.1z',
  }),
  'PrecisionManufacturingOutlined',
);
export const PrecisionManufacturingRoundedIcon = (props?: KTRawAttr) => {
  const s = _PrecisionManufacturingRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrecisionManufacturingRoundedIcon = svg(
  svg('path', {
    d: 'm19.93 8.35-3.6 1.68L14 7.7V6.3l2.33-2.33 3.6 1.68c.38.18.82.01 1-.36.18-.38.01-.82-.36-1l-3.92-1.83c-.38-.18-.83-.1-1.13.2L13.78 4.4c-.18-.24-.46-.4-.78-.4-.55 0-1 .45-1 1v1H8.82C8.34 4.66 6.96 3.75 5.4 4.06c-1.17.23-2.13 1.19-2.35 2.36-.25 1.34.4 2.54 1.43 3.16L7.08 18H5.5c-.83 0-1.5.67-1.5 1.5S4.67 21 5.5 21h10c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-2.12L8.41 8.77c.17-.24.31-.49.41-.77H12v1c0 .55.45 1 1 1 .32 0 .6-.16.78-.4l1.74 1.74c.3.3.75.38 1.13.2l3.92-1.83c.38-.18.54-.62.36-1-.18-.37-.62-.54-1-.36M6 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'PrecisionManufacturingRounded',
);
export const PrecisionManufacturingSharpIcon = (props?: KTRawAttr) => {
  const s = _PrecisionManufacturingSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrecisionManufacturingSharpIcon = svg(
  svg('path', {
    d: 'M14 10v-.18l2.01 2.01 5.23-2.44-.63-1.36-4.28 2L14 7.7V6.3l2.33-2.33 4.28 2 .63-1.36-5.23-2.44L14 4.18V4h-2v2H8.82C8.4 4.84 7.3 4 6 4 4.34 4 3 5.34 3 7c0 1.1.6 2.05 1.48 2.58L7.08 18H4v3h13v-3h-3.62L8.41 8.76c.17-.23.31-.48.41-.76H12v2zM6 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'PrecisionManufacturingSharp',
);
export const PrecisionManufacturingTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PrecisionManufacturingTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrecisionManufacturingTwoToneIcon = svg(
  [
    svg('path', { d: 'm6.71 10 2.46 8h1.94l-4.3-8z', opacity: '.3' }, '0'),
    svg('circle', { cx: '6', cy: '7', r: '1', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'm19.93 8.35-3.6 1.68L14 7.7V6.3l2.33-2.33 3.6 1.68c.38.18.82.01 1-.36.18-.38.01-.82-.36-1l-3.92-1.83c-.38-.18-.83-.1-1.13.2L13.78 4.4c-.18-.24-.46-.4-.78-.4-.55 0-1 .45-1 1v1H8.82C8.4 4.84 7.3 4 6 4 4.34 4 3 5.34 3 7c0 1.1.6 2.05 1.48 2.58L7.08 18H6c-1.1 0-2 .9-2 2v1h13v-1c0-1.1-.9-2-2-2h-1.62L8.41 8.77c.17-.24.31-.49.41-.77H12v1c0 .55.45 1 1 1 .32 0 .6-.16.78-.4l1.74 1.74c.3.3.75.38 1.13.2l3.92-1.83c.38-.18.54-.62.36-1-.18-.37-.62-.54-1-.36M6 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m5.11 10H9.17l-2.46-8h.1z',
      },
      '2',
    ),
  ],
  'PrecisionManufacturingTwoTone',
);
export const PregnantWomanIcon = (props?: KTRawAttr) => {
  const s = _PregnantWomanIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PregnantWomanIcon = svg(
  svg('path', {
    d: 'M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2m7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3z',
  }),
  'PregnantWoman',
);
export const PregnantWomanOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PregnantWomanOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PregnantWomanOutlinedIcon = svg(
  svg('path', {
    d: 'M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2m7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3z',
  }),
  'PregnantWomanOutlined',
);
export const PregnantWomanRoundedIcon = (props?: KTRawAttr) => {
  const s = _PregnantWomanRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PregnantWomanRoundedIcon = svg(
  svg('path', {
    d: 'M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2m7 9c-.01-1.34-.83-2.51-2-3 0-1.71-1.42-3.08-3.16-3C9.22 7.09 8 8.54 8 10.16V16c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V17h2c.55 0 1-.45 1-1z',
  }),
  'PregnantWomanRounded',
);
export const PregnantWomanSharpIcon = (props?: KTRawAttr) => {
  const s = _PregnantWomanSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PregnantWomanSharpIcon = svg(
  svg('path', {
    d: 'M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2m7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3z',
  }),
  'PregnantWomanSharp',
);
export const PregnantWomanTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PregnantWomanTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PregnantWomanTwoToneIcon = svg(
  svg('path', {
    d: 'M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2m7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3z',
  }),
  'PregnantWomanTwoTone',
);
export const PresentToAllIcon = (props?: KTRawAttr) => {
  const s = _PresentToAllIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PresentToAllIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m0 16.02H3V4.98h18zM10 12H8l4-4 4 4h-2v4h-4z',
  }),
  'PresentToAll',
);
export const PresentToAllOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PresentToAllOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PresentToAllOutlinedIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m0 16.02H3V4.98h18zM10 12H8l4-4 4 4h-2v4h-4z',
  }),
  'PresentToAllOutlined',
);
export const PresentToAllRoundedIcon = (props?: KTRawAttr) => {
  const s = _PresentToAllRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PresentToAllRoundedIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m-1 16.02H4c-.55 0-1-.45-1-1V5.98c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.04c0 .55-.45 1-1 1M10 12H8l3.65-3.65c.2-.2.51-.2.71 0L16 12h-2v4h-4z',
  }),
  'PresentToAllRounded',
);
export const PresentToAllSharpIcon = (props?: KTRawAttr) => {
  const s = _PresentToAllSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PresentToAllSharpIcon = svg(
  svg('path', { d: 'M23 3H1v18h22zm-2 16.02H3V4.98h18zM10 12H8l4-4 4 4h-2v4h-4z' }),
  'PresentToAllSharp',
);
export const PresentToAllTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PresentToAllTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PresentToAllTwoToneIcon = svg(
  [
    svg('path', { d: 'M3 19.02h18V4.98H3zM12 8l4 4h-2v4h-4v-4H8z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M10 16h4v-4h2l-4-4-4 4h2zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m0 16.02H3V4.98h18z',
      },
      '1',
    ),
  ],
  'PresentToAllTwoTone',
);
export const PreviewIcon = (props?: KTRawAttr) => {
  const s = _PreviewIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PreviewIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2m0 16H5V7h14zm-5.5-6c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5',
  }),
  'Preview',
);
export const PreviewOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PreviewOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PreviewOutlinedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2m0 16H5V7h14zm-7-8.5c1.84 0 3.48.96 4.34 2.5-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'PreviewOutlined',
);
export const PreviewRoundedIcon = (props?: KTRawAttr) => {
  const s = _PreviewRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PreviewRoundedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2m0 16H5V7h14zm-5.5-6c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5',
  }),
  'PreviewRounded',
);
export const PreviewSharpIcon = (props?: KTRawAttr) => {
  const s = _PreviewSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PreviewSharpIcon = svg(
  svg('path', {
    d: 'M3 3v18h18V3zm16 16H5V7h14zm-5.5-6c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5',
  }),
  'PreviewSharp',
);
export const PreviewTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PreviewTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PreviewTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19 19H5V7h14zm-7-8.5c1.84 0 3.48.96 4.34 2.5-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2m0 16H5V7h14zm-7-8.5c1.84 0 3.48.96 4.34 2.5-.86 1.54-2.5 2.5-4.34 2.5s-3.48-.96-4.34-2.5c.86-1.54 2.5-2.5 4.34-2.5M12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
      },
      '1',
    ),
  ],
  'PreviewTwoTone',
);
export const PriceChangeIcon = (props?: KTRawAttr) => {
  const s = _PriceChangeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PriceChangeIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m-8 6H8v1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1v1H8v-1H6v-2h4v-1H7c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h1V7h2v1h2zm4 6.25-2-2h4zM14 10l2-2 2 2z',
  }),
  'PriceChange',
);
export const PriceChangeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PriceChangeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PriceChangeOutlinedIcon = svg(
  svg('path', {
    d: 'M8 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H8v-1h4V8h-2V7H8v1H7c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H6v2h2zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4V6h16zm-6-8 2-2 2 2m0 4.25-2 2-2-2',
  }),
  'PriceChangeOutlined',
);
export const PriceChangeRoundedIcon = (props?: KTRawAttr) => {
  const s = _PriceChangeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PriceChangeRoundedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m-9 6H8v1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1c0 .55-.45 1-1 1s-1-.45-1-1H7c-.55 0-1-.45-1-1s.45-1 1-1h3v-1H7c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h1c0-.55.45-1 1-1s1 .45 1 1h1c.55 0 1 .45 1 1s-.45 1-1 1m4.65 5.9L14 14.25h4l-1.65 1.65c-.19.19-.51.19-.7 0M14 10l1.65-1.65c.2-.2.51-.2.71 0L18 10z',
  }),
  'PriceChangeRounded',
);
export const PriceChangeSharpIcon = (props?: KTRawAttr) => {
  const s = _PriceChangeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PriceChangeSharpIcon = svg(
  svg('path', { d: 'M2 4v16h20V4zm10 6H8v1h4v5h-2v1H8v-1H6v-2h4v-1H6V8h2V7h2v1h2zm4 6.25-2-2h4zM14 10l2-2 2 2z' }),
  'PriceChangeSharp',
);
export const PriceChangeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PriceChangeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PriceChangeTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M4 18h16V6H4zM16 8l2 2h-4zm2 6.25-2 2-2-2zM6 14h4v-1H7c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h1V7h2v1h2v2H8v1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1v1H8v-1H6z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      { d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4V6h16z' },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M8 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H8v-1h4V8h-2V7H8v1H7c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H6v2h2zm8-9-2 2h4zm2 6.25h-4l2 2z',
      },
      '2',
    ),
  ],
  'PriceChangeTwoTone',
);
export const PriceCheckIcon = (props?: KTRawAttr) => {
  const s = _PriceCheckIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PriceCheckIcon = svg(
  svg('path', {
    d: 'M12 13V9c0-.55-.45-1-1-1H7V6h5V4H9.5V3h-2v1H6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4v2H5v2h2.5v1h2v-1H11c.55 0 1-.45 1-1m7.59-.48-5.66 5.65-2.83-2.83-1.41 1.42L13.93 21 21 13.93z',
  }),
  'PriceCheck',
);
export const PriceCheckOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PriceCheckOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PriceCheckOutlinedIcon = svg(
  svg('path', {
    d: 'M11 13V9c0-.55-.45-1-1-1H6V6h5V4H8.5V3h-2v1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4v2H4v2h2.5v1h2v-1H10c.55 0 1-.45 1-1m8.59-.48-5.66 5.65-2.83-2.83-1.41 1.42L13.93 21 21 13.93z',
  }),
  'PriceCheckOutlined',
);
export const PriceCheckRoundedIcon = (props?: KTRawAttr) => {
  const s = _PriceCheckRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PriceCheckRoundedIcon = svg(
  svg('path', {
    d: 'M11 13V9c0-.55-.45-1-1-1H6V6h4c.55 0 1-.45 1-1s-.45-1-1-1H8.5c0-.55-.45-1-1-1s-1 .45-1 1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4v2H5c-.55 0-1 .45-1 1s.45 1 1 1h1.5c0 .55.45 1 1 1s1-.45 1-1H10c.55 0 1-.45 1-1m7.88.22-4.95 4.95-2.12-2.12a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l5.66-5.66c.39-.39.39-1.02 0-1.41-.4-.39-1.03-.39-1.42 0',
  }),
  'PriceCheckRounded',
);
export const PriceCheckSharpIcon = (props?: KTRawAttr) => {
  const s = _PriceCheckSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PriceCheckSharpIcon = svg(
  svg('path', {
    d: 'M11 8H6V6h5V4H8.5V3h-2v1H4v6h5v2H4v2h2.5v1h2v-1H11zm8.59 4.52-5.66 5.65-2.83-2.83-1.41 1.42L13.93 21 21 13.93z',
  }),
  'PriceCheckSharp',
);
export const PriceCheckTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PriceCheckTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PriceCheckTwoToneIcon = svg(
  svg('path', {
    d: 'M11 13V9c0-.55-.45-1-1-1H6V6h5V4H8.5V3h-2v1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4v2H4v2h2.5v1h2v-1H10c.55 0 1-.45 1-1m8.59-.48-5.66 5.65-2.83-2.83-1.41 1.42L13.93 21 21 13.93z',
  }),
  'PriceCheckTwoTone',
);
export const PrintIcon = (props?: KTRawAttr) => {
  const s = _PrintIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrintIcon = svg(
  svg('path', {
    d: 'M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3m-3 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-1-9H6v4h12z',
  }),
  'Print',
);
export const PrintDisabledIcon = (props?: KTRawAttr) => {
  const s = _PrintDisabledIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrintDisabledIcon = svg(
  svg('path', {
    d: 'M19.1 17H22v-6c0-1.7-1.3-3-3-3h-9zm-.1-7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-1-3V3H6v1.1L9 7zM1.2 1.8 0 3l4.9 5C3.3 8.1 2 9.4 2 11v6h4v4h11.9l3 3 1.3-1.3zM8 19v-5h2.9l5 5z',
  }),
  'PrintDisabled',
);
export const PrintDisabledOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PrintDisabledOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrintDisabledOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M1.41 1.6 0 3.01 5 8c-1.66 0-3 1.34-3 3v6h4v4h12l2.95 2.96 1.41-1.41zM6 15H4v-4c0-.55.45-1 1-1h2l3 3H6zm2 4v-4h4l4 4zM8 5h8v3h-5.34l2 2H19c.55 0 1 .45 1 1v4l-2 .01V13h-2.34l4 4H22v-6c0-1.66-1.34-3-3-3h-1V3H6v.36l2 2z',
      },
      '0',
    ),
    svg('circle', { cx: '18', cy: '11.51', r: '1' }, '1'),
  ],
  'PrintDisabledOutlined',
);
export const PrintDisabledRoundedIcon = (props?: KTRawAttr) => {
  const s = _PrintDisabledRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrintDisabledRoundedIcon = svg(
  svg('path', {
    d: 'M2.12 2.32a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L4.98 8C3.33 8.01 2 9.35 2 11v4c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h8c.55 0 1.04-.22 1.4-.58l2.83 2.83c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41zM15 19H9c-.55 0-1-.45-1-1v-4h2.98l4.72 4.72c-.19.17-.43.28-.7.28m4-11h-8.37l9 9H20c1.1 0 2-.9 2-2v-4c0-1.66-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-2-5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H7c-.37 0-.68.21-.85.51L9.63 7z',
  }),
  'PrintDisabledRounded',
);
export const PrintDisabledSharpIcon = (props?: KTRawAttr) => {
  const s = _PrintDisabledSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrintDisabledSharpIcon = svg(
  svg('path', {
    d: 'M9.65 7H18V3.01H6v.35zm1.01 1.01 9 8.99H22v-5.99c0-1.66-1.34-3-3-3zM19 10c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M1.41 1.6 0 3.01l5 5c-1.66 0-3 1.33-3 2.99v6h4v4h12l2.95 2.96 1.41-1.41zM8 19.01V15h4l4 4z',
  }),
  'PrintDisabledSharp',
);
export const PrintDisabledTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PrintDisabledTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrintDisabledTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 10H5c-.55 0-1 .45-1 1v4h2v-2h4z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M1.41 1.6 0 3.01 5 8c-1.66 0-3 1.34-3 3v6h4v4h12l2.95 2.96 1.41-1.41zM6 15H4v-4c0-.55.45-1 1-1h2l3 3H6zm2 4v-4h4l4 4z',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'm18 15.01 2-.01v-4c0-.55-.45-1-1-1h-6.34l3 3H18zm-1-3.5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1',
        opacity: '.3',
      },
      '2',
    ),
    svg('circle', { cx: '18', cy: '11.51', r: '1' }, '3'),
    svg('path', { d: 'M16 5H8v.35L10.66 8H16z', opacity: '.3' }, '4'),
    svg(
      'path',
      { d: 'M19 8h-1V3H6v.36l2 2V5h8v3h-5.34l2 2H19c.55 0 1 .45 1 1v4l-2 .01V13h-2.34l4 4H22v-6c0-1.66-1.34-3-3-3' },
      '5',
    ),
  ],
  'PrintDisabledTwoTone',
);
export const PrintOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PrintOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrintOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3M8 5h8v3H8zm8 12v2H8v-4h8zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z',
      },
      '0',
    ),
    svg('circle', { cx: '18', cy: '11.5', r: '1' }, '1'),
  ],
  'PrintOutlined',
);
export const PrintRoundedIcon = (props?: KTRawAttr) => {
  const s = _PrintRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrintRoundedIcon = svg(
  svg('path', {
    d: 'M19 8H5c-1.66 0-3 1.34-3 3v4c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2h2c1.1 0 2-.9 2-2v-4c0-1.66-1.34-3-3-3m-4 11H9c-.55 0-1-.45-1-1v-4h8v4c0 .55-.45 1-1 1m4-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-2-9H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1',
  }),
  'PrintRounded',
);
export const PrintSharpIcon = (props?: KTRawAttr) => {
  const s = _PrintSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrintSharpIcon = svg(
  svg('path', {
    d: 'M22 8H2v9h4v4h12v-4h4zm-6 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-1-9H6v4h12z',
  }),
  'PrintSharp',
);
export const PrintTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PrintTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrintTwoToneIcon = svg(
  [
    svg('path', { d: 'M8 5h8v3H8z', opacity: '.3' }, '0'),
    svg('circle', { cx: '18', cy: '11.5', r: '1' }, '1'),
    svg(
      'path',
      {
        d: 'M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3M8 5h8v3H8zm8 14H8v-4h8zm4-4h-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1z',
      },
      '2',
    ),
    svg(
      'path',
      {
        d: 'M6 13h12v2h2v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4h2zm12-2.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
        opacity: '.3',
      },
      '3',
    ),
  ],
  'PrintTwoTone',
);
export const PriorityHighIcon = (props?: KTRawAttr) => {
  const s = _PriorityHighIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PriorityHighIcon = svg(
  [svg('circle', { cx: '12', cy: '19', r: '2' }, '0'), svg('path', { d: 'M10 3h4v12h-4z' }, '1')],
  'PriorityHigh',
);
export const PriorityHighOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PriorityHighOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PriorityHighOutlinedIcon = svg(
  [svg('circle', { cx: '12', cy: '19', r: '2' }, '0'), svg('path', { d: 'M10 3h4v12h-4z' }, '1')],
  'PriorityHighOutlined',
);
export const PriorityHighRoundedIcon = (props?: KTRawAttr) => {
  const s = _PriorityHighRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PriorityHighRoundedIcon = svg(
  [
    svg('circle', { cx: '12', cy: '19', r: '2' }, '0'),
    svg('path', { d: 'M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2' }, '1'),
  ],
  'PriorityHighRounded',
);
export const PriorityHighSharpIcon = (props?: KTRawAttr) => {
  const s = _PriorityHighSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PriorityHighSharpIcon = svg(
  [svg('circle', { cx: '12', cy: '19', r: '2' }, '0'), svg('path', { d: 'M10 3h4v12h-4z' }, '1')],
  'PriorityHighSharp',
);
export const PriorityHighTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PriorityHighTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PriorityHighTwoToneIcon = svg(
  [svg('circle', { cx: '12', cy: '19', r: '2' }, '0'), svg('path', { d: 'M10 3h4v12h-4z' }, '1')],
  'PriorityHighTwoTone',
);
export const PrivacyTipIcon = (props?: KTRawAttr) => {
  const s = _PrivacyTipIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrivacyTipIcon = svg(
  svg('path', { d: 'M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-1 6h2v2h-2zm0 4h2v6h-2z' }),
  'PrivacyTip',
);
export const PrivacyTipOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PrivacyTipOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrivacyTipOutlinedIcon = svg(
  svg('path', {
    d: 'm12 3.19 7 3.11V11c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3zM12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-1 6h2v2h-2zm0 4h2v6h-2z',
  }),
  'PrivacyTipOutlined',
);
export const PrivacyTipRoundedIcon = (props?: KTRawAttr) => {
  const s = _PrivacyTipRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrivacyTipRoundedIcon = svg(
  svg('path', {
    d: 'M4.19 4.47C3.47 4.79 3 5.51 3 6.3V11c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6.3c0-.79-.47-1.51-1.19-1.83l-7-3.11c-.52-.23-1.11-.23-1.62 0zM12 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1',
  }),
  'PrivacyTipRounded',
);
export const PrivacyTipSharpIcon = (props?: KTRawAttr) => {
  const s = _PrivacyTipSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrivacyTipSharpIcon = svg(
  svg('path', { d: 'M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-1 6h2v2h-2zm0 4h2v6h-2z' }),
  'PrivacyTipSharp',
);
export const PrivacyTipTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PrivacyTipTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrivacyTipTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 3.19 5 6.3V11c0 4.52 2.98 8.69 7 9.93 4.02-1.23 7-5.41 7-9.93V6.3zM13 17h-2v-6h2zm0-8h-2V7h2z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm12 3.19 7 3.11V11c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3zM12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-1 6h2v2h-2zm0 4h2v6h-2z',
      },
      '1',
    ),
  ],
  'PrivacyTipTwoTone',
);
export const PrivateConnectivityIcon = (props?: KTRawAttr) => {
  const s = _PrivateConnectivityIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrivateConnectivityIcon = svg(
  svg('path', {
    d: 'M18.93 11c-.49-3.39-3.4-6-6.93-6s-6.44 2.61-6.93 6H2v2h3.07c.49 3.39 3.4 6 6.93 6s6.44-2.61 6.93-6H22v-2zM15 14.5c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1v-1c0-1.21 1.08-2.18 2.34-1.97.98.16 1.66 1.08 1.66 2.08v.89c.55 0 1 .45 1 1zM12.75 13c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75M13 9.5v1h-2v-1c0-.55.45-1 1-1s1 .45 1 1',
  }),
  'PrivateConnectivity',
);
export const PrivateConnectivityOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PrivateConnectivityOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrivateConnectivityOutlinedIcon = svg(
  svg('path', {
    d: 'M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m-6.93 6c.49 3.39 3.4 6 6.93 6s6.44-2.61 6.93-6H22v-2h-3.07c-.49-3.39-3.4-6-6.93-6s-6.44 2.61-6.93 6H2v2zM14 10.5v-.89c0-1-.68-1.92-1.66-2.08C11.08 7.32 10 8.29 10 9.5v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-2 3.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75m1-3.25h-2v-1c0-.55.45-1 1-1s1 .45 1 1z',
  }),
  'PrivateConnectivityOutlined',
);
export const PrivateConnectivityRoundedIcon = (props?: KTRawAttr) => {
  const s = _PrivateConnectivityRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrivateConnectivityRoundedIcon = svg(
  svg('path', {
    d: 'M22 12c0-.55-.45-1-1-1h-2.07c-.49-3.39-3.4-6-6.93-6s-6.44 2.61-6.93 6H3c-.55 0-1 .45-1 1s.45 1 1 1h2.07c.49 3.39 3.4 6 6.93 6s6.44-2.61 6.93-6H21c.55 0 1-.45 1-1m-7 2.5c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1v-1c0-1.21 1.08-2.18 2.34-1.97.98.16 1.66 1.08 1.66 2.08v.89c.55 0 1 .45 1 1zM12.75 13c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75M13 9.5v1h-2v-1c0-.55.45-1 1-1s1 .45 1 1',
  }),
  'PrivateConnectivityRounded',
);
export const PrivateConnectivitySharpIcon = (props?: KTRawAttr) => {
  const s = _PrivateConnectivitySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrivateConnectivitySharpIcon = svg(
  svg('path', {
    d: 'M18.93 11c-.49-3.39-3.4-6-6.93-6s-6.44 2.61-6.93 6H2v2h3.07c.49 3.39 3.4 6 6.93 6s6.44-2.61 6.93-6H22v-2zM15 10.5v5H9v-5h1v-1c0-1.21 1.08-2.18 2.34-1.97.98.16 1.66 1.08 1.66 2.08v.89zM12.75 13c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75M13 9.5v1h-2v-1c0-.55.45-1 1-1s1 .45 1 1',
  }),
  'PrivateConnectivitySharp',
);
export const PrivateConnectivityTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PrivateConnectivityTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PrivateConnectivityTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m3 7.5c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1v-1c0-1.21 1.08-2.18 2.34-1.97.98.16 1.66 1.08 1.66 2.08v.89c.55 0 1 .45 1 1zM12.75 13c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75M13 9.5v1h-2v-1c0-.55.45-1 1-1s1 .45 1 1',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m-6.93 6c.49 3.39 3.4 6 6.93 6s6.44-2.61 6.93-6H22v-2h-3.07c-.49-3.39-3.4-6-6.93-6s-6.44 2.61-6.93 6H2v2zM14 10.5v-.89c0-1-.68-1.92-1.66-2.08C11.08 7.32 10 8.29 10 9.5v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-2 3.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75m1-3.25h-2v-1c0-.55.45-1 1-1s1 .45 1 1z',
      },
      '1',
    ),
  ],
  'PrivateConnectivityTwoTone',
);
export const ProductionQuantityLimitsIcon = (props?: KTRawAttr) => {
  const s = _ProductionQuantityLimitsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ProductionQuantityLimitsIcon = svg(
  svg('path', {
    d: 'M13 10h-2V8h2zm0-4h-2V1h2zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7z',
  }),
  'ProductionQuantityLimits',
);
export const ProductionQuantityLimitsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ProductionQuantityLimitsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ProductionQuantityLimitsOutlinedIcon = svg(
  svg('path', {
    d: 'M13 10h-2V8h2zm0-4h-2V1h2zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7z',
  }),
  'ProductionQuantityLimitsOutlined',
);
export const ProductionQuantityLimitsRoundedIcon = (props?: KTRawAttr) => {
  const s = _ProductionQuantityLimitsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ProductionQuantityLimitsRoundedIcon = svg(
  svg('path', {
    d: 'M12 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m0-4c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.24-6.14c.25-.48.08-1.08-.4-1.34-.49-.27-1.1-.08-1.36.41L15.55 11H8.53L4.27 2H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7z',
  }),
  'ProductionQuantityLimitsRounded',
);
export const ProductionQuantityLimitsSharpIcon = (props?: KTRawAttr) => {
  const s = _ProductionQuantityLimitsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ProductionQuantityLimitsSharpIcon = svg(
  svg('path', {
    d: 'M13 10h-2V8h2zm0-4h-2V1h2zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7z',
  }),
  'ProductionQuantityLimitsSharp',
);
export const ProductionQuantityLimitsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ProductionQuantityLimitsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ProductionQuantityLimitsTwoToneIcon = svg(
  svg('path', {
    d: 'M13 10h-2V8h2zm0-4h-2V1h2zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7z',
  }),
  'ProductionQuantityLimitsTwoTone',
);
export const PropaneIcon = (props?: KTRawAttr) => {
  const s = _PropaneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PropaneIcon = svg(
  svg('path', {
    d: 'M17 6h-1V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1H7c-3.31 0-6 2.69-6 6s2.69 6 6 6v3h2v-3h6v3h2v-3c3.31 0 6-2.69 6-6s-2.69-6-6-6m-7-1h4v1h-4z',
  }),
  'Propane',
);
export const PropaneOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PropaneOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PropaneOutlinedIcon = svg(
  svg('path', {
    d: 'M17 6h-1V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1H7c-3.31 0-6 2.69-6 6s2.69 6 6 6v3h2v-3h6v3h2v-3c3.31 0 6-2.69 6-6s-2.69-6-6-6m-7-1h4v1h-4zm7 11H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4',
  }),
  'PropaneOutlined',
);
export const PropaneRoundedIcon = (props?: KTRawAttr) => {
  const s = _PropaneRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PropaneRoundedIcon = svg(
  svg('path', {
    d: 'M16.75 6H16V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1h-.75C3.97 6 1.1 8.53 1 11.82.9 15.21 3.62 18 7 18v2c0 .55.45 1 1 1s1-.45 1-1v-2h6v2c0 .55.45 1 1 1s1-.45 1-1v-2c3.38 0 6.1-2.79 6-6.18C22.9 8.53 20.03 6 16.75 6M10 5h4v1h-4z',
  }),
  'PropaneRounded',
);
export const PropaneSharpIcon = (props?: KTRawAttr) => {
  const s = _PropaneSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PropaneSharpIcon = svg(
  svg('path', {
    d: 'M16.75 6H16V3H8v3h-.75C3.97 6 1.1 8.53 1 11.82.9 15.21 3.62 18 7 18v3h2v-3h6v3h2v-3c3.38 0 6.1-2.79 6-6.18C22.9 8.53 20.03 6 16.75 6M10 5h4v1h-4z',
  }),
  'PropaneSharp',
);
export const PropaneTankIcon = (props?: KTRawAttr) => {
  const s = _PropaneTankIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PropaneTankIcon = svg(
  svg('path', {
    d: 'M4 15v3c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-3zm16-2v-3c0-1.86-1.28-3.41-3-3.86V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2.14c-1.72.45-3 2-3 3.86v3zM9 4h6v2h-2c0-.55-.45-1-1-1s-1 .45-1 1H9z',
  }),
  'PropaneTank',
);
export const PropaneTankOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PropaneTankOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PropaneTankOutlinedIcon = svg(
  svg('path', {
    d: 'M17 6.14V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2.14c-1.72.45-3 2-3 3.86v8c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-8c0-1.86-1.28-3.41-3-3.86M9 4h6v2h-2c0-.55-.45-1-1-1s-1 .45-1 1H9zM8 8h8c1.1 0 2 .9 2 2v3H6v-3c0-1.1.9-2 2-2m8 12H8c-1.1 0-2-.9-2-2v-3h12v3c0 1.1-.9 2-2 2',
  }),
  'PropaneTankOutlined',
);
export const PropaneTankRoundedIcon = (props?: KTRawAttr) => {
  const s = _PropaneTankRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PropaneTankRoundedIcon = svg(
  svg('path', {
    d: 'M4 15v3c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-3zm16-2v-3c0-1.86-1.28-3.41-3-3.86V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2.14c-1.72.45-3 2-3 3.86v3zM9 4h6v2h-2c0-.55-.45-1-1-1s-1 .45-1 1H9z',
  }),
  'PropaneTankRounded',
);
export const PropaneTankSharpIcon = (props?: KTRawAttr) => {
  const s = _PropaneTankSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PropaneTankSharpIcon = svg(
  svg('path', {
    d: 'M4 15v3c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-3zm16-2v-3c0-1.86-1.28-3.41-3-3.86V2H7v4.14c-1.72.45-3 2-3 3.86v3zM9 4h6v2h-2V5h-2v1H9z',
  }),
  'PropaneTankSharp',
);
export const PropaneTankTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PropaneTankTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PropaneTankTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M6 18c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3H6zM16 8H8c-1.1 0-2 .9-2 2v3h12v-3c0-1.1-.9-2-2-2', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M17 6.14V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2.14c-1.72.45-3 2-3 3.86v8c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-8c0-1.86-1.28-3.41-3-3.86M9 4h6v2h-2c0-.55-.45-1-1-1s-1 .45-1 1H9zm9 14c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-3h12zm0-5H6v-3c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2z',
      },
      '1',
    ),
  ],
  'PropaneTankTwoTone',
);
export const PropaneTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PropaneTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PropaneTwoToneIcon = svg(
  [
    svg('path', { d: 'M17 8H7c-2.21 0-4 1.79-4 4s1.79 4 4 4h10c2.21 0 4-1.79 4-4s-1.79-4-4-4', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M17 6h-1V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1H7c-3.31 0-6 2.69-6 6s2.69 6 6 6v3h2v-3h6v3h2v-3c3.31 0 6-2.69 6-6s-2.69-6-6-6m-7-1h4v1h-4zm7 11H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4',
      },
      '1',
    ),
  ],
  'PropaneTwoTone',
);
export const PsychologyIcon = (props?: KTRawAttr) => {
  const s = _PsychologyIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PsychologyIcon = svg(
  [
    svg(
      'path',
      { d: 'M13 8.57c-.79 0-1.43.64-1.43 1.43s.64 1.43 1.43 1.43 1.43-.64 1.43-1.43-.64-1.43-1.43-1.43' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M13 3C9.25 3 6.2 5.94 6.02 9.64L4.1 12.2c-.25.33-.01.8.4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.68c2.36-1.12 4-3.53 4-6.32 0-3.87-3.13-7-7-7m3 7c0 .13-.01.26-.02.39l.83.66c.08.06.1.16.05.25l-.8 1.39c-.05.09-.16.12-.24.09l-.99-.4c-.21.16-.43.29-.67.39L14 13.83c-.01.1-.1.17-.2.17h-1.6c-.1 0-.18-.07-.2-.17l-.15-1.06c-.25-.1-.47-.23-.68-.39l-.99.4c-.09.03-.2 0-.25-.09l-.8-1.39c-.05-.08-.03-.19.05-.25l.84-.66c-.01-.13-.02-.26-.02-.39s.02-.27.04-.39l-.85-.66c-.08-.06-.1-.16-.05-.26l.8-1.38c.05-.09.15-.12.24-.09l1 .4c.2-.15.43-.29.67-.39L12 6.17c.02-.1.1-.17.2-.17h1.6c.1 0 .18.07.2.17l.15 1.06c.24.1.46.23.67.39l1-.4c.09-.03.2 0 .24.09l.8 1.38c.05.09.03.2-.05.26l-.85.66c.03.12.04.25.04.39',
      },
      '1',
    ),
  ],
  'Psychology',
);
export const PsychologyAltIcon = (props?: KTRawAttr) => {
  const s = _PsychologyAltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PsychologyAltIcon = svg(
  svg('path', {
    d: 'M19.94 9.06C19.5 5.73 16.57 3 13 3 9.47 3 6.57 5.61 6.08 9l-1.93 3.48c-.41.66.07 1.52.85 1.52h1v2c0 1.1.9 2 2 2h1v3h7v-4.68c2.62-1.25 4.35-4.08 3.94-7.26M12.5 14c-.41 0-.74-.33-.74-.74s.33-.73.74-.73.73.32.73.73-.31.74-.73.74m1.76-4.32c-.44.65-.86.85-1.09 1.27-.09.17-.13.28-.13.82h-1.06c0-.29-.04-.75.18-1.16.28-.51.83-.81 1.14-1.26.33-.47.15-1.36-.8-1.36-.62 0-.92.47-1.05.86l-.96-.4c.27-.78.97-1.45 2.01-1.45.86 0 1.45.39 1.75.88.26.43.41 1.22.01 1.8',
  }),
  'PsychologyAlt',
);
export const PsychologyAltOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PsychologyAltOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PsychologyAltOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19.94 9.06C19.5 5.73 16.57 3 13 3 9.47 3 6.57 5.61 6.08 9l-1.93 3.48c-.41.66.07 1.52.85 1.52h1v2c0 1.1.9 2 2 2h1v3h7v-4.68c2.62-1.25 4.35-4.08 3.94-7.26m-5.05 5.57-.89.42V19h-3v-3H8v-4H6.7l1.33-2.33C8.21 7.06 10.35 5 13 5c2.76 0 5 2.24 5 5 0 2.09-1.29 3.88-3.11 4.63',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12.5 12.54c-.41 0-.74.31-.74.73 0 .41.33.74.74.74.42 0 .73-.33.73-.74 0-.42-.31-.73-.73-.73m0-5.54c-1.03 0-1.74.67-2 1.45l.96.4c.13-.39.43-.86 1.05-.86.95 0 1.13.89.8 1.36-.32.45-.86.75-1.14 1.26-.23.4-.18.87-.18 1.16h1.06c0-.55.04-.65.13-.82.23-.42.65-.62 1.09-1.27.4-.59.25-1.38-.01-1.8-.31-.49-.9-.88-1.76-.88',
      },
      '1',
    ),
  ],
  'PsychologyAltOutlined',
);
export const PsychologyAltRoundedIcon = (props?: KTRawAttr) => {
  const s = _PsychologyAltRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PsychologyAltRoundedIcon = svg(
  svg('path', {
    d: 'M19.94 9.06C19.5 5.73 16.57 3 13 3 9.47 3 6.57 5.61 6.08 9l-1.93 3.48c-.41.66.07 1.52.85 1.52h1v2c0 1.1.9 2 2 2h1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-3.68c2.62-1.25 4.35-4.08 3.94-7.26M12.5 14c-.41 0-.74-.33-.74-.74s.33-.73.74-.73.73.32.73.73-.31.74-.73.74m1.76-4.32c-.44.65-.86.85-1.09 1.27-.09.17-.13.28-.13.82h-1.06c0-.29-.04-.75.18-1.16.28-.51.83-.81 1.14-1.26.33-.47.15-1.36-.8-1.36-.62 0-.92.47-1.05.86l-.96-.4c.27-.78.97-1.45 2.01-1.45.86 0 1.45.39 1.75.88.26.43.41 1.22.01 1.8',
  }),
  'PsychologyAltRounded',
);
export const PsychologyAltSharpIcon = (props?: KTRawAttr) => {
  const s = _PsychologyAltSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PsychologyAltSharpIcon = svg(
  svg('path', {
    d: 'M19.94 9.06C19.5 5.73 16.57 3 13 3 9.47 3 6.57 5.61 6.08 9l-1.93 3.48c-.41.66.07 1.52.85 1.52h1v4h3v3h7v-4.68c2.62-1.25 4.35-4.08 3.94-7.26M12.5 14c-.41 0-.74-.33-.74-.74s.33-.73.74-.73.73.32.73.73-.31.74-.73.74m1.76-4.32c-.44.65-.86.85-1.09 1.27-.09.17-.13.28-.13.82h-1.06c0-.29-.04-.75.18-1.16.28-.51.83-.81 1.14-1.26.33-.47.15-1.36-.8-1.36-.62 0-.92.47-1.05.86l-.96-.4c.27-.78.97-1.45 2.01-1.45.86 0 1.45.39 1.75.88.26.43.41 1.22.01 1.8',
  }),
  'PsychologyAltSharp',
);
export const PsychologyAltTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PsychologyAltTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PsychologyAltTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M13 5c-2.65 0-4.79 2.06-4.97 4.67L6.7 12H8v4h3v3h3v-3.95l.89-.42C16.71 13.88 18 12.09 18 10c0-2.76-2.24-5-5-5m-.5 9c-.41 0-.74-.33-.74-.74s.33-.73.74-.73.73.32.73.73-.31.74-.73.74m1.76-4.32c-.44.65-.86.85-1.09 1.27-.09.17-.13.28-.13.82h-1.06c0-.29-.04-.75.18-1.16.28-.51.83-.81 1.14-1.26.33-.47.15-1.36-.8-1.36-.62 0-.92.47-1.05.86l-.96-.4c.27-.78.97-1.45 2.01-1.45.86 0 1.45.39 1.75.88.26.43.41 1.22.01 1.8',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19.94 9.06C19.5 5.73 16.57 3 13 3 9.47 3 6.57 5.61 6.08 9l-1.93 3.48c-.41.66.07 1.52.85 1.52h1v2c0 1.1.9 2 2 2h1v3h7v-4.68c2.62-1.25 4.35-4.08 3.94-7.26m-5.05 5.57-.89.42V19h-3v-3H8v-4H6.7l1.33-2.33C8.21 7.06 10.35 5 13 5c2.76 0 5 2.24 5 5 0 2.09-1.29 3.88-3.11 4.63',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M12.5 12.54c-.41 0-.74.31-.74.73 0 .41.33.74.74.74.42 0 .73-.33.73-.74 0-.42-.31-.73-.73-.73m0-5.54c-1.03 0-1.74.67-2 1.45l.96.4c.13-.39.43-.86 1.05-.86.95 0 1.13.89.8 1.36-.32.45-.86.75-1.14 1.26-.23.4-.18.87-.18 1.16h1.06c0-.55.04-.65.13-.82.23-.42.65-.62 1.09-1.27.4-.59.25-1.38-.01-1.8-.31-.49-.9-.88-1.76-.88',
      },
      '2',
    ),
  ],
  'PsychologyAltTwoTone',
);
export const PsychologyOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PsychologyOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PsychologyOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm15.82 7.22-1 .4c-.21-.16-.43-.29-.67-.39L14 6.17c-.02-.1-.1-.17-.2-.17h-1.6c-.1 0-.18.07-.19.17l-.15 1.06c-.24.1-.47.23-.67.39l-1-.4c-.09-.03-.2 0-.24.09l-.8 1.38c-.05.09-.03.2.05.26l.85.66c-.03.12-.05.26-.05.39q0 .195.03.39l-.84.66c-.08.06-.1.17-.05.25l.8 1.39c.05.09.15.12.25.09l.99-.4c.21.16.43.29.68.39l.14 1.06c.02.1.1.17.2.17h1.6c.1 0 .18-.07.2-.17l.15-1.06c.24-.1.47-.23.67-.39l.99.4c.09.04.2 0 .24-.09l.8-1.39c.05-.09.03-.19-.05-.25l-.83-.66q.03-.195.03-.39 0-.21-.03-.39l.85-.66c.08-.06.1-.17.05-.26l-.8-1.38c-.05-.09-.16-.12-.25-.09M13 11.43c-.79 0-1.43-.64-1.43-1.43s.64-1.43 1.43-1.43 1.43.64 1.43 1.43-.64 1.43-1.43 1.43',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19.94 9.06c-.43-3.27-3.23-5.86-6.53-6.05C13.27 3 13.14 3 13 3 9.47 3 6.57 5.61 6.08 9l-1.93 3.48c-.41.66.07 1.52.85 1.52h1v2c0 1.1.9 2 2 2h1v3h7v-4.68c2.62-1.25 4.35-4.08 3.94-7.26m-5.05 5.57-.89.42V19h-3v-3H8v-4H6.7l1.33-2.33C8.21 7.06 10.35 5 13 5c2.76 0 5 2.24 5 5 0 2.09-1.29 3.88-3.11 4.63',
      },
      '1',
    ),
  ],
  'PsychologyOutlined',
);
export const PsychologyRoundedIcon = (props?: KTRawAttr) => {
  const s = _PsychologyRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PsychologyRoundedIcon = svg(
  [
    svg(
      'path',
      { d: 'M13 8.57c-.79 0-1.43.64-1.43 1.43s.64 1.43 1.43 1.43 1.43-.64 1.43-1.43-.64-1.43-1.43-1.43' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M13.21 3c-3.84-.11-7 2.87-7.19 6.64L4.1 12.2c-.25.33-.01.8.4.8H6v3c0 1.1.9 2 2 2h1v2c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-3.68c2.44-1.16 4.1-3.68 4-6.58-.14-3.62-3.18-6.63-6.79-6.74M16 10c0 .13-.01.26-.02.39l.83.66c.08.06.1.16.05.25l-.8 1.39c-.05.09-.16.12-.24.09l-.99-.4c-.21.16-.43.29-.67.39L14 13.83c-.01.1-.1.17-.2.17h-1.6c-.1 0-.18-.07-.2-.17l-.15-1.06c-.25-.1-.47-.23-.68-.39l-.99.4c-.09.03-.2 0-.25-.09l-.8-1.39c-.05-.08-.03-.19.05-.25l.84-.66c-.01-.13-.02-.26-.02-.39s.02-.27.04-.39l-.85-.66c-.08-.06-.1-.16-.05-.26l.8-1.38c.05-.09.15-.12.24-.09l1 .4c.2-.15.43-.29.67-.39L12 6.17c.02-.1.1-.17.2-.17h1.6c.1 0 .18.07.2.17l.15 1.06c.24.1.46.23.67.39l1-.4c.09-.03.2 0 .24.09l.8 1.38c.05.09.03.2-.05.26l-.85.66c.03.12.04.25.04.39',
      },
      '1',
    ),
  ],
  'PsychologyRounded',
);
export const PsychologySharpIcon = (props?: KTRawAttr) => {
  const s = _PsychologySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PsychologySharpIcon = svg(
  [
    svg(
      'path',
      { d: 'M13 8.57c-.79 0-1.43.64-1.43 1.43s.64 1.43 1.43 1.43 1.43-.64 1.43-1.43-.64-1.43-1.43-1.43' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M13 3C9.25 3 6.2 5.94 6.02 9.64L4.1 12.2c-.25.33-.01.8.4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.68c2.36-1.12 4-3.53 4-6.32 0-3.87-3.13-7-7-7m3 7c0 .13-.01.26-.02.39l.83.66c.08.06.1.16.05.25l-.8 1.39c-.05.09-.16.12-.24.09l-.99-.4c-.21.16-.43.29-.67.39L14 13.83c-.01.1-.1.17-.2.17h-1.6c-.1 0-.18-.07-.2-.17l-.15-1.06c-.25-.1-.47-.23-.68-.39l-.99.4c-.09.03-.2 0-.25-.09l-.8-1.39c-.05-.08-.03-.19.05-.25l.84-.66c-.01-.13-.02-.26-.02-.39s.02-.27.04-.39l-.85-.66c-.08-.06-.1-.16-.05-.26l.8-1.38c.05-.09.15-.12.24-.09l1 .4c.2-.15.43-.29.67-.39L12 6.17c.02-.1.1-.17.2-.17h1.6c.1 0 .18.07.2.17l.15 1.06c.24.1.46.23.67.39l1-.4c.09-.03.2 0 .24.09l.8 1.38c.05.09.03.2-.05.26l-.85.66c.03.12.04.25.04.39',
      },
      '1',
    ),
  ],
  'PsychologySharp',
);
export const PsychologyTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PsychologyTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PsychologyTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M13 5c-2.65 0-4.79 2.06-4.97 4.67L6.7 12H8v4h3v3h3v-3.95l.89-.43C16.71 13.88 18 12.09 18 10c0-2.76-2.24-5-5-5m3.82 3.95-.85.66q.03.18.03.39c0 .13-.01.26-.02.39l.83.66c.08.06.1.16.05.25l-.8 1.39c-.05.09-.16.12-.24.09l-.99-.4c-.21.16-.43.29-.67.39L14 13.83c-.01.1-.1.17-.2.17h-1.6c-.1 0-.18-.07-.2-.17l-.15-1.06c-.25-.1-.47-.23-.68-.39l-.99.4c-.09.03-.2 0-.25-.09l-.8-1.39c-.05-.08-.03-.19.05-.25l.84-.66c-.01-.13-.02-.26-.02-.39s.02-.27.04-.39l-.85-.66c-.08-.06-.1-.16-.05-.26l.8-1.38c.05-.09.15-.12.24-.09l1 .4c.2-.15.43-.29.67-.39L12 6.17c.02-.1.1-.17.2-.17h1.6c.1 0 .18.07.2.17l.15 1.06c.24.1.46.23.67.39l1-.4c.09-.03.2 0 .24.09l.8 1.38c.05.09.03.2-.04.26',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm15.82 7.22-1 .4c-.21-.16-.43-.29-.67-.39L14 6.17c-.02-.1-.1-.17-.2-.17h-1.6c-.1 0-.18.07-.19.17l-.15 1.06c-.24.1-.47.23-.67.39l-1-.4c-.09-.03-.2 0-.24.09l-.8 1.38c-.05.09-.03.2.05.26l.85.66c-.03.12-.05.26-.05.39q0 .195.03.39l-.84.66c-.08.06-.1.17-.05.25l.8 1.39c.05.09.15.12.25.09l.99-.4c.21.16.43.29.68.39l.14 1.06c.02.1.1.17.2.17h1.6c.1 0 .18-.07.2-.17l.15-1.06c.24-.1.47-.23.67-.39l.99.4c.09.04.2 0 .24-.09l.8-1.39c.05-.09.03-.19-.05-.25l-.83-.66q.03-.195.03-.39 0-.21-.03-.39l.85-.66c.08-.06.1-.17.05-.26l-.8-1.38c-.05-.09-.16-.12-.25-.09M13 11.43c-.79 0-1.43-.64-1.43-1.43s.64-1.43 1.43-1.43 1.43.64 1.43 1.43-.64 1.43-1.43 1.43',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M19.94 9.06c-.43-3.27-3.23-5.86-6.53-6.05C13.27 3 13.14 3 13 3 9.47 3 6.57 5.61 6.08 9l-1.93 3.48c-.41.66.07 1.52.85 1.52h1v2c0 1.1.9 2 2 2h1v3h7v-4.68c2.62-1.25 4.35-4.08 3.94-7.26m-5.05 5.57-.89.42V19h-3v-3H8v-4H6.7l1.33-2.33C8.21 7.06 10.35 5 13 5c2.76 0 5 2.24 5 5 0 2.09-1.29 3.88-3.11 4.63',
      },
      '2',
    ),
  ],
  'PsychologyTwoTone',
);
export const PublicIcon = (props?: KTRawAttr) => {
  const s = _PublicIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublicIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39',
  }),
  'Public',
);
export const PublicOffIcon = (props?: KTRawAttr) => {
  const s = _PublicOffIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublicOffIcon = svg(
  svg('path', {
    d: 'M11 8.17 6.49 3.66C8.07 2.61 9.96 2 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46C19.59 14.87 20 13.48 20 12c0-3.35-2.07-6.22-5-7.41V5c0 1.1-.9 2-2 2h-2zm10.19 13.02-1.41 1.41-2.27-2.27C15.93 21.39 14.04 22 12 22 6.48 22 2 17.52 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81zM11 18c-1.1 0-2-.9-2-2v-1l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.08 3.05 7.44 7 7.93z',
  }),
  'PublicOff',
);
export const PublicOffOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PublicOffOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublicOffOutlinedIcon = svg(
  svg('path', {
    d: 'M11 8.17 6.49 3.66C8.07 2.61 9.96 2 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46C19.59 14.87 20 13.48 20 12c0-3.35-2.07-6.22-5-7.41V5c0 1.1-.9 2-2 2h-2zm10.19 13.02-1.41 1.41-2.27-2.27C15.93 21.39 14.04 22 12 22 6.48 22 2 17.52 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81zM11 18c-1.1 0-2-.9-2-2v-1l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.08 3.05 7.44 7 7.93z',
  }),
  'PublicOffOutlined',
);
export const PublicOffRoundedIcon = (props?: KTRawAttr) => {
  const s = _PublicOffRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublicOffRoundedIcon = svg(
  svg('path', {
    d: 'M11 8.17 6.49 3.66C8.07 2.61 9.96 2 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46C19.59 14.87 20 13.48 20 12c0-3.35-2.07-6.22-5-7.41V5c0 1.1-.9 2-2 2h-2zm9.49 13.73c-.39.39-1.02.39-1.41 0l-1.56-1.56c-2.07 1.37-4.68 2-7.45 1.48-3.95-.75-7.13-3.92-7.88-7.88-.52-2.77.1-5.38 1.48-7.45L2.1 4.93a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l16.97 16.97c.4.39.4 1.02.01 1.41M11 18c-1.1 0-2-.9-2-2v-1l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.08 3.05 7.44 7 7.93z',
  }),
  'PublicOffRounded',
);
export const PublicOffSharpIcon = (props?: KTRawAttr) => {
  const s = _PublicOffSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublicOffSharpIcon = svg(
  svg('path', {
    d: 'M11 8.17 6.49 3.66C8.07 2.61 9.96 2 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46C19.59 14.87 20 13.48 20 12c0-3.35-2.07-6.22-5-7.41V5c0 1.1-.9 2-2 2h-2zm10.19 13.02-1.41 1.41-2.27-2.27C15.93 21.39 14.04 22 12 22 6.48 22 2 17.52 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81zM11 18c-1.1 0-2-.9-2-2v-1l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.08 3.05 7.44 7 7.93z',
  }),
  'PublicOffSharp',
);
export const PublicOffTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PublicOffTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublicOffTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm11 8.17 7.88 7.88C19.59 14.87 20 13.48 20 12c0-3.35-2.07-6.22-5-7.41V5c0 1.1-.9 2-2 2h-2zM11 18c-1.1 0-2-.9-2-2v-1l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.08 3.05 7.44 7 7.93z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M11 8.17 6.49 3.66C8.07 2.61 9.96 2 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51l-1.46-1.46C19.59 14.87 20 13.48 20 12c0-3.35-2.07-6.22-5-7.41V5c0 1.1-.9 2-2 2h-2zm10.19 13.02-1.41 1.41-2.27-2.27C15.93 21.39 14.04 22 12 22 6.48 22 2 17.52 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81zM11 18c-1.1 0-2-.9-2-2v-1l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.08 3.05 7.44 7 7.93z',
      },
      '1',
    ),
  ],
  'PublicOffTwoTone',
);
export const PublicOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PublicOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublicOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12m13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4',
  }),
  'PublicOutlined',
);
export const PublicRoundedIcon = (props?: KTRawAttr) => {
  const s = _PublicRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublicRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39',
  }),
  'PublicRounded',
);
export const PublicSharpIcon = (props?: KTRawAttr) => {
  const s = _PublicSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublicSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39',
  }),
  'PublicSharp',
);
export const PublicTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PublicTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublicTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M14.99 4.59V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1h-2v2h6c.55 0 1 .45 1 1v3h1c.89 0 1.64.59 1.9 1.4C19.19 15.98 20 14.08 20 12c0-3.35-2.08-6.23-5.01-7.41M8.99 16v-1l-4.78-4.78C4.08 10.79 4 11.39 4 12c0 4.07 3.06 7.43 6.99 7.93V18c-1.1 0-2-.9-2-2',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-1.01 17.93C7.06 19.43 4 16.07 4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4',
      },
      '1',
    ),
  ],
  'PublicTwoTone',
);
export const PublishIcon = (props?: KTRawAttr) => {
  const s = _PublishIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublishIcon = svg(svg('path', { d: 'M5 4v2h14V4zm0 10h4v6h6v-6h4l-7-7z' }), 'Publish');
export const PublishOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PublishOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublishOutlinedIcon = svg(
  svg('path', { d: 'M5 4h14v2H5zm0 10h4v6h6v-6h4l-7-7zm8-2v6h-2v-6H9.83L12 9.83 14.17 12z' }),
  'PublishOutlined',
);
export const PublishRoundedIcon = (props?: KTRawAttr) => {
  const s = _PublishRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublishRoundedIcon = svg(
  svg('path', {
    d: 'M5 5c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1m2.41 9H9v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-5h1.59c.89 0 1.34-1.08.71-1.71L12.71 7.7a.996.996 0 0 0-1.41 0l-4.59 4.59c-.63.63-.19 1.71.7 1.71',
  }),
  'PublishRounded',
);
export const PublishSharpIcon = (props?: KTRawAttr) => {
  const s = _PublishSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublishSharpIcon = svg(svg('path', { d: 'M5 4v2h14V4zm0 10h4v6h6v-6h4l-7-7z' }), 'PublishSharp');
export const PublishTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PublishTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublishTwoToneIcon = svg(
  [
    svg('path', { d: 'M9.83 12H11v6h2v-6h1.17L12 9.83z', opacity: '.3' }, '0'),
    svg('path', { d: 'M5 4h14v2H5zm7 3-7 7h4v6h6v-6h4zm1 5v6h-2v-6H9.83L12 9.83 14.17 12z' }, '1'),
  ],
  'PublishTwoTone',
);
export const PublishedWithChangesIcon = (props?: KTRawAttr) => {
  const s = _PublishedWithChangesIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublishedWithChangesIcon = svg(
  svg('path', {
    d: 'm17.66 9.53-7.07 7.07-4.24-4.24 1.41-1.41 2.83 2.83 5.66-5.66zM4 12c0-2.33 1.02-4.42 2.62-5.88L9 8.5v-6H3l2.2 2.2C3.24 6.52 2 9.11 2 12c0 5.19 3.95 9.45 9 9.95v-2.02c-3.94-.49-7-3.86-7-7.93m18 0c0-5.19-3.95-9.45-9-9.95v2.02c3.94.49 7 3.86 7 7.93 0 2.33-1.02 4.42-2.62 5.88L15 15.5v6h6l-2.2-2.2c1.96-1.82 3.2-4.41 3.2-7.3',
  }),
  'PublishedWithChanges',
);
export const PublishedWithChangesOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PublishedWithChangesOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublishedWithChangesOutlinedIcon = svg(
  svg('path', {
    d: 'M18.6 19.5H21v2h-6v-6h2v2.73c1.83-1.47 3-3.71 3-6.23 0-4.07-3.06-7.44-7-7.93V2.05c5.05.5 9 4.76 9 9.95 0 2.99-1.32 5.67-3.4 7.5M4 12c0-2.52 1.17-4.77 3-6.23V8.5h2v-6H3v2h2.4C3.32 6.33 2 9.01 2 12c0 5.19 3.95 9.45 9 9.95v-2.02c-3.94-.49-7-3.86-7-7.93m12.24-3.89-5.66 5.66-2.83-2.83-1.41 1.41 4.24 4.24 7.07-7.07z',
  }),
  'PublishedWithChangesOutlined',
);
export const PublishedWithChangesRoundedIcon = (props?: KTRawAttr) => {
  const s = _PublishedWithChangesRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublishedWithChangesRoundedIcon = svg(
  svg('path', {
    d: 'm16.95 10.23-5.66 5.66c-.39.39-1.02.39-1.41 0l-2.83-2.83a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l2.12 2.12 4.95-4.95c.39-.39 1.02-.39 1.41 0 .4.39.4 1.02.01 1.41M4 12c0-2.33 1.02-4.42 2.62-5.88l1.53 1.53c.31.31.85.09.85-.36V3c0-.28-.22-.5-.5-.5H4.21c-.45 0-.67.54-.35.85L5.2 4.7C3.24 6.52 2 9.11 2 12c0 4.75 3.32 8.73 7.76 9.75.63.14 1.24-.33 1.24-.98 0-.47-.33-.87-.79-.98C6.66 18.98 4 15.8 4 12m18 0c0-4.75-3.32-8.73-7.76-9.75-.63-.14-1.24.33-1.24.98 0 .47.33.87.79.98C17.34 5.02 20 8.2 20 12c0 2.33-1.02 4.42-2.62 5.88l-1.53-1.53c-.31-.31-.85-.09-.85.36V21c0 .28.22.5.5.5h4.29c.45 0 .67-.54.35-.85L18.8 19.3c1.96-1.82 3.2-4.41 3.2-7.3',
  }),
  'PublishedWithChangesRounded',
);
export const PublishedWithChangesSharpIcon = (props?: KTRawAttr) => {
  const s = _PublishedWithChangesSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublishedWithChangesSharpIcon = svg(
  svg('path', {
    d: 'm17.66 9.53-7.07 7.07-4.24-4.24 1.41-1.41 2.83 2.83 5.66-5.66zM4 12c0-2.33 1.02-4.42 2.62-5.88L9 8.5v-6H3l2.2 2.2C3.24 6.52 2 9.11 2 12c0 5.19 3.95 9.45 9 9.95v-2.02c-3.94-.49-7-3.86-7-7.93m18 0c0-5.19-3.95-9.45-9-9.95v2.02c3.94.49 7 3.86 7 7.93 0 2.33-1.02 4.42-2.62 5.88L15 15.5v6h6l-2.2-2.2c1.96-1.82 3.2-4.41 3.2-7.3',
  }),
  'PublishedWithChangesSharp',
);
export const PublishedWithChangesTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PublishedWithChangesTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PublishedWithChangesTwoToneIcon = svg(
  svg('path', {
    d: 'm17.66 9.53-7.07 7.07-4.24-4.24 1.41-1.41 2.83 2.83 5.66-5.66zM4 12c0-2.33 1.02-4.42 2.62-5.88L9 8.5v-6H3l2.2 2.2C3.24 6.52 2 9.11 2 12c0 5.19 3.95 9.45 9 9.95v-2.02c-3.94-.49-7-3.86-7-7.93m18 0c0-5.19-3.95-9.45-9-9.95v2.02c3.94.49 7 3.86 7 7.93 0 2.33-1.02 4.42-2.62 5.88L15 15.5v6h6l-2.2-2.2c1.96-1.82 3.2-4.41 3.2-7.3',
  }),
  'PublishedWithChangesTwoTone',
);
export const PunchClockIcon = (props?: KTRawAttr) => {
  const s = _PunchClockIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PunchClockIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19 6h-1V1H6v5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M8 3h8v3H8zm4 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5',
      },
      '0',
    ),
    svg('path', { d: 'M12.5 11.5h-1v2.71l1.64 1.64.71-.71-1.35-1.35z' }, '1'),
  ],
  'PunchClock',
);
export const PunchClockOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PunchClockOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PunchClockOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19 6h-1V1H6v5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M8 3h8v3H8zm11 17H5V8h14z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 9c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5',
      },
      '1',
    ),
    svg('path', { d: 'M12.5 11.5h-1v2.71l1.64 1.64.71-.71-1.35-1.35z' }, '2'),
  ],
  'PunchClockOutlined',
);
export const PunchClockRoundedIcon = (props?: KTRawAttr) => {
  const s = _PunchClockRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PunchClockRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19 6h-1V3c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M8 3h8v3H8zm4 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5',
      },
      '0',
    ),
    svg(
      'path',
      { d: 'M12.5 13.79V12c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2c0 .13.05.26.15.35l1.14 1.14c.2.2.51.2.71 0s.2-.51 0-.71z' },
      '1',
    ),
  ],
  'PunchClockRounded',
);
export const PunchClockSharpIcon = (props?: KTRawAttr) => {
  const s = _PunchClockSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PunchClockSharpIcon = svg(
  [
    svg(
      'path',
      { d: 'M21 6h-3V1H6v5H3v16h18zM8 3h8v3H8zm4 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5' },
      '0',
    ),
    svg('path', { d: 'M12.5 11.5h-1v2.71l1.64 1.64.71-.71-1.35-1.35z' }, '1'),
  ],
  'PunchClockSharp',
);
export const PunchClockTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PunchClockTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PunchClockTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M8 3h8v3H8zM5 20h14V8H5zm7-11c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19 6h-1V1H6v5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M8 3h8v3H8zm11 17H5V8h14z',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M12 19c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5',
      },
      '2',
    ),
    svg('path', { d: 'm13.85 15.14-1.35-1.35V11.5h-1v2.71l1.64 1.64z' }, '3'),
  ],
  'PunchClockTwoTone',
);
export const PushPinIcon = (props?: KTRawAttr) => {
  const s = _PushPinIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PushPinIcon = svg(
  svg('path', {
    fillRule: 'evenodd',
    d: 'M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3',
  }),
  'PushPin',
);
export const PushPinOutlinedIcon = (props?: KTRawAttr) => {
  const s = _PushPinOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PushPinOutlinedIcon = svg(
  svg('path', {
    d: 'M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4zm3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1',
  }),
  'PushPinOutlined',
);
export const PushPinRoundedIcon = (props?: KTRawAttr) => {
  const s = _PushPinRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PushPinRoundedIcon = svg(
  svg('path', {
    fillRule: 'evenodd',
    d: 'M19 12.87c0-.47-.34-.85-.8-.98C16.93 11.54 16 10.38 16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.38-.93 2.54-2.2 2.89-.46.13-.8.51-.8.98V13c0 .55.45 1 1 1h4.98l.02 7c0 .55.45 1 1 1s1-.45 1-1l-.02-7H18c.55 0 1-.45 1-1z',
  }),
  'PushPinRounded',
);
export const PushPinSharpIcon = (props?: KTRawAttr) => {
  const s = _PushPinSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PushPinSharpIcon = svg(
  svg('path', {
    fillRule: 'evenodd',
    d: 'M16 9V4h2V2H6v2h2v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3',
  }),
  'PushPinSharp',
);
export const PushPinTwoToneIcon = (props?: KTRawAttr) => {
  const s = _PushPinTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _PushPinTwoToneIcon = svg(
  [
    svg('path', { d: 'M14 4h-4v5c0 1.1-.35 2.14-1 3h6c-.63-.84-1-1.88-1-3z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M19 12c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19zM9 12c.65-.86 1-1.9 1-3V4h4v5c0 1.12.37 2.16 1 3z',
      },
      '1',
    ),
  ],
  'PushPinTwoTone',
);
