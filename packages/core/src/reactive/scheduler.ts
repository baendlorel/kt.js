// Use microqueue to schedule the flush of pending reactions

import type { KTReactive } from '../types/reactive.js';
import type { Publicify } from '../types/type-utils.js';

const reactiveToOldValue = new Map<KTReactive<any>, any>();

let scheduled = false;

export const addReaction = (reactive: KTReactive<any>, oldValue: any) => {
  if (!reactiveToOldValue.has(reactive)) {
    reactiveToOldValue.set(reactive, oldValue);
  }
};

const schedule = () => {
  if (!scheduled) {
    scheduled = true;
    Promise.resolve().then(() => {
      scheduled = false;
      reactiveToOldValue.forEach((reactive: any, oldValue) => {
        reactive._onChanges.forEach((handler) => {
          handler(reactive._value, oldValue);
        });
      });
      reactiveToOldValue.clear();
    });
  }
};
