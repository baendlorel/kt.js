import { alert } from './alert';
import { confirm } from './confirm';
import { progress } from './progress';
import { prompt } from './prompt';
import { wait } from './wait';

export const dialog = Object.freeze({
  alert,
  confirm,
  wait,
  prompt,
  progress,
});
