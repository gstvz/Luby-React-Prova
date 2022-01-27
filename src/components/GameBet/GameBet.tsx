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
        <S.ListItem>
          <S.NumberButton>02</S.NumberButton>
        </S.ListItem>
        <S.ListItem>
          <S.NumberButton>03</S.NumberButton>
        </S.ListItem>
        <S.ListItem>
          <S.NumberButton>04</S.NumberButton>
        </S.ListItem>
        <S.ListItem>
          <S.NumberButton>05</S.NumberButton>
        </S.ListItem>
        <S.ListItem>
          <S.NumberButton>06</S.NumberButton>
        </S.ListItem>
        <S.ListItem>
          <S.NumberButton>07</S.NumberButton>
        </S.ListItem>
        <S.ListItem>
          <S.NumberButton>08</S.NumberButton>
        </S.ListItem>
        <S.ListItem>
          <S.NumberButton>09</S.NumberButton>
        </S.ListItem>
        <S.ListItem>
          <S.NumberButton>10</S.NumberButton>
        </S.ListItem>
      </S.List>
    </S.Container>
  );
};
