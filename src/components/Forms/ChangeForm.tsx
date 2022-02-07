import React, { useRef } from "react";
import { changePassword } from "@services";
import * as S from "./styles";
import { useParams } from "react-router-dom";

export const ChangeForm = () => {
  const params = useParams();
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredPassword = passwordInputRef.current?.value;

    const newPassword = {
      password: enteredPassword!,
    };

    changePassword(newPassword, params.token!);
  };

  return (
    <S.Container>
      <S.FormTitle>Reset password</S.FormTitle>
      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor="password">
          <S.Input
            type="text"
            id="password"
            placeholder="New Password"
            ref={passwordInputRef}
          />
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
