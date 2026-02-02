import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { TextField } from '@ktjs/mui';

export function MuiTextFieldDemo() {
  const outputText = (<div class="output-text">Type something...</div>) as HTMLDivElement;

  const handleInput = (value: string) => {
    outputText.textContent = value ? `You typed: ${value}` : 'Type something...';
  };

  return (
    <div class="demo-section">
      <h2>TextField Component</h2>
      <p class="description">Text fields let users enter and edit text.</p>

      <div class="textfield-grid">
        <TextField label="多行" size="small" multiline rows={4} />

        <TextField label="Standard" placeholder="Enter text..." kt:input={handleInput} />
        <TextField label="Required Field" required />
        <TextField label="Disabled" disabled value="Cannot edit this" />
        <TextField label="Error State" error helperText="This field has an error" />
        <TextField label="With Helper" helperText="Some helpful text" />
        <TextField label="Password" type="password" value="secret123" />
        <TextField label="Email" type="email" placeholder="your@email.com" />
        <TextField label="Small Size" size="small" />
        <TextField label="readonly" readonly value="cannot modify" />
        <TextField size="small" placeholder="ssdf" />
      </div>

      <div style="margin-top: 20px;">
        <TextField label="Full Width" fullWidth placeholder="This takes full width" />
      </div>

      <div style="margin-top: 20px;">
        <TextField label="Multiline" multiline rows={4} placeholder="Enter multiple lines..." />
      </div>

      {outputText}
    </div>
  );
}