import type { UIComponent } from '@/components/ui/type';
import Text from '@/components/ui/typography/text';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

type FormErrorMessageProps = object;

/**
 * Form Helper Text provides a message that shows up when an error occurs in a form section.
 *
 * @example
 * <FormErrorMessage>
 * ...
 * </FormErrorMessage>
 *
 * @param props - The props of the FormErrorMessage component.
 * @returns The FormErrorMessage component.
 */
const FormErrorMessage = memo(
  forwardRef(((props, ref) => {
    const { className, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Text
        className={cn(
          'flex items-center text-red-500 text-sm leading-normal',
          className
        )}
        aria-live="polite"
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'p', FormErrorMessageProps>)
) as UIComponent<'p', FormErrorMessageProps>;

FormErrorMessage.displayName = 'FormErrorMessage';

export default FormErrorMessage;
