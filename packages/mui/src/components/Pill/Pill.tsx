import type { JSX, KTMaybeReactive } from '@ktjs/core';
import { type KTReactive, computed, toReactive } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';
import type { KTMuiProps } from '../../types/component.js';
import './Pill.css.ts';
import { registerPrefixedEvents } from '../../common/attribute.js';

type PillColor = 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
type PillVariant = 'filled' | 'outlined';
type PillSize = 'small' | 'medium';

export interface KTMuiPillProps extends KTMuiProps {
  label?: KTMaybeReactive<string>;
  icon?: KTMaybeReactive<HTMLElement | JSX.Element>;
  deleteIcon?: KTMaybeReactive<HTMLElement | JSX.Element>;
  color?: KTMaybeReactive<PillColor>;
  variant?: KTMaybeReactive<PillVariant>;
  size?: KTMaybeReactive<PillSize>;
  clickable?: KTMaybeReactive<boolean>;
  disabled?: KTMaybeReactive<boolean>;
  autoRemoveOnDelete?: KTMaybeReactive<boolean>;
  'on:click'?: (event: MouseEvent) => void;
  'on:delete'?: (event: MouseEvent) => void | boolean;
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

  const labelRef = toReactive(props.label ?? '');
  const colorRef = toReactive(props.color ?? 'default');
  const variantRef = toReactive(props.variant ?? 'filled');
  const sizeRef = toReactive(props.size ?? 'medium');
  const clickableRef = toReactive(props.clickable ?? !!props['on:click']);
  const disabledRef = toReactive(props.disabled ?? false);
  const autoRemoveOnDeleteRef = toReactive(props.autoRemoveOnDelete ?? true);
  const classRef = toReactive(props.class ?? '');
  const styleRef = toReactive($parseStyle(props.style));

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
      role={clickableRef.toComputed((v) => (v ? 'button' : 'presentation'))}
      tabIndex={computed(() => (clickableRef.value && !disabledRef.value ? 0 : undefined), [clickableRef, disabledRef])}
      on:click={handleClick}
      on:keydown={handleKeydown}
    >
      <span k-if={props.icon} class="mui-pill-icon">
        {props.icon}
      </span>
      <span class="mui-pill-label">{props.children ?? labelRef}</span>
      <button
        k-if={onDelete}
        class="mui-pill-delete"
        type="button"
        tabIndex={-1}
        aria-label="Delete"
        on:click={handleDelete}
      >
        {props.deleteIcon ?? defaultDeleteIcon}
      </button>
    </span>
  ) as KTMuiPill;

  registerPrefixedEvents(container, props, ['on:click', 'on:delete']);
  return container;
}
