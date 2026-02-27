import type { JSX } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';
import { $modelOrRef, computed, toReactive } from '@ktjs/core';
import type { KTMuiProps } from '../../types/component.js';
import './Switch.css';

export interface KTMuiSwitchProps extends KTMuiProps {
  checked?: boolean;
  value?: string;
  label?: string;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  size?: 'small' | 'medium' | 'large';
  'on:change'?: (checked: boolean, value?: string) => void;
}

export type KTMuiSwitch = JSX.Element & {};

/**
 * Switch component - mimics MUI Switch appearance and behavior
 */
export function Switch(props: KTMuiSwitchProps): KTMuiSwitch {
  const onChange = props['on:change'] ?? $emptyFn;

  // # ref props
  const labelRef = toReactive(props.label ?? '');
  const valueRef = toReactive(props.value ?? '');
  const colorRef = toReactive(props.color ?? 'primary');
  const sizeRef = toReactive(props.size ?? 'medium');
  const disabledRef = toReactive(props.disabled ?? false, (v) => {
    inputEl.disabled = v;
    container.classList.toggle('mui-switch-disabled', v);
  });
  const modelRef = $modelOrRef(props, props.checked ?? false);
  modelRef.addOnChange((newValue) => {
    inputEl.checked = newValue;
    track.classList.toggle('mui-switch-track-checked', newValue);
    thumb.classList.toggle('mui-switch-thumb-checked', newValue);
  });

  const styleRef = toReactive($parseStyle(props.style));
  const classRef = toReactive(props.class ?? '');

  const className = computed(() => {
    return `mui-switch-wrapper mui-switch-size-${sizeRef.value} ${disabledRef.value ? 'mui-switch-disabled' : ''} mui-switch-color-${colorRef.value} ${classRef.value}`;
  }, [colorRef, disabledRef, sizeRef, classRef]);

  // Handle change
  const handleChange = () => {
    if (disabledRef.value) {
      return;
    }
    modelRef.value = inputEl.checked;
    onChange(modelRef.value, valueRef.value);
  };

  const inputEl = (
    <input
      type="checkbox"
      class="mui-switch-input"
      checked={modelRef.value}
      value={valueRef}
      disabled={disabledRef}
      on:change={handleChange}
    />
  ) as HTMLInputElement;

  const track = <span class="mui-switch-track"></span>;
  const thumb = <span class="mui-switch-thumb"></span>;

  const container = (
    <label class={className} style={styleRef}>
      {inputEl}
      <span class="mui-switch-base">
        {track}
        {thumb}
      </span>
      <span k-if={labelRef} class="mui-switch-label">
        {labelRef}
      </span>
    </label>
  ) as KTMuiSwitch;

  // Initialize state
  track.classList.toggle('mui-switch-track-checked', modelRef.value);
  thumb.classList.toggle('mui-switch-thumb-checked', modelRef.value);

  return container;
}
