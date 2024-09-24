import Center from '@/components/ui/layout/center';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

/**
 * Circle is a layout component that centers its child within itself with round border-radius.
 *
 * @example
 * <Circle>
 *  ...
 * </Circle>
 *
 * @param props - The props of the component.
 *
 * @returns The Circle component.
 */
const Circle: UIComponent<'div', object> = memo(
  forwardRef(((props, ref) => {
    const { className, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Center
        className={cn('flex-shrink-0 flex-grow-0 rounded-full', className)}
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'div', object>)
) as UIComponent<'div', object>;

Circle.displayName = 'Circle';

export default Circle;
