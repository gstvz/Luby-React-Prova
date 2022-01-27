import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGamesData } from "../../store/gamesThunk";
import { GameActions } from "../GameActions/GameActions";
import { GameChoice } from "../GameChoice/GameChoice";
import { GameBet } from "../GameBet/GameBet";
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

export const NewBet = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: gamesState) => state.games.types);

  useEffect(() => {
    dispatch(getGamesData());
  }, [dispatch]);

  return (
    <S.NewBet>
      <S.Title>
        <strong>NEW BET</strong> FOR MEGASENA
      </S.Title>
      <GameChoice games={games} />
      <GameBet />
      <GameActions />
    </S.NewBet>
  );
};
