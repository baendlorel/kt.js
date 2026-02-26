import { applyAttr, type KTRawAttr } from '@ktjs/core';
import { svg } from '../common/index.js';

export const SafetyCheckIcon = (props?: KTRawAttr) => {
  const s = _SafetyCheckIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SafetyCheckIcon = svg(
  svg('path', {
    d: 'M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m1.65-2.65L11.5 12.2V9h1v2.79l1.85 1.85z',
  }),
  'SafetyCheck',
);
export const SafetyCheckOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SafetyCheckOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SafetyCheckOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.65 7.35L11.5 12.2V9h1v2.79l1.85 1.85z',
  }),
  'SafetyCheckOutlined',
);
export const SafetyCheckRoundedIcon = (props?: KTRawAttr) => {
  const s = _SafetyCheckRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SafetyCheckRoundedIcon = svg(
  svg('path', {
    d: 'm11.3 2.26-6 2.25C4.52 4.81 4 5.55 4 6.39v4.7c0 4.83 3.13 9.37 7.43 10.75.37.12.77.12 1.14 0 4.3-1.38 7.43-5.91 7.43-10.75v-4.7c0-.83-.52-1.58-1.3-1.87l-6-2.25c-.45-.18-.95-.18-1.4-.01M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m2-3c-.2.2-.51.2-.71 0l-1.65-1.65c-.09-.09-.15-.22-.15-.35V9.5c.01-.28.23-.5.51-.5s.5.22.5.5v2.29l1.5 1.5c.2.2.2.51 0 .71',
  }),
  'SafetyCheckRounded',
);
export const SafetyCheckSharpIcon = (props?: KTRawAttr) => {
  const s = _SafetyCheckSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SafetyCheckSharpIcon = svg(
  svg('path', {
    d: 'M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m1.65-2.65L11.5 12.2V9h1v2.79l1.85 1.85z',
  }),
  'SafetyCheckSharp',
);
export const SafetyCheckTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SafetyCheckTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SafetyCheckTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4.14 6 6.39v4.7c0 4 2.55 7.7 6 8.83 3.45-1.13 6-4.82 6-8.83v-4.7zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m1.65-2.65L11.5 12.2V9h1v2.79l1.85 1.85z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.65 7.35L11.5 12.2V9h1v2.79l1.85 1.85z',
      },
      '1',
    ),
  ],
  'SafetyCheckTwoTone',
);
export const SafetyDividerIcon = (props?: KTRawAttr) => {
  const s = _SafetyDividerIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SafetyDividerIcon = svg(
  svg('path', {
    d: 'M11 5h2v14h-2zm-6 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58C6.93 13.21 5.99 13 5 13s-1.93.21-2.78.58C1.48 13.9 1 14.62 1 15.43V16h8v-.57c0-.81-.48-1.53-1.22-1.85M19 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58c-.85-.37-1.79-.58-2.78-.58s-1.93.21-2.78.58c-.74.32-1.22 1.04-1.22 1.85V16h8v-.57c0-.81-.48-1.53-1.22-1.85',
  }),
  'SafetyDivider',
);
export const SafetyDividerOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SafetyDividerOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SafetyDividerOutlinedIcon = svg(
  svg('path', {
    d: 'M11 5h2v14h-2zm-6 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58C6.93 13.21 5.99 13 5 13s-1.93.21-2.78.58C1.48 13.9 1 14.62 1 15.43V16h8v-.57c0-.81-.48-1.53-1.22-1.85M19 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58c-.85-.37-1.79-.58-2.78-.58s-1.93.21-2.78.58c-.74.32-1.22 1.04-1.22 1.85V16h8v-.57c0-.81-.48-1.53-1.22-1.85',
  }),
  'SafetyDividerOutlined',
);
export const SafetyDividerRoundedIcon = (props?: KTRawAttr) => {
  const s = _SafetyDividerRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SafetyDividerRoundedIcon = svg(
  svg('path', {
    d: 'M11 5h2v14h-2zm-6 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58C6.93 13.21 5.99 13 5 13s-1.93.21-2.78.58C1.48 13.9 1 14.62 1 15.43V16h8v-.57c0-.81-.48-1.53-1.22-1.85M19 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58c-.85-.37-1.79-.58-2.78-.58s-1.93.21-2.78.58c-.74.32-1.22 1.04-1.22 1.85V16h8v-.57c0-.81-.48-1.53-1.22-1.85',
  }),
  'SafetyDividerRounded',
);
export const SafetyDividerSharpIcon = (props?: KTRawAttr) => {
  const s = _SafetyDividerSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SafetyDividerSharpIcon = svg(
  svg('path', {
    d: 'M11 5h2v14h-2zm-6 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58C6.93 13.21 5.99 13 5 13s-1.93.21-2.78.58C1.48 13.9 1 14.62 1 15.43V16h8v-.57c0-.81-.48-1.53-1.22-1.85M19 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58c-.85-.37-1.79-.58-2.78-.58s-1.93.21-2.78.58c-.74.32-1.22 1.04-1.22 1.85V16h8v-.57c0-.81-.48-1.53-1.22-1.85',
  }),
  'SafetyDividerSharp',
);
export const SafetyDividerTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SafetyDividerTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SafetyDividerTwoToneIcon = svg(
  svg('path', {
    d: 'M11 5h2v14h-2zm-6 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58C6.93 13.21 5.99 13 5 13s-1.93.21-2.78.58C1.48 13.9 1 14.62 1 15.43V16h8v-.57c0-.81-.48-1.53-1.22-1.85M19 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58c-.85-.37-1.79-.58-2.78-.58s-1.93.21-2.78.58c-.74.32-1.22 1.04-1.22 1.85V16h8v-.57c0-.81-.48-1.53-1.22-1.85',
  }),
  'SafetyDividerTwoTone',
);
export const SailingIcon = (props?: KTRawAttr) => {
  const s = _SailingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SailingIcon = svg(
  svg('path', {
    d: 'M11 13.5V2L3 13.5zm10 0C21 6.5 14.5 1 12.5 1c0 0 1 3 1 6.5s-1 6-1 6zm1 1.5H2c.31 1.53 1.16 2.84 2.33 3.73.65-.27 1.22-.72 1.67-1.23.73.84 1.8 1.5 3 1.5s2.27-.66 3-1.5c.73.84 1.8 1.5 3 1.5s2.26-.66 3-1.5c.45.51 1.02.96 1.67 1.23 1.17-.89 2.02-2.2 2.33-3.73m0 8v-2h-1c-1.04 0-2.08-.35-3-1-1.83 1.3-4.17 1.3-6 0-1.83 1.3-4.17 1.3-6 0-.91.65-1.96 1-3 1H2v2h1c1.03 0 2.05-.25 3-.75 1.89 1 4.11 1 6 0 1.89 1 4.11 1 6 0 .95.5 1.97.75 3 .75z',
  }),
  'Sailing',
);
export const SailingOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SailingOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SailingOutlinedIcon = svg(
  svg('path', {
    d: 'M11 13.5V2L3 13.5zm-2-2H6.83L9 8.38zm12 2C21 6.5 14.5 1 12.5 1c0 0 1 3 1 6.5s-1 6-1 6zm-5.62-8.26c1.42 1.52 2.88 3.72 3.41 6.26h-3.68c.21-1.1.39-2.46.39-4 0-.79-.05-1.55-.12-2.26M22 15H2c.31 1.53 1.16 2.84 2.33 3.73.65-.27 1.22-.72 1.67-1.23.73.84 1.8 1.5 3 1.5s2.27-.66 3-1.5c.73.84 1.8 1.5 3 1.5s2.26-.66 3-1.5c.45.51 1.02.96 1.67 1.23 1.17-.89 2.02-2.2 2.33-3.73m0 8v-2h-1c-1.04 0-2.08-.35-3-1-1.83 1.3-4.17 1.3-6 0-1.83 1.3-4.17 1.3-6 0-.91.65-1.96 1-3 1H2v2h1c1.03 0 2.05-.25 3-.75 1.89 1 4.11 1 6 0 1.89 1 4.11 1 6 0 .95.5 1.97.75 3 .75z',
  }),
  'SailingOutlined',
);
export const SailingRoundedIcon = (props?: KTRawAttr) => {
  const s = _SailingRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SailingRoundedIcon = svg(
  svg('path', {
    d: 'M11 13V3.59c0-.49-.63-.69-.91-.29l-6.54 9.41c-.23.33.01.79.41.79h6.54c.28 0 .5-.22.5-.5m9.99-.02C20.72 7.07 15.9 2.32 13.4 1.23c-.37-.16-.77.2-.67.59.3 1.13.76 3.28.76 5.68 0 2.44-.49 4.39-.78 5.35-.1.32.14.65.48.65h7.28c.29 0 .53-.24.52-.52M20.62 15H3.38c-.73 0-1.22.76-.92 1.42.43.92 1.07 1.71 1.86 2.31.38-.16.74-.38 1.06-.63.35-.29.87-.29 1.23 0 .67.53 1.49.9 2.39.9s1.72-.37 2.39-.91c.35-.28.87-.28 1.22 0 .67.54 1.49.91 2.39.91s1.72-.37 2.39-.91c.35-.29.87-.28 1.23 0 .32.26.67.48 1.06.63.79-.6 1.43-1.39 1.86-2.31.3-.65-.19-1.41-.92-1.41M22 22c0-.55-.45-1-1-1-.87 0-1.73-.24-2.53-.7-.29-.16-.65-.17-.94 0-1.59.9-3.47.9-5.06 0-.29-.16-.65-.16-.94 0-1.59.9-3.47.9-5.06 0-.29-.16-.65-.16-.94 0-.8.46-1.66.7-2.53.7-.55 0-1 .45-1 1s.45 1 1 1c1.15 0 2.3-.31 3.33-.94 1.66 1.11 3.78 1.01 5.58.14 1.91 1.05 4.17 1.07 6.09.05.95.5 1.97.75 3 .75.55 0 1-.45 1-1',
  }),
  'SailingRounded',
);
export const SailingSharpIcon = (props?: KTRawAttr) => {
  const s = _SailingSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SailingSharpIcon = svg(
  svg('path', {
    d: 'M11 13.5V2L3 13.5zm10 0C21 6.5 14.5 1 12.5 1c0 0 1 3 1 6.5s-1 6-1 6zm1 1.5H2c.31 1.53 1.16 2.84 2.33 3.73.65-.27 1.22-.72 1.67-1.23.73.84 1.8 1.5 3 1.5s2.27-.66 3-1.5c.73.84 1.8 1.5 3 1.5s2.26-.66 3-1.5c.45.51 1.02.96 1.67 1.23 1.17-.89 2.02-2.2 2.33-3.73m0 8v-2h-1c-1.04 0-2.08-.35-3-1-1.83 1.3-4.17 1.3-6 0-1.83 1.3-4.17 1.3-6 0-.91.65-1.96 1-3 1H2v2h1c1.03 0 2.05-.25 3-.75 1.89 1 4.11 1 6 0 1.89 1 4.11 1 6 0 .95.5 1.97.75 3 .75z',
  }),
  'SailingSharp',
);
export const SailingTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SailingTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SailingTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M9 11.5H6.83L9 8.38zm6.38-6.26c1.42 1.52 2.88 3.72 3.41 6.26h-3.68c.21-1.1.39-2.46.39-4 0-.79-.05-1.55-.12-2.26',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M11 13.5V2L3 13.5zm-2-2H6.83L9 8.38zm12 2C21 6.5 14.5 1 12.5 1c0 0 1 3 1 6.5s-1 6-1 6zm-5.62-8.26c1.42 1.52 2.88 3.72 3.41 6.26h-3.68c.21-1.1.39-2.46.39-4 0-.79-.05-1.55-.12-2.26M22 15H2c.31 1.53 1.16 2.84 2.33 3.73.65-.27 1.22-.72 1.67-1.23.73.84 1.8 1.5 3 1.5s2.27-.66 3-1.5c.73.84 1.8 1.5 3 1.5s2.26-.66 3-1.5c.45.51 1.02.96 1.67 1.23 1.17-.89 2.02-2.2 2.33-3.73m0 8v-2h-1c-1.04 0-2.08-.35-3-1-1.83 1.3-4.17 1.3-6 0-1.83 1.3-4.17 1.3-6 0-.91.65-1.96 1-3 1H2v2h1c1.03 0 2.05-.25 3-.75 1.89 1 4.11 1 6 0 1.89 1 4.11 1 6 0 .95.5 1.97.75 3 .75z',
      },
      '1',
    ),
  ],
  'SailingTwoTone',
);
export const SanitizerIcon = (props?: KTRawAttr) => {
  const s = _SanitizerIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SanitizerIcon = svg(
  svg('path', {
    d: 'M15.5 6.5C15.5 5.66 17 4 17 4s1.5 1.66 1.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m4 8.5c1.38 0 2.5-1.12 2.5-2.5 0-1.67-2.5-4.5-2.5-4.5S17 10.83 17 12.5c0 1.38 1.12 2.5 2.5 2.5M13 14h-2v-2H9v2H7v2h2v2h2v-2h2zm3-2v10H4V12c0-2.97 2.16-5.43 5-5.91V4H7V2h6c1.13 0 2.15.39 2.99 1.01l-1.43 1.43C14.1 4.17 13.57 4 13 4h-2v2.09c2.84.48 5 2.94 5 5.91',
  }),
  'Sanitizer',
);
export const SanitizerOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SanitizerOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SanitizerOutlinedIcon = svg(
  svg('path', {
    d: 'M15.5 6.5C15.5 5.66 17 4 17 4s1.5 1.66 1.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m4 8.5c1.38 0 2.5-1.12 2.5-2.5 0-1.67-2.5-4.5-2.5-4.5S17 10.83 17 12.5c0 1.38 1.12 2.5 2.5 2.5M13 14h-2v-2H9v2H7v2h2v2h2v-2h2zm3-2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8c0-2.97 2.16-5.43 5-5.91V4H7V2h6c1.13 0 2.15.39 2.99 1.01l-1.43 1.43C14.1 4.17 13.57 4 13 4h-2v2.09c2.84.48 5 2.94 5 5.91m-2 0c0-2.21-1.79-4-4-4s-4 1.79-4 4v8h8z',
  }),
  'SanitizerOutlined',
);
export const SanitizerRoundedIcon = (props?: KTRawAttr) => {
  const s = _SanitizerRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SanitizerRoundedIcon = svg(
  svg('path', {
    d: 'M15.5 6.5c0-.56.67-1.49 1.11-2.04.2-.25.58-.25.77 0 .44.55 1.11 1.48 1.11 2.04.01.83-.66 1.5-1.49 1.5s-1.5-.67-1.5-1.5m4 8.5c1.38 0 2.5-1.12 2.5-2.5 0-1.25-1.41-3.16-2.11-4.04a.489.489 0 0 0-.77 0c-.71.88-2.12 2.79-2.12 4.04 0 1.38 1.12 2.5 2.5 2.5M12 14h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1H8c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1m4-2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8c0-2.97 2.16-5.43 5-5.91V4H8c-.55 0-1-.45-1-1s.45-1 1-1h5c.61 0 1.19.11 1.72.31.67.25.83 1.13.33 1.64-.28.28-.69.36-1.05.23-.32-.12-.65-.18-1-.18h-2v2.09c2.84.48 5 2.94 5 5.91',
  }),
  'SanitizerRounded',
);
export const SanitizerSharpIcon = (props?: KTRawAttr) => {
  const s = _SanitizerSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SanitizerSharpIcon = svg(
  svg('path', {
    d: 'M15.5 6.5C15.5 5.66 17 4 17 4s1.5 1.66 1.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m4 8.5c1.38 0 2.5-1.12 2.5-2.5 0-1.67-2.5-4.5-2.5-4.5S17 10.83 17 12.5c0 1.38 1.12 2.5 2.5 2.5M13 14h-2v-2H9v2H7v2h2v2h2v-2h2zm3-2v10H4V12c0-2.97 2.16-5.43 5-5.91V4H7V2h6c1.13 0 2.15.39 2.99 1.01l-1.43 1.43C14.1 4.17 13.57 4 13 4h-2v2.09c2.84.48 5 2.94 5 5.91',
  }),
  'SanitizerSharp',
);
export const SanitizerTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SanitizerTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SanitizerTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M10 8c-2.21 0-4 1.79-4 4v8h8v-8c0-2.21-1.79-4-4-4m3 8h-2v2H9v-2H7v-2h2v-2h2v2h2z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M15.5 6.5C15.5 5.66 17 4 17 4s1.5 1.66 1.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m4 8.5c1.38 0 2.5-1.12 2.5-2.5 0-1.67-2.5-4.5-2.5-4.5S17 10.83 17 12.5c0 1.38 1.12 2.5 2.5 2.5M13 14h-2v-2H9v2H7v2h2v2h2v-2h2zm3-2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8c0-2.97 2.16-5.43 5-5.91V4H7V2h6c1.13 0 2.15.39 2.99 1.01l-1.43 1.43C14.1 4.17 13.57 4 13 4h-2v2.09c2.84.48 5 2.94 5 5.91m-2 0c0-2.21-1.79-4-4-4s-4 1.79-4 4v8h8z',
      },
      '1',
    ),
  ],
  'SanitizerTwoTone',
);
export const SatelliteIcon = (props?: KTRawAttr) => {
  const s = _SatelliteIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SatelliteIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 4.99h3C8 6.65 6.66 8 5 8zM5 12v-2c2.76 0 5-2.25 5-5.01h2C12 8.86 8.87 12 5 12m0 6 3.5-4.5 2.5 3.01L14.5 12l4.5 6z',
  }),
  'Satellite',
);
export const SatelliteAltIcon = (props?: KTRawAttr) => {
  const s = _SatelliteAltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SatelliteAltIcon = svg(
  svg('path', {
    d: 'm15.44.59-3.18 3.18c-.78.78-.78 2.05 0 2.83l1.24 1.24-.71.71-1.24-1.25c-.78-.78-2.05-.78-2.83 0L7.3 8.72c-.78.78-.78 2.05 0 2.83l1.24 1.24-.71.71-1.23-1.25c-.78-.78-2.05-.78-2.83 0L.59 15.43c-.78.78-.78 2.05 0 2.83l3.54 3.54c.78.78 2.05.78 2.83 0l3.18-3.18c.78-.78.78-2.05 0-2.83L8.9 14.55l.71-.71 1.24 1.24c.78.78 2.05.78 2.83 0l1.41-1.41c.78-.78.78-2.05 0-2.83L13.84 9.6l.71-.71 1.24 1.24c.78.78 2.05.78 2.83 0l3.18-3.18c.78-.78.78-2.05 0-2.83L18.26.58c-.78-.78-2.04-.78-2.82.01M6.6 19.32l-1.06 1.06L2 16.85l1.06-1.06zm2.12-2.12-1.06 1.06-3.54-3.54 1.06-1.06zm9.54-9.54L17.2 8.72l-3.54-3.54 1.06-1.06zm2.12-2.12L19.32 6.6l-3.54-3.54L16.85 2zM14 21v2c4.97 0 9-4.03 9-9h-2c0 3.87-3.13 7-7 7m0-4v2c2.76 0 5-2.24 5-5h-2c0 1.66-1.34 3-3 3',
  }),
  'SatelliteAlt',
);
export const SatelliteAltOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SatelliteAltOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SatelliteAltOutlinedIcon = svg(
  svg('path', {
    d: 'M21 14h2c0 4.97-4.03 9-9 9v-2c3.87 0 7-3.13 7-7m-7 3v2c2.76 0 5-2.24 5-5h-2c0 1.66-1.34 3-3 3M18.26.59l3.54 3.54c.78.78.78 2.05 0 2.83l-3.18 3.18c-.78.78-2.05.78-2.83 0L14.55 8.9l-.71.7 1.24 1.24c.78.78.78 2.05 0 2.83l-1.41 1.41c-.78.78-2.05.78-2.83 0L9.6 13.84l-.71.71 1.24 1.24c.78.78.78 2.05 0 2.83L6.95 21.8c-.78.78-2.05.78-2.83 0L.58 18.26c-.78-.78-.78-2.05 0-2.83l3.18-3.18c.78-.78 2.05-.78 2.83 0l1.24 1.24.71-.71-1.24-1.23c-.78-.78-.78-2.05 0-2.83L8.72 7.3c.78-.78 2.05-.78 2.83 0l1.24 1.24.71-.71-1.25-1.23c-.78-.78-.78-2.05 0-2.83L15.43.59c.79-.79 2.05-.79 2.83 0m-15.2 15.2L2 16.85l3.54 3.54 1.06-1.06zm2.12-2.12-1.06 1.06 3.54 3.54 1.06-1.06zm4.95-4.95-1.41 1.41 3.54 3.54 1.41-1.41zm4.6-4.6-1.06 1.06 3.54 3.54 1.06-1.06zM16.85 2l-1.06 1.06 3.54 3.54 1.06-1.06z',
  }),
  'SatelliteAltOutlined',
);
export const SatelliteAltRoundedIcon = (props?: KTRawAttr) => {
  const s = _SatelliteAltRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SatelliteAltRoundedIcon = svg(
  svg('path', {
    d: 'M20.95 14.88a6.985 6.985 0 0 1-6.07 6.07c-.51.06-.88.49-.88.99 0 .04 0 .08.01.12.07.55.57.94 1.12.87 4.09-.51 7.3-3.72 7.81-7.81.06-.55-.33-1.05-.88-1.11-.55-.07-1.05.32-1.11.87m-2.11.38c.14-.53-.18-1.08-.72-1.22s-1.08.18-1.22.72c-.27 1.05-1.09 1.87-2.15 2.15-.45.12-.75.52-.75.97 0 .08.01.17.03.25.14.53.69.85 1.22.72 1.77-.47 3.14-1.84 3.59-3.59M21.8 4.12 18.26.58c-.78-.78-2.05-.78-2.83 0l-3.18 3.18c-.78.78-.78 2.05 0 2.83l1.24 1.24-.71.71-1.23-1.24c-.78-.78-2.05-.78-2.83 0L7.3 8.72c-.78.78-.78 2.05 0 2.83l1.24 1.24-.71.71-1.23-1.25c-.78-.78-2.05-.78-2.83 0L.59 15.43c-.78.78-.78 2.05 0 2.83l3.54 3.54c.78.78 2.05.78 2.83 0l3.18-3.18c.78-.78.78-2.05 0-2.83L8.9 14.55l.71-.71 1.24 1.24c.78.78 2.05.78 2.83 0l1.41-1.41c.78-.78.78-2.05 0-2.83L13.84 9.6l.71-.71 1.24 1.24c.78.78 2.05.78 2.83 0l3.18-3.18c.78-.78.78-2.05 0-2.83M5.54 20.38 2 16.85l1.06-1.06 3.54 3.54zm2.12-2.12-3.54-3.54 1.06-1.06 3.54 3.54zm9.54-9.54-3.54-3.54 1.06-1.06 3.54 3.54zm2.12-2.12-3.54-3.54L16.85 2l3.54 3.54z',
  }),
  'SatelliteAltRounded',
);
export const SatelliteAltSharpIcon = (props?: KTRawAttr) => {
  const s = _SatelliteAltSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SatelliteAltSharpIcon = svg(
  svg('path', {
    d: 'm15.44.59-3.18 3.18c-.78.78-.78 2.05 0 2.83l1.24 1.24-.71.71-2.65-2.65-4.24 4.24 2.65 2.65-.71.71-1.24-1.25c-.78-.78-2.05-.78-2.83 0L.59 15.43c-.78.78-.78 2.05 0 2.83l3.54 3.54c.78.78 2.05.78 2.83 0l3.18-3.18c.78-.78.78-2.05 0-2.83L8.9 14.55l.71-.71 2.65 2.65 4.24-4.24-2.66-2.65.71-.71 1.24 1.24c.78.78 2.05.78 2.83 0l3.18-3.18c.78-.78.78-2.05 0-2.83L18.26.58c-.78-.78-2.04-.78-2.82.01M6.6 19.32l-1.06 1.06L2 16.85l1.06-1.06zm2.12-2.12-1.06 1.06-3.54-3.54 1.06-1.06zm9.54-9.54L17.2 8.72l-3.54-3.54 1.06-1.06zm2.12-2.12L19.32 6.6l-3.54-3.54L16.85 2zM21 14h2c0 4.97-4.03 9-9 9v-2c3.87 0 7-3.13 7-7m-4 0h2c0 2.76-2.24 5-5 5v-2c1.66 0 3-1.34 3-3',
  }),
  'SatelliteAltSharp',
);
export const SatelliteAltTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SatelliteAltTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SatelliteAltTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm6.6 19.32-1.06 1.06L2 16.85l1.06-1.06zm2.12-2.12-1.06 1.06-3.54-3.54 1.06-1.06zm4.95-4.95-1.41 1.41-3.54-3.54 1.41-1.41zm4.59-4.59L17.2 8.72l-3.54-3.54 1.06-1.06zm2.12-2.12L19.32 6.6l-3.54-3.54L16.85 2z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm15.44.59-3.18 3.18c-.78.78-.78 2.05 0 2.83l1.24 1.24-.71.71-1.24-1.25c-.78-.78-2.05-.78-2.83 0L7.3 8.72c-.78.78-.78 2.05 0 2.83l1.24 1.24-.71.71-1.23-1.25c-.78-.78-2.05-.78-2.83 0L.59 15.43c-.78.78-.78 2.05 0 2.83l3.54 3.54c.78.78 2.05.78 2.83 0l3.18-3.18c.78-.78.78-2.05 0-2.83L8.9 14.55l.71-.71 1.24 1.24c.78.78 2.05.78 2.83 0l1.41-1.41c.78-.78.78-2.05 0-2.83L13.84 9.6l.71-.71 1.24 1.24c.78.78 2.05.78 2.83 0l3.18-3.18c.78-.78.78-2.05 0-2.83L18.26.58c-.78-.78-2.04-.78-2.82.01M6.6 19.32l-1.06 1.06L2 16.85l1.06-1.06zm2.12-2.12-1.06 1.06-3.54-3.54 1.06-1.06zm4.95-4.95-1.41 1.41-3.54-3.54 1.41-1.41zm4.59-4.59L17.2 8.72l-3.54-3.54 1.06-1.06zm2.12-2.12L19.32 6.6l-3.54-3.54L16.85 2zM21 14h2c0 4.97-4.03 9-9 9v-2c3.87 0 7-3.13 7-7m-4 0h2c0 2.76-2.24 5-5 5v-2c1.66 0 3-1.34 3-3',
      },
      '1',
    ),
  ],
  'SatelliteAltTwoTone',
);
export const SatelliteOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SatelliteOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SatelliteOutlinedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM8.57 6H6v2.58c1.42 0 2.57-1.16 2.57-2.58M12 6h-1.71c0 2.36-1.92 4.29-4.29 4.29V12c3.32 0 6-2.69 6-6m2.14 5.86-3 3.87L9 13.15 6 17h12z',
  }),
  'SatelliteOutlined',
);
export const SatelliteRoundedIcon = (props?: KTRawAttr) => {
  const s = _SatelliteRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SatelliteRoundedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 5h3c0 1.66-1.34 3-3 3zm0 5.91c0-.49.36-.9.85-.98 2.08-.36 3.72-2 4.08-4.08.08-.49.49-.85.98-.85.61 0 1.09.53 1 1.13-.48 2.96-2.81 5.3-5.77 5.78-.6.1-1.14-.39-1.14-1m.63 6.28 2.49-3.2c.2-.25.58-.26.78-.01l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.41-.01-.65-.49-.39-.82',
  }),
  'SatelliteRounded',
);
export const SatelliteSharpIcon = (props?: KTRawAttr) => {
  const s = _SatelliteSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SatelliteSharpIcon = svg(
  svg('path', {
    d: 'M21 3H3v18h18zM5 4.99h3C8 6.65 6.66 8 5 8zM5 12v-2c2.76 0 5-2.25 5-5.01h2C12 8.86 8.87 12 5 12m0 6 3.5-4.5 2.5 3.01L14.5 12l4.5 6z',
  }),
  'SatelliteSharp',
);
export const SatelliteTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SatelliteTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SatelliteTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 19h14V5H5zM6 6h2.57c0 1.42-1.15 2.58-2.57 2.58zm0 4.29c2.37 0 4.28-1.93 4.28-4.29H12c0 3.31-2.68 6-6 6zm3 2.86 2.14 2.58 3-3.86L18 17H6z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM8.57 6H6v2.58c1.42 0 2.57-1.16 2.57-2.58M12 6h-1.72c0 2.36-1.91 4.29-4.28 4.29V12c3.32 0 6-2.69 6-6m2.14 5.86-3 3.87L9 13.15 6 17h12z',
      },
      '1',
    ),
  ],
  'SatelliteTwoTone',
);
export const SaveIcon = (props?: KTRawAttr) => {
  const s = _SaveIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SaveIcon = svg(
  svg('path', {
    d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z',
  }),
  'Save',
);
export const SaveAltIcon = (props?: KTRawAttr) => {
  const s = _SaveAltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SaveAltIcon = svg(
  svg('path', {
    d: 'M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z',
  }),
  'SaveAlt',
);
export const SaveAltOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SaveAltOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SaveAltOutlinedIcon = svg(
  svg('path', {
    d: 'M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z',
  }),
  'SaveAltOutlined',
);
export const SaveAltRoundedIcon = (props?: KTRawAttr) => {
  const s = _SaveAltRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SaveAltRoundedIcon = svg(
  svg('path', {
    d: 'M19 13v5c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1m-6-.33 1.88-1.88c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-3.59 3.59c-.39.39-1.02.39-1.41 0L7.7 12.2a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L11 12.67V4c0-.55.45-1 1-1s1 .45 1 1z',
  }),
  'SaveAltRounded',
);
export const SaveAltSharpIcon = (props?: KTRawAttr) => {
  const s = _SaveAltSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SaveAltSharpIcon = svg(
  svg('path', { d: 'M19 12v7H5v-7H3v9h18v-9zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z' }),
  'SaveAltSharp',
);
export const SaveAltTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SaveAltTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SaveAltTwoToneIcon = svg(
  svg('path', {
    d: 'M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z',
  }),
  'SaveAltTwoTone',
);
export const SaveAsIcon = (props?: KTRawAttr) => {
  const s = _SaveAsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SaveAsIcon = svg(
  svg('path', {
    d: 'M21 12.4V7l-4-4H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h7.4zM15 15c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3M6 6h9v4H6zm13.99 10.25 1.77 1.77L16.77 23H15v-1.77zm3.26.26-.85.85-1.77-1.77.85-.85c.2-.2.51-.2.71 0l1.06 1.06c.2.2.2.52 0 .71',
  }),
  'SaveAs',
);
export const SaveAsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SaveAsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SaveAsOutlinedIcon = svg(
  svg('path', {
    d: 'M21 12.4V7l-4-4H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h7.4l2-2H5V5h11.17L19 7.83v6.57zM15 15c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3M6 6h9v4H6zm13.99 10.25 1.77 1.77L16.77 23H15v-1.77zm3.26.26-.85.85-1.77-1.77.85-.85c.2-.2.51-.2.71 0l1.06 1.06c.2.2.2.52 0 .71',
  }),
  'SaveAsOutlined',
);
export const SaveAsRoundedIcon = (props?: KTRawAttr) => {
  const s = _SaveAsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SaveAsRoundedIcon = svg(
  svg('path', {
    d: 'm20.41 6.41-2.83-2.83c-.37-.37-.88-.58-1.41-.58H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7.4l8.6-8.6V7.83c0-.53-.21-1.04-.59-1.42M12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-9c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h7c.55 0 1 .45 1 1zm4.99 7.25 1.77 1.77-4.84 4.84c-.1.09-.23.14-.36.14H15.5c-.28 0-.5-.22-.5-.5v-1.06c0-.13.05-.26.15-.35zm3.26.26-.85.85-1.77-1.77.85-.85c.2-.2.51-.2.71 0l1.06 1.06c.2.2.2.52 0 .71',
  }),
  'SaveAsRounded',
);
export const SaveAsSharpIcon = (props?: KTRawAttr) => {
  const s = _SaveAsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SaveAsSharpIcon = svg(
  svg('path', {
    d: 'M21 12.4V7l-4-4H3v18h9.4zM15 15c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3M6 6h9v4H6zm13.99 10.25 1.77 1.77L16.77 23H15v-1.77zm3.62-.09-1.2 1.2-1.77-1.77 1.2-1.2z',
  }),
  'SaveAsSharp',
);
export const SaveAsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SaveAsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SaveAsTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M16.17 5H5v14h9.4l4.6-4.6V7.83zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-8H6V6h9z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M21 12.4V7l-4-4H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h7.4l2-2H5V5h11.17L19 7.83v6.57zM15 15c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3M6 6h9v4H6zm13.99 10.25 1.77 1.77L16.77 23H15v-1.77zm3.26.26-.85.85-1.77-1.77.85-.85c.2-.2.51-.2.71 0l1.06 1.06c.2.2.2.52 0 .71',
      },
      '1',
    ),
  ],
  'SaveAsTwoTone',
);
export const SaveOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SaveOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SaveOutlinedIcon = svg(
  svg('path', {
    d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm2 16H5V5h11.17L19 7.83zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M6 6h9v4H6z',
  }),
  'SaveOutlined',
);
export const SaveRoundedIcon = (props?: KTRawAttr) => {
  const s = _SaveRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SaveRoundedIcon = svg(
  svg('path', {
    d: 'M17.59 3.59c-.38-.38-.89-.59-1.42-.59H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7.83c0-.53-.21-1.04-.59-1.41zM12 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m1-10H7c-1.1 0-2-.9-2-2s.9-2 2-2h6c1.1 0 2 .9 2 2s-.9 2-2 2',
  }),
  'SaveRounded',
);
export const SaveSharpIcon = (props?: KTRawAttr) => {
  const s = _SaveSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SaveSharpIcon = svg(
  svg('path', { d: 'M17 3H3v18h18V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z' }),
  'SaveSharp',
);
export const SaveTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SaveTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SaveTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 5v14h14V7.83L16.17 5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-8H6V6h9z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm2 16H5V5h11.17L19 7.83zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M6 6h9v4H6z',
      },
      '1',
    ),
  ],
  'SaveTwoTone',
);
export const SavedSearchIcon = (props?: KTRawAttr) => {
  const s = _SavedSearchIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SavedSearchIcon = svg(
  svg('path', {
    d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14m-2.17-1.5 2.14-1.53 2.14 1.53-.83-2.46 2.15-1.5h-2.62L9.47 6l-.84 2.54H6l2.14 1.49z',
  }),
  'SavedSearch',
);
export const SavedSearchOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SavedSearchOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SavedSearchOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M14.73 13.31C15.52 12.24 16 10.93 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.43 0 2.74-.48 3.81-1.27L19.59 21 21 19.59zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14',
      },
      '0',
    ),
    svg(
      'path',
      { d: 'M10.29 8.44 9.5 6l-.79 2.44H6.25l2.01 1.59-.77 2.47 2.01-1.53 2.01 1.53-.77-2.47 2.01-1.59z' },
      '1',
    ),
  ],
  'SavedSearchOutlined',
);
export const SavedSearchRoundedIcon = (props?: KTRawAttr) => {
  const s = _SavedSearchRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SavedSearchRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M14.73 13.31c1.13-1.55 1.63-3.58.98-5.74-.68-2.23-2.57-3.98-4.85-4.44-4.65-.93-8.66 3.09-7.72 7.73.46 2.29 2.21 4.18 4.44 4.85 2.16.65 4.19.15 5.74-.98l5.56 5.56c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14',
      },
      '0',
    ),
    svg(
      'path',
      { d: 'M10.29 8.44 9.5 6l-.79 2.44H6.25l2.01 1.59-.77 2.47 2.01-1.53 2.01 1.53-.77-2.47 2.01-1.59z' },
      '1',
    ),
  ],
  'SavedSearchRounded',
);
export const SavedSearchSharpIcon = (props?: KTRawAttr) => {
  const s = _SavedSearchSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SavedSearchSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M14.73 13.31C15.52 12.24 16 10.93 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.43 0 2.74-.48 3.81-1.27L19.59 21 21 19.59zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14',
      },
      '0',
    ),
    svg(
      'path',
      { d: 'M10.29 8.44 9.5 6l-.79 2.44H6.25l2.01 1.59-.77 2.47 2.01-1.53 2.01 1.53-.77-2.47 2.01-1.59z' },
      '1',
    ),
  ],
  'SavedSearchSharp',
);
export const SavedSearchTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SavedSearchTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SavedSearchTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M14.73 13.31C15.52 12.24 16 10.93 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.43 0 2.74-.48 3.81-1.27L19.59 21 21 19.59zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14',
      },
      '0',
    ),
    svg('path', { d: 'm9.5 6-.79 2.44H6.25l2.01 1.59-.77 2.47 2.01-1.53 2.01 1.53-.77-2.47 2.01-1.59h-2.46z' }, '1'),
  ],
  'SavedSearchTwoTone',
);
export const SavingsIcon = (props?: KTRawAttr) => {
  const s = _SavingsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SavingsIcon = svg(
  svg('path', {
    d: 'm19.83 7.5-2.27-2.27c.07-.42.18-.81.32-1.15.08-.18.12-.37.12-.58 0-.83-.67-1.5-1.5-1.5-1.64 0-3.09.79-4 2h-5C4.46 4 2 6.46 2 9.5S4.5 21 4.5 21H10v-2h2v2h5.5l1.68-5.59 2.82-.94V7.5zM13 9H8V7h5zm3 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'Savings',
);
export const SavingsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SavingsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SavingsOutlinedIcon = svg(
  svg('path', {
    d: 'M15 10c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1M8 9h5V7H8zm14-1.5v6.97l-2.82.94L17.5 21H12v-2h-2v2H4.5S2 12.54 2 9.5 4.46 4 7.5 4h5c.91-1.21 2.36-2 4-2 .83 0 1.5.67 1.5 1.5 0 .21-.04.4-.12.58-.14.34-.26.73-.32 1.15l2.27 2.27zm-2 2h-1L15.5 6c0-.65.09-1.29.26-1.91-.97.25-1.76.97-2.09 1.91H7.5C5.57 6 4 7.57 4 9.5c0 1.88 1.22 6.65 2.01 9.5H8v-2h6v2h2.01l1.55-5.15 2.44-.82z',
  }),
  'SavingsOutlined',
);
export const SavingsRoundedIcon = (props?: KTRawAttr) => {
  const s = _SavingsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SavingsRoundedIcon = svg(
  svg('path', {
    d: 'm19.83 7.5-2.27-2.27c.07-.42.18-.81.32-1.15.11-.26.15-.56.09-.87-.13-.72-.83-1.22-1.57-1.21-1.59.03-3 .81-3.9 2h-5C4.46 4 2 6.46 2 9.5c0 2.25 1.37 7.48 2.08 10.04.24.86 1.03 1.46 1.93 1.46H8c1.1 0 2-.9 2-2h2c0 1.1.9 2 2 2h2.01c.88 0 1.66-.58 1.92-1.43l1.25-4.16 2.14-.72c.41-.14.68-.52.68-.95V8.5c0-.55-.45-1-1-1zM12 9H9c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1m4 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'SavingsRounded',
);
export const SavingsSharpIcon = (props?: KTRawAttr) => {
  const s = _SavingsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SavingsSharpIcon = svg(
  svg('path', {
    d: 'm19.83 7.5-2.27-2.27c.07-.42.18-.81.32-1.15.23-.56.56-1.06.97-1.5-.7-.37-1.5-.58-2.35-.58-1.64 0-3.09.79-4 2h-5C4.46 4 2 6.46 2 9.5S4.5 21 4.5 21H10v-2h2v2h5.5l1.68-5.59 2.82-.94V7.5zM13 9H8V7h5zm3 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'SavingsSharp',
);
export const SavingsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SavingsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SavingsTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19 9.5 15.5 6c0-.65.09-1.29.26-1.91-.97.25-1.76.97-2.09 1.91H7.5C5.57 6 4 7.57 4 9.5c0 1.88 1.22 6.65 2.01 9.5H8v-2h6v2h2.01l1.55-5.15 2.44-.82V9.5zM13 9H8V7h5zm3 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M15 10c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1M8 9h5V7H8zm14-1.5v6.97l-2.82.94L17.5 21H12v-2h-2v2H4.5S2 12.54 2 9.5 4.46 4 7.5 4h5c.91-1.21 2.36-2 4-2 .83 0 1.5.67 1.5 1.5 0 .21-.04.4-.12.58-.14.34-.26.73-.32 1.15l2.27 2.27zm-2 2h-1L15.5 6c0-.65.09-1.29.26-1.91-.97.25-1.76.97-2.09 1.91H7.5C5.57 6 4 7.57 4 9.5c0 1.88 1.22 6.65 2.01 9.5H8v-2h6v2h2.01l1.55-5.15 2.44-.82z',
      },
      '1',
    ),
  ],
  'SavingsTwoTone',
);
export const ScaleIcon = (props?: KTRawAttr) => {
  const s = _ScaleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScaleIcon = svg(
  svg('path', {
    d: 'M14 11V8c4.56-.58 8-3.1 8-6H2c0 2.9 3.44 5.42 8 6v3c-3.68.73-8 3.61-8 11h6v-2H4.13c.93-6.83 6.65-7.2 7.87-7.2s6.94.37 7.87 7.2H16v2h6c0-7.39-4.32-10.27-8-11m-2 11c-1.1 0-2-.9-2-2 0-.55.22-1.05.59-1.41C11.39 17.79 16 16 16 16s-1.79 4.61-2.59 5.41c-.36.37-.86.59-1.41.59',
  }),
  'Scale',
);
export const ScaleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ScaleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScaleOutlinedIcon = svg(
  svg('path', {
    d: 'M14 11V8c4.56-.58 8-3.1 8-6H2c0 2.9 3.44 5.42 8 6v3c-3.68.73-8 3.61-8 11h6v-2H4.13c.93-6.83 6.65-7.2 7.87-7.2s6.94.37 7.87 7.2H16v2h6c0-7.39-4.32-10.27-8-11m4.87-7C17.5 5.19 15 6.12 12 6.12S6.5 5.19 5.13 4zM12 22c-1.1 0-2-.9-2-2 0-.55.22-1.05.59-1.41C11.39 17.79 16 16 16 16s-1.79 4.61-2.59 5.41c-.36.37-.86.59-1.41.59',
  }),
  'ScaleOutlined',
);
export const ScaleRoundedIcon = (props?: KTRawAttr) => {
  const s = _ScaleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScaleRoundedIcon = svg(
  svg('path', {
    d: 'M16 21c0 .55.45 1 1 1h3.43c.87 0 1.58-.75 1.5-1.62-.59-6.2-4.53-8.7-7.93-9.38V8c3.31-.42 6.03-1.86 7.27-3.73.65-.97-.12-2.27-1.29-2.27H4.02C2.85 2 2.08 3.3 2.73 4.27 3.97 6.14 6.69 7.58 10 8v3c-3.4.68-7.34 3.18-7.93 9.38-.08.87.63 1.62 1.5 1.62H7c.55 0 1-.45 1-1s-.45-1-1-1H4.13c.93-6.83 6.65-7.2 7.87-7.2s6.94.37 7.87 7.2H17c-.55 0-1 .45-1 1m-4.5.94c-.7-.17-1.27-.74-1.44-1.44-.18-.74.06-1.44.53-1.91.55-.55 2.91-1.57 4.33-2.15.41-.17.82.24.65.65-.58 1.42-1.6 3.78-2.15 4.33-.47.46-1.17.7-1.92.52',
  }),
  'ScaleRounded',
);
export const ScaleSharpIcon = (props?: KTRawAttr) => {
  const s = _ScaleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScaleSharpIcon = svg(
  svg('path', {
    d: 'M14 11V8c4.56-.58 8-3.1 8-6H2c0 2.9 3.44 5.42 8 6v3c-3.68.73-8 3.61-8 11h6v-2H4.13c.93-6.83 6.65-7.2 7.87-7.2s6.94.37 7.87 7.2H16v2h6c0-7.39-4.32-10.27-8-11m-2 11c-1.1 0-2-.9-2-2 0-.55.22-1.05.59-1.41C11.39 17.79 16 16 16 16s-1.79 4.61-2.59 5.41c-.36.37-.86.59-1.41.59',
  }),
  'ScaleSharp',
);
export const ScaleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ScaleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScaleTwoToneIcon = svg(
  [
    svg('path', { d: 'M18.87 4C17.5 5.19 15 6.12 12 6.12S6.5 5.19 5.13 4z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M14 11V8c4.56-.58 8-3.1 8-6H2c0 2.9 3.44 5.42 8 6v3c-3.68.73-8 3.61-8 11h6v-2H4.13c.93-6.83 6.65-7.2 7.87-7.2s6.94.37 7.87 7.2H16v2h6c0-7.39-4.32-10.27-8-11m4.87-7C17.5 5.19 15 6.12 12 6.12S6.5 5.19 5.13 4zM12 22c-1.1 0-2-.9-2-2 0-.55.22-1.05.59-1.41C11.39 17.79 16 16 16 16s-1.79 4.61-2.59 5.41c-.36.37-.86.59-1.41.59',
      },
      '1',
    ),
  ],
  'ScaleTwoTone',
);
export const ScannerIcon = (props?: KTRawAttr) => {
  const s = _ScannerIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScannerIcon = svg(
  svg('path', {
    d: 'M19.8 10.7 4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8M7 17H5v-2h2zm12 0H9v-2h10z',
  }),
  'Scanner',
);
export const ScannerOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ScannerOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScannerOutlinedIcon = svg(
  svg('path', {
    d: 'M19.8 10.7 4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8M19 18H5v-4h14zM6 15h2v2H6zm4 0h8v2h-8z',
  }),
  'ScannerOutlined',
);
export const ScannerRoundedIcon = (props?: KTRawAttr) => {
  const s = _ScannerRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScannerRoundedIcon = svg(
  svg('path', {
    d: 'M19.8 10.7 5.15 5.35c-.52-.19-1.1.08-1.3.6-.19.53.08 1.11.6 1.3L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8M7 17H5v-2h2zm11 0h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1',
  }),
  'ScannerRounded',
);
export const ScannerSharpIcon = (props?: KTRawAttr) => {
  const s = _ScannerSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScannerSharpIcon = svg(
  svg('path', { d: 'm4.2 5-.7 1.9L17.6 12H3v8h18v-8.86zM7 17H5v-2h2zm12 0H9v-2h10z' }),
  'ScannerSharp',
);
export const ScannerTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ScannerTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScannerTwoToneIcon = svg(
  [
    svg('path', { d: 'M5 14v4h14v-4zm3 3H6v-2h2zm10 0h-8v-2h8z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M19.8 10.7 4.2 5l-.7 1.9L17.6 12H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5.5c0-.8-.5-1.6-1.2-1.8M19 18H5v-4h14zM6 15h2v2H6zm4 0h8v2h-8z',
      },
      '1',
    ),
  ],
  'ScannerTwoTone',
);
export const ScatterPlotIcon = (props?: KTRawAttr) => {
  const s = _ScatterPlotIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScatterPlotIcon = svg(
  [
    svg('circle', { cx: '7', cy: '14', r: '3' }, '0'),
    svg('circle', { cx: '11', cy: '6', r: '3' }, '1'),
    svg('circle', { cx: '16.6', cy: '17.6', r: '3' }, '2'),
  ],
  'ScatterPlot',
);
export const ScatterPlotOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ScatterPlotOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScatterPlotOutlinedIcon = svg(
  svg('path', {
    d: 'M7 18c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m4-2c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m5.6 17.6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2',
  }),
  'ScatterPlotOutlined',
);
export const ScatterPlotRoundedIcon = (props?: KTRawAttr) => {
  const s = _ScatterPlotRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScatterPlotRoundedIcon = svg(
  [
    svg('circle', { cx: '7', cy: '14', r: '3' }, '0'),
    svg('circle', { cx: '11', cy: '6', r: '3' }, '1'),
    svg('circle', { cx: '16.6', cy: '17.6', r: '3' }, '2'),
  ],
  'ScatterPlotRounded',
);
export const ScatterPlotSharpIcon = (props?: KTRawAttr) => {
  const s = _ScatterPlotSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScatterPlotSharpIcon = svg(
  [
    svg('circle', { cx: '7', cy: '14', r: '3' }, '0'),
    svg('circle', { cx: '11', cy: '6', r: '3' }, '1'),
    svg('circle', { cx: '16.6', cy: '17.6', r: '3' }, '2'),
  ],
  'ScatterPlotSharp',
);
export const ScatterPlotTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ScatterPlotTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScatterPlotTwoToneIcon = svg(
  [
    svg('circle', { cx: '11', cy: '6', r: '2', opacity: '.3' }, '0'),
    svg('circle', { cx: '16.6', cy: '17.6', r: '2', opacity: '.3' }, '1'),
    svg('circle', { cx: '7', cy: '14', r: '2', opacity: '.3' }, '2'),
    svg(
      'path',
      {
        d: 'M7 10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m8-10c0-2.21-1.79-4-4-4S7 3.79 7 6s1.79 4 4 4 4-1.79 4-4m-4 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m5.6 5.6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
      },
      '3',
    ),
  ],
  'ScatterPlotTwoTone',
);
export const ScheduleIcon = (props?: KTRawAttr) => {
  const s = _ScheduleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScheduleIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
      },
      '0',
    ),
    svg('path', { d: 'M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z' }, '1'),
  ],
  'Schedule',
);
export const ScheduleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ScheduleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScheduleOutlinedIcon = svg(
  svg('path', {
    d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z',
  }),
  'ScheduleOutlined',
);
export const ScheduleRoundedIcon = (props?: KTRawAttr) => {
  const s = _ScheduleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScheduleRoundedIcon = svg(
  svg('path', {
    d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72',
  }),
  'ScheduleRounded',
);
export const ScheduleSendIcon = (props?: KTRawAttr) => {
  const s = _ScheduleSendIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScheduleSendIcon = svg(
  svg('path', {
    d: 'M16.5 12.5H15v4l3 2 .75-1.23-2.25-1.52zM16 9 2 3v7l9 2-9 2v7l7.27-3.11C10.09 20.83 12.79 23 16 23c3.86 0 7-3.14 7-7s-3.14-7-7-7m0 12c-2.75 0-4.98-2.22-5-4.97v-.07c.02-2.74 2.25-4.97 5-4.97 2.76 0 5 2.24 5 5S18.76 21 16 21',
  }),
  'ScheduleSend',
);
export const ScheduleSendOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ScheduleSendOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScheduleSendOutlinedIcon = svg(
  [
    svg(
      'path',
      { d: 'M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85z' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm11 12-6-1.5V7.01l8.87 3.74c.94-.47 2-.75 3.13-.75.1 0 .19.01.28.01L3 4v16l7-2.95V17c0-.8.14-1.56.39-2.28L5 16.99V13.5z',
      },
      '1',
    ),
  ],
  'ScheduleSendOutlined',
);
export const ScheduleSendRoundedIcon = (props?: KTRawAttr) => {
  const s = _ScheduleSendRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScheduleSendRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M17 10c.1 0 .19.01.28.01L4.39 4.58C3.73 4.31 3 4.79 3 5.51v3.71c0 .46.31.86.76.97L11 12l-7.24 1.81c-.45.11-.76.51-.76.97v3.71c0 .72.73 1.2 1.39.92L10 17.05V17c0-3.86 3.14-7 7-7',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.29 7-1.65-1.65c-.09-.09-.15-.22-.15-.35v-2.5c0-.28.22-.5.5-.5s.5.22.5.5v2.29l1.5 1.5c.2.2.2.51 0 .71-.19.2-.5.2-.7 0',
      },
      '1',
    ),
  ],
  'ScheduleSendRounded',
);
export const ScheduleSendSharpIcon = (props?: KTRawAttr) => {
  const s = _ScheduleSendSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScheduleSendSharpIcon = svg(
  [
    svg('path', { d: 'M17 10c.1 0 .19.01.28.01L3 4v6l8 2-8 2v6l7-2.95V17c0-3.86 3.14-7 7-7' }, '0'),
    svg(
      'path',
      { d: 'M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85z' },
      '1',
    ),
  ],
  'ScheduleSendSharp',
);
export const ScheduleSendTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ScheduleSendTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScheduleSendTwoToneIcon = svg(
  [
    svg('path', { d: 'm5 10.5 6 1.5-6 1.5v3.49l5.39-2.27c.6-1.73 1.86-3.16 3.48-3.97L5 7.01z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'm11 12-6-1.5V7.01l8.87 3.74c.94-.47 2-.75 3.13-.75.1 0 .19.01.28.01L3 4v16l7-2.95V17c0-.8.14-1.56.39-2.28L5 16.99V13.5z',
      },
      '1',
    ),
    svg(
      'path',
      { d: 'M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85z' },
      '2',
    ),
  ],
  'ScheduleSendTwoTone',
);
export const ScheduleSharpIcon = (props?: KTRawAttr) => {
  const s = _ScheduleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScheduleSharpIcon = svg(
  svg('path', {
    d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z',
  }),
  'ScheduleSharp',
);
export const ScheduleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ScheduleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScheduleTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m4.25 12.15L11 13V7h1.5v5.25l4.5 2.67z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z',
      },
      '1',
    ),
  ],
  'ScheduleTwoTone',
);
export const SchemaIcon = (props?: KTRawAttr) => {
  const s = _SchemaIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SchemaIcon = svg(
  svg('path', { d: 'M14 9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9z' }),
  'Schema',
);
export const SchemaOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SchemaOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SchemaOutlinedIcon = svg(
  svg('path', {
    d: 'M14 9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9zM6 3h3v2H6zm3 18H6v-2h3zm0-8H6v-2h3zm10 0h-3v-2h3z',
  }),
  'SchemaOutlined',
);
export const SchemaRoundedIcon = (props?: KTRawAttr) => {
  const s = _SchemaRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SchemaRoundedIcon = svg(
  svg('path', {
    d: 'M14 10.5v.5h-3v-.5c0-.83-.67-1.5-1.5-1.5h-1V7h1c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-4C4.67 1 4 1.67 4 2.5v3C4 6.33 4.67 7 5.5 7h1v2h-1C4.67 9 4 9.67 4 10.5v3c0 .83.67 1.5 1.5 1.5h1v2h-1c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-1v-2h1c.83 0 1.5-.67 1.5-1.5V13h3v.5c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-4c-.83 0-1.5.67-1.5 1.5',
  }),
  'SchemaRounded',
);
export const SchemaSharpIcon = (props?: KTRawAttr) => {
  const s = _SchemaSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SchemaSharpIcon = svg(
  svg('path', { d: 'M14 9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9z' }),
  'SchemaSharp',
);
export const SchemaTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SchemaTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SchemaTwoToneIcon = svg(
  [
    svg('path', { d: 'M6 3h3v2H6zm3 18H6v-2h3zm0-8H6v-2h3zm10 0h-3v-2h3z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M14 9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9zM6 3h3v2H6zm3 18H6v-2h3zm0-8H6v-2h3zm10 0h-3v-2h3z',
      },
      '1',
    ),
  ],
  'SchemaTwoTone',
);
export const SchoolIcon = (props?: KTRawAttr) => {
  const s = _SchoolIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SchoolIcon = svg(
  svg('path', { d: 'M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z' }),
  'School',
);
export const SchoolOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SchoolOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SchoolOutlinedIcon = svg(
  svg('path', {
    d: 'M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72 5.18 9 12 5.28zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73z',
  }),
  'SchoolOutlined',
);
export const SchoolRoundedIcon = (props?: KTRawAttr) => {
  const s = _SchoolRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SchoolRoundedIcon = svg(
  svg('path', {
    d: 'M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0zm6.04-9.66-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19a2.04 2.04 0 0 0-1.92 0',
  }),
  'SchoolRounded',
);
export const SchoolSharpIcon = (props?: KTRawAttr) => {
  const s = _SchoolSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SchoolSharpIcon = svg(
  svg('path', { d: 'M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z' }),
  'SchoolSharp',
);
export const SchoolTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SchoolTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SchoolTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 12.27v3.72l5 2.73 5-2.73v-3.72L12 15zM5.18 9 12 12.72 18.82 9 12 5.28z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm5 12.99-5 2.73-5-2.73v-3.72L12 15l5-2.73zm-5-3.27L5.18 9 12 5.28 18.82 9z',
      },
      '1',
    ),
  ],
  'SchoolTwoTone',
);
export const ScienceIcon = (props?: KTRawAttr) => {
  const s = _ScienceIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScienceIcon = svg(
  svg('path', {
    d: 'M19.8 18.4 14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6',
  }),
  'Science',
);
export const ScienceOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ScienceOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScienceOutlinedIcon = svg(
  svg('path', {
    d: 'M13 11.33 18 18H6l5-6.67V6h2m2.96-2H8.04c-.42 0-.65.48-.39.81L9 6.5v4.17L3.2 18.4c-.49.66-.02 1.6.8 1.6h16c.82 0 1.29-.94.8-1.6L15 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81',
  }),
  'ScienceOutlined',
);
export const ScienceRoundedIcon = (props?: KTRawAttr) => {
  const s = _ScienceRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScienceRoundedIcon = svg(
  svg('path', {
    d: 'M20.54 17.73 15 11V5h1c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1h1v6l-5.54 6.73c-.32.39-.46.83-.46 1.27.01 1.03.82 2 2 2h14c1.19 0 2-.97 2-2 0-.44-.14-.88-.46-1.27',
  }),
  'ScienceRounded',
);
export const ScienceSharpIcon = (props?: KTRawAttr) => {
  const s = _ScienceSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScienceSharpIcon = svg(
  svg('path', {
    d: 'M19.8 18.4 14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6',
  }),
  'ScienceSharp',
);
export const ScienceTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ScienceTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScienceTwoToneIcon = svg(
  [
    svg('path', { d: 'M13 6h-2v5.33L6 18h12l-5-6.67z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M20.8 18.4 15 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H8.04c-.42 0-.65.48-.39.81L9 6.5v4.17L3.2 18.4c-.49.66-.02 1.6.8 1.6h16c.82 0 1.29-.94.8-1.6M6 18l5-6.67V6h2v5.33L18 18z',
      },
      '1',
    ),
  ],
  'ScienceTwoTone',
);
export const ScoreIcon = (props?: KTRawAttr) => {
  const s = _ScoreIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScoreIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 2h1.5v3l2-3h1.7l-2 3 2 3h-1.7l-2-3v3H12zM7 7.25h2.5V6.5H7V5h4v3.75H8.5v.75H11V11H7zM19 13l-6 6-4-4-4 4v-2.5l4-4 4 4 6-6z',
  }),
  'Score',
);
export const ScoreOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ScoreOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScoreOutlinedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5l4-4 4 4 6-6zm0-8.5-6 6-4-4-4 4V5h14zM13.5 9V6H12v6h1.5zm3.7 3-2-3 2-3h-1.7l-2 3 2 3zM11 10.5H8.5v-.75H11V6H7v1.5h2.5v.75H7V12h4z',
  }),
  'ScoreOutlined',
);
export const ScoreRoundedIcon = (props?: KTRawAttr) => {
  const s = _ScoreRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScoreRoundedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 2.75c0-.41.34-.75.75-.75s.75.34.75.75V8l1.79-2.69c.13-.19.35-.31.59-.31.56 0 .9.63.59 1.1L15.2 8l1.27 1.9c.31.47-.02 1.1-.59 1.1-.24 0-.46-.12-.59-.31L13.5 8v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75zm-5 2.5c0-.55.45-1 1-1h1.5V6.5H7.75c-.41 0-.75-.34-.75-.75S7.34 5 7.75 5H10c.55 0 1 .45 1 1v1.75c0 .55-.45 1-1 1H8.5v.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.55 0-1-.45-1-1zm11.74 5.01-5.03 5.03c-.39.39-1.02.39-1.41 0L9 15l-2.49 2.49c-.56.56-1.51.16-1.51-.62 0-.23.09-.46.26-.62l3.03-3.03c.39-.39 1.02-.39 1.41 0L13 16.5l4.49-4.49c.56-.56 1.51-.16 1.51.62 0 .24-.09.46-.26.63',
  }),
  'ScoreRounded',
);
export const ScoreSharpIcon = (props?: KTRawAttr) => {
  const s = _ScoreSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScoreSharpIcon = svg(
  svg('path', {
    d: 'M21 3H3v18h18zm-9 2h1.5v3l2-3h1.7l-2 3 2 3h-1.7l-2-3v3H12zM7 7.25h2.5V6.5H7V5h4v3.75H8.5v.75H11V11H7zM19 13l-6 6-4-4-4 4v-2.5l4-4 4 4 6-6z',
  }),
  'ScoreSharp',
);
export const ScoreTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ScoreTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScoreTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 19h8l-4-4zm0-2.5 4-4 4 4 6-6V5H5zM12 6h1.5v3l2-3h1.7l-2 3 2 3h-1.7l-2-3v3H12zM7 8.25h2.5V7.5H7V6h4v3.75H8.5v.75H11V12H7zM19 19v-6l-6 6z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5l4-4 4 4 6-6zm0-8.5-6 6-4-4-4 4V5h14zM13.5 9V6H12v6h1.5zm3.7 3-2-3 2-3h-1.7l-2 3 2 3zM11 10.5H8.5v-.75H11V6H7v1.5h2.5v.75H7V12h4z',
      },
      '1',
    ),
  ],
  'ScoreTwoTone',
);
export const ScoreboardIcon = (props?: KTRawAttr) => {
  const s = _ScoreboardIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScoreboardIcon = svg(
  svg('path', {
    d: 'M17.5 13.5H16v-3h1.5zM20 4h-3V2h-2v2H9V2H7v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M9.5 11.5c0 .55-.45 1-1 1h-2v1h3V15H5v-2.5c0-.55.45-1 1-1h2v-1H5V9h3.5c.55 0 1 .45 1 1zm3.25 6.5h-1.5v-1.5h1.5zm0-3.5h-1.5V13h1.5zm0-3.5h-1.5V9.5h1.5zm0-3.5h-1.5V6h1.5zM19 14c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H18c.55 0 1 .45 1 1z',
  }),
  'Scoreboard',
);
export const ScoreboardOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ScoreboardOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScoreboardOutlinedIcon = svg(
  svg('path', {
    d: 'M18 9h-2.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1H18c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-.5 4.5H16v-3h1.5zm-8 1.5H5v-2.5c0-.55.45-1 1-1h2v-1H5V9h3.5c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1h-2v1h3zm3.25-4h-1.5V9.5h1.5zm0 3.5h-1.5V13h1.5zM22 6v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3V2h2v2h6V2h2v2h3c1.1 0 2 .9 2 2m-2 12V6h-7.25v1.5h-1.5V6H4v12h7.25v-1.5h1.5V18z',
  }),
  'ScoreboardOutlined',
);
export const ScoreboardRoundedIcon = (props?: KTRawAttr) => {
  const s = _ScoreboardRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScoreboardRoundedIcon = svg(
  svg('path', {
    d: 'M17.5 13.5H16v-3h1.5zM16 2c-.55 0-1 .45-1 1v1H9V3c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3V3c0-.55-.45-1-1-1M9.5 14.25c0 .41-.34.75-.75.75H6c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2v-1H5.75c-.41 0-.75-.34-.75-.75S5.34 9 5.75 9H8.5c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1h-2v1h2.25c.41 0 .75.34.75.75M19 14c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H18c.55 0 1 .45 1 1zm-6.25-7.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75S11.59 6 12 6s.75.34.75.75m0 3.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75m0 3.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75m0 3.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75',
  }),
  'ScoreboardRounded',
);
export const ScoreboardSharpIcon = (props?: KTRawAttr) => {
  const s = _ScoreboardSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScoreboardSharpIcon = svg(
  svg('path', {
    d: 'M17.5 13.5H16v-3h1.5zM22 4h-5V2h-2v2H9V2H7v2H2v16h20zM9.5 12.5h-3v1h3V15H5v-3.5h3v-1H5V9h4.5zm3.25 5.5h-1.5v-1.5h1.5zm0-3.5h-1.5V13h1.5zm0-3.5h-1.5V9.5h1.5zm0-3.5h-1.5V6h1.5zM19 9v6h-4.5V9z',
  }),
  'ScoreboardSharp',
);
export const ScoreboardTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ScoreboardTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScoreboardTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M17.5 13.5H16v-3h1.5zM12.75 6v1.5h-1.5V6H4v12h7.25v-1.5h1.5V18H20V6zM9.5 11.5c0 .55-.45 1-1 1h-2v1h3V15H5v-2.5c0-.55.45-1 1-1h2v-1H5V9h3.5c.55 0 1 .45 1 1zm3.25 3h-1.5V13h1.5zm0-3.5h-1.5V9.5h1.5zM19 14c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H18c.55 0 1 .45 1 1z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M18 9h-2.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1H18c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-.5 4.5H16v-3h1.5zm-8 1.5H5v-2.5c0-.55.45-1 1-1h2v-1H5V9h3.5c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1h-2v1h3zm3.25-4h-1.5V9.5h1.5zm0 3.5h-1.5V13h1.5zM22 6v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3V2h2v2h6V2h2v2h3c1.1 0 2 .9 2 2m-2 12V6h-7.25v1.5h-1.5V6H4v12h7.25v-1.5h1.5V18z',
      },
      '1',
    ),
  ],
  'ScoreboardTwoTone',
);
export const ScreenLockLandscapeIcon = (props?: KTRawAttr) => {
  const s = _ScreenLockLandscapeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenLockLandscapeIcon = svg(
  svg('path', {
    d: 'M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-2 12H5V7h14zm-9-1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m.8-6c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v1h-2.4z',
  }),
  'ScreenLockLandscape',
);
export const ScreenLockLandscapeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ScreenLockLandscapeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenLockLandscapeOutlinedIcon = svg(
  svg('path', {
    d: 'M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-2 12H5V7h14zm-9-1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m.8-6c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v1h-2.4z',
  }),
  'ScreenLockLandscapeOutlined',
);
export const ScreenLockLandscapeRoundedIcon = (props?: KTRawAttr) => {
  const s = _ScreenLockLandscapeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenLockLandscapeRoundedIcon = svg(
  svg('path', {
    d: 'M21 5H3c-1.1 0-1.99.9-1.99 2L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-3 12H6V7h12zm-4-6v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1z',
  }),
  'ScreenLockLandscapeRounded',
);
export const ScreenLockLandscapeSharpIcon = (props?: KTRawAttr) => {
  const s = _ScreenLockLandscapeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenLockLandscapeSharpIcon = svg(
  svg('path', {
    d: 'M23 5H1v14h22zm-4 12H5V7h14zM9 16h6v-5h-1v-.9c0-1-.69-1.92-1.68-2.08C11.07 7.83 10 8.79 10 10v1H9zm1.8-6c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v1h-2.4z',
  }),
  'ScreenLockLandscapeSharp',
);
export const ScreenLockLandscapeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ScreenLockLandscapeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenLockLandscapeTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M13.2 10c0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2 1.2v1h2.4zM5 17h14V7H5zm4-5c0-.55.45-1 1-1v-1c0-1.1.89-2 2-2 1.1 0 2 .89 2 2v1c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M10 16h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m.8-6c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v1h-2.4zM21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-2 12H5V7h14z',
      },
      '1',
    ),
  ],
  'ScreenLockLandscapeTwoTone',
);
export const ScreenLockPortraitIcon = (props?: KTRawAttr) => {
  const s = _ScreenLockPortraitIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenLockPortraitIcon = svg(
  svg('path', {
    d: 'M10 16h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m.8-6c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v1h-2.4zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 18H7V5h10z',
  }),
  'ScreenLockPortrait',
);
export const ScreenLockPortraitOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ScreenLockPortraitOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenLockPortraitOutlinedIcon = svg(
  svg('path', {
    d: 'M10 16h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m.8-6c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v1h-2.4zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 18H7V5h10z',
  }),
  'ScreenLockPortraitOutlined',
);
export const ScreenLockPortraitRoundedIcon = (props?: KTRawAttr) => {
  const s = _ScreenLockPortraitRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenLockPortraitRoundedIcon = svg(
  [
    svg(
      'path',
      { d: 'M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 1.99 2 1.99L17 23c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 17H7V6h10z' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M14 11v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1z',
      },
      '1',
    ),
  ],
  'ScreenLockPortraitRounded',
);
export const ScreenLockPortraitSharpIcon = (props?: KTRawAttr) => {
  const s = _ScreenLockPortraitSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenLockPortraitSharpIcon = svg(
  svg('path', {
    d: 'M9 16h6v-5h-1v-.9c0-1-.69-1.92-1.68-2.08C11.07 7.83 10 8.79 10 10v1H9zm1.8-6c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v1h-2.4zM19 1H5v22h14zm-2 18H7V5h10z',
  }),
  'ScreenLockPortraitSharp',
);
export const ScreenLockPortraitTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ScreenLockPortraitTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenLockPortraitTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M13.2 10c0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2 1.2v1h2.4zM7 19h10V5H7zm2-7c0-.55.45-1 1-1v-1c0-1.1.89-2 2-2 1.1 0 2 .89 2 2v1c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M10 16h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m.8-6c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v1h-2.4zM17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 18H7V5h10z',
      },
      '1',
    ),
  ],
  'ScreenLockPortraitTwoTone',
);
export const ScreenLockRotationIcon = (props?: KTRawAttr) => {
  const s = _ScreenLockRotationIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenLockRotationIcon = svg(
  svg('path', {
    d: 'm23.25 12.77-2.57-2.57-1.41 1.41 2.22 2.22-5.66 5.66L4.51 8.17l5.66-5.66 2.1 2.1 1.41-1.41L11.23.75c-.59-.59-1.54-.59-2.12 0L2.75 7.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12M8.47 20.48C5.2 18.94 2.86 15.76 2.5 12H1c.51 6.16 5.66 11 11.95 11l.66-.03-3.81-3.82zM16 9h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1v-.5C21 1.12 19.88 0 18.5 0S16 1.12 16 2.5V3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.8-6.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V3h-3.4z',
  }),
  'ScreenLockRotation',
);
export const ScreenLockRotationOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ScreenLockRotationOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenLockRotationOutlinedIcon = svg(
  svg('path', {
    d: 'm22.3 13.77-2.57-2.57-1.41 1.41 2.22 2.22-5.66 5.66L3.56 9.17l5.66-5.66 2.1 2.1 1.41-1.41-2.45-2.45c-.59-.59-1.54-.59-2.12 0L1.8 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.82zM15.05 10h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1v-.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.8-6.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4h-3.4z',
  }),
  'ScreenLockRotationOutlined',
);
export const ScreenLockRotationRoundedIcon = (props?: KTRawAttr) => {
  const s = _ScreenLockRotationRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenLockRotationRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm20.41 11.36-.35-.35a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l.35.35-4.24 4.24-7.78-7.78 4.24-4.24.35.35c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-.35-.36c-.79-.79-2.03-.79-2.82 0L5.57 7.82c-.78.78-.78 2.05 0 2.83l7.78 7.78c.79.79 2.03.79 2.82 0l4.24-4.24c.79-.78.79-2.05 0-2.83m-9.56 6.49c-.31-.31-.85-.09-.85.36v1.53c-3.17-.82-5.59-3.54-5.95-6.86-.06-.51-.49-.88-.99-.88-.6 0-1.07.53-1 1.12C2.62 18.11 6.87 22 12 22c.59 0 1.17-.06 1.73-.16.4-.07.55-.56.27-.85z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M16 9h4c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1v-.89c0-1-.68-1.92-1.66-2.08C17.08.82 16 1.79 16 3v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1m1-6c0-.55.45-1 1-1s1 .45 1 1v1h-2z',
      },
      '1',
    ),
  ],
  'ScreenLockRotationRounded',
);
export const ScreenLockRotationSharpIcon = (props?: KTRawAttr) => {
  const s = _ScreenLockRotationSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenLockRotationSharpIcon = svg(
  svg('path', {
    d: 'M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.82zM20.05 4v-.36c0-1.31-.94-2.5-2.24-2.63-1.5-.15-2.76 1.02-2.76 2.49V4h-1v6h7V4zm-.8 0h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7zm.48 7.2-1.41 1.41 2.22 2.22-5.66 5.66L3.56 9.17l5.66-5.66 2.1 2.1 1.41-1.41L9.22.69.74 9.17l14.14 14.14 8.48-8.48z',
  }),
  'ScreenLockRotationSharp',
);
export const ScreenLockRotationTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ScreenLockRotationTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenLockRotationTwoToneIcon = svg(
  svg('path', {
    d: 'm22.3 13.77-2.57-2.57-1.41 1.41 2.22 2.22-5.66 5.66L3.56 9.17l5.66-5.66 2.1 2.1 1.41-1.41-2.45-2.45c-.59-.59-1.54-.59-2.12 0L1.8 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.82zM15.05 10h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1v-.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.8-6.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4h-3.4z',
  }),
  'ScreenLockRotationTwoTone',
);
export const ScreenRotationIcon = (props?: KTRawAttr) => {
  const s = _ScreenRotationIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenRotationIcon = svg(
  svg('path', {
    d: 'M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81z',
  }),
  'ScreenRotation',
);
export const ScreenRotationAltIcon = (props?: KTRawAttr) => {
  const s = _ScreenRotationAltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenRotationAltIcon = svg(
  svg('path', {
    d: 'm4 7.59 5-5c.78-.78 2.05-.78 2.83 0L20.24 11h-2.83L10.4 4 5.41 9H8v2H2V5h2zM20 19h2v-6h-6v2h2.59l-4.99 5-7.01-7H3.76l8.41 8.41c.78.78 2.05.78 2.83 0l5-5z',
  }),
  'ScreenRotationAlt',
);
export const ScreenRotationAltOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ScreenRotationAltOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenRotationAltOutlinedIcon = svg(
  svg('path', {
    d: 'm4 7.59 5-5c.78-.78 2.05-.78 2.83 0L20.24 11h-2.83L10.4 4 5.41 9H8v2H2V5h2zM20 19h2v-6h-6v2h2.59l-4.99 5-7.01-7H3.76l8.41 8.41c.78.78 2.05.78 2.83 0l5-5z',
  }),
  'ScreenRotationAltOutlined',
);
export const ScreenRotationAltRoundedIcon = (props?: KTRawAttr) => {
  const s = _ScreenRotationAltRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenRotationAltRoundedIcon = svg(
  svg('path', {
    d: 'M18.53 9.29c.63.63.18 1.71-.71 1.71-.27 0-.52-.11-.71-.29L10.4 4 5.41 9H7c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v1.59l5-5c.78-.78 2.05-.78 2.83 0zM5.47 14.71c-.63-.63-.18-1.71.71-1.71.27 0 .52.11.71.29L13.6 20l4.99-5H17c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-1.59l-5 5c-.78.78-2.05.78-2.83 0z',
  }),
  'ScreenRotationAltRounded',
);
export const ScreenRotationAltSharpIcon = (props?: KTRawAttr) => {
  const s = _ScreenRotationAltSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenRotationAltSharpIcon = svg(
  svg('path', {
    d: 'm4 7.59 6.41-6.41L20.24 11h-2.83L10.4 4 5.41 9H8v2H2V5h2zM20 19h2v-6h-6v2h2.59l-4.99 5-7.01-7H3.76l9.83 9.83L20 16.41z',
  }),
  'ScreenRotationAltSharp',
);
export const ScreenRotationAltTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ScreenRotationAltTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenRotationAltTwoToneIcon = svg(
  svg('path', {
    d: 'm4 7.59 5-5c.78-.78 2.05-.78 2.83 0L20.24 11h-2.83L10.4 4 5.41 9H8v2H2V5h2zM20 19h2v-6h-6v2h2.59l-4.99 5-7.01-7H3.76l8.41 8.41c.78.78 2.05.78 2.83 0l5-5z',
  }),
  'ScreenRotationAltTwoTone',
);
export const ScreenRotationOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ScreenRotationOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenRotationOutlinedIcon = svg(
  svg('path', {
    d: 'M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81z',
  }),
  'ScreenRotationOutlined',
);
export const ScreenRotationRoundedIcon = (props?: KTRawAttr) => {
  const s = _ScreenRotationRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenRotationRoundedIcon = svg(
  svg('path', {
    d: 'M10.23 1.75c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zm3.89 18.73L3.52 9.88a.996.996 0 0 1 0-1.41l4.95-4.95c.39-.39 1.02-.39 1.41 0l10.61 10.61c.39.39.39 1.02 0 1.41l-4.95 4.95c-.39.38-1.03.38-1.42-.01M17.61 1.4C16.04.57 14.06-.03 11.81.02c-.18 0-.26.22-.14.35l3.48 3.48 1.33-1.33c3.09 1.46 5.34 4.37 5.89 7.86.06.41.44.69.86.62.41-.06.69-.45.62-.86-.6-3.8-2.96-7-6.24-8.74M8.85 20.16l-1.33 1.33c-3.09-1.46-5.34-4.37-5.89-7.86-.06-.41-.44-.69-.86-.62-.41.06-.69.45-.62.86.6 3.81 2.96 7.01 6.24 8.75 1.57.83 3.55 1.43 5.8 1.38.18 0 .26-.22.14-.35z',
  }),
  'ScreenRotationRounded',
);
export const ScreenRotationSharpIcon = (props?: KTRawAttr) => {
  const s = _ScreenRotationSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenRotationSharpIcon = svg(
  svg('path', {
    d: 'M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81zM7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81zM9.17.69.69 9.17l14.14 14.14 8.48-8.48zm5.66 20.5L2.81 9.17l6.36-6.36 12.02 12.02z',
  }),
  'ScreenRotationSharp',
);
export const ScreenRotationTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ScreenRotationTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenRotationTwoToneIcon = svg(
  [
    svg('path', { d: 'M14.828 21.192 2.808 9.172l6.357-6.357 12.02 12.02z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81z',
      },
      '1',
    ),
  ],
  'ScreenRotationTwoTone',
);
export const ScreenSearchDesktopIcon = (props?: KTRawAttr) => {
  const s = _ScreenSearchDesktopIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenSearchDesktopIcon = svg(
  svg('path', {
    d: 'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2zM4 16V6h16v10.01zm5.0967-6.0469c0-1.027.836-1.864 1.864-1.864 1.027 0 1.864.837 1.864 1.864s-.837 1.864-1.864 1.864c-1.028 0-1.864-.837-1.864-1.864m7.032 4.236-2.482-2.482c.331-.505.527-1.107.527-1.754 0-1.772-1.441-3.213-3.213-3.213s-3.214 1.441-3.214 3.213 1.442 3.214 3.214 3.214c.636 0 1.225-.192 1.724-.511l2.489 2.488z',
  }),
  'ScreenSearchDesktop',
);
export const ScreenSearchDesktopOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ScreenSearchDesktopOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenSearchDesktopOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M4 18h16c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2M4 5h16v11H4zM1 19h22v2H1z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M13.97 7.53c-1.37-1.37-3.58-1.37-4.95 0s-1.37 3.58 0 4.95c1.18 1.18 3 1.34 4.36.47l2.09 2.09 1.06-1.06-2.09-2.09c.87-1.36.72-3.18-.47-4.36m-1.06 3.88c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83 2.05-.78 2.83 0c.78.79.78 2.05 0 2.83',
      },
      '1',
    ),
  ],
  'ScreenSearchDesktopOutlined',
);
export const ScreenSearchDesktopRoundedIcon = (props?: KTRawAttr) => {
  const s = _ScreenSearchDesktopRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenSearchDesktopRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M22 19H2c-.55 0-1 .45-1 1s.45 1 1 1h20c.55 0 1-.45 1-1s-.45-1-1-1M4 18h16c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2m4.59-9.95c1.28-1.87 3.86-2.05 5.38-.52 1.18 1.18 1.34 3 .47 4.36L16 13.44c.29.29.29.77 0 1.06s-.77.29-1.06 0l-1.55-1.55c-1.57 1-3.76.64-4.87-1.11-.73-1.14-.69-2.67.07-3.79',
      },
      '0',
    ),
    svg('circle', { cx: '11.5', cy: '10', r: '2' }, '1'),
  ],
  'ScreenSearchDesktopRounded',
);
export const ScreenSearchDesktopSharpIcon = (props?: KTRawAttr) => {
  const s = _ScreenSearchDesktopSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenSearchDesktopSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M1 19h22v2H1zM22 3H2v15h19.99zm-6.53 12.03-2.09-2.09c-1.35.87-3.17.71-4.36-.47-1.37-1.37-1.37-3.58 0-4.95s3.58-1.37 4.95 0c1.18 1.18 1.34 3 .47 4.36l2.09 2.09z',
      },
      '0',
    ),
    svg('circle', { cx: '11.5', cy: '10', r: '2' }, '1'),
  ],
  'ScreenSearchDesktopSharp',
);
export const ScreenSearchDesktopTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ScreenSearchDesktopTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenSearchDesktopTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20 5H4v11h16zm-4.53 10.03-2.09-2.09c-1.35.87-3.17.71-4.36-.47-1.37-1.37-1.37-3.58 0-4.95s3.58-1.37 4.95 0c1.18 1.18 1.34 3 .47 4.36l2.09 2.09z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M4 18h16c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2M4 5h16v11H4zM1 19h22v2H1z',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M13.97 7.53c-1.37-1.37-3.58-1.37-4.95 0s-1.37 3.58 0 4.95c1.18 1.18 3 1.34 4.36.47l2.09 2.09 1.06-1.06-2.09-2.09c.87-1.36.72-3.18-.47-4.36m-1.06 3.88c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83 2.05-.78 2.83 0c.78.79.78 2.05 0 2.83',
      },
      '2',
    ),
  ],
  'ScreenSearchDesktopTwoTone',
);
export const ScreenShareIcon = (props?: KTRawAttr) => {
  const s = _ScreenShareIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenShareIcon = svg(
  svg('path', {
    d: 'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73z',
  }),
  'ScreenShare',
);
export const ScreenShareOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ScreenShareOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenShareOutlinedIcon = svg(
  svg('path', {
    d: 'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2zM4 16V6h16v10.01zm9-6.87c-3.89.54-5.44 3.2-6 5.87 1.39-1.87 3.22-2.72 6-2.72v2.19l4-3.74L13 7z',
  }),
  'ScreenShareOutlined',
);
export const ScreenShareRoundedIcon = (props?: KTRawAttr) => {
  const s = _ScreenShareRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenShareRoundedIcon = svg(
  svg('path', {
    d: 'M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.89 2 2 2H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l3.61 3.36c.21.2.21.53 0 .73z',
  }),
  'ScreenShareRounded',
);
export const ScreenShareSharpIcon = (props?: KTRawAttr) => {
  const s = _ScreenShareSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenShareSharpIcon = svg(
  svg('path', {
    d: 'm20 18 2-2V4H2v12l2 2H0v2h24v-2zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73z',
  }),
  'ScreenShareSharp',
);
export const ScreenShareTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ScreenShareTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenShareTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M20 16V6H4v10.01zm-7-1.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2zM4 16V6h16v10.01zm9-6.87c-3.89.54-5.44 3.2-6 5.87 1.39-1.87 3.22-2.72 6-2.72v2.19l4-3.74L13 7z',
      },
      '1',
    ),
  ],
  'ScreenShareTwoTone',
);
export const ScreenshotIcon = (props?: KTRawAttr) => {
  const s = _ScreenshotIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenshotIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 18H7V6h10zM9.5 8.5H12V7H8v4h1.5zM12 17h4v-4h-1.5v2.5H12z',
  }),
  'Screenshot',
);
export const ScreenshotMonitorIcon = (props?: KTRawAttr) => {
  const s = _ScreenshotMonitorIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenshotMonitorIcon = svg(
  [
    svg(
      'path',
      { d: 'M20 3H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2m0 14H4V5h16z' },
      '0',
    ),
    svg('path', { d: 'M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z' }, '1'),
  ],
  'ScreenshotMonitor',
);
export const ScreenshotMonitorOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ScreenshotMonitorOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenshotMonitorOutlinedIcon = svg(
  [
    svg(
      'path',
      { d: 'M20 3H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2m0 14H4V5h16z' },
      '0',
    ),
    svg('path', { d: 'M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z' }, '1'),
  ],
  'ScreenshotMonitorOutlined',
);
export const ScreenshotMonitorRoundedIcon = (props?: KTRawAttr) => {
  const s = _ScreenshotMonitorRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenshotMonitorRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h4c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2m0 14H4V5h16z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M6.5 7.5h1.75c.41 0 .75-.34.75-.75S8.66 6 8.25 6H6c-.55 0-1 .45-1 1v2.25c0 .41.34.75.75.75s.75-.34.75-.75zM18.25 12c-.41 0-.75.34-.75.75v1.75h-1.75c-.41 0-.75.34-.75.75s.34.75.75.75H18c.55 0 1-.45 1-1v-2.25c0-.41-.34-.75-.75-.75',
      },
      '1',
    ),
  ],
  'ScreenshotMonitorRounded',
);
export const ScreenshotMonitorSharpIcon = (props?: KTRawAttr) => {
  const s = _ScreenshotMonitorSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenshotMonitorSharpIcon = svg(
  [
    svg('path', { d: 'M22 3H2v16h6v2h8v-2h6zm-2 14H4V5h16z' }, '0'),
    svg('path', { d: 'M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z' }, '1'),
  ],
  'ScreenshotMonitorSharp',
);
export const ScreenshotMonitorTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ScreenshotMonitorTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenshotMonitorTwoToneIcon = svg(
  [
    svg('path', { d: 'M4 17h16V5H4zm11-2.5h2.5V12H19v4h-4zM5 6h4v1.5H6.5V10H5z', opacity: '.3' }, '0'),
    svg(
      'path',
      { d: 'M20 3H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2m0 14H4V5h16z' },
      '1',
    ),
    svg('path', { d: 'M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z' }, '2'),
  ],
  'ScreenshotMonitorTwoTone',
);
export const ScreenshotOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ScreenshotOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenshotOutlinedIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10zM9.5 8.5H12V7H8v4h1.5zM12 17h4v-4h-1.5v2.5H12z',
  }),
  'ScreenshotOutlined',
);
export const ScreenshotRoundedIcon = (props?: KTRawAttr) => {
  const s = _ScreenshotRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenshotRoundedIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 18H7V6h10zM9.5 8.5h1.75c.41 0 .75-.34.75-.75S11.66 7 11.25 7h-2.5c-.41 0-.75.34-.75.75v2.5c0 .41.34.75.75.75s.75-.34.75-.75zm3.25 8.5h2.5c.41 0 .75-.34.75-.75v-2.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.75h-1.75c-.41 0-.75.34-.75.75s.34.75.75.75',
  }),
  'ScreenshotRounded',
);
export const ScreenshotSharpIcon = (props?: KTRawAttr) => {
  const s = _ScreenshotSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenshotSharpIcon = svg(
  svg('path', { d: 'M5 1v22h14V1zm12 17H7V6h10zM9.5 8.5H12V7H8v4h1.5zM12 17h4v-4h-1.5v2.5H12z' }),
  'ScreenshotSharp',
);
export const ScreenshotTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ScreenshotTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScreenshotTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10zM9.5 8.5H12V7H8v4h1.5zM12 17h4v-4h-1.5v2.5H12z',
      },
      '0',
    ),
    svg('path', { d: 'M7 3h10v1H7zm0 17h10v1H7z', opacity: '.3' }, '1'),
  ],
  'ScreenshotTwoTone',
);
export const ScubaDivingIcon = (props?: KTRawAttr) => {
  const s = _ScubaDivingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScubaDivingIcon = svg(
  svg('path', {
    d: 'M1 13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m7.89-2.89 4.53-1.21-.78-2.9-4.53 1.21c-.8.21-1.28 1.04-1.06 1.84s1.04 1.28 1.84 1.06M20.5 5.9 23 3l-1-1-3 3-2 4-9.48 2.87c-.82.2-1.39.89-1.5 1.68L5.24 18 2.4 21.8 4 23l3-4 1.14-3.14L14 14l5-3.5z',
  }),
  'ScubaDiving',
);
export const ScubaDivingOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ScubaDivingOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScubaDivingOutlinedIcon = svg(
  svg('path', {
    d: 'M1 13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m7.89-2.89 4.53-1.21-.78-2.9-4.53 1.21c-.8.21-1.28 1.04-1.06 1.84s1.04 1.28 1.84 1.06M20.5 5.9 23 3l-1-1-3 3-2 4-9.48 2.87c-.82.2-1.39.89-1.5 1.68L5.24 18 2.4 21.8 4 23l3-4 1.14-3.14L14 14l5-3.5z',
  }),
  'ScubaDivingOutlined',
);
export const ScubaDivingRoundedIcon = (props?: KTRawAttr) => {
  const s = _ScubaDivingRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScubaDivingRoundedIcon = svg(
  svg('path', {
    d: 'M1 13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m7.89-2.89 3.56-.95c.53-.14.85-.69.71-1.22l-.26-.97c-.14-.53-.69-.85-1.22-.71l-3.57.95c-.8.21-1.28 1.04-1.06 1.84s1.04 1.28 1.84 1.06m13.63-7.59c-.29-.29-.75-.29-1.04 0L19 5l-2 4-9.48 2.87c-.82.2-1.39.89-1.5 1.68L5.24 18 3 21c-.33.44-.24 1.07.2 1.4s1.07.24 1.4-.2L7 19l1.14-3.14 5.57-1.77c.19-.06.38-.15.54-.27l4.2-2.94c.36-.25.62-.61.75-1.02l1.3-3.96 2.06-2.38c.25-.3.23-.73-.04-1',
  }),
  'ScubaDivingRounded',
);
export const ScubaDivingSharpIcon = (props?: KTRawAttr) => {
  const s = _ScubaDivingSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScubaDivingSharpIcon = svg(
  svg('path', {
    d: 'M1 13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m7.89-2.89 4.53-1.21-.78-2.9-4.53 1.21c-.8.21-1.28 1.04-1.06 1.84s1.04 1.28 1.84 1.06M20.5 5.9 23 3l-1-1-3 3-2 4-9.48 2.87c-.82.2-1.39.89-1.5 1.68L5.24 18 2.4 21.8 4 23l3-4 1.14-3.14L14 14l5-3.5z',
  }),
  'ScubaDivingSharp',
);
export const ScubaDivingTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ScubaDivingTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ScubaDivingTwoToneIcon = svg(
  svg('path', {
    d: 'M1 13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m7.89-2.89 4.53-1.21-.78-2.9-4.53 1.21c-.8.21-1.28 1.04-1.06 1.84s1.04 1.28 1.84 1.06M20.5 5.9 23 3l-1-1-3 3-2 4-9.48 2.87c-.82.2-1.39.89-1.5 1.68L5.24 18 2.4 21.8 4 23l3-4 1.14-3.14L14 14l5-3.5z',
  }),
  'ScubaDivingTwoTone',
);
export const SdIcon = (props?: KTRawAttr) => {
  const s = _SdIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6 6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4zm-3.5 4.5v-1H7c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H9.5v-.5h-2v1H10c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-1h1.5v.5zm5 0h2v-3h-2z',
  }),
  'Sd',
);
export const SdCardIcon = (props?: KTRawAttr) => {
  const s = _SdCardIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdCardIcon = svg(
  svg('path', {
    d: 'M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6 6h-2V4h2zm3 0h-2V4h2zm3 0h-2V4h2z',
  }),
  'SdCard',
);
export const SdCardAlertIcon = (props?: KTRawAttr) => {
  const s = _SdCardAlertIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdCardAlertIcon = svg(
  svg('path', {
    d: 'M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-5 15h-2v-2h2zm0-4h-2V8h2z',
  }),
  'SdCardAlert',
);
export const SdCardAlertOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SdCardAlertOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdCardAlertOutlinedIcon = svg(
  svg('path', {
    d: 'M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V8.83L10.83 4H18zm-7-5h2v2h-2zm0-7h2v5h-2z',
  }),
  'SdCardAlertOutlined',
);
export const SdCardAlertRoundedIcon = (props?: KTRawAttr) => {
  const s = _SdCardAlertRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdCardAlertRoundedIcon = svg(
  svg('path', {
    d: 'M18 2h-7.17c-.53 0-1.04.21-1.42.59L4.6 7.42c-.37.37-.58.88-.58 1.4L4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-5 15h-2v-2h2zm-1-4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1',
  }),
  'SdCardAlertRounded',
);
export const SdCardAlertSharpIcon = (props?: KTRawAttr) => {
  const s = _SdCardAlertSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdCardAlertSharpIcon = svg(
  svg('path', { d: 'M20 2H10L4 8v14h16zm-7 15h-2v-2h2zm0-4h-2V8h2z' }),
  'SdCardAlertSharp',
);
export const SdCardAlertTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SdCardAlertTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdCardAlertTwoToneIcon = svg(
  [
    svg('path', { d: 'M6 8.83V20h12V4h-7.17zM11 8h2v5h-2zm0 7h2v2h-2z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V8.83L10.83 4H18zm-7-5h2v2h-2zm0-7h2v5h-2z',
      },
      '1',
    ),
  ],
  'SdCardAlertTwoTone',
);
export const SdCardOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SdCardOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdCardOutlinedIcon = svg(
  svg('path', {
    d: 'M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V8.83L10.83 4H18zM9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z',
  }),
  'SdCardOutlined',
);
export const SdCardRoundedIcon = (props?: KTRawAttr) => {
  const s = _SdCardRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdCardRoundedIcon = svg(
  svg('path', {
    d: 'M18 2h-7.17c-.53 0-1.04.21-1.42.59L4.6 7.42c-.37.37-.6.88-.6 1.4V20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 6c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m3 0c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m3 0c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1',
  }),
  'SdCardRounded',
);
export const SdCardSharpIcon = (props?: KTRawAttr) => {
  const s = _SdCardSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdCardSharpIcon = svg(
  svg('path', { d: 'M20 2H10L4 8v14h16zm-8 6h-2V4h2zm3 0h-2V4h2zm3 0h-2V4h2z' }),
  'SdCardSharp',
);
export const SdCardTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SdCardTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdCardTwoToneIcon = svg(
  [
    svg('path', { d: 'M6 8.83V20h12V4h-7.17zM15 7h2v4h-2zm-3 0h2v4h-2zm-1 4H9V7h2z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V8.83L10.83 4H18zM9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z',
      },
      '1',
    ),
  ],
  'SdCardTwoTone',
);
export const SdOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SdOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M7 15h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H7.5v-1h2v.5H11v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h2.5v1h-2V13H6v1c0 .55.45 1 1 1m11-1v-4c0-.55-.45-1-1-1h-4v6h4c.55 0 1-.45 1-1m-1.5-.5h-2v-3h2z',
      },
      '0',
    ),
    svg(
      'path',
      { d: 'M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z' },
      '1',
    ),
  ],
  'SdOutlined',
);
export const SdRoundedIcon = (props?: KTRawAttr) => {
  const s = _SdRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdRoundedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-7 5h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4zm-3.5 4.5v-1H7c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H9.5v-.5h-2v1H10c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-1h1.5v.5zm5 0h2v-3h-2z',
  }),
  'SdRounded',
);
export const SdSharpIcon = (props?: KTRawAttr) => {
  const s = _SdSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdSharpIcon = svg(
  svg('path', {
    d: 'M2 4v16h20V4zm11 5h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4zm-3.5 4.5v-1H6V9h5v2H9.5v-.5h-2v1H11V15H6v-2h1.5v.5zm5 0h2v-3h-2z',
  }),
  'SdSharp',
);
export const SdStorageIcon = (props?: KTRawAttr) => {
  const s = _SdStorageIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdStorageIcon = svg(
  svg('path', {
    d: 'M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6 6h-2V4h2zm3 0h-2V4h2zm3 0h-2V4h2z',
  }),
  'SdStorage',
);
export const SdStorageOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SdStorageOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdStorageOutlinedIcon = svg(
  svg('path', {
    d: 'M18 4v16H6V8.83L10.83 4zm0-2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z',
  }),
  'SdStorageOutlined',
);
export const SdStorageRoundedIcon = (props?: KTRawAttr) => {
  const s = _SdStorageRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdStorageRoundedIcon = svg(
  svg('path', {
    d: 'M18 2h-7.17c-.53 0-1.04.21-1.42.59L4.6 7.42c-.37.37-.6.88-.6 1.4V20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 6c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m3 0c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m3 0c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1',
  }),
  'SdStorageRounded',
);
export const SdStorageSharpIcon = (props?: KTRawAttr) => {
  const s = _SdStorageSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdStorageSharpIcon = svg(
  svg('path', { d: 'M20 2H10L4 8v14h16zm-8 6h-2V4h2zm3 0h-2V4h2zm3 0h-2V4h2z' }),
  'SdStorageSharp',
);
export const SdStorageTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SdStorageTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdStorageTwoToneIcon = svg(
  [
    svg('path', { d: 'M6 8.83V20h12V4h-7.17zM15 7h2v4h-2zm-3 0h2v4h-2zm-1 4H9V7h2z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V8.83L10.83 4H18zM9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z',
      },
      '1',
    ),
  ],
  'SdStorageTwoTone',
);
export const SdTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SdTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SdTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M4 18h16V6H4zm9-9h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4zm-7 4h1.5v.5h2v-1H7c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1H9.5v-.5h-2v1H10c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1z',
        opacity: '.3',
      },
      '0',
    ),
    svg('path', { d: 'M14.5 10.5h2v3h-2z', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M7 15h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H7.5v-1h2v.5H11v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h2.5v1h-2V13H6v1c0 .55.45 1 1 1m11-1v-4c0-.55-.45-1-1-1h-4v6h4c.55 0 1-.45 1-1m-1.5-.5h-2v-3h2z',
      },
      '2',
    ),
    svg(
      'path',
      { d: 'M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z' },
      '3',
    ),
  ],
  'SdTwoTone',
);
export const SearchIcon = (props?: KTRawAttr) => {
  const s = _SearchIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SearchIcon = svg(
  svg('path', {
    d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14',
  }),
  'Search',
);
export const SearchOffIcon = (props?: KTRawAttr) => {
  const s = _SearchOffIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SearchOffIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3 6.08 3 3.28 5.64 3.03 9h2.02C5.3 6.75 7.18 5 9.5 5 11.99 5 14 7.01 14 9.5S11.99 14 9.5 14c-.17 0-.33-.03-.5-.05v2.02c.17.02.33.03.5.03 1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M6.47 10.82 4 13.29l-2.47-2.47-.71.71L3.29 14 .82 16.47l.71.71L4 14.71l2.47 2.47.71-.71L4.71 14l2.47-2.47z',
      },
      '1',
    ),
  ],
  'SearchOff',
);
export const SearchOffOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SearchOffOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SearchOffOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3 6.08 3 3.28 5.64 3.03 9h2.02C5.3 6.75 7.18 5 9.5 5 11.99 5 14 7.01 14 9.5S11.99 14 9.5 14c-.17 0-.33-.03-.5-.05v2.02c.17.02.33.03.5.03 1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M6.47 10.82 4 13.29l-2.47-2.47-.71.71L3.29 14 .82 16.47l.71.71L4 14.71l2.47 2.47.71-.71L4.71 14l2.47-2.47z',
      },
      '1',
    ),
  ],
  'SearchOffOutlined',
);
export const SearchOffRoundedIcon = (props?: KTRawAttr) => {
  const s = _SearchOffRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SearchOffRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-4.99-5.58-5.34C6.54 2.58 3.3 5.38 3.03 9h2.02c.24-2.12 1.92-3.8 4.06-3.98C11.65 4.8 14 6.95 14 9.5c0 2.49-2.01 4.5-4.5 4.5-.17 0-.33-.03-.5-.05v2.02l.01.01c1.8.13 3.47-.47 4.72-1.55l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M6.12 11.17 4 13.29l-2.12-2.12c-.2-.2-.51-.2-.71 0s-.2.51 0 .71L3.29 14l-2.12 2.12c-.2.2-.2.51 0 .71s.51.2.71 0L4 14.71l2.12 2.12c.2.2.51.2.71 0s.2-.51 0-.71L4.71 14l2.12-2.12c.2-.2.2-.51 0-.71-.2-.19-.51-.19-.71 0',
      },
      '1',
    ),
  ],
  'SearchOffRounded',
);
export const SearchOffSharpIcon = (props?: KTRawAttr) => {
  const s = _SearchOffSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SearchOffSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3 6.08 3 3.28 5.64 3.03 9h2.02C5.3 6.75 7.18 5 9.5 5 11.99 5 14 7.01 14 9.5S11.99 14 9.5 14c-.17 0-.33-.03-.5-.05v2.02c.17.02.33.03.5.03 1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M6.47 10.82 4 13.29l-2.47-2.47-.71.71L3.29 14 .82 16.47l.71.71L4 14.71l2.47 2.47.71-.71L4.71 14l2.47-2.47z',
      },
      '1',
    ),
  ],
  'SearchOffSharp',
);
export const SearchOffTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SearchOffTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SearchOffTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3 6.08 3 3.28 5.64 3.03 9h2.02C5.3 6.75 7.18 5 9.5 5 11.99 5 14 7.01 14 9.5S11.99 14 9.5 14c-.17 0-.33-.03-.5-.05v2.02c.17.02.33.03.5.03 1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M6.47 10.82 4 13.29l-2.47-2.47-.71.71L3.29 14 .82 16.47l.71.71L4 14.71l2.47 2.47.71-.71L4.71 14l2.47-2.47z',
      },
      '1',
    ),
  ],
  'SearchOffTwoTone',
);
export const SearchOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SearchOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SearchOutlinedIcon = svg(
  svg('path', {
    d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14',
  }),
  'SearchOutlined',
);
export const SearchRoundedIcon = (props?: KTRawAttr) => {
  const s = _SearchRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SearchRoundedIcon = svg(
  svg('path', {
    d: 'M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14',
  }),
  'SearchRounded',
);
export const SearchSharpIcon = (props?: KTRawAttr) => {
  const s = _SearchSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SearchSharpIcon = svg(
  svg('path', {
    d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14',
  }),
  'SearchSharp',
);
export const SearchTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SearchTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SearchTwoToneIcon = svg(
  svg('path', {
    d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14',
  }),
  'SearchTwoTone',
);
export const SecurityIcon = (props?: KTRawAttr) => {
  const s = _SecurityIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityIcon = svg(
  svg('path', {
    d: 'M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z',
  }),
  'Security',
);
export const SecurityOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SecurityOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityOutlinedIcon = svg(
  svg('path', {
    d: 'M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z',
  }),
  'SecurityOutlined',
);
export const SecurityRoundedIcon = (props?: KTRawAttr) => {
  const s = _SecurityRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityRoundedIcon = svg(
  svg('path', {
    d: 'm11.19 1.36-7 3.11C3.47 4.79 3 5.51 3 6.3V11c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6.3c0-.79-.47-1.51-1.19-1.83l-7-3.11c-.51-.23-1.11-.23-1.62 0M12 11.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z',
  }),
  'SecurityRounded',
);
export const SecuritySharpIcon = (props?: KTRawAttr) => {
  const s = _SecuritySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecuritySharpIcon = svg(
  svg('path', {
    d: 'M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z',
  }),
  'SecuritySharp',
);
export const SecurityTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SecurityTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityTwoToneIcon = svg(
  [
    svg('path', { d: 'M12 3.19 5 6.3V12h7v8.93c3.72-1.15 6.47-4.82 7-8.94h-7z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm0 19.93V12H5V6.3l7-3.11v8.8h7c-.53 4.12-3.28 7.79-7 8.94',
      },
      '1',
    ),
  ],
  'SecurityTwoTone',
);
export const SecurityUpdateIcon = (props?: KTRawAttr) => {
  const s = _SecurityUpdateIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityUpdateIcon = svg(
  svg('path', {
    d: 'M5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2m12 15H7V6h10zm-1-6h-3V8h-2v4H8l4 4z',
  }),
  'SecurityUpdate',
);
export const SecurityUpdateGoodIcon = (props?: KTRawAttr) => {
  const s = _SecurityUpdateGoodIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityUpdateGoodIcon = svg(
  svg('path', {
    d: 'M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 17H7V6h10zm-1-7.95-1.41-1.41-3.54 3.54-1.41-1.41-1.41 1.41L11.05 15z',
  }),
  'SecurityUpdateGood',
);
export const SecurityUpdateGoodOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SecurityUpdateGoodOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityUpdateGoodOutlinedIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10zm-1 6.05-1.41-1.41-3.54 3.54-1.41-1.41-1.41 1.41L11.05 15z',
  }),
  'SecurityUpdateGoodOutlined',
);
export const SecurityUpdateGoodRoundedIcon = (props?: KTRawAttr) => {
  const s = _SecurityUpdateGoodRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityUpdateGoodRoundedIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 18H7V6h10zm-6.66-3.71c.39.39 1.02.39 1.41 0l3.54-3.54c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0l-2.83 2.83-.71-.71a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41z',
  }),
  'SecurityUpdateGoodRounded',
);
export const SecurityUpdateGoodSharpIcon = (props?: KTRawAttr) => {
  const s = _SecurityUpdateGoodSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityUpdateGoodSharpIcon = svg(
  svg('path', { d: 'M5 1v22h14V1zm12 17H7V6h10zm-1-7.95-1.41-1.41-3.54 3.54-1.41-1.41-1.41 1.41L11.05 15z' }),
  'SecurityUpdateGoodSharp',
);
export const SecurityUpdateGoodTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SecurityUpdateGoodTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityUpdateGoodTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 21h10v-1H7zM7 3v1h10V3z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10zm-1 6.05-1.41-1.41-3.54 3.54-1.41-1.41-1.41 1.41L11.05 15z',
      },
      '1',
    ),
  ],
  'SecurityUpdateGoodTwoTone',
);
export const SecurityUpdateOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SecurityUpdateOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityUpdateOutlinedIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zM7 4V3h10v1zm9 8-4 4-4-4 1.41-1.41L11 12.17V8h2v4.17l1.59-1.59z',
  }),
  'SecurityUpdateOutlined',
);
export const SecurityUpdateRoundedIcon = (props?: KTRawAttr) => {
  const s = _SecurityUpdateRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityUpdateRoundedIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 18H7V6h10zm-2.21-5.79H13V9c0-.55-.45-1-1-1s-1 .45-1 1v3.21H9.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79c.31-.31.09-.85-.36-.85',
  }),
  'SecurityUpdateRounded',
);
export const SecurityUpdateSharpIcon = (props?: KTRawAttr) => {
  const s = _SecurityUpdateSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityUpdateSharpIcon = svg(
  svg('path', { d: 'M5 1v22h14V1zm12 17H7V6h10zm-1-6h-3V8h-2v4H8l4 4z' }),
  'SecurityUpdateSharp',
);
export const SecurityUpdateTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SecurityUpdateTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityUpdateTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 20h10v1H7zM7 3h10v1H7z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10zm-1 8h-3V8h-2v4H8l4 4z',
      },
      '1',
    ),
  ],
  'SecurityUpdateTwoTone',
);
export const SecurityUpdateWarningIcon = (props?: KTRawAttr) => {
  const s = _SecurityUpdateWarningIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityUpdateWarningIcon = svg(
  [
    svg('path', { d: 'M11 15h2v2h-2zm0-8h2v6h-2z' }, '0'),
    svg(
      'path',
      { d: 'M17 1H7c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 17H7V6h10z' },
      '1',
    ),
  ],
  'SecurityUpdateWarning',
);
export const SecurityUpdateWarningOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SecurityUpdateWarningOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityUpdateWarningOutlinedIcon = svg(
  [
    svg('path', { d: 'M11 15h2v2h-2zm0-8h2v6h-2z' }, '0'),
    svg(
      'path',
      {
        d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10z',
      },
      '1',
    ),
  ],
  'SecurityUpdateWarningOutlined',
);
export const SecurityUpdateWarningRoundedIcon = (props?: KTRawAttr) => {
  const s = _SecurityUpdateWarningRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityUpdateWarningRoundedIcon = svg(
  [
    svg('circle', { cx: '12', cy: '16', r: '1' }, '0'),
    svg('path', { d: 'M12 13c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1' }, '1'),
    svg(
      'path',
      { d: 'M17 1H7c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 17H7V6h10z' },
      '2',
    ),
  ],
  'SecurityUpdateWarningRounded',
);
export const SecurityUpdateWarningSharpIcon = (props?: KTRawAttr) => {
  const s = _SecurityUpdateWarningSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityUpdateWarningSharpIcon = svg(
  [svg('path', { d: 'M11 15h2v2h-2zm0-8h2v6h-2z' }, '0'), svg('path', { d: 'M5.01 1v22H19V1zM17 18H7V6h10z' }, '1')],
  'SecurityUpdateWarningSharp',
);
export const SecurityUpdateWarningTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SecurityUpdateWarningTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SecurityUpdateWarningTwoToneIcon = svg(
  [
    svg('path', { d: 'M11 7h2v6h-2zm0 8h2v2h-2z', opacity: '.3' }, '0'),
    svg('path', { d: 'M11 15h2v2h-2zm0-8h2v6h-2z' }, '1'),
    svg(
      'path',
      {
        d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10z',
      },
      '2',
    ),
    svg('path', { d: 'M7 21h10v-1H7zM7 3v1h10V3z', opacity: '.3' }, '3'),
  ],
  'SecurityUpdateWarningTwoTone',
);
export const SegmentIcon = (props?: KTRawAttr) => {
  const s = _SegmentIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SegmentIcon = svg(svg('path', { d: 'M9 18h12v-2H9zM3 6v2h18V6zm6 7h12v-2H9z' }), 'Segment');
export const SegmentOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SegmentOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SegmentOutlinedIcon = svg(
  svg('path', { d: 'M9 18h12v-2H9zM3 6v2h18V6zm6 7h12v-2H9z' }),
  'SegmentOutlined',
);
export const SegmentRoundedIcon = (props?: KTRawAttr) => {
  const s = _SegmentRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SegmentRoundedIcon = svg(
  svg('path', {
    d: 'M10 18h10c.55 0 1-.45 1-1s-.45-1-1-1H10c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1m7 6h10c.55 0 1-.45 1-1s-.45-1-1-1H10c-.55 0-1 .45-1 1s.45 1 1 1',
  }),
  'SegmentRounded',
);
export const SegmentSharpIcon = (props?: KTRawAttr) => {
  const s = _SegmentSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SegmentSharpIcon = svg(svg('path', { d: 'M9 18h12v-2H9zM3 6v2h18V6zm6 7h12v-2H9z' }), 'SegmentSharp');
export const SegmentTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SegmentTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SegmentTwoToneIcon = svg(svg('path', { d: 'M9 18h12v-2H9zM3 6v2h18V6zm6 7h12v-2H9z' }), 'SegmentTwoTone');
export const SelectAllIcon = (props?: KTRawAttr) => {
  const s = _SelectAllIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SelectAllIcon = svg(
  svg('path', {
    d: 'M3 5h2V3c-1.1 0-2 .9-2 2m0 8h2v-2H3zm4 8h2v-2H7zM3 9h2V7H3zm10-6h-2v2h2zm6 0v2h2c0-1.1-.9-2-2-2M5 21v-2H3c0 1.1.9 2 2 2m-2-4h2v-2H3zM9 3H7v2h2zm2 18h2v-2h-2zm8-8h2v-2h-2zm0 8c1.1 0 2-.9 2-2h-2zm0-12h2V7h-2zm0 8h2v-2h-2zm-4 4h2v-2h-2zm0-16h2V3h-2zM7 17h10V7H7zm2-8h6v6H9z',
  }),
  'SelectAll',
);
export const SelectAllOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SelectAllOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SelectAllOutlinedIcon = svg(
  svg('path', {
    d: 'M3 5h2V3c-1.1 0-2 .9-2 2m0 8h2v-2H3zm4 8h2v-2H7zM3 9h2V7H3zm10-6h-2v2h2zm6 0v2h2c0-1.1-.9-2-2-2M5 21v-2H3c0 1.1.9 2 2 2m-2-4h2v-2H3zM9 3H7v2h2zm2 18h2v-2h-2zm8-8h2v-2h-2zm0 8c1.1 0 2-.9 2-2h-2zm0-12h2V7h-2zm0 8h2v-2h-2zm-4 4h2v-2h-2zm0-16h2V3h-2zM7 17h10V7H7zm2-8h6v6H9z',
  }),
  'SelectAllOutlined',
);
export const SelectAllRoundedIcon = (props?: KTRawAttr) => {
  const s = _SelectAllRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SelectAllRoundedIcon = svg(
  svg('path', {
    d: 'M3 5h2V3c-1.1 0-2 .9-2 2m0 8h2v-2H3zm4 8h2v-2H7zM3 9h2V7H3zm10-6h-2v2h2zm6 0v2h2c0-1.1-.9-2-2-2M5 21v-2H3c0 1.1.9 2 2 2m-2-4h2v-2H3zM9 3H7v2h2zm2 18h2v-2h-2zm8-8h2v-2h-2zm0 8c1.1 0 2-.9 2-2h-2zm0-12h2V7h-2zm0 8h2v-2h-2zm-4 4h2v-2h-2zm0-16h2V3h-2zM8 17h8c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1m1-8h6v6H9z',
  }),
  'SelectAllRounded',
);
export const SelectAllSharpIcon = (props?: KTRawAttr) => {
  const s = _SelectAllSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SelectAllSharpIcon = svg(
  svg('path', {
    d: 'M3 13h2v-2H3zm4 8h2v-2H7zM3 9h2V7H3zm10-6h-2v2h2zM3 17h2v-2H3zM9 3H7v2h2zM5 3H3v2h2zm6 18h2v-2h-2zm8-8h2v-2h-2zm0-4h2V7h-2zm0 8h2v-2h-2zm-4 4h2v-2h-2zm0-16h2V3h-2zm4 0h2V3h-2zm0 16h2v-2h-2zM3 21h2v-2H3zm4-4h10V7H7zm2-8h6v6H9z',
  }),
  'SelectAllSharp',
);
export const SelectAllTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SelectAllTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SelectAllTwoToneIcon = svg(
  svg('path', {
    d: 'M3 5h2V3c-1.1 0-2 .9-2 2m0 8h2v-2H3zm4 8h2v-2H7zM3 9h2V7H3zm10-6h-2v2h2zm6 0v2h2c0-1.1-.9-2-2-2M5 21v-2H3c0 1.1.9 2 2 2m-2-4h2v-2H3zM9 3H7v2h2zm2 18h2v-2h-2zm8-8h2v-2h-2zm0 8c1.1 0 2-.9 2-2h-2zm0-12h2V7h-2zm0 8h2v-2h-2zm-4 4h2v-2h-2zm0-16h2V3h-2zM7 17h10V7H7zm2-8h6v6H9z',
  }),
  'SelectAllTwoTone',
);
export const SelfImprovementIcon = (props?: KTRawAttr) => {
  const s = _SelfImprovementIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SelfImprovementIcon = svg(
  [
    svg('circle', { cx: '12', cy: '6', r: '2' }, '0'),
    svg(
      'path',
      {
        d: 'M21 16v-2c-2.24 0-4.16-.96-5.6-2.68l-1.34-1.6c-.38-.46-.94-.72-1.53-.72h-1.05c-.59 0-1.15.26-1.53.72l-1.34 1.6C7.16 13.04 5.24 14 3 14v2c2.77 0 5.19-1.17 7-3.25V15l-3.88 1.55c-.67.27-1.12.93-1.12 1.66C5 19.2 5.8 20 6.79 20H9v-.5c0-1.38 1.12-2.5 2.5-2.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3c-.83 0-1.5.67-1.5 1.5v.5h7.21c.99 0 1.79-.8 1.79-1.79 0-.73-.45-1.39-1.12-1.66L14 15v-2.25c1.81 2.08 4.23 3.25 7 3.25',
      },
      '1',
    ),
  ],
  'SelfImprovement',
);
export const SelfImprovementOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SelfImprovementOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SelfImprovementOutlinedIcon = svg(
  [
    svg('circle', { cx: '12', cy: '6', r: '2' }, '0'),
    svg(
      'path',
      {
        d: 'M21 16v-2c-2.24 0-4.16-.96-5.6-2.68l-1.34-1.6c-.38-.46-.94-.72-1.53-.72h-1.05c-.59 0-1.15.26-1.53.72l-1.34 1.6C7.16 13.04 5.24 14 3 14v2c2.77 0 5.19-1.17 7-3.25V15l-3.88 1.55c-.67.27-1.12.93-1.12 1.66C5 19.2 5.8 20 6.79 20H9v-.5c0-1.38 1.12-2.5 2.5-2.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3c-.83 0-1.5.67-1.5 1.5v.5h7.21c.99 0 1.79-.8 1.79-1.79 0-.73-.45-1.39-1.12-1.66L14 15v-2.25c1.81 2.08 4.23 3.25 7 3.25',
      },
      '1',
    ),
  ],
  'SelfImprovementOutlined',
);
export const SelfImprovementRoundedIcon = (props?: KTRawAttr) => {
  const s = _SelfImprovementRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SelfImprovementRoundedIcon = svg(
  [
    svg('circle', { cx: '12', cy: '6', r: '2' }, '0'),
    svg(
      'path',
      {
        d: 'M21 14.94c0-.5-.36-.93-.85-.98-1.88-.21-3.49-1.13-4.75-2.63l-1.34-1.6c-.38-.47-.94-.73-1.53-.73h-1.05c-.59 0-1.15.26-1.53.72l-1.34 1.6c-1.25 1.5-2.87 2.42-4.75 2.63-.5.06-.86.49-.86.99 0 .6.53 1.07 1.13 1 2.3-.27 4.32-1.39 5.87-3.19V15l-3.76 1.5c-.65.26-1.16.83-1.23 1.53-.1 1.07.73 1.97 1.78 1.97H9v-.5c0-1.38 1.12-2.5 2.5-2.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3c-.83 0-1.5.67-1.5 1.5v.5h7.1c.85 0 1.65-.54 1.85-1.37.21-.89-.27-1.76-1.08-2.08L14 15v-2.25c1.56 1.8 3.57 2.91 5.87 3.19.6.06 1.13-.4 1.13-1',
      },
      '1',
    ),
  ],
  'SelfImprovementRounded',
);
export const SelfImprovementSharpIcon = (props?: KTRawAttr) => {
  const s = _SelfImprovementSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SelfImprovementSharpIcon = svg(
  [
    svg('circle', { cx: '12', cy: '6', r: '2' }, '0'),
    svg(
      'path',
      {
        d: 'M21 16v-2c-2.24 0-4.16-.96-5.6-2.68l-1.34-1.6c-.38-.46-.94-.72-1.53-.72h-1.05c-.59 0-1.15.26-1.53.72l-1.34 1.6C7.16 13.04 5.24 14 3 14v2c2.77 0 5.19-1.17 7-3.25V15l-3.88 1.55c-.67.27-1.12.93-1.12 1.66C5 19.2 5.8 20 6.79 20H9v-.5c0-1.38 1.12-2.5 2.5-2.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3c-.83 0-1.5.67-1.5 1.5v.5h7.21c.99 0 1.79-.8 1.79-1.79 0-.73-.45-1.39-1.12-1.66L14 15v-2.25c1.81 2.08 4.23 3.25 7 3.25',
      },
      '1',
    ),
  ],
  'SelfImprovementSharp',
);
export const SelfImprovementTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SelfImprovementTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SelfImprovementTwoToneIcon = svg(
  [
    svg('circle', { cx: '12', cy: '6', r: '2' }, '0'),
    svg(
      'path',
      {
        d: 'M21 16v-2c-2.24 0-4.16-.96-5.6-2.68l-1.34-1.6c-.38-.46-.94-.72-1.53-.72h-1.05c-.59 0-1.15.26-1.53.72l-1.34 1.6C7.16 13.04 5.24 14 3 14v2c2.77 0 5.19-1.17 7-3.25V15l-3.88 1.55c-.67.27-1.12.93-1.12 1.66C5 19.2 5.8 20 6.79 20H9v-.5c0-1.38 1.12-2.5 2.5-2.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3c-.83 0-1.5.67-1.5 1.5v.5h7.21c.99 0 1.79-.8 1.79-1.79 0-.73-.45-1.39-1.12-1.66L14 15v-2.25c1.81 2.08 4.23 3.25 7 3.25',
      },
      '1',
    ),
  ],
  'SelfImprovementTwoTone',
);
export const SellIcon = (props?: KTRawAttr) => {
  const s = _SellIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SellIcon = svg(
  svg('path', {
    d: 'm21.41 11.41-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83M6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8',
  }),
  'Sell',
);
export const SellOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SellOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SellOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm21.41 11.41-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83M12.83 20 4 11.17V4h7.17L20 12.83z',
      },
      '0',
    ),
    svg('circle', { cx: '6.5', cy: '6.5', r: '1.5' }, '1'),
  ],
  'SellOutlined',
);
export const SellRoundedIcon = (props?: KTRawAttr) => {
  const s = _SellRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SellRoundedIcon = svg(
  svg('path', {
    d: 'm21.41 11.41-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83M6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8',
  }),
  'SellRounded',
);
export const SellSharpIcon = (props?: KTRawAttr) => {
  const s = _SellSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SellSharpIcon = svg(
  svg('path', {
    d: 'M22.83 12.83 12 2H2v10l10.83 10.83zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8',
  }),
  'SellSharp',
);
export const SellTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SellTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SellTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M4 4v7.17L12.83 20 20 12.83 11.17 4zm2.5 4C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm21.41 11.41-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83M12.83 20 4 11.17V4h7.17L20 12.83z',
      },
      '1',
    ),
    svg('circle', { cx: '6.5', cy: '6.5', r: '1.5' }, '2'),
  ],
  'SellTwoTone',
);
export const SendIcon = (props?: KTRawAttr) => {
  const s = _SendIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendIcon = svg(svg('path', { d: 'M2.01 21 23 12 2.01 3 2 10l15 2-15 2z' }), 'Send');
export const SendAndArchiveIcon = (props?: KTRawAttr) => {
  const s = _SendAndArchiveIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendAndArchiveIcon = svg(
  svg('path', {
    d: 'M21 10h-3L2 3v7l9 2-9 2v7l8-3.5V21c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2m0 11h-9v-9h9zm-4.5-1L13 16h2v-3h3v3h2z',
  }),
  'SendAndArchive',
);
export const SendAndArchiveOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SendAndArchiveOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendAndArchiveOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm11 12-6-1.5V7.01l8.87 3.73c.94-.47 2-.75 3.13-.75.1 0 .19.01.28.01L3 4v16l7-2.95V17c0-.8.14-1.56.39-2.28L5 16.99V13.5z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8-3-3 .71-.71 1.79 1.79V14h1v4.09l1.79-1.79.71.7z',
      },
      '1',
    ),
  ],
  'SendAndArchiveOutlined',
);
export const SendAndArchiveRoundedIcon = (props?: KTRawAttr) => {
  const s = _SendAndArchiveRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendAndArchiveRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m2.15 5.85-1.79 1.79c-.2.2-.51.2-.71 0l-1.79-1.79c-.32-.31-.1-.85.35-.85h1.29v-2.5c0-.28.22-.5.5-.5s.5.22.5.5V17h1.29c.45 0 .67.54.36.85',
      },
      '0',
    ),
    svg('path', { d: 'M17 10c.1 0 .19.01.28.01L3 4v6l8 2-8 2v6l7-2.95V17c0-3.87 3.13-7 7-7' }, '1'),
  ],
  'SendAndArchiveRounded',
);
export const SendAndArchiveSharpIcon = (props?: KTRawAttr) => {
  const s = _SendAndArchiveSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendAndArchiveSharpIcon = svg(
  [
    svg('path', { d: 'M17 10c.1 0 .19.01.28.01L3 4v6l8 2-8 2v6l7-2.95V17c0-3.87 3.13-7 7-7' }, '0'),
    svg('path', { d: 'M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8-3-3h2.5v-3h1v3H20z' }, '1'),
  ],
  'SendAndArchiveSharp',
);
export const SendAndArchiveTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SendAndArchiveTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendAndArchiveTwoToneIcon = svg(
  [
    svg('path', { d: 'M5 7.01v3.49l6 1.5-6 1.5v3.49l5.39-2.27c.6-1.74 1.86-3.16 3.48-3.97z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'm11 12-6-1.5V7.01l8.87 3.73c.94-.47 2-.75 3.13-.75.1 0 .19.01.28.01L3 4v16l7-2.95V17c0-.8.14-1.56.39-2.28L5 16.99V13.5z',
      },
      '1',
    ),
    svg('path', { d: 'M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8-3-3h2.5v-3h1v3H20z' }, '2'),
  ],
  'SendAndArchiveTwoTone',
);
export const SendOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SendOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendOutlinedIcon = svg(
  svg('path', { d: 'm4.01 6.03 7.51 3.22-7.52-1zm7.5 8.72L4 17.97v-2.22zM2.01 3 2 10l15 2-15 2 .01 7L23 12z' }),
  'SendOutlined',
);
export const SendRoundedIcon = (props?: KTRawAttr) => {
  const s = _SendRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendRoundedIcon = svg(
  svg('path', {
    d: 'm3.4 20.4 17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91',
  }),
  'SendRounded',
);
export const SendSharpIcon = (props?: KTRawAttr) => {
  const s = _SendSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendSharpIcon = svg(svg('path', { d: 'M2.01 21 23 12 2.01 3 2 10l15 2-15 2z' }), 'SendSharp');
export const SendTimeExtensionIcon = (props?: KTRawAttr) => {
  const s = _SendTimeExtensionIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendTimeExtensionIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20 6c0-1.1-.9-2-2-2h-4c0-1.38-1.12-2.5-2.5-2.5S9 2.62 9 4H5.01c-1.1 0-2 .9-2 2v3.8C5.7 9.8 6 11.96 6 12.5s-.29 2.7-3 2.7V19c0 1.1.9 2 2 2h3.8c0-2.16 1.37-2.78 2.2-2.94v-9.3l9 4.5z',
      },
      '0',
    ),
    svg('path', { d: 'M13 12v4l4 1-4 1v4l10-5z' }, '1'),
  ],
  'SendTimeExtension',
);
export const SendTimeExtensionOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SendTimeExtensionOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendTimeExtensionOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M18 6v6.26l2 1V6c0-1.1-.9-2-2-2h-4c0-1.38-1.12-2.5-2.5-2.5S9 2.62 9 4H5.01c-1.1 0-2 .9-2 2v3.8C5.7 9.8 6 11.96 6 12.5s-.29 2.7-3 2.7V19c0 1.1.9 2 2 2h3.8c0-2.16 1.37-2.78 2.2-2.94v-2.03c-1.43.17-3.15 1.04-3.87 2.97H5v-2.13c2.17-.8 3-2.87 3-4.37 0-1.49-.83-3.56-2.99-4.37V6H11V4c0-.28.22-.5.5-.5s.5.22.5.5v2z',
      },
      '0',
    ),
    svg('path', { d: 'M13 12v4l4 1-4 1v4l10-5z' }, '1'),
  ],
  'SendTimeExtensionOutlined',
);
export const SendTimeExtensionRoundedIcon = (props?: KTRawAttr) => {
  const s = _SendTimeExtensionRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendTimeExtensionRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20 6c0-1.1-.9-2-2-2h-4c0-1.38-1.12-2.5-2.5-2.5S9 2.62 9 4H5.01c-1.1 0-2 .9-2 2v3.8C5.7 9.8 6 11.96 6 12.5s-.29 2.7-3 2.7V19c0 1.1.9 2 2 2h3.8c0-2.16 1.37-2.78 2.2-2.94v-9.3l9 4.5z',
      },
      '0',
    ),
    svg('path', { d: 'M13 12v4l4 1-4 1v4l10-5z' }, '1'),
  ],
  'SendTimeExtensionRounded',
);
export const SendTimeExtensionSharpIcon = (props?: KTRawAttr) => {
  const s = _SendTimeExtensionSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendTimeExtensionSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20 4h-6c0-1.38-1.12-2.5-2.5-2.5S9 2.62 9 4H3.01v5.8C5.7 9.8 6 11.96 6 12.5s-.29 2.7-3 2.7V21h5.8c0-2.16 1.37-2.78 2.2-2.94v-9.3l9 4.5z',
      },
      '0',
    ),
    svg('path', { d: 'M13 12v4l4 1-4 1v4l10-5z' }, '1'),
  ],
  'SendTimeExtensionSharp',
);
export const SendTimeExtensionTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SendTimeExtensionTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendTimeExtensionTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 6V4c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2H5.01v2.13C7.17 8.94 8 11.01 8 12.5c0 1.5-.83 3.57-3 4.37V19h2.13c.71-1.93 2.44-2.8 3.87-2.97V8.76l2.89 1.45L18 12.26V6z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M7.13 19H5v-2.13c2.17-.8 3-2.87 3-4.37 0-1.49-.83-3.56-2.99-4.37V6H11V4c0-.28.22-.5.5-.5s.5.22.5.5v2h6v6.26l2 1V6c0-1.1-.9-2-2-2h-4c0-1.38-1.12-2.5-2.5-2.5S9 2.62 9 4H5.01c-1.1 0-2 .9-2 2v3.8C5.7 9.8 6 11.96 6 12.5s-.29 2.7-3 2.7V19c0 1.1.9 2 2 2h3.8c0-2.16 1.37-2.78 2.2-2.94v-2.03c-1.43.17-3.15 1.04-3.87 2.97',
      },
      '1',
    ),
    svg('path', { d: 'M13 12v4l4 1-4 1v4l10-5z' }, '2'),
  ],
  'SendTimeExtensionTwoTone',
);
export const SendToMobileIcon = (props?: KTRawAttr) => {
  const s = _SendToMobileIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendToMobileIcon = svg(
  svg('path', {
    d: 'M17 17h2v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-1.99 2-1.99L17 1c1.1 0 2 .9 2 2v4h-2V6H7v12h10zm5-5-4-4v3h-5v2h5v3z',
  }),
  'SendToMobile',
);
export const SendToMobileOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SendToMobileOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendToMobileOutlinedIcon = svg(
  svg('path', {
    d: 'm18 8 4 4-4 4-1.41-1.41L18.17 13H13v-2h5.17l-1.59-1.59zM7 1.01 17 1c1.1 0 2 .9 2 2v4h-2V6H7v12h10v-1h2v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-1.99 2-1.99M7 21h10v-1H7zM7 4h10V3H7z',
  }),
  'SendToMobileOutlined',
);
export const SendToMobileRoundedIcon = (props?: KTRawAttr) => {
  const s = _SendToMobileRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendToMobileRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M17 18H7V6h10c0 .55.45 1 1 1s1-.45 1-1V3c0-1.1-.9-2-2-2L7 1.01C5.9 1.01 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1s-1 .45-1 1',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm21.65 11.65-2.79-2.79c-.32-.32-.86-.1-.86.35V11h-4c-.55 0-1 .45-1 1s.45 1 1 1h4v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7',
      },
      '1',
    ),
  ],
  'SendToMobileRounded',
);
export const SendToMobileSharpIcon = (props?: KTRawAttr) => {
  const s = _SendToMobileSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendToMobileSharpIcon = svg(
  [svg('path', { d: 'M17 18H7V6h10v1h2V1H5v22h14v-6h-2z' }, '0'), svg('path', { d: 'm22 12-4-4v3h-5v2h5v3z' }, '1')],
  'SendToMobileSharp',
);
export const SendToMobileTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SendToMobileTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendToMobileTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 3h10v1H7zm0 17h10v1H7z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'm22 12-4-4v3h-5v2h5v3zm-5 6H7V6h10v1h2V3c0-1.1-.9-2-2-2L7 1.01C5.9 1.01 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2zM7 3h10v1H7zm10 18H7v-1h10z',
      },
      '1',
    ),
  ],
  'SendToMobileTwoTone',
);
export const SendTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SendTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SendTwoToneIcon = svg(
  [
    svg('path', { d: 'm4 8.25 7.51 1-7.5-3.22zm.01 9.72 7.5-3.22-7.51 1z', opacity: '.3' }, '0'),
    svg('path', { d: 'M2.01 3 2 10l15 2-15 2 .01 7L23 12zM4 8.25V6.03l7.51 3.22zm.01 9.72v-2.22l7.51-1z' }, '1'),
  ],
  'SendTwoTone',
);
export const SensorDoorIcon = (props?: KTRawAttr) => {
  const s = _SensorDoorIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorDoorIcon = svg(
  svg('path', {
    d: 'M18 2H6c-1.1 0-2 .9-2 2v18h16V4c0-1.1-.9-2-2-2m-2.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'SensorDoor',
);
export const SensorDoorOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SensorDoorOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorDoorOutlinedIcon = svg(
  svg('path', {
    d: 'M18 4v16H6V4zm0-2H6c-1.1 0-2 .9-2 2v18h16V4c0-1.1-.9-2-2-2m-2.5 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S17 12.83 17 12s-.67-1.5-1.5-1.5',
  }),
  'SensorDoorOutlined',
);
export const SensorDoorRoundedIcon = (props?: KTRawAttr) => {
  const s = _SensorDoorRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorDoorRoundedIcon = svg(
  svg('path', {
    d: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'SensorDoorRounded',
);
export const SensorDoorSharpIcon = (props?: KTRawAttr) => {
  const s = _SensorDoorSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorDoorSharpIcon = svg(
  svg('path', { d: 'M20 2H4v20h16zm-4.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5' }),
  'SensorDoorSharp',
);
export const SensorDoorTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SensorDoorTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorDoorTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M18 4v16H6V4zm-2.5 6.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S17 12.83 17 12s-.67-1.5-1.5-1.5',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M18 4v16H6V4zm0-2H6c-1.1 0-2 .9-2 2v18h16V4c0-1.1-.9-2-2-2m-2.5 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S17 12.83 17 12s-.67-1.5-1.5-1.5',
      },
      '1',
    ),
  ],
  'SensorDoorTwoTone',
);
export const SensorOccupiedIcon = (props?: KTRawAttr) => {
  const s = _SensorOccupiedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorOccupiedIcon = svg(
  svg('path', {
    d: 'M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3m0 1c-1.84 0-3.56.5-5.03 1.37-.61.35-.97 1.02-.97 1.72V17h12v-1.91c0-.7-.36-1.36-.97-1.72C15.56 12.5 13.84 12 12 12m9.23-3.85 1.85-.77c-1.22-2.91-3.55-5.25-6.46-6.46l-.77 1.85c2.42 1.02 4.36 2.96 5.38 5.38M8.15 2.77 7.38.92C4.47 2.14 2.14 4.47.92 7.38l1.85.77c1.02-2.42 2.96-4.36 5.38-5.38M2.77 15.85l-1.85.77c1.22 2.91 3.55 5.25 6.46 6.46l.77-1.85c-2.42-1.02-4.36-2.96-5.38-5.38m13.08 5.38.77 1.85c2.91-1.22 5.25-3.55 6.46-6.46l-1.85-.77c-1.02 2.42-2.96 4.36-5.38 5.38',
  }),
  'SensorOccupied',
);
export const SensorOccupiedOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SensorOccupiedOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorOccupiedOutlinedIcon = svg(
  svg('path', {
    d: 'M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 5c-1.84 0-3.56.5-5.03 1.37-.61.35-.97 1.02-.97 1.72V17h12v-1.91c0-.7-.36-1.36-.97-1.72C15.56 12.5 13.84 12 12 12m-3.86 3c1.18-.65 2.51-1 3.86-1s2.68.35 3.85 1zm13.09-6.85 1.85-.77c-1.22-2.91-3.55-5.25-6.46-6.46l-.77 1.85c2.42 1.02 4.36 2.96 5.38 5.38M8.15 2.77 7.38.92C4.47 2.14 2.14 4.47.92 7.38l1.85.77c1.02-2.42 2.96-4.36 5.38-5.38M2.77 15.85l-1.85.77c1.22 2.91 3.55 5.25 6.46 6.46l.77-1.85c-2.42-1.02-4.36-2.96-5.38-5.38m13.08 5.38.77 1.85c2.91-1.22 5.25-3.55 6.46-6.46l-1.85-.77c-1.02 2.42-2.96 4.36-5.38 5.38',
  }),
  'SensorOccupiedOutlined',
);
export const SensorOccupiedRoundedIcon = (props?: KTRawAttr) => {
  const s = _SensorOccupiedRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorOccupiedRoundedIcon = svg(
  svg('path', {
    d: 'M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3m0 1c-1.84 0-3.56.5-5.03 1.37-.61.36-.97 1.02-.97 1.72V16c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-.91c0-.7-.36-1.36-.97-1.72C15.56 12.5 13.84 12 12 12m10.11-4.21c.55-.23.78-.88.5-1.41-1.13-2.12-2.87-3.86-4.99-4.99-.52-.28-1.17-.04-1.4.5-.19.47-.01 1.02.43 1.25 1.79.94 3.26 2.42 4.21 4.21.23.45.78.63 1.25.44M7.79 1.89c-.23-.55-.88-.78-1.4-.5C4.27 2.52 2.52 4.26 1.4 6.38c-.28.52-.05 1.18.5 1.41.47.2 1.02.01 1.25-.43.94-1.79 2.42-3.26 4.21-4.21.44-.24.62-.79.43-1.26m-5.9 14.32c-.55.23-.78.88-.5 1.4 1.13 2.12 2.87 3.87 5 5 .52.28 1.17.04 1.4-.5.19-.47.01-1.02-.43-1.25-1.79-.94-3.26-2.42-4.21-4.21-.24-.45-.79-.63-1.26-.44m14.32 5.9c.23.55.88.78 1.4.5 2.12-1.13 3.87-2.87 5-5 .28-.52.04-1.17-.5-1.4-.47-.19-1.02-.01-1.25.43-.94 1.79-2.42 3.26-4.21 4.21-.45.24-.63.79-.44 1.26',
  }),
  'SensorOccupiedRounded',
);
export const SensorOccupiedSharpIcon = (props?: KTRawAttr) => {
  const s = _SensorOccupiedSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorOccupiedSharpIcon = svg(
  svg('path', {
    d: 'M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3m0 1c-1.84 0-3.56.5-5.03 1.37-.61.35-.97 1.02-.97 1.72V17h12v-1.91c0-.7-.36-1.36-.97-1.72C15.56 12.5 13.84 12 12 12m9.23-3.85 1.85-.77c-1.22-2.91-3.55-5.25-6.46-6.46l-.77 1.85c2.42 1.02 4.36 2.96 5.38 5.38M8.15 2.77 7.38.92C4.47 2.14 2.14 4.47.92 7.38l1.85.77c1.02-2.42 2.96-4.36 5.38-5.38M2.77 15.85l-1.85.77c1.22 2.91 3.55 5.25 6.46 6.46l.77-1.85c-2.42-1.02-4.36-2.96-5.38-5.38m13.08 5.38.77 1.85c2.91-1.22 5.25-3.55 6.46-6.46l-1.85-.77c-1.02 2.42-2.96 4.36-5.38 5.38',
  }),
  'SensorOccupiedSharp',
);
export const SensorOccupiedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SensorOccupiedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorOccupiedTwoToneIcon = svg(
  [
    svg('path', { d: 'M8.14 15h7.7c-1.16-.65-2.5-1-3.85-1-1.34 0-2.67.35-3.85 1', opacity: '.3' }, '0'),
    svg('circle', { cx: '12', cy: '8', r: '1', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 5c-1.84 0-3.56.5-5.03 1.37-.61.35-.97 1.02-.97 1.72V17h12v-1.91c0-.7-.36-1.36-.97-1.72C15.56 12.5 13.84 12 12 12m-3.86 3c1.18-.65 2.51-1 3.86-1s2.68.35 3.85 1zm13.09-6.85 1.85-.77c-1.22-2.91-3.55-5.25-6.46-6.46l-.77 1.85c2.42 1.02 4.36 2.96 5.38 5.38M8.15 2.77 7.38.92C4.47 2.14 2.14 4.47.92 7.38l1.85.77c1.02-2.42 2.96-4.36 5.38-5.38M2.77 15.85l-1.85.77c1.22 2.91 3.55 5.25 6.46 6.46l.77-1.85c-2.42-1.02-4.36-2.96-5.38-5.38m13.08 5.38.77 1.85c2.91-1.22 5.25-3.55 6.46-6.46l-1.85-.77c-1.02 2.42-2.96 4.36-5.38 5.38',
      },
      '2',
    ),
  ],
  'SensorOccupiedTwoTone',
);
export const SensorWindowIcon = (props?: KTRawAttr) => {
  const s = _SensorWindowIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorWindowIcon = svg(
  svg('path', {
    d: 'M18 4v16H6V4zm0-2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M7 19h10v-6H7zm3-9h4v1h3V5H7v6h3z',
  }),
  'SensorWindow',
);
export const SensorWindowOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SensorWindowOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorWindowOutlinedIcon = svg(
  svg('path', {
    d: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 2v7h-4v-1h-4v1H6V4zM6 20v-7h12v7z',
  }),
  'SensorWindowOutlined',
);
export const SensorWindowRoundedIcon = (props?: KTRawAttr) => {
  const s = _SensorWindowRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorWindowRoundedIcon = svg(
  svg('path', {
    d: 'M18 4v16H6V4zm0-2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M7 19h10v-6H7zm3-9h4v1h3V5H7v6h3z',
  }),
  'SensorWindowRounded',
);
export const SensorWindowSharpIcon = (props?: KTRawAttr) => {
  const s = _SensorWindowSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorWindowSharpIcon = svg(
  svg('path', { d: 'M18 4v16H6V4zM4 2v20h16V2zm3 17h10v-6H7zm3-9h4v1h3V5H7v6h3z' }),
  'SensorWindowSharp',
);
export const SensorWindowTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SensorWindowTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorWindowTwoToneIcon = svg(
  [
    svg('path', { d: 'M18 4v7h-4v-1h-4v1H6V4zM6 20v-7h12v7z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 2v7h-4v-1h-4v1H6V4zM6 20v-7h12v7z',
      },
      '1',
    ),
  ],
  'SensorWindowTwoTone',
);
export const SensorsIcon = (props?: KTRawAttr) => {
  const s = _SensorsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorsIcon = svg(
  svg('path', {
    d: 'M7.76 16.24C6.67 15.16 6 13.66 6 12s.67-3.16 1.76-4.24l1.42 1.42C8.45 9.9 8 10.9 8 12s.45 2.1 1.17 2.83zm8.48 0C17.33 15.16 18 13.66 18 12s-.67-3.16-1.76-4.24l-1.42 1.42C15.55 9.9 16 10.9 16 12s-.45 2.1-1.17 2.83zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m8 2c0 2.21-.9 4.21-2.35 5.65l1.42 1.42C20.88 17.26 22 14.76 22 12s-1.12-5.26-2.93-7.07l-1.42 1.42C19.1 7.79 20 9.79 20 12M6.35 6.35 4.93 4.93C3.12 6.74 2 9.24 2 12s1.12 5.26 2.93 7.07l1.42-1.42C4.9 16.21 4 14.21 4 12s.9-4.21 2.35-5.65',
  }),
  'Sensors',
);
export const SensorsOffIcon = (props?: KTRawAttr) => {
  const s = _SensorsOffIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorsOffIcon = svg(
  svg('path', {
    d: 'M8.14 10.96c-.09.33-.14.68-.14 1.04 0 1.1.45 2.1 1.17 2.83l-1.42 1.42C6.67 15.16 6 13.66 6 12c0-.93.21-1.8.58-2.59L5.11 7.94C4.4 9.13 4 10.52 4 12c0 2.21.9 4.21 2.35 5.65l-1.42 1.42C3.12 17.26 2 14.76 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41zm9.28 3.63c.37-.79.58-1.66.58-2.59 0-1.66-.67-3.16-1.76-4.24l-1.42 1.42C15.55 9.9 16 10.9 16 12c0 .36-.05.71-.14 1.04zM20 12c0 1.48-.4 2.87-1.11 4.06l1.45 1.45C21.39 15.93 22 14.04 22 12c0-2.76-1.12-5.26-2.93-7.07l-1.42 1.42C19.1 7.79 20 9.79 20 12',
  }),
  'SensorsOff',
);
export const SensorsOffOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SensorsOffOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorsOffOutlinedIcon = svg(
  svg('path', {
    d: 'M8.14 10.96c-.09.33-.14.68-.14 1.04 0 1.1.45 2.1 1.17 2.83l-1.42 1.42C6.67 15.16 6 13.66 6 12c0-.93.21-1.8.58-2.59L5.11 7.94C4.4 9.13 4 10.52 4 12c0 2.21.9 4.21 2.35 5.65l-1.42 1.42C3.12 17.26 2 14.76 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41zm9.28 3.63c.37-.79.58-1.66.58-2.59 0-1.66-.67-3.16-1.76-4.24l-1.42 1.42C15.55 9.9 16 10.9 16 12c0 .36-.05.71-.14 1.04zM20 12c0 1.48-.4 2.87-1.11 4.06l1.45 1.45C21.39 15.93 22 14.04 22 12c0-2.76-1.12-5.26-2.93-7.07l-1.42 1.42C19.1 7.79 20 9.79 20 12',
  }),
  'SensorsOffOutlined',
);
export const SensorsOffRoundedIcon = (props?: KTRawAttr) => {
  const s = _SensorsOffRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorsOffRoundedIcon = svg(
  svg('path', {
    d: 'M5.68 18.32c-.42.42-1.12.39-1.5-.08C2.82 16.53 2 14.36 2 12c0-2.04.61-3.93 1.66-5.51L2.1 4.93a.996.996 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l16.97 16.97c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L8.14 10.96c-.09.33-.14.68-.14 1.04 0 .8.24 1.55.64 2.17.27.41.24.94-.1 1.29-.43.43-1.17.4-1.51-.11C6.38 14.4 6 13.24 6 12c0-.93.21-1.8.58-2.59L5.11 7.94C4.4 9.13 4 10.52 4 12c0 1.89.66 3.63 1.76 5 .32.39.28.96-.08 1.32m9.78-9.78c-.35.35-.37.88-.11 1.29.41.62.65 1.37.65 2.17 0 .36-.05.71-.14 1.04l1.55 1.55c.38-.79.59-1.66.59-2.59 0-1.24-.38-2.4-1.03-3.36-.34-.5-1.07-.54-1.51-.1m2.86-2.86c-.36.36-.4.92-.08 1.32 1.1 1.37 1.76 3.11 1.76 5 0 1.48-.4 2.87-1.11 4.06l1.45 1.45C21.39 15.93 22 14.04 22 12c0-2.36-.82-4.53-2.18-6.24-.38-.47-1.08-.5-1.5-.08',
  }),
  'SensorsOffRounded',
);
export const SensorsOffSharpIcon = (props?: KTRawAttr) => {
  const s = _SensorsOffSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorsOffSharpIcon = svg(
  svg('path', {
    d: 'M8.14 10.96c-.09.33-.14.68-.14 1.04 0 1.1.45 2.1 1.17 2.83l-1.42 1.42C6.67 15.16 6 13.66 6 12c0-.93.21-1.8.58-2.59L5.11 7.94C4.4 9.13 4 10.52 4 12c0 2.21.9 4.21 2.35 5.65l-1.42 1.42C3.12 17.26 2 14.76 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41zm9.28 3.63c.37-.79.58-1.66.58-2.59 0-1.66-.67-3.16-1.76-4.24l-1.42 1.42C15.55 9.9 16 10.9 16 12c0 .36-.05.71-.14 1.04zM20 12c0 1.48-.4 2.87-1.11 4.06l1.45 1.45C21.39 15.93 22 14.04 22 12c0-2.76-1.12-5.26-2.93-7.07l-1.42 1.42C19.1 7.79 20 9.79 20 12',
  }),
  'SensorsOffSharp',
);
export const SensorsOffTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SensorsOffTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorsOffTwoToneIcon = svg(
  svg('path', {
    d: 'M8.14 10.96c-.09.33-.14.68-.14 1.04 0 1.1.45 2.1 1.17 2.83l-1.42 1.42C6.67 15.16 6 13.66 6 12c0-.93.21-1.8.58-2.59L5.11 7.94C4.4 9.13 4 10.52 4 12c0 2.21.9 4.21 2.35 5.65l-1.42 1.42C3.12 17.26 2 14.76 2 12c0-2.04.61-3.93 1.66-5.51L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41zm9.28 3.63c.37-.79.58-1.66.58-2.59 0-1.66-.67-3.16-1.76-4.24l-1.42 1.42C15.55 9.9 16 10.9 16 12c0 .36-.05.71-.14 1.04zM20 12c0 1.48-.4 2.87-1.11 4.06l1.45 1.45C21.39 15.93 22 14.04 22 12c0-2.76-1.12-5.26-2.93-7.07l-1.42 1.42C19.1 7.79 20 9.79 20 12',
  }),
  'SensorsOffTwoTone',
);
export const SensorsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SensorsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorsOutlinedIcon = svg(
  svg('path', {
    d: 'M7.76 16.24C6.67 15.16 6 13.66 6 12s.67-3.16 1.76-4.24l1.42 1.42C8.45 9.9 8 10.9 8 12s.45 2.1 1.17 2.83zm8.48 0C17.33 15.16 18 13.66 18 12s-.67-3.16-1.76-4.24l-1.42 1.42C15.55 9.9 16 10.9 16 12s-.45 2.1-1.17 2.83zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m8 2c0 2.21-.9 4.21-2.35 5.65l1.42 1.42C20.88 17.26 22 14.76 22 12s-1.12-5.26-2.93-7.07l-1.42 1.42C19.1 7.79 20 9.79 20 12M6.35 6.35 4.93 4.93C3.12 6.74 2 9.24 2 12s1.12 5.26 2.93 7.07l1.42-1.42C4.9 16.21 4 14.21 4 12s.9-4.21 2.35-5.65',
  }),
  'SensorsOutlined',
);
export const SensorsRoundedIcon = (props?: KTRawAttr) => {
  const s = _SensorsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorsRoundedIcon = svg(
  svg('path', {
    d: 'M8.54 8.54c.35.35.37.88.1 1.29C8.24 10.45 8 11.2 8 12s.24 1.55.64 2.17c.27.41.24.95-.11 1.29-.43.43-1.17.4-1.51-.11C6.38 14.4 6 13.24 6 12c0-1.21.36-2.33.97-3.28.36-.54 1.11-.64 1.57-.18m6.92 6.92c.43.43 1.17.4 1.51-.11C17.62 14.4 18 13.24 18 12s-.38-2.4-1.03-3.36c-.34-.5-1.08-.54-1.51-.11-.35.35-.37.88-.11 1.29.41.63.65 1.38.65 2.18s-.24 1.55-.64 2.17c-.27.41-.24.95.1 1.29M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6.32 8.32c.42.42 1.12.39 1.5-.08C21.18 16.53 22 14.36 22 12s-.82-4.53-2.18-6.24c-.37-.47-1.07-.5-1.5-.08-.36.36-.4.92-.08 1.32 1.1 1.37 1.76 3.11 1.76 5s-.66 3.63-1.76 5c-.32.39-.28.96.08 1.32M5.68 5.68c-.42-.42-1.12-.39-1.5.08C2.82 7.47 2 9.64 2 12s.82 4.53 2.18 6.24c.37.47 1.07.5 1.5.08.36-.36.4-.92.08-1.32C4.66 15.63 4 13.89 4 12s.66-3.63 1.76-5c.32-.39.28-.96-.08-1.32',
  }),
  'SensorsRounded',
);
export const SensorsSharpIcon = (props?: KTRawAttr) => {
  const s = _SensorsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorsSharpIcon = svg(
  svg('path', {
    d: 'M7.76 16.24C6.67 15.16 6 13.66 6 12s.67-3.16 1.76-4.24l1.42 1.42C8.45 9.9 8 10.9 8 12s.45 2.1 1.17 2.83zm8.48 0C17.33 15.16 18 13.66 18 12s-.67-3.16-1.76-4.24l-1.42 1.42C15.55 9.9 16 10.9 16 12s-.45 2.1-1.17 2.83zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m8 2c0 2.21-.9 4.21-2.35 5.65l1.42 1.42C20.88 17.26 22 14.76 22 12s-1.12-5.26-2.93-7.07l-1.42 1.42C19.1 7.79 20 9.79 20 12M6.35 6.35 4.93 4.93C3.12 6.74 2 9.24 2 12s1.12 5.26 2.93 7.07l1.42-1.42C4.9 16.21 4 14.21 4 12s.9-4.21 2.35-5.65',
  }),
  'SensorsSharp',
);
export const SensorsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SensorsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SensorsTwoToneIcon = svg(
  svg('path', {
    d: 'M7.76 16.24C6.67 15.16 6 13.66 6 12s.67-3.16 1.76-4.24l1.42 1.42C8.45 9.9 8 10.9 8 12s.45 2.1 1.17 2.83zm8.48 0C17.33 15.16 18 13.66 18 12s-.67-3.16-1.76-4.24l-1.42 1.42C15.55 9.9 16 10.9 16 12s-.45 2.1-1.17 2.83zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m8 2c0 2.21-.9 4.21-2.35 5.65l1.42 1.42C20.88 17.26 22 14.76 22 12s-1.12-5.26-2.93-7.07l-1.42 1.42C19.1 7.79 20 9.79 20 12M6.35 6.35 4.93 4.93C3.12 6.74 2 9.24 2 12s1.12 5.26 2.93 7.07l1.42-1.42C4.9 16.21 4 14.21 4 12s.9-4.21 2.35-5.65',
  }),
  'SensorsTwoTone',
);
export const SentimentDissatisfiedIcon = (props?: KTRawAttr) => {
  const s = _SentimentDissatisfiedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentDissatisfiedIcon = svg(
  [
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '0'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '1'),
    svg(
      'path',
      {
        d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-3.5c.73 0 1.39.19 1.97.53.12-.14.86-.98 1.01-1.14-.85-.56-1.87-.89-2.98-.89s-2.13.33-2.99.88c.97 1.09.01.02 1.01 1.14.59-.33 1.25-.52 1.98-.52',
      },
      '2',
    ),
  ],
  'SentimentDissatisfied',
);
export const SentimentDissatisfiedOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SentimentDissatisfiedOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentDissatisfiedOutlinedIcon = svg(
  [
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '0'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '1'),
    svg(
      'path',
      {
        d: 'M12 14c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5m-.01-12C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
      },
      '2',
    ),
  ],
  'SentimentDissatisfiedOutlined',
);
export const SentimentDissatisfiedRoundedIcon = (props?: KTRawAttr) => {
  const s = _SentimentDissatisfiedRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentDissatisfiedRoundedIcon = svg(
  [
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '0'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '1'),
    svg(
      'path',
      {
        d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-6c-1.9 0-3.63.97-4.65 2.58-.22.35-.11.81.24 1.03s.81.11 1.03-.24c.74-1.18 2-1.88 3.38-1.88s2.64.7 3.38 1.88c.14.23.39.35.64.35.14 0 .27-.04.4-.11.35-.22.46-.68.24-1.03C15.63 14.96 13.9 14 12 14',
      },
      '2',
    ),
  ],
  'SentimentDissatisfiedRounded',
);
export const SentimentDissatisfiedSharpIcon = (props?: KTRawAttr) => {
  const s = _SentimentDissatisfiedSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentDissatisfiedSharpIcon = svg(
  [
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '0'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '1'),
    svg(
      'path',
      {
        d: 'M12 14c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5m-.01-12C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
      },
      '2',
    ),
  ],
  'SentimentDissatisfiedSharp',
);
export const SentimentDissatisfiedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SentimentDissatisfiedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentDissatisfiedTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m3.5 4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8m6.95 9.5c-.7-1.19-1.97-2-3.45-2s-2.76.81-3.45 2H6.88C7.68 15.45 9.67 14 12 14s4.32 1.45 5.12 3.5z',
        opacity: '.3',
      },
      '0',
    ),
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '1'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '2'),
    svg(
      'path',
      {
        d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5',
      },
      '3',
    ),
  ],
  'SentimentDissatisfiedTwoTone',
);
export const SentimentNeutralIcon = (props?: KTRawAttr) => {
  const s = _SentimentNeutralIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentNeutralIcon = svg(
  [
    svg('path', { d: 'M9 15.5h6v1H9z' }, '0'),
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '1'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '2'),
    svg(
      'path',
      {
        d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
      },
      '3',
    ),
  ],
  'SentimentNeutral',
);
export const SentimentNeutralOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SentimentNeutralOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentNeutralOutlinedIcon = svg(
  [
    svg('path', { d: 'M9 14h6v1.5H9z' }, '0'),
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '1'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '2'),
    svg(
      'path',
      {
        d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
      },
      '3',
    ),
  ],
  'SentimentNeutralOutlined',
);
export const SentimentNeutralRoundedIcon = (props?: KTRawAttr) => {
  const s = _SentimentNeutralRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentNeutralRoundedIcon = svg(
  [
    svg(
      'path',
      { d: 'M9.75 15.5h4.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4.5c-.41 0-.75.34-.75.75s.34.75.75.75' },
      '0',
    ),
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '1'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '2'),
    svg(
      'path',
      {
        d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
      },
      '3',
    ),
  ],
  'SentimentNeutralRounded',
);
export const SentimentNeutralSharpIcon = (props?: KTRawAttr) => {
  const s = _SentimentNeutralSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentNeutralSharpIcon = svg(
  svg('path', {
    d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M7 9.5C7 8.67 7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5m8 6H9V14h6zm.5-4.5c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
  }),
  'SentimentNeutralSharp',
);
export const SentimentNeutralTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SentimentNeutralTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentNeutralTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8M7 9.5C7 8.67 7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5m8 6H9V14h6zm.5-4.5c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
        opacity: '.3',
      },
      '0',
    ),
    svg('path', { d: 'M9 14h6v1.5H9z' }, '1'),
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '2'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '3'),
    svg(
      'path',
      {
        d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
      },
      '4',
    ),
  ],
  'SentimentNeutralTwoTone',
);
export const SentimentSatisfiedIcon = (props?: KTRawAttr) => {
  const s = _SentimentSatisfiedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentSatisfiedIcon = svg(
  [
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '0'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '1'),
    svg(
      'path',
      {
        d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-4c-.73 0-1.38-.18-1.96-.52-.12.14-.86.98-1.01 1.15.86.55 1.87.87 2.97.87 1.11 0 2.12-.33 2.98-.88-.97-1.09-.01-.02-1.01-1.15-.59.35-1.24.53-1.97.53',
      },
      '2',
    ),
  ],
  'SentimentSatisfied',
);
export const SentimentSatisfiedAltIcon = (props?: KTRawAttr) => {
  const s = _SentimentSatisfiedAltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentSatisfiedAltIcon = svg(
  [
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '0'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '1'),
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '2'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '3'),
    svg(
      'path',
      {
        d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5',
      },
      '4',
    ),
  ],
  'SentimentSatisfiedAlt',
);
export const SentimentSatisfiedAltOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SentimentSatisfiedAltOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentSatisfiedAltOutlinedIcon = svg(
  [
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '0'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '1'),
    svg(
      'path',
      {
        d: 'M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2m-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
      },
      '2',
    ),
  ],
  'SentimentSatisfiedAltOutlined',
);
export const SentimentSatisfiedAltRoundedIcon = (props?: KTRawAttr) => {
  const s = _SentimentSatisfiedAltRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentSatisfiedAltRoundedIcon = svg(
  [
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '0'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '1'),
    svg(
      'path',
      {
        d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m4.41-6.11c-.35-.22-.82-.11-1.03.24-.74 1.17-2 1.87-3.38 1.87s-2.64-.7-3.38-1.88c-.22-.35-.68-.46-1.03-.24s-.46.68-.24 1.03C8.37 16.54 10.1 17.5 12 17.5s3.63-.97 4.65-2.58c.22-.35.11-.81-.24-1.03',
      },
      '2',
    ),
  ],
  'SentimentSatisfiedAltRounded',
);
export const SentimentSatisfiedAltSharpIcon = (props?: KTRawAttr) => {
  const s = _SentimentSatisfiedAltSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentSatisfiedAltSharpIcon = svg(
  [
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '0'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '1'),
    svg(
      'path',
      {
        d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-4c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2',
      },
      '2',
    ),
  ],
  'SentimentSatisfiedAltSharp',
);
export const SentimentSatisfiedAltTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SentimentSatisfiedAltTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentSatisfiedAltTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m3.5 4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8m3.5 9.5c-2.33 0-4.32-1.45-5.12-3.5h1.67c.7 1.19 1.97 2 3.45 2s2.76-.81 3.45-2h1.67c-.8 2.05-2.79 3.5-5.12 3.5',
        opacity: '.3',
      },
      '0',
    ),
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '1'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '2'),
    svg(
      'path',
      {
        d: 'M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2m-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
      },
      '3',
    ),
  ],
  'SentimentSatisfiedAltTwoTone',
);
export const SentimentSatisfiedOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SentimentSatisfiedOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentSatisfiedOutlinedIcon = svg(
  [
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '0'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '1'),
    svg(
      'path',
      {
        d: 'M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2m-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
      },
      '2',
    ),
  ],
  'SentimentSatisfiedOutlined',
);
export const SentimentSatisfiedRoundedIcon = (props?: KTRawAttr) => {
  const s = _SentimentSatisfiedRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentSatisfiedRoundedIcon = svg(
  [
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '0'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '1'),
    svg(
      'path',
      {
        d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m4.41-6.11c-.35-.22-.82-.11-1.03.24-.74 1.17-2 1.87-3.38 1.87s-2.64-.7-3.38-1.88c-.22-.35-.68-.46-1.03-.24s-.46.68-.24 1.03C8.37 16.54 10.1 17.5 12 17.5s3.63-.97 4.65-2.58c.22-.35.11-.81-.24-1.03',
      },
      '2',
    ),
  ],
  'SentimentSatisfiedRounded',
);
export const SentimentSatisfiedSharpIcon = (props?: KTRawAttr) => {
  const s = _SentimentSatisfiedSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentSatisfiedSharpIcon = svg(
  [
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '0'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '1'),
    svg(
      'path',
      {
        d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-4c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2',
      },
      '2',
    ),
  ],
  'SentimentSatisfiedSharp',
);
export const SentimentSatisfiedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SentimentSatisfiedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentSatisfiedTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m3.5 4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m-7 0c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8m3.5 9.5c-2.33 0-4.32-1.45-5.12-3.5h1.67c.7 1.19 1.97 2 3.45 2s2.75-.81 3.45-2h1.67c-.8 2.05-2.79 3.5-5.12 3.5',
        opacity: '.3',
      },
      '0',
    ),
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '1'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '2'),
    svg(
      'path',
      {
        d: 'M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2m-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
      },
      '3',
    ),
  ],
  'SentimentSatisfiedTwoTone',
);
export const SentimentVeryDissatisfiedIcon = (props?: KTRawAttr) => {
  const s = _SentimentVeryDissatisfiedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentVeryDissatisfiedIcon = svg(
  [
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '0'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '1'),
    svg(
      'path',
      {
        d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5',
      },
      '2',
    ),
  ],
  'SentimentVeryDissatisfied',
);
export const SentimentVeryDissatisfiedOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SentimentVeryDissatisfiedOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentVeryDissatisfiedOutlinedIcon = svg(
  svg('path', {
    d: 'M12 13.5c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5M7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zm4.17-10C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m4.18-12.24-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06z',
  }),
  'SentimentVeryDissatisfiedOutlined',
);
export const SentimentVeryDissatisfiedRoundedIcon = (props?: KTRawAttr) => {
  const s = _SentimentVeryDissatisfiedRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentVeryDissatisfiedRoundedIcon = svg(
  svg('path', {
    d: 'M12 13.5c-2.03 0-3.8 1.11-4.75 2.75-.19.33.06.75.44.75h8.62c.38 0 .63-.42.44-.75-.95-1.64-2.72-2.75-4.75-2.75m-3.65-2.03.53-.53.53.53c.29.29.77.29 1.06 0s.29-.77 0-1.06l-.53-.53.53-.53c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0l-.53.53-.53-.53c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l.53.53-.53.53c-.29.29-.29.77 0 1.06s.77.29 1.06 0M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m3.65-11.71-.53.53-.53-.53c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06l.53.53-.53.53c-.29.29-.29.77 0 1.06s.77.29 1.06 0l.53-.53.53.53c.29.29.77.29 1.06 0s.29-.77 0-1.06l-.53-.53.53-.53c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0',
  }),
  'SentimentVeryDissatisfiedRounded',
);
export const SentimentVeryDissatisfiedSharpIcon = (props?: KTRawAttr) => {
  const s = _SentimentVeryDissatisfiedSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentVeryDissatisfiedSharpIcon = svg(
  svg('path', {
    d: 'M12 13.5c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5M7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zm4.17-10C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m4.18-12.24-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06z',
  }),
  'SentimentVeryDissatisfiedSharp',
);
export const SentimentVeryDissatisfiedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SentimentVeryDissatisfiedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentVeryDissatisfiedTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8M6.76 8.82l1.06-1.06 1.06 1.06 1.06-1.06L11 8.82 9.94 9.88 11 10.94 9.94 12l-1.06-1.06L7.82 12l-1.06-1.06 1.06-1.06zM6.89 17c.8-2.04 2.78-3.5 5.11-3.5s4.31 1.46 5.11 3.5zm10.35-6.06L16.18 12l-1.06-1.06L14.06 12 13 10.94l1.06-1.06L13 8.82l1.06-1.06 1.06 1.06 1.06-1.06 1.06 1.06-1.06 1.06z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 13.5c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5M7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zm4.17-10C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m4.18-12.24-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06z',
      },
      '1',
    ),
  ],
  'SentimentVeryDissatisfiedTwoTone',
);
export const SentimentVerySatisfiedIcon = (props?: KTRawAttr) => {
  const s = _SentimentVerySatisfiedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentVerySatisfiedIcon = svg(
  [
    svg('circle', { cx: '15.5', cy: '9.5', r: '1.5' }, '0'),
    svg('circle', { cx: '8.5', cy: '9.5', r: '1.5' }, '1'),
    svg(
      'path',
      {
        d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4z',
      },
      '2',
    ),
  ],
  'SentimentVerySatisfied',
);
export const SentimentVerySatisfiedOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SentimentVerySatisfiedOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentVerySatisfiedOutlinedIcon = svg(
  svg('path', {
    d: 'M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5',
  }),
  'SentimentVerySatisfiedOutlined',
);
export const SentimentVerySatisfiedRoundedIcon = (props?: KTRawAttr) => {
  const s = _SentimentVerySatisfiedRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentVerySatisfiedRoundedIcon = svg(
  svg('path', {
    d: 'm8.88 9.94.53.53c.29.29.77.29 1.06 0s.29-.77 0-1.06l-.88-.88a.996.996 0 0 0-1.41 0l-.89.88c-.29.29-.29.77 0 1.06s.77.29 1.06 0zM12 17.5c2.03 0 3.8-1.11 4.75-2.75.19-.33-.05-.75-.44-.75H7.69c-.38 0-.63.42-.44.75.95 1.64 2.72 2.75 4.75 2.75m1.53-7.03c.29.29.77.29 1.06 0l.53-.53.53.53c.29.29.77.29 1.06 0s.29-.77 0-1.06l-.88-.88a.996.996 0 0 0-1.41 0l-.88.88c-.3.29-.3.77-.01 1.06M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
  }),
  'SentimentVerySatisfiedRounded',
);
export const SentimentVerySatisfiedSharpIcon = (props?: KTRawAttr) => {
  const s = _SentimentVerySatisfiedSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentVerySatisfiedSharpIcon = svg(
  svg('path', {
    d: 'M8.88 9.94 9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5m1-7.56L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zM11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
  }),
  'SentimentVerySatisfiedSharp',
);
export const SentimentVerySatisfiedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SentimentVerySatisfiedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SentimentVerySatisfiedTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8M8.88 7.82 11 9.94 9.94 11 8.88 9.94 7.82 11 6.76 9.94zM12 17.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5m4.18-6.5-1.06-1.06L14.06 11 13 9.94l2.12-2.12 2.12 2.12z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M8.88 9.94 9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zm4.12 0L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zM11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-2.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5',
      },
      '1',
    ),
  ],
  'SentimentVerySatisfiedTwoTone',
);
export const SetMealIcon = (props?: KTRawAttr) => {
  const s = _SetMealIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SetMealIcon = svg(
  svg('path', {
    d: 'm21.05 17.56-17.97.94L3 17l17.98-.94zM21 19.48H3v1.5h18zM22 5v7c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2m-2 1c-1.68 0-3.04.98-3.21 2.23-.64-.73-2.73-2.73-6.54-2.73-4.67 0-6.75 3-6.75 3s2.08 3 6.75 3c3.81 0 5.9-2 6.54-2.73C16.96 10.02 18.32 11 20 11z',
  }),
  'SetMeal',
);
export const SetMealOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SetMealOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SetMealOutlinedIcon = svg(
  svg('path', {
    d: 'm21.05 17.56-17.97.94L3 17l17.98-.94zM21 19.48H3v1.5h18zM23 13V4c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2m-2 0H3V4h18zm-1-7c-1.68 0-3.04.98-3.21 2.23-.64-.73-2.73-2.73-6.54-2.73-4.67 0-6.75 3-6.75 3s2.08 3 6.75 3c3.81 0 5.9-2 6.54-2.73C16.96 10.02 18.32 11 20 11z',
  }),
  'SetMealOutlined',
);
export const SetMealRoundedIcon = (props?: KTRawAttr) => {
  const s = _SetMealRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SetMealRoundedIcon = svg(
  svg('path', {
    d: 'm20.3 17.6-16.47.86c-.41.02-.77-.3-.79-.71s.3-.77.71-.79l16.48-.86c.41-.02.77.3.79.71s-.3.77-.72.79m-.05 1.88H3.75c-.41 0-.75.34-.75.75s.34.75.75.75h16.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75M22 5v7c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2m-2.88 1.09c-1.25.27-2.19 1.11-2.33 2.14-.64-.73-2.73-2.73-6.54-2.73-3.44 0-5.48 1.63-6.31 2.49-.28.29-.28.74 0 1.03.83.86 2.87 2.49 6.31 2.49 3.81 0 5.9-2 6.54-2.73.14 1.02 1.08 1.86 2.33 2.14.46.1.88-.28.88-.74V6.84c0-.47-.43-.85-.88-.75',
  }),
  'SetMealRounded',
);
export const SetMealSharpIcon = (props?: KTRawAttr) => {
  const s = _SetMealSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SetMealSharpIcon = svg(
  svg('path', {
    d: 'm21.05 17.56-17.97.94L3 17l17.98-.94zM21 19.48H3v1.5h18zM22 3v11H2V3zm-2 3c-1.68 0-3.04.98-3.21 2.23-.64-.73-2.73-2.73-6.54-2.73-4.67 0-6.75 3-6.75 3s2.08 3 6.75 3c3.81 0 5.9-2 6.54-2.73C16.96 10.02 18.32 11 20 11z',
  }),
  'SetMealSharp',
);
export const SetMealTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SetMealTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SetMealTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21 13H3V4h18zm-1-7c-1.68 0-3.04.98-3.21 2.23-.64-.73-2.73-2.73-6.54-2.73-4.67 0-6.75 3-6.75 3s2.08 3 6.75 3c3.81 0 5.9-2 6.54-2.73C16.96 10.02 18.32 11 20 11z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm21.05 17.56-17.97.94L3 17l17.98-.94zM21 19.48H3v1.5h18zM23 13V4c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2m-2 0H3V4h18zm-1-7c-1.68 0-3.04.98-3.21 2.23-.64-.73-2.73-2.73-6.54-2.73-4.67 0-6.75 3-6.75 3s2.08 3 6.75 3c3.81 0 5.9-2 6.54-2.73C16.96 10.02 18.32 11 20 11z',
      },
      '1',
    ),
  ],
  'SetMealTwoTone',
);
export const SettingsIcon = (props?: KTRawAttr) => {
  const s = _SettingsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsIcon = svg(
  svg('path', {
    d: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6',
  }),
  'Settings',
);
export const SettingsAccessibilityIcon = (props?: KTRawAttr) => {
  const s = _SettingsAccessibilityIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsAccessibilityIcon = svg(
  svg('path', {
    d: 'M20.5 4c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 6c1.86.5 4 .83 6 1v12h2v-6h2v6h2V7c2-.17 4.14-.5 6-1zM12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2M7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2z',
  }),
  'SettingsAccessibility',
);
export const SettingsAccessibilityOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsAccessibilityOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsAccessibilityOutlinedIcon = svg(
  svg('path', {
    d: 'M20.5 4c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 6c1.86.5 4 .83 6 1v12h2v-6h2v6h2V7c2-.17 4.14-.5 6-1zM12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2M7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2z',
  }),
  'SettingsAccessibilityOutlined',
);
export const SettingsAccessibilityRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsAccessibilityRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsAccessibilityRoundedIcon = svg(
  svg('path', {
    d: 'M20.74 4.96c-.13-.53-.67-.85-1.2-.73-2.38.54-5.05.77-7.54.77s-5.16-.23-7.54-.76c-.54-.12-1.07.19-1.2.73l-.02.05c-.13.54.19 1.1.73 1.22 1.62.37 3.37.62 5.03.76v11c0 .55.45 1 1 1s1-.45 1-1v-5h2v5c0 .55.45 1 1 1s1-.45 1-1V7c1.66-.14 3.41-.39 5.03-.76.54-.12.86-.68.73-1.22zM12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2M8 24c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1',
  }),
  'SettingsAccessibilityRounded',
);
export const SettingsAccessibilitySharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsAccessibilitySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsAccessibilitySharpIcon = svg(
  svg('path', {
    d: 'M20.5 4c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 6c1.86.5 4 .83 6 1v12h2v-6h2v6h2V7c2-.17 4.14-.5 6-1zM12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2M7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2z',
  }),
  'SettingsAccessibilitySharp',
);
export const SettingsAccessibilityTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsAccessibilityTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsAccessibilityTwoToneIcon = svg(
  svg('path', {
    d: 'M20.5 4c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 6c1.86.5 4 .83 6 1v12h2v-6h2v6h2V7c2-.17 4.14-.5 6-1zM12 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2M7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2z',
  }),
  'SettingsAccessibilityTwoTone',
);
export const SettingsApplicationsIcon = (props?: KTRawAttr) => {
  const s = _SettingsApplicationsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsApplicationsIcon = svg(
  svg('path', {
    d: 'M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69s.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69',
  }),
  'SettingsApplications',
);
export const SettingsApplicationsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsApplicationsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsApplicationsOutlinedIcon = svg(
  svg('path', {
    d: 'm6.21 13.97 1.2 2.07c.08.13.23.18.37.13l1.49-.6c.31.24.64.44 1.01.59l.22 1.59c.03.14.15.25.3.25h2.4c.15 0 .27-.11.3-.26l.22-1.59c.36-.15.7-.35 1.01-.59l1.49.6c.14.05.29 0 .37-.13l1.2-2.07c.08-.13.04-.29-.07-.39l-1.27-.99c.03-.19.04-.39.04-.58 0-.2-.02-.39-.04-.59l1.27-.99c.11-.09.15-.26.07-.39l-1.2-2.07c-.08-.13-.23-.18-.37-.13l-1.49.6c-.31-.24-.64-.44-1.01-.59l-.22-1.59c-.03-.14-.15-.25-.3-.25h-2.4c-.15 0-.27.11-.3.26l-.22 1.59c-.36.15-.71.34-1.01.58l-1.49-.6c-.14-.05-.29 0-.37.13l-1.2 2.07c-.08.13-.04.29.07.39l1.27.99c-.03.2-.05.39-.05.59s.02.39.04.59l-1.27.99c-.11.1-.14.26-.06.39M12 10.29c.94 0 1.71.77 1.71 1.71s-.77 1.71-1.71 1.71-1.71-.77-1.71-1.71.77-1.71 1.71-1.71M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m0 16H5V5h14z',
  }),
  'SettingsApplicationsOutlined',
);
export const SettingsApplicationsRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsApplicationsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsApplicationsRoundedIcon = svg(
  [
    svg('circle', { cx: '12', cy: '12', r: '2' }, '0'),
    svg(
      'path',
      {
        d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-3.25 9c0 .22-.03.42-.06.63l.84.73c.18.16.22.42.1.63l-.59 1.02c-.12.21-.37.3-.59.22l-1.06-.36q-.48.405-1.08.63l-.22 1.09c-.05.23-.25.4-.49.4h-1.18c-.24 0-.44-.17-.49-.4l-.22-1.09q-.6-.225-1.08-.63l-1.06.36c-.23.08-.47-.02-.59-.22l-.59-1.02c-.12-.21-.08-.47.1-.63l.84-.73c-.05-.21-.08-.41-.08-.63s.03-.42.06-.63l-.84-.73c-.18-.16-.22-.42-.1-.63l.59-1.02c.12-.21.37-.3.59-.22l1.06.36q.48-.405 1.08-.63l.22-1.09c.06-.24.26-.41.5-.41h1.18c.24 0 .44.17.49.4l.22 1.09q.6.225 1.08.63l1.06-.36c.23-.08.47.02.59.22l.59 1.02c.12.21.08.47-.1.63l-.84.73c.04.22.07.42.07.64',
      },
      '1',
    ),
  ],
  'SettingsApplicationsRounded',
);
export const SettingsApplicationsSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsApplicationsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsApplicationsSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-1.75 9c0 .24-.02.47-.05.71l.01-.02 1.47 1.16c.14.1.23.18.23.18l-1.7 2.94-2.02-.8.02-.03c-.37.29-.77.53-1.21.71h.01l-.27 1.85c-.02.17-.04.3-.04.3h-3.4l-.31-2.15H10c-.44-.18-.84-.42-1.21-.71l.02.03-2.02.8-1.7-2.94s.1-.08.23-.18l1.47-1.16.01.02c-.03-.24-.05-.47-.05-.71s.02-.47.05-.69l-.01.01-1.7-1.34 1.7-2.95 2.01.81v.01c.37-.28.77-.52 1.2-.7h-.01L10.3 5h3.41l.3 2.15H14c.43.18.83.42 1.2.7v-.01l2.01-.81 1.7 2.95-1.71 1.34-.01-.01q.06.33.06.69',
      },
      '0',
    ),
    svg('circle', { cx: '12', cy: '12', r: '2.45' }, '1'),
  ],
  'SettingsApplicationsSharp',
);
export const SettingsApplicationsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsApplicationsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsApplicationsTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 19h14V5H5zm2.5-7c0-.2.02-.39.04-.58l-1.27-.99c-.11-.09-.15-.26-.07-.39l1.2-2.07c.08-.13.23-.18.37-.13l1.49.6c.31-.25.66-.44 1.02-.6l.22-1.59c.03-.14.15-.25.3-.25h2.4c.15 0 .27.11.3.25l.22 1.59c.37.15.7.35 1.01.59l1.49-.6c.14-.05.29 0 .37.13l1.2 2.07c.08.13.04.29-.07.39l-1.27.99c.03.2.04.39.04.59s-.02.39-.04.58l1.27.99c.11.09.15.26.07.39l-1.2 2.07c-.08.13-.23.18-.37.13l-1.49-.6c-.31.24-.65.44-1.01.59l-.22 1.59c-.03.15-.15.26-.3.26h-2.4c-.15 0-.27-.11-.3-.25l-.22-1.59c-.37-.15-.7-.35-1.01-.59l-1.49.6c-.14.05-.29 0-.37-.13l-1.2-2.07c-.08-.13-.04-.29.07-.39l1.27-.99c-.03-.2-.05-.39-.05-.59',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm6.21 13.97 1.2 2.07c.08.13.23.18.37.13l1.49-.6c.31.24.64.44 1.01.59l.22 1.59c.03.14.15.25.3.25h2.4c.15 0 .27-.11.3-.26l.22-1.59c.36-.15.7-.35 1.01-.59l1.49.6c.14.05.29 0 .37-.13l1.2-2.07c.08-.13.04-.29-.07-.39l-1.27-.99c.03-.19.04-.39.04-.58 0-.2-.02-.39-.04-.59l1.27-.99c.11-.09.15-.26.07-.39l-1.2-2.07c-.08-.13-.23-.18-.37-.13l-1.49.6c-.31-.24-.64-.44-1.01-.59l-.22-1.59c-.03-.14-.15-.25-.3-.25h-2.4c-.15 0-.27.11-.3.26l-.22 1.59c-.36.15-.71.34-1.01.58l-1.49-.6c-.14-.05-.29 0-.37.13l-1.2 2.07c-.08.13-.04.29.07.39l1.27.99c-.03.2-.05.39-.05.59s.02.39.04.59l-1.27.99c-.11.1-.14.26-.06.39M12 10.29c.94 0 1.71.77 1.71 1.71s-.77 1.71-1.71 1.71-1.71-.77-1.71-1.71.77-1.71 1.71-1.71M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m0 16H5V5h14z',
      },
      '1',
    ),
  ],
  'SettingsApplicationsTwoTone',
);
export const SettingsBackupRestoreIcon = (props?: KTRawAttr) => {
  const s = _SettingsBackupRestoreIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsBackupRestoreIcon = svg(
  svg('path', {
    d: 'M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2m-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9',
  }),
  'SettingsBackupRestore',
);
export const SettingsBackupRestoreOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsBackupRestoreOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsBackupRestoreOutlinedIcon = svg(
  svg('path', {
    d: 'M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2m-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9',
  }),
  'SettingsBackupRestoreOutlined',
);
export const SettingsBackupRestoreRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsBackupRestoreRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsBackupRestoreRoundedIcon = svg(
  svg('path', {
    d: 'M11.77 3c-2.65.07-5 1.28-6.6 3.16L3.85 4.85c-.31-.31-.85-.09-.85.36V9.5c0 .28.22.5.5.5h4.29c.45 0 .67-.54.35-.85L6.59 7.59C7.88 6.02 9.82 5 12 5c4.32 0 7.74 3.94 6.86 8.41-.54 2.77-2.81 4.98-5.58 5.47-3.8.68-7.18-1.74-8.05-5.16-.12-.42-.52-.72-.96-.72-.65 0-1.14.61-.98 1.23C4.28 18.12 7.8 21 12 21c5.06 0 9.14-4.17 9-9.26-.14-4.88-4.35-8.86-9.23-8.74M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2',
  }),
  'SettingsBackupRestoreRounded',
);
export const SettingsBackupRestoreSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsBackupRestoreSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsBackupRestoreSharpIcon = svg(
  svg('path', {
    d: 'M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2m-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9',
  }),
  'SettingsBackupRestoreSharp',
);
export const SettingsBackupRestoreTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsBackupRestoreTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsBackupRestoreTwoToneIcon = svg(
  svg('path', {
    d: 'M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2m-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9',
  }),
  'SettingsBackupRestoreTwoTone',
);
export const SettingsBluetoothIcon = (props?: KTRawAttr) => {
  const s = _SettingsBluetoothIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsBluetoothIcon = svg(
  svg('path', {
    d: 'M11 24h2v-2h-2zm-4 0h2v-2H7zm8 0h2v-2h-2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29zM13 3.83l1.88 1.88L13 7.59zm1.88 10.46L13 16.17v-3.76z',
  }),
  'SettingsBluetooth',
);
export const SettingsBluetoothOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsBluetoothOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsBluetoothOutlinedIcon = svg(
  svg('path', {
    d: 'M11 24h2v-2h-2zm-4 0h2v-2H7zm8 0h2v-2h-2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29zM13 3.83l1.88 1.88L13 7.59zm1.88 10.46L13 16.17v-3.76z',
  }),
  'SettingsBluetoothOutlined',
);
export const SettingsBluetoothRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsBluetoothRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsBluetoothRoundedIcon = svg(
  [
    svg('circle', { cx: '12', cy: '23', r: '1' }, '0'),
    svg('circle', { cx: '8', cy: '23', r: '1' }, '1'),
    svg('circle', { cx: '16', cy: '23', r: '1' }, '2'),
    svg(
      'path',
      {
        d: 'M13.41 10 17 6.42c.39-.39.39-1.02 0-1.42L12.21.21c-.14-.14-.32-.21-.5-.21-.39 0-.71.32-.71.71v6.88L7.11 3.71a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 10 5.7 14.89c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L11 12.41v6.88c0 .39.32.71.71.71.19 0 .37-.07.5-.21L17 15c.39-.39.39-1.02 0-1.42zM13 3.83l1.88 1.88L13 7.59zm0 12.34v-3.76l1.88 1.88z',
      },
      '3',
    ),
  ],
  'SettingsBluetoothRounded',
);
export const SettingsBluetoothSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsBluetoothSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsBluetoothSharpIcon = svg(
  svg('path', {
    d: 'M11 24h2v-2h-2zm-4 0h2v-2H7zm8 0h2v-2h-2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29zM13 3.83l1.88 1.88L13 7.59zm1.88 10.46L13 16.17v-3.76z',
  }),
  'SettingsBluetoothSharp',
);
export const SettingsBluetoothTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsBluetoothTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsBluetoothTwoToneIcon = svg(
  svg('path', {
    d: 'M11 24h2v-2h-2zm-4 0h2v-2H7zm8 0h2v-2h-2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29zM13 3.83l1.88 1.88L13 7.59zm1.88 10.46L13 16.17v-3.76z',
  }),
  'SettingsBluetoothTwoTone',
);
export const SettingsBrightnessIcon = (props?: KTRawAttr) => {
  const s = _SettingsBrightnessIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsBrightnessIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3z',
  }),
  'SettingsBrightness',
);
export const SettingsBrightnessOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsBrightnessOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsBrightnessOutlinedIcon = svg(
  svg('path', {
    d: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3z',
  }),
  'SettingsBrightnessOutlined',
);
export const SettingsBrightnessRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsBrightnessRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsBrightnessRoundedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-2.85 8.35L16 13.5v2c0 .28-.22.5-.5.5h-2l-1.15 1.15c-.2.2-.51.2-.71 0L10.5 16h-2c-.28 0-.5-.22-.5-.5v-2l-1.15-1.15c-.2-.2-.2-.51 0-.71L8 10.5v-2c0-.28.22-.5.5-.5h2l1.15-1.15c.2-.2.51-.2.71 0L13.5 8h2c.28 0 .5.22.5.5v2l1.15 1.15c.19.19.19.51 0 .7M12 9v6c1.66 0 3-1.34 3-3s-1.34-3-3-3',
  }),
  'SettingsBrightnessRounded',
);
export const SettingsBrightnessSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsBrightnessSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsBrightnessSharpIcon = svg(
  svg('path', {
    d: 'M23 3H1v18h22zm-2 16.01H3V4.99h18zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3z',
  }),
  'SettingsBrightnessSharp',
);
export const SettingsBrightnessTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsBrightnessTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsBrightnessTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M3 19.01h18V4.99H3zm5-8.51V8h2.5L12 6.5 13.5 8H16v2.5l1.5 1.5-1.5 1.5V16h-2.5L12 17.5 10.5 16H8v-2.5L6.5 12z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3zm9-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18z',
      },
      '1',
    ),
  ],
  'SettingsBrightnessTwoTone',
);
export const SettingsCellIcon = (props?: KTRawAttr) => {
  const s = _SettingsCellIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsCellIcon = svg(
  svg('path', {
    d: 'M7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2zM16 .01 8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99M16 16H8V4h8z',
  }),
  'SettingsCell',
);
export const SettingsCellOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsCellOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsCellOutlinedIcon = svg(
  svg('path', {
    d: 'M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM16 .01 8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99M16 18H8v-1h8zm0-3H8V5h8zm0-12H8V2h8z',
  }),
  'SettingsCellOutlined',
);
export const SettingsCellRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsCellRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsCellRoundedIcon = svg(
  svg('path', {
    d: 'M8 24c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1M16 .01 8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99M16 16H8V4h8z',
  }),
  'SettingsCellRounded',
);
export const SettingsCellSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsCellSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsCellSharpIcon = svg(
  svg('path', { d: 'M7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2zM6 0v20h12V0zm10 16H8V4h8z' }),
  'SettingsCellSharp',
);
export const SettingsCellTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsCellTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsCellTwoToneIcon = svg(
  [
    svg('path', { d: 'M8 17h8v1H8zM8 2h8v1H8z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM16 .01 8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99M16 18H8v-1h8zm0-3H8V5h8zm0-12H8V2h8z',
      },
      '1',
    ),
  ],
  'SettingsCellTwoTone',
);
export const SettingsEthernetIcon = (props?: KTRawAttr) => {
  const s = _SettingsEthernetIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsEthernetIcon = svg(
  svg('path', {
    d: 'M7.77 6.76 6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12zM7 13h2v-2H7zm10-2h-2v2h2zm-6 2h2v-2h-2zm6.77-7.52-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12z',
  }),
  'SettingsEthernet',
);
export const SettingsEthernetOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsEthernetOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsEthernetOutlinedIcon = svg(
  svg('path', {
    d: 'M7.77 6.76 6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12zM7 13h2v-2H7zm10-2h-2v2h2zm-6 2h2v-2h-2zm6.77-7.52-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12z',
  }),
  'SettingsEthernetOutlined',
);
export const SettingsEthernetRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsEthernetRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsEthernetRoundedIcon = svg(
  svg('path', {
    d: 'M7.71 6.71a.996.996 0 0 0-1.41 0L1.71 11.3c-.39.39-.39 1.02 0 1.41L6.3 17.3c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L3.83 12l3.88-3.88c.38-.39.38-1.03 0-1.41m8.58 0c-.39.39-.39 1.02 0 1.41L20.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L17.7 6.7c-.38-.38-1.02-.38-1.41.01M8 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m4-2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1',
  }),
  'SettingsEthernetRounded',
);
export const SettingsEthernetSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsEthernetSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsEthernetSharpIcon = svg(
  svg('path', {
    d: 'M7.77 6.76 6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12zM7 13h2v-2H7zm10-2h-2v2h2zm-6 2h2v-2h-2zm6.77-7.52-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12z',
  }),
  'SettingsEthernetSharp',
);
export const SettingsEthernetTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsEthernetTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsEthernetTwoToneIcon = svg(
  svg('path', {
    d: 'M7.77 6.76 6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12zM7 13h2v-2H7zm10-2h-2v2h2zm-6 2h2v-2h-2zm6.77-7.52-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12z',
  }),
  'SettingsEthernetTwoTone',
);
export const SettingsInputAntennaIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputAntennaIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputAntennaIcon = svg(
  svg('path', {
    d: 'M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7m1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11',
  }),
  'SettingsInputAntenna',
);
export const SettingsInputAntennaOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputAntennaOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputAntennaOutlinedIcon = svg(
  svg('path', {
    d: 'M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7m1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11',
  }),
  'SettingsInputAntennaOutlined',
);
export const SettingsInputAntennaRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputAntennaRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputAntennaRoundedIcon = svg(
  svg('path', {
    d: 'M12 5c-3.48 0-6.37 2.54-6.91 5.87-.1.59.39 1.13 1 1.13.49 0 .9-.36.98-.85C7.48 8.79 9.53 7 12 7s4.52 1.79 4.93 4.15c.08.49.49.85.98.85.61 0 1.09-.54.99-1.13C18.37 7.54 15.48 5 12 5m1 9.29c1.07-.48 1.76-1.66 1.41-2.99-.22-.81-.87-1.47-1.68-1.7-1.69-.48-3.23.78-3.23 2.4 0 1.02.62 1.9 1.5 2.29v3.3l-2.71 2.7c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l2.3-2.3 2.3 2.3c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L13 17.59zM12 1C6.3 1 1.61 5.34 1.05 10.9c-.05.59.41 1.1 1 1.1.51 0 .94-.38.99-.88C3.48 6.56 7.33 3 12 3s8.52 3.56 8.96 8.12c.05.5.48.88.99.88.59 0 1.06-.51 1-1.1C22.39 5.34 17.7 1 12 1',
  }),
  'SettingsInputAntennaRounded',
);
export const SettingsInputAntennaSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputAntennaSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputAntennaSharpIcon = svg(
  svg('path', {
    d: 'M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7m1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11',
  }),
  'SettingsInputAntennaSharp',
);
export const SettingsInputAntennaTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputAntennaTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputAntennaTwoToneIcon = svg(
  svg('path', {
    d: 'M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7m1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11',
  }),
  'SettingsInputAntennaTwoTone',
);
export const SettingsInputComponentIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputComponentIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputComponentIcon = svg(
  svg('path', {
    d: 'M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6z',
  }),
  'SettingsInputComponent',
);
export const SettingsInputComponentOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputComponentOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputComponentOutlinedIcon = svg(
  svg('path', {
    d: 'M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v10c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16V6H5zM4 17c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1m-1-5V8h2v4zM13 2c0-.55-.45-1-1-1s-1 .45-1 1v4H9v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6h-2zm-1 15c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1m-1-5V8h2v4zm10-6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6zm-1 11c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1m-1-5V8h2v4z',
  }),
  'SettingsInputComponentOutlined',
);
export const SettingsInputComponentRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputComponentRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputComponentRoundedIcon = svg(
  svg('path', {
    d: 'M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H2c-.55 0-1 .45-1 1v5h6V7c0-.55-.45-1-1-1H5zm4 14c0 1.3.84 2.4 2 2.82V22c0 .55.45 1 1 1s1-.45 1-1v-3.18c1.16-.41 2-1.51 2-2.82v-2H9zm-8 0c0 1.3.84 2.4 2 2.82V22c0 .55.45 1 1 1s1-.45 1-1v-3.18C6.16 18.4 7 17.3 7 16v-2H1zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-1c-.55 0-1 .45-1 1v5h6V7c0-.55-.45-1-1-1zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4h-1c-.55 0-1 .45-1 1v5h6V7c0-.55-.45-1-1-1h-1zm4 14c0 1.3.84 2.4 2 2.82V22c0 .55.45 1 1 1s1-.45 1-1v-3.18c1.16-.41 2-1.51 2-2.82v-2h-6z',
  }),
  'SettingsInputComponentRounded',
);
export const SettingsInputComponentSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputComponentSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputComponentSharpIcon = svg(
  svg('path', {
    d: 'M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5zm4 16.82h2V23h2v-4.18h2V14H9zm-8 0h2V23h2v-4.18h2V14H1zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2zm4 16.82h2V23h2v-4.18h2V14h-6z',
  }),
  'SettingsInputComponentSharp',
);
export const SettingsInputComponentTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputComponentTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputComponentTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M11 16c0 .55.45 1 1 1s1-.45 1-1v-2h-2zm-8 0c0 .55.45 1 1 1s1-.45 1-1v-2H3zm16 0c0 .55.45 1 1 1s1-.45 1-1v-2h-2z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v10c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16V6H5zm0 14c0 .55-.45 1-1 1s-1-.45-1-1v-2h2zm0-4H3V8h2zm8-10c0-.55-.45-1-1-1s-1 .45-1 1v4H9v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6h-2zm0 14c0 .55-.45 1-1 1s-1-.45-1-1v-2h2zm0-4h-2V8h2zm8-6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6zm0 10c0 .55-.45 1-1 1s-1-.45-1-1v-2h2zm0-4h-2V8h2z',
      },
      '1',
    ),
  ],
  'SettingsInputComponentTwoTone',
);
export const SettingsInputCompositeIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputCompositeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputCompositeIcon = svg(
  svg('path', {
    d: 'M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6z',
  }),
  'SettingsInputComposite',
);
export const SettingsInputCompositeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputCompositeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputCompositeOutlinedIcon = svg(
  svg('path', {
    d: 'M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v10c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16V6H5zM4 17c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1m-1-5V8h2v4zM13 2c0-.55-.45-1-1-1s-1 .45-1 1v4H9v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6h-2zm-1 15c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1m-1-5V8h2v4zm10-6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6zm-1 11c-.55 0-1-.45-1-1v-2h2v2c0 .55-.45 1-1 1m-1-5V8h2v4z',
  }),
  'SettingsInputCompositeOutlined',
);
export const SettingsInputCompositeRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputCompositeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputCompositeRoundedIcon = svg(
  svg('path', {
    d: 'M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H2c-.55 0-1 .45-1 1v5h6V7c0-.55-.45-1-1-1H5zm4 14c0 1.3.84 2.4 2 2.82V22c0 .55.45 1 1 1s1-.45 1-1v-3.18c1.16-.41 2-1.51 2-2.82v-2H9zm-8 0c0 1.3.84 2.4 2 2.82V22c0 .55.45 1 1 1s1-.45 1-1v-3.18C6.16 18.4 7 17.3 7 16v-2H1zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-1c-.55 0-1 .45-1 1v5h6V7c0-.55-.45-1-1-1zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4h-1c-.55 0-1 .45-1 1v5h6V7c0-.55-.45-1-1-1h-1zm4 14c0 1.3.84 2.4 2 2.82V22c0 .55.45 1 1 1s1-.45 1-1v-3.18c1.16-.41 2-1.51 2-2.82v-2h-6z',
  }),
  'SettingsInputCompositeRounded',
);
export const SettingsInputCompositeSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputCompositeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputCompositeSharpIcon = svg(
  svg('path', {
    d: 'M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5zm4 16.82h2V23h2v-4.18h2V14H9zm-8 0h2V23h2v-4.18h2V14H1zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2zm4 16.82h2V23h2v-4.18h2V14h-6z',
  }),
  'SettingsInputCompositeSharp',
);
export const SettingsInputCompositeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputCompositeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputCompositeTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M3 16c0 .55.45 1 1 1s1-.45 1-1v-2H3zm8 0c0 .55.45 1 1 1s1-.45 1-1v-2h-2zm8 0c0 .55.45 1 1 1s1-.45 1-1v-2h-2z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v10c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16V6H5zm0 14c0 .55-.45 1-1 1s-1-.45-1-1v-2h2zm0-4H3V8h2zm8-10c0-.55-.45-1-1-1s-1 .45-1 1v4H9v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6h-2zm0 14c0 .55-.45 1-1 1s-1-.45-1-1v-2h2zm0-4h-2V8h2zm8-6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v10c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.42 2-1.52 2-2.82V6zm0 10c0 .55-.45 1-1 1s-1-.45-1-1v-2h2zm0-4h-2V8h2z',
      },
      '1',
    ),
  ],
  'SettingsInputCompositeTwoTone',
);
export const SettingsInputHdmiIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputHdmiIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputHdmiIcon = svg(
  svg('path', { d: 'M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8z' }),
  'SettingsInputHdmi',
);
export const SettingsInputHdmiOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputHdmiOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputHdmiOutlinedIcon = svg(
  svg('path', {
    d: 'M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7zM8 4h8v3h-2.01V5h-1v2H11V5h-1v2H8zm9 8.53-3 6V20h-4v-1.47l-3-6V9h10z',
  }),
  'SettingsInputHdmiOutlined',
);
export const SettingsInputHdmiRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputHdmiRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputHdmiRoundedIcon = svg(
  svg('path', {
    d: 'M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-.55 0-1 .45-1 1v4.7c0 .2.06.39.17.55L8 19v2c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2l2.83-5.75c.11-.16.17-.36.17-.55V8c0-.55-.45-1-1-1m-2 0h-2V5.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V7h-2V5.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V7H8V4h8z',
  }),
  'SettingsInputHdmiRounded',
);
export const SettingsInputHdmiSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputHdmiSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputHdmiSharpIcon = svg(
  svg('path', { d: 'M18 7V2H6v5H5v6l3 6v3h8v-3l3-6V7zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8z' }),
  'SettingsInputHdmiSharp',
);
export const SettingsInputHdmiTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputHdmiTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputHdmiTwoToneIcon = svg(
  [
    svg('path', { d: 'M8 9H7v3.53l2.79 5.58.21.42V20h4v-1.47l.21-.42L17 12.53V9h-1z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7zM8 4h8v3h-2.01V5h-1v2H11V5h-1v2H8zm9 8.53-3 6V20h-4v-1.47l-3-6V9h10z',
      },
      '1',
    ),
  ],
  'SettingsInputHdmiTwoTone',
);
export const SettingsInputSvideoIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputSvideoIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputSvideoIcon = svg(
  svg('path', {
    d: 'M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5m7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5M8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1m0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9m5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5',
  }),
  'SettingsInputSvideo',
);
export const SettingsInputSvideoOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputSvideoOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputSvideoOutlinedIcon = svg(
  svg('path', {
    d: 'M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5m7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5M8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1m0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9m5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5',
  }),
  'SettingsInputSvideoOutlined',
);
export const SettingsInputSvideoRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputSvideoRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputSvideoRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8',
      },
      '0',
    ),
    svg('circle', { cx: '7.5', cy: '11.5', r: '1.5' }, '1'),
    svg('circle', { cx: '16.5', cy: '11.5', r: '1.5' }, '2'),
    svg('circle', { cx: '9', cy: '16', r: '1.5' }, '3'),
    svg('circle', { cx: '15', cy: '16', r: '1.5' }, '4'),
    svg(
      'path',
      { d: 'M15 7.5c0-.83-.67-1.5-1.5-1.5h-3C9.67 6 9 6.67 9 7.5S9.67 9 10.5 9h3c.83 0 1.5-.67 1.5-1.5' },
      '5',
    ),
  ],
  'SettingsInputSvideoRounded',
);
export const SettingsInputSvideoSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputSvideoSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputSvideoSharpIcon = svg(
  svg('path', {
    d: 'M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5m7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5M8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1m0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9m5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5',
  }),
  'SettingsInputSvideoSharp',
);
export const SettingsInputSvideoTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsInputSvideoTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsInputSvideoTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m-7 8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5M8.5 18c-.83 0-1.5-.67-1.5-1.5S7.67 15 8.5 15s1.5.67 1.5 1.5S9.33 18 8.5 18m2-10C9.67 8 9 7.33 9 6.5S9.67 5 10.5 5h3c.83 0 1.5.67 1.5 1.5S14.33 8 13.5 8zm5 10c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m2-5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      { d: 'M15 6.5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5' },
      '1',
    ),
    svg('circle', { cx: '15.5', cy: '16.5', r: '1.5' }, '2'),
    svg('circle', { cx: '17.5', cy: '11.5', r: '1.5' }, '3'),
    svg(
      'path',
      {
        d: 'M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1m0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9',
      },
      '4',
    ),
    svg('circle', { cx: '6.5', cy: '11.5', r: '1.5' }, '5'),
    svg('circle', { cx: '8.5', cy: '16.5', r: '1.5' }, '6'),
  ],
  'SettingsInputSvideoTwoTone',
);
export const SettingsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsOutlinedIcon = svg(
  svg('path', {
    d: 'M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1q-.09-.03-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1q.09.03.18.03c.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64zm-1.98-1.71c.04.31.05.52.05.73s-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
  }),
  'SettingsOutlined',
);
export const SettingsOverscanIcon = (props?: KTRawAttr) => {
  const s = _SettingsOverscanIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsOverscanIcon = svg(
  svg('path', {
    d: 'M12.01 5.5 10 8h4zM18 10v4l2.5-1.99zM6 10l-2.5 2.01L6 14zm8 6h-4l2.01 2.5zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18z',
  }),
  'SettingsOverscan',
);
export const SettingsOverscanOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsOverscanOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsOverscanOutlinedIcon = svg(
  svg('path', {
    d: 'M12.01 5.5 10 8h4zM18 10v4l2.5-1.99zM6 10l-2.5 2.01L6 14zm8 6h-4l2.01 2.5zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18z',
  }),
  'SettingsOverscanOutlined',
);
export const SettingsOverscanRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsOverscanRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsOverscanRoundedIcon = svg(
  svg('path', {
    d: 'M12.01 7 10 9h4zM17 10v4l2-1.99zM7 10l-2 2.01L7 14zm7 5h-4l2.01 2zm6-11H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14.01H4V5.99h16z',
  }),
  'SettingsOverscanRounded',
);
export const SettingsOverscanSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsOverscanSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsOverscanSharpIcon = svg(
  svg('path', {
    d: 'M12.01 5.5 10 8h4zM18 10v4l2.5-1.99zM6 10l-2.5 2.01L6 14zm8 6h-4l2.01 2.5zm9-13H1v18h22zm-2 16.01H3V4.99h18z',
  }),
  'SettingsOverscanSharp',
);
export const SettingsOverscanTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsOverscanTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsOverscanTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M3 19.01h18V4.99H3zM18 10l2.5 2.01L18 14zm-5.99-4.5L14 8h-4zM14 16l-1.99 2.5L10 16zm-8-6v4l-2.5-1.99z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M14 16h-4l2.01 2.5zm4-6v4l2.5-1.99zm3-7H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18zM6 10l-2.5 2.01L6 14zm6.01-4.5L10 8h4z',
      },
      '1',
    ),
  ],
  'SettingsOverscanTwoTone',
);
export const SettingsPhoneIcon = (props?: KTRawAttr) => {
  const s = _SettingsPhoneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsPhoneIcon = svg(
  svg('path', {
    d: 'M13 9h-2v2h2zm4 0h-2v2h2zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M19 9v2h2V9z',
  }),
  'SettingsPhone',
);
export const SettingsPhoneOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsPhoneOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsPhoneOutlinedIcon = svg(
  svg('path', {
    d: 'M11 9h2v2h-2zm4 0h2v2h-2zm5 6.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M5.03 5h1.5c.07.88.22 1.75.46 2.59L5.79 8.8c-.41-1.21-.67-2.48-.76-3.8M19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45zM19 9h2v2h-2z',
  }),
  'SettingsPhoneOutlined',
);
export const SettingsPhoneRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsPhoneRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsPhoneRoundedIcon = svg(
  [
    svg('circle', { cx: '12', cy: '10', r: '1' }, '0'),
    svg('circle', { cx: '16', cy: '10', r: '1' }, '1'),
    svg('circle', { cx: '20', cy: '10', r: '1' }, '2'),
    svg(
      'path',
      {
        d: 'm15.63 14.4-2.52 2.5c-2.5-1.43-4.57-3.5-6-6l2.5-2.52c.23-.24.33-.57.27-.9L9.13 3.8c-.09-.46-.5-.8-.98-.8H4c-.56 0-1.03.47-1 1.03.17 2.89 1.05 5.6 2.43 7.97 1.58 2.73 3.85 4.99 6.57 6.57 2.37 1.37 5.08 2.26 7.97 2.43.56.03 1.03-.44 1.03-1v-4.15c0-.48-.34-.89-.8-.98l-3.67-.73c-.33-.07-.67.03-.9.26',
      },
      '3',
    ),
  ],
  'SettingsPhoneRounded',
);
export const SettingsPhoneSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsPhoneSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsPhoneSharpIcon = svg(
  svg('path', {
    d: 'M13.21 17.37c-2.83-1.44-5.15-3.75-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61zM11 9h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2z',
  }),
  'SettingsPhoneSharp',
);
export const SettingsPhoneTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsPhoneTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsPhoneTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M6.54 5h-1.5c.09 1.32.35 2.59.75 3.79l1.2-1.21c-.24-.83-.39-1.7-.45-2.58m8.66 13.21c1.21.41 2.48.67 3.8.76v-1.5c-.88-.07-1.75-.22-2.6-.45z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M11 9h2v2h-2zm4 0h2v2h-2zm5 6.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M5.03 5h1.5c.07.88.22 1.75.46 2.59L5.79 8.8c-.41-1.21-.67-2.48-.76-3.8M19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45zM19 9h2v2h-2z',
      },
      '1',
    ),
  ],
  'SettingsPhoneTwoTone',
);
export const SettingsPowerIcon = (props?: KTRawAttr) => {
  const s = _SettingsPowerIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsPowerIcon = svg(
  svg('path', {
    d: 'M7 24h2v-2H7zm4 0h2v-2h-2zm2-22h-2v10h2zm3.56 2.44-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56M15 24h2v-2h-2z',
  }),
  'SettingsPower',
);
export const SettingsPowerOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsPowerOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsPowerOutlinedIcon = svg(
  svg('path', {
    d: 'M7 24h2v-2H7zm4 0h2v-2h-2zm2-22h-2v10h2zm3.56 2.44-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56M15 24h2v-2h-2z',
  }),
  'SettingsPowerOutlined',
);
export const SettingsPowerRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsPowerRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsPowerRoundedIcon = svg(
  svg('path', {
    d: 'M8 24c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m0-22c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1m3.94 3.06-.02.02c-.41.41-.36 1.08.08 1.46 1.51 1.34 2.33 3.43 1.88 5.7-.46 2.28-2.29 4.14-4.56 4.62C9.43 17.69 6 14.74 6 11c0-1.78.78-3.37 2.01-4.47.43-.39.47-1.04.07-1.45l-.02-.02c-.37-.37-.96-.39-1.36-.04-2.01 1.77-3.12 4.53-2.56 7.52.59 3.15 3.11 5.7 6.26 6.31 5.12.99 9.6-2.9 9.6-7.85 0-2.38-1.05-4.52-2.71-5.99-.39-.34-.98-.32-1.35.05M16 24c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1',
  }),
  'SettingsPowerRounded',
);
export const SettingsPowerSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsPowerSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsPowerSharpIcon = svg(
  svg('path', {
    d: 'M7 24h2v-2H7zm4 0h2v-2h-2zm2-22h-2v10h2zm3.56 2.44-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56M15 24h2v-2h-2z',
  }),
  'SettingsPowerSharp',
);
export const SettingsPowerTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsPowerTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsPowerTwoToneIcon = svg(
  svg('path', {
    d: 'M7 24h2v-2H7zm4 0h2v-2h-2zm2-22h-2v10h2zm3.56 2.44-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56M15 24h2v-2h-2z',
  }),
  'SettingsPowerTwoTone',
);
export const SettingsRemoteIcon = (props?: KTRawAttr) => {
  const s = _SettingsRemoteIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsRemoteIcon = svg(
  svg('path', {
    d: 'M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1m-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05M12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0',
  }),
  'SettingsRemote',
);
export const SettingsRemoteOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsRemoteOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsRemoteOutlinedIcon = svg(
  [
    svg(
      'path',
      { d: 'M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1m-1 12h-4V11h4z' },
      '0',
    ),
    svg('circle', { cx: '12', cy: '13', r: '1' }, '1'),
    svg(
      'path',
      {
        d: 'm7.05 6.05 1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05M12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0',
      },
      '2',
    ),
  ],
  'SettingsRemoteOutlined',
);
export const SettingsRemoteRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsRemoteRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsRemoteRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1m-3 5.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25M7.82 6.82c.35.35.9.38 1.3.1C9.93 6.34 10.93 6 12 6s2.07.34 2.88.91c.4.28.95.26 1.3-.09.43-.43.39-1.15-.09-1.5C14.94 4.49 13.53 4 12 4s-2.94.49-4.09 1.32c-.49.35-.52 1.07-.09 1.5',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 0C9.36 0 6.94.93 5.05 2.47c-.46.38-.5 1.07-.08 1.49.36.36.93.39 1.32.07C7.84 2.77 9.83 2 12 2s4.16.77 5.7 2.04c.39.32.96.29 1.32-.07.42-.42.38-1.11-.08-1.49C17.06.93 14.64 0 12 0',
      },
      '1',
    ),
  ],
  'SettingsRemoteRounded',
);
export const SettingsRemoteSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsRemoteSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsRemoteSharpIcon = svg(
  svg('path', {
    d: 'M16 9H8v14h8zm-4 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05M12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0',
  }),
  'SettingsRemoteSharp',
);
export const SettingsRemoteTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsRemoteTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsRemoteTwoToneIcon = svg(
  [
    svg('path', { d: 'M10 21h4V11h-4zm2-9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1', opacity: '.3' }, '0'),
    svg(
      'path',
      { d: 'M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1m-1 12h-4V11h4z' },
      '1',
    ),
    svg('circle', { cx: '12', cy: '13', r: '1' }, '2'),
    svg(
      'path',
      {
        d: 'm7.05 6.05 1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05M12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0',
      },
      '3',
    ),
  ],
  'SettingsRemoteTwoTone',
);
export const SettingsRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsRoundedIcon = svg(
  svg('path', {
    d: 'M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23c-.25-.44-.79-.62-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41c-.02.22-.03.44-.03.67s.01.45.03.68l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68m-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5',
  }),
  'SettingsRounded',
);
export const SettingsSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsSharpIcon = svg(
  svg('path', {
    d: 'm19.44 12.99-.01.02c.04-.33.08-.67.08-1.01s-.03-.66-.07-.99l.01.02 2.44-1.92-2.43-4.22-2.87 1.16.01.01c-.52-.4-1.09-.74-1.71-1h.01L14.44 2H9.57l-.44 3.07h.01c-.62.26-1.19.6-1.71 1l.01-.01-2.88-1.17-2.44 4.22 2.44 1.92.01-.02c-.04.33-.07.65-.07.99s.03.68.08 1.01l-.01-.02-2.1 1.65-.33.26 2.43 4.2 2.88-1.15-.02-.04c.53.41 1.1.75 1.73 1.01h-.03L9.58 22h4.85s.03-.18.06-.42l.38-2.65h-.01c.62-.26 1.2-.6 1.73-1.01l-.02.04 2.88 1.15 2.43-4.2s-.14-.12-.33-.26zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5',
  }),
  'SettingsSharp',
);
export const SettingsSuggestIcon = (props?: KTRawAttr) => {
  const s = _SettingsSuggestIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsSuggestIcon = svg(
  svg('path', {
    d: 'M17.41 6.59 15 5.5l2.41-1.09L18.5 2l1.09 2.41L22 5.5l-2.41 1.09L18.5 9zm3.87 6.13L20.5 11l-.78 1.72-1.72.78 1.72.78.78 1.72.78-1.72L23 13.5zm-5.04 1.65 1.94 1.47-2.5 4.33-2.24-.94c-.2.13-.42.26-.64.37l-.3 2.4h-5l-.3-2.41c-.22-.11-.43-.23-.64-.37l-2.24.94-2.5-4.33 1.94-1.47c-.01-.11-.01-.24-.01-.36s0-.25.01-.37l-1.94-1.47 2.5-4.33 2.24.94c.2-.13.42-.26.64-.37L7.5 6h5l.3 2.41c.22.11.43.23.64.37l2.24-.94 2.5 4.33-1.94 1.47c.01.12.01.24.01.37s0 .24-.01.36M13 14c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3',
  }),
  'SettingsSuggest',
);
export const SettingsSuggestOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsSuggestOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsSuggestOutlinedIcon = svg(
  svg('path', {
    d: 'M10 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m8.5-2 1.09-2.41L22 5.5l-2.41-1.09L18.5 2l-1.09 2.41L15 5.5l2.41 1.09zm2.78 3.72L20.5 11l-.78 1.72-1.72.78 1.72.78.78 1.72.78-1.72L23 13.5zM16.25 14c0-.12 0-.25-.01-.37l1.94-1.47-2.5-4.33-2.24.94c-.2-.13-.42-.26-.64-.37L12.5 6h-5l-.3 2.41c-.22.11-.43.24-.64.37l-2.24-.95-2.5 4.33 1.94 1.47c-.01.12-.01.25-.01.37s0 .25.01.37l-1.94 1.47 2.5 4.33 2.24-.94c.2.13.42.26.64.37l.3 2.4h5l.3-2.41c.22-.11.43-.23.64-.37l2.24.94 2.5-4.33-1.94-1.47c.01-.11.01-.24.01-.36m-1.42 3.64-1.73-.73c-.56.6-1.3 1.04-2.13 1.23L10.73 20H9.27l-.23-1.86c-.83-.19-1.57-.63-2.13-1.23l-1.73.73-.73-1.27 1.49-1.13q-.18-.585-.18-1.23t.18-1.23l-1.49-1.13.73-1.27 1.73.73c.56-.6 1.3-1.04 2.13-1.23L9.27 8h1.47l.23 1.86c.83.19 1.57.63 2.13 1.23l1.73-.73.73 1.27-1.49 1.13q.18.585.18 1.23t-.18 1.23l1.49 1.13z',
  }),
  'SettingsSuggestOutlined',
);
export const SettingsSuggestRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsSuggestRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsSuggestRoundedIcon = svg(
  svg('path', {
    d: 'm18.04 7.99-.63-1.4-1.4-.63c-.39-.18-.39-.73 0-.91l1.4-.63.63-1.4c.18-.39.73-.39.91 0l.63 1.4 1.4.63c.39.18.39.73 0 .91l-1.4.63-.63 1.4c-.17.39-.73.39-.91 0m3.24 4.73-.32-.72c-.18-.39-.73-.39-.91 0l-.32.72-.73.32c-.39.18-.39.73 0 .91l.72.32.32.73c.18.39.73.39.91 0l.32-.72.73-.32c.39-.18.39-.73 0-.91zm-5.04 1.65 1.23.93c.4.3.51.86.26 1.3l-1.62 2.8c-.25.44-.79.62-1.25.42l-1.43-.6c-.2.13-.42.26-.64.37l-.19 1.54c-.06.5-.49.88-.99.88H8.38c-.5 0-.93-.38-.99-.88l-.19-1.54c-.22-.11-.43-.23-.64-.37l-1.43.6c-.46.2-1 .02-1.25-.42l-1.62-2.8c-.25-.44-.14-.99.26-1.3l1.23-.93V14c0-.12 0-.25.01-.37l-1.23-.93c-.4-.3-.51-.86-.26-1.3l1.62-2.8c.25-.44.79-.62 1.25-.42l1.43.6c.2-.13.42-.26.64-.37l.19-1.54c.05-.49.48-.87.98-.87h3.23c.5 0 .93.38.99.88l.19 1.54c.22.11.43.23.64.37l1.43-.6c.46-.2 1-.02 1.25.42l1.62 2.8c.25.44.14.99-.26 1.3l-1.23.93c.01.12.01.24.01.37s0 .24-.01.36M13 14c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3',
  }),
  'SettingsSuggestRounded',
);
export const SettingsSuggestSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsSuggestSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsSuggestSharpIcon = svg(
  svg('path', {
    d: 'M17.41 6.59 15 5.5l2.41-1.09L18.5 2l1.09 2.41L22 5.5l-2.41 1.09L18.5 9zm3.87 6.13L20.5 11l-.78 1.72-1.72.78 1.72.78.78 1.72.78-1.72L23 13.5zm-5.04 1.65 1.94 1.47-2.5 4.33-2.24-.94c-.2.13-.42.26-.64.37l-.3 2.4h-5l-.3-2.41c-.22-.11-.43-.23-.64-.37l-2.24.94-2.5-4.33 1.94-1.47c-.01-.11-.01-.24-.01-.36s0-.25.01-.37l-1.94-1.47 2.5-4.33 2.24.94c.2-.13.42-.26.64-.37L7.5 6h5l.3 2.41c.22.11.43.23.64.37l2.24-.94 2.5 4.33-1.94 1.47c.01.12.01.24.01.37s0 .24-.01.36M13 14c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3',
  }),
  'SettingsSuggestSharp',
);
export const SettingsSuggestTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsSuggestTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsSuggestTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M14.07 15.23q.18-.585.18-1.23t-.18-1.23l1.49-1.13-.73-1.27-1.73.73c-.56-.6-1.3-1.04-2.13-1.23L10.73 8H9.27l-.24 1.86c-.83.19-1.57.63-2.13 1.23l-1.73-.73-.73 1.27 1.49 1.13q-.18.585-.18 1.23t.18 1.23l-1.49 1.13.73 1.27 1.73-.73c.56.6 1.3 1.04 2.13 1.23L9.27 20h1.47l.23-1.86c.83-.19 1.57-.63 2.13-1.23l1.73.73.73-1.27zM10 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M10 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m8.5-2 1.09-2.41L22 5.5l-2.41-1.09L18.5 2l-1.09 2.41L15 5.5l2.41 1.09zm2.78 3.72L20.5 11l-.78 1.72-1.72.78 1.72.78.78 1.72.78-1.72L23 13.5zM16.25 14c0-.12 0-.25-.01-.37l1.94-1.47-2.5-4.33-2.24.94c-.2-.13-.42-.26-.64-.37L12.5 6h-5l-.3 2.41c-.22.11-.43.24-.64.37l-2.24-.95-2.5 4.33 1.94 1.47c-.01.12-.01.25-.01.37s0 .25.01.37l-1.94 1.47 2.5 4.33 2.24-.94c.2.13.42.26.64.37l.3 2.4h5l.3-2.41c.22-.11.43-.23.64-.37l2.24.94 2.5-4.33-1.94-1.47c.01-.11.01-.24.01-.36m-1.42 3.64-1.73-.73c-.56.6-1.3 1.04-2.13 1.23L10.73 20H9.27l-.23-1.86c-.83-.19-1.57-.63-2.13-1.23l-1.73.73-.73-1.27 1.49-1.13q-.18-.585-.18-1.23t.18-1.23l-1.49-1.13.73-1.27 1.73.73c.56-.6 1.3-1.04 2.13-1.23L9.27 8h1.47l.23 1.86c.83.19 1.57.63 2.13 1.23l1.73-.73.73 1.27-1.49 1.13q.18.585.18 1.23t-.18 1.23l1.49 1.13z',
      },
      '1',
    ),
  ],
  'SettingsSuggestTwoTone',
);
export const SettingsSystemDaydreamIcon = (props?: KTRawAttr) => {
  const s = _SettingsSystemDaydreamIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsSystemDaydreamIcon = svg(
  svg('path', {
    d: 'M9 16h6.5c1.38 0 2.5-1.12 2.5-2.5S16.88 11 15.5 11h-.05c-.24-1.69-1.69-3-3.45-3-1.4 0-2.6.83-3.16 2.02h-.16C7.17 10.18 6 11.45 6 13c0 1.66 1.34 3 3 3M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18z',
  }),
  'SettingsSystemDaydream',
);
export const SettingsSystemDaydreamOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsSystemDaydreamOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsSystemDaydreamOutlinedIcon = svg(
  svg('path', {
    d: 'M15.5 17H9c-2.21 0-4-1.79-4-4 0-1.93 1.36-3.56 3.22-3.92C9.04 7.8 10.47 7 12 7c1.95 0 3.66 1.28 4.26 3.09 1.58.36 2.74 1.75 2.74 3.41 0 1.93-1.57 3.5-3.5 3.5m-6.76-5.98C7.74 11.15 7 11.99 7 13c0 1.1.9 2 2 2h6.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.87l-.17-.86C14.29 9.92 13.23 9 12 9c-.96 0-1.84.57-2.26 1.45l-.27.57zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18z',
  }),
  'SettingsSystemDaydreamOutlined',
);
export const SettingsSystemDaydreamRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsSystemDaydreamRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsSystemDaydreamRoundedIcon = svg(
  svg('path', {
    d: 'M9 16h6.5c1.38 0 2.5-1.12 2.5-2.5S16.88 11 15.5 11h-.05c-.24-1.69-1.69-3-3.45-3-1.4 0-2.6.83-3.16 2.02h-.16C7.17 10.18 6 11.45 6 13c0 1.66 1.34 3 3 3M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16.01H4c-.55 0-1-.45-1-1V5.99c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.02c0 .55-.45 1-1 1',
  }),
  'SettingsSystemDaydreamRounded',
);
export const SettingsSystemDaydreamSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsSystemDaydreamSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsSystemDaydreamSharpIcon = svg(
  svg('path', {
    d: 'M9 16h6.5c1.38 0 2.5-1.12 2.5-2.5S16.88 11 15.5 11h-.05c-.24-1.69-1.69-3-3.45-3-1.4 0-2.6.83-3.16 2.02h-.16C7.17 10.18 6 11.45 6 13c0 1.66 1.34 3 3 3M23 3H1v18h22zm-2 16.01H3V4.99h18z',
  }),
  'SettingsSystemDaydreamSharp',
);
export const SettingsSystemDaydreamTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsSystemDaydreamTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsSystemDaydreamTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M9 15h6.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.87l-.17-.86C14.29 9.92 13.23 9 12 9c-.96 0-1.84.57-2.26 1.45l-.27.57h-.73C7.74 11.15 7 11.99 7 13c0 1.1.9 2 2 2',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M9 17h6.5c1.93 0 3.5-1.57 3.5-3.5 0-1.66-1.16-3.05-2.74-3.41C15.66 8.28 13.95 7 12 7c-1.53 0-2.96.8-3.78 2.08C6.36 9.44 5 11.07 5 13c0 2.21 1.79 4 4 4m-.26-5.98h.74l.27-.57C10.16 9.57 11.04 9 12 9c1.23 0 2.29.92 2.46 2.14l.17.86h.87c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H9c-1.1 0-2-.9-2-2 0-1.01.74-1.85 1.74-1.98M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18z',
      },
      '1',
    ),
  ],
  'SettingsSystemDaydreamTwoTone',
);
export const SettingsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm19.28 8.6-.7-1.21-1.27.51-1.06.43-.91-.7c-.39-.3-.8-.54-1.23-.71l-1.06-.43-.16-1.13L12.7 4h-1.4l-.19 1.35-.16 1.13-1.06.44c-.41.17-.82.41-1.25.73l-.9.68-1.05-.42-1.27-.52-.7 1.21 1.08.84.89.7-.14 1.13c-.03.3-.05.53-.05.73s.02.43.05.73l.14 1.13-.89.7-1.08.84.7 1.21 1.27-.51 1.06-.43.91.7c.39.3.8.54 1.23.71l1.06.43.16 1.13.19 1.36h1.39l.19-1.35.16-1.13 1.06-.43c.41-.17.82-.41 1.25-.73l.9-.68 1.04.42 1.27.51.7-1.21-1.08-.84-.89-.7.14-1.13c.04-.31.05-.52.05-.73s-.02-.43-.05-.73l-.14-1.13.89-.7zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1q-.09-.03-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1q.09.03.18.03c.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64zm-1.98-1.71c.04.31.05.52.05.73s-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
      },
      '1',
    ),
  ],
  'SettingsTwoTone',
);
export const SettingsVoiceIcon = (props?: KTRawAttr) => {
  const s = _SettingsVoiceIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsVoiceIcon = svg(
  svg('path', {
    d: 'M7 24h2v-2H7zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3m-1 11h2v-2h-2zm4 0h2v-2h-2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72',
  }),
  'SettingsVoice',
);
export const SettingsVoiceOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SettingsVoiceOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsVoiceOutlinedIcon = svg(
  svg('path', {
    d: 'M7 22h2v2H7zm5-9c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3m-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .56-.44 1-1 1-.55 0-1-.45-1-1zm0 18h2v2h-2zm4 0h2v2h-2zm4-12h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72',
  }),
  'SettingsVoiceOutlined',
);
export const SettingsVoiceRoundedIcon = (props?: KTRawAttr) => {
  const s = _SettingsVoiceRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsVoiceRoundedIcon = svg(
  svg('path', {
    d: 'M8 24c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1M9 10V4c0-1.66 1.34-3 3-3s3 1.34 3 3v6c0 1.66-1.34 3-3 3s-3-1.34-3-3m8.91 0c.61 0 1.09.54 1 1.14-.49 3-2.89 5.34-5.91 5.78V19c0 .55-.45 1-1 1s-1-.45-1-1v-2.08c-3.02-.44-5.42-2.78-5.91-5.78-.1-.6.39-1.14 1-1.14.49 0 .9.36.98.85C7.48 13.21 9.53 15 12 15s4.52-1.79 4.93-4.15c.08-.49.49-.85.98-.85',
  }),
  'SettingsVoiceRounded',
);
export const SettingsVoiceSharpIcon = (props?: KTRawAttr) => {
  const s = _SettingsVoiceSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsVoiceSharpIcon = svg(
  svg('path', {
    d: 'M7 24h2v-2H7zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3m-1 11h2v-2h-2zm4 0h2v-2h-2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72',
  }),
  'SettingsVoiceSharp',
);
export const SettingsVoiceTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SettingsVoiceTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SettingsVoiceTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M12 11c.56 0 .99-.44.99-1L13 4c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M7 22h2v2H7zm5-9c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3m-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .56-.44 1-1 1-.55 0-1-.45-1-1zm0 18h2v2h-2zm4 0h2v2h-2zm4-12h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72',
      },
      '1',
    ),
  ],
  'SettingsVoiceTwoTone',
);
export const SevenKIcon = (props?: KTRawAttr) => {
  const s = _SevenKIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevenKIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9.5 15H7.75l1.38-4.5H6.5V9H10c.67 0 1.15.65.96 1.29zm8.5 0h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z',
  }),
  'SevenK',
);
export const SevenKOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SevenKOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevenKOutlinedIcon = svg(
  [
    svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }, '0'),
    svg(
      'path',
      {
        d: 'M7.75 15H9.5l1.46-4.71C11.15 9.65 10.67 9 10 9H6.5v1.5h2.63zm6.75-2.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z',
      },
      '1',
    ),
  ],
  'SevenKOutlined',
);
export const SevenKPlusIcon = (props?: KTRawAttr) => {
  const s = _SevenKPlusIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevenKPlusIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M8 15H6.25l1.38-4.5H5V9h3.5c.67 0 1.15.65.96 1.29zm8 0h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3zm4-2.5h-1.5V14h-1v-1.5H16v-1h1.5V10h1v1.5H20z',
  }),
  'SevenKPlus',
);
export const SevenKPlusOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SevenKPlusOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevenKPlusOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M6.75 15H8.5l1.46-4.71C10.15 9.65 9.67 9 9 9H5.5v1.5h2.63zm5.75-2.25L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5z',
      },
      '1',
    ),
  ],
  'SevenKPlusOutlined',
);
export const SevenKPlusRoundedIcon = (props?: KTRawAttr) => {
  const s = _SevenKPlusRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevenKPlusRoundedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.95 15h-.19c-.5 0-.86-.49-.72-.97l1.08-3.53H6.25c-.41 0-.75-.34-.75-.75S5.83 9 6.25 9H9c.67 0 1.15.65.96 1.29l-1.3 4.18c-.1.32-.39.53-.71.53m6.64 0c-.22 0-.42-.1-.55-.27l-1.54-1.98v1.55c0 .39-.31.7-.7.7h-.1c-.39 0-.7-.31-.7-.7V9.7c0-.39.31-.7.7-.7h.09c.39 0 .7.31.7.7v1.55l1.54-1.98c.14-.17.35-.27.56-.27.58 0 .91.66.56 1.12L13.75 12l1.41 1.88c.34.46.01 1.12-.57 1.12m3.91-2.5h-1v1c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1v-1c0-.28.22-.5.5-.5s.5.22.5.5v1h1c.28 0 .5.22.5.5s-.22.5-.5.5',
  }),
  'SevenKPlusRounded',
);
export const SevenKPlusSharpIcon = (props?: KTRawAttr) => {
  const s = _SevenKPlusSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevenKPlusSharpIcon = svg(
  svg('path', {
    d: 'M21 3H3v18h18zM8.5 15H6.75l1.38-4.5H5.5V9h4.86zm7.5 0h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3zm3-2.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19z',
  }),
  'SevenKPlusSharp',
);
export const SevenKPlusTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SevenKPlusTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevenKPlusTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5zm6-10h1.5v2.25L14.25 9H16l-2.25 3L16 15h-1.75l-1.75-2.25V15H11zM5.5 9H9c.67 0 1.15.65.96 1.29L8.5 15H6.75l1.38-4.5H5.5z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14z',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M6.75 15H8.5l1.46-4.71C10.15 9.65 9.67 9 9 9H5.5v1.5h2.63zm5.75-2.25L14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5z',
      },
      '2',
    ),
  ],
  'SevenKPlusTwoTone',
);
export const SevenKRoundedIcon = (props?: KTRawAttr) => {
  const s = _SevenKRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevenKRoundedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M8.95 15h-.19c-.5 0-.86-.49-.72-.97l1.08-3.53H7.25c-.41 0-.75-.34-.75-.75S6.84 9 7.25 9H10c.67 0 1.15.65.96 1.29l-1.3 4.18c-.09.32-.38.53-.71.53m7.64 0c-.22 0-.42-.1-.55-.27l-1.54-1.98v1.55c0 .39-.31.7-.7.7h-.1c-.39 0-.7-.31-.7-.7V9.7c0-.39.31-.7.7-.7h.09c.39 0 .7.31.7.7v1.55l1.54-1.98c.14-.17.35-.27.56-.27.58 0 .91.66.56 1.12L15.75 12l1.41 1.88c.34.46.01 1.12-.57 1.12',
  }),
  'SevenKRounded',
);
export const SevenKSharpIcon = (props?: KTRawAttr) => {
  const s = _SevenKSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevenKSharpIcon = svg(
  svg('path', {
    d: 'M21 3H3v18h18zM9.5 15H7.75l1.38-4.5H6.5V9h4.86zm8.5 0h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z',
  }),
  'SevenKSharp',
);
export const SevenKTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SevenKTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevenKTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 19h14V5H5zm8-10h1.5v2.25L16.25 9H18l-2.25 3L18 15h-1.75l-1.75-2.25V15H13zM6.5 9H10c.67 0 1.15.65.96 1.29L9.5 15H7.75l1.38-4.5H6.5z',
        opacity: '.3',
      },
      '0',
    ),
    svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }, '1'),
    svg(
      'path',
      {
        d: 'M7.75 15H9.5l1.46-4.71C11.15 9.65 10.67 9 10 9H6.5v1.5h2.63zm6.75-2.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z',
      },
      '2',
    ),
  ],
  'SevenKTwoTone',
);
export const SevenMpIcon = (props?: KTRawAttr) => {
  const s = _SevenMpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevenMpIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2zm-2.5-7h-1.75L12.62 7H10V5.5h3.5c.67 0 1.15.65.96 1.29zm2.5 2.5H17v1.5h-1.5z',
  }),
  'SevenMp',
);
export const SevenMpOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SevenMpOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevenMpOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z',
      },
      '0',
    ),
    svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }, '1'),
    svg('path', { d: 'M11.25 11.5H13l1.46-4.71c.19-.64-.29-1.29-.96-1.29H10V7h2.62z' }, '2'),
  ],
  'SevenMpOutlined',
);
export const SevenMpRoundedIcon = (props?: KTRawAttr) => {
  const s = _SevenMpRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevenMpRoundedIcon = svg(
  [
    svg('path', { d: 'M15 14h1.5v1.5H15z' }, '0'),
    svg(
      'path',
      {
        d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6.5 14.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v3.75c0 .41-.34.75-.75.75S6 18.16 6 17.75V13.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1zm-.12-6.25c-.56 0-.97-.54-.8-1.08L12.62 7h-1.87c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.75c.67 0 1.15.65.96 1.29l-1.28 4.12c-.11.35-.43.59-.8.59M18 16c0 .55-.45 1-1 1h-2v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V13.5c0-.55.45-1 1-1H17c.55 0 1 .45 1 1z',
      },
      '1',
    ),
  ],
  'SevenMpRounded',
);
export const SevenMpSharpIcon = (props?: KTRawAttr) => {
  const s = _SevenMpSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevenMpSharpIcon = svg(
  [
    svg('path', { d: 'M15 14h1.5v1.5H15z' }, '0'),
    svg(
      'path',
      {
        d: 'M3 3v18h18V3zm9.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm-1.25-7L12.62 7H10V5.5h4.87l-1.87 6zM18 17h-3v1.5h-1.5v-6H18z',
      },
      '1',
    ),
  ],
  'SevenMpSharp',
);
export const SevenMpTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SevenMpTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevenMpTwoToneIcon = svg(
  [
    svg('path', { d: 'M15 14h1.5v1.5H15z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1m-8-8h3.5c.67 0 1.15.65.96 1.29L13 11.5h-1.75L12.62 7H10zm-4 8c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z',
        opacity: '.3',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z',
      },
      '2',
    ),
    svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }, '3'),
    svg('path', { d: 'M11.25 11.5H13l1.46-4.71c.19-.64-.29-1.29-.96-1.29H10V7h2.62z' }, '4'),
  ],
  'SevenMpTwoTone',
);
export const SeventeenMpIcon = (props?: KTRawAttr) => {
  const s = _SeventeenMpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SeventeenMpIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2zM10 5.5v6H8.5V7H7V5.5zm5 6h-1.75L14.62 7H12V5.5h3.5c.67 0 1.15.65.96 1.29zm.5 2.5H17v1.5h-1.5z',
  }),
  'SeventeenMp',
);
export const SeventeenMpOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SeventeenMpOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SeventeenMpOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z',
      },
      '0',
    ),
    svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }, '1'),
    svg('path', { d: 'M8.5 11.5H10v-6H7V7h1.5zm4.75 0H15l1.46-4.71c.19-.64-.29-1.29-.96-1.29H12V7h2.62z' }, '2'),
  ],
  'SeventeenMpOutlined',
);
export const SeventeenMpRoundedIcon = (props?: KTRawAttr) => {
  const s = _SeventeenMpRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SeventeenMpRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.75 5.5H9c.55 0 1 .45 1 1v4.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7h-.75C7.34 7 7 6.66 7 6.25s.34-.75.75-.75m4.75 12.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v3.75c0 .41-.34.75-.75.75S6 18.16 6 17.75V13.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1zM12 6.25c0-.41.34-.75.75-.75h2.75c.67 0 1.15.65.96 1.29l-1.28 4.12c-.11.35-.43.59-.8.59-.56 0-.97-.54-.8-1.08L14.62 7h-1.87c-.41 0-.75-.34-.75-.75M18 16c0 .55-.45 1-1 1h-2v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V13.5c0-.55.45-1 1-1H17c.55 0 1 .45 1 1z',
      },
      '0',
    ),
    svg('path', { d: 'M15 14h1.5v1.5H15z' }, '1'),
  ],
  'SeventeenMpRounded',
);
export const SeventeenMpSharpIcon = (props?: KTRawAttr) => {
  const s = _SeventeenMpSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SeventeenMpSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M3 3v18h18V3zm4 2.5h3v6H8.5V7H7zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM12 7V5.5h4.87l-1.87 6h-1.75L14.62 7zm6 10h-3v1.5h-1.5v-6H18z',
      },
      '0',
    ),
    svg('path', { d: 'M15 14h1.5v1.5H15z' }, '1'),
  ],
  'SeventeenMpSharp',
);
export const SeventeenMpTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SeventeenMpTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SeventeenMpTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1m-6-8h3.5c.67 0 1.15.65.96 1.29L15 11.5h-1.75L14.62 7H12zm-5 0h3v6H8.5V7H7zm-1 8c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z',
        opacity: '.3',
      },
      '0',
    ),
    svg('path', { d: 'M15 14h1.5v1.5H15z', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z',
      },
      '2',
    ),
    svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }, '3'),
    svg('path', { d: 'M8.5 11.5H10v-6H7V7h1.5zm4.75 0H15l1.46-4.71c.19-.64-.29-1.29-.96-1.29H12V7h2.62z' }, '4'),
  ],
  'SeventeenMpTwoTone',
);
export const SevereColdIcon = (props?: KTRawAttr) => {
  const s = _SevereColdIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevereColdIcon = svg(
  svg('path', {
    d: 'm12 10.41 4-4L14.59 5 12 7.59V4h-2v3.59L7.41 5 6 6.41l4 4V12H8.41l-4-4L3 9.41 5.59 12H2v2h3.59L3 16.59 4.41 18l4-4H10v1.59l-4 4L7.41 21 10 18.41V22h2v-3.59L14.59 21 16 19.59l-4-4V14h1.59l4 4L19 16.59 16.41 14H20v-2h-8zM19 2h2v5h-2zm0 6h2v2h-2z',
  }),
  'SevereCold',
);
export const SevereColdOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SevereColdOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevereColdOutlinedIcon = svg(
  svg('path', {
    d: 'm12 10.41 4-4L14.59 5 12 7.59V4h-2v3.59L7.41 5 6 6.41l4 4V12H8.41l-4-4L3 9.41 5.59 12H2v2h3.59L3 16.59 4.41 18l4-4H10v1.59l-4 4L7.41 21 10 18.41V22h2v-3.59L14.59 21 16 19.59l-4-4V14h1.59l4 4L19 16.59 16.41 14H20v-2h-8zM19 2h2v5h-2zm0 6h2v2h-2z',
  }),
  'SevereColdOutlined',
);
export const SevereColdRoundedIcon = (props?: KTRawAttr) => {
  const s = _SevereColdRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevereColdRoundedIcon = svg(
  [
    svg('path', { d: 'M20 2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1' }, '0'),
    svg('circle', { cx: '20', cy: '9', r: '1' }, '1'),
    svg(
      'path',
      {
        d: 'm12 10.41 3.29-3.29c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0L12 7.59V5c0-.55-.45-1-1-1s-1 .45-1 1v2.59L8.12 5.71a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10 10.41V12H8.41L5.12 8.71a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L5.59 12H3c-.55 0-1 .45-1 1s.45 1 1 1h2.59l-1.88 1.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L8.41 14H10v1.59l-3.29 3.29c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L10 18.41V21c0 .55.45 1 1 1s1-.45 1-1v-2.59l1.88 1.88c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L12 15.59V14h1.59l3.29 3.29c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L16.41 14H19c.55 0 1-.45 1-1s-.45-1-1-1h-7z',
      },
      '2',
    ),
  ],
  'SevereColdRounded',
);
export const SevereColdSharpIcon = (props?: KTRawAttr) => {
  const s = _SevereColdSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevereColdSharpIcon = svg(
  svg('path', {
    d: 'm12 10.41 4-4L14.59 5 12 7.59V4h-2v3.59L7.41 5 6 6.41l4 4V12H8.41l-4-4L3 9.41 5.59 12H2v2h3.59L3 16.59 4.41 18l4-4H10v1.59l-4 4L7.41 21 10 18.41V22h2v-3.59L14.59 21 16 19.59l-4-4V14h1.59l4 4L19 16.59 16.41 14H20v-2h-8zM19 2h2v5h-2zm0 6h2v2h-2z',
  }),
  'SevereColdSharp',
);
export const SevereColdTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SevereColdTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SevereColdTwoToneIcon = svg(
  svg('path', {
    d: 'm12 10.41 4-4L14.59 5 12 7.59V4h-2v3.59L7.41 5 6 6.41l4 4V12H8.41l-4-4L3 9.41 5.59 12H2v2h3.59L3 16.59 4.41 18l4-4H10v1.59l-4 4L7.41 21 10 18.41V22h2v-3.59L14.59 21 16 19.59l-4-4V14h1.59l4 4L19 16.59 16.41 14H20v-2h-8zM19 2h2v5h-2zm0 6h2v2h-2z',
  }),
  'SevereColdTwoTone',
);
export const ShapeLineIcon = (props?: KTRawAttr) => {
  const s = _ShapeLineIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShapeLineIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M6 11c2.76 0 5-2.24 5-5S8.76 1 6 1 1 3.24 1 6s2.24 5 5 5m15 3h-5c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M17.71 7.7c.4.19.83.3 1.29.3 1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3c0 .46.11.89.3 1.29L6.29 16.3c-.4-.19-.83-.3-1.29-.3-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-.46-.11-.89-.3-1.29z',
      },
      '1',
    ),
  ],
  'ShapeLine',
);
export const ShapeLineOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ShapeLineOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShapeLineOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M6 11c2.76 0 5-2.24 5-5S8.76 1 6 1 1 3.24 1 6s2.24 5 5 5m0-8c1.65 0 3 1.35 3 3S7.65 9 6 9 3 7.65 3 6s1.35-3 3-3m15 11h-5c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2m0 7h-5v-5h5z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M17.71 7.7c.4.19.83.3 1.29.3 1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3c0 .46.11.89.3 1.29L6.29 16.3c-.4-.19-.83-.3-1.29-.3-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-.46-.11-.89-.3-1.29z',
      },
      '1',
    ),
  ],
  'ShapeLineOutlined',
);
export const ShapeLineRoundedIcon = (props?: KTRawAttr) => {
  const s = _ShapeLineRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShapeLineRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M6 11c2.76 0 5-2.24 5-5S8.76 1 6 1 1 3.24 1 6s2.24 5 5 5m15 3h-5c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M17.71 7.7c.4.19.83.3 1.29.3 1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3c0 .46.11.89.3 1.29L6.29 16.3c-.4-.19-.83-.3-1.29-.3-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-.46-.11-.89-.3-1.29z',
      },
      '1',
    ),
  ],
  'ShapeLineRounded',
);
export const ShapeLineSharpIcon = (props?: KTRawAttr) => {
  const s = _ShapeLineSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShapeLineSharpIcon = svg(
  [
    svg('path', { d: 'M6 11c2.76 0 5-2.24 5-5S8.76 1 6 1 1 3.24 1 6s2.24 5 5 5m17 3h-9v9h9z' }, '0'),
    svg(
      'path',
      {
        d: 'M17.71 7.7c.4.19.83.3 1.29.3 1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3c0 .46.11.89.3 1.29L6.29 16.3c-.4-.19-.83-.3-1.29-.3-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-.46-.11-.89-.3-1.29z',
      },
      '1',
    ),
  ],
  'ShapeLineSharp',
);
export const ShapeLineTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ShapeLineTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShapeLineTwoToneIcon = svg(
  [
    svg('path', { d: 'M16 16h5v5h-5z', opacity: '.3' }, '0'),
    svg('circle', { cx: '6', cy: '6', r: '3', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M6 11c2.76 0 5-2.24 5-5S8.76 1 6 1 1 3.24 1 6s2.24 5 5 5m0-8c1.65 0 3 1.35 3 3S7.65 9 6 9 3 7.65 3 6s1.35-3 3-3m15 11h-5c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2m0 7h-5v-5h5z',
      },
      '2',
    ),
    svg(
      'path',
      {
        d: 'M17.71 7.7c.4.19.83.3 1.29.3 1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3c0 .46.11.89.3 1.29L6.29 16.3c-.4-.19-.83-.3-1.29-.3-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-.46-.11-.89-.3-1.29z',
      },
      '3',
    ),
  ],
  'ShapeLineTwoTone',
);
export const ShareIcon = (props?: KTRawAttr) => {
  const s = _ShareIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShareIcon = svg(
  svg('path', {
    d: 'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92',
  }),
  'Share',
);
export const ShareLocationIcon = (props?: KTRawAttr) => {
  const s = _ShareLocationIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShareLocationIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M13.02 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.42-1.43c-1.11.86-2.44 1.44-3.9 1.62M4.03 12c0-4.05 3.03-7.41 6.95-7.93V2.05C5.95 2.58 2.03 6.84 2.03 12s3.92 9.42 8.95 9.95v-2.02c-3.92-.52-6.95-3.88-6.95-7.93m15.92-1h2.02c-.2-2.01-1-3.84-2.21-5.32l-1.43 1.43c.86 1.1 1.44 2.43 1.62 3.89m-1.61-6.74c-1.48-1.21-3.32-2.01-5.32-2.21v2.02c1.46.18 2.79.76 3.9 1.62zm-.01 12.64 1.43 1.42c1.21-1.48 2.01-3.31 2.21-5.32h-2.02c-.18 1.46-.76 2.79-1.62 3.9',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M16 11.1C16 8.61 14.1 7 12 7s-4 1.61-4 4.1c0 1.66 1.33 3.63 4 5.9 2.67-2.27 4-4.24 4-5.9m-4 .9c-.59 0-1.07-.48-1.07-1.07s.48-1.07 1.07-1.07 1.07.48 1.07 1.07S12.59 12 12 12',
      },
      '1',
    ),
  ],
  'ShareLocation',
);
export const ShareLocationOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ShareLocationOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShareLocationOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M13.02 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.42-1.43c-1.11.86-2.44 1.44-3.9 1.62M4.03 12c0-4.05 3.03-7.41 6.95-7.93V2.05C5.95 2.58 2.03 6.84 2.03 12s3.92 9.42 8.95 9.95v-2.02c-3.92-.52-6.95-3.88-6.95-7.93m15.92-1h2.02c-.2-2.01-1-3.84-2.21-5.32l-1.43 1.43c.86 1.1 1.44 2.43 1.62 3.89m-1.61-6.74c-1.48-1.21-3.32-2.01-5.32-2.21v2.02c1.46.18 2.79.76 3.9 1.62zm-.01 12.64 1.43 1.42c1.21-1.48 2.01-3.31 2.21-5.32h-2.02c-.18 1.46-.76 2.79-1.62 3.9',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M16 11.1C16 8.61 14.1 7 12 7s-4 1.61-4 4.1c0 1.66 1.33 3.63 4 5.9 2.67-2.27 4-4.24 4-5.9m-4 .9c-.59 0-1.07-.48-1.07-1.07s.48-1.07 1.07-1.07 1.07.48 1.07 1.07S12.59 12 12 12',
      },
      '1',
    ),
  ],
  'ShareLocationOutlined',
);
export const ShareLocationRoundedIcon = (props?: KTRawAttr) => {
  const s = _ShareLocationRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShareLocationRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M13.02 20.77c0 .64.59 1.13 1.21.99 1.12-.26 2.18-.7 3.12-1.3.53-.34.61-1.1.16-1.55-.32-.32-.83-.4-1.21-.16-.77.49-1.62.85-2.53 1.05-.45.1-.75.51-.75.97M4.03 12c0-3.79 2.65-6.97 6.2-7.79.44-.1.75-.51.75-.96 0-.64-.6-1.13-1.22-.98C5.33 3.29 2.03 7.26 2.03 12s3.3 8.71 7.73 9.74c.62.15 1.22-.34 1.22-.98 0-.46-.31-.86-.75-.96-3.55-.83-6.2-4.01-6.2-7.8m16.76-1c.64 0 1.13-.59.99-1.21-.26-1.12-.7-2.17-1.3-3.12-.34-.54-1.1-.61-1.55-.16-.32.32-.4.83-.15 1.21.49.76.85 1.61 1.05 2.53.09.45.5.75.96.75m-3.44-7.45c-.95-.6-2-1.04-3.12-1.3-.62-.14-1.21.35-1.21.98 0 .45.3.87.74.96.91.2 1.77.57 2.53 1.05.39.24.89.17 1.21-.16.46-.44.39-1.19-.15-1.53m1.57 13.94c.45.45 1.21.38 1.55-.16.6-.94 1.04-2 1.3-3.12.14-.62-.35-1.21-.98-1.21-.45 0-.87.3-.96.74-.2.91-.57 1.77-1.05 2.53-.26.39-.18.9.14 1.22',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M16 11.1C16 8.61 14.1 7 12 7s-4 1.61-4 4.1c0 1.51 1.1 3.28 3.31 5.3.39.36.98.36 1.38 0C14.9 14.37 16 12.61 16 11.1m-4 .9c-.59 0-1.07-.48-1.07-1.07s.48-1.07 1.07-1.07 1.07.48 1.07 1.07S12.59 12 12 12',
      },
      '1',
    ),
  ],
  'ShareLocationRounded',
);
export const ShareLocationSharpIcon = (props?: KTRawAttr) => {
  const s = _ShareLocationSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShareLocationSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M13.02 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.42-1.43c-1.11.86-2.44 1.44-3.9 1.62M4.03 12c0-4.05 3.03-7.41 6.95-7.93V2.05C5.95 2.58 2.03 6.84 2.03 12s3.92 9.42 8.95 9.95v-2.02c-3.92-.52-6.95-3.88-6.95-7.93m15.92-1h2.02c-.2-2.01-1-3.84-2.21-5.32l-1.43 1.43c.86 1.1 1.44 2.43 1.62 3.89m-1.61-6.74c-1.48-1.21-3.32-2.01-5.32-2.21v2.02c1.46.18 2.79.76 3.9 1.62zm-.01 12.64 1.43 1.42c1.21-1.48 2.01-3.31 2.21-5.32h-2.02c-.18 1.46-.76 2.79-1.62 3.9',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M16 11.1C16 8.61 14.1 7 12 7s-4 1.61-4 4.1c0 1.66 1.33 3.63 4 5.9 2.67-2.27 4-4.24 4-5.9m-4 .9c-.59 0-1.07-.48-1.07-1.07s.48-1.07 1.07-1.07 1.07.48 1.07 1.07S12.59 12 12 12',
      },
      '1',
    ),
  ],
  'ShareLocationSharp',
);
export const ShareLocationTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ShareLocationTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShareLocationTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M13.02 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.42-1.43c-1.11.86-2.44 1.44-3.9 1.62M4.03 12c0-4.05 3.03-7.41 6.95-7.93V2.05C5.95 2.58 2.03 6.84 2.03 12s3.92 9.42 8.95 9.95v-2.02c-3.92-.52-6.95-3.88-6.95-7.93m15.92-1h2.02c-.2-2.01-1-3.84-2.21-5.32l-1.43 1.43c.86 1.1 1.44 2.43 1.62 3.89m-1.61-6.74c-1.48-1.21-3.32-2.01-5.32-2.21v2.02c1.46.18 2.79.76 3.9 1.62zm-.01 12.64 1.43 1.42c1.21-1.48 2.01-3.31 2.21-5.32h-2.02c-.18 1.46-.76 2.79-1.62 3.9',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M16 11.1C16 8.61 14.1 7 12 7s-4 1.61-4 4.1c0 1.66 1.33 3.63 4 5.9 2.67-2.27 4-4.24 4-5.9m-4 .9c-.59 0-1.07-.48-1.07-1.07s.48-1.07 1.07-1.07 1.07.48 1.07 1.07S12.59 12 12 12',
      },
      '1',
    ),
  ],
  'ShareLocationTwoTone',
);
export const ShareOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ShareOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShareOutlinedIcon = svg(
  svg('path', {
    d: 'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92M18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'ShareOutlined',
);
export const ShareRoundedIcon = (props?: KTRawAttr) => {
  const s = _ShareRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShareRoundedIcon = svg(
  svg('path', {
    d: 'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92',
  }),
  'ShareRounded',
);
export const ShareSharpIcon = (props?: KTRawAttr) => {
  const s = _ShareSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShareSharpIcon = svg(
  svg('path', {
    d: 'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92',
  }),
  'ShareSharp',
);
export const ShareTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ShareTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShareTwoToneIcon = svg(
  [
    svg('circle', { cx: '18', cy: '5', r: '1', opacity: '.3' }, '0'),
    svg('circle', { cx: '6', cy: '12', r: '1', opacity: '.3' }, '1'),
    svg('circle', { cx: '18', cy: '19.02', r: '1', opacity: '.3' }, '2'),
    svg(
      'path',
      {
        d: 'M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92M18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
      },
      '3',
    ),
  ],
  'ShareTwoTone',
);
export const ShelvesIcon = (props?: KTRawAttr) => {
  const s = _ShelvesIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShelvesIcon = svg(
  svg('path', { d: 'M19 1v2H5V1H3v22h2v-2h14v2h2V1zm0 4v6h-6V7H7v4H5V5zm-2 14v-4h-6v4H5v-6h14v6z' }),
  'Shelves',
);
export const ShieldIcon = (props?: KTRawAttr) => {
  const s = _ShieldIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShieldIcon = svg(
  svg('path', { d: 'M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5z' }),
  'Shield',
);
export const ShieldMoonIcon = (props?: KTRawAttr) => {
  const s = _ShieldMoonIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShieldMoonIcon = svg(
  svg('path', {
    d: 'M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5zm3.97 12.41c-1.84 2.17-5.21 2.1-6.96-.07-2.19-2.72-.65-6.72 2.69-7.33.34-.06.63.27.51.6-.46 1.23-.39 2.64.32 3.86s1.89 1.99 3.18 2.2c.34.05.49.47.26.74',
  }),
  'ShieldMoon',
);
export const ShieldMoonOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ShieldMoonOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShieldMoonOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M9.01 14.33c1.75 2.17 5.12 2.24 6.96.07.23-.27.08-.68-.26-.74-1.29-.21-2.48-.98-3.18-2.2-.71-1.22-.78-2.63-.32-3.86.12-.33-.16-.66-.51-.6-3.34.62-4.89 4.61-2.69 7.33',
      },
      '1',
    ),
  ],
  'ShieldMoonOutlined',
);
export const ShieldMoonRoundedIcon = (props?: KTRawAttr) => {
  const s = _ShieldMoonRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShieldMoonRoundedIcon = svg(
  svg('path', {
    d: 'm11.3 2.26-6 2.25C4.52 4.81 4 5.55 4 6.39v4.7c0 4.83 3.13 9.37 7.43 10.75.37.12.77.12 1.14 0 4.3-1.38 7.43-5.91 7.43-10.75v-4.7c0-.83-.52-1.58-1.3-1.87l-6-2.25c-.45-.18-.95-.18-1.4-.01m4.67 12.15c-1.84 2.17-5.21 2.1-6.96-.07-2.19-2.72-.65-6.72 2.69-7.33.34-.06.63.27.51.6-.46 1.23-.39 2.64.32 3.86s1.89 1.99 3.18 2.2c.34.05.49.47.26.74',
  }),
  'ShieldMoonRounded',
);
export const ShieldMoonSharpIcon = (props?: KTRawAttr) => {
  const s = _ShieldMoonSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShieldMoonSharpIcon = svg(
  svg('path', {
    d: 'M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5zm3.97 12.41c-1.84 2.17-5.21 2.1-6.96-.07-2.19-2.72-.65-6.72 2.69-7.33.34-.06.63.27.51.6-.46 1.23-.39 2.64.32 3.86s1.89 1.99 3.18 2.2c.34.05.49.47.26.74',
  }),
  'ShieldMoonSharp',
);
export const ShieldMoonTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ShieldMoonTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShieldMoonTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M6 6.39v4.7c0 4 2.55 7.7 6 8.83 3.45-1.13 6-4.82 6-8.83v-4.7l-6-2.25zm6.21 1.22c-.46 1.23-.39 2.64.32 3.86s1.89 1.99 3.18 2.2c.34.06.49.47.26.74-1.84 2.17-5.21 2.1-6.96-.07-2.19-2.72-.65-6.72 2.69-7.33.34-.06.63.27.51.6',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25z',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M9.01 14.33c1.75 2.17 5.12 2.24 6.96.07.23-.27.08-.68-.26-.74-1.29-.21-2.48-.98-3.18-2.2-.71-1.22-.78-2.63-.32-3.86.12-.33-.16-.66-.51-.6-3.34.62-4.89 4.61-2.69 7.33',
      },
      '2',
    ),
  ],
  'ShieldMoonTwoTone',
);
export const ShieldOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ShieldOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShieldOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25z',
  }),
  'ShieldOutlined',
);
export const ShieldRoundedIcon = (props?: KTRawAttr) => {
  const s = _ShieldRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShieldRoundedIcon = svg(
  svg('path', {
    d: 'm11.3 2.26-6 2.25C4.52 4.81 4 5.55 4 6.39v4.7c0 4.83 3.13 9.37 7.43 10.75.37.12.77.12 1.14 0 4.3-1.38 7.43-5.91 7.43-10.75v-4.7c0-.83-.52-1.58-1.3-1.87l-6-2.25c-.45-.18-.95-.18-1.4-.01',
  }),
  'ShieldRounded',
);
export const ShieldSharpIcon = (props?: KTRawAttr) => {
  const s = _ShieldSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShieldSharpIcon = svg(
  svg('path', { d: 'M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5z' }),
  'ShieldSharp',
);
export const ShieldTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ShieldTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShieldTwoToneIcon = svg(
  [
    svg('path', { d: 'M6 6.39v4.7c0 4 2.55 7.7 6 8.83 3.45-1.13 6-4.82 6-8.83v-4.7l-6-2.25z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25z',
      },
      '1',
    ),
  ],
  'ShieldTwoTone',
);
export const ShopIcon = (props?: KTRawAttr) => {
  const s = _ShopIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShopIcon = svg(
  svg('path', {
    d: 'M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6zm-6-2h4v2h-4zM9 18V9l7.5 4z',
  }),
  'Shop',
);
export const Shop2Icon = (props?: KTRawAttr) => {
  const s = _Shop2Icon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Shop2Icon = svg(
  [
    svg('path', { d: 'M3 9H1v11c0 1.11.89 2 2 2h16v-2H3z' }, '0'),
    svg(
      'path',
      {
        d: 'M18 5V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5zm-6-2h4v2h-4zm0 12V8l5.5 3.5z',
      },
      '1',
    ),
  ],
  'Shop2',
);
export const Shop2OutlinedIcon = (props?: KTRawAttr) => {
  const s = _Shop2OutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Shop2OutlinedIcon = svg(
  [
    svg('path', { d: 'M3 9H1v11c0 1.11.89 2 2 2h16v-2H3z' }, '0'),
    svg(
      'path',
      {
        d: 'M18 5V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5zm-6-2h4v2h-4zm9 13H7V7h14z',
      },
      '1',
    ),
    svg('path', { d: 'M12 8v7l5.5-3.5z' }, '2'),
  ],
  'Shop2Outlined',
);
export const Shop2RoundedIcon = (props?: KTRawAttr) => {
  const s = _Shop2RoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Shop2RoundedIcon = svg(
  [
    svg(
      'path',
      { d: 'M2 9c-.55 0-1 .45-1 1v10c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H3V10c0-.55-.45-1-1-1' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M18 5V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5zm-6-2h4v2h-4zm0 11.09V8.91c0-.39.44-.63.77-.42l4.07 2.59c.31.2.31.65 0 .84l-4.07 2.59c-.33.21-.77-.03-.77-.42',
      },
      '1',
    ),
  ],
  'Shop2Rounded',
);
export const Shop2SharpIcon = (props?: KTRawAttr) => {
  const s = _Shop2SharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Shop2SharpIcon = svg(
  [
    svg('path', { d: 'M3 9H1v13h18v-2H3z' }, '0'),
    svg('path', { d: 'M18 5V1h-8v4H5v13h18V5zm-6-2h4v2h-4zm0 12V8l5.5 3.5z' }, '1'),
  ],
  'Shop2Sharp',
);
export const Shop2TwoToneIcon = (props?: KTRawAttr) => {
  const s = _Shop2TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _Shop2TwoToneIcon = svg(
  [
    svg('path', { d: 'M7 16h14V7H7zm5-8 5.5 3.5L12 15z', opacity: '.3' }, '0'),
    svg('path', { d: 'M3 9H1v11c0 1.11.89 2 2 2h16v-2H3z' }, '1'),
    svg(
      'path',
      {
        d: 'M18 5V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5zm-6-2h4v2h-4zm9 13H7V7h14z',
      },
      '2',
    ),
    svg('path', { d: 'M12 8v7l5.5-3.5z' }, '3'),
  ],
  'Shop2TwoTone',
);
export const ShopOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ShopOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShopOutlinedIcon = svg(
  svg('path', {
    d: 'M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6zm-6-2h4v2h-4zm10 15H4V8h16zM9 18l7.5-5L9 9z',
  }),
  'ShopOutlined',
);
export const ShopRoundedIcon = (props?: KTRawAttr) => {
  const s = _ShopRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShopRoundedIcon = svg(
  svg('path', {
    d: 'M16 6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2h4v2h-4zM9 17.07V9.83c0-.38.4-.62.74-.44l6.03 3.21c.33.18.36.65.04.86l-6.03 4.02c-.33.22-.78-.01-.78-.41',
  }),
  'ShopRounded',
);
export const ShopSharpIcon = (props?: KTRawAttr) => {
  const s = _ShopSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShopSharpIcon = svg(
  svg('path', { d: 'M16 6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v15h20V6zm-6-2h4v2h-4zM9 18V9l7.5 4z' }),
  'ShopSharp',
);
export const ShopTwoIcon = (props?: KTRawAttr) => {
  const s = _ShopTwoIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShopTwoIcon = svg(
  svg('path', {
    d: 'M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5zm-6-2h4v2h-4zm0 12V8l5.5 3z',
  }),
  'ShopTwo',
);
export const ShopTwoOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ShopTwoOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShopTwoOutlinedIcon = svg(
  svg('path', {
    d: 'M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5zm-6-2h4v2h-4zm9 13H7V7h14zm-9-1 5.5-4L12 8z',
  }),
  'ShopTwoOutlined',
);
export const ShopTwoRoundedIcon = (props?: KTRawAttr) => {
  const s = _ShopTwoRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShopTwoRoundedIcon = svg(
  svg('path', {
    d: 'M2 9c-.55 0-1 .45-1 1v10c0 1.1.9 2 2 2h14c1.11 0 2-.89 2-2H4c-.55 0-1-.45-1-1v-9c0-.55-.45-1-1-1m16-4V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6-2h4v2h-4zm0 11.02V8.84c0-.38.41-.62.74-.44l4.07 2.22c.32.18.35.63.05.84l-4.07 2.96c-.33.24-.79.01-.79-.4',
  }),
  'ShopTwoRounded',
);
export const ShopTwoSharpIcon = (props?: KTRawAttr) => {
  const s = _ShopTwoSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShopTwoSharpIcon = svg(
  svg('path', {
    d: 'M3 9H1v13h18v-2H3zm15-4V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5v13h18V5zm-6-2h4v2h-4zm0 12V8l5.5 3z',
  }),
  'ShopTwoSharp',
);
export const ShopTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ShopTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShopTwoToneIcon = svg(
  [
    svg('path', { d: 'M4 19h16V8H4zM9 9l7.5 4L9 18z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6zm-6-2h4v2h-4zm10 15H4V8h16zM9 9v9l7.5-5z',
      },
      '1',
    ),
  ],
  'ShopTwoTone',
);
export const ShopTwoTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ShopTwoTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShopTwoTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 7v9h14V7zm5 8V8l5.5 3z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5zm-6-2h4v2h-4zm9 13H7V7h14zm-9-1 5.5-4L12 8z',
      },
      '1',
    ),
  ],
  'ShopTwoTwoTone',
);
export const ShoppingBagIcon = (props?: KTRawAttr) => {
  const s = _ShoppingBagIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingBagIcon = svg(
  svg('path', {
    d: 'M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2z',
  }),
  'ShoppingBag',
);
export const ShoppingBagOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ShoppingBagOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingBagOutlinedIcon = svg(
  svg('path', {
    d: 'M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2z',
  }),
  'ShoppingBagOutlined',
);
export const ShoppingBagRoundedIcon = (props?: KTRawAttr) => {
  const s = _ShoppingBagRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingBagRoundedIcon = svg(
  svg('path', {
    d: 'M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2z',
  }),
  'ShoppingBagRounded',
);
export const ShoppingBagSharpIcon = (props?: KTRawAttr) => {
  const s = _ShoppingBagSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingBagSharpIcon = svg(
  svg('path', {
    d: 'M20 6h-4c0-2.21-1.79-4-4-4S8 3.79 8 6H4v16h16zm-10 5H8V8h2zm2-7c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m4 7h-2V8h2z',
  }),
  'ShoppingBagSharp',
);
export const ShoppingBagTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ShoppingBagTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingBagTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M18 20H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2z',
      },
      '1',
    ),
  ],
  'ShoppingBagTwoTone',
);
export const ShoppingBasketIcon = (props?: KTRawAttr) => {
  const s = _ShoppingBasketIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingBasketIcon = svg(
  svg('path', {
    d: 'm17.21 9-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM9 9l3-4.4L15 9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
  }),
  'ShoppingBasket',
);
export const ShoppingBasketOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ShoppingBasketOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingBasketOutlinedIcon = svg(
  svg('path', {
    d: 'M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1M12 4.8 14.8 9H9.2zM18.5 19l-12.99.01L3.31 11H20.7zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2',
  }),
  'ShoppingBasketOutlined',
);
export const ShoppingBasketRoundedIcon = (props?: KTRawAttr) => {
  const s = _ShoppingBasketRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingBasketRoundedIcon = svg(
  svg('path', {
    d: 'M22 9h-4.79l-4.39-6.57c-.4-.59-1.27-.59-1.66 0L6.77 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1M11.99 4.79 14.8 9H9.18zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
  }),
  'ShoppingBasketRounded',
);
export const ShoppingBasketSharpIcon = (props?: KTRawAttr) => {
  const s = _ShoppingBasketSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingBasketSharpIcon = svg(
  svg('path', {
    d: 'm17.21 9-4.39-6.57c-.4-.59-1.27-.59-1.66 0L6.77 9H.69L4 21h16.02l3.29-12zm-5.22-4.21L14.8 9H9.18zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
  }),
  'ShoppingBasketSharp',
);
export const ShoppingBasketTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ShoppingBasketTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingBasketTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'm3.31 11 2.2 8.01L18.5 19l2.2-8zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1M12 4.8 14.8 9H9.2zM18.5 19l-12.99.01L3.31 11H20.7zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2',
      },
      '1',
    ),
  ],
  'ShoppingBasketTwoTone',
);
export const ShoppingCartIcon = (props?: KTRawAttr) => {
  const s = _ShoppingCartIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingCartIcon = svg(
  svg('path', {
    d: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2M1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2',
  }),
  'ShoppingCart',
);
export const ShoppingCartCheckoutIcon = (props?: KTRawAttr) => {
  const s = _ShoppingCartCheckoutIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingCartCheckoutIcon = svg(
  svg('path', {
    d: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7zM12 2l4 4-4 4-1.41-1.41L12.17 7H8V5h4.17l-1.59-1.59z',
  }),
  'ShoppingCartCheckout',
);
export const ShoppingCartCheckoutOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ShoppingCartCheckoutOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingCartCheckoutOutlinedIcon = svg(
  svg('path', {
    d: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7zM12 2l4 4-4 4-1.41-1.41L12.17 7H8V5h4.17l-1.59-1.59z',
  }),
  'ShoppingCartCheckoutOutlined',
);
export const ShoppingCartCheckoutRoundedIcon = (props?: KTRawAttr) => {
  const s = _ShoppingCartCheckoutRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingCartCheckoutRoundedIcon = svg(
  svg('path', {
    d: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m2-2c0-.55-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.24-6.14c.25-.48.08-1.08-.4-1.34-.49-.27-1.1-.08-1.36.41L15.55 11H8.53L4.54 2.57c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1M11.29 2.71c.39-.39 1.02-.39 1.41 0l2.59 2.59c.39.39.39 1.02 0 1.41L12.7 9.3c-.39.39-1.02.39-1.41 0a.996.996 0 0 1 0-1.41l.88-.89H9c-.55 0-1-.45-1-1s.45-1 1-1h3.17l-.88-.88a.996.996 0 0 1 0-1.41',
  }),
  'ShoppingCartCheckoutRounded',
);
export const ShoppingCartCheckoutSharpIcon = (props?: KTRawAttr) => {
  const s = _ShoppingCartCheckoutSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingCartCheckoutSharpIcon = svg(
  svg('path', {
    d: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-8.9-5h8.66L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59L3.61 17H19v-2H7zM12 2l4 4-4 4-1.41-1.41L12.17 7H8V5h4.17l-1.59-1.59z',
  }),
  'ShoppingCartCheckoutSharp',
);
export const ShoppingCartCheckoutTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ShoppingCartCheckoutTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingCartCheckoutTwoToneIcon = svg(
  svg('path', {
    d: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7zM12 2l4 4-4 4-1.41-1.41L12.17 7H8V5h4.17l-1.59-1.59z',
  }),
  'ShoppingCartCheckoutTwoTone',
);
export const ShoppingCartOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ShoppingCartOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingCartOutlinedIcon = svg(
  svg('path', {
    d: 'M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM6.16 6h12.15l-2.76 5H8.53zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2',
  }),
  'ShoppingCartOutlined',
);
export const ShoppingCartRoundedIcon = (props?: KTRawAttr) => {
  const s = _ShoppingCartRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingCartRoundedIcon = svg(
  svg('path', {
    d: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2',
  }),
  'ShoppingCartRounded',
);
export const ShoppingCartSharpIcon = (props?: KTRawAttr) => {
  const s = _ShoppingCartSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingCartSharpIcon = svg(
  svg('path', {
    d: 'M17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m0-3 1.1-2h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1v2h2l3.6 7.59L3.62 17H19v-2z',
  }),
  'ShoppingCartSharp',
);
export const ShoppingCartTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ShoppingCartTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShoppingCartTwoToneIcon = svg(
  [
    svg('path', { d: 'm15.55 11 2.76-5H6.16l2.37 5z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM6.16 6h12.15l-2.76 5H8.53zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2',
      },
      '1',
    ),
  ],
  'ShoppingCartTwoTone',
);
export const ShortTextIcon = (props?: KTRawAttr) => {
  const s = _ShortTextIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShortTextIcon = svg(svg('path', { d: 'M4 9h16v2H4zm0 4h10v2H4z' }), 'ShortText');
export const ShortTextOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ShortTextOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShortTextOutlinedIcon = svg(svg('path', { d: 'M4 9h16v2H4zm0 4h10v2H4z' }), 'ShortTextOutlined');
export const ShortTextRoundedIcon = (props?: KTRawAttr) => {
  const s = _ShortTextRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShortTextRoundedIcon = svg(
  svg('path', {
    d: 'M5 9h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1m0 4h8c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1',
  }),
  'ShortTextRounded',
);
export const ShortTextSharpIcon = (props?: KTRawAttr) => {
  const s = _ShortTextSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShortTextSharpIcon = svg(svg('path', { d: 'M4 9h16v2H4zm0 4h10v2H4z' }), 'ShortTextSharp');
export const ShortTextTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ShortTextTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShortTextTwoToneIcon = svg(svg('path', { d: 'M4 9h16v2H4zm0 4h10v2H4z' }), 'ShortTextTwoTone');
export const ShortcutIcon = (props?: KTRawAttr) => {
  const s = _ShortcutIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShortcutIcon = svg(
  svg('path', { d: 'm21 11-6-6v5H8c-2.76 0-5 2.24-5 5v4h2v-4c0-1.65 1.35-3 3-3h7v5z' }),
  'Shortcut',
);
export const ShortcutOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ShortcutOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShortcutOutlinedIcon = svg(
  svg('path', {
    d: 'm15 5-1.41 1.41L15 7.83 17.17 10H8c-2.76 0-5 2.24-5 5v4h2v-4c0-1.65 1.35-3 3-3h9.17L15 14.17l-1.41 1.41L15 17l6-6z',
  }),
  'ShortcutOutlined',
);
export const ShortcutRoundedIcon = (props?: KTRawAttr) => {
  const s = _ShortcutRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShortcutRoundedIcon = svg(
  svg('path', {
    d: 'M20.29 10.29 16.7 6.7c-.62-.62-1.7-.18-1.7.71V10H8c-2.76 0-5 2.24-5 5v3c0 .55.45 1 1 1s1-.45 1-1v-3c0-1.65 1.35-3 3-3h7v2.59c0 .89 1.08 1.34 1.71.71l3.59-3.59c.38-.39.38-1.03-.01-1.42',
  }),
  'ShortcutRounded',
);
export const ShortcutSharpIcon = (props?: KTRawAttr) => {
  const s = _ShortcutSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShortcutSharpIcon = svg(
  svg('path', { d: 'm21 11-6-6v5H8c-2.76 0-5 2.24-5 5v4h2v-4c0-1.65 1.35-3 3-3h7v5z' }),
  'ShortcutSharp',
);
export const ShortcutTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ShortcutTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShortcutTwoToneIcon = svg(
  svg('path', { d: 'm21 11-6-6v5H8c-2.76 0-5 2.24-5 5v4h2v-4c0-1.65 1.35-3 3-3h7v5z' }),
  'ShortcutTwoTone',
);
export const ShowChartIcon = (props?: KTRawAttr) => {
  const s = _ShowChartIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShowChartIcon = svg(
  svg('path', { d: 'm3.5 18.49 6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z' }),
  'ShowChart',
);
export const ShowChartOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ShowChartOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShowChartOutlinedIcon = svg(
  svg('path', { d: 'm3.5 18.49 6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z' }),
  'ShowChartOutlined',
);
export const ShowChartRoundedIcon = (props?: KTRawAttr) => {
  const s = _ShowChartRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShowChartRoundedIcon = svg(
  svg('path', {
    d: 'm4.2 17.78 5.3-5.3 3.25 3.25c.41.41 1.07.39 1.45-.04l7.17-8.07c.35-.39.33-.99-.04-1.37-.4-.4-1.07-.39-1.45.04l-6.39 7.18-3.29-3.29a.996.996 0 0 0-1.41 0l-6.09 6.1c-.39.39-.39 1.02 0 1.41l.09.09c.39.39 1.03.39 1.41 0',
  }),
  'ShowChartRounded',
);
export const ShowChartSharpIcon = (props?: KTRawAttr) => {
  const s = _ShowChartSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShowChartSharpIcon = svg(
  svg('path', { d: 'm3.5 18.49 6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z' }),
  'ShowChartSharp',
);
export const ShowChartTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ShowChartTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShowChartTwoToneIcon = svg(
  svg('path', { d: 'm13.5 13.48-4-4L2 16.99l1.5 1.5 6-6.01 4 4L22 6.92l-1.41-1.41z' }),
  'ShowChartTwoTone',
);
export const ShowerIcon = (props?: KTRawAttr) => {
  const s = _ShowerIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShowerIcon = svg(
  [
    svg('circle', { cx: '8', cy: '17', r: '1' }, '0'),
    svg('circle', { cx: '12', cy: '17', r: '1' }, '1'),
    svg('circle', { cx: '16', cy: '17', r: '1' }, '2'),
    svg('path', { d: 'M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92' }, '3'),
    svg('circle', { cx: '8', cy: '20', r: '1' }, '4'),
    svg('circle', { cx: '12', cy: '20', r: '1' }, '5'),
    svg('circle', { cx: '16', cy: '20', r: '1' }, '6'),
  ],
  'Shower',
);
export const ShowerOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ShowerOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShowerOutlinedIcon = svg(
  svg('path', {
    d: 'M9 17c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1m3-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m3-4v2H5v-2c0-3.53 2.61-6.43 6-6.92V3h2v2.08c3.39.49 6 3.39 6 6.92m-2 0c0-2.76-2.24-5-5-5s-5 2.24-5 5zm-9 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1',
  }),
  'ShowerOutlined',
);
export const ShowerRoundedIcon = (props?: KTRawAttr) => {
  const s = _ShowerRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShowerRoundedIcon = svg(
  [
    svg('circle', { cx: '8', cy: '17', r: '1' }, '0'),
    svg('circle', { cx: '12', cy: '17', r: '1' }, '1'),
    svg('circle', { cx: '16', cy: '17', r: '1' }, '2'),
    svg(
      'path',
      {
        d: 'M13 5.08V4c0-.55-.45-1-1-1s-1 .45-1 1v1.08C7.61 5.57 5 8.47 5 12v1c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1c0-3.53-2.61-6.43-6-6.92',
      },
      '3',
    ),
    svg('circle', { cx: '8', cy: '20', r: '1' }, '4'),
    svg('circle', { cx: '12', cy: '20', r: '1' }, '5'),
    svg('circle', { cx: '16', cy: '20', r: '1' }, '6'),
  ],
  'ShowerRounded',
);
export const ShowerSharpIcon = (props?: KTRawAttr) => {
  const s = _ShowerSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShowerSharpIcon = svg(
  [
    svg('circle', { cx: '8', cy: '17', r: '1' }, '0'),
    svg('circle', { cx: '12', cy: '17', r: '1' }, '1'),
    svg('circle', { cx: '16', cy: '17', r: '1' }, '2'),
    svg('path', { d: 'M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92' }, '3'),
    svg('circle', { cx: '8', cy: '20', r: '1' }, '4'),
    svg('circle', { cx: '12', cy: '20', r: '1' }, '5'),
    svg('circle', { cx: '16', cy: '20', r: '1' }, '6'),
  ],
  'ShowerSharp',
);
export const ShowerTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ShowerTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShowerTwoToneIcon = svg(
  [
    svg('path', { d: 'M12 7c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5', opacity: '.3' }, '0'),
    svg('circle', { cx: '8', cy: '20', r: '1' }, '1'),
    svg('circle', { cx: '16', cy: '17', r: '1' }, '2'),
    svg(
      'path',
      {
        d: 'M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92M7 12c0-2.76 2.24-5 5-5s5 2.24 5 5z',
      },
      '3',
    ),
    svg('circle', { cx: '16', cy: '20', r: '1' }, '4'),
    svg('circle', { cx: '12', cy: '17', r: '1' }, '5'),
    svg('circle', { cx: '8', cy: '17', r: '1' }, '6'),
    svg('circle', { cx: '12', cy: '20', r: '1' }, '7'),
  ],
  'ShowerTwoTone',
);
export const ShuffleIcon = (props?: KTRawAttr) => {
  const s = _ShuffleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShuffleIcon = svg(
  svg('path', {
    d: 'M10.59 9.17 5.41 4 4 5.41l5.17 5.17zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04z',
  }),
  'Shuffle',
);
export const ShuffleOnIcon = (props?: KTRawAttr) => {
  const s = _ShuffleOnIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShuffleOnIcon = svg(
  svg('path', {
    fillRule: 'evenodd',
    d: 'M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M10.59 9.17 5.41 4 4 5.41l5.17 5.17zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04z',
  }),
  'ShuffleOn',
);
export const ShuffleOnOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ShuffleOnOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShuffleOnOutlinedIcon = svg(
  svg('path', {
    d: 'M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M5.41 4l5.18 5.17-1.41 1.42L4 5.42zM20 20h-6v-2h2.61l-3.2-3.2 1.42-1.42 3.13 3.13.04.04V14h2zm0-10h-2V7.42L5.41 20 4 18.59 16.58 6H14V4h6z',
  }),
  'ShuffleOnOutlined',
);
export const ShuffleOnRoundedIcon = (props?: KTRawAttr) => {
  const s = _ShuffleOnRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShuffleOnRoundedIcon = svg(
  svg('path', {
    d: 'M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M4.3 4.7c.39-.39 1.02-.39 1.41 0l4.47 4.47-1.42 1.4L4.3 6.11a.996.996 0 0 1 0-1.41m15.29 14.8c0 .28-.22.5-.5.5H15.3c-.45 0-.67-.54-.36-.85l1.2-1.2-3.13-3.13 1.41-1.41 3.13 3.14 1.19-1.19c.31-.32.85-.1.85.35zm0-11.21c0 .45-.54.67-.85.36l-1.19-1.19L5.7 19.29c-.39.39-1.02.39-1.41 0a.996.996 0 0 1 0-1.41L16.13 6.04l-1.19-1.19c-.31-.31-.09-.85.36-.85h3.79c.28 0 .5.22.5.5z',
  }),
  'ShuffleOnRounded',
);
export const ShuffleOnSharpIcon = (props?: KTRawAttr) => {
  const s = _ShuffleOnSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShuffleOnSharpIcon = svg(
  svg('path', {
    d: 'M1 1v22h22V1zm4.41 3 5.18 5.17-1.42 1.41L4 5.41zM20 20h-5.5l2.05-2.05-3.13-3.13 1.41-1.41 3.13 3.13L20 14.5zm0-10.5-2.04-2.04L5.41 20 4 18.59 16.54 6.04 14.5 4H20z',
  }),
  'ShuffleOnSharp',
);
export const ShuffleOnTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ShuffleOnTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShuffleOnTwoToneIcon = svg(
  svg('path', {
    d: 'M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M5.41 4l5.18 5.17-1.42 1.41L4 5.41zM20 20h-5.5l2.05-2.05-3.13-3.13 1.41-1.41 3.13 3.13L20 14.5zm0-10.5-2.04-2.04L5.41 20 4 18.59 16.54 6.04 14.5 4H20z',
  }),
  'ShuffleOnTwoTone',
);
export const ShuffleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ShuffleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShuffleOutlinedIcon = svg(
  svg('path', {
    d: 'M10.59 9.17 5.41 4 4 5.41l5.17 5.17zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04z',
  }),
  'ShuffleOutlined',
);
export const ShuffleRoundedIcon = (props?: KTRawAttr) => {
  const s = _ShuffleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShuffleRoundedIcon = svg(
  svg('path', {
    d: 'M10.59 9.17 6.12 4.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.46 4.46zm4.76-4.32 1.19 1.19L4.7 17.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L17.96 7.46l1.19 1.19c.31.31.85.09.85-.36V4.5c0-.28-.22-.5-.5-.5h-3.79c-.45 0-.67.54-.36.85m-.52 8.56-1.41 1.41 3.13 3.13-1.2 1.2c-.31.31-.09.85.36.85h3.79c.28 0 .5-.22.5-.5v-3.79c0-.45-.54-.67-.85-.35l-1.19 1.19z',
  }),
  'ShuffleRounded',
);
export const ShuffleSharpIcon = (props?: KTRawAttr) => {
  const s = _ShuffleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShuffleSharpIcon = svg(
  svg('path', {
    d: 'M10.59 9.17 5.41 4 4 5.41l5.17 5.17zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04z',
  }),
  'ShuffleSharp',
);
export const ShuffleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ShuffleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShuffleTwoToneIcon = svg(
  svg('path', {
    d: 'M20 4h-5.5l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5zM5.41 4 4 5.41l5.17 5.17 1.42-1.41zM20 20v-5.5l-2.04 2.04-3.13-3.13-1.41 1.41 3.13 3.13L14.5 20z',
  }),
  'ShuffleTwoTone',
);
export const ShutterSpeedIcon = (props?: KTRawAttr) => {
  const s = _ShutterSpeedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShutterSpeedIcon = svg(
  svg('path', {
    d: 'M15 1H9v2h6zm4.03 6.39 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7m-.32-5H6.35c.57 1.62 1.82 2.92 3.41 3.56l-.11-.06zm5.97-4c-.57-1.6-1.78-2.89-3.34-3.54L12.26 11zm-7.04 7.83c.45.11.91.17 1.39.17 1.34 0 2.57-.45 3.57-1.19l-2.11-3.9zM7.55 8.99C6.59 10.05 6 11.46 6 13c0 .34.04.67.09 1h4.72zm8.79 8.14C17.37 16.06 18 14.6 18 13c0-.34-.04-.67-.09-1h-4.34zm-3.01-9.98C12.9 7.06 12.46 7 12 7c-1.4 0-2.69.49-3.71 1.29l2.32 3.56z',
  }),
  'ShutterSpeed',
);
export const ShutterSpeedOutlinedIcon = (props?: KTRawAttr) => {
  const s = _ShutterSpeedOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShutterSpeedOutlinedIcon = svg(
  svg('path', {
    d: 'M15 1H9v2h6zm4.03 6.39 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7m-.32-5H6.35c.57 1.62 1.82 2.92 3.41 3.56l-.11-.06zm5.97-4c-.57-1.6-1.78-2.89-3.34-3.54L12.26 11zm-7.04 7.83c.45.11.91.17 1.39.17 1.34 0 2.57-.45 3.57-1.19l-2.11-3.9zM7.55 8.99C6.59 10.05 6 11.46 6 13c0 .34.04.67.09 1h4.72zm8.79 8.14C17.37 16.06 18 14.6 18 13c0-.34-.04-.67-.09-1h-4.34zm-3.01-9.98C12.9 7.06 12.46 7 12 7c-1.4 0-2.69.49-3.71 1.29l2.32 3.56z',
  }),
  'ShutterSpeedOutlined',
);
export const ShutterSpeedRoundedIcon = (props?: KTRawAttr) => {
  const s = _ShutterSpeedRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShutterSpeedRoundedIcon = svg(
  svg('path', {
    d: 'M10 3h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1m9.03 4.39.75-.75c.38-.38.39-1.01 0-1.4l-.01-.01c-.39-.39-1.01-.38-1.4 0l-.75.75C16.07 4.74 14.12 4 12 4c-4.8 0-8.88 3.96-9 8.76C2.87 17.84 6.94 22 12 22c4.98 0 9-4.03 9-9 0-2.12-.74-4.07-1.97-5.61M12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7m-1.19-5h-3.7c-.38 0-.62.4-.45.74.56 1.12 1.44 2.01 2.57 2.57.23.11.52.02.65-.21l1.37-2.35c.19-.33-.05-.75-.44-.75m3.92-7.35c-.23-.12-.52-.02-.65.2l-1.38 2.39c-.2.34.04.76.43.76h3.76c.38 0 .62-.4.45-.73-.58-1.13-1.49-2.04-2.61-2.62m-.85 7.05c-.19-.34-.68-.35-.87-.01l-2.04 3.52c-.18.32.02.72.39.75 1.34.14 2.69-.18 3.83-.89.22-.14.28-.43.16-.66zm-3.57-1.47L7.93 9.57c-.2-.3-.64-.3-.84 0-.81 1.16-1.17 2.57-1.05 3.98.02.26.24.45.5.45h3.35c.39 0 .63-.44.42-.77m3.66-.49 2.02 3.74c.18.33.64.35.86.05.86-1.18 1.24-2.62 1.12-4.08-.02-.26-.25-.45-.5-.45h-3.05c-.39 0-.63.4-.45.74m-3.8-1.57c.2.31.66.3.85-.02l1.94-3.35c.19-.32-.03-.72-.4-.76-1.36-.12-2.73.21-3.88.97-.22.15-.27.46-.13.68z',
  }),
  'ShutterSpeedRounded',
);
export const ShutterSpeedSharpIcon = (props?: KTRawAttr) => {
  const s = _ShutterSpeedSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShutterSpeedSharpIcon = svg(
  svg('path', {
    d: 'M15 1H9v2h6zm4.03 6.39 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7m-.32-5H6.35c.57 1.62 1.82 2.92 3.41 3.56l-.11-.06zm5.97-4c-.57-1.6-1.78-2.89-3.34-3.54L12.26 11zm-7.04 7.83c.45.11.91.17 1.39.17 1.34 0 2.57-.45 3.57-1.19l-2.11-3.9zM7.55 8.99C6.59 10.05 6 11.46 6 13c0 .34.04.67.09 1h4.72zm8.79 8.14C17.37 16.06 18 14.6 18 13c0-.34-.04-.67-.09-1h-4.34zm-3.01-9.98C12.9 7.06 12.46 7 12 7c-1.4 0-2.69.49-3.71 1.29l2.32 3.56z',
  }),
  'ShutterSpeedSharp',
);
export const ShutterSpeedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _ShutterSpeedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _ShutterSpeedTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 6c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7m0 1c.46 0 .9.06 1.33.15l-2.72 4.7-2.32-3.56C9.31 7.49 10.6 7 12 7m-6 6c0-1.54.59-2.95 1.55-4.01L10.81 14H6.09c-.05-.33-.09-.66-.09-1m.35 2h5.33l-2.03 3.5.11.06c-1.59-.64-2.84-1.94-3.41-3.56M12 19c-.48 0-.94-.06-1.39-.17l2.85-4.92 2.11 3.9c-1 .74-2.23 1.19-3.57 1.19m6-6c0 1.6-.63 3.06-1.66 4.13L13.57 12h4.34c.05.33.09.66.09 1m-5.74-2 2.05-3.54c1.56.65 2.77 1.94 3.34 3.54z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M7.55 8.99C6.59 10.05 6 11.46 6 13c0 .34.04.67.09 1h4.72zm6.76-1.53L12.26 11h5.39c-.57-1.6-1.78-2.89-3.34-3.54m-.98-.31C12.9 7.06 12.46 7 12 7c-1.4 0-2.69.49-3.71 1.29l2.32 3.56zM11.68 15H6.35c.57 1.62 1.82 2.92 3.41 3.56l-.11-.06zm7.35-7.61 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7M9 1h6v2H9zm7.34 16.13C17.37 16.06 18 14.6 18 13c0-.34-.04-.67-.09-1h-4.34zm-5.73 1.7c.45.11.91.17 1.39.17 1.34 0 2.57-.45 3.57-1.19l-2.11-3.9z',
      },
      '1',
    ),
  ],
  'ShutterSpeedTwoTone',
);
export const SickIcon = (props?: KTRawAttr) => {
  const s = _SickIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SickIcon = svg(
  svg('path', {
    d: 'M21 9c-1.1 0-2-.9-2-2s2-4 2-4 2 2.9 2 4-.9 2-2 2m-3.5-2c0-.73.41-1.71.92-2.66C16.68 2.88 14.44 2 11.99 2 6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12c0-.55-.06-1.09-.14-1.62-.28.07-.56.12-.86.12-1.93 0-3.5-1.57-3.5-3.5m-1.88.38 1.06 1.06-1.06 1.06 1.06 1.06-1.06 1.06L13.5 9.5zm-8.3 1.06 1.06-1.06L10.5 9.5l-2.12 2.12-1.06-1.06L8.38 9.5zM15.44 17c-.69-1.19-1.97-2-3.44-2s-2.75.81-3.44 2H6.88c.3-.76.76-1.43 1.34-1.99L5.24 13.3c-.45.26-1.01.28-1.49 0-.72-.41-.96-1.33-.55-2.05s1.33-.96 2.05-.55c.48.28.74.78.74 1.29l3.58 2.07c.73-.36 1.55-.56 2.43-.56 2.33 0 4.32 1.45 5.12 3.5z',
  }),
  'Sick',
);
export const SickOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SickOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SickOutlinedIcon = svg(
  svg('path', {
    d: 'M7.32 10.56 8.38 9.5 7.32 8.44l1.06-1.06L10.5 9.5l-2.12 2.12zM4.5 9c.03 0 .05.01.08.01C5.77 6.07 8.64 4 12 4c2.19 0 4.16.88 5.61 2.3.15-.6.45-1.29.81-1.96C16.68 2.88 14.44 2 11.99 2c-4.88 0-8.94 3.51-9.81 8.14C2.74 9.44 3.59 9 4.5 9M21 10.5c-.42 0-.82-.09-1.19-.22.12.55.19 1.13.19 1.72 0 4.42-3.58 8-8 8-3.36 0-6.23-2.07-7.42-5.01-.03 0-.05.01-.08.01-.52 0-1.04-.14-1.5-.4-.32-.18-.59-.42-.82-.7.89 4.61 4.93 8.1 9.8 8.1C17.52 22 22 17.52 22 12c0-.55-.06-1.09-.14-1.62-.28.07-.56.12-.86.12M21 3s-2 2.9-2 4 .9 2 2 2 2-.9 2-2-2-4-2-4m-5.38 4.38L13.5 9.5l2.12 2.12 1.06-1.06-1.06-1.06 1.06-1.06zM8.56 17c.69-1.19 1.97-2 3.44-2s2.75.81 3.44 2h1.68c-.8-2.05-2.79-3.5-5.12-3.5-.87 0-1.7.2-2.43.57L5.99 12c0-.52-.26-1.02-.74-1.29-.72-.41-1.63-.17-2.05.55-.41.72-.17 1.63.55 2.05.48.28 1.05.25 1.49 0l2.97 1.72c-.57.53-1.03 1.21-1.33 1.97z',
  }),
  'SickOutlined',
);
export const SickRoundedIcon = (props?: KTRawAttr) => {
  const s = _SickRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SickRoundedIcon = svg(
  svg('path', {
    d: 'M23 7c0 1.1-.9 2-2 2s-2-.9-2-2c0-.78.99-2.44 1.58-3.36.2-.31.64-.31.84 0C22.01 4.56 23 6.22 23 7m-1.14 3.38c.08.53.14 1.07.14 1.62 0 5.52-4.48 10-10.01 10C6.47 22 2 17.52 2 12S6.47 2 11.99 2c2.45 0 4.69.88 6.43 2.34-.51.95-.92 1.93-.92 2.66 0 1.93 1.57 3.5 3.5 3.5.3 0 .58-.05.86-.12m-7.83-.35 1.06 1.06c.29.29.77.29 1.06 0s.29-.77 0-1.06l-.53-.53.53-.53c.29-.29.29-.77 0-1.06s-.77-.29-1.06 0l-1.06 1.06c-.29.29-.29.77 0 1.06M8.38 9.5l-.53.53c-.29.29-.29.77 0 1.06s.77.29 1.06 0l1.06-1.06c.29-.29.29-.77 0-1.06L8.91 7.91c-.29-.29-.77-.29-1.06 0s-.29.77 0 1.06zm8.09 6.3c-1-1.39-2.62-2.3-4.47-2.3-.87 0-1.69.2-2.43.56L5.99 12c0-.52-.26-1.02-.74-1.29-.8-.46-1.84-.11-2.17.8-.21.57-.03 1.25.44 1.64.52.44 1.2.45 1.72.16l2.97 1.72c-.25.24-.48.5-.68.78-.36.49 0 1.19.62 1.19.23 0 .46-.1.6-.3.72-1.02 1.9-1.7 3.25-1.7s2.53.68 3.25 1.7c.14.19.36.3.6.3.62 0 .98-.7.62-1.2',
  }),
  'SickRounded',
);
export const SickSharpIcon = (props?: KTRawAttr) => {
  const s = _SickSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SickSharpIcon = svg(
  svg('path', {
    d: 'M21 9c-1.1 0-2-.9-2-2s2-4 2-4 2 2.9 2 4-.9 2-2 2m-3.5-2c0-.73.41-1.71.92-2.66C16.68 2.88 14.44 2 11.99 2 6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12c0-.55-.06-1.09-.14-1.62-.28.07-.56.12-.86.12-1.93 0-3.5-1.57-3.5-3.5m-1.88.38 1.06 1.06-1.06 1.06 1.06 1.06-1.06 1.06L13.5 9.5zm-8.3 1.06 1.06-1.06L10.5 9.5l-2.12 2.12-1.06-1.06L8.38 9.5zM15.44 17c-.69-1.19-1.97-2-3.44-2s-2.75.81-3.44 2H6.88c.3-.76.76-1.43 1.34-1.99L5.24 13.3c-.45.26-1.01.28-1.49 0-.72-.41-.96-1.33-.55-2.05s1.33-.96 2.05-.55c.48.28.74.78.74 1.29l3.58 2.07c.73-.36 1.55-.56 2.43-.56 2.33 0 4.32 1.45 5.12 3.5z',
  }),
  'SickSharp',
);
export const SickTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SickTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SickTwoToneIcon = svg(
  svg('path', {
    d: 'M7.32 10.56 8.38 9.5 7.32 8.44l1.06-1.06L10.5 9.5l-2.12 2.12zM4.5 9c.03 0 .05.01.08.01C5.77 6.07 8.64 4 12 4c2.19 0 4.16.88 5.61 2.3.15-.6.45-1.29.81-1.96C16.68 2.88 14.44 2 11.99 2c-4.88 0-8.94 3.51-9.81 8.14C2.74 9.44 3.59 9 4.5 9M21 10.5c-.42 0-.82-.09-1.19-.22.12.55.19 1.13.19 1.72 0 4.42-3.58 8-8 8-3.36 0-6.23-2.07-7.42-5.01-.03 0-.05.01-.08.01-.52 0-1.04-.14-1.5-.4-.32-.18-.59-.42-.82-.7.89 4.61 4.93 8.1 9.8 8.1C17.52 22 22 17.52 22 12c0-.55-.06-1.09-.14-1.62-.28.07-.56.12-.86.12M21 3s-2 2.9-2 4 .9 2 2 2 2-.9 2-2-2-4-2-4m-5.38 4.38L13.5 9.5l2.12 2.12 1.06-1.06-1.06-1.06 1.06-1.06zM8.56 17c.69-1.19 1.97-2 3.44-2s2.75.81 3.44 2h1.68c-.8-2.05-2.79-3.5-5.12-3.5-.87 0-1.7.2-2.43.57L5.99 12c0-.52-.26-1.02-.74-1.29-.72-.41-1.63-.17-2.05.55-.41.72-.17 1.63.55 2.05.48.28 1.05.25 1.49 0l2.97 1.72c-.57.53-1.03 1.21-1.33 1.97z',
  }),
  'SickTwoTone',
);
export const SignLanguageIcon = (props?: KTRawAttr) => {
  const s = _SignLanguageIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignLanguageIcon = svg(
  svg('path', {
    d: 'm12.49 13-.93-1.86c-.37-.74-.07-1.64.67-2.01l.26-.13 5.73 5.46c.5.47.78 1.13.78 1.81v5.23c0 1.38-1.12 2.5-2.5 2.5h-11c-.55 0-1-.45-1-1s.45-1 1-1H10v-1H4c-.55 0-1-.45-1-1s.45-1 1-1h6v-1H3c-.55 0-1-.45-1-1s.45-1 1-1h7v-1H4.5c-.55 0-1-.45-1-1s.45-1 1-1zm-.71-5.88c-.84.4-1.17.62-1.63 1.19l-2.7-2.85c-.38-.4-.36-1.03.04-1.41s1.03-.36 1.41.04zM9.64 9.21c-.23.55-.29 1.24-.2 1.79h-.86L6.31 8.61c-.38-.4-.37-1.03.04-1.41.4-.38 1.03-.36 1.41.04zm10.69 4.7.88-.83c.5-.47.79-1.13.79-1.82V3.35l-.27-.1c-.78-.28-1.64.12-1.92.9l-.71 1.96-5.5-5.8c-.38-.4-1.01-.42-1.41-.04s-.42 1.01-.04 1.41l3.79 3.99-.73.69-4.82-5.08c-.38-.4-1.01-.42-1.41-.04s-.42 1.01-.04 1.41l3.78 3.98L15.38 9l3.61 3.43.61.58c.29.27.53.57.73.9',
  }),
  'SignLanguage',
);
export const SignLanguageOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignLanguageOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignLanguageOutlinedIcon = svg(
  svg('path', {
    d: 'm12.49 13-.93-1.86c-.37-.74-.07-1.64.67-2.01l.26-.13 5.73 5.46c.5.47.78 1.13.78 1.81v5.23c0 1.38-1.12 2.5-2.5 2.5h-11c-.55 0-1-.45-1-1s.45-1 1-1H10v-1H4c-.55 0-1-.45-1-1s.45-1 1-1h6v-1H3c-.55 0-1-.45-1-1s.45-1 1-1h7v-1H4.5c-.55 0-1-.45-1-1s.45-1 1-1zm1.51.2V15h-2v7h4c.55 0 1-.45 1-1v-4.53c0-.27-.11-.54-.31-.73zm-2.22-6.08c-.84.4-1.17.62-1.63 1.19l-2.7-2.85c-.38-.4-.36-1.03.04-1.41s1.03-.36 1.41.04zM9.64 9.21c-.23.55-.29 1.24-.2 1.79h-.86L6.31 8.61c-.38-.4-.37-1.03.04-1.41.4-.38 1.03-.36 1.41.04zm10.69 4.7.88-.83c.5-.47.79-1.13.79-1.82V3.35l-.27-.1c-.78-.28-1.64.12-1.92.9l-.71 1.96-5.5-5.8c-.38-.4-1.01-.42-1.41-.04s-.42 1.01-.04 1.41l3.79 3.99-.73.69-4.82-5.08c-.38-.4-1.01-.42-1.41-.04s-.42 1.01-.04 1.41l3.78 3.98L15.38 9l1.93-1.87 1.38 1.45L20 7.34v3.7c0 .28-.11.54-.31.73l-.7.66.61.58c.29.27.53.57.73.9',
  }),
  'SignLanguageOutlined',
);
export const SignLanguageRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignLanguageRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignLanguageRoundedIcon = svg(
  svg('path', {
    d: 'm12.49 13-.93-1.86c-.37-.74-.07-1.64.67-2.01.16-.08.34-.05.47.07l5.53 5.26c.5.47.78 1.13.78 1.81v5.23c0 1.38-1.12 2.5-2.5 2.5h-11c-.55 0-1-.45-1-1s.45-1 1-1H10v-1H4c-.55 0-1-.45-1-1s.45-1 1-1h6v-1H3c-.55 0-1-.45-1-1s.45-1 1-1h7v-1H4.5c-.55 0-1-.45-1-1s.45-1 1-1zm-.71-5.88c-.84.4-1.17.62-1.63 1.19l-2.7-2.85c-.38-.4-.36-1.03.04-1.41s1.03-.36 1.41.04zM9.64 9.21c-.23.55-.29 1.24-.2 1.79h-.86L6.31 8.61c-.38-.4-.37-1.03.04-1.41.4-.38 1.03-.36 1.41.04zm10.69 4.7.88-.83c.5-.47.79-1.13.79-1.82V3.64c0-.17-.11-.33-.27-.39-.78-.28-1.64.12-1.92.9l-.71 1.96-5.5-5.8c-.38-.4-1.01-.42-1.41-.04s-.42 1.01-.04 1.41l3.79 3.99-.73.69-4.82-5.08c-.38-.4-1.01-.42-1.41-.04s-.42 1.01-.04 1.41l3.78 3.98L15.38 9l3.61 3.43.61.58c.29.27.53.57.73.9',
  }),
  'SignLanguageRounded',
);
export const SignLanguageSharpIcon = (props?: KTRawAttr) => {
  const s = _SignLanguageSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignLanguageSharpIcon = svg(
  svg('path', {
    d: 'm12.49 13-1.39-2.7L12.49 9 19 15.2V24H4.5v-2H10v-1H3v-2h7v-1H2v-2h8v-1H3.5v-2zm-.71-5.88c-.84.4-1.17.62-1.63 1.19L6.76 4.74l1.45-1.38zM9.64 9.21c-.23.55-.29 1.24-.2 1.79h-.86L5.62 7.89l1.45-1.38zm12.34 3.13L22 3.35l-1.9-.1-1 2.86L13.3 0l-1.45 1.38 4.09 4.3-.73.69L9.74.64 8.3 2l3.36 3.53 1.06 1.11 2.65 2.33 5.08 4.83z',
  }),
  'SignLanguageSharp',
);
export const SignLanguageTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignLanguageTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignLanguageTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M14 13.2V15h-2v7h4c.55 0 1-.45 1-1v-4.53c0-.27-.11-.54-.31-.73zM15.38 9l1.93-1.87 1.38 1.45L20 7.34v3.7c0 .28-.11.54-.31.73l-.7.66z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm12.49 13-.93-1.86c-.37-.74-.07-1.64.67-2.01l.26-.13 5.73 5.46c.5.47.78 1.13.78 1.81v5.23c0 1.38-1.12 2.5-2.5 2.5h-11c-.55 0-1-.45-1-1s.45-1 1-1H10v-1H4c-.55 0-1-.45-1-1s.45-1 1-1h6v-1H3c-.55 0-1-.45-1-1s.45-1 1-1h7v-1H4.5c-.55 0-1-.45-1-1s.45-1 1-1zm1.51.2V15h-2v7h4c.55 0 1-.45 1-1v-4.53c0-.27-.11-.54-.31-.73zm-2.22-6.08c-.84.4-1.17.62-1.63 1.19l-2.7-2.85c-.38-.4-.36-1.03.04-1.41s1.03-.36 1.41.04zM9.64 9.21c-.23.55-.29 1.24-.2 1.79h-.86L6.31 8.61c-.38-.4-.37-1.03.04-1.41.4-.38 1.03-.36 1.41.04zm10.69 4.7.88-.83c.5-.47.79-1.13.79-1.82V3.35l-.27-.1c-.78-.28-1.64.12-1.92.9l-.71 1.96-5.5-5.8c-.38-.4-1.01-.42-1.41-.04s-.42 1.01-.04 1.41l3.79 3.99-.73.69-4.82-5.08c-.38-.4-1.01-.42-1.41-.04s-.42 1.01-.04 1.41l3.78 3.98L15.38 9l1.93-1.87 1.38 1.45L20 7.34v3.7c0 .28-.11.54-.31.73l-.7.66.61.58c.29.27.53.57.73.9',
      },
      '1',
    ),
  ],
  'SignLanguageTwoTone',
);
export const SignalCellular0BarIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular0BarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular0BarIcon = svg(svg('path', { d: 'M20 6.83V20H6.83zM22 2 2 22h20z' }), 'SignalCellular0Bar');
export const SignalCellular0BarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular0BarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular0BarOutlinedIcon = svg(
  svg('path', { d: 'M2 22h20V2zm18-2H6.83L20 6.83z' }),
  'SignalCellular0BarOutlined',
);
export const SignalCellular0BarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular0BarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular0BarRoundedIcon = svg(
  svg('path', {
    d: 'M4.41 22H21c.55 0 1-.45 1-1V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71M20 20H6.83L20 6.83z',
  }),
  'SignalCellular0BarRounded',
);
export const SignalCellular0BarSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular0BarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular0BarSharpIcon = svg(
  svg('path', { d: 'M2 22h20V2zm18-2H6.83L20 6.83z' }),
  'SignalCellular0BarSharp',
);
export const SignalCellular0BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular0BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular0BarTwoToneIcon = svg(
  svg('path', { d: 'M2 22h20V2zm18-2H6.83L20 6.83z' }),
  'SignalCellular0BarTwoTone',
);
export const SignalCellular1BarIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular1BarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular1BarIcon = svg(
  svg({ children: [svg('path', { fillOpacity: '.3', d: 'M2 22h20V2z' }), svg('path', { d: 'M12 12L2 22h10z' })] }),
  'SignalCellular1Bar',
);
export const SignalCellular1BarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular1BarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular1BarOutlinedIcon = svg(
  svg({
    children: [svg('path', { fillOpacity: '.3', d: 'M2 22h20V2L2 22z' }), svg('path', { d: 'M12 12L2 22h10V12z' })],
  }),
  'SignalCellular1BarOutlined',
);
export const SignalCellular1BarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular1BarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular1BarRoundedIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71z',
      }),
      svg('path', { d: 'M12 12l-8.29 8.29c-.63.63-.19 1.71.7 1.71H12V12z' }),
    ],
  }),
  'SignalCellular1BarRounded',
);
export const SignalCellular1BarSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular1BarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular1BarSharpIcon = svg(
  svg({
    children: [svg('path', { fillOpacity: '.3', d: 'M2 22h20V2L2 22z' }), svg('path', { d: 'M12 12L2 22h10V12z' })],
  }),
  'SignalCellular1BarSharp',
);
export const SignalCellular1BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular1BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular1BarTwoToneIcon = svg(
  svg({
    children: [svg('path', { fillOpacity: '.3', d: 'M2 22h20V2L2 22z' }), svg('path', { d: 'M12 12L2 22h10V12z' })],
  }),
  'SignalCellular1BarTwoTone',
);
export const SignalCellular2BarIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular2BarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular2BarIcon = svg(
  svg({ children: [svg('path', { fillOpacity: '.3', d: 'M2 22h20V2z' }), svg('path', { d: 'M14 10L2 22h12z' })] }),
  'SignalCellular2Bar',
);
export const SignalCellular2BarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular2BarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular2BarOutlinedIcon = svg(
  svg({
    children: [svg('path', { fillOpacity: '.3', d: 'M2 22h20V2L2 22z' }), svg('path', { d: 'M14 10L2 22h12V10z' })],
  }),
  'SignalCellular2BarOutlined',
);
export const SignalCellular2BarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular2BarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular2BarRoundedIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71z',
      }),
      svg('path', { d: 'M14 10L3.71 20.29c-.63.63-.19 1.71.7 1.71H14V10z' }),
    ],
  }),
  'SignalCellular2BarRounded',
);
export const SignalCellular2BarSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular2BarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular2BarSharpIcon = svg(
  svg({
    children: [svg('path', { fillOpacity: '.3', d: 'M2 22h20V2L2 22z' }), svg('path', { d: 'M14 10L2 22h12V10z' })],
  }),
  'SignalCellular2BarSharp',
);
export const SignalCellular2BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular2BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular2BarTwoToneIcon = svg(
  svg({
    children: [svg('path', { fillOpacity: '.3', d: 'M2 22h20V2L2 22z' }), svg('path', { d: 'M14 10L2 22h12V10z' })],
  }),
  'SignalCellular2BarTwoTone',
);
export const SignalCellular3BarIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular3BarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular3BarIcon = svg(
  svg({ children: [svg('path', { fillOpacity: '.3', d: 'M2 22h20V2z' }), svg('path', { d: 'M17 7L2 22h15z' })] }),
  'SignalCellular3Bar',
);
export const SignalCellular3BarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular3BarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular3BarOutlinedIcon = svg(
  svg({
    children: [svg('path', { fillOpacity: '.3', d: 'M2 22h20V2L2 22z' }), svg('path', { d: 'M17 7L2 22h15V7z' })],
  }),
  'SignalCellular3BarOutlined',
);
export const SignalCellular3BarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular3BarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular3BarRoundedIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71z',
      }),
      svg('path', { d: 'M17 7L3.71 20.29c-.63.63-.19 1.71.7 1.71H17V7z' }),
    ],
  }),
  'SignalCellular3BarRounded',
);
export const SignalCellular3BarSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular3BarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular3BarSharpIcon = svg(
  svg({
    children: [svg('path', { fillOpacity: '.3', d: 'M2 22h20V2L2 22z' }), svg('path', { d: 'M17 7L2 22h15V7z' })],
  }),
  'SignalCellular3BarSharp',
);
export const SignalCellular3BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular3BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular3BarTwoToneIcon = svg(
  svg({
    children: [svg('path', { fillOpacity: '.3', d: 'M2 22h20V2L2 22z' }), svg('path', { d: 'M17 7L2 22h15V7z' })],
  }),
  'SignalCellular3BarTwoTone',
);
export const SignalCellular4BarIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular4BarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular4BarIcon = svg(svg('path', { d: 'M2 22h20V2z' }), 'SignalCellular4Bar');
export const SignalCellular4BarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular4BarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular4BarOutlinedIcon = svg(svg('path', { d: 'M2 22h20V2z' }), 'SignalCellular4BarOutlined');
export const SignalCellular4BarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular4BarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular4BarRoundedIcon = svg(
  svg('path', { d: 'M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71' }),
  'SignalCellular4BarRounded',
);
export const SignalCellular4BarSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular4BarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular4BarSharpIcon = svg(svg('path', { d: 'M2 22h20V2z' }), 'SignalCellular4BarSharp');
export const SignalCellular4BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalCellular4BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellular4BarTwoToneIcon = svg(svg('path', { d: 'M2 22h20V2z' }), 'SignalCellular4BarTwoTone');
export const SignalCellularAltIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularAltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularAltIcon = svg(
  svg('path', { d: 'M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z' }),
  'SignalCellularAlt',
);
export const SignalCellularAlt1BarIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularAlt1BarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularAlt1BarIcon = svg(svg('path', { d: 'M5 14h3v6H5z' }), 'SignalCellularAlt1Bar');
export const SignalCellularAlt1BarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularAlt1BarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularAlt1BarOutlinedIcon = svg(
  svg('path', { d: 'M5 14h3v6H5z' }),
  'SignalCellularAlt1BarOutlined',
);
export const SignalCellularAlt1BarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularAlt1BarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularAlt1BarRoundedIcon = svg(
  svg('path', { d: 'M6.5 20c-.83 0-1.5-.67-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5' }),
  'SignalCellularAlt1BarRounded',
);
export const SignalCellularAlt1BarSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularAlt1BarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularAlt1BarSharpIcon = svg(svg('path', { d: 'M5 14h3v6H5z' }), 'SignalCellularAlt1BarSharp');
export const SignalCellularAlt1BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularAlt1BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularAlt1BarTwoToneIcon = svg(
  svg('path', { d: 'M5 14h3v6H5z' }),
  'SignalCellularAlt1BarTwoTone',
);
export const SignalCellularAlt2BarIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularAlt2BarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularAlt2BarIcon = svg(svg('path', { d: 'M5 14h3v6H5zm6-5h3v11h-3z' }), 'SignalCellularAlt2Bar');
export const SignalCellularAlt2BarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularAlt2BarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularAlt2BarOutlinedIcon = svg(
  svg('path', { d: 'M5 14h3v6H5zm6-5h3v11h-3z' }),
  'SignalCellularAlt2BarOutlined',
);
export const SignalCellularAlt2BarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularAlt2BarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularAlt2BarRoundedIcon = svg(
  svg('path', {
    d: 'M6.5 20c-.83 0-1.5-.67-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5m6 0c-.83 0-1.5-.67-1.5-1.5v-8c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5',
  }),
  'SignalCellularAlt2BarRounded',
);
export const SignalCellularAlt2BarSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularAlt2BarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularAlt2BarSharpIcon = svg(
  svg('path', { d: 'M5 14h3v6H5zm6-5h3v11h-3z' }),
  'SignalCellularAlt2BarSharp',
);
export const SignalCellularAlt2BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularAlt2BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularAlt2BarTwoToneIcon = svg(
  svg('path', { d: 'M5 14h3v6H5zm6-5h3v11h-3z' }),
  'SignalCellularAlt2BarTwoTone',
);
export const SignalCellularAltOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularAltOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularAltOutlinedIcon = svg(
  svg('path', { d: 'M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z' }),
  'SignalCellularAltOutlined',
);
export const SignalCellularAltRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularAltRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularAltRoundedIcon = svg(
  svg('path', {
    d: 'M18.5 4c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-13c0-.83.67-1.5 1.5-1.5m-12 10c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5S5 19.33 5 18.5v-3c0-.83.67-1.5 1.5-1.5m6-5c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-8c0-.83.67-1.5 1.5-1.5',
  }),
  'SignalCellularAltRounded',
);
export const SignalCellularAltSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularAltSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularAltSharpIcon = svg(
  svg('path', { d: 'M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z' }),
  'SignalCellularAltSharp',
);
export const SignalCellularAltTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularAltTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularAltTwoToneIcon = svg(
  svg('path', { d: 'M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z' }),
  'SignalCellularAltTwoTone',
);
export const SignalCellularConnectedNoInternet0BarIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet0BarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet0BarIcon = svg(
  svg('path', { d: 'M20 18h2v-8h-2zm0 4h2v-2h-2zm-2-2v2H2L22 2v6h-2V6.83L6.83 20z' }),
  'SignalCellularConnectedNoInternet0Bar',
);
export const SignalCellularConnectedNoInternet0BarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet0BarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet0BarOutlinedIcon = svg(
  svg('path', { d: 'M20 18h2v-8h-2zm0 4h2v-2h-2zm-2-2v2H2L22 2v6h-2V6.83L6.83 20z' }),
  'SignalCellularConnectedNoInternet0BarOutlined',
);
export const SignalCellularConnectedNoInternet0BarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet0BarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet0BarRoundedIcon = svg(
  svg('path', {
    d: 'M21 18c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1m0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m-3-2v2H2L22 2v6h-2V6.83L6.83 20z',
  }),
  'SignalCellularConnectedNoInternet0BarRounded',
);
export const SignalCellularConnectedNoInternet0BarSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet0BarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet0BarSharpIcon = svg(
  svg('path', { d: 'M20 18h2v-8h-2zm0 4h2v-2h-2zm-2-2v2H2L22 2v6h-2V6.83L6.83 20z' }),
  'SignalCellularConnectedNoInternet0BarSharp',
);
export const SignalCellularConnectedNoInternet0BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet0BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet0BarTwoToneIcon = svg(
  svg('path', { d: 'M20 18h2v-8h-2zm0 4h2v-2h-2zm-2-2v2H2L22 2v6h-2V6.83L6.83 20z' }),
  'SignalCellularConnectedNoInternet0BarTwoTone',
);
export const SignalCellularConnectedNoInternet1BarIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet1BarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet1BarIcon = svg(
  svg({
    children: [
      svg('path', { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8z' }),
      svg('path', { d: 'M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z' }),
    ],
  }),
  'SignalCellularConnectedNoInternet1Bar',
);
export const SignalCellularConnectedNoInternet1BarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet1BarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet1BarOutlinedIcon = svg(
  svg({
    children: [
      svg('path', { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8h4z' }),
      svg('path', { d: 'M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z' }),
    ],
  }),
  'SignalCellularConnectedNoInternet1BarOutlined',
);
export const SignalCellularConnectedNoInternet1BarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet1BarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet1BarRoundedIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M22 8V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71H18V11c0-1.66 1.34-3 3-3h1z',
      }),
      svg('path', {
        d: 'M20 11v6c0 .55.45 1 1 1s1-.45 1-1v-6c0-.55-.45-1-1-1s-1 .45-1 1zm-8 11V12l-8.29 8.29c-.63.63-.19 1.71.7 1.71H12zm8 0h2v-2h-2v2z',
      }),
    ],
  }),
  'SignalCellularConnectedNoInternet1BarRounded',
);
export const SignalCellularConnectedNoInternet1BarSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet1BarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet1BarSharpIcon = svg(
  svg({
    children: [
      svg('path', { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8h4z' }),
      svg('path', { d: 'M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z' }),
    ],
  }),
  'SignalCellularConnectedNoInternet1BarSharp',
);
export const SignalCellularConnectedNoInternet1BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet1BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet1BarTwoToneIcon = svg(
  svg({
    children: [
      svg('path', { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8h4z' }),
      svg('path', { d: 'M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z' }),
    ],
  }),
  'SignalCellularConnectedNoInternet1BarTwoTone',
);
export const SignalCellularConnectedNoInternet2BarIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet2BarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet2BarIcon = svg(
  svg({
    children: [
      svg('path', { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8z' }),
      svg('path', { d: 'M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z' }),
    ],
  }),
  'SignalCellularConnectedNoInternet2Bar',
);
export const SignalCellularConnectedNoInternet2BarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet2BarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet2BarOutlinedIcon = svg(
  svg({
    children: [
      svg('path', { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8h4z' }),
      svg('path', { d: 'M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z' }),
    ],
  }),
  'SignalCellularConnectedNoInternet2BarOutlined',
);
export const SignalCellularConnectedNoInternet2BarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet2BarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet2BarRoundedIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M22 8V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71H18V11c0-1.66 1.34-3 3-3h1z',
      }),
      svg('path', {
        d: 'M14 22V10L3.71 20.29c-.63.63-.19 1.71.7 1.71H14zm6-11v6c0 .55.45 1 1 1s1-.45 1-1v-6c0-.55-.45-1-1-1s-1 .45-1 1zm0 11h2v-2h-2v2z',
      }),
    ],
  }),
  'SignalCellularConnectedNoInternet2BarRounded',
);
export const SignalCellularConnectedNoInternet2BarSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet2BarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet2BarSharpIcon = svg(
  svg({
    children: [
      svg('path', { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8h4z' }),
      svg('path', { d: 'M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z' }),
    ],
  }),
  'SignalCellularConnectedNoInternet2BarSharp',
);
export const SignalCellularConnectedNoInternet2BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet2BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet2BarTwoToneIcon = svg(
  svg({
    children: [
      svg('path', { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8h4z' }),
      svg('path', { d: 'M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z' }),
    ],
  }),
  'SignalCellularConnectedNoInternet2BarTwoTone',
);
export const SignalCellularConnectedNoInternet3BarIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet3BarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet3BarIcon = svg(
  svg({
    children: [
      svg('path', { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8z' }),
      svg('path', { d: 'M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z' }),
    ],
  }),
  'SignalCellularConnectedNoInternet3Bar',
);
export const SignalCellularConnectedNoInternet3BarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet3BarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet3BarOutlinedIcon = svg(
  svg({
    children: [
      svg('path', { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8h4z' }),
      svg('path', { d: 'M18 22V6L2 22h16zm2-12v8h2v-8h-2zm0 12h2v-2h-2v2z' }),
    ],
  }),
  'SignalCellularConnectedNoInternet3BarOutlined',
);
export const SignalCellularConnectedNoInternet3BarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet3BarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet3BarRoundedIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M22 8V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71H18V11c0-1.66 1.34-3 3-3h1z',
      }),
      svg('path', {
        d: 'M18 22V6L3.71 20.29c-.63.63-.19 1.71.7 1.71H18zm2-11v6c0 .55.45 1 1 1s1-.45 1-1v-6c0-.55-.45-1-1-1s-1 .45-1 1zm0 11h2v-2h-2v2z',
      }),
    ],
  }),
  'SignalCellularConnectedNoInternet3BarRounded',
);
export const SignalCellularConnectedNoInternet3BarSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet3BarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet3BarSharpIcon = svg(
  svg({
    children: [
      svg('path', { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8h4z' }),
      svg('path', { d: 'M18 22V6L2 22h16zm2-12v8h2v-8h-2zm0 12h2v-2h-2v2z' }),
    ],
  }),
  'SignalCellularConnectedNoInternet3BarSharp',
);
export const SignalCellularConnectedNoInternet3BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet3BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet3BarTwoToneIcon = svg(
  svg({
    children: [
      svg('path', { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8h4z' }),
      svg('path', { d: 'M18 22V6L2 22h16zm2-12v8h2v-8h-2zm0 12h2v-2h-2v2z' }),
    ],
  }),
  'SignalCellularConnectedNoInternet3BarTwoTone',
);
export const SignalCellularConnectedNoInternet4BarIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet4BarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet4BarIcon = svg(
  svg('path', { d: 'M20 18h2v-8h-2zm0 4h2v-2h-2zM2 22h16V8h4V2z' }),
  'SignalCellularConnectedNoInternet4Bar',
);
export const SignalCellularConnectedNoInternet4BarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet4BarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet4BarOutlinedIcon = svg(
  svg('path', { d: 'M20 18h2v-8h-2zm0 4h2v-2h-2zM2 22h16V8h4V2z' }),
  'SignalCellularConnectedNoInternet4BarOutlined',
);
export const SignalCellularConnectedNoInternet4BarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet4BarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet4BarRoundedIcon = svg(
  svg('path', {
    d: 'M21 18c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1m0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1M4.41 22H18V11c0-1.66 1.34-3 3-3h1V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71',
  }),
  'SignalCellularConnectedNoInternet4BarRounded',
);
export const SignalCellularConnectedNoInternet4BarSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet4BarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet4BarSharpIcon = svg(
  svg('path', { d: 'M20 18h2v-8h-2zm0 4h2v-2h-2zM2 22h16V8h4V2z' }),
  'SignalCellularConnectedNoInternet4BarSharp',
);
export const SignalCellularConnectedNoInternet4BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularConnectedNoInternet4BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularConnectedNoInternet4BarTwoToneIcon = svg(
  svg('path', { d: 'M20 18h2v-8h-2zm0 4h2v-2h-2zM2 22h16V8h4V2z' }),
  'SignalCellularConnectedNoInternet4BarTwoTone',
);
export const SignalCellularNoSimIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularNoSimIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularNoSimIcon = svg(
  svg('path', {
    d: 'M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68zM3.65 3.88 2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27z',
  }),
  'SignalCellularNoSim',
);
export const SignalCellularNoSimOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularNoSimOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularNoSimOutlinedIcon = svg(
  svg('path', {
    d: 'M10.83 5H17v9.11l2 2V5c0-1.1-.9-2-2-2h-7L7.94 5.06l1.42 1.42zm10.43 16.21L3.79 3.74 2.38 5.15 5 7.77V19c0 1.11.9 2 2 2h11.23l1.62 1.62zM7 19V9.79L16.23 19z',
  }),
  'SignalCellularNoSimOutlined',
);
export const SignalCellularNoSimRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularNoSimRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularNoSimRoundedIcon = svg(
  svg('path', {
    d: 'M19 5c0-1.1-.9-2-2-2h-6.17c-.53 0-1.04.21-1.42.59L7.95 5.06 19 16.11zM3.09 4.44c-.39.39-.39 1.02 0 1.41L5 7.78V19c0 1.11.9 2 2 2h11.23l.91.91c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L4.5 4.44a.996.996 0 0 0-1.41 0',
  }),
  'SignalCellularNoSimRounded',
);
export const SignalCellularNoSimSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularNoSimSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularNoSimSharpIcon = svg(
  svg('path', { d: 'M19 3h-9L7.95 5.06 19 16.11zm-15.21.74L2.38 5.15 5 7.77V21h13.23l1.62 1.62 1.41-1.41z' }),
  'SignalCellularNoSimSharp',
);
export const SignalCellularNoSimTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularNoSimTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularNoSimTwoToneIcon = svg(
  [
    svg('path', { d: 'M10.83 5 9.36 6.47 17 14.11V5zM7 9.79V19h9.23z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M10.83 5H17v9.11l2 2V5c0-1.1-.9-2-2-2h-7L7.94 5.06l1.42 1.42zm10.43 16.21L3.79 3.74 2.38 5.15 5 7.77V19c0 1.11.9 2 2 2h11.23l1.62 1.62zM7 19V9.79L16.23 19z',
      },
      '1',
    ),
  ],
  'SignalCellularNoSimTwoTone',
);
export const SignalCellularNodataIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularNodataIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularNodataIcon = svg(
  svg('path', {
    d: 'M22 13h-9v9H2L22 2zm-1 2.41L19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09z',
  }),
  'SignalCellularNodata',
);
export const SignalCellularNodataOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularNodataOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularNodataOutlinedIcon = svg(
  svg('path', {
    d: 'M22 13h-9v9H2L22 2zm-1 2.41L19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09z',
  }),
  'SignalCellularNodataOutlined',
);
export const SignalCellularNodataRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularNodataRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularNodataRoundedIcon = svg(
  svg('path', {
    d: 'M22 13h-7c-1.1 0-2 .9-2 2v7H4.41c-.89 0-1.34-1.08-.71-1.71L20.29 3.71c.63-.63 1.71-.19 1.71.7zm-1.7 1.71a.996.996 0 0 0-1.41 0L17.5 16.1l-1.39-1.39a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l1.39 1.39-1.39 1.39c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.39-1.38 1.39 1.38c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-1.38-1.39 1.38-1.39c.39-.39.39-1.02 0-1.41',
  }),
  'SignalCellularNodataRounded',
);
export const SignalCellularNodataSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularNodataSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularNodataSharpIcon = svg(
  svg('path', {
    d: 'M22 13h-9v9H2L22 2zm-1 2.41L19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09z',
  }),
  'SignalCellularNodataSharp',
);
export const SignalCellularNodataTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularNodataTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularNodataTwoToneIcon = svg(
  svg('path', {
    d: 'M22 13h-9v9H2L22 2zm-1 2.41L19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09z',
  }),
  'SignalCellularNodataTwoTone',
);
export const SignalCellularNullIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularNullIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularNullIcon = svg(svg('path', { d: 'M20 6.83V20H6.83zM22 2 2 22h20z' }), 'SignalCellularNull');
export const SignalCellularNullOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularNullOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularNullOutlinedIcon = svg(
  svg('path', { d: 'M20 6.83V20H6.83zM22 2 2 22h20z' }),
  'SignalCellularNullOutlined',
);
export const SignalCellularNullRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularNullRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularNullRoundedIcon = svg(
  svg('path', {
    d: 'M20 6.83V19c0 .55-.45 1-1 1H6.83zm.29-3.12L3.71 20.29c-.63.63-.19 1.71.7 1.71H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.33-1.71-.7',
  }),
  'SignalCellularNullRounded',
);
export const SignalCellularNullSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularNullSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularNullSharpIcon = svg(
  svg('path', { d: 'M20 6.83V20H6.83zM22 2 2 22h20z' }),
  'SignalCellularNullSharp',
);
export const SignalCellularNullTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularNullTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularNullTwoToneIcon = svg(
  svg('path', { d: 'M20 6.83V20H6.83zM22 2 2 22h20z' }),
  'SignalCellularNullTwoTone',
);
export const SignalCellularOffIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularOffIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularOffIcon = svg(
  svg('path', { d: 'm21 1-8.59 8.59L21 18.18zM4.77 4.5 3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73z' }),
  'SignalCellularOff',
);
export const SignalCellularOffOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularOffOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularOffOutlinedIcon = svg(
  svg('path', { d: 'm21 1-8.31 8.31 8.31 8.3zM4.91 4.36 3.5 5.77l6.36 6.37L1 21h17.73l2 2 1.41-1.41z' }),
  'SignalCellularOffOutlined',
);
export const SignalCellularOffRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularOffRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularOffRoundedIcon = svg(
  svg('path', {
    d: 'M21 3.41c0-.89-1.08-1.34-1.71-.71l-6.6 6.6L21 17.61zm.44 17.47L5.62 5.06a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l5.66 5.66-7.16 7.16c-.63.63-.19 1.71.7 1.71h15.32l1.29 1.29c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41',
  }),
  'SignalCellularOffRounded',
);
export const SignalCellularOffSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularOffSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularOffSharpIcon = svg(
  svg('path', { d: 'm21 1-8.31 8.31 8.31 8.3zM4.91 4.36 3.5 5.77l6.36 6.37L1 21h17.73l2 2 1.41-1.41z' }),
  'SignalCellularOffSharp',
);
export const SignalCellularOffTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalCellularOffTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalCellularOffTwoToneIcon = svg(
  svg('path', { d: 'm21 1-8.31 8.31 8.31 8.3zM4.91 4.36 3.5 5.77l6.36 6.37L1 21h17.73l2 2 1.41-1.41z' }),
  'SignalCellularOffTwoTone',
);
export const SignalWifi0BarIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi0BarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi0BarIcon = svg(
  svg('path', {
    d: 'M12 6c3.33 0 6.49 1.08 9.08 3.07L12 18.17l-9.08-9.1C5.51 7.08 8.67 6 12 6m0-2C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4',
  }),
  'SignalWifi0Bar',
);
export const SignalWifi0BarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi0BarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi0BarOutlinedIcon = svg(
  svg('path', {
    d: 'M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4M2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07L12 18.17z',
  }),
  'SignalWifi0BarOutlined',
);
export const SignalWifi0BarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi0BarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi0BarRoundedIcon = svg(
  svg('path', {
    d: 'M12 4C7.7 4 3.78 5.6.79 8.24.35 8.63.32 9.3.73 9.71l10.56 10.58c.39.39 1.02.39 1.42 0L23.27 9.71c.41-.41.38-1.08-.06-1.47C20.22 5.6 16.3 4 12 4M2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07L12 18.17z',
  }),
  'SignalWifi0BarRounded',
);
export const SignalWifi0BarSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi0BarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi0BarSharpIcon = svg(
  svg('path', {
    d: 'M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4M2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07L12 18.17z',
  }),
  'SignalWifi0BarSharp',
);
export const SignalWifi0BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi0BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi0BarTwoToneIcon = svg(
  svg('path', {
    d: 'M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4M2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07L12 18.17z',
  }),
  'SignalWifi0BarTwoTone',
);
export const SignalWifi1BarIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi1BarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi1BarIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z',
      }),
      svg('path', { d: 'M6.67 14.86L12 21.49v.01l.01-.01 5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z' }),
    ],
  }),
  'SignalWifi1Bar',
);
export const SignalWifi1BarLockIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi1BarLockIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi1BarLockIcon = svg(
  svg({
    children: [
      svg('path', {
        d: 'M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z',
      }),
      svg('path', {
        d: 'M15.5 14.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.3v-2.7z',
        opacity: '.3',
      }),
      svg('path', { d: 'M6.7 14.9l5.3 6.6 3.5-4.3v-2.6c0-.2 0-.5.1-.7-.9-.5-2.2-.9-3.6-.9-3 0-5.1 1.7-5.3 1.9z' }),
    ],
  }),
  'SignalWifi1BarLock',
);
export const SignalWifi1BarLockOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi1BarLockOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi1BarLockOutlinedIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5l3.5-4.36V14.5z',
      }),
      svg('path', {
        d: 'M15.5 14.5c0-.23.04-.46.07-.68-.92-.43-2.14-.82-3.57-.82-3 0-5.1 1.7-5.3 1.9l5.3 6.6 3.5-4.36V14.5zM23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z',
      }),
    ],
  }),
  'SignalWifi1BarLockOutlined',
);
export const SignalWifi1BarLockRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi1BarLockRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi1BarLockRoundedIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l10.08 12.56c.8 1 2.32 1 3.12 0l1.94-2.42V14.5z',
      }),
      svg('path', {
        d: 'M15.5 14.5c0-.23.04-.46.07-.68-.92-.43-2.14-.82-3.57-.82-3 0-5.1 1.7-5.3 1.9l3.74 4.66c.8 1 2.32 1 3.12 0l1.94-2.42V14.5zM23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z',
      }),
    ],
  }),
  'SignalWifi1BarLockRounded',
);
export const SignalWifi1BarLockSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi1BarLockSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi1BarLockSharpIcon = svg(
  svg({
    children: [
      svg('path', {
        d: 'M23 16v-1.34c0-1.47-1.2-2.75-2.66-2.66-1.33.09-2.34 1.16-2.34 2.5V16h-1v6h7v-6h-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z',
      }),
      svg('path', {
        fillOpacity: '.3',
        d: 'M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5l3.5-4.36V14.5z',
      }),
      svg('path', {
        d: 'M15.5 14.5c0-.23.04-.46.07-.68-.92-.43-2.14-.82-3.57-.82-3 0-5.1 1.7-5.3 1.9l5.3 6.6 3.5-4.36V14.5z',
      }),
    ],
  }),
  'SignalWifi1BarLockSharp',
);
export const SignalWifi1BarLockTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi1BarLockTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi1BarLockTwoToneIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5l3.5-4.36V14.5z',
      }),
      svg('path', {
        d: 'M15.5 14.5c0-.23.04-.46.07-.68-.92-.43-2.14-.82-3.57-.82-3 0-5.1 1.7-5.3 1.9l5.3 6.6 3.5-4.36V14.5zM23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z',
      }),
    ],
  }),
  'SignalWifi1BarLockTwoTone',
);
export const SignalWifi1BarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi1BarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi1BarOutlinedIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z',
      }),
      svg('path', { d: 'M6.67 14.86L12 21.49v.01l.01-.01 5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z' }),
    ],
  }),
  'SignalWifi1BarOutlined',
);
export const SignalWifi1BarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi1BarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi1BarRoundedIcon = svg(
  svg({
    children: [
      svg('path', {
        d: 'M6.67 14.86l3.77 4.7c.8 1 2.32 1 3.12 0l3.78-4.7C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z',
      }),
      svg('path', {
        fillOpacity: '.3',
        d: 'M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l10.08 12.56c.8 1 2.32 1 3.12 0L23.64 7z',
      }),
    ],
  }),
  'SignalWifi1BarRounded',
);
export const SignalWifi1BarSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi1BarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi1BarSharpIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z',
      }),
      svg('path', { d: 'M6.67 14.86L12 21.49v.01l.01-.01 5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z' }),
    ],
  }),
  'SignalWifi1BarSharp',
);
export const SignalWifi1BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi1BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi1BarTwoToneIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z',
      }),
      svg('path', { d: 'M6.67 14.86L12 21.49v.01l.01-.01 5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z' }),
    ],
  }),
  'SignalWifi1BarTwoTone',
);
export const SignalWifi2BarIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi2BarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi2BarIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z',
      }),
      svg('path', { d: 'M4.79 12.52l7.2 8.98H12l.01-.01 7.2-8.98C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z' }),
    ],
  }),
  'SignalWifi2Bar',
);
export const SignalWifi2BarLockIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi2BarLockIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi2BarLockIcon = svg(
  svg({
    children: [
      svg('path', {
        d: 'M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z',
      }),
      svg('path', {
        d: 'M15.5 14.5c0-2.8 2.2-5 5-5 .4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4C5.3 3 .8 6.7.4 7L12 21.5l3.5-4.3v-2.7z',
        opacity: '.3',
      }),
      svg('path', {
        d: 'M4.8 12.5l7.2 9 3.5-4.4v-2.6c0-1.3.5-2.5 1.4-3.4C15.6 10.5 14 10 12 10c-4.1 0-6.8 2.2-7.2 2.5z',
      }),
    ],
  }),
  'SignalWifi2BarLock',
);
export const SignalWifi2BarLockOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi2BarLockOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi2BarLockOutlinedIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5l3.5-4.36V14.5z',
      }),
      svg('path', {
        d: 'M15.5 14.5c0-1.34.51-2.53 1.34-3.42C15.62 10.51 13.98 10 12 10c-4.1 0-6.8 2.2-7.2 2.5l7.2 9 3.5-4.38V14.5zM23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z',
      }),
    ],
  }),
  'SignalWifi2BarLockOutlined',
);
export const SignalWifi2BarLockRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi2BarLockRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi2BarLockRoundedIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l10.08 12.56c.8 1 2.32 1 3.12 0l1.94-2.42V14.5z',
      }),
      svg('path', {
        d: 'M15.5 14.5c0-1.34.51-2.53 1.34-3.42C15.62 10.51 13.98 10 12 10c-4.1 0-6.8 2.2-7.2 2.5l5.64 7.05c.8 1 2.32 1 3.12 0l1.94-2.42V14.5zM23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z',
      }),
    ],
  }),
  'SignalWifi2BarLockRounded',
);
export const SignalWifi2BarLockSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi2BarLockSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi2BarLockSharpIcon = svg(
  svg({
    children: [
      svg('path', {
        d: 'M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16h-1v6h7v-6h-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z',
      }),
      svg('path', {
        fillOpacity: '.3',
        d: 'M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5l3.5-4.36V14.5z',
      }),
      svg('path', {
        d: 'M15.5 14.5c0-1.34.51-2.53 1.34-3.42C15.62 10.51 13.98 10 12 10c-4.1 0-6.8 2.2-7.2 2.5l7.2 9 3.5-4.38V14.5z',
      }),
    ],
  }),
  'SignalWifi2BarLockSharp',
);
export const SignalWifi2BarLockTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi2BarLockTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi2BarLockTwoToneIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5l3.5-4.36V14.5z',
      }),
      svg('path', {
        d: 'M15.5 14.5c0-1.34.51-2.53 1.34-3.42C15.62 10.51 13.98 10 12 10c-4.1 0-6.8 2.2-7.2 2.5l7.2 9 3.5-4.38V14.5zM23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z',
      }),
    ],
  }),
  'SignalWifi2BarLockTwoTone',
);
export const SignalWifi2BarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi2BarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi2BarOutlinedIcon = svg(
  svg({
    children: [
      svg('path', { fillOpacity: '.3', d: 'M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5 23.64 7z' }),
      svg('path', { d: 'M4.79 12.52L12 21.5l7.21-8.99C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z' }),
    ],
  }),
  'SignalWifi2BarOutlined',
);
export const SignalWifi2BarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi2BarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi2BarRoundedIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l10.08 12.56c.8 1 2.32 1 3.12 0L23.64 7z',
      }),
      svg('path', {
        d: 'M4.79 12.52l5.65 7.04c.8 1 2.32 1 3.12 0l5.65-7.05C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z',
      }),
    ],
  }),
  'SignalWifi2BarRounded',
);
export const SignalWifi2BarSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi2BarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi2BarSharpIcon = svg(
  svg({
    children: [
      svg('path', { fillOpacity: '.3', d: 'M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5 23.64 7z' }),
      svg('path', { d: 'M4.79 12.52L12 21.5l7.21-8.99C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z' }),
    ],
  }),
  'SignalWifi2BarSharp',
);
export const SignalWifi2BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi2BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi2BarTwoToneIcon = svg(
  svg({
    children: [
      svg('path', { fillOpacity: '.3', d: 'M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5 23.64 7z' }),
      svg('path', { d: 'M4.79 12.52L12 21.5l7.21-8.99C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z' }),
    ],
  }),
  'SignalWifi2BarTwoTone',
);
export const SignalWifi3BarIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi3BarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi3BarIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z',
      }),
      svg('path', {
        d: 'M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z',
      }),
    ],
  }),
  'SignalWifi3Bar',
);
export const SignalWifi3BarLockIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi3BarLockIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi3BarLockIcon = svg(
  svg({
    children: [
      svg('path', {
        d: 'M12 3C5.3 3 .8 6.7.4 7l3.2 3.9L12 21.5l3.5-4.3v-2.6c0-2.2 1.4-4 3.3-4.7.3-.1.5-.2.8-.2.3-.1.6-.1.9-.1.4 0 .7 0 1 .1L23.6 7c-.4-.3-4.9-4-11.6-4z',
        opacity: '.3',
      }),
      svg('path', {
        d: 'M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-10 5.5l3.5-4.3v-2.6c0-2.2 1.4-4 3.3-4.7C17.3 9 14.9 8 12 8c-4.8 0-8 2.6-8.5 2.9',
      }),
    ],
  }),
  'SignalWifi3BarLock',
);
export const SignalWifi3BarLockOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi3BarLockOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi3BarLockOutlinedIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5l3.5-4.36V14.5z',
      }),
      svg('path', {
        d: 'M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-6.5-1.5c0-2.19 1.35-3.99 3.27-4.68C17.29 8.98 14.94 8 12 8c-4.81 0-8.04 2.62-8.47 2.95L12 21.5l3.5-4.36V14.5z',
      }),
    ],
  }),
  'SignalWifi3BarLockOutlined',
);
export const SignalWifi3BarLockRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi3BarLockRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi3BarLockRoundedIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l10.08 12.56c.8 1 2.32 1 3.12 0l1.94-2.42V14.5z',
      }),
      svg('path', {
        d: 'M15.5 14.5c0-2.19 1.35-3.99 3.27-4.68C17.29 8.98 14.94 8 12 8c-4.81 0-8.04 2.62-8.47 2.95l6.91 8.61c.8 1 2.32 1 3.12 0l1.94-2.42V14.5zM23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16z',
      }),
    ],
  }),
  'SignalWifi3BarLockRounded',
);
export const SignalWifi3BarLockSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi3BarLockSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi3BarLockSharpIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5l3.5-4.36V14.5z',
      }),
      svg('path', {
        d: 'M23 16v-1.34c0-1.47-1.2-2.75-2.66-2.66-1.33.09-2.34 1.16-2.34 2.5V16h-1v6h7v-6h-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-6.5-1.5c0-2.19 1.35-3.99 3.27-4.68C17.29 8.98 14.94 8 12 8c-4.81 0-8.04 2.62-8.47 2.95L12 21.5l3.5-4.36V14.5z',
      }),
    ],
  }),
  'SignalWifi3BarLockSharp',
);
export const SignalWifi3BarLockTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi3BarLockTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi3BarLockTwoToneIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M15.5 14.5c0-2.8 2.2-5 5-5 .36 0 .71.04 1.05.11L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5l3.5-4.36V14.5z',
      }),
      svg('path', {
        d: 'M23 16v-1.5c0-1.4-1.1-2.5-2.5-2.5S18 13.1 18 14.5V16c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-4c0-.5-.5-1-1-1zm-1 0h-3v-1.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V16zm-6.5-1.5c0-2.19 1.35-3.99 3.27-4.68C17.29 8.98 14.94 8 12 8c-4.81 0-8.04 2.62-8.47 2.95L12 21.5l3.5-4.36V14.5z',
      }),
    ],
  }),
  'SignalWifi3BarLockTwoTone',
);
export const SignalWifi3BarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi3BarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi3BarOutlinedIcon = svg(
  svg({
    children: [
      svg('path', { fillOpacity: '.3', d: 'M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5 23.64 7z' }),
      svg('path', { d: 'M3.53 10.95L12 21.5l8.47-10.55C20.04 10.62 16.81 8 12 8s-8.04 2.62-8.47 2.95z' }),
    ],
  }),
  'SignalWifi3BarOutlined',
);
export const SignalWifi3BarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi3BarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi3BarRoundedIcon = svg(
  svg({
    children: [
      svg('path', {
        fillOpacity: '.3',
        d: 'M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l10.08 12.56c.8 1 2.32 1 3.12 0L23.64 7z',
      }),
      svg('path', {
        d: 'M3.53 10.95l6.91 8.61c.8 1 2.32 1 3.12 0l6.91-8.61C20.04 10.62 16.81 8 12 8s-8.04 2.62-8.47 2.95z',
      }),
    ],
  }),
  'SignalWifi3BarRounded',
);
export const SignalWifi3BarSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi3BarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi3BarSharpIcon = svg(
  svg({
    children: [
      svg('path', { fillOpacity: '.3', d: 'M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5 23.64 7z' }),
      svg('path', { d: 'M3.53 10.95L12 21.5l8.47-10.55C20.04 10.62 16.81 8 12 8s-8.04 2.62-8.47 2.95z' }),
    ],
  }),
  'SignalWifi3BarSharp',
);
export const SignalWifi3BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi3BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi3BarTwoToneIcon = svg(
  svg({
    children: [
      svg('path', { fillOpacity: '.3', d: 'M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7L12 21.5 23.64 7z' }),
      svg('path', { d: 'M3.53 10.95L12 21.5l8.47-10.55C20.04 10.62 16.81 8 12 8s-8.04 2.62-8.47 2.95z' }),
    ],
  }),
  'SignalWifi3BarTwoTone',
);
export const SignalWifi4BarIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi4BarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi4BarIcon = svg(
  svg('path', { d: 'M12.01 21.49 23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01z' }),
  'SignalWifi4Bar',
);
export const SignalWifi4BarLockIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi4BarLockIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi4BarLockIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21.98 11 24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98l6.35 6.36L12 21l3.05-3.05V15c0-.45.09-.88.23-1.29.54-1.57 2.01-2.71 3.77-2.71z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M22 16v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1z',
      },
      '1',
    ),
  ],
  'SignalWifi4BarLock',
);
export const SignalWifi4BarLockOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi4BarLockOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi4BarLockOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21.98 11 24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98l6.35 6.36L12 21l3.05-3.05V15c0-.45.09-.88.23-1.29.54-1.57 2.01-2.71 3.77-2.71z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M22 16v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1z',
      },
      '1',
    ),
  ],
  'SignalWifi4BarLockOutlined',
);
export const SignalWifi4BarLockRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi4BarLockRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi4BarLockRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M23.21 8.24C20.22 5.6 16.3 4 12 4S3.78 5.6.79 8.24C.35 8.63.32 9.3.73 9.71l5.62 5.63 4.94 4.95c.39.39 1.02.39 1.42 0l2.34-2.34V15c0-.45.09-.88.23-1.29.54-1.57 2.01-2.71 3.77-2.71h2.94l1.29-1.29c.4-.41.37-1.08-.07-1.47',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M22 16v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1z',
      },
      '1',
    ),
  ],
  'SignalWifi4BarLockRounded',
);
export const SignalWifi4BarLockSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi4BarLockSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi4BarLockSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21.98 11 24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98l6.35 6.36L12 21l3.05-3.05V15c0-.45.09-.88.23-1.29.54-1.57 2.01-2.71 3.77-2.71z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M22 15.11c0-1-.68-1.92-1.66-2.08-.12-.02-.24-.02-.36-.02h-.01c-1.09.02-1.97.9-1.97 1.99v1h-1v5h6v-5h-1zM21 16h-2v-1c0-.55.45-1 1-1s1 .45 1 1z',
      },
      '1',
    ),
  ],
  'SignalWifi4BarLockSharp',
);
export const SignalWifi4BarLockTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi4BarLockTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi4BarLockTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21.98 11 24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98l6.35 6.36L12 21l3.05-3.05V15c0-.45.09-.88.23-1.29.54-1.57 2.01-2.71 3.77-2.71z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M22 16v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1z',
      },
      '1',
    ),
  ],
  'SignalWifi4BarLockTwoTone',
);
export const SignalWifi4BarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi4BarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi4BarOutlinedIcon = svg(
  svg('path', { d: 'M12.01 21.49 23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01z' }),
  'SignalWifi4BarOutlined',
);
export const SignalWifi4BarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi4BarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi4BarRoundedIcon = svg(
  svg('path', { d: 'M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l10.08 12.56c.8 1 2.32 1 3.12 0z' }),
  'SignalWifi4BarRounded',
);
export const SignalWifi4BarSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi4BarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi4BarSharpIcon = svg(
  svg('path', { d: 'M12.01 21.49 23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01z' }),
  'SignalWifi4BarSharp',
);
export const SignalWifi4BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifi4BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifi4BarTwoToneIcon = svg(
  svg('path', { d: 'M12.01 21.49 23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01z' }),
  'SignalWifi4BarTwoTone',
);
export const SignalWifiBadIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiBadIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiBadIcon = svg(
  svg('path', {
    d: 'M24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98L12 21v-9h8.99zM19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41z',
  }),
  'SignalWifiBad',
);
export const SignalWifiBadOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiBadOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiBadOutlinedIcon = svg(
  svg('path', {
    d: 'M24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98L12 21v-9h8.99zM19.59 14l-2.09 2.09-.3-.3L15.41 14 14 15.41l1.79 1.79.3.3L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41z',
  }),
  'SignalWifiBadOutlined',
);
export const SignalWifiBadRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiBadRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiBadRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M23.21 8.24C20.22 5.6 16.3 4 12 4S3.78 5.6.79 8.24C.35 8.63.32 9.3.73 9.71l10.56 10.58c.19.19.45.29.7.29V14c0-1.1.9-2 2-2h6.99l2.29-2.29c.41-.41.38-1.08-.06-1.47',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20.3 14.71a.996.996 0 0 0-1.41 0l-1.39 1.38-1.39-1.38a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l1.39 1.39-1.39 1.39c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.39-1.38 1.39 1.38c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-1.38-1.39 1.38-1.39c.39-.39.39-1.02 0-1.41',
      },
      '1',
    ),
  ],
  'SignalWifiBadRounded',
);
export const SignalWifiBadSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiBadSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiBadSharpIcon = svg(
  svg('path', {
    d: 'M24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98L12 21v-9h8.99zM19.59 14l-2.09 2.09-.3-.3L15.41 14 14 15.41l1.79 1.79.3.3L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41z',
  }),
  'SignalWifiBadSharp',
);
export const SignalWifiBadTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiBadTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiBadTwoToneIcon = svg(
  svg('path', {
    d: 'M24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98L12 21v-9h8.99zM19.59 14l-2.09 2.09-.3-.3L15.41 14 14 15.41l1.79 1.79.3.3L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41z',
  }),
  'SignalWifiBadTwoTone',
);
export const SignalWifiConnectedNoInternet0TwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiConnectedNoInternet0TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiConnectedNoInternet0TwoToneIcon = svg(
  [
    svg('path', { fillOpacity: '.3', d: 'M24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98L12 21v-9h8.99z' }, '0'),
    svg(
      'path',
      {
        d: 'm19.59 14-2.09 2.09-.3-.3L15.41 14 14 15.41l1.79 1.79.3.3L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41z',
      },
      '1',
    ),
  ],
  'SignalWifiConnectedNoInternet0TwoTone',
);
export const SignalWifiConnectedNoInternet1TwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiConnectedNoInternet1TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiConnectedNoInternet1TwoToneIcon = svg(
  [
    svg(
      'path',
      {
        fillOpacity: '.3',
        d: 'M12 12h8.99L24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98l6.35 6.36C7.79 13.89 9.79 13 12 13z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 21v-8c-2.21 0-4.2.89-5.65 2.34zm9-5.59L19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09z',
      },
      '1',
    ),
  ],
  'SignalWifiConnectedNoInternet1TwoTone',
);
export const SignalWifiConnectedNoInternet2TwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiConnectedNoInternet2TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiConnectedNoInternet2TwoToneIcon = svg(
  [
    svg(
      'path',
      {
        fillOpacity: '.3',
        d: 'M18.31 12h2.67L24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98l4.23 4.24C6.22 11.23 8.97 10 12 10c2.35 0 4.52.74 6.31 2',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 10c-3.03 0-5.78 1.23-7.77 3.22L12 21v-9h6.32c-1.8-1.26-3.97-2-6.32-2m9 5.41L19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09z',
      },
      '1',
    ),
  ],
  'SignalWifiConnectedNoInternet2TwoTone',
);
export const SignalWifiConnectedNoInternet3TwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiConnectedNoInternet3TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiConnectedNoInternet3TwoToneIcon = svg(
  [
    svg(
      'path',
      {
        fillOpacity: '.3',
        d: 'M21.18 11.8 24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98l2.82 2.82C5.17 9.45 8.41 8 12 8s6.83 1.45 9.18 3.8',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M21.18 11.8C18.83 9.45 15.59 8 12 8s-6.83 1.45-9.18 3.8L12 21v-9h8.99zM19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41z',
      },
      '1',
    ),
  ],
  'SignalWifiConnectedNoInternet3TwoTone',
);
export const SignalWifiConnectedNoInternet4Icon = (props?: KTRawAttr) => {
  const s = _SignalWifiConnectedNoInternet4Icon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiConnectedNoInternet4Icon = svg(
  svg('path', {
    d: 'M24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98L12 21v-9h8.99zM19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41z',
  }),
  'SignalWifiConnectedNoInternet4',
);
export const SignalWifiConnectedNoInternet4OutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiConnectedNoInternet4OutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiConnectedNoInternet4OutlinedIcon = svg(
  svg('path', {
    d: 'M24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98L12 21v-9h8.99zM19.59 14l-2.09 2.09-.3-.3L15.41 14 14 15.41l1.79 1.79.3.3L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41z',
  }),
  'SignalWifiConnectedNoInternet4Outlined',
);
export const SignalWifiConnectedNoInternet4RoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiConnectedNoInternet4RoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiConnectedNoInternet4RoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M23.21 8.24C20.22 5.6 16.3 4 12 4S3.78 5.6.79 8.24C.35 8.63.32 9.3.73 9.71l10.56 10.58c.19.19.45.29.7.29V14c0-1.1.9-2 2-2h6.99l2.29-2.29c.41-.41.38-1.08-.06-1.47',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20.3 14.71a.996.996 0 0 0-1.41 0l-1.39 1.38-1.39-1.38a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l1.39 1.39-1.39 1.39c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l1.39-1.38 1.39 1.38c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41l-1.38-1.39 1.38-1.39c.39-.39.39-1.02 0-1.41',
      },
      '1',
    ),
  ],
  'SignalWifiConnectedNoInternet4Rounded',
);
export const SignalWifiConnectedNoInternet4SharpIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiConnectedNoInternet4SharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiConnectedNoInternet4SharpIcon = svg(
  svg('path', {
    d: 'M24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98L12 21v-9h8.99zM19.59 14l-2.09 2.09-.3-.3L15.41 14 14 15.41l1.79 1.79.3.3L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41z',
  }),
  'SignalWifiConnectedNoInternet4Sharp',
);
export const SignalWifiConnectedNoInternet4TwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiConnectedNoInternet4TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiConnectedNoInternet4TwoToneIcon = svg(
  svg('path', {
    d: 'M24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98L12 21v-9h8.99zM19.59 14l-2.09 2.09-.3-.3L15.41 14 14 15.41l1.79 1.79.3.3L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41z',
  }),
  'SignalWifiConnectedNoInternet4TwoTone',
);
export const SignalWifiOffIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiOffIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiOffIcon = svg(
  svg('path', {
    d: 'M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27z',
  }),
  'SignalWifiOff',
);
export const SignalWifiOffOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiOffOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiOffOutlinedIcon = svg(
  svg('path', {
    d: 'M23.64 7c-.45-.34-4.93-4-11.64-4-1.32 0-2.55.14-3.69.38L18.43 13.5zM3.41 1.31 2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41z',
  }),
  'SignalWifiOffOutlined',
);
export const SignalWifiOffRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiOffRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiOffRoundedIcon = svg(
  svg('path', {
    d: 'M23.64 7c-.45-.34-4.93-4-11.64-4-1.32 0-2.55.14-3.69.38L18.43 13.5zM4.12 2.01a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l1.35 1.35C1.91 5.76.59 6.82.36 7l10.08 12.56c.8 1 2.32 1 3.12 0l2.35-2.93 2.61 2.61c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41z',
  }),
  'SignalWifiOffRounded',
);
export const SignalWifiOffSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiOffSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiOffSharpIcon = svg(
  svg('path', {
    d: 'M23.64 7c-.45-.34-4.93-4-11.64-4-1.32 0-2.55.14-3.69.38L18.43 13.5zM3.41 1.31 2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41z',
  }),
  'SignalWifiOffSharp',
);
export const SignalWifiOffTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiOffTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiOffTwoToneIcon = svg(
  svg('path', {
    d: 'M23.64 7c-.45-.34-4.93-4-11.64-4-1.32 0-2.55.14-3.69.38L18.43 13.5zM3.41 1.31 2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87 3.32 3.32 1.41-1.41z',
  }),
  'SignalWifiOffTwoTone',
);
export const SignalWifiStatusbar1BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbar1BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbar1BarTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        fillOpacity: '.3',
        d: 'M17.65 15.34 24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98l6.35 6.36C7.8 13.89 9.79 13 12 13s4.2.89 5.65 2.34',
      },
      '0',
    ),
    svg('path', { d: 'M17.65 15.34C16.2 13.89 14.21 13 12 13s-4.2.89-5.65 2.34L12 21z' }, '1'),
  ],
  'SignalWifiStatusbar1BarTwoTone',
);
export const SignalWifiStatusbar2BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbar2BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbar2BarTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        fillOpacity: '.3',
        d: 'M19.77 13.22 24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98l4.23 4.24C6.22 11.23 8.97 10 12 10s5.78 1.23 7.77 3.22',
      },
      '0',
    ),
    svg('path', { d: 'M19.77 13.22C17.78 11.23 15.03 10 12 10s-5.78 1.23-7.77 3.22L12 21z' }, '1'),
  ],
  'SignalWifiStatusbar2BarTwoTone',
);
export const SignalWifiStatusbar3BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbar3BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbar3BarTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        fillOpacity: '.3',
        d: 'M21.18 11.8 24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98l2.82 2.82C5.17 9.45 8.41 8 12 8s6.83 1.45 9.18 3.8',
      },
      '0',
    ),
    svg('path', { d: 'M21.18 11.8C18.83 9.45 15.59 8 12 8s-6.83 1.45-9.18 3.8L12 21z' }, '1'),
  ],
  'SignalWifiStatusbar3BarTwoTone',
);
export const SignalWifiStatusbar4BarIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbar4BarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbar4BarIcon = svg(
  svg('path', { d: 'M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4' }),
  'SignalWifiStatusbar4Bar',
);
export const SignalWifiStatusbar4BarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbar4BarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbar4BarOutlinedIcon = svg(
  svg('path', { d: 'M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4' }),
  'SignalWifiStatusbar4BarOutlined',
);
export const SignalWifiStatusbar4BarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbar4BarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbar4BarRoundedIcon = svg(
  svg('path', {
    d: 'M12 4C7.7 4 3.78 5.6.79 8.24.35 8.63.32 9.3.73 9.71l10.56 10.58c.39.39 1.02.39 1.42 0L23.27 9.71c.41-.41.38-1.08-.06-1.47C20.22 5.6 16.3 4 12 4',
  }),
  'SignalWifiStatusbar4BarRounded',
);
export const SignalWifiStatusbar4BarSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbar4BarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbar4BarSharpIcon = svg(
  svg('path', { d: 'M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4' }),
  'SignalWifiStatusbar4BarSharp',
);
export const SignalWifiStatusbar4BarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbar4BarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbar4BarTwoToneIcon = svg(
  svg('path', { d: 'M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4' }),
  'SignalWifiStatusbar4BarTwoTone',
);
export const SignalWifiStatusbarConnectedNoInternet1TwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbarConnectedNoInternet1TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbarConnectedNoInternet1TwoToneIcon = svg(
  [
    svg(
      'path',
      {
        fillOpacity: '.3',
        d: 'M17 14.76V8h5.92C19.97 5.51 16.16 4 12 4 7.31 4 3.07 5.9 0 8.98l6.35 6.36C7.8 13.89 9.79 13 12 13c1.89 0 3.63.66 5 1.76',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M6.35 15.34 12 21l5-5.01v-1.23c-1.37-1.1-3.11-1.76-5-1.76-2.21 0-4.2.89-5.65 2.34M19 18h2v2h-2zm0-8h2v6h-2z',
      },
      '1',
    ),
  ],
  'SignalWifiStatusbarConnectedNoInternet1TwoTone',
);
export const SignalWifiStatusbarConnectedNoInternet2TwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbarConnectedNoInternet2TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbarConnectedNoInternet2TwoToneIcon = svg(
  [
    svg(
      'path',
      {
        fillOpacity: '.3',
        d: 'M17 11.21V8h5.92C19.97 5.51 16.16 4 12 4 7.31 4 3.07 5.9 0 8.98l4.23 4.24C6.22 11.23 8.97 10 12 10c1.8 0 3.5.44 5 1.21',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M4.23 13.22 12 21l5-5.01v-4.78c-1.5-.77-3.2-1.21-5-1.21-3.03 0-5.78 1.23-7.77 3.22M19 18h2v2h-2zm0-8h2v6h-2z',
      },
      '1',
    ),
  ],
  'SignalWifiStatusbarConnectedNoInternet2TwoTone',
);
export const SignalWifiStatusbarConnectedNoInternet3TwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbarConnectedNoInternet3TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbarConnectedNoInternet3TwoToneIcon = svg(
  [
    svg(
      'path',
      {
        fillOpacity: '.3',
        d: 'M17 9V8h5.92C19.97 5.51 16.16 4 12 4 7.31 4 3.07 5.9 0 8.98l2.82 2.82C5.17 9.45 8.41 8 12 8c1.77 0 3.46.36 5 1',
      },
      '0',
    ),
    svg(
      'path',
      { d: 'M2.82 11.8 12 21l5-5.01V9c-1.54-.64-3.23-1-5-1-3.59 0-6.83 1.45-9.18 3.8M19 18h2v2h-2zm0-8h2v6h-2z' },
      '1',
    ),
  ],
  'SignalWifiStatusbarConnectedNoInternet3TwoTone',
);
export const SignalWifiStatusbarConnectedNoInternet4Icon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbarConnectedNoInternet4Icon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbarConnectedNoInternet4Icon = svg(
  [
    svg('path', { d: 'M12 4C7.31 4 3.07 5.9 0 8.98L12 21l5-5.01V8h5.92C19.97 5.51 16.16 4 12 4m7 14h2v2h-2z' }, '0'),
    svg('path', { d: 'M19 10h2v6h-2z' }, '1'),
  ],
  'SignalWifiStatusbarConnectedNoInternet4',
);
export const SignalWifiStatusbarConnectedNoInternet4OutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbarConnectedNoInternet4OutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbarConnectedNoInternet4OutlinedIcon = svg(
  [
    svg('path', { d: 'M12 4C7.31 4 3.07 5.9 0 8.98L12 21l5-5.01V8h5.92C19.97 5.51 16.16 4 12 4m7 14h2v2h-2z' }, '0'),
    svg('path', { d: 'M19 10h2v6h-2z' }, '1'),
  ],
  'SignalWifiStatusbarConnectedNoInternet4Outlined',
);
export const SignalWifiStatusbarConnectedNoInternet4RoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbarConnectedNoInternet4RoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbarConnectedNoInternet4RoundedIcon = svg(
  svg('path', {
    d: 'M22.92 8H17v7.99l-4.29 4.3c-.39.39-1.02.39-1.42 0L.73 9.71C.32 9.3.35 8.63.79 8.24 3.78 5.6 7.7 4 12 4c4.16 0 7.97 1.51 10.92 4M20 18c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m0-8c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1',
  }),
  'SignalWifiStatusbarConnectedNoInternet4Rounded',
);
export const SignalWifiStatusbarConnectedNoInternet4SharpIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbarConnectedNoInternet4SharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbarConnectedNoInternet4SharpIcon = svg(
  [
    svg('path', { d: 'M19 18h2v2h-2zm0-8h2v6h-2z' }, '0'),
    svg('path', { d: 'M12 4C7.31 4 3.07 5.9 0 8.98L12 21l5-5.01V8h5.92C19.97 5.51 16.16 4 12 4' }, '1'),
  ],
  'SignalWifiStatusbarConnectedNoInternet4Sharp',
);
export const SignalWifiStatusbarConnectedNoInternet4TwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbarConnectedNoInternet4TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbarConnectedNoInternet4TwoToneIcon = svg(
  [
    svg('path', { d: 'M19 18h2v2h-2zm0-8h2v6h-2z' }, '0'),
    svg('path', { d: 'M12 4C7.31 4 3.07 5.9 0 8.98L12 21l5-5.01V8h5.92C19.97 5.51 16.16 4 12 4' }, '1'),
  ],
  'SignalWifiStatusbarConnectedNoInternet4TwoTone',
);
export const SignalWifiStatusbarConnectedNoInternetTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbarConnectedNoInternetTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbarConnectedNoInternetTwoToneIcon = svg(
  [
    svg('path', { d: 'M19 18h2v2h-2zm0-8h2v6h-2z' }, '0'),
    svg('path', { d: 'M17 8h5.92C19.97 5.51 16.16 4 12 4 7.31 4 3.07 5.9 0 8.98L12 21l5-5.01z', opacity: '.3' }, '1'),
  ],
  'SignalWifiStatusbarConnectedNoInternetTwoTone',
);
export const SignalWifiStatusbarNotConnectedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbarNotConnectedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbarNotConnectedTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M18.52 15.16c.41-.73 1.18-1.16 1.63-1.8.48-.68.21-1.94-1.14-1.94-.88 0-1.32.67-1.5 1.23l-1.37-.57C16.51 10.96 17.52 10 19 10c1.23 0 2.08.56 2.51 1.26.37.6.58 1.73.01 2.57-.63.93-1.23 1.21-1.56 1.81-.13.24-.18.4-.18 1.18h-1.52c0-.41-.07-1.08.26-1.66m-.57 3.79c0-.59.47-1.04 1.05-1.04.59 0 1.04.45 1.04 1.04 0 .58-.44 1.05-1.04 1.05-.58 0-1.05-.47-1.05-1.05',
      },
      '0',
    ),
    svg(
      'path',
      {
        fillOpacity: '.3',
        d: 'M14 13c0-2.76 2.24-5 5-5 1.63 0 3.07.79 3.98 2L24 8.98C20.93 5.9 16.69 4 12 4S3.07 5.9 0 8.98L12 21l4.01-4.02C14.8 16.07 14 14.63 14 13',
      },
      '1',
    ),
  ],
  'SignalWifiStatusbarNotConnectedTwoTone',
);
export const SignalWifiStatusbarNullIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbarNullIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbarNullIcon = svg(
  svg('path', {
    d: 'M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4M2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07L12 18.17z',
  }),
  'SignalWifiStatusbarNull',
);
export const SignalWifiStatusbarNullOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbarNullOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbarNullOutlinedIcon = svg(
  svg('path', {
    d: 'M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4M2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07L12 18.17z',
  }),
  'SignalWifiStatusbarNullOutlined',
);
export const SignalWifiStatusbarNullRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbarNullRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbarNullRoundedIcon = svg(
  svg('path', {
    d: 'M12 4C7.7 4 3.78 5.6.79 8.24.35 8.63.32 9.3.73 9.71l10.56 10.58c.39.39 1.02.39 1.42 0L23.27 9.71c.41-.41.38-1.08-.06-1.47C20.22 5.6 16.3 4 12 4M2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07L12 18.17z',
  }),
  'SignalWifiStatusbarNullRounded',
);
export const SignalWifiStatusbarNullSharpIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbarNullSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbarNullSharpIcon = svg(
  svg('path', {
    d: 'M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4M2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07L12 18.17z',
  }),
  'SignalWifiStatusbarNullSharp',
);
export const SignalWifiStatusbarNullTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignalWifiStatusbarNullTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignalWifiStatusbarNullTwoToneIcon = svg(
  svg('path', {
    d: 'M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4M2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07L12 18.17z',
  }),
  'SignalWifiStatusbarNullTwoTone',
);
export const SignpostIcon = (props?: KTRawAttr) => {
  const s = _SignpostIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignpostIcon = svg(
  svg('path', { d: 'M13 10h5l3-3-3-3h-5V2h-2v2H4v6h7v2H6l-3 3 3 3h5v4h2v-4h7v-6h-7z' }),
  'Signpost',
);
export const SignpostOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SignpostOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignpostOutlinedIcon = svg(
  svg('path', {
    d: 'M13 10h5l3-3-3-3h-5V2h-2v2H4v6h7v2H6l-3 3 3 3h5v4h2v-4h7v-6h-7zM6 6h11.17l1 1-1 1H6zm12 10H6.83l-1-1 1-1H18z',
  }),
  'SignpostOutlined',
);
export const SignpostRoundedIcon = (props?: KTRawAttr) => {
  const s = _SignpostRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignpostRoundedIcon = svg(
  svg('path', { d: 'M13 10h5l3-3-3-3h-5V2h-2v2H4v6h7v2H6l-3 3 3 3h5v4h2v-4h7v-6h-7z' }),
  'SignpostRounded',
);
export const SignpostSharpIcon = (props?: KTRawAttr) => {
  const s = _SignpostSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignpostSharpIcon = svg(
  svg('path', {
    d: 'M12 2c-.55 0-1 .45-1 1v1H5.5C4.67 4 4 4.67 4 5.5v3c0 .83.67 1.5 1.5 1.5H11v2H6.62c-.4 0-.78.16-1.06.44l-1.5 1.5c-.59.59-.59 1.54 0 2.12l1.5 1.5c.28.28.66.44 1.06.44H11v3c0 .55.45 1 1 1s1-.45 1-1v-3h5.5c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5H13v-2h4.38c.4 0 .78-.16 1.06-.44l1.5-1.5c.59-.59.59-1.54 0-2.12l-1.5-1.5c-.28-.28-.66-.44-1.06-.44H13V3c0-.55-.45-1-1-1',
  }),
  'SignpostSharp',
);
export const SignpostTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SignpostTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SignpostTwoToneIcon = svg(
  [
    svg('path', { d: 'M6 6h11.17l1 1-1 1H6zm12 10H6.83l-1-1 1-1H18z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M13 10h5l3-3-3-3h-5V2h-2v2H4v6h7v2H6l-3 3 3 3h5v4h2v-4h7v-6h-7zM6 6h11.17l1 1-1 1H6zm12 10H6.83l-1-1 1-1H18z',
      },
      '1',
    ),
  ],
  'SignpostTwoTone',
);
export const SimCardIcon = (props?: KTRawAttr) => {
  const s = _SimCardIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SimCardIcon = svg(
  svg('path', {
    d: 'M19.99 4c0-1.1-.89-2-1.99-2h-8L4 8v12c0 1.1.9 2 2 2h12.01c1.1 0 1.99-.9 1.99-2zM9 19H7v-2h2zm8 0h-2v-2h2zm-8-4H7v-4h2zm4 4h-2v-4h2zm0-6h-2v-2h2zm4 2h-2v-4h2z',
  }),
  'SimCard',
);
export const SimCardAlertIcon = (props?: KTRawAttr) => {
  const s = _SimCardAlertIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SimCardAlertIcon = svg(
  svg('path', {
    d: 'M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-5 15h-2v-2h2zm0-4h-2V8h2z',
  }),
  'SimCardAlert',
);
export const SimCardAlertOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SimCardAlertOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SimCardAlertOutlinedIcon = svg(
  [
    svg(
      'path',
      { d: 'M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V8.83L10.83 4H18z' },
      '0',
    ),
    svg('path', { d: 'M11 15h2v2h-2zm0-7h2v5h-2z' }, '1'),
  ],
  'SimCardAlertOutlined',
);
export const SimCardAlertRoundedIcon = (props?: KTRawAttr) => {
  const s = _SimCardAlertRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SimCardAlertRoundedIcon = svg(
  svg('path', {
    d: 'M18 2h-7.17c-.53 0-1.04.21-1.42.59L4.6 7.42c-.37.37-.58.88-.58 1.4L4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m0-4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1',
  }),
  'SimCardAlertRounded',
);
export const SimCardAlertSharpIcon = (props?: KTRawAttr) => {
  const s = _SimCardAlertSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SimCardAlertSharpIcon = svg(
  svg('path', { d: 'M20 2H10L4 8v14h16zm-7 15h-2v-2h2zm0-4h-2V8h2z' }),
  'SimCardAlertSharp',
);
export const SimCardAlertTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SimCardAlertTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SimCardAlertTwoToneIcon = svg(
  [
    svg('path', { d: 'M6 8.83V20h12V4h-7.17zM11 8h2v5h-2zm0 7h2v2h-2z', opacity: '.3' }, '0'),
    svg('path', { d: 'M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V8.83L10.83 4H18z' }, '1'),
    svg('path', { d: 'M11 15h2v2h-2zm0-7h2v5h-2z' }, '2'),
  ],
  'SimCardAlertTwoTone',
);
export const SimCardDownloadIcon = (props?: KTRawAttr) => {
  const s = _SimCardDownloadIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SimCardDownloadIcon = svg(
  svg('path', { d: 'M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6 15-4-4h3V9.02L13 9v4h3z' }),
  'SimCardDownload',
);
export const SimCardDownloadOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SimCardDownloadOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SimCardDownloadOutlinedIcon = svg(
  [
    svg('path', { d: 'M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 2v16H6V8.83L10.83 4z' }, '0'),
    svg('path', { d: 'm16 13-4 4-4-4 1.41-1.41L11 13.17V9.02L13 9v4.17l1.59-1.59z' }, '1'),
  ],
  'SimCardDownloadOutlined',
);
export const SimCardDownloadRoundedIcon = (props?: KTRawAttr) => {
  const s = _SimCardDownloadRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SimCardDownloadRoundedIcon = svg(
  svg('path', {
    d: 'M18 2h-7.17c-.53 0-1.04.21-1.42.59L4.59 7.41C4.21 7.79 4 8.3 4 8.83V20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6.35 14.65-2.79-2.79c-.32-.32-.1-.86.35-.86H11v-2.99c0-.55.44-.99.99-1 .56-.01 1.01.44 1.01 1V13h1.79c.45 0 .67.54.35.85l-2.79 2.79c-.19.2-.51.2-.7.01',
  }),
  'SimCardDownloadRounded',
);
export const SimCardDownloadSharpIcon = (props?: KTRawAttr) => {
  const s = _SimCardDownloadSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SimCardDownloadSharpIcon = svg(
  svg('path', { d: 'M20 2H10L4 8v14h16zm-8 15-4-4h3V9.02L13 9v4h3z' }),
  'SimCardDownloadSharp',
);
export const SimCardDownloadTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SimCardDownloadTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SimCardDownloadTwoToneIcon = svg(
  [
    svg('path', { d: 'M6 8.83V20h12V4h-7.17zm5 .19L13 9v4h3l-4 4-4-4h3z', opacity: '.3' }, '0'),
    svg('path', { d: 'M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V8.83L10.83 4H18z' }, '1'),
    svg('path', { d: 'm12 17 4-4h-3V9l-2 .02V13H8z' }, '2'),
  ],
  'SimCardDownloadTwoTone',
);
export const SimCardOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SimCardOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SimCardOutlinedIcon = svg(
  svg('path', {
    d: 'M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 2v16H6V8.83L10.83 4zM7 17h2v2H7zm8 0h2v2h-2zm-8-6h2v4H7zm4 4h2v4h-2zm0-4h2v2h-2zm4 0h2v4h-2z',
  }),
  'SimCardOutlined',
);
export const SimCardRoundedIcon = (props?: KTRawAttr) => {
  const s = _SimCardRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SimCardRoundedIcon = svg(
  svg('path', {
    d: 'M19.99 4c0-1.1-.89-2-1.99-2h-7.17c-.53 0-1.04.21-1.42.59L4.59 7.41C4.21 7.79 4 8.3 4 8.83V20c0 1.1.9 2 2 2h12.01c1.1 0 1.99-.9 1.99-2zM8 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-8-4c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m4 4c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m0-6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m4 2c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1',
  }),
  'SimCardRounded',
);
export const SimCardSharpIcon = (props?: KTRawAttr) => {
  const s = _SimCardSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SimCardSharpIcon = svg(
  svg('path', {
    d: 'M19.99 2H10L4 8v14h16zM9 19H7v-2h2zm8 0h-2v-2h2zm-8-4H7v-4h2zm4 4h-2v-4h2zm0-6h-2v-2h2zm4 2h-2v-4h2z',
  }),
  'SimCardSharp',
);
export const SimCardTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SimCardTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SimCardTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M6 8.83V20h12V4h-7.17zM9 19H7v-2h2zm0-4H7v-4h2zm6-4h2v4h-2zm0 6h2v2h-2zm-4-6h2v2h-2zm0 4h2v4h-2z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 2v16H6V8.83L10.83 4zM7 17h2v2H7zm8 0h2v2h-2zm-8-6h2v4H7zm4 4h2v4h-2zm0-4h2v2h-2zm4 0h2v4h-2z',
      },
      '1',
    ),
  ],
  'SimCardTwoTone',
);
export const SingleBedIcon = (props?: KTRawAttr) => {
  const s = _SingleBedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SingleBedIcon = svg(
  svg('path', {
    d: 'M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20zm-4-2h-3V7h3zM8 7h3v3H8zm-2 5h12v3H6z',
  }),
  'SingleBed',
);
export const SingleBedOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SingleBedOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SingleBedOutlinedIcon = svg(
  svg('path', {
    d: 'M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20zm-4-2h-3V7h3zM8 7h3v3H8zm-2 5h12v3H6z',
  }),
  'SingleBedOutlined',
);
export const SingleBedRoundedIcon = (props?: KTRawAttr) => {
  const s = _SingleBedRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SingleBedRoundedIcon = svg(
  svg('path', {
    d: 'M18 10V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33l.51 1.53c.1.28.36.47.66.47s.56-.19.66-.47L7.67 17h8.67l.51 1.53c.09.28.35.47.65.47s.56-.19.66-.47l.51-1.53H20v-5c0-1.1-.9-2-2-2m-7 0H8V8c0-.55.45-1 1-1h2zm5 0h-3V7h2c.55 0 1 .45 1 1z',
  }),
  'SingleBedRounded',
);
export const SingleBedSharpIcon = (props?: KTRawAttr) => {
  const s = _SingleBedSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SingleBedSharpIcon = svg(
  svg('path', { d: 'M18 10V5H6v5H4v7h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20v-7zm-7 0H8V7h3zm5 0h-3V7h3z' }),
  'SingleBedSharp',
);
export const SingleBedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SingleBedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SingleBedTwoToneIcon = svg(
  [
    svg('path', { d: 'M6 12h12v3H6z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M18 10V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20v-5c0-1.1-.9-2-2-2m-5-3h3v3h-3zM8 7h3v3H8zm10 8H6v-3h12z',
      },
      '1',
    ),
  ],
  'SingleBedTwoTone',
);
export const SipIcon = (props?: KTRawAttr) => {
  const s = _SipIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SipIcon = svg(
  [
    svg('path', { d: 'M15.5 10.5h2v1h-2z' }, '0'),
    svg(
      'path',
      {
        d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-10 6.5H6.5v.75H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H5v-1.5h3.5v-.75H6c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h4zm3 4.5h-2V9h2zm6-3c0 .55-.45 1-1 1h-2.5v2H14V9h4c.55 0 1 .45 1 1z',
      },
      '1',
    ),
  ],
  'Sip',
);
export const SipOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SipOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SipOutlinedIcon = svg(
  svg('path', {
    d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2m0 2v12h16V6zm7 3h2v6h-2zm3 0h4c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-2.5v2H14zm3.5 1.5h-2v1h2zm-11 .75H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H5v-1.5h3.5v-.75H6c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h4v1.5H6.5z',
  }),
  'SipOutlined',
);
export const SipRoundedIcon = (props?: KTRawAttr) => {
  const s = _SipRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SipRoundedIcon = svg(
  [
    svg('path', { d: 'M15.5 10.5h2v1h-2z' }, '0'),
    svg(
      'path',
      {
        d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M10 9.75c0 .41-.34.75-.75.75H6.5v.75H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H5.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H8.5v-.75H6c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3.25c.41 0 .75.34.75.75M12 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m7-3c0 .55-.45 1-1 1h-2.5v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1z',
      },
      '1',
    ),
  ],
  'SipRounded',
);
export const SipSharpIcon = (props?: KTRawAttr) => {
  const s = _SipSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SipSharpIcon = svg(
  [
    svg('path', { d: 'M15.5 10.5h2v1h-2z' }, '0'),
    svg(
      'path',
      {
        d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-10 6.5H6.5v.75H10V15H5v-1.5h3.5v-.75H5V9h5zm3 4.5h-2V9h2zm6-6v4h-3.5v2H14V9z',
      },
      '1',
    ),
  ],
  'SipSharp',
);
export const SipTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SipTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SipTwoToneIcon = svg(
  [
    svg('path', { d: 'M15.5 10.5h2v1h-2z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M4 18h16V6H4zm10-9h4c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-2.5v2H14zm-3 0h2v6h-2zm-6 4.5h3.5v-.75H6c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h4v1.5H6.5v.75H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H5z',
        opacity: '.3',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M10 14v-1.75c0-.55-.45-1-1-1H6.5v-.75H10V9H6c-.55 0-1 .45-1 1v1.75c0 .55.45 1 1 1h2.5v.75H5V15h4c.55 0 1-.45 1-1',
      },
      '2',
    ),
    svg('path', { d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z' }, '3'),
    svg('path', { d: 'M11 9h2v6h-2zm4.5 4H18c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-4v6h1.5zm0-2.5h2v1h-2z' }, '4'),
  ],
  'SipTwoTone',
);
export const SixKIcon = (props?: KTRawAttr) => {
  const s = _SixKIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixKIcon = svg(
  svg('path', {
    d: 'M8 12.5h1.5V14H8zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8 7.5H8v1h2c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H7.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H11zm7 4.5h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z',
  }),
  'SixK',
);
export const SixKOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SixKOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixKOutlinedIcon = svg(
  [
    svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }, '0'),
    svg(
      'path',
      {
        d: 'M14.5 12.75 16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5zM7.5 15H10c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H8v-1h3V9H7.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-2.5h1.5V14H8z',
      },
      '1',
    ),
  ],
  'SixKOutlined',
);
export const SixKPlusIcon = (props?: KTRawAttr) => {
  const s = _SixKPlusIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixKPlusIcon = svg(
  svg('path', {
    d: 'M6.5 12.5H8V14H6.5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9.5 7.5h-3v1h2c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3.5zM16 15h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3zm4-2.5h-1.5V14h-1v-1.5H16v-1h1.5V10h1v1.5H20z',
  }),
  'SixKPlus',
);
export const SixKPlusOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SixKPlusOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixKPlusOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12.5 12.75 14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5zM7 15h2c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H7.5v-1H10V9H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-2.5h1V14h-1z',
      },
      '1',
    ),
  ],
  'SixKPlusOutlined',
);
export const SixKPlusRoundedIcon = (props?: KTRawAttr) => {
  const s = _SixKPlusRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixKPlusRoundedIcon = svg(
  svg('path', {
    d: 'M7.5 12.5h1V14h-1zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9.75 7.5H7.5v1H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h2.25c.41 0 .75.34.75.75s-.34.75-.75.75m5.34 4.5c-.22 0-.42-.1-.55-.27l-1.54-1.98v1.55c0 .39-.31.7-.7.7h-.1c-.39 0-.7-.31-.7-.7V9.7c0-.39.31-.7.7-.7h.09c.39 0 .7.31.7.7v1.55l1.54-1.98c.14-.17.35-.27.56-.27.58 0 .91.66.56 1.12L13.75 12l1.41 1.88c.34.46.01 1.12-.57 1.12m3.91-2.5h-1v1c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1v-1c0-.28.22-.5.5-.5s.5.22.5.5v1h1c.28 0 .5.22.5.5s-.22.5-.5.5',
  }),
  'SixKPlusRounded',
);
export const SixKPlusSharpIcon = (props?: KTRawAttr) => {
  const s = _SixKPlusSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixKPlusSharpIcon = svg(
  svg('path', {
    d: 'M7.5 12.5h1V14h-1zM21 3H3v18h18zm-11 7.5H7.5v1H10V15H6V9h4zm6 4.5h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3zm3-2.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19z',
  }),
  'SixKPlusSharp',
);
export const SixKPlusTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SixKPlusTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixKPlusTwoToneIcon = svg(
  [
    svg('path', { d: 'M7.5 12.5h1V14h-1z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M5 19h14v-6.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19V5H5zm6-10h1.5v2.25L14.25 9H16l-2.25 3L16 15h-1.75l-1.75-2.25V15H11zm-5 1c0-.55.45-1 1-1h3v1.5H7.5v1H9c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1z',
        opacity: '.3',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 8.5h-1.5V10h-1v1.5H15v1h1.5V14h1v-1.5H19V19H5V5h14z',
      },
      '2',
    ),
    svg(
      'path',
      {
        d: 'M12.5 12.75 14.25 15H16l-2.25-3L16 9h-1.75l-1.75 2.25V9H11v6h1.5zM7 15h2c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H7.5v-1H10V9H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-2.5h1V14h-1z',
      },
      '3',
    ),
  ],
  'SixKPlusTwoTone',
);
export const SixKRoundedIcon = (props?: KTRawAttr) => {
  const s = _SixKRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixKRoundedIcon = svg(
  svg('path', {
    d: 'M8 12.5h1.5V14H8zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8.75 7.5H8v1h2c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H7.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h2.75c.41 0 .75.34.75.75s-.34.75-.75.75m6.34 4.5c-.22 0-.42-.1-.55-.27l-1.54-1.98v1.55c0 .39-.31.7-.7.7h-.1c-.39 0-.7-.31-.7-.7V9.7c0-.39.31-.7.7-.7h.09c.39 0 .7.31.7.7v1.55l1.54-1.98c.14-.17.35-.27.56-.27.58 0 .91.66.56 1.12L15.75 12l1.41 1.88c.34.46.01 1.12-.57 1.12',
  }),
  'SixKRounded',
);
export const SixKSharpIcon = (props?: KTRawAttr) => {
  const s = _SixKSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixKSharpIcon = svg(
  svg('path', {
    d: 'M8 12.5h1.5V14H8zM21 3H3v18h18zm-10 7.5H8v1h3V15H6.5V9H11zm7 4.5h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z',
  }),
  'SixKSharp',
);
export const SixKTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SixKTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixKTwoToneIcon = svg(
  [
    svg('path', { d: 'M8 12.5h1.5V14H8z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M5 19h14V5H5zm8-10h1.5v2.25L16.25 9H18l-2.25 3L18 15h-1.75l-1.75-2.25V15H13zm-6.5 1c0-.55.45-1 1-1H11v1.5H8v1h2c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H7.5c-.55 0-1-.45-1-1z',
        opacity: '.3',
      },
      '1',
    ),
    svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }, '2'),
    svg(
      'path',
      {
        d: 'M14.5 12.75 16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5zM7.5 15H10c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H8v-1h3V9H7.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-2.5h1.5V14H8z',
      },
      '3',
    ),
  ],
  'SixKTwoTone',
);
export const SixMpIcon = (props?: KTRawAttr) => {
  const s = _SixMpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixMpIcon = svg(
  svg('path', {
    d: 'M11.5 9H13v1.5h-1.5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1zm-1-7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3.5V7h-3v1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1zm4.5 7H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2zm0-4.5H17v1.5h-1.5z',
  }),
  'SixMp',
);
export const SixMpOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SixMpOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixMpOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z',
      },
      '0',
    ),
    svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }, '1'),
    svg(
      'path',
      {
        d: 'M11 11.5h2.5c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-2V7h3V5.5H11c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-2.5H13v1.5h-1.5z',
      },
      '2',
    ),
  ],
  'SixMpOutlined',
);
export const SixMpRoundedIcon = (props?: KTRawAttr) => {
  const s = _SixMpRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixMpRoundedIcon = svg(
  [
    svg('path', { d: 'M15 14h1.5v1.5H15z' }, '0'),
    svg(
      'path',
      {
        d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 3.5c0-.55.45-1 1-1h2.75c.41 0 .75.34.75.75s-.34.75-.75.75H11.5v1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1H11c-.55 0-1-.45-1-1zm2.5 11.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v3.75c0 .41-.34.75-.75.75S6 18.16 6 17.75V13.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1zM18 16c0 .55-.45 1-1 1h-2v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V13.5c0-.55.45-1 1-1H17c.55 0 1 .45 1 1z',
      },
      '1',
    ),
    svg('path', { d: 'M11.5 9H13v1.5h-1.5z' }, '2'),
  ],
  'SixMpRounded',
);
export const SixMpSharpIcon = (props?: KTRawAttr) => {
  const s = _SixMpSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixMpSharpIcon = svg(
  [
    svg('path', { d: 'M15 14h1.5v1.5H15z' }, '0'),
    svg(
      'path',
      {
        d: 'M3 3v18h18V3zm7 2.5h4.5V7h-3v1h3v3.5H10zm2.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z',
      },
      '1',
    ),
    svg('path', { d: 'M11.5 9H13v1.5h-1.5z' }, '2'),
  ],
  'SixMpSharp',
);
export const SixMpTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SixMpTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixMpTwoToneIcon = svg(
  [
    svg('path', { d: 'M15 14h1.5v1.5H15zm-3.5-5H13v1.5h-1.5z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1m-8-7c0-.55.45-1 1-1h3.5V7h-3v1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1H11c-.55 0-1-.45-1-1zm-4 7c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z',
        opacity: '.3',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z',
      },
      '2',
    ),
    svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }, '3'),
    svg(
      'path',
      {
        d: 'M11 11.5h2.5c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-2V7h3V5.5H11c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-2.5H13v1.5h-1.5z',
      },
      '4',
    ),
  ],
  'SixMpTwoTone',
);
export const SixteenMpIcon = (props?: KTRawAttr) => {
  const s = _SixteenMpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixteenMpIcon = svg(
  svg('path', {
    d: 'M13.5 9H15v1.5h-1.5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2zM10 5.5v6H8.5V7H7V5.5zm3 6c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3.5V7h-3v1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1zm2.5 2.5H17v1.5h-1.5z',
  }),
  'SixteenMp',
);
export const SixteenMpOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SixteenMpOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixteenMpOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z',
      },
      '0',
    ),
    svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }, '1'),
    svg(
      'path',
      {
        d: 'M13 11.5h2.5c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-2V7h3V5.5H13c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-2.5H15v1.5h-1.5zm-5 2.5H10v-6H7V7h1.5z',
      },
      '2',
    ),
  ],
  'SixteenMpOutlined',
);
export const SixteenMpRoundedIcon = (props?: KTRawAttr) => {
  const s = _SixteenMpRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixteenMpRoundedIcon = svg(
  [
    svg('path', { d: 'M13.5 9H15v1.5h-1.5zm1.5 5h1.5v1.5H15z' }, '0'),
    svg(
      'path',
      {
        d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.75 5.5H9c.55 0 1 .45 1 1v4.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7h-.75C7.34 7 7 6.66 7 6.25s.34-.75.75-.75m4.75 12.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14h-1v3.75c0 .41-.34.75-.75.75S6 18.16 6 17.75V13.5c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1zM12 10.5v-4c0-.55.45-1 1-1h2.75c.41 0 .75.34.75.75s-.34.75-.75.75H13.5v1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1H13c-.55 0-1-.45-1-1m6 5.5c0 .55-.45 1-1 1h-2v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V13.5c0-.55.45-1 1-1H17c.55 0 1 .45 1 1z',
      },
      '1',
    ),
  ],
  'SixteenMpRounded',
);
export const SixteenMpSharpIcon = (props?: KTRawAttr) => {
  const s = _SixteenMpSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixteenMpSharpIcon = svg(
  [
    svg('path', { d: 'M15 14h1.5v1.5H15z' }, '0'),
    svg(
      'path',
      {
        d: 'M3 3v18h18V3zm9 2.5h4.5V7h-3v1h3v3.5H12zm-5 0h3v6H8.5V7H7zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z',
      },
      '1',
    ),
    svg('path', { d: 'M13.5 9H15v1.5h-1.5z' }, '2'),
  ],
  'SixteenMpSharp',
);
export const SixteenMpTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SixteenMpTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixteenMpTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 19h14V5H5zm13-5.5V16c0 .55-.45 1-1 1h-2v1.5h-1.5v-6H17c.55 0 1 .45 1 1m-6-7c0-.55.45-1 1-1h3.5V7h-3v1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1H13c-.55 0-1-.45-1-1zm-5-1h3v6H8.5V7H7zm-1 8c0-.55.45-1 1-1h4.5c.55 0 1 .45 1 1v5H11V14h-1v3H8.5v-3h-1v4.5H6z',
        opacity: '.3',
      },
      '0',
    ),
    svg('path', { d: 'M13.5 9H15v1.5h-1.5zm1.5 5h1.5v1.5H15z', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M7.5 14h1v3H10v-3h1v4.5h1.5v-5c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5h1.5zm6 4.5H15V17h2c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-3.5zM15 14h1.5v1.5H15z',
      },
      '2',
    ),
    svg('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z' }, '3'),
    svg(
      'path',
      {
        d: 'M13 11.5h2.5c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-2V7h3V5.5H13c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-2.5H15v1.5h-1.5zm-5 2.5H10v-6H7V7h1.5z',
      },
      '4',
    ),
  ],
  'SixteenMpTwoTone',
);
export const SixtyFpsIcon = (props?: KTRawAttr) => {
  const s = _SixtyFpsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixtyFpsIcon = svg(
  svg('path', {
    d: 'M19 8v8h-4V8zm0-3h-4c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3m-9 3V5H5C3.34 5 2 6.34 2 8v8c0 1.66 1.34 3 3 3h3c1.66 0 3-1.34 3-3v-3c0-1.66-1.34-3-3-3H5V8zm-2 5v3H5v-3z',
  }),
  'SixtyFps',
);
export const SixtyFpsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SixtyFpsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixtyFpsOutlinedIcon = svg(
  svg('path', {
    d: 'M19 8v8h-4V8zm0-3h-4c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3m-9 3V5H5C3.34 5 2 6.34 2 8v8c0 1.66 1.34 3 3 3h3c1.66 0 3-1.34 3-3v-3c0-1.66-1.34-3-3-3H5V8zm-2 5v3H5v-3z',
  }),
  'SixtyFpsOutlined',
);
export const SixtyFpsRoundedIcon = (props?: KTRawAttr) => {
  const s = _SixtyFpsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixtyFpsRoundedIcon = svg(
  svg('path', {
    d: 'M19 8v8h-4V8zm0-3h-4c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3m-9 1.5C10 5.67 9.33 5 8.5 5H5C3.34 5 2 6.34 2 8v8c0 1.66 1.34 3 3 3h3c1.66 0 3-1.34 3-3v-3c0-1.66-1.34-3-3-3H5V8h3.5c.83 0 1.5-.67 1.5-1.5M8 13v3H5v-3z',
  }),
  'SixtyFpsRounded',
);
export const SixtyFpsSelectIcon = (props?: KTRawAttr) => {
  const s = _SixtyFpsSelectIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixtyFpsSelectIcon = svg(
  svg('path', {
    d: 'M18 6v6h-3V6zm0-2h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-7 2V4H6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H6V6zm-2 4v2H6v-2zM5 22H3v-5h2zm4 0H7v-5h2zm4 0h-2v-5h2zm8 0h-6v-5h6z',
  }),
  'SixtyFpsSelect',
);
export const SixtyFpsSelectOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SixtyFpsSelectOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixtyFpsSelectOutlinedIcon = svg(
  svg('path', {
    d: 'M18 6v6h-3V6zm0-2h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-7 2V4H6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H6V6zm-2 4v2H6v-2zM5 22H3v-5h2zm4 0H7v-5h2zm4 0h-2v-5h2zm8 0h-6v-5h6z',
  }),
  'SixtyFpsSelectOutlined',
);
export const SixtyFpsSelectRoundedIcon = (props?: KTRawAttr) => {
  const s = _SixtyFpsSelectRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixtyFpsSelectRoundedIcon = svg(
  svg('path', {
    d: 'M18 6v6h-3V6zm0-2h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-7 1c0-.55-.45-1-1-1H6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H6V6h4c.55 0 1-.45 1-1m-2 5v2H6v-2zM4 22c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1m4 0c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1m4 0c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1m8 0h-4c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1',
  }),
  'SixtyFpsSelectRounded',
);
export const SixtyFpsSelectSharpIcon = (props?: KTRawAttr) => {
  const s = _SixtyFpsSelectSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixtyFpsSelectSharpIcon = svg(
  svg('path', {
    d: 'M18 6v6h-3V6zm2-2h-7v10h7zm-9 2V4H4v10h7V8H6V6zm-2 4v2H6v-2zM5 22H3v-5h2zm4 0H7v-5h2zm4 0h-2v-5h2zm8 0h-6v-5h6z',
  }),
  'SixtyFpsSelectSharp',
);
export const SixtyFpsSelectTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SixtyFpsSelectTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixtyFpsSelectTwoToneIcon = svg(
  svg('path', {
    d: 'M18 6v6h-3V6zm0-2h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-7 2V4H6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H6V6zm-2 4v2H6v-2zM5 22H3v-5h2zm4 0H7v-5h2zm4 0h-2v-5h2zm8 0h-6v-5h6z',
  }),
  'SixtyFpsSelectTwoTone',
);
export const SixtyFpsSharpIcon = (props?: KTRawAttr) => {
  const s = _SixtyFpsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixtyFpsSharpIcon = svg(
  svg('path', { d: 'M19 8v8h-4V8zm3-3H12v14h10zM10 8V5H2v14h9v-9H5V8zm-2 5v3H5v-3z' }),
  'SixtyFpsSharp',
);
export const SixtyFpsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SixtyFpsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SixtyFpsTwoToneIcon = svg(
  svg('path', {
    d: 'M19 8v8h-4V8zm0-3h-4c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3m-9 3V5H5C3.34 5 2 6.34 2 8v8c0 1.66 1.34 3 3 3h3c1.66 0 3-1.34 3-3v-3c0-1.66-1.34-3-3-3H5V8zm-2 5v3H5v-3z',
  }),
  'SixtyFpsTwoTone',
);
export const SkateboardingIcon = (props?: KTRawAttr) => {
  const s = _SkateboardingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SkateboardingIcon = svg(
  svg('path', {
    d: 'M13 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M7.25 22.5c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75m8.5 0c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75m3.49-3.5c-.24 0-.45.11-.59.3-.55.73-1.42 1.2-2.4 1.2H16v-6l-4.32-2.67 1.8-2.89C14.63 10.78 16.68 12 19 12v-2c-1.85 0-3.44-1.12-4.13-2.72l-.52-1.21C14.16 5.64 13.61 5 12.7 5H7L4.5 9l1.7 1.06L8.1 7h2.35l-2.4 3.84c-.31.5-.39 1.11-.21 1.67l1.34 4.15-3.12 3.76c-.7-.16-1.3-.57-1.71-1.12-.14-.19-.36-.3-.6-.3-.44 0-.75.36-.75.75 0 .15.05.31.15.45.82 1.1 2.13 1.8 3.6 1.8h9.5c1.47 0 2.78-.7 3.6-1.8.1-.14.15-.3.15-.45 0-.39-.32-.75-.76-.75M14 20.5H8.6l2.9-3.5-1-3.3 3.5 2.2z',
  }),
  'Skateboarding',
);
export const SkateboardingOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SkateboardingOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SkateboardingOutlinedIcon = svg(
  svg('path', {
    d: 'M13 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M7.25 22.5c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75m8.5 0c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75m3.49-3.5c-.24 0-.45.11-.59.3-.55.73-1.42 1.2-2.4 1.2H16v-6l-4.32-2.67 1.8-2.89C14.63 10.78 16.68 12 19 12v-2c-1.85 0-3.44-1.12-4.13-2.72l-.52-1.21C14.16 5.64 13.61 5 12.7 5H7L4.5 9l1.7 1.06L8.1 7h2.35l-2.4 3.84c-.31.5-.39 1.11-.21 1.67l1.34 4.15-3.12 3.76c-.7-.16-1.3-.57-1.71-1.12-.14-.19-.36-.3-.6-.3-.44 0-.75.36-.75.75 0 .15.05.31.15.45.82 1.1 2.13 1.8 3.6 1.8h9.5c1.47 0 2.78-.7 3.6-1.8.1-.14.15-.3.15-.45 0-.39-.32-.75-.76-.75M14 20.5H8.6l2.9-3.5-1-3.3 3.5 2.2z',
  }),
  'SkateboardingOutlined',
);
export const SkateboardingRoundedIcon = (props?: KTRawAttr) => {
  const s = _SkateboardingRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SkateboardingRoundedIcon = svg(
  svg('path', {
    d: 'M13 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M7.25 22.5c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75m8.5 0c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75m3.49-3.5c-.24 0-.45.11-.59.3-.55.73-1.42 1.2-2.4 1.2H16v-4.88c0-.69-.36-1.34-.95-1.7l-3.37-2.08 1.8-2.89c.96 1.53 2.54 2.64 4.39 2.96.6.11 1.13-.39 1.13-.99 0-.48-.35-.89-.83-.98-1.49-.28-2.72-1.29-3.3-2.64l-.52-1.21C14.16 5.64 13.61 5 12.7 5H8.11c-.69 0-1.33.36-1.7.94L5.03 8.15c-.29.47-.15 1.09.32 1.38s1.09.15 1.38-.32L8.1 7h2.35l-2.4 3.84c-.31.5-.39 1.11-.21 1.67l1.34 4.15-3.12 3.76c-.7-.16-1.3-.57-1.71-1.12-.14-.19-.36-.3-.6-.3-.44 0-.75.36-.75.75 0 .15.05.31.15.45.82 1.1 2.13 1.8 3.6 1.8h9.5c1.47 0 2.78-.7 3.6-1.8.1-.14.15-.3.15-.45 0-.39-.32-.75-.76-.75M14 20.5H8.6l2.21-2.67c.43-.52.57-1.21.37-1.86l-.68-2.27 3.5 2.2z',
  }),
  'SkateboardingRounded',
);
export const SkateboardingSharpIcon = (props?: KTRawAttr) => {
  const s = _SkateboardingSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SkateboardingSharpIcon = svg(
  svg('path', {
    d: 'M13 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M7.25 22.5c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75m8.5 0c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75m3.49-3.5c-.24 0-.45.11-.59.3-.55.73-1.42 1.2-2.4 1.2H16v-6l-4.32-2.67 1.8-2.89C14.63 10.78 16.68 12 19 12v-2c-1.85 0-3.44-1.12-4.13-2.72l-.52-1.21C14.16 5.64 13.61 5 12.7 5H7L4.5 9l1.7 1.06L8.1 7h2.35l-2.89 4.63 1.62 5.03-3.12 3.76c-.7-.16-1.3-.57-1.71-1.12-.14-.19-.36-.3-.6-.3-.44 0-.75.36-.75.75 0 .15.05.31.15.45.82 1.1 2.13 1.8 3.6 1.8h9.5c1.47 0 2.78-.7 3.6-1.8.1-.14.15-.3.15-.45 0-.39-.32-.75-.76-.75M14 20.5H8.6l2.9-3.5-1-3.3 3.5 2.2z',
  }),
  'SkateboardingSharp',
);
export const SkateboardingTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SkateboardingTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SkateboardingTwoToneIcon = svg(
  svg('path', {
    d: 'M13 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M7.25 22.5c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75m8.5 0c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75m3.49-3.5c-.24 0-.45.11-.59.3-.55.73-1.42 1.2-2.4 1.2H16v-6l-4.32-2.67 1.8-2.89C14.63 10.78 16.68 12 19 12v-2c-1.85 0-3.44-1.12-4.13-2.72l-.52-1.21C14.16 5.64 13.61 5 12.7 5H7L4.5 9l1.7 1.06L8.1 7h2.35l-2.4 3.84c-.31.5-.39 1.11-.21 1.67l1.34 4.14-3.12 3.76c-.7-.16-1.3-.57-1.71-1.12-.14-.18-.36-.29-.6-.29-.44 0-.75.36-.75.75 0 .15.05.31.15.45.82 1.1 2.13 1.8 3.6 1.8h9.5c1.47 0 2.78-.7 3.6-1.8.1-.14.15-.3.15-.45 0-.39-.32-.75-.76-.75M14 20.5H8.6l2.9-3.5-1-3.3 3.5 2.2z',
  }),
  'SkateboardingTwoTone',
);
export const SkipNextIcon = (props?: KTRawAttr) => {
  const s = _SkipNextIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SkipNextIcon = svg(svg('path', { d: 'm6 18 8.5-6L6 6zM16 6v12h2V6z' }), 'SkipNext');
export const SkipNextOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SkipNextOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SkipNextOutlinedIcon = svg(
  svg('path', { d: 'm6 18 8.5-6L6 6zm2-8.14L11.03 12 8 14.14zM16 6h2v12h-2z' }),
  'SkipNextOutlined',
);
export const SkipNextRoundedIcon = (props?: KTRawAttr) => {
  const s = _SkipNextRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SkipNextRoundedIcon = svg(
  svg('path', {
    d: 'm7.58 16.89 5.77-4.07c.56-.4.56-1.24 0-1.63L7.58 7.11C6.91 6.65 6 7.12 6 7.93v8.14c0 .81.91 1.28 1.58.82M16 7v10c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1',
  }),
  'SkipNextRounded',
);
export const SkipNextSharpIcon = (props?: KTRawAttr) => {
  const s = _SkipNextSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SkipNextSharpIcon = svg(svg('path', { d: 'm6 18 8.5-6L6 6zM16 6v12h2V6z' }), 'SkipNextSharp');
export const SkipNextTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SkipNextTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SkipNextTwoToneIcon = svg(
  [
    svg('path', { d: 'M8 9.86v4.28L11.03 12z', opacity: '.3' }, '0'),
    svg('path', { d: 'M14.5 12 6 6v12zM8 9.86 11.03 12 8 14.14zM16 6h2v12h-2z' }, '1'),
  ],
  'SkipNextTwoTone',
);
export const SkipPreviousIcon = (props?: KTRawAttr) => {
  const s = _SkipPreviousIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SkipPreviousIcon = svg(svg('path', { d: 'M6 6h2v12H6zm3.5 6 8.5 6V6z' }), 'SkipPrevious');
export const SkipPreviousOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SkipPreviousOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SkipPreviousOutlinedIcon = svg(
  svg('path', { d: 'M6 6h2v12H6zm3.5 6 8.5 6V6zm6.5 2.14L12.97 12 16 9.86z' }),
  'SkipPreviousOutlined',
);
export const SkipPreviousRoundedIcon = (props?: KTRawAttr) => {
  const s = _SkipPreviousRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SkipPreviousRoundedIcon = svg(
  svg('path', {
    d: 'M7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1m3.66 6.82 5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.57.4-.57 1.24 0 1.64',
  }),
  'SkipPreviousRounded',
);
export const SkipPreviousSharpIcon = (props?: KTRawAttr) => {
  const s = _SkipPreviousSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SkipPreviousSharpIcon = svg(svg('path', { d: 'M6 6h2v12H6zm3.5 6 8.5 6V6z' }), 'SkipPreviousSharp');
export const SkipPreviousTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SkipPreviousTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SkipPreviousTwoToneIcon = svg(
  [
    svg('path', { d: 'M16 14.14V9.86L12.97 12z', opacity: '.3' }, '0'),
    svg('path', { d: 'M6 6h2v12H6zm12 12V6l-8.5 6zm-2-3.86L12.97 12 16 9.86z' }, '1'),
  ],
  'SkipPreviousTwoTone',
);
export const SleddingIcon = (props?: KTRawAttr) => {
  const s = _SleddingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SleddingIcon = svg(
  svg('path', {
    d: 'M14 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m8.8 15.74c-.68 2.1-2.94 3.25-5.04 2.57L1 17.36l.46-1.43 3.93 1.28.46-1.43-3.92-1.28.46-1.43L4 13.6V9.5l5.47-2.35c.39-.17.84-.21 1.28-.07.95.31 1.46 1.32 1.16 2.27l-1.05 3.24 2.14-.34c.89-.15 1.76.32 2.14 1.14l2.08 4.51 1.93.63-.46 1.43-3.32-1.08-.47 1.42 3.32 1.08c1.31.43 2.72-.29 3.15-1.61.43-1.31-.29-2.72-1.61-3.15l.46-1.43c2.11.69 3.27 2.95 2.58 5.05M6 14.25l1.01.33c-.22-.42-.28-.92-.12-1.4L7.92 10 6 10.82zm7.94 4.16-6.66-2.16-.46 1.43 6.66 2.16zm.69-1.36-1.18-2.56-3.97.89z',
  }),
  'Sledding',
);
export const SleddingOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SleddingOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SleddingOutlinedIcon = svg(
  svg('path', {
    d: 'M14 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m8.8 15.74c-.68 2.1-2.94 3.25-5.04 2.57L1 17.36l.46-1.43 3.93 1.28.46-1.43-3.92-1.28.46-1.43L4 13.6V9.5l5.47-2.35c.39-.17.84-.21 1.28-.07.95.31 1.46 1.32 1.16 2.27l-1.05 3.24 2.14-.34c.89-.15 1.76.32 2.14 1.14l2.08 4.51 1.93.63-.46 1.43-3.32-1.08-.47 1.42 3.32 1.08c1.31.43 2.72-.29 3.15-1.61.43-1.31-.29-2.72-1.61-3.15l.46-1.43c2.11.69 3.27 2.95 2.58 5.05M6 14.25l1.01.33c-.22-.42-.28-.92-.12-1.4L7.92 10 6 10.82zm7.94 4.16-6.66-2.16-.46 1.43 6.66 2.16zm.69-1.36-1.18-2.56-3.97.89z',
  }),
  'SleddingOutlined',
);
export const SleddingRoundedIcon = (props?: KTRawAttr) => {
  const s = _SleddingRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SleddingRoundedIcon = svg(
  svg('path', {
    d: 'M14 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m4.92 14.74c-.13.39-.55.61-.95.48l-2.61-.85-.46 1.43 3.32 1.08c1.31.43 2.72-.29 3.15-1.61.36-1.12-.11-2.32-1.07-2.91-.32-.2-.45-.6-.3-.95.2-.44.71-.57 1.12-.31 1.52.95 2.25 2.85 1.68 4.62-.68 2.1-2.94 3.25-5.04 2.57L1.74 17.6c-.39-.13-.63-.54-.52-.93.12-.41.55-.63.95-.5l3.22 1.05.46-1.43-3.19-1.04c-.39-.13-.63-.54-.52-.93.12-.41.55-.63.95-.5l.91.28v-2.78c0-.8.48-1.52 1.21-1.84.75-.32 4.11-1.76 4.26-1.83.41-.18.89-.21 1.35-.04.91.34 1.37 1.36 1.07 2.28l-1.04 3.2 2.15-.34c.89-.15 1.76.32 2.14 1.14l2.08 4.51 1.22.4c.4.12.61.54.48.94M6 14.25l1.01.33c-.22-.42-.28-.92-.12-1.4L7.92 10 6 10.82zm7.94 4.16-6.66-2.16-.46 1.43 6.66 2.16zm.69-1.36-1.18-2.56-3.97.89z',
  }),
  'SleddingRounded',
);
export const SleddingSharpIcon = (props?: KTRawAttr) => {
  const s = _SleddingSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SleddingSharpIcon = svg(
  svg('path', {
    d: 'M14 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m3.22 13.4 1.93.63-.46 1.43-3.32-1.08-.47 1.42 3.32 1.08c1.31.43 2.72-.29 3.15-1.61.43-1.31-.29-2.72-1.61-3.15l.46-1.43c2.1.68 3.25 2.94 2.57 5.04s-2.94 3.25-5.04 2.57L1 17.36l.46-1.43 3.93 1.28.46-1.43-3.92-1.28.46-1.43L4 13.6V9.5l5.47-2.35c.39-.17.84-.21 1.28-.07.95.31 1.46 1.32 1.16 2.27l-1.05 3.24L14.5 12zM6 14.25l.48.16.75-2.31.69-2.1-1.92.82zm7.94 4.16-6.66-2.16-.46 1.43 6.66 2.16zm.69-1.36-1.18-2.56-3.97.89z',
  }),
  'SleddingSharp',
);
export const SleddingTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SleddingTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SleddingTwoToneIcon = svg(
  svg('path', {
    d: 'M14 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m8.8 15.74c-.68 2.1-2.94 3.25-5.04 2.57L1 17.36l.46-1.43 3.93 1.28.46-1.43-3.92-1.28.46-1.43L4 13.6V9.5l5.47-2.35c.39-.17.84-.21 1.28-.07.95.31 1.46 1.32 1.16 2.27l-1.05 3.24 2.14-.34c.89-.15 1.76.32 2.14 1.14l2.08 4.51 1.93.63-.46 1.43-3.32-1.08-.47 1.42 3.32 1.08c1.31.43 2.72-.29 3.15-1.61.43-1.31-.29-2.72-1.61-3.15l.46-1.43c2.11.69 3.27 2.95 2.58 5.05M6 14.25l1.01.33c-.22-.42-.28-.92-.12-1.4L7.92 10 6 10.82zm7.94 4.16-6.66-2.16-.46 1.43 6.66 2.16zm.69-1.36-1.18-2.56-3.97.89z',
  }),
  'SleddingTwoTone',
);
export const SlideshowIcon = (props?: KTRawAttr) => {
  const s = _SlideshowIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SlideshowIcon = svg(
  svg('path', {
    d: 'M10 8v8l5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z',
  }),
  'Slideshow',
);
export const SlideshowOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SlideshowOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SlideshowOutlinedIcon = svg(
  svg('path', {
    d: 'M10 8v8l5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z',
  }),
  'SlideshowOutlined',
);
export const SlideshowRoundedIcon = (props?: KTRawAttr) => {
  const s = _SlideshowRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SlideshowRoundedIcon = svg(
  svg('path', {
    d: 'M10 9.04v5.92c0 .42.48.65.81.39l3.7-2.96c.25-.2.25-.58 0-.78l-3.7-2.96c-.33-.26-.81-.03-.81.39M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1',
  }),
  'SlideshowRounded',
);
export const SlideshowSharpIcon = (props?: KTRawAttr) => {
  const s = _SlideshowSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SlideshowSharpIcon = svg(
  svg('path', { d: 'M10 8v8l5-4zm11-5H3v18h18zm-2 16H5V5h14z' }),
  'SlideshowSharp',
);
export const SlideshowTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SlideshowTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SlideshowTwoToneIcon = svg(
  [
    svg('path', { d: 'M5 19h14V5H5zm5-11 5 4-5 4z', opacity: '.3' }, '0'),
    svg(
      'path',
      { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM10 8v8l5-4z' },
      '1',
    ),
  ],
  'SlideshowTwoTone',
);
export const SlowMotionVideoIcon = (props?: KTRawAttr) => {
  const s = _SlowMotionVideoIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SlowMotionVideoIcon = svg(
  svg('path', {
    d: 'M13.05 9.79 10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62M5.69 7.1 4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9M4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89m1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12',
  }),
  'SlowMotionVideo',
);
export const SlowMotionVideoOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SlowMotionVideoOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SlowMotionVideoOutlinedIcon = svg(
  svg('path', {
    d: 'M13.05 9.79 10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62M5.69 7.1 4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9M4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89m1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12',
  }),
  'SlowMotionVideoOutlined',
);
export const SlowMotionVideoRoundedIcon = (props?: KTRawAttr) => {
  const s = _SlowMotionVideoRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SlowMotionVideoRoundedIcon = svg(
  svg('path', {
    d: 'M10 8.5v7c0 .41.47.65.8.4l4.67-3.5c.27-.2.27-.6 0-.8L10.8 8.1c-.33-.25-.8-.01-.8.4m1-5.27c0-.64-.59-1.13-1.21-.99-1.12.26-2.18.7-3.12 1.3-.53.34-.61 1.1-.16 1.55.32.32.83.4 1.21.16.77-.49 1.62-.85 2.54-1.05.44-.1.74-.51.74-.97M5.1 6.51c-.46-.45-1.21-.38-1.55.16-.6.94-1.04 2-1.3 3.12-.14.62.34 1.21.98 1.21.45 0 .87-.3.96-.74.2-.91.57-1.77 1.05-2.53.26-.39.18-.9-.14-1.22M3.23 13c-.64 0-1.13.59-.99 1.21.26 1.12.7 2.17 1.3 3.12.34.54 1.1.61 1.55.16.32-.32.4-.83.15-1.21-.49-.76-.85-1.61-1.05-2.53-.09-.45-.5-.75-.96-.75m3.44 7.45c.95.6 2 1.04 3.12 1.3.62.14 1.21-.35 1.21-.98 0-.45-.3-.87-.74-.96-.91-.2-1.77-.57-2.53-1.05-.39-.24-.89-.17-1.21.16-.46.44-.39 1.19.15 1.53M22 12c0 4.73-3.3 8.71-7.73 9.74-.62.15-1.22-.34-1.22-.98 0-.46.31-.86.75-.97 3.55-.82 6.2-4 6.2-7.79s-2.65-6.97-6.2-7.79c-.44-.1-.75-.51-.75-.97 0-.64.6-1.13 1.22-.98C18.7 3.29 22 7.27 22 12',
  }),
  'SlowMotionVideoRounded',
);
export const SlowMotionVideoSharpIcon = (props?: KTRawAttr) => {
  const s = _SlowMotionVideoSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SlowMotionVideoSharpIcon = svg(
  svg('path', {
    d: 'M13.05 9.79 10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62M5.69 7.1 4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9M4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89m1.61 6.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12',
  }),
  'SlowMotionVideoSharp',
);
export const SlowMotionVideoTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SlowMotionVideoTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SlowMotionVideoTwoToneIcon = svg(
  svg('path', {
    d: 'm4.26 18.32 1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89H2.05c.2 2.01 1 3.84 2.21 5.32M7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62V2.05c-2.01.2-3.84 1-5.32 2.21zM2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11m11-8.95v2.02C16.97 4.59 20 7.95 20 12s-3.03 7.41-6.95 7.93v2.02C18.08 21.42 22 17.16 22 12s-3.92-9.42-8.95-9.95M16 12l-2.95-2.21L10 7.5v9l3.05-2.29zM5.68 19.74C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62z',
  }),
  'SlowMotionVideoTwoTone',
);
export const SmartButtonIcon = (props?: KTRawAttr) => {
  const s = _SmartButtonIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartButtonIcon = svg(
  svg('path', {
    d: 'M22 9v6c0 1.1-.9 2-2 2h-1v-2h1V9H4v6h6v2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2m-7.5 10 1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09zm2.5-5 .62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62zm-2.5 5 1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09zm2.5-5 .62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62z',
  }),
  'SmartButton',
);
export const SmartButtonOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SmartButtonOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartButtonOutlinedIcon = svg(
  svg('path', {
    d: 'M22 9v6c0 1.1-.9 2-2 2h-1v-2h1V9H4v6h6v2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2m-7.5 10 1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09zm2.5-5 .62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62zm-2.5 5 1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09zm2.5-5 .62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62z',
  }),
  'SmartButtonOutlined',
);
export const SmartButtonRoundedIcon = (props?: KTRawAttr) => {
  const s = _SmartButtonRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartButtonRoundedIcon = svg(
  svg('path', {
    d: 'M22 9v6c0 1.1-.9 2-2 2h-1v-2h1V9H4v6h6v2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2m-7.96 8.99c.18.39.73.39.91 0l.63-1.4 1.4-.63c.39-.18.39-.73 0-.91l-1.4-.63-.63-1.4c-.18-.39-.73-.39-.91 0l-.63 1.4-1.4.63c-.39.18-.39.73 0 .91l1.4.63zm2.7-4.56c.1.22.42.22.52 0l.36-.8.8-.36c.22-.1.22-.42 0-.52l-.8-.36-.36-.8c-.1-.22-.42-.22-.52 0l-.36.8-.8.36c-.22.1-.22.42 0 .52l.8.36z',
  }),
  'SmartButtonRounded',
);
export const SmartButtonSharpIcon = (props?: KTRawAttr) => {
  const s = _SmartButtonSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartButtonSharpIcon = svg(
  svg('path', {
    d: 'M22 17h-3v-2h1V9H4v6h6v2H2V7h20zm-7.5 2 1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09zm2.5-5 .62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62z',
  }),
  'SmartButtonSharp',
);
export const SmartButtonTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SmartButtonTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartButtonTwoToneIcon = svg(
  svg('path', {
    d: 'M22 9v6c0 1.1-.9 2-2 2h-1v-2h1V9H4v6h6v2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2m-7.5 10 1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09zm2.5-5 .62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62zm-2.5 5 1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09zm2.5-5 .62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62z',
  }),
  'SmartButtonTwoTone',
);
export const SmartDisplayIcon = (props?: KTRawAttr) => {
  const s = _SmartDisplayIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartDisplayIcon = svg(
  svg('path', { d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M9.5 16.5v-9l7 4.5z' }),
  'SmartDisplay',
);
export const SmartDisplayOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SmartDisplayOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartDisplayOutlinedIcon = svg(
  [
    svg('path', { d: 'M9.5 7.5v9l7-4.5z' }, '0'),
    svg(
      'path',
      { d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14.01H4V5.99h16z' },
      '1',
    ),
  ],
  'SmartDisplayOutlined',
);
export const SmartDisplayRoundedIcon = (props?: KTRawAttr) => {
  const s = _SmartDisplayRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartDisplayRoundedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M9.5 14.67V9.33c0-.79.88-1.27 1.54-.84l4.15 2.67c.61.39.61 1.29 0 1.68l-4.15 2.67c-.66.43-1.54-.05-1.54-.84',
  }),
  'SmartDisplayRounded',
);
export const SmartDisplaySharpIcon = (props?: KTRawAttr) => {
  const s = _SmartDisplaySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartDisplaySharpIcon = svg(svg('path', { d: 'M22 4H2v16h20zM9.5 16.5v-9l7 4.5z' }), 'SmartDisplaySharp');
export const SmartDisplayTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SmartDisplayTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartDisplayTwoToneIcon = svg(
  [
    svg('path', { d: 'M4 18.01h16V5.99H4zM9.5 7.5l7 4.5-7 4.5z', opacity: '.3' }, '0'),
    svg('path', { d: 'M9.5 7.5v9l7-4.5z' }, '1'),
    svg(
      'path',
      { d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14.01H4V5.99h16z' },
      '2',
    ),
  ],
  'SmartDisplayTwoTone',
);
export const SmartScreenIcon = (props?: KTRawAttr) => {
  const s = _SmartScreenIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartScreenIcon = svg(
  [
    svg(
      'path',
      { d: 'M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-3 12H6V7h12z' },
      '0',
    ),
    svg('path', { d: 'M15 11.25h1.5v1.5H15zm-2.5 0H14v1.5h-1.5zm-2.5 0h1.5v1.5H10zm-2.5 0H9v1.5H7.5z' }, '1'),
  ],
  'SmartScreen',
);
export const SmartScreenOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SmartScreenOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartScreenOutlinedIcon = svg(
  [
    svg('path', { d: 'M12.5 11.25H14v1.5h-1.5zm2.5 0h1.5v1.5H15zm-5 0h1.5v1.5H10zm-2.5 0H9v1.5H7.5z' }, '0'),
    svg(
      'path',
      {
        d: 'M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2M4 17H3V7h1zm14 0H6V7h12zm3 0h-1V7h1z',
      },
      '1',
    ),
  ],
  'SmartScreenOutlined',
);
export const SmartScreenRoundedIcon = (props?: KTRawAttr) => {
  const s = _SmartScreenRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartScreenRoundedIcon = svg(
  svg('path', {
    d: 'M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-3 2v10H6V7zm-4 5c0-.41-.34-.75-.75-.75s-.75.34-.75.75.34.75.75.75.75-.34.75-.75m-5 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75.34.75.75.75S9 12.41 9 12m7.5 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75.34.75.75.75.75-.34.75-.75m-5 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75.34.75.75.75.75-.34.75-.75',
  }),
  'SmartScreenRounded',
);
export const SmartScreenSharpIcon = (props?: KTRawAttr) => {
  const s = _SmartScreenSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartScreenSharpIcon = svg(
  [
    svg('path', { d: 'M1 5v14h22V5zm17 12H6V7h12z' }, '0'),
    svg('path', { d: 'M12.5 11.25H14v1.5h-1.5zm2.5 0h1.5v1.5H15zm-5 0h1.5v1.5H10zm-2.5 0H9v1.5H7.5z' }, '1'),
  ],
  'SmartScreenSharp',
);
export const SmartScreenTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SmartScreenTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartScreenTwoToneIcon = svg(
  [
    svg('path', { d: 'M3 17h1V7H3zM20 7v10h1V7z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M14 11.25h-1.5v1.5H14zm2.5 0H15v1.5h1.5zm-5 0H10v1.5h1.5zm-2.5 0H7.5v1.5H9zM21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2M4 17H3V7h1zm14 0H6V7h12zm3 0h-1V7h1z',
      },
      '1',
    ),
  ],
  'SmartScreenTwoTone',
);
export const SmartToyIcon = (props?: KTRawAttr) => {
  const s = _SmartToyIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartToyIcon = svg(
  svg('path', {
    d: 'M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3M7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5M16 17H8v-2h8zm-1-4c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5S15.83 13 15 13',
  }),
  'SmartToy',
);
export const SmartToyOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SmartToyOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartToyOutlinedIcon = svg(
  svg('path', {
    d: 'M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3m-2 10H6V7h12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5.67 1.5 1.5S9.83 13 9 13m7.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M8 15h8v2H8z',
  }),
  'SmartToyOutlined',
);
export const SmartToyRoundedIcon = (props?: KTRawAttr) => {
  const s = _SmartToyRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartToyRoundedIcon = svg(
  svg('path', {
    d: 'M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3M7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5M15 17H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1m0-4c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5S15.83 13 15 13',
  }),
  'SmartToyRounded',
);
export const SmartToySharpIcon = (props?: KTRawAttr) => {
  const s = _SmartToySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartToySharpIcon = svg(
  svg('path', {
    d: 'M20 9V5h-5V2H9v3H4v4H1v6h3v6h16v-6h3V9zM7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5M16 17H8v-2h8zm-1-4c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5S15.83 13 15 13',
  }),
  'SmartToySharp',
);
export const SmartToyTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SmartToyTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartToyTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M18 7H6v12h12zM7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5M16 17H8v-2h8zm-1-4c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5S15.83 13 15 13',
        opacity: '.3',
      },
      '0',
    ),
    svg('path', { d: 'M8 15h8v2H8z' }, '1'),
    svg(
      'path',
      {
        d: 'M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3m-2 10H6V7h12z',
      },
      '2',
    ),
    svg('circle', { cx: '15', cy: '11.5', r: '1.5' }, '3'),
    svg('circle', { cx: '9', cy: '11.5', r: '1.5' }, '4'),
  ],
  'SmartToyTwoTone',
);
export const SmartphoneIcon = (props?: KTRawAttr) => {
  const s = _SmartphoneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartphoneIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z',
  }),
  'Smartphone',
);
export const SmartphoneOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SmartphoneOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartphoneOutlinedIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z',
  }),
  'SmartphoneOutlined',
);
export const SmartphoneRoundedIcon = (props?: KTRawAttr) => {
  const s = _SmartphoneRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartphoneRoundedIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z',
  }),
  'SmartphoneRounded',
);
export const SmartphoneSharpIcon = (props?: KTRawAttr) => {
  const s = _SmartphoneSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartphoneSharpIcon = svg(svg('path', { d: 'M5 1v22h14V1zm12 18H7V5h10z' }), 'SmartphoneSharp');
export const SmartphoneTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SmartphoneTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmartphoneTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 5h10v14H7z', opacity: '.3' }, '0'),
    svg(
      'path',
      { d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z' },
      '1',
    ),
  ],
  'SmartphoneTwoTone',
);
export const SmokeFreeIcon = (props?: KTRawAttr) => {
  const s = _SmokeFreeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmokeFreeIcon = svg(
  svg('path', {
    d: 'm2 6 6.99 7H2v3h9.99l7 7 1.26-1.25-17-17zm18.5 7H22v3h-1.5zM18 13h1.5v3H18zm.85-8.12c.62-.61 1-1.45 1-2.38h-1.5c0 1.02-.83 1.85-1.85 1.85v1.5c2.24 0 4 1.83 4 4.07V12H22V9.92c0-2.23-1.28-4.15-3.15-5.04M14.5 8.7h1.53c1.05 0 1.97.74 1.97 2.05V12h1.5v-1.59c0-1.8-1.6-3.16-3.47-3.16H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75V2c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35m2.5 7.23V13h-2.93z',
  }),
  'SmokeFree',
);
export const SmokeFreeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SmokeFreeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmokeFreeOutlinedIcon = svg(
  svg('path', {
    d: 'M20.5 13H22v3h-1.5zM18 13h1.5v3H18zm-1 0h-2.34L17 15.34zm-2.5-4.35h1.53c1.05 0 1.97.74 1.97 2.05V12h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35m4.35-3.92c.62-.61 1-1.45 1-2.38h-1.5c0 1.02-.83 1.85-1.85 1.85v1.5c2.24 0 4 1.83 4 4.07V12H22V9.76c0-2.22-1.28-4.14-3.15-5.03M3.41 4.59 2 6l7 7H2v3h10l7 7 1.41-1.41z',
  }),
  'SmokeFreeOutlined',
);
export const SmokeFreeRoundedIcon = (props?: KTRawAttr) => {
  const s = _SmokeFreeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmokeFreeRoundedIcon = svg(
  svg('path', {
    d: 'M20.5 13H22v3h-1.5zM18 13h1.5v3H18zm-1 1.5c0-.83-.67-1.5-1.5-1.5h-.84l2.18 2.18c.1-.21.16-.44.16-.68m1.96-12.15H19zm-.11 2.38c.38-.38.67-.84.84-1.35.16-.5-.19-1.01-.71-1.02-.34.01-.61.25-.72.58-.18.55-.62.99-1.17 1.17-.34.11-.59.39-.59.74V5c0 .37.27.69.64.75 1.93.31 3.36 2 3.36 4.02v1.48c0 .41.34.75.75.75s.75-.34.75-.75V9.76c0-2.22-1.28-4.14-3.15-5.03m-4.24 3.92h1.42c1.05 0 1.97.74 1.97 2.05v.55c0 .41.33.75.75.75h.01c.41 0 .75-.33.75-.75v-.89c0-1.81-1.6-3.16-3.47-3.16h-1.3c-1.02 0-1.94-.73-2.07-1.75-.12-.95.46-1.7 1.3-1.93.32-.09.54-.38.54-.72 0-.49-.46-.86-.93-.72-1.42.41-2.45 1.73-2.42 3.28.02 1.85 1.61 3.29 3.45 3.29M4.12 5.29a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L9 13H3.5c-.83 0-1.5.67-1.5 1.5S2.67 16 3.5 16H12l6.29 6.29c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41z',
  }),
  'SmokeFreeRounded',
);
export const SmokeFreeSharpIcon = (props?: KTRawAttr) => {
  const s = _SmokeFreeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmokeFreeSharpIcon = svg(
  svg('path', {
    d: 'M20.5 13H22v3h-1.5zm-6-4.35h1.53c1.05 0 1.97.74 1.97 2.05V12h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35M17 13h-2.34L17 15.34zm1.85-8.27c.62-.61 1-1.45 1-2.38h-1.5c0 1.02-.83 1.85-1.85 1.85v1.5c2.24 0 4 1.83 4 4.07V12H22V9.76c0-2.22-1.28-4.14-3.15-5.03M18 13h1.5v3H18zM3.41 4.59 2 6l7 7H2v3h10l7 7 1.41-1.41z',
  }),
  'SmokeFreeSharp',
);
export const SmokeFreeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SmokeFreeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmokeFreeTwoToneIcon = svg(
  svg('path', {
    d: 'M20.5 13H22v3h-1.5zM18 13h1.5v3H18zm.85-8.27c.62-.61 1-1.45 1-2.38h-1.5c0 1.02-.83 1.85-1.85 1.85v1.5c2.24 0 4 1.83 4 4.07V12H22V9.76c0-2.22-1.28-4.14-3.15-5.03M14.5 8.65h1.53c1.05 0 1.97.74 1.97 2.05V12h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35M17 13h-2.34L17 15.34zM3.41 4.59 2 6l7 7H2v3h10l7 7 1.41-1.41z',
  }),
  'SmokeFreeTwoTone',
);
export const SmokingRoomsIcon = (props?: KTRawAttr) => {
  const s = _SmokingRoomsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmokingRoomsIcon = svg(
  svg('path', {
    d: 'M2 16h15v3H2zm18.5 0H22v3h-1.5zM18 16h1.5v3H18zm.85-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1.02 0 1.85.83 1.85 1.85S17.52 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03m-2.82 2.47H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16',
  }),
  'SmokingRooms',
);
export const SmokingRoomsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SmokingRoomsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmokingRoomsOutlinedIcon = svg(
  svg('path', {
    d: 'M18 16h1.5v3H18zM2 16h15v3H2zm14.03-5.8H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16M20.5 16H22v3h-1.5zm-1.65-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1.02 0 1.85.83 1.85 1.85S17.52 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03',
  }),
  'SmokingRoomsOutlined',
);
export const SmokingRoomsRoundedIcon = (props?: KTRawAttr) => {
  const s = _SmokingRoomsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmokingRoomsRoundedIcon = svg(
  svg('path', {
    d: 'M15.5 16h-12c-.83 0-1.5.67-1.5 1.5S2.67 19 3.5 19h12c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m3.35-8.27c.62-.61 1-1.45 1-2.38 0-1.51-1-2.79-2.38-3.21-.48-.14-.97.22-.97.72 0 .33.21.62.52.71.77.23 1.33.94 1.33 1.78 0 .82-.53 1.51-1.27 1.76-.33.11-.58.39-.58.74V8c0 .37.27.69.64.75 1.93.31 3.36 2 3.36 4.02v1.48c0 .41.34.75.75.75s.75-.34.75-.75v-1.49c0-2.22-1.28-4.14-3.15-5.03m-2.82 2.47h-1.3c-1.02 0-1.94-.73-2.07-1.75-.12-.95.46-1.7 1.3-1.93.32-.09.54-.38.54-.72 0-.49-.46-.86-.93-.72-1.42.41-2.45 1.73-2.42 3.28.03 1.84 1.62 3.29 3.46 3.29h1.42c1.05 0 1.97.74 1.97 2.05v.55c0 .41.33.75.75.75h.01c.41 0 .75-.33.75-.75v-.89c-.01-1.81-1.61-3.16-3.48-3.16M18 16h1.5v3H18zm2.5 0H22v3h-1.5z',
  }),
  'SmokingRoomsRounded',
);
export const SmokingRoomsSharpIcon = (props?: KTRawAttr) => {
  const s = _SmokingRoomsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmokingRoomsSharpIcon = svg(
  svg('path', {
    d: 'M2 16h15v3H2zm18.5 0H22v3h-1.5zM18 16h1.5v3H18zm.85-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1.02 0 1.85.83 1.85 1.85S17.52 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03m-2.82 2.47H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16',
  }),
  'SmokingRoomsSharp',
);
export const SmokingRoomsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SmokingRoomsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmokingRoomsTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M2 16h15v3H2zm18.5 0H22v3h-1.5zM18 16h1.5v3H18zm.85-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1.02 0 1.85.83 1.85 1.85S17.52 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03m-2.82 2.47H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M2 16h15v3H2zm18.5 0H22v3h-1.5zM18 16h1.5v3H18zm.85-8.27c.62-.61 1-1.45 1-2.38C19.85 3.5 18.35 2 16.5 2v1.5c1.02 0 1.85.83 1.85 1.85S17.52 7.2 16.5 7.2v1.5c2.24 0 4 1.83 4 4.07V15H22v-2.24c0-2.22-1.28-4.14-3.15-5.03m-2.82 2.47H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5c-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35h1.53c1.05 0 1.97.74 1.97 2.05V15h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16',
      },
      '1',
    ),
  ],
  'SmokingRoomsTwoTone',
);
export const SmsIcon = (props?: KTRawAttr) => {
  const s = _SmsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmsIcon = svg(
  svg('path', {
    d: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 11H7V9h2zm4 0h-2V9h2zm4 0h-2V9h2z',
  }),
  'Sms',
);
export const SmsFailedIcon = (props?: KTRawAttr) => {
  const s = _SmsFailedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmsFailedIcon = svg(
  svg('path', {
    d: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 12h-2v-2h2zm0-4h-2V6h2z',
  }),
  'SmsFailed',
);
export const SmsFailedOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SmsFailedOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmsFailedOutlinedIcon = svg(
  svg('path', {
    d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16zm-9-4h2v2h-2zm0-6h2v4h-2z',
  }),
  'SmsFailedOutlined',
);
export const SmsFailedRoundedIcon = (props?: KTRawAttr) => {
  const s = _SmsFailedRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmsFailedRoundedIcon = svg(
  svg('path', {
    d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 12h-2v-2h2zm-1-4c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1',
  }),
  'SmsFailedRounded',
);
export const SmsFailedSharpIcon = (props?: KTRawAttr) => {
  const s = _SmsFailedSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmsFailedSharpIcon = svg(
  svg('path', { d: 'M22 2H2v20l4-4h16zm-9 12h-2v-2h2zm0-4h-2V6h2z' }),
  'SmsFailedSharp',
);
export const SmsFailedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SmsFailedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmsFailedTwoToneIcon = svg(
  [
    svg('path', { d: 'M4 17.17 5.17 16H20V4H4zM11 6h2v4h-2zm0 6h2v2h-2z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16zm-9-4h2v2h-2zm0-6h2v4h-2z',
      },
      '1',
    ),
  ],
  'SmsFailedTwoTone',
);
export const SmsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SmsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmsOutlinedIcon = svg(
  svg('path', {
    d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16zM7 9h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z',
  }),
  'SmsOutlined',
);
export const SmsRoundedIcon = (props?: KTRawAttr) => {
  const s = _SmsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmsRoundedIcon = svg(
  svg('path', {
    d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 11H7V9h2zm4 0h-2V9h2zm4 0h-2V9h2z',
  }),
  'SmsRounded',
);
export const SmsSharpIcon = (props?: KTRawAttr) => {
  const s = _SmsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmsSharpIcon = svg(
  svg('path', { d: 'M22 2H2v20l4-4h16zM9 11H7V9h2zm4 0h-2V9h2zm4 0h-2V9h2z' }),
  'SmsSharp',
);
export const SmsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SmsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SmsTwoToneIcon = svg(
  [
    svg('path', { d: 'M4 17.17 5.17 16H20V4H4zM15 9h2v2h-2zm-4 0h2v2h-2zM7 9h2v2H7z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16zM7 9h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z',
      },
      '1',
    ),
  ],
  'SmsTwoTone',
);
export const SnippetFolderIcon = (props?: KTRawAttr) => {
  const s = _SnippetFolderIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnippetFolderIcon = svg(
  svg('path', {
    d: 'm15.88 10.5 1.62 1.62v3.38h-3v-5zM22 8v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2h6l2 2h8c1.1 0 2 .9 2 2m-3 3.5L16.5 9H13v8h6z',
  }),
  'SnippetFolder',
);
export const SnippetFolderOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SnippetFolderOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnippetFolderOutlinedIcon = svg(
  svg('path', {
    d: 'M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20zm-2.5-5.88v3.38h-3v-5h1.38zM13 9v8h6v-5.5L16.5 9z',
  }),
  'SnippetFolderOutlined',
);
export const SnippetFolderRoundedIcon = (props?: KTRawAttr) => {
  const s = _SnippetFolderRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnippetFolderRoundedIcon = svg(
  svg('path', {
    d: 'm15.88 10.5 1.62 1.62v3.38h-3v-5zM22 8v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2h5.17c.53 0 1.04.21 1.41.59L12 6h8c1.1 0 2 .9 2 2m-3 3.91c0-.27-.11-.52-.29-.71L16.8 9.29c-.19-.18-.45-.29-.71-.29H14c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1z',
  }),
  'SnippetFolderRounded',
);
export const SnippetFolderSharpIcon = (props?: KTRawAttr) => {
  const s = _SnippetFolderSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnippetFolderSharpIcon = svg(
  svg('path', { d: 'm12 6-2-2H2v16h20V6zm7 11h-6V9h3.5l2.5 2.5zm-3.12-6.5 1.62 1.62v3.38h-3v-5z' }),
  'SnippetFolderSharp',
);
export const SnippetFolderTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SnippetFolderTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnippetFolderTwoToneIcon = svg(
  [
    svg('path', { d: 'M9.17 6H4v12h16V8h-8.83z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20zm-2.5-5.88v3.38h-3v-5h1.38zM16.5 9H13v8h6v-5.5z',
      },
      '1',
    ),
  ],
  'SnippetFolderTwoTone',
);
export const SnoozeIcon = (props?: KTRawAttr) => {
  const s = _SnoozeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnoozeIcon = svg(
  svg('path', {
    d: 'M7.88 3.39 6.6 1.86 2 5.71l1.29 1.53zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9m0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7m-3-9h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9z',
  }),
  'Snooze',
);
export const SnoozeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SnoozeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnoozeOutlinedIcon = svg(
  svg('path', {
    d: 'M9 11h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9zm7.056-7.654 1.282-1.535 4.607 3.85-1.28 1.54zM3.336 7.19l-1.28-1.536L6.662 1.81l1.28 1.536zM12 6c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7m0-2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9',
  }),
  'SnoozeOutlined',
);
export const SnoozeRoundedIcon = (props?: KTRawAttr) => {
  const s = _SnoozeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnoozeRoundedIcon = svg(
  svg('path', {
    d: 'M10 11h2.63l-3.72 4.35C8.36 16 8.82 17 9.67 17H14c.55 0 1-.45 1-1s-.45-1-1-1h-2.63l3.72-4.35c.55-.65.09-1.65-.76-1.65H10c-.55 0-1 .45-1 1s.45 1 1 1m11.3-4.58c-.35.42-.98.48-1.41.13l-3.07-2.56c-.42-.36-.48-.99-.12-1.41.35-.42.98-.48 1.41-.13l3.07 2.56c.42.36.48.99.12 1.41m-18.6 0c.35.43.98.48 1.4.13l3.07-2.56c.43-.36.49-.99.13-1.41-.35-.43-.98-.48-1.4-.13L2.82 5.01c-.42.36-.48.99-.12 1.41M12 6c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7m0-2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9',
  }),
  'SnoozeRounded',
);
export const SnoozeSharpIcon = (props?: KTRawAttr) => {
  const s = _SnoozeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnoozeSharpIcon = svg(
  svg('path', {
    d: 'M9 11h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9zm7.056-7.654 1.282-1.535 4.607 3.85-1.28 1.54zM3.336 7.19l-1.28-1.536L6.662 1.81l1.28 1.536zM12 6c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7m0-2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9',
  }),
  'SnoozeSharp',
);
export const SnoozeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SnoozeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnoozeTwoToneIcon = svg(
  svg('path', {
    d: 'M9 11h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9zm8.337-9.19 4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0 1.282 1.536L3.337 7.19l-1.28-1.536zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7',
  }),
  'SnoozeTwoTone',
);
export const SnowboardingIcon = (props?: KTRawAttr) => {
  const s = _SnowboardingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnowboardingIcon = svg(
  svg('path', {
    d: 'M14 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m7.4 17.09c-.23-.05-.46.02-.64.17-.69.6-1.64.88-2.6.67L17 20.69l-1-6.19-3.32-2.67 1.8-2.89C15.63 10.78 17.68 12 20 12v-2c-1.85 0-3.44-1.12-4.13-2.72l-.52-1.21C15.16 5.64 14.61 5 13.7 5H8L5.5 9l1.7 1.06L9.1 7h2.35l-2.51 3.99c-.28.45-.37 1-.25 1.52L9.5 16 6 18.35l-.47-.1c-.96-.2-1.71-.85-2.1-1.67-.1-.21-.28-.37-.51-.42-.43-.09-.82.2-.9.58-.04.14-.02.31.05.46.58 1.24 1.71 2.2 3.15 2.51l12.63 2.69c1.44.31 2.86-.11 3.9-1.01.13-.11.21-.26.24-.41.07-.38-.16-.8-.59-.89M8.73 18.93l3.02-2.03-.44-3.32 2.84 2.02.75 4.64z',
  }),
  'Snowboarding',
);
export const SnowboardingOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SnowboardingOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnowboardingOutlinedIcon = svg(
  svg('path', {
    d: 'M14 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m7.4 17.09c-.23-.05-.46.02-.64.17-.69.6-1.64.88-2.6.67L17 20.69l-1-6.19-3.32-2.67 1.8-2.89C15.63 10.78 17.68 12 20 12v-2c-1.85 0-3.44-1.12-4.13-2.72l-.52-1.21C15.16 5.64 14.61 5 13.7 5H8L5.5 9l1.7 1.06L9.1 7h2.35l-2.51 3.99c-.28.45-.37 1-.25 1.52L9.5 16 6 18.35l-.47-.1c-.96-.2-1.71-.85-2.1-1.67-.1-.21-.28-.37-.51-.42-.43-.09-.82.2-.9.58-.04.14-.02.31.05.46.58 1.24 1.71 2.2 3.15 2.51l12.63 2.69c1.44.31 2.86-.11 3.9-1.01.13-.11.21-.26.24-.41.07-.38-.16-.8-.59-.89M8.73 18.93l3.02-2.03-.44-3.32 2.84 2.02.75 4.64z',
  }),
  'SnowboardingOutlined',
);
export const SnowboardingRoundedIcon = (props?: KTRawAttr) => {
  const s = _SnowboardingRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnowboardingRoundedIcon = svg(
  svg('path', {
    d: 'M14 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M6.35 9.53c.47.29 1.09.15 1.38-.32L9.1 7h2.35l-2.51 3.99c-.28.45-.37 1-.25 1.52L9.5 16 6 18.35l-.47-.1c-.96-.2-1.71-.85-2.1-1.67-.1-.21-.28-.37-.51-.42-.43-.09-.82.2-.9.58-.04.14-.02.31.05.46.58 1.24 1.71 2.2 3.15 2.51l12.63 2.69c1.44.31 2.86-.11 3.9-1.01.13-.11.21-.26.24-.41.08-.38-.16-.8-.59-.89-.23-.05-.46.02-.64.17-.69.6-1.64.88-2.6.67L17 20.69l-.88-5.43c-.08-.49-.34-.93-.72-1.24l-2.72-2.19 1.8-2.89c.96 1.53 2.54 2.64 4.39 2.96.6.11 1.13-.39 1.13-1 0-.48-.35-.89-.83-.98-1.49-.28-2.72-1.29-3.3-2.64l-.52-1.21C15.16 5.64 14.61 5 13.7 5H9.11c-.69 0-1.33.36-1.7.94L6.03 8.15c-.29.47-.15 1.09.32 1.38m2.38 9.4 2.25-1.51c.47-.32.73-.88.65-1.44l-.32-2.4 2.84 2.02.75 4.64z',
  }),
  'SnowboardingRounded',
);
export const SnowboardingSharpIcon = (props?: KTRawAttr) => {
  const s = _SnowboardingSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnowboardingSharpIcon = svg(
  svg('path', {
    d: 'M14 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m7.4 17.09c-.23-.05-.46.02-.64.17-.69.6-1.64.88-2.6.67L17 20.69l-1-6.19-3.32-2.67 1.8-2.89C15.63 10.78 17.68 12 20 12v-2c-1.85 0-3.44-1.12-4.13-2.72l-.52-1.21C15.16 5.64 14.61 5 13.7 5H8L5.5 9l1.7 1.06L9.1 7h2.35L8.5 11.7l1 4.3L6 18.35l-.47-.1c-.96-.2-1.71-.85-2.1-1.67-.1-.21-.28-.37-.51-.42-.43-.09-.82.2-.9.58-.04.14-.02.31.05.46.58 1.24 1.71 2.2 3.15 2.51l12.63 2.69c1.44.31 2.86-.11 3.9-1.01.13-.11.21-.26.24-.41.07-.38-.16-.8-.59-.89M8.73 18.93l3.02-2.03-.44-3.32 2.84 2.02.75 4.64z',
  }),
  'SnowboardingSharp',
);
export const SnowboardingTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SnowboardingTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnowboardingTwoToneIcon = svg(
  svg('path', {
    d: 'M14 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m7.4 17.09c-.23-.05-.46.02-.64.17-.69.6-1.64.88-2.6.67L17 20.69l-1-6.19-3.32-2.67 1.8-2.89C15.63 10.78 17.68 12 20 12v-2c-1.85 0-3.44-1.12-4.13-2.72l-.52-1.21C15.16 5.64 14.61 5 13.7 5H8L5.5 9l1.7 1.06L9.1 7h2.35l-2.51 3.99c-.28.45-.37 1-.25 1.52L9.5 16 6 18.35l-.47-.1c-.96-.2-1.71-.85-2.1-1.67-.1-.21-.28-.37-.51-.42-.43-.09-.82.2-.9.58-.04.14-.02.31.05.46.58 1.24 1.71 2.2 3.15 2.51l12.63 2.69c1.44.31 2.86-.11 3.9-1.01.13-.11.21-.26.24-.41.07-.38-.16-.8-.59-.89M8.73 18.93l3.02-2.03-.44-3.32 2.84 2.02.75 4.64z',
  }),
  'SnowboardingTwoTone',
);
export const SnowingIcon = (props?: KTRawAttr) => {
  const s = _SnowingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnowingIcon = svg(
  svg('path', {
    d: 'M6 12.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M4.75 6a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m12 8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m0-8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m-9 12a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m0-8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m3 4a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m0-8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m3 12a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m0-8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0',
  }),
  'Snowing',
);
export const SnowmobileIcon = (props?: KTRawAttr) => {
  const s = _SnowmobileIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnowmobileIcon = svg(
  svg('path', {
    d: 'M22 17c0 .55-.45 1-1 1h-.17l-2.2-2.2C20.58 15.37 22 14.4 22 13c0-1-8-8-8-8h-3v2h2.25l1.45 1.3L11 11l-9.5-1L0 13l4.54 1.36-3.49 1.88C-.77 17.22-.07 20 2 20h6c2.21 0 4-1.79 4-4h4l2 2h-3v2h6c1.66 0 3-1.34 3-3zM8 18H2l5.25-2.83L10 16c0 1.1-.89 2-2 2',
  }),
  'Snowmobile',
);
export const SnowmobileOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SnowmobileOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnowmobileOutlinedIcon = svg(
  svg('path', {
    d: 'M22 17c0 .55-.45 1-1 1h-.17l-2.2-2.2C20.58 15.37 22 14.4 22 13c0-1-8-8-8-8h-3v2h2.25l.8.72L11 10 2 9l-2 4 4.54 1.36-3.49 1.88C-.77 17.22-.07 20 2 20h6c2.21 0 4-1.79 4-4h4l2 2h-3v2h6c1.66 0 3-1.34 3-3zM8 18H2l5.25-2.83L10 16c0 1.1-.89 2-2 2m9-4h-6.7l-7.45-2.23.31-.62 8.44.85 3.93-2.94s3.77 3.44 4.27 4.14c0 0-1.1.8-2.8.8',
  }),
  'SnowmobileOutlined',
);
export const SnowmobileRoundedIcon = (props?: KTRawAttr) => {
  const s = _SnowmobileRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnowmobileRoundedIcon = svg(
  svg('path', {
    d: 'M11 6c0 .55.45 1 1 1h1.25l1.45 1.3L11 11l-9.12-.96c-1-.11-1.88.68-1.88 1.69 0 .75.49 1.41 1.21 1.63l3.33 1-3.49 1.88C-.77 17.22-.07 20 2 20h6c2.21 0 4-1.79 4-4h4l2 2h-2c-.55 0-1 .45-1 1s.45 1 1 1h5c1.13 0 2.11-.62 2.63-1.55.36-.65-.15-1.45-.9-1.45-.34 0-.68.16-.84.47-.17.31-.51.53-.89.53h-.17l-2.2-2.2C20.58 15.37 22 14.4 22 13c0-.89-7.72-7.75-7.72-7.75-.18-.16-.41-.25-.66-.25H12c-.55 0-1 .45-1 1M8 18H2l5.25-2.83L10 16c0 1.1-.89 2-2 2',
  }),
  'SnowmobileRounded',
);
export const SnowmobileSharpIcon = (props?: KTRawAttr) => {
  const s = _SnowmobileSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnowmobileSharpIcon = svg(
  svg('path', {
    d: 'M22 17c0 .55-.45 1-1 1h-.17l-2.2-2.2C21.6 15.18 23 13 23 13l-9-8h-3v2h2.25l1.45 1.3L11 11l-9.5-1L0 13l4.54 1.36-3.49 1.88C-.77 17.22-.07 20 2 20h6c2.21 0 4-1.79 4-4h4l2 2h-3v2h6c1.66 0 3-1.34 3-3zM8 18H2l5.25-2.83L10 16c0 1.1-.89 2-2 2',
  }),
  'SnowmobileSharp',
);
export const SnowmobileTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SnowmobileTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnowmobileTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M17 14h-6.7l-7.45-2.23.31-.62 8.44.85 3.93-2.94s3.77 3.44 4.27 4.14c0 0-1.1.8-2.8.8', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M22 17c0 .55-.45 1-1 1h-.17l-2.2-2.2C20.58 15.37 22 14.4 22 13c0-1-8-8-8-8h-3v2h2.25l.8.72L11 10 2 9l-2 4 4.54 1.36-3.49 1.88C-.77 17.22-.07 20 2 20h6c2.21 0 4-1.79 4-4h4l2 2h-3v2h6c1.66 0 3-1.34 3-3zM8 18H2l5.25-2.83L10 16c0 1.1-.89 2-2 2m9-4h-6.7l-7.45-2.23.31-.62 8.44.85 3.93-2.94s3.77 3.44 4.27 4.14c0 0-1.1.8-2.8.8',
      },
      '1',
    ),
  ],
  'SnowmobileTwoTone',
);
export const SnowshoeingIcon = (props?: KTRawAttr) => {
  const s = _SnowshoeingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnowshoeingIcon = svg(
  svg('path', {
    d: 'M12.5 3.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M6.32 19.03l-1.14-1.47L4 18.5l2.38 3.04c.51.65 1.16 1.15 1.88 1.41.28.1.53.04.72-.11.3-.23.42-.7.12-1.07-.08-.1-.2-.17-.31-.22-.43-.18-.82-.45-1.14-.83l-.08-.1L11 18.2l.89-3.22 2.11 2v4.52h-2V23h3.87c.82 0 1.61-.21 2.26-.61.26-.16.37-.39.37-.64 0-.38-.3-.75-.77-.75-.13 0-.26.04-.37.1-.4.23-.87.37-1.36.4v-6.02l-2.11-2 .6-3C15.79 11.98 17.8 13 20 13v-2c-1.9 0-3.51-1.02-4.31-2.42l-1-1.58c-.4-.6-1-1-1.7-1-.75 0-1.41.34-5.99 2.28V13h2V9.58l1.79-.7L9.2 17z',
  }),
  'Snowshoeing',
);
export const SnowshoeingOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SnowshoeingOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnowshoeingOutlinedIcon = svg(
  svg('path', {
    d: 'M12.5 3.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M6.32 19.03l-1.14-1.47L4 18.5l2.38 3.04c.51.65 1.16 1.15 1.88 1.41.28.1.53.04.72-.11.3-.23.42-.7.12-1.07-.08-.1-.2-.17-.31-.22-.43-.18-.82-.45-1.14-.83l-.08-.1L11 18.2l.89-3.22 2.11 2v4.52h-2V23h3.87c.82 0 1.61-.21 2.26-.61.26-.16.37-.39.37-.64 0-.38-.3-.75-.77-.75-.13 0-.26.04-.37.1-.4.23-.87.37-1.36.4v-6.02l-2.11-2 .6-3C15.79 11.98 17.8 13 20 13v-2c-1.9 0-3.51-1.02-4.31-2.42l-1-1.58c-.4-.6-1-1-1.7-1-.75 0-1.41.34-5.99 2.28V13h2V9.58l1.79-.7L9.2 17z',
  }),
  'SnowshoeingOutlined',
);
export const SnowshoeingRoundedIcon = (props?: KTRawAttr) => {
  const s = _SnowshoeingRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnowshoeingRoundedIcon = svg(
  svg('path', {
    d: 'M12.5 3.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m7.5 8.41c0-.49-.36-.9-.84-.98-1.53-.25-2.79-1.16-3.47-2.35l-1-1.58c-.4-.6-1-1-1.7-1-.68 0-1.28.28-4.77 1.76C7.49 8.07 7 8.8 7 9.6V12c0 .55.45 1 1 1s1-.45 1-1V9.58l1.79-.7L9.2 17l-2.88 2.03-1.14-1.47L4 18.5l2.38 3.04c.51.65 1.16 1.15 1.88 1.41.28.1.53.04.72-.11.3-.23.42-.7.12-1.07-.08-.1-.2-.17-.31-.22-.43-.18-.82-.45-1.14-.83l-.08-.1 2.85-2.01c.38-.27.65-.66.77-1.1l.7-2.53 2.11 2v4.52h-2V23h3.87c.82 0 1.61-.21 2.26-.61.26-.16.37-.39.37-.64 0-.38-.3-.75-.77-.75-.13 0-.26.04-.37.1-.4.23-.87.37-1.36.4v-5.16c0-.55-.23-1.07-.62-1.45l-1.49-1.41.6-3c1.07 1.24 2.63 2.15 4.37 2.43.6.1 1.14-.39 1.14-1',
  }),
  'SnowshoeingRounded',
);
export const SnowshoeingSharpIcon = (props?: KTRawAttr) => {
  const s = _SnowshoeingSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnowshoeingSharpIcon = svg(
  svg('path', {
    d: 'M12.5 3.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M6.32 19.03l-1.14-1.47L4 18.5l2.38 3.04c.51.65 1.16 1.15 1.88 1.41.28.1.53.04.72-.11.3-.23.42-.7.12-1.07-.08-.1-.2-.17-.31-.22-.43-.18-.82-.45-1.14-.83l-.08-.1L11 18.2l.89-3.22 2.11 2v4.52h-2V23h3.87c.82 0 1.61-.21 2.26-.61.26-.16.37-.39.37-.64 0-.38-.3-.75-.77-.75-.13 0-.26.04-.37.1-.4.23-.87.37-1.36.4v-6.02l-2.11-2 .6-3C15.79 11.98 17.8 13 20 13v-2c-1.9 0-3.51-1.02-4.31-2.42l-1-1.58c-.4-.6-1-1-1.7-1-.75 0-1.41.34-5.99 2.28V13h2V9.58l1.79-.7L9.2 17z',
  }),
  'SnowshoeingSharp',
);
export const SnowshoeingTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SnowshoeingTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SnowshoeingTwoToneIcon = svg(
  svg('path', {
    d: 'M12.5 3.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M6.32 19.03l-1.14-1.47L4 18.5l2.38 3.04c.51.65 1.16 1.15 1.88 1.41.28.1.53.04.72-.11.3-.23.42-.7.12-1.07-.08-.1-.2-.17-.31-.22-.43-.18-.82-.45-1.14-.83l-.08-.1L11 18.2l.89-3.22 2.11 2v4.52h-2V23h3.87c.82 0 1.61-.21 2.26-.61.26-.16.37-.39.37-.64 0-.38-.3-.75-.77-.75-.13 0-.26.04-.37.1-.4.23-.87.37-1.36.4v-6.02l-2.11-2 .6-3C15.79 11.98 17.8 13 20 13v-2c-1.9 0-3.51-1.02-4.31-2.42l-1-1.58c-.4-.6-1-1-1.7-1-.75 0-1.41.34-5.99 2.28V13h2V9.58l1.79-.7L9.2 17z',
  }),
  'SnowshoeingTwoTone',
);
export const SoapIcon = (props?: KTRawAttr) => {
  const s = _SoapIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SoapIcon = svg(
  svg('path', {
    d: 'm9.12 5-7.18 6.79c-.6.56-.94 1.35-.94 2.18V20c0 1.66 1.34 3 3 3h13.75c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H12v-1h7.75c.69 0 1.25-.56 1.25-1.25S20.44 17 19.75 17H12v-1h8.75c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H12v-1h6.75c.69 0 1.25-.56 1.25-1.25S19.44 10 18.75 10H8.86c.64-1.11 1.48-2.58 1.49-2.61.09-.16.14-.33.14-.53 0-.26-.09-.5-.26-.7C10.22 6.12 9.12 5 9.12 5M14 6.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75m0-1.5c-1.24 0-2.25 1.01-2.25 2.25S12.76 9.25 14 9.25 16.25 8.24 16.25 7 15.24 4.75 14 4.75m5.75.75c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5m0-1.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M16.5 1c-.83 0-1.5.67-1.5 1.5S15.67 4 16.5 4 18 3.33 18 2.5 17.33 1 16.5 1',
  }),
  'Soap',
);
export const SoapOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SoapOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SoapOutlinedIcon = svg(
  svg('path', {
    d: 'M14.25 6c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75m0-1.5C13.01 4.5 12 5.51 12 6.75S13.01 9 14.25 9s2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25m5.75 1c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5M20 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-3.5-3c-.83 0-1.5.67-1.5 1.5S15.67 4 16.5 4 18 3.33 18 2.5 17.33 1 16.5 1m4.25 15c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H12v-1h6.75c.69 0 1.25-.56 1.25-1.25 0-.67-.53-1.2-1.18-1.24L8.87 10l1.48-2.6c.09-.17.14-.34.14-.54 0-.26-.09-.5-.26-.7L9.12 5l-7.18 6.8c-.6.56-.94 1.35-.94 2.17V20c0 1.66 1.34 3 3 3h13.75c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H12v-1h7.75c.69 0 1.25-.56 1.25-1.25S20.44 17 19.75 17H12v-1zM10 21H4c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7 9.87V12h3z',
  }),
  'SoapOutlined',
);
export const SoapRoundedIcon = (props?: KTRawAttr) => {
  const s = _SoapRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SoapRoundedIcon = svg(
  svg('path', {
    d: 'M14.25 6c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75m0-1.5C13.01 4.5 12 5.51 12 6.75S13.01 9 14.25 9s2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25m5.75 1c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5M20 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-2-1.5c0 .83-.67 1.5-1.5 1.5S15 3.33 15 2.5 15.67 1 16.5 1s1.5.67 1.5 1.5M1.94 11.79c-.6.56-.94 1.35-.94 2.18V20c0 1.66 1.34 3 3 3h13.68c.65 0 1.25-.47 1.32-1.12.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7.18c.65 0 1.25-.47 1.32-1.12.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h8.18c.65 0 1.25-.47 1.32-1.12.08-.75-.51-1.38-1.24-1.38H12.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6.18c.65 0 1.25-.47 1.32-1.12.08-.75-.51-1.38-1.24-1.38h-9.9l1.49-2.61c.09-.16.14-.33.14-.53 0-.26-.09-.5-.26-.7l-.42-.45c-.38-.39-1.01-.41-1.41-.03z',
  }),
  'SoapRounded',
);
export const SoapSharpIcon = (props?: KTRawAttr) => {
  const s = _SoapSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SoapSharpIcon = svg(
  svg('path', {
    d: 'M14.25 6c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75m0-1.5C13.01 4.5 12 5.51 12 6.75S13.01 9 14.25 9s2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25m5.75 1c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5M20 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-2-1.5c0 .83-.67 1.5-1.5 1.5S15 3.33 15 2.5 15.67 1 16.5 1s1.5.67 1.5 1.5M1 12.68V23h18v-2.5h-7v-1h9V17h-9v-1h10v-2.5H12v-1h8V10H8.86l1.88-3.3L9.12 5z',
  }),
  'SoapSharp',
);
export const SoapTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SoapTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SoapTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M14.25 6c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75M20 5.5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5M10 21H4c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7 9.87V12h3z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M14.25 6c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75m0-1.5C13.01 4.5 12 5.51 12 6.75S13.01 9 14.25 9s2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25m5.75 1c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5M20 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-3.5-3c-.83 0-1.5.67-1.5 1.5S15.67 4 16.5 4 18 3.33 18 2.5 17.33 1 16.5 1m4.25 15c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H12v-1h6.75c.69 0 1.25-.56 1.25-1.25 0-.67-.53-1.2-1.18-1.24L8.87 10l1.48-2.6c.09-.17.14-.34.14-.54 0-.26-.09-.5-.26-.7L9.12 5l-7.18 6.8c-.6.56-.94 1.35-.94 2.17V20c0 1.66 1.34 3 3 3h13.75c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H12v-1h7.75c.69 0 1.25-.56 1.25-1.25S20.44 17 19.75 17H12v-1zM10 21H4c-.55 0-1-.45-1-1v-6c0-.39.23-.64.36-.75L7 9.87V12h3z',
      },
      '1',
    ),
  ],
  'SoapTwoTone',
);
export const SocialDistanceIcon = (props?: KTRawAttr) => {
  const s = _SocialDistanceIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SocialDistanceIcon = svg(
  svg('path', {
    d: 'M4 5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m4.78 3.58C7.93 8.21 6.99 8 6 8s-1.93.21-2.78.58C2.48 8.9 2 9.62 2 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85M18 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58C19.93 8.21 18.99 8 18 8s-1.93.21-2.78.58C14.48 8.9 14 9.62 14 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85M22 17l-4-4v3H6v-3l-4 4 4 4v-3h12v3z',
  }),
  'SocialDistance',
);
export const SocialDistanceOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SocialDistanceOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SocialDistanceOutlinedIcon = svg(
  svg('path', {
    d: 'M4 5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m4.78 3.58C7.93 8.21 6.99 8 6 8s-1.93.21-2.78.58C2.48 8.9 2 9.62 2 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85M18 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58C19.93 8.21 18.99 8 18 8s-1.93.21-2.78.58C14.48 8.9 14 9.62 14 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85m-2.77 4.43-1.41 1.41L18.17 16H5.83l1.58-1.59L6 13l-4 4 3.99 3.99 1.41-1.41L5.83 18h12.34l-1.58 1.58L18 20.99 22 17z',
  }),
  'SocialDistanceOutlined',
);
export const SocialDistanceRoundedIcon = (props?: KTRawAttr) => {
  const s = _SocialDistanceRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SocialDistanceRoundedIcon = svg(
  svg('path', {
    d: 'M4 5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m4.78 3.58C7.93 8.21 6.99 8 6 8s-1.93.21-2.78.58C2.48 8.9 2 9.62 2 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85M18 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58C19.93 8.21 18.99 8 18 8s-1.93.21-2.78.58C14.48 8.9 14 9.62 14 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85m.87 8.07-2.79-2.79c-.32-.32-.86-.1-.86.35V16H6v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79c.31.31.85.09.85-.36V18h12v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7',
  }),
  'SocialDistanceRounded',
);
export const SocialDistanceSharpIcon = (props?: KTRawAttr) => {
  const s = _SocialDistanceSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SocialDistanceSharpIcon = svg(
  svg('path', {
    d: 'M4 5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m4.78 3.58C7.93 8.21 6.99 8 6 8s-1.93.21-2.78.58C2.48 8.9 2 9.62 2 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85M18 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58C19.93 8.21 18.99 8 18 8s-1.93.21-2.78.58C14.48 8.9 14 9.62 14 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85M22 17l-4-4v3H6v-3l-4 4 4 4v-3h12v3z',
  }),
  'SocialDistanceSharp',
);
export const SocialDistanceTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SocialDistanceTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SocialDistanceTwoToneIcon = svg(
  svg('path', {
    d: 'M4 5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m4.78 3.58C7.93 8.21 6.99 8 6 8s-1.93.21-2.78.58C2.48 8.9 2 9.62 2 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85M18 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m2.78 1.58C19.93 8.21 18.99 8 18 8s-1.93.21-2.78.58C14.48 8.9 14 9.62 14 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85M22 17l-4-4v3H6v-3l-4 4 4 4v-3h12v3z',
  }),
  'SocialDistanceTwoTone',
);
export const SolarPowerIcon = (props?: KTRawAttr) => {
  const s = _SolarPowerIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SolarPowerIcon = svg(
  svg('path', {
    d: 'M3.33 16H11v-3H4zM13 16h7.67L20 13h-7zm8.11 2H13v4h9zM2 22h9v-4H2.89zm9-14h2v3h-2zm4.7644-.7948 1.4143-1.4142L19.3 7.9123l-1.4142 1.4142zm-11.0596.7076 2.1213-2.1213 1.4143 1.4142L6.119 9.327zM3 2h3v2H3zm15 0h3v2h-3zm-6 5c2.76 0 5-2.24 5-5H7c0 2.76 2.24 5 5 5',
  }),
  'SolarPower',
);
export const SolarPowerOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SolarPowerOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SolarPowerOutlinedIcon = svg(
  svg('path', {
    d: 'M20 12H4L2 22h20zm-1.64 2 .4 2H13v-2zM11 14v2H5.24l.4-2zm-6.16 4H11v2H4.44zM13 20v-2h6.16l.4 2zM11 8h2v3h-2zm4.7644-.7948 1.4143-1.4142L19.3 7.9123l-1.4142 1.4142zm-11.0596.7076 2.1213-2.1213 1.4143 1.4142L6.119 9.327zM3 2h3v2H3zm15 0h3v2h-3zm-6 5c2.76 0 5-2.24 5-5h-2c0 1.65-1.35 3-3 3S9 3.65 9 2H7c0 2.76 2.24 5 5 5',
  }),
  'SolarPowerOutlined',
);
export const SolarPowerRoundedIcon = (props?: KTRawAttr) => {
  const s = _SolarPowerRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SolarPowerRoundedIcon = svg(
  svg('path', {
    d: 'M3.33 16H11v-3H5.6c-.94 0-1.75.65-1.95 1.57zM13 16h7.67l-.32-1.43c-.21-.92-1.02-1.57-1.95-1.57H13zm8.11 2H13v4h6.51c1.28 0 2.23-1.18 1.95-2.43zM4.49 22H11v-4H2.89l-.35 1.57C2.26 20.82 3.21 22 4.49 22M12 8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1V9c0-.55-.45-1-1-1m6.59.62c.39-.39.39-1.02 0-1.41l-.71-.71a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l.71.71c.39.39 1.02.39 1.41 0m-11.77 0 .71-.71c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0l-.71.7c-.39.39-.39 1.02 0 1.41.39.4 1.02.4 1.41.01M5 2H4c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1m15 0h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1m-8 5c2.76 0 5-2.24 5-5H7c0 2.76 2.24 5 5 5',
  }),
  'SolarPowerRounded',
);
export const SolarPowerSharpIcon = (props?: KTRawAttr) => {
  const s = _SolarPowerSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SolarPowerSharpIcon = svg(
  svg('path', {
    d: 'M3.33 16H11v-3H4zM13 16h7.67L20 13h-7zm8.11 2H13v4h9zM2 22h9v-4H2.89zm9-14h2v3h-2zm4.7644-.7948 1.4143-1.4142L19.3 7.9123l-1.4142 1.4142zm-11.0596.7076 2.1213-2.1213 1.4143 1.4142L6.119 9.327zM3 2h3v2H3zm15 0h3v2h-3zm-6 5c2.76 0 5-2.24 5-5H7c0 2.76 2.24 5 5 5',
  }),
  'SolarPowerSharp',
);
export const SolarPowerTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SolarPowerTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SolarPowerTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M4.44 20H11v-2H4.84zm13.92-6H13v2h5.76zM13 18v2h6.56l-.4-2zm-7.76-2H11v-2H5.64z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 12H4L2 22h20zm-7 2h5.36l.4 2H13zm-2 6H4.44l.4-2H11zm0-4H5.24l.4-2H11zm2 4v-2h6.16l.4 2zM11 8h2v3h-2zm4.7644-.7948 1.4143-1.4142L19.3 7.9123l-1.4142 1.4142zm-11.0596.7076 2.1213-2.1213 1.4143 1.4142L6.119 9.327zM3 2h3v2H3zm15 0h3v2h-3zm-6 5c2.76 0 5-2.24 5-5h-2c0 1.65-1.35 3-3 3S9 3.65 9 2H7c0 2.76 2.24 5 5 5',
      },
      '1',
    ),
    svg('path', { d: 'M15 2c0 1.66-1.34 3-3 3S9 3.66 9 2z', opacity: '.3' }, '2'),
  ],
  'SolarPowerTwoTone',
);
export const SortIcon = (props?: KTRawAttr) => {
  const s = _SortIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SortIcon = svg(svg('path', { d: 'M3 18h6v-2H3zM3 6v2h18V6zm0 7h12v-2H3z' }), 'Sort');
export const SortByAlphaIcon = (props?: KTRawAttr) => {
  const s = _SortByAlphaIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SortByAlphaIcon = svg(
  svg('path', {
    d: 'M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27 1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27zm-1.13 7.37 1.94-5.18 1.94 5.18zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26z',
  }),
  'SortByAlpha',
);
export const SortByAlphaOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SortByAlphaOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SortByAlphaOutlinedIcon = svg(
  svg('path', {
    d: 'M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27 1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27zm-1.13 7.37 1.94-5.18 1.94 5.18zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26z',
  }),
  'SortByAlphaOutlined',
);
export const SortByAlphaRoundedIcon = (props?: KTRawAttr) => {
  const s = _SortByAlphaRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SortByAlphaRoundedIcon = svg(
  svg('path', {
    d: 'M12.93 2.65c-.2-.2-.51-.2-.71 0l-2.01 2.01h4.72zm-.7 18.7c.2.2.51.2.71 0l1.98-1.98h-4.66zm-1.25-3.62c.6 0 1.01-.6.79-1.16L8.04 7.03c-.18-.46-.63-.76-1.12-.76s-.94.3-1.12.76l-3.74 9.53c-.22.56.19 1.16.79 1.16.35 0 .67-.22.8-.55l.71-1.9h5.11l.71 1.9c.13.34.45.56.8.56m-6.01-4.09 1.94-5.18 1.94 5.18zm16.08 2.5h-5.33l5.72-8.29c.46-.66-.02-1.57-.82-1.57h-6.48c-.44 0-.79.36-.79.8v.01c0 .44.36.8.79.8h5.09l-5.73 8.28c-.46.66.02 1.57.82 1.57h6.72c.44 0 .79-.36.79-.79.02-.45-.34-.81-.78-.81',
  }),
  'SortByAlphaRounded',
);
export const SortByAlphaSharpIcon = (props?: KTRawAttr) => {
  const s = _SortByAlphaSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SortByAlphaSharpIcon = svg(
  svg('path', {
    d: 'M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27 1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27zm-1.13 7.37 1.94-5.18 1.94 5.18zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26z',
  }),
  'SortByAlphaSharp',
);
export const SortByAlphaTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SortByAlphaTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SortByAlphaTwoToneIcon = svg(
  svg('path', {
    d: 'M14.94 4.66 12.58 2.3l-2.36 2.36zm-4.55 13.07h1.84L7.74 6.27H6.1L1.6 17.73h1.84l.92-2.45h5.11zm-5.42-4.09 1.94-5.18 1.94 5.18zm7.61 8.06 2.33-2.33h-4.66zm9.08-14.16V6.28h-8.3v1.6h5.88l-5.92 8.56v1.29h8.53v-1.59h-6.12z',
  }),
  'SortByAlphaTwoTone',
);
export const SortOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SortOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SortOutlinedIcon = svg(svg('path', { d: 'M3 18h6v-2H3zM3 6v2h18V6zm0 7h12v-2H3z' }), 'SortOutlined');
export const SortRoundedIcon = (props?: KTRawAttr) => {
  const s = _SortRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SortRoundedIcon = svg(
  svg('path', {
    d: 'M4 18h4c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1m1 6h10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1',
  }),
  'SortRounded',
);
export const SortSharpIcon = (props?: KTRawAttr) => {
  const s = _SortSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SortSharpIcon = svg(svg('path', { d: 'M3 18h6v-2H3zM3 6v2h18V6zm0 7h12v-2H3z' }), 'SortSharp');
export const SortTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SortTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SortTwoToneIcon = svg(svg('path', { d: 'M3 18h6v-2H3zM3 6v2h18V6zm0 7h12v-2H3z' }), 'SortTwoTone');
export const SosIcon = (props?: KTRawAttr) => {
  const s = _SosIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SosIcon = svg(
  svg('path', {
    d: 'M13.5 7h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 8h-3V9h3zM1 15h4v-2H3c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h4v2H3v2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H1zm16 0h4v-2h-2c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h4v2h-4v2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-4z',
  }),
  'Sos',
);
export const SosOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SosOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SosOutlinedIcon = svg(
  svg('path', {
    d: 'M13.5 7h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 8h-3V9h3zM1 15h4v-2H3c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h4v2H3v2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H1zm16 0h4v-2h-2c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h4v2h-4v2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-4z',
  }),
  'SosOutlined',
);
export const SosRoundedIcon = (props?: KTRawAttr) => {
  const s = _SosRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SosRoundedIcon = svg(
  svg('path', {
    d: 'M13.5 7h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 8h-3V9h3zM3 9v2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H2c-.55 0-1-.45-1-1s.45-1 1-1h3v-2H3c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3c.55 0 1 .45 1 1s-.45 1-1 1zm16 0v2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-2h-2c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h3c.55 0 1 .45 1 1s-.45 1-1 1z',
  }),
  'SosRounded',
);
export const SosSharpIcon = (props?: KTRawAttr) => {
  const s = _SosSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SosSharpIcon = svg(
  svg('path', { d: 'M15.5 7h-7v10h7zm-2 8h-3V9h3zM1 15h4v-2H1V7h6v2H3v2h4v6H1zm16 0h4v-2h-4V7h6v2h-4v2h4v6h-6z' }),
  'SosSharp',
);
export const SosTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SosTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SosTwoToneIcon = svg(
  svg('path', {
    d: 'M13.5 7h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 8h-3V9h3zM1 15h4v-2H3c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h4v2H3v2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H1zm16 0h4v-2h-2c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h4v2h-4v2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-4z',
  }),
  'SosTwoTone',
);
export const SoupKitchenIcon = (props?: KTRawAttr) => {
  const s = _SoupKitchenIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SoupKitchenIcon = svg(
  svg('path', {
    d: 'M6.4 7c-.34.55-.4.97-.4 1.38C6 9.15 7 11 7 12c0 .95-.4 1.5-.4 1.5H5.1s.4-.55.4-1.5c0-1-1-2.85-1-3.62 0-.41.06-.83.4-1.38zm5 0c-.34.55-.4.97-.4 1.38 0 .77 1 2.62 1 3.62 0 .95-.4 1.5-.4 1.5h1.5s.4-.55.4-1.5c0-1-1-2.85-1-3.62 0-.41.06-.83.4-1.38zM8.15 7c-.34.55-.4.97-.4 1.38 0 .77 1 2.63 1 3.62 0 .95-.4 1.5-.4 1.5h1.5s.4-.55.4-1.5c0-1-1-2.85-1-3.62 0-.41.06-.83.4-1.38zm13.32-.5s.13-1.06.13-1.5c0-1.65-1.35-3-3-3-1.54 0-2.81 1.16-2.98 2.65L14.53 15H4.01c-.6 0-1.09.53-1 1.13C3.53 19.46 6.39 22 9.75 22c3.48 0 6.34-2.73 6.71-6.23L17.61 4.9c.05-.51.47-.9.99-.9.55 0 1 .45 1 1 0 .3-.1 1.25-.1 1.25z',
  }),
  'SoupKitchen',
);
export const SoupKitchenOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SoupKitchenOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SoupKitchenOutlinedIcon = svg(
  svg('path', {
    d: 'M6.4 7c-.34.55-.4.97-.4 1.38C6 9.15 7 11 7 12c0 .95-.4 1.5-.4 1.5H5.1s.4-.55.4-1.5c0-1-1-2.85-1-3.62 0-.41.06-.83.4-1.38zm5 0c-.34.55-.4.97-.4 1.38 0 .77 1 2.62 1 3.62 0 .95-.4 1.5-.4 1.5h1.5s.4-.55.4-1.5c0-1-1-2.85-1-3.62 0-.41.06-.83.4-1.38zM8.15 7c-.34.55-.4.97-.4 1.38 0 .77 1 2.63 1 3.62 0 .95-.4 1.5-.4 1.5h1.5s.4-.55.4-1.5c0-1-1-2.85-1-3.62 0-.41.06-.83.4-1.38zM18.6 2c-1.54 0-2.81 1.16-2.98 2.65L14.53 15H4.01c-.6 0-1.09.53-1 1.13C3.53 19.46 6.39 22 9.75 22c3.48 0 6.34-2.73 6.71-6.23L17.61 4.9c.05-.51.47-.9.99-.9.55 0 1 .45 1 1 0 .3-.1 1.25-.1 1.25l1.97.25s.13-1.06.13-1.5c0-1.65-1.35-3-3-3M9.75 20c-1.94 0-3.67-1.23-4.43-3h8.79c-.72 1.78-2.42 3-4.36 3',
  }),
  'SoupKitchenOutlined',
);
export const SoupKitchenRoundedIcon = (props?: KTRawAttr) => {
  const s = _SoupKitchenRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SoupKitchenRoundedIcon = svg(
  svg('path', {
    d: 'M6.15 13.5c-.46 0-.8-.42-.71-.87q.06-.27.06-.63c0-1-1-2.85-1-3.62 0-.29.03-.59.17-.93.11-.27.37-.45.67-.45.45 0 .8.42.71.86-.04.18-.05.35-.05.52C6 9.15 7 11 7 12c0 .42-.08.76-.17 1.01-.1.3-.37.49-.68.49m6.5 0c.31 0 .58-.19.68-.49.09-.25.17-.59.17-1.01 0-1-1-2.85-1-3.62 0-.17.01-.34.04-.51.09-.45-.25-.87-.7-.87-.29 0-.56.18-.67.45-.14.34-.17.63-.17.93 0 .77 1 2.62 1 3.62q0 .36-.06.63c-.09.45.25.87.71.87m-3.25 0c.31 0 .58-.19.68-.49.09-.25.17-.59.17-1.01 0-1-1-2.85-1-3.62 0-.17.01-.34.04-.51.09-.45-.25-.87-.7-.87-.3 0-.56.18-.67.45-.14.34-.17.63-.17.93 0 .77 1 2.63 1 3.62q0 .36-.06.63c-.09.45.25.87.71.87m11.06-7.13c.57.07 1.08-.34 1.12-.91.01-.18.02-.34.02-.46 0-1.65-1.35-3-3-3-1.54 0-2.81 1.16-2.98 2.65L14.53 15H3.99c-.6 0-1.07.54-.98 1.14C3.54 19.46 6.39 22 9.75 22c3.48 0 6.34-2.73 6.71-6.23L17.61 4.9c.05-.51.47-.9.99-.9.55 0 1 .45 1 1 0 .07-.01.18-.01.31-.04.53.34.99.87 1.06',
  }),
  'SoupKitchenRounded',
);
export const SoupKitchenSharpIcon = (props?: KTRawAttr) => {
  const s = _SoupKitchenSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SoupKitchenSharpIcon = svg(
  svg('path', {
    d: 'M6.4 7c-.34.55-.4.97-.4 1.38C6 9.15 7 11 7 12c0 .95-.4 1.5-.4 1.5H5.1s.4-.55.4-1.5c0-1-1-2.85-1-3.62 0-.41.06-.83.4-1.38zm5 0c-.34.55-.4.97-.4 1.38 0 .77 1 2.62 1 3.62 0 .95-.4 1.5-.4 1.5h1.5s.4-.55.4-1.5c0-1-1-2.85-1-3.62 0-.41.06-.83.4-1.38zM8.15 7c-.34.55-.4.97-.4 1.38 0 .77 1 2.63 1 3.62 0 .95-.4 1.5-.4 1.5h1.5s.4-.55.4-1.5c0-1-1-2.85-1-3.62 0-.41.06-.83.4-1.38zm13.32-.5s.13-1.06.13-1.5c0-1.65-1.35-3-3-3-1.54 0-2.81 1.16-2.98 2.65L14.53 15H2.93c-.02 3.87 3.09 7 6.82 7 3.48 0 6.34-2.73 6.71-6.23L17.61 4.9c.05-.51.47-.9.99-.9.55 0 1 .45 1 1 0 .3-.1 1.25-.1 1.25z',
  }),
  'SoupKitchenSharp',
);
export const SoupKitchenTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SoupKitchenTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SoupKitchenTwoToneIcon = svg(
  [
    svg('path', { d: 'M14.12 17c-.73 1.78-2.43 3-4.37 3s-3.67-1.23-4.43-3h8.78', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M6.4 7c-.34.55-.4.97-.4 1.38C6 9.15 7 11 7 12c0 .95-.4 1.5-.4 1.5H5.1s.4-.55.4-1.5c0-1-1-2.85-1-3.62 0-.41.06-.83.4-1.38zm5 0c-.34.55-.4.97-.4 1.38 0 .77 1 2.62 1 3.62 0 .95-.4 1.5-.4 1.5h1.5s.4-.55.4-1.5c0-1-1-2.85-1-3.62 0-.41.06-.83.4-1.38zM8.15 7c-.34.55-.4.97-.4 1.38 0 .77 1 2.63 1 3.62 0 .95-.4 1.5-.4 1.5h1.5s.4-.55.4-1.5c0-1-1-2.85-1-3.62 0-.41.06-.83.4-1.38zM18.6 2c-1.54 0-2.81 1.16-2.98 2.65L14.53 15H4.01c-.6 0-1.09.53-1 1.13C3.53 19.46 6.39 22 9.75 22c3.48 0 6.34-2.73 6.71-6.23L17.61 4.9c.05-.51.47-.9.99-.9.55 0 1 .45 1 1 0 .3-.1 1.25-.1 1.25l1.97.25s.13-1.06.13-1.5c0-1.65-1.35-3-3-3M9.75 20c-1.94 0-3.67-1.23-4.43-3h8.79c-.72 1.78-2.42 3-4.36 3',
      },
      '1',
    ),
  ],
  'SoupKitchenTwoTone',
);
export const SourceIcon = (props?: KTRawAttr) => {
  const s = _SourceIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SourceIcon = svg(
  svg('path', {
    d: 'M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-6 10H6v-2h8zm4-4H6v-2h12z',
  }),
  'Source',
);
export const SourceOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SourceOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SourceOutlinedIcon = svg(
  svg('path', {
    d: 'M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20zm-2-6H6v-2h12zm-4 4H6v-2h8z',
  }),
  'SourceOutlined',
);
export const SourceRoundedIcon = (props?: KTRawAttr) => {
  const s = _SourceRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SourceRoundedIcon = svg(
  svg('path', {
    d: 'M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-6 10H6v-2h8zm4-4H6v-2h12z',
  }),
  'SourceRounded',
);
export const SourceSharpIcon = (props?: KTRawAttr) => {
  const s = _SourceSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SourceSharpIcon = svg(
  svg('path', { d: 'm12 6-2-2H2v16h20V6zm2 10H6v-2h8zm4-4H6v-2h12z' }),
  'SourceSharp',
);
export const SourceTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SourceTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SourceTwoToneIcon = svg(
  [
    svg('path', { d: 'M9.17 6H4v12h16V8h-8.83z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20zm-2-6H6v-2h12zm-4 4H6v-2h8z',
      },
      '1',
    ),
  ],
  'SourceTwoTone',
);
export const SouthIcon = (props?: KTRawAttr) => {
  const s = _SouthIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthIcon = svg(svg('path', { d: 'm19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7z' }), 'South');
export const SouthAmericaIcon = (props?: KTRawAttr) => {
  const s = _SouthAmericaIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthAmericaIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M4 12c0-1.95.7-3.74 1.87-5.13L9 10v1c0 1.1.9 2 2 2v5.59c0 .27.11.52.29.71l.71.7c-4.42 0-8-3.58-8-8m9 7.94V18l3.75-5.62c.16-.25.25-.54.25-.83V10.5c0-.55-.45-1-1-1h-1.5l-1.4-1.75c-.38-.47-.95-.75-1.56-.75H8V5.07C9.18 4.39 10.54 4 12 4c4.41 0 8 3.59 8 8 0 4.07-3.06 7.44-7 7.94',
  }),
  'SouthAmerica',
);
export const SouthAmericaOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SouthAmericaOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthAmericaOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M4 12c0-1.95.7-3.74 1.87-5.13L9 10v1c0 1.1.9 2 2 2v5.59c0 .27.11.52.29.71l.71.7c-4.42 0-8-3.58-8-8m9 7.94V18l3.75-5.62c.16-.25.25-.54.25-.83V10.5c0-.55-.45-1-1-1h-1.5l-1.4-1.75c-.38-.47-.95-.75-1.56-.75H8V5.07C9.18 4.39 10.54 4 12 4c4.41 0 8 3.59 8 8 0 4.07-3.06 7.44-7 7.94',
  }),
  'SouthAmericaOutlined',
);
export const SouthAmericaRoundedIcon = (props?: KTRawAttr) => {
  const s = _SouthAmericaRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthAmericaRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M4 12c0-1.95.7-3.74 1.87-5.13L9 10v1c0 1.1.9 2 2 2v5.59c0 .27.11.52.29.71l.71.7c-4.42 0-8-3.58-8-8m9 7.94V18l3.75-5.62c.16-.25.25-.54.25-.83V10.5c0-.55-.45-1-1-1h-1.5l-1.4-1.75c-.38-.47-.95-.75-1.56-.75H8V5.07C9.18 4.39 10.54 4 12 4c4.41 0 8 3.59 8 8 0 4.07-3.06 7.44-7 7.94',
  }),
  'SouthAmericaRounded',
);
export const SouthAmericaSharpIcon = (props?: KTRawAttr) => {
  const s = _SouthAmericaSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthAmericaSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M4 12c0-1.95.7-3.74 1.87-5.13L9 10v1c0 1.1.9 2 2 2v5.59c0 .27.11.52.29.71l.71.7c-4.42 0-8-3.58-8-8m9 7.94V18l3.75-5.62c.16-.25.25-.54.25-.83V10.5c0-.55-.45-1-1-1h-1.5l-1.4-1.75c-.38-.47-.95-.75-1.56-.75H8V5.07C9.18 4.39 10.54 4 12 4c4.41 0 8 3.59 8 8 0 4.07-3.06 7.44-7 7.94',
  }),
  'SouthAmericaSharp',
);
export const SouthAmericaTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SouthAmericaTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthAmericaTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M4 12c0-1.95.7-3.74 1.87-5.13L9 10v1c0 1.1.9 2 2 2v5.59c0 .27.11.52.29.71l.71.7c-4.42 0-8-3.58-8-8m9 7.94V18l3.75-5.62c.16-.25.25-.54.25-.83V10.5c0-.55-.45-1-1-1h-1.5l-1.4-1.75c-.38-.47-.95-.75-1.56-.75H8V5.07C9.18 4.39 10.54 4 12 4c4.41 0 8 3.59 8 8 0 4.07-3.06 7.44-7 7.94',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M4 12c0-1.95.7-3.74 1.87-5.13L9 10v1c0 1.1.9 2 2 2v5.59c0 .27.11.52.29.71l.71.7c-4.42 0-8-3.58-8-8m9 7.94V18l3.75-5.62c.16-.25.25-.54.25-.83V10.5c0-.55-.45-1-1-1h-1.5l-1.4-1.75c-.38-.47-.95-.75-1.56-.75H8V5.07C9.18 4.39 10.54 4 12 4c4.41 0 8 3.59 8 8 0 4.07-3.06 7.44-7 7.94',
      },
      '1',
    ),
  ],
  'SouthAmericaTwoTone',
);
export const SouthEastIcon = (props?: KTRawAttr) => {
  const s = _SouthEastIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthEastIcon = svg(svg('path', { d: 'M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10z' }), 'SouthEast');
export const SouthEastOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SouthEastOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthEastOutlinedIcon = svg(
  svg('path', { d: 'M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10z' }),
  'SouthEastOutlined',
);
export const SouthEastRoundedIcon = (props?: KTRawAttr) => {
  const s = _SouthEastRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthEastRoundedIcon = svg(
  svg('path', {
    d: 'M18 9c-.56 0-1 .45-1 1v5.59L6.12 4.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L15.59 17H10c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1',
  }),
  'SouthEastRounded',
);
export const SouthEastSharpIcon = (props?: KTRawAttr) => {
  const s = _SouthEastSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthEastSharpIcon = svg(
  svg('path', { d: 'M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10z' }),
  'SouthEastSharp',
);
export const SouthEastTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SouthEastTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthEastTwoToneIcon = svg(
  svg('path', { d: 'M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10z' }),
  'SouthEastTwoTone',
);
export const SouthOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SouthOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthOutlinedIcon = svg(
  svg('path', { d: 'm19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7z' }),
  'SouthOutlined',
);
export const SouthRoundedIcon = (props?: KTRawAttr) => {
  const s = _SouthRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthRoundedIcon = svg(
  svg('path', {
    d: 'M18.3 14.29a.996.996 0 0 0-1.41 0L13 18.17V3c0-.55-.45-1-1-1s-1 .45-1 1v15.18L7.12 14.3a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l5.59 5.59c.39.39 1.02.39 1.41 0l5.59-5.59c.38-.39.38-1.03 0-1.42',
  }),
  'SouthRounded',
);
export const SouthSharpIcon = (props?: KTRawAttr) => {
  const s = _SouthSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthSharpIcon = svg(
  svg('path', { d: 'm19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7z' }),
  'SouthSharp',
);
export const SouthTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SouthTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthTwoToneIcon = svg(
  svg('path', { d: 'm19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7z' }),
  'SouthTwoTone',
);
export const SouthWestIcon = (props?: KTRawAttr) => {
  const s = _SouthWestIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthWestIcon = svg(svg('path', { d: 'M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10z' }), 'SouthWest');
export const SouthWestOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SouthWestOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthWestOutlinedIcon = svg(
  svg('path', { d: 'M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10z' }),
  'SouthWestOutlined',
);
export const SouthWestRoundedIcon = (props?: KTRawAttr) => {
  const s = _SouthWestRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthWestRoundedIcon = svg(
  svg('path', {
    d: 'M15 18c0-.56-.45-1-1-1H8.41L19.3 6.11c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0L7 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1',
  }),
  'SouthWestRounded',
);
export const SouthWestSharpIcon = (props?: KTRawAttr) => {
  const s = _SouthWestSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthWestSharpIcon = svg(
  svg('path', { d: 'M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10z' }),
  'SouthWestSharp',
);
export const SouthWestTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SouthWestTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SouthWestTwoToneIcon = svg(
  svg('path', { d: 'M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10z' }),
  'SouthWestTwoTone',
);
export const SpaIcon = (props?: KTRawAttr) => {
  const s = _SpaIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpaIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M8.55 12c-1.07-.71-2.25-1.27-3.53-1.61 1.28.34 2.46.9 3.53 1.61m10.43-1.61c-1.29.34-2.49.91-3.57 1.64 1.08-.73 2.28-1.3 3.57-1.64',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63m-6.5 2.65c-.14-.1-.3-.19-.45-.29.15.11.31.19.45.29m6.42-.25c-.13.09-.27.16-.4.26.13-.1.27-.17.4-.26M12 15.45C9.85 12.17 6.18 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45',
      },
      '1',
    ),
  ],
  'Spa',
);
export const SpaOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SpaOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpaOutlinedIcon = svg(
  svg('path', {
    d: 'M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63m-3.44-4.44c.63 1.03 1.07 2.18 1.3 3.38-.47.3-.91.63-1.34.98-.42-.34-.87-.67-1.33-.97.25-1.2.71-2.35 1.37-3.39M12 15.45c-.82-1.25-1.86-2.34-3.06-3.2-.13-.09-.27-.16-.4-.26.13.09.27.17.39.25C6.98 10.83 4.59 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45m1.32 4.15c-.44.15-.88.27-1.33.37-.44-.09-.87-.21-1.28-.36-3.29-1.18-5.7-3.99-6.45-7.35 1.1.26 2.15.71 3.12 1.33l-.02.01c.13.09.26.18.39.25l.07.04c.99.72 1.84 1.61 2.51 2.65L12 19.1l1.67-2.55c.69-1.05 1.55-1.95 2.53-2.66l.07-.05c.09-.05.18-.11.27-.17l-.01-.02c.98-.65 2.07-1.13 3.21-1.4-.75 3.37-3.15 6.18-6.42 7.35m-4.33-7.32c-.02-.01-.04-.03-.05-.04 0 0 .01 0 .01.01.01.01.02.02.04.03',
  }),
  'SpaOutlined',
);
export const SpaRoundedIcon = (props?: KTRawAttr) => {
  const s = _SpaRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpaRoundedIcon = svg(
  svg('path', {
    d: 'M15.49 9.63c-.16-2.42-1.03-4.79-2.64-6.76-.41-.5-1.16-.5-1.57 0-1.65 1.98-2.57 4.35-2.77 6.76 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63m-6.5 2.65c-.14-.1-.3-.19-.45-.29.15.11.31.19.45.29m6.42-.25c-.13.09-.27.16-.4.26.13-.1.27-.17.4-.26M12 15.45c-1.95-2.97-5.14-5.03-8.83-5.39-.64-.06-1.17.47-1.11 1.11.45 4.8 3.65 8.78 7.98 10.33.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51 4.33-1.55 7.53-5.52 7.98-10.33.06-.64-.48-1.17-1.11-1.11-3.71.36-6.9 2.42-8.85 5.39',
  }),
  'SpaRounded',
);
export const SpaSharpIcon = (props?: KTRawAttr) => {
  const s = _SpaSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpaSharpIcon = svg(
  svg('path', {
    d: 'M8.55 12c-1.07-.71-2.25-1.27-3.53-1.61 1.28.34 2.46.9 3.53 1.61m10.43-1.61c-1.29.34-2.49.91-3.57 1.64 1.08-.73 2.28-1.3 3.57-1.64m-3.49-.76c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63m-6.5 2.65c-.14-.1-.3-.19-.45-.29.15.11.31.19.45.29m6.42-.25c-.13.09-.27.16-.4.26.13-.1.27-.17.4-.26M12 15.45C9.85 12.17 6.18 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45',
  }),
  'SpaSharp',
);
export const SpaTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SpaTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpaTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M8.55 12c-1.07-.71-2.25-1.27-3.53-1.61 1.28.34 2.46.9 3.53 1.61m10.43-1.61c-1.29.34-2.49.91-3.57 1.64 1.08-.73 2.28-1.3 3.57-1.64',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M8.94 12.25q0-.015 0 0c-.13-.09-.27-.17-.4-.26.13.1.27.17.4.26m4.41-3.67c-.22-1.21-.66-2.35-1.3-3.38-.66 1.04-1.12 2.19-1.37 3.39.46.3.9.62 1.33.97.42-.35.87-.68 1.34-.98m3.19 5.08.01.02c-.09.06-.18.12-.27.17l-.07.05c-.98.71-1.84 1.61-2.53 2.66L12 19.1l-1.67-2.55c-.68-1.03-1.52-1.92-2.51-2.65l-.07-.04c-.13-.08-.26-.16-.39-.25l.01-.01c-.96-.63-2.01-1.07-3.12-1.33.75 3.36 3.16 6.17 6.45 7.35.42.15.84.27 1.28.36.45-.09.89-.21 1.33-.37 3.27-1.17 5.67-3.98 6.43-7.34-1.14.26-2.23.73-3.2 1.39m-7.55-1.38',
        opacity: '.3',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M12 15.45c-.82-1.25-1.86-2.34-3.06-3.2-.13-.09-.27-.16-.4-.26.13.09.27.17.39.25C6.98 10.83 4.59 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45m1.32 4.15c-.44.15-.88.27-1.33.37-.44-.09-.87-.21-1.28-.36-3.29-1.18-5.7-3.99-6.45-7.35 1.1.26 2.15.71 3.12 1.33l-.02.01c.13.09.26.18.39.25l.07.04c.99.72 1.84 1.61 2.51 2.65L12 19.1l1.67-2.55c.69-1.05 1.55-1.95 2.53-2.66l.07-.05c.09-.05.18-.11.27-.17l-.01-.02c.98-.65 2.07-1.13 3.21-1.4-.75 3.37-3.15 6.18-6.42 7.35m2.17-9.97c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63m-3.44-4.44c.63 1.03 1.07 2.18 1.3 3.38-.47.3-.91.63-1.34.98-.42-.34-.87-.67-1.33-.97.25-1.2.71-2.35 1.37-3.39',
      },
      '2',
    ),
    svg('path', { d: 'M8.99 12.28c-.02-.01-.04-.03-.05-.04 0 0 .01 0 .01.01.01.01.02.02.04.03', opacity: '.3' }, '3'),
  ],
  'SpaTwoTone',
);
export const SpaceBarIcon = (props?: KTRawAttr) => {
  const s = _SpaceBarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpaceBarIcon = svg(svg('path', { d: 'M18 9v4H6V9H4v6h16V9z' }), 'SpaceBar');
export const SpaceBarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SpaceBarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpaceBarOutlinedIcon = svg(svg('path', { d: 'M18 9v4H6V9H4v6h16V9z' }), 'SpaceBarOutlined');
export const SpaceBarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SpaceBarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpaceBarRoundedIcon = svg(
  svg('path', {
    d: 'M18 10v3H6v-3c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1',
  }),
  'SpaceBarRounded',
);
export const SpaceBarSharpIcon = (props?: KTRawAttr) => {
  const s = _SpaceBarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpaceBarSharpIcon = svg(svg('path', { d: 'M18 9v4H6V9H4v6h16V9z' }), 'SpaceBarSharp');
export const SpaceBarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SpaceBarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpaceBarTwoToneIcon = svg(svg('path', { d: 'M18 13H6V9H4v6h16V9h-2z' }), 'SpaceBarTwoTone');
export const SpaceDashboardIcon = (props?: KTRawAttr) => {
  const s = _SpaceDashboardIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpaceDashboardIcon = svg(
  svg('path', {
    d: 'M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6zm2 0h6c1.1 0 2-.9 2-2v-7h-8zm8-11V5c0-1.1-.9-2-2-2h-6v7z',
  }),
  'SpaceDashboard',
);
export const SpaceDashboardOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SpaceDashboardOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpaceDashboardOutlinedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 19V5h6v14zm14 0h-6v-7h6zm0-9h-6V5h6z',
  }),
  'SpaceDashboardOutlined',
);
export const SpaceDashboardRoundedIcon = (props?: KTRawAttr) => {
  const s = _SpaceDashboardRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpaceDashboardRoundedIcon = svg(
  svg('path', {
    d: 'M9 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2m6 0h4c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2m6-13V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2',
  }),
  'SpaceDashboardRounded',
);
export const SpaceDashboardSharpIcon = (props?: KTRawAttr) => {
  const s = _SpaceDashboardSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpaceDashboardSharpIcon = svg(
  svg('path', { d: 'M11 21H3V3h8zm2 0h8v-9h-8zm8-11V3h-8v7z' }),
  'SpaceDashboardSharp',
);
export const SpaceDashboardTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SpaceDashboardTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpaceDashboardTwoToneIcon = svg(
  [
    svg('path', { d: 'M5 19V5h6v14zm14 0h-6v-7h6zm0-9h-6V5h6z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 19V5h6v14zm14 0h-6v-7h6zm0-9h-6V5h6z',
      },
      '1',
    ),
  ],
  'SpaceDashboardTwoTone',
);
export const SpatialAudioIcon = (props?: KTRawAttr) => {
  const s = _SpatialAudioIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpatialAudioIcon = svg(
  [
    svg('circle', { cx: '10', cy: '9', r: '4' }, '0'),
    svg(
      'path',
      {
        d: 'M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66M16 1h-2c0 4.97 4.03 9 9 9V8c-3.86 0-7-3.14-7-7',
      },
      '1',
    ),
    svg('path', { d: 'M20 1h-2c0 2.76 2.24 5 5 5V4c-1.65 0-3-1.35-3-3' }, '2'),
  ],
  'SpatialAudio',
);
export const SpatialAudioOffIcon = (props?: KTRawAttr) => {
  const s = _SpatialAudioOffIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpatialAudioOffIcon = svg(
  [
    svg('circle', { cx: '10', cy: '9', r: '4' }, '0'),
    svg(
      'path',
      {
        d: 'M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66M20.36 1l-1.41 1.41c2.73 2.73 2.73 7.17 0 9.9l1.41 1.41c3.52-3.51 3.52-9.21 0-12.72',
      },
      '1',
    ),
    svg('path', { d: 'M17.54 10.9c1.95-1.95 1.95-5.12 0-7.07l-1.41 1.41c1.17 1.17 1.17 3.07 0 4.24z' }, '2'),
  ],
  'SpatialAudioOff',
);
export const SpatialAudioOffOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SpatialAudioOffOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpatialAudioOffOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M10 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m6.39 8.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66M16 19H4v-.78c0-.38.2-.72.52-.88C5.71 16.73 7.63 16 10 16s4.29.73 5.48 1.34c.32.16.52.5.52.88zm4.36-18-1.41 1.41c2.73 2.73 2.73 7.17 0 9.9l1.41 1.41c3.52-3.51 3.52-9.21 0-12.72',
      },
      '0',
    ),
    svg('path', { d: 'M17.54 10.9c1.95-1.95 1.95-5.12 0-7.07l-1.41 1.41c1.17 1.17 1.17 3.07 0 4.24z' }, '1'),
  ],
  'SpatialAudioOffOutlined',
);
export const SpatialAudioOffRoundedIcon = (props?: KTRawAttr) => {
  const s = _SpatialAudioOffRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpatialAudioOffRoundedIcon = svg(
  [
    svg('circle', { cx: '10', cy: '9', r: '4' }, '0'),
    svg(
      'path',
      {
        d: 'M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-.78c0-1.12-.61-2.15-1.61-2.66m4.72-13.71c-.37-.48-1.08-.52-1.5-.09-.35.35-.39.91-.09 1.3 1.17 1.5 2.64 5.23 0 8.61-.3.39-.26.95.09 1.3.43.43 1.13.38 1.5-.09 1.5-1.93 3.35-6.72 0-11.03m-2.8 2.99c-.33-.57-1.11-.67-1.58-.21-.33.33-.36.84-.13 1.25.25.44.74 1.69-.01 2.99-.23.4-.19.9.14 1.22.47.47 1.25.35 1.58-.22 1.16-1.99.58-4.02 0-5.03',
      },
      '1',
    ),
  ],
  'SpatialAudioOffRounded',
);
export const SpatialAudioOffSharpIcon = (props?: KTRawAttr) => {
  const s = _SpatialAudioOffSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpatialAudioOffSharpIcon = svg(
  [
    svg('circle', { cx: '10', cy: '9', r: '4' }, '0'),
    svg(
      'path',
      {
        d: 'M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66M20.36 1l-1.41 1.41c2.73 2.73 2.73 7.17 0 9.9l1.41 1.41c3.52-3.51 3.52-9.21 0-12.72',
      },
      '1',
    ),
    svg('path', { d: 'M17.54 10.9c1.95-1.95 1.95-5.12 0-7.07l-1.41 1.41c1.17 1.17 1.17 3.07 0 4.24z' }, '2'),
  ],
  'SpatialAudioOffSharp',
);
export const SpatialAudioOffTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SpatialAudioOffTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpatialAudioOffTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M15.48 17.34C14.29 16.73 12.37 16 10 16s-4.29.73-5.48 1.34c-.32.16-.52.5-.52.88V19h12v-.78c0-.38-.2-.72-.52-.88',
        opacity: '.3',
      },
      '0',
    ),
    svg('circle', { cx: '10', cy: '9', r: '2', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M10 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m6.39 8.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66M16 19H4v-.78c0-.38.2-.72.52-.88C5.71 16.73 7.63 16 10 16s4.29.73 5.48 1.34c.32.16.52.5.52.88zm4.36-18-1.41 1.41c2.73 2.73 2.73 7.17 0 9.9l1.41 1.41c3.52-3.51 3.52-9.21 0-12.72',
      },
      '2',
    ),
    svg('path', { d: 'M17.54 10.9c1.95-1.95 1.95-5.12 0-7.07l-1.41 1.41c1.17 1.17 1.17 3.07 0 4.24z' }, '3'),
  ],
  'SpatialAudioOffTwoTone',
);
export const SpatialAudioOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SpatialAudioOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpatialAudioOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M10 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m6.39 8.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66M16 19H4v-.78c0-.38.2-.72.52-.88C5.71 16.73 7.63 16 10 16s4.29.73 5.48 1.34c.32.16.52.5.52.88zm0-18h-2c0 4.97 4.03 9 9 9V8c-3.86 0-7-3.14-7-7',
      },
      '0',
    ),
    svg('path', { d: 'M20 1h-2c0 2.76 2.24 5 5 5V4c-1.65 0-3-1.35-3-3' }, '1'),
  ],
  'SpatialAudioOutlined',
);
export const SpatialAudioRoundedIcon = (props?: KTRawAttr) => {
  const s = _SpatialAudioRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpatialAudioRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M22.11 7.95c-1.89-.23-5.57-1.83-6.09-6.09-.06-.5-.48-.86-.98-.86-.6 0-1.07.53-1 1.13.31 2.43 2.38 7.12 7.8 7.8.6.08 1.13-.4 1.13-1 0-.5-.37-.92-.86-.98m-.4-2.12c.64.17 1.26-.31 1.26-.97 0-.47-.34-.85-.79-.97-.49-.14-1.72-.68-2.11-2.13-.12-.44-.5-.76-.96-.76h-.01c-.66 0-1.14.64-.96 1.28.6 2.22 2.44 3.25 3.57 3.55',
      },
      '0',
    ),
    svg('circle', { cx: '10', cy: '9', r: '4' }, '1'),
    svg(
      'path',
      {
        d: 'M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66',
      },
      '2',
    ),
  ],
  'SpatialAudioRounded',
);
export const SpatialAudioSharpIcon = (props?: KTRawAttr) => {
  const s = _SpatialAudioSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpatialAudioSharpIcon = svg(
  [
    svg('circle', { cx: '10', cy: '9', r: '4' }, '0'),
    svg(
      'path',
      {
        d: 'M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66M16 1h-2c0 4.97 4.03 9 9 9V8c-3.86 0-7-3.14-7-7',
      },
      '1',
    ),
    svg('path', { d: 'M20 1h-2c0 2.76 2.24 5 5 5V4c-1.65 0-3-1.35-3-3' }, '2'),
  ],
  'SpatialAudioSharp',
);
export const SpatialAudioTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SpatialAudioTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpatialAudioTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M15.48 17.34C14.29 16.73 12.37 16 10 16s-4.29.73-5.48 1.34c-.32.16-.52.5-.52.88V19h12v-.78c0-.38-.2-.72-.52-.88',
        opacity: '.3',
      },
      '0',
    ),
    svg('circle', { cx: '10', cy: '9', r: '2', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'M10 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m6.39 8.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66M16 19H4v-.78c0-.38.2-.72.52-.88C5.71 16.73 7.63 16 10 16s4.29.73 5.48 1.34c.32.16.52.5.52.88zm0-18h-2c0 4.97 4.03 9 9 9V8c-3.86 0-7-3.14-7-7',
      },
      '2',
    ),
    svg('path', { d: 'M20 1h-2c0 2.76 2.24 5 5 5V4c-1.65 0-3-1.35-3-3' }, '3'),
  ],
  'SpatialAudioTwoTone',
);
export const SpatialTrackingIcon = (props?: KTRawAttr) => {
  const s = _SpatialTrackingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpatialTrackingIcon = svg(
  [
    svg('circle', { cx: '10', cy: '9', r: '4' }, '0'),
    svg(
      'path',
      {
        d: 'M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66m3.66-13.15L18.64 1c-3.51 3.51-3.51 9.21 0 12.73l1.41-1.41c-2.73-2.74-2.73-7.18 0-9.91',
      },
      '1',
    ),
    svg('path', { d: 'm22.88 5.24-1.41-1.41c-1.95 1.95-1.95 5.12 0 7.07l1.41-1.41c-1.17-1.17-1.17-3.08 0-4.25' }, '2'),
  ],
  'SpatialTracking',
);
export const SpatialTrackingOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SpatialTrackingOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpatialTrackingOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M10 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m6.39 8.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66M16 19H4v-.78c0-.38.2-.72.52-.88C5.71 16.73 7.63 16 10 16s4.29.73 5.48 1.34c.32.16.52.5.52.88zm4.05-16.59L18.64 1c-3.51 3.51-3.51 9.21 0 12.73l1.41-1.41c-2.73-2.74-2.73-7.18 0-9.91',
      },
      '0',
    ),
    svg('path', { d: 'm22.88 5.24-1.41-1.41c-1.95 1.95-1.95 5.12 0 7.07l1.41-1.41c-1.17-1.17-1.17-3.08 0-4.25' }, '1'),
  ],
  'SpatialTrackingOutlined',
);
export const SpatialTrackingRoundedIcon = (props?: KTRawAttr) => {
  const s = _SpatialTrackingRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpatialTrackingRoundedIcon = svg(
  [
    svg('circle', { cx: '10', cy: '9', r: '4' }, '0'),
    svg(
      'path',
      {
        d: 'M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66m3-13.8c-.43-.43-1.14-.39-1.51.09-1.5 1.93-3.35 6.72 0 11.03.37.48 1.08.52 1.5.09.35-.35.39-.91.09-1.3-1.17-1.5-2.64-5.23 0-8.61.31-.39.27-.95-.08-1.3m3.01 4.1c.23-.4.19-.9-.14-1.22-.47-.48-1.26-.37-1.59.21-1.15 2-.57 4.03.01 5.04.33.57 1.11.67 1.58.21.33-.33.36-.84.13-1.25-.25-.44-.74-1.69.01-2.99',
      },
      '1',
    ),
  ],
  'SpatialTrackingRounded',
);
export const SpatialTrackingSharpIcon = (props?: KTRawAttr) => {
  const s = _SpatialTrackingSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpatialTrackingSharpIcon = svg(
  [
    svg('circle', { cx: '10', cy: '9', r: '4' }, '0'),
    svg(
      'path',
      {
        d: 'M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66m3.66-13.15L18.64 1c-3.51 3.51-3.51 9.21 0 12.73l1.41-1.41c-2.73-2.74-2.73-7.18 0-9.91',
      },
      '1',
    ),
    svg('path', { d: 'm22.88 5.24-1.41-1.41c-1.95 1.95-1.95 5.12 0 7.07l1.41-1.41c-1.17-1.17-1.17-3.08 0-4.25' }, '2'),
  ],
  'SpatialTrackingSharp',
);
export const SpatialTrackingTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SpatialTrackingTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpatialTrackingTwoToneIcon = svg(
  [
    svg('path', { d: 'M20.05 2.41 18.64 1c-3.51 3.51-3.51 9.21 0 12.73l1.41-1.41c-2.73-2.74-2.73-7.18 0-9.91' }, '0'),
    svg('path', { d: 'm22.88 5.24-1.41-1.41c-1.95 1.95-1.95 5.12 0 7.07l1.41-1.41c-1.17-1.17-1.17-3.08 0-4.25' }, '1'),
    svg(
      'path',
      {
        d: 'M15.48 17.34C14.29 16.73 12.37 16 10 16s-4.29.73-5.48 1.34c-.32.16-.52.5-.52.88V19h12v-.78c0-.38-.2-.72-.52-.88',
        opacity: '.3',
      },
      '2',
    ),
    svg('circle', { cx: '10', cy: '9', r: '2', opacity: '.3' }, '3'),
    svg(
      'path',
      {
        d: 'M10 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m6.39 8.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56C2.61 16.07 2 17.1 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66M16 19H4v-.78c0-.38.2-.72.52-.88C5.71 16.73 7.63 16 10 16s4.29.73 5.48 1.34c.32.16.52.5.52.88z',
      },
      '4',
    ),
  ],
  'SpatialTrackingTwoTone',
);
export const SpeakerIcon = (props?: KTRawAttr) => {
  const s = _SpeakerIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerIcon = svg(
  svg('path', {
    d: 'M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-5 2c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2m0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3',
  }),
  'Speaker',
);
export const SpeakerGroupIcon = (props?: KTRawAttr) => {
  const s = _SpeakerGroupIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerGroupIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8M14 3c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2m0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4',
      },
      '0',
    ),
    svg('circle', { cx: '14', cy: '12.5', r: '2.5' }, '1'),
    svg('path', { d: 'M6 5H4v16c0 1.1.89 2 2 2h10v-2H6z' }, '2'),
  ],
  'SpeakerGroup',
);
export const SpeakerGroupOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SpeakerGroupOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerGroupOutlinedIcon = svg(
  svg('path', {
    d: 'M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8M18 17l-8-.01V3h8zm-4-9c1.1 0 2-.89 2-2s-.9-2-2-2-2 .89-2 2 .9 2 2 2m0 8c1.93 0 3.5-1.57 3.5-3.5S15.93 9 14 9s-3.5 1.57-3.5 3.5S12.07 16 14 16m0-5c.83 0 1.5.67 1.5 1.5S14.83 14 14 14s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M6 5H4v16c0 1.1.89 2 2 2h10v-2H6z',
  }),
  'SpeakerGroupOutlined',
);
export const SpeakerGroupRoundedIcon = (props?: KTRawAttr) => {
  const s = _SpeakerGroupRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerGroupRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8M14 3c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2m0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4',
      },
      '0',
    ),
    svg('circle', { cx: '14', cy: '12.5', r: '2.5' }, '1'),
    svg(
      'path',
      {
        d: 'M5 5c-.55 0-1 .45-1 1v15c0 1.1.89 2 2 2h9c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1',
      },
      '2',
    ),
  ],
  'SpeakerGroupRounded',
);
export const SpeakerGroupSharpIcon = (props?: KTRawAttr) => {
  const s = _SpeakerGroupSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerGroupSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20 1H8v17.99h12zm-6 2c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2m0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4',
      },
      '0',
    ),
    svg('circle', { cx: '14', cy: '12.5', r: '2.5' }, '1'),
    svg('path', { d: 'M6 5H4v18h12v-2H6z' }, '2'),
  ],
  'SpeakerGroupSharp',
);
export const SpeakerGroupTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SpeakerGroupTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerGroupTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm10 16.99 8 .01V3h-8zM14 4c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2m0 5c1.93 0 3.5 1.57 3.5 3.5S15.93 16 14 16s-3.5-1.57-3.5-3.5S12.07 9 14 9',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 .99.81 1.79 1.8 1.79l8.4.01c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8M18 17l-8-.01V3h8zm-4-9c1.1 0 2-.89 2-2s-.9-2-2-2-2 .89-2 2 .9 2 2 2m0 8c1.93 0 3.5-1.57 3.5-3.5S15.93 9 14 9s-3.5 1.57-3.5 3.5S12.07 16 14 16m0-5c.83 0 1.5.67 1.5 1.5S14.83 14 14 14s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M6 5H4v16c0 1.1.89 2 2 2h10v-2H6z',
      },
      '1',
    ),
  ],
  'SpeakerGroupTwoTone',
);
export const SpeakerNotesIcon = (props?: KTRawAttr) => {
  const s = _SpeakerNotesIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerNotesIcon = svg(
  svg('path', {
    d: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 14H6v-2h2zm0-3H6V9h2zm0-3H6V6h2zm7 6h-5v-2h5zm3-3h-8V9h8zm0-3h-8V6h8z',
  }),
  'SpeakerNotes',
);
export const SpeakerNotesOffIcon = (props?: KTRawAttr) => {
  const s = _SpeakerNotesOffIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerNotesOffIcon = svg(
  svg('path', {
    d: 'm10.54 11-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18zM8 14H6v-2h2zm-2-3V9l2 2zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2',
  }),
  'SpeakerNotesOff',
);
export const SpeakerNotesOffOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SpeakerNotesOffOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerNotesOffOutlinedIcon = svg(
  svg('path', {
    d: 'M20 4v12h-1.34l1.91 1.91C21.39 17.66 22 16.9 22 16V4c0-1.1-.9-2-2-2H4.66l2 2zM6 12h2v2H6zm12-3h-6.34l2 2H18zm0-3h-8v1.34l.66.66H18zM1.41 1.59 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73 1.41-1.41zM5.17 16 4 17.17V7l2 2v2h2l5 5z',
  }),
  'SpeakerNotesOffOutlined',
);
export const SpeakerNotesOffRoundedIcon = (props?: KTRawAttr) => {
  const s = _SpeakerNotesOffRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerNotesOffRoundedIcon = svg(
  svg('path', {
    d: 'M1.91 2.36c-.35-.35-.92-.35-1.27 0s-.35.92 0 1.27l1.38 1.38L2 22l4-4h9l5.09 5.09c.35.35.92.35 1.27 0s.35-.92 0-1.27zM7 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m13-9H4.08l7 7H17c.55 0 1 .45 1 1s-.45 1-1 1h-3.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2m-3 6h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1',
  }),
  'SpeakerNotesOffRounded',
);
export const SpeakerNotesOffSharpIcon = (props?: KTRawAttr) => {
  const s = _SpeakerNotesOffSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerNotesOffSharpIcon = svg(
  svg('path', {
    d: 'M1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46zM8 14H6v-2h2zm-2-3V9l2 2zm16-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99H22z',
  }),
  'SpeakerNotesOffSharp',
);
export const SpeakerNotesOffTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SpeakerNotesOffTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerNotesOffTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M6 11V9L4 7v10.17L5.17 16H13l-5-5zm2 3H6v-2h2zM20 4H6.66L10 7.34V6h8v2h-7.34l1 1H18v2h-4.34l5 5H20z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 4v12h-1.34l1.91 1.91C21.39 17.66 22 16.9 22 16V4c0-1.1-.9-2-2-2H4.66l2 2zM6 12h2v2H6zm12-1V9h-6.34l2 2zm0-3V6h-8v1.34l.66.66zM1.41 1.59 0 3l2 2.01V22l4-4h9l5.73 5.73 1.41-1.41zM5.17 16 4 17.17V7l2 2v2h2l5 5z',
      },
      '1',
    ),
  ],
  'SpeakerNotesOffTwoTone',
);
export const SpeakerNotesOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SpeakerNotesOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerNotesOutlinedIcon = svg(
  svg('path', {
    d: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17l-.59.59-.58.58V4h16zM6 12h2v2H6zm0-3h2v2H6zm0-3h2v2H6zm4 6h5v2h-5zm0-3h8v2h-8zm0-3h8v2h-8z',
  }),
  'SpeakerNotesOutlined',
);
export const SpeakerNotesRoundedIcon = (props?: KTRawAttr) => {
  const s = _SpeakerNotesRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerNotesRoundedIcon = svg(
  svg('path', {
    d: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 14H6v-2h2zm0-3H6V9h2zm0-3H6V6h2zm6 6h-3c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1m3-3h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1m0-3h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1',
  }),
  'SpeakerNotesRounded',
);
export const SpeakerNotesSharpIcon = (props?: KTRawAttr) => {
  const s = _SpeakerNotesSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerNotesSharpIcon = svg(
  svg('path', { d: 'M22 2H2.01L2 22l4-4h16zM8 14H6v-2h2zm0-3H6V9h2zm0-3H6V6h2zm7 6h-5v-2h5zm3-3h-8V9h8zm0-3h-8V6h8z' }),
  'SpeakerNotesSharp',
);
export const SpeakerNotesTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SpeakerNotesTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerNotesTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm4 17.17.59-.59.58-.58H20V4H4zM10 6h8v2h-8zm0 3h8v2h-8zm0 3h5v2h-5zM6 6h2v2H6zm0 3h2v2H6zm0 3h2v2H6z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17l-.59.59-.58.58V4h16zM6 12h2v2H6zm0-3h2v2H6zm0-3h2v2H6zm4 6h5v2h-5zm0-3h8v2h-8zm0-3h8v2h-8z',
      },
      '1',
    ),
  ],
  'SpeakerNotesTwoTone',
);
export const SpeakerOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SpeakerOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerOutlinedIcon = svg(
  svg('path', {
    d: 'M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M7 20V4h10v16zm5-11c1.1 0 2-.9 2-2s-.9-2-2-2c-1.11 0-2 .9-2 2s.89 2 2 2m0 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
  }),
  'SpeakerOutlined',
);
export const SpeakerPhoneIcon = (props?: KTRawAttr) => {
  const s = _SpeakerPhoneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerPhoneIcon = svg(
  svg('path', {
    d: 'M7 7.07 8.43 8.5c.91-.91 2.18-1.48 3.57-1.48s2.66.57 3.57 1.48L17 7.07C15.72 5.79 13.95 5 12 5s-3.72.79-5 2.07M12 1C8.98 1 6.24 2.23 4.25 4.21l1.41 1.41C7.28 4 9.53 3 12 3s4.72 1 6.34 2.62l1.41-1.41C17.76 2.23 15.02 1 12 1m2.86 9.01L9.14 10C8.51 10 8 10.51 8 11.14v9.71c0 .63.51 1.14 1.14 1.14h5.71c.63 0 1.14-.51 1.14-1.14v-9.71c.01-.63-.5-1.13-1.13-1.13M15 20H9v-8h6z',
  }),
  'SpeakerPhone',
);
export const SpeakerPhoneOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SpeakerPhoneOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerPhoneOutlinedIcon = svg(
  svg('path', {
    d: 'M7 7.07 8.43 8.5c.91-.91 2.18-1.48 3.57-1.48s2.66.57 3.57 1.48L17 7.07C15.72 5.79 13.95 5 12 5s-3.72.79-5 2.07M12 1C8.98 1 6.24 2.23 4.25 4.21l1.41 1.41C7.28 4 9.53 3 12 3s4.72 1 6.34 2.62l1.41-1.41C17.76 2.23 15.02 1 12 1m2.86 9.01L9.14 10C8.51 10 8 10.51 8 11.14v9.71c0 .63.51 1.14 1.14 1.14h5.71c.63 0 1.14-.51 1.14-1.14v-9.71c.01-.63-.5-1.13-1.13-1.13M15 20H9v-8h6z',
  }),
  'SpeakerPhoneOutlined',
);
export const SpeakerPhoneRoundedIcon = (props?: KTRawAttr) => {
  const s = _SpeakerPhoneRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerPhoneRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm7.76 7.83.02.02c.35.35.89.38 1.3.09.83-.57 1.84-.92 2.92-.92s2.09.35 2.92.93c.4.29.95.26 1.3-.09l.02-.02c.42-.42.39-1.14-.09-1.49C14.98 5.5 13.55 5 12 5s-2.98.5-4.14 1.34c-.49.35-.52 1.07-.1 1.49',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 1c-2.62 0-5.03.93-6.92 2.47-.46.37-.51 1.06-.08 1.49.36.36.93.39 1.32.07C7.86 3.76 9.85 3 12 3s4.14.76 5.69 2.03c.39.32.96.29 1.32-.07.42-.42.38-1.11-.08-1.49C17.03 1.93 14.62 1 12 1m3 9H9c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h5.99c.55 0 1-.45 1-1L16 11c0-.55-.45-1-1-1m0 10H9v-8h6z',
      },
      '1',
    ),
  ],
  'SpeakerPhoneRounded',
);
export const SpeakerPhoneSharpIcon = (props?: KTRawAttr) => {
  const s = _SpeakerPhoneSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerPhoneSharpIcon = svg(
  svg('path', {
    d: 'M7 7.07 8.43 8.5c.91-.91 2.18-1.48 3.57-1.48s2.66.57 3.57 1.48L17 7.07C15.72 5.79 13.95 5 12 5s-3.72.79-5 2.07M12 1C8.98 1 6.24 2.23 4.25 4.21l1.41 1.41C7.28 4 9.53 3 12 3s4.72 1 6.34 2.62l1.41-1.41C17.76 2.23 15.02 1 12 1m3.99 9.01L8 10v11.99h7.99zM15 20H9v-8h6z',
  }),
  'SpeakerPhoneSharp',
);
export const SpeakerPhoneTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SpeakerPhoneTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerPhoneTwoToneIcon = svg(
  [
    svg('path', { d: 'M9 12h6v8H9z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M12 1C8.98 1 6.24 2.23 4.25 4.21l1.41 1.41C7.28 4 9.53 3 12 3s4.72 1 6.34 2.62l1.41-1.41C17.76 2.23 15.02 1 12 1M7 7.07 8.43 8.5c.91-.91 2.18-1.48 3.57-1.48s2.66.57 3.57 1.48L17 7.07C15.72 5.79 13.95 5 12 5s-3.72.79-5 2.07m7.86 2.94L9.14 10C8.51 10 8 10.51 8 11.14v9.71c0 .63.51 1.14 1.14 1.14h5.71c.63 0 1.14-.51 1.14-1.14v-9.71c.01-.63-.5-1.13-1.13-1.13M15 20H9v-8h6z',
      },
      '1',
    ),
  ],
  'SpeakerPhoneTwoTone',
);
export const SpeakerRoundedIcon = (props?: KTRawAttr) => {
  const s = _SpeakerRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerRoundedIcon = svg(
  svg('path', {
    d: 'M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-5 2c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2m0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3',
  }),
  'SpeakerRounded',
);
export const SpeakerSharpIcon = (props?: KTRawAttr) => {
  const s = _SpeakerSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerSharpIcon = svg(
  svg('path', {
    d: 'M19 2H5v19.99h14zm-7 2c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2m0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3',
  }),
  'SpeakerSharp',
);
export const SpeakerTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SpeakerTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeakerTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M7 4v16h10V4zm5 1c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2m0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M7 20V4h10v16zm5-11c1.1 0 2-.9 2-2s-.9-2-2-2c-1.11 0-2 .9-2 2s.89 2 2 2m0 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
      },
      '1',
    ),
  ],
  'SpeakerTwoTone',
);
export const SpeedIcon = (props?: KTRawAttr) => {
  const s = _SpeedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeedIcon = svg(
  svg('path', {
    d: 'm20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83',
  }),
  'Speed',
);
export const SpeedOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SpeedOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeedOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z',
      },
      '0',
    ),
    svg('path', { d: 'M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83' }, '1'),
  ],
  'SpeedOutlined',
);
export const SpeedRoundedIcon = (props?: KTRawAttr) => {
  const s = _SpeedRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeedRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19.46 10a1 1 0 0 0-.07 1 7.55 7.55 0 0 1 .52 1.81 8 8 0 0 1-.69 4.73 1 1 0 0 1-.89.53H5.68a1 1 0 0 1-.89-.54A8 8 0 0 1 13 6.06a7.69 7.69 0 0 1 2.11.56 1 1 0 0 0 1-.07 1 1 0 0 0-.17-1.76A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0 .55-8.89 1 1 0 0 0-1.75-.11',
      },
      '0',
    ),
    svg('path', { d: 'M10.59 12.59a2 2 0 0 0 2.83 2.83l5.66-8.49z' }, '1'),
  ],
  'SpeedRounded',
);
export const SpeedSharpIcon = (props?: KTRawAttr) => {
  const s = _SpeedSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeedSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm20.39 8.56-1.24 1.86a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.86-1.24A10 10 0 0 0 4 20h16a10 10 0 0 0 .38-11.44z',
      },
      '0',
    ),
    svg('path', { d: 'M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83' }, '1'),
  ],
  'SpeedSharp',
);
export const SpeedTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SpeedTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpeedTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z',
      },
      '0',
    ),
    svg('path', { d: 'M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83' }, '1'),
  ],
  'SpeedTwoTone',
);
export const SpellcheckIcon = (props?: KTRawAttr) => {
  const s = _SpellcheckIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpellcheckIcon = svg(
  svg('path', {
    d: 'M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64zm-6.02-5L8.5 5.48 10.57 11zm15.16.59-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13z',
  }),
  'Spellcheck',
);
export const SpellcheckOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SpellcheckOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpellcheckOutlinedIcon = svg(
  svg('path', {
    d: 'M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64zm-6.02-5L8.5 5.48 10.57 11zm15.16.59-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13z',
  }),
  'SpellcheckOutlined',
);
export const SpellcheckRoundedIcon = (props?: KTRawAttr) => {
  const s = _SpellcheckRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpellcheckRoundedIcon = svg(
  svg('path', {
    d: 'M13.12 16c.69 0 1.15-.69.9-1.32L9.77 3.87C9.56 3.34 9.06 3 8.5 3s-1.06.34-1.27.87L2.98 14.68c-.25.63.22 1.32.9 1.32.4 0 .76-.25.91-.63L5.67 13h5.64l.9 2.38c.15.37.51.62.91.62m-6.69-5L8.5 5.48 10.57 11zm14.46 1.29-7.39 7.39-2.97-2.97a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l3.68 3.68c.39.39 1.02.39 1.41 0l8.08-8.09c.39-.39.39-1.02 0-1.41-.38-.39-1.02-.39-1.4-.01',
  }),
  'SpellcheckRounded',
);
export const SpellcheckSharpIcon = (props?: KTRawAttr) => {
  const s = _SpellcheckSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpellcheckSharpIcon = svg(
  svg('path', {
    d: 'M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64zm-6.02-5L8.5 5.48 10.57 11zm15.16.59-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13z',
  }),
  'SpellcheckSharp',
);
export const SpellcheckTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SpellcheckTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpellcheckTwoToneIcon = svg(
  svg('path', {
    d: 'M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64zm-6.02-5L8.5 5.48 10.57 11zm15.16.59-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13z',
  }),
  'SpellcheckTwoTone',
);
export const SplitscreenIcon = (props?: KTRawAttr) => {
  const s = _SplitscreenIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SplitscreenIcon = svg(
  svg('path', {
    d: 'M18 4v5H6V4zm0-2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 13v5H6v-5zm0-2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2',
  }),
  'Splitscreen',
);
export const SplitscreenOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SplitscreenOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SplitscreenOutlinedIcon = svg(
  svg('path', {
    d: 'M18 4v5H6V4zm0-2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 13v5H6v-5zm0-2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2',
  }),
  'SplitscreenOutlined',
);
export const SplitscreenRoundedIcon = (props?: KTRawAttr) => {
  const s = _SplitscreenRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SplitscreenRoundedIcon = svg(
  svg('path', {
    d: 'M18 4v5H6V4zm0-2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 13v5H6v-5zm0-2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2',
  }),
  'SplitscreenRounded',
);
export const SplitscreenSharpIcon = (props?: KTRawAttr) => {
  const s = _SplitscreenSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SplitscreenSharpIcon = svg(
  svg('path', { d: 'M18 4v5H6V4zm2-2H4v9h16zm-2 13v5H6v-5zm2-2H4v9h16z' }),
  'SplitscreenSharp',
);
export const SplitscreenTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SplitscreenTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SplitscreenTwoToneIcon = svg(
  [
    svg('path', { d: 'M6 4h12v5H6zm0 11h12v5H6z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M18 2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 7H6V4h12zm0 4H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2m0 7H6v-5h12z',
      },
      '1',
    ),
  ],
  'SplitscreenTwoTone',
);
export const SpokeIcon = (props?: KTRawAttr) => {
  const s = _SpokeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpokeIcon = svg(
  svg('path', {
    d: 'M16 7c0 2.21-1.79 4-4 4S8 9.21 8 7s1.79-4 4-4 4 1.79 4 4m-9 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m10 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4',
  }),
  'Spoke',
);
export const SpokeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SpokeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpokeOutlinedIcon = svg(
  svg('path', {
    d: 'M16 7c0-2.21-1.79-4-4-4S8 4.79 8 7s1.79 4 4 4 4-1.79 4-4m-4 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m-5 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m10-6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
  }),
  'SpokeOutlined',
);
export const SpokeRoundedIcon = (props?: KTRawAttr) => {
  const s = _SpokeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpokeRoundedIcon = svg(
  svg('path', {
    d: 'M16 7c0 2.21-1.79 4-4 4S8 9.21 8 7s1.79-4 4-4 4 1.79 4 4m-9 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m10 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4',
  }),
  'SpokeRounded',
);
export const SpokeSharpIcon = (props?: KTRawAttr) => {
  const s = _SpokeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpokeSharpIcon = svg(
  svg('path', {
    d: 'M16 7c0 2.21-1.79 4-4 4S8 9.21 8 7s1.79-4 4-4 4 1.79 4 4m-9 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m10 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4',
  }),
  'SpokeSharp',
);
export const SpokeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SpokeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SpokeTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m10 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M16 7c0-2.21-1.79-4-4-4S8 4.79 8 7s1.79 4 4 4 4-1.79 4-4m-4 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m-5 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m10-6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2',
      },
      '1',
    ),
  ],
  'SpokeTwoTone',
);
export const SportsIcon = (props?: KTRawAttr) => {
  const s = _SportsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M11.23 6c-1.66 0-3.22.66-4.36 1.73C6.54 6.73 5.61 6 4.5 6 3.12 6 2 7.12 2 8.5S3.12 11 4.5 11c.21 0 .41-.03.61-.08-.05.25-.09.51-.1.78-.18 3.68 2.95 6.68 6.68 6.27 2.55-.28 4.68-2.26 5.19-4.77.15-.71.15-1.4.06-2.06-.09-.6.38-1.13.99-1.13H22V6zM4.5 9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5m6.5 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3',
      },
      '0',
    ),
    svg('circle', { cx: '11', cy: '12', r: '2' }, '1'),
  ],
  'Sports',
);
export const SportsBarIcon = (props?: KTRawAttr) => {
  const s = _SportsBarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsBarIcon = svg(
  svg('path', {
    d: 'M19 9h-1.56c.35-.59.56-1.27.56-2 0-2.21-1.79-4-4-4-.34 0-.66.05-.98.13-.82-.68-1.86-1.11-3.02-1.11-1.89 0-3.51 1.11-4.27 2.71C4.15 5.26 3 6.74 3 8.5c0 1.86 1.28 3.41 3 3.86V21h11v-2h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2M7 10.5c-1.1 0-2-.9-2-2 0-.85.55-1.6 1.37-1.88l.8-.27.36-.76C8 4.62 8.94 4.02 10 4.02c.79 0 1.39.35 1.74.65l.78.65S13.16 5 13.99 5c1.1 0 2 .9 2 2h-3C9.67 7 9.15 10.5 7 10.5M19 17h-2v-6h2z',
  }),
  'SportsBar',
);
export const SportsBarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsBarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsBarOutlinedIcon = svg(
  svg('path', {
    d: 'M15 19H8v-6.63c1.26-.34 2.11-1.27 2.77-1.99C11.6 9.47 12.08 9 13 9h2zM10 2.02c-1.89 0-3.51 1.11-4.27 2.71C4.15 5.26 3 6.74 3 8.5c0 1.86 1.28 3.41 3 3.86V21h11v-2h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-1.56c.35-.59.56-1.27.56-2 0-2.21-1.79-4-4-4-.34 0-.66.05-.98.13-.82-.68-1.86-1.11-3.02-1.11M7 10.5c-1.1 0-2-.9-2-2 0-.85.55-1.6 1.37-1.88l.8-.27.36-.76C8 4.62 8.94 4.02 10 4.02c.79 0 1.39.35 1.74.65l.78.65S13.16 5 13.99 5c1.1 0 2 .9 2 2h-3C9.67 7 9.15 10.5 7 10.5M17 17v-6h2v6z',
  }),
  'SportsBarOutlined',
);
export const SportsBarRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsBarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsBarRoundedIcon = svg(
  svg('path', {
    d: 'M19 9h-1.56c.33-.55.53-1.18.55-1.86.04-1.03-.43-1.99-1.16-2.71-1.54-1.54-2.74-1.56-3.82-1.29-.81-.69-1.85-1.12-3.01-1.12-1.89 0-3.51 1.11-4.27 2.71C4.15 5.26 3 6.74 3 8.5c0 1.86 1.28 3.41 3 3.86V19c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2M7 10.5c-1.1 0-2-.9-2-2 0-.85.55-1.6 1.37-1.88l.8-.27.36-.76C8 4.62 8.94 4.02 10 4.02c.79 0 1.39.35 1.74.65l.78.65S13.16 5 13.99 5c1.1 0 2 .9 2 2h-3C9.67 7 9.15 10.5 7 10.5M19 17h-2v-6h2z',
  }),
  'SportsBarRounded',
);
export const SportsBarSharpIcon = (props?: KTRawAttr) => {
  const s = _SportsBarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsBarSharpIcon = svg(
  svg('path', {
    d: 'M21 9h-3.56c.35-.59.56-1.27.56-2 0-2.21-1.79-4-4-4-.34 0-.66.05-.98.13-.82-.68-1.86-1.11-3.02-1.11-1.89 0-3.51 1.11-4.27 2.71C4.15 5.26 3 6.74 3 8.5c0 1.86 1.28 3.41 3 3.86V21h11v-2h4zM7 10.5c-1.1 0-2-.9-2-2 0-.85.55-1.6 1.37-1.88l.8-.27.36-.76C8 4.62 8.94 4.02 10 4.02c.79 0 1.39.35 1.74.65l.78.65S13.16 5 13.99 5c1.1 0 2 .9 2 2h-3C9.67 7 9.15 10.5 7 10.5M19 17h-2v-6h2z',
  }),
  'SportsBarSharp',
);
export const SportsBarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsBarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsBarTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M15 19H8v-6.63c1.26-.34 2.11-1.27 2.77-1.99C11.6 9.47 12.08 9 13 9h2zm-8-8.5c-1.1 0-2-.9-2-2 0-.85.55-1.6 1.37-1.88l.8-.27.36-.76C8 4.62 8.94 4.02 10 4.02c.79 0 1.39.35 1.74.65l.78.65S13.16 5 13.99 5c1.1 0 2 .9 2 2h-3C9.67 7 9.15 10.5 7 10.5',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M15 19H8v-6.63c1.26-.34 2.11-1.27 2.77-1.99C11.6 9.47 12.08 9 13 9h2zM10 2.02c-1.89 0-3.51 1.11-4.27 2.71C4.15 5.26 3 6.74 3 8.5c0 1.86 1.28 3.41 3 3.86V21h11v-2h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-1.56c.35-.59.56-1.27.56-2 0-2.21-1.79-4-4-4-.34 0-.66.05-.98.13-.82-.68-1.86-1.11-3.02-1.11M7 10.5c-1.1 0-2-.9-2-2 0-.85.55-1.6 1.37-1.88l.8-.27.36-.76C8 4.62 8.94 4.02 10 4.02c.79 0 1.39.35 1.74.65l.78.65S13.16 5 13.99 5c1.1 0 2 .9 2 2h-3C9.67 7 9.15 10.5 7 10.5M17 17v-6h2v6z',
      },
      '1',
    ),
  ],
  'SportsBarTwoTone',
);
export const SportsBaseballIcon = (props?: KTRawAttr) => {
  const s = _SportsBaseballIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsBaseballIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M3.81 6.28C2.67 7.9 2 9.87 2 12s.67 4.1 1.81 5.72C6.23 16.95 8 14.68 8 12S6.23 7.05 3.81 6.28m16.38 0C17.77 7.05 16 9.32 16 12s1.77 4.95 4.19 5.72C21.33 16.1 22 14.13 22 12s-.67-4.1-1.81-5.72',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M14 12c0-3.28 1.97-6.09 4.79-7.33C17.01 3.02 14.63 2 12 2S6.99 3.02 5.21 4.67C8.03 5.91 10 8.72 10 12s-1.97 6.09-4.79 7.33C6.99 20.98 9.37 22 12 22s5.01-1.02 6.79-2.67C15.97 18.09 14 15.28 14 12',
      },
      '1',
    ),
  ],
  'SportsBaseball',
);
export const SportsBaseballOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsBaseballOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsBaseballOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M5.61 16.78C4.6 15.45 4 13.8 4 12s.6-3.45 1.61-4.78C7.06 8.31 8 10.05 8 12s-.94 3.69-2.39 4.78M12 20c-1.89 0-3.63-.66-5-1.76 1.83-1.47 3-3.71 3-6.24S8.83 7.23 7 5.76C8.37 4.66 10.11 4 12 4s3.63.66 5 1.76c-1.83 1.47-3 3.71-3 6.24s1.17 4.77 3 6.24c-1.37 1.1-3.11 1.76-5 1.76m6.39-3.22C16.94 15.69 16 13.95 16 12s.94-3.69 2.39-4.78C19.4 8.55 20 10.2 20 12s-.6 3.45-1.61 4.78',
  }),
  'SportsBaseballOutlined',
);
export const SportsBaseballRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsBaseballRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsBaseballRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M3.81 6.28C2.67 7.9 2 9.87 2 12s.67 4.1 1.81 5.72C6.23 16.95 8 14.68 8 12S6.23 7.05 3.81 6.28m16.38 0C17.77 7.05 16 9.32 16 12s1.77 4.95 4.19 5.72C21.33 16.1 22 14.13 22 12s-.67-4.1-1.81-5.72',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M14 12c0-3.28 1.97-6.09 4.79-7.33C17.01 3.02 14.63 2 12 2S6.99 3.02 5.21 4.67C8.03 5.91 10 8.72 10 12s-1.97 6.09-4.79 7.33C6.99 20.98 9.37 22 12 22s5.01-1.02 6.79-2.67C15.97 18.09 14 15.28 14 12',
      },
      '1',
    ),
  ],
  'SportsBaseballRounded',
);
export const SportsBaseballSharpIcon = (props?: KTRawAttr) => {
  const s = _SportsBaseballSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsBaseballSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M3.81 6.28C2.67 7.9 2 9.87 2 12s.67 4.1 1.81 5.72C6.23 16.95 8 14.68 8 12S6.23 7.05 3.81 6.28m16.38 0C17.77 7.05 16 9.32 16 12s1.77 4.95 4.19 5.72C21.33 16.1 22 14.13 22 12s-.67-4.1-1.81-5.72',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M14 12c0-3.28 1.97-6.09 4.79-7.33C17.01 3.02 14.63 2 12 2S6.99 3.02 5.21 4.67C8.03 5.91 10 8.72 10 12s-1.97 6.09-4.79 7.33C6.99 20.98 9.37 22 12 22s5.01-1.02 6.79-2.67C15.97 18.09 14 15.28 14 12',
      },
      '1',
    ),
  ],
  'SportsBaseballSharp',
);
export const SportsBaseballTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsBaseballTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsBaseballTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5.61 7.22C4.6 8.55 4 10.2 4 12s.6 3.45 1.61 4.78C7.06 15.69 8 13.95 8 12s-.94-3.69-2.39-4.78',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M14 12c0-2.52 1.17-4.77 3-6.24C15.63 4.66 13.89 4 12 4s-3.63.66-5 1.76c1.83 1.47 3 3.71 3 6.24s-1.17 4.77-3 6.24c1.37 1.1 3.11 1.76 5 1.76s3.63-.66 5-1.76c-1.83-1.47-3-3.72-3-6.24',
        opacity: '.3',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M18.39 7.22C16.94 8.31 16 10.05 16 12s.94 3.69 2.39 4.78C19.4 15.45 20 13.8 20 12s-.6-3.45-1.61-4.78',
        opacity: '.3',
      },
      '2',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M5.61 16.78C4.6 15.45 4 13.8 4 12s.6-3.45 1.61-4.78C7.06 8.31 8 10.05 8 12s-.94 3.69-2.39 4.78M12 20c-1.89 0-3.63-.66-5-1.76 1.83-1.47 3-3.71 3-6.24S8.83 7.23 7 5.76C8.37 4.66 10.11 4 12 4s3.63.66 5 1.76c-1.83 1.47-3 3.71-3 6.24s1.17 4.77 3 6.24c-1.37 1.1-3.11 1.76-5 1.76m6.39-3.22C16.94 15.69 16 13.95 16 12s.94-3.69 2.39-4.78C19.4 8.55 20 10.2 20 12s-.6 3.45-1.61 4.78',
      },
      '3',
    ),
  ],
  'SportsBaseballTwoTone',
);
export const SportsBasketballIcon = (props?: KTRawAttr) => {
  const s = _SportsBasketballIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsBasketballIcon = svg(
  svg('path', {
    d: 'M17.09 11h4.86c-.16-1.61-.71-3.11-1.54-4.4-1.73.83-2.99 2.45-3.32 4.4M6.91 11c-.33-1.95-1.59-3.57-3.32-4.4-.83 1.29-1.38 2.79-1.54 4.4zm8.16 0c.32-2.59 1.88-4.79 4.06-6-1.6-1.63-3.74-2.71-6.13-2.95V11zm-6.14 0H11V2.05C8.61 2.29 6.46 3.37 4.87 5c2.18 1.21 3.74 3.41 4.06 6m6.14 2H13v8.95c2.39-.24 4.54-1.32 6.13-2.95-2.18-1.21-3.74-3.41-4.06-6M3.59 17.4c1.72-.83 2.99-2.46 3.32-4.4H2.05c.16 1.61.71 3.11 1.54 4.4m13.5-4.4c.33 1.95 1.59 3.57 3.32 4.4.83-1.29 1.38-2.79 1.54-4.4zm-8.16 0c-.32 2.59-1.88 4.79-4.06 6 1.6 1.63 3.74 2.71 6.13 2.95V13z',
  }),
  'SportsBasketball',
);
export const SportsBasketballOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsBasketballOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsBasketballOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M5.23 7.75C6.1 8.62 6.7 9.74 6.91 11H4.07c.15-1.18.56-2.28 1.16-3.25M4.07 13h2.84c-.21 1.26-.81 2.38-1.68 3.25-.6-.97-1.01-2.07-1.16-3.25M11 19.93c-1.73-.22-3.29-1-4.49-2.14 1.3-1.24 2.19-2.91 2.42-4.79H11zM11 11H8.93C8.69 9.12 7.81 7.44 6.5 6.2 7.71 5.06 9.27 4.29 11 4.07zm8.93 0h-2.84c.21-1.26.81-2.38 1.68-3.25.6.97 1.01 2.07 1.16 3.25M13 4.07c1.73.22 3.29.99 4.5 2.13-1.31 1.24-2.19 2.92-2.43 4.8H13zm0 15.86V13h2.07c.24 1.88 1.12 3.55 2.42 4.79-1.2 1.14-2.76 1.92-4.49 2.14m5.77-3.68c-.87-.86-1.46-1.99-1.68-3.25h2.84c-.15 1.18-.56 2.28-1.16 3.25',
  }),
  'SportsBasketballOutlined',
);
export const SportsBasketballRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsBasketballRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsBasketballRoundedIcon = svg(
  svg('path', {
    d: 'M17.09 11h4.86c-.16-1.61-.71-3.11-1.54-4.4-1.73.83-2.99 2.45-3.32 4.4M6.91 11c-.33-1.95-1.59-3.57-3.32-4.4-.83 1.29-1.38 2.79-1.54 4.4zm8.16 0c.32-2.59 1.88-4.79 4.06-6-1.6-1.63-3.74-2.71-6.13-2.95V11zm-6.14 0H11V2.05C8.61 2.29 6.46 3.37 4.87 5c2.18 1.21 3.74 3.41 4.06 6m6.14 2H13v8.95c2.39-.24 4.54-1.32 6.13-2.95-2.18-1.21-3.74-3.41-4.06-6M3.59 17.4c1.72-.83 2.99-2.46 3.32-4.4H2.05c.16 1.61.71 3.11 1.54 4.4m13.5-4.4c.33 1.95 1.59 3.57 3.32 4.4.83-1.29 1.38-2.79 1.54-4.4zm-8.16 0c-.32 2.59-1.88 4.79-4.06 6 1.6 1.63 3.74 2.71 6.13 2.95V13z',
  }),
  'SportsBasketballRounded',
);
export const SportsBasketballSharpIcon = (props?: KTRawAttr) => {
  const s = _SportsBasketballSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsBasketballSharpIcon = svg(
  svg('path', {
    d: 'M17.09 11h4.86c-.16-1.61-.71-3.11-1.54-4.4-1.73.83-2.99 2.45-3.32 4.4M6.91 11c-.33-1.95-1.59-3.57-3.32-4.4-.83 1.29-1.38 2.79-1.54 4.4zm8.16 0c.32-2.59 1.88-4.79 4.06-6-1.6-1.63-3.74-2.71-6.13-2.95V11zm-6.14 0H11V2.05C8.61 2.29 6.46 3.37 4.87 5c2.18 1.21 3.74 3.41 4.06 6m6.14 2H13v8.95c2.39-.24 4.54-1.32 6.13-2.95-2.18-1.21-3.74-3.41-4.06-6M3.59 17.4c1.72-.83 2.99-2.46 3.32-4.4H2.05c.16 1.61.71 3.11 1.54 4.4m13.5-4.4c.33 1.95 1.59 3.57 3.32 4.4.83-1.29 1.38-2.79 1.54-4.4zm-8.16 0c-.32 2.59-1.88 4.79-4.06 6 1.6 1.63 3.74 2.71 6.13 2.95V13z',
  }),
  'SportsBasketballSharp',
);
export const SportsBasketballTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsBasketballTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsBasketballTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M8.93 11H11V4.07c-1.73.22-3.29.99-4.5 2.13C7.81 7.44 8.69 9.12 8.93 11m11 0c-.15-1.18-.56-2.28-1.16-3.25-.87.87-1.47 1.99-1.68 3.25zM5.23 7.75c-.6.97-1.01 2.07-1.16 3.25h2.84C6.7 9.74 6.1 8.62 5.23 7.75M4.07 13c.15 1.18.56 2.28 1.16 3.25.87-.87 1.47-1.99 1.68-3.25zm2.44 4.79c1.2 1.14 2.76 1.92 4.49 2.14V13H8.93c-.23 1.88-1.12 3.55-2.42 4.79M17.5 6.2c-1.21-1.14-2.77-1.92-4.5-2.13V11h2.07c.24-1.88 1.12-3.56 2.43-4.8m1.27 10.05c.61-.96 1.02-2.07 1.16-3.25h-2.84c.21 1.26.81 2.38 1.68 3.25M13 13v6.93c1.73-.22 3.29-1 4.49-2.14-1.3-1.24-2.19-2.91-2.42-4.79z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M5.23 7.75C6.1 8.62 6.7 9.74 6.91 11H4.07c.15-1.18.56-2.28 1.16-3.25M4.07 13h2.84c-.21 1.26-.81 2.38-1.68 3.25-.6-.97-1.01-2.07-1.16-3.25M11 19.93c-1.73-.22-3.29-1-4.49-2.14 1.3-1.24 2.19-2.91 2.42-4.79H11zM11 11H8.93C8.69 9.12 7.81 7.44 6.5 6.2 7.71 5.06 9.27 4.29 11 4.07zm8.93 0h-2.84c.21-1.26.81-2.38 1.68-3.25.6.97 1.01 2.07 1.16 3.25M13 4.07c1.73.22 3.29.99 4.5 2.13-1.31 1.24-2.19 2.92-2.43 4.8H13zm0 15.86V13h2.07c.24 1.88 1.12 3.55 2.42 4.79-1.2 1.14-2.76 1.92-4.49 2.14m5.77-3.68c-.87-.86-1.46-1.99-1.68-3.25h2.84c-.15 1.18-.56 2.28-1.16 3.25',
      },
      '1',
    ),
  ],
  'SportsBasketballTwoTone',
);
export const SportsCricketIcon = (props?: KTRawAttr) => {
  const s = _SportsCricketIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsCricketIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M15.05 12.81 6.56 4.32a.996.996 0 0 0-1.41 0L2.32 7.15c-.39.39-.39 1.02 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83c.39-.39.39-1.02 0-1.41m-.7088 4.9462 1.4142-1.4142 4.2426 4.2426-1.4142 1.4142z',
      },
      '0',
    ),
    svg('circle', { cx: '18.5', cy: '5.5', r: '3.5' }, '1'),
  ],
  'SportsCricket',
);
export const SportsCricketOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsCricketOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsCricketOutlinedIcon = svg(
  svg('path', {
    d: 'm15.04 12.79-8.5-8.5C6.35 4.1 6.09 4 5.83 4s-.51.1-.7.29L2.29 7.13c-.39.39-.39 1.03 0 1.42l8.5 8.5c.2.2.45.29.71.29s.51-.1.71-.29l2.83-2.83c.39-.4.39-1.04 0-1.43m-3.54 2.13L4.41 7.83l1.42-1.42 7.09 7.09zm2.8412 2.8362 1.4142-1.4142 4.2426 4.2426-1.4142 1.4142zM18.5 2C16.57 2 15 3.57 15 5.5S16.57 9 18.5 9 22 7.43 22 5.5 20.43 2 18.5 2m0 5c-.83 0-1.5-.67-1.5-1.5S17.67 4 18.5 4s1.5.67 1.5 1.5S19.33 7 18.5 7',
  }),
  'SportsCricketOutlined',
);
export const SportsCricketRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsCricketRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsCricketRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M15.05 12.81 6.56 4.32a.996.996 0 0 0-1.41 0L2.32 7.15c-.39.39-.39 1.02 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83c.39-.39.39-1.02 0-1.41m-.71 4.95 3.53 3.53c.39.39 1.03.39 1.42 0s.39-1.03 0-1.42l-3.53-3.53z',
      },
      '0',
    ),
    svg('circle', { cx: '18.5', cy: '5.5', r: '3.5' }, '1'),
  ],
  'SportsCricketRounded',
);
export const SportsCricketSharpIcon = (props?: KTRawAttr) => {
  const s = _SportsCricketSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsCricketSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M15.05 12.81 6.56 4.32a.996.996 0 0 0-1.41 0L2.32 7.15c-.39.39-.39 1.02 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83c.39-.39.39-1.02 0-1.41m-.7088 4.9462 1.4142-1.4142 4.2426 4.2426-1.4142 1.4142z',
      },
      '0',
    ),
    svg('circle', { cx: '18.5', cy: '5.5', r: '3.5' }, '1'),
  ],
  'SportsCricketSharp',
);
export const SportsCricketTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsCricketTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsCricketTwoToneIcon = svg(
  [
    svg('path', { d: 'm4.414 7.8394 1.4213-1.4213 7.0852 7.0853-1.4213 1.4212z', opacity: '.3' }, '0'),
    svg('circle', { cx: '18.5', cy: '5.5', r: '1.5', opacity: '.3' }, '1'),
    svg(
      'path',
      {
        d: 'm15.04 12.79-8.5-8.5C6.35 4.1 6.09 4 5.83 4s-.51.1-.7.29L2.29 7.13c-.39.39-.39 1.03 0 1.42l8.5 8.5c.2.2.45.29.71.29s.51-.1.71-.29l2.83-2.83c.39-.4.39-1.04 0-1.43m-3.54 2.13L4.41 7.83l1.42-1.42 7.09 7.09zm2.8412 2.8362 1.4142-1.4142 4.2426 4.2426-1.4142 1.4142zM18.5 2C16.57 2 15 3.57 15 5.5S16.57 9 18.5 9 22 7.43 22 5.5 20.43 2 18.5 2m0 5c-.83 0-1.5-.67-1.5-1.5S17.67 4 18.5 4s1.5.67 1.5 1.5S19.33 7 18.5 7',
      },
      '2',
    ),
  ],
  'SportsCricketTwoTone',
);
export const SportsEsportsIcon = (props?: KTRawAttr) => {
  const s = _SportsEsportsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsEsportsIcon = svg(
  svg('path', {
    d: 'm21.58 16.09-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91M11 11H9v2H8v-2H6v-1h2V8h1v2h2zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'SportsEsports',
);
export const SportsEsportsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsEsportsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsEsportsOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm21.58 16.09-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91m-2.1.72c-.08.09-.21.19-.42.19-.15 0-.29-.06-.39-.16L15.83 14H8.17l-2.84 2.84c-.1.1-.24.16-.39.16-.21 0-.34-.1-.42-.19s-.16-.23-.13-.44l1.09-7.66C5.63 7.74 6.48 7 7.47 7h9.06c.99 0 1.84.74 1.98 1.72l1.09 7.66c.03.2-.05.34-.12.43',
      },
      '0',
    ),
    svg('path', { d: 'M9 8H8v2H6v1h2v2h1v-2h2v-1H9z' }, '1'),
    svg('circle', { cx: '17', cy: '12', r: '1' }, '2'),
    svg('circle', { cx: '15', cy: '9', r: '1' }, '3'),
  ],
  'SportsEsportsOutlined',
);
export const SportsEsportsRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsEsportsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsEsportsRoundedIcon = svg(
  svg('path', {
    d: 'm21.58 16.09-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91M11 11H9v2H8v-2H6v-1h2V8h1v2h2zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'SportsEsportsRounded',
);
export const SportsEsportsSharpIcon = (props?: KTRawAttr) => {
  const s = _SportsEsportsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsEsportsSharpIcon = svg(
  svg('path', {
    d: 'M20 5H4L2 19h4l3-3h6l3 3h4zm-9 6H9v2H8v-2H6v-1h2V8h1v2h2zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
  }),
  'SportsEsportsSharp',
);
export const SportsEsportsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsEsportsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsEsportsTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M16.53 7H7.47c-.99 0-1.84.74-1.98 1.72L4.4 16.37c-.03.21.05.35.13.44.07.09.2.19.41.19.15 0 .29-.06.39-.16L8.17 14h7.66l2.84 2.84c.1.1.24.16.39.16.21 0 .34-.1.42-.19s.16-.23.13-.44l-1.09-7.66c-.15-.97-1-1.71-1.99-1.71M11 11H9v2H8v-2H6v-1h2V8h1v2h2zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm21.58 16.09-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91m-2.1.72c-.08.09-.21.19-.42.19-.15 0-.29-.06-.39-.16L15.83 14H8.17l-2.84 2.84c-.1.1-.24.16-.39.16-.21 0-.34-.1-.42-.19s-.16-.23-.13-.44l1.09-7.66C5.63 7.74 6.48 7 7.47 7h9.06c.99 0 1.84.74 1.98 1.72l1.09 7.66c.03.2-.05.34-.12.43',
      },
      '1',
    ),
    svg('path', { d: 'M9 8H8v2H6v1h2v2h1v-2h2v-1H9z' }, '2'),
    svg('circle', { cx: '17', cy: '12', r: '1' }, '3'),
    svg('circle', { cx: '15', cy: '9', r: '1' }, '4'),
  ],
  'SportsEsportsTwoTone',
);
export const SportsFootballIcon = (props?: KTRawAttr) => {
  const s = _SportsFootballIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsFootballIcon = svg(
  svg('path', {
    d: 'M3.02 15.62c-.08 2.42.32 4.34.67 4.69s2.28.76 4.69.67zM13.08 3.28c-2.33.42-4.79 1.34-6.62 3.18s-2.76 4.29-3.18 6.62l7.63 7.63c2.34-.41 4.79-1.34 6.62-3.18s2.76-4.29 3.18-6.62zM9.9 15.5l-1.4-1.4 5.6-5.6 1.4 1.4zm11.08-7.12c.08-2.42-.32-4.34-.67-4.69s-2.28-.76-4.69-.67z',
  }),
  'SportsFootball',
);
export const SportsFootballOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsFootballOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsFootballOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20.31 3.69c-.32-.33-1.94-.69-4.05-.69-3.03 0-7.09.75-9.8 3.46-4.59 4.59-3.56 13.06-2.77 13.85.32.33 1.94.69 4.05.69 3.03 0 7.09-.75 9.8-3.46 4.59-4.59 3.56-13.06 2.77-13.85M7.74 19c-1.14 0-2.02-.12-2.53-.23-.18-.79-.3-2.21-.17-3.83l4.01 4.01c-.52.04-.97.05-1.31.05m8.39-2.87c-1.33 1.33-3.06 2.05-4.66 2.44l-6.04-6.04c.42-1.68 1.16-3.37 2.45-4.65 1.32-1.32 3.05-2.04 4.64-2.43l6.05 6.05c-.42 1.67-1.17 3.35-2.44 4.63m2.83-7.04-4.03-4.03c.52-.05.98-.06 1.33-.06 1.14 0 2.02.12 2.53.23.18.79.3 2.22.17 3.86',
      },
      '0',
    ),
    svg('path', { d: 'M8.4996 14.1002 14.1 8.4999l1.4 1.4-5.6002 5.6004z' }, '1'),
  ],
  'SportsFootballOutlined',
);
export const SportsFootballRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsFootballRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsFootballRoundedIcon = svg(
  svg('path', {
    d: 'M3.02 15.62c-.08 2.42.32 4.34.67 4.69s2.28.76 4.69.67zM13.08 3.28c-2.33.42-4.79 1.34-6.62 3.18s-2.76 4.29-3.18 6.62l7.63 7.63c2.34-.41 4.79-1.34 6.62-3.18s2.76-4.29 3.18-6.62zm1.72 7.32-4.2 4.2c-.39.39-1.01.39-1.4 0s-.39-1.01 0-1.4l4.2-4.2c.39-.39 1.01-.39 1.4 0s.39 1.01 0 1.4m6.18-2.22c.08-2.42-.32-4.34-.67-4.69s-2.28-.76-4.69-.67z',
  }),
  'SportsFootballRounded',
);
export const SportsFootballSharpIcon = (props?: KTRawAttr) => {
  const s = _SportsFootballSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsFootballSharpIcon = svg(
  svg('path', {
    d: 'M3.02 15.62c-.08 2.42.32 4.34.67 4.69s2.28.76 4.69.67zM13.08 3.28c-2.33.42-4.79 1.34-6.62 3.18s-2.76 4.29-3.18 6.62l7.63 7.63c2.34-.41 4.79-1.34 6.62-3.18s2.76-4.29 3.18-6.62zM9.9 15.5l-1.4-1.4 5.6-5.6 1.4 1.4zm11.08-7.12c.08-2.42-.32-4.34-.67-4.69s-2.28-.76-4.69-.67z',
  }),
  'SportsFootballSharp',
);
export const SportsFootballTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsFootballTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsFootballTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M16.26 5c-.35 0-.8.01-1.33.06l4.03 4.03c.14-1.63.01-3.07-.17-3.86-.51-.11-1.39-.23-2.53-.23M5.21 18.77c.51.11 1.39.23 2.53.23.34 0 .79-.01 1.3-.05l-4.01-4.01c-.12 1.62 0 3.04.18 3.83m2.66-10.9c-1.28 1.28-2.03 2.97-2.45 4.65l6.04 6.04c1.6-.39 3.33-1.11 4.66-2.44 1.28-1.28 2.03-2.95 2.44-4.63l-6.05-6.05c-1.59.39-3.31 1.11-4.64 2.43M15.5 9.9l-5.6 5.6-1.4-1.4 5.6-5.6z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20.31 3.69c-.32-.33-1.94-.69-4.05-.69-3.03 0-7.09.75-9.8 3.46-4.59 4.59-3.56 13.06-2.77 13.85.32.33 1.94.69 4.05.69 3.03 0 7.09-.75 9.8-3.46 4.59-4.59 3.56-13.06 2.77-13.85M7.74 19c-1.14 0-2.02-.12-2.53-.23-.18-.79-.3-2.21-.17-3.83l4.01 4.01c-.52.04-.97.05-1.31.05m8.39-2.87c-1.33 1.33-3.06 2.05-4.66 2.44l-6.04-6.04c.42-1.68 1.16-3.37 2.45-4.65 1.32-1.32 3.05-2.04 4.64-2.43l6.05 6.05c-.42 1.67-1.17 3.35-2.44 4.63m2.83-7.04-4.03-4.03c.52-.05.98-.06 1.33-.06 1.14 0 2.02.12 2.53.23.18.79.3 2.22.17 3.86',
      },
      '1',
    ),
    svg('path', { d: 'M8.4996 14.1002 14.1 8.4999l1.4 1.4-5.6002 5.6004z' }, '2'),
  ],
  'SportsFootballTwoTone',
);
export const SportsGolfIcon = (props?: KTRawAttr) => {
  const s = _SportsGolfIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsGolfIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7 3.13 7 7 7m0-12c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5',
      },
      '0',
    ),
    svg('circle', { cx: '10', cy: '8', r: '1' }, '1'),
    svg('circle', { cx: '14', cy: '8', r: '1' }, '2'),
    svg('circle', { cx: '12', cy: '6', r: '1' }, '3'),
    svg('path', { d: 'M7 19h2c1.1 0 2 .9 2 2v1h2v-1c0-1.1.9-2 2-2h2v-2H7z' }, '4'),
  ],
  'SportsGolf',
);
export const SportsGolfOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsGolfOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsGolfOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7 3.13 7 7 7m0-12c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5',
      },
      '0',
    ),
    svg('circle', { cx: '10', cy: '8', r: '1' }, '1'),
    svg('circle', { cx: '14', cy: '8', r: '1' }, '2'),
    svg('circle', { cx: '12', cy: '6', r: '1' }, '3'),
    svg('path', { d: 'M7 19h2c1.1 0 2 .9 2 2v1h2v-1c0-1.1.9-2 2-2h2v-2H7z' }, '4'),
  ],
  'SportsGolfOutlined',
);
export const SportsGolfRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsGolfRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsGolfRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7 3.13 7 7 7m0-12c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5',
      },
      '0',
    ),
    svg('circle', { cx: '10', cy: '8', r: '1' }, '1'),
    svg('circle', { cx: '14', cy: '8', r: '1' }, '2'),
    svg('circle', { cx: '12', cy: '6', r: '1' }, '3'),
    svg(
      'path',
      { d: 'M16 17H8c-.55 0-1 .45-1 1s.45 1 1 1h1c1.1 0 2 .9 2 2v1h2v-1c0-1.1.9-2 2-2h1c.55 0 1-.45 1-1s-.45-1-1-1' },
      '4',
    ),
  ],
  'SportsGolfRounded',
);
export const SportsGolfSharpIcon = (props?: KTRawAttr) => {
  const s = _SportsGolfSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsGolfSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7 3.13 7 7 7m0-12c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5',
      },
      '0',
    ),
    svg('circle', { cx: '10', cy: '8', r: '1' }, '1'),
    svg('circle', { cx: '14', cy: '8', r: '1' }, '2'),
    svg('circle', { cx: '12', cy: '6', r: '1' }, '3'),
    svg('path', { d: 'M7 19h2c1.1 0 2 .9 2 2v1h2v-1c0-1.1.9-2 2-2h2v-2H7z' }, '4'),
  ],
  'SportsGolfSharp',
);
export const SportsGolfTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsGolfTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsGolfTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 14c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m2-7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-2-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-2 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7 3.13 7 7 7m0-12c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5',
      },
      '1',
    ),
    svg('circle', { cx: '10', cy: '8', r: '1' }, '2'),
    svg('circle', { cx: '14', cy: '8', r: '1' }, '3'),
    svg('circle', { cx: '12', cy: '6', r: '1' }, '4'),
    svg('path', { d: 'M7 19h2c1.1 0 2 .9 2 2v1h2v-1c0-1.1.9-2 2-2h2v-2H7z' }, '5'),
  ],
  'SportsGolfTwoTone',
);
export const SportsGymnasticsIcon = (props?: KTRawAttr) => {
  const s = _SportsGymnasticsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsGymnasticsIcon = svg(
  svg('path', {
    d: 'M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M1 9h6l7-5 1.31 1.52-4.17 2.98H14L21.8 4 23 5.4 14.5 12 14 22h-2l-.5-10L8 11H1z',
  }),
  'SportsGymnastics',
);
export const SportsGymnasticsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsGymnasticsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsGymnasticsOutlinedIcon = svg(
  svg('path', {
    d: 'M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M1 9h6l7-5 1.31 1.52-4.17 2.98H14L21.8 4 23 5.4 14.5 12 14 22h-2l-.5-10L8 11H1z',
  }),
  'SportsGymnasticsOutlined',
);
export const SportsGymnasticsRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsGymnasticsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsGymnasticsRoundedIcon = svg(
  svg('path', {
    d: 'M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m9 16c-.56 0-1.02-.44-1.05-1l-.45-9L8 11H2c-.55 0-1-.45-1-1s.45-1 1-1h5l6.26-4.47c.42-.3 1-.23 1.34.16.38.45.3 1.12-.18 1.46L11.14 8.5H14l7.09-4.09c.41-.24.93-.15 1.24.21.36.43.3 1.07-.14 1.41L14.5 12l-.45 9c-.03.56-.49 1-1.05 1',
  }),
  'SportsGymnasticsRounded',
);
export const SportsGymnasticsSharpIcon = (props?: KTRawAttr) => {
  const s = _SportsGymnasticsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsGymnasticsSharpIcon = svg(
  svg('path', {
    d: 'M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M1 9h6l7-5 1.31 1.52-4.17 2.98H14L21.8 4 23 5.4 14.5 12 14 22h-2l-.5-10L8 11H1z',
  }),
  'SportsGymnasticsSharp',
);
export const SportsGymnasticsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsGymnasticsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsGymnasticsTwoToneIcon = svg(
  svg('path', {
    d: 'M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M1 9h6l7-5 1.31 1.52-4.17 2.98H14L21.8 4 23 5.4 14.5 12 14 22h-2l-.5-10L8 11H1z',
  }),
  'SportsGymnasticsTwoTone',
);
export const SportsHandballIcon = (props?: KTRawAttr) => {
  const s = _SportsHandballIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsHandballIcon = svg(
  [
    svg('path', { d: 'M14.27 6c-.55.95-.22 2.18.73 2.73s2.18.22 2.73-.73.22-2.18-.73-2.73-2.18-.22-2.73.73' }, '0'),
    svg(
      'path',
      {
        d: 'M15.84 10.41s-1.63-.94-2.6-1.5c-2.38-1.38-3.2-4.44-1.82-6.82l-1.73-1C8.1 3.83 8.6 7.21 10.66 9.4l-5.15 8.92 1.73 1 1.5-2.6 1.73 1-3 5.2 1.73 1 6.29-10.89c1.14 1.55 1.33 3.69.31 5.46l1.73 1c1.6-2.75 1.28-6.58-1.69-9.08',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M12.75 3.8c.72.41 1.63.17 2.05-.55.41-.72.17-1.63-.55-2.05-.72-.41-1.63-.17-2.05.55-.41.72-.17 1.64.55 2.05',
      },
      '2',
    ),
  ],
  'SportsHandball',
);
export const SportsHandballOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsHandballOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsHandballOutlinedIcon = svg(
  [
    svg('path', { d: 'M14.27 6c-.55.95-.22 2.18.73 2.73s2.18.22 2.73-.73.22-2.18-.73-2.73-2.18-.22-2.73.73' }, '0'),
    svg(
      'path',
      {
        d: 'M15.84 10.41s-1.63-.94-2.6-1.5c-2.38-1.38-3.2-4.44-1.82-6.82l-1.73-1C8.1 3.83 8.6 7.21 10.66 9.4l-5.15 8.92 1.73 1 1.5-2.6 1.73 1-3 5.2 1.73 1 6.29-10.89c1.14 1.55 1.33 3.69.31 5.46l1.73 1c1.6-2.75 1.28-6.58-1.69-9.08',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M12.75 3.8c.72.41 1.63.17 2.05-.55.41-.72.17-1.63-.55-2.05-.72-.41-1.63-.17-2.05.55-.41.72-.17 1.64.55 2.05',
      },
      '2',
    ),
  ],
  'SportsHandballOutlined',
);
export const SportsHandballRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsHandballRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsHandballRoundedIcon = svg(
  [
    svg('path', { d: 'M14.27 6c-.55.95-.22 2.18.73 2.73s2.18.22 2.73-.73.22-2.18-.73-2.73-2.18-.22-2.73.73' }, '0'),
    svg(
      'path',
      {
        d: 'M15.84 10.41s-1.63-.94-2.6-1.5c-2.13-1.24-3.01-3.83-2.18-6.07.17-.46-.01-.97-.43-1.21-.53-.3-1.22-.07-1.43.5-.95 2.51-.35 5.35 1.46 7.27l-4.65 8.05c-.28.48-.11 1.09.37 1.37s1.09.11 1.37-.37l1-1.73 1.73 1-2.5 4.33c-.28.48-.11 1.09.37 1.37s1.09.11 1.37-.37l5.79-10.02c.98 1.34 1.26 3.12.66 4.72-.17.45.02.96.43 1.2.53.31 1.22.08 1.44-.5.97-2.62.41-5.84-2.2-8.04M12.75 3.8c.72.41 1.63.17 2.05-.55.41-.72.17-1.63-.55-2.05-.72-.41-1.63-.17-2.05.55-.41.72-.17 1.64.55 2.05',
      },
      '1',
    ),
  ],
  'SportsHandballRounded',
);
export const SportsHandballSharpIcon = (props?: KTRawAttr) => {
  const s = _SportsHandballSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsHandballSharpIcon = svg(
  [
    svg('path', { d: 'M14.27 6c-.55.95-.22 2.18.73 2.73s2.18.22 2.73-.73.22-2.18-.73-2.73-2.18-.22-2.73.73' }, '0'),
    svg(
      'path',
      {
        d: 'M15.84 10.41s-1.63-.94-2.6-1.5c-2.38-1.38-3.2-4.44-1.82-6.82l-1.73-1C8.1 3.83 8.6 7.21 10.66 9.4l-5.15 8.92 1.73 1 1.5-2.6 1.73 1-3 5.2 1.73 1 6.29-10.89c1.14 1.55 1.33 3.69.31 5.46l1.73 1c1.6-2.75 1.28-6.58-1.69-9.08',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M12.75 3.8c.72.41 1.63.17 2.05-.55.41-.72.17-1.63-.55-2.05-.72-.41-1.63-.17-2.05.55-.41.72-.17 1.64.55 2.05',
      },
      '2',
    ),
  ],
  'SportsHandballSharp',
);
export const SportsHandballTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsHandballTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsHandballTwoToneIcon = svg(
  [
    svg('path', { d: 'M14.27 6c-.55.95-.22 2.18.73 2.73s2.18.22 2.73-.73.22-2.18-.73-2.73-2.18-.22-2.73.73' }, '0'),
    svg(
      'path',
      {
        d: 'M15.84 10.41s-1.63-.94-2.6-1.5c-2.38-1.38-3.2-4.44-1.82-6.82l-1.73-1C8.1 3.83 8.6 7.21 10.66 9.4l-5.15 8.92 1.73 1 1.5-2.6 1.73 1-3 5.2 1.73 1 6.29-10.89c1.14 1.55 1.33 3.69.31 5.46l1.73 1c1.6-2.75 1.28-6.58-1.69-9.08',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M12.75 3.8c.72.41 1.63.17 2.05-.55.41-.72.17-1.63-.55-2.05-.72-.41-1.63-.17-2.05.55-.41.72-.17 1.64.55 2.05',
      },
      '2',
    ),
  ],
  'SportsHandballTwoTone',
);
export const SportsHockeyIcon = (props?: KTRawAttr) => {
  const s = _SportsHockeyIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsHockeyIcon = svg(
  svg('path', {
    d: 'M2 17v3h2v-4H3c-.55 0-1 .45-1 1m7-1H5v4l4.69-.01c.38 0 .72-.21.89-.55l.87-1.9-1.59-3.48zm12.71.29c-.18-.18-.43-.29-.71-.29h-1v4h2v-3c0-.28-.11-.53-.29-.71m-8.11-3.45L17.65 4H14.3l-1.76 3.97-.49 1.1-.05.14L9.7 4H6.35l4.05 8.84 1.52 3.32.08.18 1.42 3.1c.17.34.51.55.89.55L19 20v-4h-4z',
  }),
  'SportsHockey',
);
export const SportsHockeyOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsHockeyOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsHockeyOutlinedIcon = svg(
  svg('path', {
    d: 'M2 17v3h2v-4H3c-.55 0-1 .45-1 1m7-1H5v4l4.69-.01c.38 0 .72-.21.89-.55l.87-1.9-1.59-3.48zm12.71.29c-.18-.18-.43-.29-.71-.29h-1v4h2v-3c0-.28-.11-.53-.29-.71m-8.11-3.45L17.65 4H14.3l-1.76 3.97-.49 1.1-.05.14L9.7 4H6.35l4.05 8.84 1.52 3.32.08.18 1.42 3.1c.17.34.51.55.89.55L19 20v-4h-4z',
  }),
  'SportsHockeyOutlined',
);
export const SportsHockeyRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsHockeyRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsHockeyRoundedIcon = svg(
  svg('path', {
    d: 'M2 17v3h2v-4H3c-.55 0-1 .45-1 1m7-1H5v4l4.69-.01c.38 0 .72-.21.89-.55l.87-1.9-1.59-3.48zm12.71.29c-.18-.18-.43-.29-.71-.29h-1v4h2v-3c0-.28-.11-.53-.29-.71m-8.11-3.45L17.65 4H14.3l-1.76 3.97-.49 1.1-.05.14L9.7 4H6.35l4.05 8.84 1.52 3.32.08.18 1.42 3.1c.17.34.51.55.89.55L19 20v-4h-4z',
  }),
  'SportsHockeyRounded',
);
export const SportsHockeySharpIcon = (props?: KTRawAttr) => {
  const s = _SportsHockeySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsHockeySharpIcon = svg(
  svg('path', {
    d: 'M2 17v3h2v-4H3c-.55 0-1 .45-1 1m7-1H5v4l4.69-.01c.38 0 .72-.21.89-.55l.87-1.9-1.59-3.48zm12.71.29c-.18-.18-.43-.29-.71-.29h-1v4h2v-3c0-.28-.11-.53-.29-.71m-8.11-3.45L17.65 4H14.3l-1.76 3.97-.49 1.1-.05.14L9.7 4H6.35l4.05 8.84 1.52 3.32.08.18 1.42 3.1c.17.34.51.55.89.55L19 20v-4h-4z',
  }),
  'SportsHockeySharp',
);
export const SportsHockeyTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsHockeyTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsHockeyTwoToneIcon = svg(
  svg('path', {
    d: 'M2 17v3h2v-4H3c-.55 0-1 .45-1 1m7-1H5v4l4.69-.01c.38 0 .72-.21.89-.55l.87-1.9-1.59-3.48zm12.71.29c-.18-.18-.43-.29-.71-.29h-1v4h2v-3c0-.28-.11-.53-.29-.71m-8.11-3.45L17.65 4H14.3l-1.76 3.97-.49 1.1-.05.14L9.7 4H6.35l4.05 8.84 1.52 3.32.08.18 1.42 3.1c.17.34.51.55.89.55L19 20v-4h-4z',
  }),
  'SportsHockeyTwoTone',
);
export const SportsKabaddiIcon = (props?: KTRawAttr) => {
  const s = _SportsKabaddiIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsKabaddiIcon = svg(
  [
    svg('circle', { cx: '16.5', cy: '2.38', r: '2' }, '0'),
    svg(
      'path',
      {
        d: 'M24 11.88v-4.7l-5.05-2.14c-.97-.41-2.09-.06-2.65.84l-1 1.6c-.67 1.18-1.91 2.06-3.41 2.32l.06.06c.69.69 1.52 1.07 2.46 1.17.8-.42 1.52-.98 2.09-1.64l.6 3-1.16 1.1-.94.89v7.5h2v-6l2.1-2 1.8 8H23l-2.18-11-.62-3.1 1.8.7v3.4zM10.29 8.09c.22.15.47.24.72.29.13.02.25.04.38.04s.26-.01.38-.04c.13-.02.25-.06.37-.11.24-.1.47-.24.66-.44.49-.49.67-1.17.55-1.8-.07-.37-.25-.74-.55-1.03-.19-.19-.42-.34-.66-.44-.12-.05-.24-.09-.37-.11s-.25-.04-.38-.04c-.12 0-.23.01-.35.03-.14.02-.28.06-.41.11-.23.11-.46.26-.65.45-.3.29-.48.66-.55 1.03-.12.63.06 1.31.55 1.8.09.1.2.18.31.26',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'm11.24 10.56-2-2c-.1-.1-.2-.18-.31-.26-.22-.14-.47-.24-.72-.28-.13-.03-.25-.04-.38-.04-.51 0-1.02.2-1.41.59l-3.34 3.34c-.41.41-.62.98-.58 1.54 0 .18.04.37.11.55l1.07 2.95-3.63 3.63L1.46 22l4.24-4.24v-2.22L7 16.75v5.13h2v-6l-2.12-2.12 2.36-2.36.71.71c1.29 1.26 2.97 2.04 5.03 2.04l-.14-2.07c-1.5-.02-2.7-.62-3.6-1.52',
      },
      '2',
    ),
  ],
  'SportsKabaddi',
);
export const SportsKabaddiOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsKabaddiOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsKabaddiOutlinedIcon = svg(
  [
    svg('circle', { cx: '16.5', cy: '2.38', r: '2' }, '0'),
    svg(
      'path',
      {
        d: 'M24 11.88v-4.7l-5.05-2.14c-.97-.41-2.09-.06-2.65.84l-1 1.6c-.67 1.18-1.91 2.06-3.41 2.32l.06.06c.69.69 1.52 1.07 2.46 1.17.8-.42 1.52-.98 2.09-1.64l.6 3-1.16 1.1-.94.89v7.5h2v-6l2.1-2 1.8 8H23l-2.18-11-.62-3.1 1.8.7v3.4zM10.29 8.09c.22.15.47.24.72.29.13.02.25.04.38.04s.26-.01.38-.04c.13-.02.25-.06.37-.11.24-.1.47-.24.66-.44.49-.49.67-1.17.55-1.8-.07-.37-.25-.74-.55-1.03-.19-.19-.42-.34-.66-.44-.12-.05-.24-.09-.37-.11s-.25-.04-.38-.04c-.12 0-.23.01-.35.03-.14.02-.28.06-.41.11-.23.11-.46.26-.65.45-.3.29-.48.66-.55 1.03-.12.63.06 1.31.55 1.8.09.1.2.18.31.26',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'm11.24 10.56-2-2c-.1-.1-.2-.18-.31-.26-.22-.14-.47-.24-.72-.28-.13-.03-.25-.04-.38-.04-.51 0-1.02.2-1.41.59l-3.34 3.34c-.41.41-.62.98-.58 1.54 0 .18.04.37.11.55l1.07 2.95-3.63 3.63L1.46 22l4.24-4.24v-2.22L7 16.75v5.13h2v-6l-2.12-2.12 2.36-2.36.71.71c1.29 1.26 2.97 2.04 5.03 2.04l-.14-2.07c-1.5-.02-2.7-.62-3.6-1.52',
      },
      '2',
    ),
  ],
  'SportsKabaddiOutlined',
);
export const SportsKabaddiRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsKabaddiRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsKabaddiRoundedIcon = svg(
  [
    svg('circle', { cx: '16.5', cy: '2.38', r: '2' }, '0'),
    svg(
      'path',
      {
        d: 'M24 10.88v-3.7l-4.99-2.11c-.98-.41-2.12-.07-2.71.81l-1 1.6c-.67 1.18-1.91 2.06-3.41 2.32l.06.06c.69.69 1.52 1.07 2.46 1.17.8-.42 1.52-.98 2.09-1.64l.6 3-1.16 1.1-.94.89v6.5c0 .55.45 1 1 1s1-.45 1-1v-5l2.1-2 1.62 7.19c.11.47.53.81 1.02.81.66 0 1.15-.6 1.02-1.24l-1.94-9.76-.62-3.1 1.8.7v2.4c0 .55.45 1 1 1s1-.45 1-1M10.29 8.09c.22.15.47.24.72.29.13.02.25.04.38.04s.26-.01.38-.04c.13-.02.25-.06.37-.11.24-.1.47-.24.66-.44.49-.49.67-1.17.55-1.8-.07-.37-.25-.74-.55-1.03-.19-.19-.42-.34-.66-.44-.12-.05-.24-.09-.37-.11s-.25-.04-.38-.04c-.12 0-.23.01-.35.03-.14.02-.28.06-.41.11-.23.11-.46.26-.65.45-.3.29-.48.66-.55 1.03-.12.63.06 1.31.55 1.8.09.1.2.18.31.26',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'm11.24 10.56-2-2c-.1-.1-.2-.18-.31-.26-.22-.14-.47-.24-.72-.28-.13-.03-.25-.04-.38-.04-.51 0-1.02.2-1.41.59l-3.34 3.34c-.41.41-.62.98-.58 1.54 0 .18.04.37.11.55l1.07 2.95-2.92 2.92c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l3.54-3.54v-2.22L7 16.75v4.13c0 .55.45 1 1 1s1-.45 1-1v-5l-2.12-2.12 2.36-2.36.71.71c1.02 1 2.28 1.69 3.79 1.94.64.11 1.21-.45 1.16-1.1-.03-.48-.4-.87-.87-.94-1.13-.18-2.06-.72-2.79-1.45',
      },
      '2',
    ),
  ],
  'SportsKabaddiRounded',
);
export const SportsKabaddiSharpIcon = (props?: KTRawAttr) => {
  const s = _SportsKabaddiSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsKabaddiSharpIcon = svg(
  [
    svg('circle', { cx: '16.5', cy: '2.38', r: '2' }, '0'),
    svg(
      'path',
      {
        d: 'M24 11.88v-4.7l-5.05-2.14c-.97-.41-2.09-.06-2.65.84l-1 1.6c-.67 1.18-1.91 2.06-3.41 2.32l.06.06c.69.69 1.52 1.07 2.46 1.17.8-.42 1.52-.98 2.09-1.64l.6 3-1.16 1.1-.94.89v7.5h2v-6l2.1-2 1.8 8H23l-2.18-11-.62-3.1 1.8.7v3.4zM10.29 8.09c.22.15.47.24.72.29.13.02.25.04.38.04s.26-.01.38-.04c.13-.02.25-.06.37-.11.24-.1.47-.24.66-.44.49-.49.67-1.17.55-1.8-.07-.37-.25-.74-.55-1.03-.19-.19-.42-.34-.66-.44-.12-.05-.24-.09-.37-.11s-.25-.04-.38-.04c-.12 0-.23.01-.35.03-.14.02-.28.06-.41.11-.23.11-.46.26-.65.45-.3.29-.48.66-.55 1.03-.12.63.06 1.31.55 1.8.09.1.2.18.31.26',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'm11.24 10.56-2-2c-.1-.1-.2-.18-.31-.26-.22-.14-.47-.24-.72-.28-.13-.03-.25-.04-.38-.04-.51 0-1.02.2-1.41.59l-3.34 3.34c-.41.41-.62.98-.58 1.54 0 .18.04.37.11.55l1.07 2.95-3.63 3.63L1.46 22l4.24-4.24v-2.22L7 16.75v5.13h2v-6l-2.12-2.12 2.36-2.36.71.71c1.29 1.26 2.97 2.04 5.03 2.04l-.14-2.07c-1.5-.02-2.7-.62-3.6-1.52',
      },
      '2',
    ),
  ],
  'SportsKabaddiSharp',
);
export const SportsKabaddiTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsKabaddiTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsKabaddiTwoToneIcon = svg(
  [
    svg('circle', { cx: '16.5', cy: '2.38', r: '2' }, '0'),
    svg(
      'path',
      {
        d: 'M24 11.88v-4.7l-5.05-2.14c-.97-.41-2.09-.06-2.65.84l-1 1.6c-.67 1.18-1.91 2.06-3.41 2.32l.06.06c.69.69 1.52 1.07 2.46 1.17.8-.42 1.52-.98 2.09-1.64l.6 3-1.16 1.1-.94.89v7.5h2v-6l2.1-2 1.8 8H23l-2.18-11-.62-3.1 1.8.7v3.4zM10.29 8.09c.22.15.47.24.72.29.13.02.25.04.38.04s.26-.01.38-.04c.13-.02.25-.06.37-.11.24-.1.47-.24.66-.44.49-.49.67-1.17.55-1.8-.07-.37-.25-.74-.55-1.03-.19-.19-.42-.34-.66-.44-.12-.05-.24-.09-.37-.11s-.25-.04-.38-.04c-.12 0-.23.01-.35.03-.14.02-.28.06-.41.11-.23.11-.46.26-.65.45-.3.29-.48.66-.55 1.03-.12.63.06 1.31.55 1.8.09.1.2.18.31.26',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'm11.24 10.56-2-2c-.1-.1-.2-.18-.31-.26-.22-.14-.47-.24-.72-.28-.13-.03-.25-.04-.38-.04-.51 0-1.02.2-1.41.59l-3.34 3.34c-.41.41-.62.98-.58 1.54 0 .18.04.37.11.55l1.07 2.95-3.63 3.63L1.46 22l4.24-4.24v-2.22L7 16.75v5.13h2v-6l-2.12-2.12 2.36-2.36.71.71c1.29 1.26 2.97 2.04 5.03 2.04l-.14-2.07c-1.5-.02-2.7-.62-3.6-1.52',
      },
      '2',
    ),
  ],
  'SportsKabaddiTwoTone',
);
export const SportsMartialArtsIcon = (props?: KTRawAttr) => {
  const s = _SportsMartialArtsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsMartialArtsIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm19.8 2-8.2 6.7-1.21-1.04 3.6-2.08L9.41 1 8 2.41l2.74 2.74L5 8.46l-1.19 4.29L6.27 17 8 16l-2.03-3.52.35-1.3L9.5 13l.5 9h2l.5-10L21 3.4z',
      },
      '0',
    ),
    svg('circle', { cx: '5', cy: '5', r: '2' }, '1'),
  ],
  'SportsMartialArts',
);
export const SportsMartialArtsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsMartialArtsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsMartialArtsOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm19.8 2-8.2 6.7-1.21-1.04 3.6-2.08L9.41 1 8 2.41l2.74 2.74L5 8.46l-1.19 4.29L6.27 17 8 16l-2.03-3.52.35-1.3L9.5 13l.5 9h2l.5-10L21 3.4z',
      },
      '0',
    ),
    svg('circle', { cx: '5', cy: '5', r: '2' }, '1'),
  ],
  'SportsMartialArtsOutlined',
);
export const SportsMartialArtsRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsMartialArtsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsMartialArtsRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19.06 2.6 11.6 8.7l-1.21-1.04 2.48-1.43c.57-.33.67-1.11.21-1.57l-2.95-2.95a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.03 2.03-5.4 3.11c-.23.13-.39.35-.46.6l-.96 3.49c-.07.26-.04.53.1.77l1.74 3.02c.28.48.89.64 1.37.37.48-.28.64-.89.37-1.37l-1.53-2.66.36-1.29L9.5 13l.44 8c.03.56.49 1 1.05 1s1.02-.44 1.05-1l.45-9 7.87-7.96c.36-.36.38-.93.05-1.32-.34-.4-.94-.45-1.35-.12',
      },
      '0',
    ),
    svg('circle', { cx: '5', cy: '5', r: '2' }, '1'),
  ],
  'SportsMartialArtsRounded',
);
export const SportsMartialArtsSharpIcon = (props?: KTRawAttr) => {
  const s = _SportsMartialArtsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsMartialArtsSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm19.8 2-8.2 6.7-1.21-1.04 3.6-2.08L9.41 1 8 2.41l2.74 2.74L5 8.46l-1.19 4.29L6.27 17 8 16l-2.03-3.52.35-1.3L9.5 13l.5 9h2l.5-10L21 3.4z',
      },
      '0',
    ),
    svg('circle', { cx: '5', cy: '5', r: '2' }, '1'),
  ],
  'SportsMartialArtsSharp',
);
export const SportsMartialArtsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsMartialArtsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsMartialArtsTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm19.8 2-8.2 6.7-1.21-1.04 3.6-2.08L9.41 1 8 2.41l2.74 2.74L5 8.46l-1.19 4.29L6.27 17 8 16l-2.03-3.52.35-1.3L9.5 13l.5 9h2l.5-10L21 3.4z',
      },
      '0',
    ),
    svg('circle', { cx: '5', cy: '5', r: '2' }, '1'),
  ],
  'SportsMartialArtsTwoTone',
);
export const SportsMmaIcon = (props?: KTRawAttr) => {
  const s = _SportsMmaIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsMmaIcon = svg(
  svg('path', {
    d: 'M7 20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-3H7zM18 7c-.55 0-1 .45-1 1V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v5.8c0 .13.01.26.04.39l.8 4c.09.47.5.8.98.8h10.36c.45 0 .89-.36.98-.8l.8-4c.03-.13.04-.26.04-.39V8c0-.55-.45-1-1-1m-3 3H7V7h8z',
  }),
  'SportsMma',
);
export const SportsMmaOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsMmaOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsMmaOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M7 20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-3H7zM18 7c-.55 0-1 .45-1 1V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v5.8c0 .13.01.26.04.39l.8 4c.09.47.5.8.98.8H17c.55 0 1.09-.44 1.2-.98l.77-3.83c.02-.12.03-.25.03-.38V8c0-.55-.45-1-1-1m-1 3.6c0 .13-.64 3.4-.64 3.4H7.64S7 10.74 7 10.6V5h8v5h2z',
      },
      '0',
    ),
    svg('path', { d: 'M8 7h6v3H8z' }, '1'),
  ],
  'SportsMmaOutlined',
);
export const SportsMmaRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsMmaRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsMmaRoundedIcon = svg(
  svg('path', {
    d: 'M7 20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-3H7zM18 7c-.55 0-1 .45-1 1V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v5.8c0 .13.01.26.04.39l.8 4c.09.47.5.8.98.8h10.36c.45 0 .89-.36.98-.8l.8-4c.03-.13.04-.26.04-.39V8c0-.55-.45-1-1-1m-4 3H8c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1',
  }),
  'SportsMmaRounded',
);
export const SportsMmaSharpIcon = (props?: KTRawAttr) => {
  const s = _SportsMmaSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsMmaSharpIcon = svg(
  svg('path', {
    d: 'M7 17h10v4H7zM18 7c-.55 0-1 .45-1 1V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v5.8c0 .13.01.26.04.39l.8 4c.09.47.5.8.98.8h10.36c.45 0 .89-.36.98-.8l.8-4c.03-.13.04-.26.04-.39V8c0-.55-.45-1-1-1m-3 3H7V7h8z',
  }),
  'SportsMmaSharp',
);
export const SportsMmaTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsMmaTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsMmaTwoToneIcon = svg(
  [
    svg('path', { d: 'M15 5H7v5.6c0 .14.64 3.4.64 3.4h8.72s.64-3.26.64-3.4V10h-2zm-1 5H8V7h6z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M7 20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-3H7zM18 7c-.55 0-1 .45-1 1V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v5.8c0 .13.01.26.04.39l.8 4c.09.47.5.8.98.8H17c.55 0 1.09-.44 1.2-.98l.77-3.83c.02-.12.03-.25.03-.38V8c0-.55-.45-1-1-1m-1 3.6c0 .13-.64 3.4-.64 3.4H7.64S7 10.74 7 10.6V5h8v5h2z',
      },
      '1',
    ),
    svg('path', { d: 'M8 7h6v3H8z' }, '2'),
  ],
  'SportsMmaTwoTone',
);
export const SportsMotorsportsIcon = (props?: KTRawAttr) => {
  const s = _SportsMotorsportsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsMotorsportsIcon = svg(
  [
    svg(
      'path',
      { d: 'M12 11.39c0-.65-.39-1.23-.98-1.48L5.44 7.55c-1.48 1.68-2.32 3.7-2.8 5.45h7.75c.89 0 1.61-.72 1.61-1.61' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M21.96 11.22c-.41-4.41-4.56-7.49-8.98-7.2-2.51.16-4.44.94-5.93 2.04l4.74 2.01c1.33.57 2.2 1.87 2.2 3.32 0 1.99-1.62 3.61-3.61 3.61H2.21C2 16.31 2 17.2 2 17.2v.8c0 1.1.9 2 2 2h10c4.67 0 8.41-4.01 7.96-8.78',
      },
      '1',
    ),
  ],
  'SportsMotorsports',
);
export const SportsMotorsportsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsMotorsportsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsMotorsportsOutlinedIcon = svg(
  svg('path', {
    d: 'M21.96 11.22C21.57 7.01 17.76 4 13.56 4c-.19 0-.38.01-.57.02C2 4.74 2 17.2 2 17.2v.8c0 1.1.9 2 2 2h10c4.67 0 8.41-4.01 7.96-8.78m-16.7.34c.57-1.29 1.28-2.35 2.14-3.19l3.62 1.53c.6.25.98.83.98 1.48 0 .89-.72 1.61-1.61 1.61H4.72c.15-.46.32-.94.54-1.43m13.18 4.48C17.3 17.29 15.68 18 14 18H4v-.8c0-.02.01-.92.24-2.2h6.15c1.99 0 3.61-1.62 3.61-3.61 0-1.45-.87-2.76-2.2-3.32L9.3 7.01c1.1-.57 2.37-.9 3.82-.99.15-.02.3-.02.44-.02 3.31 0 6.13 2.37 6.41 5.41.16 1.72-.38 3.36-1.53 4.63',
  }),
  'SportsMotorsportsOutlined',
);
export const SportsMotorsportsRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsMotorsportsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsMotorsportsRoundedIcon = svg(
  [
    svg(
      'path',
      { d: 'M12 11.39c0-.65-.39-1.23-.98-1.48L5.44 7.55c-1.48 1.68-2.32 3.7-2.8 5.45h7.75c.89 0 1.61-.72 1.61-1.61' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M21.96 11.22c-.41-4.41-4.56-7.49-8.98-7.2-2.51.16-4.44.94-5.93 2.04l4.74 2.01c1.33.57 2.2 1.87 2.2 3.32 0 1.99-1.62 3.61-3.61 3.61H2.21C2 16.31 2 17.2 2 17.2v.8c0 1.1.9 2 2 2h10c4.67 0 8.41-4.01 7.96-8.78',
      },
      '1',
    ),
  ],
  'SportsMotorsportsRounded',
);
export const SportsMotorsportsSharpIcon = (props?: KTRawAttr) => {
  const s = _SportsMotorsportsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsMotorsportsSharpIcon = svg(
  [
    svg(
      'path',
      { d: 'M12 11.39c0-.65-.39-1.23-.98-1.48L5.44 7.55c-1.48 1.68-2.32 3.7-2.8 5.45h7.75c.89 0 1.61-.72 1.61-1.61' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M21.96 11.22c-.41-4.41-4.56-7.49-8.98-7.2-2.51.16-4.44.94-5.93 2.04l4.74 2.01c1.33.57 2.2 1.87 2.2 3.32 0 1.99-1.62 3.61-3.61 3.61H2.21C2 16.31 2 17.2 2 17.2V20h12c4.67 0 8.41-4.01 7.96-8.78',
      },
      '1',
    ),
  ],
  'SportsMotorsportsSharp',
);
export const SportsMotorsportsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsMotorsportsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsMotorsportsTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M13.56 6c-.15 0-.29 0-.44.01-1.45.1-2.72.43-3.82.99l2.5 1.06c1.33.57 2.2 1.87 2.2 3.32 0 1.99-1.62 3.61-3.61 3.61H4.24C4.01 16.28 4 17.19 4 17.2v.8h10c1.68 0 3.3-.71 4.44-1.96 1.15-1.27 1.7-2.91 1.54-4.63C19.69 8.37 16.87 6 13.56 6',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M21.96 11.22C21.57 7.01 17.76 4 13.56 4c-.19 0-.38.01-.57.02C2 4.74 2 17.2 2 17.2v.8c0 1.1.9 2 2 2h10c4.67 0 8.41-4.01 7.96-8.78m-16.7.34c.57-1.29 1.28-2.35 2.14-3.19l3.62 1.53c.6.25.98.83.98 1.48 0 .89-.72 1.61-1.61 1.61H4.72c.15-.46.32-.94.54-1.43m13.18 4.48C17.3 17.29 15.68 18 14 18H4v-.8c0-.02.01-.92.24-2.2h6.15c1.99 0 3.61-1.62 3.61-3.61 0-1.45-.87-2.76-2.2-3.32L9.3 7.01c1.1-.57 2.37-.9 3.82-.99.15-.02.3-.02.44-.02 3.31 0 6.13 2.37 6.41 5.41.16 1.72-.38 3.36-1.53 4.63',
      },
      '1',
    ),
  ],
  'SportsMotorsportsTwoTone',
);
export const SportsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M11.23 6c-1.66 0-3.22.66-4.36 1.73C6.54 6.73 5.61 6 4.5 6 3.12 6 2 7.12 2 8.5S3.12 11 4.5 11c.21 0 .41-.03.61-.08-.05.25-.09.51-.1.78-.18 3.68 2.95 6.68 6.68 6.27 2.55-.28 4.68-2.26 5.19-4.77.15-.71.15-1.4.06-2.06-.09-.6.38-1.13.99-1.13H22V6zM4.5 9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5m6.5 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3',
      },
      '0',
    ),
    svg('circle', { cx: '11', cy: '12', r: '2' }, '1'),
  ],
  'SportsOutlined',
);
export const SportsRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21 6h-9.77c-1.66 0-3.22.66-4.36 1.73C6.54 6.73 5.61 6 4.5 6 3.12 6 2 7.12 2 8.5S3.12 11 4.5 11c.21 0 .41-.03.61-.08-.05.25-.09.51-.1.78-.18 3.68 2.95 6.68 6.68 6.27 2.55-.28 4.68-2.26 5.19-4.77.15-.71.15-1.4.06-2.06-.09-.6.38-1.13.99-1.13h2.76C21.56 10 22 9.55 22 9V7c0-.55-.45-1-1-1M4.5 9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5m6.5 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3',
      },
      '0',
    ),
    svg('circle', { cx: '11', cy: '12', r: '2' }, '1'),
  ],
  'SportsRounded',
);
export const SportsRugbyIcon = (props?: KTRawAttr) => {
  const s = _SportsRugbyIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsRugbyIcon = svg(
  svg('path', {
    d: 'M20.49 3.51c-.56-.56-2.15-.97-4.16-.97-3.08 0-7.15.96-9.98 3.79-4.69 4.7-4.25 12.74-2.84 14.16.56.56 2.15.97 4.16.97 3.08 0 7.15-.96 9.98-3.79 4.69-4.7 4.25-12.74 2.84-14.16M7.76 7.76c2.64-2.64 6.35-3.12 8.03-3.19-2.05.94-4.46 2.45-6.61 4.61-2.16 2.16-3.67 4.58-4.62 6.63.1-2.48.88-5.74 3.2-8.05m8.48 8.48c-2.64 2.64-6.35 3.12-8.03 3.19 2.05-.94 4.46-2.45 6.61-4.61 2.16-2.16 3.67-4.58 4.62-6.63-.1 2.48-.88 5.74-3.2 8.05',
  }),
  'SportsRugby',
);
export const SportsRugbyOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsRugbyOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsRugbyOutlinedIcon = svg(
  svg('path', {
    d: 'M20.49 3.51c-.56-.56-2.15-.97-4.16-.97-3.08 0-7.15.96-9.98 3.79-4.69 4.7-4.25 12.74-2.84 14.16.56.56 2.15.97 4.16.97 3.08 0 7.15-.96 9.98-3.79 4.69-4.7 4.25-12.74 2.84-14.16M5.71 18.29c.63-1.89 2.16-4.99 4.87-7.7 2.68-2.68 5.78-4.23 7.7-4.88-.63 1.89-2.16 4.99-4.88 7.7-2.66 2.68-5.76 4.23-7.69 4.88M7.76 7.76c2.64-2.64 6.34-3.12 8.03-3.19-2.05.94-4.46 2.46-6.61 4.61-2.16 2.16-3.67 4.58-4.61 6.63.09-2.48.87-5.74 3.19-8.05m8.48 8.48c-2.64 2.64-6.34 3.12-8.03 3.19 2.05-.94 4.46-2.46 6.61-4.61 2.16-2.16 3.67-4.58 4.62-6.63-.1 2.48-.88 5.74-3.2 8.05',
  }),
  'SportsRugbyOutlined',
);
export const SportsRugbyRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsRugbyRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsRugbyRoundedIcon = svg(
  svg('path', {
    d: 'M20.49 3.51c-.56-.56-2.15-.97-4.16-.97-3.08 0-7.15.96-9.98 3.79-4.69 4.7-4.25 12.74-2.84 14.16.56.56 2.15.97 4.16.97 3.08 0 7.15-.96 9.98-3.79 4.69-4.7 4.25-12.74 2.84-14.16M7.76 7.76c2.64-2.64 6.35-3.12 8.03-3.19-2.05.94-4.46 2.45-6.61 4.61-2.16 2.16-3.67 4.58-4.61 6.63.09-2.48.87-5.74 3.19-8.05m8.48 8.48c-2.64 2.64-6.35 3.12-8.03 3.19 2.05-.94 4.46-2.45 6.61-4.61 2.16-2.16 3.67-4.58 4.62-6.63-.1 2.48-.88 5.74-3.2 8.05',
  }),
  'SportsRugbyRounded',
);
export const SportsRugbySharpIcon = (props?: KTRawAttr) => {
  const s = _SportsRugbySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsRugbySharpIcon = svg(
  svg('path', {
    d: 'M20.49 3.51c-.56-.56-2.15-.97-4.16-.97-3.08 0-7.15.96-9.98 3.79-4.69 4.7-4.25 12.74-2.84 14.16.56.56 2.15.97 4.16.97 3.08 0 7.15-.96 9.98-3.79 4.69-4.7 4.25-12.74 2.84-14.16M7.76 7.76c2.64-2.64 6.35-3.12 8.03-3.19-2.05.94-4.46 2.45-6.61 4.61-2.16 2.16-3.67 4.58-4.61 6.63.09-2.48.87-5.74 3.19-8.05m8.48 8.48c-2.64 2.64-6.35 3.12-8.03 3.19 2.05-.94 4.46-2.45 6.61-4.61 2.16-2.16 3.67-4.58 4.62-6.63-.1 2.48-.88 5.74-3.2 8.05',
  }),
  'SportsRugbySharp',
);
export const SportsRugbyTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsRugbyTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsRugbyTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M18.29 5.71c-1.93.64-5.02 2.19-7.7 4.88-2.71 2.71-4.24 5.81-4.87 7.7 1.93-.64 5.03-2.2 7.7-4.87 2.71-2.72 4.24-5.82 4.87-7.71M9.17 9.17c2.15-2.15 4.56-3.67 6.61-4.61-1.68.08-5.38.56-8.02 3.2-2.32 2.32-3.1 5.58-3.2 8.04.94-2.05 2.45-4.47 4.61-6.63m5.66 5.66c-2.15 2.15-4.56 3.67-6.61 4.61 1.68-.08 5.39-.55 8.03-3.19 2.32-2.32 3.1-5.58 3.2-8.04-.95 2.04-2.46 4.46-4.62 6.62',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20.49 3.51c-.56-.56-2.15-.97-4.16-.97-3.08 0-7.15.96-9.98 3.79-4.69 4.7-4.25 12.74-2.84 14.16.56.56 2.15.97 4.16.97 3.08 0 7.15-.96 9.98-3.79 4.69-4.7 4.25-12.74 2.84-14.16M5.71 18.29c.63-1.89 2.16-4.99 4.87-7.7 2.68-2.68 5.78-4.23 7.7-4.88-.63 1.89-2.16 4.99-4.88 7.7-2.66 2.68-5.76 4.23-7.69 4.88M7.76 7.76c2.64-2.64 6.34-3.12 8.03-3.19-2.05.94-4.46 2.46-6.61 4.61-2.16 2.16-3.67 4.58-4.61 6.63.09-2.48.87-5.74 3.19-8.05m8.48 8.48c-2.64 2.64-6.34 3.12-8.03 3.19 2.05-.94 4.46-2.46 6.61-4.61 2.16-2.16 3.67-4.58 4.62-6.63-.1 2.48-.88 5.74-3.2 8.05',
      },
      '1',
    ),
  ],
  'SportsRugbyTwoTone',
);
export const SportsScoreIcon = (props?: KTRawAttr) => {
  const s = _SportsScoreIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsScoreIcon = svg(
  svg('path', {
    d: 'M11 6H9V4h2zm4-2h-2v2h2zM9 14h2v-2H9zm10-4V8h-2v2zm0 4v-2h-2v2zm-6 0h2v-2h-2zm6-10h-2v2h2zm-6 4V6h-2v2zm-6 2V8h2V6H7V4H5v16h2v-8h2v-2zm8 2h2v-2h-2zm-4-2v2h2v-2zM9 8v2h2V8zm4 2h2V8h-2zm2-4v2h2V6z',
  }),
  'SportsScore',
);
export const SportsScoreOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsScoreOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsScoreOutlinedIcon = svg(
  svg('path', {
    d: 'M11 6H9V4h2zm4-2h-2v2h2zM9 14h2v-2H9zm10-4V8h-2v2zm0 4v-2h-2v2zm-6 0h2v-2h-2zm6-10h-2v2h2zm-6 4V6h-2v2zm-6 2V8h2V6H7V4H5v16h2v-8h2v-2zm8 2h2v-2h-2zm-4-2v2h2v-2zM9 8v2h2V8zm4 2h2V8h-2zm2-4v2h2V6z',
  }),
  'SportsScoreOutlined',
);
export const SportsScoreRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsScoreRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsScoreRoundedIcon = svg(
  svg('path', {
    d: 'M11 6H9V4h2zm4-2h-2v2h2zM9 14h2v-2H9zm10-4V8h-2v2zm0 4v-2h-2v2zm-6 0h2v-2h-2zm6-10h-2v2h2zm-6 4V6h-2v2zm-6 2V8h2V6H7V5c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1v-7h2v-2zm8 2h2v-2h-2zm-4-2v2h2v-2zM9 8v2h2V8zm4 2h2V8h-2zm2-4v2h2V6z',
  }),
  'SportsScoreRounded',
);
export const SportsScoreSharpIcon = (props?: KTRawAttr) => {
  const s = _SportsScoreSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsScoreSharpIcon = svg(
  svg('path', {
    d: 'M11 6H9V4h2zm4-2h-2v2h2zM9 14h2v-2H9zm10-4V8h-2v2zm0 4v-2h-2v2zm-6 0h2v-2h-2zm6-10h-2v2h2zm-6 4V6h-2v2zm-6 2V8h2V6H7V4H5v16h2v-8h2v-2zm8 2h2v-2h-2zm-4-2v2h2v-2zM9 8v2h2V8zm4 2h2V8h-2zm2-4v2h2V6z',
  }),
  'SportsScoreSharp',
);
export const SportsScoreTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsScoreTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsScoreTwoToneIcon = svg(
  svg('path', {
    d: 'M11 6H9V4h2zm4-2h-2v2h2zM9 14h2v-2H9zm10-4V8h-2v2zm0 4v-2h-2v2zm-6 0h2v-2h-2zm6-10h-2v2h2zm-6 4V6h-2v2zm-6 2V8h2V6H7V4H5v16h2v-8h2v-2zm8 2h2v-2h-2zm-4-2v2h2v-2zM9 8v2h2V8zm4 2h2V8h-2zm2-4v2h2V6z',
  }),
  'SportsScoreTwoTone',
);
export const SportsSharpIcon = (props?: KTRawAttr) => {
  const s = _SportsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M11.23 6c-1.66 0-3.22.66-4.36 1.73C6.54 6.73 5.61 6 4.5 6 3.12 6 2 7.12 2 8.5S3.12 11 4.5 11c.21 0 .41-.03.61-.08-.05.25-.09.51-.1.78-.18 3.68 2.95 6.68 6.68 6.27 2.55-.28 4.68-2.26 5.19-4.77.15-.71.15-1.4.06-2.06-.09-.6.38-1.13.99-1.13H22V6zM4.5 9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5m6.5 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3',
      },
      '0',
    ),
    svg('circle', { cx: '11', cy: '12', r: '2' }, '1'),
  ],
  'SportsSharp',
);
export const SportsSoccerIcon = (props?: KTRawAttr) => {
  const s = _SportsSoccerIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsSoccerIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 3.3 1.35-.95c1.82.56 3.37 1.76 4.38 3.34l-.39 1.34-1.35.46L13 6.7zm-3.35-.95L11 5.3v1.4L7.01 9.49l-1.35-.46-.39-1.34c1.01-1.57 2.56-2.77 4.38-3.34M7.08 17.11l-1.14.1C4.73 15.81 4 13.99 4 12c0-.12.01-.23.02-.35l1-.73 1.38.48 1.46 4.34zm7.42 2.48c-.79.26-1.63.41-2.5.41s-1.71-.15-2.5-.41l-.69-1.49.64-1.1h5.11l.64 1.11zM14.27 15H9.73l-1.35-4.02L12 8.44l3.63 2.54zm3.79 2.21-1.14-.1-.79-1.37 1.46-4.34 1.39-.47 1 .73c.01.11.02.22.02.34 0 1.99-.73 3.81-1.94 5.21',
  }),
  'SportsSoccer',
);
export const SportsSoccerOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsSoccerOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsSoccerOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 3.3 1.35-.95c1.82.56 3.37 1.76 4.38 3.34l-.39 1.34-1.35.46L13 6.7zm-3.35-.95L11 5.3v1.4L7.01 9.49l-1.35-.46-.39-1.34c1.01-1.57 2.56-2.77 4.38-3.34M7.08 17.11l-1.14.1C4.73 15.81 4 13.99 4 12c0-.12.01-.23.02-.35l1-.73 1.38.48 1.46 4.34zm7.42 2.48c-.79.26-1.63.41-2.5.41s-1.71-.15-2.5-.41l-.69-1.49.64-1.1h5.11l.64 1.11zM14.27 15H9.73l-1.35-4.02L12 8.44l3.63 2.54zm3.79 2.21-1.14-.1-.79-1.37 1.46-4.34 1.39-.47 1 .73c.01.11.02.22.02.34 0 1.99-.73 3.81-1.94 5.21',
  }),
  'SportsSoccerOutlined',
);
export const SportsSoccerRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsSoccerRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsSoccerRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 3.3 1.35-.95c1.82.56 3.37 1.76 4.38 3.34l-.39 1.34-1.35.46L13 6.7zm-3.35-.95L11 5.3v1.4L7.01 9.49l-1.35-.46-.39-1.34c1.01-1.57 2.56-2.77 4.38-3.34M7.08 17.11l-1.14.1C4.73 15.81 4 13.99 4 12c0-.12.01-.23.02-.35l1-.73 1.38.48 1.46 4.34zm7.42 2.48c-.79.26-1.63.41-2.5.41s-1.71-.15-2.5-.41l-.69-1.49.64-1.1h5.11l.64 1.11zM14.27 15H9.73l-1.35-4.02L12 8.44l3.63 2.54zm3.79 2.21-1.14-.1-.79-1.37 1.46-4.34 1.39-.47 1 .73c.01.11.02.22.02.34 0 1.99-.73 3.81-1.94 5.21',
  }),
  'SportsSoccerRounded',
);
export const SportsSoccerSharpIcon = (props?: KTRawAttr) => {
  const s = _SportsSoccerSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsSoccerSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 3.3 1.35-.95c1.82.56 3.37 1.76 4.38 3.34l-.39 1.34-1.35.46L13 6.7zm-3.35-.95L11 5.3v1.4L7.01 9.49l-1.35-.46-.39-1.34c1.01-1.57 2.56-2.77 4.38-3.34M7.08 17.11l-1.14.1C4.73 15.81 4 13.99 4 12c0-.12.01-.23.02-.35l1-.73 1.38.48 1.46 4.34zm7.42 2.48c-.79.26-1.63.41-2.5.41s-1.71-.15-2.5-.41l-.69-1.49.64-1.1h5.11l.64 1.11zM14.27 15H9.73l-1.35-4.02L12 8.44l3.63 2.54zm3.79 2.21-1.14-.1-.79-1.37 1.46-4.34 1.39-.47 1 .73c.01.11.02.22.02.34 0 1.99-.73 3.81-1.94 5.21',
  }),
  'SportsSoccerSharp',
);
export const SportsSoccerTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsSoccerTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsSoccerTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M7.01 9.49 11 6.7V5.3l-1.35-.95c-1.82.57-3.37 1.77-4.38 3.34l.39 1.34zm-2 1.43-1 .73c0 .12-.01.23-.01.35 0 1.99.73 3.81 1.94 5.21l1.14-.1.79-1.37L6.4 11.4zm13.33-1.89.39-1.34c-1.01-1.57-2.55-2.77-4.38-3.34L13 5.3v1.4l3.99 2.79zm-9.97 1.95L9.73 15h4.54l1.36-4.02L12 8.44zM9.45 17l-.64 1.11.69 1.49c.79.25 1.63.4 2.5.4s1.71-.15 2.5-.41l.69-1.49-.64-1.1zm10.53-5.35-1-.73-1.38.48-1.46 4.34.79 1.37 1.14.1C19.27 15.81 20 13.99 20 12c0-.12-.01-.23-.02-.35',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 3.3 1.35-.95c1.82.56 3.37 1.76 4.38 3.34l-.39 1.34-1.35.46L13 6.7zm-3.35-.95L11 5.3v1.4L7.01 9.49l-1.35-.46-.39-1.34c1.01-1.57 2.56-2.77 4.38-3.34M7.08 17.11l-1.14.1C4.73 15.81 4 13.99 4 12c0-.12.01-.23.02-.35l1-.73 1.38.48 1.46 4.34zm7.42 2.48c-.79.26-1.63.41-2.5.41s-1.71-.15-2.5-.41l-.69-1.49.64-1.1h5.11l.64 1.11zM14.27 15H9.73l-1.35-4.02L12 8.44l3.63 2.54zm3.79 2.21-1.14-.1-.79-1.37 1.46-4.34 1.39-.47 1 .73c.01.11.02.22.02.34 0 1.99-.73 3.81-1.94 5.21',
      },
      '1',
    ),
  ],
  'SportsSoccerTwoTone',
);
export const SportsTennisIcon = (props?: KTRawAttr) => {
  const s = _SportsTennisIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsTennisIcon = svg(
  svg('path', {
    d: 'M19.52 2.49C17.18.15 12.9.62 9.97 3.55c-1.6 1.6-2.52 3.87-2.54 5.46-.02 1.58.26 3.89-1.35 5.5l-4.24 4.24 1.42 1.42 4.24-4.24c1.61-1.61 3.92-1.33 5.5-1.35s3.86-.94 5.46-2.54c2.92-2.93 3.4-7.21 1.06-9.55m-9.2 9.19c-1.53-1.53-1.05-4.61 1.06-6.72s5.18-2.59 6.72-1.06c1.53 1.53 1.05 4.61-1.06 6.72s-5.18 2.59-6.72 1.06M18 17c.53 0 1.04.21 1.41.59.78.78.78 2.05 0 2.83-.37.37-.88.58-1.41.58s-1.04-.21-1.41-.59c-.78-.78-.78-2.05 0-2.83.37-.37.88-.58 1.41-.58m0-2c-1.02 0-2.05.39-2.83 1.17-1.56 1.56-1.56 4.09 0 5.66.78.78 1.81 1.17 2.83 1.17s2.05-.39 2.83-1.17c1.56-1.56 1.56-4.09 0-5.66C20.05 15.39 19.02 15 18 15',
  }),
  'SportsTennis',
);
export const SportsTennisOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsTennisOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsTennisOutlinedIcon = svg(
  svg('path', {
    d: 'M19.52 2.49C17.18.15 12.9.62 9.97 3.55c-1.6 1.6-2.52 3.87-2.54 5.46-.02 1.58.26 3.89-1.35 5.5l-4.24 4.24 1.42 1.42 4.24-4.24c1.61-1.61 3.92-1.33 5.5-1.35s3.86-.94 5.46-2.54c2.92-2.93 3.4-7.21 1.06-9.55m-9.2 9.19c-1.53-1.53-1.05-4.61 1.06-6.72s5.18-2.59 6.72-1.06c1.53 1.53 1.05 4.61-1.06 6.72s-5.18 2.59-6.72 1.06M18 17c.53 0 1.04.21 1.41.59.78.78.78 2.05 0 2.83-.37.37-.88.58-1.41.58s-1.04-.21-1.41-.59c-.78-.78-.78-2.05 0-2.83.37-.37.88-.58 1.41-.58m0-2c-1.02 0-2.05.39-2.83 1.17-1.56 1.56-1.56 4.09 0 5.66.78.78 1.81 1.17 2.83 1.17s2.05-.39 2.83-1.17c1.56-1.56 1.56-4.09 0-5.66C20.05 15.39 19.02 15 18 15',
  }),
  'SportsTennisOutlined',
);
export const SportsTennisRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsTennisRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsTennisRoundedIcon = svg(
  svg('path', {
    d: 'M19.52 2.49C17.18.15 12.9.62 9.97 3.55c-1.6 1.6-2.52 3.87-2.54 5.46-.02 1.58.26 3.89-1.35 5.5l-3.54 3.53c-.39.39-.39 1.02 0 1.42.39.39 1.02.39 1.42 0l3.53-3.54c1.61-1.61 3.92-1.33 5.5-1.35s3.86-.94 5.46-2.54c2.93-2.92 3.41-7.2 1.07-9.54m-9.2 9.19c-1.53-1.53-1.05-4.61 1.06-6.72s5.18-2.59 6.72-1.06c1.53 1.53 1.05 4.61-1.06 6.72s-5.18 2.59-6.72 1.06M18 17c.53 0 1.04.21 1.41.59.78.78.78 2.05 0 2.83-.37.37-.88.58-1.41.58s-1.04-.21-1.41-.59c-.78-.78-.78-2.05 0-2.83.37-.37.88-.58 1.41-.58m0-2c-1.02 0-2.05.39-2.83 1.17-1.56 1.56-1.56 4.09 0 5.66.78.78 1.81 1.17 2.83 1.17s2.05-.39 2.83-1.17c1.56-1.56 1.56-4.09 0-5.66C20.05 15.39 19.02 15 18 15',
  }),
  'SportsTennisRounded',
);
export const SportsTennisSharpIcon = (props?: KTRawAttr) => {
  const s = _SportsTennisSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsTennisSharpIcon = svg(
  svg('path', {
    d: 'M19.52 2.49C17.18.15 12.9.62 9.97 3.55c-1.6 1.6-2.52 3.87-2.54 5.46-.02 1.58.26 3.89-1.35 5.5l-4.24 4.24 1.42 1.42 4.24-4.24c1.61-1.61 3.92-1.33 5.5-1.35s3.86-.94 5.46-2.54c2.92-2.93 3.4-7.21 1.06-9.55m-9.2 9.19c-1.53-1.53-1.05-4.61 1.06-6.72s5.18-2.59 6.72-1.06c1.53 1.53 1.05 4.61-1.06 6.72s-5.18 2.59-6.72 1.06M18 17c.53 0 1.04.21 1.41.59.78.78.78 2.05 0 2.83-.37.37-.88.58-1.41.58s-1.04-.21-1.41-.59c-.78-.78-.78-2.05 0-2.83.37-.37.88-.58 1.41-.58m0-2c-1.02 0-2.05.39-2.83 1.17-1.56 1.56-1.56 4.09 0 5.66.78.78 1.81 1.17 2.83 1.17s2.05-.39 2.83-1.17c1.56-1.56 1.56-4.09 0-5.66C20.05 15.39 19.02 15 18 15',
  }),
  'SportsTennisSharp',
);
export const SportsTennisTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsTennisTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsTennisTwoToneIcon = svg(
  svg('path', {
    d: 'M19.52 2.49C17.18.15 12.9.62 9.97 3.55c-1.6 1.6-2.52 3.87-2.54 5.46-.02 1.58.26 3.89-1.35 5.5l-4.24 4.24 1.42 1.42 4.24-4.24c1.61-1.61 3.92-1.33 5.5-1.35s3.86-.94 5.46-2.54c2.92-2.93 3.4-7.21 1.06-9.55m-9.2 9.19c-1.53-1.53-1.05-4.61 1.06-6.72s5.18-2.59 6.72-1.06c1.53 1.53 1.05 4.61-1.06 6.72s-5.18 2.59-6.72 1.06M18 17c.53 0 1.04.21 1.41.59.78.78.78 2.05 0 2.83-.37.37-.88.58-1.41.58s-1.04-.21-1.41-.59c-.78-.78-.78-2.05 0-2.83.37-.37.88-.58 1.41-.58m0-2c-1.02 0-2.05.39-2.83 1.17-1.56 1.56-1.56 4.09 0 5.66.78.78 1.81 1.17 2.83 1.17s2.05-.39 2.83-1.17c1.56-1.56 1.56-4.09 0-5.66C20.05 15.39 19.02 15 18 15',
  }),
  'SportsTennisTwoTone',
);
export const SportsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M11.23 6c-1.66 0-3.22.66-4.36 1.73C6.54 6.73 5.61 6 4.5 6 3.12 6 2 7.12 2 8.5S3.12 11 4.5 11c.21 0 .41-.03.61-.08-.05.25-.09.51-.1.78-.18 3.68 2.95 6.68 6.68 6.27 2.55-.28 4.68-2.26 5.19-4.77.15-.71.15-1.4.06-2.06-.09-.6.38-1.13.99-1.13H22V6zM4.5 9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5m6.5 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3',
      },
      '0',
    ),
    svg('circle', { cx: '11', cy: '12', r: '2' }, '1'),
  ],
  'SportsTwoTone',
);
export const SportsVolleyballIcon = (props?: KTRawAttr) => {
  const s = _SportsVolleyballIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsVolleyballIcon = svg(
  svg('path', {
    d: 'M6 4.01C3.58 5.84 2 8.73 2 12c0 1.46.32 2.85.89 4.11L6 14.31zm5 7.41V2.05c-1.06.11-2.07.38-3 .79v10.32zm1 1.73-8.11 4.68c.61.84 1.34 1.59 2.18 2.2L15 14.89zm1-5.19v3.46l8.11 4.68c.42-.93.7-1.93.82-2.98zM8.07 21.2c1.21.51 2.53.8 3.93.8 3.34 0 6.29-1.65 8.11-4.16L17 16.04zm13.85-10.39c-.55-4.63-4.26-8.3-8.92-8.76v3.6z',
  }),
  'SportsVolleyball',
);
export const SportsVolleyballOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SportsVolleyballOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsVolleyballOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 2.07c3.07.38 5.57 2.52 6.54 5.36L13 5.65zM8 5.08c1.18-.69 3.33-1.06 3-1.02v7.35l-3 1.73zM4.63 15.1c-.4-.96-.63-2-.63-3.1 0-2.02.76-3.86 2-5.27v7.58zm1.01 1.73L12 13.15l3 1.73-6.98 4.03c-.93-.53-1.74-1.23-2.38-2.08M12 20c-.54 0-1.07-.06-1.58-.16l6.58-3.8 1.36.78C16.9 18.75 14.6 20 12 20m1-8.58V7.96l7 4.05c0 1.1-.23 2.14-.63 3.09z',
  }),
  'SportsVolleyballOutlined',
);
export const SportsVolleyballRoundedIcon = (props?: KTRawAttr) => {
  const s = _SportsVolleyballRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsVolleyballRoundedIcon = svg(
  svg('path', {
    d: 'M6 4.01C3.58 5.84 2 8.73 2 12c0 1.46.32 2.85.89 4.11L6 14.31zm5 7.41V2.05c-1.06.11-2.07.38-3 .79v10.32zm1 1.73-8.11 4.68c.61.84 1.34 1.59 2.18 2.2L15 14.89zm1-5.19v3.46l8.11 4.68c.42-.93.7-1.93.82-2.98zM8.07 21.2c1.21.51 2.53.8 3.93.8 3.34 0 6.29-1.65 8.11-4.16L17 16.04zm13.85-10.39c-.55-4.63-4.26-8.3-8.92-8.76v3.6z',
  }),
  'SportsVolleyballRounded',
);
export const SportsVolleyballSharpIcon = (props?: KTRawAttr) => {
  const s = _SportsVolleyballSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsVolleyballSharpIcon = svg(
  svg('path', {
    d: 'M6 4.01C3.58 5.84 2 8.73 2 12c0 1.46.32 2.85.89 4.11L6 14.31zm5 7.41V2.05c-1.06.11-2.07.38-3 .79v10.32zm1 1.73-8.11 4.68c.61.84 1.34 1.59 2.18 2.2L15 14.89zm1-5.19v3.46l8.11 4.68c.42-.93.7-1.93.82-2.98zM8.07 21.2c1.21.51 2.53.8 3.93.8 3.34 0 6.29-1.65 8.11-4.16L17 16.04zm13.85-10.39c-.55-4.63-4.26-8.3-8.92-8.76v3.6z',
  }),
  'SportsVolleyballSharp',
);
export const SportsVolleyballTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SportsVolleyballTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SportsVolleyballTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M6 6.73C4.76 8.14 4 9.98 4 12c0 1.1.23 2.14.63 3.1L6 14.31zm5-2.65c-.25.06-1.98.42-3 1.01v8.07l3-1.73zm2-.01v1.58l6.54 3.79c-.97-2.85-3.47-4.99-6.54-5.37m-1 9.08-6.36 3.67c.64.85 1.46 1.55 2.38 2.09L15 14.89zm1-5.19v3.46l6.37 3.68c.4-.95.63-1.99.63-3.09zm-2.58 11.88c.51.1 1.04.16 1.58.16 2.6 0 4.9-1.25 6.36-3.17L17 16.04z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 2.07c3.07.38 5.57 2.52 6.54 5.36L13 5.65zM8 5.08c1.02-.59 2.75-.95 3-1.01v7.35l-3 1.73zM4.63 15.1c-.4-.96-.63-2-.63-3.1 0-2.02.76-3.86 2-5.27v7.58zm1.01 1.73L12 13.15l3 1.73-6.98 4.03c-.93-.53-1.74-1.23-2.38-2.08M12 20c-.54 0-1.07-.06-1.58-.16l6.58-3.8 1.36.78C16.9 18.75 14.6 20 12 20m1-8.58V7.96l7 4.05c0 1.1-.23 2.14-.63 3.09z',
      },
      '1',
    ),
  ],
  'SportsVolleyballTwoTone',
);
export const SquareIcon = (props?: KTRawAttr) => {
  const s = _SquareIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SquareIcon = svg(svg('path', { d: 'M3 3h18v18H3z' }), 'Square');
export const SquareFootIcon = (props?: KTRawAttr) => {
  const s = _SquareFootIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SquareFootIcon = svg(
  svg('path', {
    d: 'm17.66 17.66-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L9.7 9.7l-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L4 4v14c0 1.1.9 2 2 2h14zM7 17v-5.76L12.76 17z',
  }),
  'SquareFoot',
);
export const SquareFootOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SquareFootOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SquareFootOutlinedIcon = svg(
  svg('path', {
    d: 'm17.66 17.66-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L9.7 9.7l-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L4 4v14c0 1.1.9 2 2 2h14zM7 17v-5.76L12.76 17z',
  }),
  'SquareFootOutlined',
);
export const SquareFootRoundedIcon = (props?: KTRawAttr) => {
  const s = _SquareFootRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SquareFootRoundedIcon = svg(
  svg('path', {
    d: 'm17.66 17.66-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71-1.94-1.94-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71-1.94-1.94-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71L9.7 9.7l-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71-1.94-1.94-.71.71c-.2.2-.51.2-.71 0s-.2-.51 0-.71l.71-.71-1.49-1.49c-.31-.31-.85-.09-.85.36V18c0 1.1.9 2 2 2h12.79c.45 0 .67-.54.35-.85zM7 16v-4.76L12.76 17H8c-.55 0-1-.45-1-1',
  }),
  'SquareFootRounded',
);
export const SquareFootSharpIcon = (props?: KTRawAttr) => {
  const s = _SquareFootSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SquareFootSharpIcon = svg(
  svg('path', {
    d: 'm17.66 17.66-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L9.7 9.7l-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L4 4v16h16zM7 17v-5.76L12.76 17z',
  }),
  'SquareFootSharp',
);
export const SquareFootTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SquareFootTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SquareFootTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 17h5.76L7 11.24z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'm17.66 17.66-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L9.7 9.7l-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L4 4v14c0 1.1.9 2 2 2h14zM7 17v-5.76L12.76 17z',
      },
      '1',
    ),
  ],
  'SquareFootTwoTone',
);
export const SquareOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SquareOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SquareOutlinedIcon = svg(svg('path', { d: 'M3 3v18h18V3zm16 16H5V5h14z' }), 'SquareOutlined');
export const SquareRoundedIcon = (props?: KTRawAttr) => {
  const s = _SquareRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SquareRoundedIcon = svg(
  svg('path', { d: 'M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2' }),
  'SquareRounded',
);
export const SquareSharpIcon = (props?: KTRawAttr) => {
  const s = _SquareSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SquareSharpIcon = svg(svg('path', { d: 'M3 3h18v18H3z' }), 'SquareSharp');
export const SquareTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SquareTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SquareTwoToneIcon = svg(
  [svg('path', { d: 'M5 5h14v14H5z', opacity: '.3' }, '0'), svg('path', { d: 'M3 3v18h18V3zm16 16H5V5h14z' }, '1')],
  'SquareTwoTone',
);
export const SsidChartIcon = (props?: KTRawAttr) => {
  const s = _SsidChartIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SsidChartIcon = svg(
  svg('path', {
    d: 'M21 5.47 12 12 7.62 7.62 3 11V8.52L7.83 5l4.38 4.38L21 3zM21 15h-4.7l-4.17 3.34L6 12.41l-3 2.13V17l2.8-2 6.2 6 5-4h4z',
  }),
  'SsidChart',
);
export const SsidChartOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SsidChartOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SsidChartOutlinedIcon = svg(
  svg('path', {
    d: 'M21 5.47 12 12 7.62 7.62 3 11V8.52L7.83 5l4.38 4.38L21 3zM21 15h-4.7l-4.17 3.34L6 12.41l-3 2.13V17l2.8-2 6.2 6 5-4h4z',
  }),
  'SsidChartOutlined',
);
export const SsidChartRoundedIcon = (props?: KTRawAttr) => {
  const s = _SsidChartRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SsidChartRoundedIcon = svg(
  svg('path', {
    d: 'M3 9.03c0-.32.15-.62.41-.81L7.14 5.5c.4-.29.95-.25 1.3.1l3.78 3.78 7.2-5.23c.65-.48 1.58-.01 1.58.81 0 .32-.15.62-.41.81l-7.9 5.73c-.4.29-.95.25-1.29-.1L7.62 7.62 4.59 9.84c-.66.48-1.59.01-1.59-.81M21 16c0-.55-.45-1-1-1h-3.35c-.23 0-.45.08-.62.22l-3.9 3.12-5.53-5.35c-.35-.34-.88-.38-1.27-.1l-1.9 1.35c-.27.19-.43.5-.43.82 0 .81.92 1.29 1.58.81L5.8 15l5.57 5.39c.36.35.93.38 1.32.06L17 17h3c.55 0 1-.45 1-1',
  }),
  'SsidChartRounded',
);
export const SsidChartSharpIcon = (props?: KTRawAttr) => {
  const s = _SsidChartSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SsidChartSharpIcon = svg(
  svg('path', {
    d: 'M21 5.47 12 12 7.62 7.62 3 11V8.52L7.83 5l4.38 4.38L21 3zM21 15h-4.7l-4.17 3.34L6 12.41l-3 2.13V17l2.8-2 6.2 6 5-4h4z',
  }),
  'SsidChartSharp',
);
export const SsidChartTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SsidChartTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SsidChartTwoToneIcon = svg(
  svg('path', {
    d: 'M21 5.47 12 12 7.62 7.62 3 11V8.52L7.83 5l4.38 4.38L21 3zM21 15h-4.7l-4.17 3.34L6 12.41l-3 2.13V17l2.8-2 6.2 6 5-4h4z',
  }),
  'SsidChartTwoTone',
);
export const StackedBarChartIcon = (props?: KTRawAttr) => {
  const s = _StackedBarChartIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StackedBarChartIcon = svg(
  svg('path', { d: 'M4 9h4v11H4zm0-5h4v4H4zm6 3h4v4h-4zm6 3h4v4h-4zm0 5h4v5h-4zm-6-3h4v8h-4z' }),
  'StackedBarChart',
);
export const StackedBarChartOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StackedBarChartOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StackedBarChartOutlinedIcon = svg(
  svg('path', { d: 'M4 9h4v11H4zm0-5h4v4H4zm6 3h4v4h-4zm6 3h4v4h-4zm0 5h4v5h-4zm-6-3h4v8h-4z' }),
  'StackedBarChartOutlined',
);
export const StackedBarChartRoundedIcon = (props?: KTRawAttr) => {
  const s = _StackedBarChartRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StackedBarChartRoundedIcon = svg(
  svg('path', {
    d: 'M6 20c1.1 0 2-.9 2-2V9H4v9c0 1.1.9 2 2 2M4 8h4V6c0-1.1-.9-2-2-2s-2 .9-2 2zm6 3h4V9c0-1.1-.9-2-2-2s-2 .9-2 2zm6 1v2h4v-2c0-1.1-.9-2-2-2s-2 .9-2 2m2 8c1.1 0 2-.9 2-2v-3h-4v3c0 1.1.9 2 2 2m-6 0c1.1 0 2-.9 2-2v-6h-4v6c0 1.1.9 2 2 2',
  }),
  'StackedBarChartRounded',
);
export const StackedBarChartSharpIcon = (props?: KTRawAttr) => {
  const s = _StackedBarChartSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StackedBarChartSharpIcon = svg(
  svg('path', { d: 'M4 9h4v11H4zm0-5h4v4H4zm6 3h4v4h-4zm6 3h4v4h-4zm0 5h4v5h-4zm-6-3h4v8h-4z' }),
  'StackedBarChartSharp',
);
export const StackedBarChartTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StackedBarChartTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StackedBarChartTwoToneIcon = svg(
  svg('path', { d: 'M4 9h4v11H4zm0-5h4v4H4zm6 3h4v4h-4zm6 3h4v4h-4zm0 5h4v5h-4zm-6-3h4v8h-4z' }),
  'StackedBarChartTwoTone',
);
export const StackedLineChartIcon = (props?: KTRawAttr) => {
  const s = _StackedLineChartIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StackedLineChartIcon = svg(
  svg('path', {
    d: 'm2 19.99 7.5-7.51 4 4 7.09-7.97L22 9.92l-8.5 9.56-4-4-6 6.01zm1.5-4.5 6-6.01 4 4L22 3.92l-1.41-1.41-7.09 7.97-4-4L2 13.99z',
  }),
  'StackedLineChart',
);
export const StackedLineChartOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StackedLineChartOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StackedLineChartOutlinedIcon = svg(
  svg('path', {
    d: 'm2 19.99 7.5-7.51 4 4 7.09-7.97L22 9.92l-8.5 9.56-4-4-6 6.01zm1.5-4.5 6-6.01 4 4L22 3.92l-1.41-1.41-7.09 7.97-4-4L2 13.99z',
  }),
  'StackedLineChartOutlined',
);
export const StackedLineChartRoundedIcon = (props?: KTRawAttr) => {
  const s = _StackedLineChartRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StackedLineChartRoundedIcon = svg(
  svg('path', {
    d: 'm2.79 14.78-.09-.09a.996.996 0 0 1 0-1.41l6.09-6.1c.39-.39 1.02-.39 1.41 0l3.29 3.29 6.39-7.18c.38-.43 1.05-.44 1.45-.04.37.38.39.98.04 1.37l-7.17 8.07c-.38.43-1.04.45-1.45.04L9.5 9.48l-5.3 5.3c-.38.39-1.02.39-1.41 0m1.41 6 5.3-5.3 3.25 3.25c.41.41 1.07.39 1.45-.04l7.17-8.07c.35-.39.33-.99-.04-1.37-.4-.4-1.07-.39-1.45.04l-6.39 7.18-3.29-3.29a.996.996 0 0 0-1.41 0l-6.09 6.1c-.39.39-.39 1.02 0 1.41l.09.09c.39.39 1.03.39 1.41 0',
  }),
  'StackedLineChartRounded',
);
export const StackedLineChartSharpIcon = (props?: KTRawAttr) => {
  const s = _StackedLineChartSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StackedLineChartSharpIcon = svg(
  svg('path', {
    d: 'm2 19.99 7.5-7.51 4 4 7.09-7.97L22 9.92l-8.5 9.56-4-4-6 6.01zm1.5-4.5 6-6.01 4 4L22 3.92l-1.41-1.41-7.09 7.97-4-4L2 13.99z',
  }),
  'StackedLineChartSharp',
);
export const StackedLineChartTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StackedLineChartTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StackedLineChartTwoToneIcon = svg(
  svg('path', {
    d: 'm2 19.99 7.5-7.51 4 4 7.09-7.97L22 9.92l-8.5 9.56-4-4-6 6.01zm1.5-4.5 6-6.01 4 4L22 3.92l-1.41-1.41-7.09 7.97-4-4L2 13.99z',
  }),
  'StackedLineChartTwoTone',
);
export const StadiumIcon = (props?: KTRawAttr) => {
  const s = _StadiumIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StadiumIcon = svg(
  svg('path', {
    d: 'M7 5 3 7V3zm11-2v4l4-2zm-7-1v4l4-2zm-6 8.04c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04M15 17H9v4.88c-4.06-.39-7-1.54-7-2.88v-9c0-1.66 4.48-3 10-3s10 1.34 10 3v9c0 1.34-2.94 2.48-7 2.87z',
  }),
  'Stadium',
);
export const StadiumOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StadiumOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StadiumOutlinedIcon = svg(
  svg('path', {
    d: 'M7 5 3 7V3zm11-2v4l4-2zm-7-1v4l4-2zm2 16h-2v4c-5.05-.15-9-1.44-9-3v-9c0-1.66 4.48-3 10-3s10 1.34 10 3v9c0 1.56-3.95 2.85-9 3zm-8-7.96c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04m15 1.76c-1.82.73-4.73 1.2-8 1.2s-6.18-.47-8-1.2v6.78c.61.41 2.36 1.01 5 1.28V16h6v3.86c2.64-.27 4.39-.87 5-1.28z',
  }),
  'StadiumOutlined',
);
export const StadiumRoundedIcon = (props?: KTRawAttr) => {
  const s = _StadiumRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StadiumRoundedIcon = svg(
  svg('path', {
    d: 'M6.11 5.45 3.72 6.64C3.39 6.8 3 6.56 3 6.19V3.81c0-.37.39-.61.72-.45L6.1 4.55c.37.19.37.71.01.9M18 3.81v2.38c0 .37.39.61.72.45l2.38-1.19c.37-.18.37-.71 0-.89l-2.38-1.19c-.33-.17-.72.07-.72.44m-7-1v2.38c0 .37.39.61.72.45l2.38-1.19c.37-.18.37-.71 0-.89l-2.38-1.19c-.33-.17-.72.07-.72.44m-6 7.23c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04M14 17h-4c-.55 0-1 .45-1 1v3.88c-4.06-.39-7-1.54-7-2.88v-9c0-1.66 4.48-3 10-3s10 1.34 10 3v9c0 1.34-2.94 2.48-7 2.87V18c0-.55-.45-1-1-1',
  }),
  'StadiumRounded',
);
export const StadiumSharpIcon = (props?: KTRawAttr) => {
  const s = _StadiumSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StadiumSharpIcon = svg(
  svg('path', {
    d: 'M7 5 3 7V3zm11-2v4l4-2zm-7-1v4l4-2zm-6 8.04c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04M15 17H9v4.88c-4.06-.39-7-1.54-7-2.88v-9c0-1.66 4.48-3 10-3s10 1.34 10 3v9c0 1.34-2.94 2.48-7 2.87z',
  }),
  'StadiumSharp',
);
export const StadiumTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StadiumTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StadiumTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M5 10.04c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04m15 1.76c-1.82.73-4.73 1.2-8 1.2s-6.18-.47-8-1.2v6.78c.61.41 2.36 1.01 5 1.28V16h6v3.86c2.64-.27 4.39-.87 5-1.28z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M7 5 3 7V3zm11-2v4l4-2zm-7-1v4l4-2zm2 16h-2v4c-5.05-.15-9-1.44-9-3v-9c0-1.66 4.48-3 10-3s10 1.34 10 3v9c0 1.56-3.95 2.85-9 3zm-8-7.96c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04m15 1.76c-1.82.73-4.73 1.2-8 1.2s-6.18-.47-8-1.2v6.78c.61.41 2.36 1.01 5 1.28V16h6v3.86c2.64-.27 4.39-.87 5-1.28z',
      },
      '1',
    ),
  ],
  'StadiumTwoTone',
);
export const StairsIcon = (props?: KTRawAttr) => {
  const s = _StairsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StairsIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 5h-2.42v3.33H13v3.33h-2.58V18H6v-2h2.42v-3.33H11V9.33h2.58V6H18z',
  }),
  'Stairs',
);
export const StairsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StairsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StairsOutlinedIcon = svg(
  svg('path', {
    d: 'M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 3h-4.42v3.33H11v3.33H8.42V16H6v2h4.42v-3.33H13v-3.33h2.58V8H18z',
  }),
  'StairsOutlined',
);
export const StairsRoundedIcon = (props?: KTRawAttr) => {
  const s = _StairsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StairsRoundedIcon = svg(
  svg('path', {
    d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 5h-1.42v3.33H13v3.33h-2.58l.03 3.34H7c-.55 0-1-.45-1-1s.45-1 1-1h1.42v-3.33H11V9.33h2.58V6H17c.55 0 1 .45 1 1s-.45 1-1 1',
  }),
  'StairsRounded',
);
export const StairsSharpIcon = (props?: KTRawAttr) => {
  const s = _StairsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StairsSharpIcon = svg(
  svg('path', { d: 'M3 3v18h18V3zm15 5h-2.42v3.33H13v3.33h-2.58V18H6v-2h2.42v-3.33H11V9.33h2.58V6H18z' }),
  'StairsSharp',
);
export const StairsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StairsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StairsTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M19 5v14H5V5zm-1 1h-4.42v3.33H11v3.33H8.42V16H6v2h4.42v-3.33H13v-3.33h2.58V8H18z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 3h-4.42v3.33H11v3.33H8.42V16H6v2h4.42v-3.33H13v-3.33h2.58V8H18z',
      },
      '1',
    ),
  ],
  'StairsTwoTone',
);
export const StarIcon = (props?: KTRawAttr) => {
  const s = _StarIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarIcon = svg(
  svg('path', { d: 'M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' }),
  'Star',
);
export const StarBorderIcon = (props?: KTRawAttr) => {
  const s = _StarBorderIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarBorderIcon = svg(
  svg('path', {
    d: 'm22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z',
  }),
  'StarBorder',
);
export const StarBorderOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StarBorderOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarBorderOutlinedIcon = svg(
  svg('path', {
    d: 'm22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z',
  }),
  'StarBorderOutlined',
);
export const StarBorderPurple500Icon = (props?: KTRawAttr) => {
  const s = _StarBorderPurple500Icon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarBorderPurple500Icon = svg(
  svg('path', {
    d: 'm12 8.89.94 3.11h2.82l-2.27 1.62.93 3.01L12 14.79l-2.42 1.84.93-3.01L8.24 12h2.82zM12 2l-2.42 8H2l6.17 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10h-7.58z',
  }),
  'StarBorderPurple500',
);
export const StarBorderPurple500OutlinedIcon = (props?: KTRawAttr) => {
  const s = _StarBorderPurple500OutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarBorderPurple500OutlinedIcon = svg(
  svg('path', {
    d: 'm22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z',
  }),
  'StarBorderPurple500Outlined',
);
export const StarBorderPurple500RoundedIcon = (props?: KTRawAttr) => {
  const s = _StarBorderPurple500RoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarBorderPurple500RoundedIcon = svg(
  svg('path', {
    d: 'm12 8.89.94 3.11h2.82l-2.27 1.62.93 3.01L12 14.79l-2.42 1.84.93-3.01L8.24 12h2.82zM9.58 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8 3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61 3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.46l-1.47-4.84c-.29-.95-1.63-.95-1.91 0z',
  }),
  'StarBorderPurple500Rounded',
);
export const StarBorderPurple500SharpIcon = (props?: KTRawAttr) => {
  const s = _StarBorderPurple500SharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarBorderPurple500SharpIcon = svg(
  svg('path', {
    d: 'm22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z',
  }),
  'StarBorderPurple500Sharp',
);
export const StarBorderPurple500TwoToneIcon = (props?: KTRawAttr) => {
  const s = _StarBorderPurple500TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarBorderPurple500TwoToneIcon = svg(
  svg('path', {
    d: 'm12 8.89.94 3.11h2.82l-2.27 1.62.93 3.01L12 14.79l-2.42 1.84.93-3.01L8.24 12h2.82zM12 2l-2.42 8H2l6.17 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10h-7.58z',
  }),
  'StarBorderPurple500TwoTone',
);
export const StarBorderRoundedIcon = (props?: KTRawAttr) => {
  const s = _StarBorderRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarBorderRoundedIcon = svg(
  svg('path', {
    d: 'm19.65 9.04-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z',
  }),
  'StarBorderRounded',
);
export const StarBorderSharpIcon = (props?: KTRawAttr) => {
  const s = _StarBorderSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarBorderSharpIcon = svg(
  svg('path', {
    d: 'm22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z',
  }),
  'StarBorderSharp',
);
export const StarBorderTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StarBorderTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarBorderTwoToneIcon = svg(
  svg('path', {
    d: 'm22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z',
  }),
  'StarBorderTwoTone',
);
export const StarHalfIcon = (props?: KTRawAttr) => {
  const s = _StarHalfIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarHalfIcon = svg(
  svg('path', {
    d: 'm22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z',
  }),
  'StarHalf',
);
export const StarHalfOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StarHalfOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarHalfOutlinedIcon = svg(
  svg('path', {
    d: 'm22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z',
  }),
  'StarHalfOutlined',
);
export const StarHalfRoundedIcon = (props?: KTRawAttr) => {
  const s = _StarHalfRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarHalfRoundedIcon = svg(
  svg('path', {
    d: 'm19.65 9.04-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z',
  }),
  'StarHalfRounded',
);
export const StarHalfSharpIcon = (props?: KTRawAttr) => {
  const s = _StarHalfSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarHalfSharpIcon = svg(
  svg('path', {
    d: 'm22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z',
  }),
  'StarHalfSharp',
);
export const StarHalfTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StarHalfTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarHalfTwoToneIcon = svg(
  svg('path', {
    d: 'm22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z',
  }),
  'StarHalfTwoTone',
);
export const StarOutlineIcon = (props?: KTRawAttr) => {
  const s = _StarOutlineIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarOutlineIcon = svg(
  svg('path', {
    d: 'm22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z',
  }),
  'StarOutline',
);
export const StarOutlineOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StarOutlineOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarOutlineOutlinedIcon = svg(
  svg('path', {
    d: 'm22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z',
  }),
  'StarOutlineOutlined',
);
export const StarOutlineRoundedIcon = (props?: KTRawAttr) => {
  const s = _StarOutlineRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarOutlineRoundedIcon = svg(
  svg('path', {
    d: 'm19.65 9.04-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z',
  }),
  'StarOutlineRounded',
);
export const StarOutlineSharpIcon = (props?: KTRawAttr) => {
  const s = _StarOutlineSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarOutlineSharpIcon = svg(
  svg('path', {
    d: 'm22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z',
  }),
  'StarOutlineSharp',
);
export const StarOutlineTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StarOutlineTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarOutlineTwoToneIcon = svg(
  svg('path', {
    d: 'm22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z',
  }),
  'StarOutlineTwoTone',
);
export const StarOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StarOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarOutlinedIcon = svg(
  svg('path', { d: 'M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' }),
  'StarOutlined',
);
export const StarPurple500Icon = (props?: KTRawAttr) => {
  const s = _StarPurple500Icon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarPurple500Icon = svg(
  svg('path', {
    d: 'm12 8.89.94 3.11h2.82l-2.27 1.62.93 3.01L12 14.79l-2.42 1.84.93-3.01L8.24 12h2.82zM12 2l-2.42 8H2l6.17 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10h-7.58z',
  }),
  'StarPurple500',
);
export const StarPurple500OutlinedIcon = (props?: KTRawAttr) => {
  const s = _StarPurple500OutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarPurple500OutlinedIcon = svg(
  svg('path', { d: 'M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' }),
  'StarPurple500Outlined',
);
export const StarPurple500RoundedIcon = (props?: KTRawAttr) => {
  const s = _StarPurple500RoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarPurple500RoundedIcon = svg(
  svg('path', {
    d: 'm12 8.89.94 3.11h2.82l-2.27 1.62.93 3.01L12 14.79l-2.42 1.84.93-3.01L8.24 12h2.82zM9.58 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8 3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61 3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.46l-1.47-4.84c-.29-.95-1.63-.95-1.91 0z',
  }),
  'StarPurple500Rounded',
);
export const StarPurple500SharpIcon = (props?: KTRawAttr) => {
  const s = _StarPurple500SharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarPurple500SharpIcon = svg(
  svg('path', { d: 'M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' }),
  'StarPurple500Sharp',
);
export const StarPurple500TwoToneIcon = (props?: KTRawAttr) => {
  const s = _StarPurple500TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarPurple500TwoToneIcon = svg(
  svg('path', {
    d: 'm12 8.89.94 3.11h2.82l-2.27 1.62.93 3.01L12 14.79l-2.42 1.84.93-3.01L8.24 12h2.82zM12 2l-2.42 8H2l6.17 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10h-7.58z',
  }),
  'StarPurple500TwoTone',
);
export const StarRateIcon = (props?: KTRawAttr) => {
  const s = _StarRateIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarRateIcon = svg(
  svg('path', { d: 'M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z' }),
  'StarRate',
);
export const StarRateOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StarRateOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarRateOutlinedIcon = svg(
  svg('path', {
    d: 'm12 8.89.94 3.11h2.82l-2.27 1.62.93 3.01L12 14.79l-2.42 1.84.93-3.01L8.24 12h2.82zM12 2l-2.42 8H2l6.17 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10h-7.58z',
  }),
  'StarRateOutlined',
);
export const StarRateRoundedIcon = (props?: KTRawAttr) => {
  const s = _StarRateRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarRateRoundedIcon = svg(
  svg('path', {
    d: 'm14.43 10-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8 3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61 3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z',
  }),
  'StarRateRounded',
);
export const StarRateSharpIcon = (props?: KTRawAttr) => {
  const s = _StarRateSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarRateSharpIcon = svg(
  svg('path', { d: 'M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z' }),
  'StarRateSharp',
);
export const StarRateTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StarRateTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarRateTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M12.94 12 12 8.89 11.06 12H8.24l2.27 1.62-.93 3.01L12 14.79l2.42 1.84-.93-3.01L15.76 12z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M22 10h-7.58L12 2l-2.42 8H2l6.17 4.41L5.83 22 12 17.31 18.17 22l-2.35-7.59zm-7.58 6.63L12 14.79l-2.42 1.84.93-3.01L8.24 12h2.82L12 8.89l.94 3.11h2.82l-2.27 1.62z',
      },
      '1',
    ),
  ],
  'StarRateTwoTone',
);
export const StarRoundedIcon = (props?: KTRawAttr) => {
  const s = _StarRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarRoundedIcon = svg(
  svg('path', {
    d: 'm12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08z',
  }),
  'StarRounded',
);
export const StarSharpIcon = (props?: KTRawAttr) => {
  const s = _StarSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarSharpIcon = svg(
  svg('path', { d: 'M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' }),
  'StarSharp',
);
export const StarTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StarTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'm12 15.4-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z',
      },
      '1',
    ),
  ],
  'StarTwoTone',
);
export const StarsIcon = (props?: KTRawAttr) => {
  const s = _StarsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarsIcon = svg(
  svg('path', {
    d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23z',
  }),
  'Stars',
);
export const StarsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StarsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarsOutlinedIcon = svg(
  svg('path', {
    d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m7.48 7.16-5.01-.43-2-4.71c3.21.19 5.91 2.27 7.01 5.14m-5.07 6.26L12 13.98l-2.39 1.44.63-2.72-2.11-1.83 2.78-.24L12 8.06l1.09 2.56 2.78.24-2.11 1.83zm-2.86-11.4-2 4.72-5.02.43c1.1-2.88 3.8-4.97 7.02-5.15M4 12c0-.64.08-1.26.23-1.86l3.79 3.28-1.11 4.75C5.13 16.7 4 14.48 4 12m3.84 6.82L12 16.31l4.16 2.5c-1.22.75-2.64 1.19-4.17 1.19-1.52 0-2.94-.44-4.15-1.18m9.25-.65-1.11-4.75 3.79-3.28c.14.59.23 1.22.23 1.86 0 2.48-1.14 4.7-2.91 6.17',
  }),
  'StarsOutlined',
);
export const StarsRoundedIcon = (props?: KTRawAttr) => {
  const s = _StarsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarsRoundedIcon = svg(
  svg('path', {
    d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m3.23 15.39L12 15.45l-3.22 1.94c-.38.23-.85-.11-.75-.54l.85-3.66-2.83-2.45c-.33-.29-.15-.84.29-.88l3.74-.32 1.46-3.45c.17-.41.75-.41.92 0l1.46 3.44 3.74.32c.44.04.62.59.28.88l-2.83 2.45.85 3.67c.1.43-.36.77-.74.54',
  }),
  'StarsRounded',
);
export const StarsSharpIcon = (props?: KTRawAttr) => {
  const s = _StarsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarsSharpIcon = svg(
  svg('path', {
    d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23z',
  }),
  'StarsSharp',
);
export const StarsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StarsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StarsTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M19.47 9.16c-1.1-2.87-3.8-4.95-7.01-5.14l2 4.71zm-7.93-5.14c-3.22.18-5.92 2.27-7.02 5.15l5.02-.43zm-7.31 6.12C4.08 10.74 4 11.36 4 12c0 2.48 1.14 4.7 2.91 6.17l1.11-4.75zm15.54-.01-3.79 3.28 1.1 4.76C18.86 16.7 20 14.48 20 12c0-.64-.09-1.27-.23-1.87M7.84 18.82c1.21.74 2.63 1.18 4.15 1.18 1.53 0 2.95-.44 4.17-1.18L12 16.31z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m7.48 7.16-5.01-.43-2-4.71c3.21.19 5.91 2.27 7.01 5.14M12 8.06l1.09 2.56 2.78.24-2.11 1.83.63 2.73L12 13.98l-2.39 1.44.63-2.72-2.11-1.83 2.78-.24zm-.46-4.04-2 4.72-5.02.43c1.1-2.88 3.8-4.97 7.02-5.15M4 12c0-.64.08-1.26.23-1.86l3.79 3.28-1.11 4.75C5.14 16.7 4 14.48 4 12m7.99 8c-1.52 0-2.94-.44-4.15-1.18L12 16.31l4.16 2.51c-1.22.74-2.64 1.18-4.17 1.18m5.1-1.83-1.1-4.76 3.79-3.28c.13.6.22 1.23.22 1.87 0 2.48-1.14 4.7-2.91 6.17',
      },
      '1',
    ),
  ],
  'StarsTwoTone',
);
export const StartIcon = (props?: KTRawAttr) => {
  const s = _StartIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StartIcon = svg(
  svg('path', { d: 'M14.59 7.41 18.17 11H6v2h12.17l-3.59 3.59L16 18l6-6-6-6zM2 6v12h2V6z' }),
  'Start',
);
export const StartOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StartOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StartOutlinedIcon = svg(
  svg('path', { d: 'M14.59 7.41 18.17 11H6v2h12.17l-3.59 3.59L16 18l6-6-6-6zM2 6v12h2V6z' }),
  'StartOutlined',
);
export const StartRoundedIcon = (props?: KTRawAttr) => {
  const s = _StartRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StartRoundedIcon = svg(
  svg('path', {
    d: 'M15.29 17.29c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L16.7 6.7a.996.996 0 0 0-1.41 0c-.38.39-.39 1.03 0 1.42L18.17 11H7c-.55 0-1 .45-1 1s.45 1 1 1h11.17l-2.88 2.88c-.39.39-.39 1.02 0 1.41M3 18c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1',
  }),
  'StartRounded',
);
export const StartSharpIcon = (props?: KTRawAttr) => {
  const s = _StartSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StartSharpIcon = svg(
  svg('path', { d: 'M14.59 7.41 18.17 11H6v2h12.17l-3.59 3.59L16 18l6-6-6-6zM2 6v12h2V6z' }),
  'StartSharp',
);
export const StartTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StartTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StartTwoToneIcon = svg(
  svg('path', { d: 'M14.59 7.41 18.17 11H6v2h12.17l-3.59 3.59L16 18l6-6-6-6zM2 6v12h2V6z' }),
  'StartTwoTone',
);
export const StayCurrentLandscapeIcon = (props?: KTRawAttr) => {
  const s = _StayCurrentLandscapeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayCurrentLandscapeIcon = svg(
  svg('path', {
    d: 'M1.01 7 1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2M19 7v10H5V7z',
  }),
  'StayCurrentLandscape',
);
export const StayCurrentLandscapeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StayCurrentLandscapeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayCurrentLandscapeOutlinedIcon = svg(
  svg('path', {
    d: 'M1.01 7 1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2M19 7v10H5V7z',
  }),
  'StayCurrentLandscapeOutlined',
);
export const StayCurrentLandscapeRoundedIcon = (props?: KTRawAttr) => {
  const s = _StayCurrentLandscapeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayCurrentLandscapeRoundedIcon = svg(
  svg('path', {
    d: 'M1.01 7 1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2M19 7v10H5V7z',
  }),
  'StayCurrentLandscapeRounded',
);
export const StayCurrentLandscapeSharpIcon = (props?: KTRawAttr) => {
  const s = _StayCurrentLandscapeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayCurrentLandscapeSharpIcon = svg(
  svg('path', { d: 'M1 19h22V5H1zM19 7v10H5V7z' }),
  'StayCurrentLandscapeSharp',
);
export const StayCurrentLandscapeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StayCurrentLandscapeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayCurrentLandscapeTwoToneIcon = svg(
  [
    svg('path', { d: 'M5 7h14v10H5z', opacity: '.3' }, '0'),
    svg(
      'path',
      { d: 'M21 5H3c-1.1 0-1.99.9-1.99 2L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-2 12H5V7h14z' },
      '1',
    ),
  ],
  'StayCurrentLandscapeTwoTone',
);
export const StayCurrentPortraitIcon = (props?: KTRawAttr) => {
  const s = _StayCurrentPortraitIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayCurrentPortraitIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z',
  }),
  'StayCurrentPortrait',
);
export const StayCurrentPortraitOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StayCurrentPortraitOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayCurrentPortraitOutlinedIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z',
  }),
  'StayCurrentPortraitOutlined',
);
export const StayCurrentPortraitRoundedIcon = (props?: KTRawAttr) => {
  const s = _StayCurrentPortraitRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayCurrentPortraitRoundedIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z',
  }),
  'StayCurrentPortraitRounded',
);
export const StayCurrentPortraitSharpIcon = (props?: KTRawAttr) => {
  const s = _StayCurrentPortraitSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayCurrentPortraitSharpIcon = svg(
  svg('path', { d: 'M19 1.01 5.01 1v22H19zM17 19H7V5h10z' }),
  'StayCurrentPortraitSharp',
);
export const StayCurrentPortraitTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StayCurrentPortraitTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayCurrentPortraitTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 5h10v14H7z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M17 1.01 7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z',
      },
      '1',
    ),
  ],
  'StayCurrentPortraitTwoTone',
);
export const StayPrimaryLandscapeIcon = (props?: KTRawAttr) => {
  const s = _StayPrimaryLandscapeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayPrimaryLandscapeIcon = svg(
  svg('path', {
    d: 'M1.01 7 1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2M19 7v10H5V7z',
  }),
  'StayPrimaryLandscape',
);
export const StayPrimaryLandscapeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StayPrimaryLandscapeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayPrimaryLandscapeOutlinedIcon = svg(
  svg('path', {
    d: 'M1.01 7 1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2M19 7v10H5V7z',
  }),
  'StayPrimaryLandscapeOutlined',
);
export const StayPrimaryLandscapeRoundedIcon = (props?: KTRawAttr) => {
  const s = _StayPrimaryLandscapeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayPrimaryLandscapeRoundedIcon = svg(
  svg('path', {
    d: 'M1.01 7 1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2M19 7v10H5V7z',
  }),
  'StayPrimaryLandscapeRounded',
);
export const StayPrimaryLandscapeSharpIcon = (props?: KTRawAttr) => {
  const s = _StayPrimaryLandscapeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayPrimaryLandscapeSharpIcon = svg(
  svg('path', { d: 'M1 19h22V5H1zM19 7v10H5V7z' }),
  'StayPrimaryLandscapeSharp',
);
export const StayPrimaryLandscapeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StayPrimaryLandscapeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayPrimaryLandscapeTwoToneIcon = svg(
  [
    svg('path', { d: 'M5 7h14v10H5z', opacity: '.3' }, '0'),
    svg(
      'path',
      { d: 'M21 5H3c-1.1 0-1.99.9-1.99 2L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-2 12H5V7h14z' },
      '1',
    ),
  ],
  'StayPrimaryLandscapeTwoTone',
);
export const StayPrimaryPortraitIcon = (props?: KTRawAttr) => {
  const s = _StayPrimaryPortraitIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayPrimaryPortraitIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z',
  }),
  'StayPrimaryPortrait',
);
export const StayPrimaryPortraitOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StayPrimaryPortraitOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayPrimaryPortraitOutlinedIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z',
  }),
  'StayPrimaryPortraitOutlined',
);
export const StayPrimaryPortraitRoundedIcon = (props?: KTRawAttr) => {
  const s = _StayPrimaryPortraitRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayPrimaryPortraitRoundedIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z',
  }),
  'StayPrimaryPortraitRounded',
);
export const StayPrimaryPortraitSharpIcon = (props?: KTRawAttr) => {
  const s = _StayPrimaryPortraitSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayPrimaryPortraitSharpIcon = svg(
  svg('path', { d: 'M5.01 1v22H19V1zM17 19H7V5h10z' }),
  'StayPrimaryPortraitSharp',
);
export const StayPrimaryPortraitTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StayPrimaryPortraitTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StayPrimaryPortraitTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 5h10v14H7z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M17 1.01 7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z',
      },
      '1',
    ),
  ],
  'StayPrimaryPortraitTwoTone',
);
export const StickyNote2Icon = (props?: KTRawAttr) => {
  const s = _StickyNote2Icon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StickyNote2Icon = svg(
  svg('path', {
    d: 'M19 3H4.99C3.89 3 3 3.9 3 5l.01 14c0 1.1.89 2 1.99 2h10l6-6V5c0-1.1-.9-2-2-2M7 8h10v2H7zm5 6H7v-2h5zm2 5.5V14h5.5z',
  }),
  'StickyNote2',
);
export const StickyNote2OutlinedIcon = (props?: KTRawAttr) => {
  const s = _StickyNote2OutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StickyNote2OutlinedIcon = svg(
  svg('path', {
    d: 'M19 5v9h-5v5H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10l6-6V5c0-1.1-.9-2-2-2m-7 11H7v-2h5zm5-4H7V8h10z',
  }),
  'StickyNote2Outlined',
);
export const StickyNote2RoundedIcon = (props?: KTRawAttr) => {
  const s = _StickyNote2RoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StickyNote2RoundedIcon = svg(
  svg('path', {
    d: 'M19 3H4.99C3.89 3 3 3.9 3 5l.01 14c0 1.1.89 2 1.99 2h10l6-6V5c0-1.1-.9-2-2-2M8 8h8c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1m3 6H8c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1m3 5.5V15c0-.55.45-1 1-1h4.5z',
  }),
  'StickyNote2Rounded',
);
export const StickyNote2SharpIcon = (props?: KTRawAttr) => {
  const s = _StickyNote2SharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StickyNote2SharpIcon = svg(
  svg('path', { d: 'M2.99 3 3 21h12l6-6V3zM7 8h10v2H7zm5 6H7v-2h5zm2 5.5V14h5.5z' }),
  'StickyNote2Sharp',
);
export const StickyNote2TwoToneIcon = (props?: KTRawAttr) => {
  const s = _StickyNote2TwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StickyNote2TwoToneIcon = svg(
  [
    svg('path', { d: 'M5 5v14h9v-5h5V5zm7 9H7v-2h5zm5-4H7V8h10z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M19 5v9h-5v5H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10l6-6V5c0-1.1-.9-2-2-2m-7 11H7v-2h5zm5-4H7V8h10z',
      },
      '1',
    ),
  ],
  'StickyNote2TwoTone',
);
export const StopIcon = (props?: KTRawAttr) => {
  const s = _StopIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StopIcon = svg(svg('path', { d: 'M6 6h12v12H6z' }), 'Stop');
export const StopCircleIcon = (props?: KTRawAttr) => {
  const s = _StopCircleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StopCircleIcon = svg(
  svg('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m4 14H8V8h8z' }),
  'StopCircle',
);
export const StopCircleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StopCircleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StopCircleOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m4-4H8V8h8z',
  }),
  'StopCircleOutlined',
);
export const StopCircleRoundedIcon = (props?: KTRawAttr) => {
  const s = _StopCircleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StopCircleRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m3 14H9c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1',
  }),
  'StopCircleRounded',
);
export const StopCircleSharpIcon = (props?: KTRawAttr) => {
  const s = _StopCircleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StopCircleSharpIcon = svg(
  svg('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m4 14H8V8h8z' }),
  'StopCircleSharp',
);
export const StopCircleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StopCircleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StopCircleTwoToneIcon = svg(
  [
    svg('path', { d: 'M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m4 12H8V8h8z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m4-4H8V8h8z',
      },
      '1',
    ),
  ],
  'StopCircleTwoTone',
);
export const StopOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StopOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StopOutlinedIcon = svg(svg('path', { d: 'M16 8v8H8V8zm2-2H6v12h12z' }), 'StopOutlined');
export const StopRoundedIcon = (props?: KTRawAttr) => {
  const s = _StopRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StopRoundedIcon = svg(
  svg('path', { d: 'M8 6h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2' }),
  'StopRounded',
);
export const StopScreenShareIcon = (props?: KTRawAttr) => {
  const s = _StopScreenShareIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StopScreenShareIcon = svg(
  svg('path', {
    d: 'm21.22 18.02 2 2H24v-2zm.77-2 .01-10c0-1.11-.9-2-2-2H7.22l5.23 5.23c.18-.04.36-.07.55-.1V7.02l4 3.73-1.58 1.47 5.54 5.54c.61-.33 1.03-.99 1.03-1.74M2.39 1.73 1.11 3l1.54 1.54c-.4.36-.65.89-.65 1.48v10c0 1.1.89 2 2 2H0v2h18.13l2.71 2.71 1.27-1.27zM7 15.02c.31-1.48.92-2.95 2.07-4.06l1.59 1.59c-1.54.38-2.7 1.18-3.66 2.47',
  }),
  'StopScreenShare',
);
export const StopScreenShareOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StopScreenShareOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StopScreenShareOutlinedIcon = svg(
  svg('path', {
    d: 'm21.79 18 2 2H24v-2zM1.11 2.98l1.55 1.56c-.41.37-.66.89-.66 1.48V16c0 1.1.9 2 2.01 2H0v2h18.13l2.71 2.71 1.41-1.41L2.52 1.57zM4 6.02h.13l4.95 4.93C7.94 12.07 7.31 13.52 7 15c.96-1.29 2.13-2.08 3.67-2.46l3.46 3.48H4zm16 0v10.19l1.3 1.3c.42-.37.7-.89.7-1.49v-10c0-1.11-.9-2-2-2H7.8l2 2zm-7.07 3.13 2.79 2.78 1.28-1.2L13 7v2.13z',
  }),
  'StopScreenShareOutlined',
);
export const StopScreenShareRoundedIcon = (props?: KTRawAttr) => {
  const s = _StopScreenShareRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StopScreenShareRoundedIcon = svg(
  svg('path', {
    d: 'M23 18h-1.2l1.79 1.79c.24-.18.41-.46.41-.79 0-.55-.45-1-1-1M3.23 2.28c-.39-.39-1.03-.39-1.42 0s-.39 1.02 0 1.41l.84.86s-.66.57-.66 1.47C2 6.92 2 16 2 16l.01.01c0 1.09.88 1.98 1.97 1.99H1c-.55 0-1 .45-1 1s.45 1 1 1h17.13l2 2c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41zM7 15c.31-1.48.94-2.93 2.08-4.05l1.59 1.59C9.13 12.92 7.96 13.71 7 15m6-5.87v-.98c0-.44.52-.66.84-.37L15 8.87l1.61 1.5c.21.2.21.53 0 .73l-.89.83 5.58 5.58c.43-.37.7-.9.7-1.51V6c0-1.09-.89-1.98-1.98-1.98H7.8l5.14 5.13c.02-.01.04-.02.06-.02',
  }),
  'StopScreenShareRounded',
);
export const StopScreenShareSharpIcon = (props?: KTRawAttr) => {
  const s = _StopScreenShareSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StopScreenShareSharpIcon = svg(
  svg('path', {
    d: 'm21.79 18 2 2H24v-2zM13 9.13V7l4 3.74-1.28 1.19 5.18 5.18L22 16V4.02H7.8l5.13 5.13c.03-.01.05-.02.07-.02M1.11 2.98l.89.9v12.14l2 1.99L0 18v2h18.13l2.71 2.71 1.41-1.41L2.52 1.57zm7.97 7.97 1.59 1.59C9.13 12.92 7.96 13.71 7 15c.31-1.48.94-2.93 2.08-4.05',
  }),
  'StopScreenShareSharp',
);
export const StopScreenShareTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StopScreenShareTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StopScreenShareTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M10.67 12.54C9.13 12.92 7.96 13.71 7 15c.31-1.48.94-2.93 2.08-4.05L4.13 6.02H4v10.01h10.14z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm21.79 18 2 2H24v-2zM1.11 2.98l1.55 1.56c-.41.37-.66.89-.66 1.48V16c0 1.1.9 2 2.01 2H0v2h18.13l2.71 2.71 1.41-1.41L2.52 1.57zM4 6.02h.13l4.95 4.93C7.94 12.07 7.31 13.52 7 15c.96-1.29 2.13-2.08 3.67-2.46l3.46 3.48H4zm16 0v10.19l1.3 1.3c.42-.37.7-.89.7-1.49v-10c0-1.11-.9-2-2-2H7.8l2 2zm-7.07 3.13 2.79 2.78 1.28-1.2L13 7v2.13z',
      },
      '1',
    ),
    svg('path', { d: 'M20 6.02H9.8l3.13 3.13c.02 0 .04-.01.07-.02V7l4 3.73-1.28 1.2L20 16.21z', opacity: '.3' }, '2'),
  ],
  'StopScreenShareTwoTone',
);
export const StopSharpIcon = (props?: KTRawAttr) => {
  const s = _StopSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StopSharpIcon = svg(svg('path', { d: 'M6 6h12v12H6z' }), 'StopSharp');
export const StopTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StopTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StopTwoToneIcon = svg(
  [svg('path', { d: 'M8 8h8v8H8z', opacity: '.3' }, '0'), svg('path', { d: 'M6 18h12V6H6zM8 8h8v8H8z' }, '1')],
  'StopTwoTone',
);
export const StorageIcon = (props?: KTRawAttr) => {
  const s = _StorageIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StorageIcon = svg(
  svg('path', { d: 'M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z' }),
  'Storage',
);
export const StorageOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StorageOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StorageOutlinedIcon = svg(
  svg('path', { d: 'M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z' }),
  'StorageOutlined',
);
export const StorageRoundedIcon = (props?: KTRawAttr) => {
  const s = _StorageRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StorageRoundedIcon = svg(
  svg('path', {
    d: 'M4 20h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2m0-3h2v2H4zM2 6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2m4 1H4V5h2zm-2 7h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2m0-3h2v2H4z',
  }),
  'StorageRounded',
);
export const StorageSharpIcon = (props?: KTRawAttr) => {
  const s = _StorageSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StorageSharpIcon = svg(
  svg('path', { d: 'M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z' }),
  'StorageSharp',
);
export const StorageTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StorageTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StorageTwoToneIcon = svg(
  svg('path', { d: 'M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z' }),
  'StorageTwoTone',
);
export const StoreIcon = (props?: KTRawAttr) => {
  const s = _StoreIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StoreIcon = svg(
  svg('path', { d: 'M20 4H4v2h16zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6zm-9 4H6v-4h6z' }),
  'Store',
);
export const StoreMallDirectoryIcon = (props?: KTRawAttr) => {
  const s = _StoreMallDirectoryIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StoreMallDirectoryIcon = svg(
  svg('path', { d: 'M20 4H4v2h16zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6zm-9 4H6v-4h6z' }),
  'StoreMallDirectory',
);
export const StoreMallDirectoryOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StoreMallDirectoryOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StoreMallDirectoryOutlinedIcon = svg(
  svg('path', { d: 'm18.36 9 .6 3H5.04l.6-3zM20 4H4v2h16zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2zM6 18v-4h6v4z' }),
  'StoreMallDirectoryOutlined',
);
export const StoreMallDirectoryRoundedIcon = (props?: KTRawAttr) => {
  const s = _StoreMallDirectoryRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StoreMallDirectoryRoundedIcon = svg(
  svg('path', {
    d: 'M20.16 7.8c-.09-.46-.5-.8-.98-.8H4.82c-.48 0-.89.34-.98.8L3 12v1c0 .55.45 1 1 1v5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-5h4v5c0 .55.45 1 1 1s1-.45 1-1v-5c.55 0 1-.45 1-1v-1zM12 18H6v-4h6zM5 6h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1',
  }),
  'StoreMallDirectoryRounded',
);
export const StoreMallDirectorySharpIcon = (props?: KTRawAttr) => {
  const s = _StoreMallDirectorySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StoreMallDirectorySharpIcon = svg(
  svg('path', { d: 'M20 4H4v2h16zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6zm-9 4H6v-4h6z' }),
  'StoreMallDirectorySharp',
);
export const StoreMallDirectoryTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StoreMallDirectoryTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StoreMallDirectoryTwoToneIcon = svg(
  [
    svg('path', { d: 'm5.64 9-.6 3h13.92l-.6-3z', opacity: '.3' }, '0'),
    svg(
      'path',
      { d: 'm4 7-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zm8 11H6v-4h6zm-6.96-6 .6-3h12.72l.6 3zM4 4h16v2H4z' },
      '1',
    ),
  ],
  'StoreMallDirectoryTwoTone',
);
export const StoreOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StoreOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StoreOutlinedIcon = svg(
  svg('path', { d: 'm18.36 9 .6 3H5.04l.6-3zM20 4H4v2h16zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2zM6 18v-4h6v4z' }),
  'StoreOutlined',
);
export const StoreRoundedIcon = (props?: KTRawAttr) => {
  const s = _StoreRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StoreRoundedIcon = svg(
  svg('path', {
    d: 'M5 6h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1m15.16 1.8c-.09-.46-.5-.8-.98-.8H4.82c-.48 0-.89.34-.98.8l-1 5c-.12.62.35 1.2.98 1.2H4v5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-5h4v5c0 .55.45 1 1 1s1-.45 1-1v-5h.18c.63 0 1.1-.58.98-1.2zM12 18H6v-4h6z',
  }),
  'StoreRounded',
);
export const StoreSharpIcon = (props?: KTRawAttr) => {
  const s = _StoreSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StoreSharpIcon = svg(
  svg('path', { d: 'M20 4H4v2h16zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6zm-9 4H6v-4h6z' }),
  'StoreSharp',
);
export const StoreTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StoreTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StoreTwoToneIcon = svg(
  [
    svg('path', { d: 'm5.64 9-.6 3h13.92l-.6-3z', opacity: '.3' }, '0'),
    svg(
      'path',
      { d: 'M4 4h16v2H4zm16 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2zm-8 11H6v-4h6zm-6.96-6 .6-3h12.72l.6 3z' },
      '1',
    ),
  ],
  'StoreTwoTone',
);
export const StorefrontIcon = (props?: KTRawAttr) => {
  const s = _StorefrontIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StorefrontIcon = svg(
  svg('path', {
    d: 'm21.9 8.89-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89m-2.99-3.9 1.05 4.37c.1.42.01.84-.25 1.17-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5zM13 5h1.96l.54 4.52c.05.39-.07.78-.33 1.07-.22.26-.54.41-.95.41-.67 0-1.22-.59-1.22-1.31zM8.49 9.52 9.04 5H11v4.69c0 .72-.55 1.31-1.29 1.31-.34 0-.65-.15-.89-.41-.25-.29-.37-.68-.33-1.07m-4.45-.16L5.05 5h1.97l-.58 4.86c-.08.65-.6 1.14-1.21 1.14-.49 0-.8-.29-.93-.47-.27-.32-.36-.75-.26-1.17M5 19v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19z',
  }),
  'Storefront',
);
export const StorefrontOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StorefrontOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StorefrontOutlinedIcon = svg(
  svg('path', {
    d: 'm21.9 8.89-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89m-2.99-3.9 1.05 4.37c.1.42.01.84-.25 1.17-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5zM13 5h1.96l.54 4.52c.05.39-.07.78-.33 1.07-.22.26-.54.41-.95.41-.67 0-1.22-.59-1.22-1.31zM8.49 9.52 9.04 5H11v4.69c0 .72-.55 1.31-1.29 1.31-.34 0-.65-.15-.89-.41-.25-.29-.37-.68-.33-1.07m-4.45-.16L5.05 5h1.97l-.58 4.86c-.08.65-.6 1.14-1.21 1.14-.49 0-.8-.29-.93-.47-.27-.32-.36-.75-.26-1.17M5 19v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19z',
  }),
  'StorefrontOutlined',
);
export const StorefrontRoundedIcon = (props?: KTRawAttr) => {
  const s = _StorefrontRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StorefrontRoundedIcon = svg(
  svg('path', {
    d: 'm21.9 7.89-1.05-3.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 7.89c-.46 1.97.85 3.11.9 3.17V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7.94c1.12-1.12 1.09-2.41.9-3.17M13 5h1.96l.54 3.52c.09.71-.39 1.48-1.28 1.48-.67 0-1.22-.59-1.22-1.31zM6.44 8.86c-.08.65-.6 1.14-1.21 1.14-.93 0-1.35-.97-1.19-1.64L5.05 5h1.97zM11 8.69c0 .72-.55 1.31-1.29 1.31-.75 0-1.3-.7-1.22-1.48L9.04 5H11zM18.77 10c-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01 1.05 3.37c.16.67-.25 1.64-1.19 1.64',
  }),
  'StorefrontRounded',
);
export const StorefrontSharpIcon = (props?: KTRawAttr) => {
  const s = _StorefrontSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StorefrontSharpIcon = svg(
  svg('path', {
    d: 'M21.9 8.89 20.49 3H3.51L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V21h18v-8.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89M7.02 5l-.58 4.86c-.08.65-.6 1.14-1.21 1.14-.49 0-.8-.29-.93-.47-.26-.33-.35-.76-.25-1.17L5.09 5zm11.89 0 1.05 4.36c.1.42.01.84-.25 1.17-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5zm-3.4 4.52c.05.39-.07.78-.33 1.07-.23.26-.55.41-.96.41-.67 0-1.22-.59-1.22-1.31V5h1.96zM11 9.69c0 .72-.55 1.31-1.29 1.31-.34 0-.65-.15-.89-.41-.25-.29-.37-.68-.33-1.07L9.04 5H11zM5 19v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19z',
  }),
  'StorefrontSharp',
);
export const StorefrontTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StorefrontTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StorefrontTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M6.44 9.86 7.02 5H5.05L4.04 9.36c-.1.42-.01.84.25 1.17.14.18.44.47.94.47.61 0 1.13-.49 1.21-1.14M9.71 11c.74 0 1.29-.59 1.29-1.31V5H9.04l-.55 4.52c-.05.39.07.78.33 1.07.23.26.55.41.89.41m4.51 0c.41 0 .72-.15.96-.41.25-.29.37-.68.33-1.07L14.96 5H13v4.69c0 .72.55 1.31 1.22 1.31m4.69-6.01L16.98 5l.58 4.86c.08.65.6 1.14 1.21 1.14.49 0 .8-.29.93-.47.26-.33.35-.76.25-1.17z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm21.9 8.89-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89M13 5h1.96l.54 4.52c.05.39-.07.78-.33 1.07-.22.26-.54.41-.95.41-.67 0-1.22-.59-1.22-1.31zM8.49 9.52 9.04 5H11v4.69c0 .72-.55 1.31-1.29 1.31-.34 0-.65-.15-.89-.41-.25-.29-.37-.68-.33-1.07m-4.2 1.01c-.26-.33-.35-.76-.25-1.17L5.05 5h1.97l-.58 4.86c-.08.65-.6 1.14-1.21 1.14-.5 0-.8-.29-.94-.47M19 19H5v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19zm.71-8.47c-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01 1.05 4.37c.1.42.01.85-.25 1.17',
      },
      '1',
    ),
  ],
  'StorefrontTwoTone',
);
export const StormIcon = (props?: KTRawAttr) => {
  const s = _StormIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StormIcon = svg(
  svg('path', {
    d: 'M18.93 8C16.72 4.18 11.82 2.87 8 5.07c-1.41.82-2.48 2-3.16 3.37-.13-2.2.22-4.4 1.02-6.44H3.74C2.2 6.49 2.52 11.58 5.07 16c1.1 1.91 2.88 3.19 4.86 3.72s4.16.31 6.07-.79c1.41-.82 2.48-2 3.16-3.37.13 2.2-.21 4.4-1.01 6.44h2.11c1.53-4.49 1.22-9.58-1.33-14M15 17.2c-2.87 1.65-6.54.67-8.2-2.2q-.165-.3-.3-.6C5.3 11.64 6.33 8.34 9 6.8c2.86-1.65 6.54-.67 8.2 2.2q.165.3.3.6c1.2 2.76.17 6.06-2.5 7.6M12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4',
  }),
  'Storm',
);
export const StormOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StormOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StormOutlinedIcon = svg(
  svg('path', {
    d: 'M18.93 8C16.72 4.18 11.82 2.87 8 5.07c-1.41.82-2.48 2-3.16 3.37-.13-2.2.22-4.4 1.02-6.44H3.74C2.2 6.49 2.52 11.58 5.07 16c1.1 1.91 2.88 3.19 4.86 3.72s4.16.31 6.07-.79c1.41-.82 2.48-2 3.16-3.37.13 2.2-.21 4.4-1.01 6.44h2.11c1.53-4.49 1.22-9.58-1.33-14M15 17.2c-2.87 1.65-6.54.67-8.2-2.2q-.165-.3-.3-.6C5.3 11.64 6.33 8.34 9 6.8c2.86-1.65 6.54-.67 8.2 2.2q.165.3.3.6c1.2 2.76.17 6.06-2.5 7.6M12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4',
  }),
  'StormOutlined',
);
export const StormRoundedIcon = (props?: KTRawAttr) => {
  const s = _StormRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StormRoundedIcon = svg(
  svg('path', {
    d: 'M18.93 8C16.72 4.18 11.82 2.87 8 5.07c-1.41.82-2.48 2-3.16 3.37-.1-1.75.1-3.5.59-5.17C5.61 2.63 5.14 2 4.48 2h-.01c-.43 0-.83.28-.95.7-1.28 4.31-.87 9.11 1.55 13.3 1.1 1.91 2.88 3.19 4.86 3.72s4.16.31 6.07-.79c1.41-.82 2.48-2 3.16-3.37.1 1.75-.09 3.5-.58 5.18-.18.63.29 1.26.95 1.26.44 0 .83-.28.95-.7 1.27-4.31.87-9.11-1.55-13.3M15 17.2c-2.87 1.65-6.54.67-8.2-2.2q-.165-.3-.3-.6C5.3 11.64 6.33 8.34 9 6.8c2.86-1.65 6.54-.67 8.2 2.2q.165.3.3.6c1.2 2.76.17 6.06-2.5 7.6M12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4',
  }),
  'StormRounded',
);
export const StormSharpIcon = (props?: KTRawAttr) => {
  const s = _StormSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StormSharpIcon = svg(
  svg('path', {
    d: 'M18.93 8C16.72 4.18 11.82 2.87 8 5.07c-1.41.82-2.48 2-3.16 3.37-.13-2.2.22-4.4 1.02-6.44H3.74C2.2 6.49 2.52 11.58 5.07 16c1.1 1.91 2.88 3.19 4.86 3.72s4.16.31 6.07-.79c1.41-.82 2.48-2 3.16-3.37.13 2.2-.21 4.4-1.01 6.44h2.11c1.53-4.49 1.22-9.58-1.33-14M15 17.2c-2.87 1.65-6.54.67-8.2-2.2q-.165-.3-.3-.6C5.3 11.64 6.33 8.34 9 6.8c2.86-1.65 6.54-.67 8.2 2.2q.165.3.3.6c1.2 2.76.17 6.06-2.5 7.6M12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4',
  }),
  'StormSharp',
);
export const StormTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StormTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StormTwoToneIcon = svg(
  [
    svg('circle', { cx: '12', cy: '12', r: '2', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M17.2 9C15.54 6.13 11.86 5.15 9 6.8c-2.67 1.54-3.7 4.84-2.5 7.6q.135.3.3.6c1.66 2.87 5.33 3.85 8.2 2.2 2.67-1.54 3.7-4.84 2.5-7.6q-.135-.3-.3-.6M12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4',
        opacity: '.3',
      },
      '1',
    ),
    svg(
      'path',
      { d: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2' },
      '2',
    ),
    svg(
      'path',
      {
        d: 'M18.93 8C16.72 4.18 11.82 2.87 8 5.07c-1.41.82-2.48 2-3.16 3.37-.13-2.2.22-4.4 1.02-6.44H3.74C2.2 6.49 2.52 11.58 5.07 16c1.1 1.91 2.88 3.19 4.86 3.72s4.16.31 6.07-.79c1.41-.82 2.48-2 3.16-3.37.13 2.2-.21 4.4-1.01 6.44h2.11c1.53-4.49 1.22-9.58-1.33-14M15 17.2c-2.87 1.65-6.54.67-8.2-2.2q-.165-.3-.3-.6C5.3 11.64 6.33 8.34 9 6.8c2.86-1.65 6.54-.67 8.2 2.2q.165.3.3.6c1.2 2.76.17 6.06-2.5 7.6',
      },
      '3',
    ),
  ],
  'StormTwoTone',
);
export const StraightIcon = (props?: KTRawAttr) => {
  const s = _StraightIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StraightIcon = svg(
  svg('path', { d: 'M11 6.83 9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V21h-2z' }),
  'Straight',
);
export const StraightOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StraightOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StraightOutlinedIcon = svg(
  svg('path', { d: 'M11 6.83 9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V21h-2z' }),
  'StraightOutlined',
);
export const StraightRoundedIcon = (props?: KTRawAttr) => {
  const s = _StraightRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StraightRoundedIcon = svg(
  svg('path', {
    d: 'm13 6.83.88.88c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L12.7 3.71a.996.996 0 0 0-1.41 0L8.71 6.29c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l.88-.87V20c0 .55.45 1 1 1s1-.45 1-1z',
  }),
  'StraightRounded',
);
export const StraightSharpIcon = (props?: KTRawAttr) => {
  const s = _StraightSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StraightSharpIcon = svg(
  svg('path', { d: 'M11 6.83 9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V21h-2z' }),
  'StraightSharp',
);
export const StraightTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StraightTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StraightTwoToneIcon = svg(
  svg('path', { d: 'M11 6.83 9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V21h-2z' }),
  'StraightTwoTone',
);
export const StraightenIcon = (props?: KTRawAttr) => {
  const s = _StraightenIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StraightenIcon = svg(
  svg('path', {
    d: 'M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2z',
  }),
  'Straighten',
);
export const StraightenOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StraightenOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StraightenOutlinedIcon = svg(
  svg('path', {
    d: 'M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2z',
  }),
  'StraightenOutlined',
);
export const StraightenRoundedIcon = (props?: KTRawAttr) => {
  const s = _StraightenRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StraightenRoundedIcon = svg(
  svg('path', {
    d: 'M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-1 10H4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h1v3c0 .55.45 1 1 1s1-.45 1-1V8h2v3c0 .55.45 1 1 1s1-.45 1-1V8h2v3c0 .55.45 1 1 1s1-.45 1-1V8h2v3c0 .55.45 1 1 1s1-.45 1-1V8h1c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1',
  }),
  'StraightenRounded',
);
export const StraightenSharpIcon = (props?: KTRawAttr) => {
  const s = _StraightenSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StraightenSharpIcon = svg(
  svg('path', { d: 'M23 6H1v12h22zm-2 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2z' }),
  'StraightenSharp',
);
export const StraightenTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StraightenTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StraightenTwoToneIcon = svg(
  [
    svg('path', { d: 'M19 12h-2V8h-2v4h-2V8h-2v4H9V8H7v4H5V8H3v8h18V8h-2z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2z',
      },
      '1',
    ),
  ],
  'StraightenTwoTone',
);
export const StreamIcon = (props?: KTRawAttr) => {
  const s = _StreamIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StreamIcon = svg(
  [
    svg('circle', { cx: '20', cy: '12', r: '2' }, '0'),
    svg('circle', { cx: '4', cy: '12', r: '2' }, '1'),
    svg('circle', { cx: '12', cy: '20', r: '2' }, '2'),
    svg(
      'path',
      {
        d: 'M10.05 8.59 6.03 4.55h-.01l-.31-.32-1.42 1.41 4.02 4.05.01-.01.31.32zm3.893.027 4.405-4.392L19.76 5.64l-4.405 4.393zM10.01 15.36l-1.42-1.41-4.03 4.01-.32.33 1.41 1.41 4.03-4.02zm9.75 2.94-3.99-4.01-.36-.35L14 15.35l3.99 4.01.35.35z',
      },
      '3',
    ),
    svg('circle', { cx: '12', cy: '4', r: '2' }, '4'),
  ],
  'Stream',
);
export const StreamOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StreamOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StreamOutlinedIcon = svg(
  [
    svg('circle', { cx: '20', cy: '12', r: '2' }, '0'),
    svg('circle', { cx: '4', cy: '12', r: '2' }, '1'),
    svg('circle', { cx: '12', cy: '20', r: '2' }, '2'),
    svg(
      'path',
      {
        d: 'm13.943 8.6191 4.4044-4.392 1.4122 1.4162-4.4043 4.392zM8.32 9.68l.31.32 1.42-1.41-4.02-4.04h-.01l-.31-.32-1.42 1.41 4.02 4.05zm7.09 4.26L14 15.35l3.99 4.01.35.35 1.42-1.41-3.99-4.01zm-6.82.01-4.03 4.01-.32.33 1.41 1.41 4.03-4.02.33-.32z',
      },
      '3',
    ),
    svg('circle', { cx: '12', cy: '4', r: '2' }, '4'),
  ],
  'StreamOutlined',
);
export const StreamRoundedIcon = (props?: KTRawAttr) => {
  const s = _StreamRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StreamRoundedIcon = svg(
  [
    svg('circle', { cx: '20', cy: '12', r: '2' }, '0'),
    svg('circle', { cx: '4', cy: '12', r: '2' }, '1'),
    svg('circle', { cx: '12', cy: '20', r: '2' }, '2'),
    svg(
      'path',
      {
        d: 'm7.89 14.65-2.94 2.93c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l2.94-2.93c.39-.38.39-1.02 0-1.41a.996.996 0 0 0-1.41 0M6.41 4.94a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.93 2.94c.39.39 1.02.39 1.42 0 .38-.39.38-1.02-.01-1.41zm9.71 9.71c-.39-.39-1.02-.39-1.42 0-.39.39-.39 1.02 0 1.41L17.64 19c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41zm-.06-5.32 2.99-2.98c.39-.4.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-2.99 2.98c-.39.39-.39 1.02 0 1.42.39.39 1.02.39 1.41 0',
      },
      '3',
    ),
    svg('circle', { cx: '12', cy: '4', r: '2' }, '4'),
  ],
  'StreamRounded',
);
export const StreamSharpIcon = (props?: KTRawAttr) => {
  const s = _StreamSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StreamSharpIcon = svg(
  [
    svg('circle', { cx: '20', cy: '12', r: '2' }, '0'),
    svg('circle', { cx: '4', cy: '12', r: '2' }, '1'),
    svg('circle', { cx: '12', cy: '20', r: '2' }, '2'),
    svg(
      'path',
      {
        d: 'm13.943 8.6191 4.4044-4.392 1.4122 1.4162-4.4043 4.392zM8.32 9.68l.31.32 1.42-1.41-4.02-4.04h-.01l-.31-.32-1.42 1.41 4.02 4.05zm7.09 4.26L14 15.35l3.99 4.01.35.35 1.42-1.41-3.99-4.01zm-6.82.01-4.03 4.01-.32.33 1.41 1.41 4.03-4.02.33-.32z',
      },
      '3',
    ),
    svg('circle', { cx: '12', cy: '4', r: '2' }, '4'),
  ],
  'StreamSharp',
);
export const StreamTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StreamTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StreamTwoToneIcon = svg(
  [
    svg('circle', { cx: '20', cy: '12', r: '2' }, '0'),
    svg('circle', { cx: '4', cy: '12', r: '2' }, '1'),
    svg('circle', { cx: '12', cy: '20', r: '2' }, '2'),
    svg(
      'path',
      {
        d: 'm13.943 8.6191 4.4044-4.392 1.4122 1.4162-4.4043 4.392zM8.32 9.68l.31.32 1.42-1.41-4.02-4.04h-.01l-.31-.32-1.42 1.41 4.02 4.05zm7.09 4.26L14 15.35l3.99 4.01.35.35 1.42-1.41-3.99-4.01zm-6.82.01-4.03 4.01-.32.33 1.41 1.41 4.03-4.02.33-.32z',
      },
      '3',
    ),
    svg('circle', { cx: '12', cy: '4', r: '2' }, '4'),
  ],
  'StreamTwoTone',
);
export const StreetviewIcon = (props?: KTRawAttr) => {
  const s = _StreetviewIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StreetviewIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83',
      },
      '0',
    ),
    svg('circle', { cx: '18', cy: '6', r: '5' }, '1'),
    svg(
      'path',
      {
        d: 'M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6',
      },
      '2',
    ),
  ],
  'Streetview',
);
export const StreetviewOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StreetviewOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StreetviewOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83',
      },
      '0',
    ),
    svg('circle', { cx: '18', cy: '6', r: '5' }, '1'),
    svg(
      'path',
      {
        d: 'M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6',
      },
      '2',
    ),
  ],
  'StreetviewOutlined',
);
export const StreetviewRoundedIcon = (props?: KTRawAttr) => {
  const s = _StreetviewRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StreetviewRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83',
      },
      '0',
    ),
    svg('circle', { cx: '18', cy: '6', r: '5' }, '1'),
    svg(
      'path',
      {
        d: 'M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6',
      },
      '2',
    ),
  ],
  'StreetviewRounded',
);
export const StreetviewSharpIcon = (props?: KTRawAttr) => {
  const s = _StreetviewSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StreetviewSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83',
      },
      '0',
    ),
    svg('circle', { cx: '18', cy: '6', r: '5' }, '1'),
    svg(
      'path',
      {
        d: 'M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6',
      },
      '2',
    ),
  ],
  'StreetviewSharp',
);
export const StreetviewTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StreetviewTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StreetviewTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83',
      },
      '0',
    ),
    svg('circle', { cx: '18', cy: '6', r: '5' }, '1'),
    svg(
      'path',
      {
        d: 'M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6',
      },
      '2',
    ),
  ],
  'StreetviewTwoTone',
);
export const StrikethroughSIcon = (props?: KTRawAttr) => {
  const s = _StrikethroughSIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StrikethroughSIcon = svg(
  svg('path', {
    d: 'M6.85 7.08C6.85 4.37 9.45 3 12.24 3c1.64 0 3 .49 3.9 1.28.77.65 1.46 1.73 1.46 3.24h-3.01c0-.31-.05-.59-.15-.85-.29-.86-1.2-1.28-2.25-1.28-1.86 0-2.34 1.02-2.34 1.7 0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.21-.34-.54-.89-.54-1.92M21 12v-2H3v2h9.62c1.15.45 1.96.75 1.96 1.97 0 1-.81 1.67-2.28 1.67-1.54 0-2.93-.54-2.93-2.51H6.4c0 .55.08 1.13.24 1.58.81 2.29 3.29 3.3 5.67 3.3 2.27 0 5.3-.89 5.3-4.05 0-.3-.01-1.16-.48-1.94H21z',
  }),
  'StrikethroughS',
);
export const StrikethroughSOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StrikethroughSOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StrikethroughSOutlinedIcon = svg(
  svg('path', {
    d: 'M7.24 8.75c-.26-.48-.39-1.03-.39-1.67 0-.61.13-1.16.4-1.67q.39-.75 1.11-1.29c.48-.35 1.05-.63 1.7-.83.66-.19 1.39-.29 2.18-.29.81 0 1.54.11 2.21.34.66.22 1.23.54 1.69.94.47.4.83.88 1.08 1.43s.38 1.15.38 1.81h-3.01c0-.31-.05-.59-.15-.85-.09-.27-.24-.49-.44-.68s-.45-.33-.75-.44c-.3-.1-.66-.16-1.06-.16-.39 0-.74.04-1.03.13s-.53.21-.72.36c-.19.16-.34.34-.44.55q-.15.315-.15.66c0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25M21 12v-2H3v2h9.62c.18.07.4.14.55.2q.555.255.87.51c.315.255.35.36.43.57.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53s-.42.26-.71.35c-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42-.45-.44-.59-.75-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58s.37.85.65 1.21c.28.35.6.66.98.92.37.26.78.48 1.22.65q.66.255 1.38.39c.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79.82-.77 1.07-1.27.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H21z',
  }),
  'StrikethroughSOutlined',
);
export const StrikethroughSRoundedIcon = (props?: KTRawAttr) => {
  const s = _StrikethroughSRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StrikethroughSRoundedIcon = svg(
  svg('path', {
    d: 'M14.59 7.52c0-.31-.05-.59-.15-.85-.09-.27-.24-.49-.44-.68s-.45-.33-.75-.44c-.3-.1-.66-.16-1.06-.16-.39 0-.74.04-1.03.13s-.53.21-.72.36c-.19.16-.34.34-.44.55q-.15.315-.15.66c0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25-.26-.48-.39-1.03-.39-1.67 0-.61.13-1.16.4-1.67q.39-.75 1.11-1.29c.48-.35 1.05-.63 1.7-.83.66-.19 1.39-.29 2.18-.29.81 0 1.54.11 2.21.34.66.22 1.23.54 1.69.94.47.4.83.88 1.08 1.43s.38 1.15.38 1.81zM20 10H4c-.55 0-1 .45-1 1s.45 1 1 1h8.62c.18.07.4.14.55.2q.555.255.87.51c.315.255.35.36.43.57.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53s-.42.26-.71.35c-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42-.45-.44-.59-.75-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58s.37.85.65 1.21c.28.35.6.66.98.92.37.26.78.48 1.22.65q.66.255 1.38.39c.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79.82-.77 1.07-1.27.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H20c.55 0 1-.45 1-1V11c0-.55-.45-1-1-1',
  }),
  'StrikethroughSRounded',
);
export const StrikethroughSSharpIcon = (props?: KTRawAttr) => {
  const s = _StrikethroughSSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StrikethroughSSharpIcon = svg(
  svg('path', {
    d: 'M7.24 8.75c-.26-.48-.39-1.03-.39-1.67 0-.61.13-1.16.4-1.67q.39-.75 1.11-1.29c.48-.35 1.05-.63 1.7-.83.66-.19 1.39-.29 2.18-.29.81 0 1.54.11 2.21.34.66.22 1.23.54 1.69.94.47.4.83.88 1.08 1.43s.38 1.15.38 1.81h-3.01c0-.31-.05-.59-.15-.85-.09-.27-.24-.49-.44-.68s-.45-.33-.75-.44c-.3-.1-.66-.16-1.06-.16-.39 0-.74.04-1.03.13s-.53.21-.72.36c-.19.16-.34.34-.44.55q-.15.315-.15.66c0 .48.25.88.74 1.21.38.25.77.48 1.41.7H7.39c-.05-.08-.11-.17-.15-.25M21 12v-2H3v2h9.62c.18.07.4.14.55.2q.555.255.87.51c.315.255.35.36.43.57.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53s-.42.26-.71.35c-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42-.45-.44-.59-.75-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58s.37.85.65 1.21c.28.35.6.66.98.92.37.26.78.48 1.22.65q.66.255 1.38.39c.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79.82-.77 1.07-1.27.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H21z',
  }),
  'StrikethroughSSharp',
);
export const StrikethroughSTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StrikethroughSTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StrikethroughSTwoToneIcon = svg(
  svg('path', {
    d: 'M10.44 5.88q.285-.225.72-.36c.29-.09.64-.13 1.03-.13.4 0 .76.06 1.06.16.3.11.55.25.75.44s.35.41.44.68c.1.26.15.54.15.85h3.01c0-.66-.13-1.26-.38-1.81s-.61-1.03-1.08-1.43c-.46-.4-1.03-.72-1.69-.94-.67-.23-1.4-.34-2.21-.34-.79 0-1.52.1-2.18.29-.65.2-1.22.48-1.7.83q-.72.54-1.11 1.29c-.27.51-.4 1.06-.4 1.67 0 .64.13 1.19.39 1.67.04.08.1.17.15.25H12c-.64-.22-1.03-.45-1.41-.7-.49-.33-.74-.73-.74-1.21q0-.345.15-.66c.15-.315.25-.39.44-.55M3 12h9.62c.18.07.4.14.55.2q.555.255.87.51c.21.17.35.36.43.57.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53s-.42.26-.71.35c-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42-.45-.44-.59-.75-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58s.37.85.65 1.21c.28.35.6.66.98.92.37.26.78.48 1.22.65s.9.3 1.38.39c.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28s1.21-.45 1.67-.79.82-.77 1.07-1.27.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H21V10H3z',
  }),
  'StrikethroughSTwoTone',
);
export const StrollerIcon = (props?: KTRawAttr) => {
  const s = _StrollerIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StrollerIcon = svg(
  [
    svg('circle', { cx: '16', cy: '20', r: '2' }, '0'),
    svg('circle', { cx: '6', cy: '20', r: '2' }, '1'),
    svg(
      'path',
      {
        d: 'M22 7v-.52C22 4.56 20.52 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-8.8 10.32C6.12 16 6.58 17 7.43 17H15c1.1 0 2-.9 2-2V6.27c.58-.68.97-1.27 1.65-1.27.77 0 1.35.66 1.35 1.48V7zm-7.7-2.9C13.03 3.4 11.56 3 10 3c-1.97 0-3.79.64-5.28 1.72l4.89 4.89z',
      },
      '2',
    ),
  ],
  'Stroller',
);
export const StrollerOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StrollerOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StrollerOutlinedIcon = svg(
  svg('path', {
    d: 'M18 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M6 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m9-9.34L9.6 15H15zM18.65 3C20.52 3 22 4.56 22 6.48V7h-2v-.52C20 5.66 19.42 5 18.65 5c-.68 0-1.07.59-1.65 1.27V15c0 1.1-.9 2-2 2H7.43c-.85 0-1.31-1-.76-1.65l8.8-10.32C16.11 4.27 16.99 3 18.65 3M10 5c-.65 0-1.29.09-1.91.27l1.4 1.4 1.37-1.61C10.58 5.02 10.29 5 10 5m0-2c1.56 0 3.03.4 4.3 1.1L9.6 9.61 4.72 4.72C6.21 3.64 8.03 3 10 3',
  }),
  'StrollerOutlined',
);
export const StrollerRoundedIcon = (props?: KTRawAttr) => {
  const s = _StrollerRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StrollerRoundedIcon = svg(
  svg('path', {
    d: 'M18 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M6 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m8.3-13.9C13.03 3.4 11.56 3 10 3c-1.51 0-2.93.38-4.17 1.03-.59.31-.68 1.12-.22 1.58L9.6 9.6zm7.64 1.73C21.65 4.22 20.3 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03L6.71 15.31c-.55.65-.09 1.65.76 1.65H15c1.1 0 2-.9 2-2V6.27c.58-.68.97-1.27 1.65-1.27s1.22.52 1.33 1.21c.1.45.5.79.98.79.55 0 1-.45 1-1 0-.06-.01-.11-.02-.17',
  }),
  'StrollerRounded',
);
export const StrollerSharpIcon = (props?: KTRawAttr) => {
  const s = _StrollerSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StrollerSharpIcon = svg(
  svg('path', {
    d: 'M18 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M6 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M22 7v-.52C22 4.56 20.52 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03L5.27 17H17V6.27c.58-.68.97-1.27 1.65-1.27.77 0 1.35.66 1.35 1.48V7zm-7.7-2.9C13.03 3.4 11.56 3 10 3c-1.97 0-3.79.64-5.28 1.72l4.89 4.89z',
  }),
  'StrollerSharp',
);
export const StrollerTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StrollerTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StrollerTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M10 5c.29 0 .58.02.86.05L9.49 6.66l-1.4-1.4C8.71 5.09 9.35 5 10 5m5 3.66V15H9.6z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M10 5c.29 0 .58.02.86.05L9.49 6.66l-1.4-1.4C8.71 5.09 9.35 5 10 5m5 3.66V15H9.6zM18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-8.8 10.32C6.12 16 6.58 17 7.43 17H15c1.1 0 2-.9 2-2V6.27c.58-.68.97-1.27 1.65-1.27.77 0 1.35.66 1.35 1.48V7h2v-.52C22 4.56 20.52 3 18.65 3M10 3c-1.97 0-3.79.64-5.28 1.72l4.89 4.89 4.7-5.51C13.03 3.4 11.56 3 10 3m6 15c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M6 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2',
      },
      '1',
    ),
  ],
  'StrollerTwoTone',
);
export const StyleIcon = (props?: KTRawAttr) => {
  const s = _StyleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StyleIcon = svg(
  svg('path', {
    d: 'm2.53 19.65 1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61m19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6M7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34z',
  }),
  'Style',
);
export const StyleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _StyleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StyleOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm2.53 19.65 1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61m19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6m-9.2 3.8L7.87 7.79l7.35-3.04h.01l4.95 11.95z',
      },
      '0',
    ),
    svg('circle', { cx: '11', cy: '9', r: '1' }, '1'),
    svg('path', { d: 'M5.88 19.75c0 1.1.9 2 2 2h1.45l-3.45-8.34z' }, '2'),
  ],
  'StyleOutlined',
);
export const StyleRoundedIcon = (props?: KTRawAttr) => {
  const s = _StyleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StyleRoundedIcon = svg(
  svg('path', {
    d: 'm2.53 19.65 1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61m19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6M7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34z',
  }),
  'StyleRounded',
);
export const StyleSharpIcon = (props?: KTRawAttr) => {
  const s = _StyleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StyleSharpIcon = svg(
  svg('path', {
    d: 'M3.87 20.21v-9.03l-3.19 7.7zm18.92-2.43L16.31 2.14 5.26 6.71l6.48 15.64zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-2 13h3.45l-3.45-8.34z',
  }),
  'StyleSharp',
);
export const StyleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _StyleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _StyleTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M15.22 4.75 7.87 7.79l4.96 11.96 7.35-3.05zM11 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm3.87 11.18-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61l1.34.56zm18.16 4.77L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6m-9.2 3.8L7.87 7.79l7.35-3.04h.01l4.95 11.95z',
      },
      '1',
    ),
    svg('circle', { cx: '11', cy: '9', r: '1' }, '2'),
    svg('path', { d: 'm9.33 21.75-3.45-8.34v6.34c0 1.1.9 2 2 2z' }, '3'),
  ],
  'StyleTwoTone',
);
export const SubdirectoryArrowLeftIcon = (props?: KTRawAttr) => {
  const s = _SubdirectoryArrowLeftIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubdirectoryArrowLeftIcon = svg(
  svg('path', { d: 'm11 9 1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6z' }),
  'SubdirectoryArrowLeft',
);
export const SubdirectoryArrowLeftOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SubdirectoryArrowLeftOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubdirectoryArrowLeftOutlinedIcon = svg(
  svg('path', { d: 'm11 9 1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6z' }),
  'SubdirectoryArrowLeftOutlined',
);
export const SubdirectoryArrowLeftRoundedIcon = (props?: KTRawAttr) => {
  const s = _SubdirectoryArrowLeftRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubdirectoryArrowLeftRoundedIcon = svg(
  svg('path', {
    d: 'm5.71 15.71 4.58 4.58c.39.39 1.03.39 1.42 0s.39-1.03 0-1.42L8.83 16H19c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v9H8.83l2.88-2.87c.39-.39.39-1.03 0-1.42s-1.03-.39-1.42 0l-4.58 4.58c-.39.39-.39 1.03 0 1.42',
  }),
  'SubdirectoryArrowLeftRounded',
);
export const SubdirectoryArrowLeftSharpIcon = (props?: KTRawAttr) => {
  const s = _SubdirectoryArrowLeftSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubdirectoryArrowLeftSharpIcon = svg(
  svg('path', { d: 'm11 9 1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6z' }),
  'SubdirectoryArrowLeftSharp',
);
export const SubdirectoryArrowLeftTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SubdirectoryArrowLeftTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubdirectoryArrowLeftTwoToneIcon = svg(
  svg('path', { d: 'm11 9 1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6z' }),
  'SubdirectoryArrowLeftTwoTone',
);
export const SubdirectoryArrowRightIcon = (props?: KTRawAttr) => {
  const s = _SubdirectoryArrowRightIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubdirectoryArrowRightIcon = svg(
  svg('path', { d: 'm19 15-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9z' }),
  'SubdirectoryArrowRight',
);
export const SubdirectoryArrowRightOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SubdirectoryArrowRightOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubdirectoryArrowRightOutlinedIcon = svg(
  svg('path', { d: 'm19 15-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9z' }),
  'SubdirectoryArrowRightOutlined',
);
export const SubdirectoryArrowRightRoundedIcon = (props?: KTRawAttr) => {
  const s = _SubdirectoryArrowRightRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubdirectoryArrowRightRoundedIcon = svg(
  svg('path', {
    d: 'm18.29 15.71-4.58 4.58c-.39.39-1.03.39-1.42 0s-.39-1.03 0-1.42L15.17 16H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v9h9.17l-2.88-2.87c-.39-.39-.39-1.03 0-1.42s1.03-.39 1.42 0l4.58 4.58c.39.39.39 1.03 0 1.42',
  }),
  'SubdirectoryArrowRightRounded',
);
export const SubdirectoryArrowRightSharpIcon = (props?: KTRawAttr) => {
  const s = _SubdirectoryArrowRightSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubdirectoryArrowRightSharpIcon = svg(
  svg('path', { d: 'm19 15-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9z' }),
  'SubdirectoryArrowRightSharp',
);
export const SubdirectoryArrowRightTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SubdirectoryArrowRightTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubdirectoryArrowRightTwoToneIcon = svg(
  svg('path', { d: 'm19 15-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9z' }),
  'SubdirectoryArrowRightTwoTone',
);
export const SubjectIcon = (props?: KTRawAttr) => {
  const s = _SubjectIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubjectIcon = svg(svg('path', { d: 'M14 17H4v2h10zm6-8H4v2h16zM4 15h16v-2H4zM4 5v2h16V5z' }), 'Subject');
export const SubjectOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SubjectOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubjectOutlinedIcon = svg(
  svg('path', { d: 'M14 17H4v2h10zm6-8H4v2h16zM4 15h16v-2H4zM4 5v2h16V5z' }),
  'SubjectOutlined',
);
export const SubjectRoundedIcon = (props?: KTRawAttr) => {
  const s = _SubjectRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubjectRoundedIcon = svg(
  svg('path', {
    d: 'M13 17H5c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1m6-8H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1M5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1M4 6c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1',
  }),
  'SubjectRounded',
);
export const SubjectSharpIcon = (props?: KTRawAttr) => {
  const s = _SubjectSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubjectSharpIcon = svg(
  svg('path', { d: 'M14 17H4v2h10zm6-8H4v2h16zM4 15h16v-2H4zM4 5v2h16V5z' }),
  'SubjectSharp',
);
export const SubjectTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SubjectTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubjectTwoToneIcon = svg(
  svg('path', { d: 'M14 17H4v2h10zm6-8H4v2h16zM4 15h16v-2H4zM4 5v2h16V5z' }),
  'SubjectTwoTone',
);
export const SubscriptIcon = (props?: KTRawAttr) => {
  const s = _SubscriptIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubscriptIcon = svg(
  svg('path', {
    d: 'M22 18h-2v1h3v1h-4v-2c0-.55.45-1 1-1h2v-1h-3v-1h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1M5.88 18h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 4h-2.68l-3.07 4.99h-.12L8.85 4H6.19l4.32 6.73z',
  }),
  'Subscript',
);
export const SubscriptOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SubscriptOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubscriptOutlinedIcon = svg(
  svg('path', {
    d: 'M22 18h-2v1h3v1h-4v-2c0-.55.45-1 1-1h2v-1h-3v-1h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1M5.88 18h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 4h-2.68l-3.07 4.99h-.12L8.85 4H6.19l4.32 6.73z',
  }),
  'SubscriptOutlined',
);
export const SubscriptRoundedIcon = (props?: KTRawAttr) => {
  const s = _SubscriptRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubscriptRoundedIcon = svg(
  svg('path', {
    d: 'M10.52 10.73 7.3 5.72C6.82 4.97 7.35 4 8.23 4c.39 0 .74.2.95.53l2.76 4.46h.12l2.74-4.45c.21-.34.57-.54.96-.54.88 0 1.42.98.94 1.72l-3.23 5 3.55 5.55c.48.75-.06 1.73-.94 1.73-.38 0-.74-.2-.95-.52l-3.07-4.89h-.12l-3.07 4.89c-.2.32-.56.52-.95.52-.88 0-1.42-.97-.94-1.72zM23 19.5c0-.28-.22-.5-.5-.5H20v-1h2c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-2.5c-.28 0-.5.22-.5.5s.22.5.5.5H22v1h-2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h2.5c.28 0 .5-.22.5-.5',
  }),
  'SubscriptRounded',
);
export const SubscriptSharpIcon = (props?: KTRawAttr) => {
  const s = _SubscriptSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubscriptSharpIcon = svg(
  svg('path', {
    d: 'M20 18v1h3v1h-4v-3h3v-1h-3v-1h4v3zM5.88 18h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 4h-2.68l-3.07 4.99h-.12L8.85 4H6.19l4.32 6.73z',
  }),
  'SubscriptSharp',
);
export const SubscriptTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SubscriptTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubscriptTwoToneIcon = svg(
  svg('path', {
    d: 'M22 18h-2v1h3v1h-4v-2c0-.55.45-1 1-1h2v-1h-3v-1h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1M5.88 18h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 4h-2.68l-3.07 4.99h-.12L8.85 4H6.19l4.32 6.73z',
  }),
  'SubscriptTwoTone',
);
export const SubscriptionsIcon = (props?: KTRawAttr) => {
  const s = _SubscriptionsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubscriptionsIcon = svg(
  svg('path', {
    d: 'M20 8H4V6h16zm-2-6H6v2h12zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2m-6 4-6-3.27v6.53z',
  }),
  'Subscriptions',
);
export const SubscriptionsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SubscriptionsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubscriptionsOutlinedIcon = svg(
  svg('path', {
    d: 'M4 6h16v2H4zm2-4h12v2H6zm14 8H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2m0 10H4v-8h16zm-10-7.27v6.53L16 16z',
  }),
  'SubscriptionsOutlined',
);
export const SubscriptionsRoundedIcon = (props?: KTRawAttr) => {
  const s = _SubscriptionsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubscriptionsRoundedIcon = svg(
  svg('path', {
    d: 'M19 8H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1m-2-6H7c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1m5 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2m-6.81 3.56L10 12.73v6.53l5.19-2.82c.35-.19.35-.69 0-.88',
  }),
  'SubscriptionsRounded',
);
export const SubscriptionsSharpIcon = (props?: KTRawAttr) => {
  const s = _SubscriptionsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubscriptionsSharpIcon = svg(
  svg('path', { d: 'M20 8H4V6h16zm-2-6H6v2h12zm4 8v12H2V10zm-6 6-6-3.27v6.53z' }),
  'SubscriptionsSharp',
);
export const SubscriptionsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SubscriptionsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubscriptionsTwoToneIcon = svg(
  [
    svg('path', { d: 'M4 20h16v-8H4zm6-7.27L16 16l-6 3.26z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M4 6h16v2H4zm2-4h12v2H6zm14 8H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2m0 10H4v-8h16zm-10-7.27v6.53L16 16z',
      },
      '1',
    ),
  ],
  'SubscriptionsTwoTone',
);
export const SubtitlesIcon = (props?: KTRawAttr) => {
  const s = _SubtitlesIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubtitlesIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M4 12h4v2H4zm10 6H4v-2h10zm6 0h-4v-2h4zm0-4H10v-2h10z',
  }),
  'Subtitles',
);
export const SubtitlesOffIcon = (props?: KTRawAttr) => {
  const s = _SubtitlesOffIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubtitlesOffIcon = svg(
  svg('path', {
    d: 'M20 4H6.83l8 8H20v2h-3.17l4.93 4.93c.15-.28.24-.59.24-.93V6c0-1.1-.9-2-2-2M1.04 3.87l1.2 1.2C2.09 5.35 2 5.66 2 6v12c0 1.1.9 2 2 2h13.17l2.96 2.96 1.41-1.41L2.45 2.45zM8 12v2H4v-2zm6 4.83V18H4v-2h9.17z',
  }),
  'SubtitlesOff',
);
export const SubtitlesOffOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SubtitlesOffOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubtitlesOffOutlinedIcon = svg(
  [
    svg('path', { d: 'M20 4H6.83l2 2H20v11.17l1.76 1.76c.15-.28.24-.59.24-.93V6c0-1.1-.9-2-2-2' }, '0'),
    svg(
      'path',
      {
        d: 'M18 10h-5.17l2 2H18zM1.04 3.87l1.2 1.2C2.09 5.35 2 5.66 2 6v12c0 1.1.9 2 2 2h13.17l2.96 2.96 1.41-1.41L2.45 2.45zM4 6.83 7.17 10H6v2h2v-1.17L11.17 14H6v2h7.17l2 2H4z',
      },
      '1',
    ),
  ],
  'SubtitlesOffOutlined',
);
export const SubtitlesOffRoundedIcon = (props?: KTRawAttr) => {
  const s = _SubtitlesOffRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubtitlesOffRoundedIcon = svg(
  svg('path', {
    d: 'M20 4H6.83l8 8H19c.55 0 1 .45 1 1s-.45 1-1 1h-2.17l4.93 4.93c.15-.28.24-.59.24-.93V6c0-1.1-.9-2-2-2m0 16-6-6-1.71-1.71L12 12 3.16 3.16a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l.49.49c-.15.29-.24.6-.24.94v12c0 1.1.9 2 2 2h13.17l2.25 2.25c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41zM8 13c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1m6 4c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h8c.08 0 .14.03.21.04l.74.74c.02.08.05.14.05.22',
  }),
  'SubtitlesOffRounded',
);
export const SubtitlesOffSharpIcon = (props?: KTRawAttr) => {
  const s = _SubtitlesOffSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubtitlesOffSharpIcon = svg(
  svg('path', {
    d: 'm6.83 4 8 8H20v2h-3.17L22 19.17V4zm-5.79-.13.96.96V20h15.17l2.96 2.96 1.41-1.41L2.45 2.45zM4 12h4v2H4zm0 4h9.17l.83.83V18H4z',
  }),
  'SubtitlesOffSharp',
);
export const SubtitlesOffTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SubtitlesOffTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubtitlesOffTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'm8.83 6 4 4H18v2h-3.17L20 17.17V6zm6.34 12-2-2H6v-2h5.17L8 10.83V12H6v-2h1.17L4 6.83V18z', opacity: '.3' },
      '0',
    ),
    svg('path', { d: 'M18 10h-5.17l2 2H18z' }, '1'),
    svg(
      'path',
      {
        d: 'M20 4H6.83l2 2H20v11.17l1.76 1.76c.15-.28.24-.59.24-.93V6c0-1.1-.9-2-2-2M1.04 3.87l1.2 1.2C2.09 5.35 2 5.66 2 6v12c0 1.1.9 2 2 2h13.17l2.96 2.96 1.41-1.41L2.45 2.45zM4 6.83 7.17 10H6v2h2v-1.17L11.17 14H6v2h7.17l2 2H4z',
      },
      '2',
    ),
  ],
  'SubtitlesOffTwoTone',
);
export const SubtitlesOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SubtitlesOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubtitlesOutlinedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z',
  }),
  'SubtitlesOutlined',
);
export const SubtitlesRoundedIcon = (props?: KTRawAttr) => {
  const s = _SubtitlesRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubtitlesRoundedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M5 12h2c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1m8 6H5c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m6 0h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1m0-4h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1',
  }),
  'SubtitlesRounded',
);
export const SubtitlesSharpIcon = (props?: KTRawAttr) => {
  const s = _SubtitlesSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubtitlesSharpIcon = svg(
  svg('path', { d: 'M22 4H2v16h20zM4 12h4v2H4zm10 6H4v-2h10zm6 0h-4v-2h4zm0-4H10v-2h10z' }),
  'SubtitlesSharp',
);
export const SubtitlesTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SubtitlesTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubtitlesTwoToneIcon = svg(
  [
    svg('path', { d: 'M4 18h16V6H4zm14-2h-2v-2h2zm-8-6h8v2h-8zm-4 0h2v2H6zm0 4h8v2H6z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z',
      },
      '1',
    ),
  ],
  'SubtitlesTwoTone',
);
export const SubwayIcon = (props?: KTRawAttr) => {
  const s = _SubwayIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubwayIcon = svg(
  [
    svg('circle', { cx: '15.5', cy: '16', r: '1' }, '0'),
    svg('circle', { cx: '8.5', cy: '16', r: '1' }, '1'),
    svg(
      'path',
      {
        d: 'M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2s-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06m.2 13.08c0 1.45-1.18 2.62-2.63 2.62l1.13 1.12V20H15l-1.5-1.5h-2.83L9.17 20H7.5v-.38l1.12-1.12C7.18 18.5 6 17.32 6 15.88V9c0-2.63 3-3 6-3 3.32 0 6 .38 6 3z',
      },
      '2',
    ),
  ],
  'Subway',
);
export const SubwayOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SubwayOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubwayOutlinedIcon = svg(
  svg('path', {
    d: 'M17.8 2.8C16 2.09 13.86 2 12 2s-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06M9.17 20l1.5-1.5h2.66l1.5 1.5zm-2.16-6V9h10v5zm9.49 2c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1m-8-1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M20 20h-3.5v-.38l-1.15-1.16c1.49-.17 2.65-1.42 2.65-2.96V9c0-2.63-3-3-6-3s-6 .37-6 3v6.5c0 1.54 1.16 2.79 2.65 2.96L7.5 19.62V20H4V8.86c0-2 1.01-3.45 2.93-4.2C8.41 4.08 10.32 4 12 4s3.59.08 5.07.66c1.92.75 2.93 2.2 2.93 4.2z',
  }),
  'SubwayOutlined',
);
export const SubwayRoundedIcon = (props?: KTRawAttr) => {
  const s = _SubwayRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubwayRoundedIcon = svg(
  [
    svg('circle', { cx: '8.5', cy: '16', r: '1' }, '0'),
    svg('circle', { cx: '15.5', cy: '16', r: '1' }, '1'),
    svg(
      'path',
      {
        d: 'M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2s-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06m.2 12.7c0 1.54-1.16 2.79-2.65 2.96l1.15 1.16V20h-1.67l-1.5-1.5h-2.66L9.17 20H7.5v-.38l1.15-1.16C7.16 18.29 6 17.04 6 15.5V9c0-2.63 3-3 6-3s6 .37 6 3z',
      },
      '2',
    ),
  ],
  'SubwayRounded',
);
export const SubwaySharpIcon = (props?: KTRawAttr) => {
  const s = _SubwaySharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubwaySharpIcon = svg(
  [
    svg('circle', { cx: '8.5', cy: '16', r: '1' }, '0'),
    svg('circle', { cx: '15.5', cy: '16', r: '1' }, '1'),
    svg(
      'path',
      {
        d: 'M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2s-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06m.2 12.7c0 1.54-1.16 2.79-2.65 2.96l1.15 1.16V20h-1.67l-1.5-1.5h-2.66L9.17 20H7.5v-.38l1.15-1.16C7.16 18.29 6 17.04 6 15.5V9c0-2.63 3-3 6-3s6 .37 6 3z',
      },
      '2',
    ),
  ],
  'SubwaySharp',
);
export const SubwayTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SubwayTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SubwayTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M10.67 18.5 9.17 20h5.66l-1.5-1.5zm6.4-13.84C15.59 4.08 13.68 4 12 4s-3.59.08-5.07.66C5.01 5.41 4 6.86 4 8.86V20h3.5v-.38l1.15-1.16C7.16 18.29 6 17.04 6 15.5V9c0-2.63 3-3 6-3s6 .37 6 3v6.5c0 1.54-1.16 2.79-2.65 2.96l1.15 1.16V20H20V8.86c0-2-1.01-3.45-2.93-4.2',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M17.8 2.8C16 2.09 13.86 2 12 2s-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06M9.17 20l1.5-1.5h2.66l1.5 1.5zm-2.16-6V9h10v5zm9.49 2c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1m-8-1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M20 20h-3.5v-.38l-1.15-1.16c1.49-.17 2.65-1.42 2.65-2.96V9c0-2.63-3-3-6-3s-6 .37-6 3v6.5c0 1.54 1.16 2.79 2.65 2.96L7.5 19.62V20H4V8.86c0-2 1.01-3.45 2.93-4.2C8.41 4.08 10.32 4 12 4s3.59.08 5.07.66c1.92.75 2.93 2.2 2.93 4.2z',
      },
      '1',
    ),
  ],
  'SubwayTwoTone',
);
export const SummarizeIcon = (props?: KTRawAttr) => {
  const s = _SummarizeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SummarizeIcon = svg(
  svg('path', {
    d: 'M15 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V9zM8 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6 1V4.5l5.5 5.5z',
  }),
  'Summarize',
);
export const SummarizeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SummarizeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SummarizeOutlinedIcon = svg(
  svg('path', {
    d: 'M15 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V9zM5 19V5h9v5h5v9zM9 8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1m0 4c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1m0 4c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1',
  }),
  'SummarizeOutlined',
);
export const SummarizeRoundedIcon = (props?: KTRawAttr) => {
  const s = _SummarizeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SummarizeRoundedIcon = svg(
  svg('path', {
    d: 'M15.59 3.59c-.38-.38-.89-.59-1.42-.59H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.41zM8 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6 0V4.5l5.5 5.5H15c-.55 0-1-.45-1-1',
  }),
  'SummarizeRounded',
);
export const SummarizeSharpIcon = (props?: KTRawAttr) => {
  const s = _SummarizeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SummarizeSharpIcon = svg(
  svg('path', {
    d: 'M15 3H3v18h18V9zM8 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6 1V4.5l5.5 5.5z',
  }),
  'SummarizeSharp',
);
export const SummarizeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SummarizeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SummarizeTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M14 5H5v14h14v-9h-5zM8 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1',
        opacity: '.3',
      },
      '0',
    ),
    svg('circle', { cx: '8', cy: '8', r: '1' }, '1'),
    svg('path', { d: 'M15 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V9zm4 16H5V5h9v5h5z' }, '2'),
    svg('circle', { cx: '8', cy: '12', r: '1' }, '3'),
    svg('circle', { cx: '8', cy: '16', r: '1' }, '4'),
  ],
  'SummarizeTwoTone',
);
export const SunnyIcon = (props?: KTRawAttr) => {
  const s = _SunnyIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SunnyIcon = svg(
  svg('path', {
    d: 'M11 4V2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1m7.36 3.05 1.41-1.42c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0l-1.41 1.42c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0M22 11h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1m-10 8c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1M5.64 7.05 4.22 5.64c-.39-.39-.39-1.03 0-1.41s1.03-.39 1.41 0l1.41 1.41c.39.39.39 1.03 0 1.41s-1.02.39-1.4 0m11.31 9.9c-.39.39-.39 1.03 0 1.41l1.41 1.41c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.41-1.41c-.38-.39-1.02-.39-1.41 0M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m3.64 6.78 1.41-1.41c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.41 1.41c-.39.39-.39 1.03 0 1.41.38.39 1.02.39 1.41 0M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6',
  }),
  'Sunny',
);
export const SunnySnowingIcon = (props?: KTRawAttr) => {
  const s = _SunnySnowingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SunnySnowingIcon = svg(
  svg('path', {
    d: 'M13 5h-2V1h2zM1 11h4v2H1zm18 2v-2h4v2zm-1.34-5.24-1.41-1.41 2.83-2.83 1.41 1.41zM3.51 4.93l1.41-1.41 2.83 2.83-1.41 1.41zM4.75 17a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m12 0a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m-9 4a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m3-4a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m3 4a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0M17 13v-1c0-2.76-2.24-5-5-5s-5 2.24-5 5v1z',
  }),
  'SunnySnowing',
);
export const SuperscriptIcon = (props?: KTRawAttr) => {
  const s = _SuperscriptIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SuperscriptIcon = svg(
  svg('path', {
    d: 'M22 7h-2v1h3v1h-4V7c0-.55.45-1 1-1h2V5h-3V4h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1M5.88 20h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 6h-2.68l-3.07 4.99h-.12L8.85 6H6.19l4.32 6.73z',
  }),
  'Superscript',
);
export const SuperscriptOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SuperscriptOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SuperscriptOutlinedIcon = svg(
  svg('path', {
    d: 'M22 7h-2v1h3v1h-4V7c0-.55.45-1 1-1h2V5h-3V4h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1M5.88 20h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 6h-2.68l-3.07 4.99h-.12L8.85 6H6.19l4.32 6.73z',
  }),
  'SuperscriptOutlined',
);
export const SuperscriptRoundedIcon = (props?: KTRawAttr) => {
  const s = _SuperscriptRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SuperscriptRoundedIcon = svg(
  svg('path', {
    d: 'M10.51 12.73 7.3 7.72C6.82 6.97 7.35 6 8.23 6c.39 0 .74.2.95.53l2.76 4.46h.12l2.74-4.45c.2-.34.56-.54.95-.54.88 0 1.42.98.94 1.72l-3.23 5 3.55 5.55c.49.75-.05 1.73-.93 1.73-.38 0-.74-.2-.95-.52l-3.07-4.89h-.12l-3.07 4.89c-.21.32-.56.52-.95.52-.88 0-1.42-.97-.94-1.72zM23 8.5c0-.28-.22-.5-.5-.5H20V7h2c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-2.5c-.28 0-.5.22-.5.5s.22.5.5.5H22v1h-2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h2.5c.28 0 .5-.22.5-.5',
  }),
  'SuperscriptRounded',
);
export const SuperscriptSharpIcon = (props?: KTRawAttr) => {
  const s = _SuperscriptSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SuperscriptSharpIcon = svg(
  svg('path', {
    d: 'M20 7v1h3v1h-4V6h3V5h-3V4h4v3zM5.88 20h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 6h-2.68l-3.07 4.99h-.12L8.85 6H6.19l4.32 6.73z',
  }),
  'SuperscriptSharp',
);
export const SuperscriptTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SuperscriptTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SuperscriptTwoToneIcon = svg(
  svg('path', {
    d: 'M22 7h-2v1h3v1h-4V7c0-.55.45-1 1-1h2V5h-3V4h3c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1M5.88 20h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 6h-2.68l-3.07 4.99h-.12L8.85 6H6.19l4.32 6.73z',
  }),
  'SuperscriptTwoTone',
);
export const SupervisedUserCircleIcon = (props?: KTRawAttr) => {
  const s = _SupervisedUserCircleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupervisedUserCircleIcon = svg(
  svg('path', {
    d: 'M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10m3.61 6.34c1.07 0 1.93.86 1.93 1.93s-.86 1.93-1.93 1.93-1.93-.86-1.93-1.93c-.01-1.07.86-1.93 1.93-1.93m-6-1.58c1.3 0 2.36 1.06 2.36 2.36s-1.06 2.36-2.36 2.36-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36m0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68M11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09',
  }),
  'SupervisedUserCircle',
);
export const SupervisedUserCircleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SupervisedUserCircleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupervisedUserCircleOutlinedIcon = svg(
  svg('path', {
    d: 'M12.5 10c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3m-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6.5 2c1.11 0 2-.89 2-2s-.89-2-2-2-2.01.89-2 2c0 1.11.89 2 2 2M11.99 2.01c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10M5.84 17.12c.68-.54 2.27-1.11 3.66-1.11.07 0 .15.01.23.01.24-.64.67-1.29 1.3-1.86-.56-.1-1.09-.16-1.53-.16-1.3 0-3.39.45-4.73 1.43-.5-1.04-.78-2.2-.78-3.43 0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.2-.27 2.34-.75 3.37-1-.59-2.36-.87-3.24-.87-1.52 0-4.5.81-4.5 2.7v2.78c-2.27-.13-4.29-1.21-5.66-2.86',
  }),
  'SupervisedUserCircleOutlined',
);
export const SupervisedUserCircleRoundedIcon = (props?: KTRawAttr) => {
  const s = _SupervisedUserCircleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupervisedUserCircleRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m3.61 6.34c1.07 0 1.93.86 1.93 1.93s-.86 1.93-1.93 1.93-1.93-.86-1.93-1.93c-.01-1.07.86-1.93 1.93-1.93m-6-1.58c1.3 0 2.36 1.06 2.36 2.36s-1.06 2.36-2.36 2.36-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36m0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68M12 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15C18.28 17.88 15.39 20 12 20',
  }),
  'SupervisedUserCircleRounded',
);
export const SupervisedUserCircleSharpIcon = (props?: KTRawAttr) => {
  const s = _SupervisedUserCircleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupervisedUserCircleSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m3.61 6.34c1.07 0 1.93.86 1.93 1.93s-.86 1.93-1.93 1.93-1.93-.86-1.93-1.93c-.01-1.07.86-1.93 1.93-1.93m-6-1.58c1.3 0 2.36 1.06 2.36 2.36s-1.06 2.36-2.36 2.36-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36m0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68M12 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15C18.28 17.88 15.39 20 12 20',
  }),
  'SupervisedUserCircleSharp',
);
export const SupervisedUserCircleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SupervisedUserCircleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupervisedUserCircleTwoToneIcon = svg(
  [
    svg('circle', { cx: '9.5', cy: '10', r: '1', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M11.5 17.21c0-1.88 2.98-2.7 4.5-2.7.88 0 2.24.27 3.24.87.48-1.02.75-2.16.75-3.37 0-4.41-3.59-8-8-8s-8 3.59-8 8c0 1.23.29 2.39.78 3.43 1.34-.98 3.43-1.43 4.73-1.43.44 0 .97.05 1.53.16-.63.57-1.06 1.22-1.3 1.86-.08 0-.15-.01-.23-.01-1.38 0-2.98.57-3.66 1.11 1.37 1.65 3.39 2.73 5.66 2.86zM16 9c1.11 0 2 .89 2 2s-.89 2-2 2-2-.89-2-2c-.01-1.11.89-2 2-2m-6.5 4c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3',
        opacity: '.3',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M12.5 10c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3m-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6.5 2c1.11 0 2-.89 2-2s-.89-2-2-2-2.01.89-2 2c0 1.11.89 2 2 2M11.99 2.01c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10M5.84 17.12c.68-.54 2.27-1.11 3.66-1.11.07 0 .15.01.23.01.24-.64.67-1.29 1.3-1.86-.56-.1-1.09-.16-1.53-.16-1.3 0-3.39.45-4.73 1.43-.5-1.04-.78-2.2-.78-3.43 0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.2-.27 2.34-.75 3.37-1-.59-2.36-.87-3.24-.87-1.52 0-4.5.81-4.5 2.7v2.78c-2.27-.13-4.29-1.21-5.66-2.86',
      },
      '2',
    ),
  ],
  'SupervisedUserCircleTwoTone',
);
export const SupervisorAccountIcon = (props?: KTRawAttr) => {
  const s = _SupervisorAccountIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupervisorAccountIcon = svg(
  svg('path', {
    d: 'M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5M9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5 6 6.34 6 8s1.34 3 3 3m7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13',
  }),
  'SupervisorAccount',
);
export const SupervisorAccountOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SupervisorAccountOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupervisorAccountOutlinedIcon = svg(
  svg('path', {
    d: 'M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12m0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7m.05 10H4.77c.99-.5 2.7-1 4.23-1 .11 0 .23.01.34.01.34-.73.93-1.33 1.64-1.81-.73-.13-1.42-.2-1.98-.2-2.34 0-7 1.17-7 3.5V19h7v-1.5c0-.17.02-.34.05-.5m7.45-2.5c-1.84 0-5.5 1.01-5.5 3V19h11v-1.5c0-1.99-3.66-3-5.5-3m1.21-1.82c.76-.43 1.29-1.24 1.29-2.18C19 9.12 17.88 8 16.5 8S14 9.12 14 10.5c0 .94.53 1.75 1.29 2.18.36.2.77.32 1.21.32s.85-.12 1.21-.32',
  }),
  'SupervisorAccountOutlined',
);
export const SupervisorAccountRoundedIcon = (props?: KTRawAttr) => {
  const s = _SupervisorAccountRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupervisorAccountRoundedIcon = svg(
  svg('path', {
    d: 'M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5M9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5 6 6.34 6 8s1.34 3 3 3m7.5 3c-1.83 0-5.5.92-5.5 2.75V18c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-1.25c0-1.83-3.67-2.75-5.5-2.75M9 13c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h6v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13',
  }),
  'SupervisorAccountRounded',
);
export const SupervisorAccountSharpIcon = (props?: KTRawAttr) => {
  const s = _SupervisorAccountSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupervisorAccountSharpIcon = svg(
  svg('path', {
    d: 'M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5M9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5 6 6.34 6 8s1.34 3 3 3m7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13',
  }),
  'SupervisorAccountSharp',
);
export const SupervisorAccountTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SupervisorAccountTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupervisorAccountTwoToneIcon = svg(
  [
    svg('circle', { cx: '9', cy: '8.5', r: '1.5', opacity: '.3' }, '0'),
    svg(
      'path',
      { d: 'M4.77 17h4.28c.01-.06.12-.58.29-.99-.11 0-.23-.01-.34-.01-1.53 0-3.25.5-4.23 1', opacity: '.3' },
      '1',
    ),
    svg(
      'path',
      {
        d: 'M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12m0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7m.05 10H4.77c.99-.5 2.7-1 4.23-1 .11 0 .23.01.34.01.34-.73.93-1.33 1.64-1.81-.73-.13-1.42-.2-1.98-.2-2.34 0-7 1.17-7 3.5V19h7v-1.5c0-.17.02-.34.05-.5m7.45-2.5c-1.84 0-5.5 1.01-5.5 3V19h11v-1.5c0-1.99-3.66-3-5.5-3m1.21-1.82c.76-.43 1.29-1.24 1.29-2.18C19 9.12 17.88 8 16.5 8S14 9.12 14 10.5c0 .94.53 1.75 1.29 2.18.36.2.77.32 1.21.32s.85-.12 1.21-.32',
      },
      '2',
    ),
  ],
  'SupervisorAccountTwoTone',
);
export const SupportIcon = (props?: KTRawAttr) => {
  const s = _SupportIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupportIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m7.46 7.12-2.78 1.15c-.51-1.36-1.58-2.44-2.95-2.94l1.15-2.78c2.1.8 3.77 2.47 4.58 4.57M12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3M9.13 4.54l1.17 2.78c-1.38.5-2.47 1.59-2.98 2.97L4.54 9.13c.81-2.11 2.48-3.78 4.59-4.59M4.54 14.87l2.78-1.15c.51 1.38 1.59 2.46 2.97 2.96l-1.17 2.78c-2.1-.81-3.77-2.48-4.58-4.59m10.34 4.59-1.15-2.78c1.37-.51 2.45-1.59 2.95-2.97l2.78 1.17c-.81 2.1-2.48 3.77-4.58 4.58',
  }),
  'Support',
);
export const SupportAgentIcon = (props?: KTRawAttr) => {
  const s = _SupportAgentIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupportAgentIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62',
      },
      '0',
    ),
    svg('circle', { cx: '9', cy: '13', r: '1' }, '1'),
    svg('circle', { cx: '15', cy: '13', r: '1' }, '2'),
    svg(
      'path',
      {
        d: 'M18 11.03C17.52 8.18 15.04 6 12.05 6c-3.03 0-6.29 2.51-6.03 6.45 2.47-1.01 4.33-3.21 4.86-5.89 1.31 2.63 4 4.44 7.12 4.47',
      },
      '3',
    ),
  ],
  'SupportAgent',
);
export const SupportAgentOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SupportAgentOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupportAgentOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62',
      },
      '0',
    ),
    svg('circle', { cx: '9', cy: '13', r: '1' }, '1'),
    svg('circle', { cx: '15', cy: '13', r: '1' }, '2'),
    svg(
      'path',
      {
        d: 'M18 11.03C17.52 8.18 15.04 6 12.05 6c-3.03 0-6.29 2.51-6.03 6.45 2.47-1.01 4.33-3.21 4.86-5.89 1.31 2.63 4 4.44 7.12 4.47',
      },
      '3',
    ),
  ],
  'SupportAgentOutlined',
);
export const SupportAgentRoundedIcon = (props?: KTRawAttr) => {
  const s = _SupportAgentRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupportAgentRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2 .55 0 1-.45 1-1v-4.81c0-3.83 2.95-7.18 6.78-7.29 3.96-.12 7.22 3.06 7.22 7V19h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62',
      },
      '0',
    ),
    svg('circle', { cx: '9', cy: '13', r: '1' }, '1'),
    svg('circle', { cx: '15', cy: '13', r: '1' }, '2'),
    svg(
      'path',
      {
        d: 'M18 11.03C17.52 8.18 15.04 6 12.05 6c-3.03 0-6.29 2.51-6.03 6.45 2.47-1.01 4.33-3.21 4.86-5.89 1.31 2.63 4 4.44 7.12 4.47',
      },
      '3',
    ),
  ],
  'SupportAgentRounded',
);
export const SupportAgentSharpIcon = (props?: KTRawAttr) => {
  const s = _SupportAgentSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupportAgentSharpIcon = svg(
  [
    svg('circle', { cx: '9', cy: '13', r: '1' }, '0'),
    svg('circle', { cx: '15', cy: '13', r: '1' }, '1'),
    svg(
      'path',
      {
        d: 'M18 11.03C17.52 8.18 15.04 6 12.05 6c-3.03 0-6.29 2.51-6.03 6.45 2.47-1.01 4.33-3.21 4.86-5.89 1.31 2.63 4 4.44 7.12 4.47',
      },
      '2',
    ),
    svg(
      'path',
      {
        d: 'M20.99 12c-.11-5.37-4.31-9-8.99-9-4.61 0-8.85 3.53-8.99 9H2v6h3v-5.81c0-3.83 2.95-7.18 6.78-7.29 3.96-.12 7.22 3.06 7.22 7V19h-8v2h10v-3h1v-6z',
      },
      '3',
    ),
  ],
  'SupportAgentSharp',
);
export const SupportAgentTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SupportAgentTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupportAgentTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62',
      },
      '0',
    ),
    svg('circle', { cx: '9', cy: '13', r: '1' }, '1'),
    svg('circle', { cx: '15', cy: '13', r: '1' }, '2'),
    svg(
      'path',
      {
        d: 'M18 11.03C17.52 8.18 15.04 6 12.05 6c-3.03 0-6.29 2.51-6.03 6.45 2.47-1.01 4.33-3.21 4.86-5.89 1.31 2.63 4 4.44 7.12 4.47',
      },
      '3',
    ),
  ],
  'SupportAgentTwoTone',
);
export const SupportOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SupportOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupportOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m7.46 7.12-2.78 1.15c-.51-1.36-1.58-2.44-2.95-2.94l1.15-2.78c2.1.8 3.77 2.47 4.58 4.57M12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3M9.13 4.54l1.17 2.78c-1.38.5-2.47 1.59-2.98 2.97L4.54 9.13c.81-2.11 2.48-3.78 4.59-4.59M4.54 14.87l2.78-1.15c.51 1.38 1.59 2.46 2.97 2.96l-1.17 2.78c-2.1-.81-3.77-2.48-4.58-4.59m10.34 4.59-1.15-2.78c1.37-.51 2.45-1.59 2.95-2.97l2.78 1.17c-.81 2.1-2.48 3.77-4.58 4.58',
  }),
  'SupportOutlined',
);
export const SupportRoundedIcon = (props?: KTRawAttr) => {
  const s = _SupportRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupportRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m7.46 7.12-2.78 1.15c-.51-1.36-1.58-2.44-2.95-2.94l1.15-2.78c2.1.8 3.77 2.47 4.58 4.57M12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3M9.13 4.54l1.17 2.78c-1.38.5-2.47 1.59-2.98 2.97L4.54 9.13c.81-2.11 2.48-3.78 4.59-4.59M4.54 14.87l2.78-1.15c.51 1.38 1.59 2.46 2.97 2.96l-1.17 2.78c-2.1-.81-3.77-2.48-4.58-4.59m10.34 4.59-1.15-2.78c1.37-.51 2.45-1.59 2.95-2.97l2.78 1.17c-.81 2.1-2.48 3.77-4.58 4.58',
  }),
  'SupportRounded',
);
export const SupportSharpIcon = (props?: KTRawAttr) => {
  const s = _SupportSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupportSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m7.46 7.12-2.78 1.15c-.51-1.36-1.58-2.44-2.95-2.94l1.15-2.78c2.1.8 3.77 2.47 4.58 4.57M12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3M9.13 4.54l1.17 2.78c-1.38.5-2.47 1.59-2.98 2.97L4.54 9.13c.81-2.11 2.48-3.78 4.59-4.59M4.54 14.87l2.78-1.15c.51 1.38 1.59 2.46 2.97 2.96l-1.17 2.78c-2.1-.81-3.77-2.48-4.58-4.59m10.34 4.59-1.15-2.78c1.37-.51 2.45-1.59 2.95-2.97l2.78 1.17c-.81 2.1-2.48 3.77-4.58 4.58',
  }),
  'SupportSharp',
);
export const SupportTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SupportTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SupportTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M10.3 7.32 9.13 4.54c-2.11.81-3.78 2.48-4.59 4.59l2.78 1.15c.51-1.38 1.6-2.46 2.98-2.96m-2.98 6.4-2.78 1.15c.81 2.1 2.48 3.78 4.59 4.59l1.17-2.78c-1.39-.5-2.47-1.59-2.98-2.96m9.35-3.45 2.78-1.15c-.81-2.1-2.48-3.77-4.58-4.58l-1.15 2.78c1.37.51 2.45 1.58 2.95 2.95m.01 3.44c-.5 1.37-1.58 2.46-2.95 2.97l1.15 2.78c2.1-.81 3.77-2.48 4.58-4.58z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m2.87 2.54c2.1.81 3.77 2.48 4.58 4.58l-2.78 1.15c-.51-1.36-1.58-2.44-2.95-2.94zm-5.74 0 1.17 2.78c-1.38.5-2.47 1.59-2.98 2.97L4.54 9.13c.81-2.11 2.48-3.78 4.59-4.59m0 14.92c-2.1-.81-3.78-2.48-4.59-4.59l2.78-1.15c.51 1.38 1.59 2.46 2.97 2.96zM9 12c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3m5.88 7.46-1.15-2.78c1.37-.51 2.45-1.59 2.95-2.97l2.78 1.17c-.81 2.1-2.48 3.77-4.58 4.58',
      },
      '1',
    ),
  ],
  'SupportTwoTone',
);
export const SurfingIcon = (props?: KTRawAttr) => {
  const s = _SurfingIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SurfingIcon = svg(
  svg('path', {
    d: 'M21 23c-1.03 0-2.06-.25-3-.75-1.89 1-4.11 1-6 0-1.89 1-4.11 1-6 0-.95.5-1.97.75-3 .75H2v-2h1c1.04 0 2.08-.35 3-1 1.83 1.3 4.17 1.3 6 0 1.83 1.3 4.17 1.3 6 0 .91.65 1.96 1 3 1h1v2zM17 1.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-2.57 6.98L12.18 10 16 13v3.84c.53.38 1.03.78 1.49 1.17-.68.58-1.55.99-2.49.99-1.2 0-2.27-.66-3-1.5-.73.84-1.8 1.5-3 1.5-.33 0-.65-.05-.96-.14C5.19 16.9 3 14.72 3 13.28 3 12.25 4.01 12 4.85 12c.98 0 2.28.31 3.7.83l-.53-3.1c-.11-.67.18-1.38.78-1.79l2.15-1.45-2-.37-2.82 1.93L5 6.4 8.5 4l5.55 1.03c.45.09.93.37 1.22.89l.88 1.55C17.01 8.98 18.64 10 20.5 10v2c-2.59 0-4.86-1.42-6.07-3.52M10.3 11.1l.44 2.65c.92.42 2.48 1.27 3.26 1.75V14z',
  }),
  'Surfing',
);
export const SurfingOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SurfingOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SurfingOutlinedIcon = svg(
  svg('path', {
    d: 'M21 23c-1.03 0-2.06-.25-3-.75-1.89 1-4.11 1-6 0-1.89 1-4.11 1-6 0-.95.5-1.97.75-3 .75H2v-2h1c1.04 0 2.08-.35 3-1 1.83 1.3 4.17 1.3 6 0 1.83 1.3 4.17 1.3 6 0 .91.65 1.96 1 3 1h1v2zM17 1.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-2.57 6.98L12.18 10 16 13v3.84c.53.38 1.03.78 1.49 1.17-.68.58-1.55.99-2.49.99-1.2 0-2.27-.66-3-1.5-.73.84-1.8 1.5-3 1.5-.33 0-.65-.05-.96-.14C5.19 16.9 3 14.72 3 13.28 3 12.25 4.01 12 4.85 12c.98 0 2.28.31 3.7.83l-.53-3.1c-.11-.67.18-1.38.78-1.79l2.15-1.45-2-.37-2.82 1.93L5 6.4 8.5 4l5.55 1.03c.45.09.93.37 1.22.89l.88 1.55C17.01 8.98 18.64 10 20.5 10v2c-2.59 0-4.86-1.42-6.07-3.52M10.3 11.1l.44 2.65c.92.42 2.48 1.27 3.26 1.75V14z',
  }),
  'SurfingOutlined',
);
export const SurfingRoundedIcon = (props?: KTRawAttr) => {
  const s = _SurfingRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SurfingRoundedIcon = svg(
  svg('path', {
    d: 'M17 1.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M22 22c0 .55-.45 1-1 1-1.03 0-2.05-.25-3-.75-1.92 1.02-4.18 1-6.09-.05-1.79.87-3.92.98-5.58-.14C5.3 22.69 4.15 23 3 23c-.55 0-1-.45-1-1s.45-1 1-1c.87 0 1.73-.24 2.53-.7.29-.16.65-.17.94 0 1.59.9 3.48.9 5.06 0 .29-.16.65-.16.94 0 1.59.9 3.48.9 5.06 0 .29-.16.65-.16.94 0 .8.46 1.66.7 2.53.7.55 0 1 .45 1 1M8.04 18.86c.31.09.63.14.96.14.9 0 1.72-.37 2.39-.91.35-.28.87-.28 1.22 0 .67.54 1.49.91 2.39.91s1.72-.37 2.39-.91c.03-.03.07-.05.11-.07-.46-.39-.97-.79-1.5-1.17v-2.87c0-.61-.28-1.19-.77-1.57L12.17 10l2.25-1.52c1.03 1.79 2.82 3.08 4.93 3.43.6.1 1.14-.39 1.14-1 0-.49-.36-.9-.84-.98-1.5-.25-2.78-1.18-3.51-2.46l-.88-1.55c-.29-.52-.77-.8-1.22-.89l-4.73-.88c-.52-.1-1.06.02-1.5.32L5.82 5.83c-.45.32-.57.94-.26 1.39.32.46.94.58 1.4.27l1.99-1.37 2 .37L8.8 7.94c-.6.41-.89 1.12-.77 1.79l.52 3.1c-1.42-.52-2.72-.83-3.7-.83-.84 0-1.85.25-1.85 1.28 0 1.44 2.19 3.62 5.04 5.58M14 14v1.5c-.78-.48-2.34-1.33-3.26-1.75l-.44-2.65z',
  }),
  'SurfingRounded',
);
export const SurfingSharpIcon = (props?: KTRawAttr) => {
  const s = _SurfingSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SurfingSharpIcon = svg(
  svg('path', {
    d: 'M21 23c-1.03 0-2.06-.25-3-.75-1.89 1-4.11 1-6 0-1.89 1-4.11 1-6 0-.95.5-1.97.75-3 .75H2v-2h1c1.04 0 2.08-.35 3-1 1.83 1.3 4.17 1.3 6 0 1.83 1.3 4.17 1.3 6 0 .91.65 1.96 1 3 1h1v2zM17 1.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-2.57 6.98L12.18 10 16 13v3.84c.53.38 1.03.78 1.49 1.17-.68.58-1.55.99-2.49.99-1.2 0-2.27-.66-3-1.5-.73.84-1.8 1.5-3 1.5-.33 0-.65-.05-.96-.14C5.19 16.9 3 14.72 3 13.28 3 12.25 4.01 12 4.85 12c.98 0 2.28.31 3.7.83l-.72-4.24 3.12-2.1-2-.37-2.82 1.93L5 6.4 8.5 4l5.55 1.03c.45.09.93.37 1.22.89l.88 1.55C17.01 8.98 18.64 10 20.5 10v2c-2.59 0-4.86-1.42-6.07-3.52M10.3 11.1l.44 2.65c.92.42 2.48 1.27 3.26 1.75V14z',
  }),
  'SurfingSharp',
);
export const SurfingTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SurfingTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SurfingTwoToneIcon = svg(
  svg('path', {
    d: 'M21 23c-1.03 0-2.06-.25-3-.75-1.89 1-4.11 1-6 0-1.89 1-4.11 1-6 0-.95.5-1.97.75-3 .75H2v-2h1c1.04 0 2.08-.35 3-1 1.83 1.3 4.17 1.3 6 0 1.83 1.3 4.17 1.3 6 0 .91.65 1.96 1 3 1h1v2zM17 1.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-2.57 6.98L12.18 10 16 13v3.84c.53.38 1.03.78 1.49 1.17-.68.58-1.55.99-2.49.99-1.2 0-2.27-.66-3-1.5-.73.84-1.8 1.5-3 1.5-.33 0-.65-.05-.96-.14C5.19 16.9 3 14.72 3 13.28 3 12.25 4.01 12 4.85 12c.98 0 2.28.31 3.7.83l-.53-3.1c-.11-.67.18-1.38.78-1.79l2.15-1.45-2-.37-2.82 1.93L5 6.4 8.5 4l5.55 1.03c.45.09.93.37 1.22.89l.88 1.55C17.01 8.98 18.64 10 20.5 10v2c-2.59 0-4.86-1.42-6.07-3.52M10.3 11.1l.44 2.65c.92.42 2.48 1.27 3.26 1.75V14z',
  }),
  'SurfingTwoTone',
);
export const SurroundSoundIcon = (props?: KTRawAttr) => {
  const s = _SurroundSoundIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SurroundSoundIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M7.76 16.24l-1.41 1.41C4.78 16.1 4 14.05 4 12s.78-4.1 2.34-5.66l1.41 1.41C6.59 8.93 6 10.46 6 12s.59 3.07 1.76 4.24M12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4m5.66 1.66-1.41-1.41C17.41 15.07 18 13.54 18 12s-.59-3.07-1.76-4.24l1.41-1.41C19.22 7.9 20 9.95 20 12s-.78 4.1-2.34 5.66M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2',
  }),
  'SurroundSound',
);
export const SurroundSoundOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SurroundSoundOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SurroundSoundOutlinedIcon = svg(
  [
    svg('path', { d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z' }, '0'),
    svg(
      'path',
      {
        d: 'M8.29 15.71C7.27 14.69 6.75 13.35 6.75 12s.52-2.69 1.53-3.72L7.05 7.05C5.68 8.41 5 10.21 5 12s.68 3.59 2.06 4.94zM12 15.5c1.93 0 3.5-1.57 3.5-3.5S13.93 8.5 12 8.5 8.5 10.07 8.5 12s1.57 3.5 3.5 3.5m0-5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m3.72 5.22 1.23 1.23C18.32 15.59 19 13.79 19 12s-.68-3.59-2.06-4.94l-1.23 1.23c1.02 1.02 1.54 2.36 1.54 3.71s-.52 2.69-1.53 3.72',
      },
      '1',
    ),
  ],
  'SurroundSoundOutlined',
);
export const SurroundSoundRoundedIcon = (props?: KTRawAttr) => {
  const s = _SurroundSoundRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SurroundSoundRoundedIcon = svg(
  svg('path', {
    d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M7.11 16.89c-.43.43-1.14.39-1.51-.09C4.53 15.39 4 13.69 4 12s.53-3.38 1.59-4.8c.37-.48 1.08-.53 1.51-.1.35.35.39.9.1 1.29C6.4 9.46 6 10.73 6 12s.4 2.53 1.2 3.6c.3.39.26.94-.09 1.29M12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4m4.9.9c-.35-.35-.39-.9-.09-1.29C17.6 14.54 18 13.27 18 12s-.4-2.53-1.2-3.6c-.3-.39-.26-.95.09-1.3.43-.43 1.14-.39 1.51.09 1.07 1.41 1.6 3.1 1.6 4.8 0 1.69-.53 3.38-1.59 4.8-.37.49-1.08.54-1.51.11M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2',
  }),
  'SurroundSoundRounded',
);
export const SurroundSoundSharpIcon = (props?: KTRawAttr) => {
  const s = _SurroundSoundSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SurroundSoundSharpIcon = svg(
  svg('path', {
    d: 'M22 4H2v16h20zM7.76 16.24l-1.41 1.41C4.78 16.1 4 14.05 4 12s.78-4.1 2.34-5.66l1.41 1.41C6.59 8.93 6 10.46 6 12s.59 3.07 1.76 4.24M12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4m5.66 1.66-1.41-1.41C17.41 15.07 18 13.54 18 12s-.59-3.07-1.76-4.24l1.41-1.41C19.22 7.9 20 9.95 20 12s-.78 4.1-2.34 5.66M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2',
  }),
  'SurroundSoundSharp',
);
export const SurroundSoundTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SurroundSoundTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SurroundSoundTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M4 18h16V6H4zM16.94 7.06C18.32 8.41 19 10.21 19 12s-.68 3.59-2.05 4.95l-1.23-1.23c1.02-1.03 1.53-2.37 1.53-3.72s-.52-2.69-1.54-3.71zM12 8.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5M7.05 7.05l1.23 1.23C7.27 9.31 6.75 10.65 6.75 12s.52 2.69 1.54 3.71l-1.23 1.23C5.68 15.59 5 13.79 5 12s.68-3.59 2.05-4.95',
        opacity: '.3',
      },
      '0',
    ),
    svg('path', { d: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h16z' }, '1'),
    svg(
      'path',
      {
        d: 'M8.29 15.71C7.27 14.69 6.75 13.35 6.75 12s.52-2.69 1.53-3.72L7.05 7.05C5.68 8.41 5 10.21 5 12s.68 3.59 2.06 4.94zM12 15.5c1.93 0 3.5-1.57 3.5-3.5S13.93 8.5 12 8.5 8.5 10.07 8.5 12s1.57 3.5 3.5 3.5m0-5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5m3.72 5.22 1.23 1.23C18.32 15.59 19 13.79 19 12s-.68-3.59-2.06-4.94l-1.23 1.23c1.02 1.02 1.54 2.36 1.54 3.71s-.52 2.69-1.53 3.72',
      },
      '2',
    ),
  ],
  'SurroundSoundTwoTone',
);
export const SwapCallsIcon = (props?: KTRawAttr) => {
  const s = _SwapCallsIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapCallsIcon = svg(
  svg('path', {
    d: 'm18 4-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3z',
  }),
  'SwapCalls',
);
export const SwapCallsOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwapCallsOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapCallsOutlinedIcon = svg(
  svg('path', {
    d: 'm18 4-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3z',
  }),
  'SwapCallsOutlined',
);
export const SwapCallsRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwapCallsRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapCallsRoundedIcon = svg(
  svg('path', {
    d: 'm17.65 4.35-2.79 2.79c-.32.32-.1.86.35.86H17v6.88c0 1-.67 1.93-1.66 2.09-1.25.21-2.34-.76-2.34-1.97V8.17c0-2.09-1.53-3.95-3.61-4.15C7.01 3.79 5 5.66 5 8v7H3.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79c.31-.31.09-.85-.36-.85H7V8.12c0-1 .67-1.93 1.66-2.09C9.91 5.82 11 6.79 11 8v6.83c0 2.09 1.53 3.95 3.61 4.15C16.99 19.21 19 17.34 19 15V8h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.19-.2-.51-.2-.7-.01',
  }),
  'SwapCallsRounded',
);
export const SwapCallsSharpIcon = (props?: KTRawAttr) => {
  const s = _SwapCallsSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapCallsSharpIcon = svg(
  svg('path', {
    d: 'm18 4-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3z',
  }),
  'SwapCallsSharp',
);
export const SwapCallsTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwapCallsTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapCallsTwoToneIcon = svg(
  svg('path', {
    d: 'M14 8h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z',
  }),
  'SwapCallsTwoTone',
);
export const SwapHorizIcon = (props?: KTRawAttr) => {
  const s = _SwapHorizIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapHorizIcon = svg(
  svg('path', { d: 'M6.99 11 3 15l3.99 4v-3H14v-2H6.99zM21 9l-3.99-4v3H10v2h7.01v3z' }),
  'SwapHoriz',
);
export const SwapHorizOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwapHorizOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapHorizOutlinedIcon = svg(
  svg('path', { d: 'M6.99 11 3 15l3.99 4v-3H14v-2H6.99zM21 9l-3.99-4v3H10v2h7.01v3z' }),
  'SwapHorizOutlined',
);
export const SwapHorizRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwapHorizRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapHorizRoundedIcon = svg(
  svg('path', {
    d: 'm6.14 11.86-2.78 2.79c-.19.2-.19.51 0 .71l2.78 2.79c.31.32.85.09.85-.35V16H13c.55 0 1-.45 1-1s-.45-1-1-1H6.99v-1.79c0-.45-.54-.67-.85-.35m14.51-3.21-2.78-2.79c-.31-.32-.85-.09-.85.35V8H11c-.55 0-1 .45-1 1s.45 1 1 1h6.01v1.79c0 .45.54.67.85.35l2.78-2.79c.2-.19.2-.51.01-.7',
  }),
  'SwapHorizRounded',
);
export const SwapHorizSharpIcon = (props?: KTRawAttr) => {
  const s = _SwapHorizSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapHorizSharpIcon = svg(
  svg('path', { d: 'M6.99 11 3 15l3.99 4v-3H14v-2H6.99zM21 9l-3.99-4v3H10v2h7.01v3z' }),
  'SwapHorizSharp',
);
export const SwapHorizTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwapHorizTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapHorizTwoToneIcon = svg(
  svg('path', { d: 'M6.99 11 3 15l3.99 4v-3H14v-2H6.99zM21 9l-3.99-4v3H10v2h7.01v3z' }),
  'SwapHorizTwoTone',
);
export const SwapHorizontalCircleIcon = (props?: KTRawAttr) => {
  const s = _SwapHorizontalCircleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapHorizontalCircleIcon = svg(
  svg('path', {
    d: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10m-7-5.5 3.5 3.5-3.5 3.5V11h-4V9h4zm-6 11L5.5 14 9 10.5V13h4v2H9z',
  }),
  'SwapHorizontalCircle',
);
export const SwapHorizontalCircleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwapHorizontalCircleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapHorizontalCircleOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3-13.5V9h-4v2h4v2.5l3.5-3.5zm-6 4L5.5 14 9 17.5V15h4v-2H9z',
  }),
  'SwapHorizontalCircleOutlined',
);
export const SwapHorizontalCircleRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwapHorizontalCircleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapHorizontalCircleRoundedIcon = svg(
  svg('path', {
    d: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10m-7-5.5 3.15 3.15c.2.2.2.51 0 .71L15 13.5V11h-4V9h4zm-6 11-3.15-3.15c-.2-.2-.2-.51 0-.71L9 10.5V13h4v2H9z',
  }),
  'SwapHorizontalCircleRounded',
);
export const SwapHorizontalCircleSharpIcon = (props?: KTRawAttr) => {
  const s = _SwapHorizontalCircleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapHorizontalCircleSharpIcon = svg(
  svg('path', {
    d: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10m-7-5.5 3.5 3.5-3.5 3.5V11h-4V9h4zm-6 11L5.5 14 9 10.5V13h4v2H9z',
  }),
  'SwapHorizontalCircleSharp',
);
export const SwapHorizontalCircleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwapHorizontalCircleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapHorizontalCircleTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m1 11H9v2.5L5.5 14 9 10.5V13h4zm2-1.5V11h-4V9h4V6.5l3.5 3.5z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3-13.5V9h-4v2h4v2.5l3.5-3.5zm-6 4L5.5 14 9 17.5V15h4v-2H9z',
      },
      '1',
    ),
  ],
  'SwapHorizontalCircleTwoTone',
);
export const SwapVertIcon = (props?: KTRawAttr) => {
  const s = _SwapVertIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapVertIcon = svg(
  svg('path', { d: 'M16 17.01V10h-2v7.01h-3L15 21l4-3.99zM9 3 5 6.99h3V14h2V6.99h3z' }),
  'SwapVert',
);
export const SwapVertOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwapVertOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapVertOutlinedIcon = svg(
  svg('path', {
    d: 'M16 17.01V10h-2v7.01h-3L15 21l4-3.99zM9 3 5 6.99h3V14h2V6.99h3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99zM9 3 5 6.99h3V14h2V6.99h3z',
  }),
  'SwapVertOutlined',
);
export const SwapVertRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwapVertRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapVertRoundedIcon = svg(
  svg('path', {
    d: 'M16 17.01V11c0-.55-.45-1-1-1s-1 .45-1 1v6.01h-1.79c-.45 0-.67.54-.35.85l2.79 2.78c.2.19.51.19.71 0l2.79-2.78c.32-.31.09-.85-.35-.85zM8.65 3.35 5.86 6.14c-.32.31-.1.85.35.85H8V13c0 .55.45 1 1 1s1-.45 1-1V6.99h1.79c.45 0 .67-.54.35-.85L9.35 3.35c-.19-.19-.51-.19-.7 0',
  }),
  'SwapVertRounded',
);
export const SwapVertSharpIcon = (props?: KTRawAttr) => {
  const s = _SwapVertSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapVertSharpIcon = svg(
  svg('path', { d: 'M16 17.01V10h-2v7.01h-3L15 21l4-3.99zM9 3 5 6.99h3V14h2V6.99h3z' }),
  'SwapVertSharp',
);
export const SwapVertTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwapVertTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapVertTwoToneIcon = svg(
  svg('path', { d: 'M16 17.01V10h-2v7.01h-3L15 21l4-3.99zM9 3 5 6.99h3V14h2V6.99h3z' }),
  'SwapVertTwoTone',
);
export const SwapVerticalCircleIcon = (props?: KTRawAttr) => {
  const s = _SwapVerticalCircleIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapVerticalCircleIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M6.5 9 10 5.5 13.5 9H11v4H9V9zm11 6L14 18.5 10.5 15H13v-4h2v4z',
  }),
  'SwapVerticalCircle',
);
export const SwapVerticalCircleOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwapVerticalCircleOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapVerticalCircleOutlinedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8M6.5 9 10 5.5 13.5 9H11v4H9V9zm11 6L14 18.5 10.5 15H13v-4h2v4z',
  }),
  'SwapVerticalCircleOutlined',
);
export const SwapVerticalCircleRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwapVerticalCircleRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapVerticalCircleRoundedIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M6.5 9l3.15-3.15c.2-.2.51-.2.71 0L13.5 9H11v4H9V9zm7.85 9.15c-.2.2-.51.2-.71 0L10.5 15H13v-4h2v4h2.5z',
  }),
  'SwapVerticalCircleRounded',
);
export const SwapVerticalCircleSharpIcon = (props?: KTRawAttr) => {
  const s = _SwapVerticalCircleSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapVerticalCircleSharpIcon = svg(
  svg('path', {
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M6.5 9 10 5.5 13.5 9H11v4H9V9zm7.5 9.5L10.5 15H13v-4h2v4h2.5z',
  }),
  'SwapVerticalCircleSharp',
);
export const SwapVerticalCircleTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwapVerticalCircleTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwapVerticalCircleTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8M6.5 9 10 5.5 13.5 9H11v4H9V9zm7.5 9.5L10.5 15H13v-4h2v4h2.5z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-1-7V9h2.5L10 5.5 6.5 9H9v4zm4-2h-2v4h-2.5l3.5 3.5 3.5-3.5H15z',
      },
      '1',
    ),
  ],
  'SwapVerticalCircleTwoTone',
);
export const SwipeIcon = (props?: KTRawAttr) => {
  const s = _SwipeIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm18.89 14.75-4.09-2.04c-.28-.14-.58-.21-.89-.21H13v-6c0-.83-.67-1.5-1.5-1.5S10 5.67 10 6.5v10.74l-3.25-.74c-.33-.07-.68.03-.92.28l-.83.84 4.54 4.79c.38.38 1.14.59 1.67.59h6.16c1 0 1.84-.73 1.98-1.72l.63-4.46c.12-.85-.32-1.68-1.09-2.07',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20.13 3.87C18.69 2.17 15.6 1 12 1S5.31 2.17 3.87 3.87L2 2v5h5L4.93 4.93c1-1.29 3.7-2.43 7.07-2.43s6.07 1.14 7.07 2.43L17 7h5V2z',
      },
      '1',
    ),
  ],
  'Swipe',
);
export const SwipeDownIcon = (props?: KTRawAttr) => {
  const s = _SwipeDownIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeDownIcon = svg(
  svg('path', {
    d: 'M3.8 12.18c-.2-.86-.3-1.76-.3-2.68 0-2.84.99-5.45 2.63-7.5L7.2 3.07C5.82 4.85 5 7.08 5 9.5c0 .88.11 1.74.32 2.56l1.62-1.62L8 11.5 4.5 15 1 11.5l1.06-1.06zm10.05-.56-2.68-5.37c-.37-.74-1.27-1.04-2.01-.67-.75.38-1.05 1.28-.68 2.02l4.81 9.6-3.24.8c-.33.09-.59.33-.7.66L9 19.78l6.19 2.25c.5.17 1.28.02 1.75-.22l5.51-2.75c.89-.45 1.32-1.48 1-2.42l-1.43-4.27c-.27-.82-1.04-1.37-1.9-1.37h-4.56c-.31 0-.62.07-.89.21z',
  }),
  'SwipeDown',
);
export const SwipeDownAltIcon = (props?: KTRawAttr) => {
  const s = _SwipeDownAltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeDownAltIcon = svg(
  svg('path', {
    d: 'M13 13.9c2.28-.46 4-2.48 4-4.9 0-2.76-2.24-5-5-5S7 6.24 7 9c0 2.42 1.72 4.44 4 4.9v4.27l-1.59-1.59L8 18l4 4 4-4-1.41-1.41L13 18.17z',
  }),
  'SwipeDownAlt',
);
export const SwipeDownAltOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwipeDownAltOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeDownAltOutlinedIcon = svg(
  svg('path', {
    d: 'M13 13.9c2.28-.46 4-2.48 4-4.9 0-2.76-2.24-5-5-5S7 6.24 7 9c0 2.42 1.72 4.44 4 4.9v4.27l-1.59-1.59L8 18l4 4 4-4-1.41-1.41L13 18.17zM15 9c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3',
  }),
  'SwipeDownAltOutlined',
);
export const SwipeDownAltRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwipeDownAltRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeDownAltRoundedIcon = svg(
  svg('path', {
    d: 'M13 13.9c2.28-.46 4-2.48 4-4.9 0-2.76-2.24-5-5-5S7 6.24 7 9c0 2.42 1.72 4.44 4 4.9v4.27l-.88-.88a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0l-.89.88z',
  }),
  'SwipeDownAltRounded',
);
export const SwipeDownAltSharpIcon = (props?: KTRawAttr) => {
  const s = _SwipeDownAltSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeDownAltSharpIcon = svg(
  svg('path', {
    d: 'M13 13.9c2.28-.46 4-2.48 4-4.9 0-2.76-2.24-5-5-5S7 6.24 7 9c0 2.42 1.72 4.44 4 4.9v4.27l-1.59-1.59L8 18l4 4 4-4-1.41-1.41L13 18.17z',
  }),
  'SwipeDownAltSharp',
);
export const SwipeDownAltTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwipeDownAltTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeDownAltTwoToneIcon = svg(
  [
    svg('circle', { cx: '12', cy: '9', r: '3', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M13 13.9c2.28-.46 4-2.48 4-4.9 0-2.76-2.24-5-5-5S7 6.24 7 9c0 2.42 1.72 4.44 4 4.9v4.27l-1.59-1.59L8 18l4 4 4-4-1.41-1.41L13 18.17zM15 9c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3',
      },
      '1',
    ),
  ],
  'SwipeDownAltTwoTone',
);
export const SwipeDownOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwipeDownOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeDownOutlinedIcon = svg(
  svg('path', {
    d: 'm20.22 10-4.15.01c-.16-.01-.31.02-.45.08l-.59.26-1.83-4.1c-.56-1.26-2.04-1.83-3.3-1.27s-1.83 2.04-1.27 3.3l3.3 7.45-1.87.39c-.19.05-.99.27-1.36 1.21L8 19.19l6.78 2.67c.49.19 1.05.18 1.53-.04l5.99-2.65c.89-.4 1.37-1.38 1.13-2.32l-1.36-5.34c-.22-.86-.97-1.47-1.85-1.51m1.27 7.34L15.5 20l-4.92-1.96 4.18-.88-4.3-9.7c-.11-.25 0-.55.25-.66s.55 0 .66.25l2.5 5.65 1.61-.71 4.65.01zM3.8 12.18c-.2-.86-.3-1.76-.3-2.68 0-2.84.99-5.45 2.63-7.5L7.2 3.07C5.82 4.85 5 7.08 5 9.5c0 .88.11 1.74.32 2.56l1.62-1.62L8 11.5 4.5 15 1 11.5l1.06-1.06z',
  }),
  'SwipeDownOutlined',
);
export const SwipeDownRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwipeDownRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeDownRoundedIcon = svg(
  svg('path', {
    d: 'M8.83 19.1c-.26-.6.09-1.28.73-1.41l3.58-.71-4.35-9.81c-.34-.76 0-1.64.76-1.98s1.64 0 1.98.76l2.43 5.49.84-.37c.28-.13.59-.18.9-.17l4.56.21c.86.04 1.6.63 1.83 1.45l1.23 4.33c.27.96-.2 1.97-1.11 2.37l-5.63 2.49c-.48.21-1.26.33-1.76.14l-5.45-2.27c-.24-.09-.44-.28-.54-.52M5.59 2.73C4.27 4.65 3.5 6.99 3.5 9.5c0 .92.1 1.82.3 2.68l-1.19-1.19c-.29-.29-.77-.32-1.07-.04-.31.29-.31.78-.02 1.08l2.26 2.26c.39.39 1.02.39 1.41 0l2.24-2.24c.29-.29.32-.77.04-1.07-.29-.31-.78-.31-1.08-.02L5.3 12.05c-.19-.81-.3-1.67-.3-2.55 0-2.2.68-4.24 1.83-5.93.2-.3.17-.7-.09-.95-.33-.34-.88-.28-1.15.11',
  }),
  'SwipeDownRounded',
);
export const SwipeDownSharpIcon = (props?: KTRawAttr) => {
  const s = _SwipeDownSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeDownSharpIcon = svg(
  svg('path', {
    d: 'M3.8 12.18c-.2-.86-.3-1.76-.3-2.68 0-2.84.99-5.45 2.63-7.5L7.2 3.07C5.82 4.85 5 7.08 5 9.5c0 .88.11 1.74.32 2.56l1.62-1.62L8 11.5 4.5 15 1 11.5l1.06-1.06zm17.91-1 2.09 7.39-8.23 3.65-6.84-2.85.61-1.62 3.8-.75-4.35-9.83c-.34-.76 0-1.64.76-1.98s1.64 0 1.98.76l2.43 5.49 1.26-.56z',
  }),
  'SwipeDownSharp',
);
export const SwipeDownTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwipeDownTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeDownTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21.49 17.34 15.5 20l-4.92-1.96 4.18-.88-4.3-9.7c-.11-.25 0-.55.25-.66s.55 0 .66.25l2.5 5.65 1.61-.71 4.65.01z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm20.22 10-4.15.01c-.16-.01-.31.02-.45.08l-.59.26-1.83-4.1c-.56-1.26-2.04-1.83-3.3-1.27s-1.83 2.04-1.27 3.3l3.3 7.45-1.87.39c-.19.05-.99.27-1.36 1.21L8 19.19l6.78 2.67c.49.19 1.05.18 1.53-.04l5.99-2.65c.89-.4 1.37-1.38 1.13-2.32l-1.36-5.34c-.22-.86-.97-1.47-1.85-1.51m1.27 7.34L15.5 20l-4.92-1.96 4.18-.88-4.3-9.7c-.11-.25 0-.55.25-.66s.55 0 .66.25l2.5 5.65 1.61-.71 4.65.01zM3.8 12.18c-.2-.86-.3-1.76-.3-2.68 0-2.84.99-5.45 2.63-7.5L7.2 3.07C5.82 4.85 5 7.08 5 9.5c0 .88.11 1.74.32 2.56l1.62-1.62L8 11.5 4.5 15 1 11.5l1.06-1.06z',
      },
      '1',
    ),
  ],
  'SwipeDownTwoTone',
);
export const SwipeLeftIcon = (props?: KTRawAttr) => {
  const s = _SwipeLeftIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeLeftIcon = svg(
  svg('path', {
    d: 'm19.98 16.82-.63 4.46c-.14.99-.99 1.72-1.98 1.72h-6.16c-.53 0-1.29-.21-1.66-.59L5 17.62l.83-.84c.24-.24.58-.35.92-.28l3.25.74V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h.91c.31 0 .62.07.89.21l4.09 2.04c.77.39 1.21 1.22 1.09 2.07M12 2.5c4.74 0 7.67 2.52 8.43 4.5H22c-.73-2.88-4.51-6-10-6-3.22 0-6.18 1.13-8.5 3.02V2H2v5h5V5.5H4.09c2.12-1.86 4.88-3 7.91-3',
  }),
  'SwipeLeft',
);
export const SwipeLeftAltIcon = (props?: KTRawAttr) => {
  const s = _SwipeLeftAltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeLeftAltIcon = svg(
  svg('path', {
    d: 'M10.1 13c.46 2.28 2.48 4 4.9 4 2.76 0 5-2.24 5-5s-2.24-5-5-5c-2.42 0-4.44 1.72-4.9 4H5.83l1.59-1.59L6 8l-4 4 4 4 1.41-1.41L5.83 13z',
  }),
  'SwipeLeftAlt',
);
export const SwipeLeftAltOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwipeLeftAltOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeLeftAltOutlinedIcon = svg(
  svg('path', {
    d: 'M10.1 13c.46 2.28 2.48 4 4.9 4 2.76 0 5-2.24 5-5s-2.24-5-5-5c-2.42 0-4.44 1.72-4.9 4H5.83l1.59-1.59L6 8l-4 4 4 4 1.41-1.41L5.83 13zm4.9 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3',
  }),
  'SwipeLeftAltOutlined',
);
export const SwipeLeftAltRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwipeLeftAltRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeLeftAltRoundedIcon = svg(
  svg('path', {
    d: 'M10.1 13c.46 2.28 2.48 4 4.9 4 2.76 0 5-2.24 5-5s-2.24-5-5-5c-2.42 0-4.44 1.72-4.9 4H5.83l.88-.88c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0L2.71 11.3c-.39.39-.39 1.02 0 1.41L5.3 15.3c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L5.83 13z',
  }),
  'SwipeLeftAltRounded',
);
export const SwipeLeftAltSharpIcon = (props?: KTRawAttr) => {
  const s = _SwipeLeftAltSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeLeftAltSharpIcon = svg(
  svg('path', {
    d: 'M10.1 13c.46 2.28 2.48 4 4.9 4 2.76 0 5-2.24 5-5s-2.24-5-5-5c-2.42 0-4.44 1.72-4.9 4H5.83l1.59-1.59L6 8l-4 4 4 4 1.41-1.41L5.83 13z',
  }),
  'SwipeLeftAltSharp',
);
export const SwipeLeftAltTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwipeLeftAltTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeLeftAltTwoToneIcon = svg(
  [
    svg('circle', { cx: '15', cy: '12', r: '3', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M10.1 13c.46 2.28 2.48 4 4.9 4 2.76 0 5-2.24 5-5s-2.24-5-5-5c-2.42 0-4.44 1.72-4.9 4H5.83l1.59-1.59L6 8l-4 4 4 4 1.41-1.41L5.83 13zm4.9 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3',
      },
      '1',
    ),
  ],
  'SwipeLeftAltTwoTone',
);
export const SwipeLeftOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwipeLeftOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeLeftOutlinedIcon = svg(
  svg('path', {
    d: 'm18.89 13.77-3.8-1.67c-.13-.06-.28-.1-.44-.1H14V7.5C14 6.12 12.88 5 11.5 5S9 6.12 9 7.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L4 17.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44c.15-.86-.29-1.72-1.08-2.12M17.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 15.56zM4.09 5.5H7V7H2V2h1.5v2.02C5.82 2.13 8.78 1 12 1c5.49 0 9.27 3.12 10 6h-1.57c-.76-1.98-3.69-4.5-8.43-4.5-3.03 0-5.79 1.14-7.91 3',
  }),
  'SwipeLeftOutlined',
);
export const SwipeLeftRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwipeLeftRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeLeftRoundedIcon = svg(
  svg('path', {
    d: 'M3.5 4.02V2.75c0-.41-.34-.75-.75-.75S2 2.34 2 2.75V6c0 .55.45 1 1 1h3.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H4.09c2.11-1.86 4.88-3 7.91-3 4.42 0 7.27 2.19 8.25 4.1.12.25.38.4.66.4.56 0 .93-.59.67-1.08C20.3 3.39 16.81 1 12 1 8.78 1 5.82 2.13 3.5 4.02m1.7 13.41c0-.65.6-1.13 1.24-.99l3.56.8V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h.91c.31 0 .62.07.89.21l4.09 2.04c.77.38 1.21 1.22 1.09 2.07l-.63 4.46c-.14.99-.99 1.72-1.98 1.72h-6.16c-.53 0-1.29-.21-1.66-.59l-4.07-4.29c-.18-.18-.28-.43-.28-.69',
  }),
  'SwipeLeftRounded',
);
export const SwipeLeftSharpIcon = (props?: KTRawAttr) => {
  const s = _SwipeLeftSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeLeftSharpIcon = svg(
  svg('path', {
    d: 'M20.18 15.4 19.1 23h-9L5 17.62l1.22-1.23 3.78.85V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h1.38zM12 2.5c4.74 0 7.67 2.52 8.43 4.5H22c-.73-2.88-4.51-6-10-6-3.22 0-6.18 1.13-8.5 3.02V2H2v5h5V5.5H4.09c2.12-1.86 4.88-3 7.91-3',
  }),
  'SwipeLeftSharp',
);
export const SwipeLeftTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwipeLeftTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeLeftTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M17.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 15.56z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm18.89 13.77-3.8-1.67c-.13-.06-.28-.1-.44-.1H14V7.5C14 6.12 12.88 5 11.5 5S9 6.12 9 7.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L4 17.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44c.15-.86-.29-1.72-1.08-2.12M17.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 15.56zM4.09 5.5H7V7H2V2h1.5v2.02C5.82 2.13 8.78 1 12 1c5.49 0 9.27 3.12 10 6h-1.57c-.76-1.98-3.69-4.5-8.43-4.5-3.03 0-5.79 1.14-7.91 3',
      },
      '1',
    ),
  ],
  'SwipeLeftTwoTone',
);
export const SwipeOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwipeOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20.5 2v2.02C18.18 2.13 15.22 1 12 1S5.82 2.13 3.5 4.02V2H2v5h5V5.5H4.09c2.11-1.86 4.88-3 7.91-3s5.79 1.14 7.91 3H17V7h5V2z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm18.89 13.77-3.8-1.67c-.13-.06-.28-.1-.44-.1H14V7.63c0-1.32-.96-2.5-2.27-2.62C10.25 4.88 9 6.05 9 7.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L4 17.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44c.15-.86-.29-1.72-1.08-2.12M18 15.56 17.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76z',
      },
      '1',
    ),
  ],
  'SwipeOutlined',
);
export const SwipeRightIcon = (props?: KTRawAttr) => {
  const s = _SwipeRightIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeRightIcon = svg(
  svg('path', {
    d: 'm19.98 16.82-.63 4.46c-.14.99-.99 1.72-1.98 1.72h-6.16c-.53 0-1.29-.21-1.66-.59L5 17.62l.83-.84c.24-.24.58-.35.92-.28l3.25.74V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h.91c.31 0 .62.07.89.21l4.09 2.04c.77.39 1.21 1.22 1.09 2.07M19.91 5.5H17V7h5V2h-1.5v2.02C18.18 2.13 15.22 1 12 1 6.51 1 2.73 4.12 2 7h1.57C4.33 5.02 7.26 2.5 12 2.5c3.03 0 5.79 1.14 7.91 3',
  }),
  'SwipeRight',
);
export const SwipeRightAltIcon = (props?: KTRawAttr) => {
  const s = _SwipeRightAltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeRightAltIcon = svg(
  svg('path', {
    d: 'M13.9 11c-.46-2.28-2.48-4-4.9-4-2.76 0-5 2.24-5 5s2.24 5 5 5c2.42 0 4.44-1.72 4.9-4h4.27l-1.59 1.59L18 16l4-4-4-4-1.41 1.41L18.17 11z',
  }),
  'SwipeRightAlt',
);
export const SwipeRightAltOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwipeRightAltOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeRightAltOutlinedIcon = svg(
  svg('path', {
    d: 'M13.9 11c-.46-2.28-2.48-4-4.9-4-2.76 0-5 2.24-5 5s2.24 5 5 5c2.42 0 4.44-1.72 4.9-4h4.27l-1.59 1.59L18 16l4-4-4-4-1.41 1.41L18.17 11zM9 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3',
  }),
  'SwipeRightAltOutlined',
);
export const SwipeRightAltRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwipeRightAltRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeRightAltRoundedIcon = svg(
  svg('path', {
    d: 'M13.9 11c-.46-2.28-2.48-4-4.9-4-2.76 0-5 2.24-5 5s2.24 5 5 5c2.42 0 4.44-1.72 4.9-4h4.27l-.88.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l2.59-2.59c.39-.39.39-1.02 0-1.41L18.7 8.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l.88.89z',
  }),
  'SwipeRightAltRounded',
);
export const SwipeRightAltSharpIcon = (props?: KTRawAttr) => {
  const s = _SwipeRightAltSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeRightAltSharpIcon = svg(
  svg('path', {
    d: 'M13.9 11c-.46-2.28-2.48-4-4.9-4-2.76 0-5 2.24-5 5s2.24 5 5 5c2.42 0 4.44-1.72 4.9-4h4.27l-1.59 1.59L18 16l4-4-4-4-1.41 1.41L18.17 11z',
  }),
  'SwipeRightAltSharp',
);
export const SwipeRightAltTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwipeRightAltTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeRightAltTwoToneIcon = svg(
  [
    svg('circle', { cx: '9', cy: '12', r: '3', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M13.9 11c-.46-2.28-2.48-4-4.9-4-2.76 0-5 2.24-5 5s2.24 5 5 5c2.42 0 4.44-1.72 4.9-4h4.27l-1.59 1.59L18 16l4-4-4-4-1.41 1.41L18.17 11zM9 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3',
      },
      '1',
    ),
  ],
  'SwipeRightAltTwoTone',
);
export const SwipeRightOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwipeRightOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeRightOutlinedIcon = svg(
  svg('path', {
    d: 'm18.89 13.77-3.8-1.67c-.13-.06-.28-.1-.44-.1H14V7.5C14 6.12 12.88 5 11.5 5S9 6.12 9 7.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L4 17.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44c.15-.86-.29-1.72-1.08-2.12M17.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 15.56zM12 2.5C7.26 2.5 4.33 5.02 3.57 7H2c.73-2.88 4.51-6 10-6 3.22 0 6.18 1.13 8.5 3.02V2H22v5h-5V5.5h2.91c-2.12-1.86-4.88-3-7.91-3',
  }),
  'SwipeRightOutlined',
);
export const SwipeRightRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwipeRightRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeRightRoundedIcon = svg(
  svg('path', {
    d: 'M12 1C7.19 1 3.7 3.39 2.41 5.92c-.25.49.12 1.08.68 1.08.28 0 .54-.15.66-.4.98-1.91 3.83-4.1 8.25-4.1 3.03 0 5.79 1.14 7.91 3h-2.16c-.41 0-.75.34-.75.75s.34.75.75.75H21c.55 0 1-.45 1-1V2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.27C18.18 2.13 15.22 1 12 1M5.2 17.43c0-.65.6-1.13 1.24-.99l3.56.8V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h.91c.31 0 .62.07.89.21l4.09 2.04c.77.38 1.21 1.22 1.09 2.07l-.63 4.46c-.14.99-.99 1.72-1.98 1.72h-6.16c-.53 0-1.29-.21-1.66-.59l-4.07-4.29c-.18-.18-.28-.43-.28-.69',
  }),
  'SwipeRightRounded',
);
export const SwipeRightSharpIcon = (props?: KTRawAttr) => {
  const s = _SwipeRightSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeRightSharpIcon = svg(
  svg('path', {
    d: 'M20.18 15.4 19.1 23h-9L5 17.62l1.22-1.23 3.78.85V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h1.38zm-.27-9.9H17V7h5V2h-1.5v2.02C18.18 2.13 15.22 1 12 1 6.51 1 2.73 4.12 2 7h1.57C4.33 5.02 7.26 2.5 12 2.5c3.03 0 5.79 1.14 7.91 3',
  }),
  'SwipeRightSharp',
);
export const SwipeRightTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwipeRightTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeRightTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M17.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 15.56z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm18.89 13.77-3.8-1.67c-.13-.06-.28-.1-.44-.1H14V7.5C14 6.12 12.88 5 11.5 5S9 6.12 9 7.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L4 17.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44c.15-.86-.29-1.72-1.08-2.12M17.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 15.56zM12 2.5C7.26 2.5 4.33 5.02 3.57 7H2c.73-2.88 4.51-6 10-6 3.22 0 6.18 1.13 8.5 3.02V2H22v5h-5V5.5h2.91c-2.12-1.86-4.88-3-7.91-3',
      },
      '1',
    ),
  ],
  'SwipeRightTwoTone',
);
export const SwipeRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwipeRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeRoundedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'm21.15 2.85-1.02 1.02C18.69 2.17 15.6 1 12 1S5.31 2.17 3.87 3.87L2.85 2.85c-.31-.31-.85-.09-.85.36V6.5c0 .28.22.5.5.5h3.29c.45 0 .67-.54.35-.85L4.93 4.93c1-1.29 3.7-2.43 7.07-2.43s6.07 1.14 7.07 2.43l-1.22 1.22c-.31.31-.09.85.36.85h3.29c.28 0 .5-.22.5-.5V3.21c0-.45-.54-.67-.85-.36',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M14.5 12.71c-.28-.14-.58-.21-.89-.21H13v-6c0-.83-.67-1.5-1.5-1.5S10 5.67 10 6.5v10.74l-3.44-.72c-.37-.08-.76.04-1.03.31-.43.44-.43 1.14.01 1.58l4.01 4.01c.37.37.88.58 1.41.58h6.41c1 0 1.84-.73 1.98-1.72l.63-4.46c.12-.85-.32-1.69-1.09-2.07z',
      },
      '1',
    ),
  ],
  'SwipeRounded',
);
export const SwipeSharpIcon = (props?: KTRawAttr) => {
  const s = _SwipeSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeSharpIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20.13 3.87C18.69 2.17 15.6 1 12 1S5.31 2.17 3.87 3.87L2 2v5h5L4.93 4.93c1-1.29 3.7-2.43 7.07-2.43s6.07 1.14 7.07 2.43L17 7h5V2z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M13 12.5v-6c0-.83-.67-1.5-1.5-1.5S10 5.67 10 6.5v10.74l-4.04-.85-1.21 1.23L10.13 23h8.97l1.09-7.64-6.11-2.86z',
      },
      '1',
    ),
  ],
  'SwipeSharp',
);
export const SwipeTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwipeTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20.13 3.87C18.69 2.17 15.6 1 12 1S5.31 2.17 3.87 3.87L2 2v5h5L4.93 4.93c1-1.29 3.7-2.43 7.07-2.43s6.07 1.14 7.07 2.43L17 7h5V2z',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M12 13.68V7.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v10.61l-4.17-.89 3.7 3.78h6.55l.92-5.44-4.24-1.89H12z',
        opacity: '.3',
      },
      '1',
    ),
    svg(
      'path',
      {
        d: 'm18.89 13.77-3.8-1.67c-.13-.06-.28-.1-.44-.1H14V7.63c0-1.32-.96-2.5-2.27-2.62C10.25 4.88 9 6.05 9 7.5v8.15l-1.87-.4c-.19-.03-1.02-.15-1.73.56L4 17.22l5.12 5.19c.37.38.88.59 1.41.59h6.55c.98 0 1.81-.7 1.97-1.67l.92-5.44c.15-.86-.29-1.72-1.08-2.12M17.08 21h-6.55l-3.7-3.78 4.17.89V7.5c0-.28.22-.5.5-.5s.5.22.5.5v6.18h1.76L18 15.56z',
      },
      '2',
    ),
  ],
  'SwipeTwoTone',
);
export const SwipeUpIcon = (props?: KTRawAttr) => {
  const s = _SwipeUpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeUpIcon = svg(
  svg('path', {
    d: 'M2.06 5.56 1 4.5 4.5 1 8 4.5 6.94 5.56 5.32 3.94C5.11 4.76 5 5.62 5 6.5c0 2.42.82 4.65 2.2 6.43L6.13 14C4.49 11.95 3.5 9.34 3.5 6.5c0-.92.1-1.82.3-2.68zm11.79 6.06-2.68-5.37c-.37-.74-1.27-1.04-2.01-.67-.75.38-1.05 1.28-.68 2.02l4.81 9.6-3.24.8c-.33.09-.59.33-.7.66L9 19.78l6.19 2.25c.5.17 1.28.02 1.75-.22l5.51-2.75c.89-.45 1.32-1.48 1-2.42l-1.43-4.27c-.27-.82-1.04-1.37-1.9-1.37h-4.56c-.31 0-.62.07-.89.21z',
  }),
  'SwipeUp',
);
export const SwipeUpAltIcon = (props?: KTRawAttr) => {
  const s = _SwipeUpAltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeUpAltIcon = svg(
  svg('path', {
    d: 'm13 5.83 1.59 1.59L16 6l-4-4-4 4 1.41 1.41L11 5.83v4.27c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5s5-2.24 5-5c0-2.42-1.72-4.44-4-4.9z',
  }),
  'SwipeUpAlt',
);
export const SwipeUpAltOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwipeUpAltOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeUpAltOutlinedIcon = svg(
  svg('path', {
    d: 'm13 5.83 1.59 1.59L16 6l-4-4-4 4 1.41 1.41L11 5.83v4.27c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5s5-2.24 5-5c0-2.42-1.72-4.44-4-4.9zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3',
  }),
  'SwipeUpAltOutlined',
);
export const SwipeUpAltRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwipeUpAltRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeUpAltRoundedIcon = svg(
  svg('path', {
    d: 'm13 5.41.88.88c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L12.7 2.29a.996.996 0 0 0-1.41 0L8.71 4.88c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0l.88-.88v4.27c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5s5-2.24 5-5c0-2.42-1.72-4.44-4-4.9z',
  }),
  'SwipeUpAltRounded',
);
export const SwipeUpAltSharpIcon = (props?: KTRawAttr) => {
  const s = _SwipeUpAltSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeUpAltSharpIcon = svg(
  svg('path', {
    d: 'm13 5.83 1.59 1.59L16 6l-4-4-4 4 1.41 1.41L11 5.83v4.27c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5s5-2.24 5-5c0-2.42-1.72-4.44-4-4.9z',
  }),
  'SwipeUpAltSharp',
);
export const SwipeUpAltTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwipeUpAltTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeUpAltTwoToneIcon = svg(
  [
    svg('circle', { cx: '12', cy: '15', r: '3', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'm13 5.83 1.59 1.59L16 6l-4-4-4 4 1.41 1.41L11 5.83v4.27c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5s5-2.24 5-5c0-2.42-1.72-4.44-4-4.9zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3',
      },
      '1',
    ),
  ],
  'SwipeUpAltTwoTone',
);
export const SwipeUpOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwipeUpOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeUpOutlinedIcon = svg(
  svg('path', {
    d: 'm20.22 10-4.15.01c-.16-.01-.31.02-.45.08l-.59.26-1.83-4.1c-.56-1.26-2.04-1.83-3.3-1.27s-1.83 2.04-1.27 3.3l3.3 7.45-1.87.39c-.19.05-.99.27-1.36 1.21L8 19.19l6.78 2.67c.49.19 1.05.18 1.53-.04l5.99-2.65c.89-.4 1.37-1.38 1.13-2.32l-1.36-5.34c-.22-.86-.97-1.47-1.85-1.51m1.27 7.34L15.5 20l-4.92-1.96 4.18-.88-4.3-9.7c-.11-.25 0-.55.25-.66s.55 0 .66.25l2.5 5.65 1.61-.71 4.65.01zM2.06 5.56 1 4.5 4.5 1 8 4.5 6.94 5.56 5.32 3.94C5.11 4.76 5 5.62 5 6.5c0 2.42.82 4.65 2.2 6.43L6.13 14C4.49 11.95 3.5 9.34 3.5 6.5c0-.92.1-1.82.3-2.68z',
  }),
  'SwipeUpOutlined',
);
export const SwipeUpRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwipeUpRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeUpRoundedIcon = svg(
  svg('path', {
    d: 'M8.83 19.1c-.26-.6.09-1.28.73-1.41l3.58-.71-4.35-9.81c-.34-.76 0-1.64.76-1.98s1.64 0 1.98.76l2.43 5.49.84-.37c.28-.13.59-.18.9-.17l4.56.21c.86.04 1.6.63 1.83 1.45l1.23 4.33c.27.96-.2 1.97-1.11 2.37l-5.63 2.49c-.48.21-1.26.33-1.76.14l-5.45-2.27c-.24-.09-.44-.28-.54-.52m-2.08-5.72c.26-.26.29-.66.09-.95C5.68 10.74 5 8.7 5 6.5c0-.88.11-1.74.32-2.56l1.09 1.09c.3.3.79.29 1.08-.02.28-.3.25-.78-.04-1.07L5.21 1.71a.996.996 0 0 0-1.41 0L1.53 3.97c-.3.3-.29.79.02 1.08.3.28.78.25 1.07-.04L3.8 3.82c-.2.86-.3 1.76-.3 2.68 0 2.51.77 4.85 2.09 6.77.27.39.82.45 1.16.11',
  }),
  'SwipeUpRounded',
);
export const SwipeUpSharpIcon = (props?: KTRawAttr) => {
  const s = _SwipeUpSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeUpSharpIcon = svg(
  svg('path', {
    d: 'M2.06 5.56 1 4.5 4.5 1 8 4.5 6.94 5.56 5.32 3.94C5.11 4.76 5 5.62 5 6.5c0 2.42.82 4.65 2.2 6.43L6.13 14C4.49 11.95 3.5 9.34 3.5 6.5c0-.92.1-1.82.3-2.68zm19.65 5.62 2.09 7.39-8.23 3.65-6.84-2.85.61-1.62 3.8-.75-4.35-9.83c-.34-.76 0-1.64.76-1.98s1.64 0 1.98.76l2.43 5.49 1.26-.56z',
  }),
  'SwipeUpSharp',
);
export const SwipeUpTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwipeUpTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeUpTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21.49 17.34 15.5 20l-4.92-1.96 4.18-.88-4.3-9.7c-.11-.25 0-.55.25-.66s.55 0 .66.25l2.5 5.65 1.61-.71 4.65.01z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'm20.22 10-4.15.01c-.16-.01-.31.02-.45.08l-.59.26-1.83-4.1c-.56-1.26-2.04-1.83-3.3-1.27s-1.83 2.04-1.27 3.3l3.3 7.45-1.87.39c-.19.05-.99.27-1.36 1.21L8 19.19l6.78 2.67c.49.19 1.05.18 1.53-.04l5.99-2.65c.89-.4 1.37-1.38 1.13-2.32l-1.36-5.34c-.22-.86-.97-1.47-1.85-1.51m1.27 7.34L15.5 20l-4.92-1.96 4.18-.88-4.3-9.7c-.11-.25 0-.55.25-.66s.55 0 .66.25l2.5 5.65 1.61-.71 4.65.01zM2.06 5.56 1 4.5 4.5 1 8 4.5 6.94 5.56 5.32 3.94C5.11 4.76 5 5.62 5 6.5c0 2.42.82 4.65 2.2 6.43L6.13 14C4.49 11.95 3.5 9.34 3.5 6.5c0-.92.1-1.82.3-2.68z',
      },
      '1',
    ),
  ],
  'SwipeUpTwoTone',
);
export const SwipeVerticalIcon = (props?: KTRawAttr) => {
  const s = _SwipeVerticalIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeVerticalIcon = svg(
  svg('path', {
    d: 'M1 3.5h2.02C1.13 5.82 0 8.78 0 12s1.13 6.18 3.02 8.5H1V22h5v-5H4.5v2.91c-1.86-2.11-3-4.88-3-7.91s1.14-5.79 3-7.91V7H6V2H1zm12.85 8.12-2.68-5.37c-.37-.74-1.27-1.04-2.01-.67-.75.38-1.05 1.28-.68 2.02l4.81 9.6-3.24.8c-.33.09-.59.33-.7.66L9 19.78l6.19 2.25c.5.17 1.28.02 1.75-.22l5.51-2.75c.89-.45 1.32-1.48 1-2.42l-1.43-4.27c-.27-.82-1.04-1.37-1.9-1.37h-4.56c-.31 0-.62.07-.89.21z',
  }),
  'SwipeVertical',
);
export const SwipeVerticalOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwipeVerticalOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeVerticalOutlinedIcon = svg(
  svg('path', {
    d: 'M1 2h5v5H4.5V4.09c-1.86 2.11-3 4.88-3 7.91s1.14 5.79 3 7.91V17H6v5H1v-1.5h2.02C1.13 18.18 0 15.22 0 12s1.13-6.18 3.02-8.5H1zm19.22 8-4.15.01c-.16-.01-.31.02-.45.08l-.59.26-1.83-4.1c-.56-1.26-2.04-1.83-3.3-1.27s-1.83 2.04-1.27 3.3l3.3 7.45-1.87.39c-.19.05-.99.27-1.36 1.21L8 19.19l6.78 2.67c.49.19 1.05.18 1.53-.04l5.99-2.65c.89-.4 1.37-1.38 1.13-2.32l-1.36-5.34c-.22-.86-.97-1.47-1.85-1.51m1.27 7.34L15.5 20l-4.92-1.96 4.18-.88-4.3-9.7c-.11-.25 0-.55.25-.66s.55 0 .66.25l2.5 5.65 1.61-.71 4.65.01z',
  }),
  'SwipeVerticalOutlined',
);
export const SwipeVerticalRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwipeVerticalRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeVerticalRoundedIcon = svg(
  svg('path', {
    d: 'M0 12c0 3.22 1.13 6.18 3.02 8.5H1.75c-.41 0-.75.34-.75.75s.34.75.75.75H5c.55 0 1-.45 1-1v-3.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.16c-1.86-2.11-3-4.88-3-7.91s1.14-5.79 3-7.91v2.16c0 .41.34.75.75.75S6 6.66 6 6.25V3c0-.55-.45-1-1-1H1.75c-.41 0-.75.34-.75.75s.34.75.75.75h1.27C1.13 5.82 0 8.78 0 12m8.83 7.1c-.26-.6.09-1.28.73-1.41l3.58-.71-4.35-9.81c-.34-.76 0-1.64.76-1.98s1.64 0 1.98.76l2.43 5.49.84-.37c.28-.13.59-.18.9-.17l4.56.21c.86.04 1.6.63 1.83 1.45l1.23 4.33c.27.96-.2 1.97-1.11 2.37l-5.63 2.49c-.48.21-1.26.33-1.76.14l-5.45-2.27c-.24-.09-.44-.28-.54-.52',
  }),
  'SwipeVerticalRounded',
);
export const SwipeVerticalSharpIcon = (props?: KTRawAttr) => {
  const s = _SwipeVerticalSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeVerticalSharpIcon = svg(
  svg('path', {
    d: 'M1 3.5h2.02C1.13 5.82 0 8.78 0 12s1.13 6.18 3.02 8.5H1V22h5v-5H4.5v2.91c-1.86-2.11-3-4.88-3-7.91s1.14-5.79 3-7.91V7H6V2H1zm20.71 7.68 2.09 7.39-8.23 3.65-6.84-2.85.61-1.62 3.8-.75-4.35-9.83c-.34-.76 0-1.64.76-1.98s1.64 0 1.98.76l2.43 5.49 1.26-.56z',
  }),
  'SwipeVerticalSharp',
);
export const SwipeVerticalTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwipeVerticalTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwipeVerticalTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M21.49 17.34 15.5 20l-4.92-1.96 4.18-.88-4.3-9.7c-.11-.25 0-.55.25-.66s.55 0 .66.25l2.5 5.65 1.61-.71 4.65.01z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M1 2h5v5H4.5V4.09c-1.86 2.11-3 4.88-3 7.91s1.14 5.79 3 7.91V17H6v5H1v-1.5h2.02C1.13 18.18 0 15.22 0 12s1.13-6.18 3.02-8.5H1zm19.22 8-4.15.01c-.16-.01-.31.02-.45.08l-.59.26-1.83-4.1c-.56-1.26-2.04-1.83-3.3-1.27s-1.83 2.04-1.27 3.3l3.3 7.45-1.87.39c-.19.05-.99.27-1.36 1.21L8 19.19l6.78 2.67c.49.19 1.05.18 1.53-.04l5.99-2.65c.89-.4 1.37-1.38 1.13-2.32l-1.36-5.34c-.22-.86-.97-1.47-1.85-1.51m1.27 7.34L15.5 20l-4.92-1.96 4.18-.88-4.3-9.7c-.11-.25 0-.55.25-.66s.55 0 .66.25l2.5 5.65 1.61-.71 4.65.01z',
      },
      '1',
    ),
  ],
  'SwipeVerticalTwoTone',
);
export const SwitchAccessShortcutIcon = (props?: KTRawAttr) => {
  const s = _SwitchAccessShortcutIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchAccessShortcutIcon = svg(
  svg('path', {
    d: 'M7.06 8.94 5 8l2.06-.94L8 5l.94 2.06L11 8l-2.06.94L8 11zM8 21l.94-2.06L11 18l-2.06-.94L8 15l-.94 2.06L5 18l2.06.94zm-3.63-8.63L3 13l1.37.63L5 15l.63-1.37L7 13l-1.37-.63L5 11zM12 12c0-2.73 1.08-5.27 2.75-7.25L12 2h7v7l-2.82-2.82C14.84 7.82 14 9.88 14 12c0 3.32 2.1 6.36 5 7.82V22c-4.09-1.59-7-5.65-7-10',
  }),
  'SwitchAccessShortcut',
);
export const SwitchAccessShortcutAddIcon = (props?: KTRawAttr) => {
  const s = _SwitchAccessShortcutAddIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchAccessShortcutAddIcon = svg(
  svg('path', {
    d: 'M24 14h-2v-2h-2v2h-2v2h2v2h2v-2h2zM7.06 8.94 5 8l2.06-.94L8 5l.94 2.06L11 8l-2.06.94L8 11zM8 21l.94-2.06L11 18l-2.06-.94L8 15l-.94 2.06L5 18l2.06.94zm-3.63-8.63L3 13l1.37.63L5 15l.63-1.37L7 13l-1.37-.63L5 11zM12 12c0-2.73 1.08-5.27 2.75-7.25L12 2h7v7l-2.82-2.82C14.84 7.82 14 9.88 14 12c0 3.32 2.1 6.36 5 7.82V22c-4.09-1.59-7-5.65-7-10',
  }),
  'SwitchAccessShortcutAdd',
);
export const SwitchAccessShortcutAddOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwitchAccessShortcutAddOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchAccessShortcutAddOutlinedIcon = svg(
  svg('path', {
    d: 'M7.06 8.94 5 8l2.06-.94L8 5l.94 2.06L11 8l-2.06.94L8 11zM8 21l.94-2.06L11 18l-2.06-.94L8 15l-.94 2.06L5 18l2.06.94zm-3.63-8.63L3 13l1.37.63L5 15l.63-1.37L7 13l-1.37-.63L5 11zM12 12c0-3.09 1.38-5.94 3.44-8H12V2h7v7h-2V5.28c-1.8 1.74-3 4.2-3 6.72 0 3.32 2.1 6.36 5 7.82V22c-4.09-1.59-7-5.65-7-10m12 2h-2v-2h-2v2h-2v2h2v2h2v-2h2z',
  }),
  'SwitchAccessShortcutAddOutlined',
);
export const SwitchAccessShortcutAddRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwitchAccessShortcutAddRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchAccessShortcutAddRoundedIcon = svg(
  svg('path', {
    d: 'M21 18c.55 0 1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1M7.06 8.94 5 8l2.06-.94L8 5l.94 2.06L11 8l-2.06.94L8 11zM8 21l.94-2.06L11 18l-2.06-.94L8 15l-.94 2.06L5 18l2.06.94zm-3.63-8.63L3 13l1.37.63L5 15l.63-1.37L7 13l-1.37-.63L5 11zM19 20.41c0 .78-.84 1.25-1.51.86C14.21 19.36 12 15.79 12 12c0-2.73 1.08-5.27 2.75-7.25l-1.9-1.9c-.31-.31-.09-.85.36-.85h5.29c.28 0 .5.22.5.5v5.29c0 .45-.54.67-.85.35l-1.97-1.97C14.84 7.82 14 9.88 14 12c0 3.13 1.86 6.01 4.51 7.55.3.18.49.51.49.86',
  }),
  'SwitchAccessShortcutAddRounded',
);
export const SwitchAccessShortcutAddSharpIcon = (props?: KTRawAttr) => {
  const s = _SwitchAccessShortcutAddSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchAccessShortcutAddSharpIcon = svg(
  svg('path', {
    d: 'M24 14h-2v-2h-2v2h-2v2h2v2h2v-2h2zM7.06 8.94 5 8l2.06-.94L8 5l.94 2.06L11 8l-2.06.94L8 11zM8 21l.94-2.06L11 18l-2.06-.94L8 15l-.94 2.06L5 18l2.06.94zm-3.63-8.63L3 13l1.37.63L5 15l.63-1.37L7 13l-1.37-.63L5 11zM12 12c0-2.73 1.08-5.27 2.75-7.25L12 2h7v7l-2.82-2.82C14.84 7.82 14 9.88 14 12c0 3.32 2.1 6.36 5 7.82V22c-4.09-1.59-7-5.65-7-10',
  }),
  'SwitchAccessShortcutAddSharp',
);
export const SwitchAccessShortcutAddTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwitchAccessShortcutAddTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchAccessShortcutAddTwoToneIcon = svg(
  svg('path', {
    d: 'M24 14h-2v-2h-2v2h-2v2h2v2h2v-2h2zM7.06 8.94 5 8l2.06-.94L8 5l.94 2.06L11 8l-2.06.94L8 11zM8 21l.94-2.06L11 18l-2.06-.94L8 15l-.94 2.06L5 18l2.06.94zm-3.63-8.63L3 13l1.37.63L5 15l.63-1.37L7 13l-1.37-.63L5 11zM12 12c0-2.73 1.08-5.27 2.75-7.25L12 2h7v7l-2.82-2.82C14.84 7.82 14 9.88 14 12c0 3.32 2.1 6.36 5 7.82V22c-4.09-1.59-7-5.65-7-10',
  }),
  'SwitchAccessShortcutAddTwoTone',
);
export const SwitchAccessShortcutOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwitchAccessShortcutOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchAccessShortcutOutlinedIcon = svg(
  svg('path', {
    d: 'M7.06 8.94 5 8l2.06-.94L8 5l.94 2.06L11 8l-2.06.94L8 11zM8 21l.94-2.06L11 18l-2.06-.94L8 15l-.94 2.06L5 18l2.06.94zm-3.63-8.63L3 13l1.37.63L5 15l.63-1.37L7 13l-1.37-.63L5 11zM12 12c0-3.09 1.38-5.94 3.44-8H12V2h7v7h-2V5.28c-1.8 1.74-3 4.2-3 6.72 0 3.32 2.1 6.36 5 7.82V22c-4.09-1.59-7-5.65-7-10',
  }),
  'SwitchAccessShortcutOutlined',
);
export const SwitchAccessShortcutRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwitchAccessShortcutRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchAccessShortcutRoundedIcon = svg(
  svg('path', {
    d: 'M7.06 8.94 5 8l2.06-.94L8 5l.94 2.06L11 8l-2.06.94L8 11zM8 21l.94-2.06L11 18l-2.06-.94L8 15l-.94 2.06L5 18l2.06.94zm-3.63-8.63L3 13l1.37.63L5 15l.63-1.37L7 13l-1.37-.63L5 11zM19 20.41c0 .78-.84 1.25-1.51.86C14.21 19.36 12 15.79 12 12c0-2.73 1.08-5.27 2.75-7.25l-1.9-1.9c-.31-.31-.09-.85.36-.85h5.29c.28 0 .5.22.5.5v5.29c0 .45-.54.67-.85.35l-1.97-1.97C14.84 7.82 14 9.88 14 12c0 3.13 1.86 6.01 4.51 7.55.3.18.49.51.49.86',
  }),
  'SwitchAccessShortcutRounded',
);
export const SwitchAccessShortcutSharpIcon = (props?: KTRawAttr) => {
  const s = _SwitchAccessShortcutSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchAccessShortcutSharpIcon = svg(
  svg('path', {
    d: 'M7.06 8.94 5 8l2.06-.94L8 5l.94 2.06L11 8l-2.06.94L8 11zM8 21l.94-2.06L11 18l-2.06-.94L8 15l-.94 2.06L5 18l2.06.94zm-3.63-8.63L3 13l1.37.63L5 15l.63-1.37L7 13l-1.37-.63L5 11zM12 12c0-2.73 1.08-5.27 2.75-7.25L12 2h7v7l-2.82-2.82C14.84 7.82 14 9.88 14 12c0 3.32 2.1 6.36 5 7.82V22c-4.09-1.59-7-5.65-7-10',
  }),
  'SwitchAccessShortcutSharp',
);
export const SwitchAccessShortcutTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwitchAccessShortcutTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchAccessShortcutTwoToneIcon = svg(
  svg('path', {
    d: 'M7.06 8.94 5 8l2.06-.94L8 5l.94 2.06L11 8l-2.06.94L8 11zM8 21l.94-2.06L11 18l-2.06-.94L8 15l-.94 2.06L5 18l2.06.94zm-3.63-8.63L3 13l1.37.63L5 15l.63-1.37L7 13l-1.37-.63L5 11zM12 12c0-2.73 1.08-5.27 2.75-7.25L12 2h7v7l-2.82-2.82C14.84 7.82 14 9.88 14 12c0 3.32 2.1 6.36 5 7.82V22c-4.09-1.59-7-5.65-7-10',
  }),
  'SwitchAccessShortcutTwoTone',
);
export const SwitchAccountIcon = (props?: KTRawAttr) => {
  const s = _SwitchAccountIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchAccountIcon = svg(
  svg('path', {
    d: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m6 12H8v-1.5c0-1.99 4-3 6-3s6 1.01 6 3z',
  }),
  'SwitchAccount',
);
export const SwitchAccountOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwitchAccountOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchAccountOutlinedIcon = svg(
  svg('path', {
    d: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm10 5c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m6-5H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-9.31 14c.95-.63 2.09-1 3.31-1s2.36.37 3.31 1zm9.31-.27C18.53 14.06 16.4 13 14 13s-4.53 1.06-6 2.73V4h12z',
  }),
  'SwitchAccountOutlined',
);
export const SwitchAccountRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwitchAccountRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchAccountRoundedIcon = svg(
  svg('path', {
    d: 'M17 20H4V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1m3-18H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3M7.76 16c1.47-1.83 3.71-3 6.24-3s4.77 1.17 6.24 3z',
  }),
  'SwitchAccountRounded',
);
export const SwitchAccountSharpIcon = (props?: KTRawAttr) => {
  const s = _SwitchAccountSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchAccountSharpIcon = svg(
  svg('path', {
    d: 'M4 6H2v16h16v-2H4zm2-4v16h16V2zm8 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3M7.76 16c1.47-1.83 3.71-3 6.24-3s4.77 1.17 6.24 3z',
  }),
  'SwitchAccountSharp',
);
export const SwitchAccountTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwitchAccountTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchAccountTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M8 15.73C9.47 14.06 11.6 13 14 13s4.53 1.06 6 2.73V4H8zM14 5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm10 5c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m6-5H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-9.31 14c.95-.63 2.09-1 3.31-1s2.36.37 3.31 1zm9.31-.27C18.53 14.06 16.4 13 14 13s-4.53 1.06-6 2.73V4h12z',
      },
      '1',
    ),
  ],
  'SwitchAccountTwoTone',
);
export const SwitchCameraIcon = (props?: KTRawAttr) => {
  const s = _SwitchCameraIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchCameraIcon = svg(
  svg('path', {
    d: 'M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-5 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5z',
  }),
  'SwitchCamera',
);
export const SwitchCameraOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwitchCameraOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchCameraOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M9.88 4h4.24l1.83 2H20v12H4V6h4.05',
      },
      '0',
    ),
    svg('path', { d: 'M15 11H9V8.5L5.5 12 9 15.5V13h6v2.5l3.5-3.5L15 8.5z' }, '1'),
  ],
  'SwitchCameraOutlined',
);
export const SwitchCameraRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwitchCameraRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchCameraRoundedIcon = svg(
  svg('path', {
    d: 'M20 4h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65H9.88c-.56 0-1.1.24-1.48.65L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-5 11.5V13H9v2.5l-3.15-3.15c-.2-.2-.2-.51 0-.71L9 8.5V11h6V8.5l3.15 3.15c.2.2.2.51 0 .71z',
  }),
  'SwitchCameraRounded',
);
export const SwitchCameraSharpIcon = (props?: KTRawAttr) => {
  const s = _SwitchCameraSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchCameraSharpIcon = svg(
  svg('path', { d: 'M22 4h-5.17L15 2H9L7.17 4H2v16h20zm-7 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5z' }),
  'SwitchCameraSharp',
);
export const SwitchCameraTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwitchCameraTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchCameraTwoToneIcon = svg(
  [
    svg(
      'path',
      { d: 'M14.12 4H9.88L8.05 6H4v12h16V6h-4.05zM15 15.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5z', opacity: '.3' },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h4.05l1.83-2h4.24l1.83 2H20zm-5-7H9V8.5L5.5 12 9 15.5V13h6v2.5l3.5-3.5L15 8.5z',
      },
      '1',
    ),
  ],
  'SwitchCameraTwoTone',
);
export const SwitchLeftIcon = (props?: KTRawAttr) => {
  const s = _SwitchLeftIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchLeftIcon = svg(
  svg('path', { d: 'M8.5 8.62v6.76L5.12 12zM10 5l-7 7 7 7zm4 0v14l7-7z' }),
  'SwitchLeft',
);
export const SwitchLeftOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwitchLeftOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchLeftOutlinedIcon = svg(
  svg('path', { d: 'M8.5 8.62v6.76L5.12 12zM10 5l-7 7 7 7zm4 0v14l7-7z' }),
  'SwitchLeftOutlined',
);
export const SwitchLeftRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwitchLeftRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchLeftRoundedIcon = svg(
  svg('path', {
    d: 'M8.5 8.62v6.76L5.12 12zm-4.79 2.67c-.39.39-.39 1.02 0 1.41l4.59 4.59c.62.63 1.7.19 1.7-.7V7.41c0-.89-1.08-1.34-1.71-.71zM14 7.41v9.17c0 .89 1.08 1.34 1.71.71l4.59-4.59c.39-.39.39-1.02 0-1.41L15.71 6.7c-.63-.62-1.71-.18-1.71.71',
  }),
  'SwitchLeftRounded',
);
export const SwitchLeftSharpIcon = (props?: KTRawAttr) => {
  const s = _SwitchLeftSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchLeftSharpIcon = svg(
  svg('path', { d: 'M8.5 8.62v6.76L5.12 12zM10 5l-7 7 7 7zm4 0v14l7-7z' }),
  'SwitchLeftSharp',
);
export const SwitchLeftTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwitchLeftTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchLeftTwoToneIcon = svg(
  [
    svg('path', { d: 'M8.5 8.62v6.76L5.12 12z', opacity: '.3' }, '0'),
    svg('path', { d: 'M8.5 8.62v6.76L5.12 12zM10 5l-7 7 7 7zm4 0v14l7-7z' }, '1'),
  ],
  'SwitchLeftTwoTone',
);
export const SwitchRightIcon = (props?: KTRawAttr) => {
  const s = _SwitchRightIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchRightIcon = svg(
  svg('path', { d: 'M15.5 15.38V8.62L18.88 12zM14 19l7-7-7-7zm-4 0V5l-7 7z' }),
  'SwitchRight',
);
export const SwitchRightOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwitchRightOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchRightOutlinedIcon = svg(
  svg('path', { d: 'M15.5 15.38V8.62L18.88 12zM14 19l7-7-7-7zm-4 0V5l-7 7z' }),
  'SwitchRightOutlined',
);
export const SwitchRightRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwitchRightRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchRightRoundedIcon = svg(
  svg('path', {
    d: 'M15.5 15.38V8.62L18.88 12zm4.79-2.67c.39-.39.39-1.02 0-1.41L15.7 6.71c-.62-.63-1.7-.19-1.7.7v9.17c0 .89 1.08 1.34 1.71.71zM10 16.59V7.41c0-.89-1.08-1.34-1.71-.71L3.7 11.29c-.39.39-.39 1.02 0 1.41l4.59 4.59c.63.63 1.71.19 1.71-.7',
  }),
  'SwitchRightRounded',
);
export const SwitchRightSharpIcon = (props?: KTRawAttr) => {
  const s = _SwitchRightSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchRightSharpIcon = svg(
  svg('path', { d: 'M15.5 15.38V8.62L18.88 12zM14 19l7-7-7-7zm-4 0V5l-7 7z' }),
  'SwitchRightSharp',
);
export const SwitchRightTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwitchRightTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchRightTwoToneIcon = svg(
  [
    svg('path', { d: 'M15.5 15.38V8.62L18.88 12z', opacity: '.3' }, '0'),
    svg('path', { d: 'M15.5 15.38V8.62L18.88 12zM14 19l7-7-7-7zm-4 0V5l-7 7z' }, '1'),
  ],
  'SwitchRightTwoTone',
);
export const SwitchVideoIcon = (props?: KTRawAttr) => {
  const s = _SwitchVideoIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchVideoIcon = svg(
  svg('path', {
    d: 'M18 9.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13zm-5 6V13H7v2.5L3.5 12 7 8.5V11h6V8.5l3.5 3.5z',
  }),
  'SwitchVideo',
);
export const SwitchVideoOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SwitchVideoOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchVideoOutlinedIcon = svg(
  svg('path', {
    d: 'M8 13h4v2l3-3-3-3v2H8V9l-3 3 3 3zm10-3.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13zM16 17H4V7h12z',
  }),
  'SwitchVideoOutlined',
);
export const SwitchVideoRoundedIcon = (props?: KTRawAttr) => {
  const s = _SwitchVideoRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchVideoRoundedIcon = svg(
  svg('path', {
    d: 'M18 9.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l2.29 2.29c.63.63 1.71.18 1.71-.71V7.91c0-.89-1.08-1.34-1.71-.71zm-5 6V13H7v2.5l-3.15-3.15c-.2-.2-.2-.51 0-.71L7 8.5V11h6V8.5l3.15 3.15c.2.2.2.51 0 .71z',
  }),
  'SwitchVideoRounded',
);
export const SwitchVideoSharpIcon = (props?: KTRawAttr) => {
  const s = _SwitchVideoSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchVideoSharpIcon = svg(
  svg('path', { d: 'M18 9.5V5H2v14h16v-4.5l4 4v-13zm-5 6V13H7v2.5L3.5 12 7 8.5V11h6V8.5l3.5 3.5z' }),
  'SwitchVideoSharp',
);
export const SwitchVideoTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SwitchVideoTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SwitchVideoTwoToneIcon = svg(
  [
    svg('path', { d: 'M4 17h12V7H4zm4-8v2h4V9l3 3-3 3v-2H8v2l-3-3z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M8 13h4v2l3-3-3-3v2H8V9l-3 3 3 3zm10-3.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13zM16 17H4V7h12z',
      },
      '1',
    ),
  ],
  'SwitchVideoTwoTone',
);
export const SynagogueIcon = (props?: KTRawAttr) => {
  const s = _SynagogueIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SynagogueIcon = svg(
  svg('path', {
    d: 'M6 8v13h4v-5c0-1.1.9-2 2-2s2 .9 2 2v5h4V8l-6-5zm7.5 2c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M3 5c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2M1 9h4v12H1zm20-4c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2m-2 4h4v12h-4z',
  }),
  'Synagogue',
);
export const SynagogueOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SynagogueOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SynagogueOutlinedIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M20 4c-1.66 0-3 1.34-3 3v.29L12 3 7 7.29V7c0-1.66-1.34-3-3-3S1 5.34 1 7v14h10v-5c0-.55.45-1 1-1s1 .45 1 1v5h10V7c0-1.66-1.34-3-3-3m0 2c.55 0 1 .45 1 1v1h-2V7c0-.55.45-1 1-1M4 6c.55 0 1 .45 1 1v1H3V7c0-.55.45-1 1-1M3 19v-9h2v9zm14 0h-2v-3c0-1.65-1.35-3-3-3s-3 1.35-3 3v3H7V9.92l5-4.29 5 4.29zm2 0v-9h2v9z',
      },
      '0',
    ),
    svg('circle', { cx: '12', cy: '10', r: '1.5' }, '1'),
  ],
  'SynagogueOutlined',
);
export const SynagogueRoundedIcon = (props?: KTRawAttr) => {
  const s = _SynagogueRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SynagogueRoundedIcon = svg(
  svg('path', {
    d: 'M6 8.94V21h4v-4.89c0-1 .68-1.92 1.66-2.08 1.26-.21 2.34.76 2.34 1.97v5h4V8.94c0-.59-.26-1.16-.72-1.54l-4-3.33c-.74-.62-1.82-.62-2.56 0l-4 3.33c-.46.38-.72.94-.72 1.54M13.5 10c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M3 5c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2m0 16h2V9H1v10c0 1.1.9 2 2 2M21 5c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2m-2 16h2c1.1 0 2-.9 2-2V9h-4z',
  }),
  'SynagogueRounded',
);
export const SynagogueSharpIcon = (props?: KTRawAttr) => {
  const s = _SynagogueSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SynagogueSharpIcon = svg(
  svg('path', {
    d: 'M6 8v13h4v-7h4v7h4V8l-6-5zm7.5 2c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M3 5c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2M1 9h4v12H1zm20-4c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2m-2 4h4v12h-4z',
  }),
  'SynagogueSharp',
);
export const SynagogueTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SynagogueTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SynagogueTwoToneIcon = svg(
  [
    svg(
      'path',
      {
        d: 'M4 6c-.55 0-1 .45-1 1v1h2V7c0-.55-.45-1-1-1m-1 4h2v9H3zm4-.08V19h2v-3c0-1.65 1.35-3 3-3s3 1.35 3 3v3h2V9.92l-5-4.29zm6.5.08c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M20 6c-.55 0-1 .45-1 1v1h2V7c0-.55-.45-1-1-1m-1 4h2v9h-2z',
        opacity: '.3',
      },
      '0',
    ),
    svg(
      'path',
      {
        d: 'M20 4c-1.66 0-3 1.34-3 3v.29L12 3 7 7.29V7c0-1.66-1.34-3-3-3S1 5.34 1 7v14h10v-5c0-.55.45-1 1-1s1 .45 1 1v5h10V7c0-1.66-1.34-3-3-3M5 19H3v-9h2zM5 8H3V7c0-.55.45-1 1-1s1 .45 1 1zm12 11h-2v-3c0-1.65-1.35-3-3-3s-3 1.35-3 3v3H7V9.92l5-4.29 5 4.29zm4 0h-2v-9h2zm0-11h-2V7c0-.55.45-1 1-1s1 .45 1 1z',
      },
      '1',
    ),
    svg('circle', { cx: '12', cy: '10', r: '1.5' }, '2'),
  ],
  'SynagogueTwoTone',
);
export const SyncIcon = (props?: KTRawAttr) => {
  const s = _SyncIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncIcon = svg(
  svg('path', {
    d: 'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4z',
  }),
  'Sync',
);
export const SyncAltIcon = (props?: KTRawAttr) => {
  const s = _SyncAltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncAltIcon = svg(svg('path', { d: 'm18 12 4-4-4-4v3H3v2h15zM6 12l-4 4 4 4v-3h15v-2H6z' }), 'SyncAlt');
export const SyncAltOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SyncAltOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncAltOutlinedIcon = svg(
  svg('path', {
    d: 'M7.41 13.41 6 12l-4 4 4 4 1.41-1.41L5.83 17H21v-2H5.83zm9.18-2.82L18 12l4-4-4-4-1.41 1.41L18.17 7H3v2h15.17z',
  }),
  'SyncAltOutlined',
);
export const SyncAltRoundedIcon = (props?: KTRawAttr) => {
  const s = _SyncAltRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncAltRoundedIcon = svg(
  svg('path', {
    d: 'm21.65 7.65-2.79-2.79c-.32-.32-.86-.1-.86.35V7H4c-.55 0-1 .45-1 1s.45 1 1 1h14v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7M20 15H6v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.19-.2.51-.01.7l2.79 2.79c.32.32.86.1.86-.35V17h14c.55 0 1-.45 1-1s-.45-1-1-1',
  }),
  'SyncAltRounded',
);
export const SyncAltSharpIcon = (props?: KTRawAttr) => {
  const s = _SyncAltSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncAltSharpIcon = svg(
  svg('path', { d: 'm18 12 4-4-4-4v3H3v2h15zM6 12l-4 4 4 4v-3h15v-2H6z' }),
  'SyncAltSharp',
);
export const SyncAltTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SyncAltTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncAltTwoToneIcon = svg(
  svg('path', { d: 'm18 12 4-4-4-4v3H3v2h15zM6 12l-4 4 4 4v-3h15v-2H6z' }),
  'SyncAltTwoTone',
);
export const SyncDisabledIcon = (props?: KTRawAttr) => {
  const s = _SyncDisabledIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncDisabledIcon = svg(
  svg('path', {
    d: 'M10 6.35V4.26c-.8.21-1.55.54-2.23.96l1.46 1.46c.25-.12.5-.24.77-.33m-7.14-.94 2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.25-.77.34v2.09c.8-.21 1.55-.54 2.23-.96l2.36 2.36 1.27-1.27L4.14 4.14zM20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 1-.25 1.94-.68 2.77l1.46 1.46C19.55 15.01 20 13.56 20 12c0-2.21-.91-4.2-2.36-5.64z',
  }),
  'SyncDisabled',
);
export const SyncDisabledOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SyncDisabledOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncDisabledOutlinedIcon = svg(
  svg('path', {
    d: 'M10 6.35V4.26c-.66.17-1.29.43-1.88.75l1.5 1.5c.13-.05.25-.11.38-.16M20 12c0-2.21-.91-4.2-2.36-5.64L20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 .85-.19 1.65-.51 2.38l1.5 1.5C19.63 14.74 20 13.41 20 12M4.27 4 2.86 5.41l2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.24-.76.34v2.09c.8-.21 1.55-.54 2.23-.96l2.58 2.58 1.41-1.41z',
  }),
  'SyncDisabledOutlined',
);
export const SyncDisabledRoundedIcon = (props?: KTRawAttr) => {
  const s = _SyncDisabledRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncDisabledRoundedIcon = svg(
  svg('path', {
    d: 'M10 5.74v-.19c0-.68-.71-1.11-1.32-.82-.19.09-.36.2-.54.3L9.6 6.49c.24-.18.4-.45.4-.75M20 12c0-2.21-.91-4.2-2.36-5.64l1.51-1.51c.31-.31.09-.85-.36-.85H14v4.79c0 .45.54.67.85.35l1.39-1.39C17.32 8.85 18 10.34 18 12c0 .85-.18 1.66-.5 2.39l1.48 1.48C19.62 14.72 20 13.41 20 12M3.57 4.7c-.39.39-.39 1.02 0 1.41l1.65 1.65C4.45 9 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64l-1.51 1.51c-.31.31-.09.85.36.85H9.5c.28 0 .5-.22.5-.5v-4.29c0-.45-.54-.67-.85-.35l-1.39 1.39C6.68 15.15 6 13.66 6 12c0-1 .26-1.93.69-2.76l8.07 8.07c-.01.02-.01.02-.01.04-.43.12-.75.48-.75.91v.18c0 .68.71 1.11 1.32.82.31-.14.61-.31.9-.49l1.87 1.87c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L4.98 4.7a.996.996 0 0 0-1.41 0',
  }),
  'SyncDisabledRounded',
);
export const SyncDisabledSharpIcon = (props?: KTRawAttr) => {
  const s = _SyncDisabledSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncDisabledSharpIcon = svg(
  svg('path', {
    d: 'M10 6.35V4.26c-.66.17-1.29.43-1.88.75l1.5 1.5c.13-.05.25-.11.38-.16M20 12c0-2.21-.91-4.2-2.36-5.64L20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 .85-.19 1.65-.51 2.38l1.5 1.5C19.63 14.74 20 13.41 20 12M4.27 4 2.86 5.41l2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.24-.76.34v2.09c.8-.21 1.55-.54 2.23-.96l2.58 2.58 1.41-1.41z',
  }),
  'SyncDisabledSharp',
);
export const SyncDisabledTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SyncDisabledTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncDisabledTwoToneIcon = svg(
  svg('path', {
    d: 'M10 6.35V4.26c-.66.17-1.29.43-1.88.75l1.5 1.5c.13-.05.25-.11.38-.16M20 12c0-2.21-.91-4.2-2.36-5.64L20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 .85-.19 1.65-.51 2.38l1.5 1.5C19.63 14.74 20 13.41 20 12M4.27 4 2.86 5.41l2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.24-.76.34v2.09c.8-.21 1.55-.54 2.23-.96l2.58 2.58 1.41-1.41z',
  }),
  'SyncDisabledTwoTone',
);
export const SyncLockIcon = (props?: KTRawAttr) => {
  const s = _SyncLockIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncLockIcon = svg(
  svg('path', {
    d: 'M10 4.26v2.09C7.67 7.18 6 9.39 6 12c0 1.77.78 3.34 2 4.44V14h2v6H4v-2h2.73C5.06 16.54 4 14.4 4 12c0-3.73 2.55-6.85 6-7.74M20 4h-6v6h2V7.56c1.22 1.1 2 2.67 2 4.44h2c0-2.4-1.06-4.54-2.73-6H20zm0 13v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1z',
  }),
  'SyncLock',
);
export const SyncLockOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SyncLockOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncLockOutlinedIcon = svg(
  svg('path', {
    d: 'M10 4.26v2.09C7.67 7.18 6 9.39 6 12c0 1.77.78 3.34 2 4.44V14h2v6H4v-2h2.73C5.06 16.54 4 14.4 4 12c0-3.73 2.55-6.85 6-7.74M20 4h-6v6h2V7.56c1.22 1.1 2 2.67 2 4.44h2c0-2.4-1.06-4.54-2.73-6H20zm0 13v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1z',
  }),
  'SyncLockOutlined',
);
export const SyncLockRoundedIcon = (props?: KTRawAttr) => {
  const s = _SyncLockRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncLockRoundedIcon = svg(
  svg('path', {
    d: 'M10 19c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h1.73C5.06 16.54 4 14.4 4 12c0-3.19 1.87-5.93 4.56-7.22.67-.31 1.44.18 1.44.92 0 .38-.22.72-.57.88C7.41 7.55 6 9.61 6 12c0 1.77.78 3.34 2 4.44V15c0-.55.45-1 1-1s1 .45 1 1zm5-15c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7.56c1.22 1.1 2 2.67 2 4.44h2c0-2.4-1.06-4.54-2.73-6H19c.55 0 1-.45 1-1s-.45-1-1-1zm5 13v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1z',
  }),
  'SyncLockRounded',
);
export const SyncLockSharpIcon = (props?: KTRawAttr) => {
  const s = _SyncLockSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncLockSharpIcon = svg(
  svg('path', {
    d: 'M10 4.26v2.09C7.67 7.18 6 9.39 6 12c0 1.77.78 3.34 2 4.44V14h2v6H4v-2h2.73C5.06 16.54 4 14.4 4 12c0-3.73 2.55-6.85 6-7.74M20 4h-6v6h2V7.56c1.22 1.1 2 2.67 2 4.44h2c0-2.4-1.06-4.54-2.73-6H20zm0 13v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1z',
  }),
  'SyncLockSharp',
);
export const SyncLockTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SyncLockTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncLockTwoToneIcon = svg(
  svg('path', {
    d: 'M10 4.26v2.09C7.67 7.18 6 9.39 6 12c0 1.77.78 3.34 2 4.44V14h2v6H4v-2h2.73C5.06 16.54 4 14.4 4 12c0-3.73 2.55-6.85 6-7.74M20 4h-6v6h2V7.56c1.22 1.1 2 2.67 2 4.44h2c0-2.4-1.06-4.54-2.73-6H20zm0 13v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1z',
  }),
  'SyncLockTwoTone',
);
export const SyncOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SyncOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncOutlinedIcon = svg(
  svg('path', {
    d: 'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4z',
  }),
  'SyncOutlined',
);
export const SyncProblemIcon = (props?: KTRawAttr) => {
  const s = _SyncProblemIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncProblemIcon = svg(
  svg('path', {
    d: 'M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24C5.68 15.15 5 13.66 5 12c0-2.61 1.67-4.83 4-5.65V4.26C5.55 5.15 3 8.27 3 12m8 5h2v-2h-2zM21 4h-6v6l2.24-2.24C18.32 8.85 19 10.34 19 12c0 2.61-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64zm-10 9h2V7h-2z',
  }),
  'SyncProblem',
);
export const SyncProblemOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SyncProblemOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncProblemOutlinedIcon = svg(
  svg('path', {
    d: 'M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24C5.68 15.15 5 13.66 5 12c0-2.61 1.67-4.83 4-5.65V4.26C5.55 5.15 3 8.27 3 12m8 5h2v-2h-2zM21 4h-6v6l2.24-2.24C18.32 8.85 19 10.34 19 12c0 2.61-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64zm-10 9h2V7h-2z',
  }),
  'SyncProblemOutlined',
);
export const SyncProblemRoundedIcon = (props?: KTRawAttr) => {
  const s = _SyncProblemRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncProblemRoundedIcon = svg(
  svg('path', {
    d: 'M3 12c0 2.21.91 4.2 2.36 5.64l-1.51 1.51c-.31.31-.09.85.36.85H8.5c.28 0 .5-.22.5-.5v-4.29c0-.45-.54-.67-.85-.35l-1.39 1.39C5.68 15.15 5 13.66 5 12c0-2.39 1.4-4.46 3.43-5.42.34-.16.57-.47.57-.84v-.19c0-.68-.71-1.11-1.32-.82C4.92 5.99 3 8.77 3 12m8 5h2v-2h-2zm8.79-13H15.5c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.35l1.39-1.39C18.32 8.85 19 10.34 19 12c0 2.39-1.4 4.46-3.43 5.42-.34.16-.57.47-.57.84v.18c0 .68.71 1.11 1.32.82C19.08 18.01 21 15.23 21 12c0-2.21-.91-4.2-2.36-5.64l1.51-1.51c.31-.31.09-.85-.36-.85M12 13c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1',
  }),
  'SyncProblemRounded',
);
export const SyncProblemSharpIcon = (props?: KTRawAttr) => {
  const s = _SyncProblemSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncProblemSharpIcon = svg(
  svg('path', {
    d: 'M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24C5.68 15.15 5 13.66 5 12c0-2.61 1.67-4.83 4-5.65V4.26C5.55 5.15 3 8.27 3 12m8 5h2v-2h-2zM21 4h-6v6l2.24-2.24C18.32 8.85 19 10.34 19 12c0 2.61-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64zm-10 9h2V7h-2z',
  }),
  'SyncProblemSharp',
);
export const SyncProblemTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SyncProblemTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncProblemTwoToneIcon = svg(
  svg('path', {
    d: 'M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24C5.68 15.15 5 13.66 5 12c0-2.61 1.67-4.83 4-5.65V4.26C5.55 5.15 3 8.27 3 12m8 5h2v-2h-2zM21 4h-6v6l2.24-2.24C18.32 8.85 19 10.34 19 12c0 2.61-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64zm-10 9h2V7h-2z',
  }),
  'SyncProblemTwoTone',
);
export const SyncRoundedIcon = (props?: KTRawAttr) => {
  const s = _SyncRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncRoundedIcon = svg(
  svg('path', {
    d: 'M12 4V2.21c0-.45-.54-.67-.85-.35l-2.8 2.79c-.2.2-.2.51 0 .71l2.79 2.79c.32.31.86.09.86-.36V6c3.31 0 6 2.69 6 6 0 .79-.15 1.56-.44 2.25-.15.36-.04.77.23 1.04.51.51 1.37.33 1.64-.34.37-.91.57-1.91.57-2.95 0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6 0-.79.15-1.56.44-2.25.15-.36.04-.77-.23-1.04-.51-.51-1.37-.33-1.64.34C4.2 9.96 4 10.96 4 12c0 4.42 3.58 8 8 8v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79c-.31-.31-.85-.09-.85.36z',
  }),
  'SyncRounded',
);
export const SyncSharpIcon = (props?: KTRawAttr) => {
  const s = _SyncSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncSharpIcon = svg(
  svg('path', {
    d: 'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4z',
  }),
  'SyncSharp',
);
export const SyncTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SyncTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SyncTwoToneIcon = svg(
  svg('path', {
    d: 'M12.01 4V1l-4 4 4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46c.78-1.23 1.24-2.69 1.24-4.26 0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.25 7.74C4.47 8.97 4.01 10.43 4.01 12c0 4.42 3.58 8 8 8v3l4-4-4-4z',
  }),
  'SyncTwoTone',
);
export const SystemSecurityUpdateIcon = (props?: KTRawAttr) => {
  const s = _SystemSecurityUpdateIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemSecurityUpdateIcon = svg(
  svg('path', {
    d: 'M5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2m12 15H7V6h10zm-1-6h-3V8h-2v4H8l4 4z',
  }),
  'SystemSecurityUpdate',
);
export const SystemSecurityUpdateGoodIcon = (props?: KTRawAttr) => {
  const s = _SystemSecurityUpdateGoodIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemSecurityUpdateGoodIcon = svg(
  svg('path', {
    d: 'M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 17H7V6h10zm-1-7.95-1.41-1.41-3.54 3.54-1.41-1.41-1.41 1.41L11.05 15z',
  }),
  'SystemSecurityUpdateGood',
);
export const SystemSecurityUpdateGoodOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SystemSecurityUpdateGoodOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemSecurityUpdateGoodOutlinedIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10zm-1 6.05-1.41-1.41-3.54 3.54-1.41-1.41-1.41 1.41L11.05 15z',
  }),
  'SystemSecurityUpdateGoodOutlined',
);
export const SystemSecurityUpdateGoodRoundedIcon = (props?: KTRawAttr) => {
  const s = _SystemSecurityUpdateGoodRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemSecurityUpdateGoodRoundedIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 18H7V6h10zm-6.66-3.71c.39.39 1.02.39 1.41 0l3.54-3.54c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0l-2.83 2.83-.71-.71a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41z',
  }),
  'SystemSecurityUpdateGoodRounded',
);
export const SystemSecurityUpdateGoodSharpIcon = (props?: KTRawAttr) => {
  const s = _SystemSecurityUpdateGoodSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemSecurityUpdateGoodSharpIcon = svg(
  svg('path', { d: 'M5 1v22h14V1zm12 17H7V6h10zm-1-7.95-1.41-1.41-3.54 3.54-1.41-1.41-1.41 1.41L11.05 15z' }),
  'SystemSecurityUpdateGoodSharp',
);
export const SystemSecurityUpdateGoodTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SystemSecurityUpdateGoodTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemSecurityUpdateGoodTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 21h10v-1H7zM7 3v1h10V3z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10zm-1 6.05-1.41-1.41-3.54 3.54-1.41-1.41-1.41 1.41L11.05 15z',
      },
      '1',
    ),
  ],
  'SystemSecurityUpdateGoodTwoTone',
);
export const SystemSecurityUpdateOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SystemSecurityUpdateOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemSecurityUpdateOutlinedIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zM7 4V3h10v1zm9 8-4 4-4-4 1.41-1.41L11 12.17V8h2v4.17l1.59-1.59z',
  }),
  'SystemSecurityUpdateOutlined',
);
export const SystemSecurityUpdateRoundedIcon = (props?: KTRawAttr) => {
  const s = _SystemSecurityUpdateRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemSecurityUpdateRoundedIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 18H7V6h10zm-2.21-5.79H13V9c0-.55-.45-1-1-1s-1 .45-1 1v3.21H9.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79c.31-.31.09-.85-.36-.85',
  }),
  'SystemSecurityUpdateRounded',
);
export const SystemSecurityUpdateSharpIcon = (props?: KTRawAttr) => {
  const s = _SystemSecurityUpdateSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemSecurityUpdateSharpIcon = svg(
  svg('path', { d: 'M5 1v22h14V1zm12 17H7V6h10zm-1-6h-3V8h-2v4H8l4 4z' }),
  'SystemSecurityUpdateSharp',
);
export const SystemSecurityUpdateTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SystemSecurityUpdateTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemSecurityUpdateTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 20h10v1H7zM7 3h10v1H7z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10zm-1 8h-3V8h-2v4H8l4 4z',
      },
      '1',
    ),
  ],
  'SystemSecurityUpdateTwoTone',
);
export const SystemSecurityUpdateWarningIcon = (props?: KTRawAttr) => {
  const s = _SystemSecurityUpdateWarningIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemSecurityUpdateWarningIcon = svg(
  [
    svg('path', { d: 'M11 15h2v2h-2zm0-8h2v6h-2z' }, '0'),
    svg(
      'path',
      { d: 'M17 1H7c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 17H7V6h10z' },
      '1',
    ),
  ],
  'SystemSecurityUpdateWarning',
);
export const SystemSecurityUpdateWarningOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SystemSecurityUpdateWarningOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemSecurityUpdateWarningOutlinedIcon = svg(
  [
    svg('path', { d: 'M11 15h2v2h-2zm0-8h2v6h-2z' }, '0'),
    svg(
      'path',
      {
        d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10z',
      },
      '1',
    ),
  ],
  'SystemSecurityUpdateWarningOutlined',
);
export const SystemSecurityUpdateWarningRoundedIcon = (props?: KTRawAttr) => {
  const s = _SystemSecurityUpdateWarningRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemSecurityUpdateWarningRoundedIcon = svg(
  [
    svg('circle', { cx: '12', cy: '16', r: '1' }, '0'),
    svg('path', { d: 'M12 13c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1' }, '1'),
    svg(
      'path',
      { d: 'M17 1H7c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 17H7V6h10z' },
      '2',
    ),
  ],
  'SystemSecurityUpdateWarningRounded',
);
export const SystemSecurityUpdateWarningSharpIcon = (props?: KTRawAttr) => {
  const s = _SystemSecurityUpdateWarningSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemSecurityUpdateWarningSharpIcon = svg(
  [svg('path', { d: 'M11 15h2v2h-2zm0-8h2v6h-2z' }, '0'), svg('path', { d: 'M5.01 1v22H19V1zM17 18H7V6h10z' }, '1')],
  'SystemSecurityUpdateWarningSharp',
);
export const SystemSecurityUpdateWarningTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SystemSecurityUpdateWarningTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemSecurityUpdateWarningTwoToneIcon = svg(
  [
    svg('path', { d: 'M11 7h2v6h-2zm0 8h2v2h-2z', opacity: '.3' }, '0'),
    svg('path', { d: 'M11 15h2v2h-2zm0-8h2v6h-2z' }, '1'),
    svg(
      'path',
      {
        d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10z',
      },
      '2',
    ),
    svg('path', { d: 'M7 21h10v-1H7zM7 3v1h10V3z', opacity: '.3' }, '3'),
  ],
  'SystemSecurityUpdateWarningTwoTone',
);
export const SystemUpdateIcon = (props?: KTRawAttr) => {
  const s = _SystemUpdateIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemUpdateIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10zm-1-6h-3V8h-2v5H8l4 4z',
  }),
  'SystemUpdate',
);
export const SystemUpdateAltIcon = (props?: KTRawAttr) => {
  const s = _SystemUpdateAltIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemUpdateAltIcon = svg(
  svg('path', {
    d: 'm12 16.5 4-4h-3v-9h-2v9H8zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2',
  }),
  'SystemUpdateAlt',
);
export const SystemUpdateAltOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SystemUpdateAltOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemUpdateAltOutlinedIcon = svg(
  svg('path', {
    d: 'm12 16 4-4h-3V3h-2v9H8zm9-13h-6v1.99h6v14.03H3V4.99h6V3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 13 4-4h-3V3h-2v9H8zm9-13h-6v1.99h6v14.03H3V4.99h6V3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2',
  }),
  'SystemUpdateAltOutlined',
);
export const SystemUpdateAltRoundedIcon = (props?: KTRawAttr) => {
  const s = _SystemUpdateAltRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemUpdateAltRoundedIcon = svg(
  svg('path', {
    d: 'm12.35 15.65 2.79-2.79c.31-.31.09-.85-.35-.85H13V4c0-.55-.45-1-1-1s-1 .45-1 1v8H9.21c-.45 0-.67.54-.35.85l2.79 2.79c.19.2.51.2.7.01M21 3h-5.01c-.54 0-.99.45-.99.99 0 .55.45.99.99.99H20c.55 0 1 .45 1 1v12.03c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V5.99c0-.55.45-1 1-1h4.01c.54 0 .99-.45.99-.99 0-.55-.45-1-.99-1H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2',
  }),
  'SystemUpdateAltRounded',
);
export const SystemUpdateAltSharpIcon = (props?: KTRawAttr) => {
  const s = _SystemUpdateAltSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemUpdateAltSharpIcon = svg(
  svg('path', {
    d: 'm12 16 4-4h-3V3h-2v9H8zm9-13h-6v1.99h6v14.03H3V4.99h6V3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 13 4-4h-3V3h-2v9H8zM23 3h-8v1.99h6v14.03H3V4.99h6V3H1v18h22z',
  }),
  'SystemUpdateAltSharp',
);
export const SystemUpdateAltTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SystemUpdateAltTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemUpdateAltTwoToneIcon = svg(
  svg('path', {
    d: 'm12 16 4-4h-3V3h-2v9H8zm9-13h-6v1.99h6v14.03H3V4.99h6V3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2',
  }),
  'SystemUpdateAltTwoTone',
);
export const SystemUpdateOutlinedIcon = (props?: KTRawAttr) => {
  const s = _SystemUpdateOutlinedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemUpdateOutlinedIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10zm-1-6h-3V8h-2v5H8l4 4z',
  }),
  'SystemUpdateOutlined',
);
export const SystemUpdateRoundedIcon = (props?: KTRawAttr) => {
  const s = _SystemUpdateRoundedIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemUpdateRoundedIcon = svg(
  svg('path', {
    d: 'M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10zm-2.21-6H13V9c0-.55-.45-1-1-1s-1 .45-1 1v4H9.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79c.31-.31.09-.85-.36-.85',
  }),
  'SystemUpdateRounded',
);
export const SystemUpdateSharpIcon = (props?: KTRawAttr) => {
  const s = _SystemUpdateSharpIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemUpdateSharpIcon = svg(
  svg('path', { d: 'M5 1v22h14V1zm12 18H7V5h10zm-1-6h-3V8h-2v5H8l4 4z' }),
  'SystemUpdateSharp',
);
export const SystemUpdateTwoToneIcon = (props?: KTRawAttr) => {
  const s = _SystemUpdateTwoToneIcon.cloneNode() as SVGElement;
  applyAttr(s, props);
  return s;
};
export const _SystemUpdateTwoToneIcon = svg(
  [
    svg('path', { d: 'M7 19h10V5H7zm4-6V8h2v5h3l-4 4-4-4z', opacity: '.3' }, '0'),
    svg(
      'path',
      {
        d: 'M16 13h-3V8h-2v5H8l4 4zm1-11.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z',
      },
      '1',
    ),
  ],
  'SystemUpdateTwoTone',
);
