import styled from "styled-components";

type GameButtonProps = {
  isActive: boolean;
};

export const GameButton = styled.button<GameButtonProps>`
  background-color: ${(props) => (props.isActive ? props.color : "#fff")};
  border: 2px solid;
  border-radius: 100px;
  color: ${(props) => (props.isActive ? "#fff" : props.color)};
  font-size: 1.4rem;
  font-style: inherit;
  font-weight: inherit;
  margin-right: 2.5rem;
  max-width: 11rem;
  padding: 0.6rem 1rem;

  &:hover {
    background-color: ${(props) => props.color};
    color: #ffffff;
  }
`;
