import { KTHTMLElement } from 'kt.js';
import './FormLabel.css';

interface FormLabelProps {
  children: string | HTMLElement | KTHTMLElement;
  required?: boolean;
  error?: boolean;
  disabled?: boolean;
  focused?: boolean;
  filled?: boolean;
  component?: 'label' | 'legend';
  htmlFor?: string;
}

/**
 * FormLabel component - mimics MUI FormLabel appearance and behavior
 */
export function FormLabel(props: FormLabelProps): KTHTMLElement {
  const {
    children,
    required = false,
    error = false,
    disabled = false,
    focused = false,
    filled = false,
    component = 'label',
    htmlFor,
  } = props;

  const classes = [
    'mui-form-label',
    error && 'mui-form-label-error',
    disabled && 'mui-form-label-disabled',
    focused && 'mui-form-label-focused',
    filled && 'mui-form-label-filled',
  ]
    .filter(Boolean)
    .join(' ');

  const labelProps: any = {
    class: classes,
  };

  if (htmlFor) {
    labelProps.for = htmlFor;
  }

  const element =
    component === 'legend' ? (
      <legend {...labelProps}>
        {children}
        {required && <span class="mui-form-label-asterisk"> *</span>}
      </legend>
    ) : (
      <label {...labelProps}>
        {children}
        {required && <span class="mui-form-label-asterisk"> *</span>}
      </label>
    );

  return element as KTHTMLElement;
}
