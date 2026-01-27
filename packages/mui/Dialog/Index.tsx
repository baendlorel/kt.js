import { KTHTMLElement } from 'kt.js';
import './Dialog.css';

interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children?: HTMLElement | HTMLElement[] | string;
  actions?: HTMLElement | HTMLElement[];
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  fullWidth?: boolean;
}

/**
 * Dialog component - mimics MUI Dialog appearance and behavior
 * Only handles open/close state, title and content are passed as props
 */
export function Dialog(props: DialogProps) {
  const { open = false, onClose, title, children, actions, maxWidth = 'sm', fullWidth = false } = props;

  // Handle backdrop click
  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === backdrop) {
      onClose?.();
    }
  };

  // Handle ESC key
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && open) {
      onClose?.();
    }
  };

  // Backdrop element
  const backdrop = (
    <div
      class={`kt-dialog-backdrop ${open ? 'kt-dialog-backdrop-open' : ''}`}
      on:click={handleBackdropClick}
      style={{ display: open ? 'flex' : 'none' }}
    >
      <div
        class={`kt-dialog-paper ${maxWidth ? `kt-dialog-maxWidth-${maxWidth}` : ''} ${
          fullWidth ? 'kt-dialog-fullWidth' : ''
        }`}
        on:click={(e: MouseEvent) => e.stopPropagation()}
      >
        {title && (
          <div class="kt-dialog-title">
            <h2>{title}</h2>
          </div>
        )}

        {children && <div class="kt-dialog-content">{children}</div>}

        {actions && <div class="kt-dialog-actions">{actions}</div>}
      </div>
    </div>
  ) as KTHTMLElement;

  // Add/remove ESC key listener
  if (open) {
    document.addEventListener('keydown', handleKeyDown);
  } else {
    document.removeEventListener('keydown', handleKeyDown);
  }

  return backdrop;
}
