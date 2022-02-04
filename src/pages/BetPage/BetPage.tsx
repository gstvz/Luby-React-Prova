import React, { useState } from "react";
import { Header, Footer, NewBet, Cart } from "@components";
import * as S from "./styles";

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
