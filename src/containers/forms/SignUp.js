import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/native';

import { sigUpValidation } from '../../validation';

// Components
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';

const SignUp = ({ createUser }) => {
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: sigUpValidation,
    onSubmit: async (values, { setFieldError }) => {
      try {
        await createUser(values);
        navigation.navigate('LogIn');
      } catch (ex) {
        setFieldError('server', 'User is already exist');
      }
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
        error={formik.touched.name && formik.errors.name}
      >
        {formik.errors.name}
      </TextInput>
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
    </StyledForm>
  );
};

const StyledForm = styled.View`
  width: 100%;
  justify-content: center;
  align-items: stretch;
`;

export default SignUp;
