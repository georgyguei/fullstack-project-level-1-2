import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { forwardRef, memo } from 'react';

/**
 * The text variants.
 */
const buttonVariants = cva(
  'relative inline select-none appearance-none whitespace-nowrap rounded-md align-middle font-semibold outline-none transition-common duration-normal focus-visible:shadow-outline',
  {
    variants: {
      size: {
        lg: 'h-12 min-w-12 ps-6 pe-6 text-lg',
        md: 'h-10 min-w-10 ps-4 pe-4 text-md leading-[1.2]',
        sm: 'h-8 min-w-8 ps-3 pe-3 text-sm',
        xs: 'h-6 min-w-6 ps-2 pe-2 text-xs',
      },
      variant: {
        ghost:
          'inline-flex items-center justify-center text-gray-700 hover:bg-gray-100 active:bg-gray-200',
        outline:
          'inline-flex items-center justify-center border border-gray-200 border-solid text-gray-700 hover:bg-gray-100 active:bg-gray-200',
        solid:
          'inline-flex items-center justify-center bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300',
        link: 'inline-flex items-center justify-center text-gray-500 hover:underline active:text-gray-700',
        unstyled: 'm-0 p-0 text-inherit leading-[inherit] [background:none]',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'solid',
    },
  }
);

/**
 * The props of the Button component.
 */
export type ButtonProps = VariantProps<typeof buttonVariants>;

/**
 * Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.
 *
 * @example
 * <Button size="md" variant="solid">Solid Button</Button>
 *
 * @param props - The props of the Button component.
 *
 * @returns The Button component.
 */
const Button = memo(
  forwardRef(((props, ref) => {
    const { size, variant, className, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Box
        as="button"
        type="button"
        className={cn(buttonVariants({ size, variant, className }))}
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'button', ButtonProps>)
) as UIComponent<'button', ButtonProps>;

Button.displayName = 'Button';

export default Button;
