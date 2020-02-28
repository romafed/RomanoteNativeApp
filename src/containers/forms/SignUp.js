import React from 'react';
import styled from 'styled-components';
import {useFormik} from 'formik';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <StyledForm>
      <TextInput
        type="name"
        value={formik.values.name}
        label="Name:"
        onChange={formik.handleChange('name')}
        onBlur={formik.handleBlur('name')}
      />
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
    </StyledForm>
  );
};

const StyledForm = styled.View`
  width: 100%;
  justify-content: center;
  align-items: stretch;
`;

export default SignUp;
