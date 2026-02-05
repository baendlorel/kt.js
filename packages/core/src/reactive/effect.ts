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
  const run = () => {};
}
