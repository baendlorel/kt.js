import { computed, toReactive, type JSX, type KTMaybeReactive } from '@ktjs/core';
import { $parseStyle } from '@ktjs/shared';
import type { KTMuiProps } from '../../types/component.js';
import './Alert.css';
import { registerPrefixedEvents } from '../../common/attribute.js';

interface KTMuiAlertProps extends KTMuiProps {
  children: NonNullable<KTMuiProps['children']>;

  /**
   * The severity of the alert. It defines the color and icon used in the alert.
   * - 'error': Red color, error icon.
   * - 'warning': Orange color, warning icon.
   * - 'info': Blue color, info icon.
   * - 'success': Green color, success icon.
   * @default 'info'
   */
  severity?: KTMaybeReactive<'error' | 'warning' | 'info' | 'success'>;

  /**
   * The variant to use. It defines the style of the alert.
   * - 'standard': The default style of the alert.
   * - 'filled': A filled version of the alert with a background color.
   * - 'outlined': An outlined version of the alert with a border.
   * @default 'standard'
   */
  variant?: KTMaybeReactive<'standard' | 'filled' | 'outlined'>;

  /**
   * The icon to display in the alert. It can be a custom icon or a boolean value.
   * - If `true`, the default icon based on the severity will be displayed.
   * - If `false`, no icon will be displayed.
   * - If a custom JSX element is provided, it will be used as the icon.
   * @default true
   */
  icon?: KTMaybeReactive<JSX.Element | boolean>;

  /**
   * The size of the icon. It can be any valid CSS size value (e.g., '24px', '1.5em', '2rem').
   * - This prop is **only** applicable when the `icon` prop is set to `true`.
   */
  iconSize?: KTMaybeReactive<string>;

  /**
   * Callback fired when the component requests to be closed. If provided, a close icon button will be displayed.
   */
  'on:close'?: () => void;
}

const severityToIcon = {
  success: (className: string, size: string) => (
    <svg class={className} viewBox="0 0 24 24" width={size} height={size}>
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      />
    </svg>
  ),
  error: (className: string, size: string) => (
    <svg class={className} viewBox="0 0 24 24" width={size} height={size}>
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
      />
    </svg>
  ),
  warning: (className: string, size: string) => (
    <svg class={className} viewBox="0 0 24 24" width={size} height={size}>
      <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  ),
  info: (className: string, size: string) => (
    <svg class={className} viewBox="0 0 24 24" width={size} height={size}>
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
      />
    </svg>
  ),
};

export function Alert(props: KTMuiAlertProps): JSX.Element {
  const customClassRef = toReactive(props.class ?? '');
  const styleRef = toReactive($parseStyle(props.style));

  const childrenRef = toReactive(props.children);
  const severityRef = toReactive(props.severity ?? 'info');
  const variantRef = toReactive(props.variant ?? 'standard');
  const iconRef = toReactive(props.icon ?? true);
  const iconSizeRef = toReactive(props.iconSize ?? '22px');
  const onClose = props['on:close'];

  const className = computed(
    () =>
      `mui-alert mui-alert-${severityRef.value} mui-alert-${variantRef.value} ${customClassRef.value ? customClassRef.value : ''}`,
    [severityRef, variantRef, customClassRef],
  );

  const alertIcon = computed(() => {
    if (iconRef.value === false) {
      return null;
    }

    // if icon is a custom element, use it directly
    if (iconRef.value === true) {
      const creator = severityToIcon[severityRef.value] || severityToIcon['info'];
      return creator(iconSizeRef.value, 'mui-alert-icon');
    }

    return iconRef;
  }, [iconRef, iconSizeRef, severityRef]);

  const container = (
    <div class={className} style={styleRef} role="alert">
      {alertIcon && <div class="mui-alert-icon-wrapper">{alertIcon}</div>}
      <div class="mui-alert-message">{childrenRef}</div>
      <button k-if={onClose} class="mui-alert-close" on:click={onClose!} aria-label="Close">
        <svg viewBox="0 0 24 24" width="18px" height="18px">
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
        </svg>
      </button>
    </div>
  );

  registerPrefixedEvents(container, props);
  return container;
}
