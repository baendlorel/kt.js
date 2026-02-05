import type { KTReactive } from './index.js';

interface KTEffectOptions {
  lazy: boolean;

  scheduler: (job: () => void) => void;

  onStop: () => void;

  onCleanup: () => void;

  debugName: string;
}

export function effect(
  effectFn: () => void,
  reactives: Array<KTReactive<any>>,
  options?: Partial<KTEffectOptions>,
): void {
  const scheduler = options?.scheduler;
  const run = scheduler ? () => scheduler(effectFn) : effectFn;
  for (let i = 0; i < reactives.length; i++) {
    reactives[i].addOnChange(run);
  }
}
