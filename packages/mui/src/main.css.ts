import { injectGlobal } from '@emotion/css';

injectGlobal`
/* Global UI Color Variables - MUI-like color palette */

:root {
  /* Primary colors */
  --kt-color-primary: rgb(25, 118, 210);
  --kt-color-primary-light: rgb(66, 165, 245);
  --kt-color-primary-dark: rgb(21, 101, 192);

  /* Secondary colors */
  --kt-color-secondary: rgb(156, 39, 176);
  --kt-color-secondary-light: rgb(186, 104, 200);
  --kt-color-secondary-dark: rgb(123, 31, 162);

  /* Error colors */
  --kt-color-error: rgb(211, 47, 47);
  --kt-color-error-light: rgb(239, 83, 80);
  --kt-color-error-dark: rgb(198, 40, 40);

  /* Warning colors */
  --kt-color-warning: rgb(237, 108, 2);
  --kt-color-warning-light: rgb(255, 152, 0);
  --kt-color-warning-dark: rgb(230, 81, 0);

  /* Info colors */
  --kt-color-info: rgb(2, 136, 209);
  --kt-color-info-light: rgb(41, 182, 246);
  --kt-color-info-dark: rgb(1, 87, 155);

  /* Success colors */
  --kt-color-success: rgb(46, 125, 50);
  --kt-color-success-light: rgb(102, 187, 106);
  --kt-color-success-dark: rgb(27, 94, 32);

  /* Text colors */
  --kt-color-text-primary: rgba(0, 0, 0, 0.87);
  --kt-color-text-secondary: rgba(0, 0, 0, 0.6);
  --kt-color-text-disabled: rgba(0, 0, 0, 0.38);

  /* Background colors */
  --kt-color-background-paper: rgb(255, 255, 255);
  --kt-color-background-default: rgb(250, 250, 250);

  /* Divider */
  --kt-color-divider: rgba(0, 0, 0, 0.12);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :root {
    /* Primary colors */
    --kt-color-primary: rgb(144, 202, 249);
    --kt-color-primary-light: rgb(179, 229, 252);
    --kt-color-primary-dark: rgb(66, 165, 245);

    /* Secondary colors */
    --kt-color-secondary: rgb(206, 147, 216);
    --kt-color-secondary-light: rgb(225, 190, 231);
    --kt-color-secondary-dark: rgb(186, 104, 200);

    /* Error colors */
    --kt-color-error: rgb(244, 67, 54);
    --kt-color-error-light: rgb(229, 115, 115);
    --kt-color-error-dark: rgb(211, 47, 47);

    /* Warning colors */
    --kt-color-warning: rgb(255, 152, 0);
    --kt-color-warning-light: rgb(255, 183, 77);
    --kt-color-warning-dark: rgb(245, 124, 0);

    /* Info colors */
    --kt-color-info: rgb(41, 182, 246);
    --kt-color-info-light: rgb(79, 195, 247);
    --kt-color-info-dark: rgb(2, 136, 209);

    /* Success colors */
    --kt-color-success: rgb(102, 187, 106);
    --kt-color-success-light: rgb(129, 199, 132);
    --kt-color-success-dark: rgb(76, 175, 80);

    /* Text colors */
    --kt-color-text-primary: rgba(255, 255, 255, 0.87);
    --kt-color-text-secondary: rgba(255, 255, 255, 0.6);
    --kt-color-text-disabled: rgba(255, 255, 255, 0.38);

    /* Background colors */
    --kt-color-background-paper: rgb(18, 18, 18);
    --kt-color-background-default: rgb(12, 12, 12);

    /* Divider */
    --kt-color-divider: rgba(255, 255, 255, 0.12);
  }
}

`;
