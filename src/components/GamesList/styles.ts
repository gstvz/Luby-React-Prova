import styled from "styled-components";

export const RecentGamesList = styled.ul`
  align-self: center;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-width: 60rem;

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
`;

export const RecentGamesItem = styled.li`
  display: flex;
  flex-direction: column;
  border-left: 6px solid ${({ color }) => color};
  border-radius: 4px;
  margin: 1rem;
`;

export const RecentGamesItemNumbers = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

export const RecentGamesItemDateAndPrice = styled.p`
  font-size: 1.7rem;
  font-weight: normal;
  margin-bottom: 1rem;
  margin-left: 1rem;
  width: 20rem;
`;

export const RecentGamesItemName = styled.p`
  color: ${({ color }) => color};
  font-size: 2rem;
  margin-left: 1rem;
  width: 24rem;
`;
