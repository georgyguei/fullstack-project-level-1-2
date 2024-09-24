import type { UIComponent } from '@/components/ui/type';
import Text, { type TextProps } from '@/components/ui/typography/text';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { forwardRef, memo } from 'react';

/**
 * The heading variant.
 */
const headingVariant = cva('font-bold font-heading', {
  variants: {
    size: {
      '4xl': 'text-6xl leading-none',
      '3xl': 'text-5xl leading-none',
      '2xl': 'text-4xl leading-[1.2]',
      xl: 'text-3xl leading-[1.33]',
      lg: 'text-2xl leading-[1.33]',
      md: 'text-xl leading-[1.2]',
      sm: 'text-md leading-[1.2]',
      xs: 'text-sm leading-[1.2]',
    },
  },
  defaultVariants: {
    size: 'xl',
  },
});

/**
 * The props of the Heading component.
 */
type HeadingProps = VariantProps<typeof headingVariant> & TextProps;

/**
 * Heading is used to render semantic HTML heading elements.
 *
 * @example
 * <Heading>
 *  ...
 * </Heading>
 *
 * @param props - The props of the component.
 *
 * @returns The Heading component.
 */
const Heading = memo(
  forwardRef(((props, ref) => {
    const { size, className, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Text
        as="h2"
        className={cn(headingVariant({ size, className }))}
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'h2', HeadingProps>)
) as UIComponent<'h2', HeadingProps>;

Heading.displayName = 'Heading';

export default Heading;
