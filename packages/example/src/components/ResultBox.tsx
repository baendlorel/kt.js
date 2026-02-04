import '@ktjs/core/jsx';

type ResultBoxProps = {
  children?: unknown;
};

export function ResultBox({ children }: ResultBoxProps) {
  return <div class="output-text">{children}</div>;
}
