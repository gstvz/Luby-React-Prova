import styled from "styled-components";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsTrash, BsCartX } from 'react-icons/bs';

type ActiveGame = {
  color: string;
}

export const Aside = styled.aside`
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 4rem;
  max-height: 50rem;
  width: 34rem;
`

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  max-height: 32rem;
  padding: 2rem 1.5rem 2rem 1.5rem;
`

export const CartTitle = styled.p`
  font-size: 2.4rem;
  margin: 2rem 0;  
`

export const Games = styled.ul`
  overflow-y: auto;
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
  margin: 2rem 0 0;

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
  margin-left: 1.2rem;
`

export const EmptyCartIcon = styled(BsCartX)`
  height: 3rem;  
  margin-right: 1rem;
  width: 3rem;
`