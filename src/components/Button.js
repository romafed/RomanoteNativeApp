import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as ButtonUi} from 'react-native-elements';

const Button = ({type = 'solid', onPress, children}) => {
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
  },
  titleStyle: {},
});

export default Button;
