import type { ChangeListener } from './types.js';

export class HandlerMap {
  private readonly changeHandlers = new Map<any, ChangeListener<any>>();
}
