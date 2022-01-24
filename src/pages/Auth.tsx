import React from "react";
import { Footer } from "../components/Footer/Footer";
import * as styled from "./styles";

export const Auth = () => {
  return (
    <styled.Main>
      <styled.MainContent>
        <styled.Container>
          <styled.Title>
            <styled.TopSpan>The Greatest App</styled.TopSpan>
            <styled.CenterSpan>for</styled.CenterSpan>
            <styled.BottomSpan>LOTTERY</styled.BottomSpan>
          </styled.Title>
        </styled.Container>
        <styled.Container>Forms</styled.Container>
      </styled.MainContent>
      <Footer />
    </styled.Main>
  );
};
