import React from 'react';
import { GameButton } from '../GameButton/GameButton';
import * as S from './styles';

export const GameChoice = () => {
  return (
    <S.Container>
      <p>Choose a game</p>
      <S.Games>
        <GameButton></GameButton>
        <GameButton></GameButton>
        <GameButton></GameButton>
      </S.Games>
    </S.Container>
  );
};
