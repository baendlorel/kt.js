import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { TextField } from '@ktjs/mui';

export function MuiTextFieldDemo() {
  const inputValueRef = ref('Type something...');

  return (
    <div class="demo-section">
      <h2>TextField Component</h2>
      <p class="description">Text fields let users enter and edit text.</p>

      <div class="textfield-grid">
        <TextField label="多行" size="small" multiline rows={4} />
        <TextField k-model={inputValueRef} label="Standard" placeholder="Enter text..." />
        <TextField label="Required Field" required />
      </div>
      <div class="demo-result" style="margin-bottom: 32px">
        Input Value: {inputValueRef}
      </div>
      <div class="textfield-grid">
        <TextField label="Disabled" disabled value="Cannot edit this" />
        <TextField label="Error State" error helperText="This field has an error" />
        <TextField label="With Helper" helperText="Some helpful text" />
        <TextField label="Password" type="password" value="secret123" />
        <TextField label="Email" type="email" placeholder="your@email.com" />
        <TextField label="Small Size" size="small" />
        <TextField label="readonly" readOnly value="cannot modify" />
        <TextField size="small" placeholder="ssdf" />
      </div>

      <div class="demo-mt">
        <TextField label="Full Width" fullWidth placeholder="This takes full width" />
      </div>

      <div class="demo-mt">
        <TextField label="Multiline" multiline rows={4} placeholder="Enter multiple lines..." />
      </div>
    </div>
  );
}
