import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBet } from "../../shared/helpers/createBet";
import { GamesState } from "../../shared/types";
import { gamesActions } from "../../store/games/games";
import { postBetData } from "../../store/games/thunk";
import * as S from "./styles";

export const Cart = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: GamesState) => state.games.types);
  const cartGames = useSelector((state: GamesState) => state.games.bets);
  const cartTotal = useSelector((state: GamesState) => state.games.cartTotal);

  const generateKey = (index: number) => {
    return `${index}_${new Date().getTime() + index}`
  }

  const handleDeleteGame = (numbers: string[]) => {
    dispatch(gamesActions.removeFromCart(numbers));
  };

  const handleSaveBet = () => {
    const bets = createBet(cartGames);
    dispatch(postBetData(bets));
  }

  return (
    <S.Aside>
      <S.Cart>
        <S.CartTitle>
          <strong>CART</strong>
        </S.CartTitle>
        <S.Games>
          {cartGames.map((game, index) => {
            const gameType = games.find((type) => type.id === game.game_id);
            const uniqueId = generateKey(index);
            return (
              <S.Game key={uniqueId} id={uniqueId}>
                <S.DeleteGame onClick={() => handleDeleteGame(game.numbers)}>
                  <S.Trash />
                </S.DeleteGame>
                <S.GameInfo color={gameType!.color}>
                  <S.GameNumbers>{game.numbers.join(", ")}</S.GameNumbers>
                  <S.GameData color={gameType!.color}>
                    <strong>{gameType!.type}</strong>
                    <span>
                      {gameType!.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </S.GameData>
                </S.GameInfo>
              </S.Game>
            );
          })}
        </S.Games>
        <S.CartTotal>
          <strong>CART </strong>
          <span>
            TOTAL:{" "}
            {cartTotal.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </S.CartTotal>
      </S.Cart>
      <S.SaveButton onClick={handleSaveBet}>
        Save
        <S.ArrowRight />
      </S.SaveButton>
    </S.Aside>
  );
};
