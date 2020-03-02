import * as Yup from 'yup';

export const sigUpValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, 'To small name')
    .max(30, 'To long name')
    .required('Name is required'),
  email: Yup.string()
    .email('Email is not valid')
    .required('Email is required'),
  password: Yup.string()
    .min(4, 'To small password')
    .max(10, 'To big password')
    .required('Password is required'),
});
