import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, AuthForm, ChangeForm, RegisterForm, ResetForm } from '@components';
import * as S from "./styles";

export const AuthPage = () => {
  return (
    <S.Main>
      <S.MainContent>
        <S.Container>
          <S.Title>
            <S.TopSpan>The Greatest App</S.TopSpan>
            <S.CenterSpan>for</S.CenterSpan>
            <S.BottomSpan>LOTTERY</S.BottomSpan>
          </S.Title>
        </S.Container>
        <S.Container>
          <Routes>
            <Route path="/" element={<AuthForm />} />
            <Route path="reset" element={<ResetForm />} />
            <Route path="reset/:token" element={<ChangeForm />} />
            <Route path="register" element={<RegisterForm />} />
          </Routes>
        </S.Container>
      </S.MainContent>
      <Footer />
    </S.Main>
  );
};
