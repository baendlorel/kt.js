import { computed, toReactive, type JSX, type KTMaybeReactive } from '@ktjs/core';
import './FormLabel.css';
import { KTMuiProps } from '../../types/component.js';
import { registerPrefixedEvents } from '../../common/attribute';

interface KTMuiFormLabelProps extends Omit<KTMuiProps, 'children'> {
  children: string | HTMLElement | JSX.Element;
  required?: KTMaybeReactive<boolean>;
  error?: KTMaybeReactive<boolean>;
  disabled?: KTMaybeReactive<boolean>;
  focused?: KTMaybeReactive<boolean>;
  filled?: KTMaybeReactive<boolean>;
  component?: KTMaybeReactive<'label' | 'legend'>;
  htmlFor?: KTMaybeReactive<string>;
}

/**
 * FormLabel component - mimics MUI FormLabel appearance and behavior
 */
export function FormLabel(props: KTMuiFormLabelProps): JSX.Element {
  const required = toReactive(props.required ?? false);
  const error = toReactive(props.error ?? false);
  const disabled = toReactive(props.disabled ?? false);
  const focused = toReactive(props.focused ?? false);
  const filled = toReactive(props.filled ?? false);
  const component = toReactive(props.component ?? 'label');
  const htmlFor = toReactive(props.htmlFor ?? '');

  const classes = computed(
    () =>
      [
        'mui-form-label',
        error.value ? 'mui-form-label-error' : '',
        disabled.value ? 'mui-form-label-disabled' : '',
        focused.value ? 'mui-form-label-focused' : '',
        filled.value ? 'mui-form-label-filled' : '',
      ].join(' '),
    [error, disabled, focused, filled],
  );

  const labelProps: any = {
    class: classes,
  };

  if (htmlFor) {
    labelProps.for = htmlFor;
  }

  const container =
    component.value === 'legend' ? (
      <legend {...labelProps}>
        {props.children}
        <span k-if={required} class="mui-form-label-asterisk">
          *
        </span>
      </legend>
    ) : (
      <label {...labelProps}>
        {props.children}
        <span k-if={required} class="mui-form-label-asterisk">
          *
        </span>
      </label>
    );

  registerPrefixedEvents(container, props);
  return container;
}
