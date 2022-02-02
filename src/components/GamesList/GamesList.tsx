import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../shared/helpers/formatDate";
import { formatToBRL } from "../../shared/helpers/formatToBRL";
import { padNumbers } from "../../shared/helpers/padNumbers";
import { GamesState, UserState } from "../../shared/types";
import { getGamesData } from "../../store/games/thunk";
import { getUserBets } from "../../store/user/thunk";
import * as S from "./styles";

export const GamesList = () => {
  const dispatch = useDispatch();
  const userBets = useSelector((state: UserState) => state.user.userBets);
  const gameTypes = useSelector((state: GamesState) => state.games.types);

  useEffect(() => {
    dispatch(getGamesData());
    dispatch(getUserBets());
  }, [dispatch]);  
  
  return (
    <S.RecentGamesList>
      {userBets.map(bet => {
        const color = gameTypes.find(game => game.id === bet.type.id)?.color;
        const date = formatDate(bet.created_at!);
        return (
          <S.RecentGamesItem key={bet.id} color={color}>
            <S.RecentGamesItemNumbers>
              {padNumbers(bet.choosen_numbers!)}
            </S.RecentGamesItemNumbers>
            <S.RecentGamesItemDateAndPrice>
              {`${date} - (${formatToBRL(bet.price!)})`}
            </S.RecentGamesItemDateAndPrice>
            <S.RecentGamesItemName color={color}>
              {bet.type.type}
            </S.RecentGamesItemName>
          </S.RecentGamesItem>
        )
      })}
    </S.RecentGamesList>
  );
};
