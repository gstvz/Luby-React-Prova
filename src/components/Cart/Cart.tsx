import React, { SetStateAction } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { createBet, formatToBRL } from "@helpers";
import { GamesState } from "@types";
import { gamesActions, postBetData } from "@store";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

type CartProps = {
  isCart: boolean;
  setIsCart: React.Dispatch<SetStateAction<boolean>>;
};

export const Cart = (props: CartProps) => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
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

  const handleDeleteGame = async (numbers: string[]) => {
    await MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (!result.isConfirmed) {
        return;
      };

      dispatch(gamesActions.removeFromCart(numbers));
      dispatch(gamesActions.calculateCartTotal());
      Swal.fire(
        'Removed!',
        'The game was removed from the cart.',
        'success'
      );
    });
  };

  const handleSaveBet = () => {
    if (cartTotal < minCart) {
      toast.error(`The cart hasnt reached the minimun value of ${formatToBRL(minCart)}!`, {
        autoClose: 2000,
        draggable: false,
        progress: undefined,
        });
      return;
    }

    const bets = createBet(cartGames);
    dispatch(postBetData(bets));
    props.setIsCart(false);
    navigate("/");
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
