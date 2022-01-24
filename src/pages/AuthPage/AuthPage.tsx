import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { AuthForm } from "../../components/Forms/AuthForm";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { ResetForm } from "../../components/Forms/ResetForm";
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
            <Route path="/auth" element={<AuthForm />} />
            <Route path="/reset" element={<ResetForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </S.Container>
      </S.MainContent>
      <Footer />
    </S.Main>
  );
};
