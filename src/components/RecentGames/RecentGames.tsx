import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GamesState, UserState } from "../../shared/types";
import { getGamesData } from "../../store/games/thunk";
import { getUserBets } from "../../store/user/thunk";
import { GameFilter } from "../GameFilter/GameFilter";
import { GamesList } from "../GamesList/GamesList";
import * as S from "./styles";

export const RecentGames = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: GamesState) => state.games.types);
  const activeGame = useSelector((state: GamesState) => state.games.activeGame);
  const userBets = useSelector((state: UserState) => state.user.userBets);

  useEffect(() => {    
    dispatch(getGamesData());
  }, []);

  useEffect(() => {
    const params = `type%5B%5D=${activeGame.type}`
    dispatch(getUserBets(params));
  }, [activeGame.type])

  return (
    <>
      <S.RecentGames>
        <S.RecentGamesFilter>
          <S.RecentGamesTitle>RECENT GAMES</S.RecentGamesTitle>
          <S.RecentGamesFilterText>Filters</S.RecentGamesFilterText>
          <GameFilter
            games={games}
            activeGame={activeGame}
            userBets={userBets}
          />
        </S.RecentGamesFilter>
        <S.NewBet to="bet">
          New Bet
          <S.ArrowRight />
        </S.NewBet>
      </S.RecentGames>
      <GamesList games={games} activeGame={activeGame} userBets={userBets} />
    </>
  );
};
