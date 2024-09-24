import type { UIComponent } from '@/components/ui/type';
import Text from '@/components/ui/typography/text';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

export type FormHelperTextProps = object;

/**
 * Form Helper Text provides a message that helps users understand more about a form section.
 *
 * @example
 * <FormHelperText>
 * ...
 * </FormHelperText>
 *
 * @param props - The props of the FormHelperText component.
 * @returns The FormHelperText component.
 */
const FormHelperText = memo(
  forwardRef(((props, ref) => {
    const { className, children, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Text
        className={cn('text-gray-600 text-sm leading-normal', className)}
        {...remainingProps}
      >
        {children}
      </Text>
    );
  }) satisfies UIComponent<'p', FormHelperTextProps>)
) as UIComponent<'p', FormHelperTextProps>;

FormHelperText.displayName = 'FormHelperText';

export default FormHelperText;
