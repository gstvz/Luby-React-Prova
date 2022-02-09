import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { GamesState } from "@types";

type GameBetProps = {
  description: string;
  range: number;
  selectedNumbers: string[];
  handleNumberButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const GameBet = ({
  description,
  range,
  selectedNumbers,
  handleNumberButtonClick,
}: GameBetProps) => {
  const [numberButtons, setNumberButtons] = useState<number[]>([]);
  const activeGame = useSelector((state: GamesState) => state.games.activeGame);

  useEffect(() => {
    const createNumberButtonsArray = () => {
      const numbersArray = [];

      for (let number = 1; number <= range; number++) {
        numbersArray.push(number);
      }

      setNumberButtons(numbersArray);
    };

    createNumberButtonsArray();
  }, [range]);

  return (
    <S.Container>
      <S.Description>
        <p>
          <strong>Fill your bet</strong>
        </p>
        <p>{description}</p>
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
                isSelected={
                  selectedNumbers.includes(formattedNumber) ? true : false
                }
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
