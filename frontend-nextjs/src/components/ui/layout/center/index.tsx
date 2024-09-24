import Flex from '@/components/ui/layout/flex';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

/**
 * Center is a layout component that centers its child within itself given width and height.
 *
 * @example
 * <Center>
 *  ...
 * </Center>
 *
 * @param props - The props of the component.
 *
 * @returns The Center component.
 */
const Center: UIComponent<'div', object> = memo(
  forwardRef(((props, ref) => {
    const { className, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Flex
        className={cn('items-center justify-center', className)}
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'div', object>)
) as UIComponent<'div', object>;

Center.displayName = 'Center';

export default Center;
