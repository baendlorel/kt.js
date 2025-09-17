// Code Language: TypeScript
// 引入样式
import './css/style.css';

// 引入模块
import { applyCss } from '../src/index.js';
import app from './app.js';

applyCss();

app.mount(document.body);
