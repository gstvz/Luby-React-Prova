import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isEmailValid } from "../../shared/helpers/emailValidation";
import { UserState } from "../../shared/types";
import { postUserData } from "../../store/user/thunk";
import * as S from "./styles";

export const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: UserState) => state.user.isAuthenticated);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    if(!isEmailValid(enteredEmail!)) {
      alert("Email inválido!");
      return;
    }

    const loginData = {
      email: enteredEmail,
      password: enteredPassword
    };

    dispatch(postUserData(loginData));
  };

  useEffect(() => {
    if(isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <S.Container>
      <S.FormTitle>Authentication</S.FormTitle>
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
        <S.Label htmlFor="password">
          <S.Input
            type="password"
            id="password"
            placeholder="Password"
            ref={passwordInputRef}
            required
          />
        </S.Label>
        <S.PasswordLink to="reset">I forgot my password</S.PasswordLink>
        <S.Button>
          Log In <S.ArrowRight />
        </S.Button>
      </S.Form>
      <S.ActionLink to="register">
        Sign Up <S.ArrowRight />
      </S.ActionLink>
    </S.Container>
  );
};
