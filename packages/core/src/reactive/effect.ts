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
export function effect(
  effectFn: () => void,
  reactives: Array<KTReactive<any>>,
  options: Partial<KTEffectOptions> = {
    lazy: false,
    onCleanup: $emptyFn,
    debugName: '',
  },
) {
  const opts: KTEffectOptions = {
    lazy: false,
    onCleanup: $emptyFn,
    debugName: '',
    ...options,
  };

  let active = true;

  const run = () => {
    if (!active) {
      return;
    }

    // cleanup before rerun
    opts.onCleanup();

    try {
      effectFn();
    } catch (err) {
      console.error('[ktjs effect error]', opts.debugName, err);
    }
  };

  // subscribe to dependencies
  const unsubscribers = reactives.map((r) => r.subscribe(run));

  // auto run unless lazy
  if (!opts.lazy) {
    run();
  }

  // stop function
  return () => {
    if (!active) {
      return;
    }
    active = false;

    // unsubscribe all
    for (const unsub of unsubscribers) {
      unsub();
    }

    // final cleanup
    opts.onCleanup();
  };
}
