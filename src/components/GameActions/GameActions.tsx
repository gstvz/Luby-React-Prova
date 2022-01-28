import React, { SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GamesState } from "../../shared/types/index";
import { gamesActions } from "../../store/games/games";
import * as S from "./styles";

type GameActionsProps = {
  selectedNumbers: string[];
  setSelectedNumberButtons: React.Dispatch<SetStateAction<string[]>>;
};

export const GameActions = (props: GameActionsProps) => {
  const dispatch = useDispatch();
  const activeGame = useSelector((state: GamesState) => state.games.activeGame);

  const handleCompleteGame = () => {
    const numbersLeft = activeGame.max_number - props.selectedNumbers.length;

    if (numbersLeft === 0) {
      alert("O seu jogo já está completo!");
      return;
    }

    const randomNumbers: string[] = [];

    while(randomNumbers.length !== numbersLeft) {
      let randomNumber = Math.floor(Math.random() * activeGame.range);

      const formattedNumber =
        randomNumber < 10 ? `0${randomNumber}` : `${randomNumber}`;

      if (!props.selectedNumbers.includes(formattedNumber)) {
        randomNumbers.push(formattedNumber);
      }
    }

    props.setSelectedNumberButtons((prevSelectedNumbers) => [
      ...prevSelectedNumbers,
      ...randomNumbers
    ]);

    dispatch(
      gamesActions.setSelectedNumbers({
        selectedNumbers: [...props.selectedNumbers, randomNumbers],
      })
    );
  };

  return (
    <S.Container>
      <S.ButtonsContainer>
        <S.GameButton onClick={handleCompleteGame}>Complete game</S.GameButton>
        <S.GameButton>Clear game</S.GameButton>
      </S.ButtonsContainer>
      <S.CartButton>
        <S.CartIcon />
        Add to cart
      </S.CartButton>
    </S.Container>
  );
};
