import type { FormControlProps } from '@/components/ui/form/control';
import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

/**
 * The props of the Textarea component.
 */
export type TextareaProps = Pick<FormControlProps, 'isDisabled' | 'isInvalid'>;

/**
 * The Textarea component allows you to easily create multi-line text inputs.
 *
 * @example
 * <Textarea placeholder='Here is a sample placeholder' />
 *
 * @param props - The props of the Textarea component.
 *
 * @returns The Textarea component.
 */
const Textarea = memo(
  forwardRef(((props, ref) => {
    const { isDisabled, isInvalid, className, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Box
        as="textarea"
        className={cn(
          'relative h-10 min-h-20 w-full min-w-0 appearance-none rounded-md border border-solid py-2 ps-4 pe-4 align-top text-md outline-none transition-common duration-normal hover:border-gray-300 focus-visible:border-2 focus-visible:border-blue-500 disabled:cursor-not-allowed disabled:opacity-40 aria-[invalid="true"]:border-2 aria-[invalid="true"]:border-red-500',
          className
        )}
        disabled={isDisabled}
        aria-invalid={isInvalid || undefined}
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'textarea', TextareaProps>)
) as UIComponent<'textarea', TextareaProps>;

Textarea.displayName = 'Textarea';

export default Textarea;
