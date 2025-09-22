type KValueSimpleBoundTuple = [HTMLKEnhancedInputElement, ChangeTriggerField | otherstring];
type KValueBoundTuple<VToE = AnyFn, EToV = AnyFn> = [...KValueSimpleBoundTuple, VToE, EToV];

type TransformTo<A> = (value: unknown) => A;
type TransformFrom<A> = (value: A) => unknown;
