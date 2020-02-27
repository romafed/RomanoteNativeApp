import React, {useContext} from 'react';
import {ThemeContext} from 'react-native-elements';
import styled from 'styled-components';

const LogIn = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <StyledLogIn backgroundColor={theme.colors.backgroundColor}>
      <HeaderText color={theme.colors.textColor}>Log in</HeaderText>
    </StyledLogIn>
  );
};

const StyledLogIn = styled.View`
  flex: 1;
  position: relative;
  background-color: ${props => props.backgroundColor};
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.Text`
  color: ${props => props.color || 'black'};
`;

export default LogIn;
