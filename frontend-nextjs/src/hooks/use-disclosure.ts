import { useRef, useState } from 'react';

/**
 * useDisclosure is a custom hook used to help handle common open, close, or toggle scenarios. It can be used to control feedback component such as modals, drawers, dropdowns, etc.
 *
 * @param defaultValue - Initial open/close state of the component
 */
export const useDisclosure = (defaultValue?: boolean) => {
  // State to manage the open/close status
  const [isOpen, setIsOpen] = useState<boolean>(!!defaultValue);

  /**
   * Opens the component
   */
  const open = useRef(() => setIsOpen(true));

  /**
   * Closes the component
   */
  const close = useRef(() => setIsOpen(false));

  /**
   * Toggles the open/close status of the component
   */
  const toggle = useRef(() => setIsOpen(prev => !prev));

  return {
    isOpen,
    open: open.current,
    close: close.current,
    toggle: toggle.current,
  };
};
