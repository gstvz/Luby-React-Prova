import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userActions } from '../../store/user/user';
import * as S from './styles';

type HeaderProps = {
  isHome?: boolean
}

export const Header = (props: HeaderProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(userActions.logoutUser());
    navigate("/");
  }

  return <S.Container>
    <S.Nav>
      <S.Logo>
        TGL
        <S.LogoBorder />
      </S.Logo>
      <S.Menu>
        <S.MenuItem>
          {!props.isHome ? <S.MenuItemLink to="/">Home</S.MenuItemLink> : ''}          
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuItemLink to="/">Account</S.MenuItemLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuItemLink to="/" onClick={handleLogOut}>
            Log Out
            <S.ArrowRight />
          </S.MenuItemLink>
        </S.MenuItem>
      </S.Menu>
    </S.Nav>
  </S.Container>;
};
