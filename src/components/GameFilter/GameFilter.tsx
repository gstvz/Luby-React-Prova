import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGamesData } from "../../store/gamesThunk";
import * as S from "./styles";

type GameData = {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  "max-number": number;
  color: string;
};

type gamesState = {
  games: {
    min_cart_value: 0;
    types: GameData[];
  };
};

export const GameFilter = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: gamesState) => state.games.types);

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
