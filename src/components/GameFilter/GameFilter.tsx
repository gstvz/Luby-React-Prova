import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GamesState } from '../../shared/types/index';
import { getGamesData } from "../../store/gamesThunk";
import * as S from "./styles";

export const GameFilter = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: GamesState) => state.games.types);

  useEffect(() => {
    dispatch(getGamesData());
  }, [dispatch]);

  return (
    <>
      {games.map((game) => {
        return (
          <S.GameButton key={game.id} color={game.color}>
            {game.type}
          </S.GameButton>
        );
      })}
    </>
  );
};
