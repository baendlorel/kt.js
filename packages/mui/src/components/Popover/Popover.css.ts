import { injectGlobal } from '@emotion/css';

injectGlobal`
.mui-popover-root {
  position: fixed;
  inset: 0;
  z-index: 1300;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 180ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 0ms linear 180ms;
}

.mui-popover-rendered {
  visibility: visible;
}

.mui-popover-open {
  opacity: 1;
  visibility: visible;
  transition-delay: 0ms;
}

.mui-popover-paper {
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  min-width: 16px;
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 32px);
  overflow: auto;
  background: #fff;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  pointer-events: auto;
  outline: 0;
  transform-origin: top left;
  opacity: 0;
  transform: translateY(8px) scale(0.98);
  transition:
    opacity 180ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 180ms cubic-bezier(0.2, 0, 0, 1);
  padding: 8px 0;
}

.mui-popover-open .mui-popover-paper {
  opacity: 1;
  transform: translateY(0) scale(1);
}

@media (prefers-color-scheme: dark) {
  .mui-popover-paper {
    background: #1f1f1f;
    color: rgba(255, 255, 255, 0.9);
  }
}

`;
