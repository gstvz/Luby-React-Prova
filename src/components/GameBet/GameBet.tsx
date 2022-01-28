import React, { useEffect, useState } from "react";
import * as S from "./styles";

type GameBetProps = {
  description: string;
  range: number;
}

export const GameBet = (props: GameBetProps) => {
  const [numberButtons, setNumberButtons] = useState<number[]>([]);

  useEffect(() => {
    const createNumberButtonsArray = () => {
      const numbersArray = [];      

      for (let number = 1; number <= props.range; number++) {
        numbersArray.push(number);
      };

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
        <p>         
          {props.description}
        </p>
      </S.Description>
      <S.List>
        {numberButtons.map((number) => {
          const formattedNumber = number < 10 ? `0${number}` : number;

          return (
            <S.ListItem key={number}>
              <S.NumberButton>{formattedNumber}</S.NumberButton>
            </S.ListItem>
          )
        })}
      </S.List>
    </S.Container>
  );
};
