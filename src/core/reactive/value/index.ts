import { deferedBranchDynamic } from 'defered-branch';
import { KValueSimple } from './simple.js';
import { KValue } from './normal.js';
import { bindValueAsDate, bindValueAsNumber } from './binders.js';
import { trivial } from './transformers.js';

type KValueReturn<T, E extends HTMLKEnhancedElement, Args extends any[]> =
  Args extends KValueArgs0<T, E>
    ? KValueSimple<T>
    : Args extends KValueArgs1<T, E>
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
      : Args extends KValueArgs3<T, E> // [E, string, Transform<T>]
        ? KValue<T>
        : KValue<string>; // * fallback

type BranchFn0 = <T extends any, E extends HTMLKEnhancedElement>(
  initialValue: T,
  args: KValueArgs0<T, E>
) => KValueReturn<T, E, KValueArgs0<T, E>>;

type BranchFn1 = <T extends any, E extends HTMLKEnhancedElement>(
  initialValue: T,
  args: KValueArgs1<T, E>
) => KValueReturn<T, E, KValueArgs1<T, E>>;

type BranchFn2 = <T extends any, E extends HTMLKEnhancedElement>(
  initialValue: T,
  args: KValueArgs2<T, E>
) => KValueReturn<T, E, KValueArgs2<T, E>>;

type BranchFn3 = <T extends any, E extends HTMLKEnhancedElement>(
  initialValue: T,
  args: KValueArgs3<T, E>
) => KValueReturn<T, E, KValueArgs3<T, E>>;

type BranchFn4 = <T extends any, E extends HTMLKEnhancedElement>(
  initialValue: T,
  args: KValueArgs4<T, E>
) => KValueReturn<T, E, KValueArgs4<T, E>>;

type BranchFn = BranchFn0 | BranchFn1 | BranchFn2 | BranchFn3 | BranchFn4;

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
          throw new TypeError(
            `[__NAME__:kvalue] Cannot automically bind field on <${el.tagName}>, please specify the field manually(you can also provide vtoe and etov transformers).`
          );
      }
    }
  )
  .add(
    // & need auto optimization
    (_, args) => args.length === 2,
    (initialValue, args) => {
      return new KValueSimple<string>(String(initialValue)).bindChange(
        args[0] as unknown as HTMLKEnhancedElement,
        args[1] as ChangeTriggerField | otherstring
      );
    }
  )
  .add(
    (_, args) => args.length === 3,
    (initialValue, args) => {
      return new KValue<string>(
        String(initialValue),
        args[3] as Transform<string>,
        trivial
      ).bindChange(args[0] as HTMLKEnhancedElement, args[1] as ChangeTriggerField | otherstring);
    }
  )
  .add(
    (_, args) => args.length === 4,
    (initialValue, args) => {
      return new KValue<string>(
        String(initialValue),
        args[3] as Transform<string>,
        trivial
      ).bindChange(args[0] as HTMLKEnhancedElement, args[1] as ChangeTriggerField | otherstring);
    }
  );

export function kvalue<T, E extends HTMLKEnhancedElement>(initialValue: T): KValueSimple<T>;
export function kvalue<T, E extends HTMLKEnhancedElement>(
  initialValue: T,
  element: E
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
  ...args: KValueArgs<T, E>
) {}
