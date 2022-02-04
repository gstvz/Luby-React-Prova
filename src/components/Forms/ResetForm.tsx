import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { isEmailValid } from "@helpers";
import { postResetPassword } from "@store";
import * as S from "./styles";

export const ResetForm = () => {
  const dispatch = useDispatch();
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;

    if (!isEmailValid(enteredEmail!)) {
      alert("Email inválido!");
      return;
    }

    const userEmail = {
      email: enteredEmail!,
    };

    dispatch(postResetPassword(userEmail));
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
          />
        </S.Label>
        <S.Button>
          Send Link <S.ArrowRight />
        </S.Button>
      </S.Form>
      <S.ActionLink to="/auth">
        <S.ArrowLeft />
        Back
      </S.ActionLink>
    </S.Container>
  );
};
