import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCartX } from 'react-icons/bs';

export const RecentGames = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const RecentGamesTitle = styled.h2`
  font-size: 2.4rem;
  margin-right: 4.5rem;
`

export const RecentGamesFilter = styled.div`
  align-items: center;
  display: flex;  
`

export const RecentGamesFilterText = styled.p`
  font-size: 1.7rem;
  font-weight: normal;
  margin-right: 1.5rem;
`

export const NewBet = styled(Link)`
  align-items: center;
  color: #B5C401;
  display: flex;
  justify-content: center;
  font: inherit;
  font-size: 2.4rem;
  text-decoration: none;
  text-align: right;
`

export const ArrowRight = styled(AiOutlineArrowRight)`
  height: 2.4rem;  
  margin-left: 1rem;
  width: 2.4rem;
`

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

export const EmptyGames = styled.p`
  color: red;
  font-size: 1.7rem;
  font-weight: normal;
  margin-right: 1.5rem;
`

export const EmptyCartIcon = styled(BsCartX)`
  height: 2.4rem;  
  margin-right: 1rem;
  width: 2.4rem;
`