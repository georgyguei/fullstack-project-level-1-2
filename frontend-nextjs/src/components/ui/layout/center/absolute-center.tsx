import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { forwardRef, memo } from 'react';

/**
 * Configures variants for absolute centering using `cva`, setting 'absolute' as the base class.
 * Allows for specifying the axis of centering with default to 'both' for full centering.
 */
const absoluteCenterVariants = cva('absolute', {
  variants: {
    axis: {
      horizontal: '-translate-x-1/2 left-1/2',
      vertical: '-translate-y-1/2 top-1/2',
      both: '-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2',
    },
  },
  defaultVariants: {
    axis: 'both',
  },
});

/**
 * Type definition for props of the AbsoluteCenter component, derived from the absolute center variants.
 * Ensures type safety and IntelliSense support for component props in TypeScript.
 */
type AbsoluteCenterProps = VariantProps<typeof absoluteCenterVariants>;

/**
 * AbsoluteCenter is a layout component that centers its child relative to its parent by given axis.
 *
 * @example
 * <AbsoluteCenter axis="both">
 *  ...
 * </AbsoluteCenter>
 *
 * @param props - The props of the component.
 *
 * @returns The AbsoluteCenter component.
 */
const AbsoluteCenter: UIComponent<'div', AbsoluteCenterProps> = memo(
  forwardRef(((props, ref) => {
    const { axis, className, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Box
        className={cn(absoluteCenterVariants({ axis, className }))}
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'div', AbsoluteCenterProps>)
) as UIComponent<'div', AbsoluteCenterProps>;

AbsoluteCenter.displayName = 'AbsoluteCenter';

export default AbsoluteCenter;
