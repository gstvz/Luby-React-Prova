import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup
    .string()
    .required('Required field.'),
  email: yup
      .string()
      .email('Invalid email.')
      .required('Required field.'),
  password: yup
      .string()
      .max(6, 'The password max length is 6 characters.')
      .required('Required field.')
});