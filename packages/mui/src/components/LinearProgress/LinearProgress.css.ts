import { injectGlobal } from '@emotion/css';

injectGlobal`
/* LinearProgress Component Styles - Mimics MUI LinearProgress */

.mui-linear-progress {
  position: relative;
  display: block;
  width: 100%;
  height: 4px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.12);
  border-radius: 2px;
}

.mui-linear-progress-bar {
  height: 100%;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
}

/* Determinate variant */
.mui-linear-progress-determinate .mui-linear-progress-bar {
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Indeterminate variant animation */
.mui-linear-progress-indeterminate .mui-linear-progress-bar {
  width: 100%;
  animation: mui-linear-progress-indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

@keyframes mui-linear-progress-indeterminate {
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
}

/* Color variants */
.mui-linear-progress-primary .mui-linear-progress-bar {
  background-color: rgb(25, 118, 210);
}

.mui-linear-progress-secondary .mui-linear-progress-bar {
  background-color: rgb(156, 39, 176);
}

.mui-linear-progress-error .mui-linear-progress-bar {
  background-color: rgb(211, 47, 47);
}

.mui-linear-progress-warning .mui-linear-progress-bar {
  background-color: rgb(237, 108, 2);
}

.mui-linear-progress-info .mui-linear-progress-bar {
  background-color: rgb(2, 136, 209);
}

.mui-linear-progress-success .mui-linear-progress-bar {
  background-color: rgb(46, 125, 50);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .mui-linear-progress {
    background-color: rgba(255, 255, 255, 0.12);
  }

  .mui-linear-progress-primary .mui-linear-progress-bar {
    background-color: rgb(144, 202, 249);
  }

  .mui-linear-progress-secondary .mui-linear-progress-bar {
    background-color: rgb(206, 147, 216);
  }

  .mui-linear-progress-error .mui-linear-progress-bar {
    background-color: rgb(244, 67, 54);
  }

  .mui-linear-progress-warning .mui-linear-progress-bar {
    background-color: rgb(255, 152, 0);
  }

  .mui-linear-progress-info .mui-linear-progress-bar {
    background-color: rgb(41, 182, 246);
  }

  .mui-linear-progress-success .mui-linear-progress-bar {
    background-color: rgb(102, 187, 106);
  }
}

`;
