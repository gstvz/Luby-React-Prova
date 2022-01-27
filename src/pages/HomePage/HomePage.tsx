import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { GameFilter } from "../../components/GameFilter/GameFilter";
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
            <S.NewBet to="/">
              New Bet
              <S.ArrowRight />
            </S.NewBet>
          </S.RecentGames>
          <S.RecentGamesList>
            <S.RecentGamesItem>
              <S.RecentGamesItemNumbers>
                01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25
              </S.RecentGamesItemNumbers>
              <S.RecentGamesItemDate>
                30/11/2020 - (R$ 2,50)
              </S.RecentGamesItemDate>
              <S.RecentGamesItemName>Lotofácil</S.RecentGamesItemName>
            </S.RecentGamesItem>
            <S.RecentGamesItem>
              <S.RecentGamesItemNumbers>
                01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25
              </S.RecentGamesItemNumbers>
              <S.RecentGamesItemDate>
                30/11/2020 - (R$ 2,50)
              </S.RecentGamesItemDate>
              <S.RecentGamesItemName>Lotofácil</S.RecentGamesItemName>
            </S.RecentGamesItem>
          </S.RecentGamesList>
        </S.MainContent>
      </S.Main>
      <Footer />
    </>
  );
};
