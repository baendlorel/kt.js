import { bindArgs } from '@/utils/bind-args.js';
import { h } from './h/index.js';

// todo 根据各个元素的使用情况，创建alias，比如div(attr,content)。并且input还可以直接写checkbox,radio什么什么的
export const div = bindArgs(h, 'div');
export const span = bindArgs(h, 'span');

export const input = bindArgs(h, 'input');

export const button = bindArgs(h, 'button');

export const label = bindArgs(h, 'label');
