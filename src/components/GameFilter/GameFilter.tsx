import React, { SetStateAction } from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { GameData, UserBets } from "@types";
import { gamesActions } from "@store";
import { GameButton } from "@components";

type GameFilterProps = {
  games: GameData[];
  activeGame: GameData;
  userBets: UserBets;
  selectedGames: string[];
  setSelectedGames: React.Dispatch<SetStateAction<string[]>>;
};

export const GameFilter = ({
  games,
  activeGame,
  userBets,
  selectedGames,
  setSelectedGames,
}: GameFilterProps) => {
  const dispatch = useDispatch();

  const handleGameButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const selectedGame = (event.target as HTMLButtonElement).value;
    const newActiveGame = games.find(
      (game) => game.type === selectedGame
    );

    if (selectedGames.includes(selectedGame)) {
      setSelectedGames((prevSelectedGames) => {
        return prevSelectedGames.filter((prevSelectedGame) => {
          return prevSelectedGame !== selectedGame;
        });
      });
      return;
    }

    setSelectedGames((prevSelectedGames) => {
      return [...prevSelectedGames, selectedGame];
    });

    dispatch(
      gamesActions.setActiveGame({
        activeGame: newActiveGame,
      })
    );
  };

  return (
    <S.Container>
      {games.map((game) => {
        return (
          <GameButton
            key={game.id}
            color={game.color}
            value={game.type}
            handleGameButtonClick={handleGameButtonClick}
            isActive={selectedGames.includes(game.type)}
          >
            {game.type}
          </GameButton>
        );
      })}
    </S.Container>
  );
};
