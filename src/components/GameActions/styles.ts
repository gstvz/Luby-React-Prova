import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  margin-top: 2rem;
  max-width: 67.5rem;

  & button {
    border-radius: 10px;
    font-style: normal;
  }

  @media (max-width: 996px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 996px) {
    margin-bottom: 1rem;
  }
`;

export const GameButton = styled.button`
  background-color: #f7f7f7;
  border: 1px solid #27c383;
  color: #27c383;
  margin-right: 2.5rem;
  padding: 1.5rem 2rem;

  &:hover {
    background-color: #27c383;
    color: #ffffff;
    transition: 0.5s;
  }
`;

export const CartButton = styled.button`
  align-items: center;
  background-color: #27c383;
  border: none;
  color: #ffffff;
  display: flex;
  padding: 1.1rem 2.5rem;
`;

export const CartIcon = styled(AiOutlineShoppingCart)`
  background-color: #27c383;
  height: 2rem;
  margin-right: 2.8rem;
  width: 2rem;
`;
