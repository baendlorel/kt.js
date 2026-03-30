// Use microqueue to schedule the flush of pending reactions

import type { KTRef } from './ref.js';

const reactiveToOldValue = new Map<KTRef<any>, any>();

let scheduled = false;

export const markMutation = (reactive: KTRef<any>) => {
  if (!reactiveToOldValue.has(reactive)) {
    // @ts-expect-error accessing protected property
    reactiveToOldValue.set(reactive, reactive._value);

    // # schedule by microqueue
    if (scheduled) {
      return;
    }

    scheduled = true;
    Promise.resolve().then(() => {
      scheduled = false;
      reactiveToOldValue.forEach((oldValue, reactive) => {
        try {
          // @ts-expect-error accessing protected property
          reactive._changeHandlers.forEach((handler) => handler(reactive.value, oldValue));
        } catch (error) {
          $error('KTScheduler:', error);
        }
      });
      reactiveToOldValue.clear();
    });
  }
};
