import { computed, toReactive, type JSX, type KTMaybeReactive } from '@ktjs/core';
import './FormLabel.css.ts';
import { KTMuiProps } from '../../types/component.js';
import { registerPrefixedEvents } from '../../common/attribute';

interface KTMuiFormLabelProps extends Omit<KTMuiProps, 'children'> {
  children: string | HTMLElement | JSX.Element;

  /**
   * If `true`, the label will indicate that the input is required by displaying an asterisk (*).
   */
  required?: KTMaybeReactive<boolean>;

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error?: KTMaybeReactive<boolean>;

  /**
   * If `true`, the label will be displayed in a disabled state.
   */
  disabled?: KTMaybeReactive<boolean>;

  /**
   * If `true`, the label will be displayed in a focused state.
   */
  focused?: KTMaybeReactive<boolean>;

  /**
   * If `true`, the label will be displayed in a filled state (used when the associated input has a value).
   */
  filled?: KTMaybeReactive<boolean>;

  /**
   * The component used for the root node. Either 'label' or 'legend'.
   * - Not reactive
   */
  component?: 'label' | 'legend';

  htmlFor?: KTMaybeReactive<string>;
}

/**
 * FormLabel component - mimics MUI FormLabel appearance and behavior
 */
export function FormLabel(props: KTMuiFormLabelProps): JSX.Element {
  const requiredRef = toReactive(props.required ?? false);
  const errorRef = toReactive(props.error ?? false);
  const disabledRef = toReactive(props.disabled ?? false);
  const focusedRef = toReactive(props.focused ?? false);
  const filledRef = toReactive(props.filled ?? false);
  const htmlForRef = toReactive(props.htmlFor ?? '');

  const classes = computed(
    () =>
      [
        'mui-form-label',
        errorRef.value ? 'mui-form-label-error' : '',
        disabledRef.value ? 'mui-form-label-disabled' : '',
        focusedRef.value ? 'mui-form-label-focused' : '',
        filledRef.value ? 'mui-form-label-filled' : '',
      ].join(' '),
    [errorRef, disabledRef, focusedRef, filledRef],
  );

  const labelProps: any = {
    class: classes,
  };

  if (htmlForRef) {
    labelProps.for = htmlForRef;
  }

  const container =
    props.component === 'legend' ? (
      <legend {...labelProps}>
        {props.children}
        <span k-if={requiredRef} class="mui-form-label-asterisk">
          *
        </span>
      </legend>
    ) : (
      <label {...labelProps}>
        {props.children}
        <span k-if={requiredRef} class="mui-form-label-asterisk">
          *
        </span>
      </label>
    );
  registerPrefixedEvents(container, props);
  return container;
}
