import React from "react";
import * as S from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePassword } from "@services";
import { changeSchema } from "@schemas";

type ChangeInput = {
  password: string;
};

export const ChangeForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangeInput>({
    resolver: yupResolver(changeSchema),
  });

  const onSubmit: SubmitHandler<ChangeInput> = async (newPassword) => {
    await changePassword(newPassword, params.token!);
    navigate("/");
  };

  return (
    <S.Container>
      <S.FormTitle>Reset password</S.FormTitle>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label htmlFor="password">
          <S.Input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password")}
          />
          <S.InvalidInput>{errors.password?.message}</S.InvalidInput>
        </S.Label>
        <S.Button>
          Reset <S.ArrowRight />
        </S.Button>
      </S.Form>
      <S.ActionLink to="/auth">
        <S.ArrowLeft />
        Back
      </S.ActionLink>
    </S.Container>
  );
};
