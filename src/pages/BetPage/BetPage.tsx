import React, { useState } from "react";
import { Cart } from "../../components/Cart/Cart";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { NewBet } from "../../components/NewBet/NewBet";
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
