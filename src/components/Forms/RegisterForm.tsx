import React from "react";
import * as S from "./styles";

export const RegisterForm = () => {
  return (
    <S.Container>
      <S.FormTitle>Registration</S.FormTitle>
      <S.Form>
      <S.Label htmlFor="name">
          <S.Input type="text" id="name" placeholder="Name" />
        </S.Label>
        <S.Label htmlFor="email">
          <S.Input type="text" id="email" placeholder="Email" />
        </S.Label>
        <S.Label htmlFor="password">
          <S.Input type="password" id="password" placeholder="Password" />
        </S.Label>
        <S.Button>
          Register<S.ArrowRight />
        </S.Button>
      </S.Form>
      <S.ActionLink to="/auth">
        <S.ArrowLeft />Back
      </S.ActionLink>
    </S.Container>
  );
};
