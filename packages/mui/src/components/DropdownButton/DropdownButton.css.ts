import { injectGlobal } from '@emotion/css';

injectGlobal`
.mui-dropdown-button-wrapper {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  min-width: 120px;
}

.mui-dropdown-button-fullwidth {
  width: 100%;
}

.mui-dropdown-button-fullwidth .mui-dropdown-button-trigger {
  width: 100%;
}

.mui-dropdown-button-disabled {
  pointer-events: none;
}

.mui-dropdown-button-trigger {
  gap: 8px;
}

.mui-dropdown-button-end-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15em;
  line-height: 1;
  margin-right: -4px;
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.mui-dropdown-button-open .mui-dropdown-button-end-icon {
  transform: rotate(180deg);
}

.mui-dropdown-button-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  min-width: 100%;
  z-index: 1300;
  background-color: #fff;
  border-radius: 4px;
  box-shadow:
    0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14),
    0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  padding: 6px 0;
  display: none;
  opacity: 0;
  transform: scale(0.9) translateY(-4px);
  transform-origin: top center;
  transition:
    opacity 150ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.mui-dropdown-button-menu-open {
  display: block;
  opacity: 1;
  transform: scale(1) translateY(0);
}

.mui-dropdown-button-option {
  width: 100%;
  border: 0;
  background: transparent;
  text-align: left;
  padding: 8px 16px;
  min-height: 36px;
  font: inherit;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  transition: background-color 120ms cubic-bezier(0.4, 0, 0.2, 1);
}

.mui-dropdown-button-option:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.mui-dropdown-button-option-disabled,
.mui-dropdown-button-option:disabled {
  color: rgba(0, 0, 0, 0.38);
  cursor: default;
}

.mui-dropdown-button-option-disabled:hover,
.mui-dropdown-button-option:disabled:hover {
  background-color: transparent;
}

@media (prefers-color-scheme: dark) {
  .mui-dropdown-button-menu {
    background-color: #1f1f1f;
  }

  .mui-dropdown-button-option {
    color: rgba(255, 255, 255, 0.9);
  }

  .mui-dropdown-button-option:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .mui-dropdown-button-option-disabled,
  .mui-dropdown-button-option:disabled {
    color: rgba(255, 255, 255, 0.38);
  }
}

`;
