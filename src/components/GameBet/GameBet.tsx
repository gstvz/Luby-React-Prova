import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GamesState } from "../../shared/types/index";
import * as S from "./styles";

type GameBetProps = {
  description: string;
  range: number;
  selectedNumbers: string[];
  handleNumberButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const GameBet = (props: GameBetProps) => {
  const [numberButtons, setNumberButtons] = useState<number[]>([]);
  const activeGame = useSelector((state: GamesState) => state.games.activeGame);

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
                onClick={props.handleNumberButtonClick}
                color={activeGame.color}
                isSelected={props.selectedNumbers.includes(formattedNumber) ? true : false}
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
