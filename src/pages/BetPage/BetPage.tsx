import React, { useState } from "react";
import * as S from "./styles";
import { Header, Footer, NewBet, Cart } from "@components";

export const BetPage = () => {
  const [isCart, setIsCart] = useState<boolean>(false);

  return (
    <>
      <Header />
      <S.Main>
        <NewBet />
        <Cart isCart={isCart} setIsCart={setIsCart} />
      </S.Main>
      <Footer />
    </>
  );
};
