/* eslint-disable curly */
/* eslint-disable no-shadow */
import React, {useState, useContext} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {Input, ThemeContext} from 'react-native-elements';

const TextInput = ({label, onChange, onBlur}) => {
  const {theme} = useContext(ThemeContext);

  const [isActive, setActive] = useState(false);
  const [value, setValue] = useState('');

  const [top] = useState(new Animated.Value(20));
  const [border] = useState(new Animated.Value(0));

  const labelColor = {
    color: theme.colors.textColor,
    backgroundColor: theme.colors.backgroundColor,
  };
  const containerColor = {
    borderColor: theme.colors.textColor,
    borderWidth: isActive ? 4 : 2,
    borderBottomWidth: isActive ? 4 : 2,
  };
  const textColor = {
    color: theme.colors.textColor,
  };

  const handleOnBlur = () => {
    setActive(false);
    if (value) return null;
    Animated.spring(top, {
      toValue: 20,
      duration: 300,
    }).start();
    Animated.spring(border, {
      toValue: 4,
      duration: 300,
    }).start();
  };
  const handleOnFocus = () => {
    Animated.spring(top, {
      toValue: -10,
      duration: 300,
    }).start();
    Animated.spring(border, {
      toValue: 0,
      duration: 300,
    }).start();
    setActive(true);
  };

  return (
    <View style={input}>
      <Animated.Text style={{...labelStyle, ...labelColor, top: top}}>
        {label}
      </Animated.Text>
      <Input
        value={value}
        containerStyle={containerStyle}
        inputContainerStyle={{...inputContainerStyle, ...containerColor}}
        inputStyle={textColor}
        onChangeText={value => setValue(value)}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        editable={true}
      />
    </View>
  );
};

const {
  labelStyle,
  input,
  inputContainerStyle,
  containerStyle,
} = StyleSheet.create({
  input: {
    width: '100%',
    height: 65,
    marginVertical: 10,
    position: 'relative',
    justifyContent: 'flex-end',
  },
  inputContainerStyle: {
    paddingVertical: 5,
    borderRadius: 10,
    margin: 0,
  },
  labelStyle: {
    fontFamily: 'Lacquer-Regular',
    position: 'absolute',
    left: 20,
    fontSize: 18,
    zIndex: 1000,
    paddingHorizontal: 10,
  },
});

export default TextInput;
