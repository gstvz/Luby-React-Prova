import styled from "styled-components";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { BsTrash, BsCartX } from 'react-icons/bs';

type ActiveGame = {
  color: string;
}

type AsideProps = {
  isCart: boolean;
}

export const Aside = styled.aside<AsideProps>`  
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 34rem;

  @media(max-width: 996px) {
    display: none;

    ${props => props.isCart && `
      align-items: center;
      background-color: #F7F7F7;
      display: flex;
      flex-direction: column;
      height: 100vh;
      justify-content: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      z-index: 100;
    `}
  }
`

export const Cart = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  max-height: 45rem;
`

export const CartTitle = styled.p`
  font-size: 2.4rem;
  padding: 2rem;  
`

export const Games = styled.ul`
  height: 20rem;
  max-height: 20rem;
  overflow-y: auto;
  padding: 2rem;
  width: 100%;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    border: 5px solid;
    border-radius: 10rem;
  }

  &::-webkit-scrollbar-track {
    position: absolute;
    right: -3rem;
    top: -50rem;
    background: transparent;
  }
`

export const Game = styled.li`
  align-items: center;  
  display: flex;
  margin-bottom: 1rem;
`

export const DeleteGame = styled.button`
  background: none;
  border: none;
  height: 2.4rem;    
  width: 1.96rem;
`

export const Trash = styled(BsTrash)`
  height: 2rem;
  width: 2rem;
`

export const GameInfo = styled.div<ActiveGame>`
  border-left: 4px solid ${props => props.color};
  border-radius: 4px;
  margin-bottom: 0.6rem;
  margin-left: 1.2rem;
  width: 90%;
`

export const GameNumbers = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0.6rem;
  margin-left: 1.2rem;
  width: 25rem;
`

export const GameData = styled.p<ActiveGame>`
  color: ${props => props.color};
  font-size: 1.6rem;
  margin-left: 1.2rem;

  & span {
    color: #707070;
    font-style: normal;
    font-weight: normal;
    margin-left: 1.4rem;
  }
`

export const CartTotal = styled.p`
  font-size: 2.4rem;
  padding: 2rem;

  & span {
    font-style: normal;
    font-weight: normal;
  }
`

export const SaveButton = styled.button`
  border: none;
  border-radius: 0  0 10px 10px;
  color: #27C383;
  font-size: 3.5rem;
  font-style: italic;
  height: 9.6rem;
  justify-content: center;
  width: 100%;
`

export const ArrowRight = styled(AiOutlineArrowRight)`
  height: 2rem;
  margin-left: 1rem;
  width: 2.4rem;
`

export const EmptyCart = styled.li`
  align-items: center;
  color: red;
  display: flex;
  font-size: 1.6rem;
  margin-top: 7rem;
  margin-left: 1.2rem;
`

export const EmptyCartIcon = styled(BsCartX)`
  height: 3rem;  
  margin-right: 1rem;
  width: 3rem;
`

export const ReturnButton = styled.button`
  align-items: center;
  background: none;  
  border: none;
  color: #707070;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font: inherit;
  font-size: 2.4rem;
  padding: 3rem;
  text-decoration: none;
  text-align: right;
`

export const ArrowLeft = styled(AiOutlineArrowLeft)`
  color: #707070;
  height: 2.4rem;  
  width: 2.4rem;
`