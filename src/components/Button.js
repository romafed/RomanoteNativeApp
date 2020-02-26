import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {Button as ButtonPaper} from 'react-native-paper';

const Button = ({mode = 'contained', onPress, children}) => {
  const theme = useContext(ThemeContext);
  const color =
    mode === 'contained'
      ? 'rgb(56,39,22)'
      : theme.dark.color || theme.light.color;
  return (
    <StyledButton
      onPress={onPress}
      mode={mode}
      labelStyle={{
        color: color,
      }}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(ButtonPaper)`
  min-width: 50%;
  background-color: ${props =>
    props.mode === 'contained' ? 'rgb(255,255,255)' : 'transparent'};
`;

export default Button;
