import '@ktjs/core/jsx';

type DescriptionVariant = 'default' | 'subtle';

type DescriptionProps = {
  children?: unknown;
  variant?: DescriptionVariant;
};

const variantClassMap: Record<DescriptionVariant, string> = {
  default: 'description',
  subtle: 'description description--subtle',
};

export function Description({ children, variant = 'default' }: DescriptionProps) {
  return <p class={variantClassMap[variant]}>{children}</p>;
}
