import { $buttonDisabledGetter, $buttonDisabledSetter, $defines, $emptyFn, parseStyle } from '@ktjs/shared';
import './Button.css';

interface KTMuiButtonProps {
  class?: string;
  style?: string | Partial<CSSStyleDeclaration>;

  children?: string | HTMLElement | JSX.Element;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
  iconOnly?: boolean;
  startIcon?: HTMLElement | JSX.Element;
  endIcon?: HTMLElement | JSX.Element;
  type?: 'button' | 'submit' | 'reset';
  'on:click'?: (event: Event) => void;
}

export type KTMuiButton = JSX.Element;

/**
 * Button component - mimics MUI Button appearance and behavior
 */
export function Button(props: KTMuiButtonProps): JSX.Element {
  let {
    children,
    variant = 'text',
    color = 'primary',
    size = 'medium',
    disabled = false,
    fullWidth = false,
    iconOnly = false,
    startIcon,
    endIcon,
    type = 'button',
    'on:click': onClick = $emptyFn,
  } = props;

  const classes = [
    'mui-button',
    `mui-button-${variant}`,
    `mui-button-${variant}-${color}`,
    `mui-button-size-${size}`,
    fullWidth ? 'mui-button-fullwidth' : '',
    iconOnly ? 'mui-button-icon-only' : '',
    disabled ? 'mui-button-disabled' : '',
    props.class ? props.class : '',
  ].join(' ');

  const rippleContainer = <span class="mui-button-ripple"></span>;

  const handleClick = (e: Event) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    // Create ripple effect
    const button = e.currentTarget as HTMLButtonElement;
    if (rippleContainer) {
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = (e as MouseEvent).clientX - rect.left - size / 2;
      const y = (e as MouseEvent).clientY - rect.top - size / 2;

      const ripple = document.createElement('span');
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.add('mui-button-ripple-effect');

      rippleContainer.appendChild(ripple);

      // Remove ripple after animation
      setTimeout(() => ripple.remove(), 600);
    }

    onClick(e);
  };

  const container = (
    <button class={classes} style={parseStyle(props.style)} type={type} disabled={disabled} on:click={handleClick}>
      {startIcon && <span class="mui-button-start-icon">{startIcon}</span>}
      <span class="mui-button-label">{children}</span>
      {endIcon && <span class="mui-button-end-icon">{endIcon}</span>}
      {rippleContainer}
    </button>
  );

  $defines(container, {
    disabled: {
      get: $buttonDisabledGetter,
      set: function (this: HTMLButtonElement, value: boolean) {
        $buttonDisabledSetter.call(this, value);
        this.classList.toggle('mui-button-disabled', value);
      },
    },
  });

  return container;
}
