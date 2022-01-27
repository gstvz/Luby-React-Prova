import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getGamesData } from "../../store/gamesThunk";
import { GameActions } from "../GameActions/GameActions";
import { GameChoice } from "../GameChoice/GameChoice";
import { GameBet } from "../GameBet/GameBet";
import * as S from "./styles";

type gamesState = {
  games: {
    min_cart_value: 0,
    types: []
  }
}

export const NewBet = () => {
  const dispatch = useDispatch(); 
  const games = useSelector((state: gamesState) => state.games.types);
  
  useEffect(() => {    
    dispatch(getGamesData());    
  }, [dispatch]);

  console.log(games);

  return (
    <S.NewBet>
      <S.Title>
        <strong>NEW BET</strong> FOR MEGASENA
      </S.Title>
      <GameChoice />
      <GameBet />
      <GameActions />
    </S.NewBet>
  );
};
