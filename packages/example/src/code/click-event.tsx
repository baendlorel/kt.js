export function Demo() {
  const onClick = () => {
    alert('Button clicked!');
  };
  return <button on:click={onClick}>Clike Me</button>;
}
