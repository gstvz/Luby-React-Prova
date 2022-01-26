import React from 'react';
import * as S from './styles';

export const GameActions = () => {
  return (
    <S.Container>
      <S.ButtonsContainer>
        <S.GameButton>Complete game</S.GameButton>
        <S.GameButton>Clear game</S.GameButton>
      </S.ButtonsContainer>
      <S.CartButton>
        <S.CartIcon />
        Add to cart
      </S.CartButton>
    </S.Container>
  );
};
