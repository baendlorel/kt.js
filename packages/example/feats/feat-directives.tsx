import { ref } from 'kt.js';

function KIf() {
  const show = ref(false);
  setTimeout(() => {
    show.value = true;
  }, 3000);

  return <div k-if={show}>KIf works!</div>;
}

export const FeatDirectives = () => {
  return (
    <div>
      <h2>feat-directives</h2>
      <KIf />
    </div>
  );
};
