import React from "react";
import { formatDate, formatToBRL, padNumbers } from "@helpers";
import { GameData, UserBets } from "../../shared/types";
import * as S from "./styles";

type GamesListProps = {
  games: GameData[];
  activeGame: GameData;
  userBets: UserBets;
};

export const GamesList = (props: GamesListProps) => {
  return (
    <S.RecentGamesList>
      {props.userBets.map((bet) => {
        const color = props.games.find(
          (game) => game.id === bet.type.id
        )?.color;
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
        );
      })}
    </S.RecentGamesList>
  );
};
