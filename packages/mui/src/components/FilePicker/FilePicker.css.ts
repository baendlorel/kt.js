import { injectGlobal } from '@emotion/css';

injectGlobal`
/* FilePicker & DirectoryPicker Component Styles */

.mui-filepicker-root {
  display: inline-flex;
  flex-direction: column;
  position: relative;
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
  vertical-align: top;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
}

.mui-filepicker-fullwidth {
  width: 100%;
}

/* Wrapper */
.mui-filepicker-wrapper {
  font-size: 1rem;
  line-height: 1.4375em;
  color: rgba(0, 0, 0, 0.87);
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  position: relative;
  border-radius: 4px;
}

.mui-filepicker-input-container {
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;
  min-width: 0;
}

/* Label */
.mui-filepicker-label {
  display: block;
  transform-origin: top left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(133% - 32px);
  position: absolute;
  left: 0;
  top: 2px;
  transform: translate(14px, 16px) scale(1);
  transition:
    color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  z-index: 1;
  pointer-events: none;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1rem;
  line-height: 1;
}

.mui-filepicker-focused .mui-filepicker-label,
.mui-filepicker-has-value .mui-filepicker-label {
  transform: translate(14px, -9px) scale(0.75);
  max-width: calc(133% - 32px);
}

.mui-filepicker-focused .mui-filepicker-label {
  color: #1976d2;
}

.mui-filepicker-error .mui-filepicker-label {
  color: #d32f2f;
}

.mui-filepicker-disabled .mui-filepicker-label {
  color: rgba(0, 0, 0, 0.38);
}

.mui-filepicker-required {
  color: #d32f2f;
}

/* Size variants */
.mui-filepicker-size-small .mui-filepicker-wrapper {
  font-size: 0.875rem;
  line-height: 1.4375em;
}

.mui-filepicker-size-small .mui-filepicker-label {
  font-size: 0.875rem;
  transform: translate(14px, 9px) scale(1);
}

.mui-filepicker-size-small.mui-filepicker-focused .mui-filepicker-label,
.mui-filepicker-size-small.mui-filepicker-has-value .mui-filepicker-label {
  transform: translate(14px, -9px) scale(0.75);
}

.mui-filepicker-size-small .mui-filepicker-input-wrapper {
  padding: 8.5px 14px;
}

.mui-filepicker-size-small .mui-filepicker-display {
  font-size: 0.875rem;
}

/* Input wrapper */
.mui-filepicker-input-wrapper {
  font: inherit;
  letter-spacing: inherit;
  color: currentColor;
  padding: 16.5px 14px;
  border: 0;
  box-sizing: content-box;
  background: none;
  height: auto;
  margin: 0;
  display: block;
  min-width: 0;
  width: 100%;
  position: relative;
  cursor: pointer;
}

/* Display text */
.mui-filepicker-display {
  font: inherit;
  letter-spacing: inherit;
  color: currentColor;
  border: 0;
  box-sizing: content-box;
  background: none;
  height: 1.4375em;
  margin: 0;
  display: block;
  min-width: 0;
  width: 100%;
  padding: 0;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mui-filepicker-display.mui-filepicker-placeholder {
  color: rgba(0, 0, 0, 0.42);
}

.mui-filepicker-disabled .mui-filepicker-display {
  color: rgba(0, 0, 0, 0.38);
  cursor: default;
}

/* Hidden native file input */
.mui-filepicker-native-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
}

.mui-filepicker-disabled .mui-filepicker-native-input {
  cursor: default;
  pointer-events: none;
}

/* Fieldset (border) */
.mui-filepicker-fieldset {
  text-align: left;
  position: absolute;
  bottom: 0;
  right: 0;
  top: -5px;
  left: 0;
  margin: 0;
  padding: 0 8px;
  pointer-events: none;
  border-radius: inherit;
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  min-width: 0%;
  border-color: rgba(0, 0, 0, 0.23);
  transition: border-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.mui-filepicker-wrapper:hover .mui-filepicker-fieldset {
  border-color: rgba(0, 0, 0, 0.87);
}

.mui-filepicker-focused .mui-filepicker-fieldset {
  border-color: #1976d2;
  border-width: 2px;
}

.mui-filepicker-error .mui-filepicker-fieldset {
  border-color: #d32f2f;
}

.mui-filepicker-error.mui-filepicker-focused .mui-filepicker-fieldset {
  border-color: #d32f2f;
}

.mui-filepicker-disabled .mui-filepicker-fieldset {
  border-color: rgba(0, 0, 0, 0.26);
}

/* No label variant - adjust fieldset position */
.mui-filepicker-no-label .mui-filepicker-fieldset {
  top: 0;
}

/* Legend (for label space) */
.mui-filepicker-legend {
  float: unset;
  width: auto;
  overflow: hidden;
  display: block;
  padding: 0;
  height: 11px;
  font-size: 0.75em;
  visibility: hidden;
  max-width: 0.01px;
  transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  white-space: nowrap;
}

.mui-filepicker-legend > span {
  padding-left: 5px;
  padding-right: 5px;
  display: inline-block;
  opacity: 0;
  visibility: visible;
}

.mui-filepicker-focused .mui-filepicker-legend,
.mui-filepicker-has-value .mui-filepicker-legend {
  max-width: 100%;
  transition: max-width 100ms cubic-bezier(0, 0, 0.2, 1) 50ms;
}

/* Helper text */
.mui-filepicker-helper-text {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  text-align: left;
  margin: 3px 14px 0;
}

.mui-filepicker-error .mui-filepicker-helper-text {
  color: #d32f2f;
}

.mui-filepicker-disabled .mui-filepicker-helper-text {
  color: rgba(0, 0, 0, 0.38);
}

/* Browse button for FilePicker */
.mui-filepicker-button {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  padding: 4px 12px;
  font-size: 0.8125rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #1976d2;
  color: #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: 2;
}

.mui-filepicker-button:hover {
  background-color: #1565c0;
}

.mui-filepicker-button:active {
  background-color: #115293;
}

.mui-filepicker-disabled .mui-filepicker-button {
  background-color: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.26);
  cursor: default;
  pointer-events: none;
}

.mui-filepicker-size-small .mui-filepicker-button {
  padding: 2px 8px;
  font-size: 0.75rem;
}

/* File count badge */
.mui-filepicker-file-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  height: 20px;
  min-width: 20px;
  border-radius: 10px;
  background-color: #1976d2;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: 8px;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .mui-filepicker-wrapper {
    color: rgba(255, 255, 255, 0.87);
  }

  .mui-filepicker-label {
    color: rgba(255, 255, 255, 0.7);
  }

  .mui-filepicker-focused .mui-filepicker-label {
    color: #90caf9;
  }

  .mui-filepicker-display.mui-filepicker-placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  .mui-filepicker-disabled .mui-filepicker-display {
    color: rgba(255, 255, 255, 0.38);
  }

  .mui-filepicker-fieldset {
    border-color: rgba(255, 255, 255, 0.23);
  }

  .mui-filepicker-wrapper:hover .mui-filepicker-fieldset {
    border-color: rgba(255, 255, 255, 0.87);
  }

  .mui-filepicker-focused .mui-filepicker-fieldset {
    border-color: #90caf9;
  }

  .mui-filepicker-disabled .mui-filepicker-fieldset {
    border-color: rgba(255, 255, 255, 0.26);
  }

  .mui-filepicker-helper-text {
    color: rgba(255, 255, 255, 0.7);
  }

  .mui-filepicker-disabled .mui-filepicker-helper-text {
    color: rgba(255, 255, 255, 0.38);
  }

  .mui-filepicker-button {
    background-color: #90caf9;
    color: rgba(0, 0, 0, 0.87);
  }

  .mui-filepicker-button:hover {
    background-color: #a9cce3;
  }

  .mui-filepicker-button:active {
    background-color: #7bb3d9;
  }

  .mui-filepicker-disabled .mui-filepicker-button {
    background-color: rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.3);
  }
}
`;
