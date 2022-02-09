import React from "react";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { GameData, GamesState } from "@types";
import { GameButton } from "@components";

type GameChoiceProps = {
  games: GameData[];
  handleGameButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const GameChoice = ({
  games,
  handleGameButtonClick,
}: GameChoiceProps) => {
  const activeGame = useSelector((state: GamesState) => state.games.activeGame);

  return (
    <S.Container>
      <p>Choose a game</p>
      <S.Games>
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
      </S.Games>
    </S.Container>
  );
};
