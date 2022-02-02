import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { GameFilter } from "../../components/GameFilter/GameFilter";
import { GamesList } from "../../components/GamesList/GamesList";
import { Header } from "../../components/Header/Header";
import * as S from "./styles";

export const HomePage = () => {
  return (
    <>
      <Header />
      <S.Main>
        <S.MainContent>
          <S.RecentGames>
            <S.RecentGamesFilter>
              <S.RecentGamesTitle>RECENT GAMES</S.RecentGamesTitle>
              <S.RecentGamesFilterText>Filters</S.RecentGamesFilterText>
              <GameFilter />
            </S.RecentGamesFilter>
            <S.NewBet to="bet">
              New Bet
              <S.ArrowRight />
            </S.NewBet>
          </S.RecentGames>
          <GamesList />
        </S.MainContent>
      </S.Main>
      <Footer />
    </>
  );
};
