import styled from "styled-components";

export const NewBet = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 120rem;

  @media (max-width: 996px) {
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: normal;
  margin-bottom: 1rem;
  margin-right: 4.5rem;

  @media (max-width: 996px) {
    text-align: center;
    margin-right: 0;
  }
`;
