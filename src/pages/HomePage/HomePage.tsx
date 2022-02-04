import React from "react";
import { Header, Footer, RecentGames } from "../../components";
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
