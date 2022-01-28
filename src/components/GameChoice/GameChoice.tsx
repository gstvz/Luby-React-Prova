import React from "react";
import { useSelector } from "react-redux";
import { GameData, GamesState } from "../../shared/types/index";
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
            <S.GameButton
              key={game.id}
              color={game.color}
              value={game.id}
              onClick={props.handleGameButtonClick}
              isActive={activeGame.id === game.id}
            >
              {game.type}
            </S.GameButton>
          );
        })}
      </S.Games>
    </S.Container>
  );
};
