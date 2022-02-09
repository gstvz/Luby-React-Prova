import React from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./styles";
import { createUser, updateMyUser } from "@services";

type RegisterFormProps = {
  isAccount?: boolean;
};

type RegisterInputs = {
  name: string;
  email: string;
  password?: string;
};

export const RegisterForm = ({ isAccount }: RegisterFormProps) => {
  const registerSchema = yup.object({
    name: yup
      .string()
      .max(50, "Must have a maximum of 50 characters.")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/, {
        message: "Must contain only letters, acentuation and spaces.",
      })
      .required("Required field."),
    email: yup.string().email("Invalid email.").required("Required field."),
    ...(!isAccount && {
      password: yup
        .string()
        .max(6, "Must have a maximum of 6 characters.")
        .required("Required field."),
    }),
  });

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterInputs> = async (userData) => {
    if (isAccount) {
      await updateMyUser(userData);
      navigate("/");
    }

    await createUser(userData);
    navigate("/");
  };

  return (
    <S.Container>
      <S.FormTitle>{isAccount ? "Update Account" : "Registration"}</S.FormTitle>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label htmlFor="name">
          <S.Input
            type="text"
            id="name"
            placeholder="Name"
            {...register("name")}
          />
          <S.InvalidInput>{errors.name?.message}</S.InvalidInput>
        </S.Label>
        <S.Label htmlFor="email">
          <S.Input
            type="text"
            id="email"
            placeholder="Email"
            {...register("email")}
          />
          <S.InvalidInput>{errors.email?.message}</S.InvalidInput>
        </S.Label>
        {!isAccount ? (
          <S.Label htmlFor="password">
            <S.Input
              type="password"
              id="password"
              placeholder="Password"
              {...register("password")}
            />
            <S.InvalidInput>{errors.password?.message}</S.InvalidInput>
          </S.Label>
        ) : null}
        <S.Button>
          {isAccount ? "Save" : "Register"}
          <S.ArrowRight />
        </S.Button>
      </S.Form>
      <S.ActionLink to="/auth">
        <S.ArrowLeft />
        Back
      </S.ActionLink>
    </S.Container>
  );
};
