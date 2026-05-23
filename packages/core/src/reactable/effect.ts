import type { KTReactive } from './reactive.js';
import { $emptyFn } from '@ktjs/shared';
import { isOwnerDead, own } from '../common/owner.js';

interface KTEffectOptions {
  lazy: boolean;
  onCleanup: () => void;
  debugName: string;
  owner: Node;
}

/**
 * Register a reactive effect with options.
 * @param effectFn The effect function to run when dependencies change
 * @param reactives The reactive dependencies
 * @param options Effect options: lazy, onCleanup, debugName
 * @returns stop function to remove all listeners
 */
export function effect(effectFn: () => void, reactives: Array<KTReactive<any>>, options?: Partial<KTEffectOptions>) {
  const { lazy = false, onCleanup = $emptyFn, debugName = '', owner } = Object(options);

  let active = true;

  const run = () => {
    if (!active || (owner && isOwnerDead(owner))) {
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
    reactives[i].listen(run, owner ? { owner } : undefined);
  }

  // auto run unless lazy
  if (!lazy) {
    run();
  }

  // stop function
  const stop = () => {
    if (!active) {
      return;
    }
    active = false;

    for (let i = 0; i < reactives.length; i++) {
      reactives[i].unlisten(run);
    }

    // final cleanup
    onCleanup();
  };

  if (owner) {
    own(owner, stop);
  }

  return stop;
}
