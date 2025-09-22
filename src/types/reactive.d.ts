type KRefBound = [HTMLKEnhancedElement, string];

type Transform<A = unknown, B = unknown> = (value: A) => B;

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
