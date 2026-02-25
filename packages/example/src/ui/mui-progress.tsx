import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { LinearProgress, Button } from '@ktjs/mui';

export function MuiProgressDemo() {
  const value = ref(0);

  let intervalId: number | null = null;

  const startProgress = () => {
    if (intervalId !== null) {
      return;
    }

    value.value = 0;
    intervalId = window.setInterval(() => {
      value.value += 5;
      if (value.value >= 100) {
        window.clearInterval(intervalId!);
        intervalId = null;
      }
    }, 200);
  };

  const resetProgress = () => {
    if (intervalId !== null) {
      window.clearInterval(intervalId);
      intervalId = null;
    }
    value.value = 0;
  };

  return (
    <div class="demo-section">
      <h2>LinearProgress Component</h2>
      <p class="description">Progress indicators show the completion status of an operation.</p>

      <div style="margin: 20px 0;">
        (<LinearProgress value={value} variant="determinate" />)
      </div>

      <div class="button-group">
        <Button variant="contained" on:click={startProgress}>
          Start Progress
        </Button>
        <Button variant="outlined" on:click={resetProgress}>
          Reset
        </Button>
      </div>

      <div style="margin-top: 20px;">
        <h3>Indeterminate (Loading)</h3>
        <LinearProgress />
      </div>
    </div>
  );
}
