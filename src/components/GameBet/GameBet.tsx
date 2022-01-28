import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GamesState } from "../../shared/types/index";
import * as S from "./styles";

type GameBetProps = {
  description: string;
  range: number;
};

export const GameBet = (props: GameBetProps) => {
  const [numberButtons, setNumberButtons] = useState<number[]>([]);
  const [selectedNumbers, setSelectedNumbers] = useState<string[]>([]);
  const activeGame = useSelector((state: GamesState) => state.games.activeGame);

  const handleNumberButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const newNumber = (event.target as HTMLButtonElement).value;

    if(selectedNumbers.includes(newNumber)) {
      const filteredSelectedNumbers = selectedNumbers.filter((number) => {
        return number !== newNumber;
      });

      setSelectedNumbers(filteredSelectedNumbers);
    } else {
      setSelectedNumbers((prevSelectedNumbers) => [
        ...prevSelectedNumbers,
        newNumber,
      ]);
    };
  };

  useEffect(() => {
    const createNumberButtonsArray = () => {
      const numbersArray = [];

      for (let number = 1; number <= props.range; number++) {
        numbersArray.push(number);
      }

      setNumberButtons(numbersArray);
    };

    createNumberButtonsArray();
  }, [props.range]);

  return (
    <S.Container>
      <S.Description>
        <p>
          <strong>Fill your bet</strong>
        </p>
        <p>{props.description}</p>
      </S.Description>
      <S.List>
        {numberButtons.map((number) => {
          const formattedNumber = number < 10 ? `0${number}` : `${number}`;

          return (
            <S.ListItem key={number}>
              <S.NumberButton
                value={formattedNumber}
                onClick={handleNumberButtonClick}
                color={activeGame.color}
                isSelected={selectedNumbers.includes(formattedNumber) ? true : false}
              >
                {formattedNumber}
              </S.NumberButton>
            </S.ListItem>
          );
        })}
      </S.List>
    </S.Container>
  );
};
