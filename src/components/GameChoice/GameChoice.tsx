import React from "react";
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

type GameChoiceProps = {
  games: GameData[];
};

export const GameChoice = (props: GameChoiceProps) => {
  return (
    <S.Container>
      <p>Choose a game</p>
      <S.Games>
        {props.games.map((game) => {
          return (
            <S.GameButton key={game.id} color={game.color}>
              {game.type}
            </S.GameButton>
          );
        })}
      </S.Games>
    </S.Container>
  );
};
