import * as yup from 'yup';

export const changeSchema = yup.object({
  password: yup
    .string()
    .max(6, 'The password can have only 6 characters.')
    .required('Required field.')
});