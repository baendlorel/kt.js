import { KTHTMLElement, ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import {
  Alert,
  Button,
  TextField,
  Dialog,
  LinearProgress,
  RadioGroup,
  Select,
  FormLabel,
  // Icons
  HomeIcon,
  DeleteIcon,
  ContentCopyIcon,
  DownloadIcon,
  MenuIcon,
} from '@ktjs/mui';
import { KTMuiDialog } from 'node_modules/@ktjs/mui/src/Dialog/Index.js';

/**
 * MUI Components Demo - Showcases all available components from @ktjs/mui
 */
export function FeatMui() {
  // Button Demo
  function createButtonDemo() {
    const clickCount = ref<number>(0);
    const counterText = (<span>0</span>) as HTMLSpanElement;

    const handleClick = () => {
      clickCount.value++;
      counterText.textContent = String(clickCount.value);
    };

    return (
      <div class="demo-section">
        <h2>Button Component</h2>
        <p class="description">Buttons come in different variants, colors, and sizes. Click count: {counterText}</p>

        <div class="button-group">
          <h3>Variants</h3>
          <Button variant="contained" color="primary" on:click={handleClick}>
            Contained
          </Button>
          <Button variant="outlined" color="primary" on:click={handleClick}>
            Outlined
          </Button>
          <Button variant="text" color="primary" on:click={handleClick}>
            Text
          </Button>
        </div>

        <div class="button-group">
          <h3>Colors</h3>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
        </div>

        <div class="button-group">
          <h3>Sizes</h3>
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </div>

        <div class="button-group">
          <h3>With Icons</h3>
          <Button variant="contained" startIcon={<HomeIcon />}>
            Home
          </Button>
          <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="outlined" endIcon={<DownloadIcon />}>
            Download
          </Button>
          <Button variant="contained" iconOnly>
            <MenuIcon />
          </Button>
        </div>

        <div class="button-group">
          <h3>States</h3>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" fullWidth>
            Full Width
          </Button>
        </div>
      </div>
    );
  }

  // Alert Demo
  function createAlertDemo() {
    const alertContainer = ref<HTMLDivElement>();
    let alertCount = 0;

    const addAlert = (severity: 'success' | 'info' | 'warning' | 'error') => {
      alertCount++;
      const alert = Alert({
        severity,
        children: `This is a ${severity} alert #${alertCount}!`,
        onClose: () => alert.remove(),
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
          <Alert severity="error" onClose={() => console.log('Alert closed')}>
            This alert can be closed!
          </Alert>
        </div>
      </div>
    );
  }

  // TextField Demo
  function createTextFieldDemo() {
    const outputText = (<div class="output-text">Type something...</div>) as KTHTMLElement<HTMLDivElement>;

    const handleInput = (value: string) => {
      outputText.textContent = value ? `You typed: ${value}` : 'Type something...';
    };

    return (
      <div class="demo-section">
        <h2>TextField Component</h2>
        <p class="description">Text fields let users enter and edit text.</p>

        <div class="textfield-grid">
          <TextField label="Standard" placeholder="Enter text..." mui:input={handleInput} />
          <TextField label="Required Field" required />
          <TextField label="Disabled" disabled value="Cannot edit this" />
          <TextField label="Error State" error helperText="This field has an error" />
          <TextField label="With Helper" helperText="Some helpful text" />
          <TextField label="Password" type="password" value="secret123" />
          <TextField label="Email" type="email" placeholder="your@email.com" />
          <TextField label="Small Size" size="small" />
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

  // Dialog Demo
  function createDialogDemo() {
    const dialogRef = ref<KTMuiDialog>();

    const openDialog = () => {
      dialogRef.value.toggle(true);
    };

    const handleClose = () => {
      console.log('Dialog closed');
      dialogRef.value.toggle(false);
    };

    return (
      <div class="demo-section">
        <h2>Dialog Component</h2>
        <p class="description">Dialogs inform users about a task and can contain critical information.</p>

        <Button variant="contained" on:click={openDialog}>
          Open Dialog
        </Button>

        <Dialog ref={dialogRef} title="Dialog Title" mui:close={handleClose}>
          <div style="padding: 20px;">
            <p>This is a dialog with some content inside.</p>
            <p style="margin-top: 12px;">You can close it by clicking outside or the close button.</p>

            <div style="margin-top: 24px; display: flex; gap: 12px; justify-content: flex-end;">
              <Button variant="text" on:click={() => dialogRef.value.toggle(false)}>
                Cancel
              </Button>
              <Button
                variant="contained"
                on:click={() => {
                  alert('Action confirmed!');
                  dialogRef.value.toggle(false);
                }}
              >
                Confirm
              </Button>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }

  // LinearProgress Demo
  function createProgressDemo() {
    const progress = ref<number>(0);
    const progressBar = LinearProgress({ progress: 0 });

    let intervalId: number | null = null;

    const startProgress = () => {
      if (intervalId !== null) return;

      progress.value = 0;
      progressBar.redraw({ value: 0 });

      intervalId = window.setInterval(() => {
        progress.value += 5;
        progressBar.redraw({ value: progress.value });

        if (progress.value >= 100) {
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
      progress.value = 0;
      progressBar.redraw({ value: 0 });
    };

    return (
      <div class="demo-section">
        <h2>LinearProgress Component</h2>
        <p class="description">Progress indicators show the completion status of an operation.</p>

        <div style="margin: 20px 0;">{progressBar}</div>

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

  // Radio Demo
  function createRadioDemo() {
    const selectedValue = ref<string>('option1');
    const outputText = (<div class="output-text">Selected: option1</div>) as KTHTMLElement<HTMLDivElement>;

    const radioGroup = RadioGroup({
      name: 'demo-radio',
      value: 'option1',
      'mui:change': (value) => {
        selectedValue.value = value;
        outputText.textContent = `Selected: ${value}`;
      },
      options: [
        { value: 'option1', text: 'Option 1' },
        { value: 'option2', text: 'Option 2' },
        { value: 'option3', text: 'Option 3' },
        { value: 'option4', text: 'Option 4 (Disabled)', disabled: true },
      ],
    });

    return (
      <div class="demo-section">
        <h2>Radio Component</h2>
        <p class="description">Radio buttons let users select one option from a set.</p>

        <FormLabel>Choose an option:</FormLabel>
        {radioGroup}
        {outputText}
      </div>
    );
  }

  // Select Demo
  function createSelectDemo() {
    const selectedValue = ref<string>('apple');
    const outputText = (<div class="output-text">Selected: apple</div>) as KTHTMLElement<HTMLDivElement>;

    const options = [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
      { value: 'grape', label: 'Grape' },
      { value: 'mango', label: 'Mango' },
    ];

    const select = Select({
      label: 'Choose a fruit',
      value: 'apple',
      options,
      'mui:change': (value) => {
        selectedValue.value = value;
        outputText.textContent = `Selected: ${value}`;
      },
    });

    return (
      <div class="demo-section">
        <h2>Select Component</h2>
        <p class="description">Select components let users pick a value from a list.</p>

        {select}
        {outputText}

        <div style="margin-top: 20px;">
          <Select label="Disabled Select" disabled value="banana" options={options} mui:change={(value) => {}} />
        </div>
      </div>
    );
  }

  // Icons Demo
  function createIconsDemo() {
    return (
      <div class="demo-section">
        <h2>Icons</h2>
        <p class="description">A collection of commonly used icons.</p>

        <div class="icons-grid">
          <div class="icon-item">
            <HomeIcon />
            <span>Home</span>
          </div>
          <div class="icon-item">
            <DeleteIcon />
            <span>Delete</span>
          </div>
          <div class="icon-item">
            <ContentCopyIcon />
            <span>Copy</span>
          </div>
          <div class="icon-item">
            <DownloadIcon />
            <span>Download</span>
          </div>
          <div class="icon-item">
            <MenuIcon />
            <span>Menu</span>
          </div>
        </div>
      </div>
    );
  }

  // Main container
  return (
    <div class="mui-demo">
      <div class="mui-demo-header">
        <h1>@ktjs/mui Components Demo</h1>
        <p>A showcase of Material-UI inspired components for KT.js</p>
      </div>

      {createButtonDemo()}
      {createAlertDemo()}
      {createTextFieldDemo()}
      {createDialogDemo()}
      {createProgressDemo()}
      {createRadioDemo()}
      {createSelectDemo()}
      {createIconsDemo()}
    </div>
  );
}
