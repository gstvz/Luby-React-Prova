import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
      .string()
      .email('E-mail inválido.')
      .required('Campo obrigatório.'),
  password: yup
      .string()
      .max(6, 'Senha inválida.')
      .required('Campo obrigatório.')
});