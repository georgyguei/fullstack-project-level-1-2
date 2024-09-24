import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

/**
 * The props of the Spacer component.
 */
type SpacerProps = {
  /**
   * Enforces that no children can be passed to the Spacer component.
   */
  children?: never;
};

/**
 * Spacer is a Box that creates an adjustable, empty space that can be used to tune the spacing between child elements within Flex.
 *
 * @example
 * <Flex>
 *  <>Item 1</>
 *  <Spacer />
 *  <>Item 2</>
 * </Flex>
 *
 * @param props - The props of the component
 *
 * @returns The Spacer component
 */
const Spacer: UIComponent<'div', SpacerProps> = memo(
  forwardRef(((props, ref) => {
    const { children, className, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Box
        className={cn('flex-1 place-self-stretch', className)}
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'div', SpacerProps>)
) as UIComponent<'div', SpacerProps>;

Spacer.displayName = 'Spacer';

export default Spacer;
