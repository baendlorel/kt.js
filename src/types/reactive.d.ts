type KRefBound = [HTMLKEnhancedElement, string];

type Transform<A = any, B = any> = (value: A) => B;

type KValueArgs0<T, E extends HTMLKEnhancedElement, ElementValueType = string> = [];
type KValueArgs1<T, E extends HTMLKEnhancedElement, ElementValueType = string> = [E];
type KValueArgs2<T, E extends HTMLKEnhancedElement, ElementValueType = string> = [
  E,
  ChangeTriggerField | otherstring,
];
type KValueArgs3<T, E extends HTMLKEnhancedElement, ElementValueType = string> = [
  E,
  ChangeTriggerField | otherstring,
  Transform<T>,
];
// * Full version
type KValueArgs4<T, E extends HTMLKEnhancedElement, ElementValueType = string> = [
  E,
  ChangeTriggerField | otherstring,
  Transform<T>,
  Transform<ElementValueType, T>,
];
type KValueArgs<T, E extends HTMLKEnhancedElement, ElementValueType = string> =
  | KValueArgs0<T, E, ElementValueType>
  | KValueArgs1<T, E, ElementValueType>
  | KValueArgs2<T, E, ElementValueType>
  | KValueArgs3<T, E, ElementValueType>
  | KValueArgs4<T, E, ElementValueType>;
