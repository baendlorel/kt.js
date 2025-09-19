import { css } from '@emotion/css';
import { h, createApp } from 'kt.js';

import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';

const buttonCss = css`
  height: 40px;
  padding: 0 20px;
  border-radius: 20px;
  background: #61dafb;
  color: #fff;
  border: none;
  cursor: pointer;
`;
const container = h('div', { class: 'logo-container' }, [
  h('img', { src: typescriptLogo }),
  h('img', { src: viteLogo }),
  h('button', { class: buttonCss }, '测试按钮'),
]);

createApp(container);
