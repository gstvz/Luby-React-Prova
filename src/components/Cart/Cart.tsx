import React from "react";
import { useSelector } from "react-redux";
import { GamesState } from "../../shared/types";
import * as S from "./styles";

export const Cart = () => {
  const games = useSelector((state: GamesState) => state.games.types)
  const cartGames = useSelector((state: GamesState) => state.games.bets);
  const cartTotal = useSelector((state: GamesState) => state.games.cartTotal);

  return (
    <S.Aside>
      <S.Cart>
        <S.CartTitle>
          <strong>CART</strong>
        </S.CartTitle>
        <S.Games>
          {cartGames.map(game => {
            const gameType = games.find(type => type.id === game.gameId);
            return (
              <S.Game key={game.gameId}>
                <S.DeleteGame>
                  <S.Trash />
                </S.DeleteGame>
                <S.GameInfo color={gameType!.color}>
                  <S.GameNumbers>{game.numbers.join(', ')}</S.GameNumbers>
                  <S.GameData color={gameType!.color}>
                    <strong>{gameType!.type}</strong>
                    <span>R${gameType!.price}</span>
                  </S.GameData>
                </S.GameInfo>
              </S.Game>
            )
          })}          
        </S.Games>
        <S.CartTotal>
          <strong>CART </strong>
          <span>TOTAL: R${cartTotal}</span>
        </S.CartTotal>
      </S.Cart>
      <S.SaveButton>
        Save
        <S.ArrowRight />
      </S.SaveButton>
    </S.Aside>
  );
};
