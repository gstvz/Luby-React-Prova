import styled from "styled-components";

type GameButtonProps = {
  isActive: boolean;
};

export const GameButton = styled.button<GameButtonProps>`
  background-color: ${({ isActive, color }) => (isActive ? color : "#fff")};
  border: 2px solid;
  border-radius: 100px;
  color: ${({ isActive, color }) => (isActive ? "#fff" : color)};
  font-size: 1.4rem;
  font-style: inherit;
  font-weight: inherit;
  margin: 0.5rem;

  max-width: 11rem;
  padding: 0.6rem 1rem;

  &:hover {
    background-color: ${({ color }) => color};
    color: #ffffff;
  }
`;
