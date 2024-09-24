import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { type VariantProps, cva } from 'class-variance-authority';
import { forwardRef, memo } from 'react';

/**
 * The text variants.
 */
const textVariants = cva('', {
  variants: {
    variant: {
      contrast:
        'text-inherit opacity-95 mix-blend-luminosity brightness-[1.5] contrast-[9000] grayscale-[1] invert-[1] [filter:var(--tw-invert)_var(--tw-grayscale)_var(--tw-brightness)_var(--tw-contrast)]',
    },
  },
});

/**
 * The props of the Text component.
 */
export type TextProps = VariantProps<typeof textVariants>;

/**
 * Text is the used to render text and paragraphs within an interface.
 *
 * @example
 * <Text>
 *  ...
 * </Text>
 *
 * @param props - The props of the component.
 *
 * @returns The Text component.
 */
const Text = memo(
  forwardRef(((props, ref) => {
    const { variant, className, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Box
        as="p"
        className={textVariants({ variant, className })}
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'p', TextProps>)
) as UIComponent<'p', TextProps>;

Text.displayName = 'Text';

export default Text;
