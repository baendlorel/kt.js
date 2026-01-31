import { KTHTMLElement } from 'kt.js';
import './Button.css';
import { emptyFn } from '../../common/handler.js';
import { parseStyle } from '../../common/attribute.js';

interface ButtonProps {
  class?: string;
  style?: string | Partial<CSSStyleDeclaration>;

  children: string | HTMLElement | KTHTMLElement;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
  iconOnly?: boolean;
  startIcon?: HTMLElement | KTHTMLElement;
  endIcon?: HTMLElement | KTHTMLElement;
  type?: 'button' | 'submit' | 'reset';
  'on:click'?: (event: Event) => void;
}

/**
 * Button component - mimics MUI Button appearance and behavior
 */
export function Button(props: ButtonProps): KTHTMLElement {
  const {
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
    'on:click': onClick = emptyFn,
  } = props;

  const classes = [
    'mui-button',
    `mui-button-${variant}`,
    `mui-button-${variant}-${color}`,
    `mui-button-size-${size}`,
    fullWidth && 'mui-button-fullwidth',
    iconOnly && 'mui-button-icon-only',
    disabled && 'mui-button-disabled',
    props.class ? props.class : '',
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = (e: Event) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    // Create ripple effect
    const button = e.currentTarget as HTMLButtonElement;
    const rippleContainer = button.querySelector('.mui-button-ripple') as HTMLElement;
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
      setTimeout(() => {
        ripple.remove();
      }, 600);
    }

    onClick(e);
  };

  return (
    <button class={classes} style={parseStyle(props.style)} type={type} disabled={disabled} on:click={handleClick}>
      {startIcon && <span class="mui-button-start-icon">{startIcon}</span>}
      <span class="mui-button-label">{children}</span>
      {endIcon && <span class="mui-button-end-icon">{endIcon}</span>}
      <span class="mui-button-ripple"></span>
    </button>
  ) as KTHTMLElement;
}
