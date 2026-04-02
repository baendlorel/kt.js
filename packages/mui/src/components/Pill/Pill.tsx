import type { JSX, KTMaybeReactive } from '@ktjs/core';
import type { KTMuiProps } from '../../types/component.js';

import { KTConditional, computed } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';
import { registerPrefixedEvents } from '../../common/attribute.js';
import { toPseudoRef } from '../../common/pseudo-ref.js';

import './Pill.css.js';

export type KTMuiPillColor = 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
export type KTMuiPillVariant = 'filled' | 'outlined';
export type KTMuiPillSize = 'small' | 'medium';

export interface KTMuiPillProps extends KTMuiProps {
  label?: KTMaybeReactive<string>;
  icon?: KTMaybeReactive<HTMLElement | JSX.Element>;
  deleteIcon?: KTMaybeReactive<HTMLElement | JSX.Element>;
  color?: KTMaybeReactive<KTMuiPillColor>;
  variant?: KTMaybeReactive<KTMuiPillVariant>;
  size?: KTMaybeReactive<KTMuiPillSize>;
  clickable?: KTMaybeReactive<boolean>;
  disabled?: KTMaybeReactive<boolean>;
  autoRemoveOnDelete?: KTMaybeReactive<boolean>;
  'on:click'?: (event: MouseEvent) => void;
  'on:delete'?: (event: MouseEvent) => void | boolean;

  // # native events
  'on:mouseenter'?: (event: MouseEvent) => void;
  'on:mouseleave'?: (event: MouseEvent) => void;
  'on:focus'?: (event: FocusEvent) => void;
  'on:blur'?: (event: FocusEvent) => void;
}

export type KTMuiPill = JSX.Element & {};

const defaultDeleteIcon = (
  <span class="mui-pill-delete-mark" aria-hidden="true">
    ×
  </span>
);

/**
 * Pill component - mimics MUI chip/pill appearance and behavior
 */
export function Pill(props: KTMuiPillProps): KTMuiPill {
  const onClick = props['on:click'] ?? $emptyFn;
  const onDelete = props['on:delete'];

  const labelRef = toPseudoRef(props.label ?? '');
  const colorRef = toPseudoRef(props.color ?? 'default');
  const variantRef = toPseudoRef(props.variant ?? 'filled');
  const sizeRef = toPseudoRef(props.size ?? 'medium');
  const clickableRef = toPseudoRef(props.clickable ?? !!props['on:click']);
  const disabledRef = toPseudoRef(props.disabled ?? false);
  const autoRemoveOnDeleteRef = toPseudoRef(props.autoRemoveOnDelete ?? true);
  const classRef = toPseudoRef(props.class ?? '');
  const styleRef = toPseudoRef($parseStyle(props.style));

  const className = computed(() => {
    return [
      'mui-pill',
      `mui-pill-color-${colorRef.value}`,
      `mui-pill-variant-${variantRef.value}`,
      `mui-pill-size-${sizeRef.value}`,
      clickableRef.value ? 'mui-pill-clickable' : '',
      disabledRef.value ? 'mui-pill-disabled' : '',
      classRef.value,
    ].join(' ');
  }, [colorRef, variantRef, sizeRef, clickableRef, disabledRef, classRef]);

  const handleClick = (e: MouseEvent) => {
    if (!clickableRef.value || disabledRef.value) {
      return;
    }
    onClick(e);
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (!clickableRef.value || disabledRef.value) {
      return;
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(e as unknown as MouseEvent);
    }
  };

  const handleDelete = (e: MouseEvent) => {
    e.stopPropagation();
    if (disabledRef.value || !onDelete) {
      return;
    }
    const shouldKeep = onDelete(e);
    if (!autoRemoveOnDeleteRef.value) {
      return;
    }

    if (shouldKeep === false) {
      return;
    }

    container.remove();
  };

  const container: KTMuiPill = (
    <span
      class={className}
      style={styleRef}
      role={clickableRef.map((v) => (v ? 'button' : 'presentation'))}
      tabIndex={computed(() => (clickableRef.value && !disabledRef.value ? 0 : undefined), [clickableRef, disabledRef])}
      on:click={handleClick}
      on:keydown={handleKeydown}
    >
      {KTConditional(props.icon, 'span', { class: 'mui-pill-icon', children: props.icon })}
      <span class="mui-pill-label">{props.children ?? labelRef}</span>
      {KTConditional(onDelete, 'button', {
        class: 'mui-pill-delete',
        type: 'button',
        tabIndex: -1,
        'aria-label': 'Delete',
        'on:click': handleDelete,
        children: props.deleteIcon ?? defaultDeleteIcon,
      })}
    </span>
  ) as KTMuiPill;

  registerPrefixedEvents(container, props, ['on:click', 'on:delete']);
  return container;
}
