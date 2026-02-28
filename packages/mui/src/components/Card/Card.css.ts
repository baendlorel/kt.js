import { injectGlobal } from '@emotion/css';

injectGlobal`
/* Card Component Styles - MUI-like */

.mui-card {
  position: relative;
  border-radius: 4px;
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  overflow: hidden;
  display: block;
}

/* Variant: outlined */
.mui-card-outlined {
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: none;
}

/* Variant: contained */
.mui-card-contained {
  background-color: #f5f5f5;
  box-shadow: none;
  border: none;
}

/* Elevation shadows */
.mui-card-elevation-0 {
  box-shadow: none;
}
.mui-card-elevation-1 {
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-2 {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
              0px 2px 2px 0px rgba(0, 0, 0, 0.14),
              0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-3 {
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
              0px 3px 4px 0px rgba(0, 0, 0, 0.14),
              0px 1px 8px 0px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-4 {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
              0px 4px 5px 0px rgba(0, 0, 0, 0.14),
              0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-5 {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
              0px 5px 8px 0px rgba(0, 0, 0, 0.14),
              0px 1px 14px 0px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-6 {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
              0px 6px 10px 0px rgba(0, 0, 0, 0.14),
              0px 1px 18px 0px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-7 {
  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2),
              0px 7px 10px 1px rgba(0, 0, 0, 0.14),
              0px 2px 16px 1px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-8 {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
              0px 8px 10px 1px rgba(0, 0, 0, 0.14),
              0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-9 {
  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2),
              0px 9px 12px 1px rgba(0, 0, 0, 0.14),
              0px 3px 16px 2px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-10 {
  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2),
              0px 10px 14px 1px rgba(0, 0, 0, 0.14),
              0px 4px 18px 3px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-11 {
  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2),
              0px 11px 15px 1px rgba(0, 0, 0, 0.14),
              0px 4px 20px 3px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-12 {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2),
              0px 12px 17px 2px rgba(0, 0, 0, 0.14),
              0px 5px 22px 4px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-13 {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2),
              0px 13px 19px 2px rgba(0, 0, 0, 0.14),
              0px 5px 24px 4px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-14 {
  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2),
              0px 14px 21px 2px rgba(0, 0, 0, 0.14),
              0px 5px 26px 4px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-15 {
  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2),
              0px 15px 22px 2px rgba(0, 0, 0, 0.14),
              0px 6px 28px 5px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-16 {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
              0px 16px 24px 2px rgba(0, 0, 0, 0.14),
              0px 6px 30px 5px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-17 {
  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2),
              0px 17px 26px 2px rgba(0, 0, 0, 0.14),
              0px 6px 32px 5px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-18 {
  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2),
              0px 18px 28px 2px rgba(0, 0, 0, 0.14),
              0px 7px 34px 6px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-19 {
  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2),
              0px 19px 29px 2px rgba(0, 0, 0, 0.14),
              0px 7px 36px 6px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-20 {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2),
              0px 20px 31px 3px rgba(0, 0, 0, 0.14),
              0px 8px 38px 7px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-21 {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2),
              0px 21px 33px 3px rgba(0, 0, 0, 0.14),
              0px 8px 40px 7px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-22 {
  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2),
              0px 22px 35px 3px rgba(0, 0, 0, 0.14),
              0px 8px 42px 7px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-23 {
  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2),
              0px 23px 36px 3px rgba(0, 0, 0, 0.14),
              0px 9px 44px 8px rgba(0, 0, 0, 0.12);
}
.mui-card-elevation-24 {
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
              0px 24px 38px 3px rgba(0, 0, 0, 0.14),
              0px 9px 46px 8px rgba(0, 0, 0, 0.12);
}

/* Square card (no border radius) */
.mui-card-square {
  border-radius: 0;
}

/* Raised card (hover effect) */
.mui-card-raised {
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.mui-card-raised:hover {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
              0px 8px 10px 1px rgba(0, 0, 0, 0.14),
              0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .mui-card {
    background-color: #1e1e1e;
    color: rgba(255, 255, 255, 0.87);
  }

  .mui-card-outlined {
    border-color: rgba(255, 255, 255, 0.12);
  }

  .mui-card-contained {
    background-color: #2d2d2d;
  }
}
`;
