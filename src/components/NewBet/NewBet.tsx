import React from "react";
import { GameActions } from "../GameActions/GameActions";
import { GameChoice } from "../GameChoice/GameChoice";
import { GameDescription } from "../GameDescription/GameDescription";
import { GameNumbers } from "../GameNumbers/GameNumbers";
import * as S from "./styles";

export const NewBet = () => {
  return (
    <S.NewBet>
      <S.Title>
        <strong>NEW BET</strong> FOR MEGASENA
      </S.Title>
      <GameChoice />
      <GameDescription />
      <GameNumbers />
      <GameActions />
    </S.NewBet>
  );
};
