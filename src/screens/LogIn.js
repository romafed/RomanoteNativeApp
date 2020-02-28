import React, {useContext} from 'react';
import {ThemeContext} from 'react-native-elements';
import styled from 'styled-components';

import LogInForm from '../containers/forms/LogIn';

const LogIn = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <StyledLogIn backgroundColor={theme.colors.backgroundColor}>
      <HeaderText color={theme.colors.textColor}>Log in</HeaderText>
      <LogInForm />
      <ForgotPassword color={theme.colors.textColor}>
        Forgot password?
      </ForgotPassword>
    </StyledLogIn>
  );
};

const StyledLogIn = styled.View`
  flex: 1;
  position: relative;
  justify-content: flex-start;
  background-color: ${props => props.backgroundColor};
  padding: 35px 20px;
`;

const HeaderText = styled.Text`
  font-size: ${props => props.fontSize || '30px'};
  text-align: center;
  font-family: 'Lacquer-Regular';
  color: ${props => props.color || 'black'};
`;

const ForgotPassword = styled.Text`
  font-size: 17px;
  text-align: center;
  color: ${props => props.color || 'black'};
  margin: 30px 0;
`;

export default LogIn;
