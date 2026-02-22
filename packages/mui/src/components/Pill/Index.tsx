import type { JSX } from '@ktjs/core';
import { type KTReactive, computed, toReactive } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';
import type { KTMuiProps } from '../../types/component.js';
import './Pill.css';

type PillColor = 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
type PillVariant = 'filled' | 'outlined';
type PillSize = 'small' | 'medium';

export interface KTMuiPillProps extends KTMuiProps {
  label?: string | KTReactive<string>;
  icon?: HTMLElement | JSX.Element;
  deleteIcon?: HTMLElement | JSX.Element;
  color?: PillColor | KTReactive<PillColor>;
  variant?: PillVariant | KTReactive<PillVariant>;
  size?: PillSize | KTReactive<PillSize>;
  clickable?: boolean | KTReactive<boolean>;
  disabled?: boolean | KTReactive<boolean>;
  'on:click'?: (event: MouseEvent) => void;
  'on:delete'?: (event: MouseEvent) => void;
}

export type KTMuiPill = JSX.Element & {};

const defaultDeleteIcon = (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
    <path
      fill="currentColor"
      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    />
  </svg>
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
  const classRef = toReactive(props.class ?? '');
  const styleRef = toReactive($parseStyle(props.style ?? ''));

  const className = computed(() => {
    return [
      'mui-pill',
      `mui-pill-color-${colorRef.value}`,
      `mui-pill-variant-${variantRef.value}`,
      `mui-pill-size-${sizeRef.value}`,
      clickableRef.value ? 'mui-pill-clickable' : '',
      disabledRef.value ? 'mui-pill-disabled' : '',
      classRef.value,
    ]
      .join(' ')
      .trim()
      .replace(/\s+/g, ' ');
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
    onDelete(e);
  };

  const container = (
    <span
      class={className}
      style={styleRef}
      role={clickableRef.value ? 'button' : 'presentation'}
      tabIndex={clickableRef.value && !disabledRef.value ? 0 : undefined}
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

  return container;
}
