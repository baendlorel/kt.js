import { injectGlobal } from '@emotion/css';

injectGlobal`
.mui-bottom-navigation-root {
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  background-color: #fff;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.16);
}

.mui-bottom-navigation-action {
  flex: 1 1 0;
  min-width: 80px;
  max-width: 168px;
  border: 0;
  margin: 0;
  padding: 6px 12px 8px;
  background: transparent;
  color: rgba(0, 0, 0, 0.62);
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  transition:
    color 180ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 180ms cubic-bezier(0.4, 0, 0.2, 1);
}

.mui-bottom-navigation-action:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.mui-bottom-navigation-action:focus-visible {
  outline: none;
  background-color: rgba(0, 0, 0, 0.08);
}

.mui-bottom-navigation-action-selected {
  color: rgb(25, 118, 210);
}

.mui-bottom-navigation-action-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 24px;
  min-width: 20px;
  font-size: 1.5rem;
  line-height: 1;
}

.mui-bottom-navigation-action-label {
  display: inline-block;
  font-size: 0.75rem;
  line-height: 1;
  letter-spacing: 0.03333em;
  opacity: 0.72;
  transform: scale(0.88) translateY(2px);
  transition: all 0.16s cubic-bezier(0.4, 0, 0.2, 1);
}

.mui-bottom-navigation-show-labels .mui-bottom-navigation-action-label,
.mui-bottom-navigation-action-show-label .mui-bottom-navigation-action-label,
.mui-bottom-navigation-action-selected .mui-bottom-navigation-action-label {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.mui-bottom-navigation-action-disabled,
.mui-bottom-navigation-action:disabled {
  color: rgba(0, 0, 0, 0.32);
  cursor: default;
}

.mui-bottom-navigation-action-disabled:hover,
.mui-bottom-navigation-action:disabled:hover {
  background-color: transparent;
}

@media (prefers-color-scheme: dark) {
  .mui-bottom-navigation-root {
    background-color: #1f1f1f;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
  }

  .mui-bottom-navigation-action {
    color: rgba(255, 255, 255, 0.72);
  }

  .mui-bottom-navigation-action:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .mui-bottom-navigation-action:focus-visible {
    background-color: rgba(255, 255, 255, 0.14);
  }

  .mui-bottom-navigation-action-selected {
    color: rgb(144, 202, 249);
  }

  .mui-bottom-navigation-action-disabled,
  .mui-bottom-navigation-action:disabled {
    color: rgba(255, 255, 255, 0.38);
  }
}

`;
