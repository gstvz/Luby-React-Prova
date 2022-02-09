import React from "react";
import * as S from "./styles";
import { Header, Footer, RecentGames } from "@components";

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
