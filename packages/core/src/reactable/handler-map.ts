import type { ChangeHandler } from './types.js';

export class HandlerMap {
  private readonly changeHandlers = new Map<any, ChangeHandler<any>>();
}
