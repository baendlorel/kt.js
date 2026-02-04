import { ref } from '@ktjs/core';
import '@ktjs/core/jsx';
import { Button, TextField } from '@ktjs/mui';

export function MuiTextFieldRefDemo() {
  // 创建所有属性的ref
  const labelRef = ref('TextField Label');
  const placeholderRef = ref('Enter text here...');
  const valueRef = ref('Initial value');
  const disabledRef = ref(false);
  const readonlyRef = ref(false);
  const requiredRef = ref(false);
  const errorRef = ref(false);
  const helperTextRef = ref('Helper text');
  const fullWidthRef = ref(false);
  const rowsRef = ref(3);
  const sizeRef = ref<'small' | 'medium'>('medium');

  // 按钮点击处理函数 - 用于改变各个ref的值
  const toggleLabel = () => {
    labelRef.value = labelRef.value === 'TextField Label' ? 'New Label' : 'TextField Label';
  };

  const togglePlaceholder = () => {
    placeholderRef.value = placeholderRef.value === 'Enter text here...' ? 'Type something...' : 'Enter text here...';
  };

  const toggleValue = () => {
    valueRef.value = valueRef.value === 'Initial value' ? 'Updated value' : 'Initial value';
  };

  const toggleDisabled = () => {
    disabledRef.value = !disabledRef.value;
  };

  const toggleReadonly = () => {
    readonlyRef.value = !readonlyRef.value;
  };

  const toggleRequired = () => {
    requiredRef.value = !requiredRef.value;
  };

  const toggleError = () => {
    errorRef.value = !errorRef.value;
  };

  const toggleHelperText = () => {
    helperTextRef.value = helperTextRef.value === 'Helper text' ? 'New helper text' : 'Helper text';
  };

  const toggleFullWidth = () => {
    fullWidthRef.value = !fullWidthRef.value;
  };

  const toggleRows = () => {
    rowsRef.value = rowsRef.value === 3 ? 5 : 3;
  };

  const toggleSize = () => {
    sizeRef.value = sizeRef.value === 'medium' ? 'small' : 'medium';
  };

  // 重置所有ref到初始值
  const resetAll = () => {
    labelRef.value = 'TextField Label';
    placeholderRef.value = 'Enter text here...';
    valueRef.value = 'Initial value';
    disabledRef.value = false;
    readonlyRef.value = false;
    requiredRef.value = false;
    errorRef.value = false;
    helperTextRef.value = 'Helper text';
    fullWidthRef.value = false;
    rowsRef.value = 3;
    sizeRef.value = 'medium';
  };

  return (
    <div class="demo-section">
      <h2>TextField with Reactive Refs</h2>
      <p class="description">
        This demo shows how all TextField properties can be controlled via KTRefs. Click the buttons below to change
        each property and observe how the TextField updates automatically. The component uses k-if binding for reactive
        updates.
      </p>

      <div class="button-group" style="margin-bottom: 20px;">
        <button on:click={resetAll} style="background: #4CAF50; font-weight: bold;">
          Reset All to Initial Values
        </button>
      </div>

      <div class="demo-container">
        <div class="textfield-demo-area">
          <h3>Live TextField</h3>
          <TextField
            type="text"
            label={labelRef}
            placeholder={placeholderRef}
            k-model={valueRef}
            disabled={disabledRef}
            readonly={readonlyRef}
            required={requiredRef}
            error={errorRef}
            helperText={helperTextRef}
            fullWidth={fullWidthRef}
            multiline={false}
            rows={rowsRef}
            size={sizeRef}
            kt:input={(val) => console.log('Input:', val)}
          />

          <div class="current-values" style="margin-top: 20px; padding: 16px; background: #f5f5f5; border-radius: 6px;">
            <h4>Current Ref Values</h4>
            <div style="font-family: 'Courier New', monospace; font-size: 0.8rem;">
              <div>label: "{labelRef}"</div>
              <div>placeholder: "{placeholderRef}"</div>
              <div>value: "{valueRef}"</div>
              <div>disabled: {disabledRef}</div>
              <div>readonly: {readonlyRef}</div>
              <div>required: {requiredRef}</div>
              <div>error: {errorRef}</div>
              <div>helperText: "{helperTextRef}"</div>
              <div>fullWidth: {fullWidthRef}</div>
              <div>rows: {rowsRef}</div>
              <div>size: {sizeRef}</div>
            </div>
          </div>
        </div>

        <div class="controls-panel">
          <h3>Control Panel</h3>
          <p>Click buttons to change ref values and see the TextField update:</p>

          <div class="demo-flex-gap-column">
            <Button variant="contained" color="primary" on:click={toggleLabel}>
              Toggle Label: <span>{labelRef}</span>
            </Button>
            <Button variant="contained" color="primary" on:click={togglePlaceholder}>
              Toggle Placeholder: <span>{placeholderRef}</span>
            </Button>
            <Button variant="contained" color="primary" on:click={toggleValue}>
              Toggle Value: <span>{valueRef}</span>
            </Button>
            <Button variant="contained" color="primary" on:click={toggleDisabled}>
              Toggle Disabled:<span>{disabledRef}</span>
            </Button>
            <Button variant="contained" color="primary" on:click={toggleReadonly}>
              Toggle Readonly: <span>{readonlyRef}</span>
            </Button>
            <Button variant="contained" color="primary" on:click={toggleRequired}>
              Toggle Required: <span>{requiredRef}</span>
            </Button>
            <Button variant="contained" color="primary" on:click={toggleError}>
              Toggle Error: <span> {errorRef}</span>
            </Button>
            <Button variant="contained" color="primary" on:click={toggleHelperText}>
              Toggle Helper Text: <span>{helperTextRef}</span>
            </Button>
            <Button variant="contained" color="primary" on:click={toggleFullWidth}>
              Toggle Full Width: <span>{fullWidthRef}</span>
            </Button>
            <Button variant="contained" color="primary" on:click={toggleRows}>
              Toggle Rows: <span>{rowsRef}</span>
            </Button>
            <Button variant="contained" color="primary" on:click={toggleSize}>
              Toggle Size: <span> {sizeRef}</span>
            </Button>
          </div>
        </div>
      </div>

      <div class="explanation">
        <h3>How It Works</h3>
        <ul>
          <li>Each TextField property is bound to a KTRef (reactive reference)</li>
          <li>When a ref value changes, the TextField automatically updates</li>
          <li>The component uses k-if binding for label, helperText, etc. - when ref changes, k-if triggers redraw</li>
          <li>Other properties have onChange listeners for direct DOM updates</li>
          <li>This demonstrates the power of reactive programming in KT.js</li>
        </ul>
      </div>
    </div>
  );
}
