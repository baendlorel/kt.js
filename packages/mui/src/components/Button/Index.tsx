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

  const createRippleEffect = (mouseX: number, mouseY: number) => {
    const rect = container.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = mouseX - rect.left - size / 2;
    const y = mouseY - rect.top - size / 2;

    const ripple = (
      <span
        class="mui-button-ripple-effect"
        style={`width:${size}px; height:${size}px; left:${x}px; top:${y}px;`}
      ></span>
    );

    rippleContainer.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600); // Remove ripple after animation
  };

  const handleClick = (e: MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    createRippleEffect(e.clientX, e.clientY);
    onClick(e);
  };

  const container = (
    <button class={classes} style={parseStyle(props.style)} type={type} disabled={disabled} on:click={handleClick}>
      <span k-if={startIcon} class="mui-button-start-icon">
        {startIcon}
      </span>
      <span class="mui-button-label">{children}</span>
      <span k-if={endIcon} class="mui-button-end-icon">
        {endIcon}
      </span>
      {rippleContainer}
    </button>
  );

  return container;
}
