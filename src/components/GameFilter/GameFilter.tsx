import React from "react";
import { useDispatch } from "react-redux";
import { GameData, UserBets } from "../../shared/types/index";
import { gamesActions } from '../../store/games/games';
import { GameButton } from "../GameButton/GameButton";

type GameFilterProps = {
  games: GameData[];
  activeGame: GameData;
  userBets: UserBets;
}

export const GameFilter = (props: GameFilterProps) => {
  const dispatch = useDispatch();

  const handleGameButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const newActiveGame = props.games.find(
      (game) => game.id === +(event.target as HTMLButtonElement).value
    );

    dispatch(gamesActions.setActiveGame({
      activeGame: newActiveGame
    }));
  };

  return (
    <>
      {props.games.map((game) => {
        return (
          <GameButton
            key={game.id}
            color={game.color}
            value={game.id}
            handleGameButtonClick={handleGameButtonClick}
            isActive={props.activeGame.id === game.id}
          >
            {game.type}
          </GameButton>
        );
      })}
    </>
  );
};
