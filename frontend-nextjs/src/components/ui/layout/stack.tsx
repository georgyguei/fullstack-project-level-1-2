import Flex from '@/components/ui/layout/flex';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { forwardRef, memo } from 'react';

/**
 * Configures variants for the Stack component, allowing for customizable direction and spacing.
 */
const stackVariants = cva('gap-2', {
  variants: {
    direction: {
      column: 'flex-col',
      row: 'flex-row',
    },
  },
  defaultVariants: {
    direction: 'column',
  },
});

/**
 * Type definition for StackProps, derived from stackVariants to ensure type safety for props.
 */
type StackProps = VariantProps<typeof stackVariants>;

/**
 * Stack is a layout component used to group elements together and apply a space between them.
 *
 * @example
 * <Stack direction="row">
 *  ...
 * </Stack>
 *
 * @param props - The props of the component
 *
 * @returns The Stack component
 */
const Stack: UIComponent<'div', StackProps> = memo(
  forwardRef(((props, ref) => {
    const { className, direction, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Flex
        className={cn(stackVariants({ direction, className }))}
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'div', StackProps>)
) as UIComponent<'div', StackProps>;

Stack.displayName = 'Stack';

export default Stack;
