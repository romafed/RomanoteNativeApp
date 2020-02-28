import React from 'react';
import styled from 'styled-components';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const SignUp = () => {
  return (
    <StyledForm>
      <TextInput label="Name:" />
      <TextInput label="Email:" />
      <TextInput label="Password:" secure={true} />
      <Button>Submit</Button>
    </StyledForm>
  );
};

const StyledForm = styled.View`
  width: 100%;
  justify-content: center;
  align-items: stretch;
`;

export default SignUp;
