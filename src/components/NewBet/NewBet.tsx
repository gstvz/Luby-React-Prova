import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGamesData } from "../../store/gamesThunk";
import { gamesActions } from '../../store/games';
import { GamesState } from "../../shared/types/index";
import { GameActions } from "../GameActions/GameActions";
import { GameChoice } from "../GameChoice/GameChoice";
import { GameBet } from "../GameBet/GameBet";
import * as S from "./styles";

export const NewBet = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: GamesState) => state.games.types);
  const activeGame = useSelector((state: GamesState) => state.games.activeGame);

  const handleGameButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const newActiveGame = games.find(
      (game) => game.id === +(event.target as HTMLButtonElement).value
    );

    dispatch(gamesActions.setActiveGame({
      activeGame: newActiveGame
    }));
  };

  useEffect(() => {
    dispatch(getGamesData());
  }, [dispatch]);

  return (
    <S.NewBet>
      <S.Title>
        <strong>NEW BET</strong> FOR {activeGame.type.toUpperCase()}
      </S.Title>
      <GameChoice games={games} handleGameButtonClick={handleGameButtonClick} />
      <GameBet description={activeGame.description} range={activeGame.range} />
      <GameActions />
    </S.NewBet>
  );
};
