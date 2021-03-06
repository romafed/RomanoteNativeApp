import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { logInValidation } from '../../validation';

// Components
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';

const LogIn = ({ handleLogInUser }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: logInValidation,
    onSubmit: async (values, { setFieldError }) => {
      try {
        await handleLogInUser(values);
      } catch (ex) {
        setFieldError('server', 'Password or Email is incorrect');
      }
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
        error={formik.touched.email && formik.errors.email}
      >
        {formik.errors.email}
      </TextInput>
      <TextInput
        type="password"
        value={formik.values.password}
        label="Password:"
        onChange={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        secure={true}
        error={formik.touched.password && formik.errors.password}
      >
        {formik.errors.password}
      </TextInput>
      <Button
        disabled={
          Object.keys(formik.touched).length <= 0 ||
          Object.keys(formik.errors).length > 0
        }
        onPress={formik.handleSubmit}
      >
        Submit
      </Button>
      <ErrorMessage>{formik.errors.server}</ErrorMessage>
    </StyledLogInForm>
  );
};

const StyledLogInForm = styled.View`
  width: 100%;
`;

export default LogIn;
