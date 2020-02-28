import React from 'react';
import styled from 'styled-components';
import {useFormik} from 'formik';

// Components
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <StyledLogInForm>
      <TextInput
        type="email"
        value={formik.values.email}
        label="Email:"
        onChange={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
      />
      <TextInput
        type="password"
        value={formik.values.password}
        label="Password:"
        onChange={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        secure={true}
      />
      <Button onPress={formik.handleSubmit}>Submit</Button>
    </StyledLogInForm>
  );
};

const StyledLogInForm = styled.View`
  width: 100%;
`;

export default LogIn;
