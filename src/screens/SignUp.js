import React, { useContext } from 'react';
import { ThemeContext } from 'react-native-elements';
import styled from 'styled-components';

import SignUpForm from '../containers/forms/SignUp';

const SignUp = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledSignUp backgroundColor={theme.colors.backgroundColor}>
      <HeaderText color={theme.colors.textColor}>Sign Up</HeaderText>
      <SignUpForm />
      <TermsAndConditions color={theme.colors.textColor}>
        By creating an account, you agree to
        <HeaderText color={theme.colors.textColor} fontSize={'16px'}>
          Romans:
        </HeaderText>
      </TermsAndConditions>
      <Link color={theme.colors.textColor}> Terms and Conditions</Link>
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
  font-size: ${props => props.fontSize || '30px'};
  text-align: center;
  font-family: 'Lacquer-Regular';
  color: ${props => props.color || 'black'};
`;

const TermsAndConditions = styled.Text`
  text-align: center;
  margin-top: 10px;
  color: ${props => props.color};
`;
const Link = styled.Text`
  text-align: center;
  color: blue;
`;

export default SignUp;
