import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "@services";
import { resetSchema } from "@schemas";

type ResetInput = {
  email: string
}

export const ResetForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }} = useForm<ResetInput>({
    resolver: yupResolver(resetSchema)
  });

  const onSubmit: SubmitHandler<ResetInput> = async(userEmail) => {
    const userToken = await resetPassword(userEmail);

    navigate(`/auth/reset/${userToken}`);
  };

  return (
    <S.Container>
      <S.FormTitle>Reset password</S.FormTitle>
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
        <S.Button>
          Send Link <S.ArrowRight />
        </S.Button>
      </S.Form>
      <S.ActionLink to="/auth/reset/change-password">
        <S.ArrowLeft />
        Back
      </S.ActionLink>
    </S.Container>
  );
};
