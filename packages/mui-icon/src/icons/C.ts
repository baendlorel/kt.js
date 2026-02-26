import { applyAttr, type KTRawAttr } from '@ktjs/core';
import { svg } from '../common/index.js';

export const CabinIcon = (props?: KTRawAttr) => {
  const s = _CabinIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CabinIcon = svg(
  svg('path', {
    d: 'M10 1c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1zm2 2L6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4zm1.94 4h-3.89L12 5.52zm-6.5 2h9.12L18 10.1v.9H6v-.9zM18 13v2H6v-2zM6 19v-2h12v2z',
  }),
  'Cabin',
);
export const CabinOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CabinOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CabinOutlinedIcon = svg(
  svg('path', {
    d: 'M10 1c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1zm2 2L6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4zm1.94 4h-3.89L12 5.52zm-6.5 2h9.12L18 10.1v.9H6v-.9zM18 13v2H6v-2zM6 19v-2h12v2z',
  }),
  'CabinOutlined',
);
export const CabinRoundedIcon = (props?: KTRawAttr) => {
  const s = _CabinRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CabinRoundedIcon = svg(
  svg('path', {
    d: 'M4.37 3.55C4.89 2.62 5.87 2 7 2c.38 0 .72-.22.89-.53.15-.31.5-.47.84-.47.74 0 1.26.8.9 1.45C9.11 3.38 8.13 4 7 4c-.38 0-.72.22-.89.53-.15.31-.5.47-.84.47-.74 0-1.26-.8-.9-1.45m18.02 8.64c-.34.44-.96.52-1.4.19l-.99-.76V20c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-8.38l-.99.76c-.44.34-1.07.25-1.4-.19s-.25-1.07.19-1.4L4 9.11V7c0-.55.45-1 1-1s1 .45 1 1v.58l5.39-4.12c.36-.27.86-.27 1.21 0l9.6 7.33c.44.34.53.97.19 1.4M10.06 7h3.89L12 5.52zM6 10.1v.9h12v-.9L16.56 9H7.44zM6 13v2h12v-2zm12 6v-2H6v2z',
  }),
  'CabinRounded',
);
export const CabinSharpIcon = (props?: KTRawAttr) => {
  const s = _CabinSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CabinSharpIcon = svg(
  svg('path', {
    d: 'M10 1c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1zm2 2L6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4zm1.94 4h-3.89L12 5.52zm-6.5 2h9.12L18 10.1v.9H6v-.9zM18 13v2H6v-2zM6 19v-2h12v2z',
  }),
  'CabinSharp',
);
export const CabinTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CabinTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CabinTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M13.94 7h-3.89L12 5.52zm-6.5 2h9.12L18 10.1v.9H6v-.9zM18 13v2H6v-2zM6 19v-2h12v2z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M10 1c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1zm2 2L6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4zm1.94 4h-3.89L12 5.52zm-6.5 2h9.12L18 10.1v.9H6v-.9zM18 13v2H6v-2zM6 19v-2h12v2z',
      },
      '1',
    ),
  ],
  'CabinTwoTone',
);
export const CableIcon = (props?: KTRawAttr) => {
  const s = _CableIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CableIcon = svg(
  svg('path', {
    d: 'M20 5V4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1h-1v4c0 .55.45 1 1 1h1v7c0 1.1-.9 2-2 2s-2-.9-2-2V7c0-2.21-1.79-4-4-4S5 4.79 5 7v7H4c-.55 0-1 .45-1 1v4h1v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h1v-4c0-.55-.45-1-1-1H7V7c0-1.1.9-2 2-2s2 .9 2 2v10c0 2.21 1.79 4 4 4s4-1.79 4-4v-7h1c.55 0 1-.45 1-1V5z',
  }),
  'Cable',
);
export const CableOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CableOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CableOutlinedIcon = svg(
  svg('path', {
    d: 'M20 5V4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1h-1v4c0 .55.45 1 1 1h1v7c0 1.1-.9 2-2 2s-2-.9-2-2V7c0-2.21-1.79-4-4-4S5 4.79 5 7v7H4c-.55 0-1 .45-1 1v4h1v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h1v-4c0-.55-.45-1-1-1H7V7c0-1.1.9-2 2-2s2 .9 2 2v10c0 2.21 1.79 4 4 4s4-1.79 4-4v-7h1c.55 0 1-.45 1-1V5z',
  }),
  'CableOutlined',
);
export const CableRoundedIcon = (props?: KTRawAttr) => {
  const s = _CableRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CableRoundedIcon = svg(
  svg('path', {
    d: 'M20 5V4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v6.91c0 1.04-.76 1.98-1.79 2.08-1.2.12-2.21-.82-2.21-1.99V7.14c0-2.13-1.61-3.99-3.74-4.13C6.93 2.86 5 4.7 5 7v7H4c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H7V7.09c0-1.04.76-1.98 1.79-2.08C9.99 4.89 11 5.83 11 7v9.86c0 2.13 1.61 3.99 3.74 4.13C17.07 21.14 19 19.3 19 17v-7h1c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1',
  }),
  'CableRounded',
);
export const CableSharpIcon = (props?: KTRawAttr) => {
  const s = _CableSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CableSharpIcon = svg(
  svg('path', { d: 'M20 5V3h-4v2h-1v5h2v9h-4V3H5v11H3v5h1v2h4v-2h1v-5H7V5h4v16h8V10h2V5z' }),
  'CableSharp',
);
export const CableTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CableTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CableTwoToneIcon = svg(
  svg('path', {
    d: 'M20 5V4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1h-1v4c0 .55.45 1 1 1h1v7c0 1.1-.9 2-2 2s-2-.9-2-2V7c0-2.21-1.79-4-4-4S5 4.79 5 7v7H4c-.55 0-1 .45-1 1v4h1v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h1v-4c0-.55-.45-1-1-1H7V7c0-1.1.9-2 2-2s2 .9 2 2v10c0 2.21 1.79 4 4 4s4-1.79 4-4v-7h1c.55 0 1-.45 1-1V5z',
  }),
  'CableTwoTone',
);
export const CachedIcon = (props?: KTRawAttr) => {
  const s = _CachedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CachedIcon = svg(
  svg('path', {
    d: 'm19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4z',
  }),
  'Cached',
);
export const CachedOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CachedOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CachedOutlinedIcon = svg(
  svg('path', {
    d: 'm19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4z',
  }),
  'CachedOutlined',
);
export const CachedRoundedIcon = (props?: KTRawAttr) => {
  const s = _CachedRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CachedRoundedIcon = svg(
  svg('path', {
    d: 'm18.65 8.35-2.79 2.79c-.32.32-.1.86.35.86H18c0 3.31-2.69 6-6 6-.79 0-1.56-.15-2.25-.44-.36-.15-.77-.04-1.04.23-.51.51-.33 1.37.34 1.64.91.37 1.91.57 2.95.57 4.42 0 8-3.58 8-8h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.19-.2-.51-.2-.7-.01M6 12c0-3.31 2.69-6 6-6 .79 0 1.56.15 2.25.44.36.15.77.04 1.04-.23.51-.51.33-1.37-.34-1.64C14.04 4.2 13.04 4 12 4c-4.42 0-8 3.58-8 8H2.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79c.31-.31.09-.85-.36-.85z',
  }),
  'CachedRounded',
);
export const CachedSharpIcon = (props?: KTRawAttr) => {
  const s = _CachedSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CachedSharpIcon = svg(
  svg('path', {
    d: 'm19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4z',
  }),
  'CachedSharp',
);
export const CachedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CachedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CachedTwoToneIcon = svg(
  svg('path', {
    d: 'm19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4z',
  }),
  'CachedTwoTone',
);
export const CakeIcon = (props?: KTRawAttr) => {
  const s = _CakeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CakeIcon = svg(
  svg('path', {
    d: 'M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2m4.6 9.99-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01M18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9',
  }),
  'Cake',
);
export const CakeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CakeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CakeOutlinedIcon = svg(
  svg('path', {
    d: 'M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2m6 3h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-9c0-1.66-1.34-3-3-3m1 11H5v-3c.9-.01 1.76-.37 2.4-1.01l1.09-1.07 1.07 1.07c1.31 1.31 3.59 1.3 4.89 0l1.08-1.07 1.07 1.07c.64.64 1.5 1 2.4 1.01zm0-4.5c-.51-.01-.99-.2-1.35-.57l-2.13-2.13-2.14 2.13c-.74.74-2.03.74-2.77 0L8.48 12.8l-2.14 2.13c-.35.36-.83.56-1.34.57V12c0-.55.45-1 1-1h12c.55 0 1 .45 1 1z',
  }),
  'CakeOutlined',
);
export const CakeRoundedIcon = (props?: KTRawAttr) => {
  const s = _CakeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CakeRoundedIcon = svg(
  svg('path', {
    d: 'M12.68 5.88c.7-.24 1.22-.9 1.3-1.64.05-.47-.05-.91-.28-1.27L12.42.75c-.19-.33-.67-.33-.87 0l-1.28 2.22c-.17.3-.27.65-.27 1.03 0 1.32 1.3 2.35 2.68 1.88m3.85 10.04-1-1-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-3.61c-.75.51-1.71.75-2.74.52-.66-.14-1.25-.51-1.73-.99M18 9h-5V8c0-.55-.45-1-1-1s-1 .45-1 1v1H6c-1.66 0-3 1.34-3 3v1.46c0 .85.5 1.67 1.31 1.94.73.24 1.52.06 2.03-.46l2.14-2.13 2.13 2.13c.76.76 2.01.76 2.77 0l2.14-2.13 2.13 2.13c.43.43 1.03.63 1.65.55.99-.13 1.69-1.06 1.69-2.06v-1.42C21 10.34 19.66 9 18 9',
  }),
  'CakeRounded',
);
export const CakeSharpIcon = (props?: KTRawAttr) => {
  const s = _CakeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CakeSharpIcon = svg(
  svg('path', {
    d: 'M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2m4.53 9.92-1-1-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V22h18v-5.61c-.75.51-1.71.75-2.74.52-.66-.14-1.25-.51-1.73-.99M18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9',
  }),
  'CakeSharp',
);
export const CakeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CakeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CakeTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm15.53 14.92-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07c-.64.64-1.5 1-2.4 1.01v3h14v-3c-.9-.01-1.76-.37-2.4-1.01zM18 11H6c-.55 0-1 .45-1 1v3.5c.51-.01.99-.21 1.34-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.36.36.84.56 1.35.57V12c0-.55-.45-1-1-1',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2m6 3h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-9c0-1.66-1.34-3-3-3m1 11H5v-3c.9-.01 1.76-.37 2.4-1.01l1.09-1.07 1.07 1.07c1.31 1.31 3.59 1.3 4.89 0l1.08-1.07 1.07 1.07c.64.64 1.5 1 2.4 1.01zm0-4.5c-.51-.01-.99-.2-1.35-.57l-2.13-2.13-2.14 2.13c-.74.74-2.03.74-2.77 0L8.48 12.8l-2.14 2.13c-.35.36-.83.56-1.34.57V12c0-.55.45-1 1-1h12c.55 0 1 .45 1 1z',
      },
      '1',
    ),
  ],
  'CakeTwoTone',
);
export const CalculateIcon = (props?: KTRawAttr) => {
  const s = _CalculateIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalculateIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41zm-6.78.66h5v1.5h-5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2zm6.5 1.25h-5v-1.5h5zm0-2.5h-5v-1.5h5z',
  }),
  'Calculate',
);
export const CalculateOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CalculateOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalculateOutlinedIcon = svg(
  [
    svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }, '0'),
    svg(
      'path',
      {
        d: 'M6.25 7.72h5v1.5h-5zM13 15.75h5v1.5h-5zm0-2.5h5v1.5h-5zM8 18h1.5v-2h2v-1.5h-2v-2H8v2H6V16h2zm6.09-7.05 1.41-1.41 1.41 1.41 1.06-1.06-1.41-1.42 1.41-1.41L16.91 6 15.5 7.41 14.09 6l-1.06 1.06 1.41 1.41-1.41 1.42z',
      },
      '1',
    ),
  ],
  'CalculateOutlined',
);
export const CalculateRoundedIcon = (props?: KTRawAttr) => {
  const s = _CalculateRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalculateRoundedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5.44 3.53c.29-.29.77-.29 1.06 0l.88.88.88-.88c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.88.88.88.88c.29.29.29.77 0 1.06s-.77.29-1.06 0l-.88-.87-.88.88c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l.88-.88-.88-.88c-.3-.3-.3-.78 0-1.07M7 7.72h3.5c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75M10.75 16H9.5v1.25c0 .41-.34.75-.75.75S8 17.66 8 17.25V16H6.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H8v-1.25c0-.41.34-.75.75-.75s.75.34.75.75v1.25h1.25c.41 0 .75.34.75.75s-.34.75-.75.75m6.5 1.25h-3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.5c.41 0 .75.34.75.75s-.34.75-.75.75m0-2.5h-3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.5c.41 0 .75.34.75.75s-.34.75-.75.75',
  }),
  'CalculateRounded',
);
export const CalculateSharpIcon = (props?: KTRawAttr) => {
  const s = _CalculateSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalculateSharpIcon = svg(
  svg('path', {
    d: 'M21 3H3v18h18zm-7.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41zm-6.78.66h5v1.5h-5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2zm6.5 1.25h-5v-1.5h5zm0-2.5h-5v-1.5h5z',
  }),
  'CalculateSharp',
);
export const CalculateTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CalculateTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalculateTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 19h14V5H5zm8.03-11.94L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41zM13 13.25h5v1.5h-5zm0 2.5h5v1.5h-5zM6.25 7.72h5v1.5h-5zM6 14.5h2v-2h1.5v2h2V16h-2v2H8v-2H6z',
        opacity: '.3',
      },
      '0',
    ),
    svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }, '1'),
    svg(
      'path',
      {
        d: 'M6.25 7.72h5v1.5h-5zM13 15.75h5v1.5h-5zm0-2.5h5v1.5h-5zM8 18h1.5v-2h2v-1.5h-2v-2H8v2H6V16h2zm6.09-7.05 1.41-1.41 1.41 1.41 1.06-1.06-1.41-1.42 1.41-1.41L16.91 6 15.5 7.41 14.09 6l-1.06 1.06 1.41 1.41-1.41 1.42z',
      },
      '2',
    ),
  ],
  'CalculateTwoTone',
);
export const CalendarMonthIcon = (props?: KTRawAttr) => {
  const s = _CalendarMonthIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarMonthIcon = svg(
  svg('path', {
    d: 'M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z',
  }),
  'CalendarMonth',
);
export const CalendarMonthOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CalendarMonthOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarMonthOutlinedIcon = svg(
  svg('path', {
    d: 'M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zm0-12H5V6h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z',
  }),
  'CalendarMonthOutlined',
);
export const CalendarMonthRoundedIcon = (props?: KTRawAttr) => {
  const s = _CalendarMonthRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarMonthRoundedIcon = svg(
  svg('path', {
    d: 'M17 2c-.55 0-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1m2 18H5V10h14zm-8-7c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1',
  }),
  'CalendarMonthRounded',
);
export const CalendarMonthSharpIcon = (props?: KTRawAttr) => {
  const s = _CalendarMonthSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarMonthSharpIcon = svg(
  svg('path', {
    d: 'M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z',
  }),
  'CalendarMonthSharp',
);
export const CalendarMonthTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CalendarMonthTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarMonthTwoToneIcon = svg(
  [
    svg('path', { d: 'M5 6h14v2H5z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zm0-12H5V6h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z',
      },
      '1',
    ),
  ],
  'CalendarMonthTwoTone',
);
export const CalendarTodayIcon = (props?: KTRawAttr) => {
  const s = _CalendarTodayIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarTodayIcon = svg(
  svg('path', {
    d: 'M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 18H4V8h16z',
  }),
  'CalendarToday',
);
export const CalendarTodayOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CalendarTodayOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarTodayOutlinedIcon = svg(
  svg('path', {
    d: 'M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 18H4V10h16zm0-13H4V5h16z',
  }),
  'CalendarTodayOutlined',
);
export const CalendarTodayRoundedIcon = (props?: KTRawAttr) => {
  const s = _CalendarTodayRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarTodayRoundedIcon = svg(
  svg('path', {
    d: 'M20 3h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1H7V2c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 18H5c-.55 0-1-.45-1-1V8h16v12c0 .55-.45 1-1 1',
  }),
  'CalendarTodayRounded',
);
export const CalendarTodaySharpIcon = (props?: KTRawAttr) => {
  const s = _CalendarTodaySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarTodaySharpIcon = svg(
  svg('path', { d: 'M22 3h-3V1h-2v2H7V1H5v2H2v20h20zm-2 18H4V8h16z' }),
  'CalendarTodaySharp',
);
export const CalendarTodayTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CalendarTodayTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarTodayTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v3H4V5zM4 21V10h16v11z',
      },
      '0',
    ),
    svg('path', { d: 'M4 5.01h16V8H4z', opacity: '.3' }, '1'),
  ],
  'CalendarTodayTwoTone',
);
export const CalendarViewDayIcon = (props?: KTRawAttr) => {
  const s = _CalendarViewDayIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarViewDayIcon = svg(svg('path', { d: 'M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z' }), 'CalendarViewDay');
export const CalendarViewDayOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CalendarViewDayOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarViewDayOutlinedIcon = svg(
  svg('path', { d: 'M3 17h18v2H3zm16-5v1H5v-1zm2-2H3v5h18zM3 6h18v2H3z' }),
  'CalendarViewDayOutlined',
);
export const CalendarViewDayRoundedIcon = (props?: KTRawAttr) => {
  const s = _CalendarViewDayRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarViewDayRoundedIcon = svg(
  svg('path', {
    d: 'M5 7h14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2M4 3h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1m0 16h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1',
  }),
  'CalendarViewDayRounded',
);
export const CalendarViewDaySharpIcon = (props?: KTRawAttr) => {
  const s = _CalendarViewDaySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarViewDaySharpIcon = svg(
  svg('path', { d: 'M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z' }),
  'CalendarViewDaySharp',
);
export const CalendarViewDayTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CalendarViewDayTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarViewDayTwoToneIcon = svg(
  [
    svg('path', { d: 'M3 17h18v2H3zm16-5v1H5v-1zm2-2H3v5h18zM3 6h18v2H3z' }, '0'),
    svg('path', { d: 'M5 12h14v1H5z', opacity: '.3' }, '1'),
  ],
  'CalendarViewDayTwoTone',
);
export const CalendarViewMonthIcon = (props?: KTRawAttr) => {
  const s = _CalendarViewMonthIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarViewMonthIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M8 11H4V6h4zm6 0h-4V6h4zm6 0h-4V6h4zM8 18H4v-5h4zm6 0h-4v-5h4zm6 0h-4v-5h4z',
  }),
  'CalendarViewMonth',
);
export const CalendarViewMonthOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CalendarViewMonthOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarViewMonthOutlinedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M8 11H4V6h4zm6 0h-4V6h4zm6 0h-4V6h4zM8 18H4v-5h4zm6 0h-4v-5h4zm6 0h-4v-5h4z',
  }),
  'CalendarViewMonthOutlined',
);
export const CalendarViewMonthRoundedIcon = (props?: KTRawAttr) => {
  const s = _CalendarViewMonthRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarViewMonthRoundedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M8 11H4V6h4zm6 0h-4V6h4zm6 0h-4V6h4zM8 18H4v-5h4zm6 0h-4v-5h4zm6 0h-4v-5h4z',
  }),
  'CalendarViewMonthRounded',
);
export const CalendarViewMonthSharpIcon = (props?: KTRawAttr) => {
  const s = _CalendarViewMonthSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarViewMonthSharpIcon = svg(
  svg('path', { d: 'M22 4H2v16h20zM8 11H4V6h4zm6 0h-4V6h4zm6 0h-4V6h4zM8 18H4v-5h4zm6 0h-4v-5h4zm6 0h-4v-5h4z' }),
  'CalendarViewMonthSharp',
);
export const CalendarViewMonthTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CalendarViewMonthTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarViewMonthTwoToneIcon = svg(
  [
    svg('path', { d: 'M4 6h4v5H4zm0 7h4v5H4zm6 0h4v5h-4zm6 0h4v5h-4zm0-7h4v5h-4zm-6 0h4v5h-4z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M8 18H4v-5h4zm0-7H4V6h4zm6 7h-4v-5h4zm0-7h-4V6h4zm6 7h-4v-5h4zm0-7h-4V6h4z',
      },
      '1',
    ),
  ],
  'CalendarViewMonthTwoTone',
);
export const CalendarViewWeekIcon = (props?: KTRawAttr) => {
  const s = _CalendarViewWeekIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarViewWeekIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-7 2h2.5v12H13zm-2 12H8.5V6H11zM4 6h2.5v12H4zm16 12h-2.5V6H20z',
  }),
  'CalendarViewWeek',
);
export const CalendarViewWeekOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CalendarViewWeekOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarViewWeekOutlinedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-7 2h2.5v12H13zm-2 12H8.5V6H11zM4 6h2.5v12H4zm16 12h-2.5V6H20z',
  }),
  'CalendarViewWeekOutlined',
);
export const CalendarViewWeekRoundedIcon = (props?: KTRawAttr) => {
  const s = _CalendarViewWeekRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarViewWeekRoundedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-7 2h2.5v12H13zm-2 12H8.5V6H11zM4 6h2.5v12H4zm16 12h-2.5V6H20z',
  }),
  'CalendarViewWeekRounded',
);
export const CalendarViewWeekSharpIcon = (props?: KTRawAttr) => {
  const s = _CalendarViewWeekSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarViewWeekSharpIcon = svg(
  svg('path', { d: 'M22 4H2v16h20zm-9 2h2.5v12H13zm-2 12H8.5V6H11zM4 6h2.5v12H4zm16 12h-2.5V6H20z' }),
  'CalendarViewWeekSharp',
);
export const CalendarViewWeekTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CalendarViewWeekTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CalendarViewWeekTwoToneIcon = svg(
  [
    svg('path', { d: 'M8.5 6H11v12H8.5zM13 6h2.5v12H13zM4 6h2.5v12H4zm13.5 0H20v12h-2.5z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M6.5 18H4V6h2.5zm4.5 0H8.5V6H11zm4.5 0H13V6h2.5zm4.5 0h-2.5V6H20z',
      },
      '1',
    ),
  ],
  'CalendarViewWeekTwoTone',
);
export const CallIcon = (props?: KTRawAttr) => {
  const s = _CallIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallIcon = svg(
  svg('path', {
    d: 'M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99',
  }),
  'Call',
);
export const CallEndIcon = (props?: KTRawAttr) => {
  const s = _CallEndIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallEndIcon = svg(
  svg('path', {
    d: 'M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7s.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71s-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9',
  }),
  'CallEnd',
);
export const CallEndOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CallEndOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallEndOutlinedIcon = svg(
  svg('path', {
    d: 'M18.59 10.52c1.05.51 2.04 1.15 2.96 1.91l-1.07 1.07c-.58-.47-1.21-.89-1.88-1.27v-1.71m-13.2 0v1.7c-.65.37-1.28.79-1.87 1.27l-1.07-1.07c.91-.75 1.9-1.38 2.94-1.9M12 7C7.46 7 3.34 8.78.29 11.67c-.18.18-.29.43-.29.71s.11.53.29.7l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.1.7-.28.79-.73 1.68-1.36 2.66-1.85.33-.16.56-.51.56-.9v-3.1C8.85 9.25 10.4 9 12 9s3.15.25 4.59.73v3.1c0 .4.23.74.56.9.98.49 1.88 1.11 2.67 1.85.18.17.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.11-.53-.29-.71C20.66 8.78 16.54 7 12 7',
  }),
  'CallEndOutlined',
);
export const CallEndRoundedIcon = (props?: KTRawAttr) => {
  const s = _CallEndRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallEndRoundedIcon = svg(
  svg('path', {
    d: 'm4.51 15.48 2-1.59c.48-.38.76-.96.76-1.57v-2.6c3.02-.98 6.29-.99 9.32 0v2.61c0 .61.28 1.19.76 1.57l1.99 1.58c.8.63 1.94.57 2.66-.15l1.22-1.22c.8-.8.8-2.13-.05-2.88-6.41-5.66-16.07-5.66-22.48 0-.85.75-.85 2.08-.05 2.88l1.22 1.22c.71.72 1.85.78 2.65.15',
  }),
  'CallEndRounded',
);
export const CallEndSharpIcon = (props?: KTRawAttr) => {
  const s = _CallEndSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallEndSharpIcon = svg(
  svg('path', {
    d: 'm3.68 16.07 3.92-3.11V9.59c2.85-.93 5.94-.93 8.8 0v3.38l3.91 3.1L24 12.39c-6.41-7.19-17.59-7.19-24 0z',
  }),
  'CallEndSharp',
);
export const CallEndTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CallEndTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallEndTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M18.59 12.23c.67.38 1.3.8 1.88 1.27l1.07-1.07c-.92-.75-1.91-1.39-2.96-1.91v1.71zM3.53 13.49c.59-.48 1.22-.9 1.87-1.27v-1.7c-1.04.51-2.03 1.15-2.94 1.9z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 7C7.46 7 3.34 8.78.29 11.67c-.18.18-.29.43-.29.71s.11.53.29.7l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.1.7-.28.79-.73 1.68-1.36 2.66-1.85.33-.16.56-.51.56-.9v-3.1C8.85 9.25 10.4 9 12 9s3.15.25 4.59.73v3.1c0 .4.23.74.56.9.98.49 1.88 1.11 2.67 1.85.18.17.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.11-.53-.29-.71C20.66 8.78 16.54 7 12 7m-6.6 5.22c-.65.37-1.28.79-1.87 1.27l-1.07-1.07c.91-.75 1.9-1.38 2.94-1.9zm15.07 1.28c-.58-.47-1.21-.89-1.88-1.27v-1.71c1.05.51 2.04 1.15 2.96 1.91z',
      },
      '1',
    ),
  ],
  'CallEndTwoTone',
);
export const CallMadeIcon = (props?: KTRawAttr) => {
  const s = _CallMadeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMadeIcon = svg(svg('path', { d: 'M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z' }), 'CallMade');
export const CallMadeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CallMadeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMadeOutlinedIcon = svg(
  svg('path', { d: 'M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z' }),
  'CallMadeOutlined',
);
export const CallMadeRoundedIcon = (props?: KTRawAttr) => {
  const s = _CallMadeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMadeRoundedIcon = svg(
  svg('path', {
    d: 'M9 6c0 .56.45 1 1 1h5.59L4.7 17.89c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L17 8.41V14c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1',
  }),
  'CallMadeRounded',
);
export const CallMadeSharpIcon = (props?: KTRawAttr) => {
  const s = _CallMadeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMadeSharpIcon = svg(
  svg('path', { d: 'M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z' }),
  'CallMadeSharp',
);
export const CallMadeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CallMadeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMadeTwoToneIcon = svg(
  svg('path', { d: 'M5.41 20 17 8.41V15h2V5H9v2h6.59L4 18.59z' }),
  'CallMadeTwoTone',
);
export const CallMergeIcon = (props?: KTRawAttr) => {
  const s = _CallMergeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMergeIcon = svg(
  svg('path', { d: 'M17 20.41 18.41 19 15 15.59 13.59 17zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5z' }),
  'CallMerge',
);
export const CallMergeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CallMergeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMergeOutlinedIcon = svg(
  svg('path', { d: 'M17 20.41 18.41 19 15 15.59 13.59 17zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5z' }),
  'CallMergeOutlined',
);
export const CallMergeRoundedIcon = (props?: KTRawAttr) => {
  const s = _CallMergeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMergeRoundedIcon = svg(
  svg('path', {
    d: 'M17.7 19.7c.39-.39.39-1.02 0-1.41l-2.7-2.7L13.59 17l2.7 2.7c.39.39 1.03.39 1.41 0M8.71 8H11v5.59l-4.71 4.7c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l5.3-5.3V8h2.29c.45 0 .67-.54.35-.85l-3.29-3.29c-.2-.2-.51-.2-.71 0L8.35 7.15c-.31.31-.09.85.36.85',
  }),
  'CallMergeRounded',
);
export const CallMergeSharpIcon = (props?: KTRawAttr) => {
  const s = _CallMergeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMergeSharpIcon = svg(
  svg('path', { d: 'M17 20.41 18.41 19 15 15.59 13.59 17zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5z' }),
  'CallMergeSharp',
);
export const CallMergeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CallMergeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMergeTwoToneIcon = svg(
  svg('path', { d: 'm16.997 20.41-3.408-3.407 1.4-1.407 3.41 3.408zM5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8H11v5.59z' }),
  'CallMergeTwoTone',
);
export const CallMissedIcon = (props?: KTRawAttr) => {
  const s = _CallMissedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMissedIcon = svg(
  svg('path', { d: 'M19.59 7 12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z' }),
  'CallMissed',
);
export const CallMissedOutgoingIcon = (props?: KTRawAttr) => {
  const s = _CallMissedOutgoingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMissedOutgoingIcon = svg(
  svg('path', { d: 'm3 8.41 9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7z' }),
  'CallMissedOutgoing',
);
export const CallMissedOutgoingOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CallMissedOutgoingOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMissedOutgoingOutlinedIcon = svg(
  svg('path', { d: 'm3 8.41 9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7z' }),
  'CallMissedOutgoingOutlined',
);
export const CallMissedOutgoingRoundedIcon = (props?: KTRawAttr) => {
  const s = _CallMissedOutgoingRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMissedOutgoingRoundedIcon = svg(
  svg('path', {
    d: 'm3.7 9.11 7.59 7.59c.39.39 1.02.39 1.41 0l6.3-6.3V14c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1h3.59L12 14.59 5.11 7.7a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41',
  }),
  'CallMissedOutgoingRounded',
);
export const CallMissedOutgoingSharpIcon = (props?: KTRawAttr) => {
  const s = _CallMissedOutgoingSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMissedOutgoingSharpIcon = svg(
  svg('path', { d: 'm3 8.41 9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7z' }),
  'CallMissedOutgoingSharp',
);
export const CallMissedOutgoingTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CallMissedOutgoingTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMissedOutgoingTwoToneIcon = svg(
  svg('path', { d: 'M19 10.41V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41l9 9z' }),
  'CallMissedOutgoingTwoTone',
);
export const CallMissedOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CallMissedOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMissedOutlinedIcon = svg(
  svg('path', { d: 'M19.59 7 12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z' }),
  'CallMissedOutlined',
);
export const CallMissedRoundedIcon = (props?: KTRawAttr) => {
  const s = _CallMissedRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMissedRoundedIcon = svg(
  svg('path', {
    d: 'M18.89 7.7 12 14.59 6.41 9H10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1v-3.59l6.29 6.29c.39.39 1.02.39 1.41 0l7.59-7.59c.39-.39.39-1.02 0-1.41-.38-.38-1.02-.38-1.4 0',
  }),
  'CallMissedRounded',
);
export const CallMissedSharpIcon = (props?: KTRawAttr) => {
  const s = _CallMissedSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMissedSharpIcon = svg(
  svg('path', { d: 'M19.59 7 12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z' }),
  'CallMissedSharp',
);
export const CallMissedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CallMissedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallMissedTwoToneIcon = svg(
  svg('path', { d: 'm5 10.41 7 7 9-9L19.59 7 12 14.59 6.41 9H11V7H3v8h2z' }),
  'CallMissedTwoTone',
);
export const CallOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CallOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallOutlinedIcon = svg(
  svg('path', {
    d: 'M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1',
  }),
  'CallOutlined',
);
export const CallReceivedIcon = (props?: KTRawAttr) => {
  const s = _CallReceivedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallReceivedIcon = svg(svg('path', { d: 'M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41z' }), 'CallReceived');
export const CallReceivedOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CallReceivedOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallReceivedOutlinedIcon = svg(
  svg('path', { d: 'M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41z' }),
  'CallReceivedOutlined',
);
export const CallReceivedRoundedIcon = (props?: KTRawAttr) => {
  const s = _CallReceivedRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallReceivedRoundedIcon = svg(
  svg('path', {
    d: 'M19.3 4.71a.996.996 0 0 0-1.41 0L7 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1H8.41L19.3 6.11c.38-.38.38-1.02 0-1.4',
  }),
  'CallReceivedRounded',
);
export const CallReceivedSharpIcon = (props?: KTRawAttr) => {
  const s = _CallReceivedSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallReceivedSharpIcon = svg(
  svg('path', { d: 'M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41z' }),
  'CallReceivedSharp',
);
export const CallReceivedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CallReceivedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallReceivedTwoToneIcon = svg(
  svg('path', { d: 'M15 17H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z' }),
  'CallReceivedTwoTone',
);
export const CallRoundedIcon = (props?: KTRawAttr) => {
  const s = _CallRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallRoundedIcon = svg(
  svg('path', {
    d: 'm19.23 15.26-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98',
  }),
  'CallRounded',
);
export const CallSharpIcon = (props?: KTRawAttr) => {
  const s = _CallSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallSharpIcon = svg(
  svg('path', {
    d: 'm21 15.46-5.27-.61-2.52 2.52c-2.83-1.44-5.15-3.75-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z',
  }),
  'CallSharp',
);
export const CallSplitIcon = (props?: KTRawAttr) => {
  const s = _CallSplitIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallSplitIcon = svg(
  svg('path', {
    d: 'm14 4 2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z',
  }),
  'CallSplit',
);
export const CallSplitOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CallSplitOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallSplitOutlinedIcon = svg(
  svg('path', {
    d: 'm14 4 2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z',
  }),
  'CallSplitOutlined',
);
export const CallSplitRoundedIcon = (props?: KTRawAttr) => {
  const s = _CallSplitRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallSplitRoundedIcon = svg(
  svg('path', {
    d: 'm14.85 4.85 1.44 1.44-2.88 2.88 1.42 1.42 2.88-2.88 1.44 1.44c.31.31.85.09.85-.36V4.5c0-.28-.22-.5-.5-.5h-4.29c-.45 0-.67.54-.36.85M8.79 4H4.5c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.35L6.29 7.7 11 12.4V19c0 .55.45 1 1 1s1-.45 1-1v-7c0-.26-.11-.52-.29-.71l-5-5.01 1.44-1.44c.31-.3.09-.84-.36-.84',
  }),
  'CallSplitRounded',
);
export const CallSplitSharpIcon = (props?: KTRawAttr) => {
  const s = _CallSplitSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallSplitSharpIcon = svg(
  svg('path', {
    d: 'm14 4 2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z',
  }),
  'CallSplitSharp',
);
export const CallSplitTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CallSplitTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallSplitTwoToneIcon = svg(
  svg('path', {
    d: 'M20 4h-6l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10zM4 4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3L10 4z',
  }),
  'CallSplitTwoTone',
);
export const CallToActionIcon = (props?: KTRawAttr) => {
  const s = _CallToActionIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallToActionIcon = svg(
  svg('path', { d: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3v-3h18z' }),
  'CallToAction',
);
export const CallToActionOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CallToActionOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallToActionOutlinedIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18zM5 15h14v3H5z',
  }),
  'CallToActionOutlined',
);
export const CallToActionRoundedIcon = (props?: KTRawAttr) => {
  const s = _CallToActionRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallToActionRoundedIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16H4c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1',
  }),
  'CallToActionRounded',
);
export const CallToActionSharpIcon = (props?: KTRawAttr) => {
  const s = _CallToActionSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallToActionSharpIcon = svg(svg('path', { d: 'M23 3H1v18h22zm-2 16H3v-3h18z' }), 'CallToActionSharp');
export const CallToActionTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CallToActionTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallToActionTwoToneIcon = svg(
  [
    svg('path', { d: 'M3 19h18V5H3zm2-4h14v3H5z', opacity: '.3' }, '0'),
    svg(
      'path',
      { d: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18zM5 15h14v3H5z' },
      '1',
    ),
  ],
  'CallToActionTwoTone',
);
export const CallTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CallTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CallTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19 17.47c-.88-.07-1.75-.22-2.6-.45l-1.19 1.19c1.2.41 2.48.67 3.8.75v-1.49zM6.54 5h-1.5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.24-.84-.39-1.71-.45-2.6',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 21c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17m-3.6-3.98c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM5.03 5h1.5c.07.89.22 1.76.46 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79',
      },
      '1',
    ),
  ],
  'CallTwoTone',
);
export const CameraIcon = (props?: KTRawAttr) => {
  const s = _CameraIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraIcon = svg(
  svg('path', {
    d: 'm9.4 10.5 4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2M8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15zm11.27 0-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35z',
  }),
  'Camera',
);
export const CameraAltIcon = (props?: KTRawAttr) => {
  const s = _CameraAltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraAltIcon = svg(
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
  'CameraAlt',
);
export const CameraAltOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CameraAltOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraAltOutlinedIcon = svg(
  svg('path', {
    d: 'M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h4.05l1.83-2h4.24l1.83 2H20zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3',
  }),
  'CameraAltOutlined',
);
export const CameraAltRoundedIcon = (props?: KTRawAttr) => {
  const s = _CameraAltRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraAltRoundedIcon = svg(
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
  'CameraAltRounded',
);
export const CameraAltSharpIcon = (props?: KTRawAttr) => {
  const s = _CameraAltSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraAltSharpIcon = svg(
  [
    svg('circle', { cx: '12', cy: '12', r: '3' }, '0'),
    svg(
      'path',
      { d: 'M16.83 4 15 2H9L7.17 4H2v16h20V4zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5' },
      '1',
    ),
  ],
  'CameraAltSharp',
);
export const CameraAltTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CameraAltTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraAltTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M14.12 4H9.88L8.05 6H4v12h16V6h-4.05zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h4.05l1.83-2h4.24l1.83 2H20zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3',
      },
      '1',
    ),
  ],
  'CameraAltTwoTone',
);
export const CameraEnhanceIcon = (props?: KTRawAttr) => {
  const s = _CameraEnhanceIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraEnhanceIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M9 3 7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5',
      },
      '0',
    ),
    svg('path', { d: 'm12 17 1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z' }, '1'),
  ],
  'CameraEnhance',
);
export const CameraEnhanceOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CameraEnhanceOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraEnhanceOutlinedIcon = svg(
  svg('path', {
    d: 'm12 10-.94 2.06L9 13l2.06.94L12 16l.94-2.06L15 13l-2.06-.94zm8-5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 14H4V7h4.05l.59-.65L9.88 5h4.24l1.24 1.35.59.65H20zM12 8c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3',
  }),
  'CameraEnhanceOutlined',
);
export const CameraEnhanceRoundedIcon = (props?: KTRawAttr) => {
  const s = _CameraEnhanceRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraEnhanceRoundedIcon = svg(
  svg('path', {
    d: 'M20 5h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65H9.88c-.56 0-1.1.24-1.48.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-9-1.25 2.75L8 13l2.75 1.25L12 17l1.25-2.75L16 13l-2.75-1.25z',
  }),
  'CameraEnhanceRounded',
);
export const CameraEnhanceSharpIcon = (props?: KTRawAttr) => {
  const s = _CameraEnhanceSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraEnhanceSharpIcon = svg(
  svg('path', {
    d: 'M16.83 5 15 3H9L7.17 5H2v16h20V5zM12 18c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-9-1.25 2.75L8 13l2.75 1.25L12 17l1.25-2.75L16 13l-2.75-1.25z',
  }),
  'CameraEnhanceSharp',
);
export const CameraEnhanceTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CameraEnhanceTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraEnhanceTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm15.95 7-.59-.65L14.12 5H9.88L8.65 6.35l-.6.65H4v12h16V7zM12 18c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm12 10-.94 2.06L9 13l2.06.94L12 16l.94-2.06L15 13l-2.06-.94zm8-5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 14H4V7h4.05l.59-.65L9.88 5h4.24l1.24 1.35.59.65H20zM12 8c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3',
      },
      '1',
    ),
  ],
  'CameraEnhanceTwoTone',
);
export const CameraFrontIcon = (props?: KTRawAttr) => {
  const s = _CameraFrontIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraFrontIcon = svg(
  svg('path', {
    d: 'M10 20H5v2h5v2l3-3-3-3zm4 0v2h5v-2zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8m5-8H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2M7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5z',
  }),
  'CameraFront',
);
export const CameraFrontOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CameraFrontOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraFrontOutlinedIcon = svg(
  svg('path', {
    d: 'M5 20v2h5v2l3-3-3-3v2zm9 0h5v2h-5zM11.99 8C13.1 8 14 7.1 14 6s-.9-2-2.01-2S10 4.9 10 6s.89 2 1.99 2M17 0H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m0 16H7v-2h10zm0-3.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2h10z',
  }),
  'CameraFrontOutlined',
);
export const CameraFrontRoundedIcon = (props?: KTRawAttr) => {
  const s = _CameraFrontRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraFrontRoundedIcon = svg(
  svg('path', {
    d: 'M17 0H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m0 12.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V3c0-.55.45-1 1-1h8c.55 0 1 .45 1 1zm-6.15 6.35c-.31-.31-.85-.09-.85.36V20H6c-.55 0-1 .45-1 1s.45 1 1 1h4v.79c0 .45.54.67.85.35l1.79-1.79c.2-.2.2-.51 0-.71zM18 20h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8',
  }),
  'CameraFrontRounded',
);
export const CameraFrontSharpIcon = (props?: KTRawAttr) => {
  const s = _CameraFrontSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraFrontSharpIcon = svg(
  svg('path', {
    d: 'M10 20H5v2h5v2l3-3-3-3zm4 0v2h5v-2zM12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8m7-8H5v18h14zM7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5z',
  }),
  'CameraFrontSharp',
);
export const CameraFrontTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CameraFrontTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraFrontTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 14h10v2H7z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M5 20v2h5v2l3-3-3-3v2zm9 0h5v2h-5zM11.99 8C13.1 8 14 7.1 14 6s-.9-2-2.01-2S10 4.9 10 6s.89 2 1.99 2M17 0H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m0 16H7v-2h10zm0-3.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2h10z',
      },
      '1',
    ),
  ],
  'CameraFrontTwoTone',
);
export const CameraIndoorIcon = (props?: KTRawAttr) => {
  const s = _CameraIndoorIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraIndoorIcon = svg(
  svg('path', {
    d: 'M12 3 4 9v12h16V9zm4 13.06L14 15v1c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1l2-1.06z',
  }),
  'CameraIndoor',
);
export const CameraIndoorOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CameraIndoorOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraIndoorOutlinedIcon = svg(
  svg('path', {
    d: 'M14 13v-1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1l2 1.06v-4.12zm-2-7.5 6 4.5v9H6v-9zM12 3 4 9v12h16V9z',
  }),
  'CameraIndoorOutlined',
);
export const CameraIndoorRoundedIcon = (props?: KTRawAttr) => {
  const s = _CameraIndoorRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraIndoorRoundedIcon = svg(
  svg('path', {
    d: 'm10.8 3.65-6 4.5c-.5.38-.8.97-.8 1.6v9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9c0-.63-.3-1.22-.8-1.6l-6-4.5c-.71-.53-1.69-.53-2.4 0m4.47 12.02L14 15v1c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1l1.27-.67c.33-.18.73.06.73.44v2.46c0 .38-.4.62-.73.44',
  }),
  'CameraIndoorRounded',
);
export const CameraIndoorSharpIcon = (props?: KTRawAttr) => {
  const s = _CameraIndoorSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraIndoorSharpIcon = svg(
  svg('path', { d: 'M12 3 4 9v12h16V9zm4 13.06L14 15v2H8v-6h6v2l2-1.06z' }),
  'CameraIndoorSharp',
);
export const CameraIndoorTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CameraIndoorTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraIndoorTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M6 10v9h12v-9l-6-4.5zm8 2v1l2-1.06v4.12L14 15v1c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      { d: 'M8 12v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1l2 1.06v-4.12L14 13v-1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1' },
      '1',
    ),
    svg('path', { d: 'M12 3 4 9v12h16V9zm6 16H6v-9l6-4.5 6 4.5z' }, '2'),
  ],
  'CameraIndoorTwoTone',
);
export const CameraOutdoorIcon = (props?: KTRawAttr) => {
  const s = _CameraOutdoorIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraOutdoorIcon = svg(
  svg('path', {
    d: 'M18 13c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1l2 1.06v-4.12L18 14zM12 3 4 9v12h16v-2H6v-9l6-4.5 6 4.5v1h2V9z',
  }),
  'CameraOutdoor',
);
export const CameraOutdoorOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CameraOutdoorOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraOutdoorOutlinedIcon = svg(
  svg('path', {
    d: 'M18 13c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1l2 1.06v-4.12L18 14zM12 3 4 9v12h16v-2H6v-9l6-4.5 6 4.5v1h2V9z',
  }),
  'CameraOutdoorOutlined',
);
export const CameraOutdoorRoundedIcon = (props?: KTRawAttr) => {
  const s = _CameraOutdoorRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraOutdoorRoundedIcon = svg(
  svg('path', {
    d: 'M18 13c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1l1.27.67c.33.18.73-.06.73-.44v-2.46c0-.38-.4-.62-.73-.44L18 14zm-7.2-9.1-6 4.5c-.5.38-.8.97-.8 1.6v9c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H6v-9l6-4.5 6 4.5v1h2v-1c0-.63-.3-1.22-.8-1.6l-6-4.5c-.71-.53-1.69-.53-2.4 0',
  }),
  'CameraOutdoorRounded',
);
export const CameraOutdoorSharpIcon = (props?: KTRawAttr) => {
  const s = _CameraOutdoorSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraOutdoorSharpIcon = svg(
  svg('path', { d: 'M18 14v-2h-6v6h6v-2l2 1.06v-4.12zM12 3 4 9v12h16v-2H6v-9l6-4.5 6 4.5v1h2V9z' }),
  'CameraOutdoorSharp',
);
export const CameraOutdoorTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CameraOutdoorTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraOutdoorTwoToneIcon = svg(
  svg('path', {
    d: 'M18 13c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1l2 1.06v-4.12L18 14zM12 3 4 9v12h16v-2H6v-9l6-4.5 6 4.5v1h2V9z',
  }),
  'CameraOutdoorTwoTone',
);
export const CameraOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CameraOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraOutlinedIcon = svg(
  svg('path', {
    d: 'm14.25 2.26-.08-.04-.01.02C13.46 2.09 12.74 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-4.75-3.31-8.72-7.75-9.74M19.41 9h-7.99l2.71-4.7c2.4.66 4.35 2.42 5.28 4.7M13.1 4.08 10.27 9l-1.15 2L6.4 6.3C7.84 4.88 9.82 4 12 4c.37 0 .74.03 1.1.08M5.7 7.09 8.54 12l1.15 2H4.26C4.1 13.36 4 12.69 4 12c0-1.85.64-3.55 1.7-4.91M4.59 15h7.98l-2.71 4.7c-2.4-.67-4.34-2.42-5.27-4.7m6.31 4.91L14.89 13l2.72 4.7C16.16 19.12 14.18 20 12 20c-.38 0-.74-.04-1.1-.09m7.4-3-4-6.91h5.43c.17.64.27 1.31.27 2 0 1.85-.64 3.55-1.7 4.91',
  }),
  'CameraOutlined',
);
export const CameraRearIcon = (props?: KTRawAttr) => {
  const s = _CameraRearIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraRearIcon = svg(
  svg('path', {
    d: 'M10 20H5v2h5v2l3-3-3-3zm4 0v2h5v-2zm3-20H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m-5 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6',
  }),
  'CameraRear',
);
export const CameraRearOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CameraRearOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraRearOutlinedIcon = svg(
  svg('path', {
    d: 'M5 20v2h5v2l3-3-3-3v2zm9 0h5v2h-5zm3-20H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m0 16H7V2h10zm-5-9c1.1 0 2-.9 1.99-2 0-1.1-.9-2-2-2S10 3.9 10 5s.89 2 2 2',
  }),
  'CameraRearOutlined',
);
export const CameraRearRoundedIcon = (props?: KTRawAttr) => {
  const s = _CameraRearRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraRearRoundedIcon = svg(
  svg('path', {
    d: 'M10.85 18.85c-.31-.31-.85-.09-.85.36V20H6c-.55 0-1 .45-1 1s.45 1 1 1h4v.79c0 .45.54.67.85.35l1.79-1.79c.2-.2.2-.51 0-.71zM18 20h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1M17 0H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m-5 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6',
  }),
  'CameraRearRounded',
);
export const CameraRearSharpIcon = (props?: KTRawAttr) => {
  const s = _CameraRearSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraRearSharpIcon = svg(
  svg('path', {
    d: 'M10 20H5v2h5v2l3-3-3-3zm4 0v2h5v-2zm5-20H5v18h14zm-7 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6',
  }),
  'CameraRearSharp',
);
export const CameraRearTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CameraRearTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraRearTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M7 16h10V2H7zm4.99-13c1.1 0 2 .9 2 2C14 6.1 13.1 7 12 7c-1.11 0-2-.9-2-2s.89-2 1.99-2', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M5 20v2h5v2l3-3-3-3v2zm9 0h5v2h-5zm5-18c0-1.1-.9-2-2-2H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2zm-2 14H7V2h10zm-5-9c1.1 0 2-.9 1.99-2 0-1.1-.9-2-2-2S10 3.9 10 5s.89 2 2 2',
      },
      '1',
    ),
  ],
  'CameraRearTwoTone',
);
export const CameraRollIcon = (props?: KTRawAttr) => {
  const s = _CameraRollIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraRollIcon = svg(
  svg('path', {
    d: 'M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5zm-2 13h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2z',
  }),
  'CameraRoll',
);
export const CameraRollOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CameraRollOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraRollOutlinedIcon = svg(
  svg('path', {
    d: 'M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5zm6 13h-8v2H4V5h3V3h2v2h3v2h8zM9 15h2v2H9zm0-7h2v2H9zm4 7h2v2h-2zm0-7h2v2h-2zm4 7h2v2h-2zm0-7h2v2h-2z',
  }),
  'CameraRollOutlined',
);
export const CameraRollRoundedIcon = (props?: KTRawAttr) => {
  const s = _CameraRollRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraRollRoundedIcon = svg(
  svg('path', {
    d: 'M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h6c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 13h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2z',
  }),
  'CameraRollRounded',
);
export const CameraRollSharpIcon = (props?: KTRawAttr) => {
  const s = _CameraRollSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraRollSharpIcon = svg(
  svg('path', {
    d: 'M14 5V3h-3V1H5v2H2v19h12v-2h8V5zm-2 13h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2z',
  }),
  'CameraRollSharp',
);
export const CameraRollTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CameraRollTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraRollTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 5H9V3H7v2H4v15h8v-2h8V7h-8zm-1 12H9v-2h2zm0-7H9V8h2zm6-2h2v2h-2zm0 7h2v2h-2zm-4-7h2v2h-2zm0 7h2v2h-2z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5zm6 13h-8v2H4V5h3V3h2v2h3v2h8zM9 15h2v2H9zm0-7h2v2H9zm4 7h2v2h-2zm0-7h2v2h-2zm4 7h2v2h-2zm0-7h2v2h-2z',
      },
      '1',
    ),
  ],
  'CameraRollTwoTone',
);
export const CameraRoundedIcon = (props?: KTRawAttr) => {
  const s = _CameraRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraRoundedIcon = svg(
  svg('path', {
    d: 'M13.81 2.86c.17-.3 0-.7-.35-.74-2.62-.37-5.3.28-7.44 1.86-.19.15-.25.43-.12.65l3.01 5.22c.19.33.67.33.87 0zm7.49 5.47c-.98-2.47-2.92-4.46-5.35-5.5-.23-.1-.5 0-.63.22l-3.01 5.21c-.19.32.05.74.44.74h8.08c.35 0 .6-.35.47-.67m.07 1.67h-6.2c-.38 0-.63.42-.43.75L19 18.14c.17.3.6.35.82.08 1.74-2.18 2.48-5.03 2.05-7.79-.03-.25-.25-.43-.5-.43M4.18 5.79c-1.73 2.19-2.48 5.02-2.05 7.79.03.24.25.42.5.42h6.2c.38 0 .63-.42.43-.75L5 5.87c-.18-.3-.61-.35-.82-.08M2.7 15.67c.98 2.47 2.92 4.46 5.35 5.5.23.1.5 0 .63-.22l3.01-5.21c.19-.33-.05-.75-.43-.75H3.17c-.35.01-.6.36-.47.68m7.83 6.22c2.62.37 5.3-.28 7.44-1.86.2-.15.26-.44.13-.66l-3.01-5.22c-.19-.33-.67-.33-.87 0l-4.04 6.99c-.17.3.01.7.35.75',
  }),
  'CameraRounded',
);
export const CameraSharpIcon = (props?: KTRawAttr) => {
  const s = _CameraSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraSharpIcon = svg(
  svg('path', {
    d: 'm9.4 10.5 4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2M8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15zm11.27 0-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35z',
  }),
  'CameraSharp',
);
export const CameraTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CameraTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M10.9 19.91c.36.05.72.09 1.1.09 2.18 0 4.16-.88 5.61-2.3L14.89 13zm-1.04-.21 2.71-4.7H4.59c.93 2.28 2.87 4.03 5.27 4.7M8.54 12 5.7 7.09C4.64 8.45 4 10.15 4 12c0 .69.1 1.36.26 2h5.43zm9.76 4.91C19.36 15.55 20 13.85 20 12c0-.69-.1-1.36-.26-2h-5.43zM13.73 9h5.68c-.93-2.28-2.88-4.04-5.28-4.7L11.42 9zm-3.46 0 2.83-4.92C12.74 4.03 12.37 4 12 4c-2.18 0-4.16.88-5.6 2.3L9.12 11z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 22c5.52 0 10-4.48 10-10 0-4.75-3.31-8.72-7.75-9.74l-.08-.04-.01.02C13.46 2.09 12.74 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10m0-2c-.38 0-.74-.04-1.1-.09L14.89 13l2.72 4.7C16.16 19.12 14.18 20 12 20m8-8c0 1.85-.64 3.55-1.7 4.91l-4-6.91h5.43c.17.64.27 1.31.27 2m-.59-3h-7.99l2.71-4.7c2.4.66 4.35 2.42 5.28 4.7M12 4c.37 0 .74.03 1.1.08L10.27 9l-1.15 2L6.4 6.3C7.84 4.88 9.82 4 12 4m-8 8c0-1.85.64-3.55 1.7-4.91L8.54 12l1.15 2H4.26C4.1 13.36 4 12.69 4 12m6.27 3h2.3l-2.71 4.7c-2.4-.67-4.35-2.42-5.28-4.7z',
      },
      '1',
    ),
  ],
  'CameraTwoTone',
);
export const CameraswitchIcon = (props?: KTRawAttr) => {
  const s = _CameraswitchIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraswitchIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M16 7h-1l-1-1h-4L9 7H8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m-4 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm8.57.51 4.48 4.48V2.04c4.72.47 8.48 4.23 8.95 8.95h2C23.34 3.02 15.49-1.59 8.57.51m2.38 21.45c-4.72-.47-8.48-4.23-8.95-8.95H0c.66 7.97 8.51 12.58 15.43 10.48l-4.48-4.48z',
      },
      '1',
    ),
  ],
  'Cameraswitch',
);
export const CameraswitchOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CameraswitchOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraswitchOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M16 7h-1l-1-1h-4L9 7H8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 8H8V9h1.83l1-1h2.34l1 1H16z',
      },
      '0',
    ),
    svg('circle', { cx: '12', cy: '12', r: '2' }, '1'),
    svg(
      'path',
      {
        d: 'M8.57.52 13.05 5l1.41-1.41-1.54-1.54C17.7 2.46 21.53 6.24 22 11h2C23.36 3.3 15.79-1.67 8.57.52m.97 19.89 1.54 1.54C6.3 21.54 2.47 17.76 2 13H0c.64 7.7 8.21 12.67 15.43 10.48L10.95 19z',
      },
      '2',
    ),
  ],
  'CameraswitchOutlined',
);
export const CameraswitchRoundedIcon = (props?: KTRawAttr) => {
  const s = _CameraswitchRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraswitchRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M16 7h-1l-1-1h-4L9 7H8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m-4 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M9.45.28c-.4.08-.55.56-.26.84l3.01 3.01c.32.31.85.09.85-.35V2.04c4.45.44 8.06 3.82 8.84 8.17.08.46.5.78.97.78.62 0 1.09-.57.98-1.18C22.61 2.89 15.79-1.12 9.45.28m2.35 19.59c-.32-.32-.85-.09-.85.35v1.74c-4.45-.44-8.06-3.82-8.84-8.17-.08-.46-.5-.78-.97-.78-.62 0-1.09.57-.98 1.18 1.24 6.92 8.06 10.93 14.4 9.53.39-.09.55-.56.26-.85z',
      },
      '1',
    ),
  ],
  'CameraswitchRounded',
);
export const CameraswitchSharpIcon = (props?: KTRawAttr) => {
  const s = _CameraswitchSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraswitchSharpIcon = svg(
  [
    svg('path', { d: 'M14 6h-4L9 7H6v10h12V7h-3zm-2 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2' }, '0'),
    svg(
      'path',
      {
        d: 'm8.57.51 4.48 4.48V2.04c4.72.47 8.48 4.23 8.95 8.95h2C23.34 3.02 15.49-1.59 8.57.51m2.38 21.45c-4.72-.47-8.48-4.23-8.95-8.95H0c.66 7.97 8.51 12.58 15.43 10.48l-4.48-4.48z',
      },
      '1',
    ),
  ],
  'CameraswitchSharp',
);
export const CameraswitchTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CameraswitchTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CameraswitchTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M13.17 8h-2.34l-1 1H8v6h8V9h-1.83zM12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M16 7h-1l-1-1h-4L9 7H8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 8H8V9h1.83l1-1h2.34l1 1H16z',
      },
      '1',
    ),
    svg('circle', { cx: '12', cy: '12', r: '2' }, '2'),
    svg(
      'path',
      {
        d: 'M8.57.52 13.05 5V2.05c4.72.47 8.48 4.23 8.95 8.95h2C23.34 3.03 15.49-1.58 8.57.52m2.38 21.44c-4.72-.47-8.48-4.23-8.95-8.95H0c.66 7.97 8.51 12.58 15.43 10.48l-4.48-4.48z',
      },
      '3',
    ),
  ],
  'CameraswitchTwoTone',
);
export const CampaignIcon = (props?: KTRawAttr) => {
  const s = _CampaignIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CampaignIcon = svg(
  svg('path', {
    d: 'M18 11v2h4v-2zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61M20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4M4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34',
  }),
  'Campaign',
);
export const CampaignOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CampaignOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CampaignOutlinedIcon = svg(
  svg('path', {
    d: 'M18 11v2h4v-2zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61M20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4M4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9zm5.03 1.71L11 9.53v4.94l-1.97-1.18-.48-.29H4v-2h4.55zM15.5 12c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34',
  }),
  'CampaignOutlined',
);
export const CampaignRoundedIcon = (props?: KTRawAttr) => {
  const s = _CampaignRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CampaignRoundedIcon = svg(
  svg('path', {
    d: 'M18 12c0 .55.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1m-1.41 4.82c-.33.44-.24 1.05.2 1.37.53.39 1.09.81 1.62 1.21.44.33 1.06.24 1.38-.2 0-.01.01-.01.01-.02.33-.44.24-1.06-.2-1.38-.53-.4-1.09-.82-1.61-1.21-.44-.33-1.06-.23-1.39.21 0 .01-.01.02-.01.02m3.22-12.01c0-.01-.01-.01-.01-.02-.33-.44-.95-.53-1.38-.2-.53.4-1.1.82-1.62 1.22-.44.33-.52.95-.19 1.38 0 .01.01.01.01.02.33.44.94.53 1.38.2.53-.39 1.09-.82 1.62-1.22.43-.32.51-.94.19-1.38M8 9H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h1l5 3V6zm7.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34',
  }),
  'CampaignRounded',
);
export const CampaignSharpIcon = (props?: KTRawAttr) => {
  const s = _CampaignSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CampaignSharpIcon = svg(
  svg('path', {
    d: 'M18 11v2h4v-2zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61M20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4M8 9H2v6h3v4h2v-4h1l5 3V6zm7.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34',
  }),
  'CampaignSharp',
);
export const CampaignTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CampaignTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CampaignTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M18 11v2h4v-2zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61M20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4M4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9zm5.03 1.71L11 9.53v4.94l-1.97-1.18-.48-.29H4v-2h4.55zM15.5 12c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34',
      },
      '0',
    ),
    svg('path', { d: 'M9.03 10.71 11 9.53v4.94l-1.97-1.18-.48-.29H4v-2h4.55z', opacity: '.3' }, '1'),
  ],
  'CampaignTwoTone',
);
export const CancelIcon = (props?: KTRawAttr) => {
  const s = _CancelIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CancelIcon = svg(
  svg('path', {
    d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z',
  }),
  'Cancel',
);
export const CancelOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CancelOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CancelOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z',
  }),
  'CancelOutlined',
);
export const CancelPresentationIcon = (props?: KTRawAttr) => {
  const s = _CancelPresentationIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CancelPresentationIcon = svg(
  [
    svg(
      'path',
      { d: 'M21 19.1H3V5h18zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2' },
      '0',
    ),
    svg(
      'path',
      { d: 'M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41z' },
      '1',
    ),
  ],
  'CancelPresentation',
);
export const CancelPresentationOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CancelPresentationOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CancelPresentationOutlinedIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18zM9.41 15.95 12 13.36l2.59 2.59L16 14.54l-2.59-2.59L16 9.36l-1.41-1.41L12 10.54 9.41 7.95 8 9.36l2.59 2.59L8 14.54z',
  }),
  'CancelPresentationOutlined',
);
export const CancelPresentationRoundedIcon = (props?: KTRawAttr) => {
  const s = _CancelPresentationRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CancelPresentationRoundedIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 15c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1zm-5.71-9.3a.996.996 0 0 0-1.41 0L12 10.59 10.11 8.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 8.7 13.89c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L12 13.41l1.89 1.89c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L13.41 12l1.89-1.89c.38-.38.38-1.02-.01-1.41',
  }),
  'CancelPresentationRounded',
);
export const CancelPresentationSharpIcon = (props?: KTRawAttr) => {
  const s = _CancelPresentationSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CancelPresentationSharpIcon = svg(
  svg('path', {
    d: 'M1 3v18h22V3zm20 16H3V5h18zM9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59z',
  }),
  'CancelPresentationSharp',
);
export const CancelPresentationTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CancelPresentationTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CancelPresentationTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M3 19.1h18V4.95H3zm5-9.74 1.41-1.41L12 10.54l2.59-2.59L16 9.36l-2.59 2.59L16 14.54l-1.41 1.41L12 13.36l-2.59 2.59L8 14.54l2.59-2.59z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18zM9.41 15.95 12 13.36l2.59 2.59L16 14.54l-2.59-2.59L16 9.36l-1.41-1.41L12 10.54 9.41 7.95 8 9.36l2.59 2.59L8 14.54z',
      },
      '1',
    ),
  ],
  'CancelPresentationTwoTone',
);
export const CancelRoundedIcon = (props?: KTRawAttr) => {
  const s = _CancelRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CancelRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0a.996.996 0 0 1 0-1.41L10.59 12 7.7 9.11a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41',
  }),
  'CancelRounded',
);
export const CancelScheduleSendIcon = (props?: KTRawAttr) => {
  const s = _CancelScheduleSendIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CancelScheduleSendIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M16.5 9c-.42 0-.83.04-1.24.11L1.01 3 1 10l9 2-9 2 .01 7 8.07-3.46C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9m0 13c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm18.27 14.03-1.77 1.76-1.77-1.76-.7.7 1.76 1.77-1.76 1.77.7.7 1.77-1.76 1.77 1.76.7-.7-1.76-1.77 1.76-1.77z',
      },
      '1',
    ),
  ],
  'CancelScheduleSend',
);
export const CancelScheduleSendOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CancelScheduleSendOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CancelScheduleSendOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M16.5 9c-.42 0-.83.04-1.24.11L1.01 3 1 10l10.06 1.34c-.42.44-.78.93-1.09 1.46L1 14l.01 7 8.07-3.46C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9M3 8.25l.01-2.22 7.51 3.22zm6.1 7.11L3 17.97v-2.22l6.17-.82c-.03.14-.05.28-.07.43M16.5 22c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm18.27 14.03-1.77 1.76-1.77-1.76-.7.7 1.76 1.77-1.76 1.77.7.7 1.77-1.76 1.77 1.76.7-.7-1.76-1.77 1.76-1.77z',
      },
      '1',
    ),
  ],
  'CancelScheduleSendOutlined',
);
export const CancelScheduleSendRoundedIcon = (props?: KTRawAttr) => {
  const s = _CancelScheduleSendRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CancelScheduleSendRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M16.5 9c-.42 0-.83.04-1.24.11L2.4 3.6c-.66-.29-1.39.2-1.39.91L1 9.2c0 .47.33.88.78.98L10 12l-8.22 1.83c-.45.1-.78.5-.78.97l.01 4.68c0 .72.73 1.2 1.39.92l6.68-2.86C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9m0 13c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M18.62 14.38c-.2-.2-.51-.2-.71 0l-1.41 1.41-1.41-1.41c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l1.41 1.41-1.41 1.41c-.2.2-.2.51 0 .71s.51.2.71 0l1.41-1.41 1.41 1.41c.2.2.51.2.71 0s.2-.51 0-.71l-1.41-1.41 1.41-1.41c.2-.2.2-.52 0-.71',
      },
      '1',
    ),
  ],
  'CancelScheduleSendRounded',
);
export const CancelScheduleSendSharpIcon = (props?: KTRawAttr) => {
  const s = _CancelScheduleSendSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CancelScheduleSendSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M16.5 9c-.42 0-.83.04-1.24.11L1.01 3 1 10l9 2-9 2 .01 7 8.07-3.46C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9m0 13c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm18.27 14.03-1.77 1.76-1.77-1.76-.7.7 1.76 1.77-1.76 1.77.7.7 1.77-1.76 1.77 1.76.7-.7-1.76-1.77 1.76-1.77z',
      },
      '1',
    ),
  ],
  'CancelScheduleSendSharp',
);
export const CancelScheduleSendTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CancelScheduleSendTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CancelScheduleSendTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm3 17.97 6.1-2.61c.02-.14.04-.29.07-.43L3 15.75zM16.5 11c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5m2.47 7.27-.71.71-1.77-1.77-1.77 1.77-.71-.71 1.77-1.77-1.77-1.77.71-.71 1.77 1.77 1.77-1.77.71.71-1.77 1.77zM3 8.25l7.52 1-7.51-3.22z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M16.5 9c-.42 0-.83.04-1.24.11L1.01 3 1 10l10.06 1.34c-.42.44-.78.93-1.09 1.46L1 14l.01 7 8.07-3.46C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9M3 8.25l.01-2.22 7.51 3.22zm6.1 7.11L3 17.97v-2.22l6.17-.82c-.03.14-.05.28-.07.43M16.5 22c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'm18.27 14.03-1.77 1.76-1.77-1.76-.7.7 1.76 1.77-1.76 1.77.7.7 1.77-1.76 1.77 1.76.7-.7-1.76-1.77 1.76-1.77z',
      },
      '2',
    ),
  ],
  'CancelScheduleSendTwoTone',
);
export const CancelSharpIcon = (props?: KTRawAttr) => {
  const s = _CancelSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CancelSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z',
  }),
  'CancelSharp',
);
export const CancelTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CancelTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CancelTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m5 11.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z',
      },
      '1',
    ),
  ],
  'CancelTwoTone',
);
export const CandlestickChartIcon = (props?: KTRawAttr) => {
  const s = _CandlestickChartIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CandlestickChartIcon = svg(
  svg('path', { d: 'M9 4H7v2H5v12h2v2h2v-2h2V6H9zm10 4h-2V4h-2v4h-2v7h2v5h2v-5h2z' }),
  'CandlestickChart',
);
export const CandlestickChartOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CandlestickChartOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CandlestickChartOutlinedIcon = svg(
  svg('path', { d: 'M9 4H7v2H5v12h2v2h2v-2h2V6H9zm0 12H7V8h2zm10-8h-2V4h-2v4h-2v7h2v5h2v-5h2zm-2 5h-2v-3h2z' }),
  'CandlestickChartOutlined',
);
export const CandlestickChartRoundedIcon = (props?: KTRawAttr) => {
  const s = _CandlestickChartRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CandlestickChartRoundedIcon = svg(
  svg('path', {
    d: 'M8 4c-.55 0-1 .45-1 1v1H6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H9V5c0-.55-.45-1-1-1m10 4h-1V5c0-.55-.45-1-1-1s-1 .45-1 1v3h-1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h1v4c0 .55.45 1 1 1s1-.45 1-1v-4h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1',
  }),
  'CandlestickChartRounded',
);
export const CandlestickChartSharpIcon = (props?: KTRawAttr) => {
  const s = _CandlestickChartSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CandlestickChartSharpIcon = svg(
  svg('path', { d: 'M9 4H7v2H5v12h2v2h2v-2h2V6H9zm10 4h-2V4h-2v4h-2v7h2v5h2v-5h2z' }),
  'CandlestickChartSharp',
);
export const CandlestickChartTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CandlestickChartTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CandlestickChartTwoToneIcon = svg(
  [
    svg('path', { d: 'M9 4H7v2H5v12h2v2h2v-2h2V6H9zm0 12H7V8h2z' }, '0'),
    svg('path', { d: 'M7 8h2v8H7zm8 2h2v3h-2z', opacity: '.3' }, '1'),
    svg('path', { d: 'M19 8h-2V4h-2v4h-2v7h2v5h2v-5h2zm-2 5h-2v-3h2z' }, '2'),
  ],
  'CandlestickChartTwoTone',
);
export const CarCrashIcon = (props?: KTRawAttr) => {
  const s = _CarCrashIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarCrashIcon = svg(
  svg('path', {
    d: 'M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m.5 6h-1V3h1zm0 1v1h-1V8zm-.59 5c.06.16.09.33.09.5 0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-.39.15-.74.39-1.01-1.63-.66-2.96-1.91-3.71-3.49H5.81l1.04-3H11c0-.69.1-1.37.29-2H6.5c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-6.68c-1.05.51-2.16.69-3.09.68M7.5 15c-.83 0-1.5-.67-1.5-1.5S6.67 12 7.5 12s1.5.67 1.5 1.5S8.33 15 7.5 15',
  }),
  'CarCrash',
);
export const CarCrashOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CarCrashOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarCrashOutlinedIcon = svg(
  svg('path', {
    d: 'M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m.5 6h-1V3h1zm0 1v1h-1V8zM6 13.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 15 7.5 15 6 14.33 6 13.5m13-.57c.65-.09 1.34-.28 2-.6V19c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-1H6v1c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-8l2.08-5.99C5.29 4.42 5.84 4 6.5 4h4.79c-.19.63-.29 1.31-.29 2H6.85L5.81 9h5.86c.36.75.84 1.43 1.43 2H5v5h14zm-1.09.07c-.89-.01-1.74-.19-2.53-.51-.23.27-.38.62-.38 1.01 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.18-.03-.34-.09-.5',
  }),
  'CarCrashOutlined',
);
export const CarCrashRoundedIcon = (props?: KTRawAttr) => {
  const s = _CarCrashRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarCrashRoundedIcon = svg(
  svg('path', {
    d: 'M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 6c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m.5 1.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5.22-.5.5-.5.5.22.5.5m1 11.5c.82 0 1.5-.67 1.5-1.5v-6.18c-1.05.51-2.16.69-3.09.68.06.16.09.33.09.5 0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-.39.15-.74.39-1.01-1.63-.66-2.96-1.91-3.71-3.49H5.81l1.04-3H11c0-.69.1-1.37.29-2H6.5c-.66 0-1.21.42-1.42 1.01l-1.97 5.67c-.07.21-.11.43-.11.66v7.16c0 .83.67 1.5 1.5 1.5S6 19.33 6 18.5V18h12v.5c0 .83.68 1.5 1.5 1.5m-12-5c-.83 0-1.5-.67-1.5-1.5S6.67 12 7.5 12s1.5.67 1.5 1.5S8.33 15 7.5 15',
  }),
  'CarCrashRounded',
);
export const CarCrashSharpIcon = (props?: KTRawAttr) => {
  const s = _CarCrashSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarCrashSharpIcon = svg(
  svg('path', {
    d: 'M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m.5 6h-1V3h1zm0 1v1h-1V8zm-.59 5c.06.16.09.33.09.5 0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-.39.15-.74.39-1.01-1.63-.66-2.96-1.91-3.71-3.49H5.81l1.04-3H11c0-.69.1-1.37.29-2H5.41L3 11v9h3v-2h12v2h3v-7.68c-1.05.51-2.16.69-3.09.68M7.5 15c-.83 0-1.5-.67-1.5-1.5S6.67 12 7.5 12s1.5.67 1.5 1.5S8.33 15 7.5 15',
  }),
  'CarCrashSharp',
);
export const CarCrashTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CarCrashTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarCrashTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M17.91 13c.06.16.09.33.09.5 0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-.39.15-.74.39-1-.86-.35-1.63-.86-2.29-1.5H5v5h14v-3.07c-.33.05-.61.07-1.09.07M7.5 15c-.83 0-1.5-.67-1.5-1.5S6.67 12 7.5 12s1.5.67 1.5 1.5S8.33 15 7.5 15',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m.5 6h-1V3h1zm0 1v1h-1V8zM6 13.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 15 7.5 15 6 14.33 6 13.5m13-.57c.65-.09 1.34-.28 2-.6V19c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-1H6v1c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-8l2.08-5.99C5.29 4.42 5.84 4 6.5 4h4.79c-.19.63-.29 1.31-.29 2H6.85L5.81 9h5.86c.36.75.84 1.43 1.43 2H5v5h14zm-1.09.07c-.89-.01-1.74-.19-2.53-.51-.23.27-.38.62-.38 1.01 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-.18-.03-.34-.09-.5',
      },
      '1',
    ),
  ],
  'CarCrashTwoTone',
);
export const CarRentalIcon = (props?: KTRawAttr) => {
  const s = _CarRentalIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarRentalIcon = svg(
  svg('path', {
    d: 'M16.39 9H7.61c-.43 0-.81.28-.95.68l-1.66 5v6.81c0 .29.23.51.5.51h1c.28 0 .5-.22.5-.5V20h10v1.5c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5v-6.81l-1.66-5c-.14-.41-.52-.69-.95-.69m-8.61 9c-.68 0-1.22-.54-1.22-1.22s.54-1.22 1.22-1.22S9 16.11 9 16.78 8.46 18 7.78 18m8.44 0c-.67 0-1.22-.54-1.22-1.22s.54-1.22 1.22-1.22 1.22.54 1.22 1.22S16.9 18 16.22 18m-9.93-4 1.33-4h8.78l1.33 4zm4.54-11C10.41 1.83 9.3 1 8 1 6.34 1 5 2.34 5 4c0 1.65 1.34 3 3 3 1.3 0 2.41-.84 2.83-2H16v2h2V5h1V3zM8 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'CarRental',
);
export const CarRentalOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CarRentalOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarRentalOutlinedIcon = svg(
  [
    svg('circle', { cx: '9', cy: '16.5', r: '1' }, '0'),
    svg('circle', { cx: '15', cy: '16.5', r: '1' }, '1'),
    svg(
      'path',
      {
        d: 'M17.25 9.6c-.02-.02-.03-.04-.05-.07-.38-.52-.92-.53-.92-.53H7.72s-.54.01-.92.54c-.02.02-.03.04-.05.06-.07.11-.14.24-.19.4-.22.66-.74 2.22-1.56 4.69v6.5c0 .45.35.81.78.81h.44c.43 0 .78-.36.78-.81V20h10v1.19c0 .45.34.81.78.81h.44c.43 0 .78-.36.78-.81v-6.5c-.82-2.46-1.34-4.03-1.56-4.69-.05-.16-.12-.29-.19-.4M8.33 11h7.34l.23.69.43 1.31H7.67zM17 18H7v-3h10zM10.83 3C10.41 1.83 9.3 1 8 1 6.34 1 5 2.34 5 4c0 1.65 1.34 3 3 3 1.3 0 2.41-.84 2.83-2H16v2h2V5h1V3zM8 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
      },
      '2',
    ),
  ],
  'CarRentalOutlined',
);
export const CarRentalRoundedIcon = (props?: KTRawAttr) => {
  const s = _CarRentalRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarRentalRoundedIcon = svg(
  svg('path', {
    d: 'M8 7c1.3 0 2.41-.84 2.83-2H16v1c0 .55.45 1 1 1s1-.45 1-1V5c.55 0 1-.45 1-1s-.45-1-1-1h-7.17C10.35 1.65 8.95.76 7.4 1.06c-1.17.23-2.12 1.19-2.35 2.36C4.7 5.32 6.15 7 8 7m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m8.39 6H7.61c-.43 0-.81.28-.95.68L5 14.69V21c0 .55.45 1 1 1s1-.45 1-1v-1h10v1c0 .55.45 1 1 1s1-.45 1-1v-6.31l-1.66-5.01c-.14-.4-.52-.68-.95-.68M9 17.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M7.67 13l.66-2h7.34l.66 2z',
  }),
  'CarRentalRounded',
);
export const CarRentalSharpIcon = (props?: KTRawAttr) => {
  const s = _CarRentalSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarRentalSharpIcon = svg(
  svg('path', {
    d: 'M10.83 3C10.41 1.83 9.3 1 8 1 6.34 1 5 2.34 5 4c0 1.65 1.34 3 3 3 1.3 0 2.41-.84 2.83-2H16v2h2V5h1V3zM8 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m9.11 4H6.89L5 14.69V22h2v-2h10v2h2v-7.31zM9 17.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M7.67 13l.66-2h7.34l.66 2z',
  }),
  'CarRentalSharp',
);
export const CarRentalTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CarRentalTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarRentalTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M7 15.01V18h10v-3H7zm8 .49c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
        opacity: '.3',
      },
      '0',
    ),
    svg('circle', { cx: '9', cy: '16.5', r: '1' }, '1'),
    svg('circle', { cx: '15', cy: '16.5', r: '1' }, '2'),
    svg(
      'path',
      {
        d: 'M17.25 9.6c-.02-.02-.03-.04-.05-.07-.38-.52-.92-.53-.92-.53H7.72s-.54.01-.92.54c-.02.02-.03.04-.05.06-.07.11-.14.24-.19.4-.22.66-.74 2.22-1.56 4.69v6.5c0 .45.35.81.78.81h.44c.43 0 .78-.36.78-.81V20h10v1.19c0 .45.34.81.78.81h.44c.43 0 .78-.36.78-.81v-6.5c-.82-2.46-1.34-4.03-1.56-4.69-.05-.16-.12-.29-.19-.4M8.33 11h7.34l.23.69.43 1.31H7.67zM17 15.01V18H7v-3h10zM10.83 3C10.41 1.83 9.3 1 8 1 6.34 1 5 2.34 5 4c0 1.65 1.34 3 3 3 1.3 0 2.41-.84 2.83-2H16v2h2V5h1V3zM8 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
      },
      '3',
    ),
  ],
  'CarRentalTwoTone',
);
export const CarRepairIcon = (props?: KTRawAttr) => {
  const s = _CarRepairIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarRepairIcon = svg(
  svg('path', {
    d: 'M16.22 12c.68 0 1.22-.54 1.22-1.22 0-.67-.54-1.22-1.22-1.22S15 10.11 15 10.78c0 .68.55 1.22 1.22 1.22m-9.66-1.22c0 .67.54 1.22 1.22 1.22S9 11.46 9 10.78c0-.67-.54-1.22-1.22-1.22s-1.22.55-1.22 1.22M7.61 4 6.28 8h11.43l-1.33-4zm8.67-1s.54.01.92.54c.02.02.03.04.05.07.07.11.14.24.19.4.22.65 1.56 4.68 1.56 4.68v6.5c0 .45-.35.81-.78.81h-.44c-.43 0-.78-.36-.78-.81V14H7v1.19c0 .45-.35.81-.78.81h-.44c-.43 0-.78-.36-.78-.81v-6.5S6.34 4.67 6.55 4c.05-.16.12-.28.19-.4.03-.02.04-.04.06-.06.38-.53.92-.54.92-.54zM4 17.01h16V19h-7v3h-2v-3H4z',
  }),
  'CarRepair',
);
export const CarRepairOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CarRepairOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarRepairOutlinedIcon = svg(
  [
    svg('circle', { cx: '9', cy: '10.5', r: '1' }, '0'),
    svg('circle', { cx: '15', cy: '10.5', r: '1' }, '1'),
    svg(
      'path',
      {
        d: 'M5.78 16h.44c.43 0 .78-.36.78-.81V14h10v1.19c0 .45.34.81.78.81h.44c.43 0 .78-.36.78-.81v-6.5S17.66 4.66 17.44 4c-.05-.16-.12-.29-.19-.4-.02-.02-.03-.04-.05-.07-.38-.52-.92-.53-.92-.53H7.72s-.54.01-.92.54c-.02.02-.03.04-.05.06-.07.11-.14.24-.19.4C6.34 4.66 5 8.69 5 8.69v6.5c0 .45.35.81.78.81M8.33 5h7.34l.23.69.43 1.31H7.67zM7 9.01V9h10v3H7zm-3 8V19h7v3h2v-3h7v-1.99z',
      },
      '2',
    ),
  ],
  'CarRepairOutlined',
);
export const CarRepairRoundedIcon = (props?: KTRawAttr) => {
  const s = _CarRepairRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarRepairRoundedIcon = svg(
  svg('path', {
    d: 'M7 15v-1h10v1c0 .55.45 1 1 1s1-.45 1-1V8.69S17.66 4.66 17.44 4c-.05-.16-.12-.29-.19-.4-.02-.02-.03-.04-.05-.07-.38-.52-.92-.53-.92-.53H7.72s-.54.01-.92.54c-.02.02-.03.04-.05.06-.07.11-.14.24-.19.4C6.34 4.66 5 8.69 5 8.69V15c0 .55.45 1 1 1s1-.45 1-1m2-3.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M8.33 5h7.34l.23.69.43 1.31H7.67zM4 18.01c0 .54.45.99.99.99H11v2.01c0 .55.45.99.99.99H12c.55 0 .99-.45.99-.99V19H19c.55 0 .99-.45.99-.99 0-.55-.45-.99-.99-.99H4.99c-.54-.01-.99.44-.99.99',
  }),
  'CarRepairRounded',
);
export const CarRepairSharpIcon = (props?: KTRawAttr) => {
  const s = _CarRepairSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarRepairSharpIcon = svg(
  svg('path', {
    d: 'M4 17.01V19h7v3h2v-3h7v-1.99zM7 14h10v2h2V8.69L17.11 3H6.89L5 8.69V16h2zm2-2.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M8.33 5h7.34l.66 2H7.67z',
  }),
  'CarRepairSharp',
);
export const CarRepairTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CarRepairTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarRepairTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M17 9.01V9H7v3h10zM9 11.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
        opacity: '.3',
      },
      '0',
    ),
    svg('circle', { cx: '9', cy: '10.5', r: '1' }, '1'),
    svg('circle', { cx: '15', cy: '10.5', r: '1' }, '2'),
    svg(
      'path',
      {
        d: 'M5.78 16h.44c.43 0 .78-.36.78-.81V14h10v1.19c0 .45.34.81.78.81h.44c.43 0 .78-.36.78-.81v-6.5S17.66 4.66 17.44 4c-.05-.16-.12-.29-.19-.4-.02-.02-.03-.04-.05-.07-.38-.52-.92-.53-.92-.53H7.72s-.54.01-.92.54c-.02.02-.03.04-.05.06-.07.11-.14.24-.19.4C6.34 4.66 5 8.69 5 8.69v6.5c0 .45.35.81.78.81M8.33 5h7.34l.23.69.43 1.31H7.67zM7 9.01V9h10v3H7zm-3 8V19h7v3h2v-3h7v-1.99z',
      },
      '3',
    ),
  ],
  'CarRepairTwoTone',
);
export const CardGiftcardIcon = (props?: KTRawAttr) => {
  const s = _CardGiftcardIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CardGiftcardIcon = svg(
  svg('path', {
    d: 'M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m11 15H4v-2h16zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20z',
  }),
  'CardGiftcard',
);
export const CardGiftcardOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CardGiftcardOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CardGiftcardOutlinedIcon = svg(
  svg('path', {
    d: 'M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m11 15H4v-2h16zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20z',
  }),
  'CardGiftcardOutlined',
);
export const CardGiftcardRoundedIcon = (props?: KTRawAttr) => {
  const s = _CardGiftcardRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CardGiftcardRoundedIcon = svg(
  svg('path', {
    d: 'M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m11 15H4v-2h16zm0-5H4V9c0-.55.45-1 1-1h4.08L7.6 10.02c-.33.45-.23 1.08.22 1.4.44.32 1.07.22 1.39-.22L12 7.4l2.79 3.8c.32.44.95.54 1.39.22.45-.32.55-.95.22-1.4L14.92 8H19c.55 0 1 .45 1 1z',
  }),
  'CardGiftcardRounded',
);
export const CardGiftcardSharpIcon = (props?: KTRawAttr) => {
  const s = _CardGiftcardSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CardGiftcardSharpIcon = svg(
  svg('path', {
    d: 'M22 6h-4.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H2.01v15H22zm-7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m11 15H4v-2h16zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20z',
  }),
  'CardGiftcardSharp',
);
export const CardGiftcardTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CardGiftcardTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CardGiftcardTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M4 17h16v2H4zm13-6.17L15.38 12 12 7.4 8.62 12 7 10.83 9.08 8H4v6h16V8h-5.08z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m11 15H4v-2h16zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20z',
      },
      '1',
    ),
  ],
  'CardGiftcardTwoTone',
);
export const CardMembershipIcon = (props?: KTRawAttr) => {
  const s = _CardMembershipIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CardMembershipIcon = svg(
  svg('path', {
    d: 'M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2m0 13H4v-2h16zm0-5H4V4h16z',
  }),
  'CardMembership',
);
export const CardMembershipOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CardMembershipOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CardMembershipOutlinedIcon = svg(
  svg('path', {
    d: 'M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2m0 13H4v-2h16zm0-5H4V4h16z',
  }),
  'CardMembershipOutlined',
);
export const CardMembershipRoundedIcon = (props?: KTRawAttr) => {
  const s = _CardMembershipRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CardMembershipRoundedIcon = svg(
  svg('path', {
    d: 'M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2m0 13H4v-2h16zm0-5H4V5c0-.55.45-1 1-1h14c.55 0 1 .45 1 1z',
  }),
  'CardMembershipRounded',
);
export const CardMembershipSharpIcon = (props?: KTRawAttr) => {
  const s = _CardMembershipSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CardMembershipSharpIcon = svg(
  svg('path', { d: 'M22 2H2v15h6v5l4-2 4 2v-5h6zm-2 13H4v-2h16zm0-5H4V4h16z' }),
  'CardMembershipSharp',
);
export const CardMembershipTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CardMembershipTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CardMembershipTwoToneIcon = svg(
  [
    svg('path', { d: 'M4 4h16v6H4zm0 9h16v2H4z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2m0 13H4v-2h16zm0-5H4V4h16z',
      },
      '1',
    ),
  ],
  'CardMembershipTwoTone',
);
export const CardTravelIcon = (props?: KTRawAttr) => {
  const s = _CardTravelIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CardTravelIcon = svg(
  svg('path', {
    d: 'M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2M9 4h6v2H9zm11 15H4v-2h16zm0-5H4V8h3v2h2V8h6v2h2V8h3z',
  }),
  'CardTravel',
);
export const CardTravelOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CardTravelOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CardTravelOutlinedIcon = svg(
  svg('path', {
    d: 'M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2M9 4h6v2H9zm11 15H4v-2h16zm0-5H4V8h3v2h2V8h6v2h2V8h3z',
  }),
  'CardTravelOutlined',
);
export const CardTravelRoundedIcon = (props?: KTRawAttr) => {
  const s = _CardTravelRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CardTravelRoundedIcon = svg(
  svg('path', {
    d: 'M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2M9 4h6v2H9zm11 15H4v-2h16zm0-5H4V9c0-.55.45-1 1-1h2v1c0 .55.45 1 1 1s1-.45 1-1V8h6v1c0 .55.45 1 1 1s1-.45 1-1V8h2c.55 0 1 .45 1 1z',
  }),
  'CardTravelRounded',
);
export const CardTravelSharpIcon = (props?: KTRawAttr) => {
  const s = _CardTravelSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CardTravelSharpIcon = svg(
  svg('path', {
    d: 'M22 6h-5V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v15h20zM9 4h6v2H9zm11 15H4v-2h16zm0-5H4V8h3v2h2V8h6v2h2V8h3z',
  }),
  'CardTravelSharp',
);
export const CardTravelTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CardTravelTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CardTravelTwoToneIcon = svg(
  [
    svg('path', { d: 'M4 17h16v2H4zm13-7h-2V8H9v2H7V8H4v6h16V8h-3z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2M9 4h6v2H9zm11 15H4v-2h16zm0-5H4V8h3v2h2V8h6v2h2V8h3z',
      },
      '1',
    ),
  ],
  'CardTravelTwoTone',
);
export const CarpenterIcon = (props?: KTRawAttr) => {
  const s = _CarpenterIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarpenterIcon = svg(
  svg('path', {
    d: 'M19.73 14.23 7 1.5 3.11 5.39l8.13 11.67c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83m-5.66 5.65-1.41-1.41 4.24-4.24 1.41 1.41z',
  }),
  'Carpenter',
);
export const CarpenterOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CarpenterOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarpenterOutlinedIcon = svg(
  svg('path', {
    d: 'M19.73 14.23 7 1.5 3.11 5.39l8.13 11.67c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83M5.71 5.62 7 4.33l8.49 8.49-2.81 2.81zm8.36 14.26-1.41-1.41 4.24-4.24 1.41 1.41z',
  }),
  'CarpenterOutlined',
);
export const CarpenterRoundedIcon = (props?: KTRawAttr) => {
  const s = _CarpenterRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarpenterRoundedIcon = svg(
  svg('path', {
    d: 'M19.73 14.23 7.71 2.21a.996.996 0 0 0-1.41 0L3.7 4.8c-.34.34-.39.88-.11 1.28l7.65 10.98c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83m-5.66 5.65-1.41-1.41 4.24-4.24 1.41 1.41z',
  }),
  'CarpenterRounded',
);
export const CarpenterSharpIcon = (props?: KTRawAttr) => {
  const s = _CarpenterSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarpenterSharpIcon = svg(
  svg('path', {
    d: 'M7 1.5 3.11 5.39l8.13 11.67-1.41 1.41 4.24 4.24 7.07-7.07zm5.66 16.97 4.24-4.24 1.41 1.41-4.24 4.24z',
  }),
  'CarpenterSharp',
);
export const CarpenterTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CarpenterTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CarpenterTwoToneIcon = svg(
  [
    svg('path', { d: 'M5.71 5.62 7 4.33l8.49 8.49-2.81 2.81z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M19.73 14.23 7 1.5 3.11 5.39l8.13 11.67c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83M5.71 5.62 7 4.33l8.49 8.49-2.81 2.81zm8.36 14.26-1.41-1.41 4.24-4.24 1.41 1.41z',
      },
      '1',
    ),
  ],
  'CarpenterTwoTone',
);
export const CasesIcon = (props?: KTRawAttr) => {
  const s = _CasesIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CasesIcon = svg(
  svg('path', {
    d: 'M3 22q-.825 0-1.4125-.5875T1 20V9h2v11h17v2zm4-4q-.825 0-1.4125-.5875T5 16V5h5V3q0-.825.5875-1.4125T12 1h4q.825 0 1.4125.5875T18 3v2h5v11q0 .825-.5875 1.4125T21 18zm5-13h4V3h-4z',
  }),
  'Cases',
);
export const CasesOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CasesOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CasesOutlinedIcon = svg(
  [
    svg('path', { d: 'M3 9H1v11c0 1.11.89 2 2 2h17v-2H3z' }, '0'),
    svg(
      'path',
      {
        d: 'M18 5V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5zm-6-2h4v2h-4zm9 13H7V7h14z',
      },
      '1',
    ),
  ],
  'CasesOutlined',
);
export const CasesRoundedIcon = (props?: KTRawAttr) => {
  const s = _CasesRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CasesRoundedIcon = svg(
  svg('path', {
    d: 'M18 5V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 0h-4V3h4zM2 9c-.55 0-1 .45-1 1v10c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H3V10c0-.55-.45-1-1-1',
  }),
  'CasesRounded',
);
export const CasesSharpIcon = (props?: KTRawAttr) => {
  const s = _CasesSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CasesSharpIcon = svg(
  svg('path', { d: 'M18 5V1h-8v4H5v13h18V5zm-2 0h-4V3h4zM3 9H1v13h18v-2H3z' }),
  'CasesSharp',
);
export const CasesTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CasesTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CasesTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 7h14v9H7z', opacity: '.3' }, '0'),
    svg('path', { d: 'M3 9H1v11c0 1.11.89 2 2 2h17v-2H3z' }, '1'),
    svg(
      'path',
      {
        d: 'M18 5V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5zm-6-2h4v2h-4zm9 13H7V7h14z',
      },
      '2',
    ),
  ],
  'CasesTwoTone',
);
export const CasinoIcon = (props?: KTRawAttr) => {
  const s = _CasinoIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CasinoIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18m0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9',
  }),
  'Casino',
);
export const CasinoOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CasinoOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CasinoOutlinedIcon = svg(
  [
    svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }, '0'),
    svg('circle', { cx: '7.5', cy: '16.5', r: '1.5' }, '1'),
    svg('circle', { cx: '7.5', cy: '7.5', r: '1.5' }, '2'),
    svg('circle', { cx: '12', cy: '12', r: '1.5' }, '3'),
    svg('circle', { cx: '16.5', cy: '16.5', r: '1.5' }, '4'),
    svg('circle', { cx: '16.5', cy: '7.5', r: '1.5' }, '5'),
  ],
  'CasinoOutlined',
);
export const CasinoRoundedIcon = (props?: KTRawAttr) => {
  const s = _CasinoRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CasinoRoundedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18m0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9',
  }),
  'CasinoRounded',
);
export const CasinoSharpIcon = (props?: KTRawAttr) => {
  const s = _CasinoSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CasinoSharpIcon = svg(
  svg('path', {
    d: 'M21 3H3v18h18zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18m0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9',
  }),
  'CasinoSharp',
);
export const CasinoTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CasinoTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CasinoTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 19h14V5H5zM16.5 6c.83 0 1.5.67 1.5 1.5S17.33 9 16.5 9 15 8.33 15 7.5 15.67 6 16.5 6m0 9c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M7.5 6C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6m0 9c.83 0 1.5.67 1.5 1.5S8.33 18 7.5 18 6 17.33 6 16.5 6.67 15 7.5 15',
        opacity: '.3',
      },
      '0',
    ),
    svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }, '1'),
    svg('circle', { cx: '7.5', cy: '16.5', r: '1.5' }, '2'),
    svg('circle', { cx: '7.5', cy: '7.5', r: '1.5' }, '3'),
    svg('circle', { cx: '12', cy: '12', r: '1.5' }, '4'),
    svg('circle', { cx: '16.5', cy: '16.5', r: '1.5' }, '5'),
    svg('circle', { cx: '16.5', cy: '7.5', r: '1.5' }, '6'),
  ],
  'CasinoTwoTone',
);
export const CastIcon = (props?: KTRawAttr) => {
  const s = _CastIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M1 18v3h3c0-1.66-1.34-3-3-3m0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7m0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11',
  }),
  'Cast',
);
export const CastConnectedIcon = (props?: KTRawAttr) => {
  const s = _CastConnectedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastConnectedIcon = svg(
  svg('path', {
    d: 'M1 18v3h3c0-1.66-1.34-3-3-3m0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7m18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11m20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2',
  }),
  'CastConnected',
);
export const CastConnectedOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CastConnectedOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastConnectedOutlinedIcon = svg(
  svg('path', {
    d: 'M1 18v3h3c0-1.66-1.34-3-3-3m0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7m0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11m20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 7v2h12v6h-3v2h5V7z',
  }),
  'CastConnectedOutlined',
);
export const CastConnectedRoundedIcon = (props?: KTRawAttr) => {
  const s = _CastConnectedRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastConnectedRoundedIcon = svg(
  svg('path', {
    d: 'M19 16V8c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v.63c3.96 1.28 7.09 4.41 8.37 8.37H18c.55 0 1-.45 1-1m2-13H3c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-5c-.55 0-1 .45-1 1s.45 1 1 1h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M1 18v3h3c0-.62-.19-1.2-.51-1.68C2.95 18.52 2.04 18 1 18m1.14-3.91c-.6-.1-1.14.39-1.14 1 0 .49.36.9.85.98 2.08.36 3.72 2 4.08 4.08.08.49.49.85.98.85.61 0 1.09-.54 1-1.14-.48-2.96-2.82-5.29-5.77-5.77m-.04-4.04c-.59-.05-1.1.41-1.1 1 0 .51.38.94.88.99 4.27.41 7.67 3.81 8.08 8.08.05.5.48.87.99.87.6 0 1.06-.52 1-1.11-.53-5.19-4.66-9.31-9.85-9.83',
  }),
  'CastConnectedRounded',
);
export const CastConnectedSharpIcon = (props?: KTRawAttr) => {
  const s = _CastConnectedSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastConnectedSharpIcon = svg(
  svg('path', {
    d: 'M1 18v3h3c0-1.66-1.34-3-3-3m0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7m18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11m22-7H1v5h2V5h18v14h-7v2h9z',
  }),
  'CastConnectedSharp',
);
export const CastConnectedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CastConnectedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastConnectedTwoToneIcon = svg(
  [
    svg('path', { d: 'M17 9H5.95c2.83 1.17 5.15 3.3 6.56 6H17z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M1 18v3h3c0-1.66-1.34-3-3-3m0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7m0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11m20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 7v1.63c.32.1.63.24.95.37H17v6h-4.49c.15.29.29.58.42.88.16.36.31.74.44 1.12H19V7z',
      },
      '1',
    ),
  ],
  'CastConnectedTwoTone',
);
export const CastForEducationIcon = (props?: KTRawAttr) => {
  const s = _CastForEducationIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastForEducationIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M1 18v3h3c0-1.66-1.34-3-3-3m0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7m0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11m10 1.09v2L14.5 15l3.5-1.91v-2L14.5 13zM14.5 6 9 9l5.5 3L20 9z',
  }),
  'CastForEducation',
);
export const CastForEducationOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CastForEducationOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastForEducationOutlinedIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M1 18v3h3c0-1.66-1.34-3-3-3m0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7m0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11m10 1.09v2L14.5 15l3.5-1.91v-2L14.5 13zM14.5 6 9 9l5.5 3L20 9z',
  }),
  'CastForEducationOutlined',
);
export const CastForEducationRoundedIcon = (props?: KTRawAttr) => {
  const s = _CastForEducationRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastForEducationRoundedIcon = svg(
  svg('path', {
    d: 'm19.2 8.56-4.22-2.3c-.3-.16-.66-.16-.96 0L9.8 8.56c-.35.19-.35.69 0 .88l4.22 2.3c.3.16.66.16.96 0l4.22-2.3c.34-.19.34-.69 0-.88M21 3H3c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-5c-.55 0-1 .45-1 1s.45 1 1 1h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6.98 9.74L11 11.09v1.41c0 .37.2.7.52.88l2.5 1.36c.3.16.66.16.96 0l2.5-1.36c.32-.18.52-.52.52-.88v-1.41l-3.02 1.65c-.3.16-.66.16-.96 0M1 18v3h3c0-1.66-1.34-3-3-3m1.14-3.91c-.6-.1-1.14.39-1.14 1 0 .49.36.9.85.98 2.08.36 3.72 2 4.08 4.08.08.49.49.85.98.85.61 0 1.09-.54 1-1.14-.48-2.96-2.82-5.29-5.77-5.77m-.04-4.04c-.59-.05-1.1.41-1.1 1 0 .51.38.94.88.99 4.27.41 7.67 3.81 8.08 8.08.05.5.48.87.99.87.6 0 1.06-.52 1-1.11-.53-5.19-4.66-9.31-9.85-9.83',
  }),
  'CastForEducationRounded',
);
export const CastForEducationSharpIcon = (props?: KTRawAttr) => {
  const s = _CastForEducationSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastForEducationSharpIcon = svg(
  svg('path', {
    d: 'M23 3H1v5h2V5h18v14h-7v2h9zM1 18v3h3c0-1.66-1.34-3-3-3m0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7m0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11m10 1.09v2L14.5 15l3.5-1.91v-2L14.5 13zM14.5 6 9 9l5.5 3L20 9z',
  }),
  'CastForEducationSharp',
);
export const CastForEducationTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CastForEducationTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastForEducationTwoToneIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M1 18v3h3c0-1.66-1.34-3-3-3m0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7m0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11m10 1.09v2L14.5 15l3.5-1.91v-2L14.5 13zM14.5 6 9 9l5.5 3L20 9z',
  }),
  'CastForEducationTwoTone',
);
export const CastOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CastOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastOutlinedIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M1 18v3h3c0-1.66-1.34-3-3-3m0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7m0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11',
  }),
  'CastOutlined',
);
export const CastRoundedIcon = (props?: KTRawAttr) => {
  const s = _CastRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastRoundedIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-5c-.55 0-1 .45-1 1s.45 1 1 1h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M2.14 14.09c-.6-.1-1.14.39-1.14 1 0 .49.36.9.85.98 2.08.36 3.72 2 4.08 4.08.08.49.49.85.98.85.61 0 1.09-.54 1-1.14-.48-2.96-2.82-5.29-5.77-5.77M1 18v3h3c0-1.66-1.34-3-3-3m1.1-7.95c-.59-.05-1.1.41-1.1 1 0 .51.38.94.88.99 4.27.41 7.67 3.81 8.08 8.08.05.5.48.87.99.87.6 0 1.06-.52 1-1.11-.53-5.19-4.66-9.31-9.85-9.83',
  }),
  'CastRounded',
);
export const CastSharpIcon = (props?: KTRawAttr) => {
  const s = _CastSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastSharpIcon = svg(
  svg('path', {
    d: 'M23 3H1v5h2V5h18v14h-7v2h9zM1 18v3h3c0-1.66-1.34-3-3-3m0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7m0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11',
  }),
  'CastSharp',
);
export const CastTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CastTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastTwoToneIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M1 18v3h3c0-1.66-1.34-3-3-3m0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7m0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11',
  }),
  'CastTwoTone',
);
export const CastleIcon = (props?: KTRawAttr) => {
  const s = _CastleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastleIcon = svg(
  svg('path', {
    d: 'M21 9v2h-2V3h-2v2h-2V3h-2v2h-2V3H9v2H7V3H5v8H3V9H1v12h9v-3c0-1.1.9-2 2-2s2 .9 2 2v3h9V9zm-10 3H9V9h2zm4 0h-2V9h2z',
  }),
  'Castle',
);
export const CastleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CastleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastleOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21 9v2h-2V3h-2v2h-2V3h-2v2h-2V3H9v2H7V3H5v8H3V9H1v12h9v-3c0-1.1.9-2 2-2s2 .9 2 2v3h9V9zm0 10h-5v-1c0-2.21-1.79-4-4-4s-4 1.79-4 4v1H3v-6h4V7h10v6h4z',
      },
      '0',
    ),
    svg('path', { d: 'M9 9h2v3H9zm4 0h2v3h-2z' }, '1'),
  ],
  'CastleOutlined',
);
export const CastleRoundedIcon = (props?: KTRawAttr) => {
  const s = _CastleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastleRoundedIcon = svg(
  svg('path', {
    d: 'M22 9c-.55 0-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1H7V4c0-.55-.45-1-1-1s-1 .45-1 1v7H3v-1c0-.55-.45-1-1-1s-1 .45-1 1v9c0 1.1.9 2 2 2h7v-3c0-1.1.9-2 2-2s2 .9 2 2v3h7c1.1 0 2-.9 2-2v-9c0-.55-.45-1-1-1m-11 3H9V9h2zm4 0h-2V9h2z',
  }),
  'CastleRounded',
);
export const CastleSharpIcon = (props?: KTRawAttr) => {
  const s = _CastleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastleSharpIcon = svg(
  svg('path', { d: 'M21 9v2h-2V3h-2v2h-2V3h-2v2h-2V3H9v2H7V3H5v8H3V9H1v12h9v-5h4v5h9V9zm-10 3H9V9h2zm4 0h-2V9h2z' }),
  'CastleSharp',
);
export const CastleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CastleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CastleTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M17 7H7v6H3v6h5v-1c0-2.21 1.79-4 4-4s4 1.79 4 4v1h5v-6h-4zm-6 5H9V9h2zm4 0h-2V9h2z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M21 9v2h-2V3h-2v2h-2V3h-2v2h-2V3H9v2H7V3H5v8H3V9H1v12h9v-3c0-1.1.9-2 2-2s2 .9 2 2v3h9V9zm0 10h-5v-1c0-2.21-1.79-4-4-4s-4 1.79-4 4v1H3v-6h4V7h10v6h4z',
      },
      '1',
    ),
    svg('path', { d: 'M9 9h2v3H9zm4 0h2v3h-2z' }, '2'),
  ],
  'CastleTwoTone',
);
export const CatchingPokemonIcon = (props?: KTRawAttr) => {
  const s = _CatchingPokemonIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CatchingPokemonIcon = svg(
  svg('path', {
    d: 'M14.5 12c0 1.38-1.12 2.5-2.5 2.5S9.5 13.38 9.5 12s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5m7.5 0c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10m-2 0h-4c0-2.21-1.79-4-4-4s-4 1.79-4 4H4c0 4.41 3.59 8 8 8s8-3.59 8-8',
  }),
  'CatchingPokemon',
);
export const CatchingPokemonOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CatchingPokemonOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CatchingPokemonOutlinedIcon = svg(
  svg('path', {
    d: 'M14.5 12c0 1.38-1.12 2.5-2.5 2.5S9.5 13.38 9.5 12s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5m7.5 0c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10m-2 0h-4c0-2.21-1.79-4-4-4s-4 1.79-4 4H4c0 4.41 3.59 8 8 8s8-3.59 8-8',
  }),
  'CatchingPokemonOutlined',
);
export const CatchingPokemonRoundedIcon = (props?: KTRawAttr) => {
  const s = _CatchingPokemonRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CatchingPokemonRoundedIcon = svg(
  svg('path', {
    d: 'M14.5 12c0 1.38-1.12 2.5-2.5 2.5S9.5 13.38 9.5 12s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5m7.5 0c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10m-2 0h-4c0-2.21-1.79-4-4-4s-4 1.79-4 4H4c0 4.41 3.59 8 8 8s8-3.59 8-8',
  }),
  'CatchingPokemonRounded',
);
export const CatchingPokemonSharpIcon = (props?: KTRawAttr) => {
  const s = _CatchingPokemonSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CatchingPokemonSharpIcon = svg(
  svg('path', {
    d: 'M14.5 12c0 1.38-1.12 2.5-2.5 2.5S9.5 13.38 9.5 12s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5m7.5 0c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10m-2 0h-4c0-2.21-1.79-4-4-4s-4 1.79-4 4H4c0 4.41 3.59 8 8 8s8-3.59 8-8',
  }),
  'CatchingPokemonSharp',
);
export const CatchingPokemonTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CatchingPokemonTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CatchingPokemonTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c4.08 0 7.45 3.05 7.94 7h-4.06c-.45-1.73-2.02-3-3.88-3s-3.43 1.27-3.87 3H4.06C4.55 7.05 7.92 4 12 4',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 2c4.08 0 7.45 3.05 7.94 7h-4.06c-.45-1.73-2.02-3-3.88-3s-3.43 1.27-3.87 3H4.06C4.55 7.05 7.92 4 12 4m2 8c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2 8c-4.08 0-7.45-3.05-7.94-7h4.06c.44 1.73 2.01 3 3.87 3s3.43-1.27 3.87-3h4.06c-.47 3.95-3.84 7-7.92 7',
      },
      '1',
    ),
  ],
  'CatchingPokemonTwoTone',
);
export const CategoryIcon = (props?: KTRawAttr) => {
  const s = _CategoryIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CategoryIcon = svg(
  [
    svg('path', { d: 'm12 2-5.5 9h11z' }, '0'),
    svg('circle', { cx: '17.5', cy: '17.5', r: '4.5' }, '1'),
    svg('path', { d: 'M3 13.5h8v8H3z' }, '2'),
  ],
  'Category',
);
export const CategoryOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CategoryOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CategoryOutlinedIcon = svg(
  svg('path', {
    d: 'm12 2-5.5 9h11zm0 3.84L13.93 9h-3.87zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5m0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5M3 21.5h8v-8H3zm2-6h4v4H5z',
  }),
  'CategoryOutlined',
);
export const CategoryRoundedIcon = (props?: KTRawAttr) => {
  const s = _CategoryRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CategoryRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M11.15 3.4 7.43 9.48c-.41.66.07 1.52.85 1.52h7.43c.78 0 1.26-.86.85-1.52L12.85 3.4c-.39-.64-1.31-.64-1.7 0',
      },
      '0',
    ),
    svg('circle', { cx: '17.5', cy: '17.5', r: '4.5' }, '1'),
    svg('path', { d: 'M4 21.5h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1' }, '2'),
  ],
  'CategoryRounded',
);
export const CategorySharpIcon = (props?: KTRawAttr) => {
  const s = _CategorySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CategorySharpIcon = svg(
  [
    svg('path', { d: 'm12 2-5.5 9h11z' }, '0'),
    svg('circle', { cx: '17.5', cy: '17.5', r: '4.5' }, '1'),
    svg('path', { d: 'M3 13.5h8v8H3z' }, '2'),
  ],
  'CategorySharp',
);
export const CategoryTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CategoryTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CategoryTwoToneIcon = svg(
  [
    svg('circle', { cx: '17.5', cy: '17.5', r: '2.5', opacity: '.3' }, '0'),
    svg('path', { d: 'M5 15.5h4v4H5zm7-9.66L10.07 9h3.86z', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'm12 2-5.5 9h11zm0 3.84L13.93 9h-3.87zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5m0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5M11 13.5H3v8h8zm-2 6H5v-4h4z',
      },
      '2',
    ),
  ],
  'CategoryTwoTone',
);
export const CelebrationIcon = (props?: KTRawAttr) => {
  const s = _CelebrationIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CelebrationIcon = svg(
  svg('path', {
    d: 'm2 22 14-5-9-9zm12.53-9.47 5.59-5.59c.49-.49 1.28-.49 1.77 0l.59.59 1.06-1.06-.59-.59c-1.07-1.07-2.82-1.07-3.89 0l-5.59 5.59zm-4.47-5.65-.59.59 1.06 1.06.59-.59c1.07-1.07 1.07-2.82 0-3.89l-.59-.59-1.06 1.07.59.59c.48.48.48 1.28 0 1.76m7 5-1.59 1.59 1.06 1.06 1.59-1.59c.49-.49 1.28-.49 1.77 0l1.61 1.61 1.06-1.06-1.61-1.61c-1.08-1.07-2.82-1.07-3.89 0m-2-6-3.59 3.59 1.06 1.06 3.59-3.59c1.07-1.07 1.07-2.82 0-3.89l-1.59-1.59-1.06 1.06 1.59 1.59c.48.49.48 1.29 0 1.77',
  }),
  'Celebration',
);
export const CelebrationOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CelebrationOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CelebrationOutlinedIcon = svg(
  svg('path', {
    d: 'm2 22 14-5-9-9zm10.35-5.82L5.3 18.7l2.52-7.05zm2.18-3.65 5.59-5.59c.49-.49 1.28-.49 1.77 0l.59.59 1.06-1.06-.59-.59c-1.07-1.07-2.82-1.07-3.89 0l-5.59 5.59zm-4.47-5.65-.59.59 1.06 1.06.59-.59c1.07-1.07 1.07-2.82 0-3.89l-.59-.59-1.06 1.07.59.59c.48.48.48 1.28 0 1.76m7 5-1.59 1.59 1.06 1.06 1.59-1.59c.49-.49 1.28-.49 1.77 0l1.61 1.61 1.06-1.06-1.61-1.61c-1.08-1.07-2.82-1.07-3.89 0m-2-6-3.59 3.59 1.06 1.06 3.59-3.59c1.07-1.07 1.07-2.82 0-3.89l-1.59-1.59-1.06 1.06 1.59 1.59c.48.49.48 1.29 0 1.77',
  }),
  'CelebrationOutlined',
);
export const CelebrationRoundedIcon = (props?: KTRawAttr) => {
  const s = _CelebrationRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CelebrationRoundedIcon = svg(
  svg('path', {
    d: 'm3.99 21.29 9.04-3.23c1.38-.49 1.78-2.26.74-3.3l-4.53-4.53c-1.04-1.04-2.8-.64-3.3.74l-3.23 9.04c-.28.8.48 1.56 1.28 1.28M15.06 12l5.06-5.06c.49-.49 1.28-.49 1.77 0l.06.06c.29.29.77.29 1.06 0s.29-.77 0-1.06l-.06-.06c-1.07-1.07-2.82-1.07-3.89 0L14 10.94c-.29.29-.29.77 0 1.06s.77.29 1.06 0m-5-5.12-.06.06c-.29.29-.29.77 0 1.06s.77.29 1.06 0l.06-.06c1.07-1.07 1.07-2.82 0-3.89L11.07 4c-.3-.3-.78-.3-1.07 0-.29.29-.29.77 0 1.06l.06.06c.48.48.48 1.28 0 1.76m7 5L16 12.94c-.29.29-.29.77 0 1.06s.77.29 1.06 0l1.06-1.06c.49-.49 1.28-.49 1.77 0l1.08 1.08c.29.29.77.29 1.06 0s.29-.77 0-1.06l-1.08-1.08c-1.08-1.07-2.82-1.07-3.89 0m-2-6L12 8.94c-.29.29-.29.77 0 1.06s.77.29 1.06 0l3.06-3.06c1.07-1.07 1.07-2.82 0-3.89l-1.06-1.06c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l1.06 1.06c.48.49.48 1.29 0 1.77',
  }),
  'CelebrationRounded',
);
export const CelebrationSharpIcon = (props?: KTRawAttr) => {
  const s = _CelebrationSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CelebrationSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm2 22 14-5-9-9zm12.53-9.47L21 6.05l1.48 1.48 1.06-1.06L21 3.93l-7.53 7.53zM10.94 6 9.47 7.47l1.06 1.06 2.54-2.54-2.54-2.53-1.06 1.07zm8.03 3.97-3.5 3.5 1.06 1.06L19 12.06l2.5 2.49 1.06-1.06z',
      },
      '0',
    ),
    svg('path', { d: 'm15.97 4.97-4.5 4.5 1.06 1.06L18.07 5l-3.53-3.53-1.06 1.06z' }, '1'),
  ],
  'CelebrationSharp',
);
export const CelebrationTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CelebrationTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CelebrationTwoToneIcon = svg(
  [
    svg('path', { d: 'm12.35 16.18-4.53-4.53L5.3 18.7z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'm2 22 14-5-9-9zm10.35-5.82L5.3 18.7l2.52-7.05zm2.18-3.65 5.59-5.59c.49-.49 1.28-.49 1.77 0l.59.59 1.06-1.06-.59-.59c-1.07-1.07-2.82-1.07-3.89 0l-5.59 5.59zM9.47 7.47l1.06 1.06.59-.59c1.07-1.07 1.07-2.82 0-3.89l-.59-.59-1.06 1.07.59.59c.48.48.48 1.28 0 1.76zm7.59 4.41-1.59 1.59 1.06 1.06 1.59-1.59c.49-.49 1.28-.49 1.77 0l1.61 1.61 1.06-1.06-1.61-1.61c-1.08-1.07-2.82-1.07-3.89 0m-2-6-3.59 3.59 1.06 1.06 3.59-3.59c1.07-1.07 1.07-2.82 0-3.89l-1.59-1.59-1.06 1.06 1.59 1.59c.48.49.48 1.29 0 1.77',
      },
      '1',
    ),
  ],
  'CelebrationTwoTone',
);
export const CellTowerIcon = (props?: KTRawAttr) => {
  const s = _CellTowerIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CellTowerIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm7.3 14.7 1.2-1.2c-1-1-1.5-2.3-1.5-3.5 0-1.3.5-2.6 1.5-3.5L7.3 5.3c-1.3 1.3-2 3-2 4.7s.7 3.4 2 4.7M19.1 2.9l-1.2 1.2c1.6 1.6 2.4 3.8 2.4 5.9s-.8 4.3-2.4 5.9l1.2 1.2c2-2 2.9-4.5 2.9-7.1s-1-5.1-2.9-7.1',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M6.1 4.1 4.9 2.9C3 4.9 2 7.4 2 10s1 5.1 2.9 7.1l1.2-1.2c-1.6-1.6-2.4-3.8-2.4-5.9s.8-4.3 2.4-5.9m10.6 10.6c1.3-1.3 2-3 2-4.7-.1-1.7-.7-3.4-2-4.7l-1.2 1.2c1 1 1.5 2.3 1.5 3.5 0 1.3-.5 2.6-1.5 3.5zM14.5 10c0-1.38-1.12-2.5-2.5-2.5S9.5 8.62 9.5 10c0 .76.34 1.42.87 1.88L7 22h2l.67-2h4.67l.66 2h2l-3.37-10.12c.53-.46.87-1.12.87-1.88m-4.17 8L12 13l1.67 5z',
      },
      '1',
    ),
  ],
  'CellTower',
);
export const CellTowerOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CellTowerOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CellTowerOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm7.3 14.7 1.2-1.2c-1-1-1.5-2.3-1.5-3.5 0-1.3.5-2.6 1.5-3.5L7.3 5.3c-1.3 1.3-2 3-2 4.7s.7 3.4 2 4.7M19.1 2.9l-1.2 1.2c1.6 1.6 2.4 3.8 2.4 5.9s-.8 4.3-2.4 5.9l1.2 1.2c2-2 2.9-4.5 2.9-7.1s-1-5.1-2.9-7.1',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M6.1 4.1 4.9 2.9C3 4.9 2 7.4 2 10s1 5.1 2.9 7.1l1.2-1.2c-1.6-1.6-2.4-3.8-2.4-5.9s.8-4.3 2.4-5.9m10.6 10.6c1.3-1.3 2-3 2-4.7-.1-1.7-.7-3.4-2-4.7l-1.2 1.2c1 1 1.5 2.3 1.5 3.5 0 1.3-.5 2.6-1.5 3.5zM14.5 10c0-1.38-1.12-2.5-2.5-2.5S9.5 8.62 9.5 10c0 .76.34 1.42.87 1.88L7 22h2l.67-2h4.67l.66 2h2l-3.37-10.12c.53-.46.87-1.12.87-1.88m-4.17 8L12 13l1.67 5z',
      },
      '1',
    ),
  ],
  'CellTowerOutlined',
);
export const CellTowerRoundedIcon = (props?: KTRawAttr) => {
  const s = _CellTowerRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CellTowerRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm7.9 14.1.09-.09c.27-.27.32-.71.08-1.01C7.36 12.09 7 11.01 7 10c0-1.08.35-2.16 1.04-3.01.25-.3.21-.75-.07-1.02L7.9 5.9c-.34-.34-.9-.3-1.2.08-.91 1.18-1.4 2.6-1.4 4.02s.49 2.84 1.4 4.02c.3.38.86.42 1.2.08M18.51 3.49l-.08.08c-.3.3-.29.76-.03 1.08 1.26 1.53 1.9 3.48 1.9 5.35s-.63 3.81-1.9 5.35c-.28.33-.23.83.08 1.14.35.35.93.31 1.24-.07C21.29 14.54 22 12.31 22 10c0-2.32-.79-4.55-2.31-6.43-.3-.37-.85-.41-1.18-.08',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm5.57 3.57-.08-.08c-.33-.33-.88-.29-1.18.08C2.79 5.45 2 7.68 2 10s.79 4.55 2.31 6.43c.3.37.85.42 1.18.08l.08-.08c.3-.3.29-.76.03-1.08-1.27-1.54-1.9-3.48-1.9-5.35s.63-3.81 1.9-5.35c.26-.32.27-.78-.03-1.08m10.5 10.5c.36.36.95.32 1.26-.09.9-1.18 1.37-2.58 1.37-3.98-.08-1.41-.51-2.83-1.4-4.01-.29-.39-.86-.43-1.2-.09l-.08.08c-.27.27-.32.71-.08 1.01.7.92 1.06 2 1.06 3.01 0 1.07-.34 2.13-1.01 2.98-.26.32-.22.79.08 1.09M14.5 10c0-1.6-1.51-2.85-3.18-2.41-.8.21-1.46.85-1.7 1.65-.32 1.06.06 2.04.76 2.64l-2.96 8.87c-.21.62.25 1.25.9 1.25.41 0 .77-.26.9-.65L9.67 20h4.67l.45 1.35c.13.39.49.65.9.65.65 0 1.1-.63.9-1.25l-2.96-8.87c.53-.46.87-1.12.87-1.88m-4.17 8L12 13l1.67 5z',
      },
      '1',
    ),
  ],
  'CellTowerRounded',
);
export const CellTowerSharpIcon = (props?: KTRawAttr) => {
  const s = _CellTowerSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CellTowerSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm7.3 14.7 1.2-1.2c-1-1-1.5-2.3-1.5-3.5 0-1.3.5-2.6 1.5-3.5L7.3 5.3c-1.3 1.3-2 3-2 4.7s.7 3.4 2 4.7M19.1 2.9l-1.2 1.2c1.6 1.6 2.4 3.8 2.4 5.9s-.8 4.3-2.4 5.9l1.2 1.2c2-2 2.9-4.5 2.9-7.1s-1-5.1-2.9-7.1',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M6.1 4.1 4.9 2.9C3 4.9 2 7.4 2 10s1 5.1 2.9 7.1l1.2-1.2c-1.6-1.6-2.4-3.8-2.4-5.9s.8-4.3 2.4-5.9m10.6 10.6c1.3-1.3 2-3 2-4.7-.1-1.7-.7-3.4-2-4.7l-1.2 1.2c1 1 1.5 2.3 1.5 3.5 0 1.3-.5 2.6-1.5 3.5zM14.5 10c0-1.38-1.12-2.5-2.5-2.5S9.5 8.62 9.5 10c0 .76.34 1.42.87 1.88L7 22h2l.67-2h4.67l.66 2h2l-3.37-10.12c.53-.46.87-1.12.87-1.88m-4.17 8L12 13l1.67 5z',
      },
      '1',
    ),
  ],
  'CellTowerSharp',
);
export const CellTowerTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CellTowerTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CellTowerTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm7.3 14.7 1.2-1.2c-1-1-1.5-2.3-1.5-3.5 0-1.3.5-2.6 1.5-3.5L7.3 5.3c-1.3 1.3-2 3-2 4.7s.7 3.4 2 4.7M19.1 2.9l-1.2 1.2c1.6 1.6 2.4 3.8 2.4 5.9s-.8 4.3-2.4 5.9l1.2 1.2c2-2 2.9-4.5 2.9-7.1s-1-5.1-2.9-7.1',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M6.1 4.1 4.9 2.9C3 4.9 2 7.4 2 10s1 5.1 2.9 7.1l1.2-1.2c-1.6-1.6-2.4-3.8-2.4-5.9s.8-4.3 2.4-5.9m10.6 10.6c1.3-1.3 2-3 2-4.7-.1-1.7-.7-3.4-2-4.7l-1.2 1.2c1 1 1.5 2.3 1.5 3.5 0 1.3-.5 2.6-1.5 3.5zM14.5 10c0-1.38-1.12-2.5-2.5-2.5S9.5 8.62 9.5 10c0 .76.34 1.42.87 1.88L7 22h2l.67-2h4.67l.66 2h2l-3.37-10.12c.53-.46.87-1.12.87-1.88m-4.17 8L12 13l1.67 5z',
      },
      '1',
    ),
  ],
  'CellTowerTwoTone',
);
export const CellWifiIcon = (props?: KTRawAttr) => {
  const s = _CellWifiIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CellWifiIcon = svg(
  svg('path', {
    d: 'M18 9.98 6 22h16V5.97zM20 20h-2v-7.22l2-2zM5.22 7.22 3.93 5.93c3.9-3.91 10.24-3.91 14.15 0l-1.29 1.29c-3.19-3.19-8.38-3.19-11.57 0m7.71 3.85L11 13l-1.93-1.93c1.07-1.06 2.79-1.06 3.86 0m1.29-1.28c-1.78-1.77-4.66-1.77-6.43 0L6.5 8.5c2.48-2.48 6.52-2.48 9 0z',
  }),
  'CellWifi',
);
export const CellWifiOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CellWifiOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CellWifiOutlinedIcon = svg(
  svg('path', {
    d: 'M6 22h16V5.97zm14-2h-2v-7.22l2-2zM5.22 7.22 3.93 5.93c3.9-3.91 10.24-3.91 14.15 0l-1.29 1.29c-3.19-3.19-8.38-3.19-11.57 0m7.71 3.85L11 13l-1.93-1.93c1.07-1.06 2.79-1.06 3.86 0m1.29-1.28c-1.78-1.77-4.66-1.77-6.43 0L6.5 8.5c2.48-2.48 6.52-2.48 9 0z',
  }),
  'CellWifiOutlined',
);
export const CellWifiRoundedIcon = (props?: KTRawAttr) => {
  const s = _CellWifiRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CellWifiRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20.29 7.68 7.7 20.29c-.63.63-.18 1.71.71 1.71H21c.55 0 1-.45 1-1V8.39c0-.89-1.08-1.34-1.71-.71M20 20h-2v-7.22l2-2zM9.61 10.68c-.28.17-.32.56-.09.79l.82.82c.39.39 1.02.39 1.41 0l.82-.82c.23-.23.18-.62-.09-.79-.87-.54-1.99-.54-2.87 0M8.42 9.3c1.57-1.12 3.7-1.12 5.27 0 .36.26.85.22 1.16-.1.39-.39.35-1.06-.1-1.38-2.2-1.57-5.19-1.57-7.4 0-.45.32-.5.99-.1 1.38.32.32.81.36 1.17.1',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M16.26 6.69c.34.28.83.28 1.14-.03l.12-.12c.35-.35.31-.92-.08-1.24-3.67-3.05-9.02-3.07-12.7-.06-.43.35-.47.99-.08 1.37.32.33.84.37 1.19.08 3.01-2.48 7.4-2.48 10.41 0',
      },
      '1',
    ),
  ],
  'CellWifiRounded',
);
export const CellWifiSharpIcon = (props?: KTRawAttr) => {
  const s = _CellWifiSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CellWifiSharpIcon = svg(
  svg('path', {
    d: 'M6 22h16V5.97zm14-2h-2v-7.22l2-2zM5.22 7.22 3.93 5.93c3.9-3.91 10.24-3.91 14.15 0l-1.29 1.29c-3.19-3.19-8.38-3.19-11.57 0m7.71 3.85L11 13l-1.93-1.93c1.07-1.06 2.79-1.06 3.86 0m1.29-1.28c-1.78-1.77-4.66-1.77-6.43 0L6.5 8.5c2.48-2.48 6.52-2.48 9 0z',
  }),
  'CellWifiSharp',
);
export const CellWifiTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CellWifiTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CellWifiTwoToneIcon = svg(
  svg('path', {
    d: 'M6 22h16V5.97zm14-2h-2v-7.22l2-2zM5.22 7.22 3.93 5.93c3.9-3.91 10.24-3.91 14.15 0l-1.29 1.29c-3.19-3.19-8.38-3.19-11.57 0m7.71 3.85L11 13l-1.93-1.93c1.07-1.06 2.79-1.06 3.86 0m1.29-1.28c-1.78-1.77-4.66-1.77-6.43 0L6.5 8.5c2.48-2.48 6.52-2.48 9 0z',
  }),
  'CellWifiTwoTone',
);
export const CenterFocusStrongIcon = (props?: KTRawAttr) => {
  const s = _CenterFocusStrongIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CenterFocusStrongIcon = svg(
  svg('path', {
    d: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m-7 7H3v4c0 1.1.9 2 2 2h4v-2H5zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2m0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2z',
  }),
  'CenterFocusStrong',
);
export const CenterFocusStrongOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CenterFocusStrongOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CenterFocusStrongOutlinedIcon = svg(
  svg('path', {
    d: 'M17 12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5m-5 3c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3m-7 0H3v4c0 1.1.9 2 2 2h4v-2H5zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2m0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2z',
  }),
  'CenterFocusStrongOutlined',
);
export const CenterFocusStrongRoundedIcon = (props?: KTRawAttr) => {
  const s = _CenterFocusStrongRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CenterFocusStrongRoundedIcon = svg(
  svg('path', {
    d: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m-8 7c-.55 0-1 .45-1 1v3c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1m1-9c0-.55.45-1 1-1h2c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v3c0 .55.45 1 1 1s1-.45 1-1zm14-3h-3c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1 .45 1 1v2c0 .55.45 1 1 1s1-.45 1-1V5c0-1.1-.9-2-2-2m0 15c0 .55-.45 1-1 1h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1s-1 .45-1 1z',
  }),
  'CenterFocusStrongRounded',
);
export const CenterFocusStrongSharpIcon = (props?: KTRawAttr) => {
  const s = _CenterFocusStrongSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CenterFocusStrongSharpIcon = svg(
  svg('path', {
    d: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m-7 7H3v6h6v-2H5zM5 5h4V3H3v6h2zm16-2h-6v2h4v4h2zm-2 16h-4v2h6v-6h-2z',
  }),
  'CenterFocusStrongSharp',
);
export const CenterFocusStrongTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CenterFocusStrongTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CenterFocusStrongTwoToneIcon = svg(
  [
    svg('circle', { cx: '12', cy: '12', r: '3', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M7 12c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5m8 0c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3 3 1.35 3 3M3 19c0 1.1.9 2 2 2h4v-2H5v-4H3zM3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2m18 0c0-1.1-.9-2-2-2h-4v2h4v4h2zm-2 14h-4v2h4c1.1 0 2-.9 2-2v-4h-2z',
      },
      '1',
    ),
  ],
  'CenterFocusStrongTwoTone',
);
export const CenterFocusWeakIcon = (props?: KTRawAttr) => {
  const s = _CenterFocusWeakIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CenterFocusWeakIcon = svg(
  svg('path', {
    d: 'M5 15H3v4c0 1.1.9 2 2 2h4v-2H5zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2m0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
  }),
  'CenterFocusWeak',
);
export const CenterFocusWeakOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CenterFocusWeakOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CenterFocusWeakOutlinedIcon = svg(
  svg('path', {
    d: 'M5 15H3v4c0 1.1.9 2 2 2h4v-2H5zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2zm7 3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m7-11h-4v2h4v4h2V5c0-1.1-.9-2-2-2m0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2z',
  }),
  'CenterFocusWeakOutlined',
);
export const CenterFocusWeakRoundedIcon = (props?: KTRawAttr) => {
  const s = _CenterFocusWeakRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CenterFocusWeakRoundedIcon = svg(
  svg('path', {
    d: 'M4 15c-.55 0-1 .45-1 1v3c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1m1-9c0-.55.45-1 1-1h2c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v3c0 .55.45 1 1 1s1-.45 1-1zm14-3h-3c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1 .45 1 1v2c0 .55.45 1 1 1s1-.45 1-1V5c0-1.1-.9-2-2-2m0 15c0 .55-.45 1-1 1h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1s-1 .45-1 1zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
  }),
  'CenterFocusWeakRounded',
);
export const CenterFocusWeakSharpIcon = (props?: KTRawAttr) => {
  const s = _CenterFocusWeakSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CenterFocusWeakSharpIcon = svg(
  svg('path', {
    d: 'M5 15H3v6h6v-2H5zM5 5h4V3H3v6h2zm16-2h-6v2h4v4h2zm-2 16h-4v2h6v-6h-2zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
  }),
  'CenterFocusWeakSharp',
);
export const CenterFocusWeakTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CenterFocusWeakTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CenterFocusWeakTwoToneIcon = svg(
  [
    svg('path', { d: 'M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M3 19c0 1.1.9 2 2 2h4v-2H5v-4H3zM3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2m9 3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m9-9c0-1.1-.9-2-2-2h-4v2h4v4h2zm-2 14h-4v2h4c1.1 0 2-.9 2-2v-4h-2z',
      },
      '1',
    ),
  ],
  'CenterFocusWeakTwoTone',
);
export const ChairIcon = (props?: KTRawAttr) => {
  const s = _ChairIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChairIcon = svg(
  [
    svg(
      'path',
      { d: 'M7 11v2h10v-2c0-1.86 1.28-3.41 3-3.86V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v1.14c1.72.45 3 2 3 3.86' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M21 9c-1.1 0-2 .9-2 2v4H5v-4c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.1-.9-2-2-2',
      },
      '1',
    ),
  ],
  'Chair',
);
export const ChairAltIcon = (props?: KTRawAttr) => {
  const s = _ChairAltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChairAltIcon = svg(
  svg('path', {
    d: 'M17 10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v2H7c-1.1 0-2 .9-2 2v7h2v-3h10v3h2v-7c0-1.1-.9-2-2-2h-1v-2zM7 8V5h10v3zm10 8H7v-2h10zm-3-4h-4v-2h4z',
  }),
  'ChairAlt',
);
export const ChairAltOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ChairAltOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChairAltOutlinedIcon = svg(
  svg('path', {
    d: 'M17 10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v2H7c-1.1 0-2 .9-2 2v7h2v-3h10v3h2v-7c0-1.1-.9-2-2-2h-1v-2zM7 8V5h10v3zm10 8H7v-2h10zm-3-4h-4v-2h4z',
  }),
  'ChairAltOutlined',
);
export const ChairAltRoundedIcon = (props?: KTRawAttr) => {
  const s = _ChairAltRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChairAltRoundedIcon = svg(
  svg('path', {
    d: 'M17 10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v2H7c-1.1 0-2 .9-2 2v6c0 .55.45 1 1 1s1-.45 1-1v-2h10v2c0 .55.45 1 1 1s1-.45 1-1v-6c0-1.1-.9-2-2-2h-1v-2zM7 8V5h10v3zm10 8H7v-2h10zm-3-4h-4v-2h4z',
  }),
  'ChairAltRounded',
);
export const ChairAltSharpIcon = (props?: KTRawAttr) => {
  const s = _ChairAltSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChairAltSharpIcon = svg(
  svg('path', { d: 'M16 10h3V3H5v7h3v2H5v9h2v-3h10v3h2v-9h-3zM7 8V5h10v3zm10 8H7v-2h10zm-3-4h-4v-2h4z' }),
  'ChairAltSharp',
);
export const ChairAltTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ChairAltTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChairAltTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 14h10v2H7zm0-9h10v3H7z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M17 10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v2H7c-1.1 0-2 .9-2 2v7h2v-3h10v3h2v-7c0-1.1-.9-2-2-2h-1v-2zm0 4v2H7v-2zm-7-2v-2h4v2zM7 8V5h10v3z',
      },
      '1',
    ),
  ],
  'ChairAltTwoTone',
);
export const ChairOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ChairOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChairOutlinedIcon = svg(
  svg('path', {
    d: 'M20 8V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3M6 6c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2H7v-2c0-.88-.39-1.67-1-2.22zm15 10c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h14v-4c0-.55.45-1 1-1s1 .45 1 1z',
  }),
  'ChairOutlined',
);
export const ChairRoundedIcon = (props?: KTRawAttr) => {
  const s = _ChairRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChairRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21 9c-1.1 0-2 .9-2 2v4H5v-4c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.1-.9-2-2-2',
      },
      '0',
    ),
    svg(
      'path',
      { d: 'M7 11v2h10v-2c0-1.86 1.28-3.41 3-3.86V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v1.14c1.72.45 3 2 3 3.86' },
      '1',
    ),
  ],
  'ChairRounded',
);
export const ChairSharpIcon = (props?: KTRawAttr) => {
  const s = _ChairSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChairSharpIcon = svg(
  [
    svg('path', { d: 'M7 13h10V7h3V3H4v4h3z' }, '0'),
    svg('path', { d: 'M23 9h-4v6H5V9H1v10h3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1h3z' }, '1'),
  ],
  'ChairSharp',
);
export const ChairTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ChairTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChairTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M7 13h10v-2c0-.88.39-1.67 1-2.22V6c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v2.78c.61.55 1 1.34 1 2.22z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 10c-.55 0-1 .45-1 1v4H5v-4c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1',
        opacity: '.3',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M20 8V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3M6 6c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2H7v-2c0-.88-.39-1.67-1-2.22zm15 10c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h14v-4c0-.55.45-1 1-1s1 .45 1 1z',
      },
      '2',
    ),
  ],
  'ChairTwoTone',
);
export const ChaletIcon = (props?: KTRawAttr) => {
  const s = _ChaletIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChaletIcon = svg(
  svg('path', {
    d: 'm10 7.5 7.5 7.5-1.41 1.41L15 15.33V20h-4v-5H9v5H5v-4.67l-1.09 1.09L2.5 15zm12-1h-1.19l.75-.75-.71-.71-1.46 1.46h-.89v-.89l1.45-1.45-.71-.71-.74.74V3h-1v1.19l-.75-.75-.71.71 1.45 1.45v.9h-.89l-1.45-1.45-.71.71.75.75H14v1h1.19l-.75.75.71.71 1.45-1.45h.89v.89l-1.45 1.45.71.71.75-.75V11h1V9.81l.75.75.71-.71-1.46-1.46V7.5h.89l1.45 1.45.71-.71-.74-.74H22z',
  }),
  'Chalet',
);
export const ChaletOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ChaletOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChaletOutlinedIcon = svg(
  svg('path', {
    d: 'M17.5 15 10 7.5 2.5 15l1.41 1.41L5 15.33V20h10v-4.67l1.09 1.09zM13 18h-2v-3H9v3H7v-4.67l3-3 3 3zm9-10.5h-1.19l.75.75-.71.71-1.46-1.46h-.89v.89l1.45 1.45-.71.71-.74-.74V11h-1V9.81l-.75.75-.71-.71 1.45-1.45v-.9h-.89l-1.45 1.45-.71-.71.75-.75H14v-1h1.19l-.75-.75.71-.71 1.45 1.45h.89v-.87l-1.45-1.45.71-.71.75.75V3h1v1.19l.75-.75.71.71-1.46 1.46v.89h.89l1.45-1.45.71.71-.74.74H22z',
  }),
  'ChaletOutlined',
);
export const ChaletRoundedIcon = (props?: KTRawAttr) => {
  const s = _ChaletRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChaletRoundedIcon = svg(
  svg('path', {
    d: 'M10 15c-.55 0-1 .45-1 1v4H6c-.55 0-1-.45-1-1v-3.67l-.38.38c-.39.39-1.02.39-1.41 0a.996.996 0 0 1 0-1.41L9.3 8.21c.39-.39 1.02-.39 1.41 0l6.09 6.09c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0l-.39-.38V19c0 .55-.45 1-1 1h-3v-4c0-.55-.45-1-1-1m7.5-7.5v.89l-1.08 1.08c-.18.18-.21.48-.05.69.19.23.53.24.74.04l.39-.39v.69c0 .28.22.5.5.5s.5-.22.5-.5v-.69l.39.39c.21.21.55.19.74-.04.17-.2.14-.5-.05-.69L18.5 8.39V7.5h.89l1.08 1.08c.18.18.48.21.69.05.23-.19.24-.53.04-.74l-.39-.39h.69c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-.69l.39-.39c.21-.21.19-.55-.04-.74-.2-.17-.5-.14-.69.05L19.39 6.5h-.89v-.89l1.08-1.08c.18-.18.21-.48.05-.69-.19-.23-.53-.24-.74-.04l-.39.39V3.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.69l-.39-.39c-.21-.21-.55-.19-.74.04-.17.2-.14.5.05.69l1.08 1.08v.89h-.89l-1.08-1.08c-.18-.18-.48-.21-.69-.05-.23.19-.24.53-.04.74l.39.39h-.69c-.28 0-.5.22-.5.5s.22.5.5.5h.69l-.39.39c-.21.21-.19.55.04.74.2.17.5.14.69-.05l1.08-1.08z',
  }),
  'ChaletRounded',
);
export const ChaletSharpIcon = (props?: KTRawAttr) => {
  const s = _ChaletSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChaletSharpIcon = svg(
  svg('path', {
    d: 'm10 7.5 7.5 7.5-1.41 1.41L15 15.33V20h-4v-5H9v5H5v-4.67l-1.09 1.09L2.5 15zm12-1h-1.19l.75-.75-.71-.71-1.46 1.46h-.89v-.89l1.45-1.45-.71-.71-.74.74V3h-1v1.19l-.75-.75-.71.71 1.45 1.45v.9h-.89l-1.45-1.45-.71.71.75.75H14v1h1.19l-.75.75.71.71 1.45-1.45h.89v.89l-1.45 1.45.71.71.75-.75V11h1V9.81l.75.75.71-.71-1.46-1.46V7.5h.89l1.45 1.45.71-.71-.74-.74H22z',
  }),
  'ChaletSharp',
);
export const ChaletTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ChaletTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChaletTwoToneIcon = svg(
  [
    svg('path', { d: 'M13 18h-2v-3H9v3H7v-4.67l3-3 3 3z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M17.5 15 10 7.5 2.5 15l1.41 1.41L5 15.33V20h10v-4.67l1.09 1.09zM13 18h-2v-3H9v3H7v-4.67l3-3 3 3zm9-10.5h-1.19l.75.75-.71.71-1.46-1.46h-.89v.89l1.45 1.45-.71.71-.74-.74V11h-1V9.81l-.75.75-.71-.71 1.45-1.45v-.9h-.89l-1.45 1.45-.71-.71.75-.75H14v-1h1.19l-.75-.75.71-.71 1.45 1.45h.89v-.87l-1.45-1.45.71-.71.75.75V3h1v1.19l.75-.75.71.71-1.46 1.46v.89h.89l1.45-1.45.71.71-.74.74H22z',
      },
      '1',
    ),
  ],
  'ChaletTwoTone',
);
export const ChangeCircleIcon = (props?: KTRawAttr) => {
  const s = _ChangeCircleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChangeCircleIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m.06 17v-2.01H12c-1.28 0-2.56-.49-3.54-1.46-1.71-1.71-1.92-4.35-.64-6.29l1.1 1.1c-.71 1.33-.53 3.01.59 4.13.7.7 1.62 1.03 2.54 1.01v-2.14l2.83 2.83zm4.11-4.24-1.1-1.1c.71-1.33.53-3.01-.59-4.13C13.79 8.84 12.9 8.5 12 8.5h-.06v2.15L9.11 7.83 11.94 5v2.02c1.3-.02 2.61.45 3.6 1.45 1.7 1.7 1.91 4.35.63 6.29',
  }),
  'ChangeCircle',
);
export const ChangeCircleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ChangeCircleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChangeCircleOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m4.17-5.24-1.1-1.1c.71-1.33.53-3.01-.59-4.13C13.79 8.84 12.9 8.5 12 8.5c-.03 0-.06.01-.09.01L13 9.6l-1.06 1.06-2.83-2.83L11.94 5 13 6.06l-.96.96c1.27.01 2.53.48 3.5 1.44 1.7 1.71 1.91 4.36.63 6.3m-1.28 1.41L12.06 19 11 17.94l.95-.95c-1.26-.01-2.52-.5-3.48-1.46-1.71-1.71-1.92-4.35-.64-6.29l1.1 1.1c-.71 1.33-.53 3.01.59 4.13.7.7 1.63 1.04 2.56 1.01L11 14.4l1.06-1.06z',
  }),
  'ChangeCircleOutlined',
);
export const ChangeCircleRoundedIcon = (props?: KTRawAttr) => {
  const s = _ChangeCircleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChangeCircleRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m.91 16.15c-.31.31-.85.09-.85-.35V17H12c-1.28 0-2.56-.49-3.54-1.46-1.43-1.43-1.81-3.52-1.14-5.3.19-.51.86-.64 1.24-.25.22.22.27.54.17.82-.46 1.24-.2 2.68.8 3.68.7.7 1.62 1.03 2.54 1.01v-.94c0-.45.54-.67.85-.35l1.62 1.62c.2.2.2.51 0 .71zm2.53-4.13c-.22-.22-.27-.54-.17-.82.46-1.24.2-2.68-.8-3.68-.7-.7-1.62-1.04-2.53-1.02v.94c0 .45-.54.67-.85.35L9.46 8.18c-.2-.2-.2-.51 0-.71l1.62-1.62c.31-.31.85-.09.85.35v.81c1.3-.02 2.61.45 3.6 1.45 1.43 1.43 1.81 3.52 1.14 5.3-.19.52-.85.65-1.23.26',
  }),
  'ChangeCircleRounded',
);
export const ChangeCircleSharpIcon = (props?: KTRawAttr) => {
  const s = _ChangeCircleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChangeCircleSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m.06 17v-2.01H12c-1.28 0-2.56-.49-3.54-1.46-1.71-1.71-1.92-4.35-.64-6.29l1.1 1.1c-.71 1.33-.53 3.01.59 4.13.7.7 1.62 1.03 2.54 1.01v-2.14l2.83 2.83zm4.11-4.24-1.1-1.1c.71-1.33.53-3.01-.59-4.13C13.79 8.84 12.9 8.5 12 8.5h-.06v2.15L9.11 7.83 11.94 5v2.02c1.3-.02 2.61.45 3.6 1.45 1.7 1.7 1.91 4.35.63 6.29',
  }),
  'ChangeCircleSharp',
);
export const ChangeCircleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ChangeCircleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChangeCircleTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m.06 9.34v2.14c-.92.02-1.84-.31-2.54-1.01-1.12-1.12-1.3-2.8-.59-4.13l-1.1-1.1c-1.28 1.94-1.07 4.59.64 6.29.97.98 2.25 1.47 3.53 1.47h.06v2l2.83-2.83zm3.48-4.88c-.99-.99-2.3-1.46-3.6-1.45V5L9.11 7.83l2.83 2.83V8.51H12c.9 0 1.79.34 2.48 1.02 1.12 1.12 1.3 2.8.59 4.13l1.1 1.1c1.28-1.94 1.07-4.59-.63-6.3',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m.06 11.34v2.14c-.92.02-1.84-.31-2.54-1.01-1.12-1.12-1.3-2.8-.59-4.13l-1.1-1.1c-1.28 1.94-1.07 4.59.64 6.29.97.98 2.25 1.47 3.53 1.47h.06v2l2.83-2.83zm3.48-4.88c-.99-.99-2.3-1.46-3.6-1.45V5L9.11 7.83l2.83 2.83V8.51H12c.9 0 1.79.34 2.48 1.02 1.12 1.12 1.3 2.8.59 4.13l1.1 1.1c1.28-1.94 1.07-4.59-.63-6.3',
      },
      '1',
    ),
  ],
  'ChangeCircleTwoTone',
);
export const ChangeHistoryIcon = (props?: KTRawAttr) => {
  const s = _ChangeHistoryIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChangeHistoryIcon = svg(svg('path', { d: 'M12 7.77 18.39 18H5.61zM12 4 2 20h20z' }), 'ChangeHistory');
export const ChangeHistoryOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ChangeHistoryOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChangeHistoryOutlinedIcon = svg(
  svg('path', { d: 'M12 7.77 18.39 18H5.61zM12 4 2 20h20z' }),
  'ChangeHistoryOutlined',
);
export const ChangeHistoryRoundedIcon = (props?: KTRawAttr) => {
  const s = _ChangeHistoryRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChangeHistoryRoundedIcon = svg(
  svg('path', {
    d: 'M12 7.77 18.39 18H5.61zm-.85-2.41-8.2 13.11c-.41.67.07 1.53.85 1.53h16.4c.79 0 1.26-.86.85-1.53l-8.2-13.11c-.39-.63-1.31-.63-1.7 0',
  }),
  'ChangeHistoryRounded',
);
export const ChangeHistorySharpIcon = (props?: KTRawAttr) => {
  const s = _ChangeHistorySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChangeHistorySharpIcon = svg(
  svg('path', { d: 'M12 7.77 18.39 18H5.61zM12 4 2 20h20z' }),
  'ChangeHistorySharp',
);
export const ChangeHistoryTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ChangeHistoryTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChangeHistoryTwoToneIcon = svg(
  [
    svg('path', { d: 'M12 7.77 5.61 18h12.78z', opacity: '.3' }, '0'),
    svg('path', { d: 'M12 4 2 20h20zm0 3.77L18.39 18H5.61z' }, '1'),
  ],
  'ChangeHistoryTwoTone',
);
export const ChargingStationIcon = (props?: KTRawAttr) => {
  const s = _ChargingStationIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChargingStationIcon = svg(
  svg('path', {
    d: 'm14.5 11-3 6v-4h-2l3-6v4zM7 1h10c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2m0 5v12h10V6z',
  }),
  'ChargingStation',
);
export const ChargingStationOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ChargingStationOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChargingStationOutlinedIcon = svg(
  svg('path', {
    d: 'm14.5 11-3 6v-4h-2l3-6v4zM17 3H7v1h10zm0 17H7v1h10zm0-19c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2zM7 18h10V6H7z',
  }),
  'ChargingStationOutlined',
);
export const ChargingStationRoundedIcon = (props?: KTRawAttr) => {
  const s = _ChargingStationRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChargingStationRoundedIcon = svg(
  svg('path', {
    d: 'M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 17H7V6h10zm-4.5-7V9.12c0-.53-.71-.7-.95-.22l-1.69 3.38c-.16.33.08.72.45.72h1.19v1.88c0 .53.71.7.95.22l1.69-3.38c.16-.33-.08-.72-.45-.72z',
  }),
  'ChargingStationRounded',
);
export const ChargingStationSharpIcon = (props?: KTRawAttr) => {
  const s = _ChargingStationSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChargingStationSharpIcon = svg(
  svg('path', { d: 'm14.5 11-3 6v-4h-2l3-6v4zM5 1h14v22H5zm2 5v12h10V6z' }),
  'ChargingStationSharp',
);
export const ChargingStationTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ChargingStationTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChargingStationTwoToneIcon = svg(
  [
    svg('path', { d: 'M17 3v1H7V3zm0 17H7v1h10z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'm14.5 11-3 6v-4h-2l3-6v4zM17 3H7v1h10zm0 17H7v1h10zm0-19c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2zM7 18h10V6H7z',
      },
      '1',
    ),
  ],
  'ChargingStationTwoTone',
);
export const ChatIcon = (props?: KTRawAttr) => {
  const s = _ChatIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChatIcon = svg(
  svg('path', {
    d: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z',
  }),
  'Chat',
);
export const ChatBubbleIcon = (props?: KTRawAttr) => {
  const s = _ChatBubbleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChatBubbleIcon = svg(
  svg('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2' }),
  'ChatBubble',
);
export const ChatBubbleOutlineIcon = (props?: KTRawAttr) => {
  const s = _ChatBubbleOutlineIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChatBubbleOutlineIcon = svg(
  svg('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z' }),
  'ChatBubbleOutline',
);
export const ChatBubbleOutlineOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ChatBubbleOutlineOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChatBubbleOutlineOutlinedIcon = svg(
  svg('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z' }),
  'ChatBubbleOutlineOutlined',
);
export const ChatBubbleOutlineRoundedIcon = (props?: KTRawAttr) => {
  const s = _ChatBubbleOutlineRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChatBubbleOutlineRoundedIcon = svg(
  svg('path', {
    d: 'M20 4v12H5.17L4 17.17V4zm0-2H4c-1.1 0-2 .9-2 2v15.59c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2',
  }),
  'ChatBubbleOutlineRounded',
);
export const ChatBubbleOutlineSharpIcon = (props?: KTRawAttr) => {
  const s = _ChatBubbleOutlineSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChatBubbleOutlineSharpIcon = svg(
  svg('path', { d: 'M22 2H2v20l4-4h16zm-2 14H6l-2 2V4h16z' }),
  'ChatBubbleOutlineSharp',
);
export const ChatBubbleOutlineTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ChatBubbleOutlineTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChatBubbleOutlineTwoToneIcon = svg(
  svg('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z' }),
  'ChatBubbleOutlineTwoTone',
);
export const ChatBubbleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ChatBubbleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChatBubbleOutlinedIcon = svg(
  svg('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2' }),
  'ChatBubbleOutlined',
);
export const ChatBubbleRoundedIcon = (props?: KTRawAttr) => {
  const s = _ChatBubbleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChatBubbleRoundedIcon = svg(
  svg('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2' }),
  'ChatBubbleRounded',
);
export const ChatBubbleSharpIcon = (props?: KTRawAttr) => {
  const s = _ChatBubbleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChatBubbleSharpIcon = svg(svg('path', { d: 'M22 2H2v20l4-4h16z' }), 'ChatBubbleSharp');
export const ChatBubbleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ChatBubbleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChatBubbleTwoToneIcon = svg(
  [
    svg('path', { d: 'm4 18 2-2h14V4H4z', opacity: '.3' }, '0'),
    svg('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z' }, '1'),
  ],
  'ChatBubbleTwoTone',
);
export const ChatOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ChatOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChatOutlinedIcon = svg(
  svg('path', {
    d: 'M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h8v2H6zm0-3h12v2H6zm0-3h12v2H6z',
  }),
  'ChatOutlined',
);
export const ChatRoundedIcon = (props?: KTRawAttr) => {
  const s = _ChatRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChatRoundedIcon = svg(
  svg('path', {
    d: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M7 9h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1m6 5H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1m4-6H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1',
  }),
  'ChatRounded',
);
export const ChatSharpIcon = (props?: KTRawAttr) => {
  const s = _ChatSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChatSharpIcon = svg(
  svg('path', { d: 'M22 2H2.01L2 22l4-4h16zM6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z' }),
  'ChatSharp',
);
export const ChatTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ChatTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChatTwoToneIcon = svg(
  [
    svg('path', { d: 'M20 4H4v13.17L5.17 16H20zm-6 10H6v-2h8zm4-3H6V9h12zm0-3H6V6h12z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4zm-16-.83V4h16v12H5.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z',
      },
      '1',
    ),
  ],
  'ChatTwoTone',
);
export const CheckIcon = (props?: KTRawAttr) => {
  const s = _CheckIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckIcon = svg(svg('path', { d: 'M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' }), 'Check');
export const CheckBoxIcon = (props?: KTRawAttr) => {
  const s = _CheckBoxIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckBoxIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z',
  }),
  'CheckBox',
);
export const CheckBoxOutlineBlankIcon = (props?: KTRawAttr) => {
  const s = _CheckBoxOutlineBlankIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckBoxOutlineBlankIcon = svg(
  svg('path', { d: 'M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2' }),
  'CheckBoxOutlineBlank',
);
export const CheckBoxOutlineBlankOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CheckBoxOutlineBlankOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckBoxOutlineBlankOutlinedIcon = svg(
  svg('path', { d: 'M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2' }),
  'CheckBoxOutlineBlankOutlined',
);
export const CheckBoxOutlineBlankRoundedIcon = (props?: KTRawAttr) => {
  const s = _CheckBoxOutlineBlankRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckBoxOutlineBlankRoundedIcon = svg(
  svg('path', {
    d: 'M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1m1-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2',
  }),
  'CheckBoxOutlineBlankRounded',
);
export const CheckBoxOutlineBlankSharpIcon = (props?: KTRawAttr) => {
  const s = _CheckBoxOutlineBlankSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckBoxOutlineBlankSharpIcon = svg(
  svg('path', { d: 'M19 5v14H5V5zm2-2H3v18h18z' }),
  'CheckBoxOutlineBlankSharp',
);
export const CheckBoxOutlineBlankTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CheckBoxOutlineBlankTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckBoxOutlineBlankTwoToneIcon = svg(
  svg('path', { d: 'M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2' }),
  'CheckBoxOutlineBlankTwoTone',
);
export const CheckBoxOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CheckBoxOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckBoxOutlinedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z',
  }),
  'CheckBoxOutlined',
);
export const CheckBoxRoundedIcon = (props?: KTRawAttr) => {
  const s = _CheckBoxRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckBoxRoundedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8.29 13.29c-.39.39-1.02.39-1.41 0L5.71 12.7a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41z',
  }),
  'CheckBoxRounded',
);
export const CheckBoxSharpIcon = (props?: KTRawAttr) => {
  const s = _CheckBoxSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckBoxSharpIcon = svg(
  svg('path', { d: 'M21 3H3v18h18zM10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z' }),
  'CheckBoxSharp',
);
export const CheckBoxTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CheckBoxTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckBoxTwoToneIcon = svg(
  [
    svg('path', { d: 'M5 19h14V5H5zm2.41-7.4 2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z',
      },
      '1',
    ),
  ],
  'CheckBoxTwoTone',
);
export const CheckCircleIcon = (props?: KTRawAttr) => {
  const s = _CheckCircleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckCircleIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z',
  }),
  'CheckCircle',
);
export const CheckCircleOutlineIcon = (props?: KTRawAttr) => {
  const s = _CheckCircleOutlineIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckCircleOutlineIcon = svg(
  svg('path', {
    d: 'M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
  }),
  'CheckCircleOutline',
);
export const CheckCircleOutlineOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CheckCircleOutlineOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckCircleOutlineOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z',
  }),
  'CheckCircleOutlineOutlined',
);
export const CheckCircleOutlineRoundedIcon = (props?: KTRawAttr) => {
  const s = _CheckCircleOutlineRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckCircleOutlineRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41s-1.03-.39-1.42 0',
  }),
  'CheckCircleOutlineRounded',
);
export const CheckCircleOutlineSharpIcon = (props?: KTRawAttr) => {
  const s = _CheckCircleOutlineSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckCircleOutlineSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z',
  }),
  'CheckCircleOutlineSharp',
);
export const CheckCircleOutlineTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CheckCircleOutlineTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckCircleOutlineTwoToneIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z',
  }),
  'CheckCircleOutlineTwoTone',
);
export const CheckCircleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CheckCircleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckCircleOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z',
  }),
  'CheckCircleOutlined',
);
export const CheckCircleRoundedIcon = (props?: KTRawAttr) => {
  const s = _CheckCircleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckCircleRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M9.29 16.29 5.7 12.7a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0',
  }),
  'CheckCircleRounded',
);
export const CheckCircleSharpIcon = (props?: KTRawAttr) => {
  const s = _CheckCircleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckCircleSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z',
  }),
  'CheckCircleSharp',
);
export const CheckCircleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CheckCircleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckCircleTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m-2 13-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z',
      },
      '1',
    ),
  ],
  'CheckCircleTwoTone',
);
export const CheckOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CheckOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckOutlinedIcon = svg(
  svg('path', { d: 'M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' }),
  'CheckOutlined',
);
export const CheckRoundedIcon = (props?: KTRawAttr) => {
  const s = _CheckRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckRoundedIcon = svg(
  svg('path', {
    d: 'M9 16.17 5.53 12.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0z',
  }),
  'CheckRounded',
);
export const CheckSharpIcon = (props?: KTRawAttr) => {
  const s = _CheckSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckSharpIcon = svg(
  svg('path', { d: 'M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' }),
  'CheckSharp',
);
export const CheckTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CheckTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckTwoToneIcon = svg(
  svg('path', { d: 'M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' }),
  'CheckTwoTone',
);
export const ChecklistIcon = (props?: KTRawAttr) => {
  const s = _ChecklistIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChecklistIcon = svg(
  svg('path', {
    d: 'M22 7h-9v2h9zm0 8h-9v2h9zM5.54 11 2 7.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41zm0 8L2 15.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41z',
  }),
  'Checklist',
);
export const ChecklistOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ChecklistOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChecklistOutlinedIcon = svg(
  svg('path', {
    d: 'M22 7h-9v2h9zm0 8h-9v2h9zM5.54 11 2 7.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41zm0 8L2 15.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41z',
  }),
  'ChecklistOutlined',
);
export const ChecklistRoundedIcon = (props?: KTRawAttr) => {
  const s = _ChecklistRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChecklistRoundedIcon = svg(
  svg('path', {
    d: 'M22 8c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1m-9 8c0 .55.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7c-.55 0-1 .45-1 1M10.47 4.63c.39.39.39 1.02 0 1.41l-4.23 4.25c-.39.39-1.02.39-1.42 0L2.7 8.16a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l1.42 1.42 3.54-3.54c.38-.38 1.02-.38 1.4 0m.01 8.01c.39.39.39 1.02 0 1.41L6.25 18.3c-.39.39-1.02.39-1.42 0L2.7 16.16c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l1.42 1.42 3.54-3.54c.38-.38 1.02-.38 1.41.01',
  }),
  'ChecklistRounded',
);
export const ChecklistRtlIcon = (props?: KTRawAttr) => {
  const s = _ChecklistRtlIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChecklistRtlIcon = svg(
  svg('path', {
    d: 'M11 7H2v2h9zm0 8H2v2h9zm5.34-4L12.8 7.46l1.41-1.41 2.12 2.12 4.24-4.24L22 5.34zm0 8-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L22 13.34z',
  }),
  'ChecklistRtl',
);
export const ChecklistRtlOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ChecklistRtlOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChecklistRtlOutlinedIcon = svg(
  svg('path', {
    d: 'M11 7H2v2h9zm0 8H2v2h9zm5.34-4L12.8 7.46l1.41-1.41 2.12 2.12 4.24-4.24L22 5.34zm0 8-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L22 13.34z',
  }),
  'ChecklistRtlOutlined',
);
export const ChecklistRtlRoundedIcon = (props?: KTRawAttr) => {
  const s = _ChecklistRtlRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChecklistRtlRoundedIcon = svg(
  svg('path', {
    d: 'M11 8c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1m0 8c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1m6.05-5.71c-.39.39-1.02.39-1.41 0l-2.12-2.12a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l1.41 1.41 3.54-3.54c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41zm0 8c-.39.39-1.02.39-1.41 0l-2.12-2.12a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l1.41 1.41 3.54-3.54c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41z',
  }),
  'ChecklistRtlRounded',
);
export const ChecklistRtlSharpIcon = (props?: KTRawAttr) => {
  const s = _ChecklistRtlSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChecklistRtlSharpIcon = svg(
  svg('path', {
    d: 'M11 7H2v2h9zm0 8H2v2h9zm5.34-4L12.8 7.46l1.41-1.41 2.12 2.12 4.24-4.24L22 5.34zm0 8-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L22 13.34z',
  }),
  'ChecklistRtlSharp',
);
export const ChecklistRtlTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ChecklistRtlTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChecklistRtlTwoToneIcon = svg(
  svg('path', {
    d: 'M11 7H2v2h9zm0 8H2v2h9zm5.34-4L12.8 7.46l1.41-1.41 2.12 2.12 4.24-4.24L22 5.34zm0 8-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L22 13.34z',
  }),
  'ChecklistRtlTwoTone',
);
export const ChecklistSharpIcon = (props?: KTRawAttr) => {
  const s = _ChecklistSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChecklistSharpIcon = svg(
  svg('path', {
    d: 'M22 7h-9v2h9zm0 8h-9v2h9zM5.54 11 2 7.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41zm0 8L2 15.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41z',
  }),
  'ChecklistSharp',
);
export const ChecklistTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ChecklistTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChecklistTwoToneIcon = svg(
  svg('path', {
    d: 'M22 7h-9v2h9zm0 8h-9v2h9zM5.54 11 2 7.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41zm0 8L2 15.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41z',
  }),
  'ChecklistTwoTone',
);
export const CheckroomIcon = (props?: KTRawAttr) => {
  const s = _CheckroomIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckroomIcon = svg(
  svg('path', {
    d: 'M21.6 18.2 13 11.75v-.91c1.65-.49 2.8-2.17 2.43-4.05-.26-1.31-1.3-2.4-2.61-2.7C10.54 3.57 8.5 5.3 8.5 7.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8M6 18l6-4.5 6 4.5z',
  }),
  'Checkroom',
);
export const CheckroomOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CheckroomOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckroomOutlinedIcon = svg(
  svg('path', {
    d: 'M21.6 18.2 13 11.75v-.91c1.65-.49 2.8-2.17 2.43-4.05-.26-1.31-1.3-2.4-2.61-2.7C10.54 3.57 8.5 5.3 8.5 7.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8M6 18l6-4.5 6 4.5z',
  }),
  'CheckroomOutlined',
);
export const CheckroomRoundedIcon = (props?: KTRawAttr) => {
  const s = _CheckroomRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckroomRoundedIcon = svg(
  svg('path', {
    d: 'M21.6 18.2 13 11.75v-.91c1.65-.49 2.8-2.17 2.43-4.05-.26-1.31-1.3-2.4-2.61-2.7-1.76-.4-3.37.53-4.02 1.98-.3.67.18 1.43.91 1.43.39 0 .75-.22.9-.57.23-.55.76-.93 1.39-.93.83 0 1.5.67 1.5 1.5 0 .84-.69 1.52-1.53 1.5-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8M6 18l6-4.5 6 4.5z',
  }),
  'CheckroomRounded',
);
export const CheckroomSharpIcon = (props?: KTRawAttr) => {
  const s = _CheckroomSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckroomSharpIcon = svg(
  svg('path', {
    d: 'M21.6 18.2 13 11.75v-.91c1.65-.49 2.8-2.17 2.43-4.05-.26-1.31-1.3-2.4-2.61-2.7C10.54 3.57 8.5 5.3 8.5 7.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5H11v2.75L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8M6 18l6-4.5 6 4.5z',
  }),
  'CheckroomSharp',
);
export const CheckroomTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CheckroomTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CheckroomTwoToneIcon = svg(
  svg('path', {
    d: 'M21.6 18.2 13 11.75v-.91c1.65-.49 2.8-2.17 2.43-4.05-.26-1.31-1.3-2.4-2.61-2.7C10.54 3.57 8.5 5.3 8.5 7.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8M6 18l6-4.5 6 4.5z',
  }),
  'CheckroomTwoTone',
);
export const ChevronLeftIcon = (props?: KTRawAttr) => {
  const s = _ChevronLeftIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChevronLeftIcon = svg(svg('path', { d: 'M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z' }), 'ChevronLeft');
export const ChevronLeftOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ChevronLeftOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChevronLeftOutlinedIcon = svg(
  svg('path', { d: 'M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z' }),
  'ChevronLeftOutlined',
);
export const ChevronLeftRoundedIcon = (props?: KTRawAttr) => {
  const s = _ChevronLeftRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChevronLeftRoundedIcon = svg(
  svg('path', {
    d: 'M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41',
  }),
  'ChevronLeftRounded',
);
export const ChevronLeftSharpIcon = (props?: KTRawAttr) => {
  const s = _ChevronLeftSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChevronLeftSharpIcon = svg(
  svg('path', { d: 'M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z' }),
  'ChevronLeftSharp',
);
export const ChevronLeftTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ChevronLeftTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChevronLeftTwoToneIcon = svg(
  svg('path', { d: 'M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z' }),
  'ChevronLeftTwoTone',
);
export const ChevronRightIcon = (props?: KTRawAttr) => {
  const s = _ChevronRightIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChevronRightIcon = svg(
  svg('path', { d: 'M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' }),
  'ChevronRight',
);
export const ChevronRightOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ChevronRightOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChevronRightOutlinedIcon = svg(
  svg('path', { d: 'M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' }),
  'ChevronRightOutlined',
);
export const ChevronRightRoundedIcon = (props?: KTRawAttr) => {
  const s = _ChevronRightRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChevronRightRoundedIcon = svg(
  svg('path', {
    d: 'M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01',
  }),
  'ChevronRightRounded',
);
export const ChevronRightSharpIcon = (props?: KTRawAttr) => {
  const s = _ChevronRightSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChevronRightSharpIcon = svg(
  svg('path', { d: 'M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' }),
  'ChevronRightSharp',
);
export const ChevronRightTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ChevronRightTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChevronRightTwoToneIcon = svg(
  svg('path', { d: 'M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' }),
  'ChevronRightTwoTone',
);
export const ChildCareIcon = (props?: KTRawAttr) => {
  const s = _ChildCareIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChildCareIcon = svg(
  [
    svg('circle', { cx: '14.5', cy: '10.5', r: '1.25' }, '0'),
    svg('circle', { cx: '9.5', cy: '10.5', r: '1.25' }, '1'),
    svg(
      'path',
      {
        d: 'M22.94 12.66q.06-.315.06-.66c0-.345-.02-.45-.06-.66-.25-1.51-1.36-2.74-2.81-3.17-.53-1.12-1.28-2.1-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91-1.45.43-2.56 1.65-2.81 3.17Q1 11.655 1 12c0 .345.02.45.06.66.25 1.51 1.36 2.74 2.81 3.17.52 1.11 1.27 2.09 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89 1.44-.43 2.55-1.65 2.8-3.17M19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2M7.5 14c.76 1.77 2.49 3 4.5 3s3.74-1.23 4.5-3z',
      },
      '2',
    ),
  ],
  'ChildCare',
);
export const ChildCareOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ChildCareOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChildCareOutlinedIcon = svg(
  [
    svg('circle', { cx: '14.5', cy: '10.5', r: '1.25' }, '0'),
    svg('circle', { cx: '9.5', cy: '10.5', r: '1.25' }, '1'),
    svg(
      'path',
      {
        d: 'M22.94 11.34c-.25-1.51-1.36-2.74-2.81-3.17-.53-1.12-1.28-2.1-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91-1.45.43-2.56 1.65-2.81 3.17Q1 11.655 1 12t.06.66c.25 1.51 1.36 2.74 2.81 3.17.52 1.11 1.27 2.09 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89 1.44-.43 2.55-1.65 2.8-3.17q.06-.315.06-.66t-.06-.66M19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2m-7 3c2.01 0 3.74-1.23 4.5-3h-9c.76 1.77 2.49 3 4.5 3',
      },
      '2',
    ),
  ],
  'ChildCareOutlined',
);
export const ChildCareRoundedIcon = (props?: KTRawAttr) => {
  const s = _ChildCareRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChildCareRoundedIcon = svg(
  [
    svg('circle', { cx: '14.5', cy: '10.5', r: '1.25' }, '0'),
    svg('circle', { cx: '9.5', cy: '10.5', r: '1.25' }, '1'),
    svg(
      'path',
      {
        d: 'M16.1 14H7.9c-.19 0-.32.2-.23.37C8.5 15.94 10.13 17 12 17s3.5-1.06 4.33-2.63c.08-.17-.05-.37-.23-.37m6.84-2.66c-.25-1.51-1.36-2.74-2.81-3.17-.53-1.12-1.28-2.1-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91-1.45.43-2.56 1.65-2.81 3.17Q1 11.655 1 12t.06.66c.25 1.51 1.36 2.74 2.81 3.17.52 1.11 1.27 2.09 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89 1.44-.43 2.55-1.65 2.8-3.17q.06-.315.06-.66t-.06-.66M19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2',
      },
      '2',
    ),
  ],
  'ChildCareRounded',
);
export const ChildCareSharpIcon = (props?: KTRawAttr) => {
  const s = _ChildCareSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChildCareSharpIcon = svg(
  [
    svg('circle', { cx: '14.5', cy: '10.5', r: '1.25' }, '0'),
    svg('circle', { cx: '9.5', cy: '10.5', r: '1.25' }, '1'),
    svg(
      'path',
      {
        d: 'M12 17c2.01 0 3.74-1.23 4.5-3h-9c.76 1.77 2.49 3 4.5 3m10.94-5.66c-.25-1.51-1.36-2.74-2.81-3.17-.53-1.12-1.28-2.1-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91-1.45.43-2.56 1.65-2.81 3.17Q1 11.655 1 12t.06.66c.25 1.51 1.36 2.74 2.81 3.17.52 1.11 1.27 2.09 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89 1.44-.43 2.55-1.65 2.8-3.17q.06-.315.06-.66t-.06-.66M19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2',
      },
      '2',
    ),
  ],
  'ChildCareSharp',
);
export const ChildCareTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ChildCareTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChildCareTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19 10c-.1 0-.19.02-.29.03-.2-.67-.49-1.29-.86-1.86C16.6 6.26 14.45 5 12 5S7.4 6.26 6.15 8.17c-.37.57-.66 1.19-.86 1.86-.1-.01-.19-.03-.29-.03-1.1 0-2 .9-2 2s.9 2 2 2c.1 0 .19-.02.29-.03.2.67.49 1.29.86 1.86C7.4 17.74 9.55 19 12 19s4.6-1.26 5.85-3.17c.37-.57.66-1.19.86-1.86.1.01.19.03.29.03 1.1 0 2-.9 2-2s-.9-2-2-2m-4.5-.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25m-5 0c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M12 17c-2.01 0-3.74-1.23-4.5-3h9c-.76 1.77-2.49 3-4.5 3',
        opacity: '.3',
      },
      '0',
    ),
    svg('circle', { cx: '14.5', cy: '10.5', r: '1.25' }, '1'),
    svg('circle', { cx: '9.5', cy: '10.5', r: '1.25' }, '2'),
    svg(
      'path',
      {
        d: 'M12 17c2.01 0 3.74-1.23 4.5-3h-9c.76 1.77 2.49 3 4.5 3m10.94-5.66c-.25-1.51-1.36-2.74-2.81-3.17-.53-1.12-1.28-2.1-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91-1.45.43-2.56 1.65-2.81 3.17Q1 11.655 1 12t.06.66c.25 1.51 1.36 2.74 2.81 3.17.52 1.11 1.27 2.09 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89 1.44-.43 2.55-1.65 2.8-3.17q.06-.315.06-.66t-.06-.66M19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2',
      },
      '3',
    ),
  ],
  'ChildCareTwoTone',
);
export const ChildFriendlyIcon = (props?: KTRawAttr) => {
  const s = _ChildFriendlyIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChildFriendlyIcon = svg(
  svg('path', {
    d: 'M13 2v8h8c0-4.42-3.58-8-8-8m6.32 13.89C20.37 14.54 21 12.84 21 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61M8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20m9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20',
  }),
  'ChildFriendly',
);
export const ChildFriendlyOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ChildFriendlyOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChildFriendlyOutlinedIcon = svg(
  svg('path', {
    d: 'M13 2v8h8c0-4.42-3.58-8-8-8m2 6V4.34c1.7.6 3.05 1.95 3.66 3.66zm-8.56 3-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61C20.37 14.54 21 12.84 21 11zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20m9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20m.74-5.34-.29.37c-.14-.02-.3-.03-.45-.03-1.39 0-2.6.82-3.16 2h-2.68c-.5-1.04-1.5-1.8-2.68-1.97l-.44-.67c-.1-.17-.34-.69-.67-1.36h11.29c-.21.59-.52 1.15-.92 1.66',
  }),
  'ChildFriendlyOutlined',
);
export const ChildFriendlyRoundedIcon = (props?: KTRawAttr) => {
  const s = _ChildFriendlyRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChildFriendlyRoundedIcon = svg(
  svg('path', {
    d: 'M13 3.08V10h8c0-4.03-2.98-7.37-6.86-7.92-.6-.09-1.14.39-1.14 1m6.32 12.81C20.37 14.54 21 12.84 21 11H6.44l-.68-1.43C5.6 9.22 5.24 9 4.86 9H3c-.55 0-1 .45-1 1s.45 1 1 1h1.22s1.89 4.07 2.12 4.42c-1.33.71-2.14 2.27-1.74 3.94.3 1.26 1.34 2.27 2.6 2.55 2.1.46 3.98-.96 4.25-2.91h2.08c.27 1.94 2.14 3.36 4.22 2.92 1.27-.27 2.31-1.27 2.63-2.53.35-1.39-.14-2.68-1.06-3.5M8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20m9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20',
  }),
  'ChildFriendlyRounded',
);
export const ChildFriendlySharpIcon = (props?: KTRawAttr) => {
  const s = _ChildFriendlySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChildFriendlySharpIcon = svg(
  svg('path', {
    d: 'M13 2v8h8c0-4.42-3.58-8-8-8m6.32 13.89C20.37 14.54 21 12.84 21 11H6.44l-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61M8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20m9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20',
  }),
  'ChildFriendlySharp',
);
export const ChildFriendlyTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ChildFriendlyTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChildFriendlyTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M15 4.34V8h3.66C18.05 6.3 16.7 4.95 15 4.34M8.04 14.36l.44.67c1.19.16 2.19.92 2.68 1.97h2.68c.56-1.18 1.77-2 3.16-2 .15 0 .31.01.46.03l.29-.37c.4-.51.7-1.07.92-1.66H7.37c.32.67.57 1.19.67 1.36',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M13 2v8h8c0-4.42-3.58-8-8-8m2 6V4.34c1.7.6 3.05 1.95 3.66 3.66zm-8.56 3-.95-2H2v2h2.22s1.89 4.07 2.12 4.42c-1.1.59-1.84 1.75-1.84 3.08C4.5 20.43 6.07 22 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3 1.93 0 3.5-1.57 3.5-3.5 0-1.04-.46-1.97-1.18-2.61C20.37 14.54 21 12.84 21 11zM8 20c-.83 0-1.5-.67-1.5-1.5S7.17 17 8 17s1.5.67 1.5 1.5S8.83 20 8 20m9 0c-.83 0-1.5-.67-1.5-1.5S16.17 17 17 17s1.5.67 1.5 1.5S17.83 20 17 20m.74-5.34-.29.37c-.14-.02-.3-.03-.45-.03-1.39 0-2.6.82-3.16 2h-2.68c-.5-1.04-1.5-1.8-2.68-1.97l-.44-.67c-.1-.17-.34-.69-.67-1.36h11.29c-.21.59-.52 1.15-.92 1.66',
      },
      '1',
    ),
  ],
  'ChildFriendlyTwoTone',
);
export const ChromeReaderModeIcon = (props?: KTRawAttr) => {
  const s = _ChromeReaderModeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChromeReaderModeIcon = svg(
  svg('path', {
    d: 'M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 15h-9V6h9z',
  }),
  'ChromeReaderMode',
);
export const ChromeReaderModeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ChromeReaderModeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChromeReaderModeOutlinedIcon = svg(
  svg('path', {
    d: 'M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M3 19V6h8v13zm18 0h-8V6h8zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z',
  }),
  'ChromeReaderModeOutlined',
);
export const ChromeReaderModeRoundedIcon = (props?: KTRawAttr) => {
  const s = _ChromeReaderModeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChromeReaderModeRoundedIcon = svg(
  svg('path', {
    d: 'M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14c0 .55-.45 1-1 1h-8V6h8c.55 0 1 .45 1 1zm-1.75-8.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0 2.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0 2.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75',
  }),
  'ChromeReaderModeRounded',
);
export const ChromeReaderModeSharpIcon = (props?: KTRawAttr) => {
  const s = _ChromeReaderModeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChromeReaderModeSharpIcon = svg(
  svg('path', { d: 'M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM23 4H1v17h22zm-2 15h-9V6h9z' }),
  'ChromeReaderModeSharp',
);
export const ChromeReaderModeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ChromeReaderModeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChromeReaderModeTwoToneIcon = svg(
  [
    svg('path', { d: 'M3 6h8v13H3z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M11 19H3V6h8zm10 0h-8V6h8zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z',
      },
      '1',
    ),
  ],
  'ChromeReaderModeTwoTone',
);
export const ChurchIcon = (props?: KTRawAttr) => {
  const s = _ChurchIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChurchIcon = svg(
  svg('path', {
    d: 'M18 12.22V9l-5-2.5V5h2V3h-2V1h-2v2H9v2h2v1.5L6 9v3.22L2 14v8h8v-3c0-1.1.9-2 2-2s2 .9 2 2v3h8v-8zm-6 1.28c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'Church',
);
export const ChurchOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ChurchOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChurchOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M18 12.22V9l-5-2.5V5h2V3h-2V1h-2v2H9v2h2v1.5L6 9v3.22L2 14v8h9v-4c0-.55.45-1 1-1s1 .45 1 1v4h9v-8zM20 20h-5v-2.04c0-1.69-1.35-3.06-3-3.06s-3 1.37-3 3.06V20H4v-4.79l4-1.81v-3.35L12 8l4 2.04v3.35l4 1.81z',
      },
      '0',
    ),
    svg('circle', { cx: '12', cy: '12', r: '1.5' }, '1'),
  ],
  'ChurchOutlined',
);
export const ChurchRoundedIcon = (props?: KTRawAttr) => {
  const s = _ChurchRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChurchRoundedIcon = svg(
  svg('path', {
    d: 'M18 12.22v-1.99c0-.76-.43-1.45-1.11-1.79L13 6.5V5h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1.5L7.11 8.45C6.43 8.79 6 9.48 6 10.24v1.99l-2.81 1.25C2.47 13.79 2 14.51 2 15.3V20c0 1.1.9 2 2 2h6v-2.89c0-1 .68-1.92 1.66-2.08 1.26-.21 2.34.76 2.34 1.97v3h6c1.1 0 2-.9 2-2v-4.7c0-.79-.47-1.51-1.19-1.83zm-6 1.28c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'ChurchRounded',
);
export const ChurchSharpIcon = (props?: KTRawAttr) => {
  const s = _ChurchSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChurchSharpIcon = svg(
  svg('path', {
    d: 'M18 12.22V9l-5-2.5V5h2V3h-2V1h-2v2H9v2h2v1.5L6 9v3.22L2 14v8h8v-5h4v5h8v-8zm-6 1.28c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'ChurchSharp',
);
export const ChurchTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ChurchTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ChurchTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M16 10.04 12 8l-4 2.04v3.35L4 15.2V20h5v-2.04c0-1.69 1.35-3.06 3-3.06s3 1.37 3 3.06V20h5v-4.79l-4-1.81zm-4 3.46c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M18 12.22V9l-5-2.5V5h2V3h-2V1h-2v2H9v2h2v1.5L6 9v3.22L2 14v8h9v-4c0-.55.45-1 1-1s1 .45 1 1v4h9v-8zM20 20h-5v-2.04c0-1.69-1.35-3.06-3-3.06s-3 1.37-3 3.06V20H4v-4.79l4-1.81v-3.35L12 8l4 2.04v3.35l4 1.81z',
      },
      '1',
    ),
    svg('circle', { cx: '12', cy: '12', r: '1.5' }, '2'),
  ],
  'ChurchTwoTone',
);
export const CircleIcon = (props?: KTRawAttr) => {
  const s = _CircleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CircleIcon = svg(
  svg('path', { d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2' }),
  'Circle',
);
export const CircleNotificationsIcon = (props?: KTRawAttr) => {
  const s = _CircleNotificationsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CircleNotificationsIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 16.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5m5-2.5H7v-1l1-1v-2.61C8 9.27 9.03 7.47 11 7v-.5c0-.57.43-1 1-1s1 .43 1 1V7c1.97.47 3 2.28 3 4.39V14l1 1z',
  }),
  'CircleNotifications',
);
export const CircleNotificationsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CircleNotificationsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CircleNotificationsOutlinedIcon = svg(
  svg('path', {
    d: 'M12 18.5c.83 0 1.5-.67 1.5-1.5h-3c0 .83.67 1.5 1.5 1.5M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m4-8.61c0-2.11-1.03-3.92-3-4.39v-.5c0-.57-.43-1-1-1s-1 .43-1 1V7c-1.97.47-3 2.27-3 4.39V14H7v2h10v-2h-1zM14 14h-4v-3c0-1.1.9-2 2-2s2 .9 2 2z',
  }),
  'CircleNotificationsOutlined',
);
export const CircleNotificationsRoundedIcon = (props?: KTRawAttr) => {
  const s = _CircleNotificationsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CircleNotificationsRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 16.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5m4-2.5H8c-.55 0-1-.45-1-1s.45-1 1-1v-3c0-1.86 1.28-3.41 3-3.86V6.5c0-.55.45-1 1-1s1 .45 1 1v.64c1.72.45 3 2 3 3.86v3c.55 0 1 .45 1 1s-.45 1-1 1',
  }),
  'CircleNotificationsRounded',
);
export const CircleNotificationsSharpIcon = (props?: KTRawAttr) => {
  const s = _CircleNotificationsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CircleNotificationsSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 16.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5m5-2.5H7v-2h1v-3c0-1.86 1.28-3.41 3-3.86V5.5h2v1.64c1.72.45 3 2 3 3.86v3h1z',
  }),
  'CircleNotificationsSharp',
);
export const CircleNotificationsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CircleNotificationsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CircleNotificationsTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m0 14.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5m5-2.5H7v-2h1v-2.61C8 9.27 9.03 7.47 11 7v-.5c0-.57.43-1 1-1s1 .43 1 1V7c1.97.47 3 2.28 3 4.39V14h1z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 18.5c.83 0 1.5-.67 1.5-1.5h-3c0 .83.67 1.5 1.5 1.5M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m4-8.61c0-2.11-1.03-3.92-3-4.39v-.5c0-.57-.43-1-1-1s-1 .43-1 1V7c-1.97.47-3 2.27-3 4.39V14H7v2h10v-2h-1zM14 14h-4v-3c0-1.1.9-2 2-2s2 .9 2 2z',
      },
      '1',
    ),
  ],
  'CircleNotificationsTwoTone',
);
export const CircleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CircleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CircleOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
  }),
  'CircleOutlined',
);
export const CircleRoundedIcon = (props?: KTRawAttr) => {
  const s = _CircleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CircleRoundedIcon = svg(
  svg('path', { d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2' }),
  'CircleRounded',
);
export const CircleSharpIcon = (props?: KTRawAttr) => {
  const s = _CircleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CircleSharpIcon = svg(
  svg('path', { d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2' }),
  'CircleSharp',
);
export const CircleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CircleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CircleTwoToneIcon = svg(
  [
    svg('circle', { cx: '12', cy: '12', r: '8', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
      },
      '1',
    ),
  ],
  'CircleTwoTone',
);
export const ClassIcon = (props?: KTRawAttr) => {
  const s = _ClassIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClassIcon = svg(
  svg('path', {
    d: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 4h5v8l-2.5-1.5L6 12z',
  }),
  'Class',
);
export const ClassOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ClassOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClassOutlinedIcon = svg(
  svg('path', {
    d: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 4h2v5l-1-.75L9 9zm9 16H6V4h1v9l3-2.25L13 13V4h5z',
  }),
  'ClassOutlined',
);
export const ClassRoundedIcon = (props?: KTRawAttr) => {
  const s = _ClassRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClassRoundedIcon = svg(
  svg('path', {
    d: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 4h5v8l-2.5-1.5L6 12z',
  }),
  'ClassRounded',
);
export const ClassSharpIcon = (props?: KTRawAttr) => {
  const s = _ClassSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClassSharpIcon = svg(svg('path', { d: 'M20 2H4v20h16zM6 4h5v8l-2.5-1.5L6 12z' }), 'ClassSharp');
export const ClassTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ClassTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClassTwoToneIcon = svg(
  [
    svg('path', { d: 'm13 13-3-2.25L7 13V4H6v16h12V4h-5z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 4h2v5l-1-.75L9 9zm9 16H6V4h1v9l3-2.25L13 13V4h5z',
      },
      '1',
    ),
  ],
  'ClassTwoTone',
);
export const CleanHandsIcon = (props?: KTRawAttr) => {
  const s = _CleanHandsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CleanHandsIcon = svg(
  svg('path', {
    d: 'm16.99 5 .63 1.37 1.37.63-1.37.63L16.99 9l-.63-1.37L14.99 7l1.37-.63zM11 6.13V4h2c.57 0 1.1.17 1.55.45l1.43-1.43C15.15 2.39 14.13 2 13 2H7.5v2H9v2.14C7.23 6.51 5.81 7.8 5.26 9.5h3.98L15 11.65v-.62c0-2.42-1.72-4.44-4-4.9M1 22h4V11H1zm19-5h-7l-2.09-.73.33-.94L13 16h2.82c.65 0 1.18-.53 1.18-1.18 0-.49-.31-.93-.77-1.11L8.97 11H7v9.02L14 22l8-3c-.01-1.1-.89-2-2-2m0-3c1.1 0 2-.9 2-2s-2-4-2-4-2 2.9-2 4 .9 2 2 2',
  }),
  'CleanHands',
);
export const CleanHandsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CleanHandsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CleanHandsOutlinedIcon = svg(
  svg('path', {
    d: 'm16.99 5 .63 1.37 1.37.63-1.37.63L16.99 9l-.63-1.37L14.99 7l1.37-.63zM20 14c1.1 0 2-.9 2-2s-2-4-2-4-2 2.9-2 4 .9 2 2 2m-9-7.9V4h2c.57 0 1.1.17 1.55.45l1.43-1.43C15.15 2.39 14.13 2 13 2H7.5v2H9v2.11c-1.78.37-3.2 1.68-3.75 3.39h2.16C7.94 8.61 8.89 8 10 8c1.62 0 2.94 1.29 2.99 2.9l2.01.75V11c0-2.42-1.72-4.44-4-4.9M22 19v1l-8 2.5-7-1.94V22H1V11h7.97l6.16 2.3c1.12.42 1.87 1.5 1.87 2.7h2c1.66 0 3 1.34 3 3M5 20v-7H3v7zm14.9-1.43c-.16-.33-.51-.56-.9-.56h-5.35c-.54 0-1.07-.09-1.58-.26l-2.38-.79.63-1.9 2.38.79c.31.1 2.3.15 2.3.15 0-.37-.23-.7-.57-.83L8.61 13H7v5.48l6.97 1.93z',
  }),
  'CleanHandsOutlined',
);
export const CleanHandsRoundedIcon = (props?: KTRawAttr) => {
  const s = _CleanHandsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CleanHandsRoundedIcon = svg(
  svg('path', {
    d: 'm14.99 7 1.37-.63.63-1.37.63 1.37 1.37.63-1.37.63L16.99 9l-.63-1.37zM20 14c1.1 0 2-.9 2-2 0-.78-.99-2.44-1.58-3.36-.2-.31-.64-.31-.84 0C18.99 9.56 18 11.22 18 12c0 1.1.9 2 2 2M9.24 9.5 15 11.65V11c0-2.42-1.72-4.44-4-4.9V4h2c.35 0 .68.06 1 .18.37.13.78.05 1.05-.22.51-.51.34-1.39-.33-1.64C14.19 2.11 13.61 2 13 2H8.5c-.55 0-1 .45-1 1s.45 1 1 1H9v2.11c-1.78.37-3.2 1.68-3.75 3.39zM3 11c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2s2-.9 2-2v-7c0-1.1-.9-2-2-2m16.99 6h-6.83a.96.96 0 0 1-.33-.06l-1.47-.51c-.26-.09-.39-.37-.3-.63s.38-.4.64-.3l1.12.43c.11.04.24.07.36.07h2.63c.65 0 1.18-.53 1.18-1.18 0-.49-.31-.93-.77-1.11L9.3 11.13c-.22-.09-.46-.13-.7-.13H7v9.02l6.37 1.81c.41.12.85.1 1.25-.05L22 19c0-1.11-.9-2-2.01-2',
  }),
  'CleanHandsRounded',
);
export const CleanHandsSharpIcon = (props?: KTRawAttr) => {
  const s = _CleanHandsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CleanHandsSharpIcon = svg(
  svg('path', {
    d: 'm14.99 7 1.37-.63.63-1.37.63 1.37 1.37.63-1.37.63L16.99 9l-.63-1.37zM20 14c1.1 0 2-.9 2-2s-2-4-2-4-2 2.9-2 4 .9 2 2 2M1 22h4V11H1zM9.24 9.5 15 11.65V11c0-2.42-1.72-4.44-4-4.9V4h2c.57 0 1.1.17 1.55.45l1.43-1.43C15.15 2.39 14.13 2 13 2H7.5v2H9v2.11c-1.78.37-3.2 1.68-3.75 3.39zM22 17h-9l-2.09-.73.33-.94L13 16h4v-2l-8.03-3H7v9.02L14 22l8-3z',
  }),
  'CleanHandsSharp',
);
export const CleanHandsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CleanHandsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CleanHandsTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M9.24 9.5H7.42C7.94 8.61 8.89 8 10 8c1.62 0 2.94 1.29 2.99 2.9zM5 20v-7H3v7zm14.9-1.43c-.16-.33-.51-.56-.9-.56h-5.35c-.54 0-1.07-.09-1.58-.26l-2.38-.79.63-1.9 2.38.79c.31.1 2.3.15 2.3.15 0-.37-.23-.7-.57-.83L8.61 13H7v5.48l6.97 1.93z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm16.99 5 .63 1.37 1.37.63-1.37.63L16.99 9l-.63-1.37L14.99 7l1.37-.63zM20 14c1.1 0 2-.9 2-2s-2-4-2-4-2 2.9-2 4 .9 2 2 2m-9-7.9V4h2c.57 0 1.1.17 1.55.45l1.43-1.43C15.15 2.39 14.13 2 13 2H7.5v2H9v2.11c-1.78.37-3.2 1.68-3.75 3.39h2.16C7.94 8.61 8.89 8 10 8c1.62 0 2.94 1.29 2.99 2.9l2.01.75V11c0-2.42-1.72-4.44-4-4.9M22 19v1l-8 2.5-7-1.94V22H1V11h7.97l6.16 2.3c1.12.42 1.87 1.5 1.87 2.7h2c1.66 0 3 1.34 3 3M5 20v-7H3v7zm14.9-1.43c-.16-.33-.51-.56-.9-.56h-5.35c-.54 0-1.07-.09-1.58-.26l-2.38-.79.63-1.9 2.38.79c.31.1 2.3.15 2.3.15 0-.37-.23-.7-.57-.83L8.61 13H7v5.48l6.97 1.93z',
      },
      '1',
    ),
  ],
  'CleanHandsTwoTone',
);
export const CleaningServicesIcon = (props?: KTRawAttr) => {
  const s = _CleaningServicesIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CleaningServicesIcon = svg(
  svg('path', {
    d: 'M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5m3 10h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3z',
  }),
  'CleaningServices',
);
export const CleaningServicesOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CleaningServicesOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CleaningServicesOutlinedIcon = svg(
  svg('path', {
    d: 'M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5m-5-8h2v8h-2zm8 18h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3z',
  }),
  'CleaningServicesOutlined',
);
export const CleaningServicesRoundedIcon = (props?: KTRawAttr) => {
  const s = _CleaningServicesRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CleaningServicesRoundedIcon = svg(
  svg('path', {
    d: 'M16 11h-1V4c0-1.66-1.34-3-3-3S9 2.34 9 4v7H8c-2.76 0-5 2.24-5 5v5c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5c0-2.76-2.24-5-5-5m3 10h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3z',
  }),
  'CleaningServicesRounded',
);
export const CleaningServicesSharpIcon = (props?: KTRawAttr) => {
  const s = _CleaningServicesSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CleaningServicesSharpIcon = svg(
  svg('path', { d: 'M15 11V1H9v10H3v12h18V11zm4 10h-2v-4h-2v4h-2v-4h-2v4H9v-4H7v4H5v-8h14z' }),
  'CleaningServicesSharp',
);
export const CleaningServicesTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CleaningServicesTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CleaningServicesTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M11 3h2v8h-2zm5 10H8c-1.65 0-3 1.35-3 3v5h2v-3c0-.55.45-1 1-1s1 .45 1 1v3h2v-3c0-.55.45-1 1-1s1 .45 1 1v3h2v-3c0-.55.45-1 1-1s1 .45 1 1v3h2v-5c0-1.65-1.35-3-3-3',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5m-5-8h2v8h-2zm8 18h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3z',
      },
      '1',
    ),
  ],
  'CleaningServicesTwoTone',
);
export const ClearIcon = (props?: KTRawAttr) => {
  const s = _ClearIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClearIcon = svg(
  svg('path', {
    d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  }),
  'Clear',
);
export const ClearAllIcon = (props?: KTRawAttr) => {
  const s = _ClearAllIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClearAllIcon = svg(svg('path', { d: 'M5 13h14v-2H5zm-2 4h14v-2H3zM7 7v2h14V7z' }), 'ClearAll');
export const ClearAllOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ClearAllOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClearAllOutlinedIcon = svg(
  svg('path', { d: 'M5 13h14v-2H5zm-2 4h14v-2H3zM7 7v2h14V7z' }),
  'ClearAllOutlined',
);
export const ClearAllRoundedIcon = (props?: KTRawAttr) => {
  const s = _ClearAllRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClearAllRoundedIcon = svg(
  svg('path', {
    d: 'M6 13h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1m-2 4h12c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m3-9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1',
  }),
  'ClearAllRounded',
);
export const ClearAllSharpIcon = (props?: KTRawAttr) => {
  const s = _ClearAllSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClearAllSharpIcon = svg(svg('path', { d: 'M5 13h14v-2H5zm-2 4h14v-2H3zM7 7v2h14V7z' }), 'ClearAllSharp');
export const ClearAllTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ClearAllTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClearAllTwoToneIcon = svg(
  svg('path', { d: 'M5 11h14v2H5zm-2 4h14v2H3zm4-8h14v2H7z' }),
  'ClearAllTwoTone',
);
export const ClearOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ClearOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClearOutlinedIcon = svg(
  svg('path', {
    d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  }),
  'ClearOutlined',
);
export const ClearRoundedIcon = (props?: KTRawAttr) => {
  const s = _ClearRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClearRoundedIcon = svg(
  svg('path', {
    d: 'M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4',
  }),
  'ClearRounded',
);
export const ClearSharpIcon = (props?: KTRawAttr) => {
  const s = _ClearSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClearSharpIcon = svg(
  svg('path', {
    d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  }),
  'ClearSharp',
);
export const ClearTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ClearTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClearTwoToneIcon = svg(
  svg('path', {
    d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  }),
  'ClearTwoTone',
);
export const CloseIcon = (props?: KTRawAttr) => {
  const s = _CloseIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloseIcon = svg(
  svg('path', {
    d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  }),
  'Close',
);
export const CloseFullscreenIcon = (props?: KTRawAttr) => {
  const s = _CloseFullscreenIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloseFullscreenIcon = svg(
  svg('path', {
    d: 'M22 3.41 16.71 8.7 20 12h-8V4l3.29 3.29L20.59 2zM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59z',
  }),
  'CloseFullscreen',
);
export const CloseFullscreenOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CloseFullscreenOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloseFullscreenOutlinedIcon = svg(
  svg('path', {
    d: 'M22 3.41 16.71 8.7 20 12h-8V4l3.29 3.29L20.59 2zM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59z',
  }),
  'CloseFullscreenOutlined',
);
export const CloseFullscreenRoundedIcon = (props?: KTRawAttr) => {
  const s = _CloseFullscreenRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloseFullscreenRoundedIcon = svg(
  svg('path', {
    d: 'M21.29 4.12 16.7 8.71l1.59 1.59c.63.63.18 1.71-.71 1.71H13c-.55 0-1-.45-1-1v-4.6c0-.89 1.08-1.34 1.71-.71l1.59 1.59 4.59-4.59c.39-.39 1.02-.39 1.41 0 .38.4.38 1.03-.01 1.42M4.12 21.29l4.59-4.59 1.59 1.59c.63.63 1.71.18 1.71-.71V13c0-.55-.45-1-1-1h-4.6c-.89 0-1.34 1.08-.71 1.71l1.59 1.59-4.59 4.59c-.39.39-.39 1.02 0 1.41.4.38 1.03.38 1.42-.01',
  }),
  'CloseFullscreenRounded',
);
export const CloseFullscreenSharpIcon = (props?: KTRawAttr) => {
  const s = _CloseFullscreenSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloseFullscreenSharpIcon = svg(
  svg('path', {
    d: 'M22 3.41 16.71 8.7 20 12h-8V4l3.29 3.29L20.59 2zM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59z',
  }),
  'CloseFullscreenSharp',
);
export const CloseFullscreenTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CloseFullscreenTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloseFullscreenTwoToneIcon = svg(
  svg('path', {
    d: 'M22 3.41 16.71 8.7 20 12h-8V4l3.29 3.29L20.59 2zM3.41 22l5.29-5.29L12 20v-8H4l3.29 3.29L2 20.59z',
  }),
  'CloseFullscreenTwoTone',
);
export const CloseOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CloseOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloseOutlinedIcon = svg(
  svg('path', {
    d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  }),
  'CloseOutlined',
);
export const CloseRoundedIcon = (props?: KTRawAttr) => {
  const s = _CloseRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloseRoundedIcon = svg(
  svg('path', {
    d: 'M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4',
  }),
  'CloseRounded',
);
export const CloseSharpIcon = (props?: KTRawAttr) => {
  const s = _CloseSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloseSharpIcon = svg(
  svg('path', {
    d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  }),
  'CloseSharp',
);
export const CloseTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CloseTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloseTwoToneIcon = svg(
  svg('path', {
    d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  }),
  'CloseTwoTone',
);
export const ClosedCaptionIcon = (props?: KTRawAttr) => {
  const s = _ClosedCaptionIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClosedCaptionIcon = svg(
  svg('path', {
    d: 'M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1z',
  }),
  'ClosedCaption',
);
export const ClosedCaptionDisabledIcon = (props?: KTRawAttr) => {
  const s = _ClosedCaptionDisabledIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClosedCaptionDisabledIcon = svg(
  svg('path', {
    d: 'M6.83 4H19c1.1 0 2 .9 2 2v12c0 .05-.01.1-.02.16l-3.38-3.38c.24-.19.4-.46.4-.78v-1h-1.5v.5h-.17l-1.83-1.83V10.5h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v.17zm12.95 18.61L17.17 20H5c-1.11 0-2-.9-2-2V6c0-.05.02-.1.02-.15L1.39 4.22 2.8 2.81l18.38 18.38zM11 13.83l-.83-.83H9.5v.5h-2v-3h.17L6.4 9.22c-.24.19-.4.46-.4.78v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z',
  }),
  'ClosedCaptionDisabled',
);
export const ClosedCaptionDisabledOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ClosedCaptionDisabledOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClosedCaptionDisabledOutlinedIcon = svg(
  svg('path', {
    d: 'M13 10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1h-1.5v-.5h-2v1zm3.5 3.5 1.21 1.21c.18-.19.29-.44.29-.71v-1h-1.5zM8.83 6H19v10.17l1.98 1.98c0-.05.02-.1.02-.16V6c0-1.1-.9-2-2-2H6.83zm10.95 16.61L17.17 20H5c-1.11 0-2-.9-2-2V6c0-.05.02-.1.02-.15L1.39 4.22 2.8 2.81l18.38 18.38zM7.5 13.5h2V13h.67l-2.5-2.5H7.5zm7.67 4.5L11 13.83V14c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.32.16-.59.4-.78L5 7.83V18z',
  }),
  'ClosedCaptionDisabledOutlined',
);
export const ClosedCaptionDisabledRoundedIcon = (props?: KTRawAttr) => {
  const s = _ClosedCaptionDisabledRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClosedCaptionDisabledRoundedIcon = svg(
  svg('path', {
    d: 'M6.83 4H19c1.1 0 2 .9 2 2v12c0 .05-.01.1-.02.16l-3.38-3.38c.24-.19.4-.46.4-.78v-.5c0-.28-.22-.5-.5-.5H17c-.28 0-.5.22-.5.5h-.17l-1.83-1.83V10.5h2c0 .28.22.5.5.5h.5c.28 0 .5-.22.5-.5V10c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v.17zm13.66 17.9c-.39.39-1.02.39-1.41 0l-1.9-1.9H5c-1.11 0-2-.9-2-2V6c0-.05.02-.1.02-.15l-.92-.92a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l16.97 16.97c.4.39.4 1.02.01 1.41M11 13.83l-.83-.83H10c-.28 0-.5.22-.5.5h-2v-3h.17L6.4 9.22c-.24.19-.4.46-.4.78v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z',
  }),
  'ClosedCaptionDisabledRounded',
);
export const ClosedCaptionDisabledSharpIcon = (props?: KTRawAttr) => {
  const s = _ClosedCaptionDisabledSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClosedCaptionDisabledSharpIcon = svg(
  svg('path', {
    d: 'M6.83 4H21v14.17L17.83 15H18v-2h-1.5v.5h-.17l-1.83-1.83V10.5h2v.5H18V9h-5v1.17zm12.95 18.61L17.17 20H3V5.83L1.39 4.22 2.8 2.81l18.38 18.38zM11 13.83l-.83-.83H9.5v.5h-2v-3h.17L6.17 9H6v6h5z',
  }),
  'ClosedCaptionDisabledSharp',
);
export const ClosedCaptionDisabledTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ClosedCaptionDisabledTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClosedCaptionDisabledTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M8.83 6H19v10.17l-1.4-1.4c.24-.18.4-.45.4-.77v-1h-1.5v.5h-.17l-1.83-1.83V10.5h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v.17zM7.5 13.5h2V13h.67l-2.5-2.5H7.5zm3.5.5c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.32.16-.59.4-.78L5 7.83V18h10.17L11 13.83z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M6.83 4H19c1.1 0 2 .9 2 2v12c0 .05-.01.1-.02.16L19 16.17V6H8.83zm12.95 18.61L17.17 20H5c-1.11 0-2-.9-2-2V6c0-.05.02-.1.02-.15L1.39 4.22 2.8 2.81 18 18l1.82 1.82 1.37 1.37zM7.5 13.5h2V13h.67l-2.5-2.5H7.5zm7.67 4.5L11 13.83V14c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.32.16-.59.4-.78L5 7.83V18zM18 14v-1h-1.5v.5h-.17l1.28 1.28c.23-.19.39-.46.39-.78m-3.5-2.33V10.5h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v.17z',
      },
      '1',
    ),
  ],
  'ClosedCaptionDisabledTwoTone',
);
export const ClosedCaptionOffIcon = (props?: KTRawAttr) => {
  const s = _ClosedCaptionOffIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClosedCaptionOffIcon = svg(
  svg('path', {
    d: 'M19.5 5.5v13h-15v-13zM19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1z',
  }),
  'ClosedCaptionOff',
);
export const ClosedCaptionOffOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ClosedCaptionOffOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClosedCaptionOffOutlinedIcon = svg(
  [
    svg(
      'path',
      { d: 'M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H5V6h14z' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M7 15h3c.55 0 1-.45 1-1v-1H9.5v.5h-2v-3h2v.5H11v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m7 0h3c.55 0 1-.45 1-1v-1h-1.5v.5h-2v-3h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1',
      },
      '1',
    ),
  ],
  'ClosedCaptionOffOutlined',
);
export const ClosedCaptionOffRoundedIcon = (props?: KTRawAttr) => {
  const s = _ClosedCaptionOffRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClosedCaptionOffRoundedIcon = svg(
  svg('path', {
    d: 'M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8 6.5c0 .28-.22.5-.5.5H10c-.28 0-.5-.22-.5-.5h-2v3h2c0-.28.22-.5.5-.5h.5c.28 0 .5.22.5.5v.5c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1zm7 0c0 .28-.22.5-.5.5H17c-.28 0-.5-.22-.5-.5h-2v3h2c0-.28.22-.5.5-.5h.5c.28 0 .5.22.5.5v.5c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1z',
  }),
  'ClosedCaptionOffRounded',
);
export const ClosedCaptionOffSharpIcon = (props?: KTRawAttr) => {
  const s = _ClosedCaptionOffSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClosedCaptionOffSharpIcon = svg(
  svg('path', { d: 'M21 4H3v16h18zm-10 7H9.5v-.5h-2v3h2V13H11v2H6V9h5zm7 0h-1.5v-.5h-2v3h2V13H18v2h-5V9h5z' }),
  'ClosedCaptionOffSharp',
);
export const ClosedCaptionOffTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ClosedCaptionOffTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClosedCaptionOffTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19 6H5v12h14zm-8 5H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      { d: 'M5 20h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2M5 6h14v12H5z' },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M10 9H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1H9.5v.5h-2v-3h2v.5H11v-1c0-.55-.45-1-1-1m7 0h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1h-1.5v.5h-2v-3h2v.5H18v-1c0-.55-.45-1-1-1',
      },
      '2',
    ),
  ],
  'ClosedCaptionOffTwoTone',
);
export const ClosedCaptionOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ClosedCaptionOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClosedCaptionOutlinedIcon = svg(
  svg('path', {
    d: 'M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H5V6h14zM7 15h3c.55 0 1-.45 1-1v-1H9.5v.5h-2v-3h2v.5H11v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m7 0h3c.55 0 1-.45 1-1v-1h-1.5v.5h-2v-3h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1',
  }),
  'ClosedCaptionOutlined',
);
export const ClosedCaptionRoundedIcon = (props?: KTRawAttr) => {
  const s = _ClosedCaptionRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClosedCaptionRoundedIcon = svg(
  svg('path', {
    d: 'M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8 6.5c0 .28-.22.5-.5.5H10c-.28 0-.5-.22-.5-.5h-2v3h2c0-.28.22-.5.5-.5h.5c.28 0 .5.22.5.5v.5c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1zm7 0c0 .28-.22.5-.5.5H17c-.28 0-.5-.22-.5-.5h-2v3h2c0-.28.22-.5.5-.5h.5c.28 0 .5.22.5.5v.5c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1z',
  }),
  'ClosedCaptionRounded',
);
export const ClosedCaptionSharpIcon = (props?: KTRawAttr) => {
  const s = _ClosedCaptionSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClosedCaptionSharpIcon = svg(
  svg('path', { d: 'M21 4H3v16h18zm-10 7H9.5v-.5h-2v3h2V13H11v2H6V9h5zm7 0h-1.5v-.5h-2v3h2V13H18v2h-5V9h5z' }),
  'ClosedCaptionSharp',
);
export const ClosedCaptionTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ClosedCaptionTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ClosedCaptionTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19 6H5v12h14zm-8 5H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M5 20h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2M5 6h14v12H5zm5 3H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1H9.5v.5h-2v-3h2v.5H11v-1c0-.55-.45-1-1-1m7 0h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1h-1.5v.5h-2v-3h2v.5H18v-1c0-.55-.45-1-1-1',
      },
      '1',
    ),
  ],
  'ClosedCaptionTwoTone',
);
export const CloudIcon = (props?: KTRawAttr) => {
  const s = _CloudIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96',
  }),
  'Cloud',
);
export const CloudCircleIcon = (props?: KTRawAttr) => {
  const s = _CloudCircleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudCircleIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16',
  }),
  'CloudCircle',
);
export const CloudCircleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CloudCircleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudCircleOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m4.29-9.81c-.4-2.01-2.16-3.52-4.29-3.52-1.69 0-3.15.96-3.88 2.36C6.36 9.21 5 10.7 5 12.5 5 14.43 6.57 16 8.5 16h7.58c1.61 0 2.92-1.31 2.92-2.92 0-1.54-1.2-2.79-2.71-2.89M16 14H8.5c-.83 0-1.5-.67-1.5-1.5S7.67 11 8.5 11h.9l.49-1.05c.41-.79 1.22-1.28 2.11-1.28 1.13 0 2.11.8 2.33 1.91l.28 1.42H16c.55 0 1 .45 1 1s-.45 1-1 1',
  }),
  'CloudCircleOutlined',
);
export const CloudCircleRoundedIcon = (props?: KTRawAttr) => {
  const s = _CloudCircleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudCircleRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3h.14c.44-1.73 1.99-3 3.86-3 2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16',
  }),
  'CloudCircleRounded',
);
export const CloudCircleSharpIcon = (props?: KTRawAttr) => {
  const s = _CloudCircleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudCircleSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3h.14c.44-1.73 1.99-3 3.86-3 2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16',
  }),
  'CloudCircleSharp',
);
export const CloudCircleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CloudCircleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudCircleTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m4.08 12H8.5C6.57 16 5 14.43 5 12.5c0-1.8 1.36-3.29 3.12-3.48.73-1.4 2.19-2.36 3.88-2.36 2.12 0 3.89 1.51 4.29 3.52 1.52.1 2.71 1.35 2.71 2.89 0 1.62-1.31 2.93-2.92 2.93',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m4.29-9.81c-.4-2.01-2.16-3.52-4.29-3.52-1.69 0-3.15.96-3.88 2.36C6.36 9.21 5 10.7 5 12.5 5 14.43 6.57 16 8.5 16h7.58c1.61 0 2.92-1.31 2.92-2.92 0-1.54-1.2-2.79-2.71-2.89M16 14H8.5c-.83 0-1.5-.67-1.5-1.5S7.67 11 8.5 11h.9l.49-1.05c.41-.79 1.22-1.28 2.11-1.28 1.13 0 2.11.8 2.33 1.91l.28 1.42H16c.55 0 1 .45 1 1s-.45 1-1 1',
      },
      '1',
    ),
  ],
  'CloudCircleTwoTone',
);
export const CloudDoneIcon = (props?: KTRawAttr) => {
  const s = _CloudDoneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudDoneIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41z',
  }),
  'CloudDone',
);
export const CloudDoneOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CloudDoneOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudDoneOutlinedIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3m-9-3.82-2.09-2.09L6.5 13.5 10 17l6.01-6.01-1.41-1.41z',
  }),
  'CloudDoneOutlined',
);
export const CloudDoneRoundedIcon = (props?: KTRawAttr) => {
  const s = _CloudDoneRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudDoneRoundedIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96m-8.64 6.25c-.39.39-1.02.39-1.41 0L7.2 14.2a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L10 14.18l4.48-4.48c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41z',
  }),
  'CloudDoneRounded',
);
export const CloudDoneSharpIcon = (props?: KTRawAttr) => {
  const s = _CloudDoneSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudDoneSharpIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M10 17l-3.5-3.5 1.41-1.41L10 14.18 15.18 9l1.41 1.41z',
  }),
  'CloudDoneSharp',
);
export const CloudDoneTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CloudDoneTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudDoneTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm19.21 12.04-1.53-.11-.3-1.5C16.88 7.86 14.62 6 12 6 9.94 6 8.08 7.14 7.12 8.96l-.5.95-1.07.11C3.53 10.24 2 11.95 2 14c0 2.21 1.79 4 4 4h13c1.65 0 3-1.35 3-3 0-1.55-1.22-2.86-2.79-2.96M10 17l-3.5-3.5 1.41-1.41L10 14.18l4.6-4.6 1.41 1.41z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3m-9-3.82-2.09-2.09L6.5 13.5 10 17l6.01-6.01-1.41-1.41z',
      },
      '1',
    ),
  ],
  'CloudDoneTwoTone',
);
export const CloudDownloadIcon = (props?: KTRawAttr) => {
  const s = _CloudDownloadIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudDownloadIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z',
  }),
  'CloudDownload',
);
export const CloudDownloadOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CloudDownloadOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudDownloadOutlinedIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3m-5.55-8h-2.9v3H8l4 4 4-4h-2.55z',
  }),
  'CloudDownloadOutlined',
);
export const CloudDownloadRoundedIcon = (props?: KTRawAttr) => {
  const s = _CloudDownloadRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudDownloadRoundedIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-4.65 4.65c-.2.2-.51.2-.71 0L7 13h3V9h4v4z',
  }),
  'CloudDownloadRounded',
);
export const CloudDownloadSharpIcon = (props?: KTRawAttr) => {
  const s = _CloudDownloadSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudDownloadSharpIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M17 13l-5 5-5-5h3V9h4v4z',
  }),
  'CloudDownloadSharp',
);
export const CloudDownloadTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CloudDownloadTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudDownloadTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm19.21 12.04-1.53-.11-.3-1.5C16.88 7.86 14.62 6 12 6 9.94 6 8.08 7.14 7.12 8.96l-.5.95-1.07.11C3.53 10.24 2 11.95 2 14c0 2.21 1.79 4 4 4h13c1.65 0 3-1.35 3-3 0-1.55-1.22-2.86-2.79-2.96M12 17l-4-4h2.55v-3h2.91v3H16z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3m-5.55-8h-2.9v3H8l4 4 4-4h-2.55z',
      },
      '1',
    ),
  ],
  'CloudDownloadTwoTone',
);
export const CloudOffIcon = (props?: KTRawAttr) => {
  const s = _CloudOffIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudOffIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96M3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4z',
  }),
  'CloudOff',
);
export const CloudOffOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CloudOffOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudOffOutlinedIcon = svg(
  svg('path', {
    d: 'M24 15c0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4c-1.33 0-2.57.36-3.65.97l1.49 1.49C10.51 6.17 11.23 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 .99-.48 1.85-1.21 2.4l1.41 1.41c1.09-.92 1.8-2.27 1.8-3.81M4.41 3.86 3 5.27l2.77 2.77h-.42C2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h11.73l2 2 1.41-1.41zM6 18c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73l8 8z',
  }),
  'CloudOffOutlined',
);
export const CloudOffRoundedIcon = (props?: KTRawAttr) => {
  const s = _CloudOffRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudOffRoundedIcon = svg(
  svg('path', {
    d: 'M24 15c0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4c-1.33 0-2.57.36-3.65.97l1.49 1.49C10.51 6.17 11.23 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 .99-.48 1.85-1.21 2.4l1.41 1.41c1.09-.92 1.8-2.27 1.8-3.81M3.71 4.56c-.39.39-.39 1.02 0 1.41l2.06 2.06h-.42c-3.28.35-5.76 3.34-5.29 6.79C.46 17.84 3.19 20 6.22 20h11.51l1.29 1.29c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L5.12 4.56a.996.996 0 0 0-1.41 0M6 18c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73l8 8z',
  }),
  'CloudOffRounded',
);
export const CloudOffSharpIcon = (props?: KTRawAttr) => {
  const s = _CloudOffSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudOffSharpIcon = svg(
  svg('path', {
    d: 'M24 15c0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4c-1.33 0-2.57.36-3.65.97l1.49 1.49C10.51 6.17 11.23 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 .99-.48 1.85-1.21 2.4l1.41 1.41c1.09-.92 1.8-2.27 1.8-3.81M4.41 3.86 3 5.27l2.77 2.77h-.42C2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h11.73l2 2 1.41-1.41zM6 18c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73l8 8z',
  }),
  'CloudOffSharp',
);
export const CloudOffTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CloudOffTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudOffTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M22 15c0-1.66-1.34-3-3-3h-1.5v-.5C17.5 8.46 15.04 6 12 6c-.77 0-1.49.17-2.16.46L20.79 17.4c.73-.55 1.21-1.41 1.21-2.4M2 14c0 2.21 1.79 4 4 4h9.73l-8-8H6c-2.21 0-4 1.79-4 4',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.33 0-2.57.36-3.65.97l1.49 1.49C10.51 6.17 11.23 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 .99-.48 1.85-1.21 2.4l1.41 1.41c1.09-.92 1.8-2.27 1.8-3.81 0-2.64-2.05-4.78-4.65-4.96M3 5.27l2.77 2.77h-.42C2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h11.73l2 2 1.41-1.41L4.41 3.86zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4z',
      },
      '1',
    ),
  ],
  'CloudOffTwoTone',
);
export const CloudOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CloudOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudOutlinedIcon = svg(
  svg('path', {
    d: 'M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6m0-2C9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4',
  }),
  'CloudOutlined',
);
export const CloudQueueIcon = (props?: KTRawAttr) => {
  const s = _CloudQueueIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudQueueIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3',
  }),
  'CloudQueue',
);
export const CloudQueueOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CloudQueueOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudQueueOutlinedIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3',
  }),
  'CloudQueueOutlined',
);
export const CloudQueueRoundedIcon = (props?: KTRawAttr) => {
  const s = _CloudQueueRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudQueueRoundedIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3',
  }),
  'CloudQueueRounded',
);
export const CloudQueueSharpIcon = (props?: KTRawAttr) => {
  const s = _CloudQueueSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudQueueSharpIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3',
  }),
  'CloudQueueSharp',
);
export const CloudQueueTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CloudQueueTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudQueueTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19 12h-1.5v-.5C17.5 8.46 15.04 6 12 6c-2.52 0-4.63 1.69-5.29 4H6c-2.21 0-4 1.79-4 4s1.79 4 4 4h13c1.66 0 3-1.34 3-3s-1.34-3-3-3',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3',
      },
      '1',
    ),
  ],
  'CloudQueueTwoTone',
);
export const CloudRoundedIcon = (props?: KTRawAttr) => {
  const s = _CloudRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudRoundedIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96',
  }),
  'CloudRounded',
);
export const CloudSharpIcon = (props?: KTRawAttr) => {
  const s = _CloudSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudSharpIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96',
  }),
  'CloudSharp',
);
export const CloudSyncIcon = (props?: KTRawAttr) => {
  const s = _CloudSyncIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudSyncIcon = svg(
  svg('path', {
    d: 'M21.5 14.98c-.02 0-.03 0-.05.01C21.2 13.3 19.76 12 18 12c-1.4 0-2.6.83-3.16 2.02C13.26 14.1 12 15.4 12 17c0 1.66 1.34 3 3 3l6.5-.02c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5M10 4.26v2.09C7.67 7.18 6 9.39 6 12c0 1.77.78 3.34 2 4.44V14h2v6H4v-2h2.73C5.06 16.54 4 14.4 4 12c0-3.73 2.55-6.85 6-7.74M20 6h-2.73c1.43 1.26 2.41 3.01 2.66 5h-2.02c-.23-1.36-.93-2.55-1.91-3.44V10h-2V4h6z',
  }),
  'CloudSync',
);
export const CloudSyncOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CloudSyncOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudSyncOutlinedIcon = svg(
  svg('path', {
    d: 'M21.5 14.98c-.02 0-.03 0-.05.01C21.2 13.3 19.76 12 18 12c-1.4 0-2.6.83-3.16 2.02C13.26 14.1 12 15.4 12 17c0 1.66 1.34 3 3 3l6.5-.02c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5m.01 3.02H15c-.55 0-1-.45-1-1s.45-1 1-1h1.25v-.25c0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75V17h1.76c.28 0 .5.22.5.5-.01.27-.23.5-.5.5M10 4.26v2.09C7.67 7.18 6 9.39 6 12c0 1.77.78 3.34 2 4.44V14h2v6H4v-2h2.73C5.06 16.54 4 14.4 4 12c0-3.73 2.55-6.85 6-7.74M20 6h-2.73c1.43 1.26 2.41 3.01 2.66 5h-2.02c-.23-1.36-.93-2.55-1.91-3.44V10h-2V4h6z',
  }),
  'CloudSyncOutlined',
);
export const CloudSyncRoundedIcon = (props?: KTRawAttr) => {
  const s = _CloudSyncRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudSyncRoundedIcon = svg(
  svg('path', {
    d: 'M24 17.48c0 1.38-1.12 2.5-2.5 2.5L15 20c-1.66 0-3-1.34-3-3 0-1.6 1.26-2.9 2.84-2.98C15.4 12.83 16.6 12 18 12c1.76 0 3.2 1.3 3.45 2.99.02 0 .03-.01.05-.01 1.38 0 2.5 1.12 2.5 2.5M10 15c0-.55-.45-1-1-1s-1 .45-1 1v1.44c-1.22-1.1-2-2.67-2-4.44 0-2.38 1.39-4.43 3.4-5.4.37-.18.6-.56.6-.97 0-.71-.73-1.18-1.37-.88C5.89 6.03 4 8.79 4 12c0 2.4 1.06 4.54 2.73 6H5c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1zm9-9c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7.56c.98.89 1.68 2.08 1.92 3.44h2.02c-.25-1.99-1.23-3.74-2.66-5z',
  }),
  'CloudSyncRounded',
);
export const CloudSyncSharpIcon = (props?: KTRawAttr) => {
  const s = _CloudSyncSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudSyncSharpIcon = svg(
  svg('path', {
    d: 'M21.5 14.98c-.02 0-.03 0-.05.01C21.2 13.3 19.76 12 18 12c-1.4 0-2.6.83-3.16 2.02C13.26 14.1 12 15.4 12 17c0 1.66 1.34 3 3 3l6.5-.02c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5M10 4.26v2.09C7.67 7.18 6 9.39 6 12c0 1.77.78 3.34 2 4.44V14h2v6H4v-2h2.73C5.06 16.54 4 14.4 4 12c0-3.73 2.55-6.85 6-7.74M20 6h-2.73c1.43 1.26 2.41 3.01 2.66 5h-2.02c-.23-1.36-.93-2.55-1.91-3.44V10h-2V4h6z',
  }),
  'CloudSyncSharp',
);
export const CloudSyncTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CloudSyncTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudSyncTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21.51 18H15c-.55 0-1-.45-1-1s.45-1 1-1h1.25v-.25c0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75V17h1.76c.28 0 .5.22.5.5-.01.27-.23.5-.5.5',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M21.5 14.98c-.02 0-.03 0-.05.01C21.2 13.3 19.76 12 18 12c-1.4 0-2.6.83-3.16 2.02C13.26 14.1 12 15.4 12 17c0 1.66 1.34 3 3 3l6.5-.02c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5m.01 3.02H15c-.55 0-1-.45-1-1s.45-1 1-1h1.25v-.25c0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75V17h1.76c.28 0 .5.22.5.5-.01.27-.23.5-.5.5M10 4.26v2.09C7.67 7.18 6 9.39 6 12c0 1.77.78 3.34 2 4.44V14h2v6H4v-2h2.73C5.06 16.54 4 14.4 4 12c0-3.73 2.55-6.85 6-7.74M20 6h-2.73c1.43 1.26 2.41 3.01 2.66 5h-2.02c-.23-1.36-.93-2.55-1.91-3.44V10h-2V4h6z',
      },
      '1',
    ),
  ],
  'CloudSyncTwoTone',
);
export const CloudTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CloudTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm19.21 12.04-1.53-.11-.3-1.5C16.88 7.86 14.62 6 12 6 9.94 6 8.08 7.14 7.12 8.96l-.5.95-1.07.11C3.53 10.24 2 11.95 2 14c0 2.21 1.79 4 4 4h13c1.65 0 3-1.35 3-3 0-1.55-1.22-2.86-2.79-2.96',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3',
      },
      '1',
    ),
  ],
  'CloudTwoTone',
);
export const CloudUploadIcon = (props?: KTRawAttr) => {
  const s = _CloudUploadIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudUploadIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z',
  }),
  'CloudUpload',
);
export const CloudUploadOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CloudUploadOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudUploadOutlinedIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3M8 13h2.55v3h2.9v-3H16l-4-4z',
  }),
  'CloudUploadOutlined',
);
export const CloudUploadRoundedIcon = (props?: KTRawAttr) => {
  const s = _CloudUploadRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudUploadRoundedIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13z',
  }),
  'CloudUploadRounded',
);
export const CloudUploadSharpIcon = (props?: KTRawAttr) => {
  const s = _CloudUploadSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudUploadSharpIcon = svg(
  svg('path', {
    d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z',
  }),
  'CloudUploadSharp',
);
export const CloudUploadTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CloudUploadTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudUploadTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm19.21 12.04-1.53-.11-.3-1.5C16.88 7.86 14.62 6 12 6 9.94 6 8.08 7.14 7.12 8.96l-.5.95-1.07.11C3.53 10.24 2 11.95 2 14c0 2.21 1.79 4 4 4h13c1.65 0 3-1.35 3-3 0-1.55-1.22-2.86-2.79-2.96m-5.76.96v3h-2.91v-3H8l4-4 4 4z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3M8 13h2.55v3h2.9v-3H16l-4-4z',
      },
      '1',
    ),
  ],
  'CloudUploadTwoTone',
);
export const CloudySnowingIcon = (props?: KTRawAttr) => {
  const s = _CloudySnowingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CloudySnowingIcon = svg(
  svg('path', {
    d: 'M5 18c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1m12 0c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1m-9 4c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1m3-4c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1m3 4c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1m3.5-6h-10C4.47 16 2 13.53 2 10.5c0-2.76 2.09-5.09 4.78-5.44C7.83 3.18 9.82 2 12 2c2.97 0 5.45 2.18 5.92 5.02C20.21 7.23 22 9.16 22 11.5c0 2.48-2.02 4.5-4.5 4.5',
  }),
  'CloudySnowing',
);
export const Co2Icon = (props?: KTRawAttr) => {
  const s = _Co2Icon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Co2Icon = svg(
  svg('path', {
    d: 'M14 9h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-.5 4.5h-2v-3h2zM8 13v1c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H6.5v-.5h-2v3h2V13zm12.5 2.5h-2v1h3V18H17v-2.5c0-.55.45-1 1-1h2v-1h-3V12h3.5c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1',
  }),
  'Co2',
);
export const Co2OutlinedIcon = (props?: KTRawAttr) => {
  const s = _Co2OutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Co2OutlinedIcon = svg(
  svg('path', {
    d: 'M14 9h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-.5 4.5h-2v-3h2zM8 13v1c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H6.5v-.5h-2v3h2V13zm12.5 2.5h-2v1h3V18H17v-2.5c0-.55.45-1 1-1h2v-1h-3V12h3.5c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1',
  }),
  'Co2Outlined',
);
export const Co2RoundedIcon = (props?: KTRawAttr) => {
  const s = _Co2RoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Co2RoundedIcon = svg(
  svg('path', {
    d: 'M14 9h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-.5 4.5h-2v-3h2zm7 2h-2v1h2.25c.41 0 .75.34.75.75s-.34.75-.75.75H18c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2v-1h-2.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.75c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1M8 14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v.25c0 .41-.34.75-.75.75-.33 0-.6-.21-.71-.5H4.5v3h2.04c.1-.29.38-.5.71-.5.41 0 .75.34.75.75z',
  }),
  'Co2Rounded',
);
export const Co2SharpIcon = (props?: KTRawAttr) => {
  const s = _Co2SharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Co2SharpIcon = svg(
  svg('path', {
    d: 'M15 9h-5v6h5zm-1.5 4.5h-2v-3h2zM8 13v2H3V9h5v2H6.5v-.5h-2v3h2V13zm10.5 2.5v1h3V18H17v-3.5h3v-1h-3V12h4.5v3.5z',
  }),
  'Co2Sharp',
);
export const Co2TwoToneIcon = (props?: KTRawAttr) => {
  const s = _Co2TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Co2TwoToneIcon = svg(
  svg('path', {
    d: 'M14 9h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-.5 4.5h-2v-3h2zM8 13v1c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H6.5v-.5h-2v3h2V13zm12.5 2.5h-2v1h3V18H17v-2.5c0-.55.45-1 1-1h2v-1h-3V12h3.5c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1',
  }),
  'Co2TwoTone',
);
export const CoPresentIcon = (props?: KTRawAttr) => {
  const s = _CoPresentIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoPresentIcon = svg(
  [
    svg('path', { d: 'M21 3H3c-1.1 0-2 .9-2 2v8h2V5h18v16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2' }, '0'),
    svg('circle', { cx: '9', cy: '10', r: '4' }, '1'),
    svg(
      'path',
      {
        d: 'M15.39 16.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56C1.61 17.07 1 18.1 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66',
      },
      '2',
    ),
  ],
  'CoPresent',
);
export const CoPresentOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CoPresentOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoPresentOutlinedIcon = svg(
  [
    svg('path', { d: 'M21 3H3c-1.1 0-2 .9-2 2v8h2V5h18v16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2' }, '0'),
    svg(
      'path',
      {
        d: 'M13 10c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4m-6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m8.39 6.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56C1.61 17.07 1 18.1 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66M15 20H3c0-.72-.1-1.34.52-1.66C4.71 17.73 6.63 17 9 17s4.29.73 5.48 1.34c.63.32.52.95.52 1.66',
      },
      '1',
    ),
  ],
  'CoPresentOutlined',
);
export const CoPresentRoundedIcon = (props?: KTRawAttr) => {
  const s = _CoPresentRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoPresentRoundedIcon = svg(
  [
    svg('path', { d: 'M21 3H3c-1.1 0-2 .9-2 2v8h2V5h18v16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2' }, '0'),
    svg('circle', { cx: '9', cy: '10', r: '4' }, '1'),
    svg(
      'path',
      {
        d: 'M15.39 16.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56C1.61 17.07 1 18.1 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66',
      },
      '2',
    ),
  ],
  'CoPresentRounded',
);
export const CoPresentSharpIcon = (props?: KTRawAttr) => {
  const s = _CoPresentSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoPresentSharpIcon = svg(
  [
    svg('path', { d: 'M23 3H1v10h2V5h18v16h2z' }, '0'),
    svg('circle', { cx: '9', cy: '10', r: '4' }, '1'),
    svg(
      'path',
      {
        d: 'M15.39 16.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56C1.61 17.07 1 18.1 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66',
      },
      '2',
    ),
  ],
  'CoPresentSharp',
);
export const CoPresentTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CoPresentTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoPresentTwoToneIcon = svg(
  [
    svg('circle', { cx: '9', cy: '10', r: '2', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M14.48 18.34C13.29 17.73 11.37 17 9 17s-4.29.73-5.48 1.34C2.9 18.66 3 19.28 3 20h12c0-.71.11-1.34-.52-1.66',
        opacity: '.3',
      },
      '1',
    ),
    svg('path', { d: 'M21 3H3c-1.1 0-2 .9-2 2v8h2V5h18v16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2' }, '2'),
    svg(
      'path',
      {
        d: 'M13 10c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4m-6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m8.39 6.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56C1.61 17.07 1 18.1 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66M15 20H3c0-.72-.1-1.34.52-1.66C4.71 17.73 6.63 17 9 17s4.29.73 5.48 1.34c.63.32.52.95.52 1.66',
      },
      '3',
    ),
  ],
  'CoPresentTwoTone',
);
export const CodeIcon = (props?: KTRawAttr) => {
  const s = _CodeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CodeIcon = svg(
  svg('path', { d: 'M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z' }),
  'Code',
);
export const CodeOffIcon = (props?: KTRawAttr) => {
  const s = _CodeOffIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CodeOffIcon = svg(
  svg('path', {
    d: 'm19.17 12-4.58-4.59L16 6l6 6-3.59 3.59L17 14.17zM1.39 4.22l4.19 4.19L2 12l6 6 1.41-1.41L4.83 12 7 9.83l12.78 12.78 1.41-1.41L2.81 2.81z',
  }),
  'CodeOff',
);
export const CodeOffOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CodeOffOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CodeOffOutlinedIcon = svg(
  svg('path', {
    d: 'm19.17 12-4.58-4.59L16 6l6 6-3.59 3.59L17 14.17zM1.39 4.22l4.19 4.19L2 12l6 6 1.41-1.41L4.83 12 7 9.83l12.78 12.78 1.41-1.41L2.81 2.81z',
  }),
  'CodeOffOutlined',
);
export const CodeOffRoundedIcon = (props?: KTRawAttr) => {
  const s = _CodeOffRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CodeOffRoundedIcon = svg(
  svg('path', {
    d: 'm19.17 12-3.88-3.88a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-2.88 2.88L17 14.17zM2.1 4.93l3.49 3.49-2.88 2.88c-.39.39-.39 1.02 0 1.41L7.3 17.3c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L4.83 12 7 9.83 19.07 21.9c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.4-.39 1.03 0 1.42',
  }),
  'CodeOffRounded',
);
export const CodeOffSharpIcon = (props?: KTRawAttr) => {
  const s = _CodeOffSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CodeOffSharpIcon = svg(
  svg('path', {
    d: 'm19.17 12-4.58-4.59L16 6l6 6-3.59 3.59L17 14.17zM1.39 4.22l4.19 4.19L2 12l6 6 1.41-1.41L4.83 12 7 9.83l12.78 12.78 1.41-1.41L2.81 2.81z',
  }),
  'CodeOffSharp',
);
export const CodeOffTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CodeOffTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CodeOffTwoToneIcon = svg(
  svg('path', {
    d: 'm19.17 12-4.58-4.59L16 6l6 6-3.59 3.59L17 14.17zM1.39 4.22l4.19 4.19L2 12l6 6 1.41-1.41L4.83 12 7 9.83l12.78 12.78 1.41-1.41L2.81 2.81z',
  }),
  'CodeOffTwoTone',
);
export const CodeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CodeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CodeOutlinedIcon = svg(
  svg('path', { d: 'M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z' }),
  'CodeOutlined',
);
export const CodeRoundedIcon = (props?: KTRawAttr) => {
  const s = _CodeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CodeRoundedIcon = svg(
  svg('path', {
    d: 'M8.7 15.9 4.8 12l3.9-3.9c.39-.39.39-1.01 0-1.4a.984.984 0 0 0-1.4 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0s.39-1.01 0-1.4m6.6 0 3.9-3.9-3.9-3.9a.984.984 0 0 1 0-1.4c.39-.39 1.01-.39 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6c-.39.39-1.01.39-1.4 0a.984.984 0 0 1 0-1.4',
  }),
  'CodeRounded',
);
export const CodeSharpIcon = (props?: KTRawAttr) => {
  const s = _CodeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CodeSharpIcon = svg(
  svg('path', { d: 'M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z' }),
  'CodeSharp',
);
export const CodeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CodeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CodeTwoToneIcon = svg(
  svg('path', { d: 'M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z' }),
  'CodeTwoTone',
);
export const CoffeeIcon = (props?: KTRawAttr) => {
  const s = _CoffeeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoffeeIcon = svg(
  svg('path', {
    d: 'M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3M16 5v3H6V5zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8M4 19h16v2H4z',
  }),
  'Coffee',
);
export const CoffeeMakerIcon = (props?: KTRawAttr) => {
  const s = _CoffeeMakerIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoffeeMakerIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M18 6V4h2V2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14v-2h-4.03c1.23-.91 2.03-2.36 2.03-4v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1',
      },
      '0',
    ),
    svg('circle', { cx: '13', cy: '9', r: '1' }, '1'),
  ],
  'CoffeeMaker',
);
export const CoffeeMakerOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CoffeeMakerOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoffeeMakerOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M18 6V4h2V2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14v-2h-4.03c1.23-.91 2.03-2.36 2.03-4v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1m-8 10v-3h6v3c0 1.65-1.35 3-3 3s-3-1.35-3-3',
      },
      '0',
    ),
    svg('circle', { cx: '13', cy: '9', r: '1' }, '1'),
  ],
  'CoffeeMakerOutlined',
);
export const CoffeeMakerRoundedIcon = (props?: KTRawAttr) => {
  const s = _CoffeeMakerRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoffeeMakerRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M18 6V4h1c.55 0 1-.45 1-1s-.45-1-1-1H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1h-3.03c1.23-.91 2.03-2.36 2.03-4v-3c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v3c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1',
      },
      '0',
    ),
    svg('circle', { cx: '13', cy: '9', r: '1' }, '1'),
  ],
  'CoffeeMakerRounded',
);
export const CoffeeMakerSharpIcon = (props?: KTRawAttr) => {
  const s = _CoffeeMakerSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoffeeMakerSharpIcon = svg(
  [
    svg(
      'path',
      { d: 'M18 7V4h2V2H4v20h16v-2h-4.03c1.23-.91 2.03-2.36 2.03-4v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v3z' },
      '0',
    ),
    svg('circle', { cx: '13', cy: '9', r: '1' }, '1'),
  ],
  'CoffeeMakerSharp',
);
export const CoffeeMakerTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CoffeeMakerTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoffeeMakerTwoToneIcon = svg(
  [
    svg('path', { d: 'M13 19c1.65 0 3-1.35 3-3v-3h-6v3c0 1.65 1.35 3 3 3', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M9 7h8c.55 0 1-.45 1-1V4h2V2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14v-2h-4.03c1.23-.91 2.03-2.36 2.03-4v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1m1 9v-3h6v3c0 1.65-1.35 3-3 3s-3-1.35-3-3',
      },
      '1',
    ),
    svg('circle', { cx: '13', cy: '9', r: '1' }, '2'),
  ],
  'CoffeeMakerTwoTone',
);
export const CoffeeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CoffeeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoffeeOutlinedIcon = svg(
  svg('path', {
    d: 'M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3M16 5v3H6V5zm0 5v1c0 2.76-2.24 5-5 5s-5-2.24-5-5v-1m12.5-2H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8M4 19h16v2H4z',
  }),
  'CoffeeOutlined',
);
export const CoffeeRoundedIcon = (props?: KTRawAttr) => {
  const s = _CoffeeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoffeeRoundedIcon = svg(
  svg('path', {
    d: 'M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3M16 5v3H6V5zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8M5 19h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1',
  }),
  'CoffeeRounded',
);
export const CoffeeSharpIcon = (props?: KTRawAttr) => {
  const s = _CoffeeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoffeeSharpIcon = svg(
  svg('path', {
    d: 'M18.5 3H4v8c0 3.87 3.13 7 7 7s7-3.13 7-7v-1h.4c1.67 0 3.19-1.13 3.52-2.77C22.39 4.98 20.67 3 18.5 3M16 5v3H6V5zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8M4 19h16v2H4z',
  }),
  'CoffeeSharp',
);
export const CoffeeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CoffeeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoffeeTwoToneIcon = svg(
  [
    svg('path', { d: 'M6 11c0 2.76 2.24 5 5 5s5-2.24 5-5v-1H6z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M4 19h16v2H4zM18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3M16 11c0 2.76-2.24 5-5 5s-5-2.24-5-5v-1h10zm0-3H6V5h10zm2.5 0H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8',
      },
      '1',
    ),
  ],
  'CoffeeTwoTone',
);
export const CollectionsIcon = (props?: KTRawAttr) => {
  const s = _CollectionsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CollectionsIcon = svg(
  svg('path', {
    d: 'M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2m-11-4 2.03 2.71L16 11l4 5H8zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6z',
  }),
  'Collections',
);
export const CollectionsBookmarkIcon = (props?: KTRawAttr) => {
  const s = _CollectionsBookmarkIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CollectionsBookmarkIcon = svg(
  [
    svg('path', { d: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4z' }, '0'),
    svg(
      'path',
      { d: 'M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 10-2.5-1.5L15 12V4h5z' },
      '1',
    ),
  ],
  'CollectionsBookmark',
);
export const CollectionsBookmarkOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CollectionsBookmarkOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CollectionsBookmarkOutlinedIcon = svg(
  svg('path', {
    d: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-3 2v5l-1-.75L15 9V4zm3 12H8V4h5v9l3-2.25L19 13V4h1z',
  }),
  'CollectionsBookmarkOutlined',
);
export const CollectionsBookmarkRoundedIcon = (props?: KTRawAttr) => {
  const s = _CollectionsBookmarkRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CollectionsBookmarkRoundedIcon = svg(
  svg('path', {
    d: 'M17 20H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1m3-18H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 10-2.5-1.5L15 12V4h5z',
  }),
  'CollectionsBookmarkRounded',
);
export const CollectionsBookmarkSharpIcon = (props?: KTRawAttr) => {
  const s = _CollectionsBookmarkSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CollectionsBookmarkSharpIcon = svg(
  svg('path', { d: 'M4 6H2v16h16v-2H4zm18-4H6v16h16zm-2 10-2.5-1.5L15 12V4h5z' }),
  'CollectionsBookmarkSharp',
);
export const CollectionsBookmarkTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CollectionsBookmarkTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CollectionsBookmarkTwoToneIcon = svg(
  [
    svg('path', { d: 'M20 4h-1v9l-3-2.25L13 13V4H8v12h12z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2m18-6V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2M15 4h2v5l-1-.75L15 9zM8 4h5v9l3-2.25L19 13V4h1v12H8z',
      },
      '1',
    ),
  ],
  'CollectionsBookmarkTwoTone',
);
export const CollectionsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CollectionsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CollectionsOutlinedIcon = svg(
  svg('path', {
    d: 'M20 4v12H8V4zm0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8.5 9.67 1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6z',
  }),
  'CollectionsOutlined',
);
export const CollectionsRoundedIcon = (props?: KTRawAttr) => {
  const s = _CollectionsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CollectionsRoundedIcon = svg(
  svg('path', {
    d: 'M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2m-10.6-3.47 1.63 2.18 2.58-3.22c.2-.25.58-.25.78 0l2.96 3.7c.26.33.03.81-.39.81H9c-.41 0-.65-.47-.4-.8l2-2.67c.2-.26.6-.26.8 0M2 7v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1s-1 .45-1 1',
  }),
  'CollectionsRounded',
);
export const CollectionsSharpIcon = (props?: KTRawAttr) => {
  const s = _CollectionsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CollectionsSharpIcon = svg(
  svg('path', { d: 'M22 18V2H6v16zm-11-6 2.03 2.71L16 11l4 5H8zM2 6v16h16v-2H4V6z' }),
  'CollectionsSharp',
);
export const CollectionsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CollectionsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CollectionsTwoToneIcon = svg(
  [
    svg('path', { d: 'M8 16h12V4H8zm3.5-4.33 1.69 2.26 2.48-3.09L19 15H9z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M8 2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm12 14H8V4h12zm-4.33-5.17-2.48 3.09-1.69-2.25L9 15h10zM4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2',
      },
      '1',
    ),
  ],
  'CollectionsTwoTone',
);
export const ColorLensIcon = (props?: KTRawAttr) => {
  const s = _ColorLensIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ColorLensIcon = svg(
  svg('path', {
    d: 'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8m-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12m3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8m5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8m3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'ColorLens',
);
export const ColorLensOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ColorLensOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ColorLensOutlinedIcon = svg(
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
  'ColorLensOutlined',
);
export const ColorLensRoundedIcon = (props?: KTRawAttr) => {
  const s = _ColorLensRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ColorLensRoundedIcon = svg(
  svg('path', {
    d: 'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8m-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12m3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8m5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8m3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'ColorLensRounded',
);
export const ColorLensSharpIcon = (props?: KTRawAttr) => {
  const s = _ColorLensSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ColorLensSharpIcon = svg(
  svg('path', {
    d: 'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8m-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12m3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8m5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8m3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'ColorLensSharp',
);
export const ColorLensTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ColorLensTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ColorLensTwoToneIcon = svg(
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
  'ColorLensTwoTone',
);
export const ColorizeIcon = (props?: KTRawAttr) => {
  const s = _ColorizeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ColorizeIcon = svg(
  svg('path', {
    d: 'm20.71 5.63-2.34-2.34a.996.996 0 0 0-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42M6.92 19 5 17.08l8.06-8.06 1.92 1.92z',
  }),
  'Colorize',
);
export const ColorizeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ColorizeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ColorizeOutlinedIcon = svg(
  svg('path', {
    d: 'm17.66 5.41.92.92-2.69 2.69-.92-.92zM17.67 3c-.26 0-.51.1-.71.29l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42l-2.34-2.34c-.2-.19-.45-.29-.7-.29M6.92 19 5 17.08l8.06-8.06 1.92 1.92z',
  }),
  'ColorizeOutlined',
);
export const ColorizeRoundedIcon = (props?: KTRawAttr) => {
  const s = _ColorizeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ColorizeRoundedIcon = svg(
  svg('path', {
    d: 'm20.71 5.63-2.34-2.34a.996.996 0 0 0-1.41 0l-3.12 3.12-1.23-1.21c-.39-.39-1.02-.38-1.41 0-.39.39-.39 1.02 0 1.41l.72.72-8.77 8.77q-.15.15-.15.36v4.04c0 .28.22.5.5.5h4.04c.13 0 .26-.05.35-.15l8.77-8.77.72.72c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-1.22-1.22 3.12-3.12c.41-.4.41-1.03.02-1.42M6.92 19 5 17.08l8.06-8.06 1.92 1.92z',
  }),
  'ColorizeRounded',
);
export const ColorizeSharpIcon = (props?: KTRawAttr) => {
  const s = _ColorizeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ColorizeSharpIcon = svg(
  svg('path', {
    d: 'm21.42 6.34-3.75-3.75-3.82 3.82-1.94-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92zM6.92 19 5 17.08l8.06-8.06 1.92 1.92z',
  }),
  'ColorizeSharp',
);
export const ColorizeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ColorizeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ColorizeTwoToneIcon = svg(
  [
    svg('path', { d: 'm15.896 9.023-.92-.92L17.67 5.41l.92.92z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'm20.71 5.63-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42M6.92 19 5 17.08l8.06-8.06 1.92 1.92zm8.98-9.97-.93-.93 2.69-2.69.92.92z',
      },
      '1',
    ),
  ],
  'ColorizeTwoTone',
);
export const CommentIcon = (props?: KTRawAttr) => {
  const s = _CommentIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommentIcon = svg(
  svg('path', {
    d: 'M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zM18 14H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z',
  }),
  'Comment',
);
export const CommentBankIcon = (props?: KTRawAttr) => {
  const s = _CommentBankIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommentBankIcon = svg(
  svg('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-1 11-2.5-1.5L14 13V5h5z' }),
  'CommentBank',
);
export const CommentBankOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CommentBankOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommentBankOutlinedIcon = svg(
  [
    svg('path', { d: 'M18 14V6h-5v8l2.5-1.5z' }, '0'),
    svg('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z' }, '1'),
  ],
  'CommentBankOutlined',
);
export const CommentBankRoundedIcon = (props?: KTRawAttr) => {
  const s = _CommentBankRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommentBankRoundedIcon = svg(
  svg('path', {
    d: 'M20 2H4c-1.1 0-2 .9-2 2v15.59c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-1.76 9.55L16.5 10.5l-1.74 1.05c-.33.2-.76-.04-.76-.43V4h5v7.12c0 .39-.42.63-.76.43',
  }),
  'CommentBankRounded',
);
export const CommentBankSharpIcon = (props?: KTRawAttr) => {
  const s = _CommentBankSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommentBankSharpIcon = svg(
  svg('path', { d: 'M2 2v20l4-4h16V2zm17 11-2.5-1.5L14 13V5h5z' }),
  'CommentBankSharp',
);
export const CommentBankTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CommentBankTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommentBankTwoToneIcon = svg(
  [
    svg('path', { d: 'm4 18 2-2h14V4H4zm9-12h5v8l-2.5-1.5L13 14z', opacity: '.3' }, '0'),
    svg('path', { d: 'M18 14V6h-5v8l2.5-1.5z' }, '1'),
    svg('path', { d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z' }, '2'),
  ],
  'CommentBankTwoTone',
);
export const CommentOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CommentOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommentOutlinedIcon = svg(
  svg('path', {
    d: 'M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zM20 4v13.17L18.83 16H4V4zM6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z',
  }),
  'CommentOutlined',
);
export const CommentRoundedIcon = (props?: KTRawAttr) => {
  const s = _CommentRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommentRoundedIcon = svg(
  svg('path', {
    d: 'M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zM17 14H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1m0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1m0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1',
  }),
  'CommentRounded',
);
export const CommentSharpIcon = (props?: KTRawAttr) => {
  const s = _CommentSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommentSharpIcon = svg(
  svg('path', { d: 'M21.99 2H2v16h16l4 4zM18 14H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z' }),
  'CommentSharp',
);
export const CommentTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CommentTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommentTwoToneIcon = svg(
  [
    svg('path', { d: 'M20 17.17V4H4v12h14.83zM18 14H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M4 18h14l4 4-.01-18c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M4 4h16v13.17L18.83 16H4zm2 8h12v2H6zm0-3h12v2H6zm0-3h12v2H6z',
      },
      '1',
    ),
  ],
  'CommentTwoTone',
);
export const CommentsDisabledIcon = (props?: KTRawAttr) => {
  const s = _CommentsDisabledIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommentsDisabledIcon = svg(
  svg('path', {
    d: 'M16.83 14H18v-2h-3.17l-1-1H18V9h-6.17l-1-1H18V6H8.83l-4-4H20c1.1 0 2 .9 2 2v15.17zM2.1 2.1.69 3.51 2 4.83V16c0 1.1.9 2 2 2h11.17l5.31 5.31 1.41-1.41zM6 9h.17l2 2H6zm0 5v-2h3.17l2 2z',
  }),
  'CommentsDisabled',
);
export const CommentsDisabledOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CommentsDisabledOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommentsDisabledOutlinedIcon = svg(
  svg('path', {
    d: 'M18.83 16H20V4H6.83l-2-2H20c1.1 0 2 .9 2 2v15.17zM18 6H8.83l2 2H18zm0 3h-6.17l2 2H18zm0 5v-2h-3.17l2 2zm3.9 7.9-1.41 1.41L15.17 18H4c-1.1 0-2-.9-2-2V4.83L.69 3.51 2.1 2.1zM13.17 16l-2-2H6v-2h3.17l-1-1H6V9h.17L4 6.83V16z',
  }),
  'CommentsDisabledOutlined',
);
export const CommentsDisabledRoundedIcon = (props?: KTRawAttr) => {
  const s = _CommentsDisabledRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommentsDisabledRoundedIcon = svg(
  svg('path', {
    d: 'M1.39 2.81C1 3.2 1 3.83 1.39 4.22l.61.61V16c0 1.1.9 2 2 2h11.17l4.61 4.61c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L2.81 2.81c-.39-.39-1.03-.39-1.42 0m4.99 6.4L8.17 11H7c-.55 0-1-.45-1-1 0-.32.15-.6.38-.79M7 14c-.55 0-1-.45-1-1s.45-1 1-1h2.17l2 2zm7.83-2-1-1H17c.55 0 1-.45 1-1s-.45-1-1-1h-5.17l-1-1H17c.55 0 1-.45 1-1s-.45-1-1-1H8.83l-4-4H20c1.1 0 2 .9 2 2v15.17L16.83 14H17c.55 0 1-.45 1-1s-.45-1-1-1z',
  }),
  'CommentsDisabledRounded',
);
export const CommentsDisabledSharpIcon = (props?: KTRawAttr) => {
  const s = _CommentsDisabledSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommentsDisabledSharpIcon = svg(
  svg('path', {
    d: 'M16.83 14H18v-2h-3.17l-1-1H18V9h-6.17l-1-1H18V6H8.83l-4-4H22v17.17zM2.1 2.1.69 3.51 2 4.83V18h13.17l5.31 5.31 1.41-1.41zM6 9h.17l2 2H6zm0 5v-2h3.17l2 2z',
  }),
  'CommentsDisabledSharp',
);
export const CommentsDisabledTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CommentsDisabledTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommentsDisabledTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M6.83 4H20v12h-1.17l-2-2H18v-2h-3.17l-1-1H18V9h-6.17l-1-1H18V6H8.83zm6.34 12-2-2H6v-2h3.17l-1-1H6V9h.17L4 6.83V16z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M18.83 16H20V4H6.83l-2-2H20c1.1 0 2 .9 2 2v15.17zM18 6H8.83l2 2H18zm0 3h-6.17l2 2H18zm0 5v-2h-3.17l2 2zm3.9 7.9-1.41 1.41L15.17 18H4c-1.1 0-2-.9-2-2V4.83L.69 3.51 2.1 2.1zM13.17 16l-2-2H6v-2h3.17l-1-1H6V9h.17L4 6.83V16z',
      },
      '1',
    ),
  ],
  'CommentsDisabledTwoTone',
);
export const CommitIcon = (props?: KTRawAttr) => {
  const s = _CommitIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommitIcon = svg(
  svg('path', {
    d: 'M16.9 11c-.46-2.28-2.48-4-4.9-4s-4.44 1.72-4.9 4H2v2h5.1c.46 2.28 2.48 4 4.9 4s4.44-1.72 4.9-4H22v-2zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3',
  }),
  'Commit',
);
export const CommitOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CommitOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommitOutlinedIcon = svg(
  svg('path', {
    d: 'M16.9 11c-.46-2.28-2.48-4-4.9-4s-4.44 1.72-4.9 4H2v2h5.1c.46 2.28 2.48 4 4.9 4s4.44-1.72 4.9-4H22v-2zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3',
  }),
  'CommitOutlined',
);
export const CommitRoundedIcon = (props?: KTRawAttr) => {
  const s = _CommitRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommitRoundedIcon = svg(
  svg('path', {
    d: 'M21 13c.55 0 1-.45 1-1s-.45-1-1-1h-4.1c-.46-2.28-2.48-4-4.9-4s-4.44 1.72-4.9 4H3c-.55 0-1 .45-1 1s.45 1 1 1h4.1c.46 2.28 2.48 4 4.9 4s4.44-1.72 4.9-4zm-9 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3',
  }),
  'CommitRounded',
);
export const CommitSharpIcon = (props?: KTRawAttr) => {
  const s = _CommitSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommitSharpIcon = svg(
  svg('path', {
    d: 'M16.9 11c-.46-2.28-2.48-4-4.9-4s-4.44 1.72-4.9 4H2v2h5.1c.46 2.28 2.48 4 4.9 4s4.44-1.72 4.9-4H22v-2zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3',
  }),
  'CommitSharp',
);
export const CommitTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CommitTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommitTwoToneIcon = svg(
  svg('path', {
    d: 'M16.9 11c-.46-2.28-2.48-4-4.9-4s-4.44 1.72-4.9 4H2v2h5.1c.46 2.28 2.48 4 4.9 4s4.44-1.72 4.9-4H22v-2zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3',
  }),
  'CommitTwoTone',
);
export const CommuteIcon = (props?: KTRawAttr) => {
  const s = _CommuteIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommuteIcon = svg(
  svg('path', {
    d: 'M12 4H5C3.34 4 2 5.34 2 7v8c0 1.66 1.34 3 3 3l-1 1v1h1l2-2.03L9 18v-5H4V5.98L13 6v2h2V7c0-1.66-1.34-3-3-3M5 14c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m15.57-4.34c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66L10 13.77l.01 5.51c0 .38.31.72.69.72h.62c.38 0 .68-.38.68-.76V18h8v1.24c0 .38.31.76.69.76h.61c.38 0 .69-.34.69-.72l.01-1.37v-4.14zm-8.16.34h7.19l1.03 3h-9.25zM12 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'Commute',
);
export const CommuteOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CommuteOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommuteOutlinedIcon = svg(
  svg('path', {
    d: 'M12 4H5C3.34 4 2 5.34 2 7v8c0 1.66 1.34 3 3 3l-1 1v1h1l2-2h2v-5H4V6h9v2h2V7c0-1.66-1.34-3-3-3M5 14c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m15.57-4.34c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66l-1.42 4.11v5.51c0 .38.31.72.69.72h.62c.38 0 .68-.38.68-.76V18h8v1.24c0 .38.31.76.69.76h.61c.38 0 .69-.34.69-.72l.01-1.37v-4.14zm-8.16.34h7.19l1.03 3h-9.25zM12 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'CommuteOutlined',
);
export const CommuteRoundedIcon = (props?: KTRawAttr) => {
  const s = _CommuteRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommuteRoundedIcon = svg(
  svg('path', {
    d: 'M12 4H5C3.34 4 2 5.34 2 7v8c0 1.66 1.34 3 3 3l-.77.77c-.28.28-.28.72 0 1s.72.28 1 0L7 18h2v-5H4.5c-.28 0-.5-.22-.5-.5v-6c0-.28.22-.5.5-.5h8c.28 0 .5.22.5.5V8h2V7c0-1.66-1.34-3-3-3M5 14c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m15.57-4.34c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66l-1.42 4.11v5.24c0 .55.45.99 1 .99s1-.45 1-1v-1h8v1c0 .55.45 1 1 1s.99-.44 1-.99L22 13.77zm-7.8.34h6.48c.21 0 .4.14.47.34l.69 2c.11.32-.13.66-.47.66h-7.85c-.34 0-.58-.34-.47-.66l.69-2c.05-.2.24-.34.46-.34M12 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'CommuteRounded',
);
export const CommuteSharpIcon = (props?: KTRawAttr) => {
  const s = _CommuteSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommuteSharpIcon = svg(
  svg('path', {
    d: 'M12 4H5C3.34 4 2 5.34 2 7v8c0 1.66 1.34 3 3 3l-1 1v1h1l2-2h2v-5H4V6h9v2h2V7c0-1.66-1.34-3-3-3M5 14c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m15.57-4.34c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66l-1.42 4.11v5.51c0 .38.31.72.69.72h.62c.38 0 .68-.38.68-.76V18h8v1.24c0 .38.31.76.69.76h.61c.38 0 .69-.34.69-.72l.01-1.37v-4.14zm-8.16.34h7.19l1.03 3h-9.25zM12 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'CommuteSharp',
);
export const CommuteTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CommuteTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CommuteTwoToneIcon = svg(
  svg('path', {
    d: 'M12 4H5C3.34 4 2 5.34 2 7v8c0 1.66 1.34 3 3 3l-1 1v1h1l2-2h2v-5H4V6h9v2h2V7c0-1.66-1.34-3-3-3M5 14c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m15.57-4.34c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66l-1.42 4.11v5.51c0 .38.31.72.69.72h.62c.38 0 .68-.38.68-.76V18h8v1.24c0 .38.31.76.69.76h.61c.38 0 .69-.34.69-.72l.01-1.37v-4.14zm-8.16.34h7.19l1.03 3h-9.25zM12 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'CommuteTwoTone',
);
export const CompareIcon = (props?: KTRawAttr) => {
  const s = _CompareIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompareIcon = svg(
  svg('path', {
    d: 'M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2zm0 15H5l5-6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2',
  }),
  'Compare',
);
export const CompareArrowsIcon = (props?: KTRawAttr) => {
  const s = _CompareArrowsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompareArrowsIcon = svg(
  svg('path', { d: 'M9.01 14H2v2h7.01v3L13 15l-3.99-4zm5.98-1v-3H22V8h-7.01V5L11 9z' }),
  'CompareArrows',
);
export const CompareArrowsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CompareArrowsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompareArrowsOutlinedIcon = svg(
  svg('path', { d: 'M9.01 14H2v2h7.01v3L13 15l-3.99-4zm5.98-1v-3H22V8h-7.01V5L11 9z' }),
  'CompareArrowsOutlined',
);
export const CompareArrowsRoundedIcon = (props?: KTRawAttr) => {
  const s = _CompareArrowsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompareArrowsRoundedIcon = svg(
  svg('path', {
    d: 'M9.01 14H3c-.55 0-1 .45-1 1s.45 1 1 1h6.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35zm5.98-2.21V10H21c.55 0 1-.45 1-1s-.45-1-1-1h-6.01V6.21c0-.45-.54-.67-.85-.35l-2.78 2.79c-.19.2-.19.51 0 .71l2.78 2.79c.31.31.85.09.85-.36',
  }),
  'CompareArrowsRounded',
);
export const CompareArrowsSharpIcon = (props?: KTRawAttr) => {
  const s = _CompareArrowsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompareArrowsSharpIcon = svg(
  svg('path', { d: 'M9.01 14H2v2h7.01v3L13 15l-3.99-4zm5.98-1v-3H22V8h-7.01V5L11 9z' }),
  'CompareArrowsSharp',
);
export const CompareArrowsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CompareArrowsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompareArrowsTwoToneIcon = svg(
  svg('path', { d: 'M9.01 14H2v2h7.01v3L13 15l-3.99-4zm5.98-1v-3H22V8h-7.01V5L11 9z' }),
  'CompareArrowsTwoTone',
);
export const CompareOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CompareOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompareOutlinedIcon = svg(
  svg('path', {
    d: 'M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2zm0 15H5l5-6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2',
  }),
  'CompareOutlined',
);
export const CompareRoundedIcon = (props?: KTRawAttr) => {
  const s = _CompareRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompareRoundedIcon = svg(
  svg('path', {
    d: 'M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 15H5l5-6zm9-15h-5v2h4c.55 0 1 .45 1 1v12l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2',
  }),
  'CompareRounded',
);
export const CompareSharpIcon = (props?: KTRawAttr) => {
  const s = _CompareSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompareSharpIcon = svg(
  svg('path', { d: 'M10 3H3v18h7v2h2V1h-2zm0 15H5l5-6zM21 3h-7v2h5v13l-5-6v9h7z' }),
  'CompareSharp',
);
export const CompareTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CompareTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompareTwoToneIcon = svg(
  [
    svg('path', { d: 'M19 5h-5v7l5 6zm-9 13v-6l-5 6z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M19 3h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-2h-2v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2zm-2 17H5l5-6z',
      },
      '1',
    ),
  ],
  'CompareTwoTone',
);
export const CompassCalibrationIcon = (props?: KTRawAttr) => {
  const s = _CompassCalibrationIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompassCalibrationIcon = svg(
  [
    svg('circle', { cx: '12', cy: '17', r: '4' }, '0'),
    svg(
      'path',
      {
        d: 'M12 10.07c1.95 0 3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3S4.56 4.59 2 7.15l5 5c1.28-1.28 3.05-2.08 5-2.08',
      },
      '1',
    ),
  ],
  'CompassCalibration',
);
export const CompassCalibrationOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CompassCalibrationOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompassCalibrationOutlinedIcon = svg(
  svg('path', {
    d: 'M12 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3m0-17C8.1 3 4.56 4.59 2 7.15l5 5c1.28-1.28 3.05-2.08 5-2.08s3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3m4.84 6.47c-1.44-.91-3.1-1.4-4.84-1.4s-3.41.49-4.85 1.41L4.94 7.26C6.99 5.79 9.44 5 12 5s5 .79 7.05 2.26z',
  }),
  'CompassCalibrationOutlined',
);
export const CompassCalibrationRoundedIcon = (props?: KTRawAttr) => {
  const s = _CompassCalibrationRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompassCalibrationRoundedIcon = svg(
  [
    svg('circle', { cx: '12', cy: '17', r: '4' }, '0'),
    svg(
      'path',
      {
        d: 'M12 3C8.49 3 5.28 4.29 2.8 6.41c-.44.38-.48 1.06-.06 1.48l3.6 3.6c.36.36.92.39 1.32.08 1.2-.94 2.71-1.5 4.34-1.5 1.64 0 3.14.56 4.34 1.49.4.31.96.28 1.31-.08l3.6-3.6c.42-.42.38-1.1-.07-1.48C18.72 4.28 15.51 3 12 3',
      },
      '1',
    ),
  ],
  'CompassCalibrationRounded',
);
export const CompassCalibrationSharpIcon = (props?: KTRawAttr) => {
  const s = _CompassCalibrationSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompassCalibrationSharpIcon = svg(
  [
    svg('circle', { cx: '12', cy: '17', r: '4' }, '0'),
    svg(
      'path',
      { d: 'M12 3C8.1 3 4.56 4.59 2 7.15l5 5c1.28-1.28 3.05-2.08 5-2.08s3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3' },
      '1',
    ),
  ],
  'CompassCalibrationSharp',
);
export const CompassCalibrationTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CompassCalibrationTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompassCalibrationTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm4.94 7.26 2.21 2.21c1.44-.91 3.11-1.4 4.85-1.4s3.41.49 4.84 1.4l2.21-2.21C17 5.79 14.56 5 12 5s-5.01.79-7.06 2.26',
        opacity: '.3',
      },
      '0',
    ),
    svg('circle', { cx: '12', cy: '17', r: '3', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M17 17c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5m-8 0c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3M2 7.15l5 5c1.28-1.28 3.05-2.08 5-2.08s3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3S4.56 4.59 2 7.15m14.84 2.32c-1.44-.91-3.1-1.4-4.84-1.4s-3.41.49-4.85 1.41L4.94 7.26C6.99 5.79 9.44 5 12 5s5 .79 7.05 2.26z',
      },
      '2',
    ),
  ],
  'CompassCalibrationTwoTone',
);
export const CompostIcon = (props?: KTRawAttr) => {
  const s = _CompostIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompostIcon = svg(
  svg('path', {
    d: 'M12.87 11.81c-.23-.38-.37-.83-.37-1.31C12.5 9.12 13.62 8 15 8h1c1.51 0 2-1 2-1s.55 6-3 6c-.49 0-.94-.14-1.32-.38-.24.64-.59 1.76-.76 2.96 1.26.22 2.28.89 2.77 1.77 1.69-1.17 2.81-3.13 2.81-5.35h3c0 5.24-4.26 9.5-9.5 9.5S2.5 17.24 2.5 12 6.76 2.5 12 2.5V0l4 4-4 4V5.5c-3.58 0-6.5 2.92-6.5 6.5 0 2.21 1.11 4.17 2.81 5.35.51-.92 1.63-1.62 2.98-1.8-.09-.69-.26-1.42-.49-2.03-.35.3-.8.48-1.3.48-1.1 0-2-.9-2-2v-.99c0-.56-.19-1.09-.5-1.51 0 0 4.45-.23 4.5 2.5 0 .29-.06.56-.17.8-.42-.32-.86-.6-1.33-.8.58.43 1.37 1.37 2 2.6.67-1.62 1.68-3.27 3-4.6-.76.52-1.47 1.12-2.13 1.81',
  }),
  'Compost',
);
export const CompostOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CompostOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompostOutlinedIcon = svg(
  svg('path', {
    d: 'M12.87 11.81c-.23-.38-.37-.83-.37-1.31C12.5 9.12 13.62 8 15 8h1c1.51 0 2-1 2-1s.55 6-3 6c-.49 0-.94-.14-1.32-.38-.24.64-.59 1.76-.76 2.96 1.26.22 2.28.89 2.77 1.77 1.69-1.17 2.81-3.13 2.81-5.35h3c0 5.24-4.26 9.5-9.5 9.5S2.5 17.24 2.5 12 6.76 2.5 12 2.5V0l4 4-4 4V5.5c-3.58 0-6.5 2.92-6.5 6.5 0 2.21 1.11 4.17 2.81 5.35.51-.92 1.63-1.62 2.98-1.8-.09-.69-.26-1.42-.49-2.03-.35.3-.8.48-1.3.48-1.1 0-2-.9-2-2v-.99c0-.56-.19-1.09-.5-1.51 0 0 4.45-.23 4.5 2.5 0 .29-.06.56-.17.8-.42-.32-.86-.6-1.33-.8.58.43 1.37 1.37 2 2.6.67-1.62 1.68-3.27 3-4.6-.76.52-1.47 1.12-2.13 1.81',
  }),
  'CompostOutlined',
);
export const CompostRoundedIcon = (props?: KTRawAttr) => {
  const s = _CompostRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompostRoundedIcon = svg(
  svg('path', {
    d: 'M11.73 21.5c-4.95-.14-9.08-4.27-9.22-9.22C2.35 6.91 6.67 2.5 12 2.5V1.21c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79c-.31.31-.85.09-.85-.36V5.5c-3.58 0-6.5 2.92-6.5 6.5 0 2.21 1.11 4.17 2.81 5.35.51-.92 1.63-1.62 2.98-1.8-.09-.69-.26-1.42-.49-2.03-.33.28-.75.46-1.22.48-1.14.05-2.08-.99-2.08-2.13v-.86c0-.29-.05-.57-.14-.83-.12-.34.14-.69.5-.66 1.3.09 3.6.52 3.64 2.48 0 .29-.06.56-.17.8-.42-.32-.86-.6-1.33-.8.58.43 1.37 1.37 2 2.6.67-1.62 1.68-3.27 3-4.6-.76.52-1.47 1.12-2.13 1.81-.26-.42-.4-.93-.36-1.47C12.59 9 13.79 8 15.13 8H16c.56 0 .97-.14 1.28-.31.34-.19.76.05.75.44C17.99 9.87 17.56 13 15 13c-.49 0-.94-.14-1.32-.38-.24.64-.59 1.76-.76 2.96 1.26.22 2.28.89 2.77 1.77 1.57-1.09 2.64-2.85 2.79-4.87.02-.26.23-.48.5-.48h1.82c.47 0 .71.24.69.52-.28 5.09-4.58 9.12-9.76 8.98',
  }),
  'CompostRounded',
);
export const CompostSharpIcon = (props?: KTRawAttr) => {
  const s = _CompostSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompostSharpIcon = svg(
  svg('path', {
    d: 'M12.87 11.81c-.23-.38-.37-.83-.37-1.31C12.5 9.12 13.62 8 15 8h1c1.51 0 2-1 2-1s.55 6-3 6c-.49 0-.94-.14-1.32-.38-.24.64-.59 1.76-.76 2.96 1.26.22 2.28.89 2.77 1.77 1.69-1.17 2.81-3.13 2.81-5.35h3c0 5.24-4.26 9.5-9.5 9.5S2.5 17.24 2.5 12 6.76 2.5 12 2.5V0l4 4-4 4V5.5c-3.58 0-6.5 2.92-6.5 6.5 0 2.21 1.11 4.17 2.81 5.35.51-.92 1.63-1.62 2.98-1.8-.09-.69-.26-1.42-.49-2.03-.35.3-.8.48-1.3.48-1.1 0-2-.9-2-2v-.99c0-.56-.19-1.09-.5-1.51 0 0 4.45-.23 4.5 2.5 0 .29-.06.56-.17.8-.42-.32-.86-.6-1.33-.8.58.43 1.37 1.37 2 2.6.67-1.62 1.68-3.27 3-4.6-.76.52-1.47 1.12-2.13 1.81',
  }),
  'CompostSharp',
);
export const CompostTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CompostTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompostTwoToneIcon = svg(
  svg('path', {
    d: 'M12.87 11.81c-.23-.38-.37-.83-.37-1.31C12.5 9.12 13.62 8 15 8h1c1.51 0 2-1 2-1s.55 6-3 6c-.49 0-.94-.14-1.32-.38-.24.64-.59 1.76-.76 2.96 1.26.22 2.28.89 2.77 1.77 1.69-1.17 2.81-3.13 2.81-5.35h3c0 5.24-4.26 9.5-9.5 9.5S2.5 17.24 2.5 12 6.76 2.5 12 2.5V0l4 4-4 4V5.5c-3.58 0-6.5 2.92-6.5 6.5 0 2.21 1.11 4.17 2.81 5.35.51-.92 1.63-1.62 2.98-1.8-.09-.69-.26-1.42-.49-2.03-.35.3-.8.48-1.3.48-1.1 0-2-.9-2-2v-.99c0-.56-.19-1.09-.5-1.51 0 0 4.45-.23 4.5 2.5 0 .29-.06.56-.17.8-.42-.32-.86-.6-1.33-.8.58.43 1.37 1.37 2 2.6.67-1.62 1.68-3.27 3-4.6-.76.52-1.47 1.12-2.13 1.81',
  }),
  'CompostTwoTone',
);
export const CompressIcon = (props?: KTRawAttr) => {
  const s = _CompressIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompressIcon = svg(
  svg('path', { d: 'M8 19h3v3h2v-3h3l-4-4zm8-15h-3V1h-2v3H8l4 4zM4 9v2h16V9zm0 3h16v2H4z' }),
  'Compress',
);
export const CompressOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CompressOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompressOutlinedIcon = svg(
  svg('path', {
    d: 'M4 9v2h16V9zm12-5-1.41-1.41L13 4.17V1h-2v3.19L9.39 2.61 8 4l4 4zM4 14h16v-2H4zm4 5 1.39 1.39L11 18.81V22h2v-3.17l1.59 1.59L16 19l-4-4z',
  }),
  'CompressOutlined',
);
export const CompressRoundedIcon = (props?: KTRawAttr) => {
  const s = _CompressRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompressRoundedIcon = svg(
  svg('path', {
    d: 'M4 10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1m10.79-6H13V2c0-.55-.45-1-1-1s-1 .45-1 1v2H9.21c-.45 0-.67.54-.36.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79c.32-.31.1-.85-.35-.85M9.21 19H11v2c0 .55.45 1 1 1s1-.45 1-1v-2h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.2-.2-.51-.2-.71 0l-2.79 2.79c-.31.31-.09.85.36.85M5 14h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1',
  }),
  'CompressRounded',
);
export const CompressSharpIcon = (props?: KTRawAttr) => {
  const s = _CompressSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompressSharpIcon = svg(
  svg('path', { d: 'M4 9h16v2H4zm12-5h-3V1h-2v3H8l4 4zM8 19h3v3h2v-3h3l-4-4zm-4-7h16v2H4z' }),
  'CompressSharp',
);
export const CompressTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CompressTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CompressTwoToneIcon = svg(
  svg('path', { d: 'M4 9h16v2H4zm12-5h-3V1h-2v3H8l4 4zM8 19h3v3h2v-3h3l-4-4zm-4-7h16v2H4z' }),
  'CompressTwoTone',
);
export const ComputerIcon = (props?: KTRawAttr) => {
  const s = _ComputerIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ComputerIcon = svg(
  svg('path', {
    d: 'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z',
  }),
  'Computer',
);
export const ComputerOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ComputerOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ComputerOutlinedIcon = svg(
  svg('path', {
    d: 'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z',
  }),
  'ComputerOutlined',
);
export const ComputerRoundedIcon = (props?: KTRawAttr) => {
  const s = _ComputerRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ComputerRoundedIcon = svg(
  svg('path', {
    d: 'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1zM5 6h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1',
  }),
  'ComputerRounded',
);
export const ComputerSharpIcon = (props?: KTRawAttr) => {
  const s = _ComputerSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ComputerSharpIcon = svg(
  svg('path', { d: 'm20 18 2-2V4H2v12l2 2H0v2h24v-2zM4 6h16v10H4z' }),
  'ComputerSharp',
);
export const ComputerTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ComputerTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ComputerTwoToneIcon = svg(
  [
    svg('path', { d: 'M4 6h16v10H4z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z',
      },
      '1',
    ),
  ],
  'ComputerTwoTone',
);
export const ConfirmationNumberIcon = (props?: KTRawAttr) => {
  const s = _ConfirmationNumberIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConfirmationNumberIcon = svg(
  svg('path', {
    d: 'M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2m-9 7.5h-2v-2h2zm0-4.5h-2v-2h2zm0-4.5h-2v-2h2z',
  }),
  'ConfirmationNumber',
);
export const ConfirmationNumberOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ConfirmationNumberOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConfirmationNumberOutlinedIcon = svg(
  svg('path', {
    d: 'M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2m-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z',
  }),
  'ConfirmationNumberOutlined',
);
export const ConfirmationNumberRoundedIcon = (props?: KTRawAttr) => {
  const s = _ConfirmationNumberRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConfirmationNumberRoundedIcon = svg(
  svg('path', {
    d: 'M22 8.54V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v2.54c0 .69.33 1.37.94 1.69C3.58 10.58 4 11.24 4 12s-.43 1.43-1.06 1.76c-.6.33-.94 1.01-.94 1.7V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2.54c0-.69-.34-1.37-.94-1.7-.63-.34-1.06-1-1.06-1.76s.43-1.42 1.06-1.76c.6-.33.94-1.01.94-1.7m-9 8.96h-2v-2h2zm0-4.5h-2v-2h2zm0-4.5h-2v-2h2z',
  }),
  'ConfirmationNumberRounded',
);
export const ConfirmationNumberSharpIcon = (props?: KTRawAttr) => {
  const s = _ConfirmationNumberSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConfirmationNumberSharpIcon = svg(
  svg('path', {
    d: 'M22 10V4H2.01v6c1.1 0 1.99.9 1.99 2s-.89 2-2 2v6h20v-6c-1.1 0-2-.9-2-2s.9-2 2-2m-9 7.5h-2v-2h2zm0-4.5h-2v-2h2zm0-4.5h-2v-2h2z',
  }),
  'ConfirmationNumberSharp',
);
export const ConfirmationNumberTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ConfirmationNumberTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConfirmationNumberTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M4.01 8.54C5.2 9.23 6 10.52 6 12s-.81 2.77-2 3.46V18h16v-2.54c-1.19-.69-2-1.99-2-3.46s.81-2.77 2-3.46V6H4zM11 7h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2m-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z',
      },
      '1',
    ),
  ],
  'ConfirmationNumberTwoTone',
);
export const ConnectWithoutContactIcon = (props?: KTRawAttr) => {
  const s = _ConnectWithoutContactIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConnectWithoutContactIcon = svg(
  svg('path', {
    d: 'M11 14H9c0-4.97 4.03-9 9-9v2c-3.87 0-7 3.13-7 7m7-3V9c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3M7 4c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2m4.45.5h-2C9.21 5.92 7.99 7 6.5 7h-3C2.67 7 2 7.67 2 8.5V11h6V8.74c1.86-.59 3.25-2.23 3.45-4.24M19 17c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2m1.5 1h-3c-1.49 0-2.71-1.08-2.95-2.5h-2c.2 2.01 1.59 3.65 3.45 4.24V22h6v-2.5c0-.83-.67-1.5-1.5-1.5',
  }),
  'ConnectWithoutContact',
);
export const ConnectWithoutContactOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ConnectWithoutContactOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConnectWithoutContactOutlinedIcon = svg(
  svg('path', {
    d: 'M11 14H9c0-4.97 4.03-9 9-9v2c-3.87 0-7 3.13-7 7m7-3V9c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3M7 4c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2m4.45.5h-2C9.21 5.92 7.99 7 6.5 7h-3C2.67 7 2 7.67 2 8.5V11h6V8.74c1.86-.59 3.25-2.23 3.45-4.24M19 17c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2m1.5 1h-3c-1.49 0-2.71-1.08-2.95-2.5h-2c.2 2.01 1.59 3.65 3.45 4.24V22h6v-2.5c0-.83-.67-1.5-1.5-1.5',
  }),
  'ConnectWithoutContactOutlined',
);
export const ConnectWithoutContactRoundedIcon = (props?: KTRawAttr) => {
  const s = _ConnectWithoutContactRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConnectWithoutContactRoundedIcon = svg(
  svg('path', {
    d: 'M7 4c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2m3.19.5c-.41 0-.76.25-.92.63C8.83 6.23 7.76 7 6.5 7h-3C2.67 7 2 7.67 2 8.5V11h6V8.74c1.43-.45 2.58-1.53 3.12-2.91.26-.64-.24-1.33-.93-1.33M19 17c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2m1.5 1h-3c-1.26 0-2.33-.77-2.77-1.87-.15-.38-.51-.63-.92-.63-.69 0-1.19.69-.94 1.33.55 1.38 1.69 2.46 3.12 2.91V22h6v-2.5c.01-.83-.66-1.5-1.49-1.5m-3.25-6.91s0-.01.01 0c-1.06.27-1.9 1.11-2.17 2.17v-.01c-.11.43-.51.75-.98.75-.55 0-1-.45-1-1 0-.05.02-.14.02-.14.43-1.85 1.89-3.31 3.75-3.73.04 0 .08-.01.12-.01.55 0 1 .45 1 1 0 .46-.32.86-.75.97M18 6.06c0 .51-.37.92-.86.99-3.19.39-5.7 2.91-6.09 6.1-.07.48-.49.85-.99.85-.55 0-1-.45-1-1v-.09c.5-4.12 3.79-7.38 7.92-7.85h.01c.56 0 1.01.45 1.01 1',
  }),
  'ConnectWithoutContactRounded',
);
export const ConnectWithoutContactSharpIcon = (props?: KTRawAttr) => {
  const s = _ConnectWithoutContactSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConnectWithoutContactSharpIcon = svg(
  svg('path', {
    d: 'M11 14H9c0-4.97 4.03-9 9-9v2c-3.87 0-7 3.13-7 7m7-3V9c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3M7 4c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2m4.45.5h-2C9.21 5.92 7.99 7 6.5 7H2v4h6V8.74c1.86-.59 3.25-2.23 3.45-4.24M19 17c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2m-1.5 1c-1.49 0-2.71-1.08-2.95-2.5h-2c.2 2.01 1.59 3.65 3.45 4.24V22h6v-4z',
  }),
  'ConnectWithoutContactSharp',
);
export const ConnectWithoutContactTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ConnectWithoutContactTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConnectWithoutContactTwoToneIcon = svg(
  svg('path', {
    d: 'M11 14H9c0-4.97 4.03-9 9-9v2c-3.87 0-7 3.13-7 7m7-3V9c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3M7 4c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2m4.45.5h-2C9.21 5.92 7.99 7 6.5 7h-3C2.67 7 2 7.67 2 8.5V11h6V8.74c1.86-.59 3.25-2.23 3.45-4.24M19 17c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2m1.5 1h-3c-1.49 0-2.71-1.08-2.95-2.5h-2c.2 2.01 1.59 3.65 3.45 4.24V22h6v-2.5c0-.83-.67-1.5-1.5-1.5',
  }),
  'ConnectWithoutContactTwoTone',
);
export const ConnectedTvIcon = (props?: KTRawAttr) => {
  const s = _ConnectedTvIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConnectedTvIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2m0 14H3V5h18zM4 14v2h2c0-1.11-.89-2-2-2m0-3v1.43c1.97 0 3.57 1.6 3.57 3.57H9c0-2.76-2.24-5-5-5m0-3v1.45c3.61 0 6.55 2.93 6.55 6.55H12c0-4.42-3.59-8-8-8',
  }),
  'ConnectedTv',
);
export const ConnectedTvOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ConnectedTvOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConnectedTvOutlinedIcon = svg(
  svg('path', {
    d: 'M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v2h8v-2h4c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2m0 14H4V5h16zM5 14v2h2c0-1.11-.89-2-2-2m0-3v1.43c1.97 0 3.57 1.6 3.57 3.57H10c0-2.76-2.24-5-5-5m0-3v1.45c3.61 0 6.55 2.93 6.55 6.55H13c0-4.42-3.59-8-8-8',
  }),
  'ConnectedTvOutlined',
);
export const ConnectedTvRoundedIcon = (props?: KTRawAttr) => {
  const s = _ConnectedTvRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConnectedTvRoundedIcon = svg(
  svg('path', {
    d: 'M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h4c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2m0 14H4V5h16zM7 15.97c-.02-1.08-.89-1.95-1.97-1.97H5v2h2zm-1.38-3.42c1.44.26 2.58 1.4 2.83 2.84.06.36.37.61.73.61.46 0 .82-.41.75-.86-.36-2.07-1.99-3.7-4.06-4.06-.46-.08-.87.28-.87.74 0 .37.26.67.62.73m.02-3.02c3.07.3 5.52 2.75 5.83 5.82.04.37.37.65.74.65.45 0 .79-.4.75-.85-.4-3.74-3.37-6.71-7.11-7.1C5.4 8 5 8.34 5 8.79c0 .37.27.71.64.74',
  }),
  'ConnectedTvRounded',
);
export const ConnectedTvSharpIcon = (props?: KTRawAttr) => {
  const s = _ConnectedTvSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConnectedTvSharpIcon = svg(
  [
    svg('path', { d: 'M8.57 16H10c0-2.76-2.24-5-5-5v1.43c1.97 0 3.57 1.6 3.57 3.57' }, '0'),
    svg('path', { d: 'M11.55 16H13c0-4.42-3.59-8-8-8v1.45c3.61 0 6.55 2.93 6.55 6.55M5 14v2h2c0-1.11-.89-2-2-2' }, '1'),
    svg('path', { d: 'M22 3H2v16h6v2h8v-2h6zm-2 14H4V5h16z' }, '2'),
  ],
  'ConnectedTvSharp',
);
export const ConnectedTvTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ConnectedTvTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConnectedTvTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v2h8v-2h4c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2m0 14H4V5h16zM5 14v2h2c0-1.11-.89-2-2-2m0-3v1.43c1.97 0 3.57 1.6 3.57 3.57H10c0-2.76-2.24-5-5-5m0-3v1.45c3.61 0 6.55 2.93 6.55 6.55H13c0-4.42-3.59-8-8-8',
      },
      '0',
    ),
    svg('path', { d: 'M4 5h16v12H4z', opacity: '.3' }, '1'),
  ],
  'ConnectedTvTwoTone',
);
export const ConnectingAirportsIcon = (props?: KTRawAttr) => {
  const s = _ConnectingAirportsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConnectingAirportsIcon = svg(
  svg('path', {
    d: 'm15.4 17 1.3 4.4h-1.1L13 17h-3c-.55 0-1-.45-1-1s.45-1 1-1h3l2.6-4.4h1.1L15.4 15h2.85l.75-1h1l-.6 2 .6 2h-1l-.75-1zM5.75 7 5 6H4l.6 2-.6 2h1l.75-1H8.6l-1.3 4.4h1.1L11 9h3c.55 0 1-.45 1-1s-.45-1-1-1h-3L8.4 2.6H7.3L8.6 7z',
  }),
  'ConnectingAirports',
);
export const ConnectingAirportsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ConnectingAirportsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConnectingAirportsOutlinedIcon = svg(
  svg('path', {
    d: 'm15.4 17 1.3 4.4h-1.1L13 17h-3c-.55 0-1-.45-1-1s.45-1 1-1h3l2.6-4.4h1.1L15.4 15h2.85l.75-1h1l-.6 2 .6 2h-1l-.75-1zM5.75 7 5 6H4l.6 2-.6 2h1l.75-1H8.6l-1.3 4.4h1.1L11 9h3c.55 0 1-.45 1-1s-.45-1-1-1h-3L8.4 2.6H7.3L8.6 7z',
  }),
  'ConnectingAirportsOutlined',
);
export const ConnectingAirportsRoundedIcon = (props?: KTRawAttr) => {
  const s = _ConnectingAirportsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConnectingAirportsRoundedIcon = svg(
  svg('path', {
    d: 'M15.93 10.6c.39 0 .66.37.55.74L15.4 15h2.85l.59-.78c.1-.14.26-.22.43-.22.36 0 .62.35.52.7L19.4 16l.39 1.3c.1.35-.16.7-.52.7-.17 0-.33-.08-.43-.22l-.59-.78H15.4l1.08 3.66c.11.37-.17.74-.55.74-.2 0-.39-.11-.5-.28L13 17h-2.97c-.53 0-1-.4-1.03-.93-.04-.59.43-1.07 1-1.07h3l2.43-4.12c.11-.17.3-.28.5-.28m-7.86-8c-.39 0-.66.37-.55.74L8.6 7H5.75l-.59-.78C5.06 6.08 4.9 6 4.73 6c-.36 0-.62.35-.52.7L4.6 8l-.39 1.3c-.1.35.16.7.52.7.17 0 .33-.08.43-.22L5.75 9H8.6l-1.08 3.66c-.11.37.17.74.55.74.2 0 .39-.11.5-.28L11 9h2.97c.53 0 1-.4 1.03-.93.04-.59-.43-1.07-1-1.07h-3L8.57 2.88c-.11-.17-.3-.28-.5-.28',
  }),
  'ConnectingAirportsRounded',
);
export const ConnectingAirportsSharpIcon = (props?: KTRawAttr) => {
  const s = _ConnectingAirportsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConnectingAirportsSharpIcon = svg(
  svg('path', {
    d: 'm15.4 17 1.3 4.4h-1.1L13 17h-3c-.55 0-1-.45-1-1s.45-1 1-1h3l2.6-4.4h1.1L15.4 15h2.85l.75-1h1l-.6 2 .6 2h-1l-.75-1zM5.75 7 5 6H4l.6 2-.6 2h1l.75-1H8.6l-1.3 4.4h1.1L11 9h3c.55 0 1-.45 1-1s-.45-1-1-1h-3L8.4 2.6H7.3L8.6 7z',
  }),
  'ConnectingAirportsSharp',
);
export const ConnectingAirportsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ConnectingAirportsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConnectingAirportsTwoToneIcon = svg(
  svg('path', {
    d: 'm15.4 17 1.3 4.4h-1.1L13 17h-3c-.55 0-1-.45-1-1s.45-1 1-1h3l2.6-4.4h1.1L15.4 15h2.85l.75-1h1l-.6 2 .6 2h-1l-.75-1zM5.75 7 5 6H4l.6 2-.6 2h1l.75-1H8.6l-1.3 4.4h1.1L11 9h3c.55 0 1-.45 1-1s-.45-1-1-1h-3L8.4 2.6H7.3L8.6 7z',
  }),
  'ConnectingAirportsTwoTone',
);
export const ConstructionIcon = (props?: KTRawAttr) => {
  const s = _ConstructionIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConstructionIcon = svg(
  svg('path', {
    d: 'm13.7826 15.1719 2.1213-2.1213 5.9963 5.9962-2.1213 2.1213zM17.5 10c1.93 0 3.5-1.57 3.5-3.5 0-.58-.16-1.12-.41-1.6l-2.7 2.7-1.49-1.49 2.7-2.7c-.48-.25-1.02-.41-1.6-.41C15.57 3 14 4.57 14 6.5c0 .41.08.8.21 1.16l-1.85 1.85-1.78-1.78.71-.71-1.41-1.41L12 3.49c-1.17-1.17-3.07-1.17-4.24 0L4.22 7.03l1.41 1.41H2.81l-.71.71 3.54 3.54.71-.71V9.15l1.41 1.41.71-.71 1.78 1.78-7.41 7.41 2.12 2.12L16.34 9.79c.36.13.75.21 1.16.21',
  }),
  'Construction',
);
export const ConstructionOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ConstructionOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConstructionOutlinedIcon = svg(
  svg('path', {
    d: 'm13.7826 15.1719 2.1213-2.1213 5.9963 5.9962-2.1213 2.1213zM17.5 10c1.93 0 3.5-1.57 3.5-3.5 0-.58-.16-1.12-.41-1.6l-2.7 2.7-1.49-1.49 2.7-2.7c-.48-.25-1.02-.41-1.6-.41C15.57 3 14 4.57 14 6.5c0 .41.08.8.21 1.16l-1.85 1.85-1.78-1.78.71-.71-1.41-1.41L12 3.49c-1.17-1.17-3.07-1.17-4.24 0L4.22 7.03l1.41 1.41H2.81l-.71.71 3.54 3.54.71-.71V9.15l1.41 1.41.71-.71 1.78 1.78-7.41 7.41 2.12 2.12L16.34 9.79c.36.13.75.21 1.16.21',
  }),
  'ConstructionOutlined',
);
export const ConstructionRoundedIcon = (props?: KTRawAttr) => {
  const s = _ConstructionRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConstructionRoundedIcon = svg(
  svg('path', {
    d: 'm20.99 17.99-4.94-4.94-2.12 2.12 4.94 4.94c.59.59 1.54.59 2.12 0s.58-1.54 0-2.12M17.65 10c1.93 0 3.5-1.57 3.5-3.5 0-.58-.16-1.12-.41-1.6l-2.7 2.7-1.49-1.49 2.7-2.7c-.48-.25-1.02-.41-1.6-.41-1.93 0-3.5 1.57-3.5 3.5 0 .41.08.8.21 1.16l-1.85 1.85-1.78-1.78c.39-.39.39-1.02 0-1.41l-.71-.71 2.12-2.12c-1.17-1.17-3.07-1.17-4.24 0L5.08 6.32c-.39.39-.39 1.02 0 1.41l.71.71H3.25c-.19 0-.37.07-.5.21-.28.28-.28.72 0 1l2.54 2.54c.28.28.72.28 1 0 .13-.13.21-.31.21-.5V9.15l.7.7c.39.39 1.02.39 1.41 0l1.78 1.78-6.35 6.35c-.59.59-.59 1.54 0 2.12.59.59 1.54.59 2.12 0L16.48 9.79c.37.13.76.21 1.17.21',
  }),
  'ConstructionRounded',
);
export const ConstructionSharpIcon = (props?: KTRawAttr) => {
  const s = _ConstructionSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConstructionSharpIcon = svg(
  svg('path', {
    d: 'm13.7826 15.1719 2.1213-2.1213 5.9963 5.9962-2.1213 2.1213zM17.5 10c1.93 0 3.5-1.57 3.5-3.5 0-.58-.16-1.12-.41-1.6l-2.7 2.7-1.49-1.49 2.7-2.7c-.48-.25-1.02-.41-1.6-.41C15.57 3 14 4.57 14 6.5c0 .41.08.8.21 1.16l-1.85 1.85-1.78-1.78.71-.71-1.41-1.41L12 3.49c-1.17-1.17-3.07-1.17-4.24 0L4.22 7.03l1.41 1.41H2.81l-.71.71 3.54 3.54.71-.71V9.15l1.41 1.41.71-.71 1.78 1.78-7.41 7.41 2.12 2.12L16.34 9.79c.36.13.75.21 1.16.21',
  }),
  'ConstructionSharp',
);
export const ConstructionTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ConstructionTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConstructionTwoToneIcon = svg(
  svg('path', {
    d: 'm13.7826 15.1719 2.1213-2.1213 5.9963 5.9962-2.1213 2.1213zM17.5 10c1.93 0 3.5-1.57 3.5-3.5 0-.58-.16-1.12-.41-1.6l-2.7 2.7-1.49-1.49 2.7-2.7c-.48-.25-1.02-.41-1.6-.41C15.57 3 14 4.57 14 6.5c0 .41.08.8.21 1.16l-1.85 1.85-1.78-1.78.71-.71-1.41-1.41L12 3.49c-1.17-1.17-3.07-1.17-4.24 0L4.22 7.03l1.41 1.41H2.81l-.71.71 3.54 3.54.71-.71V9.15l1.41 1.41.71-.71 1.78 1.78-7.41 7.41 2.12 2.12L16.34 9.79c.36.13.75.21 1.16.21',
  }),
  'ConstructionTwoTone',
);
export const ContactEmergencyIcon = (props?: KTRawAttr) => {
  const s = _ContactEmergencyIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactEmergencyIcon = svg(
  svg('path', {
    d: 'M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M9 8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M2.08 19c1.38-2.39 3.96-4 6.92-4s5.54 1.61 6.92 4zm18.89-9.15-.75 1.3-1.47-.85V12h-1.5v-1.7l-1.47.85-.75-1.3L16.5 9l-1.47-.85.75-1.3 1.47.85V6h1.5v1.7l1.47-.85.75 1.3L19.5 9z',
  }),
  'ContactEmergency',
);
export const ContactEmergencyOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ContactEmergencyOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactEmergencyOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M9 14c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3m0-4c.54 0 1 .46 1 1s-.46 1-1 1-1-.46-1-1 .46-1 1-1',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M4.54 19c1.1-1.22 2.69-2 4.46-2s3.36.78 4.46 2zM22 19h-6.08c-1.38-2.39-3.96-4-6.92-4s-5.54 1.61-6.92 4H2V5h20z',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'm15.78 11.15 1.47-.85V12h1.5v-1.7l1.47.85.75-1.3L19.5 9l1.47-.85-.75-1.3-1.47.85V6h-1.5v1.7l-1.47-.85-.75 1.3L16.5 9l-1.47.85z',
      },
      '2',
    ),
  ],
  'ContactEmergencyOutlined',
);
export const ContactEmergencyRoundedIcon = (props?: KTRawAttr) => {
  const s = _ContactEmergencyRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactEmergencyRoundedIcon = svg(
  svg('path', {
    d: 'M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M9 8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M2.08 19c1.38-2.39 3.96-4 6.92-4s5.54 1.61 6.92 4zm18.52-8.5c-.21.36-.67.48-1.02.27l-.82-.48v.95c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.94l-.82.48c-.36.21-.82.08-1.02-.27-.21-.36-.08-.82.27-1.02L16.5 9l-.82-.48c-.36-.21-.48-.67-.27-1.02.21-.36.67-.48 1.02-.27l.82.48v-.96c0-.41.34-.75.75-.75s.75.34.75.75v.95l.82-.48c.36-.21.82-.08 1.02.27.21.36.08.82-.27 1.02L19.5 9l.82.48c.36.2.49.66.28 1.02',
  }),
  'ContactEmergencyRounded',
);
export const ContactEmergencySharpIcon = (props?: KTRawAttr) => {
  const s = _ContactEmergencySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactEmergencySharpIcon = svg(
  svg('path', {
    d: 'M23.99 3H0v18h23.99zM9 8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M2.08 19c1.38-2.39 3.96-4 6.92-4s5.54 1.61 6.92 4zm18.89-9.15-.75 1.3-1.47-.85V12h-1.5v-1.7l-1.47.85-.75-1.3L16.5 9l-1.47-.85.75-1.3 1.47.85V6h1.5v1.7l1.47-.85.75 1.3L19.5 9z',
  }),
  'ContactEmergencySharp',
);
export const ContactEmergencyTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ContactEmergencyTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactEmergencyTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M2 19h.08c1.38-2.39 3.96-4 6.92-4s5.54 1.61 6.92 4H22V5H2zM15.03 8.15l.75-1.3 1.47.85V6h1.5v1.7l1.47-.85.75 1.3L19.5 9l1.47.85-.75 1.3-1.47-.85V12h-1.5v-1.7l-1.47.85-.75-1.3L16.5 9zM9 8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M9 14c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3m0-4c.54 0 1 .46 1 1s-.46 1-1 1-1-.46-1-1 .46-1 1-1',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M4.54 19c1.1-1.22 2.69-2 4.46-2s3.36.78 4.46 2zM22 19h-6.08c-1.38-2.39-3.96-4-6.92-4s-5.54 1.61-6.92 4H2V5h20z',
      },
      '2',
    ),
    svg(
      'path',
      {
        d: 'm15.78 11.15 1.47-.85V12h1.5v-1.7l1.47.85.75-1.3L19.5 9l1.47-.85-.75-1.3-1.47.85V6h-1.5v1.7l-1.47-.85-.75 1.3L16.5 9l-1.47.85z',
      },
      '3',
    ),
  ],
  'ContactEmergencyTwoTone',
);
export const ContactMailIcon = (props?: KTRawAttr) => {
  const s = _ContactMailIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactMailIcon = svg(
  svg('path', {
    d: 'M21 8V7l-3 2-3-2v1l3 2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm8-6h-8V6h8z',
  }),
  'ContactMail',
);
export const ContactMailOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ContactMailOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactMailOutlinedIcon = svg(
  svg('path', {
    d: 'M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2m0 16H2V5h20zM21 6h-7v5h7zm-1 2-2.5 1.75L15 8V7l2.5 1.75L20 7zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m6 8.59c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12zM5.48 16c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1z',
  }),
  'ContactMailOutlined',
);
export const ContactMailRoundedIcon = (props?: KTRawAttr) => {
  const s = _ContactMailRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactMailRoundedIcon = svg(
  svg('path', {
    d: 'M21 8V7l-3 2-3-2v1l2.72 1.82c.17.11.39.11.55 0zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm7.5-6h-7c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v5c0 .28-.22.5-.5.5',
  }),
  'ContactMailRounded',
);
export const ContactMailSharpIcon = (props?: KTRawAttr) => {
  const s = _ContactMailSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactMailSharpIcon = svg(
  svg('path', {
    d: 'M21 8V7l-3 2-3-2v1l3 2zm3-5H0v18h23.99zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm8-6h-8V6h8z',
  }),
  'ContactMailSharp',
);
export const ContactMailTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ContactMailTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactMailTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M2 19h20V5H2zM14 6h7v5h-7zM9 6c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M3 16.59C3 14.08 6.97 13 9 13s6 1.08 6 3.58V18H3z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2m0 16H2V5h20zM21 6h-7v5h7zm-1 2-2.5 1.75L15 8V7l2.5 1.75L20 7zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m6 8.59c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12zM5.48 16c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1z',
      },
      '1',
    ),
  ],
  'ContactMailTwoTone',
);
export const ContactPageIcon = (props?: KTRawAttr) => {
  const s = _ContactPageIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactPageIcon = svg(
  svg('path', {
    d: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm-2 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m4 8H8v-.57c0-.81.48-1.53 1.22-1.85.85-.37 1.79-.58 2.78-.58s1.93.21 2.78.58c.74.32 1.22 1.04 1.22 1.85z',
  }),
  'ContactPage',
);
export const ContactPageOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ContactPageOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactPageOutlinedIcon = svg(
  svg('path', {
    d: 'M13.17 4 18 8.83V20H6V4zM14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm-2 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58s-1.93.21-2.78.58C8.48 15.9 8 16.62 8 17.43V18h8z',
  }),
  'ContactPageOutlined',
);
export const ContactPageRoundedIcon = (props?: KTRawAttr) => {
  const s = _ContactPageRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactPageRoundedIcon = svg(
  svg('path', {
    d: 'M13.17 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59M12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m4 8H8v-.57c0-.81.48-1.53 1.22-1.85.85-.37 1.79-.58 2.78-.58s1.93.21 2.78.58c.74.32 1.22 1.04 1.22 1.85z',
  }),
  'ContactPageRounded',
);
export const ContactPageSharpIcon = (props?: KTRawAttr) => {
  const s = _ContactPageSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactPageSharpIcon = svg(
  svg('path', {
    d: 'M14 2H4v20h16V8zm-2 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m4 8H8v-.57c0-.81.48-1.53 1.22-1.85.85-.37 1.79-.58 2.78-.58s1.93.21 2.78.58c.74.32 1.22 1.04 1.22 1.85z',
  }),
  'ContactPageSharp',
);
export const ContactPageTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ContactPageTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactPageTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M13.17 4 18 8.83V20H6V4zM12 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58s-1.93.21-2.78.58C8.48 15.9 8 16.62 8 17.43V18h8z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M13.17 4 18 8.83V20H6V4zM14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm-2 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58s-1.93.21-2.78.58C8.48 15.9 8 16.62 8 17.43V18h8z',
      },
      '1',
    ),
  ],
  'ContactPageTwoTone',
);
export const ContactPhoneIcon = (props?: KTRawAttr) => {
  const s = _ContactPhoneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactPhoneIcon = svg(
  svg('path', {
    d: 'M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2',
  }),
  'ContactPhone',
);
export const ContactPhoneOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ContactPhoneOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactPhoneOutlinedIcon = svg(
  svg('path', {
    d: 'M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2m0 16H2V5h20zm-2.99-1.01L21 16l-1.51-2h-1.64c-.22-.63-.35-1.3-.35-2s.13-1.37.35-2h1.64L21 8l-1.99-1.99c-1.31.98-2.28 2.37-2.73 3.99-.18.64-.28 1.31-.28 2s.1 1.36.28 2c.45 1.61 1.42 3.01 2.73 3.99M9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m6 8.59c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12zM5.48 16c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1z',
  }),
  'ContactPhoneOutlined',
);
export const ContactPhoneRoundedIcon = (props?: KTRawAttr) => {
  const s = _ContactPhoneRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactPhoneRoundedIcon = svg(
  svg('path', {
    d: 'M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm3.85-4h1.39c.16 0 .3.07.4.2l1.1 1.45c.15.2.13.48-.05.65l-1.36 1.36c-.18.18-.48.2-.67.04a7.557 7.557 0 0 1-2.38-3.71c-.18-.63-.28-1.3-.28-1.99s.1-1.36.28-2c.41-1.47 1.25-2.75 2.38-3.71.2-.17.49-.14.67.04l1.36 1.36c.18.18.2.46.05.65l-1.1 1.45c-.09.13-.24.2-.4.2h-1.39c-.22.63-.35 1.3-.35 2s.13 1.38.35 2.01',
  }),
  'ContactPhoneRounded',
);
export const ContactPhoneSharpIcon = (props?: KTRawAttr) => {
  const s = _ContactPhoneSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactPhoneSharpIcon = svg(
  svg('path', {
    d: 'M23.99 3H0v18h24zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2',
  }),
  'ContactPhoneSharp',
);
export const ContactPhoneTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ContactPhoneTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactPhoneTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M22 5H2v14h20zM9 6c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m6 12H3v-1.41C3 14.08 6.97 13 9 13s6 1.08 6 3.58zm2.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M2 21h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2M2 5h20v14H2zm17.49 5L21 8l-1.99-1.99c-1.31.98-2.28 2.37-2.73 3.99-.18.64-.28 1.31-.28 2s.1 1.36.28 2c.45 1.61 1.42 3.01 2.73 3.99L21 16l-1.51-2h-1.64c-.22-.63-.35-1.3-.35-2s.13-1.37.35-2zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 5c-2.03 0-6 1.08-6 3.58V18h12v-1.41C15 14.08 11.03 13 9 13m-3.52 3c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1z',
      },
      '1',
    ),
  ],
  'ContactPhoneTwoTone',
);
export const ContactSupportIcon = (props?: KTRawAttr) => {
  const s = _ContactSupportIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactSupportIcon = svg(
  svg('path', {
    d: 'M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2m1 14.5h-2v-2h2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5',
  }),
  'ContactSupport',
);
export const ContactSupportOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ContactSupportOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactSupportOutlinedIcon = svg(
  svg('path', {
    d: 'M11 23.59v-3.6c-5.01-.26-9-4.42-9-9.49C2 5.26 6.26 1 11.5 1S21 5.26 21 10.5c0 4.95-3.44 9.93-8.57 12.4zM11.5 3C7.36 3 4 6.36 4 10.5S7.36 18 11.5 18H13v2.3c3.64-2.3 6-6.08 6-9.8C19 6.36 15.64 3 11.5 3m-1 11.5h2v2h-2zm2-1.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5',
  }),
  'ContactSupportOutlined',
);
export const ContactSupportRoundedIcon = (props?: KTRawAttr) => {
  const s = _ContactSupportRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactSupportRoundedIcon = svg(
  svg('path', {
    d: 'M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2m1 14.5h-2v-2h2zm.4-4.78c-.01.01-.02.03-.03.05-.05.08-.1.16-.14.24-.02.03-.03.07-.04.11-.03.07-.06.14-.08.21-.07.21-.1.43-.1.68H10.5c0-.51.08-.94.2-1.3 0-.01 0-.02.01-.03.01-.04.04-.06.05-.1.06-.16.13-.3.22-.44.03-.05.07-.1.1-.15.03-.04.05-.09.08-.12l.01.01c.84-1.1 2.21-1.44 2.32-2.68.09-.98-.61-1.93-1.57-2.13-1.04-.22-1.98.39-2.3 1.28-.14.36-.47.65-.88.65h-.2c-.6 0-1.04-.59-.87-1.17.55-1.82 2.37-3.09 4.43-2.79 1.69.25 3.04 1.64 3.33 3.33.44 2.44-1.63 3.03-2.53 4.35',
  }),
  'ContactSupportRounded',
);
export const ContactSupportSharpIcon = (props?: KTRawAttr) => {
  const s = _ContactSupportSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactSupportSharpIcon = svg(
  svg('path', {
    d: 'M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2m1 14.5h-2v-2h2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5',
  }),
  'ContactSupportSharp',
);
export const ContactSupportTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ContactSupportTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactSupportTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M11.5 3C7.36 3 4 6.36 4 10.5S7.36 18 11.5 18H13v2.3c3.64-2.3 6-6.08 6-9.8C19 6.36 15.64 3 11.5 3m1 13.5h-2v-2h2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M11.5 1C6.26 1 2 5.26 2 10.5c0 5.07 3.99 9.23 9 9.49v3.6l1.43-.69C17.56 20.43 21 15.45 21 10.5 21 5.26 16.74 1 11.5 1M13 20.3V18h-1.5C7.36 18 4 14.64 4 10.5S7.36 3 11.5 3 19 6.36 19 10.5c0 3.73-2.36 7.51-6 9.8m-2.5-5.8h2v2h-2zm1-10.5c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4',
      },
      '1',
    ),
  ],
  'ContactSupportTwoTone',
);
export const ContactlessIcon = (props?: KTRawAttr) => {
  const s = _ContactlessIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactlessIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M8.46 14.45l-1.36-.62c.28-.61.41-1.24.4-1.86-.01-.63-.14-1.24-.4-1.8l1.36-.63c.35.75.53 1.56.54 2.4.01.86-.17 1.7-.54 2.51m3.07 1.56-1.3-.74c.52-.92.78-1.98.78-3.15 0-1.19-.27-2.33-.8-3.4l1.34-.67c.64 1.28.96 2.65.96 4.07 0 1.43-.33 2.74-.98 3.89m3.14 1.32-1.35-.66c.78-1.6 1.18-3.18 1.18-4.69s-.4-3.07-1.18-4.64l1.34-.67c.9 1.78 1.34 3.56 1.34 5.31 0 1.74-.44 3.54-1.33 5.35',
  }),
  'Contactless',
);
export const ContactlessOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ContactlessOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactlessOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M7.1 10.18c.26.56.39 1.16.4 1.8.01.63-.13 1.25-.4 1.86l1.37.62c.37-.81.55-1.65.54-2.5-.01-.84-.19-1.65-.54-2.4zm6.23-2.85c.78 1.57 1.18 3.14 1.18 4.64 0 1.51-.4 3.09-1.18 4.69l1.35.66c.88-1.81 1.33-3.61 1.33-5.35s-.45-3.53-1.33-5.31zM10.2 8.72c.53 1.07.8 2.21.8 3.4 0 1.17-.26 2.23-.78 3.15l1.3.74c.65-1.15.98-2.45.98-3.89 0-1.42-.32-2.79-.96-4.07z',
      },
      '1',
    ),
  ],
  'ContactlessOutlined',
);
export const ContactlessRoundedIcon = (props?: KTRawAttr) => {
  const s = _ContactlessRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactlessRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M8.75 13.68c-.13.43-.62.63-1.02.45a.749.749 0 0 1-.4-.9c.12-.41.18-.83.17-1.24s-.06-.8-.17-1.18c-.1-.36.06-.75.4-.9.42-.19.91.04 1.04.49.15.51.22 1.03.23 1.57 0 .56-.08 1.14-.25 1.71m3.14 1.59c-.17.41-.67.57-1.06.35-.33-.19-.46-.59-.32-.94.33-.77.49-1.63.49-2.56 0-.96-.18-1.89-.53-2.78-.14-.36.02-.76.36-.94.39-.2.87-.02 1.03.39.42 1.06.63 2.18.63 3.33.02 1.13-.19 2.19-.6 3.15M15 16.6c-.17.4-.64.58-1.02.39-.35-.17-.52-.59-.37-.95.59-1.39.89-2.75.89-4.06s-.3-2.65-.88-4.01c-.16-.36.01-.78.36-.95.39-.2.85-.02 1.02.38.66 1.54 1 3.08 1 4.58s-.34 3.06-1 4.62',
  }),
  'ContactlessRounded',
);
export const ContactlessSharpIcon = (props?: KTRawAttr) => {
  const s = _ContactlessSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactlessSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M8.46 14.45l-1.36-.62c.28-.61.41-1.24.4-1.86-.01-.63-.14-1.24-.4-1.8l1.36-.63c.35.75.53 1.56.54 2.4.01.86-.17 1.7-.54 2.51m3.07 1.56-1.3-.74c.52-.92.78-1.98.78-3.15 0-1.19-.27-2.33-.8-3.4l1.34-.67c.64 1.28.96 2.65.96 4.07 0 1.43-.33 2.74-.98 3.89m3.14 1.32-1.35-.66c.78-1.6 1.18-3.18 1.18-4.69s-.4-3.07-1.18-4.64l1.34-.67c.9 1.78 1.34 3.56 1.34 5.31 0 1.74-.44 3.54-1.33 5.35',
  }),
  'ContactlessSharp',
);
export const ContactlessTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ContactlessTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactlessTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8M8.46 14.45l-1.36-.62c.28-.61.41-1.24.4-1.86-.01-.63-.14-1.24-.4-1.8l1.36-.63c.35.75.53 1.56.54 2.4.01.86-.17 1.7-.54 2.51m3.07 1.56-1.3-.74c.52-.92.78-1.98.78-3.15 0-1.19-.27-2.33-.8-3.4l1.34-.67c.64 1.28.96 2.65.96 4.07 0 1.43-.33 2.74-.98 3.89m3.14 1.32-1.35-.66c.78-1.6 1.18-3.18 1.18-4.69s-.4-3.07-1.18-4.64l1.34-.67c.9 1.78 1.34 3.56 1.34 5.31 0 1.74-.44 3.54-1.33 5.35',
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
    svg(
      'path',
      {
        d: 'M7.1 10.18c.26.56.39 1.16.4 1.8.01.63-.13 1.25-.4 1.86l1.37.62c.37-.81.55-1.65.54-2.5-.01-.84-.19-1.65-.54-2.4zm6.23-2.85c.78 1.57 1.18 3.14 1.18 4.64 0 1.51-.4 3.09-1.18 4.69l1.35.66c.88-1.81 1.33-3.61 1.33-5.35s-.45-3.53-1.33-5.31zM10.2 8.72c.53 1.07.8 2.21.8 3.4 0 1.17-.26 2.23-.78 3.15l1.3.74c.65-1.15.98-2.45.98-3.89 0-1.42-.32-2.79-.96-4.07z',
      },
      '2',
    ),
  ],
  'ContactlessTwoTone',
);
export const ContactsIcon = (props?: KTRawAttr) => {
  const s = _ContactsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactsIcon = svg(
  svg('path', {
    d: 'M20 0H4v2h16zM4 24h16v-2H4zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75M17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5z',
  }),
  'Contacts',
);
export const ContactsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ContactsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactsOutlinedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16zM4 0h16v2H4zm0 22h16v2H4zm8-10c1.38 0 2.5-1.12 2.5-2.5S13.38 7 12 7 9.5 8.12 9.5 9.5 10.62 12 12 12m0-3.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m5 7.49C17 13.9 13.69 13 12 13s-5 .9-5 2.99V17h10zm-8.19-.49c.61-.52 2.03-1 3.19-1 1.17 0 2.59.48 3.2 1z',
  }),
  'ContactsOutlined',
);
export const ContactsRoundedIcon = (props?: KTRawAttr) => {
  const s = _ContactsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactsRoundedIcon = svg(
  svg('path', {
    d: 'M19 0H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1M5 24h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75M17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5z',
  }),
  'ContactsRounded',
);
export const ContactsSharpIcon = (props?: KTRawAttr) => {
  const s = _ContactsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactsSharpIcon = svg(
  svg('path', {
    d: 'M20 0H4v2h16zM4 24h16v-2H4zM22 4H2v16h20zM12 6.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75M17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5z',
  }),
  'ContactsSharp',
);
export const ContactsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ContactsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContactsTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20 6H4v12h16zm-8 1c1.38 0 2.5 1.12 2.5 2.5S13.38 12 12 12s-2.5-1.12-2.5-2.5S10.62 7 12 7m5 10H7v-1.01C7 13.9 10.31 13 12 13s5 .9 5 2.99z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M4 6h16v12H4zm0-6h16v2H4zm0 22h16v2H4zm8-10c1.38 0 2.5-1.12 2.5-2.5S13.38 7 12 7 9.5 8.12 9.5 9.5 10.62 12 12 12m0-3.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 4.5c-1.69 0-5 .9-5 2.99V17h10v-1.01C17 13.9 13.69 13 12 13m-3.19 2.5c.61-.52 2.03-1 3.19-1 1.17 0 2.59.48 3.2 1z',
      },
      '1',
    ),
  ],
  'ContactsTwoTone',
);
export const ContentCopyIcon = (props?: KTRawAttr) => {
  const s = _ContentCopyIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentCopyIcon = svg(
  svg('path', {
    d: 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z',
  }),
  'ContentCopy',
);
export const ContentCopyOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ContentCopyOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentCopyOutlinedIcon = svg(
  svg('path', {
    d: 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z',
  }),
  'ContentCopyOutlined',
);
export const ContentCopyRoundedIcon = (props?: KTRawAttr) => {
  const s = _ContentCopyRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentCopyRoundedIcon = svg(
  svg('path', {
    d: 'M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z',
  }),
  'ContentCopyRounded',
);
export const ContentCopySharpIcon = (props?: KTRawAttr) => {
  const s = _ContentCopySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentCopySharpIcon = svg(
  svg('path', { d: 'M16 1H2v16h2V3h12zm5 4H6v18h15zm-2 16H8V7h11z' }),
  'ContentCopySharp',
);
export const ContentCopyTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ContentCopyTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentCopyTwoToneIcon = svg(
  [
    svg('path', { d: 'M8 7h11v14H8z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z',
      },
      '1',
    ),
  ],
  'ContentCopyTwoTone',
);
export const ContentCutIcon = (props?: KTRawAttr) => {
  const s = _ContentCutIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentCutIcon = svg(
  svg('path', {
    d: 'M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2m0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2m6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5M19 3l-6 6 2 2 7-7V3z',
  }),
  'ContentCut',
);
export const ContentCutOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ContentCutOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentCutOutlinedIcon = svg(
  svg('path', {
    d: 'M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2m0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2m6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5M19 3l-6 6 2 2 7-7V3z',
  }),
  'ContentCutOutlined',
);
export const ContentCutRoundedIcon = (props?: KTRawAttr) => {
  const s = _ContentCutRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentCutRoundedIcon = svg(
  svg('path', {
    d: 'M9.64 7.64c.29-.62.42-1.33.34-2.09-.19-1.73-1.54-3.2-3.26-3.49-2.77-.48-5.14 1.89-4.66 4.65.3 1.72 1.76 3.07 3.49 3.26.76.08 1.46-.05 2.09-.34L10 12l-2.36 2.36c-.62-.29-1.33-.42-2.09-.34-1.73.19-3.2 1.54-3.49 3.26-.48 2.77 1.89 5.13 4.65 4.65 1.72-.3 3.07-1.76 3.26-3.49.08-.76-.05-1.46-.34-2.09L12 14l7.59 7.59c.89.89 2.41.26 2.41-1v-.01c0-.37-.15-.73-.41-1zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2m0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2m6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5m7.59-10.09L13 9l2 2 6.59-6.59c.26-.26.41-.62.41-1V3.4c0-1.25-1.52-1.88-2.41-.99',
  }),
  'ContentCutRounded',
);
export const ContentCutSharpIcon = (props?: KTRawAttr) => {
  const s = _ContentCutSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentCutSharpIcon = svg(
  svg('path', {
    d: 'M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2m0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2m6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5M19 3l-6 6 2 2 7-7V3z',
  }),
  'ContentCutSharp',
);
export const ContentCutTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ContentCutTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentCutTwoToneIcon = svg(
  svg('path', {
    d: 'm19 3-6 6 2 2 7-7V3zm-9 3c0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64c.23-.5.36-1.05.36-1.64M6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2m0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2m6-8.5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5',
  }),
  'ContentCutTwoTone',
);
export const ContentPasteIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteIcon = svg(
  svg('path', {
    d: 'M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m7 18H5V4h2v3h10V4h2z',
  }),
  'ContentPaste',
);
export const ContentPasteGoIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteGoIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteGoIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 5h2v3h10V5h2v6h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
      },
      '0',
    ),
    svg('path', { d: 'm18.01 13-1.42 1.41 1.58 1.58H12v2h6.17l-1.58 1.59 1.42 1.41 3.99-4z' }, '1'),
  ],
  'ContentPasteGo',
);
export const ContentPasteGoOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteGoOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteGoOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 5h2v3h10V5h2v6h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
      },
      '0',
    ),
    svg('path', { d: 'm18.01 13-1.42 1.41 1.58 1.58H12v2h6.17l-1.58 1.59 1.42 1.41 3.99-4z' }, '1'),
  ],
  'ContentPasteGoOutlined',
);
export const ContentPasteGoRoundedIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteGoRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteGoRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 5h2v1c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5h2v6h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm21.29 16.29-2.58-2.58a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l.87.88H13c-.55 0-1 .45-1 1s.45 1 1 1h5.17l-.87.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l2.58-2.58c.39-.4.39-1.03 0-1.42',
      },
      '1',
    ),
  ],
  'ContentPasteGoRounded',
);
export const ContentPasteGoSharpIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteGoSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteGoSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 5h2v3h10V5h2v6h2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h7v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
      },
      '0',
    ),
    svg('path', { d: 'm18.01 13-1.42 1.41 1.58 1.58H12v2h6.17l-1.58 1.59 1.42 1.41 3.99-4z' }, '1'),
  ],
  'ContentPasteGoSharp',
);
export const ContentPasteGoTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteGoTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteGoTwoToneIcon = svg(
  [
    svg('path', { d: 'M10 17c0-3.31 2.69-6 6-6h3V5h-2v3H7V5H5v14h5z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M10 19H5V5h2v3h10V5h2v6h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5zm2-16c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
      },
      '1',
    ),
    svg('path', { d: 'm18.01 13-1.42 1.41 1.58 1.58H12v2h6.17l-1.58 1.59 1.42 1.41 3.99-4z' }, '2'),
  ],
  'ContentPasteGoTwoTone',
);
export const ContentPasteOffIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteOffIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteOffIcon = svg(
  svg('path', {
    d: 'M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61zM5 19V7.83L16.17 19zM17 8V5h2v11.17l2 2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
  }),
  'ContentPasteOff',
);
export const ContentPasteOffOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteOffOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteOffOutlinedIcon = svg(
  svg('path', {
    d: 'M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61zM5 19V7.83L16.17 19zM17 8V5h2v11.17l2 2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
  }),
  'ContentPasteOffOutlined',
);
export const ContentPasteOffRoundedIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteOffRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteOffRoundedIcon = svg(
  svg('path', {
    d: 'M20.49 20.49 3.51 3.51a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l.9.91V19c0 1.1.9 2 2 2h13.17l.9.9c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41M5 19V7.83L16.17 19zM17 8V5h2v11.17l2 2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
  }),
  'ContentPasteOffRounded',
);
export const ContentPasteOffSharpIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteOffSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteOffSharpIcon = svg(
  svg('path', {
    d: 'M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V21h15.17l1.61 1.61zM5 19V7.83L16.17 19zM17 8V5h2v11.17l2 2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
  }),
  'ContentPasteOffSharp',
);
export const ContentPasteOffTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteOffTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteOffTwoToneIcon = svg(
  [
    svg('path', { d: 'M10.83 8H17V5h2v11.17zM5 19V7.83L16.17 19z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61zM5 19V7.83L16.17 19zM17 8V5h2v11.17l2 2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
      },
      '1',
    ),
  ],
  'ContentPasteOffTwoTone',
);
export const ContentPasteOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteOutlinedIcon = svg(
  svg('path', {
    d: 'M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m7 18H5V4h2v3h10V4h2z',
  }),
  'ContentPasteOutlined',
);
export const ContentPasteRoundedIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteRoundedIcon = svg(
  svg('path', {
    d: 'M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m6 18H6c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h1v1c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V4h1c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1',
  }),
  'ContentPasteRounded',
);
export const ContentPasteSearchIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteSearchIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteSearchIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5',
      },
      '1',
    ),
  ],
  'ContentPasteSearch',
);
export const ContentPasteSearchOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteSearchOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteSearchOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5',
      },
      '1',
    ),
  ],
  'ContentPasteSearchOutlined',
);
export const ContentPasteSearchRoundedIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteSearchRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteSearchRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 5h2v1c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm22.3 20.9-2-2c.58-1.01.95-2.23.51-3.65-.53-1.72-2.04-3.05-3.84-3.22-2.87-.28-5.23 2.07-4.95 4.95.18 1.79 1.5 3.31 3.22 3.84 1.43.44 2.64.07 3.65-.51l2 2c.39.39 1.01.39 1.4 0s.4-1.02.01-1.41M16.5 19c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5',
      },
      '1',
    ),
  ],
  'ContentPasteSearchRounded',
);
export const ContentPasteSearchSharpIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteSearchSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteSearchSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 5h2v3h10V5h2v5h2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h7v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5',
      },
      '1',
    ),
  ],
  'ContentPasteSearchSharp',
);
export const ContentPasteSearchTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteSearchTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteSearchTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M10 16.5c0-3.58 2.92-6.5 6.5-6.5.89 0 1.73.18 2.5.5V5h-2v3H7V5H5v14h5.5c-.32-.77-.5-1.61-.5-2.5',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M10.5 19H5V5h2v3h10V5h2v5.5c.75.31 1.42.76 2 1.32V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6.82c-.55-.58-1.01-1.25-1.32-2M12 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5',
      },
      '2',
    ),
  ],
  'ContentPasteSearchTwoTone',
);
export const ContentPasteSharpIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteSharpIcon = svg(
  svg('path', {
    d: 'M21 2h-6.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H3v20h18zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m7 18H5V4h2v3h10V4h2z',
  }),
  'ContentPasteSharp',
);
export const ContentPasteTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ContentPasteTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContentPasteTwoToneIcon = svg(
  [
    svg('path', { d: 'M17 7H7V4H5v16h14V4h-2z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m7 18H5V4h2v3h10V4h2z',
      },
      '1',
    ),
  ],
  'ContentPasteTwoTone',
);
export const ContrastIcon = (props?: KTRawAttr) => {
  const s = _ContrastIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContrastIcon = svg(
  svg('path', {
    d: 'M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10m1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93z',
  }),
  'Contrast',
);
export const ContrastOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ContrastOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContrastOutlinedIcon = svg(
  svg('path', {
    d: 'M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10m1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93z',
  }),
  'ContrastOutlined',
);
export const ContrastRoundedIcon = (props?: KTRawAttr) => {
  const s = _ContrastRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContrastRoundedIcon = svg(
  svg('path', {
    d: 'M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10m1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93z',
  }),
  'ContrastRounded',
);
export const ContrastSharpIcon = (props?: KTRawAttr) => {
  const s = _ContrastSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContrastSharpIcon = svg(
  svg('path', {
    d: 'M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10m1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93z',
  }),
  'ContrastSharp',
);
export const ContrastTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ContrastTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ContrastTwoToneIcon = svg(
  svg('path', {
    d: 'M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10m1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93z',
  }),
  'ContrastTwoTone',
);
export const ControlCameraIcon = (props?: KTRawAttr) => {
  const s = _ControlCameraIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ControlCameraIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M15.54 5.54 13.77 7.3 12 5.54 10.23 7.3 8.46 5.54 12 2zm2.92 10-1.76-1.77L18.46 12l-1.76-1.77 1.76-1.77L22 12zm-10 2.92 1.77-1.76L12 18.46l1.77-1.76 1.77 1.76L12 22zm-2.92-10 1.76 1.77L5.54 12l1.76 1.77-1.76 1.77L2 12z',
      },
      '0',
    ),
    svg('circle', { cx: '12', cy: '12', r: '3' }, '1'),
  ],
  'ControlCamera',
);
export const ControlCameraOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ControlCameraOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ControlCameraOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5.54 8.46 2 12l3.54 3.54 1.76-1.77L5.54 12l1.76-1.77zm6.46 10-1.77-1.76-1.77 1.76L12 22l3.54-3.54-1.77-1.76zm6.46-10-1.76 1.77L18.46 12l-1.76 1.77 1.76 1.77L22 12zm-10-2.92 1.77 1.76L12 5.54l1.77 1.76 1.77-1.76L12 2z',
      },
      '0',
    ),
    svg('circle', { cx: '12', cy: '12', r: '3' }, '1'),
  ],
  'ControlCameraOutlined',
);
export const ControlCameraRoundedIcon = (props?: KTRawAttr) => {
  const s = _ControlCameraRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ControlCameraRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M4.65 9.35 2.7 11.3c-.39.39-.39 1.02 0 1.41l1.95 1.95c.49.49 1.28.49 1.77 0 .48-.49.48-1.27 0-1.76l-.88-.9.88-.89c.48-.49.48-1.27 0-1.76s-1.28-.49-1.77 0m12.93 0c-.48.49-.48 1.27 0 1.76l.88.89-.88.89c-.48.49-.48 1.27 0 1.76.49.49 1.28.49 1.77 0l1.95-1.95c.39-.39.39-1.02 0-1.41l-1.95-1.95c-.49-.48-1.29-.48-1.77.01M12 18.46l-.89-.88c-.49-.48-1.27-.48-1.76 0-.49.49-.49 1.28 0 1.77l1.95 1.95c.39.39 1.02.39 1.41 0l1.95-1.95c.49-.49.49-1.28 0-1.77-.49-.48-1.27-.48-1.76 0zM9.35 6.42c.49.48 1.27.48 1.76 0l.89-.88.89.88c.49.48 1.27.48 1.76 0 .49-.49.49-1.28 0-1.77L12.7 2.7a.996.996 0 0 0-1.41 0L9.35 4.65c-.49.49-.49 1.29 0 1.77',
      },
      '0',
    ),
    svg('circle', { cx: '12', cy: '12', r: '3' }, '1'),
  ],
  'ControlCameraRounded',
);
export const ControlCameraSharpIcon = (props?: KTRawAttr) => {
  const s = _ControlCameraSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ControlCameraSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5.54 8.46 2 12l3.54 3.54 1.76-1.77L5.54 12l1.76-1.77zm12.92 0-1.76 1.77L18.46 12l-1.76 1.77 1.76 1.77L22 12zm-6.46 10-1.77-1.76-1.77 1.76L12 22l3.54-3.54-1.77-1.76zM8.46 5.54l1.77 1.76L12 5.54l1.77 1.76 1.77-1.76L12 2z',
      },
      '0',
    ),
    svg('circle', { cx: '12', cy: '12', r: '3' }, '1'),
  ],
  'ControlCameraSharp',
);
export const ControlCameraTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ControlCameraTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ControlCameraTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M7.3 13.77 5.54 12l1.76-1.77-1.76-1.77L2 12l3.54 3.54zm8.24 4.69-1.77-1.76L12 18.46l-1.77-1.76-1.77 1.76L12 22zm2.92-2.92L22 12l-3.54-3.54-1.76 1.77L18.46 12l-1.76 1.77zM12 5.54l1.77 1.76 1.77-1.76L12 2 8.46 5.54l1.77 1.76z',
      },
      '0',
    ),
    svg('circle', { cx: '12', cy: '12', r: '3' }, '1'),
  ],
  'ControlCameraTwoTone',
);
export const ControlPointIcon = (props?: KTRawAttr) => {
  const s = _ControlPointIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ControlPointIcon = svg(
  svg('path', {
    d: 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
  }),
  'ControlPoint',
);
export const ControlPointDuplicateIcon = (props?: KTRawAttr) => {
  const s = _ControlPointDuplicateIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ControlPointDuplicateIcon = svg(
  svg('path', {
    d: 'M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12m13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7',
  }),
  'ControlPointDuplicate',
);
export const ControlPointDuplicateOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ControlPointDuplicateOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ControlPointDuplicateOutlinedIcon = svg(
  svg('path', {
    d: 'M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12m13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7',
  }),
  'ControlPointDuplicateOutlined',
);
export const ControlPointDuplicateRoundedIcon = (props?: KTRawAttr) => {
  const s = _ControlPointDuplicateRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ControlPointDuplicateRoundedIcon = svg(
  svg('path', {
    d: 'M15 8c-.55 0-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V9c0-.55-.45-1-1-1M2 12c0-2.58 1.4-4.83 3.48-6.04.32-.19.53-.51.53-.88 0-.77-.84-1.25-1.51-.86C1.82 5.78 0 8.68 0 12s1.82 6.22 4.5 7.78c.67.39 1.51-.09 1.51-.86 0-.37-.21-.69-.53-.88C3.4 16.83 2 14.58 2 12m13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7',
  }),
  'ControlPointDuplicateRounded',
);
export const ControlPointDuplicateSharpIcon = (props?: KTRawAttr) => {
  const s = _ControlPointDuplicateSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ControlPointDuplicateSharpIcon = svg(
  svg('path', {
    d: 'M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12m13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7',
  }),
  'ControlPointDuplicateSharp',
);
export const ControlPointDuplicateTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ControlPointDuplicateTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ControlPointDuplicateTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M15 5c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7m4 8h-3v3h-2v-3h-3v-2h3V8h2v3h3z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zm-1-5c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7M2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12',
      },
      '1',
    ),
  ],
  'ControlPointDuplicateTwoTone',
);
export const ControlPointOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ControlPointOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ControlPointOutlinedIcon = svg(
  svg('path', {
    d: 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
  }),
  'ControlPointOutlined',
);
export const ControlPointRoundedIcon = (props?: KTRawAttr) => {
  const s = _ControlPointRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ControlPointRoundedIcon = svg(
  svg('path', {
    d: 'M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1m0-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
  }),
  'ControlPointRounded',
);
export const ControlPointSharpIcon = (props?: KTRawAttr) => {
  const s = _ControlPointSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ControlPointSharpIcon = svg(
  svg('path', {
    d: 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
  }),
  'ControlPointSharp',
);
export const ControlPointTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ControlPointTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ControlPointTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m5 9h-4v4h-2v-4H7v-2h4V7h2v4h4z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m1-13h-2v4H7v2h4v4h2v-4h4v-2h-4z',
      },
      '1',
    ),
  ],
  'ControlPointTwoTone',
);
export const ConveyorBeltIcon = (props?: KTRawAttr) => {
  const s = _ConveyorBeltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ConveyorBeltIcon = svg(
  svg('path', {
    d: 'M19 15H5c-1.66 0-3 1.34-3 3s1.34 3 3 3h14c1.66 0 3-1.34 3-3s-1.34-3-3-3m0 4H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1M9 4v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1m7 4h-4V6.02h4zM2 9.02h4.94v1.91H2zm2.01-3h2.93v1.96H4.01z',
  }),
  'ConveyorBelt',
);
export const CookieIcon = (props?: KTRawAttr) => {
  const s = _CookieIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CookieIcon = svg(
  svg('path', {
    d: 'M21.95 10.99c-1.79-.03-3.7-1.95-2.68-4.22-2.98 1-5.77-1.59-5.19-4.56C6.95.71 2 6.58 2 12c0 5.52 4.48 10 10 10 5.89 0 10.54-5.08 9.95-11.01M8.5 15c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15m2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'Cookie',
);
export const CookieOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CookieOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CookieOutlinedIcon = svg(
  [
    svg('circle', { cx: '10.5', cy: '8.5', r: '1.5' }, '0'),
    svg('circle', { cx: '8.5', cy: '13.5', r: '1.5' }, '1'),
    svg('circle', { cx: '15', cy: '15', r: '1' }, '2'),
    svg(
      'path',
      {
        d: 'M21.95 10.99c-1.79-.03-3.7-1.95-2.68-4.22-2.97 1-5.78-1.59-5.19-4.56C7.11.74 2 6.41 2 12c0 5.52 4.48 10 10 10 5.89 0 10.54-5.08 9.95-11.01M12 20c-4.41 0-8-3.59-8-8 0-3.31 2.73-8.18 8.08-8.02.42 2.54 2.44 4.56 4.99 4.94.07.36.52 2.55 2.92 3.63C19.7 16.86 16.06 20 12 20',
      },
      '3',
    ),
  ],
  'CookieOutlined',
);
export const CookieRoundedIcon = (props?: KTRawAttr) => {
  const s = _CookieRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CookieRoundedIcon = svg(
  svg('path', {
    d: 'M21.27 10.9c-1.21-.33-2.31-1.46-2.29-2.89.01-.56-.4-1.02-.96-1.01C15.83 7.03 14 5.22 14 3.02c0-.49-.35-.9-.84-.96C6.53 1.22 2 6.81 2 12c0 5.52 4.48 10 10 10 5.61 0 10.11-4.62 10-10.18-.01-.44-.31-.81-.73-.92M8.5 15c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15m2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'CookieRounded',
);
export const CookieSharpIcon = (props?: KTRawAttr) => {
  const s = _CookieSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CookieSharpIcon = svg(
  svg('path', {
    d: 'M21.95 10.99c-1.79-.03-3.7-1.95-2.68-4.22-2.98 1-5.77-1.59-5.19-4.56C6.95.71 2 6.58 2 12c0 5.52 4.48 10 10 10 5.89 0 10.54-5.08 9.95-11.01M8.5 15c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15m2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'CookieSharp',
);
export const CookieTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CookieTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CookieTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M17.07 8.93c-2.55-.39-4.57-2.41-4.99-4.94C6.73 3.82 4 8.69 4 12c0 4.41 3.59 8 8 8 4.06 0 7.7-3.14 7.98-7.45-2.39-1.07-2.84-3.26-2.91-3.62M8.5 15c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15m2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
        opacity: '.3',
      },
      '0',
    ),
    svg('circle', { cx: '10.5', cy: '8.5', r: '1.5' }, '1'),
    svg('circle', { cx: '8.5', cy: '13.5', r: '1.5' }, '2'),
    svg('circle', { cx: '15', cy: '15', r: '1' }, '3'),
    svg(
      'path',
      {
        d: 'M21.95 10.99c-1.79-.03-3.7-1.95-2.68-4.22-2.97 1-5.78-1.59-5.19-4.56C7.1.74 2 6.41 2 12c0 5.52 4.48 10 10 10 5.89 0 10.54-5.08 9.95-11.01M12 20c-4.41 0-8-3.59-8-8 0-3.31 2.73-8.18 8.08-8.02.42 2.54 2.44 4.56 4.99 4.94.07.36.52 2.55 2.92 3.63C19.7 16.86 16.06 20 12 20',
      },
      '4',
    ),
  ],
  'CookieTwoTone',
);
export const CopyAllIcon = (props?: KTRawAttr) => {
  const s = _CopyAllIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CopyAllIcon = svg(
  svg('path', {
    d: 'M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H9V4h9zM3 15v-2h2v2zm0-5.5h2v2H3zM10 20h2v2h-2zm-7-1.5v-2h2v2zM5 22c-1.1 0-2-.9-2-2h2zm3.5 0h-2v-2h2zm5 0v-2h2c0 1.1-.9 2-2 2M5 6v2H3c0-1.1.9-2 2-2',
  }),
  'CopyAll',
);
export const CopyAllOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CopyAllOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CopyAllOutlinedIcon = svg(
  svg('path', {
    d: 'M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H9V4h9zM3 15v-2h2v2zm0-5.5h2v2H3zM10 20h2v2h-2zm-7-1.5v-2h2v2zM5 22c-1.1 0-2-.9-2-2h2zm3.5 0h-2v-2h2zm5 0v-2h2c0 1.1-.9 2-2 2M5 6v2H3c0-1.1.9-2 2-2',
  }),
  'CopyAllOutlined',
);
export const CopyAllRoundedIcon = (props?: KTRawAttr) => {
  const s = _CopyAllRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CopyAllRoundedIcon = svg(
  svg('path', {
    d: 'M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H9V4h9zM3 15v-2h2v2zm0-5.5h2v2H3zM10 20h2v2h-2zm-7-1.5v-2h2v2zM5 22c-1.1 0-2-.9-2-2h2zm3.5 0h-2v-2h2zm5 0v-2h2c0 1.1-.9 2-2 2M5 6v2H3c0-1.1.9-2 2-2',
  }),
  'CopyAllRounded',
);
export const CopyAllSharpIcon = (props?: KTRawAttr) => {
  const s = _CopyAllSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CopyAllSharpIcon = svg(
  svg('path', {
    d: 'M20 2H7v16h13zm-2 14H9V4h9zM3 15v-2h2v2zm0-5.5h2v2H3zM10 20h2v2h-2zm-7-1.5v-2h2v2zM5 22H3v-2h2zm3.5 0h-2v-2h2zm7 0h-2v-2h2zM3 6h2v2H3z',
  }),
  'CopyAllSharp',
);
export const CopyAllTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CopyAllTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CopyAllTwoToneIcon = svg(
  [
    svg('path', { d: 'M9 4h9v12H9z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H9V4h9zM3 15v-2h2v2zm0-5.5h2v2H3zM10 20h2v2h-2zm-7-1.5v-2h2v2zM5 22c-1.1 0-2-.9-2-2h2zm3.5 0h-2v-2h2zm5 0v-2h2c0 1.1-.9 2-2 2M5 6v2H3c0-1.1.9-2 2-2',
      },
      '1',
    ),
  ],
  'CopyAllTwoTone',
);
export const CopyrightIcon = (props?: KTRawAttr) => {
  const s = _CopyrightIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CopyrightIcon = svg(
  svg('path', {
    d: 'M11.88 9.14c1.28.06 1.61 1.15 1.63 1.66h1.79c-.08-1.98-1.49-3.19-3.45-3.19C9.64 7.61 8 9 8 12.14c0 1.94.93 4.24 3.84 4.24 2.22 0 3.41-1.65 3.44-2.95h-1.79c-.03.59-.45 1.38-1.63 1.44-1.31-.04-1.86-1.06-1.86-2.73 0-2.89 1.28-2.98 1.88-3M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
  }),
  'Copyright',
);
export const CopyrightOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CopyrightOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CopyrightOutlinedIcon = svg(
  svg('path', {
    d: 'M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
  }),
  'CopyrightOutlined',
);
export const CopyrightRoundedIcon = (props?: KTRawAttr) => {
  const s = _CopyrightRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CopyrightRoundedIcon = svg(
  svg('path', {
    d: 'M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
  }),
  'CopyrightRounded',
);
export const CopyrightSharpIcon = (props?: KTRawAttr) => {
  const s = _CopyrightSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CopyrightSharpIcon = svg(
  svg('path', {
    d: 'M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
  }),
  'CopyrightSharp',
);
export const CopyrightTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CopyrightTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CopyrightTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m-1.92 9.14c.05.33.16.63.3.88s.34.46.59.62c.23.15.53.22.89.23.21-.01.41-.03.6-.1.2-.07.37-.17.52-.3s.27-.28.36-.46.14-.37.15-.58h1.79c-.01.41-.12.79-.3 1.15s-.43.67-.74.94q-.465.405-1.08.63c-.41.15-.85.23-1.32.23-.65 0-1.22-.12-1.7-.34s-.88-.53-1.2-.91-.56-.83-.71-1.35S8 12.72 8 12.14v-.27c0-.58.09-1.12.24-1.64s.39-.97.71-1.36.72-.69 1.2-.92 1.05-.34 1.7-.34c.51 0 .97.07 1.39.23q.63.24 1.08.66c.3.28.53.62.7 1.01s.26.82.28 1.29h-1.79c-.01-.22-.05-.44-.14-.64s-.2-.38-.34-.53-.32-.27-.52-.36c-.19-.08-.4-.12-.63-.13-.37.01-.67.08-.91.23-.25.16-.45.37-.59.62s-.25.54-.3.87-.08.66-.08 1.01v.27c0 .33.03.67.08 1',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01q-.45-.42-1.08-.66c-.42-.16-.88-.23-1.39-.23-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23q.615-.225 1.08-.63c.31-.27.56-.58.74-.94s.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8',
      },
      '1',
    ),
  ],
  'CopyrightTwoTone',
);
export const CoronavirusIcon = (props?: KTRawAttr) => {
  const s = _CoronavirusIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoronavirusIcon = svg(
  svg('path', {
    d: 'M21.25 10.5c-.41 0-.75.34-.75.75h-1.54c-.15-1.37-.69-2.63-1.52-3.65l1.09-1.09.01.01c.29.29.77.29 1.06 0s.29-.77 0-1.06L18.54 4.4c-.29-.29-.77-.29-1.06 0s-.29.76-.01 1.05l-1.09 1.09a7.015 7.015 0 0 0-3.64-1.51V3.5h.01c.41 0 .75-.34.75-.75S13.16 2 12.75 2h-1.5c-.41 0-.75.34-.75.75s.33.74.74.75v1.55c-1.37.14-2.62.69-3.64 1.51L6.51 5.47l.01-.01c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0L4.4 5.46c-.29.29-.29.77 0 1.06s.76.29 1.05.01l1.09 1.09c-.82 1.02-1.36 2.26-1.5 3.63H3.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5c0 .41.34.75.75.75s.75-.34.75-.75h1.54c.15 1.37.69 2.61 1.5 3.63l-1.09 1.09c-.29-.29-.76-.28-1.05.01s-.29.77 0 1.06l1.06 1.06c.29.29.77.29 1.06 0s.29-.77 0-1.06l-.01-.01 1.09-1.09c1.02.82 2.26 1.36 3.63 1.51v1.55c-.41.01-.74.34-.74.75s.34.75.75.75h1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.01v-1.54c1.37-.14 2.62-.69 3.64-1.51l1.09 1.09c-.29.29-.28.76.01 1.05s.77.29 1.06 0l1.06-1.06c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0l-.01.01-1.09-1.09c.82-1.02 1.37-2.27 1.52-3.65h1.54c0 .41.34.75.75.75s.75-.34.75-.75v-1.5c.01-.4-.33-.74-.74-.74M13.75 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M12 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-1.75-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M8.5 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m1.75 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m3.5 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m.75-4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1',
  }),
  'Coronavirus',
);
export const CoronavirusOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CoronavirusOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoronavirusOutlinedIcon = svg(
  svg('path', {
    d: 'M9.5 12c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1m4.25-2c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m-3.5 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M22 11.25v1.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75h-1.54c-.15 1.37-.69 2.63-1.52 3.65l1.09 1.09.01-.01c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.06 1.06c-.29.29-.77.29-1.06 0s-.29-.76-.01-1.05l-1.09-1.09a7.015 7.015 0 0 1-3.64 1.51v1.54h.01c.41 0 .75.34.75.75s-.34.75-.75.75h-1.5c-.41 0-.75-.34-.75-.75s.33-.74.74-.75v-1.55c-1.37-.15-2.62-.69-3.63-1.51l-1.09 1.09.01.01c.29.29.29.77 0 1.06s-.77.29-1.06 0L4.4 18.54c-.29-.29-.29-.77 0-1.06s.76-.29 1.05-.01l1.09-1.09c-.82-1.02-1.36-2.26-1.5-3.63H3.5c0 .41-.34.75-.75.75S2 13.16 2 12.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75h1.54c.15-1.37.69-2.61 1.5-3.63L5.45 6.53c-.29.28-.76.28-1.05-.01s-.29-.77 0-1.06L5.46 4.4c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.01.01L7.6 6.56c1.02-.82 2.26-1.36 3.63-1.51V3.5c-.41-.01-.74-.34-.74-.75.01-.41.35-.75.76-.75h1.5c.41 0 .75.34.75.75s-.34.75-.75.75h-.01v1.54c1.37.14 2.62.69 3.64 1.51l1.09-1.09c-.29-.29-.28-.76.01-1.05s.77-.29 1.06 0l1.06 1.06c.29.29.29.77 0 1.06s-.77.29-1.06 0l-.01-.01-1.09 1.08c.82 1.02 1.37 2.27 1.52 3.65h1.54c0-.41.34-.75.75-.75s.75.34.75.75M17 12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5m-5-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m3.5 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m-1.75 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1',
  }),
  'CoronavirusOutlined',
);
export const CoronavirusRoundedIcon = (props?: KTRawAttr) => {
  const s = _CoronavirusRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoronavirusRoundedIcon = svg(
  svg('path', {
    d: 'M21.25 10.5c-.41 0-.75.34-.75.75h-1.54c-.15-1.37-.69-2.63-1.52-3.65l1.09-1.09.01.01c.29.29.77.29 1.06 0s.29-.77 0-1.06L18.54 4.4c-.29-.29-.77-.29-1.06 0s-.29.76-.01 1.05l-1.09 1.09a7.015 7.015 0 0 0-3.64-1.51V3.5h.01c.41 0 .75-.34.75-.75S13.16 2 12.75 2h-1.5c-.41 0-.75.34-.75.75s.33.74.74.75v1.55c-1.37.14-2.62.69-3.64 1.51L6.51 5.47l.01-.01c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0L4.4 5.46c-.29.29-.29.77 0 1.06s.76.29 1.05.01l1.09 1.09c-.82 1.02-1.36 2.26-1.5 3.63H3.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5c0 .41.34.75.75.75s.75-.34.75-.75h1.54c.15 1.37.69 2.61 1.5 3.63l-1.09 1.09c-.29-.29-.76-.28-1.05.01s-.29.77 0 1.06l1.06 1.06c.29.29.77.29 1.06 0s.29-.77 0-1.06l-.01-.01 1.09-1.09c1.02.82 2.26 1.36 3.63 1.51v1.55c-.41.01-.74.34-.74.75s.34.75.75.75h1.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.01v-1.54c1.37-.14 2.62-.69 3.64-1.51l1.09 1.09c-.29.29-.28.76.01 1.05s.77.29 1.06 0l1.06-1.06c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0l-.01.01-1.09-1.09c.82-1.02 1.37-2.27 1.52-3.65h1.54c0 .41.34.75.75.75s.75-.34.75-.75v-1.5c.01-.4-.33-.74-.74-.74M13.75 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M12 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-1.75-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M8.5 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m1.75 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m3.5 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m.75-4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1',
  }),
  'CoronavirusRounded',
);
export const CoronavirusSharpIcon = (props?: KTRawAttr) => {
  const s = _CoronavirusSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoronavirusSharpIcon = svg(
  svg('path', {
    d: 'M20.5 10.5v.75h-1.54c-.15-1.37-.69-2.63-1.52-3.65l1.09-1.09.01.01.53.53 1.06-1.06-2.12-2.12-1.06 1.06.52.52-1.09 1.09a7.015 7.015 0 0 0-3.64-1.51V3.5h.76V2h-3v1.5h.74v1.54c-1.37.15-2.62.7-3.64 1.52L6.51 5.47l.01-.01.53-.53-1.06-1.06-2.12 2.12 1.06 1.06.52-.52 1.09 1.09c-.82 1.02-1.36 2.26-1.5 3.63H3.5v-.75H2v3h1.5v-.75h1.54c.15 1.37.69 2.61 1.5 3.63l-1.09 1.09-.52-.52-1.06 1.06 2.12 2.12 1.06-1.06-.53-.53-.01-.01 1.09-1.09c1.02.82 2.26 1.36 3.63 1.51v1.54h-.73V22h3v-1.5h-.76v-1.54c1.37-.14 2.62-.69 3.64-1.51l1.09 1.09-.52.52 1.06 1.06L20.13 18l-1.06-1.06-.53.53-.01.01-1.09-1.09c.82-1.02 1.37-2.27 1.52-3.65h1.54v.75H22v-3h-1.5zM13.75 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-3.5 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M8.5 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m1.75 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M12 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m1.75 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m1.75-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'CoronavirusSharp',
);
export const CoronavirusTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CoronavirusTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CoronavirusTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.75 1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-3.5 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M8.5 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m1.75 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M12 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m1.75 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m1.75-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M9.5 12c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1m4.25-2c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m-3.5 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M22 11.25v1.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75h-1.54c-.15 1.37-.69 2.63-1.52 3.65l1.09 1.09.01-.01c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.06 1.06c-.29.29-.77.29-1.06 0s-.29-.76-.01-1.05l-1.09-1.09a7.015 7.015 0 0 1-3.64 1.51v1.54h.01c.41 0 .75.34.75.75s-.34.75-.75.75h-1.5c-.41 0-.75-.34-.75-.75s.33-.74.74-.75v-1.55c-1.37-.15-2.62-.69-3.63-1.51l-1.09 1.09.01.01c.29.29.29.77 0 1.06s-.77.29-1.06 0L4.4 18.54c-.29-.29-.29-.77 0-1.06s.76-.29 1.05-.01l1.09-1.09c-.82-1.02-1.36-2.26-1.5-3.63H3.5c0 .41-.34.75-.75.75S2 13.16 2 12.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75h1.54c.15-1.37.69-2.61 1.5-3.63L5.45 6.53c-.29.28-.76.28-1.05-.01s-.29-.77 0-1.06L5.46 4.4c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.01.01L7.6 6.56c1.02-.82 2.26-1.36 3.63-1.51V3.5c-.41-.01-.74-.34-.74-.75.01-.41.35-.75.76-.75h1.5c.41 0 .75.34.75.75s-.34.75-.75.75h-.01v1.54c1.37.14 2.62.69 3.64 1.51l1.09-1.09c-.29-.29-.28-.76.01-1.05s.77-.29 1.06 0l1.06 1.06c.29.29.29.77 0 1.06s-.77.29-1.06 0l-.01-.01-1.09 1.08c.82 1.02 1.37 2.27 1.52 3.65h1.54c0-.41.34-.75.75-.75s.75.34.75.75M17 12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5m-5-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m3.5 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m-1.75 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1',
      },
      '1',
    ),
  ],
  'CoronavirusTwoTone',
);
export const CorporateFareIcon = (props?: KTRawAttr) => {
  const s = _CorporateFareIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CorporateFareIcon = svg(
  svg('path', {
    d: 'M12 7V3H2v18h20V7zm-2 12H4v-2h6zm0-4H4v-2h6zm0-4H4V9h6zm0-4H4V5h6zm10 12h-8V9h8zm-2-8h-4v2h4zm0 4h-4v2h4z',
  }),
  'CorporateFare',
);
export const CorporateFareOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CorporateFareOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CorporateFareOutlinedIcon = svg(
  svg('path', {
    d: 'M12 7V3H2v18h20V7zm-2 12H4v-2h6zm0-4H4v-2h6zm0-4H4V9h6zm0-4H4V5h6zm10 12h-8V9h8zm-2-8h-4v2h4zm0 4h-4v2h4z',
  }),
  'CorporateFareOutlined',
);
export const CorporateFareRoundedIcon = (props?: KTRawAttr) => {
  const s = _CorporateFareRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CorporateFareRoundedIcon = svg(
  svg('path', {
    d: 'M12 7V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-2 12H4v-2h6zm0-4H4v-2h6zm0-4H4V9h6zm0-4H4V5h6zm10 12h-8V9h8zm-2-8h-4v2h4zm0 4h-4v2h4z',
  }),
  'CorporateFareRounded',
);
export const CorporateFareSharpIcon = (props?: KTRawAttr) => {
  const s = _CorporateFareSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CorporateFareSharpIcon = svg(
  svg('path', {
    d: 'M12 7V3H2v18h20V7zm-2 12H4v-2h6zm0-4H4v-2h6zm0-4H4V9h6zm0-4H4V5h6zm10 12h-8V9h8zm-2-8h-4v2h4zm0 4h-4v2h4z',
  }),
  'CorporateFareSharp',
);
export const CorporateFareTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CorporateFareTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CorporateFareTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M10 19H4v-2h6zm0-4H4v-2h6zm0-4H4V9h6zm0-4H4V5h6zm10 12h-8V9h8zm-2-8h-4v2h4zm0 4h-4v2h4z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 7V3H2v18h20V7zm-2 12H4v-2h6zm0-4H4v-2h6zm0-4H4V9h6zm0-4H4V5h6zm10 12h-8V9h8zm-2-8h-4v2h4zm0 4h-4v2h4z',
      },
      '1',
    ),
  ],
  'CorporateFareTwoTone',
);
export const CottageIcon = (props?: KTRawAttr) => {
  const s = _CottageIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CottageIcon = svg(
  svg('path', {
    d: 'M12 3 6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h7v-6h2v6h7v-9.38l1.79 1.36L23 11.4zm-2-2c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1z',
  }),
  'Cottage',
);
export const CottageOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CottageOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CottageOutlinedIcon = svg(
  svg('path', {
    d: 'M12 3 6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4zm6 16h-5v-4h-2v4H6v-8.9l6-4.58 6 4.58zM10 1c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1z',
  }),
  'CottageOutlined',
);
export const CottageRoundedIcon = (props?: KTRawAttr) => {
  const s = _CottageRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CottageRoundedIcon = svg(
  svg('path', {
    d: 'M22.39 12.19c.34-.44.25-1.07-.19-1.4l-9.6-7.33c-.36-.27-.86-.27-1.21 0L6 7.58V7c0-.55-.45-1-1-1s-1 .45-1 1v2.11l-2.21 1.68c-.44.33-.52.96-.19 1.4.34.44.96.52 1.4.19l1-.76V20c0 .55.45 1 1 1h6v-5c0-.55.45-1 1-1s1 .45 1 1v5h6c.55 0 1-.45 1-1v-8.38l.99.76c.44.34 1.07.25 1.4-.19M5.27 5c-.74 0-1.26-.8-.9-1.45C4.89 2.62 5.87 2 7 2c.38 0 .72-.22.89-.53.15-.31.5-.47.84-.47.74 0 1.26.8.9 1.45C9.11 3.38 8.13 4 7 4c-.38 0-.72.22-.89.53-.15.31-.5.47-.84.47',
  }),
  'CottageRounded',
);
export const CottageSharpIcon = (props?: KTRawAttr) => {
  const s = _CottageSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CottageSharpIcon = svg(
  svg('path', {
    d: 'M12 3 6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h7v-6h2v6h7v-9.38l1.79 1.36L23 11.4zm-2-2c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1z',
  }),
  'CottageSharp',
);
export const CottageTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CottageTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CottageTwoToneIcon = svg(
  [
    svg('path', { d: 'M18 19h-5v-4h-2v4H6v-8.9l6-4.58 6 4.58z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M12 3 6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4zm6 16h-5v-4h-2v4H6v-8.9l6-4.58 6 4.58zM10 1c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1z',
      },
      '1',
    ),
  ],
  'CottageTwoTone',
);
export const CountertopsIcon = (props?: KTRawAttr) => {
  const s = _CountertopsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CountertopsIcon = svg(
  svg('path', {
    d: 'M18 10V7c0-1.66-1.34-3-3-3s-3 1.34-3 3h2c0-.55.45-1 1-1s1 .45 1 1v3H8c1.1 0 2-.9 2-2V4H4v4c0 1.1.9 2 2 2H2v2h2v8h16v-8h2v-2zm-5 8h-2v-6h2z',
  }),
  'Countertops',
);
export const CountertopsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CountertopsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CountertopsOutlinedIcon = svg(
  svg('path', {
    d: 'M22 10h-4V7c0-1.66-1.34-3-3-3s-3 1.34-3 3h2c0-.55.45-1 1-1s1 .45 1 1v3H8c1.1 0 2-.9 2-2V4H4v4c0 1.1.9 2 2 2H2v2h2v8h16v-8h2zM6 6h2v2H6zm0 12v-6h5v6zm12 0h-5v-6h5z',
  }),
  'CountertopsOutlined',
);
export const CountertopsRoundedIcon = (props?: KTRawAttr) => {
  const s = _CountertopsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CountertopsRoundedIcon = svg(
  svg('path', {
    d: 'M18 10V7.17c0-1.62-1.22-3.08-2.84-3.17-1.21-.06-2.27.59-2.8 1.57-.35.65.17 1.43.91 1.43h.01c.34 0 .68-.16.84-.46.16-.32.5-.54.88-.54.55 0 1 .45 1 1v3H8c1.1 0 2-.9 2-2V5c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v3c0 1.1.9 2 2 2H3c-.55 0-1 .45-1 1s.45 1 1 1h1v7c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-7h1c.55 0 1-.45 1-1s-.45-1-1-1zm-5 8h-2v-6h2z',
  }),
  'CountertopsRounded',
);
export const CountertopsSharpIcon = (props?: KTRawAttr) => {
  const s = _CountertopsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CountertopsSharpIcon = svg(
  svg('path', {
    d: 'M18 10V7c0-1.66-1.34-3-3-3s-3 1.34-3 3h2c0-.55.45-1 1-1s1 .45 1 1v3H8c1.1 0 2-.9 2-2V4H4v4c0 1.1.9 2 2 2H2v2h2v8h16v-8h2v-2zm-5 8h-2v-6h2z',
  }),
  'CountertopsSharp',
);
export const CountertopsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CountertopsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CountertopsTwoToneIcon = svg(
  [
    svg('path', { d: 'M6 6h2v2H6zm0 12v-6h5v6zm12 0h-5v-6h5z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M22 10h-4V7c0-1.66-1.34-3-3-3s-3 1.34-3 3h2c0-.55.45-1 1-1s1 .45 1 1v3H8c1.1 0 2-.9 2-2V4H4v4c0 1.1.9 2 2 2H2v2h2v8h16v-8h2zM6 6h2v2H6zm0 12v-6h5v6zm12 0h-5v-6h5z',
      },
      '1',
    ),
  ],
  'CountertopsTwoTone',
);
export const CreateIcon = (props?: KTRawAttr) => {
  const s = _CreateIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreateIcon = svg(
  svg('path', {
    d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z',
  }),
  'Create',
);
export const CreateNewFolderIcon = (props?: KTRawAttr) => {
  const s = _CreateNewFolderIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreateNewFolderIcon = svg(
  svg('path', {
    d: 'M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3z',
  }),
  'CreateNewFolder',
);
export const CreateNewFolderOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CreateNewFolderOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreateNewFolderOutlinedIcon = svg(
  svg('path', {
    d: 'M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m0 12H4V6h5.17l2 2H20zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z',
  }),
  'CreateNewFolderOutlined',
);
export const CreateNewFolderRoundedIcon = (props?: KTRawAttr) => {
  const s = _CreateNewFolderRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreateNewFolderRoundedIcon = svg(
  svg('path', {
    d: 'M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-2 8h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1',
  }),
  'CreateNewFolderRounded',
);
export const CreateNewFolderSharpIcon = (props?: KTRawAttr) => {
  const s = _CreateNewFolderSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreateNewFolderSharpIcon = svg(
  svg('path', { d: 'M22 6H12l-2-2H2v16h20zm-3 8h-3v3h-2v-3h-3v-2h3V9h2v3h3z' }),
  'CreateNewFolderSharp',
);
export const CreateNewFolderTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CreateNewFolderTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreateNewFolderTwoToneIcon = svg(
  [
    svg('path', { d: 'm11.17 8-.59-.59L9.17 6H4v12h16V8zM14 10h2v2h2v2h-2v2h-2v-2h-2v-2h2z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m0 12H4V6h5.17l1.41 1.41.59.59H20zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z',
      },
      '1',
    ),
  ],
  'CreateNewFolderTwoTone',
);
export const CreateOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CreateOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreateOutlinedIcon = svg(
  svg('path', {
    d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM5.92 19H5v-.92l9.06-9.06.92.92zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41',
  }),
  'CreateOutlined',
);
export const CreateRoundedIcon = (props?: KTRawAttr) => {
  const s = _CreateRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreateRoundedIcon = svg(
  svg('path', {
    d: 'M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1q-.15.15-.15.36M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z',
  }),
  'CreateRounded',
);
export const CreateSharpIcon = (props?: KTRawAttr) => {
  const s = _CreateSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreateSharpIcon = svg(
  svg('path', { d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75z' }),
  'CreateSharp',
);
export const CreateTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CreateTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreateTwoToneIcon = svg(
  [
    svg('path', { d: 'M5 18.08V19h.92l9.06-9.06-.92-.92z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM5.92 19H5v-.92l9.06-9.06.92.92zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41',
      },
      '1',
    ),
  ],
  'CreateTwoTone',
);
export const CreditCardIcon = (props?: KTRawAttr) => {
  const s = _CreditCardIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreditCardIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z',
  }),
  'CreditCard',
);
export const CreditCardOffIcon = (props?: KTRawAttr) => {
  const s = _CreditCardOffIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreditCardOffIcon = svg(
  svg('path', {
    d: 'M21.9 21.9 2.1 2.1.69 3.51l1.55 1.55c-.15.28-.23.6-.23.94L2 18c0 1.11.89 2 2 2h13.17l3.31 3.31zM4 12V8h1.17l4 4zm2.83-8H20c1.11 0 2 .89 2 2v12c0 .34-.08.66-.23.94L14.83 12H20V8h-9.17z',
  }),
  'CreditCardOff',
);
export const CreditCardOffOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CreditCardOffOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreditCardOffOutlinedIcon = svg(
  svg('path', {
    d: 'M6.83 4H20c1.11 0 2 .89 2 2v12c0 .34-.08.66-.23.94L20 17.17V12h-5.17l-4-4H20V6H8.83zm13.66 19.31L17.17 20H4c-1.11 0-2-.89-2-2l.01-12c0-.34.08-.66.23-.93L.69 3.51 2.1 2.1l19.8 19.8zM4 6.83V8h1.17zM15.17 18l-6-6H4v6z',
  }),
  'CreditCardOffOutlined',
);
export const CreditCardOffRoundedIcon = (props?: KTRawAttr) => {
  const s = _CreditCardOffRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreditCardOffRoundedIcon = svg(
  svg('path', {
    d: 'M21.19 21.19 2.81 2.81a.996.996 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22l.84.84c-.14.28-.22.6-.22.94L2 18c0 1.11.89 2 2 2h13.17l2.61 2.61c.39.39 1.02.39 1.41 0s.39-1.03 0-1.42M4 12V8h1.17l4 4zm2.83-8H20c1.11 0 2 .89 2 2v12c0 .34-.08.66-.23.94L14.83 12H20V8h-9.17z',
  }),
  'CreditCardOffRounded',
);
export const CreditCardOffSharpIcon = (props?: KTRawAttr) => {
  const s = _CreditCardOffSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreditCardOffSharpIcon = svg(
  svg('path', {
    d: 'M6.83 4H22v15.17L14.83 12H20V8h-9.17zm13.66 19.31L17.17 20H2V4.83L.69 3.51 2.1 2.1l19.8 19.8zM9.17 12l-4-4H4v4z',
  }),
  'CreditCardOffSharp',
);
export const CreditCardOffTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CreditCardOffTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreditCardOffTwoToneIcon = svg(
  [
    svg('path', { d: 'M20 17.17V12h-5.17zM10.83 8H20V6H8.83zM4 6.83V8h1.17zM15.17 18l-6-6H4v6z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M6.83 4H20c1.11 0 2 .89 2 2v12c0 .34-.08.66-.23.94L20 17.17V12h-5.17l-4-4H20V6H8.83zm13.66 19.31L17.17 20H4c-1.11 0-2-.89-2-2l.01-12c0-.34.08-.66.23-.93L.69 3.51 2.1 2.1l19.8 19.8zM4 6.83V8h1.17zM15.17 18l-6-6H4v6z',
      },
      '1',
    ),
  ],
  'CreditCardOffTwoTone',
);
export const CreditCardOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CreditCardOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreditCardOutlinedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z',
  }),
  'CreditCardOutlined',
);
export const CreditCardRoundedIcon = (props?: KTRawAttr) => {
  const s = _CreditCardRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreditCardRoundedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m-1 14H5c-.55 0-1-.45-1-1v-5h16v5c0 .55-.45 1-1 1m1-10H4V6h16z',
  }),
  'CreditCardRounded',
);
export const CreditCardSharpIcon = (props?: KTRawAttr) => {
  const s = _CreditCardSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreditCardSharpIcon = svg(
  svg('path', { d: 'M22 4H2.01L2 20h20zm-2 14H4v-6h16zm0-10H4V6h16z' }),
  'CreditCardSharp',
);
export const CreditCardTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CreditCardTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreditCardTwoToneIcon = svg(
  [
    svg('path', { d: 'M4 12h16v6H4zm0-6h16v2H4z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z',
      },
      '1',
    ),
  ],
  'CreditCardTwoTone',
);
export const CreditScoreIcon = (props?: KTRawAttr) => {
  const s = _CreditScoreIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreditScoreIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h5v-2H4v-6h18V6c0-1.11-.89-2-2-2m0 4H4V6h16zm-5.07 11.17-2.83-2.83-1.41 1.41L14.93 22 22 14.93l-1.41-1.41z',
  }),
  'CreditScore',
);
export const CreditScoreOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CreditScoreOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreditScoreOutlinedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h5v-2H4v-6h18V6c0-1.11-.89-2-2-2m0 4H4V6h16zm-5.07 11.17-2.83-2.83-1.41 1.41L14.93 22 22 14.93l-1.41-1.41z',
  }),
  'CreditScoreOutlined',
);
export const CreditScoreRoundedIcon = (props?: KTRawAttr) => {
  const s = _CreditScoreRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreditScoreRoundedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h4c.55 0 1-.45 1-1s-.45-1-1-1H4v-6h18V6c0-1.1-.9-2-2-2m0 4H4V6h16zm-5.07 11.17-2.12-2.12a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0l5.66-5.66c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0z',
  }),
  'CreditScoreRounded',
);
export const CreditScoreSharpIcon = (props?: KTRawAttr) => {
  const s = _CreditScoreSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreditScoreSharpIcon = svg(
  svg('path', {
    d: 'M2 4v16h7v-2H4v-6h18V4zm18 4H4V6h16zm-5.07 11.17-2.83-2.83-1.41 1.41L14.93 22 22 14.93l-1.41-1.41z',
  }),
  'CreditScoreSharp',
);
export const CreditScoreTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CreditScoreTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CreditScoreTwoToneIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h5v-2H4v-6h18V6c0-1.11-.89-2-2-2m0 4H4V6h16zm-5.07 11.17-2.83-2.83-1.41 1.41L14.93 22 22 14.93l-1.41-1.41z',
  }),
  'CreditScoreTwoTone',
);
export const CribIcon = (props?: KTRawAttr) => {
  const s = _CribIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CribIcon = svg(
  svg('path', {
    d: 'M18 9h-6V4H8C5.79 4 4 5.79 4 8v6c0 1.1.9 2 2 2h2v2.93c-.61-.35-1.16-.78-1.65-1.27l-1.42 1.42C6.74 20.88 9.24 22 12 22s5.26-1.12 7.07-2.93l-1.42-1.42c-.49.49-1.05.92-1.65 1.27V16h2c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2m-4 10.75c-.64.16-1.31.25-2 .25s-1.36-.09-2-.25V16h4z',
  }),
  'Crib',
);
export const CribOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CribOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CribOutlinedIcon = svg(
  svg('path', {
    d: 'M18 9h-6V4H8C5.79 4 4 5.79 4 8v6c0 1.1.9 2 2 2h2v2.93c-.61-.35-1.16-.78-1.65-1.27l-1.42 1.42C6.74 20.88 9.24 22 12 22s5.26-1.12 7.07-2.93l-1.42-1.42c-.49.49-1.05.92-1.65 1.27V16h2c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2m-4 10.75c-.64.16-1.31.25-2 .25s-1.36-.09-2-.25V16h4zM18 14H6V8c0-1.1.9-2 2-2h2v5h8z',
  }),
  'CribOutlined',
);
export const CribRoundedIcon = (props?: KTRawAttr) => {
  const s = _CribRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CribRoundedIcon = svg(
  svg('path', {
    d: 'M18.32 18.32c-.36-.36-.92-.4-1.31-.08-.32.25-.65.48-1 .69V16h2c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2h-6V6c0-1.1-.9-2-2-2H8C5.79 4 4 5.79 4 8v6c0 1.1.9 2 2 2h2v2.93c-.35-.2-.69-.43-1-.69-.39-.32-.96-.27-1.31.08-.42.42-.39 1.12.08 1.5C7.47 21.18 9.64 22 12 22s4.53-.82 6.24-2.18c.47-.38.5-1.08.08-1.5M14 19.75c-.64.16-1.31.25-2 .25s-1.36-.09-2-.25V16h4z',
  }),
  'CribRounded',
);
export const CribSharpIcon = (props?: KTRawAttr) => {
  const s = _CribSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CribSharpIcon = svg(
  svg('path', {
    d: 'M20 9h-8V4H8C5.79 4 4 5.79 4 8v8h4v2.93c-.61-.35-1.16-.78-1.65-1.27l-1.42 1.42C6.74 20.88 9.24 22 12 22s5.26-1.12 7.07-2.93l-1.42-1.42c-.49.49-1.05.92-1.65 1.27V16h4zm-6 10.75c-.64.16-1.31.25-2 .25s-1.36-.09-2-.25V16h4z',
  }),
  'CribSharp',
);
export const CribTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CribTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CribTwoToneIcon = svg(
  [
    svg('path', { d: 'M18 14H6V8c0-1.1.9-2 2-2h2v5h8z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M18 9h-6V4H8C5.79 4 4 5.79 4 8v6c0 1.1.9 2 2 2h2v2.93c-.61-.35-1.16-.78-1.65-1.27l-1.42 1.42C6.74 20.88 9.24 22 12 22s5.26-1.12 7.07-2.93l-1.42-1.42c-.49.49-1.05.92-1.65 1.27V16h2c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2m-4 10.75c-.64.16-1.31.25-2 .25s-1.36-.09-2-.25V16h4zM18 14H6V8c0-1.1.9-2 2-2h2v5h8z',
      },
      '1',
    ),
  ],
  'CribTwoTone',
);
export const CrisisAlertIcon = (props?: KTRawAttr) => {
  const s = _CrisisAlertIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CrisisAlertIcon = svg(
  svg('path', {
    d: 'M14.5 2.5c0 1.5-1.5 6-1.5 6h-2S9.5 4 9.5 2.5C9.5 1.12 10.62 0 12 0s2.5 1.12 2.5 2.5M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m4.08-4.89c.18-.75.33-1.47.39-2.06C19.75 4.69 22 8.08 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-3.92 2.25-7.31 5.53-8.95.07.59.21 1.32.39 2.06C5.58 6.51 4 9.07 4 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.93-1.58-5.49-3.92-6.89M18 12c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2 .98-3.77 2.48-4.86.23.81.65 2.07.65 2.07C8.43 9.93 8 10.92 8 12c0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.08-.43-2.07-1.13-2.79 0 0 .41-1.22.65-2.07C17.02 8.23 18 10 18 12',
  }),
  'CrisisAlert',
);
export const CrisisAlertOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CrisisAlertOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CrisisAlertOutlinedIcon = svg(
  svg('path', {
    d: 'M14.5 2.5c0 1.5-1.5 6-1.5 6h-2S9.5 4 9.5 2.5C9.5 1.12 10.62 0 12 0s2.5 1.12 2.5 2.5M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m4.08-4.89c.18-.75.33-1.47.39-2.06C19.75 4.69 22 8.08 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-3.92 2.25-7.31 5.53-8.95.07.59.21 1.32.39 2.06C5.58 6.51 4 9.07 4 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.93-1.58-5.49-3.92-6.89M18 12c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2 .98-3.77 2.48-4.86.23.81.65 2.07.65 2.07C8.43 9.93 8 10.92 8 12c0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.08-.43-2.07-1.13-2.79 0 0 .41-1.22.65-2.07C17.02 8.23 18 10 18 12',
  }),
  'CrisisAlertOutlined',
);
export const CrisisAlertRoundedIcon = (props?: KTRawAttr) => {
  const s = _CrisisAlertRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CrisisAlertRoundedIcon = svg(
  svg('path', {
    d: 'M14.5 2.5c0 1.5-1.5 6-1.5 6h-2S9.5 4 9.5 2.5C9.5 1.12 10.62 0 12 0s2.5 1.12 2.5 2.5M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m4.08-4.89c.18-.75.33-1.47.39-2.06C19.75 4.69 22 8.08 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-3.92 2.25-7.31 5.53-8.95.07.59.21 1.32.39 2.06C5.58 6.51 4 9.07 4 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.93-1.58-5.49-3.92-6.89M18 12c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2 .98-3.77 2.48-4.86.23.81.65 2.07.65 2.07C8.43 9.93 8 10.92 8 12c0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.08-.43-2.07-1.13-2.79 0 0 .41-1.22.65-2.07C17.02 8.23 18 10 18 12',
  }),
  'CrisisAlertRounded',
);
export const CrisisAlertSharpIcon = (props?: KTRawAttr) => {
  const s = _CrisisAlertSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CrisisAlertSharpIcon = svg(
  svg('path', {
    d: 'M14.5 2.5c0 1.06-.75 3.64-1.19 5.04-.18.57-.71.96-1.31.96s-1.13-.39-1.31-.96C10.25 6.14 9.5 3.56 9.5 2.5 9.5 1.12 10.62 0 12 0s2.5 1.12 2.5 2.5M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m4.08-4.89c.18-.75.33-1.47.39-2.06C19.75 4.69 22 8.08 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-3.92 2.25-7.31 5.53-8.95.07.59.21 1.32.39 2.06C5.58 6.51 4 9.07 4 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.93-1.58-5.49-3.92-6.89M18 12c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2 .98-3.77 2.48-4.86.23.81.65 2.07.65 2.07C8.43 9.93 8 10.92 8 12c0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.08-.43-2.07-1.13-2.79 0 0 .41-1.22.65-2.07C17.02 8.23 18 10 18 12',
  }),
  'CrisisAlertSharp',
);
export const CrisisAlertTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CrisisAlertTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CrisisAlertTwoToneIcon = svg(
  svg('path', {
    d: 'M14.5 2.5c0 1.5-1.5 6-1.5 6h-2S9.5 4 9.5 2.5C9.5 1.12 10.62 0 12 0s2.5 1.12 2.5 2.5M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m4.08-4.89c.18-.75.33-1.47.39-2.06C19.75 4.69 22 8.08 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-3.92 2.25-7.31 5.53-8.95.07.59.21 1.32.39 2.06C5.58 6.51 4 9.07 4 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.93-1.58-5.49-3.92-6.89M18 12c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2 .98-3.77 2.48-4.86.23.81.65 2.07.65 2.07C8.43 9.93 8 10.92 8 12c0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.08-.43-2.07-1.13-2.79 0 0 .41-1.22.65-2.07C17.02 8.23 18 10 18 12',
  }),
  'CrisisAlertTwoTone',
);
export const CropIcon = (props?: KTRawAttr) => {
  const s = _CropIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropIcon = svg(
  svg('path', { d: 'M17 15h2V7c0-1.1-.9-2-2-2H9v2h8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2z' }),
  'Crop',
);
export const Crop169Icon = (props?: KTRawAttr) => {
  const s = _Crop169Icon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop169Icon = svg(
  svg('path', { d: 'M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 8H5V9h14z' }),
  'Crop169',
);
export const Crop169OutlinedIcon = (props?: KTRawAttr) => {
  const s = _Crop169OutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop169OutlinedIcon = svg(
  svg('path', { d: 'M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 8H5V9h14z' }),
  'Crop169Outlined',
);
export const Crop169RoundedIcon = (props?: KTRawAttr) => {
  const s = _Crop169RoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop169RoundedIcon = svg(
  svg('path', { d: 'M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 8H5V9h14z' }),
  'Crop169Rounded',
);
export const Crop169SharpIcon = (props?: KTRawAttr) => {
  const s = _Crop169SharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop169SharpIcon = svg(svg('path', { d: 'M21 7H3v10h18zm-2 8H5V9h14z' }), 'Crop169Sharp');
export const Crop169TwoToneIcon = (props?: KTRawAttr) => {
  const s = _Crop169TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop169TwoToneIcon = svg(
  svg('path', { d: 'M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 8H5V9h14z' }),
  'Crop169TwoTone',
);
export const Crop32Icon = (props?: KTRawAttr) => {
  const s = _Crop32Icon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop32Icon = svg(
  svg('path', { d: 'M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 10H5V8h14z' }),
  'Crop32',
);
export const Crop32OutlinedIcon = (props?: KTRawAttr) => {
  const s = _Crop32OutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop32OutlinedIcon = svg(
  svg('path', { d: 'M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 10H5V8h14z' }),
  'Crop32Outlined',
);
export const Crop32RoundedIcon = (props?: KTRawAttr) => {
  const s = _Crop32RoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop32RoundedIcon = svg(
  svg('path', { d: 'M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 10H5V8h14z' }),
  'Crop32Rounded',
);
export const Crop32SharpIcon = (props?: KTRawAttr) => {
  const s = _Crop32SharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop32SharpIcon = svg(svg('path', { d: 'M21 6H3v12h18zm-2 10H5V8h14z' }), 'Crop32Sharp');
export const Crop32TwoToneIcon = (props?: KTRawAttr) => {
  const s = _Crop32TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop32TwoToneIcon = svg(
  svg('path', { d: 'M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 10H5V8h14z' }),
  'Crop32TwoTone',
);
export const Crop54Icon = (props?: KTRawAttr) => {
  const s = _Crop54Icon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop54Icon = svg(
  svg('path', { d: 'M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H5V6h14z' }),
  'Crop54',
);
export const Crop54OutlinedIcon = (props?: KTRawAttr) => {
  const s = _Crop54OutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop54OutlinedIcon = svg(
  svg('path', { d: 'M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H5V6h14z' }),
  'Crop54Outlined',
);
export const Crop54RoundedIcon = (props?: KTRawAttr) => {
  const s = _Crop54RoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop54RoundedIcon = svg(
  svg('path', { d: 'M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H5V6h14z' }),
  'Crop54Rounded',
);
export const Crop54SharpIcon = (props?: KTRawAttr) => {
  const s = _Crop54SharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop54SharpIcon = svg(svg('path', { d: 'M21 4H3v16h18zm-2 14H5V6h14z' }), 'Crop54Sharp');
export const Crop54TwoToneIcon = (props?: KTRawAttr) => {
  const s = _Crop54TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop54TwoToneIcon = svg(
  svg('path', { d: 'M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H5V6h14z' }),
  'Crop54TwoTone',
);
export const Crop75Icon = (props?: KTRawAttr) => {
  const s = _Crop75Icon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop75Icon = svg(
  svg('path', { d: 'M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 12H5V7h14z' }),
  'Crop75',
);
export const Crop75OutlinedIcon = (props?: KTRawAttr) => {
  const s = _Crop75OutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop75OutlinedIcon = svg(
  svg('path', { d: 'M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 12H5V7h14z' }),
  'Crop75Outlined',
);
export const Crop75RoundedIcon = (props?: KTRawAttr) => {
  const s = _Crop75RoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop75RoundedIcon = svg(
  svg('path', { d: 'M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 12H5V7h14z' }),
  'Crop75Rounded',
);
export const Crop75SharpIcon = (props?: KTRawAttr) => {
  const s = _Crop75SharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop75SharpIcon = svg(svg('path', { d: 'M21 5H3v14h18zm-2 12H5V7h14z' }), 'Crop75Sharp');
export const Crop75TwoToneIcon = (props?: KTRawAttr) => {
  const s = _Crop75TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Crop75TwoToneIcon = svg(
  svg('path', { d: 'M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 12H5V7h14z' }),
  'Crop75TwoTone',
);
export const CropDinIcon = (props?: KTRawAttr) => {
  const s = _CropDinIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropDinIcon = svg(
  svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }),
  'CropDin',
);
export const CropDinOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CropDinOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropDinOutlinedIcon = svg(
  svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }),
  'CropDinOutlined',
);
export const CropDinRoundedIcon = (props?: KTRawAttr) => {
  const s = _CropDinRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropDinRoundedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1',
  }),
  'CropDinRounded',
);
export const CropDinSharpIcon = (props?: KTRawAttr) => {
  const s = _CropDinSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropDinSharpIcon = svg(svg('path', { d: 'M21 3H3v18h18zm-2 16H5V5h14z' }), 'CropDinSharp');
export const CropDinTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CropDinTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropDinTwoToneIcon = svg(
  svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }),
  'CropDinTwoTone',
);
export const CropFreeIcon = (props?: KTRawAttr) => {
  const s = _CropFreeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropFreeIcon = svg(
  svg('path', {
    d: 'M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2m2 10H3v4c0 1.1.9 2 2 2h4v-2H5zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2',
  }),
  'CropFree',
);
export const CropFreeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CropFreeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropFreeOutlinedIcon = svg(
  svg('path', {
    d: 'M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2m2 10H3v4c0 1.1.9 2 2 2h4v-2H5zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2',
  }),
  'CropFreeOutlined',
);
export const CropFreeRoundedIcon = (props?: KTRawAttr) => {
  const s = _CropFreeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropFreeRoundedIcon = svg(
  svg('path', {
    d: 'M3 5v3c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h2c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2m1 10c-.55 0-1 .45-1 1v3c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1m15 3c0 .55-.45 1-1 1h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1s-1 .45-1 1zm0-15h-3c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1 .45 1 1v2c0 .55.45 1 1 1s1-.45 1-1V5c0-1.1-.9-2-2-2',
  }),
  'CropFreeRounded',
);
export const CropFreeSharpIcon = (props?: KTRawAttr) => {
  const s = _CropFreeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropFreeSharpIcon = svg(
  svg('path', { d: 'M3 3v6h2V5h4V3zm2 12H3v6h6v-2H5zm14 4h-4v2h6v-6h-2zm2-16h-6v2h4v4h2z' }),
  'CropFreeSharp',
);
export const CropFreeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CropFreeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropFreeTwoToneIcon = svg(
  svg('path', {
    d: 'M3 19c0 1.1.9 2 2 2h4v-2H5v-4H3zM21 5c0-1.1-.9-2-2-2h-4v2h4v4h2zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2zm16 14v-4h-2v4h-4v2h4c1.1 0 2-.9 2-2',
  }),
  'CropFreeTwoTone',
);
export const CropLandscapeIcon = (props?: KTRawAttr) => {
  const s = _CropLandscapeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropLandscapeIcon = svg(
  svg('path', { d: 'M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 12H5V7h14z' }),
  'CropLandscape',
);
export const CropLandscapeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CropLandscapeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropLandscapeOutlinedIcon = svg(
  svg('path', { d: 'M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 12H5V7h14z' }),
  'CropLandscapeOutlined',
);
export const CropLandscapeRoundedIcon = (props?: KTRawAttr) => {
  const s = _CropLandscapeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropLandscapeRoundedIcon = svg(
  svg('path', {
    d: 'M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-1 12H6c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1',
  }),
  'CropLandscapeRounded',
);
export const CropLandscapeSharpIcon = (props?: KTRawAttr) => {
  const s = _CropLandscapeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropLandscapeSharpIcon = svg(svg('path', { d: 'M21 5H3v14h18zm-2 12H5V7h14z' }), 'CropLandscapeSharp');
export const CropLandscapeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CropLandscapeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropLandscapeTwoToneIcon = svg(
  svg('path', { d: 'M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 12H5V7h14z' }),
  'CropLandscapeTwoTone',
);
export const CropOriginalIcon = (props?: KTRawAttr) => {
  const s = _CropOriginalIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropOriginalIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-5.04-6.71-2.75 3.54-1.96-2.36L6.5 17h11z',
  }),
  'CropOriginal',
);
export const CropOriginalOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CropOriginalOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropOriginalOutlinedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-5.04-6.71-2.75 3.54-1.96-2.36L6.5 17h11z',
  }),
  'CropOriginalOutlined',
);
export const CropOriginalRoundedIcon = (props?: KTRawAttr) => {
  const s = _CropOriginalRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropOriginalRoundedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1m-4.44-6.19-2.35 3.02-1.56-1.88c-.2-.25-.58-.24-.78.01l-1.74 2.23c-.26.33-.02.81.39.81h8.98c.41 0 .65-.47.4-.8l-2.55-3.39c-.19-.26-.59-.26-.79 0',
  }),
  'CropOriginalRounded',
);
export const CropOriginalSharpIcon = (props?: KTRawAttr) => {
  const s = _CropOriginalSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropOriginalSharpIcon = svg(
  svg('path', { d: 'M21 3H3v18h18zm-2 16H5V5h14zm-5.04-6.71-2.75 3.54-1.96-2.36L6.5 17h11z' }),
  'CropOriginalSharp',
);
export const CropOriginalTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CropOriginalTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropOriginalTwoToneIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-5.04-6.71-2.75 3.54-1.96-2.36L6.5 17h11z',
  }),
  'CropOriginalTwoTone',
);
export const CropOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CropOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropOutlinedIcon = svg(
  svg('path', { d: 'M17 15h2V7c0-1.1-.9-2-2-2H9v2h8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2z' }),
  'CropOutlined',
);
export const CropPortraitIcon = (props?: KTRawAttr) => {
  const s = _CropPortraitIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropPortraitIcon = svg(
  svg('path', { d: 'M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H7V5h10z' }),
  'CropPortrait',
);
export const CropPortraitOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CropPortraitOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropPortraitOutlinedIcon = svg(
  svg('path', { d: 'M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H7V5h10z' }),
  'CropPortraitOutlined',
);
export const CropPortraitRoundedIcon = (props?: KTRawAttr) => {
  const s = _CropPortraitRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropPortraitRoundedIcon = svg(
  svg('path', {
    d: 'M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16H8c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1',
  }),
  'CropPortraitRounded',
);
export const CropPortraitSharpIcon = (props?: KTRawAttr) => {
  const s = _CropPortraitSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropPortraitSharpIcon = svg(svg('path', { d: 'M19 3H5v18h14zm-2 16H7V5h10z' }), 'CropPortraitSharp');
export const CropPortraitTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CropPortraitTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropPortraitTwoToneIcon = svg(
  svg('path', { d: 'M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H7V5h10z' }),
  'CropPortraitTwoTone',
);
export const CropRotateIcon = (props?: KTRawAttr) => {
  const s = _CropRotateIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropRotateIcon = svg(
  svg('path', {
    d: 'M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11M16 14h2V8c0-1.11-.9-2-2-2h-6v2h6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2z',
  }),
  'CropRotate',
);
export const CropRotateOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CropRotateOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropRotateOutlinedIcon = svg(
  svg('path', {
    d: 'M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11M16 14h2V8c0-1.11-.9-2-2-2h-6v2h6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2z',
  }),
  'CropRotateOutlined',
);
export const CropRotateRoundedIcon = (props?: KTRawAttr) => {
  const s = _CropRotateRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropRotateRoundedIcon = svg(
  svg('path', {
    d: 'M16 9v5h2V8c0-1.1-.9-2-2-2h-6v2h5c.55 0 1 .45 1 1m3 7H9c-.55 0-1-.45-1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-.55 0-1 .45-1 1s.45 1 1 1h1v8c0 1.1.9 2 2 2h8v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1M17.66 1.4C15.99.51 13.83-.11 11.39.04l3.81 3.81 1.33-1.33c3.09 1.46 5.34 4.37 5.89 7.86.06.41.44.69.86.62.41-.06.69-.45.62-.86-.6-3.8-2.96-7-6.24-8.74M7.47 21.49c-3.09-1.46-5.34-4.37-5.89-7.86-.06-.41-.44-.69-.86-.62-.41.06-.69.45-.62.86.6 3.81 2.96 7.01 6.24 8.75 1.67.89 3.83 1.51 6.27 1.36L8.8 20.16z',
  }),
  'CropRotateRounded',
);
export const CropRotateSharpIcon = (props?: KTRawAttr) => {
  const s = _CropRotateSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropRotateSharpIcon = svg(
  svg('path', {
    d: 'M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11M16 14h2V6h-8v2h6zm-8 2V4H6v2H4v2h2v10h10v2h2v-2h2v-2z',
  }),
  'CropRotateSharp',
);
export const CropRotateTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CropRotateTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropRotateTwoToneIcon = svg(
  svg('path', {
    d: 'M11.95 24c.23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11m.1-24c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11M16 6h-6v2h6v6h2V8c0-1.11-.9-2-2-2m2 12h2v-2H8V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2z',
  }),
  'CropRotateTwoTone',
);
export const CropRoundedIcon = (props?: KTRawAttr) => {
  const s = _CropRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropRoundedIcon = svg(
  svg('path', {
    d: 'M17 15h2V7c0-1.1-.9-2-2-2H9v2h7c.55 0 1 .45 1 1zm-9 2c-.55 0-1-.45-1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v3H2c-.55 0-1 .45-1 1s.45 1 1 1h3v10c0 1.1.9 2 2 2h10v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1z',
  }),
  'CropRounded',
);
export const CropSharpIcon = (props?: KTRawAttr) => {
  const s = _CropSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropSharpIcon = svg(
  svg('path', { d: 'M17 15h2V5H9v2h8zM7 17V1H5v4H1v2h4v12h12v4h2v-4h4v-2z' }),
  'CropSharp',
);
export const CropSquareIcon = (props?: KTRawAttr) => {
  const s = _CropSquareIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropSquareIcon = svg(
  svg('path', { d: 'M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H6V6h12z' }),
  'CropSquare',
);
export const CropSquareOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CropSquareOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropSquareOutlinedIcon = svg(
  svg('path', { d: 'M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H6V6h12z' }),
  'CropSquareOutlined',
);
export const CropSquareRoundedIcon = (props?: KTRawAttr) => {
  const s = _CropSquareRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropSquareRoundedIcon = svg(
  svg('path', {
    d: 'M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-1 14H7c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1',
  }),
  'CropSquareRounded',
);
export const CropSquareSharpIcon = (props?: KTRawAttr) => {
  const s = _CropSquareSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropSquareSharpIcon = svg(svg('path', { d: 'M20 4H4v16h16zm-2 14H6V6h12z' }), 'CropSquareSharp');
export const CropSquareTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CropSquareTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropSquareTwoToneIcon = svg(
  svg('path', { d: 'M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H6V6h12z' }),
  'CropSquareTwoTone',
);
export const CropTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CropTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CropTwoToneIcon = svg(
  svg('path', { d: 'M5 17c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7V1H5v4H1v2h4zm14-2V7c0-1.1-.9-2-2-2H9v2h8v8z' }),
  'CropTwoTone',
);
export const CrueltyFreeIcon = (props?: KTRawAttr) => {
  const s = _CrueltyFreeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CrueltyFreeIcon = svg(
  svg('path', {
    d: 'M16.84 14.52c-.26-.19-.62-.63-.79-.84C17.24 12.01 19 8.87 19 5c0-1.95-.74-3-2-3-1.54 0-3.96 2.06-5 5.97C10.96 4.06 8.54 2 7 2 5.74 2 5 3.05 5 5c0 3.87 1.76 7.01 2.95 8.68-.17.21-.53.65-.79.84-.5.41-1.66 1.37-1.66 2.98 0 2.21 1.79 4 4 4 1.55 0 2.5-.56 2.5-.56s.95.56 2.5.56c2.21 0 4-1.79 4-4 0-1.61-1.16-2.57-1.66-2.98M9.35 12.2C8.34 10.7 7 8.12 7 5c0-.49.06-.8.12-.97.94.31 3.24 2.71 3.38 7.64-.47.12-.84.3-1.15.53m1.15 4.55c-.28 0-.5-.34-.5-.75s.22-.75.5-.75.5.34.5.75-.22.75-.5.75M12 19.5c-.55 0-1-.72-1-1s.45-.5 1-.5 1 .22 1 .5-.45 1-1 1m1.5-2.75c-.28 0-.5-.34-.5-.75s.22-.75.5-.75.5.34.5.75-.22.75-.5.75m0-5.08c.14-4.93 2.44-7.33 3.38-7.64.06.17.12.48.12.97 0 3.12-1.34 5.7-2.35 7.2-.31-.23-.68-.41-1.15-.53',
  }),
  'CrueltyFree',
);
export const CrueltyFreeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CrueltyFreeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CrueltyFreeOutlinedIcon = svg(
  svg('path', {
    d: 'M17 14c-.24-.24-.44-.49-.65-.75C17.51 11.5 19 8.56 19 5c0-1.95-.74-3-2-3-1.54 0-3.96 2.06-5 5.97C10.96 4.06 8.54 2 7 2 5.74 2 5 3.05 5 5c0 3.56 1.49 6.5 2.65 8.25-.21.26-.41.51-.65.75-.25.25-2 1.39-2 3.5C5 19.98 7.02 22 9.5 22c1.5 0 2.5-.5 2.5-.5s1 .5 2.5.5c2.48 0 4.5-2.02 4.5-4.5 0-2.11-1.75-3.25-2-3.5m-.12-9.97c.06.17.12.48.12.97 0 2.84-1.11 5.24-2.07 6.78-.38-.26-.83-.48-1.4-.62.24-4.52 2.44-6.83 3.35-7.13M7 5c0-.49.06-.8.12-.97.91.3 3.11 2.61 3.36 7.13-.58.14-1.03.35-1.4.62C8.11 10.24 7 7.84 7 5m7.5 15c-1 0-1.8-.33-2.22-.56.42-.18.72-.71.72-.94 0-.28-.45-.5-1-.5s-1 .22-1 .5c0 .23.3.76.72.94-.42.23-1.22.56-2.22.56C8.12 20 7 18.88 7 17.5c0-.7.43-1.24 1-1.73.44-.36.61-.52 1.3-1.37.76-.95 1.09-1.4 2.7-1.4s1.94.45 2.7 1.4c.69.85.86 1.01 1.3 1.37.57.49 1 1.03 1 1.73 0 1.38-1.12 2.5-2.5 2.5m-.5-4c0 .41-.22.75-.5.75s-.5-.34-.5-.75.22-.75.5-.75.5.34.5.75m-3 0c0 .41-.22.75-.5.75s-.5-.34-.5-.75.22-.75.5-.75.5.34.5.75',
  }),
  'CrueltyFreeOutlined',
);
export const CrueltyFreeRoundedIcon = (props?: KTRawAttr) => {
  const s = _CrueltyFreeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CrueltyFreeRoundedIcon = svg(
  svg('path', {
    d: 'M16.84 14.52c-.26-.19-.62-.63-.79-.84C17.24 12.01 19 8.87 19 5c0-1.95-.74-3-2-3-1.54 0-3.96 2.06-5 5.97C10.96 4.06 8.54 2 7 2 5.74 2 5 3.05 5 5c0 3.87 1.76 7.01 2.95 8.68-.17.21-.53.65-.79.84-.5.41-1.66 1.37-1.66 2.98 0 2.21 1.79 4 4 4 1.55 0 2.5-.56 2.5-.56s.95.56 2.5.56c2.21 0 4-1.79 4-4 0-1.61-1.16-2.57-1.66-2.98M9.35 12.2C8.34 10.7 7 8.12 7 5c0-.49.06-.8.12-.97.94.31 3.24 2.71 3.38 7.64-.47.12-.84.3-1.15.53m1.15 4.55c-.28 0-.5-.34-.5-.75s.22-.75.5-.75.5.34.5.75-.22.75-.5.75M12 19.5c-.55 0-1-.72-1-1s.45-.5 1-.5 1 .22 1 .5-.45 1-1 1m1.5-2.75c-.28 0-.5-.34-.5-.75s.22-.75.5-.75.5.34.5.75-.22.75-.5.75m0-5.08c.14-4.93 2.44-7.33 3.38-7.64.06.17.12.48.12.97 0 3.12-1.34 5.7-2.35 7.2-.31-.23-.68-.41-1.15-.53',
  }),
  'CrueltyFreeRounded',
);
export const CrueltyFreeSharpIcon = (props?: KTRawAttr) => {
  const s = _CrueltyFreeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CrueltyFreeSharpIcon = svg(
  svg('path', {
    d: 'M16.84 14.52c-.26-.19-.62-.63-.79-.84C17.24 12.01 19 8.87 19 5c0-1.95-.74-3-2-3-1.54 0-3.96 2.06-5 5.97C10.96 4.06 8.54 2 7 2 5.74 2 5 3.05 5 5c0 3.87 1.76 7.01 2.95 8.68-.17.21-.53.65-.79.84-.5.41-1.66 1.37-1.66 2.98 0 2.21 1.79 4 4 4 1.55 0 2.5-.56 2.5-.56s.95.56 2.5.56c2.21 0 4-1.79 4-4 0-1.61-1.16-2.57-1.66-2.98M9.35 12.2C8.34 10.7 7 8.12 7 5c0-.49.06-.8.12-.97.94.31 3.24 2.71 3.38 7.64-.47.12-.84.3-1.15.53m1.15 4.55c-.28 0-.5-.34-.5-.75s.22-.75.5-.75.5.34.5.75-.22.75-.5.75M12 19.5c-.55 0-1-.72-1-1s.45-.5 1-.5 1 .22 1 .5-.45 1-1 1m1.5-2.75c-.28 0-.5-.34-.5-.75s.22-.75.5-.75.5.34.5.75-.22.75-.5.75m0-5.08c.14-4.93 2.44-7.33 3.38-7.64.06.17.12.48.12.97 0 3.12-1.34 5.7-2.35 7.2-.31-.23-.68-.41-1.15-.53',
  }),
  'CrueltyFreeSharp',
);
export const CrueltyFreeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CrueltyFreeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CrueltyFreeTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M16.88 4.03c.06.17.12.48.12.97 0 2.84-1.11 5.24-2.07 6.78-.38-.26-.83-.48-1.4-.62.24-4.52 2.44-6.83 3.35-7.13M7 5c0-.49.06-.8.12-.97.91.3 3.11 2.61 3.36 7.13-.58.14-1.03.35-1.4.62C8.11 10.24 7 7.84 7 5m9 10.77c-.44-.36-.61-.52-1.3-1.37-.76-.95-1.09-1.4-2.7-1.4s-1.94.45-2.7 1.4c-.69.85-.86 1.01-1.3 1.37-.57.49-1 1.03-1 1.73C7 18.88 8.12 20 9.5 20c1 0 1.8-.33 2.22-.56-.42-.18-.72-.71-.72-.94 0-.28.45-.5 1-.5s1 .22 1 .5c0 .23-.3.76-.72.94.42.23 1.22.56 2.22.56 1.38 0 2.5-1.12 2.5-2.5 0-.7-.43-1.24-1-1.73m-5.5.98c-.28 0-.5-.34-.5-.75s.22-.75.5-.75.5.34.5.75-.22.75-.5.75m3 0c-.28 0-.5-.34-.5-.75s.22-.75.5-.75.5.34.5.75-.22.75-.5.75',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M17 14c-.24-.24-.44-.49-.65-.75C17.51 11.5 19 8.56 19 5c0-1.95-.74-3-2-3-1.54 0-3.96 2.06-5 5.97C10.96 4.06 8.54 2 7 2 5.74 2 5 3.05 5 5c0 3.56 1.49 6.5 2.65 8.25-.21.26-.41.51-.65.75-.25.25-2 1.39-2 3.5C5 19.98 7.02 22 9.5 22c1.5 0 2.5-.5 2.5-.5s1 .5 2.5.5c2.48 0 4.5-2.02 4.5-4.5 0-2.11-1.75-3.25-2-3.5m-.12-9.97c.06.17.12.48.12.97 0 2.84-1.11 5.24-2.07 6.78-.38-.26-.83-.48-1.4-.62.24-4.52 2.44-6.83 3.35-7.13M7 5c0-.49.06-.8.12-.97.91.3 3.11 2.61 3.36 7.13-.58.14-1.03.35-1.4.62C8.11 10.24 7 7.84 7 5m7.5 15c-1 0-1.8-.33-2.22-.56.42-.18.72-.71.72-.94 0-.28-.45-.5-1-.5s-1 .22-1 .5c0 .23.3.76.72.94-.42.23-1.22.56-2.22.56C8.12 20 7 18.88 7 17.5c0-.7.43-1.24 1-1.73.44-.36.61-.52 1.3-1.37.76-.95 1.09-1.4 2.7-1.4s1.94.45 2.7 1.4c.69.85.86 1.01 1.3 1.37.57.49 1 1.03 1 1.73 0 1.38-1.12 2.5-2.5 2.5m-.5-4c0 .41-.22.75-.5.75s-.5-.34-.5-.75.22-.75.5-.75.5.34.5.75m-3 0c0 .41-.22.75-.5.75s-.5-.34-.5-.75.22-.75.5-.75.5.34.5.75',
      },
      '1',
    ),
  ],
  'CrueltyFreeTwoTone',
);
export const CssIcon = (props?: KTRawAttr) => {
  const s = _CssIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CssIcon = svg(
  svg('path', {
    d: 'M9.5 14v-1H11v.5h2v-1h-2.5c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H13v-.5h-2v1h2.5c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1m7.5 1h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1h-2.5v-1h2v.5H21v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h2.5v1h-2V13H16v1c0 .55.45 1 1 1m-9-5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1H6.5v.5h-2v-3h2v.5H8z',
  }),
  'Css',
);
export const CssOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CssOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CssOutlinedIcon = svg(
  svg('path', {
    d: 'M9.5 14v-1H11v.5h2v-1h-2.5c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H13v-.5h-2v1h2.5c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1m7.5 1h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1h-2.5v-1h2v.5H21v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h2.5v1h-2V13H16v1c0 .55.45 1 1 1m-9-5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1H6.5v.5h-2v-3h2v.5H8z',
  }),
  'CssOutlined',
);
export const CssRoundedIcon = (props?: KTRawAttr) => {
  const s = _CssRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CssRoundedIcon = svg(
  svg('path', {
    d: 'M8 10.25c0 .41-.34.75-.75.75-.33 0-.6-.21-.71-.5H4.5v3h2.04c.1-.29.38-.5.71-.5.41 0 .75.34.75.75V14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1zm5.04.25c.1.29.38.5.71.5.41 0 .75-.34.75-.75V10c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1H13v1h-2.04c-.1-.29-.38-.5-.71-.5-.41 0-.75.34-.75.75V14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H11v-1zm6.5 0c.1.29.38.5.71.5.41 0 .75-.34.75-.75V10c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h2.5v1h-2.04c-.1-.29-.38-.5-.71-.5-.41 0-.75.34-.75.75V14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1h-2.5v-1z',
  }),
  'CssRounded',
);
export const CssSharpIcon = (props?: KTRawAttr) => {
  const s = _CssSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CssSharpIcon = svg(
  svg('path', {
    d: 'M9.5 15v-2H11v.5h2v-1H9.5V9h5v2H13v-.5h-2v1h3.5V15zm6.5 0h5v-3.5h-3.5v-1h2v.5H21V9h-5v3.5h3.5v1h-2V13H16zm-8-4V9H3v6h5v-2H6.5v.5h-2v-3h2v.5z',
  }),
  'CssSharp',
);
export const CssTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CssTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CssTwoToneIcon = svg(
  svg('path', {
    d: 'M9.5 14v-1H11v.5h2v-1h-2.5c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H13v-.5h-2v1h2.5c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1m7.5 1h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1h-2.5v-1h2v.5H21v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h2.5v1h-2V13H16v1c0 .55.45 1 1 1m-9-5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1H6.5v.5h-2v-3h2v.5H8z',
  }),
  'CssTwoTone',
);
export const CurrencyBitcoinIcon = (props?: KTRawAttr) => {
  const s = _CurrencyBitcoinIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyBitcoinIcon = svg(
  svg('path', {
    d: 'M17.06 11.57c.59-.69.94-1.59.94-2.57 0-1.86-1.27-3.43-3-3.87V3h-2v2h-2V3H9v2H6v2h2v10H6v2h3v2h2v-2h2v2h2v-2c2.21 0 4-1.79 4-4 0-1.45-.78-2.73-1.94-3.43M10 7h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4zm5 10h-5v-4h5c1.1 0 2 .9 2 2s-.9 2-2 2',
  }),
  'CurrencyBitcoin',
);
export const CurrencyBitcoinOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CurrencyBitcoinOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyBitcoinOutlinedIcon = svg(
  svg('path', {
    d: 'M17.06 11.57c.59-.69.94-1.59.94-2.57 0-1.86-1.27-3.43-3-3.87V3h-2v2h-2V3H9v2H6v2h2v10H6v2h3v2h2v-2h2v2h2v-2c2.21 0 4-1.79 4-4 0-1.45-.78-2.73-1.94-3.43M10 7h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4zm5 10h-5v-4h5c1.1 0 2 .9 2 2s-.9 2-2 2',
  }),
  'CurrencyBitcoinOutlined',
);
export const CurrencyBitcoinRoundedIcon = (props?: KTRawAttr) => {
  const s = _CurrencyBitcoinRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyBitcoinRoundedIcon = svg(
  svg('path', {
    d: 'M10 7h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4zm5 10h-5v-4h5c1.1 0 2 .9 2 2s-.9 2-2 2m0-13c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v10H7c-.55 0-1 .45-1 1s.45 1 1 1h2v1c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1v-1c2.21 0 4-1.79 4-4 0-1.45-.78-2.73-1.94-3.43.59-.69.94-1.59.94-2.57 0-1.86-1.27-3.43-3-3.87z',
  }),
  'CurrencyBitcoinRounded',
);
export const CurrencyBitcoinSharpIcon = (props?: KTRawAttr) => {
  const s = _CurrencyBitcoinSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyBitcoinSharpIcon = svg(
  svg('path', {
    d: 'M17.06 11.57c.59-.69.94-1.59.94-2.57 0-1.86-1.27-3.43-3-3.87V3h-2v2h-2V3H9v2H6v2h2v10H6v2h3v2h2v-2h2v2h2v-2c2.21 0 4-1.79 4-4 0-1.45-.78-2.73-1.94-3.43M10 7h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4zm5 10h-5v-4h5c1.1 0 2 .9 2 2s-.9 2-2 2',
  }),
  'CurrencyBitcoinSharp',
);
export const CurrencyBitcoinTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CurrencyBitcoinTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyBitcoinTwoToneIcon = svg(
  svg('path', {
    d: 'M17.06 11.57c.59-.69.94-1.59.94-2.57 0-1.86-1.27-3.43-3-3.87V3h-2v2h-2V3H9v2H6v2h2v10H6v2h3v2h2v-2h2v2h2v-2c2.21 0 4-1.79 4-4 0-1.45-.78-2.73-1.94-3.43M10 7h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4zm5 10h-5v-4h5c1.1 0 2 .9 2 2s-.9 2-2 2',
  }),
  'CurrencyBitcoinTwoTone',
);
export const CurrencyExchangeIcon = (props?: KTRawAttr) => {
  const s = _CurrencyExchangeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyExchangeIcon = svg(
  svg('path', {
    d: 'M12.89 11.1c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.45-.82-1.92-2.54-2.24V5h-2v1.26c-2.48.56-2.49 2.86-2.49 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 2.9 2.96V19h2v-1.24c.4-.09 2.9-.59 2.9-3.22 0-1.39-.61-2.61-3.01-3.44M3 21H1v-6h6v2H4.52c1.61 2.41 4.36 4 7.48 4 4.97 0 9-4.03 9-9h2c0 6.08-4.92 11-11 11-3.72 0-7.01-1.85-9-4.67zm-2-9C1 5.92 5.92 1 12 1c3.72 0 7.01 1.85 9 4.67V3h2v6h-6V7h2.48C17.87 4.59 15.12 3 12 3c-4.97 0-9 4.03-9 9z',
  }),
  'CurrencyExchange',
);
export const CurrencyExchangeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CurrencyExchangeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyExchangeOutlinedIcon = svg(
  svg('path', {
    d: 'M12.89 11.1c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.45-.82-1.92-2.54-2.24V5h-2v1.26c-2.48.56-2.49 2.86-2.49 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 2.9 2.96V19h2v-1.24c.4-.09 2.9-.59 2.9-3.22 0-1.39-.61-2.61-3.01-3.44M3 21H1v-6h6v2H4.52c1.61 2.41 4.36 4 7.48 4 4.97 0 9-4.03 9-9h2c0 6.08-4.92 11-11 11-3.72 0-7.01-1.85-9-4.67zm-2-9C1 5.92 5.92 1 12 1c3.72 0 7.01 1.85 9 4.67V3h2v6h-6V7h2.48C17.87 4.59 15.12 3 12 3c-4.97 0-9 4.03-9 9z',
  }),
  'CurrencyExchangeOutlined',
);
export const CurrencyExchangeRoundedIcon = (props?: KTRawAttr) => {
  const s = _CurrencyExchangeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyExchangeRoundedIcon = svg(
  svg('path', {
    d: 'M12 23c5.7 0 10.39-4.34 10.95-9.9.06-.59-.41-1.1-1-1.1-.51 0-.94.38-.99.88C20.52 17.44 16.67 21 12 21c-3.12 0-5.87-1.59-7.48-4H6c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-1.67C4.99 21.15 8.28 23 12 23m0-22C6.3 1 1.61 5.34 1.05 10.9c-.05.59.41 1.1 1 1.1.51 0 .94-.38.99-.88C3.48 6.56 7.33 3 12 3c3.12 0 5.87 1.59 7.48 4H18c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v1.67C19.01 2.85 15.72 1 12 1m-.88 4.88c0-.49.4-.88.88-.88s.88.39.88.88v.37c1.07.19 1.75.76 2.16 1.3.34.44.16 1.08-.36 1.3-.36.15-.78.03-1.02-.28-.28-.38-.78-.77-1.6-.77-.7 0-1.81.37-1.81 1.39 0 .95.86 1.31 2.64 1.9 2.4.83 3.01 2.05 3.01 3.45 0 2.62-2.5 3.13-3.02 3.22v.37c0 .48-.39.88-.88.88s-.88-.39-.88-.88v-.42c-.63-.15-1.93-.61-2.69-2.1-.23-.44.03-1.02.49-1.2.41-.16.9-.01 1.11.38.32.61.95 1.37 2.12 1.37.93 0 1.98-.48 1.98-1.61 0-.96-.7-1.46-2.28-2.03-1.1-.39-3.35-1.03-3.35-3.31 0-.1.01-2.4 2.62-2.96z',
  }),
  'CurrencyExchangeRounded',
);
export const CurrencyExchangeSharpIcon = (props?: KTRawAttr) => {
  const s = _CurrencyExchangeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyExchangeSharpIcon = svg(
  svg('path', {
    d: 'M12.89 11.1c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.45-.82-1.92-2.54-2.24V5h-2v1.26c-2.48.56-2.49 2.86-2.49 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 2.9 2.96V19h2v-1.24c.4-.09 2.9-.59 2.9-3.22 0-1.39-.61-2.61-3.01-3.44M3 21H1v-6h6v2H4.52c1.61 2.41 4.36 4 7.48 4 4.97 0 9-4.03 9-9h2c0 6.08-4.92 11-11 11-3.72 0-7.01-1.85-9-4.67zm-2-9C1 5.92 5.92 1 12 1c3.72 0 7.01 1.85 9 4.67V3h2v6h-6V7h2.48C17.87 4.59 15.12 3 12 3c-4.97 0-9 4.03-9 9z',
  }),
  'CurrencyExchangeSharp',
);
export const CurrencyExchangeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CurrencyExchangeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyExchangeTwoToneIcon = svg(
  svg('path', {
    d: 'M12.89 11.1c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.45-.82-1.92-2.54-2.24V5h-2v1.26c-2.48.56-2.49 2.86-2.49 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 2.9 2.96V19h2v-1.24c.4-.09 2.9-.59 2.9-3.22 0-1.39-.61-2.61-3.01-3.44M3 21H1v-6h6v2H4.52c1.61 2.41 4.36 4 7.48 4 4.97 0 9-4.03 9-9h2c0 6.08-4.92 11-11 11-3.72 0-7.01-1.85-9-4.67zm-2-9C1 5.92 5.92 1 12 1c3.72 0 7.01 1.85 9 4.67V3h2v6h-6V7h2.48C17.87 4.59 15.12 3 12 3c-4.97 0-9 4.03-9 9z',
  }),
  'CurrencyExchangeTwoTone',
);
export const CurrencyFrancIcon = (props?: KTRawAttr) => {
  const s = _CurrencyFrancIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyFrancIcon = svg(
  svg('path', { d: 'M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z' }),
  'CurrencyFranc',
);
export const CurrencyFrancOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CurrencyFrancOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyFrancOutlinedIcon = svg(
  svg('path', { d: 'M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z' }),
  'CurrencyFrancOutlined',
);
export const CurrencyFrancRoundedIcon = (props?: KTRawAttr) => {
  const s = _CurrencyFrancRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyFrancRoundedIcon = svg(
  svg('path', {
    d: 'M18 4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v12H6c-.55 0-1 .45-1 1s.45 1 1 1h1v2c0 .55.45 1 1 1s1-.45 1-1v-2h3c.55 0 1-.45 1-1s-.45-1-1-1H9v-3h7c.55 0 1-.45 1-1s-.45-1-1-1H9V5h8c.55 0 1-.45 1-1',
  }),
  'CurrencyFrancRounded',
);
export const CurrencyFrancSharpIcon = (props?: KTRawAttr) => {
  const s = _CurrencyFrancSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyFrancSharpIcon = svg(
  svg('path', { d: 'M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z' }),
  'CurrencyFrancSharp',
);
export const CurrencyFrancTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CurrencyFrancTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyFrancTwoToneIcon = svg(
  svg('path', { d: 'M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z' }),
  'CurrencyFrancTwoTone',
);
export const CurrencyLiraIcon = (props?: KTRawAttr) => {
  const s = _CurrencyLiraIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyLiraIcon = svg(
  svg('path', {
    d: 'M9 8.76V3h2v4.51L15 5v2.36l-4 2.51.01 2.35L15 9.72v2.36l-4 2.51V19c2.76 0 5-2.24 5-5h2c0 3.87-3.13 7-7 7H9v-5.16l-3 1.88v-2.36l3-1.88v-2.36L6 13v-2.36z',
  }),
  'CurrencyLira',
);
export const CurrencyLiraOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CurrencyLiraOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyLiraOutlinedIcon = svg(
  svg('path', {
    d: 'M9 8.76V3h2v4.51L15 5v2.36l-4 2.51.01 2.35L15 9.72v2.36l-4 2.51V19c2.76 0 5-2.24 5-5h2c0 3.87-3.13 7-7 7H9v-5.16l-3 1.88v-2.36l3-1.88v-2.36L6 13v-2.36z',
  }),
  'CurrencyLiraOutlined',
);
export const CurrencyLiraRoundedIcon = (props?: KTRawAttr) => {
  const s = _CurrencyLiraRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyLiraRoundedIcon = svg(
  svg('path', {
    d: 'm9 15.84-1.47.92c-.67.42-1.53-.06-1.53-.85 0-.34.18-.66.47-.85L9 13.48v-2.36l-1.47.92c-.67.42-1.53-.06-1.53-.85 0-.34.18-.66.47-.85L9 8.76V4c0-.55.45-1 1-1s1 .45 1 1v3.51l2.47-1.55c.67-.42 1.53.06 1.53.85 0 .34-.18.66-.47.85L11 9.87l.01 2.35 2.46-1.54c.67-.42 1.53.06 1.53.85 0 .34-.18.66-.47.85L11 14.59V19c2.47 0 4.52-1.79 4.93-4.15.08-.49.49-.85.98-.85.61 0 1.09.54 1 1.14C17.37 18.46 14.48 21 11 21h-1c-.55 0-1-.45-1-1z',
  }),
  'CurrencyLiraRounded',
);
export const CurrencyLiraSharpIcon = (props?: KTRawAttr) => {
  const s = _CurrencyLiraSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyLiraSharpIcon = svg(
  svg('path', {
    d: 'M9 8.76V3h2v4.51L15 5v2.36l-4 2.51.01 2.35L15 9.72v2.36l-4 2.51V19c2.76 0 5-2.24 5-5h2c0 3.87-3.13 7-7 7H9v-5.16l-3 1.88v-2.36l3-1.88v-2.36L6 13v-2.36z',
  }),
  'CurrencyLiraSharp',
);
export const CurrencyLiraTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CurrencyLiraTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyLiraTwoToneIcon = svg(
  svg('path', {
    d: 'M9 8.76V3h2v4.51L15 5v2.36l-4 2.51.01 2.35L15 9.72v2.36l-4 2.51V19c2.76 0 5-2.24 5-5h2c0 3.87-3.13 7-7 7H9v-5.16l-3 1.88v-2.36l3-1.88v-2.36L6 13v-2.36z',
  }),
  'CurrencyLiraTwoTone',
);
export const CurrencyPoundIcon = (props?: KTRawAttr) => {
  const s = _CurrencyPoundIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyPoundIcon = svg(
  svg('path', {
    d: 'M14 21c1.93 0 3.62-1.17 4-3l-1.75-.88C16 18.21 15.33 19 14 19H9.1c.83-1 1.5-2.34 1.5-4 0-.35-.03-.69-.08-1H14v-2H9.82C9 10.42 8 9.6 8 8c0-1.93 1.57-3.5 3.5-3.5 1.5 0 2.79.95 3.28 2.28L16.63 6c-.8-2.05-2.79-3.5-5.13-3.5C8.46 2.5 6 4.96 6 8c0 1.78.79 2.9 1.49 4H6v2h2.47c.08.31.13.64.13 1 0 2.7-2.6 4-2.6 4v2z',
  }),
  'CurrencyPound',
);
export const CurrencyPoundOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CurrencyPoundOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyPoundOutlinedIcon = svg(
  svg('path', {
    d: 'M14 21c1.93 0 3.62-1.17 4-3l-1.75-.88C16 18.21 15.33 19 14 19H9.1c.83-1 1.5-2.34 1.5-4 0-.35-.03-.69-.08-1H14v-2H9.82C9 10.42 8 9.6 8 8c0-1.93 1.57-3.5 3.5-3.5 1.5 0 2.79.95 3.28 2.28L16.63 6c-.8-2.05-2.79-3.5-5.13-3.5C8.46 2.5 6 4.96 6 8c0 1.78.79 2.9 1.49 4H6v2h2.47c.08.31.13.64.13 1 0 2.7-2.6 4-2.6 4v2z',
  }),
  'CurrencyPoundOutlined',
);
export const CurrencyPoundRoundedIcon = (props?: KTRawAttr) => {
  const s = _CurrencyPoundRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyPoundRoundedIcon = svg(
  svg('path', {
    d: 'M17.21 17.61c-.47-.24-1.03-.05-1.31.4-.36.6-.97.99-1.9.99H9.1c.83-1 1.5-2.34 1.5-4 0-.35-.03-.69-.08-1H13c.55 0 1-.45 1-1s-.45-1-1-1H9.82C9 10.42 8 9.6 8 8c0-1.93 1.57-3.5 3.5-3.5 1.2 0 2.26.61 2.89 1.53.27.4.77.59 1.22.4.6-.25.8-.99.43-1.53-.99-1.45-2.66-2.4-4.54-2.4C8.46 2.5 6 4.96 6 8c0 1.78.79 2.9 1.49 4H7c-.55 0-1 .45-1 1s.45 1 1 1h1.47c.08.31.13.64.13 1 0 1.9-1.29 3.11-2.06 3.66-.34.24-.54.63-.54 1.05 0 .71.58 1.29 1.29 1.29H14c1.55 0 2.95-.76 3.63-2 .28-.51.09-1.14-.42-1.39',
  }),
  'CurrencyPoundRounded',
);
export const CurrencyPoundSharpIcon = (props?: KTRawAttr) => {
  const s = _CurrencyPoundSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyPoundSharpIcon = svg(
  svg('path', {
    d: 'M14 21c1.93 0 3.62-1.17 4-3l-1.75-.88C16 18.21 15.33 19 14 19H9.1c.83-1 1.5-2.34 1.5-4 0-.35-.03-.69-.08-1H14v-2H9.82C9 10.42 8 9.6 8 8c0-1.93 1.57-3.5 3.5-3.5 1.5 0 2.79.95 3.28 2.28L16.63 6c-.8-2.05-2.79-3.5-5.13-3.5C8.46 2.5 6 4.96 6 8c0 1.78.79 2.9 1.49 4H6v2h2.47c.08.31.13.64.13 1 0 2.7-2.6 4-2.6 4v2z',
  }),
  'CurrencyPoundSharp',
);
export const CurrencyPoundTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CurrencyPoundTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyPoundTwoToneIcon = svg(
  svg('path', {
    d: 'M14 21c1.93 0 3.62-1.17 4-3l-1.75-.88C16 18.21 15.33 19 14 19H9.1c.83-1 1.5-2.34 1.5-4 0-.35-.03-.69-.08-1H14v-2H9.82C9 10.42 8 9.6 8 8c0-1.93 1.57-3.5 3.5-3.5 1.5 0 2.79.95 3.28 2.28L16.63 6c-.8-2.05-2.79-3.5-5.13-3.5C8.46 2.5 6 4.96 6 8c0 1.78.79 2.9 1.49 4H6v2h2.47c.08.31.13.64.13 1 0 2.7-2.6 4-2.6 4v2z',
  }),
  'CurrencyPoundTwoTone',
);
export const CurrencyRubleIcon = (props?: KTRawAttr) => {
  const s = _CurrencyRubleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyRubleIcon = svg(
  svg('path', {
    d: 'M13.5 3H7v9H5v2h2v2H5v2h2v3h2v-3h4v-2H9v-2h4.5c3.04 0 5.5-2.46 5.5-5.5S16.54 3 13.5 3m0 9H9V5h4.5C15.43 5 17 6.57 17 8.5S15.43 12 13.5 12',
  }),
  'CurrencyRuble',
);
export const CurrencyRubleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CurrencyRubleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyRubleOutlinedIcon = svg(
  svg('path', {
    d: 'M13.5 3H7v9H5v2h2v2H5v2h2v3h2v-3h4v-2H9v-2h4.5c3.04 0 5.5-2.46 5.5-5.5S16.54 3 13.5 3m0 9H9V5h4.5C15.43 5 17 6.57 17 8.5S15.43 12 13.5 12',
  }),
  'CurrencyRubleOutlined',
);
export const CurrencyRubleRoundedIcon = (props?: KTRawAttr) => {
  const s = _CurrencyRubleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyRubleRoundedIcon = svg(
  svg('path', {
    d: 'M8 21c.55 0 1-.45 1-1v-2h3c.55 0 1-.45 1-1s-.45-1-1-1H9v-2h4.5c3.22 0 5.79-2.76 5.47-6.04C18.7 5.1 16.14 3 13.26 3H8c-.55 0-1 .45-1 1v8H6c-.55 0-1 .45-1 1s.45 1 1 1h1v2H6c-.55 0-1 .45-1 1s.45 1 1 1h1v2c0 .55.45 1 1 1m5.5-9H9V5h4.5C15.43 5 17 6.57 17 8.5S15.43 12 13.5 12',
  }),
  'CurrencyRubleRounded',
);
export const CurrencyRubleSharpIcon = (props?: KTRawAttr) => {
  const s = _CurrencyRubleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyRubleSharpIcon = svg(
  svg('path', {
    d: 'M13.5 3H7v9H5v2h2v2H5v2h2v3h2v-3h4v-2H9v-2h4.5c3.04 0 5.5-2.46 5.5-5.5S16.54 3 13.5 3m0 9H9V5h4.5C15.43 5 17 6.57 17 8.5S15.43 12 13.5 12',
  }),
  'CurrencyRubleSharp',
);
export const CurrencyRubleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CurrencyRubleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyRubleTwoToneIcon = svg(
  svg('path', {
    d: 'M13.5 3H7v9H5v2h2v2H5v2h2v3h2v-3h4v-2H9v-2h4.5c3.04 0 5.5-2.46 5.5-5.5S16.54 3 13.5 3m0 9H9V5h4.5C15.43 5 17 6.57 17 8.5S15.43 12 13.5 12',
  }),
  'CurrencyRubleTwoTone',
);
export const CurrencyRupeeIcon = (props?: KTRawAttr) => {
  const s = _CurrencyRupeeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyRupeeIcon = svg(
  svg('path', {
    d: 'M13.66 7c-.56-1.18-1.76-2-3.16-2H6V3h12v2h-3.26c.48.58.84 1.26 1.05 2H18v2h-2.02c-.25 2.8-2.61 5-5.48 5h-.73l6.73 7h-2.77L7 14v-2h3.5c1.76 0 3.22-1.3 3.46-3H6V7z',
  }),
  'CurrencyRupee',
);
export const CurrencyRupeeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CurrencyRupeeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyRupeeOutlinedIcon = svg(
  svg('path', {
    d: 'M13.66 7c-.56-1.18-1.76-2-3.16-2H6V3h12v2h-3.26c.48.58.84 1.26 1.05 2H18v2h-2.02c-.25 2.8-2.61 5-5.48 5h-.73l6.73 7h-2.77L7 14v-2h3.5c1.76 0 3.22-1.3 3.46-3H6V7z',
  }),
  'CurrencyRupeeOutlined',
);
export const CurrencyRupeeRoundedIcon = (props?: KTRawAttr) => {
  const s = _CurrencyRupeeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyRupeeRoundedIcon = svg(
  svg('path', {
    d: 'M10.5 14h-.73l5.1 5.31c.61.64.16 1.69-.72 1.69-.27 0-.53-.11-.72-.31L7.4 14.41c-.26-.26-.4-.62-.4-.98 0-.79.64-1.43 1.43-1.43h2.07c1.76 0 3.22-1.3 3.46-3H7c-.55 0-1-.45-1-1s.45-1 1-1h6.66c-.56-1.18-1.76-2-3.16-2H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1h-2.26c.48.58.84 1.26 1.05 2H17c.55 0 1 .45 1 1s-.45 1-1 1h-1.02c-.26 2.8-2.62 5-5.48 5',
  }),
  'CurrencyRupeeRounded',
);
export const CurrencyRupeeSharpIcon = (props?: KTRawAttr) => {
  const s = _CurrencyRupeeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyRupeeSharpIcon = svg(
  svg('path', {
    d: 'M13.66 7c-.56-1.18-1.76-2-3.16-2H6V3h12v2h-3.26c.48.58.84 1.26 1.05 2H18v2h-2.02c-.25 2.8-2.61 5-5.48 5h-.73l6.73 7h-2.77L7 14v-2h3.5c1.76 0 3.22-1.3 3.46-3H6V7z',
  }),
  'CurrencyRupeeSharp',
);
export const CurrencyRupeeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CurrencyRupeeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyRupeeTwoToneIcon = svg(
  svg('path', {
    d: 'M13.66 7c-.56-1.18-1.76-2-3.16-2H6V3h12v2h-3.26c.48.58.84 1.26 1.05 2H18v2h-2.02c-.25 2.8-2.61 5-5.48 5h-.73l6.73 7h-2.77L7 14v-2h3.5c1.76 0 3.22-1.3 3.46-3H6V7z',
  }),
  'CurrencyRupeeTwoTone',
);
export const CurrencyYenIcon = (props?: KTRawAttr) => {
  const s = _CurrencyYenIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyYenIcon = svg(
  svg('path', { d: 'M13.92 11H18v2h-5v2h5v2h-5v4h-2v-4H6v-2h5v-2H6v-2h4.08L5 3h2.37L12 10.29 16.63 3H19z' }),
  'CurrencyYen',
);
export const CurrencyYenOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CurrencyYenOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyYenOutlinedIcon = svg(
  svg('path', { d: 'M13.92 11H18v2h-5v2h5v2h-5v4h-2v-4H6v-2h5v-2H6v-2h4.08L5 3h2.37L12 10.29 16.63 3H19z' }),
  'CurrencyYenOutlined',
);
export const CurrencyYenRoundedIcon = (props?: KTRawAttr) => {
  const s = _CurrencyYenRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyYenRoundedIcon = svg(
  svg('path', {
    d: 'M6.82 3c.34 0 .66.17.84.46L12 10.29l4.34-6.83c.18-.29.5-.46.84-.46.79 0 1.27.87.84 1.54L13.92 11H17c.55 0 1 .45 1 1s-.45 1-1 1h-4v2h4c.55 0 1 .45 1 1s-.45 1-1 1h-4v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H7c-.55 0-1-.45-1-1s.45-1 1-1h4v-2H7c-.55 0-1-.45-1-1s.45-1 1-1h3.08l-4.1-6.46C5.55 3.87 6.03 3 6.82 3',
  }),
  'CurrencyYenRounded',
);
export const CurrencyYenSharpIcon = (props?: KTRawAttr) => {
  const s = _CurrencyYenSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyYenSharpIcon = svg(
  svg('path', { d: 'M13.92 11H18v2h-5v2h5v2h-5v4h-2v-4H6v-2h5v-2H6v-2h4.08L5 3h2.37L12 10.29 16.63 3H19z' }),
  'CurrencyYenSharp',
);
export const CurrencyYenTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CurrencyYenTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyYenTwoToneIcon = svg(
  svg('path', { d: 'M13.92 11H18v2h-5v2h5v2h-5v4h-2v-4H6v-2h5v-2H6v-2h4.08L5 3h2.37L12 10.29 16.63 3H19z' }),
  'CurrencyYenTwoTone',
);
export const CurrencyYuanIcon = (props?: KTRawAttr) => {
  const s = _CurrencyYuanIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyYuanIcon = svg(
  svg('path', { d: 'M13.28 12H18v2h-5v7h-2v-7H6v-2h4.72L5 3h2.37L12 10.29 16.63 3H19z' }),
  'CurrencyYuan',
);
export const CurrencyYuanOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CurrencyYuanOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyYuanOutlinedIcon = svg(
  svg('path', { d: 'M13.28 12H18v2h-5v7h-2v-7H6v-2h4.72L5 3h2.37L12 10.29 16.63 3H19z' }),
  'CurrencyYuanOutlined',
);
export const CurrencyYuanRoundedIcon = (props?: KTRawAttr) => {
  const s = _CurrencyYuanRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyYuanRoundedIcon = svg(
  svg('path', {
    d: 'M12 21c-.55 0-1-.45-1-1v-6H7c-.55 0-1-.45-1-1s.45-1 1-1h3.72L5.98 4.54C5.55 3.87 6.03 3 6.82 3c.34 0 .66.17.84.46L12 10.29l4.34-6.83c.18-.29.5-.46.84-.46.79 0 1.27.87.84 1.54L13.28 12H17c.55 0 1 .45 1 1s-.45 1-1 1h-4v6c0 .55-.45 1-1 1',
  }),
  'CurrencyYuanRounded',
);
export const CurrencyYuanSharpIcon = (props?: KTRawAttr) => {
  const s = _CurrencyYuanSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyYuanSharpIcon = svg(
  svg('path', { d: 'M13.28 12H18v2h-5v7h-2v-7H6v-2h4.72L5 3h2.37L12 10.29 16.63 3H19z' }),
  'CurrencyYuanSharp',
);
export const CurrencyYuanTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CurrencyYuanTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurrencyYuanTwoToneIcon = svg(
  svg('path', { d: 'M13.28 12H18v2h-5v7h-2v-7H6v-2h4.72L5 3h2.37L12 10.29 16.63 3H19z' }),
  'CurrencyYuanTwoTone',
);
export const CurtainsIcon = (props?: KTRawAttr) => {
  const s = _CurtainsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurtainsIcon = svg(
  svg('path', {
    d: 'M20 19V3H4v16H2v2h20v-2zM8.19 12c2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7',
  }),
  'Curtains',
);
export const CurtainsClosedIcon = (props?: KTRawAttr) => {
  const s = _CurtainsClosedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurtainsClosedIcon = svg(svg('path', { d: 'M20 19V3H4v16H2v2h20v-2zM11 5h2v14h-2z' }), 'CurtainsClosed');
export const CurtainsClosedOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CurtainsClosedOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurtainsClosedOutlinedIcon = svg(
  svg('path', { d: 'M20 19V3H4v16H2v2h20v-2zM13 5v14h-2V5zM6 5h3v14H6zm9 14V5h3v14z' }),
  'CurtainsClosedOutlined',
);
export const CurtainsClosedRoundedIcon = (props?: KTRawAttr) => {
  const s = _CurtainsClosedRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurtainsClosedRoundedIcon = svg(
  svg('path', {
    d: 'M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM11 5h2v14h-2z',
  }),
  'CurtainsClosedRounded',
);
export const CurtainsClosedSharpIcon = (props?: KTRawAttr) => {
  const s = _CurtainsClosedSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurtainsClosedSharpIcon = svg(
  svg('path', { d: 'M20 19V3H4v16H2v2h20v-2zM11 5h2v14h-2z' }),
  'CurtainsClosedSharp',
);
export const CurtainsClosedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CurtainsClosedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurtainsClosedTwoToneIcon = svg(
  [
    svg('path', { d: 'M6 5h3v14H6zm9 0h3v14h-3z', opacity: '.3' }, '0'),
    svg('path', { d: 'M20 19V3H4v16H2v2h20v-2zM9 19H6V5h3zm4 0h-2V5h2zm5 0h-3V5h3z' }, '1'),
  ],
  'CurtainsClosedTwoTone',
);
export const CurtainsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CurtainsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurtainsOutlinedIcon = svg(
  svg('path', {
    d: 'M20 19V3H4v16H2v2h20v-2zm-2-8.14c-2.05-.58-3.64-2.93-3.94-5.86H18zM15.81 12c-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7 2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7M9.94 5c-.3 2.93-1.89 5.27-3.94 5.86V5zM6 13.14c2.05.58 3.64 2.93 3.94 5.86H6zM14.06 19c.3-2.93 1.89-5.27 3.94-5.86V19z',
  }),
  'CurtainsOutlined',
);
export const CurtainsRoundedIcon = (props?: KTRawAttr) => {
  const s = _CurtainsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurtainsRoundedIcon = svg(
  svg('path', {
    d: 'M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM8.19 12c2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7',
  }),
  'CurtainsRounded',
);
export const CurtainsSharpIcon = (props?: KTRawAttr) => {
  const s = _CurtainsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurtainsSharpIcon = svg(
  svg('path', {
    d: 'M20 19V3H4v16H2v2h20v-2zM8.19 12c2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7',
  }),
  'CurtainsSharp',
);
export const CurtainsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CurtainsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CurtainsTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M6 13.14V19h3.94c-.3-2.93-1.89-5.27-3.94-5.86M9.94 5H6v5.86C8.05 10.27 9.64 7.93 9.94 5m4.12 14H18v-5.86c-2.05.59-3.64 2.93-3.94 5.86M18 10.86V5h-3.94c.3 2.93 1.89 5.27 3.94 5.86',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 19V3H4v16H2v2h20v-2zM6 5h3.94c-.3 2.93-1.89 5.27-3.94 5.86zm0 14v-5.86c2.05.58 3.64 2.93 3.94 5.86zm5.95 0c-.26-3.06-1.72-5.65-3.76-7 2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7-2.04 1.35-3.5 3.94-3.76 7zM18 19h-3.94c.3-2.93 1.89-5.27 3.94-5.86zm0-8.14c-2.05-.58-3.64-2.93-3.94-5.86H18z',
      },
      '1',
    ),
  ],
  'CurtainsTwoTone',
);
export const CycloneIcon = (props?: KTRawAttr) => {
  const s = _CycloneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CycloneIcon = svg(
  [
    svg(
      'path',
      { d: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M22 7.47V5.35C20.05 4.77 16.56 4 12 4c-2.15 0-4.11.86-5.54 2.24.13-.85.4-2.4 1.01-4.24H5.35C4.77 3.95 4 7.44 4 12c0 2.15.86 4.11 2.24 5.54-.85-.14-2.4-.4-4.24-1.01v2.12C3.95 19.23 7.44 20 12 20c2.15 0 4.11-.86 5.54-2.24-.14.85-.4 2.4-1.01 4.24h2.12c.58-1.95 1.35-5.44 1.35-10 0-2.15-.86-4.11-2.24-5.54.85.13 2.4.4 4.24 1.01M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6',
      },
      '1',
    ),
  ],
  'Cyclone',
);
export const CycloneOutlinedIcon = (props?: KTRawAttr) => {
  const s = _CycloneOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CycloneOutlinedIcon = svg(
  [
    svg(
      'path',
      { d: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M22 7.47V5.35C20.05 4.77 16.56 4 12 4c-2.15 0-4.11.86-5.54 2.24.13-.85.4-2.4 1.01-4.24H5.35C4.77 3.95 4 7.44 4 12c0 2.15.86 4.11 2.24 5.54-.85-.14-2.4-.4-4.24-1.01v2.12C3.95 19.23 7.44 20 12 20c2.15 0 4.11-.86 5.54-2.24-.14.85-.4 2.4-1.01 4.24h2.12c.58-1.95 1.35-5.44 1.35-10 0-2.15-.86-4.11-2.24-5.54.85.13 2.4.4 4.24 1.01M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6',
      },
      '1',
    ),
  ],
  'CycloneOutlined',
);
export const CycloneRoundedIcon = (props?: KTRawAttr) => {
  const s = _CycloneRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CycloneRoundedIcon = svg(
  [
    svg(
      'path',
      { d: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M22 6.11c0-.46-.3-.86-.74-.97C19.23 4.6 16.03 4 12 4c-2.15 0-4.11.86-5.54 2.24.1-.65.28-1.69.62-2.96.17-.64-.3-1.28-.97-1.28-.45 0-.85.3-.97.74C4.6 4.77 4 7.97 4 12c0 2.15.86 4.11 2.24 5.54-.65-.1-1.69-.28-2.96-.62-.64-.17-1.28.3-1.28.97 0 .46.3.86.74.97C4.77 19.4 7.97 20 12 20c2.15 0 4.11-.86 5.54-2.24-.1.65-.28 1.69-.62 2.96-.17.64.3 1.28.97 1.28.46 0 .86-.3.97-.74C19.4 19.23 20 16.03 20 12c0-2.15-.86-4.11-2.24-5.54.65.1 1.69.28 2.96.62.64.17 1.28-.3 1.28-.97M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6',
      },
      '1',
    ),
  ],
  'CycloneRounded',
);
export const CycloneSharpIcon = (props?: KTRawAttr) => {
  const s = _CycloneSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CycloneSharpIcon = svg(
  [
    svg(
      'path',
      { d: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M22 7.47V5.35C20.05 4.77 16.56 4 12 4c-2.15 0-4.11.86-5.54 2.24.13-.85.4-2.4 1.01-4.24H5.35C4.77 3.95 4 7.44 4 12c0 2.15.86 4.11 2.24 5.54-.85-.14-2.4-.4-4.24-1.01v2.12C3.95 19.23 7.44 20 12 20c2.15 0 4.11-.86 5.54-2.24-.14.85-.4 2.4-1.01 4.24h2.12c.58-1.95 1.35-5.44 1.35-10 0-2.15-.86-4.11-2.24-5.54.85.13 2.4.4 4.24 1.01M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6',
      },
      '1',
    ),
  ],
  'CycloneSharp',
);
export const CycloneTwoToneIcon = (props?: KTRawAttr) => {
  const s = _CycloneTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _CycloneTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4',
        opacity: '.3',
      },
      '0',
    ),
    svg('circle', { cx: '12', cy: '12', r: '2', opacity: '.3' }, '1'),
    svg(
      'path',
      { d: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2' },
      '2',
    ),
    svg(
      'path',
      {
        d: 'M22 5.35C20.05 4.77 16.56 4 12 4c-2.15 0-4.11.86-5.54 2.24.13-.85.4-2.4 1.01-4.24H5.35C4.77 3.95 4 7.44 4 12c0 2.15.86 4.11 2.24 5.54-.85-.14-2.4-.4-4.24-1.01v2.12C3.95 19.23 7.44 20 12 20c2.15 0 4.11-.86 5.54-2.24-.14.85-.4 2.4-1.01 4.24h2.12c.58-1.95 1.35-5.44 1.35-10 0-2.15-.86-4.11-2.24-5.54.85.14 2.4.4 4.24 1.01zM18 12c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6 6 2.69 6 6',
      },
      '3',
    ),
  ],
  'CycloneTwoTone',
);
