import { ref } from '@ktjs/core';
import { DropdownButton } from '@ktjs/mui';

export function DropdownButtonExample() {
  const selectedAction = ref('none');

  return (
    <DropdownButton
      label="Quick Actions"
      options={[
        { value: 'open', label: 'Open File' },
        { value: 'save', label: 'Save' },
        { value: 'delete', label: 'Delete', disabled: true },
      ]}
      on:select={(value) => {
        selectedAction.value = value;
      }}
    />
  );
}
