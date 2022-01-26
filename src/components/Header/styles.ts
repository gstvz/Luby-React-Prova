import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';


export const Container = styled.header`
  align-items: center;
  border-bottom: 2px solid #ebebeb;
  display: flex;
  height: 7rem;
  justify-content: center;
  width: 100%;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  max-width: 120rem;
  width: 75%;
`

export const Logo = styled.h1`
  font-size: 4.4rem;
  margin-right: 6rem;
  position: relative;
`

export const LogoBorder = styled.div`
  background-color: #B5C401;
  border-radius: 20px;
  position: absolute;
  height: 0.7rem;
  top: 112%;
  left: -6.5%;
  width: 10rem;
`

export const Menu = styled.ul`
  align-items: center;
  display: flex;
  flex: 1;
`

export const MenuItem = styled.li`
  &:first-child {
    flex: 1;
  }

  &:nth-child(2) {
    margin-right: 4rem;
  }
`

export const MenuItemLink = styled(Link)`
  align-items: center;  
  display: flex;
  font-size: 2rem;
`

export const ArrowRight = styled(AiOutlineArrowRight)`
  height: 2.4rem;  
  margin-left: 1rem;
  width: 2.4rem;
`