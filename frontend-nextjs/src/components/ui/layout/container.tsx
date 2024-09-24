import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

/**
 * The props for the Container component.
 */
type ContainerProps = {
  /**
   * If true, container will center its children regardless of their width.
   */
  centerContent?: boolean;
};

/**
 * Containers are used to constrain a content's width to the current breakpoint, while keeping it fluid.
 *
 * @example
 * <Container>
 *  <>Content</>
 * </Container>
 *
 * @param props - The props of the component
 *
 * @returns The Container component
 */
const Container: UIComponent<'div', ContainerProps> = memo(
  forwardRef(((props, ref) => {
    const { centerContent, className, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Box
        className={cn(
          'w-full max-w-[60ch] ps-4 pe-4 [margin-inline:auto]',
          centerContent && 'flex flex-col items-center',
          className
        )}
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'div', ContainerProps>)
) as UIComponent<'div', ContainerProps>;

Container.displayName = 'Container';

export default Container;
