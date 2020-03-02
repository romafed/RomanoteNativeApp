import React, { useContext } from 'react';
import { Button as ButtonUi, ThemeContext } from 'react-native-elements';

const Button = ({ type = 'solid', disabled = false, onPress, children }) => {
  const { theme } = useContext(ThemeContext);
  const buttonStyle = {
    minWidth: 250,
    backgroundColor: type === 'solid' ? theme.colors.textColor : 'transparent',
  };
  const titleStyle = {
    color:
      theme.colors.textColor === 'rgb(255,255,255)'
        ? type === 'solid'
          ? 'rgb(56,39,22)'
          : theme.colors.textColor
        : type === 'clear'
        ? 'rgb(56,39,22)'
        : 'rgb(255,255,255)',
  };
  return (
    <ButtonUi
      type={type}
      disabled={disabled}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
      title={children}
      onPress={onPress}
    />
  );
};

export default Button;
