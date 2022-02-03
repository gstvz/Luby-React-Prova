import React, { useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleLogOut = () => {
    dispatch(userActions.logoutUser());
    navigate("/");
  }

  const handleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return <S.Container>
    <S.Nav isMenuOpen={isMenuOpen}>
      <S.Logo isMenuOpen={isMenuOpen}>
        TGL
        <S.LogoBorder />
      </S.Logo>
      <S.Menu isMenuOpen={isMenuOpen}>
        <S.MenuItem isMenuOpen={isMenuOpen}>
          {!props.isHome ? <S.MenuItemLink to="/">Home</S.MenuItemLink> : ''}          
        </S.MenuItem>
        <S.MenuItem isMenuOpen={isMenuOpen}>
          <S.MenuItemLink to="/" onClick={handleMobileMenu}>Account</S.MenuItemLink>
        </S.MenuItem>
        <S.MenuItem isMenuOpen={isMenuOpen}>
          <S.MenuItemLink to="/" onClick={handleLogOut}>
            Log Out
            {!isMenuOpen && <S.ArrowRight />}
          </S.MenuItemLink>
        </S.MenuItem>
        <S.MobileMenuButton isMenuOpen={isMenuOpen} onClick={handleMobileMenu}>
          <S.MobileMenuIcon />
        </S.MobileMenuButton>
        <S.CloseMobileMenuButton isMenuOpen={isMenuOpen} onClick={handleMobileMenu}>
          <S.MobileMenuCloseIcon />
        </S.CloseMobileMenuButton>
      </S.Menu>
    </S.Nav>
  </S.Container>;
};
