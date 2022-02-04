import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiOutlineArrowRight,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";

type MobileMenuProps = {
  isMenuOpen: boolean;
};

export const Container = styled.header`
  align-items: center;
  border-bottom: 2px solid #ebebeb;
  display: flex;
  height: 7rem;
  justify-content: center;
  width: 100%;
`;

export const Nav = styled.nav<MobileMenuProps>`
  display: flex;
  justify-content: center;
  max-width: 120rem;
  width: 75%;

  @media (max-width: 996px) {
    ${(props) =>
      props.isMenuOpen &&
      `
        align-items: center;
        background-color: #F7F7F7;
        display: ${props.isMenuOpen ? "flex" : "none"};
        flex-direction: column;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        z-index: 100;
      `};
  }
`;

export const Logo = styled.h1<MobileMenuProps>`
  font-size: 4.4rem;
  margin-right: 6rem;
  position: relative;

  @media(max-width: 996px) {
    ${(props) =>
      props.isMenuOpen &&
      `
      margin-right: 0;
    `}
`;

export const LogoBorder = styled.div`
  background-color: #b5c401;
  border-radius: 20px;
  position: absolute;
  height: 0.7rem;
  top: 112%;
  left: -6.5%;
  width: 10rem;
`;

export const Menu = styled.ul<MobileMenuProps>`
  align-items: center;
  display: flex;
  flex: 1;

  @media (max-width: 996px) {
    justify-content: flex-end;

    ${(props) =>
      props.isMenuOpen &&
      `
      flex-direction: column;
      justify-content: center;
    `}
  } ;
`;

export const MenuItem = styled.li<MobileMenuProps>`
  &:first-child {
    flex: 1;
  }

  &:nth-child(2) {
    margin-right: 4rem;
  }

  @media (max-width: 996px) {
    display: none;
    ${(props) =>
      props.isMenuOpen &&
      `
      display: flex;
      padding: 1rem;
      
      &:first-child {
        flex: 0;
      }

      &:nth-child(2) {
        margin: 0;
      }
    `}
  }
`;

export const MenuItemLink = styled(Link)`
  align-items: center;
  display: flex;
  font-size: 2rem;
`;

export const ArrowRight = styled(AiOutlineArrowRight)`
  height: 2.4rem;
  margin-left: 1rem;
  width: 2.4rem;
`;

export const CartButton = styled.button<MobileMenuProps>`
  display: none;

  @media (max-width: 996px) {
    ${(props) =>
      props.isMenuOpen
        ? `
      display: none;
    `
        : `
      background: none;
      border: none;
      cursor: pointer;
      display: block;
      margin-right: 1rem;    
    `}
  }
`;

export const CartIcon = styled(AiOutlineShoppingCart)`
  color: #707070;
  height: 2.4rem;
  width: 2.4rem;
`;

export const MobileMenuButton = styled.button<MobileMenuProps>`
  background: none;
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: 996px) {
    display: ${(props) => (props.isMenuOpen ? "none" : "flex")};
    justify-content: flex-end;
  }
`;

export const MobileMenuIcon = styled(AiOutlineMenu)`
  color: #707070;
  height: 2.4rem;
  width: 2.4rem;
`;

export const CloseMobileMenuButton = styled.button<MobileMenuProps>`
  background: none;
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: 996px) {
    display: ${(props) => props.isMenuOpen && "block"};
  }
`;

export const MobileMenuCloseIcon = styled(AiOutlineClose)`
  color: #707070;
  height: 2.4rem;
  width: 2.4rem;
`;
