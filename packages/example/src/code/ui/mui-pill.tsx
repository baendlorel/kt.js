import { Pill } from '@ktjs/mui';

export function PillExample() {
  return (
    <div>
      <Pill label="Primary" color="primary" />
      <Pill label="Closable" color="error" on:delete={() => console.log('deleted')} />
    </div>
  );
}
