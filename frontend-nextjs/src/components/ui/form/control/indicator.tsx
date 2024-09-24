import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

export type FormRequiredIndicatorProps = object;

/**
 * Form Required Indicator provides a required indicator for a form section.
 *
 * @example
 * <FormRequiredIndicator>
 *  ...
 * </FormRequiredIndicator>
 *
 * @param props - The props of the FormRequiredIndicator component.
 * @returns The FormRequiredIndicator component.
 */
const FormRequiredIndicator = memo(
  forwardRef(((props, ref) => {
    const { className, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Box
        as="span"
        className={cn('text-red-500', className)}
        role="presentation"
        aria-hidden="true"
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'span', FormRequiredIndicatorProps>)
) as UIComponent<'span', FormRequiredIndicatorProps>;

FormRequiredIndicator.displayName = 'FormRequiredIndicator';

export default FormRequiredIndicator;
