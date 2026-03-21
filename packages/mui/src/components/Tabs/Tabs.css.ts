import { injectGlobal } from '@emotion/css';

void injectGlobal`
.mui-tabs-root {
  display: flex;
  width: 100%;
  min-height: 48px;
}

.mui-tabs-root.mui-tabs-orientation-vertical {
  min-height: 120px;
}

.mui-tabs-scroller {
  position: relative;
  display: flex;
  flex: 1;
  overflow: hidden;
}

.mui-tabs-list {
  position: relative;
  display: inline-flex;
  flex: 1;
  min-height: 48px;
}

.mui-tabs-centered .mui-tabs-list {
  justify-content: center;
}

.mui-tabs-orientation-vertical .mui-tabs-list {
  flex-direction: column;
  align-items: stretch;
}

.mui-tabs-variant-scrollable .mui-tabs-scroller {
  overflow-x: auto;
}

.mui-tabs-variant-scrollable.mui-tabs-orientation-vertical .mui-tabs-scroller {
  overflow-x: hidden;
  overflow-y: auto;
}

.mui-tabs-variant-fullWidth .mui-tab-root {
  flex: 1;
  max-width: none;
}

.mui-tab-root {
  position: relative;
  min-height: 48px;
  min-width: 90px;
  max-width: 360px;
  padding: 12px 16px;
  margin: 0;
  border: 0;
  background: transparent;
  color: rgba(0, 0, 0, 0.6);
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition:
    color 180ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 180ms cubic-bezier(0.4, 0, 0.2, 1);
}

.mui-tabs-orientation-vertical .mui-tab-root {
  justify-content: flex-start;
  text-transform: none;
  max-width: none;
}

.mui-tab-root:hover {
  background-color: rgba(25, 118, 210, 0.04);
}

.mui-tab-root:focus-visible {
  outline: none;
  background-color: rgba(25, 118, 210, 0.12);
}

.mui-tab-root.mui-tab-disabled,
.mui-tab-root:disabled {
  color: rgba(0, 0, 0, 0.38);
  cursor: default;
}

.mui-tab-root.mui-tab-disabled:hover,
.mui-tab-root:disabled:hover {
  background-color: transparent;
}

.mui-tab-root.mui-tab-selected {
  color: rgb(25, 118, 210);
}

.mui-tab-root.mui-tab-text-color-secondary.mui-tab-selected {
  color: rgb(156, 39, 176);
}

.mui-tab-root.mui-tab-text-color-inherit.mui-tab-selected {
  color: inherit;
}

.mui-tab-label {
  display: inline-flex;
  align-items: center;
}

.mui-tab-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-size: 1.25rem;
}

.mui-tab-has-icon {
  text-transform: none;
}

.mui-tabs-indicator {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  transform: translateX(0);
  transition:
    transform 220ms cubic-bezier(0.4, 0, 0.2, 1),
    width 220ms cubic-bezier(0.4, 0, 0.2, 1),
    height 220ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 120ms ease;
  opacity: 0;
  pointer-events: none;
}

.mui-tabs-indicator.mui-tabs-indicator-orientation-vertical {
  top: 0;
  right: 0;
  left: auto;
  bottom: auto;
  width: 2px;
  height: 0;
  transform: translateY(0);
}

.mui-tabs-indicator-color-primary {
  background-color: rgb(25, 118, 210);
}

.mui-tabs-indicator-color-secondary {
  background-color: rgb(156, 39, 176);
}

@media (prefers-color-scheme: dark) {
  .mui-tab-root {
    color: rgba(255, 255, 255, 0.7);
  }

  .mui-tab-root:hover {
    background-color: rgba(144, 202, 249, 0.12);
  }

  .mui-tab-root:focus-visible {
    background-color: rgba(144, 202, 249, 0.2);
  }

  .mui-tab-root.mui-tab-selected {
    color: rgb(144, 202, 249);
  }

  .mui-tab-root.mui-tab-text-color-secondary.mui-tab-selected {
    color: rgb(206, 147, 216);
  }

  .mui-tab-root.mui-tab-disabled,
  .mui-tab-root:disabled {
    color: rgba(255, 255, 255, 0.38);
  }

  .mui-tabs-indicator-color-primary {
    background-color: rgb(144, 202, 249);
  }

  .mui-tabs-indicator-color-secondary {
    background-color: rgb(206, 147, 216);
  }
}

`;
