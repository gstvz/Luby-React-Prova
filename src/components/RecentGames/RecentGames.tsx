import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GamesState, UserState } from "../../shared/types";
import { getGamesData } from "../../store/games/thunk";
import { getUserBets } from "../../store/user/thunk";
import { GameFilter, GamesList } from "../";
import * as S from "./styles";

export const RecentGames = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: GamesState) => state.games.types);
  const activeGame = useSelector((state: GamesState) => state.games.activeGame);
  const userBets = useSelector((state: UserState) => state.user.userBets);
  const [selectedGames, setSelectedGames] = useState<string[]>([]);

  useEffect(() => {
    dispatch(getGamesData());
  }, []);

  useEffect(() => {
    const params = `type%5B%5D=${selectedGames.join("&type%5B%5D=")}`;
    dispatch(getUserBets(params));
  }, [selectedGames]);

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
            selectedGames={selectedGames}
            setSelectedGames={setSelectedGames}
          />
        </S.RecentGamesFilter>
        <S.NewBet to="bet">
          New Bet
          <S.ArrowRight />
        </S.NewBet>
      </S.RecentGames>
      {selectedGames.length === 0 ? (
        <S.EmptyGames>
          <S.EmptyCartIcon />
          Não há jogos ativos!
        </S.EmptyGames>
      ) : (
        <GamesList games={games} activeGame={activeGame} userBets={userBets} />
      )}
    </>
  );
};
