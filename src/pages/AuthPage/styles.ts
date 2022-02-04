import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MainContent = styled.section`
  display: flex;
  height: 100%;
  min-height: calc(100vh - 8rem);

  @media (max-width: 996px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-style: italic;
  height: 100%;
  justify-content: center;
  margin-left: 15rem;

  @media (max-width: 996px) {
    margin-left: 0;
  }
`;
export const TopSpan = styled.span`
  font-size: 6.5rem;
  max-width: 24.4rem;
  text-align: center;
  width: 100%;
`;
export const CenterSpan = styled.span`
  background-color: #b5c401;
  border-radius: 100px;
  color: #ffffff;
  display: flex;
  font-size: 2.2rem;
  justify-content: center;
  align-items: center;
  height: 3.9rem;
  margin: 3rem 0;
  max-width: 14.4rem;
  width: 100%;
`;
export const BottomSpan = styled.span`
  display: flex;
  font-size: 8.3rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
