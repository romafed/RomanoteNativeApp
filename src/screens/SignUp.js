import React from 'react';
import styled from 'styled-components';

const SignUp = () => {
  return (
    <StyledSignUp>
      <HeaderText>Sign Up</HeaderText>
    </StyledSignUp>
  );
};

const StyledSignUp = styled.View`
  flex: 1;
  position: relative;
  background-color: ${props =>
    props.theme.dark.backgroundColor || props.theme.light.backgroundColor};
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.Text`
  color: ${props => props.theme.dark.color || props.theme.light.color};
`;

export default SignUp;
