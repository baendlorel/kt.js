import { deferedBranchDynamic } from 'defered-branch';
import { KValueSimple } from './simple.js';
import { KValue } from './with-transformer.js';
import { bindValueAsDate, bindValueAsNumber } from './binders.js';

type FullArgs<T, El extends HTMLKEnhancedElement> = [
  El,
  ChangeTriggerField | otherstring,
  Factory<T>,
  Factory<T>,
];
type Args<T, El extends HTMLKEnhancedElement> = PossibleRestArgs<FullArgs<T, El>>;
type BranchFn = <T, El extends HTMLKEnhancedElement>(initialValue: T, args: Args<T, El>) => void;
const trivial: AnyFn = (v) => v;

const branch = deferedBranchDynamic<BranchFn>()
  .add(
    (_, args) => args.length === 0,
    (initialValue, args) => {
      return new KValueSimple<any>(initialValue);
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

export function kvalue<T, El extends HTMLKEnhancedElement>(initialValue: T): KValue<T>;
export function kvalue<T, El extends HTMLKEnhancedElement>(
  initialValue: T,
  element: El,
  field: ChangeTriggerField | otherstring
): KValueSimple<T>;
export function kvalue<T, El extends HTMLKEnhancedElement>(
  initialValue: T,
  element: El,
  field: ChangeTriggerField | otherstring,
  vtoe?: Factory<T>,
  etov?: Factory<T>
): KValue<T>;

// | []
// | [El]
// | [El, ChangeTriggerField | otherstring]
// | [El, ChangeTriggerField | otherstring, Factory<T>]
// | [El, ChangeTriggerField | otherstring, Factory<T>, Factory<T>];
export function kvalue<T, El extends HTMLKEnhancedElement>(initialValue: T, ...args: Args<T, El>) {
  // & vtoe is trivial means etov is also trivial
  if (vtoe === trivial) {
    const kv = new KValueSimple<T>(initialValue);
    kv.bindChange(element, field);
    return;
  }
}
