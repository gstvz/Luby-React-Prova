import styled from "styled-components";

type NumberButtonProps = {
  isSelected: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 67.5rem;
`;

export const Description = styled.div`
  font-size: 1.7rem;
  font-weight: normal;
  max-width: 67.5rem;

  & p {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 996px) {
    justify-content: center;
  }
`;

export const ListItem = styled.li`
  margin-top: 1rem;
  margin-right: 1.5rem;
`;

export const NumberButton = styled.button<NumberButtonProps>`
  background-color: ${({ isSelected, color }) =>
    isSelected ? color : "#ADC0C4"};
  border: none;
  border-radius: 50%;
  color: #ffffff;
  font-size: 2rem;
  height: 6rem;
  width: 6rem;
`;
