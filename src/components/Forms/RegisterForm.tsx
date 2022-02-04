import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { isEmailValid } from "@helpers";
import { postRegisterUser } from "@store";
import * as S from "./styles";

type RegisterFormProps = {
  isAccount?: boolean;
}

export const RegisterForm = ({ isAccount }: RegisterFormProps) => {
  const dispatch = useDispatch();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    if (!isEmailValid(enteredEmail!)) {
      alert("Email inválido!");
      return;
    }

    const newUser = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
    };

    const updatedUser = {
      email: enteredEmail,
      name: enteredName,
    };

    dispatch(postRegisterUser(newUser));
  };

  return (
    <S.Container>
      <S.FormTitle>{isAccount ? "Update Account" : "Registration"}</S.FormTitle>
      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor="name">
          <S.Input
            type="text"
            id="name"
            placeholder="Name"
            ref={nameInputRef}
            required
          />
        </S.Label>
        <S.Label htmlFor="email">
          <S.Input
            type="text"
            id="email"
            placeholder="Email"
            ref={emailInputRef}
            required
          />
        </S.Label>        
        {!isAccount ?
          <S.Label htmlFor="password">
            <S.Input
              type="password"
              id="password"
              placeholder="Password"
              ref={passwordInputRef}
              required
            />
          </S.Label> :
          ''
        }
        <S.Button>
          {isAccount ? "Save" : "Register"}
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
