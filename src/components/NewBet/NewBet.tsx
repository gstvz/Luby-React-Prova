import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getGamesData, gamesActions } from "@store";
import { GamesState } from "@types";
import { GameChoice, GameBet, GameActions } from "@components";

export const NewBet = () => {
  const [selectedNumbers, setSelectedNumberButtons] = useState<string[]>([]);
  const dispatch = useDispatch();
  const games = useSelector((state: GamesState) => state.games.types);
  const activeGame = useSelector((state: GamesState) => state.games.activeGame);

  useEffect(() => {
    dispatch(getGamesData());
  }, [dispatch]);

  const handleGameButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const newActiveGame = games.find(
      (game) => game.id === +(event.target as HTMLButtonElement).value
    );

    dispatch(gamesActions.setSelectedNumbers({ selectedNumbers: [] }));
    setSelectedNumberButtons([]);

    dispatch(
      gamesActions.setActiveGame({
        activeGame: newActiveGame,
      })
    );
  };

  const handleNumberButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const newNumber = (event.target as HTMLButtonElement).value;

    if (selectedNumbers.includes(newNumber)) {
      const filteredSelectedNumbers = selectedNumbers.filter((number) => {
        return number !== newNumber;
      });

      setSelectedNumberButtons(filteredSelectedNumbers);
    } else {
      if (selectedNumbers.length === activeGame.max_number) {
        toast.error(`You already chose ${activeGame.max_number} numbers!`);
        return;
      } else {
        setSelectedNumberButtons((prevSelectedNumbers) => [
          ...prevSelectedNumbers,
          newNumber,
        ]);
      }
    }

    dispatch(gamesActions.setSelectedNumbers({ selectedNumbers }));
  };

  return (
    <S.NewBet>
      <S.Title>
        <strong>NEW BET</strong> FOR {activeGame.type.toUpperCase()}
      </S.Title>
      <GameChoice games={games} handleGameButtonClick={handleGameButtonClick} />
      <GameBet
        description={activeGame.description}
        range={activeGame.range}
        selectedNumbers={selectedNumbers}
        handleNumberButtonClick={handleNumberButtonClick}
      />
      <GameActions
        selectedNumbers={selectedNumbers}
        setSelectedNumberButtons={setSelectedNumberButtons}
      />
    </S.NewBet>
  );
};
