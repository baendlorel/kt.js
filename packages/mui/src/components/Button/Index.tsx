import { ref, KTRef, KTPrefixedEventAttribute } from 'kt.js';
import { $emptyFn, parseStyle } from '@ktjs/shared';
import { registerPrefixedEventsForButton } from '../../common/attribute.js';
import './Button.css';

interface KTMuiButtonProps {
  class?: string;
  style?: string | Partial<CSSStyleDeclaration>;

  children?: string | HTMLElement | JSX.Element;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean | KTRef<boolean>;
  fullWidth?: boolean;
  iconOnly?: boolean;
  startIcon?: HTMLElement | JSX.Element;
  endIcon?: HTMLElement | JSX.Element;
  type?: 'button' | 'submit' | 'reset';
}

export type KTMuiButton = JSX.Element;

/**
 * Button component - mimics MUI Button appearance and behavior
 */
export function Button(props: KTMuiButtonProps & KTPrefixedEventAttribute): JSX.Element {
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

  const updateClass = () => {
    container.className = [
      'mui-button',
      `mui-button-${variant}`,
      `mui-button-${variant}-${color}`,
      `mui-button-size-${size}`,
      fullWidth ? 'mui-button-fullwidth' : '',
      iconOnly ? 'mui-button-icon-only' : '',
      disabledRef.value ? 'mui-button-disabled' : '',
      props.class ? props.class : '',
    ].join(' ');
  };

  const disabledRef = ref(disabled, (v) => {
    container.disabled = v;
    updateClass();
  });

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
    if (disabledRef.value) {
      e.preventDefault();
      return;
    }
    createRippleEffect(e.clientX, e.clientY);
    onClick(e);
  };

  const container = (
    <button style={parseStyle(props.style)} type={type} disabled={disabledRef.value} on:click={handleClick}>
      <span k-if={startIcon} class="mui-button-start-icon">
        {startIcon}
      </span>
      <span class="mui-button-label">{children}</span>
      <span k-if={endIcon} class="mui-button-end-icon">
        {endIcon}
      </span>
      {rippleContainer}
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

  registerPrefixedEventsForButton(container, props);

  // # initialize
  updateClass();

  return container;
}
