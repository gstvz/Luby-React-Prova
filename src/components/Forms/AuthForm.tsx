import React from "react";
import * as S from "./styles";

export const AuthForm = () => {
  return (
    <S.Container>
      <S.FormTitle>Authentication</S.FormTitle>
      <S.Form>
        <S.Label htmlFor="email">
          <S.Input type="text" id="email" placeholder="Email" />
        </S.Label>
        <S.Label htmlFor="password">
          <S.Input type="password" id="password" placeholder="Password" />
        </S.Label>
        <S.PasswordLink to="/">I forget my password</S.PasswordLink>
        <S.Button>Log In <S.ArrowRight /></S.Button>
      </S.Form>
    </S.Container>
  );
};