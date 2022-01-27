import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Description = styled.div`
  font-size: 1.7rem;  
  font-weight: normal;
  max-width: 65rem;

  & p {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const ListItem = styled.li`
  margin-top: 1rem;
  margin-right: 1.5rem;
`

export const NumberButton = styled.button`
  background-color: #ADC0C4;
  border: none;
  border-radius: 50%;
  color: #FFFFFF;
  font-size: 2rem;
  height: 6rem;
  width: 6rem;
`