// Use microqueue to schedule the flush of pending reactions

import { KTRef } from './ref.js';

const reactiveToOldValue = new Map<KTRef<any>, any>();

let scheduled = false;

export const addReaction = (reactive: KTRef<any>, oldValue: any) => {
  if (!reactiveToOldValue.has(reactive)) {
    reactiveToOldValue.set(reactive, oldValue);
    schedule();
  }
};

const schedule = () => {
  if (!scheduled) {
    scheduled = true;
    Promise.resolve().then(() => {
      scheduled = false;
      reactiveToOldValue.forEach((oldValue, reactive) => {
        // @ts-expect-error accessing protected property
        reactive._changeHandlers.forEach((handler) => handler(reactive.value, oldValue));
      });
      reactiveToOldValue.clear();
    });
  }
};
