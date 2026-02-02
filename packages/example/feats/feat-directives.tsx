import { ref } from 'kt.js';

function KIf() {
  const show = ref(false);
  console.log('KIf component rendered, wait for 2 second to show content.');
  setTimeout(() => {
    show.value = true;
  }, 2000);

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
