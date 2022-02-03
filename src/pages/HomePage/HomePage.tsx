import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { RecentGames } from "../../components/RecentGames/RecentGames";
import * as S from "./styles";

export const HomePage = () => {
  return (
    <>
      <Header isHome />
      <S.Main>
        <S.MainContent>
          <RecentGames />
        </S.MainContent>
      </S.Main>
      <Footer />
    </>
  );
};
