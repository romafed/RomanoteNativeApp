/* eslint-disable curly */
/* eslint-disable no-shadow */
import React, { useState, useContext, useRef } from 'react';
import styled from 'styled-components';
import { Animated } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import fromToAnimation from '../../animations/input';

import Icon from 'react-native-vector-icons/Entypo';
import InputError from './InputError';

const TextInput = ({
  value,
  label,
  type = 'off',
  error = false,
  children = '',
  secure = false,
  onChange,
  onBlur,
}) => {
  const { theme } = useContext(ThemeContext);
  const input = useRef(null);
  const [isSecure, setSecure] = useState(secure);

  const [top] = useState(new Animated.Value(16));
  const [border] = useState(new Animated.Value(2));

  const labelColor = {
    color: theme.colors.textColor,
    backgroundColor: theme.colors.backgroundColor,
  };
  const containerColor = {
    borderColor: theme.colors.textColor,
  };
  const textColor = {
    color: theme.colors.textColor,
  };

  const handleEndEditing = () => {
    fromToAnimation(border, 2);
    if (value) return null;
    fromToAnimation(top, 16);
  };
  const handleFocus = () => {
    fromToAnimation(border, 4);
    fromToAnimation(top, -16);
  };

  const handleFocusLabel = () => {
    input.current.focus();
  };

  return (
    <StyledInput style={{ ...containerColor, borderWidth: border }}>
      <Label onPress={handleFocusLabel} style={{ ...labelColor, top: top }}>
        {label}
      </Label>
      <StyledTextInput
        ref={input}
        style={textColor}
        value={value}
        onFocus={handleFocus}
        onBlur={onBlur}
        onEndEditing={handleEndEditing}
        onChangeText={onChange}
        secureTextEntry={isSecure}
        autoCompleteType={type}
        editable={true}
      />
      {secure && (
        <StyledIcon
          onPress={() => setSecure(value => !value)}
          name={isSecure ? 'eye-with-line' : 'eye'}
          size={30}
          color={theme.colors.textColor}
        />
      )}
      <InputError color={theme.colors.backgroundColor} show={error}>
        {children}
      </InputError>
    </StyledInput>
  );
};

const StyledInput = styled(Animated.View)`
  position: relative;
  width: 100%;
  height: 65px;
  padding: 0 10px;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 15px;
  border-radius: 10px;
  border-style: dotted;
`;

const StyledTextInput = styled.TextInput`
  width: 100%;
  height: 100%;
  font-size: 20px;
`;

const Label = styled(Animated.Text)`
  font-family: 'Lacquer-Regular';
  border-radius: 10px;
  position: absolute;
  left: 20px;
  font-size: 18px;
  z-index: 10;
  margin: 0;
  padding: 0 10px;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 20px;
`;

export default TextInput;
