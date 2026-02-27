import type { JSX } from '@ktjs/core';
import { computed, ref, toReactive } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';

import type { KTMaybeReactive, KTMuiProps } from '../../types/component.js';
import { registerPrefixedEvents } from '../../common/attribute.js';
import './Button.css';

interface KTMuiButtonProps extends KTMuiProps {
  variant?: KTMaybeReactive<'contained' | 'outlined' | 'text'>;
  color?: KTMaybeReactive<'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'>;
  size?: KTMaybeReactive<'small' | 'medium' | 'large'>;
  disabled?: KTMaybeReactive<boolean>;
  fullWidth?: KTMaybeReactive<boolean>;
  iconOnly?: KTMaybeReactive<boolean>;
  startIcon?: KTMaybeReactive<JSX.Element>;
  endIcon?: KTMaybeReactive<JSX.Element>;
  type?: KTMaybeReactive<'button' | 'submit' | 'reset'>;
  'on:click': (e: MouseEvent) => void;
  'on:dblclick': (e: MouseEvent) => void;
}

export type KTMuiButton = JSX.Element;

/**
 * Button component - mimics MUI Button appearance and behavior
 */
export function Button(props: KTMuiButtonProps): JSX.Element {
  const onClick = props['on:click'] ?? $emptyFn; // & must be bound because of the ripple effect

  // # refs
  const buttonRef = ref<HTMLButtonElement>();
  const rippleContainerRef = ref<HTMLSpanElement>();

  // # ref props
  const customClassRef = toReactive(props.class ?? '');
  const styleRef = toReactive($parseStyle(props.style));

  const variantRef = toReactive(props.variant ?? 'text');
  const colorRef = toReactive(props.color ?? 'primary');
  const sizeRef = toReactive(props.size ?? 'medium');
  const fullWidthRef = toReactive(props.fullWidth ?? false);
  const iconOnlyRef = toReactive(props.iconOnly ?? false);
  const disabledRef = toReactive(props.disabled ?? false);

  const className = computed(() => {
    return [
      'mui-button',
      `mui-button-${variantRef.value}`,
      `mui-button-${variantRef.value}-${colorRef.value}`,
      `mui-button-size-${sizeRef.value}`,
      fullWidthRef.value ? 'mui-button-fullwidth' : '',
      iconOnlyRef.value ? 'mui-button-icon-only' : '',
      disabledRef.value ? 'mui-button-disabled' : '',
      customClassRef.value,
    ].join(' ');
  }, [variantRef, colorRef, sizeRef, fullWidthRef, iconOnlyRef, disabledRef, customClassRef]);

  const createRippleEffect = (mouseX: number, mouseY: number) => {
    const buttonEl = buttonRef.value;
    const rippleContainer = rippleContainerRef.value;
    if (!buttonEl || !rippleContainer) {
      return;
    }

    const rect = buttonEl.getBoundingClientRect();
    const longerSide = Math.max(rect.width, rect.height);
    const x = mouseX - rect.left - longerSide / 2;
    const y = mouseY - rect.top - longerSide / 2;

    const ripple = (
      <span
        class="mui-button-ripple-effect"
        style={`width:${longerSide}px; height:${longerSide}px; left:${x}px; top:${y}px;`}
      ></span>
    ) as HTMLSpanElement;

    rippleContainer.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const handleClick = (e: MouseEvent) => {
    if (disabledRef.value) {
      e.preventDefault();
      return;
    }

    createRippleEffect(e.clientX, e.clientY);
    onClick(e);
  };

  const container = (
    <button
      ref={buttonRef}
      class={className}
      style={styleRef}
      type={toReactive<'button' | 'submit' | 'reset'>(props.type ?? 'button')}
      disabled={disabledRef}
      on:click={handleClick}
    >
      <span k-if={props.startIcon} class="mui-button-start-icon">
        {props.startIcon}
      </span>
      <span class="mui-button-label">{props.children}</span>
      <span k-if={props.endIcon} class="mui-button-end-icon">
        {props.endIcon}
      </span>
      <span ref={rippleContainerRef} class="mui-button-ripple"></span>
    </button>
  ) as HTMLButtonElement;

  const onDblclick = props['on:dblclick'];
  if (onDblclick) {
    container.addEventListener('dblclick', (e) => {
      if (disabledRef.value) {
        e.preventDefault();
        return;
      }

      createRippleEffect(e.clientX, e.clientY);
      onDblclick(e);
    });
  }

  registerPrefixedEvents(container, props, ['on:dblclick', 'on:click']);
  return container;
}
