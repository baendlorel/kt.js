import { injectGlobal } from '@emotion/css';

injectGlobal`
/* Switch Component Styles - MUI-like */

.mui-switch-wrapper {
  --mui-switch-track-off: rgba(0, 0, 0, 0.38);
  --mui-switch-track-on: rgb(25, 118, 210);
  --mui-switch-track-disabled: rgba(0, 0, 0, 0.12);
  --mui-switch-thumb-disabled: #f5f5f5;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: relative;
  cursor: pointer;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  user-select: none;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
}

.mui-switch-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
}

.mui-switch-base {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  vertical-align: middle;
}

.mui-switch-track {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background-color: var(--mui-switch-track-off);
  transition:
    background-color 200ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.mui-switch-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.4),
    0 1px 1px rgba(0, 0, 0, 0.24);
  transition:
    transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 200ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.mui-switch-size-small .mui-switch-base {
  width: 34px;
  height: 20px;
}

.mui-switch-size-small .mui-switch-thumb {
  width: 16px;
  height: 16px;
}

.mui-switch-size-small .mui-switch-thumb-checked {
  transform: translateX(14px);
}

.mui-switch-size-medium .mui-switch-base {
  width: 42px;
  height: 26px;
}

.mui-switch-size-medium .mui-switch-thumb {
  width: 22px;
  height: 22px;
}

.mui-switch-size-medium .mui-switch-thumb-checked {
  transform: translateX(16px);
}

.mui-switch-size-large .mui-switch-base {
  width: 50px;
  height: 30px;
}

.mui-switch-size-large .mui-switch-thumb {
  width: 26px;
  height: 26px;
}

.mui-switch-size-large .mui-switch-thumb-checked {
  transform: translateX(20px);
}

.mui-switch-track-checked {
  background-color: var(--mui-switch-track-on);
}

.mui-switch-color-primary {
  --mui-switch-track-on: rgb(25, 118, 210);
}

.mui-switch-color-secondary {
  --mui-switch-track-on: rgb(220, 0, 78);
}

.mui-switch-color-error {
  --mui-switch-track-on: rgb(211, 47, 47);
}

.mui-switch-color-warning {
  --mui-switch-track-on: rgb(237, 108, 2);
}

.mui-switch-color-info {
  --mui-switch-track-on: rgb(2, 136, 209);
}

.mui-switch-color-success {
  --mui-switch-track-on: rgb(46, 125, 50);
}

.mui-switch-wrapper:not(.mui-switch-disabled):hover .mui-switch-track {
  opacity: 0.75;
}

.mui-switch-wrapper:not(.mui-switch-disabled):hover .mui-switch-track-checked {
  opacity: 0.9;
}

.mui-switch-input:focus-visible + .mui-switch-base .mui-switch-thumb {
  box-shadow:
    0 0 0 8px rgba(25, 118, 210, 0.2),
    0 1px 3px rgba(0, 0, 0, 0.4),
    0 1px 1px rgba(0, 0, 0, 0.24);
}

.mui-switch-disabled {
  cursor: not-allowed;
}

.mui-switch-disabled .mui-switch-track,
.mui-switch-disabled .mui-switch-track-checked {
  background-color: var(--mui-switch-track-disabled);
  opacity: 1;
}

.mui-switch-disabled .mui-switch-thumb {
  background-color: var(--mui-switch-thumb-disabled);
  box-shadow: none;
}

.mui-switch-label {
  margin-left: 2px;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  color: rgba(0, 0, 0, 0.87);
}

@media (prefers-color-scheme: dark) {
  .mui-switch-wrapper {
    --mui-switch-track-off: rgba(255, 255, 255, 0.3);
    --mui-switch-track-disabled: rgba(255, 255, 255, 0.2);
    --mui-switch-thumb-disabled: #bdbdbd;
  }

  .mui-switch-color-primary {
    --mui-switch-track-on: rgb(144, 202, 249);
  }

  .mui-switch-color-secondary {
    --mui-switch-track-on: rgb(244, 143, 177);
  }

  .mui-switch-color-error {
    --mui-switch-track-on: rgb(244, 67, 54);
  }

  .mui-switch-color-warning {
    --mui-switch-track-on: rgb(255, 152, 0);
  }

  .mui-switch-color-info {
    --mui-switch-track-on: rgb(41, 182, 246);
  }

  .mui-switch-color-success {
    --mui-switch-track-on: rgb(102, 187, 106);
  }

  .mui-switch-input:focus-visible + .mui-switch-base .mui-switch-thumb {
    box-shadow:
      0 0 0 8px rgba(144, 202, 249, 0.25),
      0 1px 3px rgba(0, 0, 0, 0.5),
      0 1px 1px rgba(0, 0, 0, 0.35);
  }

  .mui-switch-label {
    color: rgba(255, 255, 255, 0.87);
  }
}
`;
