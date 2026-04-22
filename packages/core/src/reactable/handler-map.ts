import type { ChangeListener } from './types.js';

// TODO 生命周期销毁使用，暂未设计
export class HandlerMap {
  private readonly changeHandlers = new Map<any, ChangeListener<any>>();
}
