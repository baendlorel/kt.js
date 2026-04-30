import { createApp, link } from './app.js';

function init() {
  document.getElementById('app')!.appendChild(createApp());
  document.head.appendChild(link());
}
init();
