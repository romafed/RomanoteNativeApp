import React from 'react';
import styled from 'styled-components';

import TextInput from '../../components/TextInput';

const SignUp = () => {
  return (
    <StyledForm>
      <TextInput label="Name:" />
      <TextInput label="Email:" />
    </StyledForm>
  );
};

const StyledForm = styled.View`
  width: 100%;
`;

export default SignUp;
