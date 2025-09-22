import { deferedBranchDynamic } from 'defered-branch';
import { KValueSimple } from './simple.js';
import { KValue } from './normal.js';
import { bindValueAsDate, bindValueAsNumber } from './binders.js';

type KValueReturn<T, E extends HTMLKEnhancedElement, Args extends unknown[]> = Args extends []
  ? KValueSimple<T>
  : Args extends [E]
    ? E extends HTMLKEnhancedElement<infer TagName>
      ? TagName extends 'input'
        ? T extends number
          ? KValueSimple<number>
          : T extends Date
            ? KValueSimple<Date>
            : KValueSimple<string>
        : TagName extends 'select'
          ? KValueSimple<string>
          : TagName extends 'textarea'
            ? KValueSimple<string>
            : KValue<string> // * fallback
      : KValue<string> // * fallback
    : Args extends [E, string, Transform<T>]
      ? KValue<T>
      : KValue<string>; // * fallback

type FullArgs<T, E extends HTMLKEnhancedElement, EValueType = string> = [
  E,
  ChangeTriggerField | otherstring,
  Transform<T>,
  Transform<EValueType, T>,
];

type PossibleArgs<T, E extends HTMLKEnhancedElement> = PossibleRestArgs<FullArgs<T, E>>;

type BranchFn = <T, E extends HTMLKEnhancedElement, Args extends PossibleArgs<T, E>>(
  initialValue: T,
  args: Args
) => KValueReturn<T, E, Args>;

const branch = deferedBranchDynamic<BranchFn>()
  .add(
    (_, args) => args.length === 0,
    (initialValue, args) => {
      return new KValueSimple<string>(initialValue);
    }
  )
  .add(
    // & need auto optimization
    (_, args) => args.length === 1,
    (initialValue, args) => {
      const el = args[0] as unknown as HTMLKEnhancedElement;
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
          break;
      }
    }
  )
  .add(
    // & need auto optimization
    (_, args) => args.length === 2,
    (initialValue, args) => args.length === 0
  )
  .add(
    (_, args) => args.length === 3,
    (initialValue, args) => args.length === 0
  )
  .add(
    (_, args) => args.length === 4,
    (initialValue, args) => args.length === 0
  );

export function kvalue<T, E extends HTMLKEnhancedElement>(initialValue: T): KValue<T>;
export function kvalue<T, E extends HTMLKEnhancedElement>(
  initialValue: T,
  element: E,
  field: ChangeTriggerField | otherstring
): KValueSimple<T>;
export function kvalue<T, E extends HTMLKEnhancedElement, EValueType = string>(
  initialValue: T,
  element: E,
  field: ChangeTriggerField | otherstring,
  vtoe?: Transform<T>,
  etov?: Transform<EValueType, T>
): KValue<T>;

export function kvalue<T, E extends HTMLKEnhancedElement>(
  initialValue: T,
  ...args: PossibleArgs<T, E>
) {}
