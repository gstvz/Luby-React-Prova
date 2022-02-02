import styled from "styled-components";

export const RecentGamesList = styled.ul`
  display: flex;
  flex-direction: column;
`

export const RecentGamesItem = styled.li`
  display: flex;
  flex-direction: column;
  border-left: 6px solid ${props => props.color};
  border-radius: 4px;
  margin-bottom: 3rem;
`

export const RecentGamesItemNumbers = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
`

export const RecentGamesItemDateAndPrice = styled.p`
  font-size: 1.7rem;
  font-weight: normal;
  margin-bottom: 1rem;
  margin-left: 1rem;
  width: 20rem;
`

export const RecentGamesItemName = styled.p`
  color: ${props => props.color};
  font-size: 2rem;
  margin-left: 1rem;
  width: 24rem;
`