import React from "react";
import * as S from "./styles";

export const Cart = () => {
  return (
    <S.Aside>
      <S.Cart>
        <S.CartTitle>
          <strong>CART</strong>
        </S.CartTitle>
        <S.Games>
          <S.Game>
            <S.DeleteGame>
              <S.Trash />
            </S.DeleteGame>
            <S.GameInfo>
              <S.GameNumbers>01, 02,04,05,06,07,09,15,17,20,21, 22,23,24,25</S.GameNumbers>
              <S.GameData>
                <strong>Lotofácil</strong>
                <span>R$ 2,50</span>
              </S.GameData>
            </S.GameInfo>
          </S.Game>
          <S.Game>
            <S.DeleteGame>
              <S.Trash />
            </S.DeleteGame>
            <S.GameInfo>
              <S.GameNumbers>01, 02,04,05,06,07,09,15,17,20,21, 22,23,24,25</S.GameNumbers>
              <S.GameData>
                <strong>Lotofácil</strong>
                <span>R$ 2,50</span>
              </S.GameData>
            </S.GameInfo>
          </S.Game>
          <S.Game>
            <S.DeleteGame>
              <S.Trash />
            </S.DeleteGame>
            <S.GameInfo>
              <S.GameNumbers>01, 02,04,05,06,07,09,15,17,20,21, 22,23,24,25</S.GameNumbers>
              <S.GameData>
                <strong>Lotofácil</strong>
                <span>R$ 2,50</span>
              </S.GameData>
            </S.GameInfo>
          </S.Game>
          <S.Game>
            <S.DeleteGame>
              <S.Trash />
            </S.DeleteGame>
            <S.GameInfo>
              <S.GameNumbers>01, 02,04,05,06,07,09,15,17,20,21, 22,23,24,25</S.GameNumbers>
              <S.GameData>
                <strong>Lotofácil</strong>
                <span>R$ 2,50</span>
              </S.GameData>
            </S.GameInfo>
          </S.Game>
        </S.Games>
        <S.CartTotal>
          <strong>CART </strong>
          <span>TOTAL: R$2,50</span>
        </S.CartTotal>
      </S.Cart>
      <S.SaveButton>
        Save
        <S.ArrowRight />
      </S.SaveButton>
    </S.Aside>
  );
};
