import React from "react";
import { useSelector } from "react-redux";
import { GameData, GamesState } from "../../shared/types/index";
import { GameButton } from "../GameButton/GameButton";
import * as S from "./styles";

type GameChoiceProps = {
  games: GameData[];
  handleGameButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const GameChoice = (props: GameChoiceProps) => {
  const activeGame = useSelector((state: GamesState) => state.games.activeGame);

  return (
    <S.Container>
      <p>Choose a game</p>
      <S.Games>
        {props.games.map((game) => {
          return (
            <GameButton
              key={game.id}
              color={game.color}
              value={game.type}
              handleGameButtonClick={props.handleGameButtonClick}
              isActive={activeGame.id === game.id}
            >
              {game.type}
            </GameButton>
          );
        })}
      </S.Games>
    </S.Container>
  );
};
