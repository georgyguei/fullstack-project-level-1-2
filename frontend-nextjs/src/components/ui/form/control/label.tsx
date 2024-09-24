import type { FormControlProps } from '@/components/ui/form/control';
import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

export type FormLabelProps = FormControlProps & {
  requiredIndicator?: React.ReactElement;
};

/**
 * Form Label provides a label for a form section.
 *
 * @example
 * <FormLabel>
 *  ...
 * </FormLabel>
 *
 * @param props - The props of the FormLabel component.
 * @returns The FormLabel component.
 */
const FormLabel = memo(
  forwardRef(((props, ref) => {
    const {
      isRequired,
      isInvalid,
      isDisabled,
      isReadOnly,
      requiredIndicator,
      className,
      children,
      ...rest
    } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Box
        as="label"
        className={cn(
          isRequired ? 'flex justify-start gap-1' : 'block text-start',
          'me-3 font-medium text-md transition-common duration-normal',
          isDisabled && 'data-[disabled]:opacity-40',
          className
        )}
        data-disabled={isDisabled ? '' : undefined}
        data-invalid={isInvalid ? '' : undefined}
        data-readonly={isReadOnly ? '' : undefined}
        {...remainingProps}
      >
        {children}
        {isRequired && requiredIndicator}
      </Box>
    );
  }) satisfies UIComponent<'label', FormLabelProps>)
) as UIComponent<'label', FormLabelProps>;

FormLabel.displayName = 'FormLabel';

export default FormLabel;
