import { $emptyFn } from '@ktjs/shared';
import type { KTReactive } from './index.js';

interface KTEffectOptions {
  lazy: boolean;
  onCleanup: () => void;
  debugName: string;
}

/**
 * Register a reactive effect with options.
 * @param effectFn The effect function to run when dependencies change
 * @param reactives The reactive dependencies
 * @param options Effect options: lazy, onCleanup, debugName
 * @returns stop function to remove all listeners
 */
export function effect(effectFn: () => void, reactives: Array<KTReactive<any>>, options?: Partial<KTEffectOptions>) {
  const { lazy = false, onCleanup = $emptyFn, debugName = '' } = Object(options);

  let active = true;

  const run = () => {
    if (!active) {
      return;
    }

    // cleanup before rerun
    onCleanup();

    try {
      effectFn();
    } catch (err) {
      $debug('effect error:', debugName, err);
    }
  };

  // subscribe to dependencies
  for (let i = 0; i < reactives.length; i++) {
    reactives[i].addOnChange(run);
  }

  // auto run unless lazy
  if (!lazy) {
    run();
  }

  // stop function
  return () => {
    if (!active) {
      return;
    }
    active = false;

    for (let i = 0; i < reactives.length; i++) {
      reactives[i].removeOnChange(run);
    }

    // final cleanup
    onCleanup();
  };
}
