import type { JSX, KTMaybeReactive, KTRef } from '@ktjs/core';
import type { KTMuiProps } from '../../types/component.js';

import { $emptyFn, $parseStyle } from '@ktjs/shared';
import { assertModel, computed } from '@ktjs/core';
import { toPseudoRef } from '../../common/pseudo-ref.js';

import './Switch.css.js';

export type KTMuiSwitchColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
export type KTMuiSwitchSize = 'small' | 'medium' | 'large';

export interface KTMuiSwitchProps extends KTMuiProps {
  'k-model'?: KTRef<any>;

  valueOn?: KTMaybeReactive<any>;
  valueOff?: KTMaybeReactive<any>;

  disabled?: KTMaybeReactive<boolean>;

  color?: KTMaybeReactive<KTMuiSwitchColor>;

  size?: KTMaybeReactive<KTMuiSwitchSize>;

  'on:change'?: (value: any) => void;

  // # native events
  // intentionally omitted: switch uses a label + input pair and does not promise generic root event passthrough.
}

export type KTMuiSwitch = JSX.Element & {};

/**
 * Switch component - mimics MUI Switch appearance and behavior
 */
export function Switch<T>(props: KTMuiSwitchProps): KTMuiSwitch {
  const onChange = props['on:change'] ?? $emptyFn;

  // # ref props
  const valueOffRef = toPseudoRef(props.valueOff ?? false);
  const valueOnRef = toPseudoRef(props.valueOn ?? true);

  const colorRef = toPseudoRef(props.color ?? 'primary');
  const sizeRef = toPseudoRef(props.size ?? 'medium');
  const disabledRef = toPseudoRef(props.disabled ?? false).listen((v) => {
    inputEl.disabled = v;
    container.classList.toggle('mui-switch-disabled', v);
  });
  const modelRef = assertModel(props, valueOffRef.value);
  modelRef.listen((v) => {
    inputEl.checked = v;
    track.classList.toggle('mui-switch-track-checked', v);
    thumb.classList.toggle('mui-switch-thumb-checked', v);
  });

  const styleRef = toPseudoRef($parseStyle(props.style));
  const classRef = toPseudoRef(props.class ?? '');

  const className = computed(() => {
    return `mui-switch-wrapper mui-switch-size-${sizeRef.value} ${disabledRef.value ? 'mui-switch-disabled' : ''} mui-switch-color-${colorRef.value} ${classRef.value}`;
  }, [colorRef, disabledRef, sizeRef, classRef]);

  // Handle change
  const handleChange = () => {
    if (disabledRef.value) {
      return;
    }
    const old = modelRef.value;
    modelRef.value = inputEl.checked ? valueOnRef.value : valueOffRef.value;
    onChange(modelRef.value, old);
  };

  const inputEl = (
    <input
      type="checkbox"
      class="mui-switch-input"
      checked={modelRef.value === valueOnRef.value}
      value={valueOnRef}
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
    </label>
  ) as KTMuiSwitch;

  // Initialize state
  track.classList.toggle('mui-switch-track-checked', modelRef.value);
  thumb.classList.toggle('mui-switch-thumb-checked', modelRef.value);

  return container;
}
