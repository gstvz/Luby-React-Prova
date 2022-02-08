import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 60rem;

  @media (max-width: 996px) {
    justify-content: space-between;
    padding: 1rem;
  }
`;
