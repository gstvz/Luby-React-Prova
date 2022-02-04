import React, { SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBet, formatToBRL } from "@helpers";
import { GamesState } from "@types";
import { gamesActions } from "../../store/games/games";
import { postBetData } from "../../store/games/thunk";
import * as S from "./styles";

type CartProps = {
  isCart: boolean;
  setIsCart: React.Dispatch<SetStateAction<boolean>>;
};

export const Cart = (props: CartProps) => {
  const dispatch = useDispatch();
  const games = useSelector((state: GamesState) => state.games.types);
  const minCart = useSelector(
    (state: GamesState) => state.games.min_cart_value
  );
  const cartGames = useSelector((state: GamesState) => state.games.bets);
  const cartTotal = useSelector((state: GamesState) => state.games.cartTotal);

  const generateKey = (index: number) => {
    return `${index}_${new Date().getTime() + index}`;
  };

  const handleDeleteGame = (numbers: string[]) => {
    dispatch(gamesActions.removeFromCart(numbers));
    dispatch(gamesActions.calculateCartTotal());
  };

  const handleSaveBet = () => {
    if (cartTotal < minCart) {
      alert(
        `O carrinho não atingiu o valor mínimo de ${formatToBRL(minCart)}!`
      );
      return;
    }

    const bets = createBet(cartGames);
    dispatch(postBetData(bets));
    props.setIsCart(false);
  };

  const handleReturnButton = () => {
    props.setIsCart(false);
  };

  return (
    <S.Aside isCart={props.isCart}>
      {props.isCart && (
        <S.ReturnButton onClick={handleReturnButton}>
          <S.ArrowLeft />
          Close Cart
        </S.ReturnButton>
      )}
      <S.Cart>
        <S.CartTitle>
          <strong>CART</strong>
        </S.CartTitle>
        <S.Games>
          {cartGames.length === 0 ? (
            <S.EmptyCart>
              <S.EmptyCartIcon />
              <span>O carrinho está vazio :(</span>
            </S.EmptyCart>
          ) : (
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
                      <span>{formatToBRL(gameType!.price)}</span>
                    </S.GameData>
                  </S.GameInfo>
                </S.Game>
              );
            })
          )}
        </S.Games>
        <S.CartTotal>
          <strong>CART </strong>
          <span>TOTAL: {formatToBRL(cartTotal)}</span>
        </S.CartTotal>
        <S.SaveButton onClick={handleSaveBet}>
          Save
          <S.ArrowRight />
        </S.SaveButton>
      </S.Cart>
    </S.Aside>
  );
};
