import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { postRegisterUser } from "../../store/user/thunk";
import * as S from "./styles";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    const newUser = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword
    };

    dispatch(postRegisterUser(newUser));
  }

  return (
    <S.Container>
      <S.FormTitle>Registration</S.FormTitle>
      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor="name">
          <S.Input
            type="text"
            id="name"
            placeholder="Name"
            ref={nameInputRef}
          />
        </S.Label>
        <S.Label htmlFor="email">
          <S.Input
            type="text"
            id="email"
            placeholder="Email"
            ref={emailInputRef}
          />
        </S.Label>
        <S.Label htmlFor="password">
          <S.Input
            type="password"
            id="password"
            placeholder="Password"
            ref={passwordInputRef}
          />
        </S.Label>
        <S.Button>
          Register
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
