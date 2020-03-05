import { useEffect, useState, useRef } from 'react';
import { Keyboard } from 'react-native';

const useKeyboardStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const keyboardShowListener = useRef(null);
  const keyboardHideListener = useRef(null);

  useEffect(() => {
    keyboardShowListener.current = Keyboard.addListener('keyboardDidShow', () =>
      setIsOpen(true),
    );
    keyboardHideListener.current = Keyboard.addListener('keyboardDidHide', () =>
      setIsOpen(false),
    );
    return () => {
      keyboardShowListener.current.remove();
      keyboardHideListener.current.remove();
    };
  });

  return isOpen;
};

export default useKeyboardStatus;
