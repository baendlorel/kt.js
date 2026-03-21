import type { JSX } from '@ktjs/core';
import { computed, ref, toReactive, KTConditional } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';

import type { KTMaybeReactive, KTMuiProps } from '../../types/component.js';
import { registerPrefixedEvents } from '../../common/attribute.js';
import './Button.css.ts';

export type KTMuiButtonVariant = 'contained' | 'outlined' | 'text';
export type KTMuiButtonColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
export type KTMuiButtonSize = 'small' | 'medium' | 'large';
export type KTMuiButtonType = 'button' | 'submit' | 'reset';

interface KTMuiButtonProps extends KTMuiProps {
  variant?: KTMaybeReactive<KTMuiButtonVariant>;
  color?: KTMaybeReactive<KTMuiButtonColor>;
  size?: KTMaybeReactive<KTMuiButtonSize>;
  disabled?: KTMaybeReactive<boolean>;
  fullWidth?: KTMaybeReactive<boolean>;
  iconOnly?: KTMaybeReactive<boolean>;
  startIcon?: KTMaybeReactive<JSX.Element>;
  endIcon?: KTMaybeReactive<JSX.Element>;
  type?: KTMaybeReactive<KTMuiButtonType>;

  // # native events
  'on:click'?: (event: MouseEvent) => void;
  'on:dblclick'?: (event: MouseEvent) => void;
  'on:mouseenter'?: (event: MouseEvent) => void;
  'on:mouseleave'?: (event: MouseEvent) => void;
  'on:focus'?: (event: FocusEvent) => void;
  'on:blur'?: (event: FocusEvent) => void;
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
  const startIconRef = toReactive(props.startIcon);
  const endIconRef = toReactive(props.endIcon);

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
      `mui-button-${variantRef.state}`,
      `mui-button-${variantRef.state}-${colorRef.state}`,
      `mui-button-size-${sizeRef.state}`,
      fullWidthRef.state ? 'mui-button-fullwidth' : '',
      iconOnlyRef.state ? 'mui-button-icon-only' : '',
      disabledRef.state ? 'mui-button-disabled' : '',
      customClassRef.state,
    ].join(' ');
  }, [variantRef, colorRef, sizeRef, fullWidthRef, iconOnlyRef, disabledRef, customClassRef]);

  const createRippleEffect = (mouseX: number, mouseY: number) => {
    const buttonEl = buttonRef.state;
    const rippleContainer = rippleContainerRef.state;
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
    if (disabledRef.state) {
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
      type={toReactive<KTMuiButtonType>(props.type ?? 'button')}
      disabled={disabledRef}
      on:click={handleClick}
    >
      {KTConditional(startIconRef, 'span', { class: 'mui-button-start-icon', children: startIconRef })}
      <span class="mui-button-label">{props.children}</span>
      {KTConditional(endIconRef, 'span', { class: 'mui-button-end-icon', children: endIconRef })}
      <span ref={rippleContainerRef} class="mui-button-ripple"></span>
    </button>
  ) as HTMLButtonElement;

  const onDblclick = props['on:dblclick'];
  if (onDblclick) {
    container.addEventListener('dblclick', (e) => {
      if (disabledRef.state) {
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
