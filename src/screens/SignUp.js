import React, {useContext} from 'react';
import {ThemeContext} from 'react-native-elements';
import styled from 'styled-components';

import SignUpForm from '../containers/forms/SignUp';

const SignUp = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <StyledSignUp backgroundColor={theme.colors.backgroundColor}>
      <HeaderText color={theme.colors.textColor}>Sign Up</HeaderText>
      <SignUpForm />
    </StyledSignUp>
  );
};

const StyledSignUp = styled.View`
  flex: 1;
  position: relative;
  background-color: ${props => props.backgroundColor};
  padding: 35px 20px;
`;

const HeaderText = styled.Text`
  font-size: 30px;
  text-align: center;
  font-family: 'Lacquer-Regular';
  color: ${props => props.color || 'black'};
`;

export default SignUp;
