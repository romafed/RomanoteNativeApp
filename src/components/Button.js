import React, {useContext} from 'react';
import {Button as ButtonUi, ThemeContext} from 'react-native-elements';

const Button = ({type = 'solid', onPress, children}) => {
  const {theme} = useContext(ThemeContext);
  const buttonStyle = {
    minWidth: 250,
    backgroundColor: type === 'solid' ? theme.colors.textColor : 'transparent',
  };
  const titleStyle = {
    color:
      theme.colors.textColor === 'rgb(255,255,255)'
        ? type === 'solid'
          ? 'black'
          : theme.colors.textColor
        : type === 'clear'
        ? 'rgb(56,39,22)'
        : 'white',
  };
  return (
    <ButtonUi
      type={type}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
      title={children}
      onPress={onPress}
    />
  );
};

export default Button;
