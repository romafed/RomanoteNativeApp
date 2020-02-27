import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from 'styled-components';
import {Button as ButtonUi} from 'react-native-elements';

const Button = ({type = 'solid', onPress, children}) => {
  const theme = useContext(ThemeContext);
  console.log(theme);
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

const {buttonStyle, titleStyle} = StyleSheet.create({
  buttonStyle: {
    width: 250,
    color: 'red',
  },
  titleStyle: {},
});

export default Button;
