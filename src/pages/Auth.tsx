import React from "react";
import { Footer } from "../components/Footer/Footer";
import * as S from "./styles";

export const Auth = () => {
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
        <S.Container>Forms</S.Container>
      </S.MainContent>
      <Footer />
    </S.Main>
  );
};
