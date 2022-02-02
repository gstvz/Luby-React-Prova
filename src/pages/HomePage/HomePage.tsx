import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { GamesList } from "../../components/GamesList/GamesList";
import { Header } from "../../components/Header/Header";
import * as S from "./styles";

export const HomePage = () => {
  return (
    <>
      <Header />
      <S.Main>
        <S.MainContent>
          <GamesList />
        </S.MainContent>
      </S.Main>
      <Footer />
    </>
  );
};
