import { KValueSimple } from './simple.js';
import { toNumber, trivial } from './transformers.js';
import { KValue } from './normal.js';

/**
 * Special values of `input.type`:
 * - date: `valueAsDate` -> Date but only ymd part
 * - time: `valueAsDate` -> Date but only hms part
 * - week: `valueAsDate` -> Date, the 1st date of the week
 * - month: `valueAsDate` -> Date, the 1st date of the month
 * - datetime-local: `valueAsDate` NOT SUPPORTED!
 * - number: `valueAsNumber` -> number
 */

/**
 * Use this after checking the `element.type`;
 */
export let bindValueAsNumber = (
  initialValue: number,
  element: HTMLKEnhancedElement<'input'>
): KValueSimple<number> => {
  if ('valueAsNumber' in element) {
    bindValueAsNumber = (initialValue: number, element: HTMLKEnhancedElement<'input'>) => {
      return new KValueSimple<number>(initialValue).bindChange(element, 'valueAsNumber');
    };
  } else {
    bindValueAsNumber = (initialValue: number, element: HTMLKEnhancedElement<'input'>) => {
      return new KValue<number>(initialValue, trivial, toNumber).bindChange(element, 'value');
    };
  }
  return bindValueAsNumber(initialValue, element);
};

/**
 * Use this after checking the `element.type`;
 */
export let bindValueAsDate = (
  initialValue: Date,
  element: HTMLKEnhancedElement<'input'>
): KValueSimple<Date> => {
  if ('valueAsDate' in element) {
    bindValueAsDate = (initialValue: Date, element: HTMLKEnhancedElement<'input'>) => {
      return new KValueSimple<Date>(initialValue).bindChange(element, 'valueAsNumber');
    };
  } else {
    // ! Cannot help but we have to throw here
    bindValueAsDate = (_: Date, element: HTMLKEnhancedElement<'input'>) => {
      throw new TypeError(
        `[__NAME__:bindValueAsDate] element.type="${element.type}" does not support valueAsDate, please give 'vtoe' and 'etov' explicitly.`
      );
    };
  }
  return bindValueAsDate(initialValue, element);
};
