import React, { SetStateAction } from "react";
import * as S from "./styles";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { GamesState } from "@types";
import { gamesActions } from "@store";

type GameActionsProps = {
  selectedNumbers: string[];
  setSelectedNumberButtons: React.Dispatch<SetStateAction<string[]>>;
};

export const GameActions = ({
  selectedNumbers,
  setSelectedNumberButtons,
}: GameActionsProps) => {
  const dispatch = useDispatch();
  const activeGame = useSelector((state: GamesState) => state.games.activeGame);
  const cartGames = useSelector((state: GamesState) => state.games.bets);

  const formatNumber = (number: number) => {
    const formattedNumber = number < 10 ? `0${number}` : `${number}`;
    return formattedNumber;
  };

  const handleCompleteGame = () => {
    const numbersLeft = activeGame.max_number - selectedNumbers.length;

    if (numbersLeft === 0) {
      toast.error("Your game is already completed!");
      return;
    }

    const randomNumbers: string[] = [];

    while (randomNumbers.length !== numbersLeft) {
      let randomNumber = Math.floor(Math.random() * activeGame.range);

      const formattedNumber = formatNumber(randomNumber);

      if (
        !randomNumbers.includes(formattedNumber) &&
        !selectedNumbers.includes(formattedNumber) &&
        formattedNumber !== "00"
      ) {
        randomNumbers.push(formattedNumber);
      }
    }

    setSelectedNumberButtons((prevSelectedNumbers) => [
      ...prevSelectedNumbers,
      ...randomNumbers,
    ]);

    dispatch(
      gamesActions.setSelectedNumbers({
        selectedNumbers: [...selectedNumbers, randomNumbers],
      })
    );
  };

  const handleClearGame = () => {
    setSelectedNumberButtons([]);

    dispatch(
      gamesActions.setSelectedNumbers({
        selectedNumbers: [],
      })
    );
  };

  const isGameAlreadyOnCart = (game: {
    game_id: number;
    numbers: string[];
  }) => {
    const gameType = game.game_id;
    const gameNumbers = game.numbers;
    let boolean = false;

    for (const item of cartGames) {
      if (item.game_id === gameType) {
        boolean = JSON.stringify(gameNumbers) === JSON.stringify(item.numbers);
      }
    }

    return boolean;
  };

  const handleAddToCart = () => {
    if (selectedNumbers.length < activeGame.max_number) {
      const numbersLeft = activeGame.max_number - selectedNumbers.length;
      toast.error(
        `You still have to choose ${numbersLeft} ${
          numbersLeft === 1 ? "number" : "numbers"
        }!`
      );
      return;
    }

    const sortedNumbers = selectedNumbers
      .map((number) => {
        return parseInt(number);
      })
      .sort((a, b) => {
        return a - b;
      })
      .map((number) => {
        const formattedNumber = formatNumber(number);
        return formattedNumber;
      });

    const newBet = {
      game_id: activeGame.id,
      numbers: sortedNumbers,
    };

    if (isGameAlreadyOnCart(newBet)) {
      toast.error("You already have this game on your cart!");
      return;
    }

    dispatch(gamesActions.addGameToCart(newBet));
    dispatch(gamesActions.calculateCartTotal());
    setSelectedNumberButtons([]);
    toast.success('Game added to cart!');
  };

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
