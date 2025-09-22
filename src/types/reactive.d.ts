type KRefBound = [HTMLKEnhancedElement, string];

type TransformTo<A> = (value: unknown) => A;
type TransformFrom<A> = (value: A) => unknown;
