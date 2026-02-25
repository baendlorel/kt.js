import { ref } from '@ktjs/core';
import { Badge, Button } from '@ktjs/mui';

export function BadgeExample() {
  const unread = ref(5);

  return (
    <Badge badgeContent={unread} color="error">
      <Button variant="outlined">Inbox</Button>
    </Badge>
  );
}
