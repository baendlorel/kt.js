import { KValueSimple } from './simple.js';
import { KValue } from './normal.js';
import { bindValueAsDate, bindValueAsNumber } from './binders.js';

const autoBind = (initialValue: any, el: HTMLKEnhancedElement) => {
  switch (el.tagName) {
    case 'input': {
      const elementType = (el as HTMLKEnhancedElement<'input'>).type;
      if (elementType === 'number') {
        return bindValueAsNumber(initialValue as number, el as HTMLKEnhancedElement<'input'>);
      }

      if (elementType === 'checkbox') {
        return new KValueSimple<boolean>(Boolean(initialValue)).bindChange(el, 'checked');
      }

      if (elementType === 'radio') {
        return new KValueSimple<string>(String(initialValue)).bindChange(el, 'value');
      }

      if (
        elementType === 'date' ||
        elementType === 'time' ||
        elementType === 'week' ||
        elementType === 'month'
      ) {
        return bindValueAsDate(initialValue as Date, el as HTMLKEnhancedElement<'input'>);
      }

      // & fallback to value
      return new KValueSimple<string>(String(initialValue)).bindChange(el, 'value');
    }
    case 'select': {
      return new KValueSimple<string>(String(initialValue)).bindChange(el, 'value');
    }
    case 'textarea': {
      return new KValueSimple<string>(String(initialValue)).bindChange(el, 'value');
    }
    default:
      throw new TypeError(
        `[__NAME__:kvalue] Cannot automically bind field on <${el.tagName}>, please specify the field manually(you can also provide vtoe and etov transformers).`
      );
  }
};

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
