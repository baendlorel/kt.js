import { en } from './dict-en.js';
import { zh } from './dict-zh.js';

export const dict = window.location.href.includes('lang=en-US') ? en : zh;
