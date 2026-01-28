import { KTHTMLElement } from 'kt.js';
import './Alert.css';

interface AlertProps {
  class?: string;
  style?: string;
  sx?: Record<string, any>;

  children: string | HTMLElement | KTHTMLElement | Array<string | HTMLElement | KTHTMLElement>;
  severity?: 'error' | 'warning' | 'info' | 'success';
  variant?: 'standard' | 'filled' | 'outlined';
  icon?: HTMLElement | KTHTMLElement | false;
  onClose?: () => void;
}

/**
 * Alert component - mimics MUI Alert appearance and behavior
 */
export function Alert(props: AlertProps): KTHTMLElement {
  const { children, severity = 'info', variant = 'standard', icon, onClose, sx } = props;

  const classes = ['mui-alert', `mui-alert-${severity}`, `mui-alert-${variant}`, props.class ? props.class : '']
    .filter(Boolean)
    .join(' ');

  // Convert sx object to style string
  let styleString = props.style || '';
  if (sx) {
    const sxStyles = Object.entries(sx)
      .map(([key, value]) => {
        // Convert camelCase to kebab-case
        const cssKey = key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
        return `${cssKey}: ${value}`;
      })
      .join('; ');
    styleString = styleString ? `${styleString}; ${sxStyles}` : sxStyles;
  }

  // Icon SVG paths for different severities
  const getIcon = () => {
    if (icon === false) return null;
    if (icon) return icon;

    const iconSize = '22px';
    const iconClass = 'mui-alert-icon';

    switch (severity) {
      case 'success':
        return (
          <svg class={iconClass} viewBox="0 0 24 24" width={iconSize} height={iconSize}>
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            />
          </svg>
        );
      case 'error':
        return (
          <svg class={iconClass} viewBox="0 0 24 24" width={iconSize} height={iconSize}>
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
            />
          </svg>
        );
      case 'warning':
        return (
          <svg class={iconClass} viewBox="0 0 24 24" width={iconSize} height={iconSize}>
            <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
          </svg>
        );
      case 'info':
      default:
        return (
          <svg class={iconClass} viewBox="0 0 24 24" width={iconSize} height={iconSize}>
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
            />
          </svg>
        );
    }
  };

  const alertIcon = getIcon();

  const alert = (
    <div class={classes} style={styleString} role="alert">
      {alertIcon && <div class="mui-alert-icon-wrapper">{alertIcon}</div>}
      <div class="mui-alert-message">{children}</div>
      {onClose && (
        <button class="mui-alert-close" on:click={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="18px" height="18px">
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </svg>
        </button>
      )}
    </div>
  ) as unknown as KTHTMLElement;

  return alert;
}
