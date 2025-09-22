import { KValueSimple } from './simple.js';
import { KValue } from './normal.js';

/**
 * Create a reactive value that can be bound to an element's value or other properties.
 * - this version needs `vtoe` and `etov` transformers to convert value between element and value
 * - the binding is valid **if and only if** when element's field can trigger a change event.
 * @param initialValue the initial value
 * @returns when vtoe and etov are provided, return KValue<T>, otherwise return KValueSimple<T>
 */
export function kvalue<T>(initialValue: T) {
  return new KValue<T>(initialValue);
}

/**
 * Create a reactive value that can be bound to an element's value or other properties.
 * - the binding is valid **if and only if** when element's field can trigger a change event.
 * - No `vtoe` and `etov`, values are passed as they are. (Be aware of the elements like `<input type="number">`, their value's types might be different from `initialValue`)
 * @param initialValue the initial value
 * @returns when vtoe and etov are provided, return KValue<T>, otherwise return KValueSimple<T>
 */
export function kvalueSimple<T>(initialValue: T) {
  return new KValueSimple<T>(initialValue);
}
