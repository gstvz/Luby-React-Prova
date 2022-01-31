import React from 'react';
import * as S from './styles';

export const Header = () => {
  return <S.Container>
    <S.Nav>
      <S.Logo>
        TGL
        <S.LogoBorder />
      </S.Logo>
      <S.Menu>
        <S.MenuItem>
          <S.MenuItemLink to="/">Home</S.MenuItemLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuItemLink to="/">Account</S.MenuItemLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuItemLink to="/">
            Log Out
            <S.ArrowRight />
          </S.MenuItemLink>
        </S.MenuItem>
      </S.Menu>
    </S.Nav>
  </S.Container>;
};
