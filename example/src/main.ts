import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
// import { h, createApp } from '../../src/index.js';
import { css } from '@emotion/css';
import { h, createApp } from 'kt.js';

const buttonCss = css`
  height: 40px;
  padding: 0 20px;
  border-radius: 20px;
  background: #61dafb;
  color: #000;
  border: none;
  cursor: pointer;
`;

const container = h('div', { class: 'logo-container' }, [
  h('img', { src: typescriptLogo }),
  h('img', { src: viteLogo }),
  h('button', { class: buttonCss }, '测试按钮'),
]);

createApp(container);
