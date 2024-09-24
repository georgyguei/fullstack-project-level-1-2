'use client';

import Box from '@/components/ui/layout/box';
import Center from '@/components/ui/layout/center';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import {
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { BiCheck, BiMinus } from 'react-icons/bi';
import Icon from '../../media/icon';
import style from './checkbox.module.css';

/**
 * The props of the Checkbox component.
 */
export type CheckboxProps = {
  icon?: React.ReactElement;
  isChecked?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isIndeterminate?: boolean;

  size?: 'sm' | 'md' | 'lg'; // md
};

/**
 * Checkbox component is used in forms when a user needs to select multiple values from several options.
 *
 * @example
 * <Checkbox>Label</Checkbox>
 *
 * @param props - The props of the Checkbox component.
 *
 * @returns The Checkbox component.
 */
const Checkbox = memo(
  forwardRef(((props, ref) => {
    const {
      isChecked: isCheckedProp,
      isDisabled,
      isInvalid,
      isReadOnly,
      isRequired,
      isIndeterminate,
      size = 'md',
      icon,
      className,
      defaultChecked,
      children,
      onChange,
      ...rest
    } = props;
    const remainingProps: object = { ...rest, ref };

    const [isCheckedState, setIsChecked] = useState<boolean>(
      isCheckedProp ?? defaultChecked ?? false
    );

    const isChecked = useMemo(
      () => isCheckedProp ?? isCheckedState,
      [isCheckedProp, isCheckedState]
    );

    const labelContent = useMemo(() => {
      return isValidElement(children) ? (
        cloneElement(children as React.ReactElement, {
          className: cn(
            'ms-2 select-none data-[disabled]:opacity-40',
            size === 'sm' && 'text-xs',
            size === 'md' && 'text-md',
            size === 'lg' && 'text-lg',
            (children as React.ReactElement).props.className
          ),
          'data-checked':
            (children as React.ReactElement).props['data-checked'] ?? isChecked
              ? ''
              : undefined,
          'data-disabled':
            (children as React.ReactElement).props['data-checked'] ?? isDisabled
              ? ''
              : undefined,
          'data-invalid':
            (children as React.ReactElement).props['data-checked'] ?? isInvalid
              ? ''
              : undefined,
        })
      ) : (
        <span
          className={cn(
            'ms-2 select-none data-[disabled]:opacity-40',
            size === 'sm' && 'text-sm',
            size === 'md' && 'text-md',
            size === 'lg' && 'text-lg'
          )}
          data-checked={isChecked ? '' : undefined}
          data-disabled={isDisabled ? '' : undefined}
          data-invalid={isInvalid ? '' : undefined}
        >
          {children}
        </span>
      );
    }, [children, size, isInvalid, isDisabled, isChecked]);

    const iconContent = useMemo(() => {
      return isValidElement(icon) ? (
        cloneElement(icon as React.ReactElement, {
          className: cn(
            'animate-checkbox stroke-2 transition-transform duration-normal',
            size === 'sm' && 'text-xs',
            (icon as React.ReactElement).props.className
          ),
        })
      ) : (
        <Icon
          as={isIndeterminate ? BiMinus : BiCheck}
          className={cn(
            'animate-checkbox stroke-2 transition-transform duration-normal',
            size === 'sm' && 'text-xs'
          )}
        />
      );
    }, [icon, isIndeterminate, size]);

    const handleChange = useCallback(
      (even: React.ChangeEvent<HTMLInputElement>) => {
        if (isReadOnly) return;
        if (onChange) {
          (onChange as React.ChangeEventHandler<HTMLInputElement>)(even);
        }
        if (isCheckedProp === undefined) {
          setIsChecked(even.target.checked);
        }
      },
      [onChange, isReadOnly, isCheckedProp]
    );

    return (
      <Box
        as="label"
        className={cn(
          'relative inline-flex cursor-pointer items-center align-top',
          isDisabled && 'cursor-not-allowed',
          style.checkbox
        )}
        data-checked={isChecked ? '' : undefined}
        data-disabled={isDisabled ? '' : undefined}
        data-invalid={isInvalid ? '' : undefined}
      >
        <input
          className="sr-only"
          type="checkbox"
          readOnly={isReadOnly}
          required={isRequired}
          disabled={isDisabled}
          aria-disabled={isDisabled || undefined}
          defaultChecked={defaultChecked}
          onChange={handleChange}
          {...remainingProps}
        />
        <Center
          as="span"
          className={cn(
            'inline-flex flex-shrink-0 select-none rounded-sm border-2 border-solid align-top text-white transition-shadow duration-normal data-[checked]:border-0 data-[disabled]:border-0 data-[indeterminate]:border-0 data-[invalid]:border-red-500 data-[checked]:bg-blue-500 data-[disabled]:bg-gray-100 data-[indeterminate]:bg-blue-500',
            size === 'sm' && 'size-3',
            size === 'md' && 'size-4',
            size === 'lg' && 'size-5',
            style['checkbox-icon'],
            className
          )}
          data-checked={isChecked ? '' : undefined}
          data-readonly={isReadOnly ? '' : undefined}
          data-disabled={isDisabled ? '' : undefined}
          data-invalid={isInvalid ? '' : undefined}
          data-indeterminate={isIndeterminate ? '' : undefined}
          aria-hidden
        >
          {isChecked || isIndeterminate ? iconContent : null}
        </Center>
        {labelContent}
      </Box>
    );
  }) satisfies UIComponent<'input', CheckboxProps>)
) as UIComponent<'input', CheckboxProps>;

Checkbox.displayName = 'Checkbox';

export default Checkbox;
