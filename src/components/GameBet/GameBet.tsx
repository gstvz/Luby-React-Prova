import React from "react";
import * as S from "./styles";

export const GameBet = () => {
  return (
    <S.Container>
      <S.Description>
        <p>
          <strong>Fill your bet</strong>
        </p>
        <p>
          Mark as many numbers as you want up to a maximum of 50. Win by hitting
          15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.
        </p>
      </S.Description>
      <S.List>
        <S.ListItem>
          <S.NumberButton>01</S.NumberButton>
        </S.ListItem>
      </S.List>
    </S.Container>
  );
};
