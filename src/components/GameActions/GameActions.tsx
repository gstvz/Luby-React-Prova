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

  const formatNumber = (number: number) => {
    const formattedNumber = number < 10 ? `0${number}` : `${number}`;
    return formattedNumber;
  }

  const handleCompleteGame = () => {
    const numbersLeft = activeGame.max_number - props.selectedNumbers.length;

    if (numbersLeft === 0) {
      alert("O seu jogo já está completo!");
      return;
    }

    const randomNumbers: string[] = [];

    while(randomNumbers.length !== numbersLeft) {
      let randomNumber = Math.floor(Math.random() * activeGame.range);

      const formattedNumber = formatNumber(randomNumber);

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

  const handleClearGame = () => {
    props.setSelectedNumberButtons([]);

    dispatch(gamesActions.setSelectedNumbers({
      selectedNumbers: []
    }));
  }

  const handleAddToCart = () => {    
    const sortedNumbers = props.selectedNumbers.map((number) => {
      return parseInt(number);
    }).sort((a, b) => {
      return a - b;
    }).map((number) => {
      const formattedNumber = formatNumber(number);
      return formattedNumber;
    });

    const newBet = {
      gameId: activeGame.id,
      numbers: sortedNumbers
    };

    dispatch(gamesActions.addGameToCart(newBet));
    dispatch(gamesActions.calculateCartTotal());
  }

  return (
    <S.Container>
      <S.ButtonsContainer>
        <S.GameButton onClick={handleCompleteGame}>Complete game</S.GameButton>
        <S.GameButton onClick={handleClearGame}>Clear game</S.GameButton>
      </S.ButtonsContainer>
      <S.CartButton onClick={handleAddToCart}>
        <S.CartIcon />
        Add to cart
      </S.CartButton>
    </S.Container>
  );
};
