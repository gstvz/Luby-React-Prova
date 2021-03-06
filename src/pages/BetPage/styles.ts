import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  column-gap: 4rem;
  grid-template-columns: 1fr 34rem;
  min-height: calc(100vh - 14rem);
  margin: 0 auto;
  max-width: 120rem;
  padding: 4rem 0;
  width: 75%;

  @media (max-width: 996px) {
    display: flex;
    flex-direction: column;
  }
`;
