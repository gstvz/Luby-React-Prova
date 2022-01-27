import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }
`;

export const Games = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const GameButton = styled.button`
  background-color: #ffffff;
  border: 2px solid;
  border-radius: 100px;
  color: ${(props) => props.color};
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
