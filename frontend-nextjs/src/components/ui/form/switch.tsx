import Checkbox, { type CheckboxProps } from '@/components/ui/form/checkbox';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

/**
 * The props of the Switch component.
 */
export type SwitchProps = Omit<CheckboxProps, 'icon' | 'isIndeterminate'>;

/**
 * The Switch component is used as an alternative for the checkbox component.
 *
 * @example
 * <Switch isChecked />
 *
 * @param props - The props of the Switch component.
 *
 * @returns The Switch component.
 */
const Switch = memo(
  forwardRef(((props, ref) => {
    const { size = 'md', className, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Checkbox
        icon={<div className="sr-only" />}
        className={cn(
          size === 'sm' &&
            '- 0.125rem)] h-3 w-[1.375rem] after:size-3 data-[checked]:after:translate-x-[calc(1.375rem-0.75rem)]',
          size === 'md' &&
            'h-4 w-[1.875rem] after:size-4 data-[checked]:after:translate-x-[calc(1.875rem-1rem)]',
          size === 'lg' &&
            'h-6 w-[2.875rem] after:size-6 data-[checked]:after:translate-x-[calc(2.875rem-1.5rem)]',
          'relative box-content justify-start rounded-full border-0 bg-gray-300 p-0.5 transition-common duration-150 after:rounded-[inherit] after:bg-white after:transition-transform after:duration-normal focus-visible:shadow-outline data-[disabled]:opacity-40',
          'data-[checked]:!bg-blue-500',
          className
        )}
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'input', SwitchProps>)
) as UIComponent<'input', SwitchProps>;

Switch.displayName = 'Switch';

export default Switch;
