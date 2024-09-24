import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

/**
 * Flex is Box with display set to flex.
 *
 * @example
 * <Flex>
 *  ...
 * </Flex>
 *
 * @param props - The props of the component
 * @returns The Flex component
 */
const Flex: UIComponent<'div', object> = memo(
  forwardRef(((props, ref) => {
    const { className, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return <Box className={cn('flex', className)} {...remainingProps} />;
  }) satisfies UIComponent<'div', object>)
) as UIComponent<'div', object>;

Flex.displayName = 'Flex';

export default Flex;
