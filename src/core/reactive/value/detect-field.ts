/**
 * Special values of `input.type`:
 * - date: `valueAsDate` -> Date but only ymd part
 * - time: `valueAsDate` -> Date but only hms part
 * - week: `valueAsDate` -> Date, the 1st date of the week
 * - month: `valueAsDate` -> Date, the 1st date of the month
 * - number: `valueAsNumber` -> number
 *
 * [WARN] datetime-local: `valueAsDate` NOT SUPPORTED!
 */
export function detectOnChangeField(element: HTMLKEnhancedInputElement): ChangeTriggerField {
  switch (element.type) {
    case 'date':
    case 'time':
    case 'week':
    case 'month':
      return 'valueAsDate';
    case 'number':
    case 'range':
      return 'valueAsNumber';
    default:
      return 'value';
  }
}
