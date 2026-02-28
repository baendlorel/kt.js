import { injectGlobal } from '@emotion/css';

injectGlobal`
/* Button Component Styles - MUI-like */

.mui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  min-width: 64px;
  transition:
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
}

.mui-button:hover {
  text-decoration: none;
}

.mui-button-fullwidth {
  width: 100%;
}

.mui-button-disabled {
  pointer-events: none;
  cursor: default;
}

/* Button label */
.mui-button-label {
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
}

/* Icons */
.mui-button-start-icon {
  display: inherit;
  margin-right: 8px;
  margin-left: -4px;
}

.mui-button-end-icon {
  display: inherit;
  margin-left: 8px;
  margin-right: -4px;
}

.mui-button-size-small .mui-button-start-icon {
  margin-left: -2px;
}

.mui-button-size-small .mui-button-end-icon {
  margin-right: -2px;
}

/* Size variants */
.mui-button-size-small {
  padding: 4px 10px;
  font-size: 0.8125rem;
}

.mui-button-size-medium {
  padding: 6px 16px;
  font-size: 0.875rem;
}

.mui-button-size-large {
  padding: 8px 22px;
  font-size: 0.9375rem;
}

/* Icon-only variant */
.mui-button-icon-only {
  min-width: auto;
  padding: 8px;
}

.mui-button-icon-only.mui-button-size-small {
  padding: 5px;
}

.mui-button-icon-only.mui-button-size-medium {
  padding: 8px;
}

.mui-button-icon-only.mui-button-size-large {
  padding: 12px;
}

.mui-button-icon-only .mui-button-start-icon,
.mui-button-icon-only .mui-button-end-icon {
  margin: 0;
}

/* Text variant */
.mui-button-text {
  padding: 6px 8px;
}

.mui-button-text.mui-button-size-small {
  padding: 4px 5px;
}

.mui-button-text.mui-button-size-large {
  padding: 8px 11px;
}

/* Text variant - Primary */
.mui-button-text-primary {
  color: #1976d2;
}

.mui-button-text-primary:hover {
  background-color: rgba(25, 118, 210, 0.04);
}

/* Text variant - Secondary */
.mui-button-text-secondary {
  color: #9c27b0;
}

.mui-button-text-secondary:hover {
  background-color: rgba(156, 39, 176, 0.04);
}

/* Text variant - Error */
.mui-button-text-error {
  color: #d32f2f;
}

.mui-button-text-error:hover {
  background-color: rgba(211, 47, 47, 0.04);
}

/* Text variant - Warning */
.mui-button-text-warning {
  color: #ed6c02;
}

.mui-button-text-warning:hover {
  background-color: rgba(237, 108, 2, 0.04);
}

/* Text variant - Info */
.mui-button-text-info {
  color: #0288d1;
}

.mui-button-text-info:hover {
  background-color: rgba(2, 136, 209, 0.04);
}

/* Text variant - Success */
.mui-button-text-success {
  color: #2e7d32;
}

.mui-button-text-success:hover {
  background-color: rgba(46, 125, 50, 0.04);
}

/* Outlined variant */
.mui-button-outlined {
  border: 1px solid rgba(25, 118, 210, 0.5);
  padding: 5px 15px;
}

.mui-button-outlined.mui-button-size-small {
  padding: 3px 9px;
}

.mui-button-outlined.mui-button-size-large {
  padding: 7px 21px;
}

/* Outlined variant - Primary */
.mui-button-outlined-primary {
  color: #1976d2;
  border-color: rgba(25, 118, 210, 0.5);
}

.mui-button-outlined-primary:hover {
  border-color: #1976d2;
  background-color: rgba(25, 118, 210, 0.04);
}

/* Outlined variant - Secondary */
.mui-button-outlined-secondary {
  color: #9c27b0;
  border-color: rgba(156, 39, 176, 0.5);
}

.mui-button-outlined-secondary:hover {
  border-color: #9c27b0;
  background-color: rgba(156, 39, 176, 0.04);
}

/* Outlined variant - Error */
.mui-button-outlined-error {
  color: #d32f2f;
  border-color: rgba(211, 47, 47, 0.5);
}

.mui-button-outlined-error:hover {
  border-color: #d32f2f;
  background-color: rgba(211, 47, 47, 0.04);
}

/* Outlined variant - Warning */
.mui-button-outlined-warning {
  color: #ed6c02;
  border-color: rgba(237, 108, 2, 0.5);
}

.mui-button-outlined-warning:hover {
  border-color: #ed6c02;
  background-color: rgba(237, 108, 2, 0.04);
}

/* Outlined variant - Info */
.mui-button-outlined-info {
  color: #0288d1;
  border-color: rgba(2, 136, 209, 0.5);
}

.mui-button-outlined-info:hover {
  border-color: #0288d1;
  background-color: rgba(2, 136, 209, 0.04);
}

/* Outlined variant - Success */
.mui-button-outlined-success {
  color: #2e7d32;
  border-color: rgba(46, 125, 50, 0.5);
}

.mui-button-outlined-success:hover {
  border-color: #2e7d32;
  background-color: rgba(46, 125, 50, 0.04);
}

/* Contained variant - Primary */
.mui-button-contained-primary {
  color: #fff;
  background-color: #1976d2;
  box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.mui-button-contained-primary:hover {
  background-color: #1565c0;
  box-shadow:
    0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.mui-button-contained-primary:active {
  box-shadow:
    0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14),
    0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}

/* Contained variant - Secondary */
.mui-button-contained-secondary {
  color: #fff;
  background-color: #9c27b0;
  box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.mui-button-contained-secondary:hover {
  background-color: #7b1fa2;
  box-shadow:
    0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

/* Contained variant - Error */
.mui-button-contained-error {
  color: #fff;
  background-color: #d32f2f;
  box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.mui-button-contained-error:hover {
  background-color: #c62828;
  box-shadow:
    0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

/* Contained variant - Warning */
.mui-button-contained-warning {
  color: #fff;
  background-color: #ed6c02;
  box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.mui-button-contained-warning:hover {
  background-color: #e65100;
  box-shadow:
    0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

/* Contained variant - Info */
.mui-button-contained-info {
  color: #fff;
  background-color: #0288d1;
  box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.mui-button-contained-info:hover {
  background-color: #01579b;
  box-shadow:
    0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

/* Contained variant - Success */
.mui-button-contained-success {
  color: #fff;
  background-color: #2e7d32;
  box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.mui-button-contained-success:hover {
  background-color: #1b5e20;
  box-shadow:
    0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

/* Disabled states */
.mui-button-text.mui-button-disabled {
  color: rgba(0, 0, 0, 0.26);
}

.mui-button-outlined.mui-button-disabled {
  color: rgba(0, 0, 0, 0.26);
  border-color: rgba(0, 0, 0, 0.12);
}

.mui-button-contained.mui-button-disabled {
  color: rgba(0, 0, 0, 0.26);
  background-color: rgba(0, 0, 0, 0.12);
  box-shadow: none;
}

/* Ripple effect */
.mui-button-ripple {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  pointer-events: none;
  overflow: hidden;
}

.mui-button-ripple-effect {
  position: absolute;
  background-color: currentColor;
  opacity: 0.3;
  border-radius: 50%;
  transform: scale(0);
  animation: mui-ripple-animation 600ms ease-out;
  pointer-events: none;
}

@keyframes mui-ripple-animation {
  to {
    transform: scale(2);
    opacity: 0;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .mui-button-text-primary {
    color: #90caf9;
  }

  .mui-button-text-primary:hover {
    background-color: rgba(144, 202, 249, 0.08);
  }

  .mui-button-text-secondary {
    color: #ce93d8;
  }

  .mui-button-text-secondary:hover {
    background-color: rgba(206, 147, 216, 0.08);
  }

  .mui-button-outlined-primary {
    color: #90caf9;
    border-color: rgba(144, 202, 249, 0.5);
  }

  .mui-button-outlined-primary:hover {
    border-color: #90caf9;
    background-color: rgba(144, 202, 249, 0.08);
  }

  .mui-button-outlined-secondary {
    color: #ce93d8;
    border-color: rgba(206, 147, 216, 0.5);
  }

  .mui-button-outlined-secondary:hover {
    border-color: #ce93d8;
    background-color: rgba(206, 147, 216, 0.08);
  }

  .mui-button-contained-primary {
    background-color: #90caf9;
    color: rgba(0, 0, 0, 0.87);
  }

  .mui-button-contained-primary:hover {
    background-color: #42a5f5;
  }

  .mui-button-contained-secondary {
    background-color: #ce93d8;
    color: rgba(0, 0, 0, 0.87);
  }

  .mui-button-contained-secondary:hover {
    background-color: #ab47bc;
  }

  .mui-button-text.mui-button-disabled {
    color: rgba(255, 255, 255, 0.3);
  }

  .mui-button-outlined.mui-button-disabled {
    color: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.12);
  }

  .mui-button-contained.mui-button-disabled {
    color: rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.12);
  }
}

`;
