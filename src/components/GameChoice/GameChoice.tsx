import React from "react";
import { GameData } from "../../shared/types/index";
import * as S from "./styles";

type GameChoiceProps = {
  games: GameData[];
  handleGameButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const GameChoice = (props: GameChoiceProps) => {
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
            >
              {game.type}
            </S.GameButton>
          );
        })}
      </S.Games>
    </S.Container>
  );
};
