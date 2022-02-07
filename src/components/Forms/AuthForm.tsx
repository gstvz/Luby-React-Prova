import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { UserState } from "@types";
import { postUserData } from "@store";
import { loginSchema } from "@schemas";
import * as S from "./styles";

type LoginInputs = {
  email: string,
  password: string
}

export const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: UserState) => state.user.isAuthenticated
  );
  const { register, handleSubmit, formState: { errors }} = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit: SubmitHandler<LoginInputs> = loginData => {
    dispatch(postUserData(loginData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <S.Container>
      <S.FormTitle>Authentication</S.FormTitle>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label htmlFor="email">
          <S.Input
            type="text"
            id="email"
            placeholder="Email"
            {...register("email")}
          />
          <S.InvalidInput>{errors.email?.message}</S.InvalidInput>
        </S.Label>
        <S.Label htmlFor="password">
          <S.Input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password")}
          />
          <S.InvalidInput>{errors.password?.message}</S.InvalidInput>
        </S.Label>
        <S.PasswordLink to="reset">I forgot my password</S.PasswordLink>
        <S.Button>
          Log In <S.ArrowRight />
        </S.Button>
      </S.Form>
      <S.ActionLink to="register">
        Sign Up <S.ArrowRight />
      </S.ActionLink>
    </S.Container>
  );
};
