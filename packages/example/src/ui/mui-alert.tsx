import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Alert, Button } from '@ktjs/mui';

export function MuiAlertDemo() {
  const alertContainer = ref<HTMLDivElement>();
  let alertCount = 0;

  const addAlert = (severity: 'success' | 'info' | 'warning' | 'error') => {
    alertCount++;
    const alert = Alert({
      severity,
      children: `This is a ${severity} alert #${alertCount}!`,
      'on:close': () => alert.remove(),
    });
    alertContainer.value?.appendChild(alert);
  };

  return (
    <div class="demo-section">
      <h2>Alert Component</h2>
      <p class="description">Alerts provide contextual feedback messages.</p>

      <div class="button-group">
        <Button variant="outlined" color="success" on:click={() => addAlert('success')}>
          Add Success Alert
        </Button>
        <Button variant="outlined" color="info" on:click={() => addAlert('info')}>
          Add Info Alert
        </Button>
        <Button variant="outlined" color="warning" on:click={() => addAlert('warning')}>
          Add Warning Alert
        </Button>
        <Button variant="outlined" color="error" on:click={() => addAlert('error')}>
          Add Error Alert
        </Button>
      </div>

      <div ref={alertContainer} style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
        <Alert severity="success">This is a success alert with an icon!</Alert>
        <Alert severity="info" variant="filled">
          This is a filled info alert!
        </Alert>
        <Alert severity="warning" variant="outlined">
          This is an outlined warning alert!
        </Alert>
        <Alert severity="error" on:close={() => console.log('Alert closed')}>
          This alert can be closed!
        </Alert>
      </div>
    </div>
  );
}
