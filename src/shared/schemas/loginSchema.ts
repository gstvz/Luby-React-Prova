import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("Invalid email.").required("Required field."),
  password: yup
    .string()
    .max(6, "Invalid password.")
    .required("Required field."),
});
