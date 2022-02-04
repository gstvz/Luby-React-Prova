import React, { SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { GameData, UserBets } from "../../shared/types/index";
import { gamesActions } from "../../store/games/games";
import { GameButton } from "../";
import * as S from "./styles";

type GameFilterProps = {
  games: GameData[];
  activeGame: GameData;
  userBets: UserBets;
  selectedGames: string[];
  setSelectedGames: React.Dispatch<SetStateAction<string[]>>;
};

export const GameFilter = (props: GameFilterProps) => {
  const dispatch = useDispatch();

  const handleGameButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const selectedGame = (event.target as HTMLButtonElement).value;
    const newActiveGame = props.games.find(
      (game) => game.type === selectedGame
    );

    if (props.selectedGames.includes(selectedGame)) {
      props.setSelectedGames((prevSelectedGames) => {
        return prevSelectedGames.filter((prevSelectedGame) => {
          return prevSelectedGame !== selectedGame;
        });
      });
      return;
    }

    props.setSelectedGames((prevSelectedGames) => {
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
      {props.games.map((game) => {
        return (
          <GameButton
            key={game.id}
            color={game.color}
            value={game.type}
            handleGameButtonClick={handleGameButtonClick}
            isActive={props.selectedGames.includes(game.type)}
          >
            {game.type}
          </GameButton>
        );
      })}
    </S.Container>
  );
};
