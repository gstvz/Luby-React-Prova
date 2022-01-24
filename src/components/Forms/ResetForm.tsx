import React from "react";
import * as S from "./styles";

export const ResetForm = () => {
  return (
    <S.Container>
      <S.FormTitle>Reset password</S.FormTitle>
      <S.Form>
        <S.Label htmlFor="email">
          <S.Input type="text" id="email" placeholder="Email" />
        </S.Label>
        <S.Button>
          Send Link <S.ArrowRight />
        </S.Button>
      </S.Form>
      <S.ActionLink to="/auth">
        <S.ArrowLeft />Back
      </S.ActionLink>
    </S.Container>
  );
};
