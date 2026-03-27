import { KTReactive } from './reactive.js';

/**
 * ! Its very complicated and may not be implemented.
 *
 * @issue How could `computed(() => a.value ? b.value : c.value)` to be tracked correctly?
 */
export const $startTracking = () => {
  const reactives = new Set<KTReactive<unknown>>();
  const read = <T extends KTReactive<unknown>>(reactiveObj: T) => reactives.add(reactiveObj);
  const end = (handler: (newValue: unknown, unknown: any) => void) => {
    reactives.forEach((r) => r.addOnChange(handler));
    reactives.clear();
  };

  return { read, end };
};
