import { ref } from '@ktjs/core';
import { Switch } from '@ktjs/mui';

export function SwitchExample() {
  const enabled = ref(false);

  return <Switch k-model={enabled} label="Auto Save" color="success" />;
}
