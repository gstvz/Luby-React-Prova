import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "@store";
import { Cart } from "@components";

type HeaderProps = {
  isHome?: boolean;
  isAccount?: boolean;
};

export const Header = ({ isHome, isAccount }: HeaderProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCart, setIsCart] = useState<boolean>(false);
  const [isGame, setIsGame] = useState<boolean>(false);

  const handleLogOut = () => {
    dispatch(userActions.logoutUser());
    navigate("/");
  };

  const handleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartButton = () => {
    setIsCart(true);
  };

  const handleGameButton = () => {
    setIsGame(true);
  };

  useEffect(() => {
    if (isGame) {
      navigate("/bet");
    }
  }, [isGame, navigate]);

  return (
    <S.Container>
      <S.Nav isMenuOpen={isMenuOpen}>
        <S.Logo isMenuOpen={isMenuOpen}>
          TGL
          <S.LogoBorder />
        </S.Logo>
        <S.Menu isMenuOpen={isMenuOpen}>
          <S.MenuItem isMenuOpen={isMenuOpen}>
            {!isHome ? <S.MenuItemLink to="/">Home</S.MenuItemLink> : null}
          </S.MenuItem>
          <S.MenuItem isMenuOpen={isMenuOpen}>
            {!isAccount ? (
              <S.MenuItemLink to="/account" onClick={handleMobileMenu}>
                Account
              </S.MenuItemLink>
            ) : null}
          </S.MenuItem>
          <S.MenuItem isMenuOpen={isMenuOpen}>
            <S.MenuItemLink to="/" onClick={handleLogOut}>
              Log Out
              {!isMenuOpen && <S.ArrowRight />}
            </S.MenuItemLink>
          </S.MenuItem>
          {!isHome && !isAccount ? (
            <S.WildButton isMenuOpen={isMenuOpen} onClick={handleCartButton}>
              <S.CartIcon />
            </S.WildButton>
          ) : isHome && !isAccount ? (
            <S.WildButton isMenuOpen={isMenuOpen} onClick={handleGameButton}>
              <S.GameIcon />
            </S.WildButton>
          ) : null}
          <S.MobileMenuButton
            isMenuOpen={isMenuOpen}
            onClick={handleMobileMenu}
          >
            <S.MobileMenuIcon />
          </S.MobileMenuButton>
          <S.CloseMobileMenuButton
            isMenuOpen={isMenuOpen}
            onClick={handleMobileMenu}
          >
            <S.MobileMenuCloseIcon />
          </S.CloseMobileMenuButton>
        </S.Menu>
      </S.Nav>
      {isCart && <Cart isCart={isCart} setIsCart={setIsCart} />}
    </S.Container>
  );
};
