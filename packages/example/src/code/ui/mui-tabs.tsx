import { ref } from '@ktjs/core';
import { Tabs } from '@ktjs/mui';

export function TabsExample() {
  const value = ref('overview');

  return (
    <Tabs
      k-model={value}
      options={[
        { value: 'overview', label: 'Overview' },
        { value: 'files', label: 'Files' },
        { value: 'downloads', label: 'Downloads' },
      ]}
      indicatorColor="secondary"
    />
  );
}
