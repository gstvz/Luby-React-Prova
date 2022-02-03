import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBet } from "../../shared/helpers/createBet";
import { formatToBRL } from "../../shared/helpers/formatToBRL";
import { GamesState } from "../../shared/types";
import { gamesActions } from "../../store/games/games";
import { postBetData } from "../../store/games/thunk";
import * as S from "./styles";

export const Cart = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: GamesState) => state.games.types);
  const minCart = useSelector((state: GamesState) => state.games.min_cart_value);
  const cartGames = useSelector((state: GamesState) => state.games.bets);
  const cartTotal = useSelector((state: GamesState) => state.games.cartTotal);

  const generateKey = (index: number) => {
    return `${index}_${new Date().getTime() + index}`
  }

  const handleDeleteGame = (numbers: string[]) => {
    dispatch(gamesActions.removeFromCart(numbers));
  };

  const handleSaveBet = () => {
    if(cartTotal < minCart) {
      alert(`O carrinho não atingiu o valor mínimo de ${formatToBRL(minCart)}!`);
      return;
    };

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
          {cartGames.length === 0 ?            
            <S.EmptyCart>     
              <S.EmptyCartIcon />         
              <span>O carrinho está vazio :(</span>
            </S.EmptyCart> :
            cartGames.map((game, index) => {
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
                        {formatToBRL(gameType!.price)}
                      </span>
                    </S.GameData>
                  </S.GameInfo>
                </S.Game>
              );
            })
          }
        </S.Games>
        <S.CartTotal>
          <strong>CART </strong>
          <span>
            TOTAL:{" "}
            {formatToBRL(cartTotal)}
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
