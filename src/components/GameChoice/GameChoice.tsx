import React from 'react';
import * as S from './styles';

export const GameChoice = () => {
  return (
    <S.Container>
      <p>Choose a game</p>
      <S.Games>
        <S.GameButton>Game</S.GameButton>
        <S.GameButton>Game</S.GameButton>
        <S.GameButton>Game</S.GameButton>
      </S.Games>
    </S.Container>
  );
};
