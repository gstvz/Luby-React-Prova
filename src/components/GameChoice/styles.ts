import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }

  @media(max-width: 996px) {
      text-align: center;     
  }
`;

export const Games = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media(max-width: 996px) {
    justify-content: center;
  }
`;
