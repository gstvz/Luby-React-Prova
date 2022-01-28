import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GamesState } from "../../shared/types/index";
import { gamesActions } from '../../store/games/games';
import { getGamesData } from "../../store/games/gamesThunk";
import { GameButton } from "../GameButton/GameButton";

export const GameFilter = () => {
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
    <>
      {games.map((game) => {
        return (
          <GameButton
            key={game.id}
            color={game.color}
            value={game.id}
            handleGameButtonClick={handleGameButtonClick}
            isActive={activeGame.id === game.id}
          >
            {game.type}
          </GameButton>
        );
      })}
    </>
  );
};
