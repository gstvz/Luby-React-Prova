import React, { useRef } from "react";
import { isEmailValid } from "@helpers";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "@services";

export const ResetForm = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;

    if (!isEmailValid(enteredEmail!)) {
      alert("Email inválido!");
      return;
    }

    const userEmail = {
      email: enteredEmail!,
    };

    const userToken = await resetPassword(userEmail);

    navigate(`/auth/reset/${userToken}`);
  };

  return (
    <S.Container>
      <S.FormTitle>Reset password</S.FormTitle>
      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor="email">
          <S.Input
            type="text"
            id="email"
            placeholder="Email"
            ref={emailInputRef}
            required
          />
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
