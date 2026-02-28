import { injectGlobal } from '@emotion/css';

injectGlobal`
/* Radio Component Styles - MUI-like */

.mui-radio-wrapper {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  vertical-align: middle;
  position: relative;
  margin: -9px;
  padding: 9px;
  border-radius: 4px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.mui-radio-wrapper:hover {
  /* background-color: rgba(0, 0, 0, 0.04); */
}

.mui-radio-disabled {
  cursor: default;
  pointer-events: none;
  opacity: 0.38;
}

/* Radio Input (hidden) */
.mui-radio-input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
  cursor: inherit;
}

/* Radio Icon Container */
.mui-radio-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  padding: 9px;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.6);
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

/* Icon SVG */
.mui-radio-icon svg {
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.5rem;
}

/* Size variants */
.mui-radio-size-small .mui-radio-icon {
  padding: 5px;
}

.mui-radio-size-small .mui-radio-icon svg {
  font-size: 1.25rem;
}

.mui-radio-size-medium .mui-radio-icon {
  padding: 9px;
}

.mui-radio-size-medium .mui-radio-icon svg {
  font-size: 1.5rem;
}

/* Unchecked state - controlled by k-if in JSX */
.mui-radio-icon-unchecked {
  display: flex;
}

.mui-radio-icon-checked {
  display: flex;
}

/* Color variants - Primary */
.mui-radio-color-primary .mui-radio-input:checked ~ .mui-radio-icon {
  color: #1976d2;
}

.mui-radio-color-primary:hover {
  /* background-color: rgba(25, 118, 210, 0.04); */
}

/* Color variants - Secondary */
.mui-radio-color-secondary .mui-radio-input:checked ~ .mui-radio-icon {
  color: #dc004e;
}

.mui-radio-color-secondary:hover {
  /* background-color: rgba(220, 0, 78, 0.04); */
}

/* Color variants - Default */
.mui-radio-color-default .mui-radio-input:checked ~ .mui-radio-icon {
  color: rgba(0, 0, 0, 0.87);
}

/* Radio Label */
.mui-radio-label {
  margin-left: 8px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  color: rgba(0, 0, 0, 0.87);
  user-select: none;
}

/* Radio Group */
.mui-radio-group {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.mui-radio-group-row {
  flex-direction: row;
}

/* Ripple effect on click */
.mui-radio-icon::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  opacity: 0;
  background-color: currentColor;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.mui-radio-wrapper:active .mui-radio-icon::after {
  opacity: 0.12;
}

/* Focus visible */
.mui-radio-input:focus-visible ~ .mui-radio-icon {
  box-shadow: 0 0 0 8px rgba(25, 118, 210, 0.12);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .mui-radio-wrapper:hover {
    /* background-color: rgba(255, 255, 255, 0.08); */
  }

  .mui-radio-icon {
    color: rgba(255, 255, 255, 0.7);
  }

  .mui-radio-color-primary .mui-radio-input:checked ~ .mui-radio-icon {
    color: #90caf9;
  }

  .mui-radio-color-primary:hover {
    background-color: rgba(144, 202, 249, 0.08);
  }

  .mui-radio-color-secondary .mui-radio-input:checked ~ .mui-radio-icon {
    color: #f48fb1;
  }

  .mui-radio-color-secondary:hover {
    background-color: rgba(244, 143, 177, 0.08);
  }

  .mui-radio-color-default .mui-radio-input:checked ~ .mui-radio-icon {
    color: rgba(255, 255, 255, 0.87);
  }

  .mui-radio-label {
    color: rgba(255, 255, 255, 0.87);
  }

  .mui-radio-input:focus-visible ~ .mui-radio-icon {
    box-shadow: 0 0 0 8px rgba(144, 202, 249, 0.16);
  }
}

`;
