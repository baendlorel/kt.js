import { deferedBranchDynamic } from 'defered-branch';
import { KValuePure } from './pure.js';
import { KValue } from './with-transformer.js';

type Args<T, El> = PossibleRestArgs<[El, ChangeTriggerField | otherstring, Factory<T>, Factory<T>]>;
type BranchFn = <T, El>(initialValue: T, args: Args<T, El>) => void;
const trivial: AnyFn = (v) => v;

const branch = deferedBranchDynamic<BranchFn>()
  .add(
    (_, args) => true,
    (initialValue, args) => args.length === 0
  )
  .add(
    (_, args) => true,
    (args: Args) => args.length === 0
  );

export function kvalue<T, El extends HTMLKEnhancedElement>(initialValue: T): KValue<T>;
export function kvalue<T, El extends HTMLKEnhancedElement>(
  initialValue: T,
  element: El,
  field: ChangeTriggerField | otherstring
): KValuePure<T>;
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
    const kv = new KValuePure<T>(initialValue);
    kv.bindChange(element, field);
    return;
  }
}
